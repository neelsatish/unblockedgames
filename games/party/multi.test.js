// Multi-client check for Pop Quiz: real socket.io connections against the real server code.
// Every player is a separate client with its own token; nothing here simulates a player inside the server.
// Run: node games/party/multi.test.js
const assert = require('node:assert');
const http = require('http');
const { Server } = require('socket.io');
const { io: connect } = require('socket.io-client');
const attach = require('./server');
const rare = require('../rarefinds/server');

const FAST = { minimumFuseSeconds: 0.6, maximumFuseSeconds: 1.4, minimumTurnSeconds: 0.4, roundCountdownSeconds: 0.2, popFreezeMilliseconds: 150, clearedPauseMilliseconds: 150 };
const SECRET = /deadline|fuse|remain|timeleft|expire|cut|generation|startedat/i;
const qById = rare.internals.qById;

function scan(v, path) {
  if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) {
    assert.ok(!SECRET.test(k), `secret-looking key reached a client: ${path}.${k}`);
    scan(x, `${path}.${k}`);
  }
}
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
async function until(fn, ms = 8000, label = 'condition') {
  const t = Date.now();
  while (Date.now() - t < ms) {
    if (fn()) return;
    await wait(20);
  }
  throw new Error(`timed out waiting for ${label}`);
}

let port;
function client(name, token = `tok-${name}-${Math.random().toString(36).slice(2, 12)}`) {
  const s = connect(`http://localhost:${port}/pop`, { transports: ['websocket'], forceNew: true });
  const c = { s, name, token, room: null, seq: 0, events: [], notes: [] };
  s.on('update', (u) => {
    assert.ok(u.seq > c.seq, `seq goes up (${c.seq} -> ${u.seq})`);
    c.seq = u.seq;
    c.room = u.room;
    c.events.push(...u.events);
    scan(u.room.match, 'room.match');
    scan(u.events, 'events');
  });
  s.on('note', (n) => c.notes.push(n));
  c.call = (ev, payload) => new Promise((res) => s.emit(ev, payload, res));
  c.me = () => c.room && c.room.members.find((m) => m.id === c.room.you);
  return c;
}

// A player who sometimes knows a fresh answer, sometimes types nonsense or a repeat, and sometimes freezes.
function autoplay(c, style) {
  let busy = false;
  let decided = null; // one decision per turn, so a frozen player stays frozen until the pop
  const act = async () => {
    const m = c.room && c.room.match;
    if (busy || !m || m.status !== 'ROUND_ACTIVE' || m.holderId !== c.room.you) return;
    const key = `${m.questionInstanceId}/${m.turnId}`;
    if (decided === key) return;
    decided = key;
    busy = true;
    const turn = { questionInstanceId: m.questionInstanceId, turnId: m.turnId };
    const roll = Math.random();
    if (roll < style.freeze) {
      busy = false;
      return; // let the fuse run out
    }
    const q = qById.get(m.question.id);
    const used = new Set(m.history.map((h) => h.answer));
    if (roll < style.freeze + 0.15 && m.history.length) {
      const r = await c.call('submit_answer', { ...turn, submissionId: `${c.name}-${Math.random()}`, answer: m.history[0].answer.toUpperCase() });
      assert.equal(r.status, 'used', 'repeat via different case is blocked');
    } else if (roll < style.freeze + 0.25) {
      const r = await c.call('submit_answer', { ...turn, submissionId: `${c.name}-${Math.random()}`, answer: 'zzqx not an answer' });
      assert.ok(['unknown', 'closed', 'stale'].includes(r.status), r.status);
    }
    const fresh = q.answers.find((a) => !used.has(a.name));
    if (fresh) {
      const sid = `${c.name}-${Math.random()}`;
      const r = await c.call('submit_answer', { ...turn, submissionId: sid, answer: fresh.name });
      assert.ok(['accepted', 'closed', 'stale'].includes(r.status), `unexpected ${r.status}`);
      if (r.status === 'accepted') {
        const again = await c.call('submit_answer', { ...turn, submissionId: sid, answer: fresh.name });
        assert.deepEqual(again, r, 'same submission id returns the same result');
      }
    }
    busy = false;
  };
  c.s.on('update', () => setTimeout(act, 30 + Math.random() * 200));
}

async function main() {
  const server = http.createServer();
  const io = new Server(server);
  attach(io, { settingsOverride: FAST });
  await new Promise((r) => server.listen(0, r));
  port = server.address().port;

  // ---- room basics ----
  const a = client('Alex'), b = client('Sam'), c = client('Charlie'), d = client('Jamie');
  await Promise.all([a, b, c, d].map((x) => new Promise((r) => x.s.on('connect', r))));
  assert.equal((await a.call('create_room', { name: 'Alex', avatar: 'owl' })).error, 'bad_request', 'token required');
  const made = await a.call('create_room', { name: 'Alex', avatar: 'owl', token: a.token, visibility: 'PRIVATE' });
  assert.ok(made.ok && /^[A-HJ-NP-Z]{4}$/.test(made.code), `4-letter code without I or O: ${made.code}`);
  const code = made.code;
  assert.equal((await b.call('join_room', { code: 'AB1', token: b.token })).error, 'invalid_code');
  assert.equal((await b.call('join_room', { code: 'ZZZZ' === code ? 'YYYY' : 'ZZZZ', token: b.token })).error, 'not_found');
  assert.equal((await a.call('start_match')).error, 'not_enough_players', 'no one-player games');
  const pub = client('Pat');
  await new Promise((r) => pub.s.on('connect', r));
  const pubRoom = await pub.call('create_room', { name: 'Pat', token: pub.token, visibility: 'PUBLIC' });
  const listed = await b.call('list_rooms');
  assert.ok(listed.some((r) => r.code === pubRoom.code), 'public room listed');
  assert.ok(!listed.some((r) => r.code === code), 'private room never listed');
  pub.s.emit('leave_room');
  await wait(100);
  assert.ok(!(await b.call('list_rooms')).some((r) => r.code === pubRoom.code), 'empty room closes');

  assert.ok((await b.call('join_room', { code: code.toLowerCase(), name: 'Sam', avatar: 'frog', token: b.token })).ok, 'lowercase code accepted');
  assert.ok((await c.call('join_room', { code, name: 'Charlie', avatar: 'robot', token: c.token })).ok);
  await until(() => a.room && a.room.members.length === 3, 3000, 'three members');
  assert.equal((await b.call('start_match')).error, 'not_host');
  // Host settings: validated on the server, and only by the host.
  assert.equal((await b.call('update_settings', { startingHearts: 3 })).ok, false);
  const badRules = await a.call('update_settings', { startingHearts: 6, heartCap: 5 });
  assert.equal(badRules.ok, false);
  assert.equal((await a.call('update_settings', { maxPlayers: 2 })).ok, false, 'seats below player count');
  assert.equal((await a.call('update_settings', { startingHearts: 1, maxPlayers: 4 })).ok, true);
  assert.ok((await d.call('join_room', { code, name: 'Jamie', avatar: 'cat', token: d.token })).ok);
  const late = client('Late');
  await new Promise((r) => late.s.on('connect', r));
  assert.equal((await late.call('join_room', { code, token: late.token })).error, 'full');
  late.s.close();

  // ---- a full match, four independent clients ----
  const players = [a, b, c, d];
  autoplay(a, { freeze: 0.15 });
  autoplay(b, { freeze: 0.2 });
  autoplay(c, { freeze: 0.25 });
  autoplay(d, { freeze: 0.3 });
  await until(() => players.every((x) => x.room && x.room.members.length === 4), 3000, 'four members');
  assert.ok((await a.call('start_match')).ok, 'host starts');
  // Out-of-turn answers are refused without being checked.
  await until(() => a.room.match && a.room.match.status === 'ROUND_ACTIVE', 3000, 'round active');
  const m0 = a.room.match;
  const notHolder = players.find((x) => x.room.you !== m0.holderId);
  const oot = await notHolder.call('submit_answer', { questionInstanceId: m0.questionInstanceId, turnId: m0.turnId, submissionId: 'oot', answer: 'anything' });
  assert.ok(['not_your_turn', 'stale', 'closed'].includes(oot.status), oot.status);
  assert.equal((await a.call('update_settings', { startingHearts: 2 })).ok, false, 'rules locked during a game');

  // Drop one player mid-match and bring them back with the same token: same seat, same hearts.
  await until(() => b.room.match && b.room.match.status === 'ROUND_ACTIVE', 3000, 'b active');
  const bId = b.room.you;
  const bHeartsBefore = b.room.match.players.find((p) => p.id === bId).hearts;
  b.s.disconnect();
  await until(() => a.room.members.find((m) => m.id === bId)?.connected === false || a.room.match.status === 'MATCH_COMPLETE', 3000, 'b shown offline');
  const b2 = client('Sam', b.token);
  await new Promise((r) => b2.s.on('connect', r));
  const back = await b2.call('join_room', { code, token: b.token });
  assert.ok(back.ok && back.resumed, 'resume with same token');
  await until(() => b2.room, 2000, 'b2 snapshot');
  assert.equal(b2.room.you, bId, 'same player id after reconnect');
  const bAfter = b2.room.match.players.find((p) => p.id === bId);
  assert.ok(bAfter.hearts <= bHeartsBefore, 'no fresh hearts on reconnect');
  assert.ok(bAfter.passesLeft <= 1, 'no fresh emergency pass on reconnect');
  autoplay(b2, { freeze: 0.2 });
  const live = [a, b2, c, d];

  await until(() => live.every((x) => x.room?.match?.status === 'MATCH_COMPLETE'), 120000, 'match complete');
  await wait(200);
  const views = live.map((x) => x.room.match);
  const winner = views[0].winnerId;
  assert.ok(winner, 'there is a winner');
  for (const v of views) {
    assert.equal(v.winnerId, winner, 'every client agrees on the winner');
    assert.deepEqual(v.players.map((p) => [p.id, p.hearts, p.alive, p.placement]), views[0].players.map((p) => [p.id, p.hearts, p.alive, p.placement]), 'every client agrees on hearts and placements');
  }
  assert.equal(views[0].players.filter((p) => p.alive).length, 1, 'exactly one survivor');
  assert.deepEqual(views[0].results.map((r) => r.placement).sort(), [1, 2, 3, 4]);
  // Every client saw the same sequence of accepted answers and pops.
  const story = (x) => x.events.filter((e) => ['answer_accepted', 'flask_popped', 'player_eliminated'].includes(e.type)).map((e) => `${e.type}:${e.playerId}:${e.answer || ''}`).slice(-15).join('|');
  assert.equal(story(a), story(c));
  assert.equal(story(c), story(d));
  const pops = a.events.filter((e) => e.type === 'flask_popped').length;
  const accepted = a.events.filter((e) => e.type === 'answer_accepted').length;
  console.log(`full match: winner ${views[0].players.find((p) => p.id === winner).name}, ${accepted} accepted answers, ${pops} pops`);

  // ---- rematch: same room code, fresh state ----
  assert.ok((await a.call('start_match')).ok, 'rematch in the same room');
  await until(() => a.room.match.status !== 'MATCH_COMPLETE', 3000, 'rematch started');
  assert.ok(a.room.match.players.every((p) => p.hearts === 1 && p.points === 0 && p.passesLeft === 1), 'everything reset');
  assert.equal(a.room.code, code);

  // ---- host leaves: host moves, match goes on ----
  const hostId = a.room.hostId;
  a.s.emit('leave_room');
  await until(() => c.room.hostId && c.room.hostId !== hostId, 3000, 'host migration');
  await until(() => c.room.match.status === 'MATCH_COMPLETE', 60000, 'second match complete');
  assert.ok(c.room.match.winnerId, 'second match finished without the old host');

  // ---- quick play: real players fill a public room and it starts on its own ----
  const q1 = client('Q1'), q2 = client('Q2');
  await Promise.all([q1, q2].map((x) => new Promise((r) => x.s.on('connect', r))));
  const j1 = await q1.call('quick_play', { bracket: '1v1', token: q1.token, name: 'Q1' });
  const j2 = await q2.call('quick_play', { bracket: '1v1', token: q2.token, name: 'Q2' });
  assert.equal(j1.code, j2.code, 'second quick player joins the first room');
  await until(() => q1.room?.match?.status === 'QUESTION_PREPARATION' || q1.room?.match?.status === 'ROUND_ACTIVE', 6000, 'quick room auto-start');

  for (const x of [a, b2, c, d, q1, q2]) x.s.close();
  io.close();
  server.close();
  console.log('party multi-client: all checks passed');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
