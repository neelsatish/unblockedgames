// Pop Quiz client. Renders what the server says; never decides an outcome itself.
(function () {
  const $ = (id) => document.getElementById(id);
  const A = window.PopArt;
  const TIERS = {
    textbook: { name: 'Textbook', color: 'var(--t-textbook)' },
    tryhard: { name: 'Try-Hard', color: 'var(--t-tryhard)' },
    honours: { name: 'Honours', color: 'var(--t-honours)' },
    rare: { name: 'Rare Find', color: 'var(--t-rare)' },
    deep: { name: 'Deep Lore', color: 'var(--t-deep)' },
    legendary: { name: 'Legendary', color: 'var(--t-legendary)' },
  };
  const TIER_POINTS = { textbook: 10, tryhard: 20, honours: 40, rare: 60, deep: 80, legendary: 100 };
  const DANGER_WORDS = { calm: 'calm', bubbling: 'bubbling', foaming: 'foaming over', frantic: 'about to pop' };
  const ERRORS = {
    invalid_code: 'Room codes are 4 letters.', not_found: 'No room with that code.', full: 'That room is full.',
    removed: 'The host removed you from that room.', slow_down: 'Too many tries. Wait a minute.', bad_request: 'Something went wrong. Refresh the page.',
    already_in_room: 'You are already in a room.',
  };
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

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
  // One token per browser tab, so two tabs are two players and a refresh keeps your seat.
  let token = sessionStorage.getItem('pq-token');
  if (!token) {
    token = ((crypto.randomUUID && crypto.randomUUID()) || `${Date.now()}-${Math.random()}`).replace(/[^\w-]/g, '').slice(0, 40).padEnd(20, 'x');
    sessionStorage.setItem('pq-token', token);
  }
  const settings = {
    sound: store.get('pq-sound', true), ambient: store.get('pq-ambient', false),
    motion: store.get('pq-motion', matchMedia('(prefers-reduced-motion: reduce)').matches), contrast: store.get('pq-contrast', false),
  };
  const profile = { name: localStorage.getItem('dd-name') || '', avatar: store.get('pq-avatar', A.AVATAR_KEYS[Math.floor(Math.random() * 8)]), size: store.get('pq-size', '4-6') };
  const reduced = () => settings.motion;
  function applySettings() {
    document.documentElement.classList.toggle('reduce-motion', settings.motion);
    document.documentElement.classList.toggle('hc', settings.contrast);
    $('mute').classList.toggle('off', !settings.sound);
    $('mute').setAttribute('aria-label', settings.sound ? 'Sound on' : 'Sound off');
    ambient(settings.ambient && settings.sound);
  }

  // ---------- sound (synthesised) ----------
  let audio, amb = null;
  const unlock = () => {
    try {
      audio = audio || new AudioContext();
      audio.resume();
      if (settings.ambient && settings.sound) ambient(true);
    } catch { /* no audio */ }
  };
  addEventListener('pointerdown', unlock, { once: false, passive: true });
  addEventListener('keydown', unlock, { passive: true });
  function tone(freq, at, dur, type = 'square', vol = 0.05, slide = 0) {
    const t0 = audio.currentTime + at;
    const o = audio.createOscillator(), g = audio.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t0);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, freq * slide), t0 + dur);
    g.gain.setValueAtTime(vol, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g).connect(audio.destination);
    o.start(t0);
    o.stop(t0 + dur + 0.02);
  }
  function noise(at, dur, vol = 0.12) {
    const t0 = audio.currentTime + at;
    const buf = audio.createBuffer(1, Math.floor(audio.sampleRate * dur), audio.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
    const src = audio.createBufferSource(), g = audio.createGain(), f = audio.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = 1800;
    src.buffer = buf;
    g.gain.value = vol;
    src.connect(f).connect(g).connect(audio.destination);
    src.start(t0);
  }
  const SFX = {
    click: () => tone(660, 0, 0.05, 'square', 0.03),
    join: () => (tone(523, 0, 0.08, 'triangle', 0.05), tone(784, 0.08, 0.1, 'triangle', 0.05)),
    count: () => tone(523, 0, 0.1, 'square', 0.04),
    newq: () => (tone(392, 0, 0.08, 'triangle', 0.06), tone(587, 0.09, 0.14, 'triangle', 0.06)),
    turn: () => (tone(880, 0, 0.07, 'square', 0.06), tone(1175, 0.08, 0.07, 'square', 0.06), tone(1568, 0.16, 0.12, 'square', 0.05)),
    pass: () => tone(500, 0, 0.12, 'triangle', 0.05, 1.8),
    used: () => (tone(330, 0, 0.08, 'square', 0.04), tone(330, 0.11, 0.08, 'square', 0.04)),
    unknown: () => tone(196, 0, 0.18, 'sawtooth', 0.035, 0.7),
    suggest: () => (tone(660, 0, 0.07), tone(880, 0.09, 0.07)),
    bubble: () => tone(300 + Math.random() * 500, 0, 0.05, 'sine', 0.03, 1.6),
    squeak: () => tone(1400 + Math.random() * 400, 0, 0.06, 'square', 0.015, 1.3),
    creak: () => tone(140, 0, 0.25, 'sawtooth', 0.025, 1.25),
    pop: () => (noise(0, 0.35, 0.22), tone(180, 0, 0.3, 'square', 0.06, 0.3)),
    out: () => [392, 330, 262, 196].forEach((f, i) => tone(f, 0.35 + i * 0.12, 0.16, 'triangle', 0.05)),
    heart: () => [659, 784, 988, 1319].forEach((f, i) => tone(f, i * 0.07, 0.14, 'triangle', 0.06)),
    cleared: () => [523, 659, 784, 659, 1046].forEach((f, i) => tone(f, i * 0.08, 0.12, 'square', 0.04)),
    win: () => [523, 659, 784, 1046, 784, 1046, 1319].forEach((f, i) => tone(f, i * 0.11, 0.2, 'triangle', 0.06)),
    tier: (t) => {
      const steps = { textbook: [0], tryhard: [0, 3], honours: [0, 4, 7], rare: [0, 4, 7, 12], deep: [0, 3, 7, 12, 15], legendary: [0, 4, 7, 12, 16, 19, 24] }[t] || [0];
      steps.forEach((s, i) => tone(440 * Math.pow(2, s / 12), i * 0.06, t === 'legendary' ? 0.24 : 0.12, t === 'legendary' ? 'triangle' : 'square', 0.05));
    },
  };
  const sfx = (name, arg) => {
    if (!settings.sound || !audio) return;
    try {
      SFX[name](arg);
    } catch { /* ignore */ }
  };
  function ambient(on) {
    if (!audio) return;
    if (on && !amb) {
      const g = audio.createGain();
      g.gain.value = 0.012;
      const o1 = audio.createOscillator(), o2 = audio.createOscillator();
      o1.frequency.value = 55;
      o2.frequency.value = 82.6;
      o1.type = o2.type = 'sine';
      o1.connect(g);
      o2.connect(g);
      g.connect(audio.destination);
      o1.start();
      o2.start();
      amb = { g, o1, o2 };
    } else if (!on && amb) {
      amb.o1.stop();
      amb.o2.stop();
      amb = null;
    }
  }

  // ---------- helpers ----------
  function toast(msg) {
    const t = $('toast');
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toast.t);
    toast.t = setTimeout(() => (t.hidden = true), 2200);
  }
  function announce(msg, urgent) {
    const el = $(urgent ? 'sr-urgent' : 'sr');
    el.textContent = '';
    setTimeout(() => (el.textContent = msg), 30);
  }
  function show(id) {
    for (const s of ['menu', 'room']) $(s).hidden = s !== id;
    if (id === 'menu') loadRooms();
  }
  const HEART = '<svg viewBox="0 0 7 6" aria-hidden="true"><path d="M1 0h2v1h1V0h2v1h1v2H6v1H5v1H4v1H3V5H2V4H1V3H0V1h1z"/></svg>';
  function heartsHTML(n, cap, lostAt = -1) {
    let h = '';
    for (let i = 0; i < Math.max(cap, n); i++) h += HEART.replace('<svg', `<svg class="${i === lostAt ? 'lost' : i < n ? 'full' : 'empty'}"`);
    return h;
  }

  // ---------- socket ----------
  const socket = io('/pop');
  let room = null, seq = 0, me = null;
  let lastHolder = null, questionsSeen = [], resultsShownFor = null, prepEndsAt = 0, quickEndsAt = 0, lastCount = -1;
  let pending = false, typingSent = 0;

  socket.on('connect', () => {
    if (socket.recovered) return; // the server kept our seat and replays what we missed
    // First load, refresh, or a drop too long to recover: rejoin with this tab's token to reclaim the seat.
    const code = room?.code || sessionStorage.getItem('pq-room') || new URLSearchParams(location.search).get('room');
    if (code) join(code, true);
  });
  socket.on('disconnect', () => room && toast('Connection lost. Reconnecting...'));
  socket.on('note', (n) => toast(n));
  socket.on('kicked', () => {
    sessionStorage.removeItem('pq-room');
    room = null;
    show('menu');
    $('menu-error').textContent = 'The host removed you from the room.';
  });
  socket.on('typing', ({ playerId }) => {
    const el = seatEls.find((s) => s.dataset.pid === playerId);
    if (!el) return;
    let t = el.querySelector('.typing');
    if (!t) {
      t = document.createElement('span');
      t.className = 'typing';
      t.textContent = '...';
      el.appendChild(t);
    }
    clearTimeout(t._h);
    t._h = setTimeout(() => t.remove(), 1200);
  });
  socket.on('update', (u) => {
    if (u.seq <= seq && room && u.room.code === room.code) return; // stale or duplicate
    const first = !room || room.code !== u.room.code;
    seq = u.seq;
    const prev = room;
    room = u.room;
    me = room.you;
    if (first) {
      sessionStorage.setItem('pq-room', room.code);
      history.replaceState(null, '', `?room=${room.code}`);
      show('room');
      layout();
      sfx('join');
    }
    const m = room.match;
    if (m && m.countdownMs !== null) prepEndsAt = performance.now() + m.countdownMs;
    quickEndsAt = room.startsInMs !== null ? performance.now() + room.startsInMs : 0;
    if (m && (!prev || !prev.match || prev.match.matchId !== m.matchId)) {
      questionsSeen = [];
      resultsShownFor = null;
      $('results').hidden = true;
    }
    for (const ev of u.events) handleEvent(ev);
    render();
  });

  function join(code, silent) {
    socket.emit('join_room', { code, token, name: nameNow(), avatar: profile.avatar }, (r) => {
      if (r.ok) return;
      sessionStorage.removeItem('pq-room');
      if (!silent || r.error !== 'not_found') $('menu-error').textContent = ERRORS[r.error] || 'Could not join.';
      if (silent) history.replaceState(null, '', location.pathname);
      show('menu');
    });
  }
  const nameNow = () => ($('name').value.trim() || profile.name || 'Player').slice(0, 20);

  // ---------- menu ----------
  $('name').value = profile.name;
  $('name').onchange = () => {
    profile.name = $('name').value.trim().slice(0, 20);
    localStorage.setItem('dd-name', profile.name);
  };
  for (const key of A.AVATAR_KEYS) {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('role', 'radio');
    b.setAttribute('aria-label', A.AVATARS[key].name);
    b.dataset.key = key;
    const c = document.createElement('canvas');
    A.drawAvatar(c, key, { scale: 4 });
    b.appendChild(c);
    b.onclick = () => {
      profile.avatar = key;
      store.set('pq-avatar', key);
      paintChoices();
      sfx('click');
    };
    $('avatars').appendChild(b);
  }
  for (const b of $('sizes').children) {
    b.onclick = () => {
      profile.size = b.dataset.size;
      store.set('pq-size', profile.size);
      paintChoices();
      sfx('click');
    };
  }
  // Arrow keys move between radio options, like native radio groups.
  for (const group of [$('avatars'), $('sizes')]) {
    group.addEventListener('keydown', (e) => {
      const items = [...group.children];
      const i = items.indexOf(document.activeElement);
      if (i < 0 || !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) return;
      e.preventDefault();
      const n = items[(i + (e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 1) + items.length) % items.length];
      n.focus();
      n.click();
    });
  }
  function paintChoices() {
    for (const b of $('avatars').children) {
      const on = b.dataset.key === profile.avatar;
      b.setAttribute('aria-checked', on);
      b.tabIndex = on ? 0 : -1;
    }
    for (const b of $('sizes').children) {
      const on = b.dataset.size === profile.size;
      b.setAttribute('aria-checked', on);
      b.tabIndex = on ? 0 : -1;
    }
  }
  paintChoices();
  const enter = (r) => {
    if (!r.ok) $('menu-error').textContent = ERRORS[r.error] || 'Could not do that.';
  };
  $('quick').onclick = () => {
    $('menu-error').textContent = '';
    socket.emit('quick_play', { bracket: profile.size, token, name: nameNow(), avatar: profile.avatar }, enter);
  };
  $('host-public').onclick = () => socket.emit('create_room', { visibility: 'PUBLIC', token, name: nameNow(), avatar: profile.avatar }, enter);
  $('host-private').onclick = () => socket.emit('create_room', { visibility: 'PRIVATE', token, name: nameNow(), avatar: profile.avatar }, enter);
  $('join-code').oninput = (e) => (e.target.value = e.target.value.toUpperCase().replace(/[^A-Z]/g, ''));
  $('join-form').onsubmit = (e) => {
    e.preventDefault();
    const code = $('join-code').value.trim().toUpperCase();
    $('menu-error').textContent = /^[A-Z]{4}$/.test(code) ? '' : ERRORS.invalid_code;
    if (/^[A-Z]{4}$/.test(code)) join(code);
  };
  function loadRooms() {
    socket.emit('list_rooms', null, (list) => {
      const ul = $('rooms');
      ul.innerHTML = '';
      if (!list.length) {
        ul.innerHTML = '<li class="muted">No public rooms right now. Host one or try Quick Play.</li>';
        return;
      }
      for (const r of list) {
        const li = document.createElement('li');
        const label = r.quick ? `Quick play ${r.quick.toUpperCase()}` : r.host ? `${r.host}'s room` : 'Room';
        li.innerHTML = `<span class="rcode">${esc(r.code)}</span><span class="rinfo">${esc(label)} &middot; ${r.players}/${r.max} &middot; ${esc(r.status)}</span>`;
        const b = document.createElement('button');
        b.className = 'pbtn';
        b.textContent = r.status === 'Playing' ? 'WATCH' : 'JOIN';
        b.disabled = r.players >= r.max;
        b.onclick = () => join(r.code);
        li.appendChild(b);
        ul.appendChild(li);
      }
    });
  }
  $('rooms-refresh').onclick = loadRooms;
  setInterval(() => !$('menu').hidden && socket.connected && loadRooms(), 6000);
  $('open-how').onclick = () => $('how').showModal();
  $('open-settings').onclick = () => $('settings').showModal();
  $('tier-table').innerHTML = Object.entries(TIERS).map(([k, t]) => `<tr style="--tc:${t.color}"><td>${t.name}</td><td>+${TIER_POINTS[k]}</td></tr>`).join('');
  for (const [id, key] of [['set-sound', 'sound'], ['set-ambient', 'ambient'], ['set-motion', 'motion'], ['set-contrast', 'contrast']]) {
    $(id).checked = settings[key];
    $(id).onchange = (e) => {
      settings[key] = e.target.checked;
      store.set(`pq-${key}`, settings[key]);
      unlock();
      applySettings();
    };
  }
  $('mute').onclick = () => {
    settings.sound = !settings.sound;
    store.set('pq-sound', settings.sound);
    $('set-sound').checked = settings.sound;
    unlock();
    applySettings();
  };
  applySettings();

  // ---------- room controls ----------
  $('leave').onclick = () => {
    socket.emit('leave_room');
    sessionStorage.removeItem('pq-room');
    history.replaceState(null, '', location.pathname);
    room = null;
    seq = 0;
    $('results').hidden = true;
    show('menu');
  };
  const inviteLink = () => `${location.origin}/pop/?room=${room.code}`;
  $('invite').onclick = async () => {
    if (navigator.share && matchMedia('(pointer: coarse)').matches) {
      try {
        await navigator.share({ title: 'Pop Quiz', text: `Join my Pop Quiz room ${room.code}`, url: inviteLink() });
        return;
      } catch { /* cancelled: fall through to copy */ }
    }
    copy(inviteLink(), 'INVITE LINK COPIED');
  };
  $('copy-code').onclick = () => copy(room.code, 'ROOM CODE COPIED');
  function copy(text, msg) {
    navigator.clipboard?.writeText(text).then(() => toast(msg), () => toast(text));
  }
  $('ready').onchange = (e) => socket.emit('set_ready', e.target.checked);
  $('autojoin').onchange = (e) => socket.emit('set_auto_join', e.target.checked);
  $('wake').onclick = () => {
    unlock();
    socket.emit('start_match', null, (r) => !r.ok && toast(r.error === 'not_enough_players' ? 'Need more ready players.' : 'Could not start.'));
  };
  $('history-toggle').onclick = () => {
    const side = $('side');
    side.classList.toggle('collapsed');
    $('history-toggle').setAttribute('aria-expanded', !side.classList.contains('collapsed'));
  };
  $('again').onclick = () => {
    if (isHost()) $('wake').onclick();
    else {
      socket.emit('set_ready', true);
      toast("You're in for the next game");
    }
    $('results').hidden = true;
  };
  $('res-close').onclick = () => ($('results').hidden = true);
  $('report-form').onsubmit = (e) => {
    e.preventDefault();
    const text = $('report-text').value.trim();
    if (!text) return;
    socket.emit('report_answer', { questionId: $('report-q').value, text, note: $('report-note').value }, (ok) => {
      toast(ok ? 'Thanks. We will check that answer.' : 'Could not send that report.');
      if (ok) $('report-text').value = $('report-note').value = '';
    });
  };

  // Host rules form.
  const RULES = [
    ['startingHearts', 'Lives', 1], ['heartCap', 'Heart cap', 1], ['pointsPerHeart', 'Points per spare heart', 50],
    ['minimumTurnSeconds', 'Minimum turn (s)', 1], ['minimumFuseSeconds', 'Shortest fuse (s)', 1], ['maximumFuseSeconds', 'Longest fuse (s)', 1],
    ['maxPlayers', 'Seats', 1], ['emergencyPasses', 'Emergency passes', 1],
  ];
  function renderRules() {
    const f = $('rules-form');
    if (f.contains(document.activeElement)) return; // don't overwrite while the host is typing
    const s = room.settings;
    if (!s) {
      $('rules').hidden = true;
      return;
    }
    $('rules').hidden = false;
    const editable = isHost() && !(room.match && room.match.status !== 'MATCH_COMPLETE');
    f.innerHTML = RULES.map(([k, label, step]) => `<label class="field"><span>${label}</span><input type="number" name="${k}" step="${step}" value="${s[k]}" ${editable ? '' : 'disabled'}></label>`).join('')
      + `<label class="field wide"><span>Visibility</span><select name="visibility" ${editable ? '' : 'disabled'}><option value="PRIVATE">Private &middot; code only</option><option value="PUBLIC">Public &middot; listed</option></select></label>`
      + `<label class="check wide"><input type="checkbox" name="emergencyPassEnabled" ${s.emergencyPassEnabled ? 'checked' : ''} ${editable ? '' : 'disabled'}> Emergency passes on</label>`;
    f.visibility.value = s.visibility;
  }
  $('rules-form').onchange = () => {
    const f = $('rules-form');
    const payload = { visibility: f.visibility.value, emergencyPassEnabled: f.emergencyPassEnabled.checked };
    for (const [k] of RULES) payload[k] = Number(f[k].value);
    socket.emit('update_settings', payload, (r) => {
      $('rules-error').textContent = r.ok ? '' : r.errors.join('. ');
      if (!r.ok) document.activeElement.blur();
    });
  };

  // ---------- answering ----------
  const myPlayer = () => room?.match?.players.find((p) => p.id === me) || null;
  const isHost = () => room && room.hostId === me;
  const running = () => room?.match && room.match.status !== 'MATCH_COMPLETE';
  const myTurn = () => running() && room.match.status === 'ROUND_ACTIVE' && room.match.holderId === me;
  function feedback(text, kind) {
    const f = $('feedback');
    f.textContent = text;
    f.className = `feedback ${kind || ''}`;
    clearTimeout(feedback.t);
    if (text) feedback.t = setTimeout(() => (f.textContent = ''), 2600);
  }
  $('answer').addEventListener('input', () => {
    if (myTurn() && Date.now() - typingSent > 500) {
      typingSent = Date.now();
      socket.emit('typing');
    }
  });
  $('dock').onsubmit = (e) => {
    e.preventDefault();
    unlock();
    const text = $('answer').value.trim();
    if (!running()) return;
    if (!myTurn()) return feedback('WAIT FOR THE FLASK', 'warn');
    if (!text || pending) return;
    const m = room.match;
    pending = true;
    const slow = setTimeout(() => pending && feedback('CHECKING...', 'info'), 180);
    const payload = { questionInstanceId: m.questionInstanceId, turnId: m.turnId, submissionId: `${me}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, answer: text };
    socket.timeout(5000).emit('submit_answer', payload, (err, r) => {
      pending = false;
      clearTimeout(slow);
      if (err) return feedback('NO CONNECTION. TRY AGAIN', 'bad');
      onReply(r, text);
    });
  };
  function onReply(r, text) {
    const input = $('answer');
    switch (r.status) {
      case 'accepted':
        input.value = '';
        feedback(`${r.answer.toUpperCase()} · ${TIERS[r.tier].name.toUpperCase()} +${r.points}`, 'good');
        break;
      case 'used':
        feedback('ALREADY USED', 'warn');
        sfx('used');
        shakeInput();
        flashHistory(r.answer);
        break;
      case 'unknown':
        feedback('NOT RECOGNISED', 'bad');
        sfx('unknown');
        shakeInput();
        break;
      case 'suggest':
        input.value = r.suggestion;
        input.select();
        feedback(`DID YOU MEAN ${r.suggestion.toUpperCase()}? PRESS ENTER`, 'info');
        sfx('suggest');
        break;
      case 'ambiguous':
        feedback('BE MORE SPECIFIC', 'warn');
        shakeInput();
        break;
      case 'not_your_turn':
        feedback('WAIT FOR THE FLASK', 'warn');
        break;
      case 'limit':
        feedback('TOO MANY TRIES THIS TURN', 'bad');
        break;
      default:
        if (text && room?.match?.status !== 'ROUND_ACTIVE') feedback('TOO LATE', 'bad');
    }
  }
  function shakeInput() {
    const i = $('answer');
    i.classList.remove('shake');
    void i.offsetWidth;
    i.classList.add('shake');
  }
  function flashHistory(name) {
    for (const li of $('history').children) {
      if (li.dataset.answer === name) {
        li.classList.remove('flash');
        void li.offsetWidth;
        li.classList.add('flash');
        li.scrollIntoView({ block: 'nearest' });
      }
    }
  }
  $('emergency').onclick = () => {
    if (!myTurn()) return;
    const m = room.match;
    socket.emit('use_emergency_pass', { questionInstanceId: m.questionInstanceId, turnId: m.turnId, submissionId: `${me}-ep-${m.turnId}` }, (r) => {
      if (r.status === 'passed') feedback('PASSED! NO ANSWER NEEDED', 'info');
      else if (r.status === 'no_pass') feedback('NO EMERGENCY PASSES LEFT', 'bad');
    });
  };

  // ---------- events: sound, bubbles, banners ----------
  const nameOf = (pid) => room?.match?.players.find((p) => p.id === pid)?.name || room?.members.find((m) => m.id === pid)?.name || 'Someone';
  function handleEvent(ev) {
    switch (ev.type) {
      case 'question_presented':
        questionsSeen.push(ev.question);
        sfx('newq');
        announce(`New prompt: ${ev.question.prompt}. ${ev.question.qualifier || ''}`);
        flask.hidden = false;
        flask.recover = performance.now();
        break;
      case 'turn_started':
        afterHolderChange(ev.holderId);
        break;
      case 'answer_accepted': {
        const t = TIERS[ev.tier];
        bubble(ev.playerId, `<b>${esc(t.name.toUpperCase())} +${ev.points}</b>${esc(ev.answer)}`, t.color);
        sfx('tier', ev.tier);
        if (ev.tier === 'legendary' || ev.tier === 'deep' || ev.tier === 'rare') sparkleAt(ev.playerId, ev.tier === 'legendary' ? '#FFD54F' : ev.tier === 'deep' ? '#F472B6' : '#A78BFA', ev.tier === 'legendary' ? 24 : 10);
        if (ev.tier === 'legendary') showBanner(`LEGENDARY!<small>${esc(nameOf(ev.playerId))}: ${esc(ev.answer)}</small>`, 'gold');
        if (ev.nextHolderId) afterHolderChange(ev.nextHolderId, true);
        break;
      }
      case 'answer_rejected':
        if (ev.playerId !== me) bubble(ev.playerId, ev.reason === 'used' ? `<b>TAKEN</b>${esc(ev.answer)}` : `<b>NOT RECOGNISED</b>${esc(ev.text.slice(0, 24))}`, null, true);
        break;
      case 'flask_passed':
        bubble(ev.playerId, ev.emergency ? '<b>EMERGENCY PASS</b>no answer needed' : '<b>LEFT</b>flask moves on', 'var(--cyan)');
        afterHolderChange(ev.nextHolderId, true);
        break;
      case 'danger_changed':
        if (ev.danger === 'foaming' || ev.danger === 'frantic') sfx('creak');
        if (room?.match?.holderId === me) announce(`The flask is ${DANGER_WORDS[ev.danger]}`);
        break;
      case 'flask_popped': {
        popFlask(ev.playerId);
        const el = seatEls.find((s) => s.dataset.pid === ev.playerId);
        if (el) {
          el.classList.remove('shake');
          void el.offsetWidth;
          el.classList.add('shake');
          el._lost = ev.hearts; // heart index that just broke
        }
        sfx('pop');
        if (ev.playerId === me && navigator.vibrate) navigator.vibrate([80, 40, 140]);
        const out = ev.hearts <= 0;
        showBanner(`POP!<small>${esc(nameOf(ev.playerId))} ${out ? 'is out' : 'lost a heart'}</small>`, 'bad');
        announce(`Pop! ${nameOf(ev.playerId)} ${out ? 'is out' : 'lost a heart'}.`, true);
        lastHolder = null;
        break;
      }
      case 'player_eliminated':
        if (ev.reason === 'popped') sfx('out');
        if (ev.reason === 'left') toast(`${nameOf(ev.playerId)} left the game`);
        break;
      case 'heart_earned':
        sparkleAt(ev.playerId, '#F35C83', 16);
        sfx('heart');
        bubble(ev.playerId, '<b>+1 SPARE HEART</b>&nbsp;', 'var(--heart)');
        if (ev.playerId === me) announce('You earned a spare heart', true);
        break;
      case 'category_cleared':
        sfx('cleared');
        showBanner('CATEGORY CLEARED!<small>every answer found</small>', 'gold');
        break;
      case 'match_complete':
        sfx('win');
        announce(`${nameOf(ev.winnerId)} wins!`, true);
        break;
    }
  }
  function afterHolderChange(holderId, passed) {
    if (passed) sfx('pass');
    if (holderId === me && lastHolder !== me) {
      sfx('turn');
      if (navigator.vibrate) navigator.vibrate(60);
      announce('Your turn. Name an answer.', true);
      if (!matchMedia('(pointer: coarse)').matches || document.activeElement === $('answer')) $('answer').focus();
    } else if (holderId !== me) announce(`${nameOf(holderId)} has the flask`);
    lastHolder = holderId;
  }
  function bubble(pid, html, color, bad) {
    const el = seatEls.find((s) => s.dataset.pid === pid);
    if (!el) return;
    const b = document.createElement('div');
    b.className = `bubble${bad ? ' bad' : ''}`;
    if (color) b.style.setProperty('--tc', color);
    b.innerHTML = html;
    // Above the seat, or below it for seats near the top edge where it would be cut off.
    const below = parseFloat(el.style.top) - el.offsetHeight / 2 < 60;
    b.style.left = el.style.left;
    b.style.top = below ? `calc(${el.style.top} + ${el.offsetHeight / 2 + 4}px)` : `calc(${el.style.top} - ${el.offsetHeight / 2 + 4}px)`;
    if (below) b.style.transform = 'translate(-50%, 0)';
    $('arena').appendChild(b);
    setTimeout(() => b.remove(), 1800);
  }
  function showBanner(html, kind) {
    const b = $('banner');
    b.innerHTML = html;
    b.className = `banner ${kind || ''}`;
    b.hidden = false;
    void b.offsetWidth;
    clearTimeout(showBanner.t);
    showBanner.t = setTimeout(() => (b.hidden = true), 1400);
  }

  // ---------- arena layout & rendering ----------
  const arenaCanvas = $('arena-canvas');
  const actx = arenaCanvas.getContext('2d');
  const S = 3; // screen pixels per arena pixel
  let geo = null;
  let seatEls = [];
  const flask = { x: 0, y: 0, from: null, to: null, t0: 0, hidden: false, popAt: 0, recover: 0 };
  let benchCache = null;

  function seatList() {
    if (room.match) return room.match.players.map((p) => ({ ...p, kind: 'player' }));
    const list = room.members.map((m) => ({ id: m.id, name: m.name, avatar: m.avatar, kind: 'member', ready: m.ready, connected: m.connected }));
    const total = Math.min(Math.max(room.maxPlayers, list.length), 16);
    for (let i = list.length; i < total; i++) list.push({ id: null, kind: 'empty', name: 'Open seat' });
    return list;
  }

  function layout() {
    const box = $('arena').getBoundingClientRect();
    if (!box.width || !room) return;
    // Narrow screens: the prompt sits under the bench instead of on it, so the flask never covers it.
    const card = $('center');
    const slot = innerWidth <= 760 ? $('qslot') : $('arena');
    if (card.parentNode !== slot) slot.appendChild(card);
    const n = seatList().length;
    const scale = Math.min(1, box.width / 720, box.height / 520);
    // Crowded small tables drop the meter and tag rows; very crowded ones drop the name too (it stays in the label).
    const crowd = n > 6 && box.height < 440 ? (n > 10 ? 2 : 1) : 0;
    $('seats').classList.toggle('compact', crowd >= 1);
    $('seats').classList.toggle('tiny', crowd === 2);
    const seatW = Math.round((n <= 6 ? 116 : n <= 10 ? 98 : 82) * Math.max(0.6, scale));
    const av = Math.round((crowd === 2 ? 20 : crowd ? 26 : n <= 6 ? 44 : n <= 10 ? 36 : 28) * (crowd ? 1 : Math.max(0.6, scale)));
    $('seats').style.setProperty('--seat-w', `${seatW}px`);
    $('seats').style.setProperty('--av', `${av}px`);
    const cx = box.width / 2, cy = box.height / 2;
    const place = (seatH, w) => {
      const RX = Math.max(60, cx - w / 2 - 6), RY = Math.max(40, cy - seatH / 2 - 6);
      const seats = [];
      for (let i = 0; i < n; i++) {
        const a = -Math.PI / 2 + (i / n) * Math.PI * 2; // seat 0 at the top, then clockwise
        seats.push({ x: cx + RX * Math.cos(a), y: cy + RY * Math.sin(a) });
      }
      geo = { w: box.width, h: box.height, cx, cy, RX, RY, seats, seatW: w, seatH, av, n, k: n <= 6 && box.width >= 900 && box.height >= 600 ? 2 : 1 };
    };
    place(av + 64, seatW);
    arenaCanvas.width = Math.ceil(box.width / S);
    arenaCanvas.height = Math.ceil(box.height / S);
    benchCache = null;
    buildSeats(true);
    // Measure the real seat size and place again, so the ring fits whatever the seats actually render as.
    const real = seatEls[0];
    if (real && real.offsetHeight) {
      place(real.offsetHeight, real.offsetWidth);
      buildSeats(false);
    }
    const t = flaskTarget();
    flask.x = t.x;
    flask.y = t.y;
    flask.to = null;
  }
  addEventListener('resize', () => {
    A.drawBackground($('bg'));
    layout();
  });
  // A tab opened in the background has no size yet; lay out and draw once it does.
  new ResizeObserver(() => {
    if (!room || $('room').hidden) return;
    layout();
    render();
  }).observe($('arena'));

  function buildSeats(force) {
    const list = seatList();
    if (force || seatEls.length !== list.length) {
      $('seats').innerHTML = '';
      seatEls = list.map(() => {
        const el = document.createElement('div');
        el.className = 'seat';
        el.innerHTML = '<canvas></canvas><div class="sname"></div><div class="hearts"></div><div class="meter"><i></i></div><div class="stag"></div>';
        $('seats').appendChild(el);
        return el;
      });
    }
    list.forEach((s, i) => {
      const el = seatEls[i];
      const pos = geo.seats[i];
      el.style.left = `${pos.x}px`;
      el.style.top = `${pos.y}px`;
      el.dataset.pid = s.id || '';
      const m = room.match;
      const out = s.kind === 'player' && !s.alive;
      const away = s.kind !== 'empty' && s.connected === false;
      const av = s.avatar || 'owl';
      const avKey = `${av}|${out}|${s.kind}`;
      if (el._av !== avKey) {
        el._av = avKey;
        const c = el.querySelector('canvas');
        if (s.kind === 'empty') c.getContext('2d').clearRect(0, 0, c.width, c.height);
        else A.drawAvatar(c, av, { scale: 4, grey: out });
      }
      el.querySelector('.sname').textContent = s.kind === 'empty' ? 'Open seat' : s.name + (s.id === me ? ' (you)' : '');
      const hearts = el.querySelector('.hearts');
      const meter = el.querySelector('.meter');
      if (s.kind === 'player') {
        const lostAt = el._lost !== undefined ? el._lost : -1;
        const key = `${s.hearts}|${m.rules.heartCap}|${lostAt}`;
        if (hearts._k !== key) {
          hearts._k = key;
          hearts.innerHTML = heartsHTML(s.hearts, m.rules.heartCap, lostAt);
        }
        el._lost = undefined;
        meter.hidden = false;
        meter.firstChild.style.width = `${Math.min(100, (100 * s.progress) / m.rules.pointsPerHeart)}%`;
      } else {
        hearts.innerHTML = '';
        hearts._k = '';
        meter.hidden = true;
      }
      const holder = m && m.status === 'ROUND_ACTIVE' && m.holderId === s.id;
      const nextUp = m && m.status === 'ROUND_ACTIVE' && !holder && s.id && nextSeatId() === s.id;
      el.classList.toggle('holder', !!holder);
      el.classList.toggle('next', !!nextUp);
      el.classList.toggle('me', s.id === me && !holder);
      el.classList.toggle('out', out);
      el.classList.toggle('away', away && !out);
      el.classList.toggle('empty', s.kind === 'empty');
      let tag = '';
      if (out) tag = s.placement ? `OUT · #${s.placement}` : 'OUT';
      else if (away) tag = 'AWAY';
      else if (holder) tag = s.id === me ? 'YOUR TURN' : 'HAS THE FLASK';
      else if (nextUp) tag = 'NEXT';
      else if (s.kind === 'member') tag = s.ready ? 'READY' : 'NOT READY';
      else if (m && m.status === 'MATCH_COMPLETE' && s.placement === 1) tag = 'WINNER';
      el.querySelector('.stag').textContent = tag;
      el.setAttribute('aria-label', `${s.name}${s.kind === 'player' ? `, ${s.hearts} hearts` : ''}${tag ? `, ${tag}` : ''}`);
    });
  }
  function nextSeatId() {
    const m = room.match;
    const ps = m.players;
    const h = ps.findIndex((p) => p.id === m.holderId);
    for (let k = 1; k <= ps.length; k++) {
      const p = ps[(h + k) % ps.length];
      if (p.alive) return p.id;
    }
    return null;
  }

  function flaskTarget() {
    if (!geo) return { x: 0, y: 0 };
    const m = room?.match;
    // The flask sits just inside the holder's seat, toward the bench centre, clear of the seat and the prompt.
    const half = 11 * geo.k * S; // drawn up from its base; aim its middle
    const near = (s) => {
      const dx = geo.cx - s.x, dy = geo.cy - s.y, d = Math.hypot(dx, dy) || 1;
      const ux = dx / d, uy = dy / d;
      const along = Math.abs(ux) * geo.seatW / 2 + Math.abs(uy) * geo.seatH / 2 + Math.abs(uy) * half + Math.abs(ux) * 9 * geo.k * S + 8;
      const off = Math.min(d * 0.7, along);
      return { x: s.x + ux * off, y: s.y + uy * off + half };
    };
    const top = { x: geo.cx, y: geo.cy - geo.RY };
    if (!m || m.status !== 'ROUND_ACTIVE') return near(top);
    const s = geo.seats[m.players.findIndex((p) => p.id === m.holderId)];
    return near(s || top);
  }
  function flaskState() {
    const m = room?.match;
    if (!m || m.status === 'MATCH_COMPLETE') return 'sleeping';
    if (m.status === 'ROUND_ACTIVE') return m.danger || 'calm';
    return 'calm';
  }
  function popFlask(pid) {
    flask.popAt = performance.now();
    flask.popPid = pid;
  }
  function sparkleAt(pid, color, n) {
    if (!geo || reduced()) return;
    const i = seatEls.findIndex((s) => s.dataset.pid === pid);
    if (i < 0) return;
    A.sparkle(geo.seats[i].x / S, geo.seats[i].y / S, 1, color, n);
  }

  // Bubbling sounds get faster as the flask gets worse, with random gaps so they never work as a clock.
  let nextBlip = 0;
  function dangerAudio(t) {
    const m = room?.match;
    if (!m || m.status !== 'ROUND_ACTIVE' || t < nextBlip) return;
    const d = m.danger;
    const gap = { calm: [1600, 2600], bubbling: [700, 1200], foaming: [380, 650], frantic: [170, 300] }[d] || [1600, 2600];
    nextBlip = t + gap[0] + Math.random() * (gap[1] - gap[0]);
    if (d !== 'calm' || Math.random() < 0.3) sfx('bubble');
    if (d === 'frantic' && Math.random() < 0.35) sfx('squeak');
  }

  let lastFrame = performance.now();
  function frame(t) {
    requestAnimationFrame(frame);
    const dt = Math.min(0.05, (t - lastFrame) / 1000);
    lastFrame = t;
    if ($('room').hidden || !geo) return titleFlask(t);
    const W = arenaCanvas.width, H = arenaCanvas.height;
    if (!W || !H) return;
    if (!benchCache) {
      benchCache = document.createElement('canvas');
      benchCache.width = W;
      benchCache.height = H;
      A.drawBench(benchCache.getContext('2d'), W, H, geo.cx / S, geo.cy / S, Math.round((geo.RX * 0.74) / S), Math.round((geo.RY * 0.66) / S));
    }
    actx.clearRect(0, 0, W, H);
    actx.drawImage(benchCache, 0, 0);
    // move the flask toward its target along a short curve
    const target = flaskTarget();
    if (!flask.to || Math.abs(flask.to.x - target.x) > 1 || Math.abs(flask.to.y - target.y) > 1) {
      flask.from = { x: flask.x, y: flask.y };
      flask.to = target;
      flask.t0 = t;
    }
    const dur = reduced() ? 1 : 260;
    const p = Math.min(1, (t - flask.t0) / dur);
    const e = 1 - Math.pow(1 - p, 3);
    const mx = (flask.from.x + flask.to.x) / 2 + (geo.cx - (flask.from.x + flask.to.x) / 2) * 0.35;
    const my = (flask.from.y + flask.to.y) / 2 + (geo.cy - (flask.from.y + flask.to.y) / 2) * 0.35 - 20;
    flask.x = (1 - e) * (1 - e) * flask.from.x + 2 * (1 - e) * e * mx + e * e * flask.to.x;
    flask.y = (1 - e) * (1 - e) * flask.from.y + 2 * (1 - e) * e * my + e * e * flask.to.y;
    const k = geo.k;
    const m = room.match;
    const sinceRecover = t - flask.recover;
    const status = m?.status;
    if (flask.popAt && t - flask.popAt < 90) {
      A.drawFlask(actx, flask.x / S, flask.y / S, k, 'frantic', t / 1000, { swell: 3, reduced: reduced() }); // anticipation
    } else if (flask.popAt && !flask.burst && t - flask.popAt < 700) {
      // (a background tab skips frames; a pop it missed is not replayed later)
      flask.burst = true;
      A.burst(flask.x / S, (flask.y - 30) / S, k, A.LIQUID.frantic);
    } else if (status === 'FLASK_POPPED' || (flask.popAt && t - flask.popAt < 600)) {
      // the flask is gone until the next prompt
    } else {
      flask.popAt = 0;
      flask.burst = false;
      A.drawFlask(actx, flask.x / S, flask.y / S, k, flaskState(), t / 1000, { reduced: reduced() });
      if (sinceRecover < 60 && !reduced()) A.sparkle(flask.x / S, (flask.y - 30) / S, 1, '#FFFFFF', 8);
    }
    A.stepParticles(actx, dt);
    dangerAudio(t);
    // countdowns (prep and quick-play start)
    if (m && m.status === 'QUESTION_PREPARATION') {
      const left = Math.max(0, Math.ceil((prepEndsAt - t) / 1000));
      if (left !== lastCount) {
        lastCount = left;
        $('q-count').textContent = left || '';
        if (left) sfx('count');
      }
    } else if (lastCount !== -1) {
      lastCount = -1;
      $('q-count').textContent = '';
    }
    if (quickEndsAt && (!m || m.status === 'MATCH_COMPLETE')) {
      const s = Math.max(0, Math.ceil((quickEndsAt - t) / 1000));
      $('wait-text').textContent = `Starting in ${s}s`;
    }
  }
  function titleFlask(t) {
    const c = $('title-flask');
    if ($('menu').hidden) return;
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, c.width, c.height);
    const cycle = reduced() ? 0 : (t / 1000) % 6;
    const st = cycle < 2 ? 'calm' : cycle < 3.5 ? 'bubbling' : cycle < 5 ? 'foaming' : 'frantic';
    A.drawFlask(ctx, 32, 70, 3, st, t / 1000, { reduced: reduced() });
  }
  requestAnimationFrame(frame);

  function render() {
    if (!room || !geo) return;
    const m = room.match;
    const mine = myPlayer();
    $('room-code').textContent = room.code;
    $('room-vis').textContent = room.quick ? `QUICK ${room.quick.toUpperCase()}` : room.visibility === 'PUBLIC' ? 'PUBLIC' : 'PRIVATE';
    $('room-vis').className = `badge ${room.visibility === 'PUBLIC' ? 'pub' : 'priv'}`;
    const alive = m ? m.players.filter((p) => p.alive).length : 0;
    $('hud-mid').textContent = running() ? `${alive} of ${m.players.length} still in` : `${room.members.length} / ${room.maxPlayers} players`;
    if (seatEls.length !== seatList().length) layout();
    else buildSeats(false);

    // centre card
    const q = m && m.question;
    if (running() && q) {
      $('q-kicker').textContent = m.status === 'QUESTION_PREPARATION' ? `GET READY · ${q.category}` : m.status === 'CATEGORY_CLEARED' ? 'CATEGORY CLEARED' : q.category;
      $('q-text').textContent = q.prompt;
      $('q-qual').textContent = q.qualifier || '';
    } else if (m && m.status === 'MATCH_COMPLETE') {
      const w = m.players.find((p) => p.id === m.winnerId);
      $('q-kicker').textContent = 'GAME OVER';
      $('q-text').textContent = w ? `${w.name} wins` : 'Game over';
      $('q-qual').textContent = '';
    } else {
      const ready = room.members.filter((x) => x.ready && x.connected).length;
      $('q-kicker').textContent = 'WAITING FOR PLAYERS';
      $('q-text').textContent = 'The flask is resting';
      $('q-qual').textContent = `${ready} ready · ${room.minToStart} needed to start`;
    }

    // side panel
    const showWait = !running();
    $('side-wait').hidden = !showWait;
    $('side-game').hidden = showWait;
    if (showWait) renderWaiting();
    else renderHistory();

    // dock
    const dock = $('dock');
    const input = $('answer'), send = $('send');
    const turn = myTurn();
    dock.classList.toggle('mine', turn);
    dock.classList.toggle('idle', !running());
    let tag = '', canType = false;
    if (!running()) {
      tag = m ? 'GAME OVER' : 'WAITING ROOM';
      input.placeholder = 'The flask is resting...';
    } else if (!mine) {
      tag = 'WATCHING · you play in the next game';
      input.placeholder = 'Watching this game';
    } else if (!mine.alive) {
      tag = `YOU'RE OUT · #${mine.placement}`;
      input.placeholder = 'Watching the rest of the game';
    } else if (m.status === 'QUESTION_PREPARATION') {
      tag = 'GET READY...';
      canType = true;
      input.placeholder = 'Get an answer ready...';
    } else if (turn) {
      tag = 'YOUR TURN!';
      canType = true;
      input.placeholder = 'Type an answer and press Enter';
    } else if (m.status === 'ROUND_ACTIVE') {
      tag = `${nameOf(m.holderId).toUpperCase()} HAS THE FLASK${nextSeatId() === me ? ' · YOU ARE NEXT' : ''}`;
      canType = true;
      input.placeholder = 'Get an answer ready...';
    } else {
      tag = m.status === 'CATEGORY_CLEARED' ? 'CATEGORY CLEARED' : 'POP!';
      canType = true;
    }
    $('turn-tag').textContent = tag;
    input.disabled = !canType;
    send.disabled = !turn;
    const ep = $('emergency');
    ep.hidden = !(m && m.rules.emergencyPassEnabled && mine);
    if (mine) {
      ep.textContent = mine.passesLeft > 0 ? `EMERGENCY PASS · ${mine.passesLeft} LEFT` : 'PASS USED';
      ep.disabled = !turn || mine.passesLeft <= 0;
      const key = `${mine.hearts}|${m.rules.heartCap}|${mine.progress}`;
      if ($('my-hearts')._k !== key) {
        $('my-hearts')._k = key;
        $('my-hearts').innerHTML = `<div class="hearts">${heartsHTML(mine.hearts, m.rules.heartCap)}</div><div class="meter" title="Spare-heart meter"><i style="width:${Math.min(100, (100 * mine.progress) / m.rules.pointsPerHeart)}%"></i></div><span>${mine.progress} / ${m.rules.pointsPerHeart}</span><span class="sr-only">${mine.hearts} hearts</span>`;
      }
    } else {
      $('my-hearts').innerHTML = '';
      $('my-hearts')._k = '';
    }

    if (m && m.status === 'MATCH_COMPLETE' && resultsShownFor !== m.matchId) {
      resultsShownFor = m.matchId;
      setTimeout(() => renderResults(), reduced() ? 0 : 1300);
    }
  }

  function renderWaiting() {
    const ul = $('members');
    const host = isHost();
    ul.innerHTML = '';
    for (const x of room.members) {
      const li = document.createElement('li');
      const c = document.createElement('canvas');
      A.drawAvatar(c, x.avatar, { scale: 3 });
      li.appendChild(c);
      const n = document.createElement('span');
      n.className = 'mname';
      n.textContent = `${x.name}${x.id === me ? ' (you)' : ''}${x.id === room.hostId ? ' · HOST' : ''}`;
      li.appendChild(n);
      const st = document.createElement('span');
      st.className = `mstate ${!x.connected ? 'away' : x.ready ? 'ready' : ''}`;
      st.textContent = !x.connected ? 'AWAY' : x.ready ? 'READY' : 'NOT READY';
      li.appendChild(st);
      if (host && x.id !== me && !room.quick) {
        const k = document.createElement('button');
        k.className = 'pbtn pbtn-ghost kick';
        k.textContent = 'REMOVE';
        k.setAttribute('aria-label', `Remove ${x.name}`);
        k.onclick = () => confirm(`Remove ${x.name} from the room?`) && socket.emit('kick', x.id);
        li.appendChild(k);
      }
      ul.appendChild(li);
    }
    const self = room.members.find((x) => x.id === me);
    $('ready').checked = !!self?.ready;
    $('autojoin').checked = !!self?.autoJoin;
    const ready = room.members.filter((x) => x.ready && x.connected).length;
    $('ready-count').textContent = `${ready}/${room.members.length} ready`;
    renderRules();
    const wake = $('wake');
    wake.hidden = !host || !!room.quick;
    wake.textContent = room.match ? 'PLAY AGAIN' : 'SHAKE THE FLASK';
    wake.disabled = ready < room.minToStart;
    if (room.quick) {
      if (!quickEndsAt) $('wait-text').textContent = `Quick play: starts on its own when ${room.minToStart} players are ready (${ready} now).`;
    } else $('wait-text').textContent = host ? (ready < room.minToStart ? `Need ${room.minToStart} ready players to start.` : 'Everyone ready? Shake the flask!') : 'Waiting for the host to start...';
  }

  function renderHistory() {
    const m = room.match;
    const ol = $('history');
    $('history-count').textContent = `(${m.history.length})`;
    if (ol.childElementCount === m.history.length && ol.dataset.q === m.questionInstanceId) return;
    const atTop = ol.scrollTop < 10;
    ol.dataset.q = m.questionInstanceId;
    ol.innerHTML = '';
    for (const h of [...m.history].reverse()) {
      const t = TIERS[h.tier];
      const li = document.createElement('li');
      li.dataset.answer = h.answer;
      li.style.setProperty('--tc', t.color);
      li.innerHTML = `<span class="ha">${esc(h.answer)}</span><span class="ht">${esc(t.name.toUpperCase())} +${h.points}</span><span class="hb">${esc(nameOf(h.by))}</span>`;
      ol.appendChild(li);
    }
    if (atTop) ol.scrollTop = 0;
  }

  function renderResults() {
    const m = room?.match;
    if (!m || m.status !== 'MATCH_COMPLETE' || !m.results) return;
    const w = m.results.find((r) => r.placement === 1);
    $('res-title').textContent = w ? `${w.name.toUpperCase()} WINS` : 'GAME OVER';
    $('res-rows').innerHTML = m.results.map((r) => `<tr class="${r.placement === 1 ? 'win' : ''} ${r.id === me ? 'me' : ''}"><td>${r.placement}</td><td>${esc(r.name)}</td><td>${r.accepted}</td><td>${r.points}</td><td>${r.extraHearts}</td><td>${r.pops}</td><td>${r.best ? `<span class="tier-chip" style="--tc:${TIERS[r.best.tier].color}">${esc(r.best.answer)} +${r.best.points}</span>` : '-'}</td></tr>`).join('');
    const mine = m.results.find((r) => r.id === me);
    const ul = $('res-me');
    if (mine) {
      const s = mine.stats;
      const dist = Object.entries(s.tierCounts).filter(([, n]) => n).map(([t, n]) => `${n} ${TIERS[t].name}`).join(', ') || 'none';
      const items = [
        ['Place', `#${mine.placement} of ${m.results.length}`], ['Turns taken', s.turns], ['Flask passed on', s.accepted], ['Wrong guesses', s.invalid],
        ['Repeats tried', s.duplicate], ['Average answer time', s.avgResponseMs === null ? '-' : `${(s.avgResponseMs / 1000).toFixed(1)} s`],
        ['Fastest answer', s.fastestMs === null ? '-' : `${(s.fastestMs / 1000).toFixed(1)} s`], ['Rarity', dist], ['Hearts lost', s.heartsLost],
        ['Spare hearts earned', s.heartsEarned], ['Emergency passes used', s.emergencyUsed],
        ['Rarest answer', s.best ? `${s.best.answer} (+${s.best.points})` : '-'],
      ];
      ul.innerHTML = items.map(([k, v]) => `<li>${esc(k)}<b>${esc(v)}</b></li>`).join('');
    } else ul.innerHTML = '<li>You watched this game.</li>';
    $('report-q').innerHTML = questionsSeen.map((q) => `<option value="${esc(q.id)}">${esc(q.prompt)}</option>`).join('');
    $('again').textContent = isHost() && !room.quick ? 'PLAY AGAIN' : room.quick ? 'STAY FOR THE NEXT GAME' : "I'M IN FOR THE NEXT GAME";
    $('res-note').textContent = room.quick ? 'Quick play starts the next game on its own when enough players are ready.' : isHost() ? '' : 'The host starts the next game.';
    $('results').hidden = false;
    $('again').focus();
  }

  A.drawBackground($('bg'));
  show('menu');
})();
