// Pop Quiz pixel art: the fizzing flask, the lab-buddy avatars, the lab wall and the pop particles.
// Everything is drawn from code at low resolution and scaled up with crisp pixels. No image files.
(function () {
  const INK = '#14131F';

  // ---------- lab-buddy avatars (12 x 12) ----------
  // o outline, a main, b second, y accent, w white, e eye
  const AV = {
    owl: { name: 'Owl', pal: { a: '#A0714F', b: '#E8C9A0', y: '#FFB347' }, px: [
      '..o......o..', '.oao....oao.', '.oaaooooaao.', 'oaaaaaaaaaao', 'oawwaaaawwao', 'oaweaaaaweao',
      'oawwayyawwao', 'oaaaayyaaaao', 'oabbbbbbbbao', 'oabbbbbbbbao', '.oaabbbbaao.', '..oyo..oyo..'] },
    frog: { name: 'Frog', pal: { a: '#6CC24A', b: '#CDEB8B' }, px: [
      '..ooo..ooo..', '.owwwoowwwo.', '.owewoowewo.', 'oaaaaaaaaaao', 'oaaaaaaaaaao', 'oaoaaaaaaoao',
      'oaaooooooaao', 'oaaaaaaaaaao', '.oabbbbbbao.', '.oabbbbbbao.', 'oaao....oaao', 'ooo......ooo'] },
    robot: { name: 'Robot', pal: { a: '#9AA5B1', b: '#FF6B6B', y: '#FFD54F' }, px: [
      '.....oo.....', '.....yo.....', '..oooooooo..', '.oaaaaaaaao.', '.oawwaawwao.', '.oaweaaweao.',
      '.oaaaaaaaao.', '.oabwbwbwao.', '.oaaaaaaaao.', '..oooooooo..', '..obo..obo..', '..ooo..ooo..'] },
    cat: { name: 'Cat', pal: { a: '#F2A65A', b: '#FFFFFF', y: '#FF8FA3' }, px: [
      '.oo......oo.', '.oao....oao.', '.oaaooooaao.', 'oaaaaaaaaaao', 'oaeaaaaaaeao', 'oaaaaaaaaaao',
      'oaaaayyaaaao', 'obaaaaaaaabo', 'oaaaaaaaaaao', '.oaaaaaaaao.', '..oaao.oaao.', '..ooo...ooo.'] },
    ghost: { name: 'Ghost', pal: { a: '#E9E6FF', y: '#FF8FA3' }, px: [
      '...oooooo...', '..oaaaaaao..', '.oaaaaaaaao.', 'oaaeaaaaeaao', 'oaaeaaaaeaao', 'oaaaaaaaaaao',
      'oaaaayyaaaao', 'oaaaaaaaaaao', 'oaaaaaaaaaao', 'oaaaaaaaaaao', 'oaoaaoaaoaao', 'o.o..o..o..o'] },
    slime: { name: 'Slime', pal: { a: '#7CE38B', b: '#3FA34D' }, px: [
      '............', '.....oo.....', '....oaao....', '...oaawao...', '..oaaaawao..', '.oaaaaaaaao.',
      '.oaeaaaaeao.', 'oaaaaaaaaaao', 'oaaaabbaaaao', 'oaaaaaaaaaao', 'oaaaaaaaaaao', '.oooooooooo.'] },
    rocket: { name: 'Rocket', pal: { a: '#F3F1FF', b: '#F26522', w: '#5CE1E6', y: '#FFD54F' }, px: [
      '.....oo.....', '....oaao....', '...oaaaao...', '...oawwao...', '...owbbwo...', '...oawwao...',
      '...oaaaao...', '..ooaaaaoo..', '.obboaaobbo.', '.obo.oo.obo.', '....oyyo....', '.....yy.....'] },
    axolotl: { name: 'Axolotl', pal: { a: '#FFB3C8', b: '#E36A8C', y: '#FF6F91' }, px: [
      'y..........y', 'yo..oooo..oy', '.yoaaaaaaoy.', 'yoaaaaaaaaoy', '.oaeaaaaeao.', '.oaaaaaaaao.',
      '.oaaabbaaao.', '..oaaaaaao..', '.oaaaaaaaao.', '.oaaaaaaaao.', '..oao..oao..', '..ooo..ooo..'] },
  };
  const AVATAR_KEYS = Object.keys(AV);

  function drawAvatar(canvas, key, opts = {}) {
    const a = AV[key] || AV.owl;
    const s = opts.scale || 4;
    canvas.width = 12 * s;
    canvas.height = 12 * s;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const pal = { o: INK, e: INK, w: '#FFFFFF', ...a.pal };
    a.px.forEach((row, y) => {
      for (let x = 0; x < 12; x++) {
        const c = row[x];
        if (c === '.') continue;
        let col = pal[c] || '#FF00FF';
        if (opts.grey && c !== 'o' && c !== 'e') col = greyOf(col);
        ctx.fillStyle = col;
        ctx.fillRect(x * s, y * s, s, s);
      }
    });
  }
  function greyOf(hex) {
    const n = parseInt(hex.slice(1), 16);
    const g = Math.round(((n >> 16) * 0.3 + ((n >> 8) & 255) * 0.59 + (n & 255) * 0.11) * 0.6 + 30);
    return `rgb(${g},${g},${g + 8})`;
  }

  // ---------- the flask (18 x 22 art pixels, anchored at bottom centre) ----------
  const LIQUID = { sleeping: '#5CE1E6', calm: '#5CE1E6', bubbling: '#7CE38B', foaming: '#FFB347', frantic: '#FF6B4A' };
  const LEVEL = { sleeping: 15, calm: 14, bubbling: 12, foaming: 10, frantic: 8 };
  const BUBBLES = { sleeping: 0, calm: 2, bubbling: 5, foaming: 8, frantic: 12 };
  const SHAKE = { sleeping: 0, calm: 0, bubbling: 0.35, foaming: 1, frantic: 1.8 };

  function lighten(hex, k) {
    const n = parseInt(hex.slice(1), 16);
    const f = (v) => Math.round(v + (255 - v) * k);
    return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`;
  }

  // state: sleeping | calm | bubbling | foaming | frantic. t: seconds. k: art pixel size. swell: extra width (art px).
  function drawFlask(ctx, cx, by, k, state, t, opts = {}) {
    const reduced = !!opts.reduced;
    const sh = reduced ? 0 : SHAKE[state] || 0;
    const ox = Math.round(Math.sin(t * 38) * sh) * k;
    const oy = state === 'frantic' && !reduced ? Math.round(Math.sin(t * 51) * 0.6) * k : 0;
    const swell = (opts.swell || 0) + (state === 'foaming' ? 1 : 0) + (state === 'frantic' ? (reduced ? 1 : 1 + (Math.sin(t * 9) > 0 ? 1 : 0)) : 0);
    const X0 = Math.round(cx - 9 * k) + ox, Y0 = Math.round(by - 22 * k) + oy;
    const P = (x, y, c, w = 1, h = 1) => {
      ctx.fillStyle = c;
      ctx.fillRect(X0 + x * k, Y0 + y * k, w * k, h * k);
    };
    const liquid = LIQUID[state] || LIQUID.calm;
    const level = LEVEL[state] ?? 14;
    const rows = [];
    for (let r = 3; r <= 20; r++) {
      const hw = r <= 8 ? 2 : Math.min(8 + swell, 2 + Math.round((r - 8) * 0.9) + (r > 10 ? swell : 0));
      rows[r] = hw;
    }
    // glass and liquid
    for (let r = 3; r <= 20; r++) {
      const hw = rows[r];
      const L = 9 - hw, R = 9 + hw - 1;
      P(L - 1, r, INK);
      P(R + 1, r, INK);
      const wet = r >= level;
      P(L, r, wet ? liquid : '#BFE3EE', R - L + 1, 1);
      P(L, r, wet ? lighten(liquid, 0.35) : '#FFFFFF'); // glint down the left side
      if (wet && r === level) P(L + 1, r, lighten(liquid, 0.5), R - L - 1, 1); // surface line
    }
    const bottomHw = rows[20];
    P(9 - bottomHw - 1, 21, INK, bottomHw * 2 + 2, 1);
    // rim
    P(6, 2, INK, 6, 1);
    // cork (lifts and wobbles when it is about to go)
    const lift = state === 'frantic' ? (reduced ? 1 : 1 + (Math.sin(t * 23) > 0.2 ? 1 : 0)) : state === 'foaming' ? (Math.sin(t * 7) > 0.6 && !reduced ? 1 : 0) : 0;
    P(7, -lift, '#B5763A', 4, 2);
    P(7, -lift, '#D9A066', 4, 1);
    P(6, -lift, INK);
    P(11, -lift, INK);
    P(7, -1 - lift, INK, 4, 1);
    // foam spilling from under the cork
    if (state === 'foaming' || state === 'frantic') {
      const n = state === 'frantic' ? 6 : 3;
      for (let i = 0; i < n; i++) {
        const fx = 5 + ((i * 5 + Math.floor(t * 6 * (reduced ? 0 : 1))) % 8);
        const fy = 1 + ((i * 3) % 3) - (reduced ? 0 : Math.floor((t * 4 + i) % 2));
        P(fx, fy, '#FFFFFF', 2, 1);
        P(fx, fy + 1, '#E8F6FA', 1, 1);
      }
    }
    // bubbles rising through the liquid
    const nb = BUBBLES[state] || 0;
    for (let i = 0; i < nb; i++) {
      const speed = 3 + (i % 3);
      const span = 20 - level;
      const prog = reduced ? (i * 0.37) % 1 : (t * speed * 0.25 + i * 0.37) % 1;
      const r = 20 - Math.floor(prog * span);
      const hw = rows[r] || 2;
      const bx = 9 - hw + 1 + ((i * 7) % Math.max(1, hw * 2 - 2));
      P(bx, r, lighten(liquid, 0.7));
    }
    // face on the belly
    const ey = 15, ex1 = 6, ex2 = 11;
    if (state === 'sleeping') {
      P(ex1, ey, INK, 2, 1);
      P(ex2, ey, INK, 2, 1);
      P(8, 18, INK, 2, 1);
      if (!reduced) {
        const zt = (t * 0.6) % 1;
        drawZ(P, 14 + Math.round(zt * 2), 4 - Math.round(zt * 4));
      }
    } else if (state === 'calm') {
      P(ex1, ey, INK, 1, 2);
      P(ex2 + 1, ey, INK, 1, 2);
      P(7, 18, INK);
      P(8, 19, INK, 2, 1);
      P(10, 18, INK);
    } else if (state === 'bubbling') {
      P(ex1, ey, INK, 1, 2);
      P(ex2 + 1, ey, INK, 1, 2);
      P(8, 19, INK, 2, 1);
    } else if (state === 'foaming') {
      P(ex1 - 1, ey - 1, '#FFFFFF', 2, 2);
      P(ex2, ey - 1, '#FFFFFF', 2, 2);
      P(ex1, ey, INK);
      P(ex2, ey, INK);
      P(7, 19, INK);
      P(8, 18, INK);
      P(9, 19, INK);
      P(10, 18, INK);
      P(14 + Math.round(Math.sin(t * 3)), 12, '#5CE1E6'); // sweat drop
    } else {
      // frantic: squeezed-shut eyes and an open mouth
      P(ex1 - 1, ey - 1, INK);
      P(ex1, ey, INK);
      P(ex1 - 1, ey + 1, INK);
      P(ex2 + 1, ey - 1, INK);
      P(ex2, ey, INK);
      P(ex2 + 1, ey + 1, INK);
      P(8, 18, INK, 2, 2);
      P(4, 11, '#5CE1E6');
      P(15, 10, '#5CE1E6');
    }
  }
  function drawZ(P, x, y) {
    P(x, y, '#F3F1FF', 3, 1);
    P(x + 1, y + 1, '#F3F1FF');
    P(x, y + 2, '#F3F1FF', 3, 1);
  }

  // ---------- particles (pooled) ----------
  const pool = [];
  const live = [];
  function spawn(p) {
    const o = pool.pop() || {};
    Object.assign(o, { g: 0, size: 1, drag: 0.98 }, p);
    o.max = o.life;
    live.push(o);
  }
  function burst(x, y, k, liquid) {
    for (let i = 0; i < 26; i++) {
      const a = Math.random() * Math.PI * 2, v = 40 + Math.random() * 120;
      spawn({ x, y, vx: Math.cos(a) * v * k * 0.5, vy: Math.sin(a) * v * k * 0.5 - 30 * k, life: 0.5 + Math.random() * 0.5, color: '#FFFFFF', size: k * (1 + Math.floor(Math.random() * 3)), g: 80 * k });
    }
    for (let i = 0; i < 16; i++) {
      const a = -Math.PI / 2 + (Math.random() - 0.5) * 2.4, v = 60 + Math.random() * 100;
      spawn({ x, y, vx: Math.cos(a) * v * k * 0.5, vy: Math.sin(a) * v * k * 0.5, life: 0.7 + Math.random() * 0.4, color: liquid, size: k * (1 + Math.floor(Math.random() * 2)), g: 160 * k });
    }
    spawn({ x, y: y - 20 * k, vx: (Math.random() - 0.5) * 60 * k, vy: -150 * k, life: 1, color: '#B5763A', size: k * 3, g: 260 * k, drag: 1 }); // the cork
    spawn({ x, y: y - 10 * k, vx: 0, vy: 0, life: 0.35, color: '#FFFFFF', size: 0, ring: 6 * k, g: 0 });
  }
  function sparkle(x, y, k, color, n = 10) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, v = 20 + Math.random() * 60;
      spawn({ x, y, vx: Math.cos(a) * v * k * 0.5, vy: Math.sin(a) * v * k * 0.5 - 20 * k, life: 0.6 + Math.random() * 0.4, color, size: k, g: 20 * k });
    }
  }
  function stepParticles(ctx, dt) {
    for (let i = live.length - 1; i >= 0; i--) {
      const p = live[i];
      p.life -= dt;
      if (p.life <= 0) {
        live.splice(i, 1);
        pool.push(p);
        continue;
      }
      if (p.ring) {
        const r = p.ring + (1 - p.life / p.max) * p.ring * 5;
        ctx.globalAlpha = p.life / p.max;
        ctx.fillStyle = p.color;
        const steps = 24;
        for (let s = 0; s < steps; s++) {
          const a = (s / steps) * Math.PI * 2;
          ctx.fillRect(Math.round(p.x + Math.cos(a) * r), Math.round(p.y + Math.sin(a) * r * 0.7), 2, 2);
        }
        ctx.globalAlpha = 1;
        continue;
      }
      p.vy += p.g * dt;
      p.vx *= p.drag;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      ctx.globalAlpha = Math.min(1, (p.life / p.max) * 1.6);
      ctx.fillStyle = p.color;
      ctx.fillRect(Math.round(p.x), Math.round(p.y), p.size, p.size);
    }
    ctx.globalAlpha = 1;
  }

  // ---------- lab wall behind everything ----------
  function drawBackground(canvas) {
    const W = Math.ceil(innerWidth / 3), H = Math.ceil(innerHeight / 3);
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#1E1C34');
    g.addColorStop(1, '#100F1B');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    // wall tiles
    ctx.fillStyle = 'rgba(255,255,255,0.025)';
    for (let y = 0; y < H * 0.7; y += 12) ctx.fillRect(0, y, W, 1);
    for (let y = 0; y < H * 0.7; y += 12) for (let x = (y / 12) % 2 ? 6 : 0; x < W; x += 12) ctx.fillRect(x, y, 1, 12);
    // shelves of glassware
    const colors = ['#5CE1E6', '#7CE38B', '#FFB347', '#A78BFA', '#F472B6', '#FFD54F'];
    let seed = 7;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (const sy of [Math.round(H * 0.16), Math.round(H * 0.36)]) {
      ctx.fillStyle = '#3B3960';
      ctx.fillRect(0, sy, W, 2);
      ctx.fillStyle = '#0B0A14';
      ctx.fillRect(0, sy + 2, W, 1);
      for (let x = 4; x < W - 8; x += 7 + Math.floor(rnd() * 9)) {
        const h = 4 + Math.floor(rnd() * 7), w = 3 + Math.floor(rnd() * 3), c = colors[Math.floor(rnd() * colors.length)];
        ctx.globalAlpha = 0.28;
        ctx.fillStyle = '#BFE3EE';
        ctx.fillRect(x, sy - h, w, h);
        ctx.fillStyle = c;
        ctx.fillRect(x, sy - Math.ceil(h / 2), w, Math.ceil(h / 2));
        ctx.globalAlpha = 1;
      }
    }
    // floor
    ctx.fillStyle = '#0C0B15';
    ctx.fillRect(0, Math.round(H * 0.72), W, H);
    ctx.fillStyle = 'rgba(255,255,255,0.03)';
    for (let x = 0; x < W; x += 16) ctx.fillRect(x, Math.round(H * 0.72), 1, H);
  }

  // A round lab bench seen from above, drawn into a low-resolution canvas.
  function drawBench(ctx, W, H, cx, cy, rx, ry) {
    const ellipse = (rxx, ryy, color, dy = 0) => {
      ctx.fillStyle = color;
      for (let y = -ryy; y <= ryy; y++) {
        const half = Math.round(rxx * Math.sqrt(Math.max(0, 1 - (y * y) / (ryy * ryy))));
        ctx.fillRect(Math.round(cx - half), Math.round(cy + y + dy), half * 2, 1);
      }
    };
    ellipse(rx + 2, ry + 2, '#0A0912', 4); // shadow
    ellipse(rx + 2, ry + 2, INK);
    ellipse(rx, ry, '#4A4766');
    ellipse(rx - 2, ry - 2, '#2A2840');
    ellipse(rx * 0.55, ry * 0.55, '#24223A');
    // props on the bench
    const prop = (x, y, w, h, c) => {
      ctx.fillStyle = INK;
      ctx.fillRect(Math.round(x - 1), Math.round(y - 1), w + 2, h + 2);
      ctx.fillStyle = c;
      ctx.fillRect(Math.round(x), Math.round(y), w, h);
    };
    if (rx < 110) return; // a narrow bench has no room for props beside the prompt
    prop(cx - rx * 0.78, cy - 3, 8, 3, '#9AA5B1'); // test-tube rack
    for (let i = 0; i < 3; i++) prop(cx - rx * 0.78 + 1 + i * 3, cy - 8, 1, 5, ['#A78BFA', '#F472B6', '#5CE1E6'][i]);
    prop(cx + rx * 0.72, cy + 2, 5, 5, '#BFE3EE'); // beaker
    prop(cx + rx * 0.72, cy + 4, 5, 3, '#7CE38B');
  }

  window.PopArt = { AVATARS: AV, AVATAR_KEYS, drawAvatar, drawFlask, LIQUID, burst, sparkle, stepParticles, drawBackground, drawBench, liveParticles: () => live.length };
})();
