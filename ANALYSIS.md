# Draw-and-guess analysis (skribbl.io-style) and Doodle Dash rules

This doc breaks down how skribbl.io plays, then lists the exact rules our own game
(**Doodle Dash**) uses. We copy the *gameplay rules*, which are common to the
whole Pictionary genre. We do **not** copy skribbl.io's name, logo, layout,
colours, avatars, sounds or word list — Doodle Dash has its own look and its own words.

Confidence legend: **[verified]** = confirmed by a protocol reverse-engineering doc or
multiple sources; **[common]** = agreed by several unofficial guides; **[guess]** =
not documented anywhere I could find, so Doodle Dash picks its own value.

## 1. How skribbl.io plays

### Lobby and room settings
| Setting | Range | Default | Confidence |
|---|---|---|---|
| Players | 2–20 | 8 | verified (range), common (default) |
| Language | 28 languages | English | verified |
| Draw time | 15–240 s | 80 s | verified (range), common (default) |
| Rounds | 2–10 | 3 | verified (range), common (default) |
| Word choices shown to drawer | 1–5 | 3 | verified (range), common (default) |
| Hints | 0–5 | 2 | verified (range), guess (default) |
| Word mode | Normal / Hidden / Combination | Normal | verified |
| Custom words | comma-separated, toggle "use custom words only" | off | verified (toggle); min count and max length conflict between sources (4 vs 10 words, 30 chars) |

Private rooms are shared by link; the host changes settings and presses Start.

### Game phases (from the protocol's state list) [verified]
1. Waiting for players / private lobby setup
2. Game starting
3. Round message ("Round 1")
4. Drawer picking a word (choice timer, example value 15 s)
5. Drawing (draw timer)
6. Scoreboard for that drawing (word revealed, points gained this turn)
7. Game results (podium)

Every player draws once per round. The drawer order rotates through the room.

### Turn flow
- Drawer is offered N random words (default 3) and has ~15 s to pick; if they don't, one is chosen for them. [common]
- Guessers see the word as blanks with the letter count (`_ _ _ _ _`); spaces and hyphens are shown. In Hidden mode the count is hidden. [verified]
- Hints reveal single letters at intervals during the turn. The schedule is undocumented. [guess]
- Guessers type in chat. A correct guess is announced as "X guessed the word!" without the word; only the guesser sees the word. [verified]
- A guess one letter off triggers "'xyz' is close!", shown privately. [verified packet, guess on exact rule]
- After guessing, a player's chat is only shown to the drawer and others who have guessed (so nobody can leak the word). [common]
- The turn ends when time runs out or every guesser has guessed. The server also shortens the remaining time after correct guesses; the amount is undocumented. [verified packet, guess on amount]

### Scoring
No official formula exists anywhere I found. Every source agrees on the shape: [common]
- Guessers: faster correct guess = more points. No guess = 0.
- Drawer: more correct guessers = more points. Nobody guesses = 0.

### Drawing tools [verified]
- Brush and fill bucket; eraser via white brush.
- 26 colours, 5 brush sizes (4, 10, 20, 32, 40 px on the logical canvas).
- Undo (removes last stroke) and clear.

### Social / moderation [verified]
- Votekick (threshold undocumented), host kick, host ban.
- Like / dislike the current drawing, shown to everyone.
- Mute (client-side hide), report, spam warning.

## 2. Doodle Dash rules (what we actually built)

| Thing | Doodle Dash value |
|---|---|
| Room code | 5 letters, also shareable as `?room=CODE` link |
| Settings | Players 2–20 (8), draw time 15–240 s (80), rounds 2–10 (3), word choices 1–5 (3), hints 0–5 (2), Normal/Hidden word mode, custom words (comma-separated, max 30 chars each, "custom only" needs ≥10 words) |
| Word choice | 15 s, random pick on timeout |
| Hints | Letters revealed at evenly spaced times; never more than half the letters |
| Close guess | Edit distance 1, words of 4+ letters, shown only to that player |
| Guesser points | `round5(50 + 450 × timeLeft / drawTime)` — 500 for an instant guess, 50 at the buzzer |
| Drawer points | `round5(sum of guesser points this turn / number of guessers in room)` — so it grows with every correct guess and with speed |
| Early end | Turn ends when every connected guesser has guessed |
| Reveal | 5 s: word + points gained this turn |
| Game end | Podium for 10 s, then back to the lobby |
| Colours / sizes | Own 24-colour palette, 5 sizes, brush / eraser / fill / undo / clear |
| Votekick | Needs more than half of the other players; host can kick directly |
| Like / dislike | Announced in chat |
| Chat | 100 chars max, rate-limited; names 20 chars max |

### Not built (yet)
- Combination word mode (exact rules undocumented), languages other than English, ban, report, mute.
- Timer shortening after correct guesses (amount undocumented).

### Hosting limits
- Rooms live in server memory. When Render's free tier sleeps (~15 min idle) or restarts, rooms vanish.
- First visit after sleep takes about 50 s to wake the server.

## Sources
- Reverse-engineered protocol (settings ranges, phases, tools, packets): https://gist.github.com/MrDiamond64/b2081f2cb4ca6d11e848edaeb5ae1814 (marked abandoned Aug 2024)
- How-to guides: https://progameguides.com/skribbl/what-is-skribbl-io-how-to-play-it, https://ahaslides.com/blog/how-to-play-skribblo
- Design critiques: https://mechanicsofmagic.com/2024/04/24/critical-play-scribbl-io-2/, https://mechanicsofmagic.com/2024/04/23/critical-play-skribbl-io-blain-engeda/
