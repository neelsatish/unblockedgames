module.exports = [
  // ================================================================ WORDS
  {
    id: 'word-world-language',
    category: 'words',
    prompt: 'Name a language spoken somewhere in the world',
    qualifier: 'Natural languages with their own Wikipedia article (not computer or invented languages)',
    strip: ['language'],
    answers: `
      English@English language; Mandarin|Mandarin Chinese|Chinese@Mandarin Chinese; Spanish@Spanish language; Hindi; Arabic@Arabic;
      Bengali|Bangla@Bengali language; Portuguese@Portuguese language; Russian@Russian language; Japanese@Japanese language;
      French@French language; German@German language; Korean@Korean language; Italian@Italian language; Turkish@Turkish language;
      Vietnamese@Vietnamese language; Tamil@Tamil language; Urdu; Telugu@Telugu language; Marathi@Marathi language;
      Persian|Farsi@Persian language; Thai@Thai language; Indonesian@Indonesian language; Swahili|Kiswahili@Swahili language;
      Dutch@Dutch language; Greek@Greek language; Polish@Polish language; Ukrainian@Ukrainian language; Hebrew@Hebrew language;
      Punjabi|Panjabi@Punjabi language; Gujarati@Gujarati language; Kannada; Malayalam; Nepali@Nepali language;
      Sinhala|Sinhalese@Sinhala language; Burmese@Burmese language; Khmer@Khmer language; Malay@Malay language;
      Tagalog@Tagalog language; Cantonese@Cantonese; Yoruba@Yoruba language; Zulu@Zulu language; Xhosa@Xhosa language;
      Amharic@Amharic; Hausa@Hausa language; Igbo@Igbo language; Somali@Somali language; Afrikaans@Afrikaans;
      Swedish@Swedish language; Finnish@Finnish language; Hungarian@Hungarian language; Czech@Czech language;
      Romanian@Romanian language; Pashto@Pashto; Kurdish@Kurdish languages; Uzbek@Uzbek language; Kazakh@Kazakh language;
      Mongolian@Mongolian language; Tibetan@Standard Tibetan; Maori|Māori@Māori language; Hawaiian@Hawaiian language;
      Navajo|Navaho@Navajo language; Quechua@Quechuan languages; Guarani@Guarani language; Inuktitut@Inuktitut;
      Welsh@Welsh language; Irish|Irish Gaelic@Irish language; Scottish Gaelic@Scottish Gaelic; Icelandic@Icelandic language;
      Basque@Basque language; Maltese@Maltese language; Sanskrit; Latin@Latin; Tigrinya@Tigrinya language;
      Malagasy@Malagasy language; Samoan@Samoan language; Fijian@Fijian language; Tongan@Tongan language;
      Pirahã|Piraha@Pirahã language; Ainu@Ainu language; Cherokee@Cherokee language; Breton@Breton language`,
    legendary: ['Pirahã', 'Ainu'],
    facts: {
      'Pirahã': 'An Amazonian language with very few sounds and, according to some linguists, no number words.',
      Ainu: 'A language isolate from northern Japan with no proven relatives, spoken fluently by very few people today.',
    },
  },
  {
    id: 'word-european-language',
    category: 'words',
    prompt: 'Name a language spoken in Europe',
    qualifier: 'Languages native to Europe with their own Wikipedia article, official or regional',
    strip: ['language'],
    answers: `
      English@English language; French@French language; German@German language; Spanish@Spanish language; Italian@Italian language;
      Portuguese@Portuguese language; Russian@Russian language; Polish@Polish language; Dutch@Dutch language; Greek@Greek language;
      Swedish@Swedish language; Norwegian@Norwegian language; Danish@Danish language; Finnish@Finnish language;
      Icelandic@Icelandic language; Czech@Czech language; Slovak@Slovak language; Hungarian@Hungarian language;
      Romanian@Romanian language; Bulgarian@Bulgarian language; Serbian@Serbian language; Croatian@Croatian language;
      Bosnian@Bosnian language; Slovene|Slovenian@Slovene language; Macedonian@Macedonian language; Albanian@Albanian language;
      Ukrainian@Ukrainian language; Belarusian@Belarusian language; Lithuanian@Lithuanian language; Latvian@Latvian language;
      Estonian@Estonian language; Irish|Irish Gaelic@Irish language; Welsh@Welsh language; Scottish Gaelic@Scottish Gaelic;
      Basque@Basque language; Catalan@Catalan language; Galician@Galician language; Maltese@Maltese language;
      Luxembourgish|Letzeburgesch@Luxembourgish; Breton@Breton language; Corsican@Corsican language; Sardinian@Sardinian language;
      Occitan@Occitan language; Frisian|West Frisian@West Frisian language; Faroese@Faroese language; Romansh@Romansh language;
      Sami|Northern Sami@Northern Sami; Turkish@Turkish language; Georgian@Georgian language; Armenian@Armenian language;
      Yiddish@Yiddish; Cornish@Cornish language; Manx@Manx language; Sicilian@Sicilian language; Asturian@Asturian language;
      Aragonese@Aragonese language; Walloon@Walloon language; Kashubian@Kashubian language; Romani@Romani language;
      Karelian@Karelian language; Livonian@Livonian language; Aromanian@Aromanian language; Gagauz@Gagauz language;
      Tatar@Tatar language; Kalmyk@Kalmyk language`,
    legendary: ['Livonian', 'Kashubian'],
    facts: {
      Livonian: 'A Finnic language from Latvia whose last native speaker died in 2013, though people are reviving it.',
      Kashubian: 'A West Slavic language spoken in northern Poland and recognised there as a regional language.',
    },
  },
  {
    id: 'word-colour',
    category: 'words',
    prompt: 'Name a colour',
    qualifier: 'Any colour or shade name found in a standard English dictionary',
    strip: ['colour', 'color'],
    groups: {
      textbook: 'Red; Blue; Green; Yellow; Orange; Purple; Pink; Black; White; Brown; Grey|gray',
      honours: `Violet; Indigo; Cyan; Magenta; Turquoise; Maroon; Navy|navy blue; Beige; Gold|golden; Silver; Teal; Lavender; Peach; Cream;
        Lime|lime green; Olive|olive green; Crimson; Scarlet; Saffron; Aqua; Tan; Khaki; Mint|mint green; Coral; Salmon; Sky blue;
        Rose; Lilac; Mustard; Burgundy; Ivory; Charcoal; Bronze; Copper; Amber; Emerald; Ruby; Sapphire`,
      rare: `Vermilion|vermillion; Cerulean; Azure; Ochre|ocre; Sienna; Umber; Mauve; Fuchsia; Periwinkle; Chartreuse; Taupe; Ecru;
        Cobalt|cobalt blue; Ultramarine; Carmine; Cerise; Puce; Sepia; Mahogany; Chestnut; Auburn; Russet; Rust; Plum; Orchid;
        Jade; Sage|sage green; Pistachio; Forest green; Royal blue; Baby blue; Powder blue; Midnight blue; Lemon|lemon yellow;
        Apricot; Tangerine; Champagne; Platinum; Burnt orange; Wine; Blush; Fawn; Amethyst; Garnet; Topaz; Ebony; Jet black`,
      deep: `Viridian; Gamboge; Cinnabar; Celadon; Eau de nil; Glaucous; Verdigris; Heliotrope; Aubergine; Mulberry; Cordovan;
        Titian; Zaffre; Prussian blue; Tyrian purple; Alizarin|alizarin crimson; Lapis lazuli|lapis; Terracotta|terra cotta;
        Cadmium yellow; Bistre; Rosewood; Fulvous; Gunmetal; Slate|slate grey`,
      legendary: 'Eigengrau',
    },
    facts: { Eigengrau: 'The dim grey many people see in total darkness; the German word means "intrinsic grey".' },
  },
  {
    id: 'word-shape',
    category: 'words',
    prompt: 'Name a shape',
    qualifier: 'Flat or solid geometric shapes that have a name',
    groups: {
      textbook: 'Circle; Square; Triangle; Rectangle; Oval; Star; Heart; Diamond; Cube; Sphere; Cone; Cylinder',
      honours: `Pentagon; Hexagon; Octagon; Rhombus; Trapezium|trapezoid; Parallelogram; Kite; Crescent; Ellipse; Pyramid; Cuboid;
        Prism|triangular prism; Semicircle|half circle; Polygon; Heptagon; Decagon; Nonagon; Quadrilateral; Arrow; Cross; Spiral;
        Sector; Hemisphere`,
      rare: `Torus|doughnut shape; Tetrahedron; Octahedron; Dodecahedron; Icosahedron; Annulus|ring; Dodecagon; Pentagram;
        Hexagram; Lozenge; Scalene triangle; Isosceles triangle; Equilateral triangle; Right-angled triangle|right triangle;
        Chevron; Quatrefoil; Trefoil; Teardrop; Helix; Capsule; Segment`,
      deep: `Hendecagon|undecagon; Icosagon; Rhombicuboctahedron; Cuboctahedron; Truncated icosahedron; Mobius strip|moebius strip;
        Klein bottle; Reuleaux triangle; Vesica piscis; Deltoid; Astroid; Cardioid; Lemniscate; Tesseract|hypercube;
        Antiprism; Ellipsoid; Paraboloid; Hyperboloid`,
      legendary: 'Gömböc|Gomboc',
    },
    facts: { 'Gömböc': 'A convex 3D shape with only one stable resting point, proved to exist in 2006.' },
  },
  {
    id: 'word-palindrome',
    category: 'words',
    prompt: 'Name an English word that reads the same backwards',
    qualifier: 'Single English dictionary words that are palindromes, like level (names and phrases do not count)',
    groups: {
      textbook: 'Mom|mum; Dad; Level; Madam; Radar; Racecar; Noon; Eye; Pop; Civic; Refer',
      honours: `Kayak; Wow; Pup; Bob; Did; Eve; Stats; Tot; Sis; Gag; Peep; Deed; Toot; Nun; Pip; Pap; Huh; Ewe; Sees; Solos; Minim; Rotor;
        Reviver; Redder; Rotator`,
      rare: `Deified; Repaper; Reifier; Sagas; Sexes; Shahs; Tenet; Kook; Aha; Boob; Gig; Dud; Eke; Ere; Poop; Semes; Stets; Terret;
        Malayalam`,
      deep: `Rotavator; Sememes; Testset; Kinnikinnik; Aibohphobia; Murdrum; Sooloos; Tebbet; Lemel; Selles`,
      legendary: 'Tattarrattat',
    },
    facts: {
      Tattarrattat: 'James Joyce coined it in Ulysses for the sound of knocking; it is one of the longest palindromic words in English.',
    },
  },
  {
    id: 'word-phobia',
    category: 'words',
    prompt: 'Name a word ending in "-phobia"',
    qualifier: 'Named phobias, by the -phobia word (arachnophobia) or the thing feared (spiders)',
    strip: ['phobia', 'fear of'],
    groups: {
      textbook: `Arachnophobia|spiders; Claustrophobia|small spaces; Acrophobia|heights; Agoraphobia; Hydrophobia|water; Xenophobia;
        Cynophobia|dogs; Ophidiophobia|snakes; Aerophobia|flying; Nyctophobia|the dark|darkness; Technophobia; Photophobia`,
      honours: `Ailurophobia|cats; Ornithophobia|birds; Entomophobia|insects; Glossophobia|public speaking; Thanatophobia|death;
        Pyrophobia|fire; Astraphobia|thunder; Triskaidekaphobia|number 13; Coulrophobia|clowns; Trypanophobia|needles;
        Dentophobia|dentists; Hippophobia|horses; Musophobia|mice; Zoophobia|animals; Emetophobia|vomiting; Gamophobia|marriage;
        Nomophobia|being without a phone; Androphobia|men; Gynophobia|women; Pedophobia|children; Hemophobia|haemophobia|blood;
        Mysophobia|germophobia|germs; Trypophobia|holes; Homophobia`,
      rare: `Arithmophobia|numbers; Bibliophobia|books; Chionophobia|snow; Cryophobia|cold; Ergophobia|work; Gerascophobia|ageing;
        Haphephobia|touch; Heliophobia|the sun; Iatrophobia|doctors; Melissophobia|bees; Necrophobia|corpses; Ombrophobia|rain;
        Selenophobia|the moon; Siderodromophobia|trains; Somniphobia|sleep; Thalassophobia|the deep sea; Anthophobia|flowers;
        Atychiphobia|failure; Philophobia|love; Pogonophobia|beards; Chromophobia|colours; Dendrophobia|trees; Ichthyophobia|fish;
        Lachanophobia|vegetables; Phonophobia|loud noises; Spectrophobia|ghosts; Anglophobia; Francophobia; Russophobia; Islamophobia`,
      deep: `Hippopotomonstrosesquippedaliophobia|fear of long words; Arachibutyrophobia|peanut butter; Turophobia|cheese; Chaetophobia|hair;
        Ablutophobia|bathing; Anatidaephobia; Genuphobia|knees; Pediophobia|dolls; Automatonophobia|robots; Omphalophobia|belly buttons;
        Ephebiphobia|teenagers; Gelotophobia|being laughed at; Chorophobia|dancing; Phobophobia|fear of fear; Panophobia|everything;
        Xanthophobia|yellow; Leukophobia|white; Melanophobia|black`,
      legendary: 'Aibohphobia|fear of palindromes',
    },
    facts: { Aibohphobia: 'A joke word for the fear of palindromes; it is itself a palindrome.' },
  },
  {
    id: 'word-hindi-loanword',
    category: 'words',
    prompt: 'Name an English word borrowed from Hindi or Urdu',
    qualifier: 'English dictionary words that came in through Hindi, Urdu or other Indian languages',
    groups: {
      textbook: `Shampoo; Jungle; Bungalow; Pyjamas|pajamas; Bandana|bandanna; Cot; Loot; Thug; Veranda|verandah; Guru; Yoga; Karma; Avatar;
        Pundit|pandit; Juggernaut`,
      honours: `Dungarees; Khaki; Cheetah; Chutney; Curry; Bangle; Dinghy; Jodhpurs; Pukka; Raj; Sari|saree; Nirvana; Mantra;
        Swastika; Punch; Toddy; Bazaar; Chit; Chintz; Calico; Cummerbund; Gymkhana; Purdah; Sahib; Sepoy; Tom-tom; Pariah; Nabob;
        Maharajah|maharaja; Maharani; Tiffin; Blighty; Dacoit; Dhoti; Ghee; Jute; Lakh; Crore; Dal|dhal; Pashmina; Rupee; Sitar;
        Tabla; Veda; Vindaloo; Cashmere; Chakra; Coolie; Mahout; Palanquin; Poppadom|papad|papadum; Shawl; Bidi|beedi`,
      rare: `Kedgeree; Mulligatawny; Chukka|chukker; Dekko; Dak; Godown; Howdah; Lac; Cowrie; Charpoy; Chowkidar; Dhobi;
        Pice; Bhang; Hookah; Jemadar; Kukri; Lungi; Mufti; Nautch; Pugree|puggaree; Rajah; Sambar; Suttee|sati; Sirdar; Tamasha;
        Tussore|tussah; Zenana; Kurta; Dhurrie; Bandicoot; Teapoy; Gunny`,
      deep: `Dumdum; Gharry; Thuggee; Looty; Cheroot; Chokey|choky; Jungli; Pani; Shikar; Tonga; Jhula;
        Bandobast; Bhisti|bheesty; Cutcherry|kutcherry; Hubble-bubble; Mugger; Nullah|nala`,
      legendary: 'Cushy; Doolally',
    },
    facts: {
      Cushy: 'From the Hindi-Urdu khush, meaning pleasant; it came into English through British soldiers in India.',
      Doolally: 'From Deolali, a British army camp near Mumbai where soldiers waited to go home; it came to mean mad.',
    },
  },
  {
    id: 'word-onomatopoeia',
    category: 'words',
    prompt: 'Name an onomatopoeic word',
    qualifier: 'Words that imitate the sound they describe, like buzz',
    groups: {
      textbook: 'Buzz; Boom; Bang; Splash; Hiss; Meow|miaow; Woof; Moo; Quack; Sizzle; Crash; Pop; Ding; Click; Tick',
      honours: `Beep; Honk; Drip; Thud; Whisper; Giggle; Murmur; Rumble; Crackle; Snap; Splat; Zoom; Vroom; Roar; Growl; Purr; Oink; Neigh;
        Baa; Cuckoo; Tweet; Chirp; Squeak; Clang; Clink; Jingle; Knock; Slam; Thump; Whoosh; Swish; Fizz; Gurgle; Burp; Hiccup;
        Cough; Achoo; Ahem; Bark; Howl; Hoot; Cluck; Squelch; Rustle; Whack; Smash; Zip; Ping; Plop; Bleep`,
      rare: `Clatter; Clop|clip-clop; Plink; Twang; Kerplunk; Kaboom; Whizz|whiz; Slurp; Smack; Squish; Swoosh; Tinkle; Trill; Warble;
        Yelp; Yap; Yowl; Gobble; Hum; Ribbit; Croak; Caw; Coo; Bellow; Chug; Clunk; Clack; Creak; Crunch; Crinkle; Patter|pitter-patter;
        Rat-a-tat; Tap; Thwack; Wham; Zap; Whirr|whir; Sputter; Splutter; Rattle; Jangle; Chime; Toot; Parp; Phut; Boing; Ka-ching`,
      deep: `Susurrus; Sough; Stridulate; Ululate; Plash; Gloop; Glug; Bloop; Kerchoo; Whoop; Bonk; Fwoosh; Blam; Clippety-clop; Skree`,
      legendary: 'Tintinnabulation',
    },
    facts: { Tintinnabulation: 'The ringing of bells, made famous by Edgar Allan Poe in his poem "The Bells".' },
  },
  {
    id: 'word-punctuation',
    category: 'words',
    prompt: 'Name a punctuation mark or typographic symbol',
    qualifier: 'Punctuation marks and common keyboard or typographic symbols, by their usual name',
    groups: {
      textbook: `Full stop|period|dot; Comma; Question mark; Exclamation mark|exclamation point; Colon; Semicolon|semi-colon; Apostrophe;
        Hyphen; Brackets|parentheses|round brackets; Quotation marks|inverted commas|speech marks|quotes`,
      honours: `Ellipsis|three dots; Slash|forward slash; Backslash; Asterisk|star; Ampersand; At sign|at symbol; Hash|hashtag|pound sign|octothorpe;
        Square brackets; Curly brackets|braces|curly braces; Angle brackets|chevrons; Underscore|underline; Tilde; Caret;
        Percent sign|percentage sign; Dollar sign; Plus sign; Equals sign; En dash; Em dash|dash; Bullet|bullet point; Pipe|vertical bar;
        Section sign; Degree sign; Copyright sign|copyright symbol`,
      rare: `Pilcrow|paragraph mark; Dagger|obelus|obelisk; Double dagger; Guillemets|angle quotes; Division sign;
        Ditto mark; Tittle; Diaeresis|umlaut; Cedilla; Acute accent; Grave accent; Circumflex; Macron; Breve; Ogonek; Caron|hacek;
        Asterism; Virgule; Solidus; Lozenge; Fleuron|hedera; Trademark sign|trademark symbol; Registered sign;
        Euro sign; Pound sign|pound sterling sign; Rupee sign|rupee symbol; Yen sign; Cent sign; Infinity sign; Swung dash`,
      deep: `Irony mark; Percontation point; Interpunct|middle dot; Tironian et; Diple; Per mille sign|permille`,
      legendary: 'Interrobang; Manicule',
    },
    facts: {
      Interrobang: 'A 1962 mark that merges a question mark and an exclamation mark, for something like "What?!".',
      Manicule: 'A tiny drawn pointing hand that medieval readers used to mark passages in the margin.',
    },
  },
  {
    id: 'word-figure-of-speech',
    category: 'words',
    prompt: 'Name a figure of speech or literary device',
    qualifier: 'Named figures of speech and literary devices taught in English classes',
    groups: {
      textbook: 'Simile; Metaphor; Personification; Alliteration; Hyperbole; Onomatopoeia; Idiom; Irony; Oxymoron; Pun',
      honours: `Imagery; Symbolism; Foreshadowing; Flashback; Allegory; Allusion; Analogy; Cliché|cliche; Euphemism; Paradox; Sarcasm;
        Satire; Understatement; Assonance; Consonance; Rhyme; Repetition; Anaphora; Tone; Mood; Theme; Dramatic irony; Verbal irony;
        Situational irony; Pathos; Ethos; Logos; Soliloquy; Monologue; Pathetic fallacy; Rhetorical question; Climax; Anticlimax;
        Antithesis; Apostrophe; Colloquialism`,
      rare: `Metonymy; Synecdoche; Litotes; Zeugma; Syllepsis; Chiasmus; Epistrophe; Anadiplosis; Polysyndeton; Asyndeton; Hendiadys;
        Tautology; Pleonasm; Malapropism; Spoonerism; Euphony; Cacophony; Juxtaposition; Bathos; Hyperbaton; Anastrophe; Epithet;
        Kenning; Aphorism; Epigram; Apophasis; Paralipsis; Prolepsis; Tmesis; Metalepsis; Catachresis; Periphrasis|circumlocution;
        Portmanteau; Neologism; Dysphemism; Parallelism; Antonomasia; Epizeuxis; Hypophora`,
      deep: `Aposiopesis; Antanaclasis; Paronomasia; Merism; Meiosis; Isocolon; Tricolon; Polyptoton; Symploce; Anacoluthon; Diacope;
        Ploce; Prosopopoeia; Hysteron proteron; Hypallage|transferred epithet; Auxesis; Anthimeria; Enallage; Synesthesia|synaesthesia;
        Epanorthosis; Adynaton`,
      legendary: 'Paraprosdokian',
    },
    facts: { Paraprosdokian: 'A sentence with a surprise ending that makes you reread the start, like "I want to die peacefully in my sleep, like my grandfather, not screaming like his passengers".' },
  },
  {
    id: 'word-greek-letter',
    category: 'words',
    prompt: 'Name a letter of the Greek alphabet',
    qualifier: 'Any of the 24 letters of the modern Greek alphabet, by its English name',
    strip: ['letter'],
    closed: 24,
    answers: `
      Alpha@Alpha; Beta@Beta; Gamma@Gamma; Delta@Delta (letter); Epsilon@Epsilon; Zeta@Zeta; Eta@Eta; Theta@Theta; Iota@Iota; Kappa@Kappa;
      Lambda@Lambda; Mu@Mu (letter); Nu@Nu (Greek); Xi@Xi (letter); Omicron@Omicron; Pi@Pi (letter); Rho@Rho; Sigma@Sigma; Tau@Tau;
      Upsilon@Upsilon; Phi@Phi; Chi@Chi (letter); Psi@Psi (Greek); Omega@Omega`,
    legendary: ['Omicron'],
    facts: { Omicron: 'Its name means "small o", to tell it apart from omega, "big o".' },
  },
  {
    id: 'word-nato-alphabet',
    category: 'words',
    prompt: 'Name a word from the NATO phonetic alphabet',
    qualifier: 'The 26 code words used to spell letters over radio, Alfa to Zulu',
    closed: 26,
    groups: {
      textbook: 'Alpha|alfa; Bravo; Charlie; Delta; Echo; Foxtrot; Golf; Hotel; India; Juliet|juliett',
      honours: 'Kilo; Lima; Mike; November; Oscar; Papa; Quebec; Romeo; Sierra; Tango',
      rare: 'Uniform; Victor; Whiskey|whisky; Zulu',
      deep: 'Yankee',
      legendary: 'X-ray|xray|x ray',
    },
    facts: { 'X-ray': 'The only code word with a hyphen in the official list; it is also the only one named after a kind of radiation.' },
  },
  {
    id: 'word-big-synonym',
    category: 'words',
    prompt: 'Name a word that means "big"',
    qualifier: 'English adjectives meaning large in size or scale',
    groups: {
      textbook: 'Large; Huge; Giant; Enormous; Massive; Gigantic; Tall; Great; Vast; Colossal',
      honours: `Immense; Mammoth; Jumbo; Gargantuan; Titanic; Monumental; Towering; Hefty; Bulky; Sizeable|sizable; Substantial; Mighty;
        Humongous|humungous; Ginormous; Monstrous; Whopping; Tremendous; Grand; Extensive; Broad; Wide; Heavy; Oversized|outsized;
        Major; Astronomical; Epic; Stupendous; Prodigious; Voluminous; Capacious; Spacious; Roomy; Ample; Considerable`,
      rare: `Cosmic; Elephantine; Herculean; Brobdingnagian; Behemoth; Leviathan; Thumping; Bumper; King-size|king-sized; Mega;
        Galactic; Mountainous; Hulking; Strapping; Burly; Lumbering; Cavernous; Boundless; Limitless; Immeasurable; Sweeping;
        Expansive; Bulbous; Whale-sized`,
      deep: `Gigantean; Cyclopean; Atlantean; Magnum; Jeroboam; Ponderous; Multitudinous; Megalithic; Vasty; Epochal`,
      legendary: 'Pantagruelian',
    },
    facts: { Pantagruelian: 'From Pantagruel, the giant of Rabelais\'s French satire, whose size and appetites were enormous.' },
  },
  {
    id: 'word-happy-synonym',
    category: 'words',
    prompt: 'Name a word that means "happy"',
    qualifier: 'English adjectives meaning pleased, cheerful or joyful',
    groups: {
      textbook: 'Glad; Cheerful; Joyful; Delighted; Pleased; Content; Excited; Merry; Jolly; Thrilled',
      honours: `Joyous; Elated; Ecstatic; Overjoyed; Cheery; Upbeat; Positive; Optimistic; Blissful; Radiant; Beaming; Gleeful; Jubilant;
        Euphoric; Satisfied; Contented; Chuffed; Over the moon; Tickled pink; On cloud nine; Sunny; Bright; Lighthearted|light-hearted;
        Carefree; Bubbly; Perky; Chirpy; Buoyant; Lively; Smiling; Fortunate; Lucky; Blessed; Rapturous; Exuberant; Exultant; Festive`,
      rare: `Blithe; Jocund; Jovial; Gladsome; Sanguine; Chipper; Peppy; Spirited; Zippy; Beatific; Halcyon; Cock-a-hoop; Stoked; Giddy;
        Gratified; Jaunty; Mirthful; Sprightly; Glowing; Ebullient; Effervescent; Tickled; Felicitous; Fulfilled; Serene; Placid; Tranquil`,
      deep: `Insouciant; Winsome; Eudaemonic|eudaimonic; Felicific; Rhapsodic; Transported; Enraptured; Enchanted; Couthy; Canty;
        Lightsome; Blithesome; Fain`,
      legendary: 'Gruntled',
    },
    facts: { Gruntled: 'A back-formation from "disgruntled": a real, if rare, word meaning pleased.' },
  },
  {
    id: 'word-part-of-speech',
    category: 'words',
    prompt: 'Name a part of speech or grammar term',
    qualifier: 'Word classes and basic grammar terms taught in school English',
    groups: {
      textbook: 'Noun; Verb; Adjective; Adverb; Pronoun; Preposition; Conjunction; Interjection; Article',
      honours: `Subject; Object; Predicate; Clause; Phrase; Sentence; Tense; Plural; Singular; Proper noun; Common noun; Abstract noun;
        Collective noun; Gerund; Participle; Infinitive; Determiner; Modal verb|modal; Auxiliary verb|helping verb; Past tense;
        Present tense; Future tense; Active voice; Passive voice; Prefix; Suffix; Root word; Synonym; Antonym; Homophone; Homonym;
        Possessive; Comparative; Superlative; Contraction; Compound word; Conjugation; Gender`,
      rare: `Transitive verb; Intransitive verb; Linking verb|copula; Relative pronoun; Reflexive pronoun; Demonstrative; Interrogative;
        Imperative; Subjunctive; Indicative; Possessive pronoun; Direct object; Indirect object; Complement; Adverbial; Phrasal verb;
        Noun phrase; Verb phrase; Dependent clause; Independent clause; Relative clause; Appositive; Antecedent; Countable noun;
        Uncountable noun|mass noun; Compound sentence; Complex sentence; Simple sentence; Run-on sentence; Comma splice; Split infinitive;
        Dangling modifier; Particle`,
      deep: `Nominative; Accusative; Dative; Genitive; Ablative; Vocative; Locative; Aspect; Mood; Clitic; Morpheme; Phoneme; Lexeme;
        Allomorph; Affix; Infix; Circumfix; Suppletion; Deixis; Ditransitive; Perfective; Imperfective; Past perfect|pluperfect;
        Future perfect; Present perfect; Continuous|progressive`,
      legendary: 'Pluralia tantum|plurale tantum',
    },
    facts: { 'Pluralia tantum': 'Nouns that only exist in the plural, like scissors, trousers and clothes.' },
  },
  {
    id: 'word-poem-type',
    category: 'words',
    prompt: 'Name a type of poem',
    qualifier: 'Named poetic forms and kinds of poem',
    strip: ['poem', 'poetry'],
    groups: {
      textbook: 'Haiku; Sonnet; Limerick; Ode; Ballad; Epic; Elegy; Free verse; Acrostic; Couplet',
      honours: `Narrative poem|narrative; Lyric|lyric poem; Nursery rhyme; Blank verse; Concrete poem|shape poem; Cinquain; Tanka; Quatrain;
        Pastoral; Idyll; Dramatic monologue; Villanelle; Sestina; Rondeau; Epitaph; Lullaby; Song; Rap; Spoken word; Slam poetry;
        Clerihew; Diamante; Epigram; Riddle; Eulogy; Rhyme royal; Ghazal; Doha; Shayari`,
      rare: `Pantoum; Triolet; Terza rima; Ottava rima; Spenserian stanza; Rubaiyat|rubai; Haibun; Senryu; Renga; Bhajan; Nazm; Qasida;
        Vachana; Abhang; Epithalamion; Palinode; Aubade; Serenade; Lament; Dirge; Threnody; Panegyric; Encomium; Mock epic;
        Ekphrasis; Found poem; Prose poem; Calligram; Nonsense verse; Ballade; Roundel; Rondel; Canto; Madrigal; Virelai; Epyllion;
        Georgic; Eclogue; Pindaric ode; Alexandrine`,
      deep: `Cento; Etheree; Nonet; Rispetto; Strambotto; Sijo; Kyrielle; Lune; Skaldic verse; Anacreontic; Hymn; Dithyramb;
        Chant royal; Sonnet crown|crown of sonnets; Heroic couplet; Double dactyl; Monorhyme; Glosa; Terzanelle; Pastourelle`,
      legendary: 'Tetractys',
    },
    facts: { Tetractys: 'A poem in five lines of 1, 2, 3, 4 and 10 syllables, named after the Pythagorean triangle of ten dots.' },
  },
  {
    id: 'word-font',
    category: 'words',
    prompt: 'Name a font or typeface',
    qualifier: 'Typefaces that have their own Wikipedia article',
    missingTier: 'deep',
    answers: `
      Arial; Times New Roman; Helvetica; Calibri; Comic Sans|Comic Sans MS@Comic Sans; Courier New@Courier New; Verdana;
      Georgia@Georgia (typeface); Cambria@Cambria (typeface); Garamond@Garamond; Impact@Impact (typeface); Tahoma@Tahoma (typeface);
      Futura@Futura (typeface); Gill Sans@Gill Sans; Palatino@Palatino; Baskerville@Baskerville; Century Gothic@Century Gothic;
      Trebuchet MS@Trebuchet MS; Segoe UI@Segoe UI; Roboto@Roboto; Open Sans@Open Sans; Lato@Lato (typeface); Arial Black@Arial Black;
      Rockwell@Rockwell (typeface); Optima@Optima; Didot@Didot (typeface); Bodoni@Bodoni; Papyrus@Papyrus (typeface);
      Wingdings@Wingdings; Consolas@Consolas; Candara@Candara; Franklin Gothic@Franklin Gothic; Copperplate Gothic@Copperplate Gothic;
      Brush Script@Brush Script; Sabon@Sabon; Frutiger@Frutiger; Univers@Univers; Akzidenz-Grotesk@Akzidenz-Grotesk;
      Cooper Black@Cooper Black; Courier@Courier (typeface); Monaco@Monaco (typeface); Menlo@Menlo (typeface); Ubuntu@Ubuntu (typeface);
      Bembo@Bembo; Caslon@Caslon; Perpetua@Perpetua (typeface); Bookman@Bookman (typeface); Avenir@Avenir (typeface);
      Gotham@Gotham (typeface); Fira Sans@Fira Sans; Inter@Inter (typeface); Noto Sans|Noto@Noto fonts; Mangal@Mangal (typeface);
      Zapf Dingbats|Dingbats@Zapf Dingbats; Zapfino@Zapfino; Webdings@Webdings; Bauhaus@Bauhaus (typeface); OCR-A@OCR-A;
      Eurostile@Eurostile; Johnston@Johnston (typeface); Fraktur@Fraktur; Blackletter|Gothic script@Blackletter;
      Curlz MT@Curlz MT; Jokerman@Jokerman; Chiller@Chiller (typeface); Algerian@Algerian (typeface); Cochin@Cochin (typeface)`,
    legendary: ['Zapfino', 'Johnston'],
    facts: {
      Zapfino: 'A flowing calligraphic typeface by Hermann Zapf, so ornate its letters change shape depending on their neighbours.',
      Johnston: 'The lettering designed in 1916 for the London Underground, still the basis of its signs.',
    },
  },
  {
    id: 'word-time-unit',
    category: 'words',
    prompt: 'Name a unit or length of time',
    qualifier: 'Named periods of time, from instants to ages, including odd ones like fortnight',
    groups: {
      textbook: 'Second; Minute; Hour; Day; Week; Month; Year; Decade; Century; Millennium',
      honours: `Millisecond; Microsecond; Nanosecond; Fortnight; Weekend; Leap year; Quarter; Semester; Term; Era; Epoch; Age; Season;
        Generation; Lifetime; Moment; Instant; Jiffy; Eon|aeon; Picosecond; Femtosecond; Score; Tick; Period; Session; Shift; Night;
        Half hour; Quarter hour; Olympiad`,
      rare: `Lustrum; Biennium; Triennium; Jubilee; Sabbatical; Sennight|se'nnight; Twelvemonth; Trimester; Kalpa; Yuga; Muhurta; Pahar|prahar;
        Paksha; Ritu; Samvatsara; Lunar month; Sidereal day; Solar day; Tropical year; Sidereal year; Planck time; Attosecond;
        Zeptosecond; Yoctosecond; Kilosecond; Megasecond; Gigasecond`,
      deep: `Chronon; Indiction; Saros; Metonic cycle; Callippic cycle; Platonic year|Great Year; Cosmic year|galactic year; Ice age;
        Lunation; Synodic month; Draconic month; Anomalistic month; Saeculum; Nundinae; Decan; Dog watch|dogwatch; Watch; Bell`,
      legendary: 'Shake; Svedberg',
    },
    facts: {
      Shake: 'Ten nanoseconds, used by nuclear physicists, from the phrase "in two shakes of a lamb\'s tail".',
      Svedberg: 'A unit of 10 to the minus 13 seconds, used to describe how fast particles settle in a centrifuge.',
    },
  },

  // ================================================================ SCHOOL
  {
    id: 'school-classroom',
    category: 'school',
    prompt: 'Name something you find in a classroom',
    qualifier: 'Objects and furniture normally found in an Indian classroom',
    groups: {
      textbook: `Blackboard|board|chalkboard|greenboard; Chalk; Duster|board duster|eraser; Desk|desks; Bench|benches; Chair; Teacher's table|teacher table;
        Whiteboard; Marker|board marker; Fan|ceiling fan; Window; Door; Tubelight|tube light|light`,
      honours: `Bag|school bag; Textbooks|textbook|books; Notebook; Clock|wall clock; Dustbin|bin|trash can; Charts|chart; Map|maps; Globe;
        Attendance register|register; Bell; Cupboard|almirah|shelf; Notice board|bulletin board; Projector; Smart board|interactive whiteboard;
        Computer|laptop; Speaker; Calendar; Timetable|time table; Pointer|stick|cane; Ruler|scale; Water cooler|water dispenser;
        Curtains|curtain; Flag; Portrait|photographs; Pencil box; Student|students; Teacher; Class monitor|monitor; Lunch box|tiffin`,
      rare: `Plant|plants|flower pot; Lost and found box; Suggestion box; Fire extinguisher; First aid box; Alphabet chart; Periodic table chart|periodic table;
        Multiplication table chart|tables chart; Display board|wall display; Pigeon holes|pigeonholes; Locker|lockers; Seating chart|seating plan;
        Class rules poster|class rules; Pencil sharpener; Stapler; Projector screen|screen; Chalk box; Broom|brooms; Mop; Pin board|corkboard;
        Atlas; Reading corner|book corner|class library; Mat|mats; Student artwork|drawings; Birthday chart; Star chart`,
      deep: `Overhead projector|OHP; Slide projector; Inkwell|ink well; Slate; Abacus; Hourglass|sand timer; Teacher's stool|stool;
        Skeleton model|skeleton; Orrery; Magic lantern; Cyclostyle machine|cyclostyle; Fish tank|aquarium; Class pet; Handbell|hand bell;
        Whistle; Tuning fork; Counting frame; Wooden blocks|building blocks`,
      legendary: 'Epidiascope',
    },
    facts: { Epidiascope: 'An old projector that bounced light off opaque pages and pictures, so no transparencies were needed.' },
  },
  {
    id: 'school-lab-item',
    category: 'school',
    prompt: 'Name something you find in a school science lab',
    qualifier: 'Equipment, glassware and safety items used in school science labs',
    groups: {
      textbook: `Beaker; Test tube; Bunsen burner|burner; Microscope; Conical flask|flask; Thermometer; Magnet; Lab coat|apron;
        Goggles|safety goggles; Measuring cylinder; Spirit lamp; Tripod stand|tripod`,
      honours: `Burette; Pipette|dropper; Funnel; Filter paper; Petri dish; Slide|microscope slide; Cover slip; Tongs; Forceps;
        Test tube holder; Test tube stand|test tube rack; Retort stand|clamp stand|stand; Clamp; Wire gauze; Crucible; Evaporating dish;
        Round bottom flask; Condenser; Litmus paper; Acid; Base|alkali; Indicator|phenolphthalein; Universal indicator;
        Weighing balance|balance; Weights; Stopwatch; Battery|cell; Wires|wire; Bulb; Switch; Ammeter; Voltmeter; Rheostat;
        Galvanometer; Resistor; Convex lens|lens; Concave lens; Mirror; Prism; Glass slab; Magnifying glass|hand lens; Dissection tray|dissection kit;
        Scalpel; Skeleton; Specimen|specimens; Specimen jar|jar; Gloves; Fire extinguisher; Sand bucket; First aid box; Sink; Gas tap|gas supply;
        Fume cupboard|fume hood`,
      rare: `Reagent bottle; Dropper bottle; Wash bottle; Watch glass; Mortar and pestle|mortar|pestle; Spatula; Glass rod|stirring rod;
        Boiling tube; Delivery tube; Cork|rubber cork|stopper; Rubber tubing; Deflagrating spoon; Kipp's apparatus|kipps apparatus;
        Separating funnel; Buchner funnel; Desiccator; Centrifuge; Water bath; Hot plate; Magnetic stirrer; Tuning fork;
        Simple pendulum|pendulum; Spring balance; Vernier calipers|vernier caliper|vernier; Screw gauge|micrometer screw gauge;
        Metre scale|meter scale|metre rule; Inclined plane; Pulley; Lever; Spring; Slinky; Magnetic compass|compass;
        Bar magnet; Horseshoe magnet; Iron filings; Electroscope|gold leaf electroscope; Oscilloscope; Voltameter; Potentiometer;
        Meter bridge; Resonance tube; Sonometer; Spectrometer; Optical bench; Telescope; Heart model|model of heart; Herbarium`,
      deep: `Gas jar; Gas syringe; Liebig condenser; Soxhlet extractor; Titration tile; Density bottle|pycnometer; Nessler tube;
        Kjeldahl flask; Bell jar; Haemocytometer|hemocytometer; Microtome; Kymograph; Sphygmomanometer; Stethoscope; Quadrat; Crookes tube;
        Geiger counter|Geiger-Müller counter; Cloud chamber; Leyden jar|Leiden jar; Tesla coil; Newton's cradle; Ripple tank;
        Bimetallic strip; Terrarium; Van de Graaff generator; Lead apron`,
      legendary: 'Wimshurst machine',
    },
    facts: { 'Wimshurst machine': 'A hand-cranked static electricity generator that throws sparks between two metal balls.' },
  },
  {
    id: 'school-canteen',
    category: 'school',
    prompt: 'Name something sold in an Indian school canteen',
    qualifier: 'Snacks, meals and drinks you could find in a typical school canteen in India',
    groups: {
      textbook: `Samosa; Sandwich; Burger; Pizza; Noodles; French fries|fries; Juice; Biscuits|biscuit; Chips|crisps; Ice cream;
        Cold drink|soft drink|soda; Chocolate`,
      honours: `Vada pav|wada pav; Pav bhaji; Puff|veg puff|egg puff; Cutlet; Idli; Dosa; Vada|medu vada; Upma; Poha; Paratha|parantha;
        Roti|chapati; Curd rice|rice; Chole bhature|bhature; Rajma chawal|rajma; Pasta; Maggi; Fried rice; Momos|momo; Spring roll;
        Cake|pastry; Cookies|cookie; Milkshake|shake; Lassi; Buttermilk|chaas; Tea|chai; Coffee; Lemonade|nimbu pani|lime juice;
        Coconut water|tender coconut; Fruit salad|fruit; Banana; Apple; Popcorn; Peanuts|groundnuts; Bhel puri|bhel; Pani puri|golgappa|puchka;
        Sev puri; Dahi puri; Kachori; Aloo tikki|tikki; Chaat; Jalebi; Gulab jamun; Pakora|pakoda|bhajiya; Sweet corn|corn; Boiled egg|egg; Egg roll`,
      rare: `Frankie|kathi roll; Wrap; Garlic bread; Bread omelette; Masala dosa; Uttapam|uthappam; Pongal; Bisi bele bath;
        Lemon rice; Puliyogare|tamarind rice; Curd|yogurt|yoghurt; Raita; Poori|puri; Chana|chana masala; Sprouts|sprout salad;
        Grilled sandwich; Corn chaat; Mini pizza; Chocolate bar|choco bar; Kulfi; Candy|toffee; Ice candy|ice lolly; Jelly; Custard;
        Kheer|payasam; Halwa|sheera; Laddu|ladoo; Barfi|burfi; Jeera soda; Rooh Afza; Frooti; Maaza; Thums Up; Pepsi; Coca-Cola|coke;
        Sprite; Fanta; Limca; Mirinda; Bournvita; Horlicks; Glucose biscuits|glucon-d`,
      deep: `Chikki; Gola|ice gola; Imli candy|tamarind candy; Raw mango|kairi; Amla candy|amla; Jamun; Roasted chana|chana jor garam;
        Murukku|chakli; Namkeen|mixture; Khakhra; Thepla; Dhokla; Khandvi; Dabeli; Misal pav|misal; Sabudana khichdi|sabudana vada;
        Bonda|aloo bonda; Mirchi bajji|bajji; Kesari bath|kesari; Khara bath|kharabath; Mysore pak; Holige|obbattu|puran poli; Bun|butter bun;
        Rusk; Parle-G|parle g; Hot dog; Nachos; Taco|tacos; Cheese balls`,
      legendary: 'Kala khatta',
    },
    facts: { 'Kala khatta': 'A tangy-sweet dark syrup poured over shaved ice, the classic gola from outside the school gate.' },
  },
  {
    id: 'school-sports-day-event',
    category: 'school',
    prompt: 'Name an event or race you might see on school Sports Day',
    qualifier: 'Track, field, team and fun events seen at school sports days in India or abroad',
    groups: {
      textbook: `100 metres|100m|100 metre race|sprint; Relay|relay race|4x100 relay; Long jump; High jump; Shot put; Javelin throw|javelin;
        Discus throw|discus; Egg and spoon race|egg and spoon; Sack race; Three-legged race|three legged race; Tug of war|tug-of-war;
        Marathon; March past`,
      honours: `200 metres|200m; 400 metres|400m; 800 metres|800m; 1500 metres|1500m; Hurdles|hurdle race; Triple jump; Pole vault; Hammer throw;
        Cricket ball throw|ball throw; Kho kho; Kabaddi; Football; Cricket; Basketball; Volleyball; Throwball; Badminton; Table tennis;
        Skipping race|skipping; Obstacle race|obstacle course; Wheelbarrow race; Balloon race; Lemon and spoon race|lemon and spoon;
        Frog race|frog jump; Musical chairs; Slow cycle race|slow cycling; Potato race; Bean bag race; Hula hoop race|hula hoop;
        Parents' race|parent race|mothers' race|fathers' race; Teachers' race; PT display|drill|physical drill; Lezim|lezium; Yoga display;
        Pyramid|human pyramid; Gymnastics display; Karate display`,
      rare: `Dodgeball; Tennikoit|ring tennis; Handball; Hockey; Rounders; Softball; Shuttle run; Zigzag race|zig-zag race; Bunny hop race|bunny hop;
        Crab walk race; Spoon and marble race; Water balloon toss|water balloon; Bucket relay; Sponge relay; Needle and thread race;
        Blindfold race; Dribbling race; Matka phod|pot breaking; Flag race; Baton relay; Medley relay|4x400 relay; 5000 metres|5000m;
        Cross country; Race walk|walking race; Standing broad jump; Vertical jump; Rope climbing|rope climb; Mallakhamb; Sit-ups; Push-ups`,
      deep: `Ankle-tie race; Hobby horse race; Stilt race; Egg toss|egg throw; Ring toss; Skittles; Quoits; Tyre race|tire race;
        Gilli danda; Lagori|seven stones|pitthu; Marbles|goli; Spinning top|lattu|bugri; Kite flying; Caber toss`,
      legendary: 'Wellie wanging|Lagori',
    },
    facts: {
      'Wellie wanging': 'A British event where you hurl a rubber boot as far as you can, sometimes seen at school fetes.',
      Lagori: 'A traditional Indian game where a ball knocks down a stack of seven flat stones, then players race to rebuild it.',
    },
  },
  {
    id: 'school-club',
    category: 'school',
    prompt: 'Name a club or co-curricular activity at school',
    qualifier: 'Clubs, societies and after-school activities found in Indian schools',
    groups: {
      textbook: `Art club|art; Music club|music; Dance club|dance; Drama club|drama|theatre; Science club; Maths club; Eco club|environment club;
        Reading club|book club|library club; Sports club|sports; Debate club|debate; Quiz club|quiz; Cricket; Football`,
      honours: `Photography club|photography; Chess club|chess; Coding club|computer club|coding; Robotics club|robotics; Choir|school choir|singing;
        Orchestra|band; Keyboard|piano; Guitar; Tabla; Karate|martial arts|taekwondo|judo; Yoga; Skating; Swimming; Badminton; Basketball;
        Table tennis; Athletics; Gymnastics; Scouts and Guides|scouts|guides; NCC|National Cadet Corps; NSS|National Service Scheme;
        Red Cross|Junior Red Cross; Interact club; Model UN|MUN; Literary club|writing club|creative writing; Poetry club; Journalism club|school magazine;
        Radio club|school radio; Film club|media club; Cooking club|baking club|culinary club; Gardening club|garden club|gardening;
        Craft club|art and craft; Pottery; Painting|sketching; Calligraphy; Mehndi club|mehendi club; Classical dance|bharatanatyam|kathak;
        Western dance|hip hop`,
      rare: `Astronomy club|astronomy; Aeromodelling|aeromodelling club; Electronics club; Entrepreneurship club|young entrepreneurs;
        Finance club|investment club; Economics club; History club|heritage club; Geography club; Language club|Hindi club|French club|German club;
        Sanskrit club; Social service club|community service; Peer support|peer counselling; Student council|student parliament|school parliament;
        Prefects|prefect board; House captains; Library monitors; Wildlife club; Birdwatching club|bird watching club; Trekking club|trekking|adventure club;
        Rock climbing; Archery; Shooting club|shooting; Fencing; Horse riding|equestrian; Golf; Squash; Tennis|lawn tennis; Boxing; Wrestling`,
      deep: `Origami club|origami; Magic club|magic; Puppetry|puppet club; Mime club|mime; Improv|improv club; Stand-up comedy club;
        Beatboxing; DJing|DJ club; Podcasting club|podcast; Animation club|animation; Game design club|game development;
        Cybersecurity club|ethical hacking; Drone club|drones; 3D printing club|3D printing; Rocketry club|rocketry; Tinkering lab|Atal Tinkering Lab|ATL;
        Makerspace|maker space; Coin collecting|numismatics; Rangoli club|rangoli; Speedcubing|Rubik's cube club;
        Sudoku club; Scrabble club|scrabble; Bridge club; Carrom club|carrom`,
      legendary: 'Stamp collecting|philately',
    },
    facts: { 'Stamp collecting': 'The hobby of collecting and studying stamps, once among the most popular school clubs.' },
  },
  {
    id: 'school-teacher-desk',
    category: 'school',
    prompt: 'Name something you might find on a teacher\'s desk',
    qualifier: 'Things a teacher keeps on or in a classroom or staffroom desk',
    groups: {
      textbook: `Pen; Pencil; Books|textbook; Notebooks|notebook|copies; Answer sheets|exam papers|test papers|papers; Red pen; Attendance register|register;
        Chalk|chalk box; Duster|board duster; Marker; Ruler|scale|pointer; Stapler; Water bottle|bottle; Tea|chai|coffee|tea cup|mug;
        Lunch box|tiffin; Laptop|computer; Phone|mobile`,
      honours: `File|folder|files; Diary|planner|lesson plan; Timetable|time table; Question paper|question papers; Marks sheet|mark sheet|marksheet;
        Report cards|report card; Glasses|spectacles|reading glasses; Calculator; Highlighter; Sticky notes|post-its; Paper clips|clips;
        Pen stand|pen holder|pencil holder; Calendar; Name plate|nameplate; Call bell|bell; Whistle; Keys|key bunch; Handkerchief|hanky|tissues;
        Hand sanitiser|hand sanitizer|sanitiser|sanitizer; Mask|face mask; Water jug|jug|flask; Flower vase|vase|plant; Photo frame|family photo;
        Glue|gum|fevicol; Scissors; Tape|cello tape|sellotape; Eraser|rubber`,
      rare: `ID card|lanyard; Circulars|circular|notices; Staff register|muster roll; Leave letters|leave application|leave letter; Late slips|late slip;
        Confiscated items|confiscated phone|confiscation box; Lost and found; First aid kit; Medicine|tablets|paracetamol|balm|Iodex|Vicks;
        Clipboard; Hole punch; Rubber stamp|stamp pad|ink pad|school seal; Gold stars|stickers|star stickers|smiley stickers; Pencil sharpener|sharpener;
        Answer key|marking scheme|solution manual; Address book|phone directory|contact list; Biscuits|snacks|chocolates|toffees;
        Newspaper|newspapers|magazine; Visiting cards|business cards; Projector remote|clicker|laser pointer; Pen drive|USB drive|flash drive;
        Charger|extension board|extension cord; Earphones|headphones; Microphone|mic`,
      deep: `Cane stand|cane holder; Inkpot|ink pot|inkwell|ink bottle; Blotting paper|blotter; Fountain pen|dip pen; Carbon paper;
        Typewriter; Abacus; Hourglass|sand timer; Egg timer|kitchen timer|timer; Desk globe|globe; Paperweight; Letter opener;
        Bookends; Magnifying glass; Desk fan|table fan; Electric kettle|kettle|immersion rod; Umbrella; Shawl|sweater|cardigan; Spare shoes|chappals;
        Mirror|comb|hairbrush; Perfume|deodorant|deo; Agarbatti|incense|dhoop; Idol|god photo|small idol; Kumkum|vibhuti`,
      legendary: 'Rolodex',
    },
    facts: { Rolodex: 'A rotating card file for names and phone numbers that sat on office desks before smartphones.' },
  },
  {
    id: 'school-stationery-brand',
    category: 'school',
    prompt: 'Name a stationery brand',
    qualifier: 'Brands of pens, pencils, notebooks, art supplies or office stationery sold in India or worldwide',
    groups: {
      textbook: `Camlin|camel; Natraj|nataraj; Apsara; Doms; Cello; Reynolds; Parker; Faber-Castell|faber castell; Classmate; Pilot; Staedtler; Bic;
        Linc; Luxor; Hero`,
      honours: `Flair; Montex; Rotomac; Add Gel|addgel; Navneet; Kokuyo; Paper Mate|papermate; Pentel; Zebra; Uni-ball|uniball; Sharpie; Stabilo;
        Pelikan; Lamy; Sheaffer; Cross; Waterman; Montblanc|mont blanc; Crayola; Rorito; Kores; Fevicol; Pidilite; Fevikwik|fevi kwik; Scotch;
        3M; Post-it|postit; Maped; Milan; Derwent; Prismacolor; Winsor and Newton|winsor & newton; Canson; Moleskine; Oxford;
        Pukka Pads|pukka; Paperkraft|paper kraft; Kangaro; Kanex; Trimax`,
      rare: `Hauser; Pierre Cardin; Ohto; Sailor; Platinum; Kaweco; Diamine; Quink; Chelpark; Sakura; Tombow; Muji; Midori; Rhodia;
        Clairefontaine; Mead; Five Star; Casio; Citizen; Texas Instruments; Brustro; Fabriano; Strathmore; Pebeo; Mont Marte; Leuchtturm;
        Tesa; Sundaram`,
      deep: `Venus; Eagle; Dixon Ticonderoga|ticonderoga; Koh-i-Noor|kohinoor; Cretacolor; Caran d'Ache|caran dache; Schwan-Stabilo; Schneider;
        Lyra; Berol; Atlas; Bluebird; Blueline; Aarvee; Anupam; Triveni`,
      legendary: 'Rotring',
    },
    facts: { Rotring: 'A German brand famous for tubular technical pens and drafting tools, a favourite of engineering and architecture students.' },
  },
  {
    id: 'school-event',
    category: 'school',
    prompt: 'Name a school event, day or celebration',
    qualifier: 'Events and days that Indian schools commonly hold or observe',
    groups: {
      textbook: `Annual Day|annual function; Sports Day; Independence Day; Republic Day; Teachers' Day|teachers day; Children's Day|childrens day;
        Parent-teacher meeting|PTM|parents teachers meeting; Exams|exam|examination; Assembly|morning assembly; Farewell|farewell party;
        Result day|results day; Picnic|school picnic|field trip|excursion`,
      honours: `Fancy dress|fancy dress competition; Talent show|talent day; Science exhibition|science fair; Art exhibition; Book fair;
        Quiz competition|quiz; Debate competition|debate; Elocution|elocution competition; Recitation competition|recitation; Dance competition;
        Singing competition; Drawing competition|painting competition; Rangoli competition|rangoli; Prize distribution|prize day|awards day;
        Investiture ceremony|investiture; Graduation day|graduation; Orientation day|orientation; First day of school|first day;
        Open house|open day; Christmas celebration|Christmas; Diwali celebration|Diwali; Holi celebration|Holi; Eid celebration|Eid;
        Onam celebration|Onam; Pongal celebration|Pongal; Ganesh Chaturthi; Dussehra; Navratri|garba|dandiya; Ugadi; Rakhi|Raksha Bandhan;
        Janmashtami; Kannada Rajyotsava|Rajyotsava; Gandhi Jayanti; Hindi Diwas|Hindi Day`,
      rare: `Founders' Day|founder's day; Foundation Day; Environment Day|World Environment Day; Earth Day; Yoga Day|International Yoga Day;
        Science Day|National Science Day; Maths Day|National Mathematics Day; Literacy Day; Van Mahotsav|tree plantation drive|tree planting;
        Cleanliness drive|Swachh Bharat; Blood donation camp|health camp|eye camp|dental camp; Road safety week|road safety day;
        Fire drill|mock drill|evacuation drill; Career day|career fair|career counselling; Alumni meet|alumni day|reunion;
        Inter-house competition|house competition; Hackathon; Robotics competition; Tech fest|techfest; Cultural fest|cultural day;
        Heritage walk|heritage day; Mela|school fete|fete|carnival|fun fair|funfair; Food fest|food festival; Bake sale; Kite festival|Makar Sankranti|Sankranti`,
      deep: `Pyjama day|pajama day; Crazy hair day; Twin day|twinning day; Colour day|color day; Mufti day|casual day|non-uniform day|own clothes day;
        Pet day|pet show; Grandparents' Day|grandparents day; Mother's Day; Father's Day; Kite flying day;
        Lohri; Bihu; Baisakhi|Vaisakhi`,
      legendary: 'Bagless day|No-bag day',
    },
    facts: { 'Bagless day': 'A day, now encouraged in many Indian schools, when students come without textbooks for activities, games and crafts.' },
  },
  {
    id: 'school-uniform',
    category: 'school',
    prompt: 'Name an item of school uniform',
    qualifier: 'Clothing and accessories that are part of a typical school uniform in India or abroad',
    groups: {
      textbook: `Shirt; Trousers|pants; Shorts|half pants; Skirt; Tie; Belt; Shoes|school shoes; Socks; Blazer; Sweater|jumper|pullover;
        Pinafore|tunic; Pinafore dress|jumper dress`,
      honours: `Salwar kameez|salwar|kameez|churidar; Dupatta|chunni; Kurta; Pyjama|pajama; Ribbon|hair ribbon; Hair band|hairband; Hair clips|hair clip;
        Bow|hair bow; Badge|school badge; Name badge|name tag|nametag; ID card|identity card|lanyard; House badge|house tie; Cap|school cap;
        Hat|school hat; Sports shoes|PT shoes|canvas shoes|sneakers|trainers; Track pants|trackpants|tracksuit|track suit; T-shirt|tshirt|polo shirt|polo;
        Jacket|windcheater|windbreaker; Raincoat; Cardigan; Hoodie|sweatshirt; Scarf|muffler; Gloves; Woollen cap|monkey cap|beanie; Waistcoat|vest|tank top`,
      rare: `Sash; Epaulettes|epaulette; Cravat|bow tie|bowtie; Clip-on tie; Suspenders|braces; Armband|arm band; Wristband; Headband;
        Bandana; Cufflinks; Blazer badge|blazer crest|school crest|crest; School logo|emblem; Knee socks|knee-high socks; Stockings|tights;
        Ankle socks; Pleated skirt; Kilt; Culottes|skort; Slipover|sleeveless sweater; Gilet|bodywarmer|body warmer; Sports bag|PE bag|kit bag;
        Shoe bag; Swim cap|swimming cap; Swimsuit|swimming costume`,
      deep: `Plimsolls|plimsoll; Gym shoes|gym pumps; Sandals|school sandals; Chappals|slippers; Mary Janes|mary jane shoes; Brogues; Oxford shoes|oxfords;
        Loafers; Velcro shoes; T-bar shoes|t-bar sandals; Boater hat|straw boater; Mortarboard|graduation cap; Academic gown|gown;
        Half saree|half sari|langa voni|pavada; Pattu pavadai; Ghagra choli|lehenga; Dhoti; Veshti|mundu; Turban|pagri; Gandhi cap|Gandhi topi`,
      legendary: 'Gymslip|gym slip',
    },
    facts: { Gymslip: 'A sleeveless pleated tunic worn over a blouse, once the standard British girls\' school dress.' },
  },
  {
    id: 'school-geometry-box',
    category: 'school',
    prompt: 'Name something in a geometry box',
    qualifier: 'Instruments and parts found in a standard school geometry box',
    groups: {
      textbook: `Compass|compasses|pair of compasses; Divider|dividers; Protractor; Ruler|scale|15 cm scale; Set square|set squares|setsquare;
        Pencil; Eraser|rubber; Sharpener|pencil sharpener`,
      honours: `Box|geometry box|compass box|tin box|case; Pencil lead|leads|lead; Compass screw|screw; Screwdriver|small screwdriver; Divider needle|needle|pointer;
        Pen attachment|pen holder; Spare lead|spare leads; Semicircular protractor|half circle protractor|180 degree protractor;
        Circular protractor|360 degree protractor; 30-60-90 set square|30-60 set square; 45-45-90 set square|45 set square; Centimetre scale|cm scale;
        Inch scale|inch ruler; Folding scale|folding ruler|zigzag scale; Stencil|stencils; Tracing paper`,
      rare: `Ellipse guide|ellipse template; Circle template|circle stencil; Angle gauge|angle finder; T-square|tee square; Flexicurve|flexible curve;
        Drawing pins|drawing pin|thumbtack|push pin; Paper clips|clips; Rubber bands|rubber band; Eraser shield; Lead sharpener|lead pointer;
        Compass pen|ink compass|technical pen; Tweezers; Proportional dividers; Bow compass|spring bow compass|beam compass; Masking tape|tape|sticky tape;
        Calculator; Slide rule; Magnifying glass`,
      deep: `Mini drafter|minidrafter|drafter; Planimeter; Parallel ruler|rolling ruler; Lettering stencil|lettering guide|alphabet stencil;
        Isometric template|isometric stencil; Perspective grid; Ruling pen; Dip pen|nib; Drawing ink|Indian ink|ink bottle; Trammel|beam trammel`,
      legendary: 'French curve',
    },
    facts: { 'French curve': 'A curved drawing template used to trace smooth curves in technical drawing.' },
  },
  {
    id: 'school-glassware',
    category: 'school',
    prompt: 'Name a piece of chemistry lab glassware or apparatus',
    qualifier: 'Glass or lab equipment used in school and college chemistry labs',
    groups: {
      textbook: `Beaker; Test tube; Conical flask|Erlenmeyer flask; Measuring cylinder|graduated cylinder; Burette; Pipette; Funnel;
        Round bottom flask|round-bottom flask; Bunsen burner; Tripod stand|tripod; Wire gauze`,
      honours: `Volumetric flask|standard flask; Flat bottom flask; Boiling tube; Dropper|dropping pipette; Watch glass; Petri dish;
        Evaporating dish|china dish|basin; Crucible; Crucible tongs|tongs; Condenser|Liebig condenser; Distillation flask; Separating funnel;
        Thistle funnel; Glass rod|stirring rod; Spatula; Mortar and pestle|mortar|pestle; Clamp|burette clamp; Retort stand|clamp stand|iron stand;
        Test tube holder; Test tube stand|test tube rack; Wash bottle; Reagent bottle; Spirit lamp; Gas jar; Delivery tube; Cork|rubber stopper|stopper;
        Thermometer; Weighing balance|balance; Desiccator; Water bath; Fume hood|fume cupboard`,
      rare: `Kipp's apparatus|kipps apparatus; Buchner funnel|Büchner funnel; Buchner flask|suction flask; Soxhlet extractor|soxhlet; Dean-Stark trap|Dean Stark apparatus;
        Reflux condenser; Allihn condenser; Claisen adapter; Fractionating column|Vigreux column; Three-necked flask|three neck flask; Schlenk flask;
        Dropping funnel|addition funnel; Nessler tube|Nessler cylinder; Cuvette; Titration tile|white tile; Kjeldahl flask; Pycnometer|density bottle;
        Hydrometer; Gooch crucible; Sintered funnel; Centrifuge tube; Syringe|gas syringe; Rotary evaporator|rotavap; Chromatography tank|TLC tank;
        Capillary tube|capillary; Melting point apparatus; Thiele tube; Heating mantle; Hot plate; Magnetic stirrer; Stir bar|stirring bar`,
      deep: `Dewar flask|Dewar; Cold finger|cold trap; Oil bath; Sand bath; Muffle furnace; Tube furnace; Drying oven|hot air oven; Incubator; Autoclave;
        Retort; Cucurbit; Aludel; Athanor; Pot still|still`,
      legendary: 'Alembic',
    },
    facts: { Alembic: 'An old two-part still of glass or copper used by alchemists; the word comes from Arabic.' },
  },
  {
    id: 'school-maths-topic',
    category: 'school',
    prompt: 'Name a topic in school mathematics',
    qualifier: 'Topics and chapters from Indian school maths syllabi (primary to Class 12)',
    groups: {
      textbook: `Algebra; Geometry; Trigonometry; Arithmetic; Fractions; Decimals; Percentages|percentage; Ratio and proportion|ratio; Mensuration;
        Statistics; Probability; Calculus; Number system|numbers; Addition; Subtraction; Multiplication; Division; Linear equations;
        Quadratic equations|quadratics; Triangles; Circles`,
      honours: `Polynomials; Factorisation|factorization|factors; HCF and LCM|HCF|LCM; Prime numbers|primes; Square roots|squares and square roots;
        Cubes and cube roots|cube roots; Exponents|powers|indices|laws of exponents; Integers; Whole numbers; Rational numbers; Irrational numbers;
        Real numbers; Coordinate geometry|co-ordinate geometry|coordinates; Lines and angles|angles; Quadrilaterals; Congruence|congruent triangles;
        Similarity|similar triangles; Area and perimeter|area|perimeter; Volume|surface area|volume and surface area; Symmetry; Constructions|geometric constructions;
        Data handling|bar graphs|pie charts|histograms; Mean median mode|mean|median|mode|averages; Time and calendar|clocks; Money|profit and loss;
        Simple interest; Compound interest; Speed distance time; Time and work; Patterns|number patterns; Sequences and series|arithmetic progression|AP`,
      rare: `Sets|set theory; Relations and functions|functions; Matrices; Determinants; Vectors|vector algebra; Three-dimensional geometry|3D geometry;
        Conic sections|parabola|ellipse|hyperbola; Straight lines; Permutations and combinations|permutations|combinations; Binomial theorem;
        Complex numbers; Mathematical induction; Limits and derivatives|limits|derivatives|differentiation; Integrals|integration;
        Differential equations; Application of derivatives|maxima and minima; Inverse trigonometric functions; Heights and distances;
        Trigonometric identities|trigonometric ratios; Pythagoras theorem|Pythagorean theorem; Surds; Linear programming; Conditional probability|Bayes theorem;
        Probability distributions|binomial distribution; Geometric progression|GP; Logarithms|logs; Quadrilateral properties`,
      deep: `Roman numerals; Vedic maths|Vedic mathematics; Tessellations|tessellation; Fibonacci sequence|Fibonacci numbers; Golden ratio;
        Pascal's triangle; Euclid's division lemma|Euclid's algorithm; Fundamental theorem of arithmetic; Remainder theorem|factor theorem;
        Heron's formula; Section formula|distance formula; Mid-point theorem|midpoint theorem; Basic proportionality theorem|BPT|Thales theorem;
        Cyclic quadrilaterals; Tangents to a circle|tangents; Areas related to circles|sectors and segments; Loci|locus; Number bases|binary numbers;
        Mathematical reasoning|proofs; Truth tables|mathematical logic; Boolean algebra`,
      legendary: 'Magic squares',
    },
    facts: { 'Magic squares': 'Grids of numbers where every row, column and diagonal adds up to the same total; Indian mathematicians studied them over a thousand years ago.' },
  },
  {
    id: 'school-physics-topic',
    category: 'school',
    prompt: 'Name a topic in school physics',
    qualifier: 'Physics topics and chapters from Indian school syllabi (Class 6 to 12)',
    groups: {
      textbook: `Force|forces; Motion; Light; Reflection of light|reflection; Refraction of light|refraction; Sound; Heat; Electricity|current electricity;
        Magnetism|magnets; Gravitation|gravity; Work and energy|energy; Pressure; Waves; Atoms|atomic structure; Simple machines|machines;
        Speed and velocity|speed|velocity; Friction; Laws of motion|Newton's laws`,
      honours: `Static electricity|electrostatics; Electric circuits|circuits; Ohm's law; Electric power; Heating effect of current;
        Electromagnetic induction; Alternating current|AC; Electric motor; Electric generator|dynamo; Transformer; Lenses|lens; Mirrors|spherical mirrors;
        Ray optics|optics; Human eye; Dispersion of light|dispersion|rainbow; Scattering of light; Total internal reflection; Wave optics;
        Interference; Diffraction; Polarisation|polarization; Kinematics; Projectile motion; Circular motion; Vectors; Units and measurements|SI units;
        Centre of mass|center of mass; Moment of inertia; Rotational motion; Torque; Angular momentum; Momentum; Impulse; Collisions;
        Kepler's laws; Satellites; Escape velocity|escape speed; Free fall; Weight and mass; Thermal expansion; Calorimetry; Specific heat;
        Latent heat; Conduction; Convection; Radiation; Gas laws|kinetic theory of gases; Thermodynamics; Boyle's law`,
      rare: `Fluid mechanics; Buoyancy; Archimedes' principle|Archimedes principle; Density; Pascal's law; Hydraulic press|hydraulics; Bernoulli's principle;
        Viscosity; Surface tension; Capillarity|capillary action; Elasticity; Hooke's law; Young's modulus; Oscillations; Simple harmonic motion|SHM;
        Simple pendulum|pendulum; Resonance; Damped oscillations; Transverse waves; Longitudinal waves; Standing waves|stationary waves; Superposition;
        Beats; Doppler effect; Echo; Ultrasound; Sonar|SONAR; Semiconductors; p-n junction|diode; Transistor; Logic gates; Rectifier; LED;
        Solar cell; Zener diode; Communication systems; Modulation; Optical fibre|optical fiber; Photoelectric effect; Dual nature of matter|de Broglie wavelength;
        Bohr model; Rutherford's model|alpha scattering; Hydrogen spectrum; Radioactivity; Nuclear fission; Nuclear fusion; Half-life;
        Mass defect|binding energy; Nuclear reactor; Mass-energy equivalence`,
      deep: `Special relativity|relativity; Time dilation; Black holes|black hole; Gravitational waves; Big Bang; Dark matter; Wave-particle duality;
        Compton effect; Heisenberg uncertainty principle|uncertainty principle; Quantum mechanics|quantum physics; Superconductivity; Lasers|laser;
        Holography; Triboelectricity; Eddy currents; Lenz's law; Faraday's laws; Biot-Savart law; Ampere's circuital law; Gauss's law; Coulomb's law;
        Kirchhoff's laws; Wheatstone bridge; Meter bridge; Potentiometer; Cyclotron; Mass spectrometer`,
      legendary: 'Hall effect',
    },
    facts: { 'Hall effect': 'A voltage appears across a current-carrying conductor placed in a magnetic field; it is used in many sensors.' },
  },
  {
    id: 'school-biology-topic',
    category: 'school',
    prompt: 'Name a topic in school biology',
    qualifier: 'Biology topics and chapters from Indian school syllabi (Class 6 to 12)',
    groups: {
      textbook: `Cell|cell biology|cell structure; Photosynthesis; Respiration|cellular respiration; Digestion|digestive system; Nutrition;
        Circulation|circulatory system|blood circulation; Reproduction|reproductive system; Evolution; Genetics|heredity; Ecosystem|ecosystems;
        Ecology; Food chain|food web; Classification|taxonomy|classification of organisms; Plant kingdom|plants; Animal kingdom|animals;
        Germination; Human body|human body systems`,
      honours: `Excretion|excretory system; Nervous system; Control and coordination; Reflex action|reflexes; Sense organs|senses; Endocrine system|hormones;
        Skeletal system|skeleton; Muscular system|muscles; Movement|locomotion; Transport in plants|transpiration; Xylem and phloem; Osmosis|diffusion;
        Tissues|plant tissues|animal tissues; Cell division|mitosis|meiosis; Chromosomes; Microorganisms|microbes; Bacteria; Viruses|virus; Fungi;
        Diseases|health and disease; Immunity|immune system; Vaccination|vaccines; Balanced diet; Vitamins; Minerals; Proteins; Carbohydrates; Fats;
        Pollination; Fertilisation|fertilization; Seed dispersal; Vegetative propagation; Asexual reproduction; Sexual reproduction; Adaptation|adaptations;
        Habitat; Biomes; Forests; Conservation|wildlife conservation; Biodiversity; Endangered species; National parks|wildlife sanctuaries;
        Mendel's laws|Mendelian genetics; DNA; Genes; Natural selection|Darwin; Human evolution`,
      rare: `Biotechnology; Genetic engineering; Recombinant DNA technology; PCR|polymerase chain reaction; DNA fingerprinting; Cloning; Gene therapy;
        GMOs|genetically modified organisms; Transgenic animals; Bt cotton; Stem cells; Tissue culture; Biofertilisers|biofertilizers; Biogas; Fermentation;
        Enzymes; Biomolecules; DNA replication; Transcription; Translation|protein synthesis; Genetic code; Operon|lac operon; Human Genome Project;
        Mutations|mutation; Genetic disorders; Down syndrome; Haemophilia|hemophilia; Colour blindness|color blindness; Sickle cell anaemia|sickle cell anemia;
        Thalassaemia|thalassemia; Population ecology; Population interactions; Mutualism; Commensalism; Parasitism; Predation; Ecological succession;
        Energy flow; Ecological pyramids; Nutrient cycling|biogeochemical cycles; Carbon cycle; Nitrogen cycle; Water cycle; Decomposition|decomposers;
        Biodiversity hotspots; Endemic species; Invasive species; In situ conservation; Ex situ conservation; Seed banks|gene banks`,
      deep: `Law of dominance; Law of segregation; Law of independent assortment; Monohybrid cross; Dihybrid cross; Test cross; Incomplete dominance;
        Codominance; Multiple alleles; ABO blood groups|blood groups; Rh factor; Linkage; Crossing over; Sex determination; Pedigree analysis; Pleiotropy;
        Epistasis; Hardy-Weinberg principle; Genetic drift; Gene flow; Founder effect; Speciation; Adaptive radiation; Convergent evolution;
        Homologous organs; Analogous organs; Vestigial organs; Fossils|palaeontology; Origin of life; Miller-Urey experiment; Lamarckism;
        Punctuated equilibrium; Peppered moth; Antibiotic resistance; Artificial selection|selective breeding; Animal husbandry; Apiculture|beekeeping;
        Sericulture; Pisciculture; Green revolution; White revolution|Operation Flood`,
      legendary: 'Amensalism',
    },
    facts: { Amensalism: 'An interaction where one species is harmed and the other is unaffected, like an elephant trampling grass.' },
  },
  {
    id: 'school-library-section',
    category: 'school',
    prompt: 'Name a section or item you find in a school library',
    qualifier: 'Sections, shelves and items in a typical school library',
    groups: {
      textbook: `Fiction|novels|storybooks; Non-fiction|nonfiction; Reference books|reference section|reference; Encyclopedia|encyclopaedia; Dictionary;
        Atlas; Magazines|magazine; Newspapers|newspaper; Comics|comic books|Tinkle|Amar Chitra Katha|Champak; Textbooks; Picture books|children's books;
        Computers|computer; Librarian; Reading room|reading area|study area; Tables|table; Chairs|chair`,
      honours: `Biographies|biography|autobiographies; History books|history section; Geography books|geography section; Science books|science section;
        Maths books|mathematics books; Poetry|poetry books; Plays|drama books; Short stories|anthologies; Mythology|myths; Folk tales|folktales|fairy tales;
        Fables|Panchatantra|Jataka tales; Tenali Raman stories|Tenali Raman; Akbar Birbal stories|Birbal; Vikram and Betaal|Vikram Betal; Mystery|detective stories;
        Adventure|adventure books; Fantasy; Science fiction|sci-fi; Horror|ghost stories; Humour|funny books; Joke books|jokes; Riddle books|riddles;
        Puzzle books|puzzles; Crosswords; General knowledge|GK books; Current affairs; Library card|borrowing card; Issue register|issue counter;
        Return desk|returns box|book drop; Date due slip|due date stamp|date stamp; Bookmarks|bookmark; Book covers|book cover; Notice board|display board;
        Posters; Book trolley|trolley; Ladder|step stool; Bookends|bookend; Book display|new arrivals`,
      rare: `Accession register; Card catalogue|card catalog; Catalogue|catalog|OPAC; Dewey Decimal System|Dewey decimal|DDC; Call numbers|call number;
        Shelf labels|spine labels|labels; Barcodes|barcode; RFID tags|RFID; Security gates|security gate; CCTV; Reading list; Reading log; Book review;
        Book club; Storytelling session|story time|storytime; Read aloud; Staff picks; Book of the month; Reading challenge; Lost books|fines|overdue fines;
        Silent zone|silence please sign|silence sign; Photocopier|xerox machine|xerox; Printer; Scanner; Internet access|wifi; Audio books|audiobooks;
        CDs|DVDs; Maps|globes; Charts; Games|board games|chess sets|chess`,
      deep: `Braille books|braille; Talking books|talking book; Cassettes|audio cassettes; VHS tapes|VHS; Filmstrips|filmstrip; Daguerreotype;
        Slides; Rare books|special collection; Archives|school archives; Old magazines|back issues; Bound volumes|bound journals; Yearbooks|yearbook|year book;
        School magazines|school magazine; Honours boards|honours board|roll of honour; Trophies|trophy cabinet; Rubik's cubes|jigsaw puzzles|jigsaws`,
      legendary: 'Microfiche|microfilm',
    },
    facts: { Microfiche: 'A flat sheet of film holding tiny photographed pages, read through a special magnifying viewer.' },
  },
  {
    id: 'school-transport',
    category: 'school',
    prompt: 'Name a way students get to school',
    qualifier: 'Ways students in India and elsewhere travel to and from school',
    groups: {
      textbook: `Walking|on foot|walk; School bus|bus; Bicycle|cycle|bike|cycling; Car|carpool|car pool; Auto rickshaw|auto|autorickshaw|rickshaw|tuk-tuk;
        School van|van|Omni; Scooter|scooty|moped; Motorbike|motorcycle|two-wheeler`,
      honours: `Metro|metro train|subway|underground; Train|local train|suburban train; City bus|public bus|BMTC|BEST|KSRTC; Cab|taxi|Ola|Uber|Rapido;
        Parents drop|dropped by parents|dropped by father|dropped by mother; Grandparents drop|grandfather|grandmother; Older sibling|brother|sister;
        Neighbour's car|neighbor's car|friend's car; Driver|family driver|chauffeur; Cycle rickshaw|rickshaw puller|pedal rickshaw;
        Tempo|shared auto|share auto; Mini bus|minibus|tempo traveller; Lift|lift from a friend|ride with a friend; School hostel|hostel|boarding;
        Electric scooter|e-scooter; E-rickshaw|erickshaw|e-rick; Electric bus|e-bus; Skates|roller skates|skateboard; Kick scooter|scooter-kick`,
      rare: `Tonga|horse cart|horse carriage; Bullock cart|ox cart; Camel|camel cart; Donkey|mule; Boat|ferry|country boat|canoe; Rowing boat|row boat;
        Motor boat|speed boat; Water taxi|water bus; Bamboo raft|raft; Houseboat; Shikara; Catamaran; Kayak; Cable car|ropeway;
        Zip line|zipline; Chairlift; Toy train|hill train; Mountain train|Nilgiri Mountain Railway; Tram|trams|streetcar; Trolleybus;
        Skis|skiing; Snowshoes; Sled|sledge|sleigh; Dog sled; Snowmobile; Hoverboard; Segway; Unicycle; Stilts`,
      deep: `Pushcart|handcart; Elephant; Pony|pony ride; Jeep|shared jeep|Willys jeep; Tractor|tractor trolley; Truck lift|lorry lift; Rope bridge|bridge crossing on foot;
        Gondola|gondola lift; Funicular|cliff railway; Rack railway|cog railway; Ferry bus; Hovercraft; Seaplane|helicopter|airplane|aeroplane|plane|flight`,
      legendary: 'Coracle',
    },
    facts: { Coracle: 'A small, round, bowl-like boat made of bamboo or wicker covered with hide or tarred cloth, still used on some Indian rivers such as the Tungabhadra.' },
  },
  {
    id: 'school-campus-place',
    category: 'school',
    prompt: 'Name a place or room on a school campus',
    qualifier: 'Rooms, buildings and outdoor areas found at Indian schools',
    groups: {
      textbook: `Classroom|class; Playground|ground|field|sports ground; Library; Laboratory|lab|science lab|computer lab|physics lab|chemistry lab|biology lab;
        Canteen|cafeteria|tuck shop|mess; Staffroom|staff room|teachers' room; Principal's office|principal's room|principal office|head's office;
        Office|school office|front office|admin block|reception; Auditorium|assembly hall|hall; Gate|main gate|school gate; Washroom|toilets|restroom|bathroom;
        Corridor|hallway|passage; Staircase|stairs`,
      honours: `Assembly ground|assembly area|quadrangle|quad|courtyard; Basketball court|volleyball court|tennis court|badminton court|football field|cricket ground|cricket pitch;
        Music room; Art room|drawing room; Dance room|dance hall; Computer room; Smart classroom|smart class|digital classroom; Seminar hall|conference room|meeting room;
        Sick room|infirmary|medical room|sickbay; Water cooler area|drinking water point|water cooler; Parking|parking lot|cycle stand|bicycle shed|cycle shed;
        Security room|guard room|gatehouse; Notice board area|noticeboard; Garden|school garden|lawn; Swimming pool|pool; Gym|gymnasium|indoor stadium|indoor sports hall;
        Terrace|rooftop; Hostel|dormitory|boarding house; Chapel|prayer hall|prayer room|temple|school temple; Counsellor's room|counsellor room|counseling room`,
      rare: `Science park|science garden; Amphitheatre|amphitheater|open air theatre|open-air theatre; Skating rink|rink; Shooting range|archery range; Golf course|driving range;
        Stables|horse stable; Farm|school farm|agricultural plot|kitchen garden|vegetable garden|herb garden; Greenhouse|polyhouse|nursery;
        Pond|fish pond|lotus pond|school pond; Butterfly garden|butterfly park; Rainwater harvesting pit|rainwater harvesting|water harvesting tank;
        Biogas plant|compost pit|vermicompost pit|waste segregation area; Solar panels|solar roof; Wi-fi lounge|student lounge|common room; Lost and found room|lost property;
        Store room|store|stationery shop|school store|book shop|uniform shop|uniform store; Photocopy room|xerox room|printing room; Server room|IT room;
        Robotics lab|tinkering lab|ATL|maker space|innovation lab; Language lab; Math lab|maths lab; Social science lab|geography lab; Home science lab|home science room;
        Pottery room|ceramics room|craft room|workshop; Woodwork room|carpentry workshop; Theatre|drama room|black box; Recording studio|radio room|media room|podcast studio`,
      deep: `Planetarium; Herbarium room; Museum|school museum; Archive room|archives; Bell tower|clock tower; Cloister|colonnade;
        Sanatorium; Rifle range; Boat house|boathouse; Squash court; Fives court|rackets court;
        Ice rink; Velodrome|cycling track; Cross-country track|running track|athletics track|jogging track; Obstacle course|adventure park|rope course|ropes course;
        Climbing wall|rock climbing wall; Zip line|zipline; Skate park|skatepark; Bird hide`,
      legendary: 'Observatory|telescope dome',
    },
    facts: { Observatory: 'A few well-funded schools have their own rooftop telescope dome for astronomy club nights.' },
  },
];
