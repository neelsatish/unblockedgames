module.exports = [
  {
    id: 'ent-pokemon-gen1',
    category: 'entertainment',
    prompt: 'Name one of the original 151 Pokémon',
    qualifier: 'Generation I, from Bulbasaur (#1) to Mew (#151)',
    closed: 151,
    groups: {
      textbook: 'Pikachu; Charizard; Bulbasaur; Squirtle; Charmander; Mewtwo; Mew; Eevee; Snorlax; Jigglypuff; Gengar; Psyduck; Meowth; Magikarp; Gyarados',
      honours: `Dragonite; Lapras; Ditto; Blastoise; Venusaur; Raichu; Onix; Geodude; Machamp; Alakazam; Abra; Kadabra; Arcanine; Growlithe;
        Vulpix; Ninetales; Clefairy; Butterfree; Caterpie; Weedle; Pidgey; Rattata; Zubat; Golbat; Articuno; Zapdos; Moltres; Lickitung;
        Mr. Mime|Mr Mime; Cubone; Marowak; Slowpoke; Poliwag; Oddish; Bellsprout; Diglett; Dugtrio; Ekans; Arbok; Sandshrew;
        Nidoran (female)|Nidoran female|female Nidoran|Nidoran f|Nidoran; Nidoran (male)|Nidoran male|male Nidoran|Nidoran m|Nidoran;
        Ponyta; Rapidash; Magnemite; Voltorb; Electrode; Koffing; Weezing; Haunter; Gastly; Hitmonlee; Hitmonchan; Scyther; Jynx;
        Electabuzz; Magmar; Pinsir; Tauros; Kangaskhan; Starmie; Staryu; Horsea; Seadra; Goldeen; Seaking; Krabby; Kingler; Shellder;
        Cloyster; Tentacool; Tentacruel; Aerodactyl; Kabuto; Omanyte; Porygon; Jolteon; Vaporeon; Flareon; Dratini; Dragonair`,
      rare: `Ivysaur; Charmeleon; Wartortle; Metapod; Beedrill; Pidgeot; Raticate; Sandslash; Nidoking; Nidoqueen; Wigglytuff; Golduck;
        Machop; Machoke; Golem; Slowbro; Magneton; Farfetch'd|Farfetchd; Grimer; Muk; Hypno; Drowzee; Exeggutor; Rhydon; Chansey;
        Seel; Dewgong; Mankey; Primeape; Poliwrath; Victreebel; Vileplume; Kabutops; Omastar; Doduo; Persian`,
      deep: `Kakuna; Pidgeotto; Spearow; Fearow; Nidorina; Nidorino; Clefable; Gloom; Paras; Parasect; Venonat; Venomoth;
        Poliwhirl; Weepinbell; Graveler; Dodrio; Exeggcute; Rhyhorn`,
      legendary: 'Tangela',
    },
    facts: { Tangela: "A tangle of blue vines; nobody has ever seen what's underneath." },
  },
  {
    id: 'ent-minecraft-mob',
    facts: { Illusioner: 'Coded into the game but never spawns naturally; you can only summon it with commands.' },
    category: 'entertainment',
    prompt: 'Name a Minecraft mob',
    qualifier: 'Mobs in Java or Bedrock Edition up to version 1.21.6 (June 2025)',
    groups: {
      textbook: 'Zombie; Skeleton; Creeper; Spider; Enderman; Pig; Cow; Sheep; Chicken; Villager',
      honours: `Iron Golem; Wolf|dog; Cat; Horse; Slime; Witch; Ghast; Blaze; Wither; Ender Dragon|dragon; Zombified Piglin|Zombie Pigman|pigman;
        Piglin; Magma Cube; Wither Skeleton; Cave Spider; Silverfish; Shulker; Guardian; Drowned; Phantom; Pillager; Warden; Axolotl;
        Bee; Fox; Panda; Parrot; Llama; Squid; Wandering Trader; Snow Golem|snowman; Bat; Mooshroom|mushroom cow; Allay; Frog; Goat; Dolphin; Turtle`,
      rare: `Elder Guardian; Husk; Stray; Vindicator; Evoker; Vex; Ravager; Hoglin; Strider; Endermite; Zombie Villager; Donkey; Mule;
        Ocelot; Rabbit; Polar Bear; Glow Squid; Cod; Salmon; Pufferfish; Tropical Fish; Tadpole; Camel; Sniffer; Piglin Brute;
        Skeleton Horse; Armadillo; Breeze; Trader Llama`,
      deep: 'Zoglin; Zombie Horse; Bogged; Creaking; Happy Ghast|ghastling; Giant',
      legendary: 'Illusioner',
    },
  },
  {
    id: 'ent-disney-animated',
    category: 'entertainment',
    prompt: 'Name a Walt Disney Animation Studios feature film',
    qualifier: 'Released 1937–2024. Pixar films and live-action remakes do not count.',
    closed: 63,
    answers: `
      Snow White and the Seven Dwarfs|Snow White@Snow White and the Seven Dwarfs (1937 film); Pinocchio@Pinocchio (1940 film); Fantasia@Fantasia (1940 film);
      Dumbo; Bambi; Saludos Amigos; The Three Caballeros; Make Mine Music; Fun and Fancy Free; Melody Time;
      The Adventures of Ichabod and Mr. Toad|Ichabod and Mr Toad; Cinderella@Cinderella (1950 film); Alice in Wonderland@Alice in Wonderland (1951 film);
      Peter Pan@Peter Pan (1953 film); Lady and the Tramp; Sleeping Beauty@Sleeping Beauty (1959 film); One Hundred and One Dalmatians|101 Dalmatians;
      The Sword in the Stone@The Sword in the Stone (film); The Jungle Book@The Jungle Book (1967 film); The Aristocats|Aristocats;
      Robin Hood@Robin Hood (1973 film); The Many Adventures of Winnie the Pooh; The Rescuers; The Fox and the Hound;
      The Black Cauldron@The Black Cauldron (film); The Great Mouse Detective; Oliver & Company|Oliver and Company;
      The Little Mermaid@The Little Mermaid (1989 film); The Rescuers Down Under; Beauty and the Beast@Beauty and the Beast (1991 film);
      Aladdin@Aladdin (1992 Disney film); The Lion King|Lion King; Pocahontas@Pocahontas (1995 film); The Hunchback of Notre Dame@The Hunchback of Notre Dame (1996 film);
      Hercules@Hercules (1997 film); Mulan@Mulan (1998 film); Tarzan@Tarzan (1999 film); Fantasia 2000; Dinosaur@Dinosaur (2000 film);
      The Emperor's New Groove|Emperors New Groove; Atlantis: The Lost Empire|Atlantis; Lilo & Stitch|Lilo and Stitch; Treasure Planet; Brother Bear;
      Home on the Range@Home on the Range (2004 film); Chicken Little@Chicken Little (2005 film); Meet the Robinsons; Bolt@Bolt (2008 film);
      The Princess and the Frog; Tangled; Winnie the Pooh@Winnie the Pooh (2011 film); Wreck-It Ralph|Wreck It Ralph; Frozen@Frozen (2013 film);
      Big Hero 6@Big Hero 6 (film); Zootopia|Zootropolis; Moana@Moana (2016 film); Ralph Breaks the Internet|Wreck-It Ralph 2;
      Frozen II|Frozen 2; Raya and the Last Dragon|Raya; Encanto@Encanto (film); Strange World@Strange World (film); Wish@Wish (2023 film); Moana 2`,
    tryhard: ['The Black Cauldron'],
    legendary: ['The Three Caballeros'],
    facts: {
      'The Black Cauldron': 'Its box-office failure in 1985 nearly ended Disney feature animation.',
      'The Three Caballeros': 'A 1944 film starring Donald Duck with a parrot from Brazil and a rooster from Mexico.',
    },
  },
  {
    id: 'ent-pixar',
    category: 'entertainment',
    prompt: 'Name a Pixar feature film',
    qualifier: 'Released 1995–2024',
    closed: 28,
    groups: {
      textbook: 'Toy Story; Finding Nemo; Monsters, Inc.|Monsters Inc; Cars@Cars (film); Up@Up (2009 film); Inside Out@Inside Out (2015 film)',
      honours: `The Incredibles|Incredibles; Ratatouille; WALL-E|Wall E; Coco; Toy Story 2; Toy Story 3; Toy Story 4; Incredibles 2|The Incredibles 2;
        Finding Dory; Monsters University; Brave; Inside Out 2; Cars 2; Cars 3; Luca`,
      rare: "A Bug's Life|Bugs Life; Turning Red; Soul; Elemental; Lightyear",
      deep: 'The Good Dinosaur',
      legendary: 'Onward',
    },
  },
  {
    id: 'ent-mcu-film',
    category: 'entertainment',
    prompt: 'Name a Marvel Cinematic Universe film',
    qualifier: 'Released 2008–2024',
    closed: 34,
    groups: {
      textbook: `Avengers: Endgame|Endgame; The Avengers|Avengers|Avengers Assemble; Avengers: Infinity War|Infinity War; Iron Man;
        Black Panther; Spider-Man: No Way Home|No Way Home`,
      honours: `Guardians of the Galaxy|GOTG; Thor: Ragnarok|Ragnarok; Captain America: Civil War|Civil War; Avengers: Age of Ultron|Age of Ultron;
        Captain America: The Winter Soldier|The Winter Soldier|Winter Soldier; Doctor Strange|Dr Strange; Spider-Man: Homecoming|Homecoming;
        Spider-Man: Far From Home|Far From Home; Deadpool & Wolverine|Deadpool and Wolverine|Deadpool 3; Captain Marvel; Ant-Man|Ant Man; Thor;
        Iron Man 2; Iron Man 3`,
      rare: `Captain America: The First Avenger|The First Avenger|First Avenger; Guardians of the Galaxy Vol. 2|Guardians of the Galaxy 2|GOTG 2;
        Guardians of the Galaxy Vol. 3|Guardians of the Galaxy 3|GOTG 3; Thor: Love and Thunder|Love and Thunder|Thor 4;
        Doctor Strange in the Multiverse of Madness|Multiverse of Madness|Doctor Strange 2; Black Panther: Wakanda Forever|Wakanda Forever|Black Panther 2;
        Black Widow; Shang-Chi and the Legend of the Ten Rings|Shang-Chi|Shang Chi; Ant-Man and the Wasp`,
      deep: 'Eternals; Thor: The Dark World|The Dark World|Thor 2; Ant-Man and the Wasp: Quantumania|Quantumania|Ant-Man 3',
      tryhard: 'The Incredible Hulk',
      legendary: 'The Marvels',
    },
    facts: {
      'The Incredible Hulk': 'The only MCU film with Edward Norton as Bruce Banner.',
      'The Marvels': 'The lowest-grossing MCU film to date (2023).',
    },
  },
  {
    id: 'ent-hp-spell',
    category: 'entertainment',
    prompt: 'Name a spell from the Harry Potter books or films',
    qualifier: 'Incantations as spoken, like "Lumos"',
    groups: {
      textbook: 'Expelliarmus; Wingardium Leviosa; Lumos; Avada Kedavra; Expecto Patronum; Alohomora; Accio',
      honours: `Stupefy; Crucio; Imperio; Obliviate; Petrificus Totalus; Riddikulus; Sectumsempra; Nox; Reparo; Incendio;
        Protego; Levicorpus; Aguamenti; Morsmordre; Silencio; Confundo; Episkey; Engorgio; Reducto; Rictusempra`,
      rare: `Liberacorpus; Muffliato; Tarantallegra; Serpensortia; Finite Incantatem|Finite; Diffindo; Reducio; Sonorus; Quietus;
        Prior Incantato; Point Me; Densaugeo; Impedimenta; Legilimens; Locomotor Mortis; Scourgify; Tergeo; Anapneo; Avis;
        Oppugno; Relashio; Oculus Reparo; Impervius; Rennervate|Enervate|Ennervate; Homenum Revelio; Salvio Hexia; Protego Totalum; Cave Inimicum;
        Repello Muggletum; Piertotum Locomotor; Colloportus; Expulso; Lumos Maxima; Glisseo; Deprimo; Descendo; Evanesco`,
      deep: `Obscuro; Orchideous; Portus; Fianto Duri; Duro; Waddiwasi; Specialis Revelio; Furnunculus; Langlock; Mobiliarbus;
        Mobilicorpus; Ferula; Deletrius; Geminio; Brackium Emendo; Pack; Defodio;
        Incarcerous; Confringo; Bombarda; Flagrate`,
      tryhard: '',
      legendary: 'Meteolojinx Recanto',
    },
    facts: { 'Meteolojinx Recanto': "In Deathly Hallows, Mr Weasley suggests it to Ron (disguised as Reg Cattermole) to stop the rain in Yaxley's Ministry office." },
  },
];
