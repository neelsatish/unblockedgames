// Pop Quiz server: rooms, matchmaking and sockets over the socket.io namespace "/pop".
// The match rules live in ./engine.js. This file owns identity, rooms and the single wake-up timer per room.
// Node runs each socket event to completion before the next, so every room's events are naturally serialized.
const crypto = require('crypto');
const { performance } = require('perf_hooks');
const P = require('./engine');

const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; // no I or O
const AVATARS = ['owl', 'frog', 'robot', 'cat', 'ghost', 'slime', 'rocket', 'axolotl'];
const BRACKETS = { '1v1': [2, 2], '3s': [3, 3], '4-6': [4, 6], '8-10': [8, 10] };
const RECONNECT_MS = 30000;
const QUICK_START_MS = 10000; // quick-play rooms start on their own once enough players are ready
const QUICK_FULL_START_MS = 3000;
const JOINS_PER_MINUTE = 12;
const BLOCKED_NAMES = /^(system|server|admin|moderator|host|pop ?quiz)$/i;
const RUDE = /(fuck|shit|cunt|nigg|fag|bitch|whore|slut|rape|nazi|retard)/i; // shortcut: tiny list, swap for a proper filter if rooms go public widely

const now = () => performance.now(); // monotonic: changing the system clock cannot stretch a fuse
const rooms = new Map();

function safe(fn) {
  return (...args) => {
    try {
      return fn(...args);
    } catch (err) {
      console.error('popquiz handler error:', err);
    }
  };
}
const obj = (v) => (v && typeof v === 'object' ? v : {});
const reply = (ack) => (typeof ack === 'function' ? ack : () => {});

function cleanName(n) {
  const s = String(typeof n === 'string' ? n : '')
    .normalize('NFC')
    .replace(/[\p{C}]/gu, '') // control and invisible formatting characters
    .replace(/[<>]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  const name = [...s].slice(0, 20).join('');
  if (!name || BLOCKED_NAMES.test(name) || RUDE.test(name.replace(/[^a-z]/gi, ''))) return 'Player';
  return name;
}
const cleanToken = (t) => (typeof t === 'string' && /^[\w-]{16,64}$/.test(t) ? t : null);

function newCode() {
  let c;
  do c = Array.from({ length: 4 }, () => CODE_CHARS[crypto.randomInt(CODE_CHARS.length)]).join('');
  while (rooms.has(c));
  return c;
}

module.exports = function attach(io, opts = {}) {
  const nsp = io.of('/pop');
  // Tests may shorten timings and supply their own questions. Production uses the Rare Finds bank.
  const overrides = opts.settingsOverride || {};
  const questions = opts.questions || (() => [...require('../rarefinds/server').internals.qById.values()]);

  function makeRoom({ visibility, quick }) {
    const room = {
      id: crypto.randomUUID(), code: newCode(), visibility, quick: quick || null, hostId: null,
      settings: { ...P.DEFAULTS, ...overrides, visibility, maxPlayers: quick ? BRACKETS[quick][1] : P.DEFAULTS.maxPlayers },
      members: new Map(), match: null, timer: null, seq: 0, startAt: null, banned: new Set(), matches: 0,
    };
    rooms.set(room.code, room);
    return room;
  }

  const inMatch = (room, id) => !!room.match && room.match.players.some((p) => p.id === id);
  const matchRunning = (room) => !!room.match && room.match.phase !== 'complete';
  const readyConnected = (room) => [...room.members.values()].filter((m) => m.ready && m.connected);
  const minToStart = (room) => (room.quick ? BRACKETS[room.quick][0] : Math.max(2, room.settings.minimumPlayers));

  function roomView(room, member) {
    const t = now();
    return {
      code: room.code, visibility: room.visibility, quick: room.quick, hostId: room.hostId, you: member.id,
      settings: room.quick ? null : { ...room.settings },
      maxPlayers: room.settings.maxPlayers,
      minToStart: minToStart(room),
      members: [...room.members.values()].map((m) => ({
        id: m.id, name: m.name, avatar: m.avatar, ready: m.ready, connected: m.connected, autoJoin: m.autoJoin,
        inMatch: inMatch(room, m.id),
      })),
      startsInMs: room.startAt ? Math.max(0, Math.round(room.startAt - t)) : null,
      match: room.match ? P.publicView(room.match, t) : null,
    };
  }

  function broadcast(room, events = []) {
    room.seq++;
    for (const m of room.members.values()) {
      if (m.socketId) nsp.to(m.socketId).emit('update', { seq: room.seq, events, room: roomView(room, m) });
    }
  }

  // One timer per room, always pointing at the next moment something is due. A stale timer is harmless:
  // advance() only acts on what is actually due at the current time.
  function arm(room) {
    clearTimeout(room.timer);
    room.timer = null;
    let at = room.match ? P.nextWakeAt(room.match) : null;
    if (room.startAt && !matchRunning(room)) at = at === null ? room.startAt : Math.min(at, room.startAt);
    if (at === null) return;
    room.timer = setTimeout(safe(() => tick(room)), Math.max(0, at - now()) + 2);
  }

  function tick(room) {
    if (!rooms.has(room.code)) return;
    if (room.startAt && !matchRunning(room) && now() >= room.startAt) {
      room.startAt = null;
      if (readyConnected(room).length >= minToStart(room)) return startMatch(room);
    }
    if (room.match) P.advance(room.match, now());
    settle(room);
  }

  // After any change to a match: collect its events, react to the end of a match, tell everyone, re-arm.
  function settle(room) {
    const events = room.match ? P.drainEvents(room.match) : [];
    if (events.some((e) => e.type === 'match_complete')) onMatchComplete(room);
    broadcast(room, events);
    arm(room);
  }

  function onMatchComplete(room) {
    const m = room.match;
    console.log('POPQUIZ_MATCH ' + JSON.stringify({ room: room.code, match: m.id, players: m.players.length, winner: m.winnerId, ms: Math.round(m.completedAt - m.startedAt) }));
    for (const mem of room.members.values()) mem.ready = mem.autoJoin && mem.connected;
    checkQuickStart(room);
  }

  function startMatch(room) {
    const players = readyConnected(room).slice(0, room.settings.maxPlayers);
    if (players.length < minToStart(room)) return false;
    const qs = typeof questions === 'function' ? questions() : questions;
    if (!qs.length) return false;
    room.startAt = null;
    room.matches++;
    room.match = P.createMatch({
      id: `${room.code}-${room.matches}-${crypto.randomBytes(3).toString('hex')}`,
      players: players.map((m) => ({ id: m.id, name: m.name, avatar: m.avatar })),
      settings: room.settings, questions: qs, now: now(),
    });
    settle(room);
    return true;
  }

  // Quick-play rooms have no host: they count down once enough real players are ready.
  function checkQuickStart(room) {
    if (!room.quick || matchRunning(room)) return;
    const ready = readyConnected(room).length;
    const [min, max] = BRACKETS[room.quick];
    if (ready < min) room.startAt = null;
    else if (ready >= max) room.startAt = Math.min(room.startAt ?? Infinity, now() + QUICK_FULL_START_MS);
    else if (!room.startAt) room.startAt = now() + QUICK_START_MS;
  }

  function addMember(socket, room, payload, token) {
    const { name, avatar } = obj(payload);
    const m = {
      id: crypto.randomUUID(), token, name: cleanName(name), avatar: AVATARS.includes(avatar) ? avatar : AVATARS[room.members.size % AVATARS.length],
      socketId: socket.id, connected: true, ready: true, autoJoin: true, leaveTimer: null, reports: 0, typingAt: 0,
    };
    room.members.set(m.id, m);
    if (!room.quick && !room.hostId) room.hostId = m.id;
    bindSocket(socket, room, m);
    return m;
  }

  function bindSocket(socket, room, m) {
    const stale = m.socketId && m.socketId !== socket.id ? nsp.sockets.get(m.socketId) : null;
    if (stale) {
      stale.data.code = null;
      stale.data.pid = null;
      stale.disconnect(true);
    }
    clearTimeout(m.leaveTimer);
    m.leaveTimer = null;
    m.socketId = socket.id;
    m.connected = true;
    socket.data.code = room.code;
    socket.data.pid = m.id;
    if (room.match) P.setConnected(room.match, m.id, true);
  }

  function removeMember(room, id, why = 'left') {
    const m = room.members.get(id);
    if (!m) return;
    clearTimeout(m.leaveTimer);
    room.members.delete(id);
    const s = m.socketId && nsp.sockets.get(m.socketId);
    if (s) {
      s.data.code = null;
      s.data.pid = null;
    }
    if (!room.members.size) return closeRoom(room);
    if (room.hostId === id) {
      const next = [...room.members.values()].find((x) => x.connected) || room.members.values().next().value;
      room.hostId = room.quick ? null : next.id;
    }
    if (matchRunning(room) && inMatch(room, id)) P.forfeit(room.match, id, now());
    nsp.to(room.code).emit('note', why === 'kicked' ? `${m.name} was removed by the host` : `${m.name} left`);
    checkQuickStart(room);
    settle(room);
  }

  function closeRoom(room) {
    clearTimeout(room.timer);
    rooms.delete(room.code);
  }

  function joinRoom(socket, room, payload, ack) {
    const token = cleanToken(obj(payload).token);
    if (!token) return ack({ ok: false, error: 'bad_request' });
    if (room.banned.has(token)) return ack({ ok: false, error: 'removed' });
    // Same browser tab coming back (refresh, dropped Wi-Fi): it reclaims its seat, hearts and turn.
    const existing = [...room.members.values()].find((x) => x.token === token);
    if (existing) {
      bindSocket(socket, room, existing);
      socket.join(room.code);
      ack({ ok: true, code: room.code, resumed: true });
      return settle(room);
    }
    if (room.members.size >= room.settings.maxPlayers) return ack({ ok: false, error: 'full' });
    const m = addMember(socket, room, payload, token);
    socket.join(room.code);
    ack({ ok: true, code: room.code, spectating: matchRunning(room) });
    nsp.to(room.code).emit('note', `${m.name} joined${matchRunning(room) ? ' (watching until the next game)' : ''}`);
    checkQuickStart(room);
    settle(room);
  }

  nsp.on('connection', safe((socket) => {
    const ctx = () => {
      const room = rooms.get(socket.data.code);
      const me = room && room.members.get(socket.data.pid);
      return me && me.socketId === socket.id ? { room, me } : {};
    };
    const on = (ev, fn) => socket.on(ev, safe(fn));
    let joins = [];
    const joinAllowed = () => {
      const t = Date.now();
      joins = joins.filter((x) => t - x < 60000);
      if (joins.length >= JOINS_PER_MINUTE) return false;
      joins.push(t);
      return true;
    };

    on('create_room', (payload, ack) => {
      const done = reply(ack);
      if (ctx().room) return done({ ok: false, error: 'already_in_room' });
      if (!cleanToken(obj(payload).token)) return done({ ok: false, error: 'bad_request' });
      if (!joinAllowed()) return done({ ok: false, error: 'slow_down' });
      const visibility = obj(payload).visibility === 'PUBLIC' ? 'PUBLIC' : 'PRIVATE'; // private unless clearly chosen
      joinRoom(socket, makeRoom({ visibility }), payload, done);
    });

    on('join_room', (payload, ack) => {
      const done = reply(ack);
      if (ctx().room) return done({ ok: false, error: 'already_in_room' });
      const code = String(obj(payload).code || '').trim().toUpperCase();
      if (!/^[A-Z]{4}$/.test(code)) return done({ ok: false, error: 'invalid_code' });
      if (!joinAllowed()) return done({ ok: false, error: 'slow_down' });
      const room = rooms.get(code);
      if (!room) return done({ ok: false, error: 'not_found' });
      joinRoom(socket, room, payload, done);
    });

    on('quick_play', (payload, ack) => {
      const done = reply(ack);
      if (ctx().room) return done({ ok: false, error: 'already_in_room' });
      const bracket = BRACKETS[obj(payload).bracket] ? obj(payload).bracket : '4-6';
      if (!joinAllowed()) return done({ ok: false, error: 'slow_down' });
      const open = [...rooms.values()].find((r) => r.quick === bracket && !matchRunning(r) && r.members.size < r.settings.maxPlayers);
      joinRoom(socket, open || makeRoom({ visibility: 'PUBLIC', quick: bracket }), payload, done);
    });

    on('list_rooms', (_, ack) => {
      if (typeof ack !== 'function') return;
      ack(
        [...rooms.values()]
          .filter((r) => r.visibility === 'PUBLIC' && r.members.size)
          .map((r) => ({
            code: r.code, host: r.hostId ? r.members.get(r.hostId)?.name || '' : '', quick: r.quick,
            players: r.members.size, max: r.settings.maxPlayers, status: matchRunning(r) ? 'Playing' : 'Waiting',
          }))
          .sort((a, b) => (a.status === b.status ? b.players - a.players : a.status === 'Waiting' ? -1 : 1))
          .slice(0, 50),
      );
    });

    on('leave_room', () => {
      const { room, me } = ctx();
      socket.leave(socket.data.code || '');
      if (room) removeMember(room, me.id);
    });

    on('update_settings', (payload, ack) => {
      const done = reply(ack);
      const { room, me } = ctx();
      if (!room || room.quick || room.hostId !== me.id) return done({ ok: false, errors: ['Only the host can change the rules'] });
      if (matchRunning(room)) return done({ ok: false, errors: ['Rules can change after this game ends'] });
      const { settings, errors } = P.cleanSettings(payload, room.settings, room.members.size);
      if (errors.length) return done({ ok: false, errors });
      room.settings = { ...settings, ...overrides };
      room.visibility = settings.visibility;
      done({ ok: true });
      settle(room);
    });

    on('set_ready', (ready) => {
      const { room, me } = ctx();
      if (!room) return;
      me.ready = !!ready;
      checkQuickStart(room);
      settle(room);
    });

    on('set_auto_join', (v) => {
      const { room, me } = ctx();
      if (!room) return;
      me.autoJoin = !!v;
      settle(room);
    });

    on('set_profile', (payload) => {
      const { room, me } = ctx();
      if (!room || inMatch(room, me.id)) return;
      const { name, avatar } = obj(payload);
      if (name !== undefined) me.name = cleanName(name);
      if (AVATARS.includes(avatar)) me.avatar = avatar;
      settle(room);
    });

    on('start_match', (_, ack) => {
      const done = reply(ack);
      const { room, me } = ctx();
      if (!room || room.quick || room.hostId !== me.id) return done({ ok: false, error: 'not_host' });
      if (matchRunning(room)) return done({ ok: false, error: 'running' });
      if (readyConnected(room).length < minToStart(room)) return done({ ok: false, error: 'not_enough_players' });
      done({ ok: startMatch(room) });
    });

    on('kick', (pid) => {
      const { room, me } = ctx();
      if (!room || room.quick || room.hostId !== me.id || pid === me.id || !room.members.has(pid)) return;
      const target = room.members.get(pid);
      room.banned.add(target.token);
      const s = target.socketId && nsp.sockets.get(target.socketId);
      if (s) {
        s.emit('kicked');
        s.leave(room.code);
      }
      removeMember(room, pid, 'kicked');
    });

    on('submit_answer', (payload, ack) => {
      const done = reply(ack);
      const { room, me } = ctx();
      if (!room || !room.match) return done({ status: 'closed' });
      const r = P.submitAnswer(room.match, me.id, payload, now()); // `now` is captured on arrival, before anything else runs
      done(r);
      settle(room);
    });

    on('use_emergency_pass', (payload, ack) => {
      const done = reply(ack);
      const { room, me } = ctx();
      if (!room || !room.match) return done({ status: 'closed' });
      done(P.emergencyPass(room.match, me.id, payload, now()));
      settle(room);
    });

    // Cosmetic only: "the holder is typing". Never carries the text, never validated.
    on('typing', () => {
      const { room, me } = ctx();
      if (!room || !matchRunning(room)) return;
      const view = room.match;
      if (view.phase !== 'active' || view.players[view.holderSeat]?.id !== me.id) return;
      const t = Date.now();
      if (t - me.typingAt < 400) return;
      me.typingAt = t;
      socket.to(room.code).volatile.emit('typing', { playerId: me.id });
    });

    on('request_snapshot', () => {
      const { room, me } = ctx();
      if (room) socket.emit('update', { seq: room.seq, events: [], room: roomView(room, me) });
    });

    // "This should have counted": logged for the content review, like Rare Finds.
    on('report_answer', (payload, ack) => {
      const done = reply(ack);
      const { room, me } = ctx();
      const { questionId, text, note } = obj(payload);
      if (!room || typeof questionId !== 'string' || ++me.reports > 10) return done(false);
      console.log('POPQUIZ_REPORT ' + JSON.stringify({ at: new Date().toISOString(), match: room.match?.id, question: questionId.slice(0, 60), answer: String(text ?? '').slice(0, 80), note: String(note ?? '').slice(0, 200) }));
      done(true);
    });

    on('disconnect', () => {
      const { room, me } = ctx();
      if (!room) return;
      me.connected = false;
      if (room.match) P.setConnected(room.match, me.id, false);
      // The fuse is not paused for anyone; a dropped player keeps their seat for a while and loses it after that.
      me.leaveTimer = setTimeout(safe(() => removeMember(room, me.id)), RECONNECT_MS);
      checkQuickStart(room);
      settle(room);
    });
  }));

  return { rooms };
};

module.exports.internals = { cleanName, BRACKETS, AVATARS, rooms };
