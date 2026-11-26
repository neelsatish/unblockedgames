// Offline check of question files: node games/rarefinds/check.js content/a.js [content/b.js ...]
// Catches what the full build would reject without touching the network or bank.json.
const fs = require('fs');
const path = require('path');
const e = require('./engine');

const CATEGORIES = ['entertainment', 'gaming', 'music', 'food', 'geography', 'history', 'nature', 'science', 'tech', 'sport', 'words', 'school'];
const parse = (text) =>
  String(text || '').split(/[;\n]/).map((s) => s.trim()).filter(Boolean).map((entry) => {
    const [main, title] = entry.split('@').map((s) => s.trim());
    const [t0, ...late] = (title || '').split('|').map((s) => s.trim()); // aliases written after the title still count
    const [name, ...aliases] = main.split('|').concat(late).map((s) => s.trim()).filter(Boolean);
    return { name, aliases, title: t0 || name };
  });

const dir = path.join(__dirname, 'content');
const allIds = new Map();
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.js') && !f.startsWith('_'))) {
  let specs = [];
  try {
    specs = require(path.join(dir, f));
  } catch (err) {
    console.warn(`(skipping ${f} for the id check: ${err.message.split(String.fromCharCode(10))[0]})`); // another file mid-edit must not block this one
  }
  for (const q of specs) allIds.set(q.id, (allIds.get(q.id) || 0) + 1);
}

const files = process.argv.slice(2);
if (!files.length) throw new Error('usage: node games/rarefinds/check.js content/<file>.js');
let errors = 0, total = 0;
for (const f of files) {
  const specs = require(path.resolve(path.join(__dirname, f.replace(/^games[\\/]rarefinds[\\/]/, ''))));
  for (const q of specs) {
    const err = (m) => (errors++, console.error(`[${q.id}] ${m}`));
    total++;
    if (!/^[a-z]+-[a-z0-9-]+$/.test(q.id || '')) err('id must be kebab-case with a category prefix');
    if (allIds.get(q.id) > 1) err('id used more than once across content files');
    if (!CATEGORIES.includes(q.category)) err(`category must be one of ${CATEGORIES.join(', ')}`);
    if (!q.prompt || !q.qualifier) err('prompt and qualifier are required');
    if (!!q.groups === !!(q.answers || q.sparql)) err('use exactly one of answers or groups');
    const answers = q.groups
      ? Object.entries(q.groups).flatMap(([tier, t]) => {
          if (!e.TIERS[tier]) err(`unknown tier "${tier}"`);
          return parse(t).map((a) => ({ ...a, tier }));
        })
      : parse(q.answers);
    if (q.sparql) continue;
    if (answers.length < (q.closed ? 10 : 25)) err(`only ${answers.length} answers (aim for 25+, or 10+ for a complete closed set)`);
    if (q.closed && answers.length !== q.closed) err(`closed: ${q.closed} but ${answers.length} answers`);
    if (q.groups && !answers.some((a) => a.tier === 'legendary')) err('groups need a legendary answer');
    if (!q.groups && !(q.legendary || []).length) err('set legendary: [one or two answers]');
    const names = new Set(answers.map((a) => a.name));
    for (const n of [...(q.legendary || []), ...(q.tryhard || []), ...Object.keys(q.tiers || {}), ...Object.keys(q.facts || {})])
      if (!names.has(n)) err(`"${n}" is named in legendary/tryhard/tiers/facts but is not an answer`);
    const seen = new Map(), titles = new Map();
    for (const a of answers) {
      const n = e.normalize(a.name);
      if (seen.has(n)) err(`duplicate answer "${a.name}"`);
      seen.set(n, a.name);
      if (!q.groups) {
        if (titles.has(a.title)) err(`"${a.name}" and "${titles.get(a.title)}" share the article "${a.title}"; make one an alias`);
        titles.set(a.title, a.name);
      }
    }
    const idx = e.indexQuestion({ answers, strip: q.strip });
    answers.forEach((a, i) => {
      const m = e.matchAnswer(idx, a.name);
      if (m.kind !== 'match' || m.index !== i) err(`"${a.name}" cannot be scored by typing its own name (${m.kind}); an alias of another answer clashes`);
    });
  }
}
console.log(`${total} questions checked, ${errors} problems`);
process.exit(errors ? 1 : 0);
