// Self-check for the Pop Quiz match engine: node games/party/engine.test.js
const assert = require('node:assert');
const rf = require('../rarefinds/engine');
const P = require('./engine');

// ---- fixtures ----
const TIERS = rf.TIER_ORDER; // textbook, tryhard, honours, rare, deep, legendary
function makeQ(id, category, names, extra = {}) {
  const answers = names.map((n, i) => {
    const [name, ...aliases] = n.split('|');
    return { name, aliases, tier: extra.tiers?.[name] || TIERS[i % TIERS.length], fact: '' };
  });
  const q = { id, category, prompt: `Name ${id}`, qualifier: '', strip: [], answers };
  q.index = rf.indexQuestion(q);
  return q;
}
const filler = (prefix, n) => Array.from({ length: n }, (_, i) => `${prefix} ${String.fromCharCode(97 + (i % 26))}${String.fromCharCode(97 + Math.floor(i / 26))}word`);
const COUNTRIES = makeQ('countries', 'geography', ['United States|USA|U.S.A.|United States of America', 'Egypt', 'Nigeria', 'Botswana', 'Madagascar', ...filler('land', 40)], {
  tiers: { 'United States': 'textbook', Egypt: 'textbook', Nigeria: 'honours', Botswana: 'rare', Madagascar: 'deep' },
});
const FRUIT = makeQ('fruit', 'food', ['Apple', 'Banana', 'Mango', 'Guava', 'Mangosteen', ...filler('fruit', 40)]);
const PASTA = makeQ('pasta', 'food', ['Penne', 'Farfalle', ...filler('pasta', 40)]);
const BANK = [COUNTRIES, FRUIT, PASTA];

const fixed = (v) => () => v; // rng that always returns v: fuse = 10 + v * 20 s
const PLAYERS = (n) => Array.from({ length: n }, (_, i) => ({ id: `p${i}`, name: `P${i}`, avatar: 'owl' }));
function match(n = 4, opts = {}) {
  const m = P.createMatch({ id: 'm1', players: PLAYERS(n), settings: opts.settings || {}, questions: opts.questions || [COUNTRIES], now: 0, rng: opts.rng || fixed(0.7), firstSeat: 0 });
  P.advance(m, 3000); // 3 s question preparation, then the fuse starts
  return m;
}
const turn = (m) => ({ questionInstanceId: `${m.id}:q${m.questionInstance}`, turnId: m.turnId });
let sub = 0;
const say = (m, pid, answer, now) => P.submitAnswer(m, pid, { ...turn(m), submissionId: `s${++sub}`, answer }, now);
const holderId = (m) => P.publicView(m, 0).holderId;
const left = (m, now) => m.fuseDeadline - now;
// Unused answers of the current question, in order.
function freshAnswer(m) {
  const q = m.question;
  for (let i = 0; i < q.answers.length; i++) if (!m.used.has(i)) return q.answers[i].name;
  return null;
}

// ---- settings validation ----
{
  assert.deepEqual(P.cleanSettings({}).errors, []);
  assert.ok(P.cleanSettings({ startingHearts: 6, heartCap: 5 }).errors.length, 'hearts above cap');
  assert.ok(P.cleanSettings({ minimumFuseSeconds: 40, maximumFuseSeconds: 30 }).errors.length, 'min fuse above max');
  assert.ok(P.cleanSettings({ pointsPerHeart: -50 }).errors.length, 'negative points');
  assert.ok(P.cleanSettings({ pointsPerHeart: 125 }).errors.length, 'points step of 50');
  assert.ok(P.cleanSettings({ maxPlayers: 0 }).errors.length, 'zero seats');
  assert.ok(P.cleanSettings({ maxPlayers: 3 }, P.DEFAULTS, 4).errors.length, 'seats below player count');
  assert.ok(P.cleanSettings({ minimumTurnSeconds: -2 }).errors.length, 'negative timer');
  assert.ok(P.cleanSettings({ minimumTurnSeconds: 20, maximumFuseSeconds: 15, minimumFuseSeconds: 10 }).errors.length, 'min turn above longest fuse');
  assert.ok(P.cleanSettings({ visibility: 'SECRET' }).errors.length);
  const ok = P.cleanSettings({ startingHearts: 3, pointsPerHeart: 450, maxPlayers: 16, visibility: 'PUBLIC', hacker: 1 });
  assert.deepEqual(ok.errors, []);
  assert.equal(ok.settings.pointsPerHeart, 450);
  assert.equal(ok.settings.hacker, undefined, 'unknown fields ignored');
  // A rejected change keeps the old settings untouched.
  assert.equal(P.cleanSettings({ startingHearts: 3, heartCap: 2 }, { ...P.DEFAULTS, startingHearts: 2 }).settings.startingHearts, 2);
}

// ---- fresh fuse is 10-30 s and starts after the 3 s preparation ----
{
  for (let i = 0; i < 300; i++) {
    const m = P.createMatch({ id: 'r', players: PLAYERS(3), settings: {}, questions: BANK, now: 0 });
    assert.equal(P.publicView(m, 0).status, 'QUESTION_PREPARATION');
    assert.equal(holderId(m), null);
    P.advance(m, 2999);
    assert.equal(m.phase, 'prep');
    P.advance(m, 3000);
    const len = m.fuseDeadline - m.fuseStartedAt;
    assert.ok(len >= 10000 && len <= 30000, `fuse ${len}`);
  }
}

// ---- the fuse keeps running through passes; 8 s minimum on a pass ----
{
  const m = match(4); // fuse 24 s from t=3000 -> deadline 27000
  assert.equal(m.fuseDeadline, 27000);
  assert.equal(holderId(m), 'p0');
  assert.equal(say(m, 'p0', 'Egypt', 8000).status, 'accepted'); // 19 s left
  assert.equal(holderId(m), 'p1');
  assert.equal(left(m, 8000), 19000, 'no new random fuse on a pass');
  assert.equal(say(m, 'p1', 'Nigeria', 15000).status, 'accepted'); // 12 s left
  assert.equal(left(m, 15000), 12000);
  assert.equal(say(m, 'p2', 'Botswana', 21000).status, 'accepted'); // 6 s left -> 8 s
  assert.equal(left(m, 21000), 8000, 'receiver gets the minimum turn');
  assert.equal(say(m, 'p3', 'Madagascar', 24000).status, 'accepted'); // 5 s left -> 8 s
  assert.equal(left(m, 24000), 8000);
  assert.equal(holderId(m), 'p0', 'ring wraps');
  // p0 is stuck: 8 s pass and the flask pops on them.
  assert.equal(say(m, 'p0', 'Egypt', 25000).status, 'used');
  P.advance(m, 31999);
  assert.equal(m.phase, 'active');
  P.advance(m, 32000);
  assert.equal(m.phase, 'popped');
  assert.equal(m.players[0].hearts, 1);
}
{
  // Exactly 8 s left is preserved, not extended.
  const m = match(2); // deadline 27000
  assert.equal(say(m, 'p0', 'Egypt', 19000).status, 'accepted');
  assert.equal(m.fuseDeadline, 27000);
  // 20 s left is preserved.
  const m2 = match(2);
  say(m2, 'p0', 'Egypt', 7000);
  assert.equal(left(m2, 7000), 20000);
}

// ---- submit versus pop: strictly before the deadline wins, at the deadline pops ----
{
  const m = match(3);
  assert.equal(say(m, 'p0', 'Egypt', 26999).status, 'accepted', '1 ms before the deadline');
  const m2 = match(3);
  const r = say(m2, 'p0', 'Egypt', 27000);
  assert.equal(r.status, 'closed', 'at the deadline the pop wins');
  assert.equal(m2.players[0].hearts, 1);
  assert.equal(m2.players[0].points, 0, 'no points after a pop');
  // A late answer arriving after the deadline, before any timer ran, still pops exactly once.
  const m3 = match(3);
  say(m3, 'p0', 'Egypt', 40000);
  say(m3, 'p0', 'Nigeria', 40001);
  P.advance(m3, 40002);
  assert.equal(m3.players[0].hearts, 1, 'one heart lost, once');
  assert.equal(m3.players.reduce((n, p) => n + p.stats.popsReceived, 0), 1);
}

// ---- an obsolete wake-up cannot pop the new holder ----
{
  const m = match(3); // deadline 27000
  say(m, 'p0', 'Egypt', 22000); // 5 s left -> deadline 30000
  const gen = m.fuseGeneration;
  assert.equal(m.fuseDeadline, 30000);
  P.advance(m, 27000); // the timer armed for the old deadline fires
  assert.equal(m.phase, 'active');
  assert.equal(holderId(m), 'p1');
  assert.equal(m.fuseGeneration, gen);
  assert.ok(P.nextWakeAt(m) <= 30000 && P.nextWakeAt(m) > 22000);
}

// ---- duplicate network submissions are idempotent ----
{
  const m = match(3);
  const payload = { ...turn(m), submissionId: 'dup-1', answer: 'Egypt' };
  const a = P.submitAnswer(m, 'p0', payload, 22000);
  const deadline = m.fuseDeadline;
  const b = P.submitAnswer(m, 'p0', payload, 23000);
  assert.deepEqual(a, b);
  assert.equal(m.players[0].points, 10, 'points once');
  assert.equal(m.fuseDeadline, deadline, 'timer extended once');
  assert.equal(holderId(m), 'p1');
}

// ---- only the holder, only the current turn ----
{
  const m = match(3);
  assert.equal(say(m, 'p1', 'Egypt', 4000).status, 'not_your_turn');
  assert.equal(m.players[1].stats.invalid + m.players[1].stats.duplicate, 0, 'out-of-turn text is not validated');
  assert.equal(m.used.size, 0);
  const old = turn(m);
  say(m, 'p0', 'Egypt', 5000);
  assert.equal(P.submitAnswer(m, 'p1', { ...old, submissionId: 'x', answer: 'Nigeria' }, 6000).status, 'stale', 'previous-turn id');
  assert.equal(P.submitAnswer(m, 'ghost', { ...turn(m), submissionId: 'y', answer: 'Nigeria' }, 6000).status, 'not_in_match');
  // Invalid and repeated answers keep the flask and the same deadline.
  const d = m.fuseDeadline;
  assert.equal(say(m, 'p1', 'Atlantis', 7000).status, 'unknown');
  assert.equal(say(m, 'p1', 'egypt', 8000).status, 'used');
  assert.equal(holderId(m), 'p1');
  assert.equal(m.fuseDeadline, d);
  assert.equal(m.players[1].hearts, 2, 'a wrong answer never costs a heart');
  // Typos only suggest; the suggestion carries no tier.
  const s = say(m, 'p1', 'Madagscar', 9000);
  assert.deepEqual(s, { status: 'suggest', suggestion: 'Madagascar' });
  assert.equal(holderId(m), 'p1');
  assert.equal(say(m, 'p1', 'Madagascar', 10000).status, 'accepted');
  // Typo of an already used answer is reported as used, not suggested.
  assert.equal(say(m, 'p2', 'Egpyt', 11000).status, 'used');
}

// ---- canonical aliases: one country, every spelling blocked ----
{
  const m = match(4);
  assert.equal(say(m, 'p0', 'United States', 4000).status, 'accepted');
  for (const v of ['USA', 'U.S.A.', 'united states of america', '  UNITED   STATES ']) assert.equal(say(m, 'p1', v, 5000).status, 'used', v);
  assert.equal(m.history.length, 1);
  assert.equal(m.history[0].answer, 'United States');
}

// ---- a new question clears the used answers ----
{
  const m = match(3, { questions: [COUNTRIES, FRUIT] });
  const first = m.question.id;
  assert.equal(say(m, 'p0', freshAnswer(m), 4000).status, 'accepted');
  P.advance(m, 40000); // pop on p1
  assert.equal(m.phase, 'popped');
  P.advance(m, 41500); // 1.5 s freeze -> next question
  assert.equal(m.phase, 'prep');
  assert.equal(m.used.size, 0);
  assert.equal(m.history.length, 0);
  assert.notEqual(m.question.id, first, 'different question after a pop');
  P.advance(m, 44500);
  assert.equal(holderId(m), 'p2', 'next seat after the popped player starts');
}

// ---- tiers, the heart meter, overflow and the cap ----
{
  assert.deepEqual(TIERS.map((t) => rf.scoreFor(t)), [10, 20, 40, 60, 80, 100]);
  const q = makeQ('tiered', 'test', ['T0', 'T1', 'T2', 'T3', 'T4', 'T5', ...filler('more', 40)]); // tier i = TIERS[i % 6]
  const m = match(2, { questions: [q] });
  const p0 = m.players[0];
  let t = 4000;
  // p0 earns 550 with legendary+deep+... then a 60 to cross 600 with 10 left over.
  p0.progress = 550;
  p0.points = 550;
  say(m, 'p0', 'T3', t++); // rare, 60
  assert.equal(p0.hearts, 3);
  assert.equal(p0.progress, 10, 'overflow carries into the next meter');
  assert.equal(p0.extraHearts, 1);
  // At the cap: no sixth heart, meter waits at the threshold.
  p0.hearts = 5;
  p0.progress = 580;
  say(m, 'p1', 'T0', t++);
  say(m, 'p0', 'T5', t++); // +100
  assert.equal(p0.hearts, 5);
  assert.equal(p0.progress, 600, 'meter capped at the threshold while hearts are full');
  // Lose a heart: the stored meter becomes a heart only on the next accepted answer.
  p0.hearts = 4;
  say(m, 'p1', 'T1', t++);
  assert.equal(p0.hearts, 4);
  say(m, 'p0', 'T2', t++); // +40
  assert.equal(p0.hearts, 5);
  assert.equal(p0.progress, 40);
}

// ---- meter persists across questions; final heart eliminates; survival decides the winner ----
{
  const m = match(2, { questions: [COUNTRIES] }); // the only question comes back, least recently played
  say(m, 'p0', 'Madagascar', 4000); // deep 80
  assert.equal(m.players[0].progress, 80);
  P.advance(m, 60000); // pops on p1 (hearts 2 -> 1)
  P.advance(m, 61500);
  P.advance(m, 64500); // fresh question, p0 starts (seat after p1)
  assert.equal(m.players[0].progress, 80, 'meter survives the category change');
  assert.equal(m.players[1].hearts, 1);
  assert.equal(holderId(m), 'p0');
  say(m, 'p0', freshAnswer(m), 65000);
  // p1 now holds; let it pop: final heart.
  P.advance(m, 200000);
  assert.equal(m.phase, 'complete');
  assert.equal(m.winnerId, 'p0');
  const v = P.publicView(m, 200000);
  assert.equal(v.status, 'MATCH_COMPLETE');
  assert.deepEqual(v.results.map((r) => [r.id, r.placement]), [['p0', 1], ['p1', 2]]);
  assert.equal(P.nextWakeAt(m), null);
  assert.equal(say(m, 'p1', 'Apple', 200001).status, 'closed');
}
{
  // Survival beats points.
  const m = match(2, { settings: { startingHearts: 1 } });
  m.players[1].points = 1900;
  say(m, 'p0', 'Egypt', 4000);
  P.advance(m, 100000); // pops on p1
  assert.equal(m.winnerId, 'p0');
}

// ---- eliminated seats are skipped; placements follow elimination order ----
{
  const m = match(4, { settings: { startingHearts: 1 }, questions: BANK });
  // p0 holds and pops -> out (4th).
  P.advance(m, 30000);
  assert.equal(m.players[0].alive, false);
  assert.equal(m.players[0].placement, 4);
  P.advance(m, 31500);
  P.advance(m, 34500);
  assert.equal(holderId(m), 'p1');
  say(m, 'p1', freshAnswer(m), 35000);
  say(m, 'p2', freshAnswer(m), 35500);
  say(m, 'p3', freshAnswer(m), 36000);
  assert.equal(holderId(m), 'p1', 'dead p0 is skipped when wrapping');
  assert.equal(P.nextAliveSeat(m, 3), 1);
}

// ---- emergency pass ----
{
  const m = match(3); // deadline 27000
  const r = P.emergencyPass(m, 'p0', { ...turn(m), submissionId: 'e1' }, 23000); // 4 s left -> 8 s
  assert.equal(r.status, 'passed');
  assert.equal(holderId(m), 'p1');
  assert.equal(left(m, 23000), 8000, 'minimum turn applies to emergency passes');
  assert.equal(m.used.size, 0, 'no answer recorded');
  assert.equal(m.players[0].points, 0);
  assert.equal(P.emergencyPass(m, 'p0', { ...turn(m), submissionId: 'e2' }, 23100).status, 'not_your_turn');
  say(m, 'p1', 'Egypt', 24000);
  say(m, 'p2', 'Nigeria', 25000);
  assert.equal(P.emergencyPass(m, 'p0', { ...turn(m), submissionId: 'e3' }, 26000).status, 'no_pass', 'one per match');
  // Emergency pass after expiry fails.
  const m2 = match(2);
  assert.equal(P.emergencyPass(m2, 'p0', { ...turn(m2), submissionId: 'e4' }, 27000).status, 'closed');
  assert.equal(m2.players[0].passesLeft, 1);
  // Disabled by settings.
  const m3 = match(2, { settings: { emergencyPassEnabled: false } });
  assert.equal(P.emergencyPass(m3, 'p0', { ...turn(m3), submissionId: 'e5' }, 4000).status, 'no_pass');
}

// ---- players who leave ----
{
  const m = match(3); // deadline 27000
  P.forfeit(m, 'p0', 24000); // holder leaves with 3 s left
  assert.equal(m.players[0].alive, false);
  assert.equal(m.players[0].placement, 3);
  assert.equal(holderId(m), 'p1');
  assert.equal(left(m, 24000), 8000);
  P.forfeit(m, 'p2', 25000);
  assert.equal(m.phase, 'complete');
  assert.equal(m.winnerId, 'p1');
  // A disconnected holder is not protected: the fuse keeps running.
  const m2 = match(2);
  P.setConnected(m2, 'p0', false);
  P.advance(m2, 27000);
  assert.equal(m2.players[0].hearts, 1);
  // Leaving during the pause after a pop: the next question skips them.
  const m3 = match(3);
  P.advance(m3, 27000); // pop on p0
  P.forfeit(m3, 'p1', 27500); // p1 was due to start
  P.advance(m3, 29000);
  P.advance(m3, 32000);
  assert.equal(holderId(m3), 'p2');
}

// ---- a category that runs out of answers ----
{
  const tiny = makeQ('tiny', 'test', ['Uno', 'Dos', 'Tres']);
  const m = match(2, { questions: [tiny] });
  say(m, 'p0', 'Uno', 4000);
  say(m, 'p1', 'Dos', 5000);
  const r = say(m, 'p0', 'Tres', 6000);
  assert.equal(r.status, 'accepted');
  assert.equal(m.phase, 'cleared');
  assert.deepEqual(m.players.map((p) => p.hearts), [2, 2], 'nobody loses a heart');
  assert.ok(P.drainEvents(m).some((e) => e.type === 'category_cleared'));
  P.advance(m, 7500);
  assert.equal(m.phase, 'prep');
  assert.equal(m.used.size, 0);
  P.advance(m, 10500);
  assert.equal(holderId(m), 'p1', 'seat after the last answer starts');
}

// ---- the fuse never reaches clients ----
{
  const FORBIDDEN = /deadline|fuse|remain|timeleft|expire|cut|generation|startedat/i;
  function scan(v, path = '') {
    if (v && typeof v === 'object') {
      for (const [k, x] of Object.entries(v)) {
        assert.ok(!FORBIDDEN.test(k), `secret-looking key ${path}.${k}`);
        scan(x, `${path}.${k}`);
      }
    }
  }
  const m = match(4, { questions: BANK, rng: Math.random });
  let t = 3000;
  for (let i = 0; i < 400 && m.phase !== 'complete'; i++) {
    t += 700;
    const h = holderId(m);
    if (h && i % 3) say(m, h, freshAnswer(m), t);
    else P.advance(m, t);
    const view = P.publicView(m, t);
    scan(view);
    for (const ev of P.drainEvents(m)) scan(ev);
    if (view.status === 'ROUND_ACTIVE') assert.equal(view.countdownMs, null);
    assert.ok(P.DANGER.includes(view.danger) || view.danger === null);
  }
}

// ---- danger bands rise as the fuse burns and relax when a pass extends it ----
{
  const m = match(2, { rng: fixed(0.5) }); // fuse 20 s; cuts: 18.5 s, 11 s, 5.5 s
  assert.equal(P.publicView(m, 3000).danger, 'calm');
  P.advance(m, 3000 + 2000);
  assert.equal(P.publicView(m, 5000).danger, 'bubbling');
  P.advance(m, 3000 + 15000); // 5 s left
  assert.equal(P.publicView(m, 18000).danger, 'frantic');
  say(m, 'p0', 'Egypt', 18000); // -> 8 s
  assert.equal(P.publicView(m, 18000).danger, 'foaming', 'extension relaxes the flask');
  const w = P.nextWakeAt(m);
  assert.ok(w > 18000 && w < m.fuseDeadline, 'wakes for the next band');
}

// ---- question choice: big enough pools, no repeats, varied categories ----
{
  const small = makeQ('small', 'test', filler('s', 20));
  const mid = makeQ('mid', 'mid', filler('m', 50));
  const big = makeQ('big', 'big', filler('b', 90));
  const pick = (alive, played = new Map(), last = null) => P.chooseQuestion([small, mid, big], alive, played, last, Math.random).id;
  for (let i = 0; i < 50; i++) {
    assert.notEqual(pick(3), 'small', '25 answers minimum');
    assert.equal(pick(10), 'big', '10 players need 80 answers');
    assert.equal(pick(3, new Map([['mid', 1]])), 'big', 'unplayed first');
    assert.equal(pick(3, new Map([['mid', 1], ['big', 2]])), 'mid', 'least recently played when all are used');
    assert.equal(pick(3, new Map(), 'big'), 'mid', 'avoid the same category twice');
  }
  assert.equal(P.neededAnswers(6), 48);
}

console.log('party engine: all checks passed');
