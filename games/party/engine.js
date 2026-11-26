// Pop Quiz match engine: the hot-potato rules, server-authoritative and pure.
// No timers and no sockets live here. Every entry point takes `now` (monotonic ms) and first settles
// anything that fell due (a fuse running out, a pause ending), so a late timer can never change an outcome.
// The server re-arms one wake-up timer at nextWakeAt() after each call.
const rf = require('../rarefinds/engine');

const DEFAULTS = Object.freeze({
  startingHearts: 2,
  heartCap: 5,
  pointsPerHeart: 600,
  minimumTurnSeconds: 8,
  minimumFuseSeconds: 10,
  maximumFuseSeconds: 30,
  maxPlayers: 6,
  minimumPlayers: 2,
  roundCountdownSeconds: 3,
  popFreezeMilliseconds: 1500,
  clearedPauseMilliseconds: 1500,
  emergencyPasses: 1,
  emergencyPassEnabled: true,
  visibility: 'PRIVATE',
});

// Host-editable fields and their limits. Anything else in a settings payload is ignored.
const LIMITS = {
  startingHearts: [1, 10, 1],
  heartCap: [1, 10, 1],
  pointsPerHeart: [50, 5000, 50],
  minimumTurnSeconds: [3, 20, 1],
  minimumFuseSeconds: [5, 60, 1],
  maximumFuseSeconds: [5, 90, 1],
  maxPlayers: [2, 16, 1],
  emergencyPasses: [0, 3, 1],
};

const STATUS = {
  prep: 'QUESTION_PREPARATION',
  active: 'ROUND_ACTIVE',
  popped: 'FLASK_POPPED',
  cleared: 'CATEGORY_CLEARED',
  complete: 'MATCH_COMPLETE',
};

const MAX_ATTEMPTS_PER_TURN = 40; // stops answer-bank enumeration; far above human typing
const DANGER = ['calm', 'bubbling', 'foaming', 'frantic'];

// Validate host settings against the current player count. Returns { settings, errors }.
function cleanSettings(input, current = DEFAULTS, playerCount = 0) {
  const s = { ...DEFAULTS, ...current };
  const errors = [];
  const src = input && typeof input === 'object' ? input : {};
  for (const [k, [lo, hi, step]] of Object.entries(LIMITS)) {
    if (!(k in src)) continue;
    const v = Number(src[k]);
    if (!Number.isFinite(v) || v < lo || v > hi || Math.round(v / step) * step !== v) errors.push(`${k} must be ${lo}-${hi}${step > 1 ? ` in steps of ${step}` : ''}`);
    else s[k] = v;
  }
  if ('emergencyPassEnabled' in src) s.emergencyPassEnabled = !!src.emergencyPassEnabled;
  if ('visibility' in src) {
    if (src.visibility === 'PUBLIC' || src.visibility === 'PRIVATE') s.visibility = src.visibility;
    else errors.push('visibility must be PUBLIC or PRIVATE');
  }
  if (s.startingHearts > s.heartCap) errors.push('Starting hearts cannot be more than the heart cap');
  if (s.minimumFuseSeconds > s.maximumFuseSeconds) errors.push('Shortest fuse cannot be longer than the longest fuse');
  if (s.minimumTurnSeconds > s.maximumFuseSeconds) errors.push('Minimum turn cannot be longer than the longest fuse');
  if (s.maxPlayers < playerCount) errors.push(`There are already ${playerCount} players in the room`);
  return errors.length ? { settings: { ...DEFAULTS, ...current }, errors } : { settings: s, errors };
}

// A question needs enough answers for the flask to go round the table several times.
const neededAnswers = (alive) => Math.max(25, alive * 8);

// Pick the next question: big enough for the table, not played yet this match (or least recently played),
// and not the same category as the last one when there is a choice.
function chooseQuestion(questions, alive, playedAt, lastCategory, rng) {
  if (!questions.length) return null;
  let pool = questions.filter((q) => q.answers.length >= neededAnswers(alive));
  // shortcut: a very large table can outgrow every question; fall back to the five biggest pools.
  if (!pool.length) pool = [...questions].sort((a, b) => b.answers.length - a.answers.length).slice(0, 5);
  const fresh = pool.filter((q) => !playedAt.has(q.id));
  let candidates = fresh;
  if (!candidates.length) {
    const oldest = Math.min(...pool.map((q) => playedAt.get(q.id)));
    candidates = pool.filter((q) => playedAt.get(q.id) === oldest);
  }
  const otherCat = candidates.filter((q) => q.category !== lastCategory);
  if (otherCat.length) candidates = otherCat;
  return candidates[Math.floor(rng() * candidates.length)];
}

function newStats() {
  return {
    turns: 0, accepted: 0, invalid: 0, duplicate: 0, responseMsTotal: 0, fastestMs: null,
    tierCounts: Object.fromEntries(rf.TIER_ORDER.map((t) => [t, 0])),
    heartsLost: 0, heartsEarned: 0, emergencyUsed: 0, popsReceived: 0, best: null,
  };
}

// players: [{ id, name, avatar }] in seat order. questions: bank questions with `.index` built.
function createMatch({ id, players, settings, questions, now, rng = Math.random, firstSeat }) {
  const s = Object.freeze({ ...DEFAULTS, ...settings });
  if (players.length < s.minimumPlayers) throw new Error('not enough players');
  const m = {
    id, settings: s, questions, rng,
    players: players.map((p, seat) => ({
      id: p.id, name: p.name, avatar: p.avatar, seat,
      hearts: s.startingHearts, progress: 0, points: 0, extraHearts: 0,
      passesLeft: s.emergencyPassEnabled ? s.emergencyPasses : 0,
      alive: true, connected: true, placement: null, attempts: 0, turnStartedAt: 0, stats: newStats(),
    })),
    phase: 'prep', phaseEndsAt: 0, startSeat: Number.isInteger(firstSeat) ? firstSeat : Math.floor(rng() * players.length),
    question: null, questionInstance: 0, playedAt: new Map(), lastCategory: null,
    used: new Map(), history: [],
    holderSeat: -1, turnId: 0, fuseGeneration: 0, fuseStartedAt: 0, fuseDeadline: 0, dangerCuts: [], danger: 0,
    replies: new Map(), events: [], winnerId: null, startedAt: now, completedAt: null,
  };
  presentQuestion(m, now);
  return m;
}

const byId = (m, pid) => m.players.find((p) => p.id === pid);
const aliveCount = (m) => m.players.filter((p) => p.alive).length;
const holder = (m) => (m.holderSeat >= 0 ? m.players[m.holderSeat] : null);
const emit = (m, type, data = {}) => m.events.push({ type, matchId: m.id, questionInstanceId: qiId(m), turnId: m.turnId, ...data });
const qiId = (m) => `${m.id}:q${m.questionInstance}`;

// First alive seat clockwise from `from`. inclusive: `from` itself counts.
function nextAliveSeat(m, from, inclusive = false) {
  const n = m.players.length;
  for (let k = inclusive ? 0 : 1; k <= n; k++) {
    const p = m.players[(((from + k) % n) + n) % n];
    if (p.alive) return p.seat;
  }
  return -1;
}

function presentQuestion(m, now) {
  const q = chooseQuestion(m.questions, aliveCount(m), m.playedAt, m.lastCategory, m.rng);
  m.questionInstance++;
  m.question = q;
  m.playedAt.set(q.id, m.questionInstance);
  m.lastCategory = q.category;
  m.used = new Map(); // answers may repeat across questions, never within one
  m.history = [];
  m.holderSeat = -1;
  m.phase = 'prep';
  m.phaseEndsAt = now + m.settings.roundCountdownSeconds * 1000;
  emit(m, 'question_presented', { question: publicQuestion(q) });
}

// Danger bands are coarse and their edges move by several seconds on every fuse,
// so watching when the flask changes look never tells you the exact time left.
function rollDangerCuts(m) {
  const r = () => m.rng();
  m.dangerCuts = [16000 + r() * 5000, 9000 + r() * 4000, 4000 + r() * 3000]; // bubbling, foaming, frantic (ms left)
}
function dangerAt(m, now) {
  const left = m.fuseDeadline - now;
  let band = 0;
  m.dangerCuts.forEach((cut, i) => {
    if (left < cut) band = i + 1;
  });
  return band;
}

function startTurn(m, seat, now) {
  m.holderSeat = seat;
  m.turnId++;
  const p = m.players[seat];
  p.attempts = 0;
  p.turnStartedAt = now;
  p.stats.turns++;
}

function activate(m, now) {
  const seat = nextAliveSeat(m, m.startSeat, true);
  const s = m.settings;
  const fuseMs = (s.minimumFuseSeconds + m.rng() * (s.maximumFuseSeconds - s.minimumFuseSeconds)) * 1000;
  m.fuseGeneration++;
  m.fuseStartedAt = now;
  m.fuseDeadline = now + fuseMs;
  rollDangerCuts(m);
  m.danger = dangerAt(m, now);
  m.phase = 'active';
  m.phaseEndsAt = 0;
  startTurn(m, seat, now);
  emit(m, 'turn_started', { holderId: m.players[seat].id, danger: DANGER[m.danger], fresh: true });
}

// Hand the flask on. The fuse keeps running; the receiver is guaranteed the minimum turn time.
function passTo(m, seat, now) {
  const minMs = m.settings.minimumTurnSeconds * 1000;
  if (m.fuseDeadline - now < minMs) {
    m.fuseDeadline = now + minMs;
    m.fuseGeneration++; // any wake-up computed for the old deadline is now obsolete
  }
  startTurn(m, seat, now);
  const band = dangerAt(m, now);
  if (band !== m.danger) {
    m.danger = band;
    emit(m, 'danger_changed', { danger: DANGER[band] });
  }
}

function finish(m, now) {
  const last = m.players.find((p) => p.alive);
  if (last) {
    last.placement = 1;
    m.winnerId = last.id;
  }
  m.phase = 'complete';
  m.phaseEndsAt = 0;
  m.holderSeat = -1;
  m.completedAt = now;
  emit(m, 'match_complete', { winnerId: m.winnerId });
}

function eliminate(m, p, reason) {
  p.placement = aliveCount(m); // counted while still alive: first out of six gets 6th
  p.alive = false;
  p.hearts = 0;
  emit(m, 'player_eliminated', { playerId: p.id, placement: p.placement, reason });
}

function pop(m, at) {
  const p = holder(m);
  m.phase = 'popped';
  m.holderSeat = -1;
  p.hearts--;
  p.stats.heartsLost++;
  p.stats.popsReceived++;
  emit(m, 'flask_popped', { playerId: p.id, hearts: p.hearts });
  if (p.hearts <= 0) eliminate(m, p, 'popped');
  m.startSeat = p.seat + 1; // the next surviving seat clockwise gets the fresh flask
  if (aliveCount(m) <= 1) return finish(m, at);
  m.phaseEndsAt = at + m.settings.popFreezeMilliseconds;
}

// Settle everything that is due at `now`. Safe to call any number of times.
function advance(m, now) {
  for (let guard = 0; guard < 20; guard++) {
    if (m.phase === 'complete') return;
    if (m.phase === 'active') {
      if (now >= m.fuseDeadline) {
        pop(m, now);
        continue;
      }
      const band = dangerAt(m, now);
      if (band !== m.danger) {
        m.danger = band;
        emit(m, 'danger_changed', { danger: DANGER[band] });
      }
      return;
    }
    if (now < m.phaseEndsAt) return;
    if (m.phase === 'prep') activate(m, now);
    else presentQuestion(m, now); // after a pop or a cleared category
  }
}

// When the server should next call advance(). null when nothing is scheduled.
function nextWakeAt(m) {
  if (m.phase === 'complete') return null;
  if (m.phase !== 'active') return m.phaseEndsAt;
  let at = m.fuseDeadline;
  // Band i+1 starts once less than cut i is left; wake for the next band not reached yet.
  m.dangerCuts.forEach((cut, i) => {
    if (m.danger < i + 1) at = Math.min(at, m.fuseDeadline - cut + 1);
  });
  return at;
}

// Shared guard for every in-turn action. Returns an error reply or null.
function turnGuard(m, p, payload) {
  if (!p) return { status: 'not_in_match' };
  if (m.phase !== 'active') return { status: 'closed' };
  if (!p.alive) return { status: 'eliminated' };
  if (payload.questionInstanceId !== qiId(m) || payload.turnId !== m.turnId) return { status: 'stale' };
  if (holder(m) !== p) return { status: 'not_your_turn' };
  return null;
}

function remember(m, submissionId, reply) {
  if (typeof submissionId === 'string' && submissionId) {
    m.replies.set(submissionId, reply);
    if (m.replies.size > 500) m.replies.delete(m.replies.keys().next().value);
  }
  return reply;
}

// payload: { questionInstanceId, turnId, submissionId, answer }
function submitAnswer(m, pid, payload, now) {
  advance(m, now);
  const pl = payload && typeof payload === 'object' ? payload : {};
  if (typeof pl.submissionId === 'string' && m.replies.has(pl.submissionId)) return m.replies.get(pl.submissionId);
  const p = byId(m, pid);
  const bad = turnGuard(m, p, pl);
  if (bad) return bad; // out-of-turn text is never validated, so it cannot probe the answer bank
  if (++p.attempts > MAX_ATTEMPTS_PER_TURN) return { status: 'limit' };
  const text = String(pl.answer ?? '').slice(0, 80);
  const q = m.question;
  const r = rf.matchAnswer(q.index, text);
  if (r.kind === 'match' || r.kind === 'suggest') {
    if (m.used.has(r.index)) {
      p.stats.duplicate++;
      const name = q.answers[r.index].name;
      emit(m, 'answer_rejected', { playerId: p.id, reason: 'used', text, answer: name });
      return remember(m, pl.submissionId, { status: 'used', answer: name });
    }
    // A typo only suggests; the player confirms by sending the exact name, which goes through every check again.
    if (r.kind === 'suggest') return { status: 'suggest', suggestion: q.answers[r.index].name };
    return remember(m, pl.submissionId, accept(m, p, r.index, now));
  }
  if (r.kind === 'ambiguous') return { status: 'ambiguous' };
  p.stats.invalid++;
  emit(m, 'answer_rejected', { playerId: p.id, reason: 'unknown', text });
  return remember(m, pl.submissionId, { status: 'unknown' });
}

function accept(m, p, index, now) {
  const a = m.question.answers[index];
  const points = rf.scoreFor(a.tier);
  const s = m.settings;
  m.used.set(index, p.id);
  m.history.push({ answer: a.name, by: p.id, tier: a.tier, points });
  const ms = now - p.turnStartedAt;
  const st = p.stats;
  st.accepted++;
  st.responseMsTotal += ms;
  st.fastestMs = st.fastestMs === null ? ms : Math.min(st.fastestMs, ms);
  st.tierCounts[a.tier]++;
  if (!st.best || points > st.best.points) st.best = { answer: a.name, tier: a.tier, points };
  p.points += points;
  // Extra hearts: overflow carries into the next meter. At the cap the meter fills to the threshold and waits there,
  // and only a later accepted answer turns it into a heart (so a pop is never undone instantly).
  p.progress += points;
  let heartsAwarded = 0;
  while (p.progress >= s.pointsPerHeart && p.hearts < s.heartCap) {
    p.progress -= s.pointsPerHeart;
    p.hearts++;
    p.extraHearts++;
    st.heartsEarned++;
    heartsAwarded++;
  }
  if (p.hearts >= s.heartCap) p.progress = Math.min(p.progress, s.pointsPerHeart);
  const exhausted = m.used.size >= m.question.answers.length;
  const nextSeat = nextAliveSeat(m, p.seat);
  const ev = {
    playerId: p.id, answer: a.name, tier: a.tier, points, fact: a.tier === 'legendary' ? a.fact || '' : '',
    heartsAwarded, hearts: p.hearts, progress: p.progress,
  };
  if (exhausted) {
    emit(m, 'answer_accepted', { ...ev, nextHolderId: null });
    m.phase = 'cleared';
    m.holderSeat = -1;
    m.startSeat = nextSeat;
    m.phaseEndsAt = now + s.clearedPauseMilliseconds;
    emit(m, 'category_cleared', {});
  } else {
    passTo(m, nextSeat, now);
    emit(m, 'answer_accepted', { ...ev, nextHolderId: m.players[nextSeat].id, nextTurnId: m.turnId });
  }
  if (heartsAwarded) emit(m, 'heart_earned', { playerId: p.id, hearts: p.hearts, count: heartsAwarded });
  return { status: 'accepted', answer: a.name, tier: a.tier, points, heartsAwarded };
}

// payload: { questionInstanceId, turnId, submissionId }
function emergencyPass(m, pid, payload, now) {
  advance(m, now);
  const pl = payload && typeof payload === 'object' ? payload : {};
  if (typeof pl.submissionId === 'string' && m.replies.has(pl.submissionId)) return m.replies.get(pl.submissionId);
  const p = byId(m, pid);
  const bad = turnGuard(m, p, pl);
  if (bad) return bad;
  if (!m.settings.emergencyPassEnabled || p.passesLeft <= 0) return { status: 'no_pass' };
  p.passesLeft--;
  p.stats.emergencyUsed++;
  const seat = nextAliveSeat(m, p.seat);
  passTo(m, seat, now);
  emit(m, 'flask_passed', { playerId: p.id, nextHolderId: m.players[seat].id, emergency: true, passesLeft: p.passesLeft });
  return remember(m, pl.submissionId, { status: 'passed', passesLeft: p.passesLeft });
}

function setConnected(m, pid, connected) {
  const p = byId(m, pid);
  if (p) p.connected = !!connected;
}

// A player left for good (or never came back). They are out; a held flask moves on with the fuse still running.
function forfeit(m, pid, now) {
  advance(m, now);
  const p = byId(m, pid);
  if (!p || !p.alive || m.phase === 'complete') return;
  const wasHolder = holder(m) === p;
  eliminate(m, p, 'left');
  if (aliveCount(m) <= 1) return finish(m, now);
  if (wasHolder && m.phase === 'active') {
    const seat = nextAliveSeat(m, p.seat);
    passTo(m, seat, now);
    emit(m, 'flask_passed', { playerId: p.id, nextHolderId: m.players[seat].id, emergency: false, left: true });
  }
}

function drainEvents(m) {
  const ev = m.events;
  m.events = [];
  return ev;
}

function publicQuestion(q) {
  return { id: q.id, prompt: q.prompt, qualifier: q.qualifier, category: q.category };
}

// What clients may see. Built from an allowlist: the fuse deadline, its length and the danger-band edges never leave the server.
function publicView(m, now) {
  const s = m.settings;
  const view = {
    matchId: m.id,
    status: STATUS[m.phase],
    questionInstanceId: qiId(m),
    turnId: m.turnId,
    question: m.question && m.phase !== 'complete' ? publicQuestion(m.question) : null,
    holderId: m.phase === 'active' ? holder(m).id : null,
    danger: m.phase === 'active' ? DANGER[m.danger] : null,
    countdownMs: m.phase === 'prep' ? Math.max(0, Math.round(m.phaseEndsAt - now)) : null,
    history: m.history.map((h) => ({ ...h })),
    rules: { heartCap: s.heartCap, pointsPerHeart: s.pointsPerHeart, emergencyPassEnabled: s.emergencyPassEnabled, startingHearts: s.startingHearts },
    players: m.players.map((p) => ({
      id: p.id, name: p.name, avatar: p.avatar, seat: p.seat, hearts: p.hearts, progress: p.progress, points: p.points,
      extraHearts: p.extraHearts, passesLeft: p.passesLeft, alive: p.alive, connected: p.connected, placement: p.placement,
    })),
    winnerId: m.winnerId,
  };
  if (m.phase === 'complete') view.results = results(m);
  return view;
}

function results(m) {
  return m.players
    .map((p) => ({
      id: p.id, name: p.name, avatar: p.avatar, placement: p.placement, hearts: p.hearts, points: p.points,
      extraHearts: p.extraHearts, accepted: p.stats.accepted, pops: p.stats.popsReceived, best: p.stats.best,
      stats: {
        ...p.stats, tierCounts: { ...p.stats.tierCounts },
        avgResponseMs: p.stats.accepted ? Math.round(p.stats.responseMsTotal / p.stats.accepted) : null,
      },
    }))
    .sort((a, b) => a.placement - b.placement);
}

module.exports = {
  DEFAULTS, LIMITS, STATUS, DANGER, MAX_ATTEMPTS_PER_TURN,
  cleanSettings, neededAnswers, chooseQuestion, createMatch, advance, nextWakeAt, submitAnswer, emergencyPass,
  setConnected, forfeit, drainEvents, publicView, nextAliveSeat,
};
