/* Rare Finds pixel campus: a low-resolution canvas scaled up with crisp pixels.
   The run crosses seven campus zones (0 to 7,000 m). Time of day runs on its own clock: it starts at the player's
   local time and a full day passes every four minutes, so every run sees sunrise, noon, sunset or night.
   Lighting: every scenery colour is multiplied by the current ambient light (L), and lamps, windows, stars and
   fireflies are drawn afterwards at full brightness so they glow at night. */
(function () {
  const MAX_M = 7000;
  const PX_PER_M = 0.6; // world pixels per metre
  const ZONE_M = 1000;
  const ZONES = ['Front Gate', 'Classroom Block', 'Library Courtyard', 'Science Labs', 'Sports Field', 'Auditorium', 'Rooftop Observatory'];
  const DAY_MS = 240000; // one full day and night

  const canvas = document.getElementById('scene');
  const ctx = canvas.getContext('2d');
  let W = 384, H = 216, SCALE = 3, GROUND = 160;
  const reduced = () => document.documentElement.classList.contains('reduce-motion');

  // ---------- colour helpers ----------
  const rect = (x, y, w, h, c) => {
    ctx.fillStyle = c;
    ctx.fillRect(Math.round(x), Math.round(y), w, h);
  };
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp01 = (v) => Math.max(0, Math.min(1, v));
  const rgbCache = new Map();
  const rgb = (h) => {
    let v = rgbCache.get(h);
    if (!v) rgbCache.set(h, (v = [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)]));
    return v;
  };
  const toHex = (r, g, b) => '#' + [r, g, b].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
  const mix = (a, b, t) => {
    const A = rgb(a), B = rgb(b);
    return toHex(lerp(A[0], B[0], t), lerp(A[1], B[1], t), lerp(A[2], B[2], t));
  };
  const lighten = (c, t = 0.22) => mix(c, '#FFFFFF', t);
  const darken = (c, t = 0.22) => mix(c, '#000000', t);
  const hash = (n) => {
    n = Math.imul(n ^ (n >>> 16), 2246822507);
    n = Math.imul(n ^ (n >>> 13), 3266489909);
    return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
  };
  function rng(seed) {
    let s = seed >>> 0;
    return () => ((s = Math.imul(s ^ (s >>> 15), 2246822507) ^ Math.imul(s ^ (s >>> 13), 3266489909)), (s >>>= 0) / 4294967296);
  }
  const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map((v) => (v + 0.5) / 16);
  const bayer = (x, y) => BAYER[(y & 3) * 4 + (x & 3)];
  const ROWD = [0.125, 0.625, 0.375, 0.875]; // whole-row dither: bands blend with interleaved lines

  // Tiny 3x5 pixel digits for distance posts.
  const DIGITS = ['111101101101111', '010110010010111', '111001111100111', '111001111001111', '101101111001001', '111100111001111', '111100111101111', '111001001001001', '111101111101111', '111101111001111'];
  function digits(str, x, y, c) {
    for (const ch of str) {
      if (ch === 'm') {
        rect(x, y + 2, 1, 3, c); rect(x + 1, y + 2, 1, 1, c); rect(x + 2, y + 2, 1, 3, c); rect(x + 3, y + 2, 1, 1, c); rect(x + 4, y + 2, 1, 3, c);
        x += 6;
        continue;
      }
      const d = DIGITS[+ch];
      if (!d) { x += 2; continue; }
      for (let i = 0; i < 15; i++) if (d[i] === '1') rect(x + (i % 3), y + Math.floor(i / 3), 1, 1, c);
      x += 4;
    }
  }

  // ---------- time of day ----------
  // [time 0..1, sky top, sky middle, horizon, ambient light (r, g, b multipliers), darkness]
  const TOD = [
    [0.0, '#0A0F2E', '#151C4A', '#26295E', [0.36, 0.4, 0.66], 1],
    [0.2, '#111842', '#2B2A63', '#55406F', [0.42, 0.42, 0.66], 0.9],
    [0.25, '#2E4C93', '#C47A8A', '#FFB27A', [0.8, 0.62, 0.64], 0.45],
    [0.3, '#5DA8E6', '#A9D6F2', '#FFE3B8', [0.98, 0.9, 0.84], 0.08],
    [0.38, '#5AAEF0', '#9ED6F6', '#DDF3FF', [1, 1, 1], 0],
    [0.62, '#5AAAEC', '#A6D6F2', '#E8F5FF', [1, 1, 0.98], 0],
    [0.7, '#5B8FD8', '#E7B489', '#FFC07A', [1, 0.86, 0.7], 0.06],
    [0.75, '#3A3D86', '#D0727A', '#FF8A5C', [0.86, 0.62, 0.62], 0.3],
    [0.8, '#1C1F5A', '#4E3A78', '#8A4E78', [0.52, 0.48, 0.7], 0.7],
    [0.86, '#0D1336', '#1C2152', '#30306A', [0.38, 0.41, 0.66], 0.95],
    [1.0, '#0A0F2E', '#151C4A', '#26295E', [0.36, 0.4, 0.66], 1],
  ];
  const now0 = performance.now();
  const local = new Date();
  const startTod = (local.getHours() + local.getMinutes() / 60) / 24;
  const todAt = (now) => (typeof window.__rfTod === 'number' ? window.__rfTod : reduced() ? startTod : (startTod + (now - now0) / DAY_MS) % 1); // __rfTod: pin the time for testing
  function lightAt(t) {
    let i = 0;
    while (i < TOD.length - 2 && t > TOD[i + 1][0]) i++;
    const a = TOD[i], b = TOD[i + 1], k = clamp01((t - a[0]) / (b[0] - a[0]));
    return {
      t,
      top: mix(a[1], b[1], k), mid: mix(a[2], b[2], k), bot: mix(a[3], b[3], k),
      amb: a[4].map((v, j) => lerp(v, b[4][j], k)),
      dark: lerp(a[5], b[5], k),
    };
  }
  // Lit colour: scenery colour times the ambient light. Cached per light level.
  let litKey = '', litCache = new Map(), AMB = [1, 1, 1];
  function setAmbient(amb) {
    const key = amb.map((v) => Math.round(v * 64)).join();
    if (key === litKey) return;
    litKey = key;
    AMB = amb.map((v) => Math.round(v * 64) / 64);
    litCache = new Map();
  }
  const L = (c) => {
    let v = litCache.get(c);
    if (!v) {
      const [r, g, b] = rgb(c);
      litCache.set(c, (v = toHex(r * AMB[0], g * AMB[1], b * AMB[2])));
    }
    return v;
  };
  const P = (x, y, w, h, c) => rect(x, y, w, h, L(c)); // lit rect

  // ---------- sky: a dithered gradient, rebuilt only when the light changes ----------
  const sky = document.createElement('canvas');
  const sctx = sky.getContext('2d');
  let skyKey = '';
  function buildSky(light) {
    const key = `${W}x${GROUND}|${light.top}${light.mid}${light.bot}`;
    if (key === skyKey) return;
    skyKey = key;
    sky.width = W;
    sky.height = GROUND;
    const STEPS = 10;
    const pal = [];
    for (let i = 0; i <= STEPS * 2; i++) {
      const v = i / (STEPS * 2);
      pal.push(rgb(v < 0.5 ? mix(light.top, light.mid, v * 2) : mix(light.mid, light.bot, (v - 0.5) * 2)));
    }
    const img = sctx.createImageData(W, GROUND);
    const d = img.data;
    for (let y = 0; y < GROUND; y++) {
      const f = Math.pow(y / (GROUND - 1), 1.25) * STEPS * 2;
      const i0 = Math.floor(f), frac = f - i0;
      for (let x = 0; x < W; x++) {
        const c = pal[Math.min(pal.length - 1, frac > ROWD[(y + ((x >> 3) & 1)) & 3] ? i0 + 1 : i0)];
        const o = (y * W + x) * 4;
        d[o] = c[0]; d[o + 1] = c[1]; d[o + 2] = c[2]; d[o + 3] = 255;
      }
    }
    sctx.putImageData(img, 0, 0);
  }
  // Round glow sprites in three solid steps (sun halo, moon halo, lamp light), made once per colour.
  const glowCache = new Map();
  function glow(r, color, strength = 1) {
    const key = `${r}|${color}|${strength}`;
    if (glowCache.has(key)) return glowCache.get(key);
    const c = document.createElement('canvas');
    c.width = c.height = r * 2;
    const g = c.getContext('2d');
    g.fillStyle = color;
    for (const [edge, a] of [[1, 0.14], [0.72, 0.16], [0.45, 0.22]]) {
      g.globalAlpha = a * strength;
      for (let y = 0; y < r * 2; y++)
        for (let x = 0; x < r * 2; x++) if (Math.hypot(x - r + 0.5, y - r + 0.5) < r * edge) g.fillRect(x, y, 1, 1);
    }
    glowCache.set(key, c);
    return c;
  }
  // Blob sprites (clouds, tree canopies) from overlapping circles, shaded in tones:
  // tone(nx, ny, x, y) gets the pixel's position inside its circle (-1..1) and returns a colour or null.
  function blob(w, h, circles, tone) {
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    const g = c.getContext('2d');
    for (let y = 0; y < h; y++)
      for (let x = 0; x < w; x++) {
        let best = null;
        for (const [cx, cy, r] of circles) {
          const d = Math.hypot(x + 0.5 - cx, y + 0.5 - cy) / r;
          if (d < 1 && (!best || cy - r < best[1] - best[2])) best = [cx, cy, r]; // the higher circle is in front
        }
        if (!best) continue;
        const col = tone((x + 0.5 - best[0]) / best[2], (y + 0.5 - best[1]) / best[2], x, y);
        if (col) {
          g.fillStyle = col;
          g.fillRect(x, y, 1, 1);
        }
      }
    return c;
  }

  // ---------- sprites: sun, moon, clouds, tree canopies ----------
  const discCache = new Map();
  function disc(r, color, hi) {
    const key = `${r}|${color}|${hi}`;
    if (!discCache.has(key))
      discCache.set(key, blob(r * 2, r * 2, [[r, r, r]], (nx, ny) => (nx * nx + ny * ny < 0.35 && nx < 0.1 && ny < 0.1 ? hi : color)));
    return discCache.get(key);
  }
  let moonCache = null;
  function moonSprite() {
    // full moon with grey maria and craters
    const CRATERS = [[-0.35, -0.25, 0.28], [0.3, 0.2, 0.22], [0.05, -0.5, 0.14], [-0.15, 0.45, 0.18], [0.5, -0.3, 0.1]];
    return (moonCache ||= blob(20, 20, [[10, 10, 10]], (nx, ny) => {
      for (const [cx, cy, cr] of CRATERS) {
        const d = Math.hypot(nx - cx, ny - cy);
        if (d < cr) return d > cr * 0.6 && nx > cx ? '#F7F3D2' : '#C9C3A0';
      }
      return nx + ny > 1.0 ? '#E2DCB4' : '#F2EDC8';
    }));
  }
  function cloudPalette(light) {
    const night = light.dark;
    const hi = mix(mix('#FFFFFF', light.bot, 0.12), light.mid, night * 0.62);
    const body = mix(mix('#F2F6FF', light.mid, 0.22), light.mid, night * 0.6);
    const shade = mix(mix('#B4BEE6', light.top, 0.25), light.top, night * 0.45);
    const warm = clamp01(1 - Math.abs(night - 0.4) * 2.5); // strongest at sunrise and sunset
    const rim = mix(shade, light.bot, 0.6 * warm); // the underside catches the low sun
    return { hi, body, shade, rim, key: hi + body + shade };
  }
  const cloudCache = new Map();
  function cloudSprite(i, cp) {
    const key = `${i}|${cp.key}`;
    let c = cloudCache.get(key);
    if (!c) {
      if (cloudCache.size > 60) cloudCache.clear();
      const cl = clouds[i];
      c = blob(cl.w, cl.h, cl.circles, (nx, ny, x, y) => {
        if (y >= cl.h - 2) return cp.rim;
        if (y >= cl.h - 4 || ny > 0.45) return cp.shade;
        if (ny < -0.45 && nx < 0.35) return cp.hi;
        return cp.body;
      });
      cloudCache.set(key, c);
    }
    return c;
  }
  // Tree canopies: chunky clumps in three tones plus texture, in a few kinds (gulmohar, blossom, green, mango).
  const TREE_KINDS = [
    { hi: '#FF8A5C', mid: '#E2492F', dark: '#A42C22', speck: '#FFC07A' }, // gulmohar
    { hi: '#FFC4DD', mid: '#F48FB8', dark: '#C25E8E', speck: '#FFE4F0' }, // blossom
    { hi: '#7CC566', mid: '#4C9A47', dark: '#2E6B38', speck: '#A6DE7E' }, // green
    { hi: '#5FAE5A', mid: '#3A7F43', dark: '#23562F', speck: '#84C46B' }, // mango
  ];
  const canopyShapes = [0, 1, 2].map((v) => {
    const r = rng(77 + v * 13), circles = [];
    for (let k = 0; k < 7; k++) circles.push([7 + r() * 16, 8 + r() * 10, 5 + r() * 4]);
    circles.push([15, 12, 9]);
    return circles;
  });
  const treeCache = new Map();
  function canopy(kind, v) {
    const key = `${kind}|${v}|${litKey}`;
    let c = treeCache.get(key);
    if (!c) {
      if (treeCache.size > 80) treeCache.clear();
      const k = TREE_KINDS[kind];
      const hi = L(k.hi), mid = L(k.mid), dark = L(k.dark), speck = L(k.speck);
      c = blob(30, 26, canopyShapes[v], (nx, ny, x, y) => {
        const n = hash(x * 31 + y * 17 + v);
        if (ny > 0.5) return n < 0.15 ? mid : dark;
        if (ny < -0.4 && nx < 0.4) return n < 0.2 ? speck : hi;
        return n < 0.08 ? speck : n > 0.9 ? dark : mid;
      });
      treeCache.set(key, c);
    }
    return c;
  }

  // ---------- world props (generated once, deterministic) ----------
  const worldW = MAX_M * PX_PER_M + 600;
  const R = rng(20261126);
  // Cumulus clouds: a row of circles, biggest in the middle, on a flat base.
  const clouds = Array.from({ length: 9 }, (_, i) => {
    const w = 36 + Math.floor(R() * 60), n = 4 + Math.floor(w / 14), circles = [];
    for (let k = 0; k < n; k++) {
      const t = k / (n - 1), r = 5 + Math.sin(t * Math.PI) * (6 + R() * 7);
      circles.push([4 + t * (w - 8) + (R() - 0.5) * 4, 0, r]);
    }
    const h = Math.ceil(Math.max(...circles.map((c) => c[2])) * 1.6) + 2;
    for (const c of circles) c[1] = h - 2 - c[2] * 0.55;
    return { x: R() * 1000, y: 4 + R() * 46, w, h, circles, s: 0.03 + R() * 0.04, streak: i > 6 };
  });
  const streaks = Array.from({ length: 6 }, () => ({ x: R() * 900, y: 20 + R() * 60, w: 30 + Math.floor(R() * 70), s: 0.05 + R() * 0.04 }));
  const stars = Array.from({ length: 110 }, () => ({ x: Math.floor(R() * 2000), y: Math.floor(R() * 130), p: R() * 6.28, big: R() < 0.12 }));
  const birds = Array.from({ length: 5 }, () => ({ x: R() * 400, y: 18 + R() * 40, v: 0.15 + R() * 0.2, p: R() * 6 }));
  const far = [];
  for (let x = 0; x < worldW * 0.25 + 900; x += 6 + Math.floor(R() * 14)) far.push({ x, h: 10 + Math.floor(R() * 34), w: 6 + Math.floor(R() * 10), tower: R() < 0.18, seed: Math.floor(R() * 1e9) });
  // Ridge heights for the background layers: smooth swells plus sharp peaks (|sin|) for a jagged skyline.
  const ridge = (x, k) => k === 0
    ? 30 + Math.sin(x / 90) * 14 + Math.abs(Math.sin(x / 37 + 1.3)) * 16 + Math.sin(x / 13) * 2
    : k === 1
      ? 18 + Math.sin(x / 70 + 2) * 9 + Math.abs(Math.sin(x / 29 + 0.4)) * 11 + Math.sin(x / 9) * 1.5
      : 9 + Math.sin(x / 50 + 5) * 4 + Math.abs(Math.sin(x / 6.3)) * 3 + Math.abs(Math.sin(x / 3.7 + 1)) * 2; // forest canopy

  // Near props by zone: each zone has its own mix of things along the path.
  const KINDS = [
    ['tree', 'tree', 'lamp', 'flowers', 'flowers', 'bush', 'bench', 'bin'],
    ['tree', 'lamp', 'bikes', 'bench', 'notice', 'bin', 'bush', 'tree'],
    ['hedge', 'hedge', 'lamp', 'bench', 'tree', 'flowers', 'statue', 'bench'],
    ['bush', 'lamp', 'solar', 'solar', 'tree', 'vent', 'bin', 'weather'],
    ['cone', 'cone', 'bench', 'hoop', 'lamp', 'cone', 'bottle', 'bush'],
    ['flag', 'lamp', 'poster', 'bench', 'tree', 'flowers', 'poster', 'bin'],
    ['ac', 'vent', 'antenna', 'tank', 'ac', 'vent', 'pipe', 'ac'],
  ];
  const near = [];
  for (let x = -100; x < worldW; x += 24 + Math.floor(R() * 38)) {
    const zone = Math.max(0, Math.min(6, Math.floor(x / PX_PER_M / ZONE_M)));
    const kinds = KINDS[zone];
    near.push({ x, kind: kinds[Math.floor(R() * kinds.length)], v: R(), zone });
  }
  // Fixed landmarks on the path (metres).
  const LANDMARKS = [
    { m: 40, kind: 'bus' }, { m: 2480, kind: 'fountain' }, { m: 3600, kind: 'greenhouse' },
    { m: 4250, kind: 'goal' }, { m: 4780, kind: 'goal' }, { m: 6560, kind: 'telescope' },
  ];
  const fireflies = Array.from({ length: 14 }, () => ({ x: R() * 400, y: R() * 30, p: R() * 6.28, s: 0.3 + R() * 0.5 }));

  // ---------- mascot ----------
  // Placeholder pixel student (16x16). Swap it by putting a cut-out image at /rare/mascot.png.
  const KID = [
    '......3333......',
    '.....333333.....',
    '.....3aaaa3.....',
    '.....aeaaea.....',
    '.....aaaaaa.....',
    '......aaaa......',
    '....wwwwwwww....',
    '...awwwbwwwwa...',
    '...awwwbwwwwa.rr',
    '....wwwwwwww..rr',
    '....wwwwwwww..rr',
    '.....nnnnnn.....',
    '.....nn..nn.....',
    '.....aa..aa.....',
    '.....aa..aa.....',
    '....kkk..kkk....',
  ];
  const KID_PAL = { 3: '#2B1B12', a: '#C98A5E', e: '#1B1B2F', w: '#A9C6EE', b: '#E8641E', n: '#1F2A5C', r: '#E8641E', k: '#111111' };
  const GOLD_PAL = { 3: '#7A5200', a: '#FFD54F', e: '#3A2600', w: '#FFF3B0', b: '#FFB300', n: '#E09A00', r: '#FFE082', k: '#8A6000' };
  let customMascot = null;
  const img = new Image();
  img.onload = () => {
    // A ready-made pixel sprite (48 px tall or less) is used as is; a bigger photo is shrunk to sprite size.
    if (img.height <= 48) {
      customMascot = img;
      return;
    }
    const h = 22, w = Math.max(8, Math.round((img.width / img.height) * h));
    const off = document.createElement('canvas');
    off.width = w;
    off.height = h;
    const o = off.getContext('2d');
    o.imageSmoothingEnabled = true;
    o.drawImage(img, 0, 0, w, h);
    customMascot = off;
  };
  img.src = '/rare/mascot.png';

  function drawKid(x, y, angle, pal, squash) {
    if (customMascot) {
      const turn = Math.round(angle / (Math.PI / 2)) * (Math.PI / 2); // 90 degree steps keep pixels square
      ctx.save();
      ctx.translate(Math.round(x), Math.round(y - customMascot.height / 2));
      ctx.rotate(turn);
      ctx.drawImage(customMascot, -Math.floor(customMascot.width / 2), -Math.floor(customMascot.height / 2));
      ctx.restore();
      return;
    }
    const turns = ((Math.round(angle / (Math.PI / 2)) % 4) + 4) % 4; // pixel-perfect 90 degree steps
    for (let r = 0; r < 16; r++)
      for (let c = 0; c < 16; c++) {
        const k = KID[r][c];
        if (k === '.') continue;
        let px = c - 8, py = r - 16;
        if (turns) {
          const cx = c - 7.5, cy = r - 7.5;
          const rx = turns === 1 ? -cy : turns === 2 ? -cx : cy;
          const ry = turns === 1 ? cx : turns === 2 ? -cy : -cx;
          px = Math.round(rx - 0.5);
          py = Math.round(ry - 0.5) - 8;
        }
        rect(x + px, y + py + (squash || 0) * (py < -8 ? 1 : 0), 1, 1, pal[k]);
      }
  }

  // ---------- state ----------
  const S = {
    metres: 0, target: 0, from: 0, t0: 0, dur: 0, // travel animation
    mood: 'idle', moodUntil: 0, golden: false,
    camera: 0, sparkles: [], shooting: null, nextShoot: 0,
  };
  function travel(toMetres, ms) {
    S.from = S.metres;
    S.target = Math.max(0, Math.min(MAX_M, toMetres));
    S.t0 = performance.now();
    S.dur = reduced() ? 1 : ms;
  }
  function setMood(mood, ms = 1500) {
    S.mood = mood;
    S.moodUntil = performance.now() + ms;
    if (mood === 'golden') {
      S.golden = true;
      for (let i = 0; i < 40; i++) S.sparkles.push({ a: Math.random() * 6.28, r: 0, v: 0.4 + Math.random() * 0.9, life: 60 + Math.random() * 40 });
    }
  }
  function jump(metres) {
    S.metres = S.target = S.from = metres;
    S.dur = 0;
  }

  function resize() {
    SCALE = Math.max(2, Math.round(innerHeight / 216));
    W = Math.ceil(innerWidth / SCALE);
    H = Math.ceil(innerHeight / SCALE);
    canvas.width = W;
    canvas.height = H;
    GROUND = Math.round(H * 0.74);
    ctx.imageSmoothingEnabled = false;
  }
  addEventListener('resize', resize);
  resize();

  // ---------- per-frame scene context ----------
  const F = { now: 0, dark: 0, light: null, sunX: -99, sunY: 0, sunUp: 0, still: false, emit: [] };
  // Lights to draw after the scenery: [x, y, radius, colour, strength]
  const emit = (x, y, r, c, s = 0.9) => F.dark > 0.25 && F.emit.push([x, y, r, c, s * F.dark]);
  const sunSide = () => (F.sunX < W / 2 ? -1 : 1); // which side of an object the light comes from
  // Soft ground shadow pointing away from the sun.
  function shadow(x, base, w) {
    if (F.sunUp <= 0.05) return;
    const len = Math.round(2 + (1 - F.sunUp) * 10);
    ctx.globalAlpha = 0.2 * F.sunUp;
    rect(sunSide() < 0 ? x : x - len, base, w + len, 2, '#0B1020');
    ctx.globalAlpha = 1;
  }

  // ---------- buildings (mid layer, half speed) ----------
  function building(x, base, w, h, wall, roof, win, kind) {
    x = Math.round(x);
    if (x > W + 4 || x + w < -4) return;
    P(x, base - h, w, h, wall);
    // rim light on the sun side, shade on the other
    if (F.sunUp > 0.1) {
      P(sunSide() < 0 ? x : x + w - 1, base - h, 1, h, lighten(wall, 0.25));
      P(sunSide() < 0 ? x + w - 2 : x, base - h, 2, h, darken(wall, 0.18));
    }
    P(x - 2, base - h - 3, w + 4, 3, roof);
    P(x - 2, base - h, w + 4, 1, darken(roof, 0.3));
    const glass = mix(win, F.light.bot, 0.35);
    for (let wy = base - h + 5; wy < base - 8; wy += 9)
      for (let wx = x + 4; wx < x + w - 6; wx += 8) {
        const id = (wx - x) * 131 + wy * 7 + w * 17;
        // windows switch on one by one as it gets dark, and a few blink on and off
        const on = hash(id) < F.dark * 0.8 && hash(id + Math.floor(F.now / 9000)) > 0.06;
        if (on) {
          rect(wx, wy, 4, 5, hash(id + 3) < 0.3 ? '#BFE3FF' : '#FFD98A');
          emit(wx + 2, wy + 2, 5, '#FFD98A', 0.35);
        } else {
          P(wx, wy, 4, 5, glass);
          P(wx, wy, 1, 2, lighten(glass, 0.35)); // glint
        }
      }
    if (kind === 'door') P(x + w / 2 - 4, base - 10, 8, 10, roof);
  }

  const logo = new Image(); // 120x40 pixel version of the school logo
  logo.src = '/rare/logo.png';

  // Assembly-style banner: navy board, orange border, a pixel icon.
  const ICONS = {
    star: ['..#..', '.###.', '#####', '.###.', '.#.#.'],
    heart: ['.#.#.', '#####', '#####', '.###.', '..#..'],
    trophy: ['#####', '#####', '.###.', '..#..', '.###.'],
  };
  function banner(x, y, icon) {
    x = Math.round(x);
    const sway = F.still ? 0 : Math.round(Math.sin(F.now / 900 + x) * 0.6);
    P(x - 1, y - 1 + sway, 20, 14, '#E8641E'); P(x, y + sway, 18, 12, '#1F2A5C');
    const glyph = icon === 'heart' ? '#E8343B' : '#FFD54F';
    ICONS[icon].forEach((row, r) => [...row].forEach((c, k) => c === '#' && P(x + 6 + k, y + 3 + r + sway, 1, 1, glyph)));
    P(x + 2, y + 12, 1, 6, '#6B6B6B'); P(x + 15, y + 12, 1, 6, '#6B6B6B');
  }

  function drawZoneBuildings(cam, base) {
    const off = -cam * 0.5;
    const z = (m) => m * PX_PER_M * 0.5 + off; // mid layer screen x for a metre mark
    const wall = '#F4EBDD', brick = '#E8641E', roof = '#1F2A5C', win = '#9CC3EE';
    // 0 m: gate arch with flag
    let x = Math.round(z(150));
    P(x, base - 46, 6, 46, brick); P(x + 70, base - 46, 6, 46, brick);
    P(x - 4, base - 54, 84, 8, roof); P(x + 10, base - 52, 56, 4, brick);
    P(x + 30, base - 76, 2, 22, '#6B6B6B');
    const wave = F.still ? 0 : Math.floor(F.now / 260) % 2;
    P(x + 32, base - 76 + wave, 14, 3, '#E8641E'); P(x + 32, base - 73, 10 + wave, 2, '#1F2A5C'); P(x + 32, base - 71 - wave, 6, 2, '#5B8BD6');
    // 600 m: school logo billboard (clear of the menu box on the start screen)
    x = Math.round(z(600));
    if (x > -130 && x < W + 10) {
      P(x + 14, base - 30, 4, 30, '#6B6B6B'); P(x + 106, base - 30, 4, 30, '#6B6B6B');
      P(x, base - 74, 124, 44, roof);
      if (logo.complete && logo.naturalWidth) ctx.drawImage(logo, x + 2, base - 72);
      else rect(x + 2, base - 72, 120, 40, '#FF6600');
      const shade = 1 - (AMB[0] + AMB[1] + AMB[2]) / 3;
      if (shade > 0.02) { ctx.globalAlpha = shade * 0.85; rect(x + 2, base - 72, 120, 40, '#0B1030'); ctx.globalAlpha = 1; }
      // two lamps light the board at night
      P(x + 30, base - 78, 6, 3, '#3A3A48'); P(x + 88, base - 78, 6, 3, '#3A3A48');
      if (F.dark > 0.3) {
        ctx.globalAlpha = 0.3 * F.dark;
        rect(x + 6, base - 72, 112, 40, '#FFE7B0');
        ctx.globalAlpha = 1;
        rect(x + 31, base - 76, 4, 1, '#FFF6D0'); rect(x + 89, base - 76, 4, 1, '#FFF6D0');
      }
    }
    banner(z(420), base - 40, 'star'); banner(z(1180), base - 50, 'heart'); banner(z(1460), base - 44, 'trophy');
    banner(z(5210), base - 38, 'heart'); banner(z(5320), base - 38, 'star');
    // 1000 m: classroom blocks with a clock tower
    for (let i = 0; i < 3; i++) building(z(1050 + i * 280), base, 90, 54 + (i % 2) * 10, i % 2 ? wall : brick, roof, win, 'door');
    x = Math.round(z(1520));
    building(x, base, 22, 84, wall, roof, win, '');
    P(x + 5, base - 78, 12, 12, '#FFFFFF'); P(x + 10, base - 76, 1, 5, '#1B1B2F'); P(x + 10, base - 72, 4, 1, '#1B1B2F');
    // 2000 m: library with columns
    x = Math.round(z(2150));
    building(x, base, 130, 48, wall, roof, win, '');
    for (let i = 0; i < 6; i++) { P(x + 10 + i * 22, base - 30, 4, 30, '#FFFFFF'); P(x + 13 + i * 22, base - 30, 1, 30, '#C9C3B6'); }
    P(x + 40, base - 58, 50, 10, roof); P(x + 52, base - 64, 26, 6, roof);
    // 3000 m: labs with vents and a dome
    x = Math.round(z(3100));
    building(x, base, 110, 60, brick, roof, win, 'door');
    P(x + 20, base - 74, 6, 14, '#8A8A8A'); P(x + 80, base - 70, 6, 10, '#8A8A8A');
    puff(x + 23, base - 76, 1); puff(x + 83, base - 72, 2);
    building(z(3420), base, 80, 44, wall, roof, win, '');
    // 4000 m: bleachers and floodlights
    x = Math.round(z(4100));
    for (let i = 0; i < 4; i++) { P(x + i * 6, base - 8 - i * 6, 120 - i * 12, 6, '#3D6FB6'); P(x + i * 6, base - 8 - i * 6, 120 - i * 12, 1, '#6E97D6'); }
    for (const m of [4500, 4800]) floodlight(Math.round(z(m)), base);
    // 5000 m: auditorium with dome
    x = Math.round(z(5150));
    building(x, base, 140, 44, wall, roof, win, 'door');
    for (let i = 0; i < 18; i++) P(x + 70 - (18 - i) * 2, base - 44 - i, (18 - i) * 4, 1, i < 3 ? lighten(roof, 0.2) : roof);
    // 6000 m: observatory dome and telescope slot
    x = Math.round(z(6250));
    building(x, base, 100, 50, brick, roof, win, '');
    for (let i = 0; i < 22; i++) P(x + 50 - (22 - i) * 1.6, base - 50 - i, (22 - i) * 3.2, 1, i % 6 === 0 ? '#EEF1F6' : '#D8DDE6');
    P(x + 48, base - 72, 4, 14, '#20253A');
    // 7000 m: finish arch
    x = Math.round(z(7000));
    P(x, base - 60, 4, 60, '#FFD54F'); P(x + 60, base - 60, 4, 60, '#FFD54F'); P(x - 4, base - 68, 72, 8, '#FFD54F');
    digits('7000m', x + 18, base - 66, '#3A2600');
    emit(x + 32, base - 64, 22, '#FFE7A0', 0.5);
  }

  function floodlight(x, base) {
    if (x < -40 || x > W + 40) return;
    P(x, base - 80, 3, 80, '#9A9A9A');
    P(x - 6, base - 86, 15, 6, '#5A5A66');
    if (F.dark > 0.25) {
      rect(x - 5, base - 85, 13, 4, '#FFF6C8');
      // beam onto the field
      ctx.globalAlpha = 0.1 * F.dark;
      ctx.fillStyle = '#FFF6C8';
      ctx.beginPath();
      ctx.moveTo(x - 5, base - 81); ctx.lineTo(x + 8, base - 81); ctx.lineTo(x + 40, base); ctx.lineTo(x - 36, base);
      ctx.fill();
      ctx.globalAlpha = 1;
      emit(x + 1, base - 83, 16, '#FFF6C8', 0.7);
    }
  }
  // Rising steam from a vent: a few pixels drifting up and fading.
  function puff(x, y, seed) {
    if (F.still) return;
    for (let i = 0; i < 4; i++) {
      const t = ((F.now / 1800 + i / 4 + seed * 0.37) % 1);
      ctx.globalAlpha = 0.5 * (1 - t);
      P(x + Math.round(Math.sin(t * 6 + i) * 2), y - t * 18, 2, 2, '#E8ECF2');
    }
    ctx.globalAlpha = 1;
  }

  // ---------- ground: each zone has its own surface ----------
  const SURF = [
    { grass: '#5BA34B', path: '#D9B98A', seam: '#C7A473', low: '#4C9140', tile: 12 },
    { grass: '#5BA34B', path: '#BDB8AC', seam: '#A39E92', low: '#4C9140', tile: 8 },
    { grass: '#4F9A47', path: '#D4C6AA', seam: '#B8A98C', low: '#478C3E', tile: 10, checker: true },
    { grass: '#5BA34B', path: '#AEB6BB', seam: '#949CA2', low: '#4C9140', tile: 16 },
    { grass: '#67B550', path: '#C8553D', seam: '#FFFFFF', low: '#4FA046', tile: 0, track: true },
    { grass: '#5BA34B', path: '#B5654A', seam: '#96503A', low: '#4C9140', tile: 6 },
    { grass: '#9A9AA6', path: '#7D7D8C', seam: '#6A6A78', low: '#686876', tile: 20, roof: true },
  ];
  function drawGround(cam, base) {
    for (let zi = 0; zi < 7; zi++) {
      const s = SURF[zi];
      const x0 = zi === 0 ? -10 : Math.round(zi * ZONE_M * PX_PER_M - cam);
      const x1 = zi === 6 ? W + 10 : Math.round((zi + 1) * ZONE_M * PX_PER_M - cam);
      if (x1 < 0 || x0 > W) continue;
      const w = x1 - x0;
      P(x0, base, w, 6, s.grass);
      P(x0, base, w, 1, lighten(s.grass, 0.18));
      P(x0, base + 6, w, 10, s.path);
      P(x0, base + 6, w, 1, darken(s.path, 0.25));
      if (s.track) {
        P(x0, base + 9, w, 1, s.seam); P(x0, base + 13, w, 1, s.seam);
      } else {
        const t = s.tile;
        const startX = x0 + ((((-cam - x0) % t) + t) % t) - t;
        for (let tx = Math.max(startX, x0); tx < x1; tx += t) {
          P(tx, base + 6, 1, 10, s.seam);
          if (s.checker && Math.round((tx + cam) / t) % 2) P(tx + 1, base + 7, t - 1, 4, darken(s.path, 0.06));
        }
        if (!s.roof) P(x0, base + 11, w, 1, s.seam);
      }
      P(x0, base + 16, w, H - base - 16, s.low);
      if (zi === 4) {
        // mowing stripes on the field
        for (let sx = x0 + ((((-cam) % 24) + 24) % 24); sx < x1; sx += 24) P(sx, base + 16, 12, H - base - 16, lighten(s.low, 0.07));
      } else if (!s.roof) {
        // patchy grass: light and dark streaks fixed to the world
        for (let row = base + 18; row < H - 1; row += 3) {
          const b0 = Math.floor((x0 + cam) / 14), b1 = Math.ceil((x1 + cam) / 14);
          for (let bk = b0; bk <= b1; bk++) {
            const hv = hash(bk * 131 + row * 7 + zi * 3);
            if (hv > 0.42) continue;
            const sx = Math.max(x0, Math.round(bk * 14 - cam)), len = Math.min(x1 - sx, 6 + Math.floor(hash(bk + row) * 20));
            if (len > 0) P(sx, row, len, 2, hv < 0.16 ? lighten(s.low, 0.14) : hv < 0.3 ? darken(s.low, 0.1) : mix(s.low, '#C9D96A', 0.25));
          }
        }
        // little flowers and pebbles in the lower grass
        for (let k = 0; k < w; k += 9) {
          const wx = Math.round(k + x0 + cam);
          const hv = hash(wx * 13 + zi);
          if (hv < 0.18) P(x0 + k, base + 20 + Math.floor(hash(wx) * (H - base - 24)), 1, 1, hv < 0.06 ? '#FFE066' : hv < 0.12 ? '#FF8FB1' : '#E9F2FF');
        }
      }
      // swaying grass tufts on the top edge
      if (!s.roof)
        for (let k = 0; k < w; k += 5) {
          const wx = Math.round(k + x0 + cam);
          if (hash(wx * 7) > 0.55) continue;
          const sway = F.still ? 0 : Math.sin(F.now / 700 + wx * 0.3) > 0.55 ? 1 : 0;
          P(x0 + k + sway, base - 1, 1, 1, darken(s.grass, 0.15)); P(x0 + k, base - 2 + (hash(wx) > 0.5 ? 0 : 1), 1, 1, s.grass);
        }
      else P(x0, base - 3, w, 3, '#B4B4C0'); // rooftop parapet
      if (zi > 0) P(x0, base, 2, 16, darken(s.path, 0.35)); // kerb where the surface changes
    }
  }

  // ---------- near props ----------
  function drawTree(x, base, v) {
    const kind = v < 0.22 ? 0 : v < 0.4 ? 1 : v < 0.78 ? 2 : 3, variant = Math.floor(v * 97) % 3;
    const sway = F.still ? 0 : Math.round(Math.sin(F.now / 1300 + v * 20) * 0.7);
    shadow(x - 6, base, 28);
    P(x + 6, base - 20, 4, 20, '#6B4423'); P(sunSide() < 0 ? x + 6 : x + 9, base - 20, 1, 20, '#8A5E36');
    P(x + 4, base - 2, 8, 2, '#5A3A1E'); // roots
    ctx.drawImage(canopy(kind, variant), x - 7 + sway, base - 44);
    if (kind === 1 && !F.still) {
      // blossom petals drifting from the tree
      for (let i = 0; i < 3; i++) {
        const t = (F.now / 4000 + v * 3 + i / 3) % 1;
        P(x + 2 + i * 6 + Math.sin(t * 9) * 3, base - 26 + t * 26, 1, 1, '#FFC4DD');
      }
    }
  }
  function lamp(px, base) {
    P(px, base - 22, 2, 26, '#5B5B6B'); P(px - 2, base - 24, 6, 3, '#5B5B6B');
    if (F.dark > 0.3) {
      rect(px - 1, base - 21, 4, 2, '#FFF2A8');
      emit(px + 1, base - 18, 14, '#FFE9A0', 0.75);
      // moths circling the lamp
      if (!F.still) for (let i = 0; i < 2; i++) rect(px + 1 + Math.round(Math.cos(F.now / 300 + i * 3) * 4), base - 22 + Math.round(Math.sin(F.now / 210 + i) * 3), 1, 1, '#FFF8D8');
    } else P(px - 1, base - 21, 4, 2, '#D8D8D8');
  }
  function drawProp(p, px, base) {
    switch (p.kind) {
      case 'tree': return drawTree(px, base + 4, p.v);
      case 'lamp': return lamp(px, base);
      case 'bench':
        shadow(px, base, 16);
        P(px, base - 4, 16, 2, '#8B5A2B'); P(px, base - 8, 16, 2, '#8B5A2B'); P(px + 1, base - 2, 2, 4, '#3A3A3A'); P(px + 13, base - 2, 2, 4, '#3A3A3A');
        return;
      case 'bush':
      case 'hedge': {
        const c = p.kind === 'hedge' ? '#2F7D3A' : '#3E8E41', w = p.kind === 'hedge' ? 22 : 14;
        shadow(px, base, w);
        P(px, base - 5 - (p.kind === 'hedge' ? 3 : 0), w, 6 + (p.kind === 'hedge' ? 3 : 0), c); P(px + 3, base - 8 - (p.kind === 'hedge' ? 3 : 0), w - 6, 3, c);
        P(px + 2, base - 7 - (p.kind === 'hedge' ? 3 : 0), 4, 1, lighten(c, 0.2));
        return;
      }
      case 'flowers':
        for (let i = 0; i < 5; i++) {
          const sway = F.still ? 0 : Math.sin(F.now / 600 + i + p.v * 9) > 0.6 ? 1 : 0;
          P(px + i * 3, base - 3, 1, 4, '#3E8E41');
          P(px + i * 3 - 1 + sway, base - 5, 3, 2, ['#FF6F91', '#FFD54F', '#FFFFFF', '#B388FF', '#FF8A65'][(i + Math.floor(p.v * 5)) % 5]);
        }
        return;
      case 'bikes':
        for (let i = 0; i < 2; i++) {
          const bx = px + i * 14, c = i ? '#C0392B' : '#2E4A8C';
          P(bx, base - 4, 4, 4, '#222'); P(bx + 9, base - 4, 4, 4, '#222'); P(bx + 2, base - 6, 9, 1, c); P(bx + 6, base - 9, 1, 4, c); P(bx + 5, base - 9, 3, 1, '#222');
        }
        return;
      case 'notice':
        P(px + 2, base - 6, 2, 8, '#5B4636'); P(px + 18, base - 6, 2, 8, '#5B4636');
        P(px, base - 20, 22, 14, '#8B5A2B'); P(px + 1, base - 19, 20, 12, '#D8C7A0');
        P(px + 3, base - 17, 6, 5, '#FFFFFF'); P(px + 11, base - 16, 7, 6, '#FFE7A3'); P(px + 5, base - 11, 5, 3, '#A9D8F0');
        return;
      case 'statue':
        shadow(px, base, 12);
        P(px, base - 8, 12, 8, '#B8B2A6'); P(px + 3, base - 20, 6, 12, '#CFC9BD'); P(px + 4, base - 24, 4, 4, '#CFC9BD');
        P(sunSide() < 0 ? px + 3 : px + 8, base - 20, 1, 12, lighten('#CFC9BD', 0.3));
        return;
      case 'solar':
        P(px + 6, base - 6, 2, 8, '#6B6B6B');
        P(px, base - 12, 16, 6, '#1E3A6E');
        for (let i = 1; i < 4; i++) P(px + i * 4, base - 12, 1, 6, '#3C5C99');
        if (F.sunUp > 0.3) rect(px + 2 + Math.round(F.sunX / W * 10), base - 11, 2, 1, '#DDEBFF'); // glint follows the sun
        return;
      case 'vent':
        P(px, base - 8, 8, 8, '#8A8A96'); P(px + 1, base - 7, 6, 1, '#6C6C78'); P(px + 1, base - 4, 6, 1, '#6C6C78');
        puff(px + 3, base - 10, p.v * 10);
        return;
      case 'weather': {
        P(px + 4, base - 26, 1, 28, '#7A7A86');
        const spin = F.still ? 0 : Math.floor(F.now / 120) % 4;
        const arms = [[-3, 0], [0, -3], [3, 0], [0, 3]];
        for (let i = 0; i < 2; i++) { const [ax, ay] = arms[(spin + i * 2) % 4]; P(px + 4 + ax, base - 27 + ay, 2, 1, '#E8E2D0'); }
        P(px + 1, base - 14, 7, 5, '#FFFFFF');
        return;
      }
      case 'cone':
        P(px + 1, base - 5, 4, 1, '#FF7A1A'); P(px + 2, base - 7, 2, 2, '#FF7A1A'); P(px + 1, base - 4, 4, 1, '#FFFFFF'); P(px, base - 3, 6, 3, '#FF7A1A');
        return;
      case 'bottle':
        P(px, base - 6, 3, 6, '#2E8FD8'); P(px + 1, base - 7, 1, 1, '#FFFFFF');
        return;
      case 'hoop':
        P(px + 10, base - 34, 2, 36, '#6B6B6B'); P(px, base - 40, 14, 9, '#FFFFFF'); P(px + 3, base - 37, 6, 4, '#E8641E');
        P(px + 2, base - 31, 8, 1, '#E8641E'); P(px + 3, base - 30, 6, 3, '#E8E8E8');
        return;
      case 'flag': {
        P(px, base - 40, 2, 42, '#9A9AA6');
        const w = F.still ? 0 : Math.floor(F.now / 220 + p.v * 4) % 3;
        P(px + 2, base - 40, 16, 4, '#E8641E'); P(px + 2, base - 36, 16 - w, 4, '#FFFFFF'); P(px + 2, base - 32, 14 + w, 4, '#1F2A5C');
        return;
      }
      case 'poster':
        P(px + 2, base - 6, 2, 8, '#444'); P(px + 14, base - 6, 2, 8, '#444');
        P(px, base - 24, 18, 18, '#1F2A5C'); P(px + 2, base - 22, 14, 6, '#FFD54F'); P(px + 2, base - 14, 14, 2, '#FFFFFF'); P(px + 2, base - 11, 9, 2, '#FFFFFF');
        if (F.dark > 0.4) emit(px + 9, base - 15, 12, '#FFE7A0', 0.4);
        return;
      case 'ac': {
        P(px, base - 10, 14, 10, '#C9CCD6'); P(px, base - 10, 14, 1, '#E6E8EE');
        const f = F.still ? 0 : Math.floor(F.now / 90) % 2;
        P(px + 3, base - 8, 7, 7, '#7A7E8C'); P(px + 6, base - 8 + f * 3, 1, 4 - f * 3 + 3, '#3E414C'); P(px + 3 + f * 3, base - 5, 7 - f * 3, 1, '#3E414C');
        return;
      }
      case 'antenna':
        P(px + 3, base - 44, 1, 46, '#8A8A96'); P(px, base - 34, 7, 1, '#8A8A96'); P(px + 1, base - 24, 5, 1, '#8A8A96');
        if (Math.floor(F.now / 700) % 2 === 0 || F.still) { rect(px + 2, base - 46, 3, 2, '#FF3B3B'); emit(px + 3, base - 45, 6, '#FF5A5A', 0.6); }
        return;
      case 'tank':
        P(px, base - 26, 4, 26, '#6C6C78'); P(px + 18, base - 26, 4, 26, '#6C6C78'); P(px - 2, base - 40, 26, 14, '#3F6FAE'); P(px - 2, base - 40, 26, 2, '#5E8ACB');
        return;
      case 'pipe':
        P(px, base - 4, 30, 3, '#8A8A96'); P(px + 28, base - 14, 3, 13, '#8A8A96');
        return;
      default:
        P(px, base - 6, 6, 8, '#2F7D5B'); P(px - 1, base - 7, 8, 2, '#235E44');
    }
  }
  function drawLandmark(l, x, base) {
    if (l.kind === 'bus') {
      if (x < -60 || x > W + 10) return;
      shadow(x, base, 54);
      P(x, base - 18, 52, 16, '#F2B705'); P(x + 44, base - 14, 10, 12, '#F2B705'); P(x, base - 18, 52, 1, '#FFD84D');
      for (let i = 0; i < 5; i++) P(x + 3 + i * 8, base - 15, 6, 5, mix('#A9D8F0', F.light.bot, 0.3));
      P(x + 46, base - 12, 6, 5, '#A9D8F0');
      P(x, base - 7, 54, 2, '#1F1F1F');
      P(x + 8, base - 3, 7, 5, '#222'); P(x + 38, base - 3, 7, 5, '#222');
      if (F.dark > 0.4) { rect(x + 52, base - 7, 2, 2, '#FFF6C8'); emit(x + 54, base - 6, 8, '#FFF6C8', 0.5); }
    } else if (l.kind === 'fountain') {
      if (x < -50 || x > W + 50) return;
      P(x - 18, base - 6, 36, 7, '#B8B2A6'); P(x - 16, base - 5, 32, 3, '#5FA8D8'); P(x - 3, base - 18, 6, 12, '#CFC9BD'); P(x - 8, base - 20, 16, 3, '#CFC9BD');
      if (!F.still)
        for (let i = 0; i < 10; i++) {
          const t = (F.now / 900 + i / 10) % 1, side = i % 2 ? 1 : -1;
          P(x + side * t * 12, base - 22 - Math.sin(t * Math.PI) * 10 + t * 16, 1, 1, '#BFE6FF');
        }
      P(x - 1, base - 24, 2, 4, '#BFE6FF');
    } else if (l.kind === 'greenhouse') {
      if (x < -60 || x > W + 10) return;
      P(x, base - 22, 50, 22, '#BFE7D2'); for (let i = 0; i <= 5; i++) P(x + i * 10, base - 22, 1, 22, '#E9F7EF');
      for (let i = 0; i < 12; i++) P(x + 6 + i * 3.5, base - 22 - Math.round(Math.sin((i / 11) * Math.PI) * 8), 4, 1, '#E9F7EF');
      for (let i = 0; i < 6; i++) P(x + 4 + i * 8, base - 8, 4, 6, '#3E8E41');
      if (F.dark > 0.5) emit(x + 25, base - 12, 20, '#C8FFD8', 0.35);
    } else if (l.kind === 'goal') {
      if (x < -30 || x > W + 30) return;
      P(x, base - 22, 2, 24, '#FFFFFF'); P(x + 24, base - 22, 2, 24, '#FFFFFF'); P(x, base - 22, 26, 2, '#FFFFFF');
      for (let i = 2; i < 24; i += 4) P(x + i, base - 20, 1, 20, '#D8DDE6');
    } else if (l.kind === 'telescope') {
      if (x < -30 || x > W + 30) return;
      P(x + 4, base - 10, 2, 12, '#3A3A48'); P(x, base - 2, 10, 2, '#3A3A48');
      P(x - 2, base - 18, 16, 5, '#D8DDE6'); P(x + 12, base - 20, 4, 4, '#20253A');
    }
  }

  // ---------- frame ----------
  function frame(now) {
    if (S.dur > 0) {
      const t = Math.min(1, (now - S.t0) / S.dur);
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      S.metres = lerp(S.from, S.target, ease);
      if (t >= 1) S.dur = 0;
    }
    const moving = S.dur > 0;
    if (S.mood !== 'idle' && now > S.moodUntil) S.mood = 'idle';
    const mascotScreenX = Math.round(W * 0.32);
    S.camera = S.metres * PX_PER_M - mascotScreenX;
    const cam = S.camera;
    const base = GROUND;
    const light = lightAt(Math.round(todAt(now) * 400) / 400);
    setAmbient(light.amb);
    F.now = now; F.light = light; F.dark = light.dark; F.still = reduced(); F.emit.length = 0;

    // sky
    buildSky(light);
    ctx.drawImage(sky, 0, 0);
    // stars and a rare shooting star
    if (light.dark > 0.1) {
      for (const s of stars) {
        const sx = ((s.x - cam * 0.02) % W + W) % W;
        const tw = F.still ? 1 : 0.55 + 0.45 * Math.sin(now / 700 + s.p);
        if (tw * light.dark > 0.4) rect(sx, s.y, 1, 1, s.big ? '#FFFFFF' : '#CFD6FF');
        if (s.big && light.dark > 0.7 && tw > 0.9) { rect(sx - 1, s.y, 3, 1, '#9EA8E8'); rect(sx, s.y - 1, 1, 3, '#9EA8E8'); rect(sx, s.y, 1, 1, '#FFFFFF'); }
      }
      if (!F.still && light.dark > 0.7) {
        if (!S.shooting && now > S.nextShoot) S.shooting = { x: Math.random() * W * 0.7 + W * 0.2, y: 6 + Math.random() * 30, t: now };
        if (S.shooting) {
          const k = (now - S.shooting.t) / 700;
          if (k > 1) { S.shooting = null; S.nextShoot = now + 6000 + Math.random() * 9000; }
          else for (let i = 0; i < 6; i++) { ctx.globalAlpha = (1 - i / 6) * (1 - k); rect(S.shooting.x - k * 40 + i, S.shooting.y + k * 18 - i * 0.45, 1, 1, '#FFFFFF'); }
          ctx.globalAlpha = 1;
        }
      }
    }
    // sun: up from about 6 am to 7 pm, a big disc with a stepped halo
    const t = light.t;
    F.sunUp = 0; F.sunX = W * 0.8;
    if (t > 0.22 && t < 0.8) {
      const p = (t - 0.22) / 0.58;
      const sx = Math.round(W * (0.06 + 0.88 * p)), sy = Math.round(base - Math.sin(p * Math.PI) * base * 0.78 + 4);
      F.sunX = sx; F.sunUp = clamp01(Math.sin(p * Math.PI) * 1.6);
      const warm = 1 - clamp01(Math.sin(p * Math.PI) * 1.4);
      ctx.drawImage(glow(30, mix('#FFF6D8', '#FFB27A', warm), 1), sx - 30, sy - 30);
      ctx.drawImage(disc(11, mix('#FFF8D6', '#FFD08A', warm), mix('#FFFFFF', '#FFE7B8', warm)), sx - 11, sy - 11);
    }
    // moon: up from about 7 pm to 6 am
    const mt = (t + 1 - 0.76) % 1;
    if (mt < 0.5) {
      const p = mt / 0.5;
      const mx = Math.round(W * (0.1 + 0.8 * p)), my = Math.round(base - Math.sin(p * Math.PI) * base * 0.7 + 10);
      ctx.drawImage(glow(28, '#C8D0FF', 0.8), mx - 28, my - 28);
      ctx.drawImage(moonSprite(), mx - 10, my - 10);
      if (F.sunUp === 0) F.sunX = mx; // moonlight casts no shadows but sets the rim light side
    }
    // clouds: thin streaks far back, cumulus sprites in front
    const cp = cloudPalette(light);
    for (const c of streaks) {
      const cx = Math.round((((c.x - cam * 0.04 + (F.still ? 0 : now * c.s * 0.01)) % (W + 120)) + W + 120) % (W + 120) - 100);
      rect(cx, c.y, c.w, 1, cp.body); rect(cx + 6, c.y - 1, c.w - 18, 1, cp.hi); rect(cx + 10, c.y + 1, c.w - 14, 1, cp.shade);
    }
    clouds.forEach((c, i) => {
      const cx = Math.round((((c.x - cam * 0.08 + (F.still ? 0 : now * c.s * 0.01)) % (W + 140)) + W + 140) % (W + 140) - 110);
      ctx.drawImage(cloudSprite(i, cp), cx, Math.round(c.y));
    });
    // birds by day, a blinking plane at night
    if (light.dark < 0.5)
      for (const b of birds) {
        const bx = (((b.x + (F.still ? 0 : now * b.v * 0.02) - cam * 0.1) % (W + 40)) + W + 40) % (W + 40) - 20;
        const flap = !F.still && Math.sin(now / 150 + b.p) > 0 ? 1 : 0;
        rect(bx, b.y + flap, 2, 1, '#2B2B3A'); rect(bx + 3, b.y + flap, 2, 1, '#2B2B3A'); rect(bx + 2, b.y + 1, 1, 1, '#2B2B3A');
      }
    else if (!F.still) {
      const px = ((now * 0.012) % (W + 80)) - 40;
      rect(px, 24, 5, 1, '#1A1E40');
      if (Math.floor(now / 500) % 2) rect(px + 5, 24, 1, 1, '#FF5A5A');
    }
    // background: two mountain ridges with sunlit faces, the city, then a forest edge, each hazier with distance
    const side = sunSide();
    const RIDGES = [
      { k: 0, par: 0.05, y: base - 30, body: '#4A62A6', lit: '#7D95D8', fog: 0.5 },
      { k: 1, par: 0.1, y: base - 22, body: '#3C6E8E', lit: '#64A0B4', fog: 0.36 },
    ];
    for (const r of RIDGES) {
      const body = mix(L(r.body), light.bot, r.fog), litc = mix(L(r.lit), light.bot, r.fog * 0.8), rim = mix(litc, '#FFFFFF', 0.12);
      for (let x = 0; x < W; x++) {
        const wx = x + cam * r.par;
        const h = Math.round(ridge(wx, r.k)), slope = ridge(wx + 1, r.k) - ridge(wx - 1, r.k);
        const top = r.y - h;
        rect(x, top, 1, base - top, body);
        if (F.sunUp > 0.02 || light.dark < 0.8) {
          if (slope * -side > 0.15) rect(x, top, 1, 5 + (Math.floor(wx) % 7), litc); // face turned to the light
          rect(x, top, 1, 1, rim);
        }
      }
    }
    const farCol = mix(L('#9DB4CC'), light.bot, 0.5), farTower = mix(L('#8AA3BE'), light.bot, 0.45);
    for (const f of far) {
      const fx = Math.round(f.x - cam * 0.2);
      if (fx < -20 || fx > W + 20) continue;
      rect(fx, base - 18 - f.h, f.w, f.h + 18, f.tower ? farTower : farCol);
      rect(sunSide() < 0 ? fx : fx + f.w - 1, base - 18 - f.h, 1, f.h + 18, mix(f.tower ? farTower : farCol, '#FFFFFF', 0.12));
      if (light.dark > 0.3) {
        // tiny city lights
        for (let k = 0; k < 3; k++) if (hash(f.seed + k) < light.dark * 0.6) rect(fx + 1 + ((f.seed >> k) % Math.max(1, f.w - 2)), base - 14 - f.h + k * 6, 1, 1, '#FFE08A');
        if (f.tower && Math.floor(now / 900 + f.seed) % 2) rect(fx + Math.floor(f.w / 2), base - 19 - f.h, 1, 1, '#FF5A5A');
      }
    }
    {
      // forest edge: rounded canopy bumps, light tops, dark clumps
      const fb = mix(L('#2C6544'), light.bot, 0.2), fm = mix(L('#3D8550'), light.bot, 0.18), fh = mix(L('#67AE5C'), light.bot, 0.15);
      for (let x = 0; x < W; x++) {
        const wx = x + cam * 0.28;
        const h = Math.round(ridge(wx, 2)), top = base - 8 - h;
        rect(x, top, 1, base - top, fb);
        rect(x, top, 1, 4, fm);
        rect(x, top, 1, 1 + (Math.floor(wx / 3) % 2), fh);
        if (hash(Math.floor(wx) * 17) < 0.18) rect(x, top + 5 + (Math.floor(wx) % 4), 1, 2, darken(fb, 0.2));
      }
    }
    drawZoneBuildings(cam, base);
    drawGround(cam, base);
    // distance posts every 500 m
    for (let m = 0; m <= MAX_M; m += 500) {
      const px = Math.round(m * PX_PER_M - cam);
      if (px < -20 || px > W + 20) continue;
      P(px, base - 10, 2, 16, '#E8E2D0'); P(px - 8, base - 16, 18, 8, '#2F5D62'); P(px - 8, base - 16, 18, 1, '#4A8288');
      digits(String(m), px - 7, base - 15, L('#FFFFFF'));
    }
    for (const l of LANDMARKS) drawLandmark(l, Math.round(l.m * PX_PER_M - cam), base);
    for (const p of near) {
      const px = Math.round(p.x - cam);
      if (px < -40 || px > W + 40) continue;
      drawProp(p, px, base);
    }
    // falling leaves by day, fireflies by night
    if (!F.still && light.dark < 0.6) {
      for (let i = 0; i < 8; i++) {
        const lx = ((i * 97 + now * 0.012) % (W + 40)) - 20;
        const ly = base - 40 + ((now * 0.02 + i * 53) % 46);
        P(lx + Math.sin(now / 400 + i) * 3, ly, 2, 1, i % 3 ? '#E8573A' : '#7FBF4D');
      }
    }
    // lights: additive dithered glows, then fireflies
    if (F.emit.length) {
      ctx.globalCompositeOperation = 'lighter';
      for (const [x, y, r, c, s] of F.emit) {
        ctx.globalAlpha = Math.min(1, s);
        ctx.drawImage(glow(r, darken(c, 0.55), 0.8), Math.round(x - r), Math.round(y - r));
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
    }
    if (light.dark > 0.45 && S.metres < 4000) {
      for (const f of fireflies) {
        const fx = (((f.x - cam * 0.7 + (F.still ? 0 : Math.sin(now / 1400 + f.p) * 8)) % (W + 20)) + W + 20) % (W + 20) - 10;
        const fy = base - 6 - f.y + (F.still ? 0 : Math.sin(now / 900 * f.s + f.p) * 4);
        const on = F.still || Math.sin(now / 500 * f.s + f.p * 3) > -0.2;
        if (on) { rect(fx, fy, 1, 1, '#E8FF8A'); ctx.globalAlpha = 0.35; rect(fx - 1, fy - 1, 3, 3, '#C8FF5A'); ctx.globalAlpha = 1; }
      }
    }

    // mascot
    const bob = !moving && !F.still ? Math.round(Math.sin(now / 300)) : 0;
    let angle = 0;
    if (moving) angle = (S.metres / 40) * Math.PI * 2; // cartwheel while travelling
    if (S.golden && S.mood !== 'golden') S.golden = false; // the golden look lasts only for the celebration
    const pal = S.golden || S.mood === 'golden' ? GOLD_PAL : KID_PAL;
    const my = base + 6 + bob - (S.mood === 'celebrate' && !F.still ? Math.abs(Math.round(Math.sin(now / 90) * 4)) : 0);
    const mh = customMascot ? customMascot.height : 16;
    ctx.globalAlpha = 0.22 + 0.1 * F.sunUp;
    rect(mascotScreenX - 7, base + 6, 14, 2, '#0B1020'); // contact shadow
    ctx.globalAlpha = 1;
    if (S.mood === 'golden' || S.golden) {
      ctx.globalAlpha = 0.25 + 0.15 * Math.sin(now / 200);
      rect(mascotScreenX - 14, my - mh - 4, 28, mh + 4, '#FFD54F');
      ctx.globalAlpha = 1;
    }
    drawKid(mascotScreenX, my, angle, pal, S.mood === 'sad' ? 1 : 0);
    for (const s of S.sparkles) {
      s.r += s.v;
      s.life--;
      const sx = mascotScreenX + Math.cos(s.a) * s.r, sy = my - 10 + Math.sin(s.a) * s.r * 0.7;
      rect(sx, sy, 1, 1, s.life % 6 < 3 ? '#FFF3B0' : '#FFD54F');
    }
    S.sparkles = S.sparkles.filter((s) => s.life > 0);

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  window.Scene = {
    travel, setMood, jump, MAX_M, ZONE_M, ZONES,
    get metres() { return S.metres; },
    zoneAt: (m) => ZONES[Math.min(ZONES.length - 1, Math.floor(m / ZONE_M))],
    clearGolden: () => (S.golden = false),
  };
})();
