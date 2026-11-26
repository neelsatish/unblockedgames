// Pure game rules, no I/O. Tested by test.js.

const round5 = (n) => Math.round(n / 5) * 5;

function normalize(s) {
  return String(s).trim().toLowerCase().replace(/\s+/g, ' ');
}

// Guesser: 500 for an instant guess, down to 50 at the buzzer.
// shortcut: skribbl.io's real formula is unpublished, this only matches its shape.
function guesserPoints(msLeft, drawTimeMs) {
  const frac = Math.max(0, Math.min(1, msLeft / drawTimeMs));
  return round5(50 + 450 * frac);
}

// Drawer: grows with each correct guess and with how fast they came.
function drawerPoints(guesserPointsList, guesserCount) {
  if (!guesserPointsList.length || guesserCount < 1) return 0;
  const sum = guesserPointsList.reduce((a, b) => a + b, 0);
  return round5(sum / guesserCount);
}

function isLetter(ch) {
  return ch !== ' ' && ch !== '-';
}

// Mask for guessers: letters become "_" unless revealed; spaces/hyphens stay.
// Hidden mode sends no letter count at all.
function mask(word, revealed, hidden) {
  if (hidden) return null;
  return [...word].map((ch, i) => (!isLetter(ch) ? ch : revealed.has(i) ? ch : '_')).join('');
}

function maxHints(word, hints) {
  const letters = [...word].filter(isLetter).length;
  return Math.min(hints, Math.floor(letters / 2));
}

// Times (ms after turn start) at which each hint letter is revealed.
function hintTimes(word, hints, drawTimeMs) {
  const n = maxHints(word, hints);
  return Array.from({ length: n }, (_, i) => Math.round((drawTimeMs * (i + 1)) / (n + 1)));
}

function pickHintIndex(word, revealed, rand = Math.random) {
  const options = [...word].map((ch, i) => i).filter((i) => isLetter(word[i]) && !revealed.has(i));
  return options.length ? options[Math.floor(rand() * options.length)] : -1;
}

function editDistance(a, b) {
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return dp[a.length][b.length];
}

function isClose(guess, word) {
  const g = normalize(guess), w = normalize(word);
  return w.length >= 4 && g !== w && editDistance(g, w) === 1;
}

function pickWords(pool, count, rand = Math.random) {
  const copy = [...pool];
  const out = [];
  while (out.length < count && copy.length) out.push(copy.splice(Math.floor(rand() * copy.length), 1)[0]);
  return out;
}

function parseCustomWords(text) {
  const seen = new Set();
  return String(text || '')
    .split(',')
    .map(normalize)
    .filter((w) => w && w.length <= 30 && !seen.has(w) && seen.add(w));
}

const SETTINGS_LIMITS = {
  maxPlayers: [2, 20, 8],
  drawTime: [15, 240, 80],
  rounds: [2, 10, 3],
  wordCount: [1, 5, 3],
  hints: [0, 5, 2],
};

// Validate settings coming from the host's browser (trust boundary).
function cleanSettings(input = {}, prev = {}) {
  const out = {};
  for (const [key, [min, max, def]] of Object.entries(SETTINGS_LIMITS)) {
    const v = Number(input[key] ?? prev[key] ?? def);
    out[key] = Number.isFinite(v) ? Math.max(min, Math.min(max, Math.round(v))) : def;
  }
  out.hidden = Boolean(input.hidden ?? prev.hidden ?? false);
  out.customWords = input.customWords !== undefined ? parseCustomWords(input.customWords).slice(0, 2000) : prev.customWords || [];
  out.customOnly = Boolean(input.customOnly ?? prev.customOnly ?? false) && out.customWords.length >= 10;
  return out;
}

module.exports = {
  normalize, guesserPoints, drawerPoints, mask, maxHints, hintTimes, pickHintIndex,
  editDistance, isClose, pickWords, parseCustomWords, cleanSettings, SETTINGS_LIMITS,
};
