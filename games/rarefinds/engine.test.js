// Self-check for Rare Finds rules: node games/rarefinds/engine.test.js
const assert = require('node:assert');
const e = require('./engine');

// Tier values and the metres rule.
assert.deepEqual(e.TIER_ORDER.map((t) => e.TIERS[t].points), [10, 20, 40, 60, 80, 100]);
assert.equal(e.scoreFor('legendary') * e.ROUNDS, 700, 'seven Legendary answers = 700');
assert.equal(e.scoreFor('legendary') * e.ROUNDS * e.METRES_PER_POINT, 7000);
assert.equal(e.scoreFor('nonsense'), 0);

// Overall ranking bands.
assert.equal(e.rankFor(0).tier, 'textbook');
assert.equal(e.rankFor(150).tier, 'textbook');
assert.equal(e.rankFor(151).tier, 'honours');
assert.equal(e.rankFor(460).tier, 'legendary');
assert.ok(e.rankFor(700).perfect && !e.rankFor(690).perfect);

// Normalisation.
assert.equal(e.normalize('  JAPAN  '), 'japan');
assert.equal(e.normalize('São Tomé and Príncipe'), 'sao tome and principe');
assert.equal(e.normalize('U.S.A.'), 'u s a');
assert.equal(e.normalize("Farfetch'd"), 'farfetchd');
assert.equal(e.normalize('The Gambia'), 'gambia');
assert.notEqual(e.normalize('C++'), e.normalize('C#'));
assert.notEqual(e.normalize('C'), e.normalize('C++'));
assert.equal(e.normalize('Oliver & Company'), 'oliver and company');
assert.equal(e.normalize('<script>alert(1)</script>'), 'script alert 1 script');

// Edit distance (with transpositions).
assert.equal(e.editDistance('madagscar', 'madagascar'), 1);
assert.equal(e.editDistance('ab', 'ba'), 1);
assert.equal(e.editDistance('kitten', 'sitting'), 3);

// Matching on a small question.
const q = {
  strip: ['penguin'],
  answers: [
    { name: 'Emperor penguin', aliases: [] },
    { name: 'Southern rockhopper penguin', aliases: ['rockhopper'] },
    { name: 'Republic of the Congo', aliases: ['Congo'] },
    { name: 'Democratic Republic of the Congo', aliases: ['Congo', 'DRC'] },
    { name: 'Madagascar', aliases: [] },
    { name: 'Mali', aliases: [] },
    { name: 'Malawi', aliases: [] },
    { name: 'Bali', aliases: [] },
    { name: 'C', aliases: [] },
    { name: 'C++', aliases: [] },
  ],
};
const idx = e.indexQuestion(q);
const m = (s) => e.matchAnswer(idx, s);
assert.deepEqual(m('Emperor'), { kind: 'match', index: 0 }, 'category word optional');
assert.deepEqual(m('emperor penguins'), { kind: 'match', index: 0 }, 'plural category word');
assert.deepEqual(m('ROCKHOPPER'), { kind: 'match', index: 1 });
assert.deepEqual(m('congo'), { kind: 'ambiguous' }, 'shared alias is ambiguous');
assert.deepEqual(m('DRC'), { kind: 'match', index: 3 });
assert.deepEqual(m('Madagscar'), { kind: 'suggest', index: 4 }, 'one typo suggests');
assert.deepEqual(m('Mdagascar'), { kind: 'suggest', index: 4 });
assert.deepEqual(m('Mala'), { kind: 'suggest', index: 5 }, 'closest unique answer is suggested');
assert.equal(m('Hali').kind, 'none', 'equally close to Mali and Bali: no guess');
assert.equal(m('Mlai').kind, 'suggest', 'four letters allow one typo (transposition)');
assert.equal(m('D').kind, 'none', 'single letters never fuzzy-match');
assert.deepEqual(m('c++'), { kind: 'match', index: 9 });
assert.deepEqual(m('c'), { kind: 'match', index: 8 });
assert.equal(m('').kind, 'none');
assert.equal(m('x'.repeat(500)).kind, 'none');
assert.equal(m('Madagascar, Mali').kind, 'none', 'two answers in one field are not accepted');

// A stripped category word never blocks an answer whose full name is that word.
const rivers = e.indexQuestion({ strip: ['river'], answers: [{ name: 'Red', aliases: [] }, { name: 'Red River', aliases: [] }, { name: 'Nile River', aliases: [] }, { name: 'Nile Delta River', aliases: ['nile'] }] });
assert.deepEqual(e.matchAnswer(rivers, 'Red'), { kind: 'match', index: 0 });
assert.deepEqual(e.matchAnswer(rivers, 'red river'), { kind: 'match', index: 1 });
assert.deepEqual(e.matchAnswer(rivers, 'Nile'), { kind: 'match', index: 3 }, 'a real alias beats a stripped form');
// Leading quotes or spaces before "the".
assert.equal(e.normalize('"The Beatles"'), 'beatles');
assert.equal(e.normalize('   the Nile'), 'nile');
// Strip words with regex characters are escaped.
assert.doesNotThrow(() => e.indexQuestion({ strip: ['C++', 'language'], answers: [{ name: 'C++', aliases: [] }] }));

// Base tiers scale with pool size and never leave textbook empty.
assert.equal(e.baseTier(1, 5), 'textbook');
assert.equal(e.baseTier(5, 5), 'deep');
const big = Array.from({ length: 10000 }, (_, i) => e.baseTier(i + 1, 10000));
assert.equal(big.filter((t) => t === 'textbook').length, 15);
assert.equal(big.filter((t) => t === 'honours').length, 45);

console.log('rare finds engine tests passed');

// Numbered games: every game is 7 distinct prompts from 7 categories, all present in the bank.
{
  const fs = require('fs');
  const path = require('path');
  const gamesFile = path.join(__dirname, 'games.json');
  if (fs.existsSync(gamesFile)) {
    const bank = require('./bank.json');
    const cat = new Map(bank.questions.map((q) => [q.id, q.category]));
    const { games } = JSON.parse(fs.readFileSync(gamesFile, 'utf8'));
    assert.ok(games.length >= 100, 'at least 100 numbered games');
    games.forEach((g, i) => {
      assert.equal(g.length, e.ROUNDS, `game ${i + 1} has ${e.ROUNDS} prompts`);
      for (const id of g) assert.ok(cat.has(id), `game ${i + 1}: ${id} is in the bank`);
      assert.equal(new Set(g.map((id) => cat.get(id))).size, e.ROUNDS, `game ${i + 1} uses ${e.ROUNDS} categories`);
    });
    const { makeGames } = require('./make-games');
    const more = makeGames(bank.questions, games, 3, 1);
    assert.equal(more.length, 3, 'the weekly top-up can add games');
    console.log(`games.json ok: ${games.length} games`);
  }
}
