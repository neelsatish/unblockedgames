/* global io, Scene */
(function () {
  const TIERS = {
    textbook: { name: 'TEXTBOOK', points: 10, emoji: '⬜', blurb: 'The answer everyone thinks of first.' },
    tryhard: { name: 'TRY-HARD', points: 20, emoji: '🟧', blurb: "Sounds obscure, but it's the one everyone trying to be clever picks." },
    honours: { name: 'HONOURS', points: 40, emoji: '🟦', blurb: "A solid answer. You're moving past the obvious." },
    rare: { name: 'RARE FIND', points: 60, emoji: '🟪', blurb: 'Genuinely uncommon. Nice find.' },
    deep: { name: 'DEEP LORE', points: 80, emoji: '🟥', blurb: 'Very few people would think of that.' },
    legendary: { name: 'LEGENDARY', points: 100, emoji: '🟨', blurb: 'An extraordinary find.' },
  };
  const ORDER = ['textbook', 'tryhard', 'honours', 'rare', 'deep', 'legendary'];
  const ANSWER_MS = 25000;
  const PREP_MS = 3000;
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  };
  const fmtM = (m) => `${Math.round(m).toLocaleString('en-US')} m`;

  // ---------- settings & identity ----------
  const store = {
    get: (k, d) => {
      try {
        const v = localStorage.getItem(k);
        return v === null ? d : JSON.parse(v);
      } catch {
        return d;
      }
    },
    set: (k, v) => {
      try {
        localStorage.setItem(k, JSON.stringify(v));
      } catch { /* private mode */ }
    },
  };
  let guest = store.get('rf-guest', null);
  if (!guest) {
    guest = (crypto.randomUUID && crypto.randomUUID()) || String(Math.random()).slice(2);
    store.set('rf-guest', guest);
  }
  const settings = { sound: store.get('rf-sound', true), motion: store.get('rf-motion', matchMedia('(prefers-reduced-motion: reduce)').matches) };
  const nameNow = () => localStorage.getItem('dd-name') || 'Player';
  const colorNow = () => localStorage.getItem('dd-color') || '#7C3AED';
  const applyMotion = () => document.documentElement.classList.toggle('reduce-motion', settings.motion);
  applyMotion();

  // ---------- sound (synthesised, nothing to download) ----------
  let audio;
  const unlock = () => {
    try {
      audio = audio || new AudioContext();
      audio.resume();
    } catch { /* no audio */ }
  };
  function tone(freq, at, dur, type = 'square', vol = 0.06) {
    const t0 = audio.currentTime + at;
    const o = audio.createOscillator(), g = audio.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(vol, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g).connect(audio.destination);
    o.start(t0);
    o.stop(t0 + dur + 0.02);
  }
  const SFX = {
    click: () => tone(660, 0, 0.05),
    tick: () => tone(1250, 0, 0.03, 'square', 0.03),
    count: () => tone(523, 0, 0.12),
    go: () => (tone(784, 0, 0.08), tone(1046, 0.08, 0.16)),
    reject: () => (tone(220, 0, 0.12, 'sawtooth', 0.05), tone(165, 0.1, 0.16, 'sawtooth', 0.05)),
    ask: () => (tone(660, 0, 0.08), tone(880, 0.1, 0.08)),
    pass: (i) => tone(440 * Math.pow(1.19, i), 0, 0.07, 'triangle', 0.08),
    lock: () => tone(988, 0, 0.1, 'triangle', 0.08),
    timeup: () => (tone(392, 0, 0.18, 'square', 0.05), tone(262, 0.18, 0.3, 'square', 0.05)),
    tier: (t) => {
      const base = { textbook: 330, tryhard: 370, honours: 440, rare: 523, deep: 587, legendary: 659 }[t];
      const steps = { textbook: [0], tryhard: [0, 3], honours: [0, 4, 7], rare: [0, 4, 7, 12], deep: [0, 3, 7, 12, 15], legendary: [0, 4, 7, 12, 16, 19, 24] }[t];
      steps.forEach((s, i) => tone(base * Math.pow(2, s / 12), i * 0.08, t === 'legendary' ? 0.3 : 0.16, t === 'legendary' ? 'triangle' : 'square', 0.07));
      if (t === 'legendary') tone(base * 2, 0.62, 0.6, 'triangle', 0.06);
    },
    done: () => [523, 659, 784, 1046].forEach((f, i) => tone(f, i * 0.12, 0.25, 'triangle', 0.07)),
  };
  const sfx = (name, arg) => {
    if (!settings.sound || !audio) return;
    try {
      SFX[name](arg);
    } catch { /* ignore */ }
  };

  // ---------- socket ----------
  const socket = io('/rare');
  let state = null, stateAt = 0, meta = null;
  let revealedRound = -1, suggestion = null, lastTickSec = -1, autoSent = false, countdownShown = -1, inflight = false;
  let shownScore = 0, shownDist = 0;

  socket.on('connect', () => {
    if (!socket.recovered) {
      const r = sessionStorage.getItem('rf-resume');
      if (r) socket.emit('resume', { code: r, guest }, (ok) => !ok && sessionStorage.removeItem('rf-resume'));
    }
  });
  socket.on('problem', (msg) => {
    $('menu-error').textContent = msg;
    show('menu');
  });
  socket.on('note', (msg) => toast(msg));
  socket.emit('meta', null, (m) => {
    meta = m;
    $('daily-num').textContent = `#${m.dayNumber}`;
    $('footnote').textContent = `${m.questions} prompts in the bank · data checked ${m.version.slice(0, 10)}`;
    renderDailyStatus();
  });

  function toast(msg) {
    const t = $('toast');
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toast.t);
    toast.t = setTimeout(() => (t.hidden = true), 2400);
  }

  function show(id) {
    for (const s of ['menu', 'lobby', 'game', 'results']) $(s).hidden = s !== id;
  }

  // ---------- menu ----------
  const dailyKey = () => `rf-daily-${meta?.day}`;
  function renderDailyStatus() {
    const done = meta && store.get(dailyKey(), null);
    const box = $('daily-status');
    if (!done) return (box.hidden = true);
    box.hidden = false;
    const left = Math.max(0, meta.nextResetIn - (performance.now() - metaAt));
    const h = Math.floor(left / 3600000), m = Math.floor((left % 3600000) / 60000), s = Math.floor((left % 60000) / 1000);
    box.textContent = `Today's run: ${done.score} / 700 · next run in ${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    $('play-daily').innerHTML = '&#9654; REPLAY TODAY (PRACTICE)';
  }
  const metaAt = performance.now();
  setInterval(() => !$('menu').hidden && renderDailyStatus(), 1000);

  function create(mode) {
    unlock();
    sfx('click');
    $('menu-error').textContent = '';
    socket.emit('create', { mode, name: nameNow(), color: colorNow(), guest, recent: store.get('rf-recent', []) });
  }
  $('play-daily').onclick = () => create('daily');
  $('play-unlimited').onclick = () => create('unlimited');
  $('play-party').onclick = () => create('party');
  $('join-form').onsubmit = (e) => {
    e.preventDefault();
    unlock();
    const code = $('join-code').value.trim().toUpperCase();
    if (!/^[A-Z]{5}$/.test(code)) return ($('menu-error').textContent = 'Room codes are 5 letters.');
    socket.emit('join', { code, name: nameNow(), color: colorNow(), guest });
  };
  const inviteRoom = new URLSearchParams(location.search).get('room');
  if (inviteRoom) $('join-code').value = inviteRoom.toUpperCase();

  // how to play
  const tt = $('tier-table');
  for (const k of ORDER) {
    const tr = el('tr', `t-${k}`);
    const a = el('td');
    a.append(el('span', '', TIERS[k].name));
    a.style.color = 'var(--tc)';
    tr.append(a, el('td', 'muted', TIERS[k].blurb), el('td', '', `+${TIERS[k].points}`));
    tt.append(tr);
  }
  $('open-how').onclick = () => $('how').showModal();
  $('open-settings').onclick = () => {
    $('set-name').value = nameNow();
    $('set-sound').checked = settings.sound;
    $('set-motion').checked = settings.motion;
    $('settings').showModal();
  };
  $('set-name').onchange = (e) => localStorage.setItem('dd-name', e.target.value.trim().slice(0, 20));
  $('set-sound').onchange = (e) => {
    settings.sound = e.target.checked;
    store.set('rf-sound', settings.sound);
    syncMute();
  };
  $('set-motion').onchange = (e) => {
    settings.motion = e.target.checked;
    store.set('rf-motion', settings.motion);
    applyMotion();
  };
  const syncMute = () => $('mute').classList.toggle('off', !settings.sound);
  $('mute').onclick = () => {
    unlock();
    settings.sound = !settings.sound;
    store.set('rf-sound', settings.sound);
    syncMute();
  };
  syncMute();

  // ---------- state routing ----------
  socket.on('state', (s) => {
    const prev = state;
    state = s;
    stateAt = performance.now();
    if (s.code) sessionStorage.setItem('rf-resume', s.code);
    if (s.mode === 'party' && s.phase === 'lobby') return renderLobby();
    if (s.phase === 'final') return renderResults();
    show('game');
    if (s.phase === 'reveal' && s.reveal) myLog[s.round] = s.reveal.results.find((r) => r.id === s.you) || myLog[s.round];
    renderHud();
    renderLocks();
    if (s.phase === 'prep' && (!prev || prev.phase !== 'prep' || prev.round !== s.round)) startPrep();
    if (s.phase === 'answer' && (!prev || prev.phase !== 'answer' || prev.round !== s.round)) startAnswer();
    if (s.phase === 'reveal' && revealedRound !== s.round) runReveal();
    if (s.phase === 'reveal') renderRevealFooter();
  });

  function me() {
    return state?.players.find((p) => p.id === state.you);
  }

  // ---------- lobby ----------
  function renderLobby() {
    show('lobby');
    $('lobby-code').textContent = state.code;
    $('lobby-link').value = `${location.origin}/rare/?room=${state.code}`;
    const ul = $('lobby-players');
    ul.replaceChildren();
    for (const p of state.players) {
      const li = el('li');
      const d = el('span', 'dot');
      d.style.background = p.color;
      li.append(d, el('span', '', p.name + (p.id === state.hostId ? ' (host)' : '') + (p.id === state.you ? ' · you' : '')));
      ul.append(li);
    }
    const host = state.hostId === state.you;
    $('lobby-start').hidden = !host;
    $('lobby-start').disabled = false;
    $('lobby-wait').hidden = host;
  }
  $('lobby-start').onclick = () => socket.emit('start');
  $('copy-link').onclick = async () => {
    try {
      await navigator.clipboard.writeText($('lobby-link').value);
    } catch {
      $('lobby-link').select();
      document.execCommand('copy');
    }
    toast('Invite link copied');
  };
  $('lobby-leave').onclick = leave;
  $('quit').onclick = () => {
    if (confirm(state?.mode === 'party' ? 'Leave this friends game?' : 'Quit this run? Your progress will be lost.')) leave();
  };
  function leave() {
    socket.emit('leave');
    sessionStorage.removeItem('rf-resume');
    state = null;
    revealedRound = -1;
    Scene.jump(0);
    Scene.clearGolden();
    shownScore = shownDist = 0;
    myLog.length = 0;
    show('menu');
    renderDailyStatus();
  }

  // ---------- HUD ----------
  function renderHud() {
    const p = me();
    const pips = $('pips');
    pips.replaceChildren();
    for (let i = 0; i < state.rounds; i++) {
      const r = (finalLogFor(i) || {}).tier;
      const pip = el('span', 'pip' + (i === state.round && state.phase !== 'reveal' ? ' current' : ''));
      if (i < state.round || (i === state.round && state.phase === 'reveal')) pip.style.background = r ? `var(--t-${r})` : 'var(--bad)';
      pips.append(pip);
    }
    if (state.phase !== 'reveal') setHud(p.score);
    const q = state.question;
    if (q) {
      $('prompt-kicker').textContent = `PROMPT ${state.round + 1} OF ${state.rounds}${state.mode === 'daily' ? ` · RUN #${state.dayNumber}` : state.mode === 'party' ? ' · FRIENDS' : ' · UNLIMITED'}`;
      $('prompt-text').textContent = q.prompt;
      $('prompt-qual').textContent = q.qualifier || '';
    }
  }
  const myLog = [];
  function finalLogFor(i) {
    return myLog[i];
  }
  function setHud(score) {
    shownScore = score;
    shownDist = score * 10;
    $('hud-score').textContent = score;
    $('hud-dist').textContent = fmtM(shownDist);
    $('hud-zone').textContent = Scene.zoneAt(shownDist).toUpperCase();
  }
  function countUp(from, to, ms) {
    const t0 = performance.now();
    (function step(now) {
      const t = settings.motion ? 1 : Math.min(1, (now - t0) / ms);
      const v = Math.round(from + (to - from) * (1 - Math.pow(1 - t, 3)));
      $('hud-score').textContent = v;
      $('hud-dist').textContent = fmtM(v * 10);
      $('hud-zone').textContent = Scene.zoneAt(v * 10).toUpperCase();
      if (t < 1) requestAnimationFrame(step);
      else setHud(to);
    })(t0);
  }
  function renderLocks() {
    const ul = $('locks');
    ul.replaceChildren();
    if (state.mode !== 'party') return;
    for (const p of state.players) {
      const li = el('li');
      const d = el('span', 'dot');
      d.style.background = p.color;
      li.append(d, el('span', '', p.name), el('span', p.locked ? 'ok' : 'muted', p.locked ? '✓' : p.connected === false ? 'offline' : '...'));
      ul.append(li);
    }
  }

  // ---------- rounds ----------
  function resetRoundUi() {
    $('reveal').hidden = true;
    $('track').hidden = true;
    $('prompt-card').hidden = false;
    $('answer-form').hidden = false;
    $('feedback').textContent = '';
    $('feedback').className = 'feedback';
    $('answer').value = '';
    suggestion = null;
    autoSent = false;
    inflight = false;
    lastTickSec = -1;
    Scene.setMood('idle', 1);
  }
  function startPrep() {
    resetRoundUi();
    $('prompt-card').style.animation = 'none';
    void $('prompt-card').offsetWidth;
    $('prompt-card').style.animation = '';
    $('answer').disabled = true;
    $('go').disabled = true;
    countdownShown = -1;
  }
  function startAnswer() {
    if ($('reveal').hidden === false) resetRoundUi();
    $('countdown').hidden = true;
    const locked = !!me()?.locked;
    $('answer').disabled = locked;
    $('go').disabled = locked;
    if (locked) {
      $('feedback').textContent = 'Locked in. Waiting for the round to end...';
      $('feedback').className = 'feedback ok';
      return;
    }
    sfx('go');
    if (matchMedia('(pointer: fine)').matches) $('answer').focus();
  }

  // Timer and countdown, computed from the server deadline (never by counting down locally).
  setInterval(() => {
    if (!state || $('game').hidden) return;
    const left = Math.max(0, state.timeLeft - (performance.now() - stateAt));
    if (state.phase === 'prep') {
      const n = Math.ceil(left / 1000);
      $('countdown').hidden = n <= 0;
      if (n !== countdownShown && n > 0) {
        countdownShown = n;
        $('countdown').textContent = n;
        sfx('count');
      }
      setTimer(ANSWER_MS, ANSWER_MS);
    } else if (state.phase === 'answer') {
      setTimer(left, ANSWER_MS);
      const sec = Math.ceil(left / 1000);
      if (sec <= 5 && sec > 0 && sec !== lastTickSec && !me()?.locked) {
        lastTickSec = sec;
        sfx('tick');
      }
      // At the buzzer, whatever valid answer is in the box still counts (exact matches only).
      const pendingSuggestion = suggestion && $('answer').value === suggestion;
      if (left <= 0 && !autoSent && !me()?.locked && !pendingSuggestion && $('answer').value.trim()) {
        autoSent = true;
        submit(true);
      }
    }
  }, 100);
  function setTimer(ms, total) {
    const sec = Math.ceil(ms / 1000);
    $('timer-num').textContent = sec;
    const c = 2 * Math.PI * 15;
    $('timer-ring').style.strokeDasharray = c;
    $('timer-ring').style.strokeDashoffset = c * (1 - ms / total);
    const t = $('timer');
    t.classList.toggle('warm', sec <= 15 && sec > 8);
    t.classList.toggle('amber', sec <= 8 && sec > 3);
    t.classList.toggle('red', sec <= 3);
  }

  // ---------- answering ----------
  let typingT;
  $('answer').addEventListener('input', () => {
    if (suggestion && $('answer').value !== suggestion) suggestion = null;
    clearTimeout(typingT);
    typingT = setTimeout(() => socket.emit('typing', $('answer').value), 150);
  });
  $('answer-form').onsubmit = (e) => {
    e.preventDefault();
    unlock();
    submit(false);
  };
  function submit(auto) {
    const text = $('answer').value.trim();
    if (!text || inflight || !state || state.phase !== 'answer') return;
    inflight = true;
    socket.emit('answer', { text }, (res) => {
      inflight = false;
      const fb = $('feedback');
      if (!res) return;
      if (res.status === 'accepted') {
        fb.textContent = state.mode === 'party' ? `Locked in: ${res.answer}. Waiting for the others...` : `Locked in: ${res.answer}`;
        fb.className = 'feedback ok';
        $('answer').disabled = true;
        $('go').disabled = true;
        sfx('lock');
      } else if (res.status === 'suggest') {
        suggestion = res.suggestion;
        $('answer').value = res.suggestion;
        fb.textContent = `Did you mean "${res.suggestion}"? Press GO again to confirm, or edit it.`;
        fb.className = 'feedback ask';
        sfx('ask');
        $('answer').focus();
        $('answer').select();
      } else if (res.status === 'ambiguous') {
        fb.textContent = 'More than one answer matches that. Be more specific.';
        fb.className = 'feedback ask';
        sfx('ask');
      } else if (res.status === 'none') {
        fb.textContent = auto ? '' : 'Not recognised. Try another answer.';
        fb.className = 'feedback bad';
        shake();
        sfx('reject');
      } else if (res.status === 'locked') {
        fb.textContent = 'Your answer for this prompt is already locked in.';
        fb.className = 'feedback ok';
        $('answer').disabled = true;
        $('go').disabled = true;
      } else if (res.status === 'closed') {
        fb.textContent = auto ? '' : "Time's up for this prompt.";
        fb.className = 'feedback bad';
      } else if (res.status === 'limit') {
        fb.textContent = 'Too many tries this round.';
        fb.className = 'feedback bad';
      }
    });
  }
  function shake() {
    const f = $('answer-form');
    f.classList.remove('shake');
    void f.offsetWidth;
    f.classList.add('shake');
  }

  // ---------- reveal ----------
  const TRACK_M = { textbook: 100, tryhard: 200, honours: 400, rare: 600, deep: 800, legendary: 1000 };
  function buildTrack() {
    const marks = $('track-marks');
    marks.replaceChildren();
    for (const k of ORDER) {
      const m = el('div', `mark t-${k}`, TIERS[k].name);
      m.style.left = `${TRACK_M[k] / 10}%`;
      m.dataset.tier = k;
      marks.append(m);
    }
  }
  buildTrack();

  function runReveal() {
    revealedRound = state.round;
    const rv = state.reveal;
    const mine = rv.results.find((r) => r.id === state.you) || { tier: null, points: 0, total: me()?.score || 0, typed: '' };
    myLog[state.round] = mine;
    if (state.mode === 'unlimited' || state.mode === 'party') {
      const recent = store.get('rf-recent', []);
      store.set('rf-recent', [rv.question.id, ...recent.filter((x) => x !== rv.question.id)].slice(0, 60));
    }
    $('answer').disabled = true;
    $('go').disabled = true;
    $('countdown').hidden = true;
    $('answer-form').hidden = true;
    $('prompt-card').hidden = true;
    $('track').hidden = false;
    $('reveal').hidden = true;
    const target = mine.tier ? TRACK_M[mine.tier] : 0;
    const chip = $('track-chip');
    chip.className = 'track-chip' + (mine.tier === 'legendary' ? ' gold' : '');
    const marks = [...$('track-marks').children];
    marks.forEach((m) => m.classList.remove('passed', 'hit'));
    const before = mine.total - mine.points;
    if (!mine.tier) {
      chip.style.left = '0%';
      $('track-fill').style.width = '0%';
      sfx('timeup');
      Scene.setMood('sad', 1800);
      setTimeout(showRevealPanel, settings.motion ? 0 : 700);
      return;
    }
    // Slide past each marker; Legendary holds for a beat at Deep Lore before the last stretch.
    const dur = settings.motion ? 1 : 500 + target * 0.9;
    const pause = mine.tier === 'legendary' && !settings.motion ? 450 : 0;
    const t0 = performance.now();
    let passed = 0;
    Scene.travel(mine.total * 10, dur + pause);
    countUp(before, mine.total, dur + pause);
    (function step(now) {
      let t = Math.min(1, (now - t0) / (dur + pause));
      let m;
      if (pause) {
        const split = (dur * 0.8) / (dur + pause);
        const holdEnd = (dur * 0.8 + pause) / (dur + pause);
        if (t < split) m = 800 * easeOut(t / split);
        else if (t < holdEnd) m = 800;
        else m = 800 + 200 * easeOut((t - holdEnd) / (1 - holdEnd));
      } else m = target * easeOut(t);
      chip.style.left = `${m / 10}%`;
      $('track-fill').style.width = `${m / 10}%`;
      while (passed < ORDER.length && TRACK_M[ORDER[passed]] <= m + 0.5) {
        marks[passed].classList.add('passed');
        sfx('pass', passed);
        passed++;
      }
      if (t < 1) return requestAnimationFrame(step);
      marks[ORDER.indexOf(mine.tier)].classList.add('hit');
      sfx('tier', mine.tier);
      Scene.setMood(mine.tier === 'legendary' ? 'golden' : ['rare', 'deep'].includes(mine.tier) ? 'celebrate' : 'idle', 2200);
      showRevealPanel();
    })(t0);
  }
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  function showRevealPanel() {
    const rv = state.reveal;
    const mine = rv.results.find((r) => r.id === state.you) || { tier: null, points: 0, total: me()?.score || 0, typed: '', answer: null };
    const box = $('reveal');
    box.replaceChildren();
    box.hidden = false;
    const tk = mine.tier;
    box.className = `panel reveal t-${tk || 'miss'}`;
    box.append(el('div', 'prompt-kicker', `PROMPT ${rv.round + 1}: ${rv.question.prompt}`));
    box.append(el('div', `rv-tier ${tk || ''}`, tk ? TIERS[tk].name : mine.typed ? 'NOT RECOGNISED' : "TIME'S UP"));
    if (mine.answer) box.append(el('div', 'rv-answer', `"${mine.answer}"`));
    else if (mine.typed) box.append(el('div', 'rv-answer muted', `"${mine.typed}"`));
    box.append(el('div', 'rv-points', tk ? `+${mine.points} PTS · +${fmtM(mine.points * 10)}` : '+0 PTS · no distance'));
    box.append(el('div', 'rv-blurb', tk ? TIERS[tk].blurb : 'No points this time.'));
    if (mine.fact) box.append(el('div', 'rv-fact', mine.fact));
    if (tk) box.append(el('div', 'rv-share', mine.share ? `${mine.share.pct}% of ${mine.share.total} answers were this one` : 'Not enough answers yet to show how many players picked this.'));
    if (rv.legendary.length && tk !== 'legendary') box.append(el('div', 'rv-share', `Legendary answer: ${rv.legendary.join(', ')}`));
    if (!tk && mine.typed) box.append(reportButton(rv.round, mine.typed));
    if (state.mode === 'party') {
      const ul = el('ul', 'rv-players');
      for (const r of [...rv.results].sort((a, b) => b.total - a.total)) {
        const li = el('li', `t-${r.tier || 'miss'}`);
        const d = el('span', 'dot');
        d.style.background = r.color;
        li.append(d, el('span', '', `${r.name}: ${r.answer || '—'}`), el('span', 'tl', r.tier ? TIERS[r.tier].name : 'MISS'), el('span', '', `${r.total}`));
        ul.append(li);
      }
      box.append(ul);
    }
    const next = el('button', 'pbtn pbtn-primary rv-next');
    next.id = 'rv-next';
    box.append(next);
    renderRevealFooter();
  }
  function renderRevealFooter() {
    const next = $('rv-next');
    if (!next || !state || state.phase !== 'reveal') return;
    const last = state.round === state.rounds - 1;
    if (state.mode === 'party' && state.hostId !== state.you) {
      next.disabled = true;
      next.textContent = 'WAITING FOR HOST...';
    } else {
      next.disabled = false;
      next.textContent = last ? 'SEE RESULTS ▶' : 'NEXT PROMPT ▶';
    }
    next.onclick = () => {
      sfx('click');
      socket.emit('next');
    };
    if (matchMedia('(pointer: fine)').matches && !next.disabled) next.focus();
  }

  function reportButton(round, text) {
    const b = el('button', 'pbtn pbtn-ghost small', 'Should this have counted? Report it');
    b.type = 'button';
    b.onclick = () => {
      const note = prompt(`Report "${text}" as a missing answer. Add a note or a source (optional):`, '');
      if (note === null) return;
      socket.emit('report', { round, text, note }, (ok) => {
        b.disabled = true;
        b.textContent = ok ? 'Reported. Thanks!' : 'Could not send the report.';
      });
    };
    return b;
  }

  // ---------- results ----------
  function renderResults() {
    show('results');
    Scene.clearGolden();
    const f = state.final;
    const mine = f.players.find((p) => p.id === state.you);
    Scene.travel(mine.score * 10, 600);
    sfx('done');
    $('res-kicker').textContent = state.mode === 'daily' ? `RUN #${state.dayNumber} COMPLETE` : state.mode === 'party' ? 'FRIENDS GAME COMPLETE' : 'UNLIMITED RUN COMPLETE';
    $('res-score').textContent = mine.score;
    $('res-dist').textContent = `${fmtM(mine.score * 10)} across campus · reached the ${Scene.zoneAt(mine.score * 10)}`;
    $('res-rank').textContent = mine.rank.perfect ? 'PERFECT RUN' : TIERS[mine.rank.tier].name;
    $('res-rank').className = `res-rank t-${mine.rank.tier}`;
    const accepted = mine.log.filter((l) => l.tier).length;
    const best = mine.log.filter((l) => l.tier).sort((a, b) => ORDER.indexOf(b.tier) - ORDER.indexOf(a.tier))[0];
    $('res-sub').textContent = `${accepted} / ${state.rounds} answers accepted${best ? ` · best: ${TIERS[best.tier].name}` : ''}`;

    // party standings
    const party = $('res-party');
    party.hidden = state.mode !== 'party';
    if (state.mode === 'party') {
      party.replaceChildren(el('h3', 'sec', 'STANDINGS'));
      const ol = el('ol');
      f.players.forEach((p) => ol.append(el('li', '', `${p.name} — ${p.score} (${fmtM(p.score * 10)})`)));
      party.append(ol);
    }
    // run log
    const log = $('res-log');
    log.replaceChildren();
    mine.log.forEach((l, i) => {
      const li = el('li', `t-${l.tier || 'miss'}`);
      const b = el('button');
      b.type = 'button';
      b.setAttribute('aria-label', `See all answers for prompt ${i + 1}`);
      const mid = el('span');
      mid.append(el('span', 'rl-q', l.prompt), el('span', 'rl-a', l.answer || (l.typed ? `"${l.typed}" (not recognised)` : 'No answer')));
      b.append(el('span', 'rl-n', `${i + 1}`), mid, el('span', 'rl-t', l.tier ? `${TIERS[l.tier].name} +${l.points}` : 'MISS +0'));
      b.onclick = () => openExplorer(i, l.answer);
      li.append(b);
      if (!l.tier && l.typed) li.append(reportButton(i, l.typed));
      log.append(li);
    });
    drawGraph(mine.log);
    // distribution (real daily players only)
    const dist = f.distribution;
    $('res-dist-wrap').hidden = state.mode !== 'daily';
    const dbox = $('res-distribution');
    dbox.replaceChildren();
    if (dist && dist.enough) {
      const below = dist.scores.filter((s) => s < mine.score).length;
      const others = dist.count - 1;
      dbox.append(drawDistribution(dist, mine.score));
      dbox.append(el('div', 'muted small', `${dist.count} runs today · median ${dist.median}${others > 0 ? ` · you beat ${Math.round((100 * below) / others)}% of other players` : ''}`));
    } else if (dist) dbox.append(el('div', 'muted small', `Not enough players yet today to compare (${dist.count} so far). Score counts reset when the server restarts.`));
    // daily save + share
    if (state.mode === 'daily' && !store.get(dailyKey(), null)) store.set(dailyKey(), { score: mine.score, tiers: mine.log.map((l) => l.tier) });
    $('share').onclick = () => share(mine);
    $('again').onclick = () => {
      leave();
      create('unlimited');
    };
    $('party-again').hidden = !(state.mode === 'party' && state.hostId === state.you);
    $('party-again').onclick = () => {
      myLog.length = 0;
      revealedRound = -1;
      Scene.jump(0);
      socket.emit('start');
    };
    $('home').onclick = leave;
    $('res-next').textContent = state.mode === 'daily' ? 'A new run unlocks at midnight New York time.' : '';
    sessionStorage.removeItem('rf-resume');
  }

  function drawGraph(log) {
    const svg = $('res-graph');
    svg.replaceChildren();
    const NS = 'http://www.w3.org/2000/svg';
    const W = 320, H = 120, pad = 14, max = 7000;
    let cum = 0;
    const pts = [[pad, pad]];
    log.forEach((l, i) => {
      const x = pad + ((i + 1) * (W - 2 * pad)) / log.length;
      cum += l.points * 10;
      pts.push([x, pad + (cum / max) * (H - 2 * pad)]);
    });
    for (let m = 0; m <= max; m += 1000) {
      const y = pad + (m / max) * (H - 2 * pad);
      const line = document.createElementNS(NS, 'line');
      Object.entries({ x1: pad, x2: W - pad, y1: y, y2: y, stroke: '#3B3960', 'stroke-width': 0.5 }).forEach(([k, v]) => line.setAttribute(k, v));
      svg.append(line);
    }
    let d = `M${pts[0][0]},${pts[0][1]}`;
    for (let i = 1; i < pts.length; i++) d += ` H${pts[i][0]} V${pts[i][1]}`;
    const path = document.createElementNS(NS, 'path');
    Object.entries({ d, fill: 'none', stroke: '#5CE1E6', 'stroke-width': 2 }).forEach(([k, v]) => path.setAttribute(k, v));
    svg.append(path);
    log.forEach((l, i) => {
      const [x, y] = pts[i + 1];
      const r = document.createElementNS(NS, 'rect');
      Object.entries({ x: x - 4, y: y - 4, width: 8, height: 8, fill: l.tier ? getComputedStyle(document.documentElement).getPropertyValue(`--t-${l.tier}`) : '#FF7B7B', stroke: '#14131F' }).forEach(([k, v]) => r.setAttribute(k, v));
      const t = document.createElementNS(NS, 'title');
      t.textContent = `Prompt ${i + 1}: ${l.tier ? TIERS[l.tier].name : 'miss'} (+${l.points * 10} m)`;
      r.append(t);
      svg.append(r);
    });
  }

  function drawDistribution(dist, score) {
    const NS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 300 80');
    svg.setAttribute('class', 'res-graph');
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', 'How today\'s scores are spread');
    const max = Math.max(...dist.buckets, 1);
    dist.buckets.forEach((n, i) => {
      const h = (n / max) * 60;
      const r = document.createElementNS(NS, 'rect');
      const mineBucket = Math.min(14, Math.floor(score / 50)) === i;
      Object.entries({ x: 6 + i * 19.2, y: 66 - h, width: 16, height: h, fill: mineBucket ? '#FFD54F' : '#4FC3F7' }).forEach(([k, v]) => r.setAttribute(k, v));
      svg.append(r);
    });
    return svg;
  }

  async function share(mine) {
    const head = state.mode === 'daily' ? `Rare Finds #${state.dayNumber}` : 'Rare Finds (Unlimited)';
    const line = mine.log.map((l) => (l.tier ? TIERS[l.tier].emoji : '⬛')).join('');
    const text = `${head}\n${mine.score}/700 · ${fmtM(mine.score * 10)}\n${line}\n${location.origin}/rare/`;
    try {
      await navigator.clipboard.writeText(text);
      toast('Result copied. No spoilers in it.');
    } catch {
      prompt('Copy your result:', text);
    }
  }

  // ---------- answer explorer ----------
  function openExplorer(round, myAnswer) {
    socket.emit('explore', round, (data) => {
      if (!data) return;
      $('ex-title').textContent = data.prompt;
      $('ex-qual').textContent = data.qualifier;
      $('ex-source').textContent = `Source: ${data.source}. Popularity data retrieved ${data.signalsRetrieved || 'n/a'}.`;
      const groups = $('ex-groups');
      const render = (filter) => {
        groups.replaceChildren();
        for (const g of data.groups) {
          const list = g.answers.filter((a) => !filter || a.name.toLowerCase().includes(filter));
          if (!list.length) continue;
          const det = el('details', `t-${g.tier}`);
          det.open = g.tier === 'legendary' || g.tier === 'deep' || !!filter;
          det.append(el('summary', '', `${TIERS[g.tier].name} · +${TIERS[g.tier].points} · ${list.length}`));
          const ul = el('ul');
          for (const a of list.slice(0, 600)) {
            const li = el('li', a.name === myAnswer ? 'mine' : '', a.name);
            if (a.share) li.title = `${a.share.pct}% of answers`;
            ul.append(li);
          }
          if (list.length > 600) ul.append(el('li', 'muted', `+${list.length - 600} more (search to narrow)`));
          det.append(ul);
          groups.append(det);
        }
      };
      $('ex-search').value = '';
      $('ex-search').oninput = (e) => render(e.target.value.trim().toLowerCase());
      render('');
      $('explorer').showModal();
    });
  }

  // ---------- keyboard ----------
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && state?.phase === 'reveal' && !$('reveal').hidden && document.activeElement?.id !== 'rv-next') {
      const n = $('rv-next');
      if (n && !n.disabled) n.click();
    }
  });

  show('menu');
})();
