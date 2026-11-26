# MASTER DEVELOPMENT PROMPT — PUFFER PARTY MULTIPLAYER GAME

# PART I — PROJECT OVERVIEW

## 1. Your role and objective

You are acting as a senior multiplayer game developer, game designer, networking engineer, UI/UX designer, database architect, pixel artist, animation designer and quality assurance engineer.

Your task is to develop a fully functional multiplayer category-based survival game inspired by Krillion's Puffer Party.

Primary gameplay reference:

https://krillion.io/party

Developer documentation:

https://krillion.io/faq

The objective is to reproduce the original game's functional experience as closely as possible while using independently developed code, original artwork, original sound effects and an independently maintained question database.

This game must combine:

- Real-time multiplayer.
- Turn-based trivia.
- Hot-potato mechanics.
- A hidden shared countdown.
- An animated pufferfish.
- Circular player seating.
- Open-ended category questions.
- Canonical answer validation.
- Prevention of repeated answers.
- Rarity-based point rewards.
- Earnable extra lives.
- Player elimination.
- Public matchmaking.
- Private rooms.
- Customizable room rules.
- Ranked competitive matchmaking.
- Marine creature avatars.
- Retro pixel-art presentation.
- Responsive desktop and mobile interfaces.

Do not create a superficial mockup.

Do not simulate multiplayer by displaying fake players or predetermined answers.

Multiple real players on different devices must be able to join the same room, see the same question, observe synchronized game events and compete against one another.

Where an original mechanic is documented, preserve it.

Where the original implementation is not publicly documented, use the explicit engineering defaults in this specification and keep them configurable.

---

# PART II — FUNDAMENTAL GAMEPLAY

## 2. The main concept

Puffer Party is a multiplayer hot-potato trivia game.

Players sit around a circular underwater arena.

A pufferfish is passed between players in a predetermined circular order.

Everyone receives the same open-ended trivia question.

The player currently holding the pufferfish must submit a valid answer before it explodes.

If the answer is:

- Factually correct.
- Accepted by the question database.
- Not previously used during the current question.

Then the player successfully passes the pufferfish to the next surviving player.

The pufferfish contains a hidden countdown.

The countdown continues while the puffer moves between players.

The player holding it when the countdown expires loses one heart.

Once a player loses their final heart, they are eliminated.

The last surviving player wins.

However, there is an additional mechanic that makes the game more strategic than ordinary hot potato.

Every valid answer has a rarity tier.

Rarer answers award more points.

Accumulating enough points grants an additional heart.

Players must constantly decide whether to:

- Answer immediately using something obvious.
- Spend more time thinking of a rare answer that earns significantly more progress toward an extra life.

This is the central risk-versus-reward system.

The game must reward both quick thinking and broad knowledge.

---

## 3. Example gameplay

Four players enter a room:

- Alex.
- Sam.
- Charlie.
- Jamie.

Each player begins with two hearts.

The question appears:

**Name a country in Africa.**

The puffer starts with Alex.

Alex enters:

Egypt.

The answer is accepted as Plankton.

Alex receives 10 points toward an extra heart.

The puffer passes to Sam.

Sam enters:

Nigeria.

The answer is accepted.

The puffer passes to Charlie.

Charlie enters:

Botswana.

The answer is accepted.

The puffer passes to Jamie.

Jamie enters:

Egypt.

Egypt has already been used during this question.

The answer is rejected.

Jamie still holds the puffer.

The hidden fuse continues running.

Jamie attempts another answer but runs out of time.

The puffer explodes.

Jamie loses one heart.

The game transitions to a new question:

**Name a type of pasta.**

The used-answer list is cleared because a new question has started.

A fresh random fuse is initialized.

The players continue until only one player has hearts remaining.

All example rarity classifications are illustrative. Actual classifications must come from the curated question database.

---

## 4. Differences from the original solo Krillion

Do not accidentally build the Daily Dive with multiplayer added to it.

Puffer Party is fundamentally different.

| Feature | Daily Dive | Puffer Party |
|---|---|---|
| Players | One | Multiple |
| Objective | Maximize score | Survive |
| Timer | 25 seconds per question | Hidden shared fuse |
| Questions | Seven per dive | Continue until a winner |
| Answer reuse | Not relevant | Forbidden per question |
| Rarity points | Increase ocean depth | Earn additional hearts |
| Failure | Zero points | Lose a heart when puffer pops |
| Progression | Deeper ocean | Player elimination |
| Interaction | Solo | Real-time competitive |

Puffer Party must not have a fixed seven-question limit.

Puffer Party must not use a standard visible 25-second timer.

Puffer Party must not award victory to the player with the most rarity points.

A player who has earned fewer points can still win if they are the final survivor.

---

# PART III — ROOM SETTINGS

## 5. Default game configuration

Implement the following default room settings:

| Setting | Default |
|---|---:|
| Starting hearts | 2 |
| Maximum hearts | 5 |
| Points required per extra heart | 600 |
| Minimum fuse on pass | 8 seconds |
| Minimum fresh fuse | 10 seconds |
| Maximum fresh fuse | 30 seconds |
| Default room capacity | 6 players |
| Minimum players to start | 2 |
| Round preparation countdown | 3 seconds |
| Post-explosion freeze | 1.5 seconds |
| Room code length | 4 letters |

The defaults above are based on documented original behavior and reported client settings.

The game should support configurable custom rooms.

Keep public and rated matchmaking rules standardized.

---

## 6. Configuration object

Maintain a structured room configuration.

Example:

    {
      "startingHearts": 2,
      "heartCap": 5,
      "pointsPerHeart": 600,
      "minimumTurnSeconds": 8,
      "minimumFuseSeconds": 10,
      "maximumFuseSeconds": 30,
      "maxPlayers": 6,
      "minimumPlayers": 2,
      "roundCountdownSeconds": 3,
      "popFreezeMilliseconds": 1500,
      "visibility": "PRIVATE",
      "rated": false,
      "emergencyPasses": 1,
      "emergencyPassEnabled": true
    }

The emergency-pass values are provisional implementation settings based on reported gameplay and should remain configurable.

Do not allow a client to modify its own copy of this object to change authoritative game rules.

The server must store the actual configuration.

---

## 7. Custom room configuration

Allow the host to edit room settings before starting a match.

Include:

### Lives

Determines the number of hearts each player receives at the start.

### Heart cap

Determines the maximum number of hearts a player can hold.

### Points per heart

Determines how many rarity points are required to earn an additional life.

Support increments of 50 points, with an upper limit of 5,000 points as a documented-style configuration range.

### Minimum turn

Determines the minimum remaining fuse duration when the puffer changes hands.

This does not determine the fresh fuse duration.

### Seats

Determines the maximum number of players who can join.

Support rooms from two players up to sixteen players, with six as the default.

The original lobby's standard matchmaking brackets should remain separate from the custom-room capacity range.

### Visibility

Public rooms are discoverable in the public-room list.

Private rooms require an invitation or room code.

### Optional settings

Additional configurable settings may include:

- Question categories.
- Emergency passes.
- Typo tolerance.
- Spectator access.
- Disconnect policy.
- Auto-rematch.

These optional additions should not change the standard game by default.

---

## 8. Configuration validation

Validate all room settings on the server.

Prevent impossible settings such as:

- Starting hearts greater than the heart cap.
- A room capacity lower than the current player count.
- A minimum fuse greater than the maximum fuse.
- Negative points requirements.
- Zero available seats.
- Negative timer durations.
- A minimum remaining time greater than the maximum allowed fuse, unless explicitly supporting that variation.

Freeze the match configuration when the game starts.

The host cannot change the rules halfway through a ranked match.

Custom-room configuration changes during a match should only apply to the next match.

---

# PART IV — THE HIDDEN FUSE

## 9. The most important mechanic

The pufferfish contains one shared hidden timer.

There is not a separate timer for each player.

When a fresh puffer is initialized, choose a random fuse duration between 10 and 30 seconds under default settings.

For example:

Fresh fuse: 23.7 seconds.

Player A receives the puffer.

Player A spends 4 seconds answering.

19.7 seconds remain.

Player A successfully passes it to Player B.

Player B receives the remaining 19.7 seconds.

Do not generate a new random fuse at this point.

This shared countdown is what makes the game function like hot potato.

---

## 10. The eight-second minimum rule

When a valid answer passes the puffer, examine the remaining fuse duration.

If at least eight seconds remain, preserve the existing deadline.

If fewer than eight seconds remain, extend the deadline so the receiving player has eight seconds.

Formula:

    remainingTime = fuseDeadline - serverNow

    if remainingTime < minimumTurnTime:
        fuseDeadline = serverNow + minimumTurnTime

Otherwise, leave the deadline unchanged.

The important part is that the receiving player gets a minimum amount of time, not a completely fresh random timer.

Examples:

| Time remaining when passed | Next player receives |
|---|---:|
| 25 seconds | 25 seconds |
| 17 seconds | 17 seconds |
| 9 seconds | 9 seconds |
| 8 seconds | 8 seconds |
| 6 seconds | 8 seconds |
| 2 seconds | 8 seconds |
| 0.2 seconds | 8 seconds, if the pass was accepted before expiry |

If the timer has already expired, the pass must fail and the explosion must occur.

Never revive an expired fuse through the minimum-turn rule.

---

## 11. Detailed fuse simulation

Suppose four players are sitting in this order:

A → B → C → D → A.

The fresh fuse is randomly initialized to 24 seconds.

Player A answers after 5 seconds.

Remaining fuse: 19 seconds.

Player B answers after 7 seconds.

Remaining fuse: 12 seconds.

Player C answers after 6 seconds.

Remaining fuse: 6 seconds.

Because Player C successfully passed the puffer with fewer than eight seconds remaining, Player D receives eight seconds.

Player D answers after 3 seconds.

Remaining fuse: 5 seconds.

Player A receives eight seconds again.

Player A cannot think of an unused answer.

Eight seconds pass.

The puffer explodes on Player A.

Player A loses one heart.

A fresh random fuse will be generated for the next question.

This means a single question can continue through many rotations of the player ring.

Do not impose a predetermined number of passes before the explosion.

---

## 12. Why the fuse is hidden

The player must not be able to determine the exact remaining time.

Do not display:

- Exact remaining seconds.
- A perfectly accurate numerical countdown.
- A percentage of time remaining.
- A progress bar that directly maps to the exact deadline.

Instead, communicate danger through the pufferfish itself.

Possible visual states:

- Calm.
- Slightly inflated.
- Nervous.
- Heavily inflated.
- Shaking.
- Near explosion.

These states provide a general indication of urgency without revealing exact timing.

The player should think:

"The puffer looks dangerous. I should answer quickly."

Not:

"I have exactly 5.3 seconds left, so I can wait another two seconds."

Do not send the secret fuse deadline or initial random duration to ordinary clients.

The server should broadcast coarse animation states rather than the precise remaining time.

A technically hidden timer displayed nowhere but included in browser network data is not genuinely hidden from players.

---

## 13. Server-authoritative timer

All timer decisions must be made by the server.

Use a monotonic clock for active game deadlines.

Do not count down by subtracting a value every frame or every second.

Store:

    fuseStartedAt
    fuseDeadline
    fuseGeneration
    currentHolderId
    currentTurnId
    currentQuestionInstanceId
    minimumTurnMilliseconds

The server determines whether an incoming answer arrived before the deadline.

Client animation and local clocks are never authoritative.

Refreshing a browser tab must not reset the fuse.

Changing system time must not extend the fuse.

Opening a second browser tab must not duplicate turns.

Temporarily freezing the client must not pause the server.

---

## 14. Handling the submission-versus-explosion race condition

This is one of the most important networking problems to solve.

Consider:

The player submits an answer just before the puffer explodes.

The answer message and the timeout event are both being processed.

The server must make exactly one authoritative decision.

Suggested rule:

- If an answer reaches the server strictly before the deadline and passes validation, accept it.
- If it reaches the server at or after the deadline, reject it and resolve the pop.
- Capture the server-received timestamp before asynchronous processing.
- Process room events in a serialized order.
- Do not allow the timeout handler to run against an outdated turn.
- Do not allow a valid answer to be scored after a pop has already been committed.

Use unique turn identifiers and fuse-generation identifiers.

Whenever a pass changes the deadline, invalidate obsolete scheduled timeout callbacks.

If the timeout callback executes but belongs to an older fuse generation, ignore it.

This must work even under heavy server load.

---

# PART V — PLAYER TURN SYSTEM

## 15. Circular seating

Assign each player a stable seat index.

For six players:

Seat 0 → Seat 1 → Seat 2 → Seat 3 → Seat 4 → Seat 5 → Seat 0.

The puffer moves in a fixed direction around the ring.

Use clockwise rotation as the default.

Do not randomly choose the next player after every successful answer.

Players should be able to anticipate when their next turn is approaching.

Keep seat positions stable throughout the match.

If a player is eliminated, visually retain their empty or faded seat, but skip them during future turns.

Avoid abruptly repositioning every surviving player after every elimination.

---

## 16. Active-player selection

Only one player may hold the puffer at a given time.

Store the holder's unique player identifier.

When a valid answer passes the puffer:

1. Record the accepted answer.
2. Award rarity points.
3. Resolve any earned extra hearts.
4. Find the next eligible surviving player.
5. Update the current holder.
6. Apply the minimum-fuse rule.
7. Increment the turn identifier.
8. Broadcast the pass to everyone.
9. Allow the next holder to submit.

The next player must become authoritative immediately.

Do not wait for a cosmetic travel animation to finish before accepting their input.

The animation should be fast enough that it does not create significant confusion.

---

## 17. Choosing the next player

Implement a reusable next-player function.

Pseudocode:

    function findNextPlayer(currentSeat, players):
        for offset from 1 to playerCount:
            candidateSeat = (currentSeat + offset) % playerCount
            candidate = players[candidateSeat]

            if candidate.isAlive and candidate.isEligible:
                return candidate

        return null

Check the victory condition before passing the puffer.

When only one player survives, end the match immediately.

Do not pass the puffer to a dead player.

Do not pass it to an unseated spectator.

Do not accidentally return to the same player when the match should already be complete.

---

## 18. Turn presentation

When it is the local player's turn:

- Highlight their seat.
- Move the puffer toward them.
- Enable their answer input.
- Display YOUR TURN.
- Play a distinct turn-notification sound.
- Optionally vibrate supported mobile devices.
- Emphasize the answer submission control.

When another player holds the puffer:

- Highlight their seat.
- Display their name.
- Show their typing activity if enabled.
- Allow the local player to prepare mentally.
- Prevent out-of-turn answer submissions.

The local player must always understand whose turn it is.

Use more than just color to communicate this.

---

## 19. Preparing an answer before your turn

Consider allowing players to type a draft while another player holds the puffer.

This is a configurable implementation detail.

If enabled:

- The draft remains local.
- The answer cannot be submitted out of turn.
- The draft receives no validation feedback.
- If another player uses that answer, the draft becomes strategically obsolete.
- The server must revalidate it when submitted.

Do not automatically submit a draft when the player's turn starts.

This creates unnecessary accidental submissions.

If using a more restrictive original-style interface, disable the input entirely until the puffer arrives.

---

# PART VI — QUESTION STRUCTURE

## 20. Question design philosophy

Questions must support repeated valid answers from multiple players.

This requirement is more important than in the solo game.

A question needs enough possibilities for the puffer to circulate through the entire room multiple times.

Good prompts:

- Name a country in Africa.
- Name a species of bird.
- Name a type of pasta.
- Name a programming language.
- Name a chemical element.
- Name a Pokémon.
- Name a European capital city.
- Name a type of cheese.
- Name an animal that lives in the ocean.
- Name a musical instrument.
- Name a car manufacturer.
- Name an English word ending in "-ology".

The best questions have:

- Many common answers.
- Plenty of moderately familiar answers.
- Many uncommon answers.
- Some impressive obscure answers.
- Clear acceptance criteria.
- A sufficiently broad answer pool.

The question should get progressively harder because other players consume the obvious answers.

Do not artificially increase difficulty by making the question wording confusing.

---

## 21. Questions to avoid

Avoid prompts with extremely small answer pools.

For example:

- Name a primary color under a specified three-color model.
- Name a planet in the Solar System.
- Name a day of the week.
- Name a continent using a specified seven-continent model.

These might be suitable for special short-round modes, but are poor choices for a large standard room.

If eight players join a room and a prompt has only seven possible answers, somebody may lose simply because every answer is exhausted.

That is not a fair knowledge competition.

As an initial content guideline, aim for:

    Recommended answer count >= max(25, activePlayerCount × 8)

This is a proposed content-selection rule, not an official Krillion requirement.

For six players, prefer at least 48 answers.

For ten players, prefer at least 80 answers.

Broad questions with hundreds or thousands of valid answers are excellent, provided the answer database is reliable.

---

## 22. Question archetypes

Support a wide variety of question structures.

### Direct categories

- Name a fruit.
- Name a dinosaur.
- Name a type of fish.
- Name a sport.
- Name a board game.

### Geographical categories

- Name a country in Asia.
- Name a city in Germany.
- Name an island in the Mediterranean.
- Name a capital city in Africa.
- Name a country with a coastline.

### Letter restrictions

- Name a country beginning with S.
- Name an animal beginning with C.
- Name a word ending in "-ism".
- Name a city containing the letter Z.

### Attribute restrictions

- Name a mammal that lays eggs.
- Name a musical instrument that uses strings.
- Name a country with red on its flag.
- Name a chemical element with an atomic number above 50.

Check that these restricted categories have sufficient answers before using them in large rooms.

### Pop culture

- Name a Pokémon.
- Name a Mario character.
- Name a Disney animated film.
- Name a video game franchise.
- Name a fictional superhero.

### Science

- Name a chemical element.
- Name a branch of science ending in "-ology".
- Name a mineral.
- Name a body part.
- Name a species of tree.

### Food

- Name a type of bread.
- Name a type of cheese.
- Name a pasta shape.
- Name a dish originating in India.
- Name an edible mushroom.

### History

- Name a historical empire.
- Name a historical ruler.
- Name an ancient civilization.
- Name a country that gained independence during the twentieth century.

Every question must define a clear scope.

---

## 23. Question qualifiers

A short qualifier should be displayed beneath the main question when necessary.

Example:

NAME A COUNTRY IN EUROPE.

"Use sovereign states only."

Or:

NAME A POKÉMON.

"Official species names. Regional forms do not count separately."

Or:

NAME A CITY IN THE UNITED KINGDOM.

"Towns count too."

Or:

NAME A CHEMICAL ELEMENT.

"Use the element name or its official symbol."

Qualifiers establish exactly what the game accepts.

Do not hide important restrictions inside the backend.

A player should not lose a heart because the game secretly uses a narrower interpretation than the question suggests.

---

## 24. Dynamic question selection

Select a question based on:

- Number of surviving players.
- Available answer-pool size.
- Recent question history.
- Category variety.
- Question difficulty.
- Question quality.
- Language compatibility.

Avoid asking the same question repeatedly within one match.

Avoid presenting closely related prompts consecutively.

For example:

Question 1:

Name a country in Africa.

Question 2:

Name an African nation.

These are effectively identical.

Use a shuffle-bag system or weighted selection with a recent-history exclusion.

As a recommended rule:

- Exclude questions already played in the current match.
- Avoid immediate repetition across rematches.
- Balance categories throughout the session.
- Prefer broad categories for larger rooms.
- Use narrower, interesting categories in smaller rooms when enough answers remain.

Do not constantly generate live questions with an AI during a match.

Question data should be prepared and verified before being used.

---

## 25. Question exhaustion

A question can occasionally run out of valid unused answers.

The system should track the number of remaining valid canonical entities.

When all accepted answers are exhausted:

- Do not force the next player into an impossible turn.
- Do not falsely accept a repeated answer.
- Do not arbitrarily remove a heart.

Recommended fallback:

1. Finish the current pass.
2. Announce CATEGORY CLEARED.
3. Briefly celebrate that the group exhausted the category.
4. Start a new question.
5. Initialize a fresh fuse.
6. Preserve all player hearts and rarity progress.

This is a proposed fairness safeguard.

Normal question selection should make this event uncommon.

Never reveal the number or identities of the remaining valid answers in ranked play.

---

# PART VII — ANSWER VALIDATION

## 26. Canonical answer entities

Every answer must map to a canonical entity.

For example:

- USA
- United States
- United States of America
- U.S.A.

All map to the same canonical country.

Once one player uses any of these variants, all variants become unavailable for the current question.

This is critical.

Do not implement duplicate detection using raw string comparison.

Otherwise, players could submit:

"United States"

Then:

"USA"

Then:

"U.S.A."

And repeatedly exploit the same answer.

Instead, store:

    usedCanonicalAnswerIds = Set()

The set is shared by the entire room.

---

## 27. Normalization

Normalize input before validation.

Use:

- Unicode normalization.
- Case folding.
- Trimming whitespace.
- Collapsing repeated spaces.
- Accent-insensitive matching where appropriate.
- Approved punctuation normalization.
- Validated abbreviations.
- Approved alternative names.

Examples:

    "  EGYPT  " -> "egypt"

    "São Tomé and Príncipe" -> "sao tome and principe"

    "U.S.A." -> "usa"

Do not indiscriminately remove meaningful characters.

C, C++, and C# are distinct programming languages.

Similarly, some names containing numbers or hyphens represent separate entities.

Normalization must preserve semantic identity.

---

## 28. Valid answer

When a submitted answer is:

- In the current question's answer database.
- Matched to a canonical entity.
- Not already used.
- Submitted by the current holder.
- Received before the deadline.

Perform the following operations atomically:

1. Mark the entity as used.
2. Record the submitting player.
3. Retrieve the assigned rarity tier.
4. Award points.
5. Update the player's heart meter.
6. Resolve additional hearts.
7. Pass the puffer.
8. Apply the minimum-fuse rule.
9. Broadcast the result.

The player should receive immediate satisfying feedback.

Never introduce a long AI validation delay after every answer.

---

## 29. Repeated answer

If the canonical answer has already been used, reject the submission.

Suggested feedback:

ALREADY USED!

Or:

TAKEN!

The rejected player:

- Retains the puffer.
- Receives no points.
- Does not automatically lose a heart.
- Must try another answer.
- Continues using the existing fuse.

Do not reset the timer.

Do not pass the puffer.

Do not reveal an unused substitute answer.

Visually highlight the relevant previously used answer in the answer history.

---

## 30. Invalid answer

If the answer is not recognized by the question database, display:

NO ECHO

Or:

ANSWER NOT RECOGNIZED

The player must remain able to try again until the fuse expires.

The same deadline continues running.

Do not immediately remove a heart for an invalid answer.

A heart is lost when the puffer explodes.

Do not award points for invalid attempts.

The answer input can briefly shake or display a red border, but do not block typing with a full-screen error message.

---

## 31. Spelling corrections

Allow minor spelling errors where the intended answer is clear.

For example:

"Madagscar"

Could be matched to:

"Madagascar"

Use a controlled fuzzy-matching system.

Requirements:

- Prioritize exact canonical matches.
- Prioritize approved aliases.
- Use edit distance for likely spelling errors.
- Avoid aggressive matching for short answers.
- Reject ambiguous corrections.
- Do not convert an unrelated valid entity into a different answer.

For a possible correction, display:

DID YOU MEAN MADAGASCAR?

Require confirmation before accepting ambiguous suggestions.

The fuse continues while waiting for confirmation.

Do not expose the suggested answer's rarity before it is accepted.

If the suggested canonical answer has already been used, do not let the correction bypass the duplicate check.

The precise original correction behavior in Puffer Party should be verified against live gameplay; use this conservative approach as the initial implementation.

---

## 32. Answers missing from the database

A legitimate answer may occasionally be absent from the curated database.

Do not pretend the system is infallible.

Use:

"Answer not recognized."

Instead of:

"That answer does not exist."

Provide a post-match reporting mechanism.

The report should contain:

- Question identifier.
- Question version.
- Submitted answer.
- Match identifier.
- Optional player explanation.
- Optional supporting reference.

Review missing answers before publishing future database versions.

Do not use live AI improvisation to award points inconsistently during rated matches.

Do not let arbitrary answers score simply because the AI thinks they sound plausible.

---

# PART VIII — RARITY AND HEART PROGRESSION

## 33. The six rarity tiers

Use the same six-tier scoring architecture as the original Krillion.

| Tier | Points |
|---|---:|
| Plankton | 10 |
| Too Clever | 15 |
| Schooler | 30 |
| Rare | 60 |
| Deep Cut | 85 |
| One in a Krillion | 100 |

Every valid answer passes the puffer.

The rarity determines how much progress the player earns toward an extra heart.

Even a Plankton answer is valuable because it prevents the player from holding the puffer when it explodes.

Do not confuse a low-rarity answer with an incorrect answer.

---

## 34. Plankton

Plankton represents the obvious, familiar answers.

Example question:

Name a fruit.

Illustrative answer:

Apple.

Reward:

10 points.

Presentation:

- Small grey-blue rarity tag.
- Minimal particles.
- Simple acceptance sound.
- Small movement on the heart meter.

The answer is strategically useful because it is likely quick to recall and type.

---

## 35. Too Clever

Too Clever represents obscure-looking answers that are actually predictable among players trying to sound obscure.

The classification must be assigned through editorial review or defensible familiarity analysis.

Do not classify an answer as Too Clever merely because it has a scientific-sounding name.

Reward:

15 points.

Presentation:

- Warm orange or muted coral tag.
- Slightly playful feedback.
- Small meter increase.

This tier preserves the reverse-trivia character of Krillion.

---

## 36. Schooler

Schooler represents reasonably familiar answers that are not the most obvious possible responses.

Reward:

30 points.

Presentation:

- Cyan or bright blue tag.
- Small school-of-fish particle effect.
- Satisfying confirmation sound.

---

## 37. Rare

Rare represents uncommon, legitimate answers.

Reward:

60 points.

Presentation:

- Purple rarity tag.
- Stronger glow.
- Visible meter movement.
- Slightly more satisfying audio feedback.

Players should feel encouraged to search for Rare answers when the puffer appears calm enough.

---

## 38. Deep Cut

Deep Cut represents highly obscure answers.

Reward:

85 points.

Presentation:

- Magenta or deep violet tag.
- Bioluminescent particles.
- Short distinctive chime.
- Strong meter feedback.

Do not delay the next player's turn to celebrate an unusually good answer.

The game must continue at full speed.

---

## 39. One in a Krillion

The highest answer tier.

Reward:

100 points.

Use specially curated top-tier answers that are obscure, valid, interesting and satisfying to discover.

Do not simply award 100 points to the least familiar entity in a database.

Presentation:

- Golden answer text.
- Golden rarity badge.
- Pixel-art sparkles.
- Distinctive golden sound.
- Brief golden effect around the player's avatar.

Everyone in the room should be able to recognize that a player discovered a top-tier answer.

The puffer must still pass immediately.

Golden celebrations must not freeze gameplay.

---

## 40. The rarity-ranking mechanism

Build rarity databases using the same principles as the solo game.

Each answer's rarity should be predefined for the specific question.

Use:

- Structured factual datasets.
- Word or entity familiarity data.
- Question-specific recall likelihood.
- Category-specific popularity data.
- AI-assisted editorial classification.
- Manual review.
- Curated top-tier answers.

Never calculate rarity solely from how many people in the current room have submitted that answer.

That would be especially inappropriate in Puffer Party because answers cannot repeat.

Every accepted answer would appear equally unique.

Rarity must represent familiarity or difficulty of recall, not uniqueness within the current match.

Player submission statistics can be used to improve future question rankings, but active matches must use fixed scoring.

---

## 41. Proposed familiarity model

Where mechanical familiarity data exists, calculate an initial ranking using a configurable model.

Example:

    familiarity =
        0.35 * corpusFrequency
        + 0.25 * entityPopularity
        + 0.30 * questionSpecificRecall
        + 0.10 * culturalFamiliarity

Normalize each signal to a 0–1 scale.

Higher values indicate greater familiarity.

Use logarithmic normalization for strongly skewed popularity data.

Rank answers within each question.

Assign preliminary tiers based on the resulting familiarity distribution.

Use editorial overrides for:

- Too Clever answers.
- Special golden answers.
- Misleading popularity data.
- Ambiguous names.
- Cultural familiarity differences.
- Unusually small answer pools.

The exact original rarity thresholds are not public.

This model is a reproducible alternative, not a claim to be the original algorithm.

---

## 42. Rarity belongs to the question-answer pair

Do not give an entity one universal rarity across every question.

For example, consider the answer:

Python.

Question A:

Name a programming language.

Python is extremely familiar.

Question B:

Name a programming language created before 1995.

Its recall likelihood may differ.

Question C:

Name a type of snake.

Python represents a different entity altogether.

Rarity must be contextual.

Store the rarity in the relationship between the question and the accepted answer entity.

---

## 43. Extra-heart meter

Every player has their own personal points meter.

Default threshold:

600 points.

The meter begins at zero.

When a player submits a valid answer, add the answer's rarity points.

When the meter reaches the threshold, grant one additional heart, subject to the heart cap.

Example:

Alex currently has:

- Hearts: 2.
- Meter: 550/600.

Alex submits a Rare answer worth 60 points.

New meter total:

610.

Award one additional heart.

Alex now has:

- Hearts: 3.
- Meter: 10/600.

Carrying excess progress into the next meter cycle is the recommended implementation.

Do not unnecessarily discard the extra 10 points.

The original overflow behavior is not publicly established, so document this decision and keep it configurable.

---

## 44. How many answers are needed for an extra heart?

With the default 600-point threshold:

| Tier | Points | Same-tier answers needed |
|---|---:|---:|
| Plankton | 10 | 60 |
| Too Clever | 15 | 40 |
| Schooler | 30 | 20 |
| Rare | 60 | 10 |
| Deep Cut | 85 | 8 |
| One in a Krillion | 100 | 6 |

This difference creates genuine strategic incentives.

A player who only submits obvious answers might survive each individual turn but struggle to earn additional hearts.

A knowledgeable player can earn a spare heart significantly faster.

However, rarity never matters more than surviving the current fuse.

A slow 100-point answer that arrives after the deadline must receive zero points.

---

## 45. Heart-cap behavior

Default maximum:

Five hearts.

A player may not exceed the configured heart cap.

Example:

A player has five hearts and reaches 600 points.

Do not award a sixth heart.

Recommended behavior:

- Retain meter progress up to the threshold while the player is capped.
- Prevent unlimited hidden accumulation.
- Do not bank multiple additional hearts.
- Once the player loses a heart, require another accepted answer before consuming the stored progress to grant a spare heart.

This avoids immediately undoing an explosion while still acknowledging that a player earned progress.

Alternative policies can be tested against the reference game.

The cap behavior is an engineering decision because the original handling has not been independently verified.

---

## 46. Heart progression persists across questions

The heart meter is not reset when the puffer explodes or the category changes.

Example:

Question 1:

Player earns 100 points.

Question 2:

Player earns 85 points.

Question 3:

Player earns 60 points.

Meter:

245/600.

The player's progress continues throughout the match.

Reset the meter only when a new match begins.

Do not carry earned hearts or points into the next ranked match.

---

## 47. Extra-heart celebration

When a player earns a heart:

- Animate their meter reaching the threshold.
- Display a new heart icon.
- Emit a small burst of pink or golden particles.
- Play a rewarding sound.
- Display a brief message such as:

+1 ♥ SPARE LIFE

Everyone should see that the player has gained an additional heart.

The player must not miss their next turn because a celebration covers the input.

Keep the animation cosmetic and nonblocking.

---

## 48. Heart-loss behavior

When the puffer explodes on a player:

- Remove exactly one heart.
- Preserve their existing rarity progress.
- Trigger a heart-break animation.
- Play an explosion sound.
- Display the player's name and the heart loss.
- Evaluate whether they have been eliminated.

Do not remove rarity points as an additional punishment unless implementing a separately named custom rule.

The primary punishment is losing a heart.

---

# PART IX — THE PUFFER EXPLOSION

## 49. Explosion sequence

When the authoritative fuse deadline is reached:

1. Lock the current turn.
2. Prevent further answer submissions.
3. Identify the current holder.
4. Record an explosion event.
5. Subtract one heart.
6. Evaluate elimination.
7. Broadcast the explosion to every client.
8. Play the explosion animation.
9. Enter a short intermission.
10. Evaluate the victory condition.
11. If multiple players survive, select the next question.
12. Clear the used-answer set.
13. Initialize the next round.

The server must commit the heart loss exactly once.

Do not trigger multiple explosions because multiple clients independently noticed the timer ending.

---

## 50. Post-explosion pause

Use a short freeze of approximately 1.5 seconds.

This allows everyone to process what happened.

The explosion screen can briefly display:

POP!

ALEX LOST A HEART

Or:

ALEX HAS BEEN ELIMINATED

Do not turn the intermission into a lengthy cutscene.

The game should quickly return to the next question.

During the pause:

- Answer submissions are disabled.
- No active fuse is running.
- The upcoming question is prepared.
- Elimination visuals are applied.

---

## 51. Selecting the next question

After an explosion, introduce a new category.

Do not continue endlessly on the same category after a pop.

The used-answer set belongs to a specific question instance.

When a new question starts:

    usedCanonicalAnswerIds.clear()

An entity used under a previous category can be used again if it satisfies the new category.

Example:

Previous question:

Name a country beginning with J.

Japan was used.

New question:

Name a country in Asia.

Japan is valid again.

Do not create a match-wide blacklist of previously submitted entities.

---

## 52. Who receives the next puffer?

The precise original rotation policy after an explosion is not publicly established.

Use this deterministic default:

The next surviving seat clockwise from the exploded player receives the fresh puffer.

If the exploded player survives, they remain eligible for future turns.

If they are eliminated, skip their seat.

Do not repeatedly punish the same player by automatically giving them every fresh puffer.

Select the first player of a new match randomly or rotate starting seats between rematches.

Keep this policy isolated in the game configuration so it can be adjusted after reference testing.

---

## 53. Emergency pass

Reported gameplay shows a limited emergency-pass mechanic.

Its exact cost and all eligibility rules are not established by the public instructions.

Implement a configurable initial version:

- Each player receives one emergency pass per match.
- The pass is available only during their own turn.
- Using it passes the puffer without an answer.
- No rarity points are awarded.
- The pass is consumed permanently for that match.
- The used-answer set does not change.
- The standard minimum-fuse rule applies.
- The pass must arrive before the fuse expires.

Suggested button:

EMERGENCY PASS — 1 LEFT

After use:

PASS USED

Do not replenish it every question.

Do not allow it to become a substitute for playing the trivia game.

Keep the feature independently configurable until its precise original behavior is verified.

---

# PART X — PLAYER ELIMINATION AND VICTORY

## 54. Elimination

When a player's hearts reach zero:

- Mark their status as ELIMINATED.
- Remove them from the active turn rotation.
- Disable their answer submission.
- Disable their emergency pass.
- Keep their seat visible in a faded or ghost-like state.
- Record their placement.

The eliminated player may continue watching the match as a spectator.

Do not automatically disconnect them from the room.

They may want to watch their friends or participate in the next game.

---

## 55. Eliminated-player presentation

Show:

- A desaturated marine avatar.
- Broken or empty heart icons.
- A small ELIMINATED label.
- Reduced opacity.
- Final placement where available.

The player should still be recognizable.

Do not remove every trace of them from the arena.

Maintain stable seating for the surviving players.

---

## 56. Victory condition

The game ends when exactly one eligible player remains alive.

That player wins.

Do not require:

- A specific number of rarity points.
- A fixed number of questions.
- A fixed match duration.
- A minimum number of rare answers.
- A predetermined number of explosions.

Example:

Player A:

- 1 heart remaining.
- 320 rarity points.

Player B:

- 0 hearts remaining.
- 1,900 rarity points.

Player A wins.

Survival determines victory.

Rarity points are a means of surviving longer, not the primary win condition.

---

## 57. Winner presentation

When the match concludes:

- Stop all active timers.
- Disable gameplay input.
- Highlight the winner's avatar.
- Play a victory animation.
- Display golden particles.
- Show a winner title.

Suggested presentation:

LAST ONE FLOATING!

ALEX WINS

The celebration should feel rewarding without being excessively long.

Allow players to inspect results or start another match.

---

# PART XI — LOBBY DESIGN

## 58. Main Puffer Party menu

The main menu should be an atmospheric underwater multiplayer lobby.

Title:

PUFFER PARTY

Subtitle:

Pass the puffer. Don't get popped.

Use an original game title and branding for a public release.

The lobby should include:

- Player nickname input.
- Marine avatar selection.
- Table-size selection.
- Rated matchmaking.
- Quick Play.
- Host a Room.
- Public room list.
- Join by Code.
- How to Play.
- Sound settings.

The overall design should be compact and functional.

The player should be able to enter a match within a few interactions.

---

## 59. Player identity

Allow guest players to enter a display name.

Requirements:

- Sensible maximum character length.
- Unicode-aware validation.
- Removal of control characters.
- Protection against script injection.
- Basic offensive-name filtering.
- Prevention of misleading system impersonation.
- Unique persistent internal player IDs.

Do not use display names as database primary keys.

Two players may have the same nickname.

The game must still distinguish them using internal IDs.

---

## 60. Avatar selection

Use small pixel-art marine creatures.

The player's avatar appears at their seat.

Suggested creatures:

- Krill.
- Small fish.
- Squid.
- Anglerfish.
- Mantis shrimp.
- Octopus.
- Fossil creature.
- Large mythical sea creature.

The official lobby also displays progression-linked avatars associated with Daily Dive streaks.

For a connected Krillion-style ecosystem, support the following reported progression milestones:

| Avatar | Streak requirement |
|---|---:|
| Krill | Default |
| Schooler | 5 days |
| Squid | 14 days |
| Angler | 30 days |
| Evil | 45 days |
| Hackmanite | 60 days |
| Fossil | 75 days |
| Mantis | 100 days |
| Leviathan | 150 days |

Create original artwork for these or equivalent creatures.

If this game is being built as a standalone project without Daily Dive integration, use independent cosmetic progression rather than pretending to have historical streak data.

Avatars must not grant:

- More hearts.
- Faster turns.
- Better answer rarity.
- Additional emergency passes.
- Competitive advantages.

They are cosmetic.

---

## 61. Table-size selector

The lobby should support:

1V1

Two players.

3S

Three players.

4–6

Standard small-group matchmaking.

8–10

Large-party matchmaking.

Use 4–6 players as the default selection.

Make the selected bracket visually obvious.

The selected table size affects matchmaking, not the player's answer score.

---

## 62. Quick Play

Quick Play is casual, unrated matchmaking.

When a player presses Quick Play:

1. Enter the selected matchmaking queue.
2. Find compatible waiting players.
3. Allocate or join a suitable public match.
4. Notify players when a match is ready.
5. Start the waiting-room or ready sequence.
6. Begin the game.

Quick Play must not change competitive ratings.

The player should be able to cancel matchmaking at any time before the match is committed.

Do not fabricate waiting players or display fake queue estimates.

---

## 63. Rated matchmaking

Rated matchmaking pairs players against opponents of similar skill.

Use the same standard gameplay mechanics as Quick Play.

The difference is persistent competitive rating.

Do not give highly rated players more hearts or more favorable questions.

Matchmaking should consider:

- Selected table-size bracket.
- Current rating.
- Region or connection quality.
- Waiting time.
- Account or session eligibility.

Initially search within a narrow rating range.

Gradually widen the acceptable range as the player waits.

Use actual queue availability.

Do not display inaccurate promises such as "Match found in five seconds" without evidence.

---

## 64. Host a Room

The Host a Room action creates a new waiting room.

Before creation, the host chooses:

PUBLIC · LISTED

Or:

PRIVATE · CODE ONLY

Public rooms are visible to anyone browsing available rooms.

Private rooms are accessible through their code or invitation link.

Default to the user's clearly selected visibility.

Do not accidentally publish a room that was intended to be private.

After creating the room, display:

- Four-letter room code.
- Room visibility.
- Player count.
- Ready count.
- Host controls.
- Room settings.
- Invite button.

---

## 65. Room codes

Generate four-letter room codes.

Use an alphabet such as:

    ABCDEFGHJKLMNPQRSTUVWXYZ

Exclude I and O to reduce visual confusion.

Example codes:

QXMP

KDRF

VZAT

These are examples, not actual active rooms.

Code generation must:

- Check for collisions.
- Reserve active codes.
- Prevent duplicate active rooms.
- Release or expire codes when rooms close.
- Rate-limit join attempts.

A room invitation may use a URL such as:

    https://your-game.example/party/QXMP

Never treat a room code as an authentication credential for host privileges.

The room code provides access to join, not permission to administer the room.

---

## 66. Join by Code

Display a prominent four-character input.

Accept lowercase input and convert it to uppercase.

Validate the code before attempting to join.

Handle:

- Valid room.
- Room not found.
- Room closed.
- Room full.
- Match already in progress.
- Private spectator restrictions.
- Invalid code format.
- Temporary server error.

Provide clear feedback.

Do not leave players indefinitely on a loading screen.

---

## 67. Public-room browser

Show a scrollable list of public rooms.

Each room entry should include:

- Room code or room name.
- Host display name, if appropriate.
- Current player count.
- Maximum capacity.
- Waiting or playing status.
- Relevant game-mode label.
- Join action.

Example:

| Room | Players | Status |
|---|---:|---|
| QXMP | 4/6 | Waiting |
| KDRF | 2/6 | Waiting |
| VZAT | 6/6 | Playing |

Private rooms must never appear in the public list.

Remove stale entries promptly.

Allow players to refresh or receive real-time list updates.

---

# PART XII — WAITING ROOM

## 68. Waiting-room visual design

Once a player joins a room, show the actual circular arena.

The pufferfish is resting or sleeping.

Players appear around the perimeter of the ring.

Empty seats remain visible.

The atmosphere should be calm before the game starts.

Display:

- Room code.
- Public/private badge.
- Player list.
- Ready count.
- Room settings.
- Invite button.
- Sound controls.
- Leave Room.
- Auto-join Next Game.

The waiting room should feel like the players are gathering around a sleeping marine creature.

---

## 69. Wake the Puffer

Use a thematic start button.

Suggested label:

WAKE THE PUFFER

The button is enabled only when the minimum start requirements are met.

At least two eligible players must be present.

If using a ready system, require the necessary ready players.

The host should not be able to accidentally start a one-player standard match.

When the match starts:

- Lock the participant roster.
- Lock match rules.
- Initialize hearts.
- Reset rarity progress.
- Reset emergency passes.
- Assign seat order.
- Select the first question.
- Begin the preparation countdown.

Players joining after match start may become spectators or wait for the next game.

---

## 70. Ready status

Implement clear ready indicators.

Possible states:

- Not ready.
- Ready.
- In game.
- Spectating.
- Disconnected.

As an implementation default, players can automatically become ready upon joining a waiting room, with the ability to toggle readiness.

The host should see how many players are prepared to start.

Do not allow a disconnected player to silently count as ready.

---

## 71. Invite control

Provide an Invite action.

It should copy the actual room invitation link or display an appropriate sharing interface.

Also provide a separate option to copy the room code.

Example feedback:

ROOM CODE COPIED

Do not claim the invitation has been sent to somebody unless a real sharing action occurred.

---

# PART XIII — GAMEPLAY VISUAL DESIGN

## 72. Overall aesthetic

The game should have a cohesive retro underwater pixel-art style.

The visual presentation should combine:

- Deep blue ocean colors.
- Pixel-art marine creatures.
- A simple arena ring.
- Dark atmospheric backgrounds.
- Retro typography.
- Small glowing particles.
- Charming character expressions.
- Minimal interface clutter.
- Strong readability.

Do not create a generic modern dashboard.

Do not create a realistic 3D underwater simulator.

Do not use overly glossy mobile-game graphics.

Do not cover the screen with unnecessarily large UI cards.

The environment should feel like a small, charming underwater arcade game.

---

## 73. Proposed color palette

This palette is an original implementation direction, not an exact extraction of the reference game's artwork.

Background:

- Near-black navy: #061321
- Deep ocean: #0A2036
- Ocean blue: #123652
- Underwater teal: #1D526B
- Distant silhouettes: #102B42

Interface:

- Panel background: #0A1B2D
- Panel border: #31536B
- Primary text: #ECF6FA
- Secondary text: #91ACBD
- Interactive cyan: #61D6EA
- Primary action pink: #FF7195

Hearts:

- Full heart: #F35C83
- Empty heart: #513747
- Extra-heart glow: #FFB3C8

Pufferfish:

- Main body: #F0BC65
- Highlight: #FFE3A4
- Spines: #B47D42
- Outline: #694D3A
- Danger highlight: #F47B60

Rarity:

- Plankton: #8299AA
- Too Clever: #E99A76
- Schooler: #55C9DF
- Rare: #A68BF4
- Deep Cut: #D774D9
- One in a Krillion: #FFD76A

Use these consistently across the game.

---

## 74. Typography

Use retro pixel-style fonts for:

- Game title.
- Section headings.
- Turn indicators.
- Room codes.
- Rarity labels.
- Countdown numbers.
- Winner banners.
- Primary buttons.

Use a highly readable monospace or sans-serif font for:

- Questions.
- Qualifiers.
- Answer input.
- Player names.
- Long descriptions.
- Accessibility text.

Possible fonts:

- Pixelify Sans.
- VT323.
- Press Start 2P.

Only use properly licensed fonts.

Prioritize readability during timed gameplay.

A beautiful pixel font is useless if players cannot quickly understand the question.

---

## 75. Circular arena

The main gameplay area is a circular or elliptical underwater ring.

Players occupy seats around its perimeter.

The center contains:

- The active question or question panel.
- The pufferfish's resting position when appropriate.
- Minimal visual indicators.
- Space for the passing animation.

The arena must adapt to different player counts.

For two players:

Place them opposite each other.

For three players:

Use an evenly spaced triangular arrangement.

For four players:

Use a cross or four equally spaced positions.

For six players:

Use an evenly spaced hexagonal arrangement.

For larger rooms:

Distribute seats evenly around the ring, reducing avatar size as needed.

Use trigonometric layout calculations rather than hardcoding separate coordinates for every player count.

Example:

    angle = rotationOffset + (seatIndex / seatCount) * 2 * PI

    x = centerX + radiusX * cos(angle)

    y = centerY + radiusY * sin(angle)

Ensure player nameplates and hearts do not overlap.

---

## 76. Player seat components

Each seat contains:

- Marine avatar.
- Player name.
- Heart icons.
- Heart-meter indicator.
- Active-turn highlight.
- Typing or submitted-answer bubble.
- Connection status if necessary.

A player's current avatar should remain visually anchored to their seat.

The active holder gets:

- Brighter outline.
- Pulsing ring.
- Turn arrow.
- Pufferfish near their avatar.
- Clear YOUR TURN indication when local.

The next player's seat may receive a subtle indication that their turn is approaching.

Do not reveal the remaining fuse numerically.

---

## 77. Heart display

Render hearts as compact pixel-art icons.

For example:

♥ ♥ ♡ ♡ ♡

This represents two current hearts with a maximum of five.

The meter beneath the hearts can be a compact horizontal bar.

Example:

    ♥ ♥ ♡ ♡ ♡
    [██████░░░░]

For the local player, show exact rarity progress when useful:

360 / 600

For opponents, a compact meter may be sufficient.

The active player should always know:

- Their remaining hearts.
- Their progress toward another heart.
- Whether an opponent has gained or lost a heart.

---

## 78. Example desktop layout

    ┌──────────────────────────────────────────────────────────┐
    │ PUFFER PARTY       ROOM QXMP        5 PLAYERS       ⚙    │
    ├──────────────────────────────────────┬───────────────────┤
    │                                      │ USED ANSWERS      │
    │               PLAYER A               │                   │
    │                 ♥ ♥                  │ Apple             │
    │                  ●                   │ Banana            │
    │                                      │ Mango             │
    │      PLAYER E           PLAYER B     │ Guava             │
    │        ♥ ♥                 ♥         │                   │
    │         ●      NAME A       ●        │                   │
    │                 FRUIT                │                   │
    │                             PUFFER   │                   │
    │      PLAYER D           PLAYER C     │                   │
    │        ♥ ♥                 ♥ ♥       │                   │
    │         ●                   ●        │                   │
    │                                      │                   │
    ├──────────────────────────────────────┴───────────────────┤
    │ YOUR TURN                                                │
    │ [ Type a valid answer...                ] [ PASS PUFFER ]│
    │ ♥ ♥     360/600                 [ EMERGENCY PASS: 1 ]    │
    └──────────────────────────────────────────────────────────┘

This is a conceptual implementation layout.

Use actual reference footage to refine placement and spacing.

The important elements are:

- Visible question.
- Easily identifiable current holder.
- Circular player order.
- Visible health.
- Shared answer history or equivalent answer feedback.
- Immediate access to typing and submission.

---

## 79. Question presentation

The question should be readable at a glance.

Use large, high-contrast text.

For example:

NAME A TYPE OF CHEESE

Display qualifiers directly underneath.

Example:

"Common names of cheese varieties."

Do not hide the question when a player is not the current holder.

Every player needs to think ahead during other players' turns.

The question should remain visible throughout the entire active category.

---

## 80. Used-answer history

Display the answers already accepted for the current question.

A useful history entry contains:

- Canonical answer.
- Player name.
- Rarity color.
- Optional points value.

For example:

Apple — Alex — Plankton

Mango — Sam — Schooler

Mangosteen — Charlie — Rare

This is a recommended usability feature; the precise original history presentation should be checked against gameplay footage.

The purpose is to reduce accidental duplicate answers.

For large histories:

- Use a scrollable region.
- Keep recent answers visible.
- Allow quick scanning.
- Avoid stealing keyboard focus.
- Preserve the full history for the current question.

Do not show unused answers.

---

## 81. Typing bubbles

Display the active player's typing activity above or near their avatar.

This supports the social nature of the game.

Possible presentation:

- Three-dot typing indicator.
- A small speech bubble.
- Live text preview.
- Final accepted-answer bubble.

If live text is implemented:

- Rate-limit typing updates.
- Sanitize all text.
- Limit message length.
- Apply moderation controls.
- Never record unnecessary raw keystrokes.
- Provide a privacy setting where appropriate.

Typing updates are cosmetic.

They must not validate answers or leak rarity information.

---

# PART XIV — THE PUFFERFISH

## 82. Character design

The pufferfish is the central character of the entire game.

It represents both the shared timer and the threat of elimination.

Create an original pixel-art pufferfish.

Suggested appearance:

- Round yellow or orange body.
- Small fins.
- Distinct expressive eyes.
- Small mouth.
- Visible spines when inflated.
- Dark pixel outline.
- Subtle highlights.
- Charming, nervous facial expressions.

The pufferfish must be instantly recognizable at small sizes.

Do not use a static emoji as the final asset.

---

## 83. Required pufferfish sprite states

Create separate animation states.

### Sleeping

Used in the waiting room.

Characteristics:

- Relaxed body.
- Closed eyes.
- Gentle breathing.
- Small sleep bubbles.

### Calm

Used when the fish is relatively relaxed.

Characteristics:

- Smaller body.
- Gentle swimming.
- Minimal spines.
- Normal expression.

### Inflating

The body grows wider.

Characteristics:

- Increased size.
- Concerned expression.
- Slightly faster fin movement.

### Spiked

The puffer becomes noticeably inflated.

Characteristics:

- Larger body.
- Extended spines.
- Nervous movement.
- Stronger visual presence.

### Danger

The puffer appears close to exploding.

Characteristics:

- Rapid shaking.
- Fully extended spines.
- Distressed expression.
- Subtle warning color.
- Faster sound cues.

### Pop

The puffer briefly bursts into a stylized particle cloud.

Use a comedic, non-graphic cartoon effect.

### Recovery

A fresh puffer appears or settles into a calm state for the next category.

The original's precise animation thresholds are not public. Use coarse server-controlled danger states and tune the animation against reference footage.

---

## 84. Puffer movement

When a valid answer is accepted, animate the fish traveling from the current holder to the next holder.

Use:

- A short curved path.
- Smooth movement.
- Slight rotation.
- Small bubble trail.
- Fin flutter.
- A subtle arrival bounce.

Suggested duration:

180–350 milliseconds.

Do not use lengthy animations that eat into the next player's response time.

Maintain the authoritative holder independently from the rendered puffer position.

If a new server event arrives during an animation, smoothly reconcile to the correct state.

Do not queue several seconds of outdated movement.

---

## 85. Danger animations

As the fuse burns:

- Increase the puffer's inflation.
- Introduce stronger shaking.
- Change its facial expression.
- Increase the intensity of warning audio.
- Add occasional bubbles or small vibration effects.

When the minimum-fuse rule extends the countdown, its danger presentation may relax to an appropriate state.

Do not implement inflation as a perfectly accurate clock that can be reverse-engineered from pixel size.

Use broad danger bands and allow several seconds of uncertainty.

The player should sense risk without being able to calculate the exact deadline.

---

## 86. Explosion effects

When the puffer pops:

- Rapidly expand its sprite.
- Transition into a stylized burst.
- Emit pixel particles.
- Add an expanding bubble ring.
- Briefly shake the affected player's seat.
- Break or fade a heart icon.
- Play a distinctive pop sound.

Suggested timeline:

| Time | Event |
|---|---|
| 0–80 ms | Rapid anticipation |
| 80–180 ms | Pop and particle burst |
| 180–350 ms | Heart-loss animation |
| 350–700 ms | Result message |
| Remaining pause | Transition to next category |

Keep the overall post-pop freeze approximately 1.5 seconds.

Do not depict realistic injury.

The tone should be playful rather than violent.

---

# PART XV — ANSWER INPUT AND FEEDBACK

## 87. Input design

The answer field is the most important interactive control.

It must be:

- Large.
- Responsive.
- Immediately accessible.
- Keyboard-friendly.
- Mobile-friendly.
- Clearly enabled or disabled based on turn ownership.

Support:

- Enter to submit.
- Submit button.
- Mobile keyboard submission.
- Unicode characters.
- Pasting where permitted by the chosen fair-play rules.

Do not require the player to click a tiny button after typing.

Make Enter the primary fast submission method on desktop.

---

## 88. Successful answer feedback

On an accepted answer:

- Display the canonical answer.
- Show the rarity tag.
- Display the points earned.
- Add progress to the meter.
- Animate the fish moving away.
- Clear the submitted input.
- Disable further submission for the completed turn.

Example:

MANGOSTEEN

RARE · +60

The feedback should be brief enough that the next player can immediately act.

---

## 89. Duplicate feedback

Display:

ALREADY USED

Use a short amber or red indication.

Optionally pulse the corresponding entry in the used-answer history.

Keep the input active.

The player should be able to immediately edit the answer.

Do not display a modal dialog requiring dismissal.

---

## 90. Invalid feedback

Display:

NO ECHO

Or:

NOT RECOGNIZED

Use a brief red border or shake.

Do not remove the player's input unnecessarily.

They may only need to fix one spelling error.

Do not introduce artificial validation delays.

---

## 91. Out-of-turn feedback

If a player tries to submit outside their turn, reject it.

Display a subtle message:

WAIT FOR THE PUFFER

Do not reveal whether their answer was valid.

Do not validate or score any out-of-turn submission.

Otherwise, players could test many answers before receiving the puffer.

---

# PART XVI — AUDIO DESIGN

## 92. Audio direction

The sound design should feel like a retro underwater arcade.

Use original or properly licensed sounds.

Required effects:

- Button press.
- Player joined.
- Player ready.
- Match starting.
- Preparation countdown.
- Puffer waking.
- Local turn beginning.
- Correct answer.
- Duplicate answer.
- Invalid answer.
- Puffer passing.
- Inflation.
- Danger warning.
- Puffer explosion.
- Heart loss.
- Extra heart.
- Rare answer.
- Deep Cut answer.
- Golden answer.
- Player elimination.
- Victory.

Do not make every event equally loud.

The most important sounds are:

- Receiving the puffer.
- Increasing danger.
- Puffer explosion.
- Earning another heart.
- Winning the match.

---

## 93. Danger audio

Use increasingly tense audio as the fish becomes dangerous.

Possible sounds:

- Soft ticking.
- Accelerating bubbling.
- Small creaking or stretching noises.
- Nervous squeaks.
- Rhythmic warning pulses.

Do not map these directly to exact seconds remaining.

Do not make the warning unbearably loud.

Use distinct audio layers rather than constantly increasing one sound's volume.

---

## 94. Ambient sound

Add subtle underwater ambience.

Potential elements:

- Quiet ocean drones.
- Distant bubbles.
- Gentle ambient notes.
- Sparse underwater effects.

Ambient sound should never overpower turn notifications.

Allow players to mute:

- Music.
- Ambient audio.
- Sound effects.

Persist settings across sessions.

Respect browser audio autoplay restrictions.

---

# PART XVII — RANKED COMPETITION

## 95. Rating system

The original lobby supports rated matchmaking.

The exact rating formula is not publicly documented.

Implement a transparent, tested competitive rating model.

For 1v1 matches, standard Elo is a suitable starting point.

Expected score:

    expectedA =
        1 / (1 + 10 ^ ((ratingB - ratingA) / 400))

Rating update:

    newRatingA =
        ratingA + K * (actualScoreA - expectedA)

Where:

- Win = 1.
- Loss = 0.
- Draw = 0.5.
- K is configurable.

A proposed initial K value is 32.

For multiplayer matches, prefer a rating system designed for placements, such as TrueSkill, or use a carefully normalized pairwise Elo model.

Do not apply full independent 1v1 rating changes against every opponent without normalization.

That can cause excessive rating movement in large rooms.

---

## 96. Multiplayer placement

Record final placement based on survival.

For a six-player game:

- First eliminated: sixth place.
- Second eliminated: fifth place.
- Third eliminated: fourth place.
- Fourth eliminated: third place.
- Fifth eliminated: second place.
- Last survivor: first place.

Use the actual elimination order.

Do not rank eliminated players by total rarity points unless displaying a separate statistical category.

Rarity points can be shown as an achievement but should not override placement.

---

## 97. Rated fairness

Ranked matches must use standardized settings.

Prevent players from:

- Choosing a favorable heart threshold.
- Choosing only personally familiar question categories.
- Changing the fuse after match start.
- Starting with extra hearts.
- Selecting custom answer databases.
- Manipulating seat order.
- Inviting alternate accounts solely to farm rating.

Track suspicious activity conservatively.

Do not automatically punish players simply because they type quickly or know uncommon facts.

Fast legitimate answers are part of the game.

Use aggregate evidence and review systems.

---

## 98. Separate ratings and statistics

Consider maintaining separate ratings for:

- 1v1.
- Small group.
- Large group.

Alternatively, use a unified skill model if it accounts for different table sizes appropriately.

Display:

- Current rating.
- Rating change.
- Wins.
- Matches played.
- Average placement.
- Survival statistics.
- Best answer rarity.
- Total extra hearts earned.

Do not create fake rating history for new players.

Quick Play and private-room matches should not affect ranked ratings.

---

# PART XVIII — RESULTS AND REMATCHES

## 99. Match-results screen

After a match ends, show:

- Winner.
- Final placement.
- Players' remaining hearts.
- Correct answers submitted.
- Total rarity points.
- Extra hearts earned.
- Number of puffer explosions received.
- Best individual answer.
- Rating changes, when applicable.

Example:

| Player | Placement | Accepted answers | Points | Extra hearts |
|---|---:|---:|---:|---:|
| Alex | 1st | 26 | 1,420 | 2 |
| Sam | 2nd | 22 | 1,050 | 1 |
| Charlie | 3rd | 13 | 570 | 0 |
| Jamie | 4th | 8 | 280 | 0 |

All statistics must come from actual game events.

The winner should be visually emphasized.

---

## 100. Personal match breakdown

Provide the local player with useful statistics.

Possible metrics:

- Total turns taken.
- Successful passes.
- Invalid attempts.
- Repeated-answer attempts.
- Average accepted-answer response time.
- Fastest accepted answer.
- Rarity distribution.
- Hearts lost.
- Hearts earned.
- Emergency passes used.
- Final placement.

Use this to encourage improvement.

For example:

"You successfully passed the puffer 18 times."

"Your rarest answer was worth 100 points."

"You earned two spare hearts."

Do not fabricate global comparisons.

---

## 101. Rematch

Provide a prominent Play Again or Rematch action.

For private rooms:

- Keep the existing room code.
- Preserve room configuration.
- Keep eligible participants.
- Reset match state.
- Return to the waiting room.
- Start a new match when ready.

For public matchmaking:

- Offer another game with the same bracket.
- Allow players to requeue.
- Allow automatic rejoining if selected.

Reset:

- Hearts.
- Heart meters.
- Used answers.
- Current question.
- Fuse.
- Emergency passes.
- Elimination status.
- Match statistics.

Do not reset persistent rating or cosmetic progression.

---

## 102. Auto-join Next Game

Provide a checkbox allowing players to automatically participate in the next match.

Players who disable it should not automatically become active participants.

They may remain in the room or become spectators until they manually ready up.

This is particularly useful for public rooms that continuously host matches.

Clearly indicate the selected state.

---

# PART XIX — MULTIPLAYER SERVER ARCHITECTURE

## 103. Recommended stack

For a browser-based implementation:

Frontend:

- React or equivalent.
- TypeScript.
- CSS for interface layout.
- Canvas or SVG for the arena and animation.
- Web Audio API for sound.

Backend:

- Node.js with TypeScript or equivalent.
- WebSocket communication.
- Socket.IO or an equivalent real-time framework.
- PostgreSQL for persistent records.
- Redis for matchmaking and session coordination where necessary.

Do not use a purely client-side architecture for real multiplayer.

If implementing within Roblox:

- Use server-side Luau for authoritative gameplay.
- Use RemoteEvents for submissions and state synchronization.
- Use replicated presentation state for UI.
- Use DataStoreService for persistent ratings.
- Use MemoryStoreService and appropriate cross-server services for matchmaking.

Regardless of platform, the game rules remain identical.

---

## 104. Authoritative server

The server owns:

- Room membership.
- Host identity.
- Match rules.
- Question selection.
- Answer database.
- Used-answer set.
- Turn ownership.
- Fuse deadline.
- Player hearts.
- Rarity points.
- Extra-heart awards.
- Emergency passes.
- Eliminations.
- Victory.
- Rating updates.

The client owns:

- Rendering.
- Input collection.
- Local visual settings.
- Audio playback.
- Cosmetic interpolation.
- Temporary local drafts.

The client must never tell the server:

"I earned 100 points."

Instead, it sends:

"I submit this answer for this match, question and turn."

The server validates the claim.

---

## 105. Room state machine

Implement an explicit state machine.

Required states:

    LOBBY
    WAITING_FOR_PLAYERS
    MATCH_STARTING
    QUESTION_PREPARATION
    ROUND_ACTIVE
    PUFFER_POPPED
    ROUND_INTERMISSION
    MATCH_COMPLETE
    REMATCH_WAITING
    ROOM_CLOSED

Optional states:

    SERVER_RECOVERY
    MATCH_CANCELLED

Normal flow:

    LOBBY
        -> WAITING_FOR_PLAYERS
        -> MATCH_STARTING
        -> QUESTION_PREPARATION
        -> ROUND_ACTIVE
        -> PUFFER_POPPED
        -> ROUND_INTERMISSION
        -> QUESTION_PREPARATION
        -> ROUND_ACTIVE

Repeat until the victory condition is reached.

Then:

    MATCH_COMPLETE
        -> REMATCH_WAITING

Do not transition to multiple incompatible states simultaneously.

---

## 106. Authoritative room data

Example internal server structure:

    {
      "roomId": "unique-room-id",
      "roomCode": "QXMP",
      "hostPlayerId": "player-1",
      "status": "ROUND_ACTIVE",
      "visibility": "PRIVATE",
      "settings": {},
      "matchId": "match-123",
      "questionInstanceId": "question-instance-9",
      "questionId": "geography-001",
      "questionVersion": 3,
      "currentTurnId": 42,
      "currentHolderId": "player-3",
      "currentSeat": 2,
      "fuseDeadline": "server-only",
      "fuseGeneration": 12,
      "usedAnswerIds": [
        "egypt",
        "nigeria",
        "botswana"
      ],
      "players": [],
      "eventSequence": 151
    }

The exact fuse deadline must remain server-only during active gameplay.

Send clients a sanitized public projection of the room state.

---

## 107. Player state

Each player should maintain:

    {
      "playerId": "unique-player-id",
      "displayName": "Alex",
      "avatarId": "krill",
      "seatIndex": 0,
      "hearts": 2,
      "heartCap": 5,
      "heartProgress": 360,
      "matchRarityPoints": 960,
      "extraHeartsEarned": 1,
      "emergencyPassesRemaining": 1,
      "isAlive": true,
      "isReady": true,
      "isConnected": true,
      "isSpectator": false,
      "placement": null,
      "rating": 1200
    }

Maintain separate values for:

- Total rarity points earned during the match.
- Current progress toward the next heart.

Do not overwrite cumulative match statistics when the heart meter resets.

---

## 108. Client-to-server events

Suggested events:

    create_room
    join_room
    leave_room
    update_room_settings
    set_ready
    start_match
    enter_matchmaking
    cancel_matchmaking
    submit_answer
    confirm_correction
    use_emergency_pass
    typing_update
    request_room_snapshot
    request_rematch
    set_auto_join
    report_answer
    report_player

Every event must be authenticated against the player's session.

A player cannot impersonate another player by specifying their ID in the request.

---

## 109. Server-to-client events

Suggested events:

    room_snapshot
    player_joined
    player_left
    room_settings_updated
    match_starting
    question_presented
    turn_started
    answer_accepted
    answer_rejected
    correction_required
    puffer_passed
    danger_state_changed
    heart_earned
    puffer_popped
    heart_lost
    player_eliminated
    player_disconnected
    player_reconnected
    match_complete
    rating_updated
    room_closed

Each important event should include:

- Room identifier.
- Match identifier.
- Monotonically increasing event sequence.
- Relevant question instance.
- Relevant turn identifier.
- Authoritative resulting state.

Clients must ignore stale or duplicate events.

---

## 110. Answer submission payload

Example:

    {
      "matchId": "match-123",
      "questionInstanceId": "question-instance-9",
      "turnId": 42,
      "submissionId": "unique-idempotency-key",
      "answer": "Madagascar"
    }

The server verifies:

1. The session belongs to an eligible player.
2. The player belongs to this match.
3. The match is active.
4. The question instance is current.
5. The turn identifier is current.
6. The player currently holds the puffer.
7. The player is alive.
8. The submission is not a duplicate request.
9. The server received the answer before the deadline.
10. The answer matches a valid canonical entity.
11. The entity has not been used.

Only after all checks succeed should the answer be accepted.

---

## 111. Accepted-answer event

Example:

    {
      "type": "answer_accepted",
      "eventSequence": 152,
      "matchId": "match-123",
      "questionInstanceId": "question-instance-9",
      "turnId": 42,
      "playerId": "player-3",
      "answerId": "madagascar",
      "displayAnswer": "Madagascar",
      "rarity": "RARE",
      "points": 60,
      "heartsAwarded": 0,
      "heartProgress": 420,
      "currentHearts": 2,
      "nextHolderId": "player-4",
      "nextTurnId": 43
    }

This event should not expose the exact hidden fuse deadline.

The rarity classification is an illustrative fixture.

---

## 112. Atomic game-event processing

Use a room-level serialized event queue or equivalent locking mechanism.

Answer acceptance must not overlap with:

- Another answer submission.
- An emergency pass.
- Fuse expiration.
- Player elimination.
- Question replacement.
- Match completion.

A successful pass is one logical transaction.

If the client sends the same submission twice, return the existing result instead of awarding points again.

Do not use independent asynchronous handlers that can mutate the same state unpredictably.

---

# PART XX — DISCONNECTIONS AND NETWORK RECOVERY

## 113. Disconnection handling

Players may temporarily disconnect because of:

- Wi-Fi instability.
- Browser refreshes.
- Mobile application backgrounding.
- Device sleep.
- Internet outages.

Do not immediately destroy the entire room.

Preserve the player's session for a configurable reconnection window.

Recommended ranked policy:

- The match continues.
- Disconnected players cannot submit answers.
- The shared fuse is not paused.
- If the puffer reaches a disconnected player and expires, they lose a heart.
- If they reconnect before expiry, they can resume.
- Extended abandonment may result in elimination.

This prevents intentional disconnects from becoming a way to escape danger.

For private casual rooms, an optional pause policy can be provided.

The exact original disconnection rules are not publicly documented.

---

## 114. Reconnection

When a player reconnects:

1. Authenticate their existing session.
2. Find their active room.
3. Retrieve the latest authoritative room state.
4. Restore their seat.
5. Restore hearts and points.
6. Restore the current question.
7. Restore used-answer history.
8. Restore current turn ownership.
9. Restore current danger state.
10. Resume live events.

Never initialize a new personal player state simply because the socket connection changed.

A reconnecting player must not receive fresh hearts or another emergency pass.

---

## 115. Host migration

A room should survive the host leaving when other players remain.

Suggested policy:

- Assign host ownership to an eligible connected player.
- Preserve the room code.
- Preserve game settings.
- Continue an active match.
- Broadcast the new host identity.

If every player leaves, close the room after a short expiry period.

Do not allow an abandoned room to remain publicly listed indefinitely.

---

## 116. Network-latency presentation

The interface must remain responsive under ordinary network latency.

Display local visual submission acknowledgment immediately.

However, do not show a definitive accepted-answer animation before the server confirms it.

Use a brief pending state when necessary.

The player should never receive a green success message followed by an unexplained heart loss.

Do not use client timestamps to grant unverified extra time.

For ranked play, prefer region-aware matchmaking and disclose significant connection problems.

---

# PART XXI — QUESTION DATABASE ARCHITECTURE

## 117. Required database tables

Maintain separate tables or equivalent structured collections for:

### QUESTIONS

- Question ID.
- Prompt.
- Qualifier.
- Category.
- Question type.
- Acceptance criteria.
- Source references.
- Version.
- Answer-pool size.
- Publication status.

### ENTITIES

- Canonical entity ID.
- Display name.
- Entity type.
- External references.
- Description.

### QUESTION_ANSWERS

- Question ID.
- Entity ID.
- Rarity tier.
- Point value.
- Familiarity score.
- Question-specific recall score.
- Validity evidence.
- Review status.

### ANSWER_ALIASES

- Entity ID.
- Question ID where necessary.
- Accepted alias.
- Normalized alias.
- Review status.

### MATCHES

- Match ID.
- Room ID.
- Game mode.
- Settings snapshot.
- Started time.
- Completed time.
- Winner.
- Question versions.

### MATCH_PLAYERS

- Match ID.
- Player ID.
- Starting rating.
- Ending rating.
- Placement.
- Accepted answers.
- Rarity points.
- Extra hearts.
- Hearts lost.

### MATCH_EVENTS

- Event ID.
- Match ID.
- Sequence.
- Question instance.
- Turn identifier.
- Player identifier.
- Event type.
- Validated event data.

### ANSWER_REPORTS

- Question version.
- Submitted answer.
- Report reason.
- Supporting evidence.
- Review status.

---

## 118. Initial content development

For an initial playable version, create at least 50 carefully curated questions.

These questions should span:

- Geography.
- Food.
- Animals.
- Language.
- Science.
- Entertainment.
- History.
- Everyday knowledge.

For each question:

1. Define the exact acceptance rules.
2. Identify reliable factual sources.
3. Build a comprehensive valid-answer list.
4. Canonicalize the answer entities.
5. Generate approved aliases.
6. Calculate familiarity.
7. Assign preliminary rarity tiers.
8. Review classifications.
9. Select golden answers.
10. Test likely player submissions.
11. Verify suitability for different room sizes.
12. Publish a versioned question.

For a public launch, target at least 300 high-quality questions.

Expand beyond 1,000 over time.

Do not generate thousands of low-quality prompts simply to increase the displayed question count.

---

## 119. Shared architecture with the solo game

If the Daily Dive-style game already exists, reuse:

- Question repository.
- Canonical entity database.
- Answer aliases.
- Answer normalization.
- Rarity engine.
- Content-review tools.
- Player identities.
- Cosmetic systems.
- Shared sound settings.

However, create a separate Puffer Party match engine.

Do not force Puffer Party to inherit:

- Seven-round structure.
- Fixed 25-second timers.
- Ocean-depth scoring.
- Daily attempt restrictions.

Use a common trivia foundation with separate mode-specific rules.

Some questions may be enabled for Daily Dive but disabled for Puffer Party because their answer pools are too small or their definitions are unsuitable for multiplayer.

---

# PART XXII — RESPONSIVE DESIGN

## 120. Desktop

On desktop, prioritize a large central arena.

The player should be able to simultaneously see:

- Current question.
- All relevant player seats.
- Current holder.
- Hearts.
- Answer history.
- Own input.
- Room information.

Support widescreen and standard laptop displays.

Do not make the arena so large that the input falls below the fold.

---

## 121. Mobile

On mobile, the arena must adapt without losing readability.

Requirements:

- Compact ring layout.
- Smaller player avatars.
- Responsive nameplates.
- Clear active-holder indicator.
- Prominent question.
- Persistent accessible answer input.
- Appropriately sized submit button.
- Collapsible answer history.
- Safe-area support.

When the mobile keyboard appears:

- Keep the question visible.
- Keep the player's input visible.
- Keep the submit action accessible.
- Avoid disruptive page scrolling.
- Preserve turn indicators.

Do not require the player to manually dismiss the keyboard after every answer.

Test portrait and landscape modes.

---

## 122. Accessibility

Support:

- Reduced-motion mode.
- High-contrast mode.
- Clear visual turn indicators.
- Keyboard navigation.
- Screen-reader announcements for the current question and holder.
- Audio controls.
- Text labels for rarity tiers.
- Sufficient color contrast.
- Non-flashing danger feedback.

Reduced-motion mode must still communicate:

- Turn changes.
- Correct answers.
- Puffer danger.
- Heart loss.
- Extra hearts.
- Victory.

Do not reveal exact remaining time through an accessibility implementation when the normal game intentionally hides it.

Consider separate accessible custom-room settings for players who need more preparation time.

---

# PART XXIII — PERFORMANCE AND SECURITY

## 123. Performance requirements

The game should remain responsive during matches with many players.

Target:

- Smooth 60 FPS animation on capable devices.
- Low input delay.
- Efficient sprite rendering.
- Minimal network payloads.
- Fast deterministic answer matching.
- Stable gameplay with multiple simultaneous rooms.

Use:

- Cached answer lookup indexes.
- Efficient canonical-ID sets.
- Sprite atlases.
- Object pooling for particles.
- Batched rendering.
- Rate-limited typing updates.
- State-delta broadcasts.
- Efficient room cleanup.

Do not make expensive external AI calls on the critical path of every answer.

---

## 124. Answer-bank security

Do not send the full question answer database to clients during gameplay.

The client should receive:

- Question text.
- Qualifier.
- Accepted answer history.
- Public rarity results.
- Relevant player state.

It must not receive:

- All valid unused answers.
- Hidden golden answers.
- Exact familiarity scores.
- The hidden fuse deadline.

Keep authoritative answer validation on the server.

Do not hide answer-bank data merely by placing it in minified frontend JavaScript.

---

## 125. Anti-cheat

Protect against:

- Out-of-turn submissions.
- Multiple submissions for one turn.
- Replaying old messages.
- Answer-bank enumeration.
- Duplicate-answer alias exploits.
- Fake rarity points.
- Client-side timer manipulation.
- Fake heart awards.
- Unauthorized room settings changes.
- Rating manipulation.
- Automated spam.
- Session impersonation.

Rate-limit submission attempts without penalizing ordinary human typing.

Do not pretend to be able to completely prevent external search or outside assistance.

Use transparent fair-play rules.

Provide player-reporting controls and review suspicious behavior using evidence.

---

## 126. Moderation

Player names, typing bubbles and any chat features contain user-generated content.

Implement:

- Text sanitization.
- Offensive-name filtering.
- Spam prevention.
- Mute controls.
- Player blocking where appropriate.
- Reporting.
- Private-room controls.
- Host moderation.

Do not expose raw user-generated HTML.

Do not allow chat messages to interrupt the answer field.

If voice chat is added, treat it as a separate moderated optional feature.

Do not introduce voice chat merely to make the project seem more complete.

---

# PART XXIV — ACCEPTANCE TESTS

## 127. Fuse tests

Test:

- Fresh fuse durations are between 10 and 30 seconds.
- The fuse continues through passes.
- Passing with 20 seconds remaining preserves 20 seconds.
- Passing with eight seconds remaining preserves eight seconds.
- Passing with five seconds remaining grants eight seconds.
- Passing after expiry fails.
- An obsolete timeout callback cannot pop the current holder.
- A duplicate submission cannot extend the timer twice.
- Refreshing the browser does not reset the fuse.
- Disconnecting does not reset the fuse.
- Ordinary clients do not receive the exact deadline.

---

## 128. Turn tests

Test:

- Only the holder can submit.
- A valid answer passes to the next surviving seat.
- Invalid answers retain the current holder.
- Duplicate answers retain the current holder.
- Eliminated seats are skipped.
- The ring wraps correctly.
- A player cannot submit twice during one turn.
- A previous-turn submission cannot be applied to a later turn.
- The game ends when one survivor remains.

---

## 129. Duplicate-answer tests

Test these as equivalent answers where appropriate:

United States.

USA.

U.S.A.

United States of America.

After one is accepted, reject all corresponding aliases during that question.

Test:

- Capitalization differences.
- Extra whitespace.
- Accented names.
- Approved abbreviations.
- Alternative spellings.
- Fuzzy-matched aliases.
- Previous answers after a new category begins.

A new question must reset duplicate tracking.

---

## 130. Heart tests

Test:

- Players start with two hearts by default.
- A pop removes exactly one heart.
- A valid answer does not directly remove a heart.
- Plankton awards 10 points.
- Too Clever awards 15 points.
- Schooler awards 30 points.
- Rare awards 60 points.
- Deep Cut awards 85 points.
- One in a Krillion awards 100 points.
- Reaching 600 points grants one heart.
- Overflow behaves according to configured policy.
- Hearts cannot exceed the cap.
- Heart progress persists across questions.
- Losing the final heart eliminates the player.
- A new match resets hearts and progress.

---

## 131. Room tests

Test:

- Public room creation.
- Private room creation.
- Four-letter code generation.
- Code collision handling.
- Joining valid rooms.
- Rejecting nonexistent rooms.
- Rejecting full rooms.
- Preventing unauthorized host actions.
- Updating rules before match start.
- Locking rules during a match.
- Starting with the minimum players.
- Rejecting single-player standard starts.
- Host migration.
- Room cleanup.
- Rematches.

---

## 132. Multiplayer tests

Test with independent real browser sessions or real game clients.

At minimum:

- Two simultaneous players.
- Three simultaneous players.
- Six simultaneous players.
- Ten simultaneous players.
- Maximum supported custom-room capacity.

Introduce artificial network latency and packet interruption during testing.

Verify that:

- Every client sees the same question.
- Every client sees the same active holder.
- Every client sees the same used answers.
- Every client sees the same heart changes.
- Every client agrees on elimination.
- Every client agrees on the winner.

Do not claim multiplayer works merely because several simulated avatars appear in one browser.

---

## 133. Race-condition tests

Test:

- Two submissions arriving nearly simultaneously.
- Submission and timeout arriving together.
- Emergency pass and timeout arriving together.
- A player disconnecting while holding the puffer.
- A player leaving as their answer is accepted.
- Reconnection after elimination.
- Duplicate network events.
- Delayed old-question submissions.
- Server processing delays.
- Match completion during a queued event.

The system must not:

- Award double points.
- Remove duplicate hearts.
- Pass to an eliminated player.
- Revive an expired fuse.
- Start two questions simultaneously.
- Create multiple winners.

---

## 134. Visual tests

Verify:

- Puffer animations are smooth.
- The correct seat is highlighted.
- Rarity effects are distinguishable.
- Hearts update correctly.
- The input remains accessible.
- Long player names do not overlap.
- Ten-player rooms remain readable.
- Mobile keyboards do not hide essential controls.
- No animation blocks the server-authoritative turn.
- Reduced-motion settings function.
- Pop effects are clear and playful.
- Eliminated players are visually distinguishable.

---

# PART XXV — DEVELOPMENT ORDER

## 135. Phase one: Core game rules

Build the server-authoritative match engine before elaborate art.

Implement:

- Player state.
- Seating.
- Turn rotation.
- Hidden fuse.
- Minimum-fuse rule.
- Answer validation.
- Duplicate detection.
- Rarity points.
- Extra hearts.
- Explosions.
- Eliminations.
- Victory.

Use simple placeholder graphics temporarily.

Write automated unit tests.

---

## 136. Phase two: Real multiplayer

Implement:

- WebSocket communication or platform-specific networking.
- Room creation.
- Room joining.
- Live synchronization.
- Player identity.
- Reconnection.
- Server event serialization.
- Public/private visibility.
- Room settings.

Test using independent clients.

Do not proceed until real players can complete a full match.

---

## 137. Phase three: Question database

Create:

- Verified question sets.
- Canonical answer entities.
- Alias dictionaries.
- Rarity rankings.
- Question-selection logic.
- Administrative review tools.
- Missing-answer reports.

Ensure every published multiplayer question has a sufficiently broad answer pool.

---

## 138. Phase four: Visual presentation

Build:

- Lobby.
- Sleeping puffer.
- Circular arena.
- Original marine avatars.
- Heart UI.
- Answer field.
- Rarity indicators.
- Puffer inflation states.
- Passing animation.
- Pop animation.
- Extra-heart effects.
- Victory presentation.

Replace all temporary artwork.

Maintain a coherent pixel-art direction.

---

## 139. Phase five: Matchmaking and progression

Build:

- Quick Play.
- Table-size queues.
- Rated matchmaking.
- Rating calculations.
- Match history.
- Player statistics.
- Avatar progression.
- Rematches.

Keep casual and rated outcomes separate.

---

## 140. Phase six: Final quality assurance

Complete:

- Full automated test suite.
- Multi-client testing.
- Mobile testing.
- Network interruption testing.
- Security review.
- Question-quality review.
- Visual consistency review.
- Audio balancing.
- Accessibility testing.
- Performance optimization.

Do not label a feature complete unless its expected behavior has been tested.

---

# PART XXVI — NON-NEGOTIABLE REQUIREMENTS

## 141. Do not make these mistakes

Do not:

- Use a separate random timer for every turn.
- Reset the entire fuse after every successful answer.
- Show the exact hidden fuse.
- Apply the minimum-turn rule after an expired fuse.
- Use a 25-second Daily Dive timer.
- Force the match to end after seven questions.
- Allow previously used answers through alternate spellings.
- Calculate rarity from uniqueness within the current room.
- Award random rarity scores.
- Make a golden answer directly grant an entire extra heart.
- Reset heart progress every category.
- Allow players to exceed the heart cap.
- Award victory based solely on points.
- Pass the puffer to eliminated players.
- Trust client-submitted scores.
- Expose complete active answer banks.
- Create fake multiplayer participants.
- Fabricate rankings or queue populations.
- Pause gameplay for lengthy rarity celebrations.
- Allow animations to determine authoritative game events.
- Make the question unreadable.
- Use generic dashboard styling.
- Copy proprietary source code or artwork.
- Add unrelated monetization before the core experience works.

---

## 142. Final gameplay quality standard

The finished game should produce the following emotional experience.

The player enters a dark, charming underwater lobby.

They see their small marine avatar.

They join a room with several other players.

Everyone gathers around a sleeping pufferfish.

The host wakes the puffer.

A question appears.

The puffer begins moving around the ring.

The player immediately thinks of a common answer.

Another player uses it.

They think of a replacement.

Another player uses that one too.

The puffer starts swelling.

The player's turn arrives.

They have a rare answer in mind, but it takes longer to type.

They decide to risk it.

They submit.

The answer is accepted.

A golden rarity tag appears.

Their meter increases.

They earn a spare heart.

The puffer swims away.

A different player becomes stuck.

The puffer inflates, shakes and pops.

One heart disappears.

A new question appears.

The entire process repeats.

The room gradually gets quieter as players are eliminated.

Eventually, only two players remain.

One has more rarity points.

The other has better survival instincts.

The puffer passes back and forth.

One player cannot think of another answer.

The puffer explodes.

The final surviving player wins.

That is Puffer Party.

The experience must feel fast, tense, competitive, social and rewarding.

The questions should reward actual knowledge.

The hidden fuse should create uncertainty.

The rarity system should create strategic decisions.

The heart system should provide progression during the match.

The multiplayer implementation should remain synchronized and fair.

The pixel-art presentation should make the entire experience charming and memorable.

Deliver a complete, functional, tested multiplayer game, not a visual demonstration.
