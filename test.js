// Self-check for game rules: node test.js
const assert = require('node:assert');
const g = require('./game');
const WORDS = require('./words');

assert.equal(g.guesserPoints(80000, 80000), 500);
assert.equal(g.guesserPoints(0, 80000), 50);
assert.ok(g.guesserPoints(60000, 80000) > g.guesserPoints(20000, 80000), 'faster guess scores more');

assert.equal(g.drawerPoints([], 3), 0, 'nobody guessed: drawer gets 0');
assert.ok(g.drawerPoints([400, 300], 3) > g.drawerPoints([400], 3), 'more guessers = more drawer points');

assert.equal(g.mask('hot dog', new Set(), false), '___ ___');
assert.equal(g.mask('yo-yo', new Set([0]), false), 'y_-__');
assert.equal(g.mask('cat', new Set(), true), null);

assert.equal(g.maxHints('cat', 5), 1);
assert.deepEqual(g.hintTimes('elephant', 2, 90000), [30000, 60000]);
assert.notEqual(g.pickHintIndex('hot dog', new Set()), 3, 'never reveals the space');
assert.equal(g.pickHintIndex('ab', new Set([0, 1])), -1);

assert.ok(g.isClose('elefant', 'elephant') === false, 'distance 2 is not close');
assert.ok(g.isClose('pengin', 'penguin'));
assert.ok(!g.isClose('cot', 'cat'), 'short words never "close"');
assert.ok(!g.isClose('penguin', 'Penguin'), 'exact match is not close');

assert.equal(g.normalize('  Hot   DOG '), 'hot dog');
assert.deepEqual(g.parseCustomWords('a, B ,a,,' + 'x'.repeat(31)), ['a', 'b']);

const s = g.cleanSettings({ drawTime: 9999, rounds: 'x', customWords: 'a,b', customOnly: true });
assert.equal(s.drawTime, 240);
assert.equal(s.rounds, 3);
assert.equal(s.customOnly, false, 'custom only needs 10+ words');

assert.equal(g.pickWords(['a', 'b', 'c'], 3).sort().join(), 'a,b,c');
assert.ok(WORDS.length > 300 && new Set(WORDS).size === WORDS.length, 'word list unique');

console.log('all game tests passed');
