// Rare Finds game server: server-authoritative rounds over the socket.io namespace "/rare".
// Modes: "daily" (same 7 prompts for everyone, New York day), "unlimited" (random 7), "party" (friends in a room code).
const fs = require('fs');
const path = require('path');
const e = require('./engine');

const BANK_FILE = path.join(__dirname, 'bank.json');
const GRACE_MS = 700; // answers typed right up to the buzzer still count, exact matches only
const REVEAL_AUTO_MS = 12000; // party rounds advance on their own if the host doesn't
const MAX_ATTEMPTS = 25; // per player per round; stops answer enumeration
const MIN_STATS = 20; // below this many submissions, show "not enough data"
const LAUNCH_DAY = '2026-11-26';
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
const COLORS = ['#7C3AED', '#DB2777', '#EA580C', '#16A34A', '#0891B2', '#2563EB', '#CA8A04', '#9333EA', '#DC2626', '#0D9488'];

let bank = { version: 'empty', questions: [] };
const qById = new Map();
function loadBank() {
  if (!fs.existsSync(BANK_FILE)) return console.warn('rarefinds: bank.json missing; run node games/rarefinds/build.js');
  try {
    const next = JSON.parse(fs.readFileSync(BANK_FILE, 'utf8'));
    const indexed = next.questions.map((q) => ({ ...q, index: e.indexQuestion(q) }));
    bank = next;
    qById.clear();
    for (const q of indexed) qById.set(q.id, q);
  } catch (err) {
    console.error('rarefinds: could not load bank.json, game disabled:', err.message); // Doodle Dash keeps running
  }
}
loadBank();

// ---- question selection ----
function nyDay(date = new Date()) {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
}
const dayNumber = (day) => Math.round((Date.parse(day) - Date.parse(LAUNCH_DAY)) / 86400000) + 1;
function seeded(seedText) {
  let h = 2166136261;
  for (const c of seedText) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}
// Seven prompts from seven different categories, so a dive is never all geography.
function pickQuestions(rand, avoid = new Set()) {
  const byCat = new Map();
  for (const q of bank.questions) {
    if (!byCat.has(q.category)) byCat.set(q.category, []);
    byCat.get(q.category).push(q.id);
  }
  const cats = [...byCat.keys()].sort();
  for (let i = cats.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [cats[i], cats[j]] = [cats[j], cats[i]];
  }
  const picks = [];
  for (const cat of cats) {
    if (picks.length === e.ROUNDS) break;
    const pool = byCat.get(cat).filter((id) => !avoid.has(id));
    const from = pool.length ? pool : byCat.get(cat);
    picks.push(from[Math.floor(rand() * from.length)]);
  }
  // Fewer categories than rounds: fill from the rest of the bank.
  const rest = bank.questions.map((q) => q.id).filter((id) => !picks.includes(id));
  while (picks.length < e.ROUNDS && rest.length) picks.push(rest.splice(Math.floor(rand() * rest.length), 1)[0]);
  return picks;
}
const dailyCache = new Map();
function dailyQuestions(day) {
  if (!dailyCache.has(day)) dailyCache.set(day, pickQuestions(seeded(`${day}|${bank.version}`)));
  return dailyCache.get(day);
}

// ---- statistics (real submissions only; memory resets when the server restarts) ----
const answerCounts = new Map(); // qid -> { total, byAnswer: Map(name -> n) }
const dailyScores = new Map(); // day -> number[]
const dailyDone = new Map(); // day -> Set(guestId)
function countAnswer(qid, name) {
  if (!answerCounts.has(qid)) answerCounts.set(qid, { total: 0, byAnswer: new Map() });
  const c = answerCounts.get(qid);
  c.total++;
  if (name) c.byAnswer.set(name, (c.byAnswer.get(name) || 0) + 1);
}
function shareOf(qid, name) {
  const c = answerCounts.get(qid);
  if (!c || c.total < MIN_STATS || !name) return null;
  return { pct: Math.round((1000 * (c.byAnswer.get(name) || 0)) / c.total) / 10, total: c.total };
}

// ---- rooms ----
const rooms = new Map();
function newCode() {
  let c;
  do c = Array.from({ length: 5 }, () => CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]).join('');
  while (rooms.has(c));
  return c;
}
function safe(fn) {
  return (...args) => {
    try {
      return fn(...args);
    } catch (err) {
      console.error('rarefinds handler error:', err);
    }
  };
}
const cleanName = (n) => String(typeof n === 'string' ? n : '').replace(/\s+/g, ' ').trim().slice(0, 20) || 'Player';
const obj = (v) => (v && typeof v === 'object' ? v : {});

module.exports = function attach(io) {
  const nsp = io.of('/rare');
  const later = (room, ms, fn) => room.timers.push(setTimeout(safe(fn), ms));
  const clearTimers = (room) => {
    room.timers.forEach(clearTimeout);
    room.timers = [];
  };

  function makeRoom(mode, hostId, questions, day) {
    const room = {
      code: newCode(), mode, hostId, day, questions, round: -1, phase: 'lobby', deadline: 0,
      players: new Map(), timers: [], submissions: new Map(), colorIdx: 0,
    };
    rooms.set(room.code, room);
    return room;
  }

  function publicQuestion(qid) {
    const q = qById.get(qid);
    return { id: q.id, prompt: q.prompt, qualifier: q.qualifier, category: q.category };
  }

  function playerView(p) {
    return { id: p.id, name: p.name, color: p.color, score: p.score, connected: p.connected, locked: false };
  }

  function stateFor(room, forId) {
    const sub = room.submissions;
    return {
      code: room.code, mode: room.mode, hostId: room.hostId, you: forId, phase: room.phase,
      round: room.round, rounds: e.ROUNDS, day: room.day, dayNumber: room.day ? dayNumber(room.day) : null,
      timeLeft: Math.max(0, room.deadline - Date.now()),
      question: ['prep', 'answer', 'reveal'].includes(room.phase) ? publicQuestion(room.questions[room.round]) : null,
      // Until the reveal, scores stay at their round-start value so nobody learns a tier early.
      players: [...room.players.values()].map((p) => ({
        ...playerView(p),
        score: room.phase === 'prep' || room.phase === 'answer' ? p.roundStart ?? p.score : p.score,
        locked: !!sub.get(p.id)?.final,
      })),
      reveal: room.phase === 'reveal' || room.phase === 'final' ? room.lastReveal : null,
      final: room.phase === 'final' ? finalSummary(room) : null,
    };
  }
  function broadcast(room) {
    for (const id of room.players.keys()) nsp.to(id).emit('state', stateFor(room, id));
  }

  function startRound(room) {
    clearTimers(room);
    room.round++;
    if (room.round >= e.ROUNDS) return finish(room);
    room.phase = 'prep';
    room.submissions = new Map();
    for (const p of room.players.values()) p.roundStart = p.score;
    room.deadline = Date.now() + e.PREP_MS;
    later(room, e.PREP_MS, () => {
      room.phase = 'answer';
      room.deadline = Date.now() + e.ANSWER_MS;
      later(room, e.ANSWER_MS + GRACE_MS, () => endRound(room));
      broadcast(room);
    });
    broadcast(room);
  }

  // Lock one player's answer for this round. Points are committed exactly once.
  function finalizePlayer(room, p, result) {
    const sub = room.submissions.get(p.id) || {};
    if (sub.final) return false;
    room.submissions.set(p.id, { ...sub, ...result, final: true });
    p.score += result.points;
    p.results[room.round] = { ...result, qid: room.questions[room.round] };
    if (result.tier) countAnswer(room.questions[room.round], result.answer);
    return true;
  }

  function endRound(room) {
    if (room.phase !== 'answer') return;
    clearTimers(room);
    const qid = room.questions[room.round];
    const q = qById.get(qid);
    for (const p of room.players.values()) {
      const sub = room.submissions.get(p.id);
      if (sub?.final) continue;
      // Time ran out: a valid answer still sitting in the box counts, but only an exact match (never a typo guess).
      const m = sub?.lastTyped ? e.matchAnswer(q.index, sub.lastTyped) : { kind: 'none' };
      if (m.kind === 'match') {
        const a = q.answers[m.index];
        finalizePlayer(room, p, { answer: a.name, typed: sub.lastTyped, tier: a.tier, points: e.scoreFor(a.tier), fact: a.fact || '' });
      } else {
        finalizePlayer(room, p, { answer: null, typed: sub?.lastTyped || '', tier: null, points: 0, fact: '' });
        countAnswer(qid, null);
      }
    }
    room.phase = 'reveal';
    room.lastReveal = {
      round: room.round,
      question: publicQuestion(qid),
      results: [...room.players.values()].map((p) => {
        const r = p.results[room.round];
        return {
          id: p.id, name: p.name, color: p.color, answer: r.answer, typed: r.typed, tier: r.tier, points: r.points,
          fact: r.fact, share: shareOf(qid, r.answer), total: p.score,
        };
      }),
      legendary: q.answers.filter((a) => a.tier === 'legendary').map((a) => a.name),
    };
    if (room.mode === 'party') later(room, REVEAL_AUTO_MS, () => startRound(room));
    broadcast(room);
  }

  function finalSummary(room) {
    return {
      players: [...room.players.values()]
        .map((p) => ({
          id: p.id, name: p.name, color: p.color, score: p.score, rank: e.rankFor(p.score),
          log: Array.from({ length: e.ROUNDS }, (_, i) => p.results[i]).map((r, i) => ({
            round: i, prompt: qById.get(room.questions[i]).prompt, answer: r?.answer || null, typed: r?.typed || '',
            tier: r?.tier || null, points: r?.points || 0,
          })),
        }))
        .sort((a, b) => b.score - a.score),
      distribution: room.day ? distributionFor(room.day) : null,
    };
  }

  function distributionFor(day) {
    const scores = dailyScores.get(day) || [];
    if (scores.length < 10) return { enough: false, count: scores.length };
    const buckets = Array(15).fill(0);
    for (const s of scores) buckets[Math.min(14, Math.floor(s / 50))]++;
    const sorted = [...scores].sort((a, b) => a - b);
    return { enough: true, count: scores.length, buckets, median: sorted[Math.floor(sorted.length / 2)], scores: sorted };
  }

  function finish(room) {
    clearTimers(room);
    room.phase = 'final';
    if (room.mode === 'daily') {
      for (const p of room.players.values()) {
        if (!dailyScores.has(room.day)) dailyScores.set(room.day, []);
        if (!dailyDone.has(room.day)) dailyDone.set(room.day, new Set());
        // Only a guest's first completed daily dive counts toward today's distribution.
        if (!dailyDone.get(room.day).has(p.guest)) {
          dailyDone.get(room.day).add(p.guest);
          dailyScores.get(room.day).push(p.score);
        }
      }
    }
    broadcast(room);
  }

  function addPlayer(socket, room, payload) {
    const { name, color, guest } = obj(payload);
    const p = {
      id: socket.id, name: cleanName(name), color: COLORS.includes(color) ? color : COLORS[room.colorIdx++ % COLORS.length],
      guest: typeof guest === 'string' ? guest.slice(0, 64) : socket.id, score: 0, roundStart: 0, results: [], connected: true, attempts: 0,
    };
    room.players.set(socket.id, p);
    socket.join(room.code);
    socket.data.code = room.code;
    return p;
  }

  function removePlayer(room, id) {
    const p = room.players.get(id);
    if (!p) return;
    clearTimeout(p.leaveTimer);
    room.players.delete(id);
    nsp.sockets.get(id)?.leave(room.code);
    if (!room.players.size) {
      clearTimers(room);
      rooms.delete(room.code);
      return;
    }
    if (room.hostId === id) room.hostId = room.players.keys().next().value;
    nsp.to(room.code).emit('note', `${p.name} left`);
    if (room.phase === 'answer' && [...room.players.keys()].every((pid) => room.submissions.get(pid)?.final)) return endRound(room);
    broadcast(room);
  }

  nsp.on('connection', safe((socket) => {
    const roomOf = () => rooms.get(socket.data.code);
    const on = (ev, fn) => socket.on(ev, safe(fn));

    if (socket.recovered) {
      const room = roomOf();
      const p = room?.players.get(socket.id);
      if (p) {
        clearTimeout(p.leaveTimer);
        p.connected = true;
        broadcast(room);
      } else socket.data.code = null;
    }

    on('meta', (_, ack) => {
      if (typeof ack !== 'function') return;
      const day = nyDay();
      ack({ day, dayNumber: dayNumber(day), questions: bank.questions.length, version: bank.version, nextResetIn: msToNextNyMidnight() });
    });

    on('create', (payload) => {
      if (roomOf()) return;
      const { mode, recent, guest } = obj(payload);
      if (bank.questions.length < e.ROUNDS) return socket.emit('problem', 'Not enough questions loaded on the server yet.');
      if (mode === 'daily') {
        const day = nyDay();
        const room = makeRoom('daily', socket.id, dailyQuestions(day), day);
        addPlayer(socket, room, payload);
        return startRound(room);
      }
      const avoid = new Set(Array.isArray(recent) ? recent.filter((x) => typeof x === 'string').slice(0, 60) : []);
      const room = makeRoom(mode === 'party' ? 'party' : 'unlimited', socket.id, pickQuestions(Math.random, avoid), null);
      addPlayer(socket, room, payload);
      if (room.mode === 'unlimited') return startRound(room);
      broadcast(room);
    });

    // A refreshed page reclaims its seat (same guest id) instead of starting over with a fresh timer.
    on('resume', (payload, ack) => {
      const reply = typeof ack === 'function' ? ack : () => {};
      if (roomOf()) return reply(false);
      const { code, guest } = obj(payload);
      const room = rooms.get(String(code || '').toUpperCase());
      const old = room && typeof guest === 'string' ? [...room.players.values()].find((p) => p.guest === guest) : null;
      if (!old || old.connected) return reply(false);
      clearTimeout(old.leaveTimer);
      room.players.delete(old.id);
      const sub = room.submissions.get(old.id);
      room.submissions.delete(old.id);
      if (room.hostId === old.id) room.hostId = socket.id;
      old.id = socket.id;
      old.connected = true;
      room.players.set(socket.id, old);
      if (sub) room.submissions.set(socket.id, sub);
      socket.join(room.code);
      socket.data.code = room.code;
      reply(true);
      broadcast(room);
    });

    on('join', (payload) => {
      if (roomOf()) return;
      const code = String(obj(payload).code || '').trim().toUpperCase();
      const room = rooms.get(code);
      if (!room || room.mode !== 'party') return socket.emit('problem', 'No room with that code.');
      if (room.players.size >= 20) return socket.emit('problem', 'That room is full.');
      addPlayer(socket, room, payload);
      nsp.to(room.code).emit('note', `${room.players.get(socket.id).name} joined`);
      broadcast(room);
    });

    on('start', () => {
      const room = roomOf();
      if (!room || room.mode !== 'party' || room.hostId !== socket.id || (room.phase !== 'lobby' && room.phase !== 'final')) return;
      if (room.phase === 'final') {
        room.questions = pickQuestions(Math.random, new Set(room.questions));
        room.round = -1;
        for (const p of room.players.values()) Object.assign(p, { score: 0, results: [] });
      }
      startRound(room);
    });

    // Typed text without submitting: lets a valid answer still count if time runs out mid-thought.
    on('typing', (text) => {
      const room = roomOf();
      if (!room || room.phase !== 'answer' || typeof text !== 'string') return;
      const sub = room.submissions.get(socket.id) || {};
      if (!sub.final) room.submissions.set(socket.id, { ...sub, lastTyped: text.slice(0, 80) });
    });

    on('answer', (payload, ack) => {
      const reply = typeof ack === 'function' ? ack : () => {};
      const room = roomOf();
      const p = room?.players.get(socket.id);
      if (!p || room.phase !== 'answer') return reply({ status: 'closed' });
      const sub = room.submissions.get(socket.id) || {};
      if (sub.final) return reply({ status: 'locked' });
      const text = String(obj(payload).text ?? '').slice(0, 80);
      const late = Date.now() > room.deadline;
      if (late && Date.now() > room.deadline + GRACE_MS) return reply({ status: 'closed' });
      sub.attempts = (sub.attempts || 0) + 1;
      room.submissions.set(socket.id, { ...sub, lastTyped: text });
      if (sub.attempts > MAX_ATTEMPTS) return reply({ status: 'limit' });
      const q = qById.get(room.questions[room.round]);
      const m = e.matchAnswer(q.index, text);
      if (m.kind === 'match') {
        const a = q.answers[m.index];
        const result = { answer: a.name, typed: text, tier: a.tier, points: e.scoreFor(a.tier), fact: a.fact || '' };
        if (!finalizePlayer(room, p, result)) return reply({ status: 'locked' });
        reply({ status: 'accepted', answer: a.name });
        if ([...room.players.keys()].every((pid) => room.submissions.get(pid)?.final)) endRound(room);
        else broadcast(room);
        return;
      }
      // Suggestions never reveal a tier, and after the buzzer only exact matches count.
      if (m.kind === 'suggest' && !late) return reply({ status: 'suggest', suggestion: q.answers[m.index].name });
      if (m.kind === 'ambiguous') return reply({ status: 'ambiguous' });
      reply({ status: late ? 'closed' : 'none' });
    });

    on('next', () => {
      const room = roomOf();
      if (!room || room.phase !== 'reveal') return;
      if (room.mode === 'party' && room.hostId !== socket.id) return;
      startRound(room);
    });

    // Full answer list for a prompt, only once that dive is over.
    on('explore', (round, ack) => {
      const room = roomOf();
      if (typeof ack !== 'function' || !room || room.phase !== 'final' || !Number.isInteger(round) || round < 0 || round >= room.questions.length) return;
      const q = qById.get(room.questions[round]);
      ack({
        prompt: q.prompt, qualifier: q.qualifier, source: q.source, version: bank.version, signalsRetrieved: bank.signalsRetrieved,
        groups: e.TIER_ORDER.slice().reverse().map((t) => ({ tier: t, answers: q.answers.filter((a) => a.tier === t).map((a) => ({ name: a.name, share: shareOf(q.id, a.name) })) })),
      });
    });

    // "This should have counted": logged for the content review (Render keeps these in its logs).
    on('report', (payload, ack) => {
      const reply = typeof ack === 'function' ? ack : () => {};
      const room = roomOf();
      const p = room?.players.get(socket.id);
      const { round, text, note } = obj(payload);
      if (!p || !Number.isInteger(round) || round < 0 || round >= room.questions.length || round > room.round) return reply(false);
      if (round === room.round && room.phase !== 'reveal' && room.phase !== 'final') return reply(false);
      p.reports = (p.reports || 0) + 1;
      if (p.reports > 10) return reply(false);
      const entry = { at: new Date().toISOString(), question: room.questions[round], answer: String(text ?? '').slice(0, 80), note: String(note ?? '').slice(0, 200), version: bank.version };
      console.log('RAREFINDS_REPORT ' + JSON.stringify(entry));
      reply(true);
    });

    on('leave', () => {
      const room = roomOf();
      if (room) removePlayer(room, socket.id);
      socket.data.code = null;
    });

    on('disconnect', (reason) => {
      const room = roomOf();
      const p = room?.players.get(socket.id);
      if (!p) return;
      if (reason === 'client namespace disconnect' || reason === 'server namespace disconnect') return removePlayer(room, socket.id);
      p.connected = false;
      p.leaveTimer = setTimeout(safe(() => removePlayer(room, socket.id)), 29000);
      broadcast(room);
    });
  }));
};

function msToNextNyMidnight() {
  // Walk forward minute by minute from now until the New York date changes (handles daylight saving).
  const now = Date.now();
  const today = nyDay(new Date(now));
  let lo = now, hi = now + 26 * 3600000;
  while (hi - lo > 1000) {
    const mid = Math.floor((lo + hi) / 2);
    if (nyDay(new Date(mid)) === today) lo = mid;
    else hi = mid;
  }
  return hi - now;
}

module.exports.internals = { nyDay, dayNumber, pickQuestions, seeded, dailyQuestions, msToNextNyMidnight, loadBank, qById, getBank: () => bank };
