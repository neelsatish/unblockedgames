# Neel's Unblocked Games

> Unofficial fan-made game. Not affiliated with, endorsed by, or connected to Inventure Academy in any way.

Party games with private room codes. Node + Express + socket.io.

Games:
- **Doodle Dash**: one player draws, everyone races to guess the word in chat.
- **Rare Finds** (`/rare/`): name something few people would think of. Rarer correct answers score more and take you further across a pixel campus that cycles through day and night. Daily run, a library of numbered games, unlimited runs, and friends rooms with codes.

## Rare Finds content

The answer bank lives in `games/rarefinds/` and never goes to the browser during a game:
- `content/*.js`: the questions. Each one is a curated answer list, a Wikidata query, or (for things popularity data can't rank) hand-set tiers.
- `build.js`: turns the questions into `bank.json`. Rarity comes from real data: English Wikipedia page views over the last 60 days plus how many Wikipedias cover each answer, ranked against the other answers to the same question. Editorial picks (Try-Hard, Legendary) are applied on top. Fetched data is cached in `content/signals.json` and `content/sparql-snapshot.json`, so rebuilding is offline and repeatable.
- `bank-report.txt`: the most and least familiar answers per question, for checking the tiers by eye.

- `CONTENT-GUIDE.md`: how to write a question. `node games/rarefinds/check.js content/<file>.js` checks a file offline.
- `games.json`: the numbered games in the Game Library, 7 prompts each from 7 categories. The list is append-only, so game #37 never changes.

After editing a question: `node games/rarefinds/build.js` (add `--refresh` to refetch the data), then `npm test`.

Weekly top-up: add new question files, rebuild, then `npm run rarefinds:games` appends 7 new games that favour the prompts used least so far.

To swap the pixel mascot for your own picture, put a cut-out PNG with a transparent background at `public/rare/mascot.png`.

Because this repo is public, anyone can read the answer bank on GitHub. That is fine for playing with friends, but it is not secret.

## Run locally

```
npm install
npm start
```

Open http://localhost:3000, create a room, and open the invite link in another tab.

`npm test` checks the Doodle Dash and Rare Finds rules.

## Deploy on Render (free)

1. On render.com: **New → Web Service**, then connect this GitHub repo.
2. Settings:
   - Runtime: **Node**
   - Build command: `npm install`
   - Start command: `npm start`
   - Instance type: **Free**
3. Click **Create Web Service**. After the build, your game is at `https://<your-service-name>.onrender.com`.

Notes:
- The free tier sleeps after about 15 minutes with no visitors. The first visit after that takes about 50 seconds to load.
- Rooms are kept in memory, so they disappear when the server sleeps or redeploys.
- A player whose Wi-Fi drops for under 30 seconds keeps their seat and score. Refreshing the page joins as a new player.
- Every push to `main` redeploys automatically.

See [ANALYSIS.md](ANALYSIS.md) for the full game-rules breakdown.
