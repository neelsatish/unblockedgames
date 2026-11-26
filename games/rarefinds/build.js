// Content build for Rare Finds: question specs -> versioned answer bank with rarity tiers.
// Usage: node games/rarefinds/build.js [--refresh]   (network only for signals not yet cached)
//
// Rarity comes from real familiarity data, cached in content/signals.json with its retrieval date:
//   - English Wikipedia page views over the last 12 full months (popularity with English readers)
//   - number of Wikipedia language editions covering the entity (global notability)
// Each answer is ranked against the other valid answers to the same question, then editorial
// overrides (Try-Hard picks, Legendary picks, manual tiers) are applied on top.

const fs = require('fs');
const path = require('path');
const engine = require('./engine');

const DIR = __dirname;
const CONTENT = path.join(DIR, 'content');
const SIGNALS_FILE = path.join(CONTENT, 'signals.json');
const SPARQL_FILE = path.join(CONTENT, 'sparql-snapshot.json');
const OUT = path.join(DIR, 'bank.json');
const REPORT = path.join(DIR, 'bank-report.txt');
const UA = 'RareFindsContentBuilder/1.0 (trivia game content build script)';
const REFRESH = process.argv.includes('--refresh');
const VIEWS_POOL_LIMIT = 400; // page views are fetched per article, so only for pools this size or smaller

const readJson = (f, d) => (fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : d);
const signals = readJson(SIGNALS_FILE, { retrieved: null, titles: {} });
const sparqlCache = readJson(SPARQL_FILE, { retrieved: null, queries: {} });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getJson(url, tries = 7) {
  let last = '';
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': UA, 'Api-User-Agent': UA, Accept: 'application/json' }, signal: AbortSignal.timeout(90000) });
      if (res.ok) return await res.json(); // await so a dropped body is retried, not thrown
      if (res.status === 404) return null;
      last = `HTTP ${res.status}`;
      const retryAfter = Number(res.headers.get('retry-after')) || 0;
      await sleep(Math.max(retryAfter * 1000, 1500 * 2 ** i));
    } catch (e) {
      last = e.message;
      await sleep(1500 * 2 ** i);
    }
  }
  throw new Error(`${last}: ${url}`);
}
const saveSignals = () => fs.writeFileSync(SIGNALS_FILE, JSON.stringify(signals));

// "Name|alias|alias@Wiki_Title; Next" -> [{ name, aliases, title }]
function parseList(text) {
  return text
    .split(/[;\n]/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((entry) => {
      const [main, title] = entry.split('@').map((s) => s.trim());
      const [name, ...aliases] = main.split('|').map((s) => s.trim()).filter(Boolean);
      return { name, aliases, title: title || name };
    });
}

function dedupe(list, strip) {
  const byName = new Map();
  for (const r of list) {
    const k = strip(engine.normalize(r.name)); // "Kaveri" and "Kaveri River" are one answer to a player
    const prev = byName.get(k);
    if (!prev) byName.set(k, { ...r, aliases: [...r.aliases] });
    else if (r.sitelinks > prev.sitelinks) byName.set(k, { ...r, aliases: [...new Set([...r.aliases, ...prev.aliases])].slice(0, 8) });
    else prev.aliases = [...new Set([...prev.aliases, ...r.aliases])].slice(0, 8);
  }
  return [...byName.values()];
}

async function runSparql(q) {
  const strip = engine.indexQuestion({ answers: [], strip: q.strip }).strip;
  if (!REFRESH && sparqlCache.queries[q.id]) return dedupe(sparqlCache.queries[q.id], strip);
  const url = `https://query.wikidata.org/sparql?format=json&query=${encodeURIComponent(q.sparql)}`;
  const j = await getJson(url);
  const rows = new Map();
  for (const b of j.results.bindings) {
    const qid = b.item.value.split('/').pop();
    const label = b.itemLabel?.value;
    if (!label || /^Q\d+$/.test(label)) continue;
    if (!rows.has(qid)) rows.set(qid, { qid, name: label, aliases: [], title: decodeURIComponent((b.article?.value || '').split('/wiki/').pop() || '').replace(/_/g, ' '), sitelinks: Number(b.sitelinks?.value || 0) });
    if (b.alt?.value) rows.get(qid).aliases.push(b.alt.value);
  }
  // Different entities with the same name (several rivers called "Kali River") are one answer to a player:
  // keep the best-known one and merge the aliases.
  const byName = new Map();
  for (const r of rows.values()) {
    const k = engine.normalize(r.name);
    const prev = byName.get(k);
    if (!prev) byName.set(k, { ...r });
    else {
      const keep = r.sitelinks > prev.sitelinks ? { ...r, aliases: [...r.aliases, ...prev.aliases] } : { ...prev, aliases: [...prev.aliases, ...r.aliases] };
      byName.set(k, keep);
    }
  }
  const list = [...byName.values()].map((r) => ({ ...r, aliases: [...new Set(r.aliases)].slice(0, 6) }));
  sparqlCache.queries[q.id] = list;
  sparqlCache.retrieved = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(SPARQL_FILE, JSON.stringify(sparqlCache));
  return dedupe(list, strip);
}

// Resolve titles -> { qid, sitelinks, canonical, description } via the Wikidata API (follows redirects).
// English Wikipedia: resolves redirects, gives each page's Wikidata id and its daily views for the last 60 days.
async function wikiQuery(batch) {
  const base = `https://en.wikipedia.org/w/api.php?action=query&format=json&redirects=1&prop=pageprops|pageviews&ppprop=wikibase_item|disambiguation&pvipdays=60&titles=${encodeURIComponent(batch.join('|'))}`;
  let out = null, cont = '';
  for (let guard = 0; guard < 20; guard++) {
    const j = await getJson(base + cont);
    if (!out) out = j;
    else for (const [id, p] of Object.entries(j.query?.pages || {})) if (p.pageviews && out.query.pages[id]) out.query.pages[id].pageviews = { ...(out.query.pages[id].pageviews || {}), ...p.pageviews };
    if (!j.continue?.pvipcontinue) break;
    cont = `&pvipcontinue=${encodeURIComponent(j.continue.pvipcontinue)}&continue=${encodeURIComponent(j.continue.continue || '')}`;
    await sleep(200);
  }
  return out;
}

async function fetchEntities(titles) {
  const todo = titles.filter((t) => REFRESH || !signals.titles[t] || signals.titles[t].sitelinks === undefined || (signals.titles[t].sitelinks !== null && signals.titles[t].viewsWindow !== 60));
  for (let i = 0; i < todo.length; i += 50) {
    const batch = todo.slice(i, i + 50);
    // Step 1: English Wikipedia resolves normalisation and redirects, gives each page's Wikidata id and page views.
    const wp = await wikiQuery(batch);
    const step = new Map();
    for (const n of wp.query.normalized || []) step.set(n.from, n.to);
    for (const r of wp.query.redirects || []) step.set(r.from, r.to);
    // A redirect to a list or a disambiguation page says nothing about this answer's own popularity.
    const usable = (p) => p.pageprops?.wikibase_item && p.pageprops.disambiguation === undefined && !/^(List|Lists|Glossary|Outline) of /.test(p.title);
    const pages = new Map(Object.values(wp.query.pages || {}).filter(usable).map((p) => [p.title, p]));
    const resolve = (t) => {
      for (let k = 0; k < 4 && step.has(t); k++) t = step.get(t);
      return t;
    };
    const qidOf = new Map();
    for (const t of batch) {
      const page = pages.get(resolve(t));
      const views = page?.pageviews ? Object.values(page.pageviews).reduce((a, v) => a + (v || 0), 0) : undefined;
      signals.titles[t] = page ? { qid: page.pageprops.wikibase_item, canonical: page.title, views, viewsWindow: 60 } : { sitelinks: null };
      if (page) qidOf.set(t, page.pageprops.wikibase_item);
    }
    // Step 2: Wikidata gives how many Wikipedias cover the entity, plus a short description.
    const ids = [...new Set(qidOf.values())];
    if (ids.length) {
      const wd = await getJson(`https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&props=sitelinks|descriptions&languages=en&ids=${ids.join('|')}`);
      for (const [t, id] of qidOf) {
        const e = wd.entities?.[id];
        signals.titles[t].sitelinks = Object.keys(e?.sitelinks || {}).filter((k) => k.endsWith('wiki') && k !== 'commonswiki' && k !== 'specieswiki').length;
        signals.titles[t].description = e?.descriptions?.en?.value || '';
      }
    }
    process.stdout.write('.');
    saveSignals();
    await sleep(400);
  }
}

// Percentile rank (0..1) of each value within its list; ties share the average rank.
function percentiles(values) {
  const idx = values.map((v, i) => [v, i]).filter(([v]) => v !== null).sort((a, b) => a[0] - b[0]);
  const out = new Array(values.length).fill(null);
  for (let k = 0; k < idx.length; ) {
    let m = k;
    while (m + 1 < idx.length && idx[m + 1][0] === idx[k][0]) m++;
    const p = idx.length === 1 ? 0.5 : (k + m) / 2 / (idx.length - 1);
    for (let z = k; z <= m; z++) out[idx[z][1]] = p;
    k = m + 1;
  }
  return out;
}

function loadSpecs() {
  return fs
    .readdirSync(CONTENT)
    .filter((f) => f.endsWith('.js') && !f.startsWith('_'))
    .sort()
    .flatMap((f) => require(path.join(CONTENT, f)));
}

async function main() {
  const specs = loadSpecs();
  const errors = [];
  const report = [];
  const built = [];

  // 1) Gather answers.
  for (const q of specs) {
    if (q.groups) {
      q._answers = Object.entries(q.groups).flatMap(([tier, text]) => parseList(text).map((a) => ({ ...a, fixedTier: tier })));
    } else q._answers = q.sparql ? await runSparql(q) : parseList(q.answers);
    if (q.extra) {
      const have = new Set(q._answers.map((a) => engine.normalize(a.name)));
      q._answers = q._answers.concat(parseList(q.extra).filter((a) => !have.has(engine.normalize(a.name))).map((a) => ({ ...a, extra: true })));
    }
    if (q.filter) q._answers = q._answers.filter(q.filter);
  }
  // 2) Fetch signals for curated titles (SPARQL rows already carry sitelinks).
  // Curated lists, plus Wikidata pools small enough for page views, go through the batched Wikipedia lookup.
  const curatedTitles = [...new Set(specs.filter((q) => !q.groups).flatMap((q) => q._answers.filter((a) => !q.sparql || q._answers.length <= VIEWS_POOL_LIMIT || a.extra).map((a) => a.title).filter(Boolean)))];
  process.stdout.write(`signals for ${curatedTitles.length} titles `);
  await fetchEntities(curatedTitles);
  for (const q of specs) for (const a of q._answers) if (a.extra) a.sitelinks = signals.titles[a.title]?.sitelinks ?? 0;
  signals.retrieved = signals.retrieved || new Date().toISOString().slice(0, 10);
  fs.writeFileSync(SIGNALS_FILE, JSON.stringify(signals, null, 0));
  fs.writeFileSync(SPARQL_FILE, JSON.stringify(sparqlCache, null, 0));
  console.log('\nsignals cached');

  // 3) Rank and tier every question.
  for (const q of specs) {
    const answers = q._answers;
    const qErr = (m) => errors.push(`[${q.id}] ${m}`);
    if (q.closed && answers.length !== q.closed) qErr(`expected ${q.closed} answers, got ${answers.length}`);
    const seen = new Map();
    for (const a of answers) {
      const n = engine.normalize(a.name);
      if (seen.has(n)) qErr(`duplicate answer "${a.name}"`);
      seen.set(n, a);
    }
    // A page Wikidata calls a disambiguation page tells us nothing about the answer itself.
    const isDisambig = (x) => /disambiguation page/i.test(x?.description || '');
    const sig = answers.map((a) => (q.sparql && answers.length > VIEWS_POOL_LIMIT && !a.extra ? { sitelinks: a.sitelinks } : isDisambig(signals.titles[a.title]) ? { sitelinks: null } : signals.titles[a.title] || {}));
    const missing = new Set();
    const byQid = new Map();
    answers.forEach((a, i) => {
      if (q.groups) return;
      const s = sig[i];
      if (s.qid) {
        if (byQid.has(s.qid)) qErr(`"${a.name}" and "${byQid.get(s.qid)}" are the same Wikipedia entity; make one an alias`);
        byQid.set(s.qid, a.name);
      }
      if (!q.sparql && (s.sitelinks === null || s.sitelinks === undefined)) {
        if (q.missingTier || (q.tiers && q.tiers[a.name])) missing.add(i);
        else qErr(`no Wikipedia match for "${a.name}" (title "${a.title}")`);
      }
    });
    const pv = percentiles(sig.map((s) => (s.views === undefined || s.views === null ? null : Math.log1p(s.views))));
    const ps = percentiles(sig.map((s) => (s.sitelinks ? Math.log1p(s.sitelinks) : s.sitelinks === 0 ? 0 : null)));
    const fam = answers.map((_, i) => {
      if (pv[i] !== null && ps[i] !== null) return 0.5 * pv[i] + 0.5 * ps[i]; // 60-day views are noisy (news, new releases); coverage steadies them
      return pv[i] ?? ps[i] ?? 0.5; // missing data is never treated as proof of obscurity
    });
    // Answers without their own article are ranked only by editorial choice (missingTier), never by guesswork.
    const ranked = answers.map((_, i) => i).filter((i) => !missing.has(i));
    const order = ranked.sort((a, b) => fam[b] - fam[a]);
    const tier = new Array(answers.length);
    // Equal familiarity gets an equal tier: every member of a tie group takes the tier of the group's first rank.
    let groupRank = 1;
    order.forEach((ai, r) => {
      if (r === 0 || fam[ai] !== fam[order[r - 1]]) groupRank = r + 1;
      tier[ai] = engine.baseTier(groupRank, order.length);
    });
    for (const i of missing) tier[i] = q.tiers?.[answers[i].name] || q.missingTier;
    if (q.groups) answers.forEach((a, i) => (tier[i] = a.fixedTier));

    const byName = new Map(answers.map((a, i) => [a.name, i]));
    const need = (name, what) => {
      if (!byName.has(name)) qErr(`${what} "${name}" is not an answer`);
      return byName.get(name);
    };
    for (const [name, t] of Object.entries(q.tiers || {})) {
      const i = need(name, 'tier override');
      if (i !== undefined) tier[i] = t;
    }
    for (const name of q.tryhard || []) {
      const i = need(name, 'try-hard');
      if (i !== undefined) tier[i] = 'tryhard';
    }
    let legends = (q.legendary || []).map((n) => need(n, 'legendary')).filter((i) => i !== undefined);
    if (!legends.length && !tier.includes('legendary')) {
      // Fallback: the most findable of the deep answers.
      const deepest = order.filter((i) => tier[i] === 'deep');
      if (deepest.length) legends = [deepest[0]];
    }
    legends.forEach((i) => (tier[i] = 'legendary'));
    if (!tier.includes('legendary')) qErr('no Legendary answer');
    tier.forEach((t, i) => !engine.TIERS[t] && qErr(`bad tier "${t}" for ${answers[i].name}`));

    const out = answers.map((a, i) => ({
      name: q.display?.[a.name] || a.name,
      aliases: [...new Set([...(a.aliases || []), ...(q.display?.[a.name] ? [a.name] : []), ...((q.aliases || {})[a.name] || [])])],
      tier: tier[i],
      // Wikidata descriptions are shown only when they say something ("Indian state" alone does not).
      // Geography uses hand-written facts only: Wikidata's place descriptions can carry disputed political wording.
      fact: (q.facts || {})[a.name] || (q.category !== 'geography' && (signals.titles[a.title]?.description || '').split(/s+/).length >= 4 ? signals.titles[a.title].description : ''),
      fam: q.groups || missing.has(i) ? null : Math.round(fam[i] * 1000) / 1000,
    }));
    // Alias collisions inside a question become "be more specific" at play time; list them for review.
    const idx = engine.indexQuestion({ answers: out, strip: q.strip });
    out.forEach((a, i) => {
      const m = engine.matchAnswer(idx, a.name);
      if (m.kind !== 'match' || m.index !== i) qErr(`"${a.name}" cannot be scored by typing its own name (${m.kind})`);
    });
    built.push({
      id: q.id, category: q.category, prompt: q.prompt, qualifier: q.qualifier || '', strip: q.strip || [],
      source: q.groups ? 'Curated list, editorial tiers' : q.sparql ? 'Wikidata query, ranked by Wikipedia coverage' : 'Curated list, ranked by Wikipedia popularity', answers: out,
    });
    const counts = engine.TIER_ORDER.map((t) => `${t}:${out.filter((a) => a.tier === t).length}`).join(' ');
    report.push(`\n== ${q.id} (${out.length}) ${counts}\n${q.prompt}`);
    if (!q.groups) {
      report.push('  most familiar: ' + order.slice(0, 12).map((i) => out[i].name).join(', '));
      report.push('  least familiar: ' + order.slice(-10).map((i) => out[i].name).join(', '));
      if (missing.size) report.push(`  no article (${q.missingTier}): ` + [...missing].map((i) => out[i].name).join(', '));
    }
    report.push('  legendary: ' + out.filter((a) => a.tier === 'legendary').map((a) => a.name).join(', '));
    if (idx.ambiguous.size) report.push('  ambiguous aliases: ' + [...idx.ambiguous].join(', '));
    if (!q.groups && !(q.sparql && answers.length > VIEWS_POOL_LIMIT)) {
      const moved = answers.filter((a) => signals.titles[a.title]?.canonical && signals.titles[a.title].canonical.toLowerCase() !== a.title.toLowerCase());
      if (moved.length) report.push('  resolved to a different article: ' + moved.map((a) => `${a.name} -> ${signals.titles[a.title].canonical} (${signals.titles[a.title].description || 'no description'})`).join('; '));
    }
  }

  fs.writeFileSync(REPORT, report.join('\n') + '\n');
  if (errors.length) {
    console.error(`\n${errors.length} content errors:\n` + errors.join('\n'));
    process.exit(1);
  }
  const bank = {
    version: new Date().toISOString().slice(0, 10) + '-' + built.length,
    signalsRetrieved: signals.retrieved,
    questions: built,
  };
  fs.writeFileSync(OUT, JSON.stringify(bank));
  console.log(`bank written: ${built.length} questions, ${built.reduce((s, q) => s + q.answers.length, 0)} answers -> ${path.relative(process.cwd(), OUT)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
