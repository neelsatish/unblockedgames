# Unblocked Arcade

Party games with private room codes. Node + Express + socket.io.

Games:
- **Doodle Dash**: one player draws, everyone races to guess the word in chat.
- **Rare Finds**: coming soon.

## Run locally

```
npm install
npm start
```

Open http://localhost:3000, create a room, and open the invite link in another tab.

`npm test` checks the scoring, hint and guess rules.

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
