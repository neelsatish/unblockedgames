const path = require('path');
const http = require('http');
const express = require('express');
const { Server } = require('socket.io');
const g = require('./game');
const WORDS = require('./words');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/healthz', (req, res) => res.send('ok'));
const server = http.createServer(app);
const GRACE_MS = 30000;
// Default transports kept on purpose: long-polling fallback helps if a firewall breaks WebSockets.
// Recovery keeps the same socket id after a short Wi-Fi drop, so the player keeps their seat and score.
const io = new Server(server, {
  maxHttpBufferSize: 1e5,
  connectionStateRecovery: { maxDisconnectionDuration: GRACE_MS, skipMiddlewares: true },
});

const CHOOSE_MS = 15000;
const REVEAL_MS = 5000;
const PODIUM_MS = 10000;
const CANVAS_W = 800, CANVAS_H = 600;
const PALETTE_SIZE = 24;
const SIZES = [4, 10, 18, 30, 44];
const MAX_OPS = 30000;
const AVATAR_COLORS = ['#7C3AED', '#DB2777', '#EA580C', '#16A34A', '#0891B2', '#2563EB', '#CA8A04', '#9333EA', '#DC2626', '#0D9488'];
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ';

const rooms = new Map();

function newCode() {
  let c;
  do c = Array.from({ length: 5 }, () => CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]).join('');
  while (rooms.has(c));
  return c;
}

function makeRoom(hostId) {
  const room = {
    code: newCode(), hostId, players: new Map(), settings: g.cleanSettings(), state: 'lobby',
    round: 0, queue: [], drawerId: null, word: null, choices: [], ops: [],
    drawMs: 0, turnEndsAt: 0, guessPoints: new Map(), timers: [], kickVotes: new Map(),
    usedWords: new Set(), colorIdx: 0, lastTurn: null, drawn: new Set(), kicked: new Set(),
  };
  rooms.set(room.code, room);
  return room;
}

// Any exception inside a handler or timer would kill every room, so all entry points go through safe().
function safe(fn) {
  return (...args) => {
    try {
      return fn(...args);
    } catch (err) {
      console.error('handler error:', err);
    }
  };
}
const later = (room, ms, fn) => room.timers.push(setTimeout(safe(fn), ms));
const connectedCount = (room) => [...room.players.values()].filter((p) => p.connected).length;
const gameRunning = (room) => room.state === 'choosing' || room.state === 'drawing' || room.state === 'reveal';
// Players who join or come back mid-round still get their turn this round.
function queueIfOwed(room, id) {
  if (gameRunning(room) && !room.drawn.has(id) && !room.queue.includes(id) && room.drawerId !== id) room.queue.push(id);
}
function clearTimers(room) {
  room.timers.forEach(clearTimeout);
  room.timers = [];
}

function publicState(room, forId) {
  const me = room.players.get(forId);
  const seesWord = room.word && (forId === room.drawerId || me?.guessed || room.state === 'reveal');
  return {
    code: room.code, hostId: room.hostId, you: forId, state: room.state,
    round: room.round, settings: { ...room.settings, customWords: room.settings.customWords.join(', ') },
    players: [...room.players.values()].map(({ id, name, score, color, guessed, connected }) => ({ id, name, score, color, guessed, connected })),
    drawerId: room.drawerId,
    word: seesWord ? room.word : null,
    mask: room.state === 'drawing' ? g.mask(room.word, room.settings.hidden) : null,
    timeLeft: Math.max(0, room.turnEndsAt - Date.now()),
    lastTurn: room.state === 'reveal' ? room.lastTurn : null,
  };
}

function sendState(room) {
  for (const id of room.players.keys()) io.to(id).emit('state', publicState(room, id));
}

const sys = (target, text, kind = 'sys') => io.to(target).emit('chat', { kind, text });

function wordPool(room) {
  const { customWords, customOnly } = room.settings;
  const pool = customOnly ? customWords : [...new Set([...WORDS, ...customWords])];
  const fresh = pool.filter((w) => !room.usedWords.has(w));
  if (fresh.length < room.settings.wordCount) {
    room.usedWords.clear();
    return pool;
  }
  return fresh;
}

function startGame(room) {
  clearTimers(room);
  room.players.forEach((p) => (p.score = 0));
  room.round = 0;
  room.usedWords.clear();
  nextRound(room);
}

function nextRound(room) {
  room.round++;
  if (room.round > room.settings.rounds) return endGame(room);
  room.queue = [...room.players.keys()];
  room.drawn.clear();
  sys(room.code, `Round ${room.round} of ${room.settings.rounds}`, 'round');
  nextTurn(room);
}

function nextTurn(room) {
  clearTimers(room);
  room.drawerId = null;
  if (connectedCount(room) < 2) return backToLobby(room, 'Not enough players connected, back to the lobby');
  while (room.queue.length && !room.drawerId) {
    const id = room.queue.shift();
    if (room.players.get(id)?.connected) room.drawerId = id;
  }
  if (!room.drawerId) return nextRound(room);
  room.drawn.add(room.drawerId);
  room.state = 'choosing';
  room.word = null;
  room.ops = [];
  room.players.forEach((p) => (p.guessed = false, p.rated = false));
  room.choices = g.pickWords(wordPool(room), room.settings.wordCount);
  room.turnEndsAt = Date.now() + CHOOSE_MS;
  io.to(room.code).emit('clear');
  io.to(room.drawerId).emit('choices', room.choices);
  later(room, CHOOSE_MS, () => chooseWord(room, room.choices[Math.floor(Math.random() * room.choices.length)]));
  sendState(room);
}

function chooseWord(room, word) {
  if (room.state !== 'choosing' || !room.choices.includes(word)) return;
  clearTimers(room);
  room.state = 'drawing';
  room.word = word;
  room.usedWords.add(word);
  room.guessPoints = new Map();
  room.drawMs = room.settings.drawTime * 1000;
  room.turnEndsAt = Date.now() + room.drawMs;
  later(room, room.drawMs, () => endTurn(room, 'Time is up!'));
  sendState(room);
}

function endTurn(room, reason) {
  if (room.state !== 'drawing' && room.state !== 'choosing') return;
  clearTimers(room);
  const drawer = room.players.get(room.drawerId);
  const guesserCount = room.players.size - (drawer ? 1 : 0);
  const drawerGain = drawer ? g.drawerPoints([...room.guessPoints.values()], guesserCount) : 0;
  if (drawer) drawer.score += drawerGain;
  room.lastTurn = {
    word: room.word, reason,
    gains: [...room.players.values()].map((p) => ({
      id: p.id, name: p.name,
      gained: p.id === room.drawerId ? drawerGain : room.guessPoints.get(p.id) || 0,
    })).sort((a, b) => b.gained - a.gained),
  };
  room.state = 'reveal';
  room.turnEndsAt = Date.now() + REVEAL_MS;
  if (room.word) sys(room.code, `The word was "${room.word}"`, 'reveal');
  later(room, REVEAL_MS, () => nextTurn(room));
  sendState(room);
}

function endGame(room) {
  clearTimers(room);
  room.state = 'end';
  room.drawerId = null;
  room.players.forEach((p) => (p.guessed = false));
  room.word = null;
  room.turnEndsAt = Date.now() + PODIUM_MS;
  later(room, PODIUM_MS, () => {
    room.state = 'lobby';
    room.round = 0;
    sendState(room);
  });
  sendState(room);
}

function backToLobby(room, why) {
  clearTimers(room);
  Object.assign(room, { state: 'lobby', round: 0, drawerId: null, word: null, ops: [] });
  room.players.forEach((p) => (p.guessed = false));
  io.to(room.code).emit('clear');
  sys(room.code, why);
  sendState(room);
}

function addPlayer(socket, room, rawName, wantColor) {
  const name = String(rawName || '').replace(/\s+/g, ' ').trim().slice(0, 20) || `Player ${room.players.size + 1}`;
  const player = { id: socket.id, name, score: 0, color: AVATAR_COLORS.includes(wantColor) ? wantColor : AVATAR_COLORS[room.colorIdx++ % AVATAR_COLORS.length], guessed: false, connected: true, msgTimes: [] };
  room.players.set(socket.id, player);
  socket.join(room.code);
  socket.data.code = room.code;
  sys(room.code, `${name} joined the room`, 'join');
  if (room.state === 'drawing' || room.state === 'reveal') socket.emit('ops', room.ops);
  queueIfOwed(room, socket.id);
  sendState(room);
}

function removePlayer(room, id) {
  const p = room.players.get(id);
  if (!p) return;
  clearTimeout(p.leaveTimer);
  room.players.delete(id);
  room.kickVotes.delete(id);
  room.kickVotes.forEach((voters) => voters.delete(id));
  if (room.players.size === 0) {
    clearTimers(room);
    rooms.delete(room.code);
    return;
  }
  sys(room.code, `${p.name} left the room`, 'leave');
  if (room.hostId === id) {
    room.hostId = room.players.keys().next().value;
    sys(room.code, `${room.players.get(room.hostId).name} is now the host`);
  }
  if (room.state !== 'lobby' && room.players.size < 2) return backToLobby(room, 'Not enough players, back to the lobby');
  if (id === room.drawerId && (room.state === 'drawing' || room.state === 'choosing')) return endTurn(room, 'The drawer left');
  if (room.state === 'drawing' && allGuessed(room)) return endTurn(room, 'Everyone guessed the word!');
  sendState(room);
}

function kick(room, id) {
  const target = io.sockets.sockets.get(id);
  const p = room.players.get(id);
  if (!p) return;
  sys(room.code, `${p.name} was kicked`, 'leave');
  target?.emit('kicked');
  target?.leave(room.code);
  if (target) target.data.code = null;
  room.kicked.add(id);
  removePlayer(room, id);
}

const allGuessed = (room) => [...room.players.values()].every((p) => p.id === room.drawerId || p.guessed || !p.connected);
const num = (v, max) => Math.max(0, Math.min(max, Number(v) || 0));

function cleanOp(op) {
  if (!op || !Number.isInteger(op.s) || !Number.isInteger(op.c) || op.c < 0 || op.c >= PALETTE_SIZE) return null;
  if (op.t === 'line' && SIZES.includes(op.w))
    return { t: 'line', s: op.s, c: op.c, w: op.w, x0: num(op.x0, CANVAS_W), y0: num(op.y0, CANVAS_H), x1: num(op.x1, CANVAS_W), y1: num(op.y1, CANVAS_H) };
  if (op.t === 'fill') return { t: 'fill', s: op.s, c: op.c, x: Math.floor(num(op.x, CANVAS_W - 1)), y: Math.floor(num(op.y, CANVAS_H - 1)) };
  return null;
}

io.on('connection', safe((socket) => {
  const roomOf = () => rooms.get(socket.data.code);
  if (socket.recovered) {
    const room = roomOf();
    const p = room?.players.get(socket.id);
    if (p) {
      clearTimeout(p.leaveTimer);
      p.connected = true;
      sys(room.code, `${p.name} reconnected`, 'join');
      if (room.state === 'drawing' || room.state === 'reveal') socket.emit('ops', room.ops);
      queueIfOwed(room, socket.id);
      sendState(room);
    } else if (socket.data.code) {
      // Seat is gone (kicked, or the grace period ran out): detach and let the client decide.
      if (room) socket.leave(room.code);
      socket.emit(room?.kicked.has(socket.id) ? 'kicked' : 'rejoin');
      socket.data.code = null;
    }
  }
  const on = (event, fn) => socket.on(event, safe(fn));
  const obj = (v) => (v && typeof v === 'object' ? v : {});
  const isDrawing = (room) => room && room.state === 'drawing' && room.drawerId === socket.id;

  on('create', (payload) => {
    const { name, color } = obj(payload);
    if (roomOf()) return;
    addPlayer(socket, makeRoom(socket.id), name, color);
  });

  on('join', (payload) => {
    const { code, name, color } = obj(payload);
    if (roomOf()) return;
    const room = rooms.get(String(code || '').trim().toUpperCase());
    if (!room) return socket.emit('joinError', 'No room with that code.');
    if (room.players.size >= room.settings.maxPlayers) return socket.emit('joinError', 'That room is full.');
    addPlayer(socket, room, name, color);
  });

  on('settings', (input) => {
    const room = roomOf();
    if (!room || room.hostId !== socket.id || room.state !== 'lobby') return;
    room.settings = g.cleanSettings(obj(input), room.settings);
    sendState(room);
  });

  on('start', () => {
    const room = roomOf();
    if (!room || room.hostId !== socket.id || (room.state !== 'lobby' && room.state !== 'end')) return;
    if (room.players.size < 2) return sys(socket.id, 'You need at least 2 players to start.');
    startGame(room);
  });

  on('choose', (word) => {
    const room = roomOf();
    if (room && room.drawerId === socket.id) chooseWord(room, word);
  });

  on('draw', (ops) => {
    const room = roomOf();
    if (!isDrawing(room) || !Array.isArray(ops) || room.ops.length >= MAX_OPS) return;
    const clean = ops.slice(0, 300).map(cleanOp).filter(Boolean);
    room.ops.push(...clean);
    socket.to(room.code).emit('draw', clean);
  });

  on('undo', () => {
    const room = roomOf();
    if (!isDrawing(room) || !room.ops.length) return;
    const s = room.ops[room.ops.length - 1].s;
    room.ops = room.ops.filter((op) => op.s !== s);
    io.to(room.code).emit('undo', s);
  });

  on('clear', () => {
    const room = roomOf();
    if (!isDrawing(room)) return;
    room.ops = [];
    io.to(room.code).emit('clear');
  });

  on('chat', (raw) => {
    const room = roomOf();
    const p = room?.players.get(socket.id);
    if (!p) return;
    const text = String(raw || '').replace(/\s+/g, ' ').trim().slice(0, 100);
    if (!text) return;
    const now = Date.now();
    p.msgTimes = p.msgTimes.filter((t) => now - t < 3000);
    if (p.msgTimes.length >= 5) return sys(socket.id, 'Slow down! You are sending messages too fast.');
    p.msgTimes.push(now);
    const msg = { kind: 'msg', name: p.name, color: p.color, text };

    if (room.state !== 'drawing') return io.to(room.code).emit('chat', msg);
    const guess = g.normalize(text);
    const word = g.normalize(room.word);

    if (socket.id === room.drawerId) {
      if (guess.includes(word)) return sys(socket.id, "You can't say the word!");
      return io.to(room.code).emit('chat', msg);
    }
    if (p.guessed) {
      // Players who already guessed only talk among themselves and the drawer.
      for (const other of room.players.values())
        if (other.guessed || other.id === room.drawerId) io.to(other.id).emit('chat', { ...msg, kind: 'secret' });
      return;
    }
    if (guess === word) {
      const pts = g.guesserPoints(room.turnEndsAt - now, room.drawMs);
      p.score += pts;
      p.guessed = true;
      room.guessPoints.set(p.id, pts);
      sys(room.code, `${p.name} guessed the word!`, 'good');
      socket.emit('correct', { word: room.word, points: pts });
      if (allGuessed(room)) return endTurn(room, 'Everyone guessed the word!');
      return sendState(room);
    }
    io.to(room.code).emit('chat', msg);
    if (g.isClose(guess, word)) sys(socket.id, `"${text}" is close!`, 'close');
  });

  on('rate', (like) => {
    const room = roomOf();
    const p = room?.players.get(socket.id);
    if (!p || room.state !== 'drawing' || socket.id === room.drawerId || p.rated) return;
    p.rated = true;
    sys(room.code, `${p.name} ${like ? 'liked' : 'disliked'} the drawing`, like ? 'good' : 'leave');
  });

  on('kick', (id) => {
    const room = roomOf();
    if (room && room.hostId === socket.id && id !== socket.id) kick(room, id);
  });

  on('votekick', (id) => {
    const room = roomOf();
    if (!room || id === socket.id || !room.players.has(id) || !room.players.has(socket.id)) return;
    if (room.players.size < 3) return sys(socket.id, 'Vote kick needs at least 3 players.');
    const voters = room.kickVotes.get(id) || new Set();
    voters.add(socket.id);
    room.kickVotes.set(id, voters);
    const needed = Math.floor((room.players.size - 1) / 2) + 1;
    sys(room.code, `${room.players.get(socket.id).name} voted to kick ${room.players.get(id).name} (${voters.size}/${needed})`);
    if (voters.size >= needed) kick(room, id);
  });

  // shortcut: a page refresh still makes a new player; only network drops under 30 s keep the seat.
  on('disconnect', (reason) => {
    const room = roomOf();
    const p = room?.players.get(socket.id);
    if (!p) return;
    // An explicit disconnect (the client sends one on pagehide) leaves now; a network drop gets a grace period.
    if (reason === 'client namespace disconnect' || reason === 'server namespace disconnect') return removePlayer(room, socket.id);
    p.connected = false;
    p.leaveTimer = setTimeout(safe(() => removePlayer(room, socket.id)), GRACE_MS - 1000);
    if (socket.id === room.drawerId && (room.state === 'drawing' || room.state === 'choosing')) return endTurn(room, 'The drawer lost connection');
    if ((room.state === 'drawing' || room.state === 'choosing') && connectedCount(room) < 2) return endTurn(room, 'Not enough players connected');
    if (room.state === 'drawing' && allGuessed(room)) return endTurn(room, 'Everyone guessed the word!');
    sendState(room);
  });
}));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Doodle Dash running on http://localhost:${PORT}`));
