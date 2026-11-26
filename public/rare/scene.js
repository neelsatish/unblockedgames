/* Rare Finds pixel campus: a low-resolution canvas scaled up with crisp pixels.
   The run goes across a school campus from morning at the gate (0 m) to a starry rooftop at 7,000 m. */
(function () {
  const MAX_M = 7000;
  const PX_PER_M = 0.6; // world pixels per metre
  const ZONE_M = 1000;
  const ZONES = ['Front Gate', 'Classroom Block', 'Library Courtyard', 'Science Labs', 'Sports Field', 'Auditorium', 'Rooftop Observatory'];

  const canvas = document.getElementById('scene');
  const ctx = canvas.getContext('2d');
  let W = 384, H = 216, SCALE = 3, GROUND = 160;
  const reduced = () => document.documentElement.classList.contains('reduce-motion');

  // ---------- helpers ----------
  const rect = (x, y, w, h, c) => {
    ctx.fillStyle = c;
    ctx.fillRect(Math.round(x), Math.round(y), w, h);
  };
  const lerp = (a, b, t) => a + (b - a) * t;
  const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  const mix = (a, b, t) => {
    const A = hex(a), B = hex(b);
    return `rgb(${Math.round(lerp(A[0], B[0], t))},${Math.round(lerp(A[1], B[1], t))},${Math.round(lerp(A[2], B[2], t))})`;
  };
  function rng(seed) {
    let s = seed >>> 0;
    return () => ((s = Math.imul(s ^ (s >>> 15), 2246822507) ^ Math.imul(s ^ (s >>> 13), 3266489909)), (s >>>= 0) / 4294967296);
  }

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

  // ---------- time of day by distance ----------
  const SKY = [
    // [at metres, top, bottom]
    [0, '#8FD3F4', '#FFE7C2'],
    [1500, '#6EC3F0', '#D9F1FF'],
    [3000, '#5AA9E6', '#FFF0C9'],
    [4300, '#4E7AC7', '#FFC27A'],
    [5300, '#3A2E73', '#FF7E5F'],
    [6200, '#151A47', '#5A3D7A'],
    [7000, '#070B24', '#1E2357'],
  ];
  function skyAt(m) {
    for (let i = 0; i < SKY.length - 1; i++) {
      const [a, ta, ba] = SKY[i], [b, tb, bb] = SKY[i + 1];
      if (m <= b) {
        const t = (m - a) / (b - a);
        return { top: mix(ta, tb, t), bottom: mix(ba, bb, t), night: Math.max(0, (m - 5000) / 2000) };
      }
    }
    return { top: SKY[SKY.length - 1][1], bottom: SKY[SKY.length - 1][2], night: 1 };
  }

  // ---------- world props (generated once, deterministic) ----------
  const worldW = MAX_M * PX_PER_M + 600;
  const R = rng(20261126);
  const clouds = Array.from({ length: 14 }, () => ({ x: R() * 900, y: 8 + R() * 50, w: 18 + Math.floor(R() * 26), s: 0.04 + R() * 0.05 }));
  const stars = Array.from({ length: 90 }, () => ({ x: Math.floor(R() * 2000), y: Math.floor(R() * 120), p: R() * 6.28 }));
  const birds = Array.from({ length: 5 }, () => ({ x: R() * 400, y: 20 + R() * 40, v: 0.15 + R() * 0.2, p: R() * 6 }));
  const far = [];
  for (let x = 0; x < worldW * 0.25 + 800; x += 6 + Math.floor(R() * 14)) far.push({ x, h: 10 + Math.floor(R() * 34), w: 6 + Math.floor(R() * 10), tower: R() < 0.18 });
  const near = []; // trees, lamps, benches, bins, bikes
  for (let x = -100; x < worldW; x += 22 + Math.floor(R() * 40)) {
    const r = R();
    near.push({ x, kind: r < 0.42 ? 'tree' : r < 0.6 ? 'lamp' : r < 0.74 ? 'bench' : r < 0.84 ? 'bush' : r < 0.92 ? 'bike' : 'bin', v: R() });
  }
  const grass = Array.from({ length: 400 }, () => ({ x: Math.floor(R() * worldW * 1.3), h: 1 + Math.floor(R() * 3) }));

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
  const KID_PAL = { 3: '#2B1B12', a: '#C98A5E', e: '#1B1B2F', w: '#F4F7FB', b: '#2E4A8C', n: '#24305E', r: '#E2483B', k: '#111111' };
  const GOLD_PAL = { 3: '#7A5200', a: '#FFD54F', e: '#3A2600', w: '#FFF3B0', b: '#FFB300', n: '#E09A00', r: '#FFE082', k: '#8A6000' };
  let customMascot = null;
  const img = new Image();
  img.onload = () => {
    // Downscale the photo cut-out to sprite size so it matches the pixel art.
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
      ctx.save();
      ctx.translate(Math.round(x), Math.round(y - customMascot.height / 2));
      ctx.rotate(angle);
      ctx.drawImage(customMascot, -customMascot.width / 2, -customMascot.height / 2);
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
          // rotate around the sprite centre
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
    camera: 0, sparkles: [],
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

  // ---------- draw ----------
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

  function building(x, base, w, h, wall, roof, win, kind, lit) {
    rect(x, base - h, w, h, wall);
    rect(x - 2, base - h - 3, w + 4, 3, roof);
    // windows
    for (let wy = base - h + 5; wy < base - 8; wy += 9)
      for (let wx = x + 4; wx < x + w - 6; wx += 8) rect(wx, wy, 4, 5, lit && (wx * 7 + wy) % 5 < 3 ? '#FFE08A' : win);
    if (kind === 'door') rect(x + w / 2 - 4, base - 10, 8, 10, roof);
  }

  function drawZoneBuildings(cam, base, sky) {
    const night = sky.night;
    const off = -cam * 0.5;
    const z = (m) => m * PX_PER_M * 0.5 + off; // mid layer screen x for a metre mark
    const lit = night > 0.4;
    const wall = mix('#F1E3C6', '#3B3A5A', night * 0.8), brick = mix('#C8643B', '#4A2E3A', night * 0.8);
    const roof = mix('#2F5D62', '#16233A', night * 0.7), win = mix('#7FB7D9', '#20294A', night);
    // 0 m: gate arch with flag
    let x = z(150);
    rect(x, base - 46, 6, 46, brick); rect(x + 70, base - 46, 6, 46, brick);
    rect(x - 4, base - 54, 84, 8, brick); rect(x + 10, base - 52, 56, 4, wall);
    rect(x + 30, base - 76, 2, 22, '#6B6B6B'); rect(x + 32, base - 76, 12, 7, '#FF9933'); rect(x + 32, base - 72, 12, 0, '#FFF');
    // 1000 m: classroom blocks
    for (let i = 0; i < 3; i++) building(z(1050 + i * 280), base, 90, 54 + (i % 2) * 10, i % 2 ? wall : brick, roof, win, 'door', lit);
    // 2000 m: library with columns
    x = z(2150);
    building(x, base, 130, 48, wall, roof, win, '', lit);
    for (let i = 0; i < 6; i++) rect(x + 10 + i * 22, base - 30, 4, 30, mix('#FFFFFF', '#5A5A7A', night));
    rect(x + 40, base - 58, 50, 10, roof);
    // 3000 m: labs with vents
    x = z(3100);
    building(x, base, 110, 60, brick, roof, win, 'door', lit);
    rect(x + 20, base - 74, 6, 14, '#8A8A8A'); rect(x + 80, base - 70, 6, 10, '#8A8A8A');
    building(z(3420), base, 80, 44, wall, roof, win, '', lit);
    // 4000 m: sports field bleachers + floodlights
    x = z(4100);
    for (let i = 0; i < 4; i++) rect(x + i * 6, base - 8 - i * 6, 120 - i * 12, 6, mix('#3D6FB6', '#1F2E52', night));
    rect(z(4500), base - 80, 3, 80, '#9A9A9A'); rect(z(4500) - 6, base - 86, 15, 6, night > 0.2 ? '#FFF6C8' : '#CFCFCF');
    rect(z(4800), base - 80, 3, 80, '#9A9A9A'); rect(z(4800) - 6, base - 86, 15, 6, night > 0.2 ? '#FFF6C8' : '#CFCFCF');
    // 5000 m: auditorium with dome
    x = z(5150);
    building(x, base, 140, 44, wall, roof, win, 'door', lit);
    for (let i = 0; i < 18; i++) rect(x + 70 - (18 - i) * 2, base - 44 - i, (18 - i) * 4, 1, roof);
    // 6000 m: observatory dome + telescope slot
    x = z(6250);
    building(x, base, 100, 50, brick, roof, win, '', lit);
    for (let i = 0; i < 22; i++) rect(x + 50 - (22 - i) * 1.6, base - 50 - i, (22 - i) * 3.2, 1, mix('#D8DDE6', '#7B84A6', night));
    rect(x + 48, base - 72, 4, 14, '#20253A');
    // 7000 m: finish arch
    x = z(7000);
    rect(x, base - 60, 4, 60, '#FFD54F'); rect(x + 60, base - 60, 4, 60, '#FFD54F'); rect(x - 4, base - 68, 72, 8, '#FFD54F');
    digits('7000m', x + 18, base - 66, '#3A2600');
  }

  function drawTree(x, base, v, night) {
    const trunk = mix('#6B4423', '#2A1E1A', night), leaf = mix(v < 0.3 ? '#E8573A' : v < 0.6 ? '#3E8E41' : '#57A84A', '#14301E', night * 0.85);
    const dark = mix('#2F6B33', '#0D1F14', night * 0.85);
    rect(x + 6, base - 18, 4, 18, trunk);
    rect(x - 2, base - 32, 20, 14, leaf); rect(x + 1, base - 36, 14, 4, leaf); rect(x - 4, base - 28, 4, 8, dark); rect(x + 16, base - 28, 4, 8, dark);
    rect(x + 2, base - 22, 12, 3, dark);
  }

  function frame(now) {
    // travel animation
    if (S.dur > 0) {
      const t = Math.min(1, (now - S.t0) / S.dur);
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      S.metres = lerp(S.from, S.target, ease);
      if (t >= 1) S.dur = 0;
    }
    const moving = S.dur > 0;
    if (S.mood !== 'idle' && now > S.moodUntil) S.mood = 'idle';
    const mascotScreenX = Math.round(W * 0.32);
    const worldX = S.metres * PX_PER_M;
    S.camera = worldX - mascotScreenX;
    const cam = S.camera;
    const sky = skyAt(S.metres);
    const base = GROUND;

    // sky bands (stepped like a limited palette)
    const bands = 12;
    for (let i = 0; i < bands; i++) rect(0, Math.floor((i * base) / bands), W, Math.ceil(base / bands) + 1, mixRgb(sky.top, sky.bottom, i / (bands - 1)));
    // stars
    if (sky.night > 0.05)
      for (const s of stars) {
        const sx = ((s.x - cam * 0.02) % W + W) % W;
        const tw = reduced() ? 1 : 0.5 + 0.5 * Math.sin(now / 600 + s.p);
        if (tw * sky.night > 0.35) rect(sx, s.y, 1, 1, '#FFF8E1');
      }
    // sun / moon
    const prog = S.metres / MAX_M;
    if (sky.night < 0.6) {
      const sx = W * (0.15 + prog * 0.9), sy = base * (0.55 - Math.sin(Math.min(1, prog * 1.3) * Math.PI) * 0.4);
      rect(sx - 6, sy - 6, 12, 12, '#FFE066'); rect(sx - 8, sy - 3, 16, 6, '#FFE066'); rect(sx - 3, sy - 8, 6, 16, '#FFE066');
    }
    if (sky.night > 0.3) {
      const mx = W * 0.78, my = base * 0.22;
      rect(mx - 5, my - 5, 10, 10, '#F5F3CE'); rect(mx - 7, my - 2, 14, 4, '#F5F3CE'); rect(mx - 1, my - 3, 3, 3, '#D8D4A6');
    }
    // clouds
    for (const c of clouds) {
      const cx = (((c.x - cam * 0.08 + (reduced() ? 0 : now * c.s * 0.01)) % (W + 60)) + W + 60) % (W + 60) - 40;
      const col = mix('#FFFFFF', '#3A3F6B', sky.night);
      rect(cx, c.y, c.w, 4, col); rect(cx + 4, c.y - 3, c.w - 10, 3, col); rect(cx + 8, c.y - 5, c.w / 3, 2, col);
    }
    // birds (daytime)
    if (sky.night < 0.5)
      for (const b of birds) {
        const bx = (((b.x + (reduced() ? 0 : now * b.v * 0.02) - cam * 0.1) % (W + 40)) + W + 40) % (W + 40) - 20;
        const flap = Math.sin(now / 150 + b.p) > 0 ? 1 : 0;
        rect(bx, b.y + flap, 2, 1, '#2B2B3A'); rect(bx + 3, b.y + flap, 2, 1, '#2B2B3A'); rect(bx + 2, b.y + 1, 1, 1, '#2B2B3A');
      }
    // far skyline (Bangalore-ish towers and hills)
    const farCol = mix('#A9C6DA', '#1A1F45', sky.night), farTower = mix('#93B2C9', '#232A57', sky.night);
    for (const f of far) {
      const fx = f.x - cam * 0.2;
      if (fx < -20 || fx > W + 20) continue;
      rect(fx, base - 18 - f.h, f.w, f.h + 18, f.tower ? farTower : farCol);
      if (f.tower && sky.night > 0.4) rect(fx + 2, base - 14 - f.h, 1, 1, '#FFE08A');
    }
    // mid: campus buildings by zone
    drawZoneBuildings(cam, base, sky);
    // ground
    rect(0, base, W, H - base, mix('#5BA34B', '#1C3A24', sky.night * 0.9));
    rect(0, base + 6, W, 10, mix('#D9B98A', '#4B4360', sky.night * 0.8));
    for (let tx = -((cam % 12) + 12); tx < W; tx += 12) rect(tx, base + 6, 1, 10, mix('#C7A473', '#3B3550', sky.night * 0.8));
    rect(0, base + 16, W, H - base - 16, mix('#4C9140', '#162F1D', sky.night * 0.9));
    // distance posts every 500 m
    for (let m = 0; m <= MAX_M; m += 500) {
      const px = m * PX_PER_M - cam;
      if (px < -20 || px > W + 20) continue;
      rect(px, base - 10, 2, 16, '#E8E2D0'); rect(px - 8, base - 16, 18, 8, '#2F5D62');
      digits(String(m), px - 7, base - 15, '#FFFFFF');
    }
    // near props
    for (const p of near) {
      const px = p.x - cam;
      if (px < -30 || px > W + 30) continue;
      if (p.kind === 'tree') drawTree(px, base + 4, p.v, sky.night);
      else if (p.kind === 'lamp') {
        rect(px, base - 22, 2, 26, '#5B5B6B'); rect(px - 2, base - 24, 6, 3, '#5B5B6B');
        rect(px - 1, base - 21, 4, 2, sky.night > 0.3 ? '#FFF2A8' : '#D8D8D8');
        if (sky.night > 0.3) { ctx.globalAlpha = 0.18 * sky.night; rect(px - 6, base - 19, 14, 20, '#FFF2A8'); ctx.globalAlpha = 1; }
      } else if (p.kind === 'bench') {
        rect(px, base - 4, 16, 2, '#8B5A2B'); rect(px, base - 8, 16, 2, '#8B5A2B'); rect(px + 1, base - 2, 2, 4, '#3A3A3A'); rect(px + 13, base - 2, 2, 4, '#3A3A3A');
      } else if (p.kind === 'bush') {
        const c = mix('#3E8E41', '#123020', sky.night * 0.85);
        rect(px, base - 5, 14, 6, c); rect(px + 3, base - 8, 8, 3, c);
      } else if (p.kind === 'bike') {
        const c = '#2E4A8C';
        rect(px, base - 4, 4, 4, '#222'); rect(px + 9, base - 4, 4, 4, '#222'); rect(px + 2, base - 6, 9, 1, c); rect(px + 6, base - 9, 1, 4, c); rect(px + 5, base - 9, 3, 1, '#222');
      } else {
        rect(px, base - 6, 6, 8, '#2F7D5B'); rect(px - 1, base - 7, 8, 2, '#235E44');
      }
    }
    // school bus parked by the gate
    {
      const bx = 40 * PX_PER_M - cam;
      if (bx > -60 && bx < W + 10) {
        const body = mix('#F2B705', '#6B5520', sky.night * 0.7), win = mix('#A9D8F0', '#2A3557', sky.night);
        rect(bx, base - 18, 52, 16, body); rect(bx + 44, base - 14, 10, 12, body);
        for (let i = 0; i < 5; i++) rect(bx + 3 + i * 8, base - 15, 6, 5, win);
        rect(bx + 46, base - 12, 6, 5, win);
        rect(bx, base - 7, 54, 2, '#1F1F1F');
        rect(bx + 8, base - 3, 7, 5, '#222'); rect(bx + 38, base - 3, 7, 5, '#222');
        rect(bx + 10, base - 1, 3, 1, '#888'); rect(bx + 40, base - 1, 3, 1, '#888');
      }
    }
    // leaves drifting down near trees (daytime)
    if (!reduced() && sky.night < 0.7) {
      for (let i = 0; i < 8; i++) {
        const lx = ((i * 97 + now * 0.012) % (W + 40)) - 20;
        const ly = base - 40 + ((now * 0.02 + i * 53) % 46);
        rect(lx + Math.sin(now / 400 + i) * 3, ly, 2, 1, i % 3 ? '#E8573A' : '#7FBF4D');
      }
    }
    // mascot
    const bob = !moving && !reduced() ? Math.round(Math.sin(now / 300)) : 0;
    let angle = 0;
    if (moving) angle = (S.metres / 40) * Math.PI * 2; // cartwheel while travelling
    const pal = S.golden || S.mood === 'golden' ? GOLD_PAL : KID_PAL;
    const my = base + 6 + bob - (S.mood === 'celebrate' && !reduced() ? Math.abs(Math.round(Math.sin(now / 90) * 4)) : 0);
    if (S.mood === 'golden' || S.golden) {
      ctx.globalAlpha = 0.25 + 0.15 * Math.sin(now / 200);
      rect(mascotScreenX - 12, my - 30, 24, 30, '#FFD54F');
      ctx.globalAlpha = 1;
    }
    drawKid(mascotScreenX, my, angle, pal, S.mood === 'sad' ? 1 : 0);
    // golden sparkles
    for (const s of S.sparkles) {
      s.r += s.v;
      s.life--;
      const sx = mascotScreenX + Math.cos(s.a) * s.r, sy = my - 10 + Math.sin(s.a) * s.r * 0.7;
      rect(sx, sy, 1, 1, s.life % 6 < 3 ? '#FFF3B0' : '#FFD54F');
    }
    S.sparkles = S.sparkles.filter((s) => s.life > 0);

    requestAnimationFrame(frame);
  }
  function mixRgb(a, b, t) {
    const p = (s) => s.match(/\d+/g).map(Number);
    const A = p(a), B = p(b);
    return `rgb(${Math.round(lerp(A[0], B[0], t))},${Math.round(lerp(A[1], B[1], t))},${Math.round(lerp(A[2], B[2], t))})`;
  }
  requestAnimationFrame(frame);

  window.Scene = {
    travel, setMood, jump, MAX_M, ZONE_M, ZONES,
    get metres() { return S.metres; },
    zoneAt: (m) => ZONES[Math.min(ZONES.length - 1, Math.floor(m / ZONE_M))],
    clearGolden: () => (S.golden = false),
  };
})();
