# Pop Quiz

A hot-potato party mode built on the Rare Finds question bank. Players sit round a lab bench and pass a fizzing flask. Whoever holds it must name a correct answer that nobody has used for this prompt yet, before a hidden fuse runs out. Holding the flask when it pops costs a heart, and the last player standing wins.

Play it at `/pop/`. Invite links look like `/pop/?room=QXMP`.

The gameplay follows the genre described in `SPEC.md`. The name, the flask, the art, the sounds and the tier names are this project's own. The tiers and the question bank are shared with Rare Finds.

## Files

| File | What it does |
|---|---|
| `engine.js` | The match rules as pure functions: fuse, turns, answers, hearts, elimination. No timers, no sockets. |
| `server.js` | Rooms, quick play and identity on the socket.io namespace `/pop`. It runs one wake-up timer per room. |
| `engine.test.js` | Rule checks driven by a fake clock. |
| `multi.test.js` | Full matches between separate `socket.io-client` connections against the real server code. |
| `../../public/pop/` | The client: `pop.js` (game), `art.js` (pixel art drawn from code), `pop.css`. |

`npm test` runs both test files.

## Rules and defaults

| Thing | Value |
|---|---|
| Hearts | Start with 2, at most 5 |
| Spare heart | Every 600 points. Extra points carry over to the next heart. At the heart cap the meter fills to 600 and waits; the next accepted answer after you lose a heart turns it into a heart. |
| Points | Textbook 10 · Try-Hard 20 · Honours 40 · Rare Find 60 · Deep Lore 80 · Legendary 100 |
| Fuse | One hidden fuse per prompt, random 10–30 s. It keeps burning while the flask moves. |
| Minimum turn | If less than 8 s is left when the flask is passed, the receiver gets 8 s. A fuse that has already run out is never revived. |
| Wrong or repeated answer | Costs nothing except time. The same deadline keeps running. |
| Typos | Suggested ("Did you mean...?"). The player confirms by sending the exact name, which goes through every check again. |
| Repeats | Blocked by canonical answer, so "USA" after "United States" is taken. A new prompt clears the list. |
| Pop | Lose one heart, a 1.5 s pause, then a new prompt with a fresh fuse. The next surviving seat clockwise starts. |
| Category cleared | If every answer is used, nobody loses a heart and a new prompt starts. |
| Emergency pass | 1 per game, only on your turn. Passes the flask without an answer, still before the fuse ends. |
| Prompt choice | Needs at least `max(25, players alive × 8)` answers. A prompt is not repeated in a game until all eligible prompts have been used, and the same category never comes twice in a row when there is a choice. |
| Seats | 2–16 in a hosted room (6 by default). Quick-play tables are 1V1, 3S, 4–6 or 8–10. |
| Disconnects | The fuse never pauses. A dropped player keeps their seat for 30 s, then counts as having left: they are out, and if they held the flask it moves on. |
| Host leaves | Host moves to the next connected player and the game continues. |

Hosts can change lives, heart cap, points per heart (steps of 50 up to 5,000), minimum turn, shortest and longest fuse, seats, emergency passes and visibility. All of it is checked on the server and frozen when a game starts.

## What keeps the fuse hidden

- The deadline, the fuse length and the danger-band edges never leave the server. The client view is built from an allowlist, and both test files scan every payload for fields that look like timing.
- Clients only see a danger word: calm, bubbling, foaming or frantic. The band edges move by several seconds on every fuse, so watching when the flask changes look does not tell you the time left.
- Bubbling sounds play at random gaps that only get shorter by band.

## Fair play

- Answers are checked only on the holder's turn. Text sent out of turn is never validated, so it cannot be used to test answers.
- Every submission carries the prompt instance and turn number. Old or repeated network messages return their original result and are never scored twice.
- Each turn allows at most 40 tries.
- The answer bank stays on the server during a game. The repo is public, though, so anyone can read the bank on GitHub.

## Not built yet

These need a database or a decision, so they were left out on purpose:

- Rated matchmaking, Elo or TrueSkill, match history and lifetime stats. They need persistent storage, and the free Render tier keeps rooms in memory only.
- Accounts and streak-based avatar unlocks. All eight lab buddies are free.
- Spectator limits, a pause option for private rooms, and live typing previews. Only a "typing..." dot is shown.

## Hosting limits

Rooms live in memory, like the rest of the arcade. A Render sleep or redeploy ends every game in progress.
