// Numbered Rare Finds games: node games/rarefinds/make-games.js [--add N]
// games.json is append-only, so game #37 never changes when the bank grows. With no --add it tops the list up to 120.
// Each new game takes seven prompts from seven different categories, preferring the prompts used least so far.
const fs = require('fs');
const path = require('path');

const ROUNDS = 7;
const BANK = path.join(__dirname, 'bank.json');
const OUT = path.join(__dirname, 'games.json');

function makeGames(questions, existing, add, seed) {
  let s = seed >>> 0 || 1;
  const rand = () => ((s = Math.imul(s ^ (s >>> 15), 2246822507) ^ Math.imul(s ^ (s >>> 13), 3266489909)), (s >>>= 0) / 4294967296);
  const ids = new Set(questions.map((q) => q.id));
  const uses = new Map(questions.map((q) => [q.id, 0]));
  for (const g of existing) for (const id of g) if (uses.has(id)) uses.set(id, uses.get(id) + 1);
  const byCat = new Map();
  for (const q of questions) {
    if (!byCat.has(q.category)) byCat.set(q.category, []);
    byCat.get(q.category).push(q.id);
  }
  if (byCat.size < ROUNDS) throw new Error(`need ${ROUNDS} categories, the bank has ${byCat.size}`);
  const seen = new Set(existing.map((g) => [...g].sort().join()));
  const out = [];
  while (out.length < add) {
    // Categories whose prompts are least used go first, so small categories don't repeat every game.
    const catUse = (c) => byCat.get(c).reduce((a, id) => a + uses.get(id), 0) / byCat.get(c).length;
    const cats = [...byCat.keys()].map((c) => [catUse(c) + rand() * 0.9, c]).sort((a, b) => a[0] - b[0]).slice(0, ROUNDS).map((x) => x[1]);
    const game = cats.map((c) => {
      const pool = byCat.get(c);
      const least = Math.min(...pool.map((id) => uses.get(id)));
      const choices = pool.filter((id) => uses.get(id) === least);
      return choices[Math.floor(rand() * choices.length)];
    });
    for (let i = game.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [game[i], game[j]] = [game[j], game[i]];
    }
    const key = [...game].sort().join();
    if (seen.has(key)) continue;
    seen.add(key);
    game.forEach((id) => uses.set(id, uses.get(id) + 1));
    out.push(game);
  }
  for (const g of out) for (const id of g) if (!ids.has(id)) throw new Error(`unknown id ${id}`);
  return out;
}

if (require.main === module) {
  const bank = JSON.parse(fs.readFileSync(BANK, 'utf8'));
  const file = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : { games: [] };
  const i = process.argv.indexOf('--add');
  const add = i > 0 ? Number(process.argv[i + 1]) : Math.max(0, 120 - file.games.length);
  if (!Number.isInteger(add) || add < 0) throw new Error('--add needs a whole number');
  // A game whose prompt was removed from the bank stays listed; the server skips it.
  const fresh = makeGames(bank.questions, file.games, add, file.games.length * 7919 + 20261126);
  file.games.push(...fresh);
  file.updated = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(OUT, JSON.stringify(file, null, 0).replace(/\],\[/g, '],\n['));
  console.log(`added ${fresh.length} games, ${file.games.length} in total -> ${path.relative(process.cwd(), OUT)}`);
}
module.exports = { makeGames };
