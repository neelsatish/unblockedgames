/* global io */
const PALETTE = [
  '#FFFFFF', '#C1C1C1', '#EF4444', '#F97316', '#FACC15', '#22C55E', '#06B6D4', '#3B82F6', '#8B5CF6', '#EC4899', '#A3E635', '#FDBA74',
  '#000000', '#4B5563', '#991B1B', '#C2410C', '#A16207', '#15803D', '#0E7490', '#1E3A8A', '#5B21B6', '#9D174D', '#57301A', '#F5D0A9',
];
// Must match AVATAR_COLORS in server.js.
const AVATAR_COLORS = ['#7C3AED', '#DB2777', '#EA580C', '#16A34A', '#0891B2', '#2563EB', '#CA8A04', '#9333EA', '#DC2626', '#0D9488'];
const SIZES = [4, 10, 18, 30, 44];
const W = 800, H = 600;
const PHASE_MS = { choosing: 15000, reveal: 5000, end: 10000 };

const $ = (id) => document.getElementById(id);
const el = (tag, cls, text) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
};

const socket = io();
let state = null, stateAt = 0, choices = [], ops = [], pending = [];
let tool = 'brush', color = 12, size = 1, strokeId = 0, drawingNow = false, last = null;
let myColor = localStorage.getItem('dd-color') || AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)];
let muted = localStorage.getItem('dd-muted') === '1';
let lastTick = -1;

const canvas = $('canvas');
const ctx = canvas.getContext('2d', { willReadFrequently: true });
ctx.lineCap = ctx.lineJoin = 'round';

const isDrawer = () => state && state.state === 'drawing' && state.drawerId === state.you;
const isHost = () => state && state.hostId === state.you;
const me = () => state?.players.find((p) => p.id === state.you);
const playerName = (id) => state?.players.find((p) => p.id === id)?.name || 'Someone';

/* ---------- Home: profile + game picker ---------- */
const params = new URLSearchParams(location.search);
const inviteCode = (params.get('room') || '').toUpperCase();
$('name').value = localStorage.getItem('dd-name') || '';

function renderProfile() {
  const prev = $('avatar-preview');
  prev.style.background = myColor;
  prev.textContent = ($('name').value.trim()[0] || '?').toUpperCase();
  const row = $('avatar-colors');
  row.replaceChildren();
  for (const c of AVATAR_COLORS) {
    const b = el('button', 'avatar-dot');
    b.type = 'button';
    b.style.background = c;
    b.setAttribute('role', 'radio');
    b.setAttribute('aria-checked', String(c === myColor));
    b.setAttribute('aria-label', `Avatar color ${c}`);
    b.onclick = () => {
      myColor = c;
      localStorage.setItem('dd-color', c);
      renderProfile();
    };
    row.append(b);
  }
}
$('name').addEventListener('input', renderProfile);
renderProfile();

function showRoomStep(show) {
  $('game-picker').hidden = show;
  $('room-step').hidden = !show;
  if (show) ($('code').value ? $('join-form').querySelector('button') : $('create')).focus();
}
document.querySelector('[data-game="doodle"]').onclick = () => showRoomStep(true);
$('back').onclick = () => showRoomStep(false);
if (inviteCode) {
  $('code').value = inviteCode;
  showRoomStep(true);
}

const profile = () => {
  localStorage.setItem('dd-name', $('name').value.trim());
  return { name: $('name').value, color: myColor };
};
$('create').onclick = () => {
  unlockAudio();
  socket.emit('create', profile());
};
$('join-form').onsubmit = (e) => {
  e.preventDefault();
  unlockAudio();
  const code = $('code').value.trim().toUpperCase();
  if (!/^[A-Z]{5}$/.test(code)) return ($('home-error').textContent = 'Room codes are 5 letters.');
  socket.emit('join', { code, ...profile() });
};
socket.on('joinError', (msg) => {
  if (state) {
    alert(msg);
    location.href = location.pathname;
  }
  $('home-error').textContent = msg;
});
socket.on('rejoin', () => {
  const code = state?.code;
  state = null;
  if (code) socket.emit('join', { code, ...profile() });
});
// Leaving the page frees the seat right away instead of waiting out the reconnect grace period.
addEventListener('pagehide', () => socket.disconnect());
socket.on('kicked', () => {
  alert('You were kicked from the room.');
  location.href = location.pathname;
});

/* ---------- Connection ---------- */
function banner(text) {
  $('banner').hidden = !text;
  $('banner').textContent = text || '';
}
socket.on('disconnect', () => state && banner('Connection lost. Reconnecting...'));
socket.on('connect', () => {
  banner('');
  // Recovered sockets keep their seat. Otherwise rejoin the same room as a new player.
  if (state && !socket.recovered) {
    const code = state.code;
    state = null;
    socket.emit('join', { code, ...profile() });
  }
});

/* ---------- State ---------- */
socket.on('state', (s) => {
  const prev = state;
  state = s;
  stateAt = performance.now();
  $('home').hidden = true;
  $('game').hidden = false;
  if (!prev) history.replaceState(null, '', `?room=${s.code}`);
  if (s.state !== 'choosing') choices = [];
  onTransition(prev, s);
  render(prev);
});
socket.on('choices', (c) => {
  choices = c;
  render(state);
});
socket.on('correct', ({ points }) => {
  sound('correct');
  addMsg({ kind: 'good', text: `You guessed it! +${points}` });
});
socket.on('chat', (m) => {
  addMsg(m);
  if (m.kind === 'join') sound('join');
  if (m.kind === 'good' && state?.drawerId === state?.you) sound('pop');
});

function onTransition(prev, s) {
  if (!prev) return;
  if (prev.state !== s.state) {
    if (s.state === 'choosing' && s.drawerId === s.you) sound('turn');
    if (s.state === 'drawing' && s.drawerId !== s.you) $('chat-input').focus();
    if (s.state === 'reveal') sound('reveal');
    if (s.state === 'end') {
      sound('win');
      confetti();
    }
    if (s.state === 'choosing' && prev.state === 'lobby') sound('start');
  }
}

function render(prev) {
  const s = state;
  $('room-code').textContent = s.code;
  $('round').textContent = s.state === 'lobby' ? 'Lobby' : s.state === 'end' ? 'Game over' : `Round ${s.round}/${s.settings.rounds}`;
  renderWord();
  renderPlayers(prev);
  renderOverlay();
  $('toolbar').hidden = !isDrawer();
  canvas.classList.toggle('can-draw', isDrawer());
  if (!isDrawer()) $('cursor').hidden = true;
  $('rating').hidden = !(s.state === 'drawing' && !isDrawer()) || ratedTurn === turnKey();
  $('chat-input').placeholder = isDrawer() ? 'Chat (you are drawing)' : s.state === 'drawing' && me()?.guessed ? 'Chat with players who guessed' : 'Type your guess here...';
}

function renderWord() {
  const s = state;
  const box = $('word'), label = $('word-label');
  box.replaceChildren();
  box.className = 'word';
  label.textContent = '';
  if (s.state === 'drawing') {
    if (s.word) {
      label.textContent = isDrawer() ? 'Draw this' : 'You got it';
      box.classList.add(isDrawer() ? 'is-drawer' : 'is-guessed');
      box.append(s.word.toUpperCase());
    } else if (s.mask) {
      label.textContent = 'Guess this';
      box.append(s.mask.replace(/_/g, '_ ').trim());
      box.append(el('small', '', s.mask.split(' ').map((w) => w.length).join(' ')));
    } else {
      label.textContent = 'Hidden word';
      box.append('???');
    }
  } else if (s.state === 'choosing') {
    box.classList.add('muted');
    box.append(s.drawerId === s.you ? 'Pick a word!' : `${playerName(s.drawerId)} is choosing...`);
  } else if (s.state === 'reveal' && s.lastTurn?.word) {
    label.textContent = 'The word was';
    box.classList.add('is-guessed');
    box.append(s.lastTurn.word.toUpperCase());
  } else if (s.state === 'lobby') {
    box.classList.add('muted');
    box.append(`${s.players.length}/${s.settings.maxPlayers} players`);
  }
}

function renderPlayers(prev) {
  const s = state;
  const list = $('players');
  list.replaceChildren();
  const ranked = [...s.players].sort((a, b) => b.score - a.score);
  for (const p of ranked) {
    const before = prev?.players.find((x) => x.id === p.id);
    const li = el('li', 'player');
    li.classList.toggle('me', p.id === s.you);
    li.classList.toggle('guessed', p.guessed);
    li.classList.toggle('drawing', p.id === s.drawerId && (s.state === 'drawing' || s.state === 'choosing'));
    li.classList.toggle('offline', p.connected === false);
    if (p.guessed && before && !before.guessed) li.classList.add('pop');
    li.append(el('span', 'p-rank', `#${ranked.findIndex((r) => r.score === p.score) + 1}`));
    const av = el('div', 'avatar', p.name.slice(0, 1).toUpperCase());
    av.style.background = p.color;
    av.setAttribute('aria-hidden', 'true');
    li.append(av);
    const info = el('div', 'p-info');
    const name = el('div', 'p-name');
    name.append(el('span', '', p.name));
    if (p.id === s.you) name.append(el('em', 'you-tag', 'you'));
    if (p.id === s.hostId) name.append(icon('i-crown', 'Host'));
    if (li.classList.contains('drawing')) name.append(icon('i-pencil', 'Drawing'));
    const scoreLine = el('div', 'p-score', p.connected === false ? 'reconnecting...' : `${p.score} pts`);
    if (before && p.score > before.score) {
      scoreLine.append(el('b', 'gain', `+${p.score - before.score}`));
    }
    info.append(name, scoreLine);
    li.append(info);
    if (p.id !== s.you && (isHost() || s.players.length >= 3)) {
      li.classList.add('clickable');
      li.tabIndex = 0;
      li.setAttribute('aria-haspopup', 'menu');
      li.onclick = (e) => openMenu(p, e.currentTarget);
      li.onkeydown = (e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), openMenu(p, li));
    }
    list.append(li);
  }
}

function openMenu(p, anchor) {
  const m = $('menu');
  m.replaceChildren();
  m.append(el('div', 'menu-title', p.name));
  const b = el('button', 'menu-item', isHost() ? 'Kick from room' : 'Vote to kick');
  b.setAttribute('role', 'menuitem');
  b.onclick = () => {
    socket.emit(isHost() ? 'kick' : 'votekick', p.id);
    closeMenu();
  };
  m.append(b);
  const r = anchor.getBoundingClientRect();
  m.style.left = `${Math.min(r.right + 8, innerWidth - 200)}px`;
  m.style.top = `${r.top}px`;
  m.hidden = false;
  b.focus();
}
const closeMenu = () => ($('menu').hidden = true);
document.addEventListener('pointerdown', (e) => !$('menu').contains(e.target) && !e.target.closest('.player.clickable') && closeMenu());
document.addEventListener('keydown', (e) => e.key === 'Escape' && closeMenu());

function icon(id, label) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'icon');
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', label);
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use.setAttribute('href', `#${id}`);
  svg.append(use);
  return svg;
}

/* ---------- Overlays ---------- */
function renderOverlay() {
  const s = state;
  const o = $('overlay');
  // Don't wipe the custom-words box while the host is typing in it.
  if (s.state === 'lobby' && document.activeElement?.tagName === 'TEXTAREA' && o.contains(document.activeElement)) return;
  const key = `${s.state}|${s.round}|${s.drawerId}|${choices.join()}|${s.state === 'lobby' || s.state === 'end' ? JSON.stringify([s.settings, s.players.map((p) => p.id), s.hostId]) : ''}`;
  if (o.dataset.key === key && !o.hidden) return; // avoid re-animating on score-only updates
  o.dataset.key = key;
  o.replaceChildren();
  o.hidden = false;
  const box = el('div', 'overlay-box');
  o.append(box);

  if (s.state === 'lobby') return renderLobby(box);
  if (s.state === 'choosing') {
    if (s.drawerId === s.you && choices.length) {
      box.append(el('p', 'kicker', 'Your turn to draw'));
      box.append(el('h2', '', 'Choose a word'));
      const row = el('div', 'choices');
      choices.forEach((w, i) => {
        const b = el('button', 'btn choice', w);
        b.style.setProperty('--i', i);
        b.onclick = () => socket.emit('choose', w);
        row.append(b);
      });
      box.append(row, countdownBar());
    } else {
      const av = el('div', 'avatar avatar-xl bob', playerName(s.drawerId).slice(0, 1).toUpperCase());
      av.style.background = s.players.find((p) => p.id === s.drawerId)?.color;
      box.append(av, el('h2', '', `${playerName(s.drawerId)} is choosing a word`), countdownBar());
    }
    return;
  }
  if (s.state === 'reveal' && s.lastTurn) {
    box.append(el('p', 'kicker', s.lastTurn.reason));
    box.append(el('h2', '', s.lastTurn.word ? 'The word was' : 'Turn skipped'));
    if (s.lastTurn.word) box.append(el('div', 'reveal-word', s.lastTurn.word));
    const ul = el('ul', 'gains');
    for (const g of s.lastTurn.gains) {
      const li = el('li');
      li.append(el('span', '', g.name), el('span', g.gained ? 'plus' : 'zero', `+${g.gained}`));
      ul.append(li);
    }
    box.append(ul);
    return;
  }
  if (s.state === 'end') {
    const ranked = [...s.players].sort((a, b) => b.score - a.score);
    box.append(el('p', 'kicker', 'Game over'), el('h2', '', `${ranked[0]?.name} wins!`));
    const podium = el('div', 'podium');
    [1, 0, 2].forEach((i) => {
      const p = ranked[i];
      if (!p) return;
      const d = el('div', `step p${i + 1}`);
      const av = el('div', 'avatar', p.name.slice(0, 1).toUpperCase());
      av.style.background = p.color;
      const bar = el('div', 'bar');
      bar.append(el('b', '', `#${i + 1}`), el('span', 'pts', `${p.score}`));
      d.append(av, el('span', 'pname', p.name), bar);
      podium.append(d);
    });
    box.append(podium);
    if (ranked.length > 3) {
      const rest = el('ol', 'gains rest');
      rest.start = 4;
      ranked.slice(3).forEach((p) => {
        const li = el('li');
        li.append(el('span', '', p.name), el('span', '', `${p.score}`));
        rest.append(li);
      });
      box.append(rest);
    }
    if (isHost()) {
      const again = el('button', 'btn btn-secondary btn-big', 'Play again');
      again.onclick = () => socket.emit('start');
      box.append(again);
    } else box.append(el('p', 'hint-text light', 'Back to the lobby in a few seconds...'));
    return;
  }
  o.hidden = true;
}

function countdownBar() {
  const bar = el('div', 'countdown');
  const fill = el('i');
  const left = Math.max(0, state.timeLeft - (performance.now() - stateAt));
  fill.style.animationDuration = `${left}ms`;
  fill.style.transform = `scaleX(${left / PHASE_MS.choosing})`;
  bar.append(fill);
  return bar;
}

function renderLobby(box) {
  const s = state;
  const form = el('div', 'settings');
  form.append(el('h2', '', isHost() ? 'Room settings' : 'Waiting for the host'));

  const codeRow = el('div', 'big-code');
  codeRow.append(el('span', '', 'Room code'), el('strong', '', s.code));
  form.append(codeRow);

  const link = `${location.origin}${location.pathname}?room=${s.code}`;
  const invite = el('div', 'invite');
  const linkInput = el('input');
  linkInput.value = link;
  linkInput.readOnly = true;
  linkInput.setAttribute('aria-label', 'Invite link');
  const copy = el('button', 'btn btn-secondary');
  copy.append(icon('i-copy', ''), 'Copy link');
  copy.onclick = async () => {
    try {
      await navigator.clipboard.writeText(link);
    } catch {
      linkInput.select();
      document.execCommand('copy');
    }
    copy.replaceChildren(icon('i-check', ''), 'Copied!');
    setTimeout(() => copy.replaceChildren(icon('i-copy', ''), 'Copy link'), 1500);
  };
  invite.append(linkInput, copy);
  form.append(invite);

  const grid = el('div', 'settings-grid');
  const ranges = {
    maxPlayers: ['Players', [2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20]],
    drawTime: ['Draw time', [15, 30, 45, 60, 80, 100, 120, 150, 180, 240], 's'],
    rounds: ['Rounds', [2, 3, 4, 5, 6, 7, 8, 9, 10]],
    wordCount: ['Word choices', [1, 2, 3, 4, 5]],
  };
  for (const [key, [label, values, unit = '']] of Object.entries(ranges)) {
    const l = el('label', 'setting');
    l.append(el('span', '', label));
    const sel = el('select');
    sel.disabled = !isHost();
    const all = [...new Set([...values, s.settings[key]])].sort((a, b) => a - b);
    all.forEach((v) => sel.append(new Option(`${v}${unit}`, v, false, v === s.settings[key])));
    sel.onchange = () => socket.emit('settings', { [key]: Number(sel.value) });
    l.append(sel);
    grid.append(l);
  }
  form.append(grid);
  form.append(checkbox('Hide letter count', s.settings.hidden, (v) => socket.emit('settings', { hidden: v })));

  const words = el('textarea');
  words.placeholder = 'Custom words, separated by commas';
  words.value = s.settings.customWords;
  words.disabled = !isHost();
  words.maxLength = 20000;
  words.setAttribute('aria-label', 'Custom words');
  words.onchange = () => socket.emit('settings', { customWords: words.value });
  form.append(words);
  form.append(checkbox('Use only custom words (needs 10+)', s.settings.customOnly, (v) => socket.emit('settings', { customOnly: v, customWords: words.value })));

  if (isHost()) {
    const start = el('button', 'btn btn-primary btn-big', s.players.length < 2 ? 'Waiting for 1 more player...' : `Start game (${s.players.length} players)`);
    start.disabled = s.players.length < 2;
    start.onclick = () => socket.emit('start');
    form.append(start);
  } else form.append(el('p', 'hint-text', 'The host can change settings and start the game.'));
  box.append(form);
}

function checkbox(label, checked, onChange) {
  const l = el('label', 'check');
  const c = el('input');
  c.type = 'checkbox';
  c.checked = checked;
  c.disabled = !isHost();
  c.onchange = () => onChange(c.checked);
  l.append(c, label);
  return l;
}

/* ---------- Timer ---------- */
const RING_LEN = 2 * Math.PI * 19;
$('ring').style.strokeDasharray = RING_LEN;
setInterval(() => {
  if (!state) return;
  const ms = Math.max(0, state.timeLeft - (performance.now() - stateAt));
  const left = Math.ceil(ms / 1000);
  const total = state.state === 'drawing' ? state.settings.drawTime * 1000 : PHASE_MS[state.state];
  const active = Boolean(total);
  $('timer').textContent = active ? left : '';
  $('timer-box').style.visibility = active ? 'visible' : 'hidden';
  $('ring').style.strokeDashoffset = active ? RING_LEN * (1 - ms / total) : RING_LEN;
  const low = state.state === 'drawing' && left <= 10;
  $('timer-box').classList.toggle('low', low);
  if (low && left !== lastTick && left > 0) {
    lastTick = left;
    sound('tick');
  }
}, 200);

/* ---------- Chat ---------- */
function addMsg(m) {
  const list = $('messages');
  const li = el('li', `m-${m.kind}`);
  if (m.name) {
    const b = el('b', '', m.name);
    b.style.color = m.color;
    li.append(b, ' ', m.text);
  } else li.textContent = m.text;
  const atBottom = list.scrollHeight - list.scrollTop - list.clientHeight < 60;
  list.append(li);
  while (list.children.length > 200) list.firstChild.remove();
  if (atBottom) list.scrollTop = list.scrollHeight;
}
$('chat-form').onsubmit = (e) => {
  e.preventDefault();
  const v = $('chat-input').value.trim();
  if (v) socket.emit('chat', v);
  $('chat-input').value = '';
  $('char-count').textContent = '';
};
$('chat-input').addEventListener('input', (e) => {
  const n = e.target.value.length;
  $('char-count').textContent = n > 70 ? `${n}/100` : '';
});

let ratedTurn = null;
const turnKey = () => `${state?.round}|${state?.drawerId}`;
$('rating').onclick = (e) => {
  const b = e.target.closest('button');
  if (!b) return;
  socket.emit('rate', b.dataset.like === '1');
  ratedTurn = turnKey();
  $('rating').hidden = true;
};

/* ---------- Drawing ---------- */
function applyOp(op) {
  if (op.t === 'line') {
    ctx.strokeStyle = ctx.fillStyle = PALETTE[op.c];
    if (op.x0 === op.x1 && op.y0 === op.y1) {
      ctx.beginPath();
      ctx.arc(op.x0, op.y0, op.w / 2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.lineWidth = op.w;
      ctx.beginPath();
      ctx.moveTo(op.x0, op.y0);
      ctx.lineTo(op.x1, op.y1);
      ctx.stroke();
    }
  } else if (op.t === 'fill') floodFill(op.x, op.y, PALETTE[op.c]);
}

function redraw() {
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, W, H);
  ops.forEach(applyOp);
}

function floodFill(x, y, hex) {
  const img = ctx.getImageData(0, 0, W, H);
  const d = img.data;
  const at = (y * W + x) * 4;
  const target = [d[at], d[at + 1], d[at + 2]];
  const fill = [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];
  if (Math.abs(target[0] - fill[0]) + Math.abs(target[1] - fill[1]) + Math.abs(target[2] - fill[2]) < 10) return;
  const TOL = 90; // absorbs anti-aliased stroke edges
  const match = (i) => Math.abs(d[i] - target[0]) + Math.abs(d[i + 1] - target[1]) + Math.abs(d[i + 2] - target[2]) <= TOL;
  const seen = new Uint8Array(W * H);
  const stack = [x, y];
  while (stack.length) {
    const cy = stack.pop(), cx = stack.pop();
    let lx = cx;
    while (lx > 0 && !seen[cy * W + lx - 1] && match((cy * W + lx - 1) * 4)) lx--;
    let rx = cx;
    while (rx < W - 1 && !seen[cy * W + rx + 1] && match((cy * W + rx + 1) * 4)) rx++;
    for (let i = lx; i <= rx; i++) {
      const p = cy * W + i;
      seen[p] = 1;
      d[p * 4] = fill[0]; d[p * 4 + 1] = fill[1]; d[p * 4 + 2] = fill[2]; d[p * 4 + 3] = 255;
      for (const ny of [cy - 1, cy + 1])
        if (ny >= 0 && ny < H && !seen[ny * W + i] && match((ny * W + i) * 4)) stack.push(i, ny);
    }
  }
  ctx.putImageData(img, 0, 0);
}

socket.on('draw', (list) => list.forEach((op) => (ops.push(op), applyOp(op))));
socket.on('ops', (list) => {
  ops = list;
  redraw();
});
socket.on('undo', (s) => {
  ops = ops.filter((op) => op.s !== s);
  redraw();
});
socket.on('clear', () => {
  ops = [];
  pending = [];
  redraw();
});

function localOp(op) {
  ops.push(op);
  pending.push(op);
  applyOp(op);
}
setInterval(() => {
  if (pending.length) socket.emit('draw', pending.splice(0, 300));
}, 40);

function toCanvas(e) {
  const r = canvas.getBoundingClientRect();
  const clamp = (v, max) => Math.max(0, Math.min(max, v));
  return { x: clamp(Math.round(((e.clientX - r.left) / r.width) * W), W - 1), y: clamp(Math.round(((e.clientY - r.top) / r.height) * H), H - 1) };
}
const brushColor = () => (tool === 'eraser' ? 0 : color);

canvas.addEventListener('pointerdown', (e) => {
  if (!isDrawer()) return;
  const p = toCanvas(e);
  strokeId++;
  if (tool === 'fill') return localOp({ t: 'fill', s: strokeId, c: color, x: p.x, y: p.y });
  canvas.setPointerCapture(e.pointerId);
  drawingNow = true;
  last = p;
  localOp({ t: 'line', s: strokeId, c: brushColor(), w: SIZES[size], x0: p.x, y0: p.y, x1: p.x, y1: p.y });
});
canvas.addEventListener('pointermove', (e) => {
  if (!isDrawer()) return;
  moveCursor(e);
  if (!drawingNow) return;
  const p = toCanvas(e);
  if (Math.abs(p.x - last.x) + Math.abs(p.y - last.y) < 2) return;
  localOp({ t: 'line', s: strokeId, c: brushColor(), w: SIZES[size], x0: last.x, y0: last.y, x1: p.x, y1: p.y });
  last = p;
});
const stop = () => (drawingNow = false);
canvas.addEventListener('pointerup', stop);
canvas.addEventListener('pointercancel', stop);
canvas.addEventListener('pointerleave', () => ($('cursor').hidden = true));

// Brush-size preview circle that follows the pointer.
function moveCursor(e) {
  const c = $('cursor');
  if (tool === 'fill' || e.pointerType === 'touch') return (c.hidden = true);
  const r = canvas.getBoundingClientRect();
  const px = (SIZES[size] * r.width) / W;
  c.hidden = false;
  c.style.width = c.style.height = `${px}px`;
  c.style.transform = `translate(${e.clientX - r.left - px / 2}px, ${e.clientY - r.top - px / 2}px)`;
  c.style.background = tool === 'eraser' ? 'rgba(255,255,255,.7)' : PALETTE[color] + '88';
}

function flushThen(event) {
  if (pending.length) socket.emit('draw', pending.splice(0, 300));
  socket.emit(event);
}
$('undo').onclick = () => flushThen('undo');
$('clear').onclick = () => flushThen('clear');

/* ---------- Toolbar ---------- */
PALETTE.forEach((hex, i) => {
  const b = el('button', 'swatch');
  b.style.background = hex;
  b.setAttribute('aria-label', `Color ${hex}`);
  b.onclick = () => {
    color = i;
    if (tool === 'eraser') tool = 'brush';
    syncToolbar();
  };
  $('palette').append(b);
});
SIZES.forEach((px, i) => {
  const b = el('button', 'size');
  b.setAttribute('aria-label', `Brush size ${px}`);
  const dot = el('i');
  dot.style.width = dot.style.height = `${Math.max(4, px / 1.5)}px`;
  b.append(dot);
  b.onclick = () => {
    size = i;
    syncToolbar();
  };
  $('sizes').append(b);
});
document.querySelectorAll('[data-tool]').forEach((b) => (b.onclick = () => ((tool = b.dataset.tool), syncToolbar())));

function syncToolbar() {
  [...$('palette').children].forEach((b, i) => b.classList.toggle('active', i === color));
  [...$('sizes').children].forEach((b, i) => {
    b.classList.toggle('active', i === size);
    b.firstChild.style.background = PALETTE[color] === '#FFFFFF' ? '#C1C1C1' : PALETTE[color];
  });
  document.querySelectorAll('[data-tool]').forEach((b) => b.classList.toggle('active', b.dataset.tool === tool));
  const cur = $('current').firstChild;
  cur.style.background = PALETTE[color];
  cur.style.width = cur.style.height = `${Math.max(6, SIZES[size] / 1.5)}px`;
}
syncToolbar();

document.addEventListener('keydown', (e) => {
  if (!isDrawer() || e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
    e.preventDefault();
    return flushThen('undo');
  }
  const map = { b: 'brush', e: 'eraser', f: 'fill' };
  if (map[e.key.toLowerCase()]) {
    tool = map[e.key.toLowerCase()];
    syncToolbar();
  }
});

/* ---------- Sound (generated, no files to download) ---------- */
let audio;
function unlockAudio() {
  try {
    audio = audio || new AudioContext();
    audio.resume();
  } catch { /* no audio support */ }
}
const SOUNDS = {
  correct: [[660, 0, 0.1], [880, 0.1, 0.1], [1320, 0.2, 0.18]],
  pop: [[880, 0, 0.08]],
  join: [[520, 0, 0.07], [780, 0.07, 0.09]],
  turn: [[440, 0, 0.1], [660, 0.12, 0.1], [880, 0.24, 0.16]],
  start: [[392, 0, 0.1], [523, 0.1, 0.1], [659, 0.2, 0.1], [784, 0.3, 0.2]],
  reveal: [[523, 0, 0.12], [392, 0.14, 0.2]],
  tick: [[1200, 0, 0.03]],
  win: [[523, 0, 0.12], [659, 0.12, 0.12], [784, 0.24, 0.12], [1047, 0.36, 0.35]],
};
function sound(name) {
  if (muted || !audio) return;
  const t0 = audio.currentTime;
  for (const [freq, at, dur] of SOUNDS[name]) {
    const o = audio.createOscillator(), g = audio.createGain();
    o.type = name === 'tick' ? 'square' : 'triangle';
    o.frequency.value = freq;
    g.gain.setValueAtTime(name === 'tick' ? 0.04 : 0.12, t0 + at);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + at + dur);
    o.connect(g).connect(audio.destination);
    o.start(t0 + at);
    o.stop(t0 + at + dur + 0.02);
  }
}
function syncMute() {
  $('mute').querySelector('use').setAttribute('href', muted ? '#i-mute' : '#i-sound');
  $('mute').setAttribute('aria-label', muted ? 'Unmute sounds' : 'Mute sounds');
}
$('mute').onclick = () => {
  muted = !muted;
  localStorage.setItem('dd-muted', muted ? '1' : '0');
  unlockAudio();
  syncMute();
};
syncMute();

/* ---------- Confetti ---------- */
function confetti() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const c = $('confetti'), cx = c.getContext('2d');
  const colors = ['#7C3AED', '#F97361', '#FACC15', '#22C55E', '#06B6D4', '#EC4899'];
  const bits = Array.from({ length: 140 }, () => ({
    x: Math.random() * W, y: -20 - Math.random() * 200, vx: (Math.random() - 0.5) * 4, vy: 2 + Math.random() * 4,
    r: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.3, w: 6 + Math.random() * 6, col: colors[Math.floor(Math.random() * colors.length)],
  }));
  const startT = performance.now();
  (function frame(t) {
    cx.clearRect(0, 0, W, H);
    for (const b of bits) {
      b.x += b.vx; b.y += b.vy; b.vy += 0.05; b.r += b.vr;
      cx.save();
      cx.translate(b.x, b.y);
      cx.rotate(b.r);
      cx.fillStyle = b.col;
      cx.fillRect(-b.w / 2, -b.w / 4, b.w, b.w / 2);
      cx.restore();
    }
    if (t - startT < 4000) requestAnimationFrame(frame);
    else cx.clearRect(0, 0, W, H);
  })(startT);
}

redraw();
