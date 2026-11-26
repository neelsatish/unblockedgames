// Rare Finds rules: answer normalisation, matching, typo suggestions, tiers and scoring.
// Pure functions only; the server and the content build both use this file.

const TIERS = {
  textbook: { key: 'textbook', name: 'Textbook', points: 10, blurb: 'The answer everyone thinks of first.' },
  tryhard: { key: 'tryhard', name: 'Try-Hard', points: 20, blurb: 'Sounds obscure, but everyone trying to be clever picks it.' },
  honours: { key: 'honours', name: 'Honours', points: 40, blurb: 'A solid answer. You are moving past the obvious.' },
  rare: { key: 'rare', name: 'Rare Find', points: 60, blurb: 'Genuinely uncommon. Nice find.' },
  deep: { key: 'deep', name: 'Deep Lore', points: 80, blurb: 'Very few people would think of that.' },
  legendary: { key: 'legendary', name: 'Legendary', points: 100, blurb: 'An extraordinary find.' },
};
const TIER_ORDER = ['textbook', 'tryhard', 'honours', 'rare', 'deep', 'legendary'];
const METRES_PER_POINT = 10;
const ROUNDS = 7;
const ANSWER_MS = 25000;
const PREP_MS = 3000;

// Overall run ranking by total score (max 700).
const RANKS = [
  { min: 0, tier: 'textbook', title: 'Textbook' },
  { min: 151, tier: 'honours', title: 'Honours' },
  { min: 261, tier: 'rare', title: 'Rare Find' },
  { min: 361, tier: 'deep', title: 'Deep Lore' },
  { min: 460, tier: 'legendary', title: 'Legendary' },
];
function rankFor(score) {
  let r = RANKS[0];
  for (const x of RANKS) if (score >= x.min) r = x;
  return { ...r, perfect: score === ROUNDS * 100 };
}

// Normalise for comparison. Keeps + and # so "C", "C++" and "C#" stay distinct.
function normalize(s) {
  return String(s ?? '')
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/['’‘`ʻʼ]/g, '')
    .replace(/[^a-z0-9+#]+/g, ' ')
    .trim()
    .replace(/^the /, '')
    .replace(/\s+/g, ' ');
}

// Damerau-Levenshtein (optimal string alignment) with an early-exit cap.
function editDistance(a, b, cap = 3) {
  if (Math.abs(a.length - b.length) > cap) return cap + 1;
  const prev2 = new Array(b.length + 1).fill(0);
  let prev = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    let rowMin = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      let v = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) v = Math.min(v, prev2[j - 2] + 1);
      cur[j] = v;
      rowMin = Math.min(rowMin, v);
    }
    for (let j = 0; j <= b.length; j++) prev2[j] = prev[j];
    prev = cur;
    if (rowMin > cap) return cap + 1;
  }
  return prev[b.length];
}

function allowedTypos(len) {
  if (len <= 3) return 0;
  if (len <= 6) return 1;
  return 2;
}

// Category words a player may add or leave out ("Emperor" or "Emperor penguin").
function stripper(words) {
  if (!words || !words.length) return (n) => n;
  const esc = (w) => normalize(w).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`(^| )(${words.map(esc).join('|')})s?(?= |$)`, 'g');
  return (n) => n.replace(re, ' ').replace(/\s+/g, ' ').trim() || n;
}

// Build the lookup index for one question from its published answers.
// Full names and aliases are indexed first; a form with the category word stripped only fills
// a slot no full name already uses, so "Red" never blocks an answer literally called "Red".
function indexQuestion(q) {
  const exact = new Map(); // normalized alias -> answer index
  const ambiguous = new Set();
  const strip = stripper(q.strip);
  const collect = (formOf, which) => {
    const m = new Map(); // form -> set of answer indexes
    q.answers.forEach((a, i) => {
      const names = which === 'name' ? [a.name] : which === 'alias' ? a.aliases || [] : [a.name, ...(a.aliases || [])];
      for (const alias of names) {
        const n = formOf(normalize(alias));
        if (!n) continue;
        if (!m.has(n)) m.set(n, new Set());
        m.get(n).add(i);
      }
    });
    return m;
  };
  const place = (forms) => {
    for (const [n, set] of forms) {
      if (exact.has(n) || ambiguous.has(n)) continue; // full names keep their slot
      if (set.size > 1) ambiguous.add(n);
      else exact.set(n, [...set][0]);
    }
  };
  // Priority: an answer's own name, then aliases, then forms with the category word removed.
  place(collect((n) => n, 'name'));
  place(collect((n) => n, 'alias'));
  place(collect((n) => strip(n), 'all'));
  const byLen = new Map(); // length -> [[alias, index]]
  for (const [n, i] of exact) {
    if (!byLen.has(n.length)) byLen.set(n.length, []);
    byLen.get(n.length).push([n, i]);
  }
  return { exact, ambiguous, byLen, strip };
}

// Returns { kind: 'match', index } | { kind: 'suggest', index } | { kind: 'ambiguous' } | { kind: 'none' }.
function matchAnswer(index, raw) {
  const n0 = normalize(raw);
  if (!n0) return { kind: 'none' };
  for (const form of [n0, index.strip(n0)]) {
    if (index.exact.has(form)) return { kind: 'match', index: index.exact.get(form) };
    if (index.ambiguous.has(form)) return { kind: 'ambiguous' };
  }
  const n = index.strip(n0);
  const cap = allowedTypos(n.length);
  if (!cap) return { kind: 'none' };
  let best = cap + 1, bestIdx = -1, tie = false;
  for (let len = n.length - cap; len <= n.length + cap; len++) {
    for (const [alias, i] of index.byLen.get(len) || []) {
      if (allowedTypos(alias.length) === 0) continue; // never fuzz onto very short answers
      const d = editDistance(n, alias, cap);
      if (d < best) {
        best = d;
        bestIdx = i;
        tie = false;
      } else if (d === best && i !== bestIdx) tie = true;
    }
  }
  if (bestIdx < 0 || best > cap || tie) return { kind: 'none' };
  return { kind: 'suggest', index: bestIdx };
}

// Assign base tiers by familiarity rank. `ranked` is sorted most familiar first.
function baseTier(rank, n) {
  const textbook = clamp(Math.round(n * 0.1), n >= 10 ? 2 : 1, 15);
  const honours = clamp(Math.round(n * 0.35), textbook + 1, 60);
  const rare = clamp(Math.round(n * 0.7), honours + 1, 300);
  if (rank <= textbook) return 'textbook';
  if (rank <= honours) return 'honours';
  if (rank <= rare) return 'rare';
  return 'deep';
}
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

function scoreFor(tierKey) {
  const t = TIERS[tierKey];
  return t ? t.points : 0;
}

module.exports = {
  TIERS, TIER_ORDER, RANKS, ROUNDS, ANSWER_MS, PREP_MS, METRES_PER_POINT,
  normalize, editDistance, allowedTypos, indexQuestion, matchAnswer, baseTier, scoreFor, rankFor,
};
