module.exports = [
  {
    id: 'game-nintendo-hardware',
    category: 'gaming',
    prompt: 'Name a Nintendo console or handheld',
    qualifier: 'Any Nintendo game system or its official revisions, up to the Switch 2 (2025)',
    groups: {
      textbook: 'Nintendo Switch|Switch; Wii; Nintendo DS|DS; Game Boy|Gameboy; Nintendo 64|N64; GameCube|Game Cube|NGC; NES|Nintendo Entertainment System|Famicom; SNES|Super Nintendo|Super NES|Super Famicom; Nintendo 3DS|3DS; Game Boy Advance|GBA; Wii U',
      honours: `Switch Lite|Nintendo Switch Lite; Switch OLED|Nintendo Switch OLED; Switch 2|Nintendo Switch 2; Game Boy Color|GBC; Nintendo DSi|DSi; DS Lite|Nintendo DS Lite;
        Game Boy Advance SP|GBA SP; Game Boy Pocket; Virtual Boy; Game & Watch|Game and Watch; New Nintendo 3DS; Nintendo 2DS|2DS; Wii Mini; Game Boy Micro`,
      rare: `New Nintendo 3DS XL|3DS XL; DSi XL; New Nintendo 2DS XL|2DS XL; Game Boy Light; Pokemon Mini|Pokémon Mini; Nintendo 64DD|64DD; Super Game Boy;
        Family Computer Disk System|Famicom Disk System; Satellaview; NES Classic Edition|NES Classic|NES Mini; Super NES Classic Edition|SNES Classic|SNES Mini`,
      deep: 'Famicom Network System; iQue Player|iQue',
      legendary: 'Color TV-Game',
    },
    facts: { 'Color TV-Game': 'Nintendo\'s first home video game consoles, sold in Japan from 1977, years before the Famicom.' },
  },
  {
    id: 'game-console',
    category: 'gaming',
    prompt: 'Name a video game console',
    qualifier: 'Home or handheld game consoles from any maker (not PCs or phones)',
    groups: {
      textbook: 'PlayStation|PS1|PSX; PlayStation 2|PS2; PlayStation 3|PS3; PlayStation 4|PS4; PlayStation 5|PS5; Xbox; Xbox 360; Xbox One; Xbox Series X|Xbox Series S|Series X; Nintendo Switch|Switch; Wii; Nintendo DS; Game Boy; Nintendo 64|N64; GameCube; NES; SNES; Sega Genesis|Mega Drive|Genesis; Atari 2600',
      honours: `Sega Saturn|Saturn; Sega Dreamcast|Dreamcast; Sega Master System|Master System; PSP|PlayStation Portable; PlayStation Vita|PS Vita|Vita; Game Boy Advance; Nintendo 3DS|3DS; Wii U; Steam Deck; Sega Game Gear|Game Gear;
        Atari 7800; Atari Jaguar|Jaguar; Atari Lynx|Lynx; 3DO; Neo Geo; TurboGrafx-16|PC Engine|TurboGrafx; Intellivision; ColecoVision; Magnavox Odyssey|Odyssey; Virtual Boy; Ouya`,
      rare: `Neo Geo Pocket|Neo Geo Pocket Color; WonderSwan; N-Gage|Nokia N-Gage; Sega CD|Mega-CD; Sega 32X|32X; Atari 5200; Fairchild Channel F; Amiga CD32|CD32; Philips CD-i|CD-i;
        Analogue Pocket; ROG Ally; Nvidia Shield|Shield Portable; GP32; Gizmondo; Apple Pippin|Pippin; Evercade`,
      deep: 'Bandai Playdia|Playdia; Casio Loopy|Loopy; Epoch Cassette Vision|Cassette Vision; Magnavox Odyssey 2|Odyssey 2; Entex Adventure Vision|Adventure Vision; Tiger Game.com|Game.com; RDI Halcyon|Halcyon; Atari Panther|Panther; Zeebo; Mega Duck|Cougar Boy; Watara Supervision|Supervision; Coleco Telstar|Telstar',
      legendary: 'Vectrex; Playdate',
    },
    facts: {
      Vectrex: 'A 1982 home console with its own built-in vector-graphics monitor instead of plugging into a TV.',
      Playdate: 'A tiny yellow black-and-white handheld with a hand crank, released in 2022.',
    },
  },
  {
    id: 'game-mario-character',
    category: 'gaming',
    prompt: 'Name a character from the Mario franchise',
    qualifier: 'Heroes, villains, helpers and enemies from the Mario series and its spin-offs (including Wario and Donkey Kong)',
    groups: {
      textbook: 'Mario; Luigi; Princess Peach|Peach; Bowser; Toad; Yoshi; Wario; Donkey Kong|DK; Bowser Jr.|Bowser Junior; Koopa Troopa|Koopa',
      honours: `Princess Daisy|Daisy; Waluigi; Rosalina; Toadette; Goomba; Boo; King Boo; Birdo; Shy Guy; Piranha Plant; Bob-omb|Bomb-omb; Lakitu; Diddy Kong; Kamek; Bullet Bill; Chain Chomp; Cappy;
        Pauline; Dry Bones; Hammer Bro|Hammer Brothers; Koopalings|Koopaling; Wiggler; Cheep Cheep; Blooper; Thwomp; Spiny; Buzzy Beetle; Monty Mole; Toadsworth`,
      rare: `Larry Koopa; Morton Koopa Jr.|Morton Koopa; Wendy O. Koopa|Wendy Koopa|Wendy; Iggy Koopa|Iggy; Roy Koopa|Roy; Lemmy Koopa|Lemmy; Ludwig von Koopa|Ludwig; Captain Toad; Luma; Nabbit; Fawful; Petey Piranha;
        Tatanga; Magikoopa; Fire Bro; Boomerang Bro; Pokey; Podoboo; Giga Bowser; Dry Bowser; Baby Mario; Baby Luigi; Baby Peach; Professor E. Gadd|E. Gadd;
        Cackletta; Cataquack; Fuzzy; Boom Boom; Pom Pom; Spike`,
      deep: 'Madame Broode; Lady Bow; Goombario; Clawgrip; Shroob|Shroobs; Princess Shroob|Elder Princess Shroob; Cheep Chomp',
      legendary: 'Mouser; Wart',
    },
    facts: {
      Mouser: 'A bomb-throwing mouse boss from Super Mario Bros. 2.',
      Wart: 'The frog king and final boss of Super Mario Bros. 2, who is defeated by vegetables.',
    },
  },
  {
    id: 'game-sonic-character',
    category: 'gaming',
    prompt: 'Name a character from the Sonic the Hedgehog series',
    qualifier: 'Heroes, rivals and villains from Sonic games, comics or the films',
    groups: {
      textbook: 'Sonic|Sonic the Hedgehog; Tails|Miles Prower|Miles "Tails" Prower; Knuckles|Knuckles the Echidna; Dr. Eggman|Eggman|Dr. Robotnik|Robotnik|Doctor Eggman; Amy Rose|Amy; Shadow|Shadow the Hedgehog',
      honours: `Rouge|Rouge the Bat; Cream|Cream the Rabbit; Cheese; Silver|Silver the Hedgehog; Blaze|Blaze the Cat; Metal Sonic; Big the Cat|Big; Vector|Vector the Crocodile; Espio|Espio the Chameleon; Charmy|Charmy Bee;
        Omega|E-123 Omega; Jet the Hawk|Jet; Wave the Swallow|Wave; Storm the Albatross|Storm; Chaos; Mighty the Armadillo|Mighty; Ray the Flying Squirrel|Ray; Orbot; Cubot; Infinite; Sticks the Badger|Sticks`,
      rare: `Tikal; Gerald Robotnik|Professor Gerald; Maria Robotnik|Maria; Fang the Sniper|Fang; Nack the Weasel|Nack; Bean the Dynamite|Bean; Bark the Polar Bear|Bark; Metal Knuckles; Mecha Sonic; Emerl; Chip|Light Gaia; Dark Gaia; Eggman Nega; Marine the Raccoon|Marine;
        Zavok; Zazz; Master Zik|Zik; Zeena; Zomom; Zor; Sally Acorn|Princess Sally; Lyric the Last Ancient|Lyric`,
      deep: 'Scourge the Hedgehog|Scourge; Tails Doll; Vanilla the Rabbit|Vanilla; Chris Thorndyke|Chris; Cosmo the Seedrian|Cosmo; Mephiles the Dark|Mephiles; Iblis; Solaris; Merlina; Perfect Chaos; Uncle Chuck|Chuck Thorndyke',
      legendary: 'Tangle; Whisper',
    },
    facts: {
      Tangle: 'An orange lemur with a prehensile tail from the IDW Sonic comics, who debuted in 2018.',
      Whisper: 'A white wolf with a big gun, Tangle\'s best friend in the IDW Sonic comics.',
    },
  },
  {
    id: 'game-zelda-game',
    category: 'gaming',
    prompt: 'Name a game in The Legend of Zelda series',
    qualifier: 'Official Zelda games and spin-offs, up to 2025 (without the words "The Legend of Zelda:")',
    groups: {
      textbook: 'Breath of the Wild|BotW; Tears of the Kingdom|TotK; Ocarina of Time|OoT; Majora\'s Mask|Majoras Mask; The Wind Waker|Wind Waker|WW; Twilight Princess|TP; A Link to the Past|ALttP|Link to the Past; Link\'s Awakening; Skyward Sword|SS; The Legend of Zelda|Zelda 1|Legend of Zelda',
      honours: `The Minish Cap|Minish Cap; Phantom Hourglass; Spirit Tracks; A Link Between Worlds|Link Between Worlds; Oracle of Ages; Oracle of Seasons; Four Swords Adventures; Four Swords; Tri Force Heroes|Triforce Heroes;
        Echoes of Wisdom; Zelda II: The Adventure of Link|The Adventure of Link|Zelda II|Zelda 2|Adventure of Link; Hyrule Warriors; Age of Calamity|Hyrule Warriors Age of Calamity; Cadence of Hyrule`,
      rare: `Four Swords Anniversary Edition; Wand of Gamelon|The Wand of Gamelon; Faces of Evil|Link: The Faces of Evil; Zelda's Adventure; Hyrule Warriors Legends; Hyrule Warriors Definitive Edition;
        Ocarina of Time 3D; Majora's Mask 3D; The Wind Waker HD; Twilight Princess HD; Skyward Sword HD; Age of Imprisonment|Hyrule Warriors Age of Imprisonment; BS Zelda|BS The Legend of Zelda; Game & Watch Zelda|Game and Watch Zelda`,
      deep: `Freshly-Picked Tingle's Rosy Rupeeland|Rosy Rupeeland|Tingle's Rosy Rupeeland`,
      legendary: `Link's Crossbow Training|Crossbow Training; Tingle's Balloon Fight|Balloon Fight DS`,
    },
    facts: {
      'Link\'s Crossbow Training': 'A 2007 Wii shooting game bundled with the Wii Zapper, set in Hyrule.',
      'Tingle\'s Balloon Fight': 'A 2007 Japan-only Nintendo DS download game where Tingle pops balloons.',
    },
  },
  {
    id: 'game-pokemon-type',
    category: 'gaming',
    prompt: 'Name a Pokémon type',
    qualifier: 'The 18 elemental types (not Stellar, which is only a Tera type)',
    closed: 18,
    groups: {
      textbook: 'Fire; Water; Grass; Electric; Normal; Psychic; Ghost; Dragon',
      honours: 'Fighting; Flying; Poison; Ground; Rock; Bug',
      rare: 'Ice; Steel; Dark',
      legendary: 'Fairy',
    },
    facts: { Fairy: 'The newest type, added in 2013 (Generation VI) mainly to weaken Dragon-type Pokémon.' },
  },
  {
    id: 'game-pokemon-starter',
    category: 'gaming',
    prompt: 'Name a Pokémon starter',
    qualifier: 'The first-stage Grass, Fire or Water starters from the main games (Generations I to IX), plus Pikachu and Eevee',
    groups: {
      textbook: 'Bulbasaur; Charmander; Squirtle; Pikachu; Eevee',
      honours: 'Chikorita; Cyndaquil; Totodile; Treecko; Torchic; Mudkip; Turtwig; Chimchar; Piplup; Snivy; Tepig; Oshawott',
      rare: 'Chespin; Fennekin; Froakie; Rowlet; Litten; Popplio; Grookey; Scorbunny; Sprigatito; Fuecoco; Quaxly',
      legendary: 'Sobble',
    },
    facts: { Sobble: 'A timid water lizard that turns invisible and cries when it gets nervous.' },
  },
  {
    id: 'game-among-us-colour',
    category: 'gaming',
    prompt: 'Name an Among Us crewmate colour',
    qualifier: 'The 18 standard colours in the colour picker',
    closed: 18,
    groups: {
      textbook: 'Red; Blue; Green; Pink; Orange; Yellow; Black; White; Purple; Brown; Cyan; Lime',
      honours: 'Maroon|Dark red; Rose|Light pink; Gray|Grey; Tan; Coral',
      legendary: 'Banana',
    },
    facts: { Banana: 'A pale yellow crewmate colour, one of the six added after launch.' },
  },
  {
    id: 'game-minecraft-biome',
    category: 'gaming',
    prompt: 'Name a Minecraft biome',
    qualifier: 'Overworld, Nether or End biomes in Java or Bedrock up to 1.21.6 (June 2025)',
    groups: {
      textbook: 'Plains; Forest; Desert; Jungle; Ocean; Swamp; Taiga; Savanna; Badlands|Mesa; Snowy Plains|Ice Plains|Tundra; Mountains|Mountain',
      honours: `Mushroom Fields|Mushroom Island; Dark Forest|Roofed Forest; Birch Forest; Cherry Grove; Mangrove Swamp; Lush Caves; Dripstone Caves; Deep Dark; Beach; River; Deep Ocean; Frozen Ocean; Warm Ocean; Lukewarm Ocean;
        Cold Ocean; Nether Wastes|Nether; Soul Sand Valley; Crimson Forest; Warped Forest; Basalt Deltas; The End|End; Windswept Hills|Extreme Hills; Meadow; Grove; Snowy Slopes; Jagged Peaks; Frozen Peaks; Stony Peaks`,
      rare: `Sunflower Plains; Flower Forest; Old Growth Pine Taiga|Giant Tree Taiga; Old Growth Spruce Taiga|Giant Spruce Taiga; Snowy Taiga|Cold Taiga; Snowy Beach|Cold Beach; Stony Shore|Stone Beach; Windswept Savanna; Windswept Forest;
        Windswept Gravelly Hills; Bamboo Jungle; Sparse Jungle; Eroded Badlands; Wooded Badlands; Ice Spikes; Frozen River; Savanna Plateau; Small End Islands; End Highlands; End Midlands; End Barrens; Old Growth Birch Forest|Tall Birch Forest; The Void|Void`,
      deep: 'Deep Lukewarm Ocean; Deep Cold Ocean; Deep Frozen Ocean; Modified Jungle; Shattered Savanna',
      legendary: 'Pale Garden',
    },
    facts: { 'Pale Garden': 'A creepy grey forest added in 1.21.2 that holds the Creaking and the Pale Oak tree.' },
  },
  {
    id: 'game-minecraft-block',
    category: 'gaming',
    prompt: 'Name a Minecraft block or item',
    qualifier: 'Blocks and items that exist in Java or Bedrock Edition up to 1.21.6 (June 2025)',
    groups: {
      textbook: 'Dirt; Stone; Cobblestone; Diamond; Iron ingot|Iron; Gold ingot|Gold; Coal; Wood|Wooden planks|Planks|Oak planks; Sand; Gravel; Crafting table; Furnace; Chest; Torch; TNT; Pickaxe|Diamond pickaxe; Sword|Diamond sword; Bed; Obsidian',
      honours: `Redstone; Emerald; Lapis lazuli|Lapis; Netherite ingot|Netherite; Bookshelf; Anvil; Enchanting table; Brewing stand; Ender pearl; Eye of Ender|Ender eye; Elytra; Totem of Undying|Totem; Trident; Bow; Arrow; Shield;
        Golden apple; Enchanted golden apple|Notch apple; Bucket; Water bucket; Lava bucket; Flint and steel; Glass; Wool; Cactus; Pumpkin; Melon; Hay bale|Hay block; Slime block; Piston; Sticky piston; Hopper; Dispenser; Dropper; Observer; Comparator; Repeater;
        Lever; Button; Pressure plate; Rail|Minecart; Ladder; Door; Fence; Sign; Saddle; Name tag; Spyglass; Compass; Clock; Map; Fishing rod; Beacon; Nether star; Dragon egg; Shulker box; Bone meal|Bonemeal; Wheat; Carrot; Potato; Bread; Cake`,
      rare: `Netherrack; Soul sand; Glowstone; Magma block; Bedrock; End stone; Purpur block; Chorus fruit; Prismarine; Sea lantern; Sponge; Terracotta|Hardened clay; Concrete; Concrete powder; Honey block; Honeycomb; Amethyst shard;
        Tinted glass; Copper ingot|Copper; Lightning rod; Sculk sensor; Sculk shrieker; Sculk catalyst; Calibrated sculk sensor; Deepslate; Tuff; Calcite; Dripstone block; Pointed dripstone; Moss block; Azalea; Glow lichen; Glow berries; Goat horn; Lodestone;
        Respawn anchor; Crying obsidian; Ancient debris; Netherite scrap; Blast furnace; Smoker; Grindstone; Stonecutter; Loom; Cartography table; Fletching table; Smithing table; Lectern; Composter; Barrel; Campfire; Soul campfire; Lantern; Bell; Scaffolding; Target; Crossbow; Firework rocket|Firework`,
      deep: 'Barrier; Structure block; Jigsaw block; Command block; Light block; Debug stick; Knowledge book; Suspicious stew; Suspicious sand; Trial key; Ominous bottle; Mace; Wind charge; Breeze rod; Heavy core; Vault; Trial spawner; Decorated pot; Brush; Pitcher plant; Torchflower; Sniffer egg; Pottery sherd|Pottery shard; Armor trim|Smithing template; Recovery compass; Echo shard; Disc fragment',
      legendary: 'Reinforced deepslate',
    },
    facts: { 'Reinforced deepslate': 'The tough block of the Ancient City vault; it cannot be mined or obtained in normal survival.' },
  },
  {
    id: 'game-chess-champion',
    category: 'gaming',
    prompt: 'Name a World Chess Champion',
    qualifier: 'The 18 undisputed world champions from Steinitz (1886) to Gukesh (2024)',
    closed: 18,
    answers: `
      Wilhelm Steinitz|Steinitz; Emanuel Lasker|Lasker; José Raúl Capablanca|Jose Raul Capablanca|Capablanca; Alexander Alekhine|Alekhine; Max Euwe|Euwe; Mikhail Botvinnik|Botvinnik;
      Vasily Smyslov|Smyslov; Mikhail Tal|Tal; Tigran Petrosian|Petrosian; Boris Spassky|Spassky; Bobby Fischer|Robert Fischer|Fischer@Bobby Fischer; Anatoly Karpov|Karpov;
      Garry Kasparov|Kasparov; Vladimir Kramnik|Kramnik; Viswanathan Anand|Vishy Anand|Anand; Magnus Carlsen|Carlsen; Ding Liren|Ding; Gukesh Dommaraju|D Gukesh|Gukesh D|Gukesh`,
    legendary: ['Max Euwe'],
    facts: { 'Max Euwe': 'A Dutch mathematics teacher who beat Alekhine in 1935 and held the title for two years.' },
  },
  {
    id: 'game-chess-term',
    category: 'gaming',
    prompt: 'Name a chess term',
    qualifier: 'Chess pieces, rules, tactics, board words and ranks',
    groups: {
      textbook: 'King; Queen; Rook|castle; Bishop; Knight; Pawn; Checkmate|mate; Check; Stalemate; Castling; En passant; Board|chessboard',
      honours: `Fork; Pin; Skewer; Gambit; Opening; Middlegame|middle game; Endgame|end game; Promotion|promote|queening; Resign|resignation; Draw; Rank; File; Diagonal; Sacrifice|sac; Blunder; Grandmaster|GM; Tempo; Blitz; Bullet; Rapid;
        Fianchetto; Zugzwang; Discovered check|discovered attack; Perpetual check; Elo|Elo rating; FIDE; Fool's mate; Scholar's mate; Back rank mate|back-rank mate; Square; Move; Capture|take; Time control|clock; Tournament; Notation`,
      rare: `Zwischenzug|intermezzo; Prophylaxis; Battery; Outpost; Passed pawn; Isolated pawn; Doubled pawns; Backward pawn; Pawn structure; Pawn storm; Open file; Half-open file; Weak square; Fortress; Tablebase; Swindle; Desperado; Decoy; Deflection; Overloading;
        Interference; X-ray attack|x-ray; Windmill; Smothered mate; Opposition; Triangulation; Insufficient material; Fifty-move rule; Threefold repetition; Touch-move rule|touch move; Adjournment; Sealed move; Simultaneous exhibition|simul; Candidate master|CM; International master|IM; Woman grandmaster|WGM; Arbiter; Opposite-coloured bishops|opposite colored bishops`,
      deep: 'Mating net; Corresponding squares; Minority attack; Exchange sacrifice; Greek gift; Zwischenschach; Compensation; Initiative; Bind; Rook lift; Pawn break; Passed pawn majority|majority; Queenside; Kingside; Hanging piece|hanging; Skittles; Flag|flagging; Armageddon; Chess clock',
      legendary: 'Lucena position; Philidor position',
    },
    facts: {
      'Lucena position': 'The most famous rook endgame, where the side with the extra pawn builds a bridge to win.',
      'Philidor position': 'A rook endgame drawing technique named after a 1700s French master.',
    },
  },
  {
    id: 'game-board-game',
    category: 'gaming',
    prompt: 'Name a board game',
    qualifier: 'Any board game played with a board, from classic to modern (not video games or card-only games)',
    groups: {
      textbook: 'Chess; Monopoly; Ludo; Snakes and Ladders|Snakes & Ladders; Scrabble; Carrom; Checkers|Draughts; Jenga; Connect Four|Connect 4; Battleship; Clue|Cluedo; Risk; Pictionary; Catan|Settlers of Catan; Life|The Game of Life',
      honours: `Backgammon; Go|Baduk|Weiqi; Othello|Reversi; Mancala; Parcheesi|Pachisi; Sorry!|Sorry; Trouble; Trivial Pursuit; Taboo; Boggle; Twister; Operation; Mouse Trap; Candy Land; Chinese checkers; Ticket to Ride; Carcassonne; Pandemic; Dominion;
        Azul; Codenames; Cranium; Stratego; Diplomacy; Mahjong|Mah-jong|Mahjongg; Shogi; Xiangqi|Chinese chess; Yahtzee; Rummikub; Hotel; Hungry Hungry Hippos; Guess Who|Guess Who?; Tic-tac-toe|noughts and crosses; Dominoes|Dominos; Chaupar|Chausar; Pass the Pigs`,
      rare: `Wingspan; Terraforming Mars; Gloomhaven; Agricola; 7 Wonders|Seven Wonders; Splendor; Dixit; Scotland Yard; Nine men's morris|Morris; Hex; Hive; Blokus; Quoridor; Santorini; Kingdomino; Root; Everdell; Scythe; Cascadia; Patchwork; Betrayal at House on the Hill;
        Arkham Horror; Forbidden Island; Dungeons & Dragons|D&D|Dungeons and Dragons; Warhammer; Axis & Allies; Battleship Galaxies; Kerplunk|KerPlunk; Buckaroo; Pop-up Pirate|Pop Up Pirate; Downfall; Rush Hour; Mastermind; Abalone; Pente; Gomoku; Tak; Lost Cities; Sagrada`,
      deep: 'Senet; Royal Game of Ur|Game of Ur|Ur; Pallanguzhi; Aadu puli attam|Goats and Tigers|Bagh-Chal|Baghchal; Alquerque; Fox and geese; Tablut; Ashta chamma|Chowka bara; Dayakattam|Dayam; Gyan Chauper|Gyan Chaupar|Moksha Patam',
      legendary: 'Hnefatafl|Tafl',
    },
    facts: { Hnefatafl: 'A Viking strategy game where one side defends a king and the other tries to capture him.' },
  },
  {
    id: 'game-card-game',
    category: 'gaming',
    prompt: 'Name a card game',
    qualifier: 'Games played with a deck of playing cards or a dedicated card set (including trading card games)',
    groups: {
      textbook: 'Poker; Rummy; Bridge; Solitaire|Patience; Uno; Blackjack|Twenty-one|21; Go Fish; Snap; Old Maid; War; Teen Patti|Three Card Poker; Hearts; Spades',
      honours: `Court Piece|Rang|Rung; Twenty-Nine|29|28; Bluff|Cheat|BS|I Doubt It; Crazy Eights|Crazy 8s; Gin rummy|Gin; Canasta; Cribbage|Crib; Pinochle; Whist; Euchre; Baccarat; Pontoon; Speed; Spit; Spoons;
        President|Scum|Asshole; Mau Mau; Skat; Memory|Concentration|Pairs; Magic: The Gathering|Magic the Gathering|MTG; Pokémon Trading Card Game|Pokemon cards|Pokémon TCG|Pokemon TCG; Yu-Gi-Oh!|Yu-Gi-Oh|Yugioh; Top Trumps; Happy Families; Donkey; Hanafuda|Hanafuda cards`,
      rare: `Sevens|Fan Tan; Satte Pe Satta|Sat Pe Sat; Oh Hell|Contract Whist; Pitch; Napoleon|Nap; Ombre; Piquet; Bezique; Klondike; Spider solitaire|Spider; FreeCell|Free Cell; Pyramid solitaire|Pyramid; Golf solitaire; Texas Hold'em|Texas Holdem|Hold'em; Omaha;
        Three-card brag|Brag; Faro; Pai gow; Sheepshead; Schafkopf; Durak; Tarot|French tarot; Belote; Briscola; Scopa; Tressette; Cassino|Casino; Slapjack; Beggar My Neighbour|Beggar-my-neighbour; Rook; Dominion|Dominion card game; Exploding Kittens; Dobble|Spot It; Sushi Go!|Sushi Go`,
      deep: 'Mus; Tichu; Dashavatara Ganjifa; Zheng Shangyou|Shangyou; Doudizhu|Dou Dizhu|Fight the Landlord; Tarneeb; Jass; Ulti; Preferans|Preference; Cuarenta; Truco; Tien Len; Big Two|Deuces; Chinese Poker',
      legendary: 'Ganjifa',
    },
    facts: { Ganjifa: 'Traditional circular hand-painted playing cards from India and Persia, once used by Mughal courts.' },
  },
  {
    id: 'game-brawler',
    category: 'gaming',
    prompt: 'Name a Brawl Stars brawler',
    qualifier: 'Playable brawlers in Brawl Stars up to 2025 (the brawler\'s own name)',
    groups: {
      textbook: 'Shelly; Colt; Nita; Bull; Spike; Crow; Leon; El Primo|Primo; Mortis; Poco; Jessie; Brock; Dynamike|Dyna',
      honours: `Bo; Barley; Rico; Darryl; Penny; Carl; Piper; Pam; Frank; Tara; Gene; Max; Sprout; Byron; Squeak; Rosa; Jacky; Bibi; 8-Bit|8 Bit; Emz; Edgar; Stu; Surge; Colette; Amber; Lou; Gus; Bea; Nani; Belle; Griff; Grom; Bonnie; Gale;
        Ash; Lola; Sam; Mandy; Maisie; Hank; Pearl; Chester; Buster; Otis; Janet; Eve; Fang; Meg; Buzz; Sandy; R-T|RT; Willow; Doug; Mico; Charlie; Chuck; Melodie; Lily; Clancy; Moe; Kenji; Juju; Ollie; Lumi; Finx; Jae-yong|Jae Yong; Draco; Cordelius; Mr. P|Mr P; Angelo; Berry; Shade; Larry & Lawrie|Larry and Lawrie|Larry|Lawrie; Ruffs|Colonel Ruffs`,
      rare: 'Kaze; Alli; Mina; Najia; Glowbert',
      legendary: 'Gray; Kit',
    },
    facts: {
      Gray: 'A mythic brawler who can use a portal to pull friends and foes together.',
      Kit: 'A cat brawler who hops onto teammates and can hug enemies off the field.',
    },
  },
  {
    id: 'music-instrument',
    category: 'music',
    prompt: 'Name a musical instrument',
    qualifier: 'Any instrument played by hand, mouth or bow, from any country (not software or the human voice)',
    groups: {
      textbook: 'Piano; Guitar; Violin; Drums|drum kit|drum set; Flute; Trumpet; Saxophone|sax; Keyboard; Harmonium; Tabla; Sitar; Clarinet; Cello; Harp; Xylophone; Ukulele; Recorder; Harmonica|mouth organ; Bass guitar|bass',
      honours: `Trombone; Tuba; French horn|horn; Oboe; Bassoon; Piccolo; Double bass|contrabass|upright bass; Viola; Banjo; Mandolin; Accordion; Bagpipes|bagpipe; Cymbals|cymbal; Triangle; Tambourine; Bongos|bongo; Congas|conga; Maracas; Dholak; Mridangam|mridanga;
        Veena; Santoor; Sarod; Bansuri; Shehnai; Tanpura|tambura; Organ; Synthesizer|synth; Electric guitar; Castanets; Glockenspiel; Marimba; Vibraphone; Timpani|kettle drums; Cornet; Bugle; Didgeridoo; Kazoo; Melodica; Steel drums|steel pan`,
      rare: `Dhol; Damru; Ektara; Dotara; Sarangi; Esraj; Dilruba; Nadaswaram; Ghatam; Kanjira; Morsing; Pakhawaj; Rudra veena; Celtic harp; Lute; Oud; Zither; Dulcimer; Hurdy-gurdy|hurdy gurdy; Balalaika; Bouzouki; Erhu; Pipa; Guzheng; Koto; Shamisen; Shakuhachi; Taiko; Gong; Cowbell|cow bell;
        Washboard; Cajón|Cajon; Djembe; Bodhrán|Bodhran; Panpipes|pan flute; Ocarina; Tin whistle|penny whistle; Concertina; Bandoneon; Theremin; Ondes Martenot; Clavichord; Harpsichord; Celesta; Vuvuzela; Alphorn|alpenhorn; Sousaphone; Euphonium; Flugelhorn; English horn|cor anglais; Contrabassoon|double bassoon`,
      deep: 'Nyckelharpa; Hardanger fiddle; Kora; Mbira|thumb piano|kalimba; Balafon; Talharpa; Serpent; Ophicleide; Glass harmonica|glass armonica; Hang drum|handpan|hang; Waterphone; Igil; Morin khuur|horsehead fiddle; Gamelan; Santur; Ney; Duduk; Kemenche|kemençe; Qanun|kanun; Rebab',
      legendary: 'Ravanahatha',
    },
    facts: { Ravanahatha: 'A bowed fiddle from Rajasthan, said in legend to have been made by the demon king Ravana.' },
  },
  {
    id: 'music-indian-instrument',
    category: 'music',
    prompt: 'Name an Indian musical instrument',
    qualifier: 'Traditional Indian classical or folk instruments (not Western instruments adopted in India)',
    groups: {
      textbook: 'Sitar; Tabla; Harmonium; Veena|vina|saraswati veena; Flute|bansuri; Sarod; Dholak; Mridangam|mridanga; Tanpura|tambura',
      honours: `Santoor; Shehnai; Sarangi; Dhol; Nadaswaram|nagaswaram; Thavil|tavil; Ghatam; Kanjira|kanjeera; Pakhawaj; Ektara; Dotara; Damru; Dilruba; Esraj; Tumbi; Algoza|alghoza; Manjira|manjeera|jhanjh; Chimta; Duff|daf; Nagara|nagada|kettle drum;
         Rudra veena|rudra vina; Vichitra veena|vichitra vina; Bulbul tarang; Jal tarang|jaltarang; Pungi|been; Tutari|turi|turhi`,
      rare: `Morsing|morchang; Kartal|khartal; Ghungroo|ghungru; Surbahar; Swarmandal|surmandal; Gottuvadhyam|chitravina|gotuvadyam; Mohan veena; Sursingar; Taus|mayuri; Venu|venu flute; Kombu|komb; Idakka|edakka; Chenda; Maddalam; Panchavadyam; Ananda lahari|anandalahari; Kinnari veena|kinnari; Shruti box|srutibox|sruti box`,
      deep: 'Pepa; Tiriyo|tiryo; Bhapang|bhapang; Nagphani; Singha|sringa|ranasringa; Ghumot|ghumat; Sambal|sambal; Pamba; Urumi|urumi melam; Dhak; Khol|khol drum; Sarinda; Gogona',
      legendary: 'Kamaicha',
    },
    facts: { Kamaicha: 'A bowed folk fiddle with a goatskin face, played by the Manganiyar musicians of Rajasthan.' },
  },
  {
    id: 'music-percussion',
    category: 'music',
    prompt: 'Name a percussion instrument',
    qualifier: 'Instruments you strike, shake or scrape, from any country (drums, bells, tuned percussion)',
    groups: {
      textbook: 'Drum|drums; Tabla; Snare drum|snare; Bass drum|kick drum; Cymbals|cymbal; Hi-hat|hi hat|high hat; Tambourine; Xylophone; Triangle; Maracas|maraca; Bongos|bongo; Congas|conga; Cowbell|cow bell; Dholak; Drum kit|drum set|drums set',
      honours: `Timpani|kettle drums|kettledrums; Marimba; Glockenspiel; Vibraphone|vibes; Castanets; Djembe; Cajón|Cajon; Gong; Tom-tom|tom tom|toms; Mridangam; Dhol; Damru; Ghatam; Kanjira; Pakhawaj; Chenda; Taiko; Steel drums|steel pan|steelpan;
        Tubular bells|chimes|tubular chimes; Claves; Güiro|Guiro; Woodblock|wood block; Shaker; Rainstick|rain stick; Sleigh bells|jingle bells; Washboard; Tabor`,
      rare: `Khartal|kartal; Manjira|manjeera; Morsing|morchang; Duff|daf; Dhak; Khol; Nagara|nagada; Tumbi; Bodhrán|Bodhran; Tam-tam|tam tam; Timbales|timbale; Agogô|agogo|agogo bells; Cabasa; Bell tree; Flexatone; Ratchet|rattle; Whip|slapstick; Anvil;
        Wind chimes; Kalimba|mbira|thumb piano; Talking drum; Bata drum|batá; Surdo; Tamborim; Pandeiro; Cuica|cuíca; Udu; Hang drum|handpan; Crotales; Celesta; Glass harmonica; Thunder sheet|thunder tube`,
      deep: 'Waterphone; Spoons; Bones|rhythm bones; Bonang; Gender; Kendang|kendhang; Odaiko; Kakko; Shime-daiko|shime daiko; Thavil|tavil; Urumi; Tappu; Parai|thappu',
      legendary: 'Vibraslap',
    },
    facts: { Vibraslap: 'A jawbone-shaped rattle that is struck so its loose teeth buzz, invented in the 1960s.' },
  },
  {
    id: 'music-string-instrument',
    category: 'music',
    prompt: 'Name a string instrument',
    qualifier: 'Instruments whose sound comes from vibrating strings: plucked, bowed or struck (piano and harpsichord count)',
    groups: {
      textbook: 'Guitar; Violin|fiddle; Cello|violoncello; Piano; Sitar; Harp; Ukulele; Veena|vina; Viola; Double bass|contrabass|bass; Banjo; Mandolin; Electric guitar; Bass guitar',
      honours: `Sarod; Santoor; Tanpura|tambura; Sarangi; Esraj; Dilruba; Ektara; Dotara; Lute; Oud; Zither; Dulcimer; Hurdy-gurdy|hurdy gurdy; Balalaika; Bouzouki; Erhu; Pipa; Guzheng; Koto; Shamisen; Harpsichord; Clavichord; Autoharp; Lyre; Cavaquinho; Charango;
        Gottuvadhyam|chitravina; Mohan veena; Rudra veena; Vichitra veena; Swarmandal|surmandal; Surbahar; Sursingar; Taus|mayuri; Kora; Rebab; Viol|viola da gamba; Theorbo; Cittern; Psaltery; Kantele; Biwa; Gayageum|kayagum; Sanxian; Gusle|gusli`,
      rare: `Nyckelharpa; Hardanger fiddle|Hardingfele; Talharpa; Rebec; Baglama|saz|bağlama; Tanbur; Setar; Santur; Qanun|kanun; Rubab; Dutar; Morin khuur|horsehead fiddle; Igil; Gadulka; Kokyū|kokyu; Haegeum; Yangqin; Zhongruan|ruan; Ravanahatha|ravanhatta; Kamaicha; Tumbi;
        Ukelin; Appalachian dulcimer|mountain dulcimer; Pedal steel guitar|steel guitar; Dobro|resonator guitar; Lap steel; Sarinda; Kemenche|kemençe; Tar`,
      deep: 'Cristal Baschet; Chapman Stick|Stick; Harp guitar; Bowed psaltery; Aeolian harp|wind harp; Kithara|cithara; Ngoni|n goni; Valiha; Inanga;',
      legendary: 'Marxophone',
    },
    facts: { Marxophone: 'A fretless zither with spring-hammers that strike its strings, popular in homes in the early 1900s.' },
  },
  {
    id: 'music-orchestra-instrument',
    category: 'music',
    prompt: 'Name an instrument in a symphony orchestra',
    qualifier: 'Instruments in a standard or enlarged Western symphony orchestra (including occasional visitors like the piano and organ)',
    groups: {
      textbook: 'Violin; Viola; Cello; Double bass|contrabass; Flute; Clarinet; Oboe; Bassoon; Trumpet; Trombone; French horn|horn; Tuba; Timpani|kettle drums; Harp; Piano; Cymbals|cymbal; Triangle',
      honours: `Piccolo; English horn|cor anglais; Bass clarinet; Contrabassoon|double bassoon; Bass trombone; Snare drum; Bass drum; Xylophone; Glockenspiel; Tubular bells|chimes; Celesta; Tam-tam|gong; Tambourine; Castanets; Organ; Saxophone|sax; Cornet;
        Euphonium; Marimba; Vibraphone; Harpsichord; Alto flute; E-flat clarinet|Eb clarinet|small clarinet; Piccolo trumpet; Flugelhorn; Wood block|woodblock`,
      rare: `Bass flute; Alto saxophone; Contrabass clarinet; Basset horn; Wagner tuba; Cimbasso; Sarrusophone; Oboe d'amore; Crotales|antique cymbals; Whip|slapstick; Ratchet; Anvil; Sleigh bells; Bell tree; Maracas; Guiro|güiro; Tom-tom; Mandolin; Guitar; Banjo; Accordion; Sousaphone; Ondes Martenot; Theremin`,
      deep: 'Glass harmonica; Thunder sheet; Typewriter; Siren; Cannon; Rain stick; Vibraslap; Heckelphone; Serpent; Ophicleide; Tenor tuba; Contraforte; Octobass',
      legendary: 'Wind machine|aeoliphone',
    },
    facts: { 'Wind machine': 'A drum covered in cloth that is cranked to make a howling wind, written into scores by Strauss and Ravel.' },
  },
  {
    id: 'music-indian-dance',
    category: 'music',
    prompt: 'Name a dance form of India',
    qualifier: 'Classical or folk dance traditions of India, named by their usual name',
    groups: {
      textbook: 'Bharatanatyam|Bharata Natyam|Bharatnatyam; Kathak; Garba; Bhangra; Kuchipudi; Odissi|Orissi; Kathakali; Mohiniyattam; Manipuri|Manipuri dance; Dandiya Raas|Dandiya|Raas; Giddha',
      honours: `Sattriya|Sattriya Nritya; Lavani; Ghoomar|Ghumar; Bihu|Bihu dance; Yakshagana; Chhau|Chau; Kalbelia|Kalbeliya; Koli|Koli dance; Dollu Kunitha|Dollu Kunita; Theyyam; Kummi; Karagattam|Karakattam; Bhavai; Dhamal; Jhumar; Rouf; Dumhal; Lezim|Lezium;
        Veeragase; Pulikali; Kolattam; Perini Thandavam|Perini; Padayani; Thirayattam; Raut Nacha; Cheraw|Bamboo dance; Hojagiri; Bagurumba; Mayilattam|Peacock dance; Oyilattam; Poikkal Kudirai Aattam|Poikkal Kuthirai; Kuthu; Nati`,
      rare: `Dappu; Gotipua; Ghumura; Jawara; Kathi Samu; Sambalpuri dance|Sambalpuri; Chakri; Matki; Terah Tali; Bhand Pather; Dhunuchi dance|Dhunuchi; Baul dance|Baul; Gaudiya Nritya|Gaudiya; Pung Cholom|Pung Cholom dance; Nongkrem; Wangala; Cham dance|Cham; Siddi Dhamal`,
      deep: 'Kikli; Dandi Nritya; Ramman; Tippani; Gaur Maria; Karma; Pandavani; Bidesia; Alkap; Kolkali; Chavittu Nadakam',
      legendary: 'Ottamthullal|Ottan Thullal',
    },
    facts: { Ottamthullal: 'A satirical Kerala solo dance-poetry performance created by the poet Kunchan Nambiar.' },
  },
  {
    id: 'music-world-dance',
    category: 'music',
    prompt: 'Name a style of dance',
    qualifier: 'Dance styles or ballroom dances from anywhere in the world (not specific routines)',
    groups: {
      textbook: 'Ballet; Hip hop|hip-hop; Salsa; Tango; Waltz; Breakdance|breakdancing|breaking|b-boying; Bharatanatyam; Bhangra; Contemporary; Jazz; Tap|tap dance; Folk dance|folk',
      honours: `Flamenco; Samba; Cha-cha|cha-cha-cha|cha cha; Rumba; Jive; Foxtrot; Quickstep; Paso doble|pasodoble; Bachata; Merengue; Lyrical; Belly dance|belly dancing|raqs sharqi; Polka; Square dance; Line dance|line dancing; Morris dance; Hula; Haka; Capoeira;
        Kizomba; Lindy Hop|lindy; Swing|swing dance; Charleston; Mambo; Bolero; Fandango; Polonaise; Mazurka; Minuet; Can-can|cancan; Twist; Krumping; Popping; Locking; Voguing|vogue; Disco; Ballroom; Garba; Kathak; Kuchipudi; Odissi`,
      rare: `Zouk; Lambada; Forró|Forro; Cumbia; Reggaeton|perreo; Dancehall; Afrobeat dance|Afro dance; Gumboot dance|gumboot; Pantsula; Tinikling; Kathakali; Irish dance|Irish step dance|Riverdance; Ceilidh; Highland dance|Highland fling; Clogging; Sevillanas; Jota; Sardana; Tarantella;
        Hora; Kolo; Czardas|csardas; Hopak; Kazachok|kazatsky; Lezginka; Contra dance|contradance; Cakewalk; Shag; Balboa; Boogie-woogie|boogie woogie; Jitterbug; Hustle; Mashed potato; Watusi; Funky chicken; Jerk; Floss; Dab`,
      deep: ' Dabke|debka; Khon; Legong; Kecak; Barong dance|barong; Tanoura|tanoura dance; Whirling dervish|sema; Bon Odori|Bon dance; Butoh; Kabuki dance|nihon buyo|Buyo; Hakka; Maypole dance|maypole; Sword dance; Cueca; Joropo; Huayno; Marinera; Candombe; Maculelê|maculele',
      legendary: 'Sirtaki|syrtaki',
    },
    facts: { Sirtaki: 'A Greek-style line dance created for the 1964 film Zorba the Greek.' },
  },
  {
    id: 'music-genre',
    category: 'music',
    prompt: 'Name a genre of music',
    qualifier: 'Music genres and styles from anywhere in the world (not individual bands or songs)',
    strip: ['music'],
    groups: {
      textbook: 'Pop; Rock; Hip hop|hip-hop|rap; Jazz; Blues; Country; Classical; Folk; Reggae; Heavy metal|metal; Punk|punk rock; EDM|electronic|electronic dance music; R&B|rhythm and blues|rnb; Soul; Disco; Bollywood|film music; K-pop|kpop; Indie',
      honours: `Funk; House; Techno; Ska; Ghazal; Qawwali; Bhajan; Carnatic|Carnatic music; Hindustani|Hindustani classical; Opera; Gospel; Latin; Alternative|alternative rock; Grunge; Trap; Lo-fi|lofi; Dubstep; Drum and bass|DnB; Trance; Ambient; Synthwave;
        Reggaeton; Bossa nova; Flamenco; Fado; Afrobeat; Bhangra; Hard rock; Progressive rock|prog rock; Psychedelic rock; Garage rock; New wave; Emo; Hardcore; Thrash metal; Death metal; Black metal; J-pop|jpop; Swing; Bebop; Dixieland|Dixieland jazz;
        Rockabilly; Bluegrass; Motown; Electro|electro music; Garage|UK garage; Grime; Drill; Dancehall; Calypso; Soca; Salsa; Tango; Cumbia; Samba; Merengue; Bachata; Tejano; Mariachi; Polka; Lavani; Sufi|Sufi music; Folk rock; Soft rock; Pop rock; Pop punk; Britpop; Shoegaze; Industrial; Post-rock; Math rock`,
      rare: `Dream pop; Synth-pop|synthpop; Electropop; Italo disco; Eurodance; Hi-NRG; Big beat; Breakbeat; Jungle; Hardstyle; Gabber; Happy hardcore; Chillwave; Vaporwave; Future bass; Phonk; Hyperpop; Bedroom pop; City pop; Mandopop; Cantopop; Enka; Gamelan;
        Dhrupad; Khayal|khyal; Thumri; Tappa; Dadra; Kirtan; Abhang; Natya Sangeet; Rabindra Sangeet|Tagore songs; Baul; Bhavageethe|Sugama Sangeetha|Bhavageete; Sopana Sangeetham; Harikatha; Villu Pattu; Carnatic fusion|Indian fusion; Hindi pop|Indipop|Indi-pop; Dappankuthu|Gaana; Kuthu`,
      deep: 'Juke; Footwork; Baile funk|funk carioca; Highlife; Juju; Mbalax; Soukous; Rai|raï; Chaabi; Rebetiko; Klezmer; Gypsy jazz|Manouche; Throat singing|Tuvan throat singing; Kwaito; Gqom; Amapiano; Sea shanty|shanty; Gregorian chant|plainsong; Madrigal; Barbershop',
      legendary: 'Zydeco',
    },
    facts: { Zydeco: 'Accordion and rubboard dance music from the Creole communities of southwest Louisiana.' },
  },
  {
    id: 'music-western-composer',
    category: 'music',
    prompt: 'Name a Western classical composer',
    qualifier: 'Composers of European or American classical music, from the Middle Ages to today',
    groups: {
      textbook: 'Mozart|Wolfgang Amadeus Mozart; Beethoven|Ludwig van Beethoven; Bach|Johann Sebastian Bach|J.S. Bach; Chopin|Frédéric Chopin|Frederic Chopin; Tchaikovsky|Pyotr Ilyich Tchaikovsky|Tchaikovski; Vivaldi|Antonio Vivaldi; Handel|George Frideric Handel; Haydn|Joseph Haydn; Schubert|Franz Schubert; Brahms|Johannes Brahms',
      honours: `Liszt|Franz Liszt; Debussy|Claude Debussy; Ravel|Maurice Ravel; Wagner|Richard Wagner; Verdi|Giuseppe Verdi; Puccini|Giacomo Puccini; Rossini|Gioachino Rossini; Mendelssohn|Felix Mendelssohn; Schumann|Robert Schumann; Dvořák|Dvorak|Antonín Dvořák;
        Grieg|Edvard Grieg; Sibelius|Jean Sibelius; Stravinsky|Igor Stravinsky; Prokofiev|Sergei Prokofiev; Shostakovich|Dmitri Shostakovich; Rachmaninoff|Rachmaninov|Sergei Rachmaninoff; Mahler|Gustav Mahler; Johann Strauss|Strauss; Bizet|Georges Bizet;
        Saint-Saëns|Saint-Saens|Camille Saint-Saëns; Satie|Erik Satie; Berlioz|Hector Berlioz; Elgar|Edward Elgar; Holst|Gustav Holst; Gershwin|George Gershwin; Bernstein|Leonard Bernstein; Pachelbel|Johann Pachelbel; Paganini|Niccolò Paganini; Mussorgsky|Modest Mussorgsky; Rimsky-Korsakov|Nikolai Rimsky-Korsakov`,
      rare: `Copland|Aaron Copland; Barber|Samuel Barber; Bartók|Bartok|Béla Bartók; Kodály|Kodaly|Zoltán Kodály; Janáček|Janacek|Leoš Janáček; Smetana|Bedřich Smetana; Borodin|Alexander Borodin; Glinka|Mikhail Glinka; Monteverdi|Claudio Monteverdi; Purcell|Henry Purcell; Telemann|Georg Philipp Telemann; Scarlatti|Domenico Scarlatti;
        Palestrina|Giovanni Pierluigi da Palestrina; Gluck|Christoph Willibald Gluck; Offenbach|Jacques Offenbach; Fauré|Faure|Gabriel Fauré; Franck|César Franck|Cesar Franck; Messiaen|Olivier Messiaen; Cage|John Cage; Philip Glass|Glass; Steve Reich|Reich; Britten|Benjamin Britten;
        Walton|William Walton; Vaughan Williams|Ralph Vaughan Williams; Schoenberg|Arnold Schoenberg; Berg|Alban Berg; Webern|Anton Webern; Orff|Carl Orff; Hindemith|Paul Hindemith; Weill|Kurt Weill; Albinoni|Tomaso Albinoni; Corelli|Arcangelo Corelli; Rameau|Jean-Philippe Rameau; Couperin|François Couperin;
        Bruckner|Anton Bruckner; Richard Strauss; Ives|Charles Ives; Ligeti|György Ligeti; Penderecki|Krzysztof Penderecki; Pärt|Part|Arvo Pärt; Górecki|Gorecki|Henryk Górecki; Boulez|Pierre Boulez; Stockhausen|Karlheinz Stockhausen`,
      deep: 'Tallis|Thomas Tallis; Byrd|William Byrd; Dowland|John Dowland; Josquin des Prez|Josquin; Machaut|Guillaume de Machaut; Dufay|Guillaume Dufay; Ockeghem|Johannes Ockeghem; Gesualdo|Carlo Gesualdo; Lully|Jean-Baptiste Lully; Buxtehude|Dietrich Buxtehude; Biber|Heinrich Ignaz Franz Biber; Zelenka|Jan Dismas Zelenka; Boccherini|Luigi Boccherini; Salieri|Antonio Salieri; Clara Schumann; Fanny Mendelssohn|Fanny Hensel; Amy Beach; Florence Price; Lili Boulanger; Nadia Boulanger; Ethel Smyth; Cécile Chaminade|Cecile Chaminade; Erwin Schulhoff|Schulhoff; Alkan|Charles-Valentin Alkan; Medtner|Nikolai Medtner; Scriabin|Alexander Scriabin; Glazunov|Alexander Glazunov; Khachaturian|Aram Khachaturian',
      legendary: 'Hildegard von Bingen|Hildegard of Bingen|Hildegard',
    },
    facts: { 'Hildegard von Bingen': 'A 12th-century German abbess whose chants are some of the oldest music we can credit to a named woman.' },
  },
  {
    id: 'music-playback-singer',
    category: 'music',
    prompt: 'Name an Indian playback singer',
    qualifier: 'Singers who have sung in Indian films, in any language',
    groups: {
      textbook: 'Lata Mangeshkar|Lata; Arijit Singh|Arijit; Shreya Ghoshal|Shreya; Sonu Nigam|Sonu; Kishore Kumar|Kishore; Mohammed Rafi|Rafi|Md Rafi; Asha Bhosle|Asha; A. R. Rahman|AR Rahman|Rahman; Neha Kakkar|Neha; Sunidhi Chauhan|Sunidhi; Udit Narayan|Udit',
      honours: `Alka Yagnik|Alka; Kumar Sanu; Mukesh; K. J. Yesudas|Yesudas|KJ Yesudas; S. P. Balasubrahmanyam|SPB|Balasubrahmanyam|S P Balasubramaniam; K. S. Chithra|Chithra|KS Chithra; Hariharan; Shankar Mahadevan; Sukhwinder Singh; Mika Singh; Shaan; KK|Krishnakumar Kunnath; Armaan Malik; Jubin Nautiyal; Badshah;
        Yo Yo Honey Singh|Honey Singh; Darshan Raval; B Praak; Anirudh Ravichander|Anirudh; Sid Sriram; Chinmayi|Chinmayi Sripaada; Vijay Prakash; Haricharan; Karthik; Palak Muchhal; Shilpa Rao; Neeti Mohan; Harshdeep Kaur; Sadhana Sargam; Anuradha Paudwal; Kavita Krishnamurthy; Usha Uthup; Kailash Kher; Mohit Chauhan; Papon; Benny Dayal; Javed Ali`,
      rare: `Manna Dey; Hemant Kumar; Talat Mahmood; Geeta Dutt|Geeta Roy; Suman Kalyanpur; Sulakshana Pandit; Alisha Chinai; Tulsi Kumar; Jonita Gandhi; Dhvani Bhanushali; Asees Kaur; Payal Dev; Monali Thakur; Vishal Mishra; S. Janaki|Janaki; P. Susheela|Susheela; Vani Jairam; Jayachandran|P. Jayachandran;
        Mano; Unni Menon; Srinivas; Ranjith; Sujatha Mohan|Sujatha; Swarnalatha; Shweta Mohan; Madhu Balakrishnan; G. Venugopal|Venugopal; M. G. Sreekumar|Sreekumar; Vijay Yesudas; Rajesh Krishnan; Vasundhara Das; Sanjeev Abhyankar; Bhupinder Singh; Pankaj Udhas; Jagjit Singh; Chitra Singh`,
      deep: 'Zohrabai Ambalewali|Zohrabai; Amirbai Karnataki; Surendranath; K. L. Saigal|Saigal|Kundan Lal Saigal; Pankaj Mullick; Parul Ghosh; Rajkumari Dubey; Noor Jehan; Surraiya|Suraiyya; Mubarak Begum; Sudha Malhotra; Mahendra Kapoor; Jaspinder Narula; Sharda Sinha; Kavita Seth; Mamta Sharma',
      legendary: 'Shamshad Begum',
    },
    facts: { 'Shamshad Begum': 'One of the first major female playback singers of Hindi cinema, a star of the 1940s with a deep, folk-tinged voice.' },
  },
  {
    id: 'music-bollywood-composer',
    category: 'music',
    prompt: 'Name a Hindi film music composer',
    qualifier: 'Composers or composer duos who have scored Hindi (Bollywood) films',
    groups: {
      textbook: 'A. R. Rahman|AR Rahman|Rahman; R. D. Burman|RD Burman|Pancham; S. D. Burman|SD Burman|Sachin Dev Burman; Pritam; Laxmikant-Pyarelal|Laxmikant Pyarelal|LP; Shankar-Ehsaan-Loy|SEL; Vishal-Shekhar|Vishal Shekhar; Amit Trivedi; Anu Malik; Himesh Reshammiya',
      honours: `Shankar-Jaikishan|Shankar Jaikishan; Kalyanji-Anandji|Kalyanji Anandji; Naushad; Madan Mohan; O. P. Nayyar|OP Nayyar; Khayyam; Roshan; Salil Chowdhury|Salil Choudhury; C. Ramchandra|Ramchandra; Nadeem-Shravan|Nadeem Shravan; Jatin-Lalit|Jatin Lalit;
        Anand-Milind|Anand Milind; Bappi Lahiri|Bappi Da; Rajesh Roshan; Ravindra Jain; Sajid-Wajid|Sajid Wajid; Vishal Bhardwaj; Salim-Sulaiman|Salim Sulaiman; Ismail Darbar; Anand Raj Anand; Sachin-Jigar|Sachin Jigar; Mithoon; Tanishk Bagchi; Amaal Mallik; Ajay-Atul|Ajay Atul;
        Sandesh Shandilya; Shantanu Moitra; Sneha Khanwalkar; Ravi|Ravi Shankar Sharma; Hemant Kumar; Jaidev; Ghulam Mohammed; Sudhir Phadke; Vasant Desai; Anil Biswas; Sardar Malik; Chitragupta; Hansraj Behl`,
      rare: `Ram Sampath; Monty Sharma; Mithun; Sohail Sen; Meet Bros|Meet Brothers; Rochak Kohli; Jeet Gannguli|Jeet Ganguly; Pranaay; Kaushik-Guddu|Kaushik Guddu; Shiv-Hari|Shiv Hari; Bhappi Sonu; Uttam Singh; Dilip Sen-Sameer Sen|Dilip Sen; Roop Kumar Rathod; Bhupen Hazarika; Raamlaxman|Ram Laxman;
        N. Dutta|Datta Naik; Clinton Cerejo; Vishal Dadlani; Ankit Tiwari; Daboo Malik; Aadesh Shrivastava; Amar-Utpal|Amar Utpal; Vanraj Bhatia`,
      deep: 'Kanu Roy; Sapan-Jagmohan|Sapan Jagmohan; Bipin-Babul|Bipin Babul; Hridaynath Mangeshkar; Ghulam Haider; Husnlal-Bhagatram|Husnlal Bhagatram',
      legendary: 'Usha Khanna',
    },
    facts: { 'Usha Khanna': 'One of the first and few women composers in Hindi cinema, active from the late 1950s.' },
  },
  {
    id: 'music-indian-classical-musician',
    category: 'music',
    prompt: 'Name an Indian classical musician',
    qualifier: 'Famous Hindustani or Carnatic vocalists and instrumentalists (not dancers or film singers)',
    groups: {
      textbook: 'Ravi Shankar|Pandit Ravi Shankar|Pt. Ravi Shankar; Zakir Hussain|Ustad Zakir Hussain; M. S. Subbulakshmi|MS Subbulakshmi|M.S. Subbulakshmi|MS Amma; Bismillah Khan|Ustad Bismillah Khan; Hariprasad Chaurasia|Pandit Hariprasad Chaurasia; Bhimsen Joshi|Pandit Bhimsen Joshi; Tansen; Amjad Ali Khan|Ustad Amjad Ali Khan; Shivkumar Sharma|Pandit Shivkumar Sharma',
      honours: `Ali Akbar Khan|Ustad Ali Akbar Khan; Kishori Amonkar; Pandit Jasraj|Jasraj; Vilayat Khan|Ustad Vilayat Khan; Allah Rakha|Ustad Allah Rakha; Rashid Khan|Ustad Rashid Khan; Girija Devi; Begum Akhtar; Mallikarjun Mansur; Gangubai Hangal; Bade Ghulam Ali Khan|Ustad Bade Ghulam Ali Khan;
        Amir Khan|Ustad Amir Khan; Anoushka Shankar; Shujaat Khan|Ustad Shujaat Khan; Nikhil Banerjee|Pandit Nikhil Banerjee; Kishan Maharaj; Ajoy Chakraborty; Balamuralikrishna|M. Balamuralikrishna|Dr. M. Balamuralikrishna; Lalgudi Jayaraman; T. N. Krishnan|TN Krishnan; Semmangudi Srinivasa Iyer|Semmangudi;
        D. K. Pattammal|DK Pattammal; M. L. Vasanthakumari|ML Vasanthakumari; T. M. Krishna|TM Krishna; Sudha Ragunathan; Bombay Jayashri|Jayashri; Sanjay Subrahmanyan|Sanjay Subramanyan; Kadri Gopalnath; U. Srinivas|Mandolin Srinivas|Mandolin U. Srinivas|Mandolin Shrinivas; Palghat Mani Iyer|Mani Iyer`,
      rare: `Imrat Khan|Ustad Imrat Khan; Debu Chaudhuri; Budhaditya Mukherjee; Sultan Khan|Ustad Sultan Khan; Shahid Parvez; Venkatesh Kumar; Ulhas Kashalkar; Rakesh Chaurasia; Rajan and Sajan Mishra|Rajan Mishra|Sajan Mishra; Chhannulal Mishra; Prabha Atre; Veena Sahasrabuddhe; Parveen Sultana; Shubha Mudgal;
        Chembai Vaidyanatha Bhagavatar|Chembai; K. V. Narayanaswamy|KV Narayanaswamy; Umayalpuram Sivaraman; Ravikiran|N. Ravikiran; Nithyashree Mahadevan|Nithyasree Mahadevan; Shashank Subramanyam|Shashank; Mysore Manjunath; Mysore Nagaraj; Emani Sankara Sastry; Doreswamy Iyengar; R. K. Srikantan|RK Srikantan;
        Annapurna Devi; Ustad Faiyaz Khan|Faiyaz Khan; Abdul Karim Khan|Ustad Abdul Karim Khan; Omkarnath Thakur|Pandit Omkarnath Thakur; Vishnu Digambar Paluskar|Paluskar; Vinayak Rao Patwardhan; Pannalal Ghosh|Pandit Pannalal Ghosh; Kumar Gandharva`,
      deep: 'Pandit Ramnarayan|Ramnarayan; Pandit V. G. Jog|V. G. Jog; Pandit Samta Prasad|Samta Prasad; Ustad Vilayat Hussain Khan; Ustad Ghulam Mustafa Khan|Ghulam Mustafa Khan; T. R. Mahalingam|Mali; N. Ramani; Mudicondan Venkatarama Iyer; Ariyakudi Ramanuja Iyengar|Ariyakudi; Veena Dhanammal|Dhanammal',
      legendary: 'Mysore Vasudevacharya',
    },
    facts: { 'Mysore Vasudevacharya': 'A Carnatic composer and court musician of Mysore who wrote in Telugu and Kannada as well as Sanskrit.' },
  },
  {
    id: 'music-term',
    category: 'music',
    prompt: 'Name a musical term',
    qualifier: 'Terms used to read or describe music: tempo, dynamics, technique and theory words (not instrument names)',
    groups: {
      textbook: 'Tempo; Crescendo; Forte; Piano; Allegro; Adagio; Octave; Scale; Chord; Melody; Harmony; Rhythm; Beat; Pitch; Note; Staccato; Legato',
      honours: `Diminuendo|decrescendo; Mezzo forte|mf; Mezzo piano|mp; Fortissimo|ff; Pianissimo|pp; Andante; Presto; Largo; Lento; Moderato; Vivace; Pizzicato; Arpeggio; Cadenza; Coda; Da capo|DC; Dal segno|DS; Fine; Fermata; Glissando; Ritardando|rit|ritard; Accelerando|accel; Rubato;
        Sforzando|sfz; Tremolo; Vibrato; Trill; Interval; Key; Bar|measure; Time signature; Clef; Sharp; Flat; Natural; Semitone|half step; Tone|whole step; Major; Minor; Tonic; Dominant; Syncopation; Counterpoint; Dolce; A cappella|acappella; Solo; Tutti; Ostinato; Modulation; Cantabile; Marcato; Tenuto`,
      rare: `Subdominant; Mediant; Leading note|leading tone; Supertonic; Submediant; Consonance; Dissonance; Cadence; Resolution; Inversion; Transposition|transpose; Sotto voce; Con brio; Maestoso; Scherzando; Grazioso; Agitato; Smorzando; Morendo; Subito; Divisi; Arco; Con sordino|muted|mute; Senza sordino; Volti subito;
        Loco; Ottava|8va; Mordent; Appoggiatura; Acciaccatura|grace note; Portamento; Fugue; Canon; Motif|motive; Theme; Variation; Sequence; Pedal point|pedal note; Drone; Chromatic; Diatonic; Pentatonic; Enharmonic; Tessitura; Timbre; Dynamics; Articulation; Phrase; Cresc.|cresc; Dim.|dim; Tacet; Attacca; Segue; Alla breve|cut time; Largamente; Allargando; Stringendo; Giocoso; Con fuoco; Con moto; Poco a poco; Meno mosso; Più mosso|piu mosso`,
      deep: 'Sul ponticello; Sul tasto; Flautando; Spiccato; Ricochet; Martelé|martele; Détaché|detache; Tranquillo; Misterioso; Pesante; Sostenuto; Sempre; Niente; Perdendosi; Calando; Rinforzando|rfz; Quasi; Ad libitum|ad lib; Ritenuto; Tempo primo|Tempo I; Colla voce; Alla marcia; Anacrusis|upbeat|pickup',
      legendary: 'Col legno',
    },
    facts: { 'Col legno': 'A string technique where players tap or draw the wood of the bow, not the hair, across the strings.' },
  },
  {
    id: 'music-guitar-part',
    category: 'music',
    prompt: 'Name a part of a guitar',
    qualifier: 'Parts of an acoustic, classical or electric guitar (not accessories like picks or capos)',
    groups: {
      textbook: 'Body; Neck; Strings|string; Fretboard|fingerboard; Frets|fret; Headstock|head; Tuning pegs|tuning machines|machine heads|tuners|pegs; Bridge; Soundhole|sound hole; Pickups|pickup',
      honours: `Nut; Saddle; Pickguard|scratchplate|scratch plate; Volume knob|volume control|volume; Tone knob|tone control|tone; Pickup selector|selector switch|pickup switch; Whammy bar|tremolo arm|vibrato arm|tremolo bar; Output jack|jack|input jack; Strap button|strap pin|strap peg;
        Truss rod; Fret markers|position markers|inlays|inlay|dots; Binding; Heel; Rosette; Bracing|braces; Top|soundboard; Back; Sides|ribs; Waist; Bout|upper bout|lower bout; Cutaway; Tailpiece; Bridge pins|bridge pin; Humbucker; Single-coil|single coil`,
      rare: `Neck joint; Neck pickup; Bridge pickup; Middle pickup; Control cavity|control plate; Trem block|tremolo block; Tremolo springs|trem springs; Spring claw; String tree|string retainer|string guide; Locking nut; Floyd Rose; Fret wire|fretwire; Fret end; Fretboard radius; Scale length; Neck relief;
        Truss rod cover; Headstock logo|logo; Tuner buttons; Tuner bushings; Neck plate; Neck heel; Body binding; Purfling; Tone bars; X-bracing|X bracing; Lining; End pin|endpin; Armrest|arm contour|forearm bevel|belly cut; Thumb rest`,
      deep: 'Piezo pickup|piezo; Preamp|pre-amp; Coil split; Blend knob; Phase switch; Fret slot; Nut slot; Bone saddle|saddle slot; Scoop|scooped cutaway; Pickup cover; Pickup ring; Neck block|tail block; Dot inlay|block inlay; Abalone inlay; Side dots',
      legendary: 'Kerfing',
    },
    facts: { Kerfing: 'Notched wooden strips glued inside an acoustic guitar to join the sides to the top and back.' },
  },
  {
    id: 'music-notation-symbol',
    category: 'music',
    prompt: 'Name a symbol or element of written music',
    qualifier: 'Things you can see on a printed music score: clefs, notes, rests, signs and markings',
    groups: {
      textbook: 'Treble clef|G clef; Bass clef|F clef; Staff|stave|staves; Note; Rest; Sharp; Flat; Natural; Bar line|barline|bar; Time signature; Key signature; Clef; Whole note|semibreve; Half note|minim; Quarter note|crotchet; Eighth note|quaver',
      honours: `Alto clef|C clef; Ledger line|leger line; Double bar line|double barline|double bar; Repeat sign|repeat; Accidental; Note head|notehead; Stem; Flag|tail; Beam; Dot|dotted note; Tie; Slur; Sixteenth note|semiquaver; Thirty-second note|demisemiquaver; Sixty-fourth note|hemidemisemiquaver;
        Breve; Fermata|pause; Accent; Staccato dot|staccato; Tenuto; Trill; Segno; Coda sign|coda; Crescendo hairpin|hairpin|crescendo; Decrescendo|diminuendo; Brace; Bracket; Triplet|tuplet; Grace note; Double sharp; Double flat; Tempo marking|metronome mark|metronome marking; Dynamic marking|dynamics`,
      rare: `Tenor clef; Mezzo-soprano clef; Soprano clef; Baritone clef; Percussion clef|neutral clef; Octave clef|8va clef; Whole rest|semibreve rest; Half rest|minim rest; Quarter rest|crotchet rest; Eighth rest|quaver rest; Multi-measure rest|multi-bar rest|multibar rest; Courtesy accidental|cautionary accidental;
        Volta bracket|first and second endings|volta; Repeat bar|repeat bars|repeat dots; Da capo marking|D.C.; Dal segno marking|D.S.; Mordent; Turn; Appoggiatura; Acciaccatura; Arpeggio sign|rolled chord|wavy line; Glissando line|gliss; Harmonic symbol|harmonic; Pedal marking|pedal; Marcato accent|marcato; Sforzando sign;
        Staccatissimo|wedge; Caesura|railroad tracks|breath mark; Octave sign|ottava|8va; Cue note|cue-size note; Lyrics; Chord symbol|chord name; Fingering|finger numbers; Bowing marks|bowing; Tablature|tab`,
      deep: 'Comma|breath comma; Slash notation|rhythm slashes; Neume; Tuplet bracket; Grand staff|great stave; System; Rehearsal mark|rehearsal letter; Tremolo slashes|tremolo strokes; Fall; Doit; Scoop sign; Shake; Plop',
      legendary: 'Ossia',
    },
    facts: { Ossia: 'A small extra staff printed above the main one to offer an easier or alternative way to play a passage.' },
  },
];
