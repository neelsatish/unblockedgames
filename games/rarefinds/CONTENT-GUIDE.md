# Writing Rare Finds questions

A question asks players to name one thing from a set ("Name a type of pasta"). Rarer correct answers score more.
Each content file in `content/` exports an array of question specs. Files starting with `_` are helpers, not questions.

## The rule that matters most

A player who types a correct answer must never be told it is wrong. So:

- Pick sets that can be listed completely or nearly so: "Name a planet", "Name a Pixar film", "Name a type of pasta".
  Avoid open sets like "Name something red" or "Name a famous person".
- The `qualifier` states the boundary in a few words ("Feature films only, up to 2025", "Any of the 118 named elements").
- When the set is countable, list all of it and set `closed: N` (the build checks the count).
- Add the common alternative names and spellings as aliases: `Aubergine|eggplant|brinjal`.
- Audience: school students in India (Bangalore), ages 11 to 18. Mix Indian and global topics.
- No disputed territories or political wording, no private people, nothing violent, sexual or hateful, no religion
  questions beyond mythology. Living public figures only when the set is clear (e.g. "Name an Indian Prime Minister").

## Spec fields

```js
{
  id: 'food-pasta',            // unique, kebab-case, prefixed with the category short name
  category: 'food',            // one of: entertainment, gaming, music, food, geography, history, nature, science, tech, sport, words, school
  prompt: 'Name a type of pasta',
  qualifier: 'Pasta shapes or styles, by their usual name',
  strip: ['pasta'],            // optional: category words a player may add or leave out ("Penne pasta" = "Penne")
  answers: `Spaghetti; Penne; Farfalle|bow tie|bowtie@Farfalle; ...`,   // OR groups (below)
  closed: 118,                 // optional: exact answer count for a complete set
  missingTier: 'deep',         // optional: tier for answers with no Wikipedia article (otherwise that is a build error)
  tryhard: ['Casu marzu'],     // optional: answers that sound obscure but every show-off picks
  legendary: ['Corzetti'],     // one or two genuinely surprising but fair answers
  tiers: { 'Queso fresco': 'rare' }, // optional: hand overrides
  facts: { Corzetti: 'One short sentence shown when someone finds it.' }, // at least for the legendary answers
}
```

### Answer list syntax

`Name|alias|alias@Wikipedia title; Next answer; ...` separated by `;` or new lines.
- The first name is what is shown. Aliases are other accepted spellings.
- `@Title` is the exact English Wikipedia article title, only when it differs from the name
  (e.g. `Mercury@Mercury (planet)`, `Cheddar@Cheddar cheese`). Without it the name is used as the title.

Titles are where most mistakes happen. A short or common name often lands on the wrong article
(`Litti` resolved to a footballer, `Mercury` to the planet, `Java` to the island). Whenever a name could mean
something else, give the exact title: `Litti|litti chokha@Litti chokha`, `Python@Python (programming language)`.
After a build, `bank-report.txt` lists every answer that "resolved to a different article"; check those lines.

### Two ways to tier

1. **`answers`** (preferred for named things that have Wikipedia articles: films, animals, places, people, dishes).
   The build ranks answers by real Wikipedia page views and language coverage. Every answer needs an article
   (or set `missingTier`). Two answers pointing at the same article is an error: make one an alias.
2. **`groups`** (for everyday things with no articles: "something in a school bag", "a chore").
   You set the tiers yourself:
   ```js
   groups: {
     textbook: 'Pen; Pencil; ...',      // the first things everyone says (5 to 15)
     honours: '...',                    // solid answers
     rare: '...',                       // uncommon
     deep: '...',                       // very few people would think of these
     legendary: 'French curve',         // one or two
   }
   ```

Sizes: at least 25 answers per question, ideally 40 to 150. More valid answers is always better.

## Checking

`node games/rarefinds/check.js content/<file>.js` checks syntax, duplicates, ids, categories and that every answer
can be scored by typing its own name. It runs offline. The full build (`node games/rarefinds/build.js`) fetches
Wikipedia data and writes `bank.json`; only run it when no one else is editing content.
