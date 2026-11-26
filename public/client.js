/* global io */
const PALETTE = [
  '#FFFFFF', '#C1C1C1', '#EF4444', '#F97316', '#FACC15', '#22C55E', '#06B6D4', '#3B82F6', '#8B5CF6', '#EC4899', '#A3E635', '#FDBA74',
  '#000000', '#4B5563', '#991B1B', '#C2410C', '#A16207', '#15803D', '#0E7490', '#1E3A8A', '#5B21B6', '#9D174D', '#57301A', '#F5D0A9',
];
const SIZES = [4, 10, 18, 30, 44];
const W = 800, H = 600;

const $ = (id) => document.getElementById(id);
const el = (tag, cls, text) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
};

const socket = io();
let state = null;
let stateAt = 0;
let choices = [];
let ops = [];
let pending = [];
let tool = 'brush', color = 12, size = 1;
let strokeId = 0;
let drawingNow = false, last = null;

const canvas = $('canvas');
const ctx = canvas.getContext('2d', { willReadFrequently: true });
ctx.lineCap = ctx.lineJoin = 'round';

const isDrawer = () => state && state.state === 'drawing' && state.drawerId === state.you;
const isHost = () => state && state.hostId === state.you;
const playerName = (id) => state?.players.find((p) => p.id === id)?.name || 'Someone';

/* ---------- Home ---------- */
const params = new URLSearchParams(location.search);
$('code').value = (params.get('room') || '').toUpperCase();
$('name').value = localStorage.getItem('dd-name') || '';
const saveName = () => localStorage.setItem('dd-name', $('name').value.trim());

$('create').onclick = () => {
  saveName();
  socket.emit('create', { name: $('name').value });
};
$('join-form').onsubmit = (e) => {
  e.preventDefault();
  const code = $('code').value.trim().toUpperCase();
  if (code.length !== 5) return ($('home-error').textContent = 'Room codes are 5 letters.');
  saveName();
  socket.emit('join', { code, name: $('name').value });
};
socket.on('joinError', (msg) => ($('home-error').textContent = msg));
socket.on('kicked', () => {
  alert('You were kicked from the room.');
  location.href = location.pathname;
});
socket.on('disconnect', () => {
  if (state) addMsg({ kind: 'leave', text: 'Connection lost. Refresh the page to rejoin.' });
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
  render();
});
socket.on('choices', (c) => {
  choices = c;
  render();
});
socket.on('correct', ({ points }) => {
  ding();
  addMsg({ kind: 'good', text: `You guessed it! +${points}` });
});
socket.on('chat', addMsg);

function render() {
  const s = state;
  $('room-code').textContent = s.code;
  $('round').textContent = s.state === 'lobby' ? 'Lobby' : s.state === 'end' ? 'Game over' : `Round ${s.round} of ${s.settings.rounds}`;
  renderWord();
  renderPlayers();
  renderOverlay();
  $('toolbar').hidden = !isDrawer();
  canvas.classList.toggle('can-draw', isDrawer());
  const me = s.players.find((p) => p.id === s.you);
  $('rating').hidden = !(s.state === 'drawing' && !isDrawer());
  $('chat-input').placeholder = isDrawer() ? 'Chat (you are drawing)' : me?.guessed ? 'Chat with players who guessed' : 'Type your guess here...';
}

function renderWord() {
  const s = state;
  const box = $('word');
  box.replaceChildren();
  if (s.state === 'drawing') {
    if (s.word) {
      box.append(s.word.toUpperCase());
    } else if (s.mask) {
      box.append(s.mask.split('').join(' '));
      const small = el('small', '', String([...s.mask].filter((c) => c !== ' ' && c !== '-').length));
      box.append(small);
    } else box.append('? ? ?');
  } else if (s.state === 'choosing') {
    box.append(s.drawerId === s.you ? 'Pick a word!' : `${playerName(s.drawerId)} is choosing...`);
  } else if (s.state === 'reveal' && s.lastTurn?.word) {
    box.append(s.lastTurn.word.toUpperCase());
  }
}

function renderPlayers() {
  const s = state;
  const list = $('players');
  list.replaceChildren();
  const ranked = [...s.players].sort((a, b) => b.score - a.score);
  for (const p of ranked) {
    const li = el('li', 'player');
    li.classList.toggle('me', p.id === s.you);
    li.classList.toggle('guessed', p.guessed);
    li.classList.toggle('drawing', p.id === s.drawerId && s.state !== 'lobby');
    li.append(el('span', 'p-rank', `#${ranked.findIndex((r) => r.score === p.score) + 1}`));
    const av = el('div', 'avatar', p.name.slice(0, 1).toUpperCase());
    av.style.background = p.color;
    av.setAttribute('aria-hidden', 'true');
    li.append(av);
    const info = el('div', 'p-info');
    const name = el('div', 'p-name');
    name.append(el('span', '', p.name + (p.id === s.you ? ' (you)' : '')));
    if (p.id === s.hostId) name.append(icon('i-crown', 'Host'));
    if (p.id === s.drawerId && (s.state === 'drawing' || s.state === 'choosing')) name.append(icon('i-pencil', 'Drawing'));
    info.append(name, el('div', 'p-score', `${p.score} points`));
    li.append(info);
    if (p.id !== s.you && (isHost() || s.players.length >= 3)) {
      const b = el('button', 'p-kick', isHost() ? 'Kick' : 'Vote kick');
      b.setAttribute('aria-label', `${isHost() ? 'Kick' : 'Vote to kick'} ${p.name}`);
      b.onclick = () => socket.emit(isHost() ? 'kick' : 'votekick', p.id);
      li.append(b);
    }
    list.append(li);
  }
}

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
  o.replaceChildren();
  o.hidden = false;
  const box = el('div');
  o.append(box);

  if (s.state === 'lobby') return renderLobby(box);
  if (s.state === 'choosing') {
    if (s.drawerId === s.you && choices.length) {
      box.append(el('h2', '', 'Choose a word'));
      const row = el('div', 'choices');
      for (const w of choices) {
        const b = el('button', 'btn btn-secondary', w);
        b.onclick = () => socket.emit('choose', w);
        row.append(b);
      }
      box.append(row);
    } else box.append(el('h2', '', `${playerName(s.drawerId)} is choosing a word...`));
    return;
  }
  if (s.state === 'reveal' && s.lastTurn) {
    box.append(el('p', '', s.lastTurn.reason));
    box.append(el('h2', '', s.lastTurn.word ? `The word was "${s.lastTurn.word}"` : 'Turn skipped'));
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
    box.append(el('h2', '', `${ranked[0]?.name} wins!`));
    const podium = el('div', 'podium');
    [1, 0, 2].forEach((i) => {
      const p = ranked[i];
      if (!p) return;
      const d = el('div', `p${i + 1}`);
      d.append(el('b', '', `#${i + 1}`), el('span', '', p.name), el('span', '', `${p.score}`));
      podium.append(d);
    });
    box.append(podium);
    return;
  }
  o.hidden = true;
}

function renderLobby(box) {
  const s = state;
  const form = el('div', 'settings');
  form.append(el('h2', '', isHost() ? 'Room settings' : 'Waiting for the host to start'));

  const link = `${location.origin}${location.pathname}?room=${s.code}`;
  const invite = el('div', 'invite');
  const linkInput = el('input');
  linkInput.value = link;
  linkInput.readOnly = true;
  linkInput.setAttribute('aria-label', 'Invite link');
  const copy = el('button', 'btn btn-ghost');
  copy.append(icon('i-copy', 'Copy invite link'));
  copy.onclick = () => {
    navigator.clipboard?.writeText(link);
    linkInput.select();
    addMsg({ kind: 'sys', text: 'Invite link copied!' });
  };
  invite.append(linkInput, copy);
  form.append(invite, el('p', 'hint-text', `Or tell friends the code: ${s.code}`));

  const ranges = {
    maxPlayers: ['Players', 2, 20, 1],
    drawTime: ['Draw time (seconds)', 15, 240, 15],
    rounds: ['Rounds', 2, 10, 1],
    wordCount: ['Word choices', 1, 5, 1],
    hints: ['Hints', 0, 5, 1],
  };
  for (const [key, [label, min, max, step]] of Object.entries(ranges)) {
    const l = el('label', '', label);
    const sel = el('select');
    sel.disabled = !isHost();
    const values = [];
    for (let v = min; v <= max; v += step) values.push(v);
    if (key === 'drawTime') values.unshift(...[20, 30, 40, 50, 60, 70, 80, 90, 100].filter((v) => !values.includes(v)));
    values.sort((a, b) => a - b).forEach((v) => sel.append(new Option(v, v, false, v === s.settings[key])));
    sel.onchange = () => socket.emit('settings', { [key]: Number(sel.value) });
    l.append(sel);
    form.append(l);
  }
  const hidden = checkbox('Hidden word (no letter count)', s.settings.hidden, (v) => socket.emit('settings', { hidden: v }));
  form.append(hidden);

  const words = el('textarea');
  words.placeholder = 'Custom words, separated by commas';
  words.value = s.settings.customWords;
  words.disabled = !isHost();
  words.maxLength = 20000;
  words.setAttribute('aria-label', 'Custom words');
  words.onchange = () => socket.emit('settings', { customWords: words.value });
  form.append(words);
  form.append(checkbox('Use custom words only (needs 10+)', s.settings.customOnly, (v) => socket.emit('settings', { customOnly: v, customWords: words.value })));

  if (isHost()) {
    const start = el('button', 'btn btn-primary btn-big', s.players.length < 2 ? 'Need 2+ players' : 'Start game');
    start.disabled = s.players.length < 2;
    start.onclick = () => socket.emit('start');
    form.append(start);
  }
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
setInterval(() => {
  if (!state) return;
  const left = Math.max(0, Math.ceil((state.timeLeft - (performance.now() - stateAt)) / 1000));
  const active = ['choosing', 'drawing', 'reveal', 'end'].includes(state.state);
  $('timer').textContent = active ? left : '-';
  $('timer').parentElement.classList.toggle('low', state.state === 'drawing' && left <= 10);
}, 250);

/* ---------- Chat ---------- */
function addMsg(m) {
  const list = $('messages');
  const li = el('li', `m-${m.kind}`);
  if (m.name) {
    const b = el('b', '', `${m.name}:`);
    b.style.color = m.color;
    li.append(b, m.text);
  } else li.textContent = m.text;
  const atBottom = list.scrollHeight - list.scrollTop - list.clientHeight < 40;
  list.append(li);
  while (list.children.length > 200) list.firstChild.remove();
  if (atBottom) list.scrollTop = list.scrollHeight;
}
$('chat-form').onsubmit = (e) => {
  e.preventDefault();
  const v = $('chat-input').value.trim();
  if (v) socket.emit('chat', v);
  $('chat-input').value = '';
};
$('rating').onclick = (e) => {
  const b = e.target.closest('button');
  if (!b) return;
  socket.emit('rate', b.dataset.like === '1');
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
  return { x: Math.round(((e.clientX - r.left) / r.width) * W), y: Math.round(((e.clientY - r.top) / r.height) * H) };
}

canvas.addEventListener('pointerdown', (e) => {
  if (!isDrawer()) return;
  const p = toCanvas(e);
  strokeId++;
  if (tool === 'fill') return localOp({ t: 'fill', s: strokeId, c: color, x: p.x, y: p.y });
  canvas.setPointerCapture(e.pointerId);
  drawingNow = true;
  last = p;
  localOp({ t: 'line', s: strokeId, c: tool === 'eraser' ? 0 : color, w: SIZES[size], x0: p.x, y0: p.y, x1: p.x, y1: p.y });
});
canvas.addEventListener('pointermove', (e) => {
  if (!drawingNow || !isDrawer()) return;
  const p = toCanvas(e);
  if (Math.abs(p.x - last.x) + Math.abs(p.y - last.y) < 2) return;
  localOp({ t: 'line', s: strokeId, c: tool === 'eraser' ? 0 : color, w: SIZES[size], x0: last.x, y0: last.y, x1: p.x, y1: p.y });
  last = p;
});
const stop = () => (drawingNow = false);
canvas.addEventListener('pointerup', stop);
canvas.addEventListener('pointercancel', stop);

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
    if (tool === 'eraser') setTool('brush');
    syncToolbar();
  };
  $('palette').append(b);
});
SIZES.forEach((px, i) => {
  const b = el('button', 'size');
  b.setAttribute('aria-label', `Brush size ${px}`);
  const dot = el('i');
  dot.style.width = dot.style.height = `${Math.max(4, px / 1.6)}px`;
  b.append(dot);
  b.onclick = () => {
    size = i;
    syncToolbar();
  };
  $('sizes').append(b);
});
document.querySelectorAll('[data-tool]').forEach((b) => (b.onclick = () => setTool(b.dataset.tool)));

function setTool(t) {
  tool = t;
  syncToolbar();
}
function syncToolbar() {
  [...$('palette').children].forEach((b, i) => b.classList.toggle('active', i === color));
  [...$('sizes').children].forEach((b, i) => b.classList.toggle('active', i === size));
  document.querySelectorAll('[data-tool]').forEach((b) => b.classList.toggle('active', b.dataset.tool === tool));
}
syncToolbar();

document.addEventListener('keydown', (e) => {
  if (!isDrawer() || e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
    e.preventDefault();
    return flushThen('undo');
  }
  const map = { b: 'brush', e: 'eraser', f: 'fill' };
  if (map[e.key.toLowerCase()]) setTool(map[e.key.toLowerCase()]);
});

/* ---------- Sound ---------- */
let audio;
function ding() {
  try {
    audio = audio || new AudioContext();
    const o = audio.createOscillator(), g = audio.createGain();
    o.frequency.setValueAtTime(660, audio.currentTime);
    o.frequency.setValueAtTime(990, audio.currentTime + 0.1);
    g.gain.setValueAtTime(0.15, audio.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 0.35);
    o.connect(g).connect(audio.destination);
    o.start();
    o.stop(audio.currentTime + 0.35);
  } catch { /* sound is optional */ }
}

redraw();
