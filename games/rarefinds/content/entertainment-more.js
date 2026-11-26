module.exports = [
  {
    id: 'ent-dreamworks-film',
    category: 'entertainment',
    prompt: 'Name a DreamWorks Animation feature film',
    qualifier: 'Animated feature films released by DreamWorks Animation, 1998 to 2025',
    missingTier: 'deep',
    answers: `
      Antz; The Prince of Egypt|Prince of Egypt; The Road to El Dorado|Road to El Dorado; Chicken Run; Shrek@Shrek; Spirit: Stallion of the Cimarron|Spirit;
      Sinbad: Legend of the Seven Seas|Sinbad; Shark Tale; Shrek 2; Madagascar@Madagascar (2005 film); Wallace & Gromit: The Curse of the Were-Rabbit|Curse of the Were-Rabbit;
      Over the Hedge; Flushed Away; Shrek the Third|Shrek 3; Bee Movie; Kung Fu Panda@Kung Fu Panda (film); Madagascar: Escape 2 Africa|Madagascar 2;
      Monsters vs. Aliens|Monsters vs Aliens; How to Train Your Dragon@How to Train Your Dragon (2010 film); Shrek Forever After|Shrek 4; Megamind; Kung Fu Panda 2;
      Puss in Boots@Puss in Boots (2011 film); Rise of the Guardians; Madagascar 3: Europe's Most Wanted|Madagascar 3; The Croods; Turbo@Turbo (2013 film);
      Mr. Peabody & Sherman|Mr Peabody and Sherman; How to Train Your Dragon 2; Penguins of Madagascar@Penguins of Madagascar (film); Home@Home (2015 film);
      Kung Fu Panda 3; Trolls@Trolls (film); The Boss Baby; Captain Underpants: The First Epic Movie|Captain Underpants;
      How to Train Your Dragon: The Hidden World|The Hidden World; Abominable@Abominable (2019 film); Trolls World Tour; The Croods: A New Age|The Croods 2;
      The Boss Baby: Family Business; Spirit Untamed; The Bad Guys@The Bad Guys (film); Puss in Boots: The Last Wish; Ruby Gillman, Teenage Kraken|Ruby Gillman;
      Trolls Band Together|Trolls 3; Kung Fu Panda 4; The Wild Robot; Dog Man@Dog Man (film); Gabby's Dollhouse: The Movie|Gabbys Dollhouse; The Bad Guys 2;
      Joseph: King of Dreams`,
    legendary: ['Joseph: King of Dreams'],
    facts: { 'Joseph: King of Dreams': 'A 2000 direct-to-video musical that retells the Bible story of Joseph.' },
  },
  {
    id: 'ent-ghibli-film',
    category: 'entertainment',
    prompt: 'Name a Studio Ghibli film',
    qualifier: 'Feature films from Nausicaä (1984) to The Boy and the Heron (2023)',
    missingTier: 'deep',
    answers: `
      Nausicaä of the Valley of the Wind|Nausicaa@Nausicaä of the Valley of the Wind (film); Castle in the Sky|Laputa; Grave of the Fireflies;
      My Neighbor Totoro|My Neighbour Totoro|Totoro; Kiki's Delivery Service|Kikis Delivery Service|Kiki; Only Yesterday@Only Yesterday (1991 film); Porco Rosso;
      Ocean Waves; Pom Poko; Whisper of the Heart; Princess Mononoke|Mononoke; My Neighbors the Yamadas|The Yamadas; Spirited Away; The Cat Returns;
      Howl's Moving Castle|Howls Moving Castle@Howl's Moving Castle (film); Tales from Earthsea; Ponyo; Arrietty|The Secret World of Arrietty;
      From Up on Poppy Hill|Poppy Hill; The Wind Rises; The Tale of the Princess Kaguya|Princess Kaguya@The Tale of the Princess Kaguya (film); When Marnie Was There@When Marnie Was There (film); The Red Turtle;
      Earwig and the Witch; The Boy and the Heron`,
    legendary: ['Ocean Waves'],
    facts: { 'Ocean Waves': 'A 1993 teen drama made for TV by younger Ghibli staff.' },
  },
  {
    id: 'ent-hp-character',
    category: 'entertainment',
    prompt: 'Name a Harry Potter character',
    qualifier: 'Named characters (people, creatures and ghosts) from the seven books and the films',
    missingTier: 'deep',
    groups: {
      textbook: 'Harry Potter|Harry; Hermione Granger|Hermione; Ron Weasley|Ron; Albus Dumbledore|Dumbledore; Severus Snape|Snape; Lord Voldemort|Voldemort|Tom Riddle; Draco Malfoy|Draco; Rubeus Hagrid|Hagrid; Sirius Black|Sirius; Dobby',
      honours: `Minerva McGonagall|McGonagall; Neville Longbottom|Neville; Luna Lovegood|Luna; Ginny Weasley|Ginny; Fred Weasley|Fred; George Weasley|George;
        Bellatrix Lestrange|Bellatrix; Remus Lupin|Lupin; Cedric Diggory|Cedric; Dolores Umbridge|Umbridge; Hedwig; Fawkes; Peter Pettigrew|Wormtail|Pettigrew;
        Lucius Malfoy|Lucius; Cho Chang|Cho; Viktor Krum|Krum; Fleur Delacour|Fleur; Moaning Myrtle|Myrtle; Gilderoy Lockhart|Lockhart; Argus Filch|Filch;
        Molly Weasley|Mrs Weasley; Arthur Weasley|Mr Weasley; Crookshanks; Scabbers; Nagini; Buckbeak; Kreacher; Mad-Eye Moody|Alastor Moody|Moody;
        Nymphadora Tonks|Tonks; Vernon Dursley|Uncle Vernon; Petunia Dursley|Aunt Petunia; Dudley Dursley|Dudley; Rita Skeeter|Skeeter; Quirinus Quirrell|Quirrell;
        Fluffy; Aragog; Norbert; Horace Slughorn|Slughorn; Sybill Trelawney|Trelawney; Filius Flitwick|Flitwick; Pomona Sprout|Sprout`,
      rare: `Seamus Finnigan|Seamus; Dean Thomas; Lavender Brown|Lavender; Parvati Patil|Parvati; Padma Patil|Padma; Oliver Wood|Wood; Percy Weasley|Percy; Bill Weasley|Bill;
        Charlie Weasley|Charlie; Gregory Goyle|Goyle; Vincent Crabbe|Crabbe; Pansy Parkinson|Pansy; Madam Pomfrey|Poppy Pomfrey; Madam Hooch|Rolanda Hooch; Madam Pince|Irma Pince;
        Peeves; Nearly Headless Nick|Sir Nicholas; The Bloody Baron|Bloody Baron; The Fat Friar|Fat Friar; The Fat Lady|Fat Lady; Cornelius Fudge|Fudge; Rufus Scrimgeour|Scrimgeour;
        Kingsley Shacklebolt|Kingsley; Garrick Ollivander|Ollivander; Ludo Bagman|Bagman; Barty Crouch Jr; Barty Crouch Sr; Gellert Grindelwald|Grindelwald; Griphook; Winky;
        Firenze; Grawp; Colin Creevey|Creevey; Lily Potter|Lily Evans; James Potter; Salazar Slytherin|Slytherin; Godric Gryffindor|Gryffindor; Rowena Ravenclaw|Ravenclaw;
        Helga Hufflepuff|Hufflepuff; Marcus Flint|Flint; Cormac McLaggen|McLaggen; Ernie Macmillan|Ernie; Hannah Abbott|Hannah; Justin Finch-Fletchley|Justin; Susan Bones|Susan;
        Lee Jordan; Angelina Johnson|Angelina; Katie Bell; Alicia Spinnet|Alicia; Romilda Vane|Romilda; Blaise Zabini|Zabini; Theodore Nott|Nott; Fang; Trevor; Pigwidgeon|Pig; Errol`,
      deep: `Fenrir Greyback|Greyback; Dedalus Diggle|Diggle; Mundungus Fletcher|Mundungus; Elphias Doge|Doge; Xenophilius Lovegood|Xenophilius; Aberforth Dumbledore|Aberforth;
        Ariana Dumbledore|Ariana; Cuthbert Binns|Professor Binns|Binns; Charity Burbage|Burbage; Amycus Carrow; Alecto Carrow; Antonin Dolohov|Dolohov; Augustus Rookwood|Rookwood;
        Walden Macnair|Macnair; Igor Karkaroff|Karkaroff; Olympe Maxime|Madame Maxime; Gabrielle Delacour|Gabrielle; Mafalda Hopkirk|Hopkirk; Merope Gaunt|Merope; Marvolo Gaunt|Marvolo;
        Morfin Gaunt|Morfin; Nicolas Flamel|Flamel; Perenelle Flamel; Arabella Figg|Mrs Figg; Marge Dursley|Aunt Marge; Stan Shunpike|Stan; Mrs Norris; Hokey;
        Bathilda Bagshot|Bagshot; Ignotus Peverell|Peverell; Newt Scamander|Newt; Bane; Dennis Creevey; Zacharias Smith; Marietta Edgecombe|Marietta`,
      legendary: 'Wilhelmina Grubbly-Plank|Grubbly-Plank; Hepzibah Smith',
    },
    facts: {
      'Wilhelmina Grubbly-Plank': 'The substitute Care of Magical Creatures teacher who covers for Hagrid.',
      'Hepzibah Smith': 'A rich collector who showed young Tom Riddle her treasures and was later murdered.',
    },
  },
  {
    id: 'ent-hogwarts-teacher',
    category: 'entertainment',
    prompt: 'Name a Hogwarts professor or headmaster',
    qualifier: 'Teachers and headmasters of Hogwarts named in the seven books',
    missingTier: 'deep',
    groups: {
      textbook: 'Albus Dumbledore|Dumbledore; Severus Snape|Snape; Minerva McGonagall|McGonagall; Rubeus Hagrid|Hagrid; Remus Lupin|Lupin; Dolores Umbridge|Umbridge',
      honours: `Gilderoy Lockhart|Lockhart; Quirinus Quirrell|Quirrell; Horace Slughorn|Slughorn; Sybill Trelawney|Trelawney; Filius Flitwick|Flitwick; Pomona Sprout|Sprout;
        Alastor Moody|Mad-Eye Moody|Moody; Madam Hooch|Rolanda Hooch; Cuthbert Binns|Professor Binns|Binns`,
      rare: `Aurora Sinistra|Sinistra; Septima Vector|Vector; Bathsheda Babbling|Babbling; Charity Burbage|Burbage; Wilhelmina Grubbly-Plank|Grubbly-Plank; Firenze;
        Amycus Carrow; Alecto Carrow; Armando Dippet|Dippet; Phineas Nigellus Black|Phineas Nigellus`,
      deep: 'Herbert Beery|Beery; Galatea Merrythought|Merrythought; Dilys Derwent|Derwent; Dexter Fortescue; Everard; Dumbledore\'s predecessor|Headmaster Dippet',
      legendary: 'Silvanus Kettleburn|Kettleburn',
    },
    facts: { 'Silvanus Kettleburn': 'Hagrid\'s predecessor teaching Care of Magical Creatures, who retired to enjoy his remaining limbs.' },
  },
  {
    id: 'ent-marvel-hero',
    category: 'entertainment',
    prompt: 'Name a Marvel superhero',
    qualifier: 'Heroes (solo or team members) from Marvel comics or the MCU, up to 2025',
    missingTier: 'deep',
    groups: {
      textbook: 'Spider-Man|Spiderman|Peter Parker; Iron Man|Tony Stark; Captain America|Steve Rogers; Thor; Hulk|The Hulk|Bruce Banner; Black Panther|T\'Challa; Doctor Strange|Dr Strange; Wolverine; Deadpool',
      honours: `Black Widow|Natasha Romanoff; Hawkeye|Clint Barton; Ant-Man|Antman|Scott Lang; Captain Marvel|Carol Danvers; Scarlet Witch|Wanda Maximoff|Wanda; Vision;
        Falcon|Sam Wilson; Winter Soldier|Bucky Barnes|Bucky; War Machine|James Rhodes|Rhodey; Star-Lord|Starlord|Peter Quill; Gamora; Drax; Rocket|Rocket Raccoon;
        Groot; Mantis; Nebula; Wasp|Hope van Dyne; Shang-Chi; Ms. Marvel|Ms Marvel|Kamala Khan; Miles Morales; Daredevil|Matt Murdock; Punisher|Frank Castle;
        Cyclops|Scott Summers; Storm; Jean Grey|Phoenix; Rogue; Gambit; Beast|Hank McCoy; Nightcrawler; Professor X|Charles Xavier; Iceman; Colossus;
        Mr. Fantastic|Mister Fantastic|Reed Richards; Invisible Woman|Sue Storm; Human Torch|Johnny Storm; Thing|The Thing|Ben Grimm; Silver Surfer; Ghost Rider;
        Luke Cage; Iron Fist|Danny Rand; Jessica Jones; Moon Knight; She-Hulk|Jennifer Walters`,
      rare: `Quicksilver|Pietro Maximoff; Nick Fury|Fury; Okoye; Shuri; Valkyrie; Blade; Hercules; Namor|Sub-Mariner; Elektra; Cloak and Dagger|Cloak; Dagger;
        Spider-Woman|Jessica Drew; Spider-Gwen|Ghost-Spider|Gwen Stacy; Kate Bishop; Echo|Maya Lopez; Nova|Richard Rider; Adam Warlock; Havok; Psylocke; Cable; Domino;
        Bishop; Jubilee; Kitty Pryde|Shadowcat; Angel|Archangel|Warren Worthington; Longshot; Dazzler; Banshee; Emma Frost; Sunspot; Cannonball; Magik; Wolfsbane;
        Ironheart|Riri Williams; Ikaris; Sersi; Thena; Kingo; Makkari; Phastos; Druig; Ajak; Spider-Ham|Peter Porker; Spider-Man Noir|Spider-Noir; Peni Parker;
        Black Knight; Captain Britain; Doctor Voodoo; Hulkling; Wiccan; America Chavez; Patriot; Stature|Cassie Lang; Wonder Man; Beta Ray Bill; Silk|Cindy Moon`,
      deep: `Machine Man; Nighthawk; Tigra; Moondragon; Mockingbird; Songbird; Speedball; Firestar; Darkhawk; Thunderstrike; Warpath; Triton; Medusa; Black Bolt; Lockjaw;
        Ka-Zar; Devil Dinosaur; Moon Girl; Spider-Girl|May Parker; Arachne; Prowler; Sasquatch; Puck`,
      legendary: 'Howard the Duck; Squirrel Girl',
    },
    facts: {
      'Howard the Duck': 'A cigar-chomping talking duck from another world, star of a notorious 1986 film.',
      'Squirrel Girl': 'A hero famous for beating supervillains, even Thanos, with help from her squirrel friends.',
    },
  },
  {
    id: 'ent-dc-hero',
    category: 'entertainment',
    prompt: 'Name a DC Comics superhero',
    qualifier: 'Heroes of DC comics, films, TV or games, up to 2025',
    missingTier: 'deep',
    groups: {
      textbook: 'Superman|Clark Kent; Batman|Bruce Wayne; Wonder Woman|Diana Prince; The Flash|Flash|Barry Allen; Aquaman|Arthur Curry; Green Lantern; Robin|Dick Grayson; Supergirl|Kara Zor-El; Batgirl',
      honours: `Cyborg|Victor Stone; Green Arrow|Oliver Queen; Shazam|Captain Marvel|Billy Batson; Martian Manhunter|J'onn J'onzz; Hawkman; Hawkgirl; Nightwing; Catwoman|Selina Kyle;
        Black Canary; Zatanna; Blue Beetle|Jaime Reyes; Booster Gold; Atom|The Atom; Raven; Starfire; Beast Boy|Changeling; Wonder Girl; Batwoman; Static|Static Shock;
        Swamp Thing; Constantine|John Constantine; Harley Quinn; Red Hood|Jason Todd; Damian Wayne; Mera; Plastic Man; Doctor Fate|Dr Fate; Spectre|The Spectre;
        Huntress; Question|The Question; Vixen; Firestorm; Elongated Man; Stargirl|Courtney Whitmore; Kid Flash|Wally West; Superboy|Conner Kent`,
      rare: `Hourman; Wildcat; Doctor Mid-Nite; Jonah Hex; Animal Man; Metamorpho; Mister Terrific; Black Lightning; Batwing; Orphan; Cassandra Cain; Azrael; Spoiler;
        Steel|John Henry Irons; Power Girl|Karen Starr; Mister Miracle|Scott Free; Big Barda; Orion; Captain Atom; Mary Marvel; Bumblebee; Aqualad; Speedy|Arsenal|Roy Harper;
        Impulse|Bart Allen; Jessica Cruz; John Stewart; Guy Gardner; Hal Jordan; Kyle Rayner; Alan Scott; Jay Garrick; Ted Kord; Katana; Sandman|Wesley Dodds; Midnighter;
        Apollo; Blue Devil; Adam Strange; Ragman; Phantom Stranger; Lobo; Etrigan; Deadman; Detective Chimp; Congorilla; Vibe; Geo-Force`,
      deep: `Vigilante; Skyman; Doll Man; Uncle Sam; Liberty Belle; Red Tornado; Crimson Avenger; Starman; Johnny Thunder; Sargon the Sorcerer; Lightning Lad; Saturn Girl;
        Cosmic Boy; Brainiac 5; Shrinking Violet; Chameleon Boy; Ultra Boy; Bouncing Boy; Mon-El; Dream Girl; Element Lad; Sun Boy; Phantom Girl; Invisible Kid; Karate Kid; Dawnstar`,
      legendary: 'Matter-Eater Lad; Ambush Bug',
    },
    facts: {
      'Matter-Eater Lad': 'A Legion of Super-Heroes member whose power is eating absolutely anything.',
      'Ambush Bug': 'A comic-relief hero who knows he is in a comic book and breaks the fourth wall.',
    },
  },
  {
    id: 'ent-starwars-char',
    category: 'entertainment',
    prompt: 'Name a Star Wars character',
    qualifier: 'Named characters from the films and live-action or animated series, up to 2025',
    missingTier: 'deep',
    groups: {
      textbook: 'Luke Skywalker|Luke; Darth Vader|Vader|Anakin Skywalker|Anakin; Princess Leia|Leia; Han Solo|Han; Yoda; Obi-Wan Kenobi|Obi-Wan|Ben Kenobi; Chewbacca|Chewie; R2-D2|R2D2; C-3PO|C3PO; Emperor Palpatine|Palpatine|Darth Sidious',
      honours: `Boba Fett; Jabba the Hutt|Jabba; Lando Calrissian|Lando; Darth Maul|Maul; Mace Windu; Padmé Amidala|Padme Amidala|Padme; Qui-Gon Jinn|Qui-Gon; Count Dooku|Dooku|Darth Tyranus;
        General Grievous|Grievous; Jar Jar Binks|Jar Jar; Ahsoka Tano|Ahsoka; Rey; Finn; Poe Dameron|Poe; Kylo Ren|Ben Solo; BB-8|BB8; Din Djarin|The Mandalorian|Mando; Grogu|Baby Yoda|The Child;
        Jyn Erso|Jyn; Cassian Andor|Andor; K-2SO|K2SO; Captain Phasma|Phasma; Supreme Leader Snoke|Snoke; Grand Moff Tarkin|Tarkin; Wedge Antilles|Wedge; Admiral Ackbar|Ackbar; Greedo; Watto;
        Wicket; Sebulba; Nute Gunray|Gunray; Cad Bane; Kanan Jarrus; Ezra Bridger; Hera Syndulla; Sabine Wren; Zeb Orrelios; Thrawn|Grand Admiral Thrawn`,
      rare: `Bossk; IG-88; Dengar; Nien Nunb; Mon Mothma; Bail Organa; Shmi Skywalker|Shmi; Cliegg Lars; Owen Lars|Uncle Owen; Beru Lars|Aunt Beru; Jango Fett;
        Wat Tambor; Shaak Ti; Kit Fisto; Plo Koon; Ki-Adi-Mundi; Aayla Secura; Luminara Unduli; Barriss Offee; Captain Rex|Rex; Commander Cody|Cody; Hondo Ohnaka|Hondo;
        Asajj Ventress|Ventress; Savage Opress; Darth Bane; Darth Plagueis|Plagueis; Moff Gideon|Gideon; Cara Dune; Greef Karga|Greef; IG-11; Fennec Shand|Fennec;
        Bo-Katan Kryze|Bo-Katan; Luthen Rael|Luthen; Maz Kanata|Maz; General Hux|Hux; Rose Tico|Rose; Vice Admiral Holdo|Holdo; Lor San Tekka; Unkar Plutt|Plutt;
        Zorii Bliss; Qi'ra|Qira; Tobias Beckett|Beckett; Enfys Nest; L3-37|L3; Dryden Vos; Saw Gerrera|Saw; Chirrut Imwe|Chirrut; Baze Malbus|Baze; Bodhi Rook|Bodhi;
        Orson Krennic|Krennic; Galen Erso`,
      deep: `Lobot; Ponda Baba; Dr. Evazan|Evazan; Figrin D'an; Max Rebo; Sy Snootles; Oola; Wuher; Biggs Darklighter|Biggs; Porkins|Red Six; Garven Dreis|Red Leader;
        Admiral Piett|Piett; Admiral Ozzel|Ozzel; General Veers|Veers; Teebo; Logray; Chief Chirpa|Chirpa; Paploo; Droopy McCool; Dexter Jettster|Dex; Zam Wesell|Zam;
        Taun We; Lama Su; Gasgano; Oppo Rancisis; Eeth Koth; Boss Nass; Tion Medon; Orn Free Taa; Poggle the Lesser`,
      legendary: 'Yaddle; Ben Quadinaros',
    },
    facts: {
      Yaddle: 'A small green Jedi Council member of Yoda\'s species, seen in The Phantom Menace.',
      'Ben Quadinaros': 'The Podracer whose engines failed to start in the Boonta Eve Classic.',
    },
  },
  {
    id: 'ent-lotr-char',
    category: 'entertainment',
    prompt: 'Name a character from The Lord of the Rings or The Hobbit',
    qualifier: 'Named characters in Tolkien\'s Middle-earth books or the Peter Jackson films',
    missingTier: 'deep',
    groups: {
      textbook: 'Frodo Baggins|Frodo; Gandalf; Aragorn|Strider; Legolas; Gimli; Samwise Gamgee|Sam|Samwise; Gollum|Sméagol|Smeagol; Sauron; Bilbo Baggins|Bilbo; Saruman',
      honours: `Boromir; Faramir; Merry|Meriadoc Brandybuck|Meriadoc; Pippin|Peregrin Took|Peregrin; Théoden|Theoden; Éowyn|Eowyn; Éomer|Eomer; Arwen; Elrond; Galadriel; Celeborn;
        Treebeard|Fangorn; Gríma Wormtongue|Grima Wormtongue|Wormtongue; Smaug; Thorin Oakenshield|Thorin; Radagast; Denethor; Witch-king of Angmar|Witch King; Shelob;
        Balrog; Bard the Bowman|Bard; Beorn; Thranduil; Tom Bombadil|Bombadil; Glorfindel; Shadowfax; Azog; Bolg; Gothmog; Haldir`,
      rare: `Fili; Kili; Balin; Dwalin; Bifur; Bofur; Bombur; Oin; Gloin|Glóin; Dori; Nori; Ori; Tauriel; Lobelia Sackville-Baggins|Lobelia; Rosie Cotton|Rosie;
        Gaffer Gamgee|Gaffer; Barliman Butterbur|Butterbur; Gamling; Hama|Háma; Erkenbrand; Elendil; Isildur; Gil-galad; Círdan|Cirdan; Lúthien|Luthien; Beren;
        Fëanor|Feanor; Morgoth|Melkor; Húrin|Hurin; Túrin Turambar|Turin Turambar|Turin; Eärendil|Earendil; Ungoliant; Gwaihir; Great Goblin; Grishnákh|Grishnakh;
        Uglúk|Ugluk; Shagrat; Gorbag; Mouth of Sauron; Imrahil; Beregond; Elladan; Elrohir; Gildor Inglorion|Gildor; Farmer Maggot|Maggot; Lotho Sackville-Baggins|Lotho`,
      deep: `Ted Sandyman; Goldberry; Barrow-wight; Bill Ferny; Quickbeam; Celebrimbor; Ar-Pharazôn|Ar-Pharazon; Ancalagon; Glaurung; Thingol; Melian; Finrod; Fingolfin; Fingon;
        Maedhros; Maglor; Celegorm; Curufin; Dáin Ironfoot|Dain Ironfoot|Dain; Thráin|Thrain; Thrór|Thror; Roäc|Roac; Bill the Pony; Ghân-buri-Ghân|Ghan-buri-Ghan; Halbarad`,
      legendary: 'Old Man Willow; Fatty Bolger|Fredegar Bolger',
    },
    facts: {
      'Old Man Willow': 'A malevolent ancient tree in the Old Forest that tried to trap the hobbits.',
      'Fatty Bolger': 'The hobbit who stayed behind at Crickhollow to pretend to be Frodo.',
    },
  },
  {
    id: 'ent-disney-villain',
    category: 'entertainment',
    prompt: 'Name a Disney villain',
    qualifier: 'Villains and antagonists of Disney and Pixar animated feature films, up to 2025',
    missingTier: 'deep',
    groups: {
      textbook: 'Scar; Maleficent; Ursula; Jafar; Captain Hook|Hook; Cruella de Vil|Cruella; Gaston; Queen of Hearts; Evil Queen|The Evil Queen|Wicked Queen; Hades',
      honours: `Shere Khan; Kaa; Dr. Facilier|Doctor Facilier|Facilier; Governor Ratcliffe|Ratcliffe; Frollo|Judge Claude Frollo; Lady Tremaine|Stepmother; Shan Yu; Hans|Prince Hans;
        Mother Gothel|Gothel; Yzma; Syndrome; Lotso|Lots-O'-Huggin' Bear; Stinky Pete; Sid; Randall; Chef Skinner|Skinner; Emperor Zurg|Zurg; Lawrence; Tamatoa; Te Kā|Te Ka;
        Madam Mim|Mim; Prince John; Sir Hiss; Sheriff of Nottingham; Medusa; Professor Ratigan|Ratigan; Monstro; Stromboli; Honest John; Peg-Leg Pete|Pete; Percival McLeach|McLeach;
        Clayton; Sykes; Bill Sikes; Lucifer; Chernabog; Bellwether|Dawn Bellwether; Edgar`,
      rare: `King Candy|Turbo; Yokai|Callaghan; Ernesto de la Cruz|Ernesto; Charles Muntz|Muntz; Duke of Weselton|Weselton; Pain and Panic|Pain; Panic; Flotsam and Jetsam|Flotsam; Jetsam;
        Si and Am|Si; Am; Iago; Dr. Hamsterviel|Hamsterviel; Gantu; Kronk; Rourke|Lyle Tiberius Rourke; Queen Narissa|Narissa; Lord Farquaad; Doctor Cornelius Robotnik;
        Randall Boggs; Henry J. Waternoose|Waternoose; Zira; Kovu; Nuka; Kenai; Amos Slade; Giant|The Giant; Mr. Snoops|Snoops;
        Shenzi; Banzai; Ed; Monsieur D'Arque|D'Arque; Stabbington Brothers; Horace and Jasper|Jasper; Horace; Frank Baxter; Mr. Toad's weasels|Weasels; `,
      deep: 'Mr. Smee; Fagin; Scud',
      legendary: 'Alameda Slim; Horned King',
    },
    facts: {
      'Alameda Slim': 'A yodelling cattle rustler in Home on the Range who hypnotises cows with his singing.',
      'Horned King': 'The skeletal tyrant of The Black Cauldron, one of Disney\'s darkest villains.',
    },
  },
  {
    id: 'ent-looney-tunes',
    category: 'entertainment',
    prompt: 'Name a Looney Tunes character',
    qualifier: 'Named Looney Tunes and Merrie Melodies characters from Warner Bros. cartoons, 1930s to 2025',
    missingTier: 'deep',
    groups: {
      textbook: 'Bugs Bunny; Daffy Duck; Porky Pig; Tweety; Sylvester; Elmer Fudd; Wile E. Coyote|Wile E Coyote|Coyote; Road Runner|Roadrunner; Taz|Tasmanian Devil; Speedy Gonzales',
      honours: `Foghorn Leghorn; Pepé Le Pew|Pepe Le Pew; Yosemite Sam; Marvin the Martian|Marvin Martian; Lola Bunny; Granny; Petunia Pig; Henery Hawk; Gossamer; Sam Sheepdog;
        Ralph Wolf; Marc Antony; Michigan J. Frog|Michigan Frog; Witch Hazel; Hippety Hopper; Beaky Buzzard; Slowpoke Rodriguez; Penelope Pussycat|Penelope;
        Charlie Dog; Barnyard Dawg|Barnyard Dog; Miss Prissy; Claude Cat; Bosko; Sniffles; Cool Cat; Hector the Bulldog|Hector; Goofy Gophers|Mac and Tosh; Duck Dodgers|Dodgers`,
      rare: `Rocky and Mugsy|Rocky; Mugsy; Honey Bunny; Pete Puma; Egghead Jr|Egghead Junior; K-9; Instant Martians; Hubie and Bertie|Hubie; Bertie; Pussyfoot; Buddy; Beans; Piggy;
        Foxy; Goopy Geer; Spike and Chester|Spike; Chester; Sylvester Jr|Sylvester Junior; Babs Bunny; Buster Bunny; Mama Bear; Papa Bear; Junyer Bear|Junior Bear;
        Cicero Pig`,
      deep: 'Gruesome Gorilla; Mr. Meek; Nasty Canasta',
      legendary: 'Cecil Turtle; Hugo the Abominable Snowman|Hugo',
    },
    facts: {
      'Cecil Turtle': 'The tortoise who beat Bugs Bunny in a famous race.',
      'Hugo the Abominable Snowman': 'A big yeti who hugs and squeezes things a little too hard.',
    },
  },
  {
    id: 'ent-cn-show',
    category: 'entertainment',
    prompt: 'Name a Cartoon Network show',
    qualifier: 'Original series that aired on Cartoon Network (US or India), 1992 to 2025',
    missingTier: 'deep',
    answers: `
      Dexter's Laboratory|Dexters Laboratory; Johnny Bravo; Cow and Chicken; I Am Weasel; The Powerpuff Girls@The Powerpuff Girls; Ed, Edd n Eddy|Ed Edd n Eddy;
      Courage the Cowardly Dog|Courage; Samurai Jack; Codename: Kids Next Door|Kids Next Door; Foster's Home for Imaginary Friends|Fosters Home for Imaginary Friends;
      The Grim Adventures of Billy & Mandy|Billy and Mandy|Billy & Mandy; Ben 10@Ben 10 (2005 TV series); Teen Titans@Teen Titans (TV series); Teen Titans Go!|Teen Titans Go;
      Camp Lazlo; Chowder@Chowder (TV series); Adventure Time; Regular Show; The Amazing World of Gumball|Gumball; Steven Universe; Uncle Grandpa;
      Clarence@Clarence (American TV series); We Bare Bears; Total Drama@Total Drama; Class of 3000; My Gym Partner's a Monkey|My Gym Partners a Monkey;
      The Marvelous Misadventures of Flapjack|Flapjack; Robotboy; Generator Rex; Sym-Bionic Titan; Star Wars: The Clone Wars@Star Wars: The Clone Wars (2008 TV series);
      Green Lantern: The Animated Series; Young Justice@Young Justice (TV series); Craig of the Creek; Victor and Valentino; Summer Camp Island; Infinity Train;
      OK K.O.! Let's Be Heroes|OK KO; Apple & Onion|Apple and Onion; Elliott from Earth; Mao Mao: Heroes of Pure Heart|Mao Mao; Villainous@Villainous (TV series); Unikitty;
      Space Ghost Coast to Coast|Space Ghost; Baby Looney Tunes; Squirrel Boy; Johnny Test; Ninjago@Ninjago; Ben 10: Alien Force|Alien Force; Ben 10: Ultimate Alien|Ultimate Alien;
      Ben 10: Omniverse|Omniverse; Ben 10 (2016 TV series)|Ben 10 reboot; Time Squad; Megas XLR; Evil Con Carne; Sheep in the Big City; Making Fiends; Mike, Lu & Og|Mike Lu and Og;
      Whatever Happened to Robot Jones?|Robot Jones; Hi Hi Puffy AmiYumi|Hi Hi Puffy Ami Yumi; Atomic Betty; Sealab 2021; Moral Orel; The Looney Tunes Show|Looney Tunes Show`,
    legendary: ['Whatever Happened to Robot Jones?'],
    facts: { 'Whatever Happened to Robot Jones?': 'A short-lived 2002 series about a robot student trying to understand school life.' },
  },
  {
    id: 'ent-nick-show',
    category: 'entertainment',
    prompt: 'Name a Nickelodeon show',
    qualifier: 'Series that aired on Nickelodeon, cartoons or live-action, up to 2025',
    missingTier: 'deep',
    answers: `
      SpongeBob SquarePants|SpongeBob|Spongebob; Rugrats; Hey Arnold!|Hey Arnold; Doug@Doug (TV series); The Ren & Stimpy Show|Ren and Stimpy; Rocko's Modern Life|Rockos Modern Life;
      Aaahh!!! Real Monsters|Aaahh Real Monsters; The Wild Thornberrys|Wild Thornberrys; CatDog; The Angry Beavers|Angry Beavers; As Told by Ginger; The Fairly OddParents|Fairly OddParents;
      Danny Phantom; Jimmy Neutron: Boy Genius|Jimmy Neutron; Avatar: The Last Airbender|Avatar The Last Airbender|Avatar; The Legend of Korra|Legend of Korra; Invader Zim; Dora the Explorer|Dora;
      Go, Diego, Go!|Go Diego Go; Blue's Clues|Blues Clues; Bubble Guppies; Fresh Beat Band|The Fresh Beat Band; Team Umizoomi|Umizoomi; Wonder Pets!|Wonder Pets; The Backyardigans|Backyardigans;
      Ni Hao, Kai-Lan|Ni Hao Kai-Lan; PAW Patrol|Paw Patrol; Shimmer and Shine; Blaze and the Monster Machines|Blaze; Max & Ruby|Max and Ruby; Little Bear@Little Bear (TV series);
      iCarly; Victorious; Drake & Josh|Drake and Josh; Zoey 101; Ned's Declassified School Survival Guide|Neds Declassified; Unfabulous; Big Time Rush@Big Time Rush (TV series); Sam & Cat|Sam and Cat; Henry Danger;
      The Thundermans|Thundermans; Game Shakers; Nicky, Ricky, Dicky & Dawn|Nicky Ricky Dicky and Dawn; Hunter Street; All That@All That; Kenan & Kel|Kenan and Kel; The Amanda Show|Amanda Show;
      Figure It Out@Figure It Out (American game show); Double Dare@Double Dare (American game show); Legends of the Hidden Temple; Guts@Guts (game show); The Loud House|Loud House;
      The Casagrandes|Casagrandes; Harvey Beaks; Sanjay and Craig; Breadwinners; Pig Goat Banana Cricket; Fanboy & Chum Chum|Fanboy and Chum Chum; Planet Sheen; T.U.F.F. Puppy|TUFF Puppy;
      Teenage Mutant Ninja Turtles@Teenage Mutant Ninja Turtles (2012 TV series); Tak and the Power of Juju; Wow! Wow! Wubbzy!|Wubbzy; Rolie Polie Olie; Shiva@Shiva (Indian TV series); Motu Patlu`,
    legendary: ['Hunter Street'],
    facts: { 'Hunter Street': 'A Dutch-Belgian mystery series about foster siblings, shown on Nickelodeon.' },
  },
  {
    id: 'ent-spongebob-char',
    category: 'entertainment',
    prompt: 'Name a SpongeBob SquarePants character',
    qualifier: 'Named characters from the series or its films, up to 2025',
    missingTier: 'deep',
    groups: {
      textbook: 'SpongeBob SquarePants|SpongeBob; Patrick Star|Patrick; Squidward Tentacles|Squidward; Mr. Krabs|Mr Krabs|Eugene Krabs; Sandy Cheeks|Sandy; Plankton|Sheldon Plankton; Gary the Snail|Gary; Mrs. Puff|Mrs Puff; Pearl Krabs|Pearl; Karen',
      honours: `Larry the Lobster|Larry; Mermaid Man; Barnacle Boy; Flying Dutchman; Squilliam Fancyson|Squilliam; King Neptune|Neptune; Bubble Bass; Man Ray; Dirty Bubble;
        Patchy the Pirate|Patchy; Potty the Parrot|Potty; Old Man Jenkins|Jenkins; Margaret SquarePants|Mrs. SquarePants|Mrs SquarePants; Harold SquarePants|Mr. SquarePants|Mr SquarePants;
        Grandma SquarePants|Grandma; DoodleBob|Doodlebob; Hans; Kevin C. Cucumber|Kevin; Nat Peterson|Nat; Fred|Fred Rechid; Bubble Buddy; Mindy; Dennis; Flats the Flounder|Flats;
        Bikini Bottom Fire Department|Fire Department; The Hash-Slinging Slasher|Hash-Slinging Slasher; Realistic Fish Head; Poseidon; Cecil Kelp|Cecil`,
      rare: `Betsy Krabs; Stanley S. SquarePants|Cousin Stanley|Stanley; Mrs. Tentacles|Mrs Tentacles; Johnny Krill; Prawn; Smitty Werbenmanjensen|Smitty`,
      deep: 'Madame Kassandra',
      legendary: 'Perch Perkins',
    },
    facts: { 'Perch Perkins': 'The news-reporter fish who anchors Bikini Bottom broadcasts.' },
  },
  {
    id: 'ent-simpsons-char',
    category: 'entertainment',
    prompt: 'Name a character from The Simpsons',
    qualifier: 'Named characters from the TV series or the 2007 film, up to 2025',
    missingTier: 'deep',
    groups: {
      textbook: 'Homer Simpson|Homer; Marge Simpson|Marge; Bart Simpson|Bart; Lisa Simpson|Lisa; Maggie Simpson|Maggie; Ned Flanders|Flanders; Moe Szyslak|Moe; Mr. Burns|Mr Burns|Montgomery Burns; Apu Nahasapeemapetilon|Apu; Krusty the Clown|Krusty; Milhouse Van Houten|Milhouse',
      honours: `Waylon Smithers|Smithers; Principal Skinner|Seymour Skinner|Skinner; Nelson Muntz|Nelson; Ralph Wiggum|Ralph; Chief Wiggum|Clancy Wiggum; Comic Book Guy|Jeff Albertson; Groundskeeper Willie|Willie;
        Sideshow Bob|Bob Terwilliger; Barney Gumble|Barney; Lenny Leonard|Lenny; Carl Carlson|Carl; Edna Krabappel|Mrs Krabappel; Otto Mann|Otto; Reverend Lovejoy|Lovejoy; Dr. Hibbert|Dr Hibbert|Julius Hibbert;
        Dr. Nick|Dr Nick|Nick Riviera; Kent Brockman|Brockman; Mayor Quimby|Quimby; Santa's Little Helper; Snowball II|Snowball; Abe Simpson|Grampa|Grandpa Simpson; Patty Bouvier|Patty; Selma Bouvier|Selma;
        Troy McClure|McClure; Professor Frink|Frink; Lionel Hutz|Hutz; Fat Tony; Itchy; Scratchy; Rod Flanders|Rod; Todd Flanders|Todd; Maude Flanders|Maude; Martin Prince|Martin; Sherri; Terri`,
      rare: `Cletus Spuckler|Cletus; Brandine; Hans Moleman|Moleman; Rainier Wolfcastle|McBain; Disco Stu; Superintendent Chalmers|Chalmers; Agnes Skinner|Agnes; Jimbo Jones|Jimbo;
        Dolph Starbeam|Dolph; Kearney Zzyzwicz|Kearney; Database; Uter; Wendell Borton|Wendell; Lewis Clark|Lewis; Janey Powell|Janey; Gil Gunderson|Gil; Duffman;
        Blue-Haired Lawyer|Blue Haired Lawyer; Drederick Tatum|Tatum; Kang; Kodos; Mona Simpson|Mona; Herb Powell|Herb; Bumblebee Man; Artie Ziff|Ziff; Poochie;
        Lunchlady Doris|Doris Grau; Jasper Beardly|Jasper; Mr. Largo|Largo; Mrs. Hoover|Elizabeth Hoover; Luann Van Houten|Luann; Kirk Van Houten|Kirk;
        Manjula Nahasapeemapetilon|Manjula; Bleeding Gums Murphy|Bleeding Gums; Lindsey Naegle|Naegle; Snake Jailbird|Snake; Sideshow Mel|Mel; Lurleen Lumpkin|Lurleen`,
      deep: `Dr. Marvin Monroe|Marvin Monroe; Lance Murdock; Captain McCallister|Captain McAllister; Rich Texan; Eddie; Lou; Ruth Powers|Ruth; Laura Powers|Laura; Mr. Teeny|Mr Teeny;
        Princess Kashmir|Kashmir; Reverend Lovejoy's wife|Helen Lovejoy; Brother Faith; Birch Barlow; Mr. Bergstrom|Bergstrom; Hugo Simpson|Hugo; Jub-Jub|Jub Jub; Zia Simpson|Zia`,
      legendary: 'Frank Grimes|Grimey; Hank Scorpio|Scorpio',
    },
    facts: {
      'Frank Grimes': 'A hard-working everyman driven to despair by Homer\'s luck, in the episode "Homer\'s Enemy".',
      'Hank Scorpio': 'The friendly boss who hires Homer, while quietly plotting to take over the world.',
    },
  },
  {
    id: 'ent-doraemon',
    category: 'entertainment',
    prompt: 'Name a Doraemon character or gadget',
    qualifier: 'Named characters, or gadgets from the 4D pocket, in the manga, anime or films',
    missingTier: 'deep',
    groups: {
      textbook: 'Doraemon; Nobita Nobi|Nobita; Shizuka Minamoto|Shizuka; Gian|Takeshi Goda|Gian Goda; Suneo|Suneo Honekawa; Dorami; Anywhere Door|Dokodemo Door|Any Where Door; Bamboo-copter|Take-copter|Take Copter|Bamboo Copter; Time Machine; Dorayaki|Dora-yaki|Dora yaki',
      honours: `Time Kerchief; Small Light|Shrink Ray; Big Light; Memory Bread|Anki Pan; Translation Konjac|Honyaku Konnyaku|Translation Jelly;
        Gourmet Table Cloth|Table Cloth|Gourmet Tablecloth; Dress-up Camera|Dress Up Camera; Moshimo Box|If Box; Time Furoshiki|Time Cloth; Air Cannon|Air cannon;
        Spare Pocket; Dekisugi|Hidetoshi Dekisugi; Nobisuke Nobi|Nobisuke; Tamako Nobi|Tamako; Sewashi|Sewashi Nobi; Mr. Kaminari|Kaminari|Mr Kaminari;
        Jaiko|Jaiko Goda; Nobita's Teacher|Teacher|Sensei`,
      rare: `Unfairness Pistol; Scale Mirror; Time Rope; Gravity Painter|Gravity Controller; Color Spray; Weather Control|Weather Machine; Teddy Robot|Teddy Bear Robot;
        Mighty Gloves|Super Gloves; Replica Maker|Mirror World; Copy Robot|Copy Machine; Bubble Gun; Spy Satellite; Air Ball; Hypnosis Mirror; Eraser Lamp; Shrink Bat;
        Brain Switch; Shadow Dye; Time TV; Time Mirror; Time Pot; Wish Candy; Ghost Mirror`,
      deep: `Boomerang Hat; Quiz Radio; Truth Apple|Lie Detector Apple; Love Letter Hat; Shadow Catcher; Echo Gun; Smell Taker; Water Maker; Energy Bar; Ant Dye; Hair Growth Tonic;
        Mist Maker; Reducing Pot; Bonsai Tree; Genie Lamp; Wearable Wind`,
      legendary: 'Gulliver Tunnel',
    },
    facts: { 'Gulliver Tunnel': 'A gadget that makes things smaller as they pass through it.' },
  },
  {
    id: 'ent-disney-channel',
    category: 'entertainment',
    prompt: 'Name a Disney Channel show',
    qualifier: 'Series that aired on Disney Channel (US or India), 1983 to 2025',
    missingTier: 'deep',
    answers: `
      Hannah Montana; Lizzie McGuire; Wizards of Waverly Place|Wizards of Waverly; Phineas and Ferb; Good Luck Charlie; Austin & Ally|Austin and Ally; Jessie@Jessie (2011 TV series);
      Shake It Up@Shake It Up (American TV series); Kim Possible; Recess@Recess (TV series); Gravity Falls; DuckTales@DuckTales (2017 TV series); Raven's Home|Ravens Home; Even Stevens; That's So Raven|Thats So Raven;
      The Suite Life of Zack & Cody|Suite Life of Zack and Cody; The Suite Life on Deck|Suite Life on Deck; Sonny with a Chance; Liv and Maddie|Liv & Maddie; Girl Meets World;
      Andi Mack; Dog with a Blog; A.N.T. Farm|ANT Farm; Lab Rats@Lab Rats (American TV series); K.C. Undercover|KC Undercover; Bunk'd|Bunkd; Big City Greens; The Owl House|Owl House;
      Amphibia; Star vs. the Forces of Evil|Star vs the Forces of Evil; Miraculous: Tales of Ladybug & Cat Noir|Miraculous Ladybug|Miraculous; Doc McStuffins; Sofia the First;
      Jake and the Never Land Pirates; Mickey Mouse Clubhouse; Handy Manny; Little Einsteins; Special Agent Oso; Wander Over Yonder; Milo Murphy's Law|Milo Murphys Law;
      Lilo & Stitch: The Series|Lilo and Stitch The Series; Pepper Ann; The Proud Family|Proud Family; Lloyd in Space; Kickin' It|Kickin It; Zeke and Luther; Pair of Kings;
      Jonas@Jonas (TV series); Camp Rock; The Wizards Return; The Lion Guard; Chip 'n Dale: Rescue Rangers|Rescue Rangers@Chip 'n Dale: Rescue Rangers (TV series); TaleSpin; Gargoyles@Gargoyles (TV series); The Emperor's New School|Emperors New School;
      The Replacements; American Dragon: Jake Long|American Dragon; Fish Hooks; Pickle and Peanut; Randy Cunningham: 9th Grade Ninja|Randy Cunningham; Mighty Med; Best Friends Whenever`,
    legendary: ['Pickle and Peanut'],
    facts: { 'Pickle and Peanut': 'A 2015 cartoon about a pickle and a peanut who are best friends and daredevils.' },
  },
  {
    id: 'ent-naruto-char',
    category: 'entertainment',
    prompt: 'Name a Naruto character',
    qualifier: 'Named characters from the Naruto and Boruto manga and anime, up to 2025',
    missingTier: 'deep',
    groups: {
      textbook: 'Naruto Uzumaki|Naruto; Sasuke Uchiha|Sasuke; Sakura Haruno|Sakura; Kakashi Hatake|Kakashi; Itachi Uchiha|Itachi; Madara Uchiha|Madara; Hinata Hyuga|Hinata; Gaara; Jiraiya; Rock Lee|Lee',
      honours: `Shikamaru Nara|Shikamaru; Neji Hyuga|Neji; Tsunade; Orochimaru; Minato Namikaze|Minato; Kushina Uzumaki|Kushina; Obito Uchiha|Obito; Pain|Nagato; Konan;
        Kisame Hoshigaki|Kisame; Deidara; Sasori; Hidan; Kakuzu; Zetsu; Might Guy|Guy; Tenten; Choji Akimichi|Choji; Ino Yamanaka|Ino; Kiba Inuzuka|Kiba; Shino Aburame|Shino;
        Temari; Kankuro; Asuma Sarutobi|Asuma; Kurenai Yuhi|Kurenai; Iruka Umino|Iruka; Hiruzen Sarutobi|Third Hokage|Hiruzen; Danzo Shimura|Danzo; Konohamaru Sarutobi|Konohamaru;
        Boruto Uzumaki|Boruto; Sarada Uchiha|Sarada; Mitsuki; Kurama|Nine-Tails|Nine Tails|Kyuubi; Kaguya Otsutsuki|Kaguya; Hashirama Senju|Hashirama; Tobirama Senju|Tobirama;
        Zabuza Momochi|Zabuza; Haku; Killer B|Killer Bee; Jugo; Karin; Suigetsu`,
      rare: `Kabuto Yakushi|Kabuto; Anko Mitarashi|Anko; Yamato; Sai; Shizune; Tonton; Pakkun; Gamabunta; Katsuyu; Manda; Rin Nohara|Rin; Mikoto Uchiha|Mikoto; Fugaku Uchiha|Fugaku;
        Shisui Uchiha|Shisui; Hanabi Hyuga|Hanabi; Hiashi Hyuga|Hiashi; Himawari Uzumaki|Himawari; Kimimaro; Tayuya; Sakon; Ukon; Kidomaru; Jirobo; Gamakichi; Gamatatsu;
        Ebisu; Hayate Gekko|Hayate; Genma Shiranui|Genma; Ibiki Morino|Ibiki; Inoichi Yamanaka|Inoichi; Shikaku Nara|Shikaku; Choza Akimichi|Choza; Tsume Inuzuka|Tsume;
        Mei Terumi|Mei; Onoki; Darui; Samui; Yugito Nii|Yugito; Roshi; Han; Utakata; Fu; Yagura; Kurotsuchi`,
      deep: `Chiyo; Mizuki; Isshiki Otsutsuki|Isshiki; Momoshiki Otsutsuki|Momoshiki; Kinshiki; Code; Eida; Delta; Shira; Amado; Daemon; Ao; Udon; Kagami Uchiha|Kagami;
        Hagoromo Otsutsuki|Hagoromo; Hamura; Indra; Asura; Fukasaku; Shima; Ebizo; Black Zetsu`,
      legendary: 'Moegi; Gamahiro',
    },
    facts: {
      Moegi: 'Konohamaru\'s teammate and a young ninja of the new generation.',
      Gamahiro: 'One of the aged toad sages of Mount Myoboku.',
    },
  },
  {
    id: 'ent-onepiece-char',
    category: 'entertainment',
    prompt: 'Name a One Piece character',
    qualifier: 'Named characters from the One Piece manga and anime, up to 2025',
    missingTier: 'deep',
    groups: {
      textbook: 'Monkey D. Luffy|Luffy; Roronoa Zoro|Zoro; Nami; Usopp; Sanji; Tony Tony Chopper|Chopper; Nico Robin|Robin; Franky; Brook; Jinbe|Jimbei',
      honours: `Portgas D. Ace|Ace; Sabo; Shanks; Gol D. Roger|Gold Roger|Roger; Whitebeard|Edward Newgate; Blackbeard|Marshall D. Teach|Teach; Kaido; Big Mom|Charlotte Linlin; Dracule Mihawk|Mihawk;
        Buggy; Crocodile; Donquixote Doflamingo|Doflamingo; Trafalgar Law|Law; Eustass Kid|Kid; Boa Hancock|Hancock; Monkey D. Garp|Garp; Monkey D. Dragon|Dragon; Sengoku; Akainu|Sakazuki;
        Aokiji|Kuzan; Kizaru|Borsalino; Fujitora; Smoker; Tashigi; Coby|Koby; Helmeppo; Arlong; Kuro; Don Krieg; Enel; Rob Lucci|Lucci; Kaku; Blueno; Kalifa;
        Nefertari Vivi|Vivi; Carrot; Yamato; Perona; Bartolomeo; Cavendish; Rebecca; Vinsmoke Judge|Judge; Vinsmoke Reiju|Reiju; Vinsmoke Ichiji|Ichiji; Vinsmoke Niji|Niji;
        Charlotte Katakuri|Katakuri; Charlotte Smoothie|Smoothie; Charlotte Cracker|Cracker; Queen; King|Alber; Jack|Jack the Drought; Kin'emon|Kinemon; Kozuki Momonosuke|Momonosuke;
        Kozuki Oden|Oden; Kanjuro; Raizo; Denjiro`,
      rare: `Zeff|Red-Leg Zeff; Gaimon; Nojiko; Bellemere; Genzo; Kaya; Laboon; Crocus; Dr. Hiriluk|Hiriluk; Dr. Kureha|Kureha; Wapol; Chess; Kuromarimo; Foxy; Porche; Hamburg;
        Mr. 2 Bon Clay|Bon Clay|Bentham; Mr. 3|Galdino; Mr. 5|Gem; Miss Valentine; Miss Doublefinger|Zala; Miss Merry Christmas|Drophy; Miss Golden Week|Marianne;
        Wyper; Gan Fall|Ohm; Satori; Shura; Conis; Pagaya; Aisa; Genbo; Marco; Jozu; Vista; Izo; Thatch; Haruta; Namur; Blamenco; Atmos; Curiel; Kingdew; Fossa; Squard;
        Oars; Absalom; Ryuma; Gecko Moria|Moria; Hogback; Cindry; Lola; Kumashi; Inuarashi; Nekomamushi`,
      deep: `Mocha; Pekoms; Tamago; Daifuku; Opera; Compote; Brûlée|Brulee; Galette; Pudding; Pound; Mont-d'Or|Mont d'Or; Nusjuro; Hyori; Sasaki; Who's-Who; Page One; Ulti; Black Maria;
        Sheepshead; Basil Hawkins|Hawkins; Scratchmen Apoo|Apoo; X Drake|Drake; Capone Bege|Bege; Urouge; Killer; Jewelry Bonney|Bonney; Bepo; Penguin; Shachi; Pica; Diamante; Trebol; Sugar; Violet; Dellinger; Lao G`,
      legendary: 'Pedro; Mr. 4|Babe',
    },
    facts: {
      Pedro: 'A Mink captain who sacrificed himself on Whole Cake Island so his allies could escape.',
      'Mr. 4': 'A Baroque Works agent who fights alongside his talking gun-cat Lassoo.',
    },
  },
  {
    id: 'ent-srk-film',
    category: 'entertainment',
    prompt: 'Name a Shah Rukh Khan film',
    qualifier: 'Hindi feature films with Shah Rukh Khan in an acting role (cameos count), 1992 to 2025',
    missingTier: 'deep',
    answers: `
      Deewana@Deewana (1992 film); Maya Memsaab; Baazigar; Darr@Darr; Kabhi Haan Kabhi Naa; Karan Arjun; Dilwale Dulhania Le Jayenge|DDLJ; Zamaana Deewana; Ram Jaane; Chaahat; Trimurti;
      Dil To Pagal Hai; Koyla; Pardes@Pardes (1997 film); Dil Se..|Dil Se; Duplicate@Duplicate (1998 film); Kuch Kuch Hota Hai|KKHH; Baadshah@Baadshah (1999 film); Josh@Josh (2000 film); Mohabbatein;
      Hey Ram@Hey Ram; Phir Bhi Dil Hai Hindustani; Asoka@Asoka (2001 film); One 2 Ka 4|One Two Ka Four; Kabhi Khushi Kabhie Gham|K3G; Devdas@Devdas (2002 Hindi film); Hum Tumhare Hain Sanam;
      Chalte Chalte@Chalte Chalte (2003 film); Kal Ho Naa Ho; Main Hoon Na; Veer-Zaara|Veer Zaara; Swades; Paheli@Paheli (2005 film); Kabhi Alvida Naa Kehna; Don@Don (2006 Hindi film); Chak De! India|Chak De India; Om Shanti Om;
      Rab Ne Bana Di Jodi; Billu; My Name Is Khan; Ra.One|RaOne; Don 2; Jab Tak Hai Jaan; Chennai Express; Happy New Year@Happy New Year (2014 film); Dilwale@Dilwale (2015 film);
      Fan@Fan (2016 film); Raees@Raees (2017 film); Jab Harry Met Sejal; Zero@Zero (2018 film); Pathaan@Pathaan (film); Jawan@Jawan (film); Dunki@Dunki (film); Ae Dil Hai Mushkil; Brahmāstra|Brahmastra;
      Rocketry: The Nambi Effect|Rocketry; Tubelight@Tubelight (2017 Hindi film); Dear Zindagi`,
    legendary: ['Hey Ram'],
    facts: { 'Hey Ram': 'A 2000 Kamal Haasan epic about Partition, in which Shah Rukh Khan played a friend.' },
  },
  {
    id: 'ent-aamir-film',
    category: 'entertainment',
    prompt: 'Name an Aamir Khan film',
    qualifier: 'Hindi feature films with Aamir Khan in an acting role, 1973 to 2025',
    missingTier: 'deep',
    answers: `
      Qayamat Se Qayamat Tak|QSQT; Raakh; Love Love Love; Dil@Dil (1990 film); Awwal Number; Jo Jeeta Wohi Sikandar; Deewana Mastana; Daulat Ki Jung; Hum Hain Rahi Pyar Ke; Andaz Apna Apna;
      Baazi@Baazi (1995 film); Rangeela@Rangeela (1995 film); Raja Hindustani; Ishq@Ishq (1997 film); Ghulam@Ghulam (1998 film); Sarfarosh@Sarfarosh (1999 film); Earth@Earth (1998 film); Mann@Mann (1999 film);
      Lagaan; Dil Chahta Hai; Mela@Mela (2000 film); Rang De Basanti; Fanaa; Taare Zameen Par; Ghajini@Ghajini (2008 film); 3 Idiots|Three Idiots; Delhi Belly; Talaash@Talaash (2012 film);
      Dhoom 3; PK@PK (film); Dangal@Dangal (2016 film); Secret Superstar; Thugs of Hindostan; Laal Singh Chaddha|Laal Singh Chadda; Sitaare Zameen Par;
      Mangal Pandey: The Rising|Mangal Pandey; Yaadon Ki Baaraat@Yaadon Ki Baaraat (1973 film); Madhosh; Holi@Holi (1984 film); Parampara@Parampara (1993 film)`,
    legendary: ['Yaadon Ki Baaraat'],
    facts: { 'Yaadon Ki Baaraat': 'Aamir Khan made his screen debut as a child actor in this 1973 hit.' },
  },
  {
    id: 'ent-rajini-film',
    category: 'entertainment',
    prompt: 'Name a Rajinikanth film',
    qualifier: 'Feature films starring Rajinikanth, 1975 to 2025',
    missingTier: 'deep',
    answers: `
      Apoorva Raagangal|Apurva Raagangal; Moondru Mudichu; Bhairavi@Bhairavi (1978 film); 16 Vayathinile|Padhinaru Vayathinile; Mullum Malarum; Billa@Billa (1980 film);
      Polladhavan@Polladhavan (1980 film); Thillu Mullu; Netrikann; Nallavanukku Nallavan; Mr. Bharath|Mr Bharath; Mappillai@Mappillai (1989 film); Manithan@Manithan (1987 film);
      Velaikaran@Velaikaran (1987 film); Guru Sishyan; Thalapathi; Annaamalai|Annamalai; Mannan@Mannan (film); Uzhaippali; Muthu@Muthu (1995 film); Baashha|Baasha;
      Arunachalam@Arunachalam (film); Padayappa; Baba@Baba (2002 film); Chandramukhi@Chandramukhi (film); Sivaji: The Boss|Sivaji; Kuselan; Enthiran|Endhiran;
      Kochadaiiyaan; Lingaa; Kabali; Kaala@Kaala (2018 film); 2.0@2.0 (film); Petta@Petta (film); Darbar@Darbar (film); Annaatthe; Jailer@Jailer (2023 Tamil film); Lal Salaam;
      Vettaiyan|Vettaiyan The Hunter; Coolie@Coolie (2025 film); Hum@Hum (1991 film); Andha Kanoon|Andhaa Kaanoon; Thambikku Entha Ooru; Padikkadavan; Dharmathin Thalaivan;
      Raja Chinna Roja; Panakkaran; Veera@Veera (1994 film)`,
    legendary: ['Andha Kanoon'],
    facts: { 'Andha Kanoon': 'His 1983 Bollywood debut, in which he starred opposite Amitabh Bachchan.' },
  },
  {
    id: 'ent-dahl-book',
    category: 'entertainment',
    prompt: 'Name a book by Roald Dahl',
    qualifier: 'Books by Roald Dahl for children or adults, including poetry, memoir and short-story collections',
    missingTier: 'deep',
    answers: `
      The Gremlins|Gremlins; James and the Giant Peach; Charlie and the Chocolate Factory; The Magic Finger; Fantastic Mr Fox|Fantastic Mr. Fox; Charlie and the Great Glass Elevator;
      Danny, the Champion of the World|Danny the Champion of the World; The Twits; George's Marvellous Medicine|Georges Marvellous Medicine; The Enormous Crocodile; Revolting Rhymes; Dirty Beasts;
      The BFG|BFG|The Big Friendly Giant; The Witches@The Witches (novel); The Giraffe and the Pelly and Me|Giraffe and the Pelly and Me; Boy: Tales of Childhood|Boy; Going Solo; Matilda@Matilda (novel);
      Rhyme Stew; Esio Trot; The Vicar of Nibbleswicke; The Minpins; Over to You; Someone Like You; Kiss Kiss; Switch Bitch; My Uncle Oswald; Tales of the Unexpected; Skin and Other Stories|Skin;
      Ah, Sweet Mystery of Life|Ah Sweet Mystery of Life; Two Fables; The Mildenhall Treasure; Memories with Food at Gipsy House|Memories with Food; Roald Dahl's Cookbook|Cookbook;
      The Wonderful Story of Henry Sugar|Henry Sugar; Roald Dahl's Book of Ghost Stories|Book of Ghost Stories`,
    legendary: ['The Vicar of Nibbleswicke'],
    facts: { 'The Vicar of Nibbleswicke': 'Dahl\'s last book: a vicar suffers from a condition that makes him read words backwards.' },
  },
  {
    id: 'ent-blyton-book',
    category: 'entertainment',
    prompt: 'Name an Enid Blyton book or series',
    qualifier: 'Series or individual books by Enid Blyton, including those in the Famous Five and Malory Towers sequences',
    missingTier: 'deep',
    groups: {
      textbook: 'Famous Five; Secret Seven; Malory Towers; St Clare\'s|St. Clare\'s; Noddy; The Magic Faraway Tree|Faraway Tree; The Enchanted Wood; The Naughtiest Girl|Naughtiest Girl; The Wishing Chair|Adventures of the Wishing-Chair|Wishing-Chair',
      honours: `Five on a Treasure Island|Five on Treasure Island; Five Go Adventuring Again; Five Run Away Together; Five Go to Smuggler's Top; Five Go Off in a Caravan; Five on Kirrin Island Again;
        Five Go Off to Camp; Five Get into Trouble; Five Fall into Adventure; Five on a Hike Together; Five Have a Wonderful Time; Five Go Down to the Sea; Five Go to Mystery Moor;
        Five Have Plenty of Fun; Five on a Secret Trail; Five Go to Billycock Hill; Five Get into a Fix; Five on Finniston Farm; Five Go to Demon's Rocks; Five Have a Mystery to Solve;
        Five Are Together Again; The Adventurous Four; The Five Find-Outers|Find-Outers; The Island of Adventure; The Castle of Adventure; The Valley of Adventure; The Sea of Adventure;
        The Mountain of Adventure; The Ship of Adventure; The Circus of Adventure; The River of Adventure; First Term at Malory Towers; Second Form at Malory Towers;
        Third Year at Malory Towers; Upper Fourth at Malory Towers; In the Fifth at Malory Towers; Last Term at Malory Towers; The Secret Island|Secret Island;
        The Children of Cherry Tree Farm|Cherry Tree Farm; Mr Galliano's Circus|Mr. Galliano's Circus|Galliano's Circus; The Folk of the Faraway Tree`,
      rare: `The Twins at St Clare's; The O'Sullivan Twins; Claudine at St Clare's; Fifth Formers of St Clare's; Summer Term at St Clare's; Second Form at St Clare's; Kitty at St Clare's;
        The Mystery of the Burnt Cottage; The Mystery of the Disappearing Cat; The Mystery of the Secret Room; The Mystery of the Spiteful Letters; The Mystery of the Missing Necklace;
        The Mystery of the Hidden House; The Mystery of the Pantomime Cat; The Mystery of the Invisible Thief; The Mystery of the Vanished Prince; The Mystery of the Strange Bundle;
        The Mystery of Holly Lane; The Mystery of Tally-Ho Cottage; The Mystery of the Missing Man; The Mystery of the Strange Messages; The Mystery of Banshee Towers;
        Amelia Jane|Naughty Amelia Jane; Mr Pink-Whistle|Mr. Pink-Whistle; Binkle and Flip; Mr Meddle; Bimbo and Topsy; The Secret of Spiggy Holes|Spiggy Holes; The Secret of Killimooin|Killimooin`,
      deep: `Bumpy and His Bus; Mr Twiddle; Josie, Click and Bun|Josie Click and Bun; Willow Farm; Round the Year with Enid Blyton; Tales of Toyland; The Boy Next Door; The Treasure Hunters|Treasure Hunters;
        Pole Star Family; The Children's Life of Christ|Children's Life of Christ`,
      legendary: 'The Land of Far-Beyond|Land of Far-Beyond; The Six Bad Boys|Six Bad Boys',
    },
    facts: {
      'The Land of Far-Beyond': 'Blyton\'s 1942 retelling of The Pilgrim\'s Progress for children.',
      'The Six Bad Boys': 'A 1951 story about boys who get into trouble and are helped to change.',
    },
  },
  {
    id: 'ent-percyjackson-char',
    category: 'entertainment',
    prompt: 'Name a Percy Jackson character',
    qualifier: 'Named characters (heroes, gods, monsters) in Percy Jackson and the Olympians and Heroes of Olympus',
    missingTier: 'deep',
    groups: {
      textbook: 'Percy Jackson|Percy; Annabeth Chase|Annabeth; Grover Underwood|Grover; Poseidon; Zeus; Hades; Athena; Luke Castellan|Luke; Chiron; Mr. D|Dionysus|Mr D',
      honours: `Thalia Grace|Thalia; Nico di Angelo|Nico; Clarisse La Rue|Clarisse; Tyson; Rachel Elizabeth Dare|Rachel; Sally Jackson|Sally; Paul Blofis|Paul; Gabe Ugliano|Gabe;
        Kronos|Cronus; Medusa; Minotaur; Hephaestus; Ares; Aphrodite; Apollo; Artemis; Hermes; Demeter; Hera; Hestia; Persephone; Hecate; Nike; Hypnos; Charon; Cerberus;
        Echidna; Chimera; Jason Grace|Jason; Piper McLean|Piper; Leo Valdez|Leo; Hazel Levesque|Hazel; Frank Zhang|Frank; Reyna Ramírez-Arellano|Reyna; Calypso; Gaea|Gaia; Octavian`,
      rare: `Pan; Nemesis; Eris; Thanatos; Iris; Tantalus; Mrs. Dodds|Alecto|Mrs Dodds; Silena Beauregard|Silena; Charles Beckendorf|Beckendorf; Travis Stoll|Travis; Connor Stoll|Connor;
        Katie Gardner|Katie; Pollux; Will Solace|Will; Lou Ellen; Michael Yew; Kayla Knowles|Kayla; Drew Tanaka|Drew; Frederick Chase|Frederick; Mr. Brunner|Mr Brunner; Argus;
        Blackjack; Mrs. O'Leary|Mrs O'Leary; Arion; Jake Mason|Jake; Ethan Nakamura|Ethan; Bianca di Angelo|Bianca; Manticore|Dr. Thorn|Dr Thorn; Arachne; Antaeus; Polyphemus;
        Scylla; Charybdis; Empousa; Laistrygonian|Laistrygonians; Telekhines; Naiad; Dryad; Satyr; Cyclops`,
      deep: `Bob the Titan|Bob|Small Bob; Iapetus; Hyperion; Krios|Crius; Koios; Oceanus; Atlas; Prometheus; Epimetheus; Rhea; Themis; Mnemosyne; Phoebe; Tethys; Theia; Pasiphae;
        Sherman Yang|Sherman; Leila; Phobos; Deimos; Hylla Ramírez-Arellano|Hylla; Otis; Ephialtes; Ladon; Festus; Gleeson Hedge|Coach Hedge|Hedge`,
      legendary: 'Clovis; Damasen',
    },
    facts: {
      Clovis: 'A permanently sleepy camper from the Hypnos cabin.',
      Damasen: 'A friendly giant who helps Percy and Annabeth in Tartarus.',
    },
  },
  {
    id: 'ent-christie-novel',
    category: 'entertainment',
    prompt: 'Name an Agatha Christie novel',
    qualifier: 'Novels (not short-story collections or plays) by Agatha Christie, including those under the name Mary Westmacott',
    missingTier: 'deep',
    answers: `
      The Mysterious Affair at Styles; The Secret Adversary; The Murder on the Links; The Man in the Brown Suit; The Secret of Chimneys; The Murder of Roger Ackroyd; The Big Four@The Big Four (novel);
      The Mystery of the Blue Train; The Seven Dials Mystery; The Murder at the Vicarage; Giant's Bread; The Sittaford Mystery; Peril at End House; Lord Edgware Dies; Murder on the Orient Express;
      Why Didn't They Ask Evans?|Why Didnt They Ask Evans; Three Act Tragedy; Death in the Clouds; The A.B.C. Murders|The ABC Murders|ABC Murders; Murder in Mesopotamia; Cards on the Table; Dumb Witness;
      Death on the Nile; Appointment with Death; Hercule Poirot's Christmas|Hercule Poirots Christmas; Murder Is Easy; And Then There Were None|Ten Little Indians; One, Two, Buckle My Shoe|One Two Buckle My Shoe;
      Sad Cypress; Evil Under the Sun; N or M?|N or M; The Body in the Library; Five Little Pigs; The Moving Finger; Towards Zero; Death Comes as the End; Sparkling Cyanide; Crooked House; Taken at the Flood;
      They Came to Baghdad; Mrs McGinty's Dead|Mrs McGintys Dead; They Do It with Mirrors; After the Funeral; A Pocket Full of Rye; Destination Unknown; Hickory Dickory Dock; Dead Man's Folly|Dead Mans Folly;
      4.50 from Paddington|4:50 from Paddington|The 4.50 from Paddington; Ordeal by Innocence; Cat Among the Pigeons; The Pale Horse; The Mirror Crack'd from Side to Side|The Mirror Crackd; The Clocks; A Caribbean Mystery;
      At Bertram's Hotel; Third Girl; Endless Night; By the Pricking of My Thumbs; Hallowe'en Party|Halloween Party; Passenger to Frankfurt; Nemesis@Nemesis (Christie novel); Elephants Can Remember;
      Postern of Fate; Curtain: Poirot's Last Case|Curtain; Sleeping Murder; Unfinished Portrait; Absent in the Spring; The Rose and the Yew Tree; A Daughter's a Daughter|A Daughters a Daughter; The Burden`,
    legendary: ['Giant\'s Bread'],
    facts: { 'Giant\'s Bread': 'Published in 1930 under her pen name Mary Westmacott, a non-mystery novel about music.' },
  },
  {
    id: 'ent-stranger-things',
    category: 'entertainment',
    prompt: 'Name a character from Stranger Things',
    qualifier: 'Named characters from the Netflix series, seasons 1 to 4',
    missingTier: 'deep',
    groups: {
      textbook: 'Eleven|El|Jane Hopper; Mike Wheeler|Mike; Dustin Henderson|Dustin; Lucas Sinclair|Lucas; Will Byers|Will; Max Mayfield|Max; Jim Hopper|Hopper|Chief Hopper; Steve Harrington|Steve; Nancy Wheeler|Nancy; Joyce Byers|Joyce',
      honours: `Jonathan Byers|Jonathan; Eddie Munson|Eddie; Robin Buckley|Robin; Billy Hargrove|Billy; Vecna|Henry Creel|One; Demogorgon; Mind Flayer|Shadow Monster; Dr. Brenner|Papa|Martin Brenner|Brenner;
        Murray Bauman|Murray; Erica Sinclair|Erica; Barb Holland|Barb; Karen Wheeler|Karen; Ted Wheeler|Ted; Dart|D'Artagnan; Kali|Eight; Bob Newby|Bob; Dr. Owens|Sam Owens|Owens;
        Jason Carver|Jason; Chrissy Cunningham|Chrissy; Fred Benson|Fred; Dmitri Antonov|Enzo|Dmitri; Yuri Ismaylov|Yuri; Lonnie Byers|Lonnie; Angela`,
      rare: `Powell; Callahan; Mr. Clarke|Scott Clarke|Clarke; Mrs. Kline|Kline; Mayor Larry Kline|Larry Kline; Tommy Hagan|Tommy; Carol Perkins|Carol; Troy Walsh|Troy; James Hobbs|Hobbs;
        Charles Sinclair|Charles; Heather Holloway|Heather; Alexei; Nikolai; Gareth Emerick|Gareth; Jeff; Axel; Keith; Grace; Allen; Demodogs|Demodog; Demobats|Demobat;
        Terry Ives|Terry; Becky Ives|Becky; Neil Hargrove|Neil; Susan Hargrove|Susan; Mr. Munson|Wayne Munson|Wayne; Patrick McKinney|Patrick`,
      deep: 'Agent Harmon; Ms. Sullivan|Sullivan; Mrs. Henderson|Claudia Henderson|Claudia; Mr. Frazier; Brenda; Mr. Rosen; Mr. Lawrence|Lawrence; Mr. Corman|Corman',
      legendary: 'Suzie|Suzie Bingham; Argyle',
    },
    facts: {
      Suzie: 'Dustin\'s long-distance girlfriend from Utah, famous for singing the Neverending Story song with him.',
      Argyle: 'The pizza delivery driver who becomes Jonathan\'s friend in California.',
    },
  },
  {
    id: 'ent-tintin-album',
    category: 'entertainment',
    prompt: 'Name a Tintin adventure',
    qualifier: 'The 24 Tintin albums by Hergé, 1930 to 1976 (the unfinished Tintin and Alph-Art counts)',
    closed: 24,
    missingTier: 'deep',
    answers: `
      Tintin in the Land of the Soviets|Land of the Soviets; Tintin in the Congo|Tintin in Congo; Tintin in America; Cigars of the Pharaoh; The Blue Lotus;
      The Broken Ear; The Black Island; King Ottokar's Sceptre|King Ottokars Sceptre|King Ottokar's Scepter; The Crab with the Golden Claws; The Shooting Star;
      The Secret of the Unicorn; Red Rackham's Treasure|Red Rackhams Treasure; The Seven Crystal Balls; Prisoners of the Sun; Land of Black Gold; Destination Moon@Destination Moon (comics);
      Explorers on the Moon; The Calculus Affair; The Red Sea Sharks; Tintin in Tibet; The Castafiore Emerald; Flight 714|Flight 714 to Sydney@Flight 714 to Sydney; Tintin and the Picaros; Tintin and Alph-Art|Alph-Art`,
    legendary: ['Tintin and Alph-Art'],
    facts: { 'Tintin and Alph-Art': 'Hergé died in 1983 while still drawing it, leaving it unfinished.' },
  },
  {
    id: 'ent-salman-film',
    category: 'entertainment',
    prompt: 'Name a Salman Khan film',
    qualifier: 'Hindi feature films with Salman Khan in an acting role (cameos count), 1988 to 2025',
    missingTier: 'deep',
    answers: `
      Biwi Ho To Aisi; Maine Pyar Kiya; Baaghi@Baaghi (1990 film); Patthar Ke Phool; Sanam Bewafa; Saajan@Saajan (1991 film); Suryavanshi@Suryavanshi (1992 film); Dil Tera Aashiq;
      Hum Aapke Hain Koun..!|Hum Aapke Hain Koun; Andaz Apna Apna; Karan Arjun; Judwaa; Jeet@Jeet (1996 film); Dushman Duniya Ka; Auzaar; Jab Pyaar Kisise Hota Hai; Pyaar Kiya To Darna Kya@Pyaar Kiya To Darna Kya (1998 film);
      Kuch Kuch Hota Hai; Biwi No.1|Biwi No 1; Hum Dil De Chuke Sanam; Hello Brother@Hello Brother (1999 film); Hum Saath-Saath Hain|Hum Saath Saath Hain; Tere Naam; Mujhse Shaadi Karogi; Garv; Baghban@Baghban (2003 film);
      No Entry@No Entry (film); Partner@Partner (2007 film); Salaam-e-Ishq; Wanted@Wanted (2009 film); Dabangg; Ready@Ready (2011 film); Bodyguard@Bodyguard (2011 Hindi film); Ek Tha Tiger;
      Dabangg 2; Jai Ho@Jai Ho (film); Kick@Kick (2014 film); Bajrangi Bhaijaan; Prem Ratan Dhan Payo; Sultan@Sultan (2016 film); Tubelight@Tubelight (2017 Hindi film); Tiger Zinda Hai; Race 3;
      Bharat@Bharat (film); Dabangg 3; Radhe@Radhe (2021 film); Antim: The Final Truth|Antim; Kisi Ka Bhai Kisi Ki Jaan; Tiger 3; Sikandar@Sikandar (2025 film); Veer@Veer (2010 film);
      London Dreams; Yuvvraaj; Main Aur Mrs Khanna; Jaan-E-Mann`,
    legendary: ['Biwi Ho To Aisi'],
    facts: { 'Biwi Ho To Aisi': 'His 1988 debut, in a supporting role, a year before Maine Pyar Kiya made him a star.' },
  },
  {
    id: 'ent-toystory-char',
    category: 'entertainment',
    prompt: 'Name a Toy Story character',
    qualifier: 'Named characters from the Toy Story films, shorts and specials, up to 2025',
    missingTier: 'deep',
    groups: {
      textbook: 'Woody; Buzz Lightyear|Buzz; Jessie; Mr. Potato Head|Mr Potato Head; Rex; Hamm; Slinky Dog|Slinky; Bo Peep; Andy; Sid Phillips|Sid',
      honours: `Bullseye; Stinky Pete|The Prospector; Emperor Zurg|Zurg; Lotso|Lots-O'-Huggin' Bear; Ken; Barbie; Forky; Duke Caboom|Duke; Gabby Gabby; Ducky; Bunny; Giggle McDimples|Giggle;
        Lenny; Wheezy; Sarge; Al McWhiggin|Al; Mrs. Potato Head|Mrs Potato Head; Little Green Men|Aliens; Bonnie; Molly Davis|Molly; Big Baby; Chuckles; Twitch; Stretch; Chunk; Sparks;
        Trixie; Buttercup; Mr. Pricklepants|Mr Pricklepants; Dolly; Peas-in-a-Pod|Peas in a Pod; Chatter Telephone|Chatter; Rocky Gibraltar|Rocky; RC; Etch|Etch A Sketch; Combat Carl`,
      rare: `Hannah Phillips|Hannah; Scud; Roller Bob; Legs; Jack-in-the-Box|Jack in the Box; Mr. Spell|Mr Spell; Dr. Porkchop|Dr Porkchop; Lamb Chop|Lambchop; Mr. Shark|Mr Shark;
        Janet; Carl Reineke|Carl; Aunt Dolores|Dolores; Pat Aloe|Pat`,
      deep: 'Mini Buzz; Gabby Gabby\'s Dummies|Dummies; Trashcan Trixie; Mrs. Davis|Andy\'s Mom|Mrs Davis',
      legendary: 'Benson',
    },
    facts: { Benson: 'Gabby Gabby\'s ventriloquist-dummy henchman in the antique shop in Toy Story 4.' },
  },
  {
    id: 'ent-dr-seuss-book',
    category: 'entertainment',
    prompt: 'Name a Dr. Seuss book',
    qualifier: 'Books written by Theodor Geisel as Dr. Seuss, not those under other pen names',
    missingTier: 'deep',
    answers: `
      And to Think That I Saw It on Mulberry Street|Mulberry Street; The 500 Hats of Bartholomew Cubbins|The 500 Hats; The King's Stilts|The Kings Stilts; Horton Hatches the Egg; McElligot's Pool|McElligots Pool;
      Thidwick the Big-Hearted Moose|Thidwick; Bartholomew and the Oobleck; If I Ran the Zoo; Scrambled Eggs Super!|Scrambled Eggs Super; Horton Hears a Who!|Horton Hears a Who; On Beyond Zebra!|On Beyond Zebra;
      If I Ran the Circus; How the Grinch Stole Christmas!|How the Grinch Stole Christmas|The Grinch; The Cat in the Hat; The Cat in the Hat Comes Back; Yertle the Turtle and Other Stories|Yertle the Turtle;
      Green Eggs and Ham; One Fish, Two Fish, Red Fish, Blue Fish|One Fish Two Fish Red Fish Blue Fish; Hop on Pop; Fox in Socks; I Had Trouble in Getting to Solla Sollew|Solla Sollew;
      The Sneetches and Other Stories|The Sneetches; Dr. Seuss's Sleep Book|Sleep Book; Dr. Seuss's ABC|Dr Seuss's ABC; I Can Lick 30 Tigers Today! and Other Stories|I Can Lick 30 Tigers Today;
      My Book About Me; I Can Read with My Eyes Shut!|I Can Read with My Eyes Shut; Oh, the Thinks You Can Think!|Oh the Thinks You Can Think; The Lorax; Oh, the Places You'll Go!|Oh the Places You'll Go;
      Marvin K. Mooney Will You Please Go Now!|Marvin K. Mooney; Mr. Brown Can Moo! Can You?|Mr Brown Can Moo; The Shape of Me and Other Stuff|The Shape of Me;
      There's a Wocket in My Pocket!|Theres a Wocket in My Pocket; Great Day for Up!|Great Day for Up; Hunches in Bunches; The Butter Battle Book|Butter Battle Book;
      You're Only Old Once!|Youre Only Old Once; The Cat's Quizzer|The Cats Quizzer; Daisy-Head Mayzie|Daisy Head Mayzie; My Many Colored Days|My Many Coloured Days;
      Oh Say Can You Say?|Oh Say Can You Say`,
    legendary: ['On Beyond Zebra!'],
    facts: { 'On Beyond Zebra!': 'A 1955 book that invents extra letters of the alphabet for things beyond Z.' },
  },
  {
    id: 'ent-transformers-char',
    category: 'entertainment',
    prompt: 'Name a Transformers character',
    qualifier: 'Autobots, Decepticons and other named Transformers across the cartoons, comics and films, up to 2025',
    missingTier: 'deep',
    groups: {
      textbook: 'Optimus Prime; Bumblebee; Megatron; Starscream; Soundwave; Ironhide; Ratchet; Jazz; Prowl; Wheeljack',
      honours: `Grimlock; Hot Rod|Rodimus Prime|Rodimus; Ultra Magnus; Arcee; Blurr; Kup; Springer; Galvatron; Shockwave; Thundercracker; Skywarp; Devastator; Bonecrusher; Barricade; Frenzy; Rumble; Ravage;
        Laserbeak; Jetfire; Sideswipe; Sunstreaker; Mirage; Cliffjumper; Hound; Trailbreaker; Brawn; Gears; Huffer; Windcharger; Bluestreak; Omega Supreme; Metroplex; Trypticon; Scorponok; Unicron;
        Optimus Primal; Rhinox; Rattrap; Cheetor; Dinobot; Blackarachnia; Tigatron; Airazor; Waspinator; Terrorsaur; Tarantulas; Sentinel Prime|Sentinel; Lockdown; Drift; Crosshairs`,
      rare: `Hardhead; Chromedome; Highbrow; Brainstorm; Perceptor; Blaster; Cosmos; Powerglide; Seaspray; Silverbolt; Superion; Menasor; Bruticus; Defensor; Computron; Predaking; Abominus;
        Thrust; Ramjet; Dirge; Slag; Sludge; Snarl; Swoop; Slug; Cyclonus; Scourge; Kickback; Bombshell; Shrapnel; Hook; Scrapper; Long Haul; Mixmaster; Skids; Mudflap; Wheelie; Jolt;
        Sideways; Lugnut; Blitzwing; Dreadwing; Skyquake; Breakdown; Smokescreen; Bulkhead; Hot Shot|Hotshot`,
      deep: `Kranix; Nautilator; Rewind; Eject; Ramhorn; Steeljaw; Rotorstorm; Tracks; Streetwise; Alpha Trion; Quark; Roadbuster; Whirl; Guzzle; Junkions|Junkion; Spike Witwicky|Spike; Carly;
        Daniel Witwicky|Daniel; Sparkplug Witwicky|Sparkplug; Verity Carlo|Verity; Sari Sumdac|Sari`,
      legendary: 'Wreck-Gar|Wreck Gar',
    },
    facts: { 'Wreck-Gar': 'The Junkion leader who speaks entirely in catchphrases taken from TV and ads.' },
  },
];
