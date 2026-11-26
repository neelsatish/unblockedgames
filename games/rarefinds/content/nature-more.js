module.exports = [
  {
    id: 'nat-india-mammal',
    category: 'nature',
    prompt: 'Name a wild mammal found in India',
    qualifier: 'Wild mammals living in India today, by common name; wild cats and primates count',
    answers: `
      Bengal tiger|tiger|royal Bengal tiger@Bengal tiger; Asian elephant|Indian elephant@Asian elephant; Indian rhinoceros|one-horned rhino|Indian rhino|greater one-horned rhinoceros@Indian rhinoceros;
      Asiatic lion|Indian lion@Asiatic lion; Indian leopard@Indian leopard; Sloth bear@Sloth bear; Dhole|Indian wild dog|Asiatic wild dog@Dhole;
      Nilgai|blue bull@Nilgai; Chital|spotted deer|axis deer@Chital; Sambar|sambar deer@Sambar (deer); Gaur|Indian bison@Gaur; Blackbuck|Indian antelope@Blackbuck;
      Indian wolf@Indian wolf; Golden jackal|jackal@Golden jackal; Striped hyena|hyena@Striped hyena; Bengal fox|Indian fox@Bengal fox;
      Indian grey mongoose|mongoose|Indian mongoose@Indian grey mongoose; Indian pangolin|scaly anteater@Indian pangolin;
      Indian giant squirrel|Malabar giant squirrel@Indian giant squirrel; Nilgiri tahr|Nilgiri ibex@Nilgiri tahr; Himalayan tahr@Himalayan tahr;
      Red panda@Red panda; Hanuman langur|grey langur|common langur@Hanuman langur; Lion-tailed macaque|wanderoo@Lion-tailed macaque;
      Rhesus macaque|rhesus monkey@Rhesus macaque; Bonnet macaque@Bonnet macaque; Gangetic dolphin|South Asian river dolphin|susu|Ganges river dolphin@South Asian river dolphin;
      Dugong|sea cow@Dugong; Indian flying fox|greater Indian fruit bat@Indian flying fox; Wild boar|wild pig@Wild boar;
      Indian muntjac|barking deer@Indian muntjac; Hog deer@Hog deer; Barasingha|swamp deer@Barasingha; Chinkara|Indian gazelle@Chinkara;
      Four-horned antelope|chousingha@Four-horned antelope; Indian wild ass|khur|Indian onager@Indian wild ass; Asian black bear|Himalayan black bear|Asiatic black bear@Asian black bear;
      Indian crested porcupine|porcupine@Indian crested porcupine; Asian palm civet|toddy cat@Asian palm civet; Honey badger|ratel@Honey badger;
      Indian chevrotain|mouse deer|Indian spotted chevrotain@Indian spotted chevrotain; Slender loris|loris@Slender loris; Hoolock gibbon|Western hoolock gibbon@Western hoolock gibbon;
      Markhor@Markhor; Kashmir musk deer|musk deer@Kashmir musk deer; Capped langur@Capped langur; Golden langur@Golden langur; Takin|Mishmi takin@Takin;
      Leopard cat@Leopard cat; Fishing cat@Fishing cat; Jungle cat|swamp cat@Jungle cat; Rusty-spotted cat@Rusty-spotted cat; Clouded leopard@Clouded leopard; Snow leopard|ounce@Snow leopard; Caracal@Caracal`,
    legendary: ['Four-horned antelope', 'Indian wild ass'],
    facts: {
      'Four-horned antelope': 'The only wild bovid in the world where the male has four horns, found in Indian forests.',
      'Indian wild ass': 'Lives only in the Little Rann of Kutch in Gujarat, and can run at about 70 km/h.',
    },
  },
  {
    id: 'nat-india-bird',
    category: 'nature',
    prompt: 'Name a bird found in India',
    qualifier: 'Wild birds seen in India, by common name. Peacock and peafowl both count.',
    strip: ['bird'],
    answers: `
      Peacock|peafowl|mor|Indian peafowl|Indian peacock@Indian peafowl; Sarus crane@Sarus crane; Great Indian bustard|godawan@Great Indian bustard;
      Indian roller|neelkanth@Indian roller; House sparrow|sparrow@House sparrow; House crow|crow|Indian house crow@House crow; Rose-ringed parakeet|ring-necked parakeet|parakeet|tota@Rose-ringed parakeet;
      Asian koel|koel|cuckoo|kuyil@Asian koel; Common myna|Indian myna|myna|mynah@Common myna; Red-vented bulbul|bulbul@Red-vented bulbul;
      Oriental magpie-robin|magpie robin|doyal@Oriental magpie-robin; Hoopoe|common hoopoe@Hoopoe; Black kite|kite@Black kite; Brahminy kite@Brahminy kite;
      Indian pond heron|paddybird|pond heron@Indian pond heron; Painted stork@Painted stork; Black-headed ibis|Oriental white ibis@Black-headed ibis;
      Indian grey hornbill|grey hornbill@Indian grey hornbill; Great hornbill|great Indian hornbill@Great hornbill; Malabar pied hornbill@Malabar pied hornbill;
      White-throated kingfisher|white-breasted kingfisher@White-throated kingfisher; Common kingfisher|river kingfisher@Common kingfisher; Pied kingfisher@Pied kingfisher;
      Purple sunbird@Purple sunbird; Coppersmith barbet|crimson-breasted barbet@Coppersmith barbet; Greater flamingo|flamingo@Greater flamingo; Lesser flamingo@Lesser flamingo;
      Bar-headed goose@Bar-headed goose; Himalayan monal|Impeyan monal@Himalayan monal; Green bee-eater@Green bee-eater; Rufous treepie|treepie@Rufous treepie;
      Jungle babbler|seven sisters|seven sisters bird@Jungle babbler; Spotted owlet@Spotted owlet; Indian eagle-owl|rock eagle-owl|Bengal eagle-owl@Rock eagle-owl;
      Black-winged stilt@Black-winged stilt; Red junglefowl|jungle fowl@Red junglefowl; Great cormorant|cormorant@Great cormorant; Oriental darter|snakebird@Oriental darter;
      White-breasted waterhen|waterhen@White-breasted waterhen; Lesser adjutant@Lesser adjutant; Siberian crane@Siberian crane; Indian vulture|long-billed vulture@Indian vulture;
      Forest owlet@Forest owlet; Jerdon's courser|Jerdon courser@Jerdon's courser; Indian paradise flycatcher|paradise flycatcher@Indian paradise flycatcher; Common tailorbird|tailorbird@Common tailorbird;
      Ashy prinia|prinia@Ashy prinia; Black drongo|king crow@Black drongo; Indian cormorant@Indian cormorant; Common iora|iora@Common iora; Cattle egret|egret@Cattle egret; Rock dove|blue rock pigeon|pigeon|rock pigeon@Rock dove`,
    tryhard: ['Jerdon\'s courser'],
    legendary: ['Forest owlet', 'Jerdon\'s courser'],
    facts: {
      'Forest owlet': 'Thought extinct for over a century until it was rediscovered in Maharashtra in 1997.',
      "Jerdon's courser": 'A nocturnal bird believed extinct until it was found again in Andhra Pradesh in 1986.',
    },
  },
  {
    id: 'nat-india-snake',
    category: 'nature',
    prompt: 'Name a snake found in India',
    qualifier: 'Snakes living in India, by common name; "cobra" alone counts',
    strip: ['snake'],
    answers: `
      Indian cobra|spectacled cobra|cobra|naag|nag|naja@Indian cobra; King cobra|hamadryad@King cobra; Common krait|Indian krait|krait@Common krait;
      Russell's viper|Russel's viper|daboia|Russell viper@Russell's viper; Saw-scaled viper|Indian saw-scaled viper|Echis carinatus|echis@Echis carinatus;
      Indian rock python|rock python@Indian rock python; Reticulated python|reticulate python@Reticulated python; Burmese python@Burmese python;
      Indian rat snake|dhaman|rat snake|oriental rat snake@Ptyas mucosa; Checkered keelback|chequered keelback|asian water snake@Fowlea piscator; Banded krait@Banded krait;
      Red sand boa|Indian sand boa|sand boa@Eryx johnii; Indian egg-eater|egg-eating snake|Indian egg-eating snake@Elachistodon;
      Paradise tree snake|flying snake|golden tree snake@Chrysopelea paradisi; Common wolf snake|wolf snake@Lycodon aulicus; Green vine snake|vine snake|whip snake@Ahaetulla nasuta;
      Hump-nosed pit viper|hump nosed viper@Hypnale hypnale; Malabar pit viper@Trimeresurus malabaricus; Himalayan pit viper@Gloydius himalayanus;
      Slender coral snake|coral snake@Calliophis melanurus; Painted bronzeback|bronzeback tree snake@Dendrelaphis pictus; Olive keelback@Atretium schistosum;
      Dog-faced water snake@Cerberus rynchops; Brahminy blind snake|flowerpot snake|blind snake@Brahminy blind snake; Yellow-bellied sea snake|pelagic sea snake|sea snake@Hydrophis platurus;
      Common trinket snake|trinket snake@Coelognathus helena; Banded kukri snake|kukri snake@Oligodon arnensis; Indian smooth snake|smooth snake@Indian smooth snake;
      Streaked kukri snake@Oligodon taeniolatus; Large-spotted cat snake|cat snake@Boiga multomaculata; Common cat snake|forsten's cat snake@Boiga forsteni;
      ; Beddome's cat snake@Boiga beddomei; Green keelback|green water snake@Rhabdophis plumbicolor; Striped keelback@Amphiesma stolatum;
      Indian sand snake@Psammophis; Common sand boa|Russell's earth boa@Gongylophis conicus; Mountain pit viper@Ovophis monticola; Bamboo pit viper|Green pit viper@Trimeresurus albolabris;
      Black-headed snake@Sibynophis subpunctatus; Burrowing snake|Earth snake@Uropeltidae; Shieldtail snake|shieldtail@Uropeltis`,
    legendary: ['Indian egg-eater', 'Shieldtail snake'],
    facts: {
      'Indian egg-eater': 'A rare snake that swallows eggs whole and has almost no teeth; found in parts of India.',
      'Shieldtail snake': 'Small burrowing snakes of southern India and Sri Lanka with a flat, shield-like tail tip.',
    },
  },
  {
    id: 'nat-primate',
    category: 'nature',
    prompt: 'Name a primate (not a human)',
    qualifier: 'Monkeys, apes, lemurs and other non-human primates, by species or well-known group name',
    answers: `
      Chimpanzee|chimp@Chimpanzee; Bonobo|pygmy chimpanzee@Bonobo; Gorilla@Gorilla; Orangutan|orang-utan|orangutans@Orangutan; Gibbon@Gibbon; Siamang@Siamang;
      Western lowland gorilla@Western lowland gorilla; Mountain gorilla@Mountain gorilla; Bornean orangutan@Bornean orangutan; Sumatran orangutan@Sumatran orangutan;
      Rhesus macaque|rhesus monkey|rhesus@Rhesus macaque; Japanese macaque|snow monkey@Japanese macaque; Barbary macaque|Barbary ape@Barbary macaque; Bonnet macaque@Bonnet macaque;
      Lion-tailed macaque@Lion-tailed macaque; Crab-eating macaque|long-tailed macaque|cynomolgus monkey@Crab-eating macaque; Hanuman langur|grey langur|langur@Hanuman langur;
      Golden langur@Golden langur; Capped langur@Capped langur; Proboscis monkey@Proboscis monkey; Mandrill@Mandrill; Drill@Drill (primate); Baboon@Baboon; Hamadryas baboon@Hamadryas baboon;
      Gelada|bleeding-heart monkey@Gelada; Vervet monkey|vervet@Vervet monkey; Colobus|colobus monkey@Colobinae; Black-and-white colobus@Colobus; Patas monkey@Patas monkey;
      Howler monkey|howler@Howler monkey; Spider monkey@Spider monkey; Capuchin|capuchin monkey@Capuchin monkey; Squirrel monkey@Squirrel monkey; Marmoset@Marmoset;
      Tamarin@Tamarin; Golden lion tamarin@Golden lion tamarin; Titi monkey|titi@Titi; Uakari|uacari@Uakari; Saki monkey|saki@Saki monkey; Night monkey|owl monkey|douroucouli@Night monkey;
      Ring-tailed lemur|lemur|ringtail lemur@Ring-tailed lemur; Aye-aye@Aye-aye; Indri@Indri; Sifaka@Sifaka; Mouse lemur@Mouse lemur; Ruffed lemur@Ruffed lemur;
      Slender loris|loris@Slender loris; Slow loris@Slow loris; Tarsier@Tarsier; Galago|bush baby|bushbaby@Galago; Potto@Potto; Golden snub-nosed monkey|snub-nosed monkey@Golden snub-nosed monkey;
      Hoolock gibbon@Western hoolock gibbon; Lar gibbon|white-handed gibbon@Lar gibbon; Diana monkey@Diana monkey; Guenon@Guenon; De Brazza's monkey@De Brazza's monkey;
      Mangabey@Mangabey; Pig-tailed macaque@Southern pig-tailed macaque; Tibetan macaque@Tibetan macaque; Emperor tamarin@Emperor tamarin;
      Muriqui|woolly spider monkey@Muriqui; Woolly monkey@Woolly monkey; Pygmy marmoset@Pygmy marmoset; Philippine tarsier@Philippine tarsier; Sloth lemur@Sloth lemur; Verreaux's sifaka@Verreaux's sifaka`,
    legendary: ['Aye-aye', 'Muriqui'],
    facts: {
      'Aye-aye': 'A Madagascan lemur that taps on trees with a long thin middle finger to find grubs.',
      Muriqui: 'The largest monkey in the Americas, found only in Brazil, also called the woolly spider monkey.',
    },
  },
  {
    id: 'nat-shark',
    category: 'nature',
    prompt: 'Name a type of shark',
    qualifier: 'Any shark species or well-known shark group, by common name',
    strip: ['shark'],
    answers: `
      Great white shark|great white|white shark@Great white shark; Hammerhead shark|hammerhead@Hammerhead shark; Tiger shark@Tiger shark; Bull shark@Bull shark; Whale shark@Whale shark;
      Basking shark@Basking shark; Mako shark|shortfin mako|mako@Shortfin mako shark; Blue shark@Blue shark; Nurse shark@Nurse shark; Lemon shark@Lemon shark;
      Blacktip reef shark|blacktip shark@Blacktip reef shark; Whitetip reef shark@Whitetip reef shark; Oceanic whitetip shark|oceanic whitetip@Oceanic whitetip shark;
      Greenland shark@Greenland shark; Goblin shark@Goblin shark; Megamouth shark|megamouth@Megamouth shark; Thresher shark|thresher@Thresher shark;
      Cookiecutter shark|cookie cutter shark@Cookiecutter shark; Frilled shark@Frilled shark; Angel shark|angelshark@Angelshark; Wobbegong|carpet shark@Wobbegong;
      Leopard shark@Leopard shark; Zebra shark@Zebra shark; Bamboo shark@Bamboo shark; Epaulette shark@Epaulette shark; Sand tiger shark|grey nurse shark|ragged-tooth shark@Sand tiger shark;
      Porbeagle@Porbeagle; Salmon shark@Salmon shark; Dusky shark@Dusky shark; Silky shark@Silky shark; Sandbar shark@Sandbar shark; Spinner shark@Spinner shark;
      Caribbean reef shark@Caribbean reef shark; Grey reef shark@Grey reef shark; Galapagos shark@Galapagos shark; Bonnethead|bonnethead shark@Bonnethead; Sixgill shark|bluntnose sixgill shark@Bluntnose sixgill shark;
      Spiny dogfish|dogfish@Spiny dogfish; Smooth hound|smoothhound@Smoothhound; Catshark|cat shark@Scyliorhinidae; Horn shark@Horn shark; Port Jackson shark@Port Jackson shark;
      Saw shark|sawshark@Sawshark; Lantern shark@Lantern shark; Dwarf lanternshark|pygmy shark@Dwarf lanternshark; Pyjama shark|pajama shark@Pyjama shark; Swell shark@Swell shark;
      Crocodile shark@Crocodile shark; Megalodon@Megalodon; Ganges shark|Gangetic shark@Ganges shark; Spadenose shark@Spadenose shark; Great hammerhead|great hammerhead shark@Great hammerhead;
      Scalloped hammerhead@Scalloped hammerhead; Winghead shark@Winghead shark; Kitefin shark@Kitefin shark; Prickly shark@Echinorhinus brucus; Velvet belly lanternshark@Velvet belly lanternshark`,
    tryhard: ['Megalodon'],
    legendary: ['Ganges shark', 'Cookiecutter shark'],
    facts: {
      'Ganges shark': 'A critically endangered river shark of the Ganges and Hooghly, one of the few sharks found in fresh water.',
      'Cookiecutter shark': 'Bites perfectly round plugs of flesh out of whales, dolphins and even submarines.',
    },
  },
  {
    id: 'nat-whale-dolphin',
    category: 'nature',
    prompt: 'Name a whale, dolphin or porpoise',
    qualifier: 'Any cetacean species or well-known group, by common name',
    answers: `
      Blue whale@Blue whale; Humpback whale|humpback@Humpback whale; Sperm whale|cachalot@Sperm whale; Killer whale|orca@Orca; Beluga|beluga whale|white whale@Beluga whale;
      Narwhal@Narwhal; Fin whale|finback whale@Fin whale; Sei whale@Sei whale; Minke whale|minke@Minke whale; Bryde's whale|Bryde whale@Bryde's whale; Grey whale|gray whale@Gray whale;
      Bowhead whale@Bowhead whale; North Atlantic right whale|right whale@North Atlantic right whale; Southern right whale@Southern right whale; Pygmy right whale@Pygmy right whale;
      Pilot whale|long-finned pilot whale|short-finned pilot whale@Long-finned pilot whale; Bottlenose dolphin|bottlenose@Common bottlenose dolphin; Common dolphin|short-beaked common dolphin@Short-beaked common dolphin;
      Spinner dolphin@Spinner dolphin; Spotted dolphin|Atlantic spotted dolphin@Atlantic spotted dolphin; Striped dolphin@Striped dolphin; Risso's dolphin|Risso dolphin@Risso's dolphin;
      Dusky dolphin@Dusky dolphin; Hector's dolphin|Hector dolphin@Hector's dolphin; Irrawaddy dolphin@Irrawaddy dolphin; Indo-Pacific humpback dolphin|humpback dolphin@Indo-Pacific humpback dolphin;
      Ganges river dolphin|Gangetic dolphin|susu|South Asian river dolphin@South Asian river dolphin; Amazon river dolphin|boto|pink river dolphin@Amazon river dolphin;
      Yangtze river dolphin|baiji@Baiji; Indus river dolphin|bhulan@Indus river dolphin; La Plata dolphin|franciscana@Franciscana; Tucuxi@Tucuxi; Commerson's dolphin@Commerson's dolphin;
      Heaviside's dolphin@Heaviside's dolphin; Peale's dolphin@Peale's dolphin; Fraser's dolphin@Fraser's dolphin; Melon-headed whale@Melon-headed whale; Pygmy killer whale@Pygmy killer whale;
      False killer whale@False killer whale; Rough-toothed dolphin@Rough-toothed dolphin; White-beaked dolphin@White-beaked dolphin; Pacific white-sided dolphin@Pacific white-sided dolphin;
      Harbour porpoise|harbor porpoise|porpoise@Harbour porpoise; Dall's porpoise@Dall's porpoise; Vaquita@Vaquita; Finless porpoise@Finless porpoise; Burmeister's porpoise@Burmeister's porpoise;
      Cuvier's beaked whale|goose-beaked whale@Cuvier's beaked whale; Blainville's beaked whale@Blainville's beaked whale; Baird's beaked whale@Baird's beaked whale; Northern bottlenose whale@Northern bottlenose whale;
      Pygmy sperm whale@Pygmy sperm whale; Dwarf sperm whale@Dwarf sperm whale; Omura's whale@Omura's whale; Maui dolphin@Māui dolphin; Chilean dolphin@Chilean dolphin`,
    tryhard: ['Vaquita'],
    legendary: ['Indus river dolphin', 'Omura\'s whale'],
    facts: {
      'Indus river dolphin': 'A nearly blind freshwater dolphin of Pakistan and Punjab in India that navigates by echolocation.',
      "Omura's whale": 'A small baleen whale only described as a new species in 2003.',
    },
  },
  {
    id: 'nat-fish',
    category: 'nature',
    prompt: 'Name a type of fish',
    qualifier: 'Any fish species or well-known fish group, fresh or salt water, by common name',
    strip: ['fish'],
    answers: `
      Goldfish@Goldfish; Salmon@Salmon; Tuna@Tuna; Cod@Cod; Trout@Trout; Carp@Carp; Catla|Indian carp@Catla; Rohu@Rohu; Mrigal|mrigal carp@Mrigal; Hilsa|ilish|Indian shad@Hilsa;
      Pomfret@Pomfret; Mackerel|Indian mackerel@Mackerel; Sardine|sardines|pilchard@Sardine; Anchovy@Anchovy; Herring@Herring; Bombay duck|bombil@Bombay duck; Surmai|seer fish|king mackerel|kingfish@King mackerel;
      Barramundi|bhetki|bekti@Barramundi; Mahseer@Mahseer; Catfish|magur|singhi@Catfish; Tilapia@Tilapia; Snakehead|murrel|shol@Snakehead (fish); Eel@Eel; Clownfish|anemonefish@Amphiprioninae;
      Angelfish@Pterophyllum; Guppy@Guppy; Betta|Siamese fighting fish|fighting fish@Betta; Molly@Poecilia; Swordtail@Swordtail; Platy@Platy (fish); Neon tetra|tetra@Neon tetra; Discus@Discus (fish);
      Oscar@Oscar (fish); Piranha@Piranha; Koi@Koi; Zebrafish|zebra danio@Zebrafish; Pufferfish|puffer fish|fugu@Tetraodontidae; Swordfish@Swordfish; Marlin@Marlin; Sailfish@Sailfish;
      Barracuda@Barracuda; Grouper@Grouper; Snapper@Lutjanidae; Sea bass|seabass@Sea bass; Halibut@Halibut; Flounder@Flounder; Sole@Sole (fish); Haddock@Haddock; Pollock@Pollock;
      Seahorse@Seahorse; Lionfish@Lionfish; Stonefish@Stonefish; Moray eel|moray@Moray eel; Manta ray|manta@Manta ray; Stingray@Stingray; Sunfish|ocean sunfish|mola@Ocean sunfish;
      Anglerfish@Anglerfish; Parrotfish@Parrotfish; Triggerfish@Triggerfish; Wrasse@Wrasse; Flying fish@Flying fish; Coelacanth@Coelacanth; Lungfish@Lungfish; Arapaima|pirarucu@Arapaima;
      Sturgeon@Sturgeon; Paddlefish@Paddlefish; Gar|garfish@Gar; Pike@Northern pike; Perch@Perch; Bass|largemouth bass@Largemouth bass; Bluegill@Bluegill; Mullet@Mullet (fish); Remora|suckerfish@Remora;
      Sawfish@Sawfish; Mudskipper@Mudskipper; Archerfish@Archerfish; Hagfish@Hagfish; Lamprey@Lamprey; Pangasius|basa|pangas@Pangasius; Climbing perch|koi fish (India)@Anabas testudineus; Pearlspot|karimeen@Etroplus suratensis`,
    legendary: ['Coelacanth', 'Archerfish'],
    facts: {
      Coelacanth: 'A "living fossil" thought extinct for 66 million years until one was caught off South Africa in 1938.',
      Archerfish: 'Shoots jets of water from its mouth to knock insects off leaves above the surface.',
    },
  },
  {
    id: 'nat-insect',
    category: 'nature',
    prompt: 'Name an insect',
    qualifier: 'Any insect or insect group (six legs). Spiders and centipedes are not insects.',
    answers: `
      Ant@Ant; Bee@Bee; Honey bee|honeybee@Honey bee; Bumblebee|bumble bee@Bumblebee; Wasp@Wasp; Hornet@Hornet; Butterfly@Butterfly; Moth@Moth; Housefly|house fly|fly@Housefly;
      Mosquito|mosquitoes@Mosquito; Dragonfly@Dragonfly; Damselfly@Damselfly; Grasshopper@Grasshopper; Locust@Locust; Cricket@Cricket (insect); Cockroach|roach@Cockroach;
      Termite|white ant@Termite; Beetle@Beetle; Ladybird|ladybug|lady beetle@Coccinellidae; Firefly|lightning bug@Firefly; Stag beetle@Stag beetle; Dung beetle@Dung beetle;
      Praying mantis|mantis@Mantis; Stick insect|walking stick@Phasmatodea; Leaf insect@Phylliidae; Aphid|greenfly@Aphid; Cicada@Cicada; Cockchafer|June bug@Cockchafer;
      Earwig@Earwig; Silverfish@Silverfish; Flea@Flea; Louse|lice|head louse@Louse; Bed bug|bedbug@Bed bug; Mayfly@Mayfly; Lacewing@Lacewing; Antlion|ant lion@Antlion;
      Weevil@Weevil; Tsetse fly|tsetse@Tsetse fly; Horsefly|horse fly@Horse-fly; Hoverfly|hover fly@Hoverfly; Fruit fly|Drosophila@Drosophila melanogaster;
      Crane fly|daddy longlegs (fly)@Crane fly; Midge@Midge; Gnat@Gnat; Sandfly|sand fly@Sandfly; Blowfly|blow fly|bluebottle@Calliphoridae; Botfly@Botfly; Assassin bug@Assassin bug;
      Stink bug|shield bug@Pentatomidae; Water strider|pond skater@Gerridae; Water boatman@Corixidae; Cuckoo bee@Cuckoo bee; Carpenter bee@Carpenter bee; Mud dauber@Mud dauber;
      Leafcutter ant@Leafcutter ant; Army ant@Army ant; Fire ant@Fire ant; Weaver ant@Oecophylla; Bullet ant@Paraponera clavata; Carpenter ant@Carpenter ant; Rhinoceros beetle@Rhinoceros beetle;
      Goliath beetle@Goliath beetle; Hercules beetle@Dynastes hercules; Jewel beetle@Buprestidae; Scarab@Scarabaeidae; Longhorn beetle@Cerambycidae; Click beetle@Elateridae;
      Thrips@Thrips; Springtail@Springtail; Bagworm@Psychidae; Katydid|bush cricket@Tettigoniidae; Mole cricket@Mole cricket; Spittlebug|froghopper@Cercopidae; Treehopper@Treehopper;
      Lantern fly|lanternfly@Fulgoridae; Silkworm@Bombyx mori; Cabbage white|cabbage butterfly@Pieris rapae; Giant weta|weta@Weta; Dobsonfly@Dobsonfly; Scorpionfly@Scorpionfly; Snakefly@Snakefly`,
    legendary: ['Dobsonfly', 'Snakefly'],
    facts: {
      Dobsonfly: 'Males of some species have jaws so large they cannot bite and are used only for display.',
      Snakefly: 'Named for its long, snake-like neck; adults and larvae hunt aphids and other small insects.',
    },
  },
  {
    id: 'nat-butterfly',
    category: 'nature',
    prompt: 'Name a species of butterfly',
    qualifier: 'Butterflies by common name (not moths); a group like "swallowtail" counts',
    strip: ['butterfly'],
    answers: `
      Monarch|monarch butterfly@Monarch butterfly; Painted lady@Vanessa cardui; Red admiral@Vanessa atalanta; Peacock butterfly|European peacock@Aglais io; Small tortoiseshell@Aglais urticae;
      Brimstone|common brimstone@Gonepteryx rhamni; Cabbage white|large white|small white@Pieris rapae; Orange tip@Anthocharis cardamines; Comma@Polygonia c-album; Swallowtail@Papilio machaon;
      Common Mormon@Papilio polytes; Common rose@Pachliopta aristolochiae; Crimson rose@Pachliopta hector; Southern birdwing|Southern Birdwing@Troides minos; Common birdwing@Troides helena;
      Blue Mormon@Papilio polymnestor; Common bluebottle@Graphium sarpedon; Tailed jay@Graphium agamemnon; Lime butterfly|lemon butterfly@Papilio demoleus; Common jay@Graphium doson;
      Plain tiger@Danaus chrysippus; Common crow|Indian crow@Euploea core; Blue tiger@Tirumala limniace; Dark blue tiger@Tirumala septentrionis; Striped tiger@Danaus genutia;
      Common castor@Ariadne merione; Common baron@Euthalia aconthea; Common sailor@Neptis hylas; Danaid eggfly|Great eggfly@Hypolimnas bolina; Blue pansy@Junonia orithya;
      Lemon pansy@Junonia lemonias; Peacock pansy@Junonia almana; Grey pansy@Junonia atlites; Chocolate pansy@Junonia iphita; Common leopard@Phalanta phalantha; Common evening brown@Melanitis leda;
      Common bush brown@Mycalesis perseus; Common emigrant@Catopsilia pomona; Mottled emigrant@Catopsilia pyranthe; Common grass yellow@Eurema hecabe;
      Three-spot grass yellow@Eurema blanda; Common jezebel@Delias eucharis; Painted jezebel@Delias hyparete; Psyche@Leptosia nina; Common gull@Cepora nerissa; Plains cupid@Chilades pandava;
      Pea blue|Lang's short-tailed blue@Lampides boeticus; Tailless line blue@Prosotas dubiosa; Common pierrot@Castalius rosimon; Red pierrot@Talicada nyseus; Common cerulean@Jamides celeno;
      Gram blue@Euchrysops cnejus; Indian sunbeam@Curetis thetis; Common banded awl@Hasora chromus; Indian skipper@Spialia galba; Grass demon@Udaspes folus; Common Indian skipper@Parnara guttatus;
      Blue morpho|morpho@Morpho menelaus; Owl butterfly@Caligo; Glasswing|glasswing butterfly@Greta oto; Heliconius|longwing|zebra longwing@Heliconius; Queen Alexandra's birdwing@Ornithoptera alexandrae;
      Apollo@Parnassius apollo; Purple emperor@Apatura iris; Large blue@Phengaris arion; Holly blue@Celastrina argiolus; Camberwell beauty|mourning cloak@Nymphalis antiopa; Scarce swallowtail@Iphiclides podalirius;
      Kaiser-i-Hind|Kaiser-I-Hind@Teinopalpus imperialis; Bhutan glory@Bhutan glory; Golden birdwing@Troides aeacus; Krishna peacock@Papilio krishna; Paris peacock@Papilio paris; Nawab@Polyura athamas`,
    legendary: ['Kaiser-i-Hind', 'Bhutan glory'],
    facts: {
      'Kaiser-i-Hind': 'A rare swallowtail of the Eastern Himalayas, named by the British for the Empress of India.',
      'Bhutan glory': 'A rare Himalayan swallowtail found in Bhutan and Arunachal Pradesh, first described in 1873.',
    },
  },
  {
    id: 'nat-arachnid',
    category: 'nature',
    prompt: 'Name a spider, scorpion or other arachnid',
    qualifier: 'Spider species or groups, scorpions, ticks, mites and similar eight-legged animals; common names',
    strip: ['spider'],
    answers: `
      Black widow|black widow spider@Latrodectus; Redback spider|redback@Redback spider; Brown recluse|recluse spider|violin spider@Brown recluse spider; Tarantula@Tarantula; Goliath birdeater|Goliath bird-eating spider|birdeater@Theraphosa blondi;
      Wolf spider@Wolf spider; Jumping spider@Jumping spider; Orb-weaver|orb weaver|garden spider@Orb-weaver spider; Funnel-web spider|funnel web|Sydney funnel-web@Australian funnel-web spider; Huntsman spider|huntsman@Huntsman spider;
      Giant huntsman spider@Heteropoda maxima; Crab spider@Crab spider; Trapdoor spider@Trapdoor spider; Cellar spider|daddy longlegs|daddy long-legs|pholcid@Pholcidae; House spider|common house spider@Parasteatoda tepidariorum;
      Zebra spider@Salticus scenicus; Peacock spider@Maratus; Bolas spider@Bolas spider; Spitting spider@Scytodes; Water spider|diving bell spider@Argyroneta aquatica; Net-casting spider|ogre-faced spider@Deinopis;
      Golden silk orb-weaver|golden orb-weaver|banana spider@Nephila; Hobo spider@Eratigena agrestis; Sac spider@Cheiracanthium; Lynx spider@Lynx spider; Fishing spider@Dolomedes; Nursery web spider@Pisaura mirabilis;
      Camel spider|sun spider|solifugae@Solifugae; Whip spider|tailless whip scorpion@Amblypygi; Whip scorpion|vinegaroon@Thelyphonida; Harvestman|opiliones@Harvestman; Scorpion@Scorpion;
      Emperor scorpion@Emperor scorpion; Indian red scorpion|red scorpion@Hottentotta tamulus; Deathstalker|yellow scorpion@Leiurus quinquestriatus; Giant forest scorpion@Heterometrus swammerdami; Bark scorpion@Centruroides sculpturatus;
      Pseudoscorpion|book scorpion@Pseudoscorpion; Tick@Tick; Mite@Mite; Dust mite|house dust mite@House dust mite; Spider mite@Tetranychidae; Chigger|harvest mite@Trombiculidae; Itch mite|scabies mite@Sarcoptes scabiei;
      Varroa mite|varroa@Varroa destructor; Brazilian wandering spider|banana spider (Brazil)@Phoneutria; Mexican redknee tarantula@Brachypelma hamorii; Indian ornamental tree spider|ornamental tree spider@Poecilotheria regalis;
      Peacock tarantula@Poecilotheria; Spiny orb-weaver|crab-like spiny orb-weaver@Gasteracantha; Bird-dropping spider@Celaenia excavata; Ant-mimicking spider|antmimic spider@Myrmarachne; Mouse spider@Missulena;
      Cave spider@Meta menardi; Woodlouse spider@Dysdera crocata; Cobweb spider|comb-footed spider@Theridiidae; Brazilian salmon pink birdeater@Lasiodora parahybana; Giant house spider@Eratigena atrica;
      Spiny-backed spider|jewel spider@Austracantha minax; False widow|noble false widow@Steatoda nobilis`,
    legendary: ['Bolas spider', 'Camel spider'],
    facts: {
      'Bolas spider': 'Swings a sticky blob of silk on a thread and releases a scent that lures moths to it.',
      'Camel spider': 'Neither camel nor true spider; it can run at about 16 km/h and has no venom.',
    },
  },
  {
    id: 'nat-lizard',
    category: 'nature',
    prompt: 'Name a lizard',
    qualifier: 'Lizards and lizard groups by common name (snakes, crocodiles and turtles do not count)',
    strip: ['lizard'],
    answers: `
      Komodo dragon|Komodo@Komodo dragon; Chameleon@Chameleon; Veiled chameleon@Veiled chameleon; Panther chameleon@Panther chameleon; Jackson's chameleon@Jackson's chameleon; Gecko@Gecko;
      Tokay gecko|tokay@Tokay gecko; Leopard gecko@Leopard gecko; Crested gecko@Crested gecko; House gecko|common house gecko|chipkali|lizard (house)@Hemidactylus; Green iguana|iguana@Green iguana;
      Marine iguana@Marine iguana; Galápagos land iguana|land iguana@Galápagos land iguana; Rhinoceros iguana@Rhinoceros iguana; Bearded dragon@Bearded dragon; Frilled lizard|frill-necked lizard@Frill-necked lizard;
      Thorny devil|thorny dragon@Thorny devil; Blue-tongued skink|bluetongue@Blue-tongued skink; Skink@Skink; Monitor lizard|goanna|monitor|varan@Monitor lizard; Bengal monitor|common Indian monitor|goh@Bengal monitor;
      Water monitor@Water monitor; Nile monitor@Nile monitor; Gila monster@Gila monster; Mexican beaded lizard@Mexican beaded lizard; Anole|green anole@Anolis; Basilisk|Jesus Christ lizard@Basilisk;
      Flying dragon|draco|gliding lizard@Draco (genus); Calotes|garden lizard|oriental garden lizard|bloodsucker@Calotes versicolor; Fan-throated lizard|Sitana@Sitana; Spiny-tailed lizard|uromastyx|dabb lizard@Uromastyx;
      Horned lizard|horned toad@Phrynosoma; Slow worm|slowworm@Slowworm; Glass lizard@Glass lizard; Alligator lizard@Alligator lizard; Collared lizard@Crotaphytus; Chuckwalla@Chuckwalla; Agama|rainbow agama@Agama (genus);
      Sand lizard@Sand lizard; Common wall lizard|wall lizard@Common wall lizard; Viviparous lizard|common lizard@Viviparous lizard; European green lizard|green lizard@European green lizard; Ocellated lizard@Timon lepidus;
      Tegu|Argentine black and white tegu@Tegu; Whiptail@Aspidoscelis; Cnemidophorus@Cnemidophorus; Caiman lizard@Caiman lizard; Plated lizard|girdled lizard@Cordylidae; Armadillo girdled lizard@Armadillo girdled lizard;
      Shingleback|shingleback skink|sleepy lizard@Shingleback skink; Tuatara@Tuatara; Legless lizard@Legless lizard; Sungazer|giant girdled lizard@Sungazer; Day gecko|giant day gecko@Phelsuma; Leaf-tailed gecko@Uroplatus;
      Flying gecko|parachute gecko@Ptychozoon`,
    legendary: ['Thorny devil', 'Sungazer'],
    facts: {
      'Thorny devil': 'An Australian desert lizard that drinks by soaking up dew through channels between its spines.',
      Sungazer: 'A South African armoured lizard that basks upright, facing the sun, at the mouth of its burrow.',
    },
  },
  {
    id: 'nat-amphibian',
    category: 'nature',
    prompt: 'Name a frog, toad or other amphibian',
    qualifier: 'Frogs, toads, newts, salamanders and caecilians, by common name or group',
    strip: ['frog', 'toad'],
    answers: `
      Common frog|European common frog|grass frog@Common frog; Bullfrog|American bullfrog@American bullfrog; Indian bullfrog|Hoplobatrachus tigerinus@Indian bullfrog; Tree frog|treefrog@Hylidae;
      Red-eyed tree frog|red-eyed treefrog@Agalychnis callidryas; Poison dart frog|poison arrow frog|dart frog@Poison dart frog; Golden poison frog|golden poison dart frog@Golden poison frog; Blue poison dart frog@Dendrobates tinctorius;
      Glass frog@Glass frog; Goliath frog@Goliath frog; Cane toad|giant toad|marine toad@Cane toad; Common toad|European toad@Common toad; Natterjack toad|natterjack@Natterjack toad;
      Common Indian toad|Indian toad|Asian common toad|Duttaphrynus melanostictus@Asian common toad; Fire-bellied toad@Fire-bellied toad; Surinam toad@Surinam toad; Spadefoot toad|spadefoot@Scaphiopodidae;
      Midwife toad@Midwife toad; Horned frog|Pacman frog|Pac-Man frog@Ceratophrys; African clawed frog|clawed frog@African clawed frog; Wood frog@Wood frog; Leopard frog@Leopard frog;
      Pickerel frog@Pickerel frog; Green frog@Lithobates clamitans; Spring peeper@Spring peeper; Barking tree frog|barking treefrog@Hyla gratiosa; Pacific tree frog@Pacific tree frog; Gray tree frog|grey tree frog@Cope's gray treefrog;
      Pool frog@Pool frog; Edible frog@Edible frog; Marsh frog@Marsh frog; Water-holding frog|water holding frog@Cyclorana platycephala; Corroboree frog@Pseudophryne corroboree; Darwin's frog@Darwin's frog;
      Gastric-brooding frog@Gastric-brooding frog; Flying frog|Wallace's flying frog|Rhacophorus@Rhacophorus nigropalmatus; Malabar gliding frog|Malabar flying frog@Malabar gliding frog;
      Purple frog|Mahabali frog|pignose frog@Purple frog; Bicolored frog@Bicolored frog; Indian dancing frog|Micrixalus@Micrixalus; Fungoid frog@Hylarana; Night frog@Nyctibatrachus; Bush frog@Raorchestes;
      Burrowing frog|Indian burrowing frog@Sphaerotheca breviceps; Skipper frog|Indian skipper frog@Euphlyctis cyanophlyctis; Axolotl@Axolotl; Hellbender@Hellbender; Mudpuppy|waterdog@Necturus;
      Fire salamander@Fire salamander; Tiger salamander@Tiger salamander; Giant salamander|Chinese giant salamander@Chinese giant salamander; Japanese giant salamander@Japanese giant salamander; Olm@Olm;
      Great crested newt|crested newt@Great crested newt; Smooth newt@Smooth newt; Palmate newt@Palmate newt; Eastern newt|red-spotted newt@Eastern newt; Rough-skinned newt@Rough-skinned newt;
      Salamander@Salamander; Newt@Newt; Siren@Siren (genus); Amphiuma|congo eel@Amphiuma; Caecilian|apoda@Caecilian; Ceylon caecilian@Ichthyophis; Hairy frog|horror frog@Trichobatrachus robustus; Tomato frog@Tomato frog`,
    legendary: ['Purple frog', 'Olm'],
    facts: {
      'Purple frog': 'A burrowing frog of the Western Ghats that spends almost its whole life underground, emerging for a few days of monsoon breeding.',
      Olm: 'A blind, pale European cave salamander that can live for over 100 years and go years without food.',
    },
  },
  {
    id: 'nat-bird-of-prey',
    category: 'nature',
    prompt: 'Name a bird of prey',
    qualifier: 'Eagles, hawks, falcons, vultures, kites, owls and other raptors; the group name counts',
    answers: `
      Eagle@Eagle; Golden eagle@Golden eagle; Bald eagle@Bald eagle; White-tailed eagle|sea eagle@White-tailed eagle; Steller's sea eagle@Steller's sea eagle; Harpy eagle@Harpy eagle; Philippine eagle|monkey-eating eagle@Philippine eagle;
      Crowned eagle@Crowned eagle; Martial eagle@Martial eagle; Imperial eagle@Eastern imperial eagle; Bonelli's eagle@Bonelli's eagle; Booted eagle@Booted eagle; Short-toed snake eagle|short-toed eagle@Short-toed snake eagle;
      Crested serpent eagle@Crested serpent eagle; Changeable hawk-eagle|crested hawk-eagle@Changeable hawk-eagle; Tawny eagle@Tawny eagle; Steppe eagle@Steppe eagle; Greater spotted eagle@Greater spotted eagle;
      Hawk@Hawk; Red-tailed hawk@Red-tailed hawk; Cooper's hawk@Cooper's hawk; Sparrowhawk|Eurasian sparrowhawk@Eurasian sparrowhawk; Goshawk|northern goshawk@Northern goshawk; Shikra@Shikra;
      Buzzard|common buzzard@Common buzzard; Honey buzzard|oriental honey buzzard|crested honey buzzard@European honey buzzard; Rough-legged buzzard@Rough-legged buzzard; White-eyed buzzard@White-eyed buzzard;
      Harrier|marsh harrier|hen harrier@Hen harrier; Pallid harrier@Pallid harrier; Falcon@Falcon; Peregrine falcon|peregrine@Peregrine falcon; Gyrfalcon@Gyrfalcon; Saker falcon|saker@Saker falcon;
      Merlin@Merlin (bird); Kestrel|common kestrel@Common kestrel; Lesser kestrel@Lesser kestrel; Hobby|Eurasian hobby@Eurasian hobby; Laggar falcon@Laggar falcon; Red-necked falcon|turumti@Red-necked falcon;
      Kite|red kite@Red kite; Black kite@Black kite; Brahminy kite|Brahminy@Brahminy kite; Black-winged kite@Black-winged kite; Snail kite@Snail kite; Swallow-tailed kite@Swallow-tailed kite;
      Osprey|fish hawk@Osprey; Secretarybird|secretary bird@Secretarybird; Caracara|crested caracara@Caracara (genus); Vulture@Vulture; Griffon vulture@Griffon vulture; Himalayan vulture|Himalayan griffon@Himalayan vulture;
      Egyptian vulture|white scavenger vulture@Egyptian vulture; Cinereous vulture|Eurasian black vulture@Cinereous vulture; Lammergeier|bearded vulture@Bearded vulture; White-rumped vulture@White-rumped vulture;
      King vulture@King vulture; Andean condor|condor@Andean condor; California condor@California condor; Turkey vulture@Turkey vulture; Black vulture@Black vulture; Red-headed vulture|Indian black vulture@Red-headed vulture;
      Owl@Owl; Great horned owl@Great horned owl; Barn owl@Barn owl; Snowy owl@Snowy owl; Harris's hawk@Harris's hawk; Bateleur@Bateleur; Palm-nut vulture@Palm-nut vulture; Pallas's fish eagle|Pallas's sea eagle@Pallas's fish eagle`,
    legendary: ['Bateleur', 'Laggar falcon'],
    facts: {
      Bateleur: 'An African eagle that rocks from side to side in flight; its name is French for tightrope walker.',
      'Laggar falcon': 'A large Indian falcon found across much of the subcontinent, hunting birds and rodents in open country.',
    },
  },
  {
    id: 'nat-parrot',
    category: 'nature',
    prompt: 'Name a parrot, parakeet or cockatoo',
    qualifier: 'Any member of the parrot order, by common name or group',
    strip: ['parrot'],
    answers: `
      Macaw@Macaw; Scarlet macaw@Scarlet macaw; Blue-and-yellow macaw|blue and gold macaw@Blue-and-yellow macaw; Hyacinth macaw@Hyacinth macaw; Spix's macaw@Spix's macaw; Green-winged macaw|red-and-green macaw@Green-winged macaw;
      Cockatoo@Cockatoo; Sulphur-crested cockatoo@Sulphur-crested cockatoo; Galah|rose-breasted cockatoo@Galah; Cockatiel|cockateel@Cockatiel; Palm cockatoo@Palm cockatoo; Gang-gang cockatoo@Gang-gang cockatoo;
      Budgerigar|budgie|parakeet (budgie)@Budgerigar; Lovebird@Lovebird; Rose-ringed parakeet|ring-necked parakeet|Indian ringneck|ringneck|parakeet@Rose-ringed parakeet; Alexandrine parakeet|Alexandrine@Alexandrine parakeet;
      Plum-headed parakeet|blossom-headed parakeet@Plum-headed parakeet; Slaty-headed parakeet@Slaty-headed parakeet; Red-breasted parakeet@Red-breasted parakeet; Malabar parakeet|blue-winged parakeet@Malabar parakeet;
      Layard's parakeet@Layard's parakeet; Derbyan parakeet@Derbyan parakeet; Monk parakeet|Quaker parrot|quaker@Monk parakeet; Carolina parakeet@Carolina parakeet; Sun conure|sun parakeet@Sun parakeet;
      Green-cheeked conure@Green-cheeked parakeet; Nanday parakeet|nanday conure@Nanday parakeet; African grey parrot|African grey|grey parrot|Congo grey@Grey parrot; Timneh parrot@Timneh parrot;
      Amazon parrot|amazon@Amazon parrot; Yellow-headed amazon|yellow-headed parrot@Yellow-headed amazon; Blue-fronted amazon@Blue-fronted amazon; Eclectus parrot|eclectus@Eclectus parrot;
      Kākā|Kaka@Kākā; Kea@Kea; Kakapo|owl parrot@Kakapo; Rainbow lorikeet@Rainbow lorikeet; Lorikeet@Lorikeet; Hanging parrot|Vernal hanging parrot|Ceylon hanging parrot|Loriculus@Loriculus;
      Senegal parrot@Senegal parrot; Meyer's parrot@Meyer's parrot; Pionus|blue-headed parrot@Pionus; Caique|black-headed caique@Caique; Mulga parrot@Mulga parrot; Princess parrot@Princess parrot;
      Rosella|crimson rosella|eastern rosella@Rosella; Ringneck parrot|Australian ringneck@Australian ringneck; Fischer's lovebird@Fischer's lovebird; Fig parrot@Fig parrot; Pesquet's parrot|dracula parrot@Pesquet's parrot;
      Great green macaw|Buffon's macaw@Great green macaw; Military macaw@Military macaw; Golden conure|golden parakeet@Golden parakeet; Night parrot@Night parrot; Swift parrot@Swift parrot; Ground parrot@Ground parrot; Rock parrot@Rock parrot;
      Cuban amazon|Cuban parrot@Cuban amazon; Thick-billed parrot@Thick-billed parrot; Imperial amazon|Sisserou@Imperial amazon; Blue-eyed cockatoo@Blue-eyed cockatoo; Major Mitchell's cockatoo@Major Mitchell's cockatoo`,
    tryhard: ['Spix\'s macaw'],
    legendary: ['Kakapo', 'Pesquet\'s parrot'],
    facts: {
      Kakapo: 'A flightless, nocturnal New Zealand parrot and the heaviest parrot in the world, with only around 250 left.',
      "Pesquet's parrot": 'A vulture-headed parrot of New Guinea with a bare black face, nicknamed the dracula parrot.',
    },
  },
  {
    id: 'nat-owl',
    category: 'nature',
    prompt: 'Name a species of owl',
    qualifier: 'Owl species by common name; "owl" alone is not accepted, but groups like "screech owl" are',
    strip: ['owl'],
    answers: `
      Barn owl|common barn owl@Barn owl; Snowy owl@Snowy owl; Great horned owl@Great horned owl; Eurasian eagle-owl|eagle owl|Eurasian eagle owl@Eurasian eagle-owl; Tawny owl|brown owl@Tawny owl;
      Barred owl|hoot owl@Barred owl; Great grey owl|great gray owl@Great grey owl; Long-eared owl@Long-eared owl; Short-eared owl@Short-eared owl; Little owl@Little owl; Burrowing owl@Burrowing owl;
      Eastern screech owl|screech owl@Eastern screech owl; Western screech owl@Western screech owl; Elf owl@Elf owl; Northern saw-whet owl|saw-whet owl@Northern saw-whet owl; Boreal owl|Tengmalm's owl@Boreal owl;
      Northern pygmy owl@Northern pygmy owl; Eurasian pygmy owl@Eurasian pygmy owl; Ural owl@Ural owl; Spotted owl|northern spotted owl@Spotted owl; Spectacled owl@Spectacled owl;
      Spotted owlet|owlet@Spotted owlet; Jungle owlet@Jungle owlet; Barred owlet@Barred owlet; Forest owlet@Forest owlet; Brown fish owl@Brown fish owl; Blakiston's fish owl@Blakiston's fish owl;
      Dusky eagle-owl|dusky eagle owl@Dusky eagle-owl; Rock eagle-owl|Indian eagle-owl|Bengal eagle-owl@Rock eagle-owl; Indian scops owl@Indian scops owl; Oriental scops owl@Oriental scops owl;
      Collared scops owl@Collared scops owl; Eurasian scops owl|scops owl@Eurasian scops owl; Brown wood owl@Brown wood owl; Mottled wood owl@Mottled wood owl; Brown hawk-owl|brown boobook@Brown boobook;
      Oriental bay owl|bay owl@Oriental bay owl; Grass owl|eastern grass owl@Eastern grass owl; Tyto|masked owl@Tyto; Sooty owl@Sooty owl; Powerful owl@Powerful owl; Boobook|southern boobook|morepork@Southern boobook;
      Madagascar red owl@Madagascar red owl; Pel's fishing owl@Pel's fishing owl; Verreaux's eagle-owl|milky eagle-owl@Verreaux's eagle-owl; Cape eagle-owl@Cape eagle-owl; Spotted eagle-owl@Spotted eagle-owl;
      African wood owl@African wood owl; White-faced scops owl@White-faced scops owl; Pearl-spotted owlet@Pearl-spotted owlet; Stygian owl@Stygian owl; Rufous owl@Rufous owl;
      Hawk owl|northern hawk-owl@Northern hawk-owl; Flammulated owl@Flammulated owl; Whiskered screech owl@Whiskered screech owl; Ferruginous pygmy owl@Ferruginous pygmy owl; Hume's owl|Hume's tawny owl@Hume's owl; Marsh owl@Marsh owl;`,
    legendary: ['Blakiston\'s fish owl', 'Forest owlet'],
    facts: {
      "Blakiston's fish owl": 'The largest living owl, over a metre across the wings, which fishes in the rivers of eastern Russia and Japan.',
      'Forest owlet': 'Thought extinct for 113 years until it was seen again in Maharashtra in 1997.',
    },
  },
  {
    id: 'nat-duck',
    category: 'nature',
    prompt: 'Name a duck, goose or swan',
    qualifier: 'Waterfowl species by common name; the group names "duck", "goose" and "swan" are not accepted',
    answers: `
      Mallard|wild duck@Mallard; Pekin duck|Peking duck (bird)|white duck@American Pekin; Muscovy duck|Muscovy@Muscovy duck; Mandarin duck@Mandarin duck; Wood duck|Carolina duck@Wood duck; Pintail|northern pintail@Northern pintail;
      Teal|common teal|green-winged teal@Eurasian teal; Cotton pygmy goose|cotton teal|cotton pygmy-goose@Cotton pygmy goose; Garganey@Garganey; Shoveler|northern shoveler@Northern shoveler; Gadwall@Gadwall;
      Wigeon|Eurasian wigeon|American wigeon@Eurasian wigeon; Eider|common eider@Common eider; King eider@King eider; Goldeneye|common goldeneye@Common goldeneye; Bufflehead@Bufflehead; Scoter|common scoter@Common scoter;
      Long-tailed duck|oldsquaw@Long-tailed duck; Harlequin duck@Harlequin duck; Goosander|common merganser@Common merganser; Red-breasted merganser@Red-breasted merganser; Smew@Smew; Tufted duck@Tufted duck;
      Pochard|common pochard@Common pochard; Ferruginous duck|white-eyed pochard@Ferruginous duck; Canvasback@Canvasback; Redhead@Redhead (duck); Ruddy duck@Ruddy duck; Spot-billed duck|Indian spot-billed duck@Indian spot-billed duck;
      Lesser whistling duck|lesser whistling teal|Indian whistling duck@Lesser whistling duck; Fulvous whistling duck@Fulvous whistling duck; Comb duck|knob-billed duck|nakta@Knob-billed duck; White-winged duck@White-winged duck;
      Ruddy shelduck|Brahminy duck|chakwa|chakravaka@Ruddy shelduck; Common shelduck|shelduck@Common shelduck; Bar-headed goose@Bar-headed goose; Greylag goose|greylag@Greylag goose; Canada goose@Canada goose;
      Barnacle goose@Barnacle goose; Brent goose|brant@Brant (goose); Snow goose@Snow goose; Emperor goose@Emperor goose; Egyptian goose@Egyptian goose; Hawaiian goose|nene@Nēnē; Swan goose@Swan goose;
      Greater white-fronted goose|white-fronted goose@Greater white-fronted goose; Bean goose@Bean goose; Pink-footed goose@Pink-footed goose; Red-breasted goose@Red-breasted goose; Lesser white-fronted goose@Lesser white-fronted goose;
      Mute swan@Mute swan; Whooper swan@Whooper swan; Trumpeter swan@Trumpeter swan; Tundra swan|Bewick's swan@Tundra swan; Black swan@Black swan; Black-necked swan@Black-necked swan; Coscoroba swan@Coscoroba swan;
      Steamer duck|flightless steamer duck@Steamer duck; Torrent duck@Torrent duck; Blue duck|whio@Blue duck; Pink-headed duck@Pink-headed duck; Marbled teal|marbled duck@Marbled duck; Falcated duck|falcated teal@Falcated duck; Hooded merganser@Hooded merganser; Domestic goose|farm goose@Domestic goose; Cackling goose@Cackling goose; Spur-winged goose@Spur-winged goose; Magpie goose@Magpie goose`,
    legendary: ['Pink-headed duck', 'White-winged duck'],
    facts: {
      'Pink-headed duck': 'A strikingly pink-headed duck of India and Myanmar, last confirmed in the wild in the 1940s and now thought extinct.',
      'White-winged duck': 'A shy forest duck of Assam and Arunachal Pradesh, one of the rarest ducks in the world.',
    },
  },
  {
    id: 'nat-marsupial',
    category: 'nature',
    prompt: 'Name a marsupial',
    qualifier: 'Pouched mammals from Australasia or the Americas, by common name or group',
    answers: `
      Kangaroo@Kangaroo; Red kangaroo@Red kangaroo; Eastern grey kangaroo@Eastern grey kangaroo; Western grey kangaroo@Western grey kangaroo; Antilopine kangaroo|antilopine wallaroo@Antilopine kangaroo;
      Wallaroo|common wallaroo|euro@Common wallaroo; Wallaby@Wallaby; Red-necked wallaby|Bennett's wallaby@Red-necked wallaby; Swamp wallaby@Swamp wallaby; Rock-wallaby|rock wallaby@Rock-wallaby;
      Quokka@Quokka; Tree-kangaroo|tree kangaroo@Tree-kangaroo; Pademelon@Pademelon; Bettong@Bettong; Potoroo@Potoroo; Rat-kangaroo|musky rat-kangaroo@Musky rat-kangaroo; Koala@Koala;
      Wombat@Wombat; Common wombat|bare-nosed wombat@Common wombat; Southern hairy-nosed wombat@Southern hairy-nosed wombat; Tasmanian devil|devil@Tasmanian devil; Quoll|spotted-tailed quoll|tiger quoll@Spotted-tailed quoll;
      Eastern quoll@Eastern quoll; Thylacine|Tasmanian tiger@Thylacine; Numbat@Numbat; Bilby|greater bilby@Greater bilby; Bandicoot@Bandicoot; Southern brown bandicoot@Southern brown bandicoot;
      Sugar glider@Sugar glider; Greater glider@Greater glider; Squirrel glider@Squirrel glider; Feathertail glider@Feathertail glider; Common brushtail possum|brushtail possum|possum@Common brushtail possum;
      Common ringtail possum|ringtail possum@Common ringtail possum; Leadbeater's possum@Leadbeater's possum; Mountain pygmy possum@Mountain pygmy possum; Honey possum|noolbenger@Honey possum; Cuscus@Cuscus;
      Virginia opossum|opossum|American possum@Virginia opossum; Water opossum|yapok@Water opossum; Monito del monte@Monito del monte; Antechinus@Antechinus; Dunnart@Dunnart; Planigale@Planigale;
      Kowari@Kowari; Mulgara@Mulgara; Kultarr@Kultarr; Marsupial mole|southern marsupial mole@Marsupial mole; Long-nosed potoroo@Long-nosed potoroo; Banded hare-wallaby|banded hare wallaby@Banded hare-wallaby;
      Bridled nail-tail wallaby@Bridled nail-tail wallaby; Parma wallaby@Parma wallaby; Yellow-footed rock-wallaby@Yellow-footed rock-wallaby; Goodfellow's tree-kangaroo@Goodfellow's tree-kangaroo;
      Lumholtz's tree-kangaroo@Lumholtz's tree-kangaroo; Dingiso@Dingiso; Thylacoleo|marsupial lion@Thylacoleo; Diprotodon@Diprotodon; Short-tailed opossum@Short-tailed opossum; Shrew opossum@Shrew opossum`,
    legendary: ['Monito del monte', 'Numbat'],
    facts: {
      'Monito del monte': 'A tiny marsupial of Chilean forests more closely related to Australian marsupials than to American opossums.',
      Numbat: 'A termite-eating marsupial of Western Australia that can eat up to 20,000 termites a day.',
    },
  },
  {
    id: 'nat-savanna',
    category: 'nature',
    prompt: 'Name an animal of the African savanna',
    qualifier: 'Wild animals living on African grasslands and bushveld, by common name',
    answers: `
      Lion|African lion@Lion; Leopard|African leopard@Leopard; Cheetah|African cheetah@Cheetah; African elephant|African bush elephant|elephant@African bush elephant; White rhinoceros|white rhino|square-lipped rhino@White rhinoceros;
      Black rhinoceros|black rhino|hook-lipped rhino@Black rhinoceros; Hippopotamus|hippo@Hippopotamus; Giraffe@Giraffe; Plains zebra|zebra|common zebra|Burchell's zebra@Plains zebra; Grévy's zebra|Grevy's zebra@Grévy's zebra;
      African buffalo|Cape buffalo@African buffalo; Wildebeest|gnu|blue wildebeest@Blue wildebeest; Thomson's gazelle|Tommy@Thomson's gazelle; Grant's gazelle@Grant's gazelle; Impala@Impala; Springbok@Springbok;
      Topi|tsessebe|sassaby@Topi; Hartebeest|Coke's hartebeest|kongoni@Hartebeest; Eland|common eland@Common eland; Greater kudu|kudu@Greater kudu; Waterbuck@Waterbuck; Oryx|gemsbok@Gemsbok;
      Sable antelope@Sable antelope; Roan antelope@Roan antelope; Dik-dik@Dik-dik; Steenbok@Steenbok; Warthog@Common warthog; Spotted hyena|hyena@Spotted hyena; Brown hyena@Brown hyena; Striped hyena (Africa)@Striped hyena;
      African wild dog|painted dog|painted wolf|Cape hunting dog@African wild dog; Black-backed jackal|silver-backed jackal@Black-backed jackal; Side-striped jackal@Side-striped jackal; Bat-eared fox@Bat-eared fox;
      Serval@Serval; Caracal@Caracal; African wildcat@African wildcat; Honey badger|ratel@Honey badger; Meerkat|suricate@Meerkat; Banded mongoose@Banded mongoose; Dwarf mongoose@Dwarf mongoose;
      Aardvark@Aardvark; Aardwolf@Aardwolf; Ground pangolin|pangolin|Temminck's pangolin@Ground pangolin; Cape hare|African hare@Cape hare; Springhare@Springhare; Crested porcupine|African porcupine@Crested porcupine;
      Olive baboon@Olive baboon; Vervet monkey@Vervet monkey; Patas monkey@Patas monkey; Ostrich@Ostrich; Secretary bird|secretarybird@Secretarybird; Kori bustard@Kori bustard; Ground hornbill|southern ground hornbill@Southern ground hornbill;
      Marabou stork@Marabou stork; Saddle-billed stork@Saddle-billed stork; Lilac-breasted roller@Lilac-breasted roller; Helmeted guineafowl|guinea fowl@Helmeted guineafowl; Nile crocodile@Nile crocodile;
      African rock python|rock python@African rock python; Black mamba@Black mamba; Puff adder@Puff adder; Egyptian cobra@Egyptian cobra; Leopard tortoise@Leopard tortoise; Nile monitor@Nile monitor; Bateleur@Bateleur; Tawny eagle@Tawny eagle;
      African fish eagle@African fish eagle; Lappet-faced vulture@Lappet-faced vulture; White-backed vulture@White-backed vulture; Oxpecker|red-billed oxpecker@Oxpecker; Dung beetle@Dung beetle`,
    legendary: ['Aardwolf', 'Springhare'],
    facts: {
      Aardwolf: 'A relative of hyenas that eats termites, licking up hundreds of thousands in a single night.',
      Springhare: 'A hopping rodent of southern Africa that looks like a tiny kangaroo with a long bushy tail.',
    },
  },
  {
    id: 'nat-marine-invertebrate',
    category: 'nature',
    prompt: 'Name a sea animal without a backbone',
    qualifier: 'Marine invertebrates: jellyfish, molluscs, crustaceans, corals, starfish and the like; groups count',
    answers: `
      Jellyfish|jelly|sea jelly@Jellyfish; Octopus@Octopus; Squid@Squid; Cuttlefish@Cuttlefish; Nautilus@Nautilus; Giant squid@Giant squid; Colossal squid@Colossal squid; Blue-ringed octopus@Blue-ringed octopus;
      Mimic octopus@Mimic octopus; Dumbo octopus@Dumbo octopus; Vampire squid@Vampire squid; Crab@Crab; Hermit crab@Hermit crab; King crab|red king crab@Red king crab; Spider crab|Japanese spider crab@Japanese spider crab;
      Fiddler crab@Fiddler crab; Horseshoe crab@Horseshoe crab; Coconut crab|robber crab@Coconut crab; Blue crab@Callinectes sapidus; Lobster@Lobster; Spiny lobster|rock lobster|crayfish (marine)@Spiny lobster;
      Shrimp@Shrimp; Prawn@Prawn; Krill@Krill; Mantis shrimp@Mantis shrimp; Pistol shrimp|snapping shrimp@Alpheidae; Barnacle@Barnacle; Starfish|sea star@Starfish; Brittle star@Brittle star;
      Sea urchin|urchin@Sea urchin; Sand dollar@Sand dollar; Sea cucumber@Sea cucumber; Sea lily|feather star@Crinoid; Coral@Coral; Sea anemone|anemone@Sea anemone; Sea fan|gorgonian@Gorgonian;
      Box jellyfish|sea wasp@Box jellyfish; Portuguese man o' war|man o' war|man of war@Portuguese man o' war; Moon jelly|moon jellyfish@Aurelia aurita; Lion's mane jellyfish@Lion's mane jellyfish; Immortal jellyfish@Turritopsis dohrnii;
      Comb jelly|ctenophore@Ctenophora; Sea sponge|sponge@Sea sponge; Barrel sponge@Xestospongia muta; Oyster@Oyster; Mussel@Mussel; Clam@Clam; Giant clam@Giant clam; Scallop@Scallop; Cockle@Cockle (bivalve); Conch@Conch;
      Limpet@Limpet; Abalone@Abalone; Cowrie|cowry@Cowrie; Cone snail@Conus; Sea slug|nudibranch@Nudibranch; Sea hare@Sea hare; Sea butterfly|pteropod@Pteropoda; Periwinkle@Common periwinkle;
      Whelk@Whelk; Sea snail@Sea snail; Chiton@Chiton; Tube worm|giant tube worm@Riftia pachyptila; Bristle worm|polychaete@Polychaete; Feather duster worm|fan worm@Sabellidae; Lugworm@Lugworm;
      Sea pen@Pennatulacea; Brain coral@Brain coral; Staghorn coral@Staghorn coral; Elkhorn coral@Elkhorn coral; Lobster krill|squat lobster@Squat lobster; Sea spider@Sea spider; Goose barnacle@Goose barnacle; Pen shell@Pinnidae; Blue dragon|sea swallow|blue sea dragon@Glaucus atlanticus`,
    legendary: ['Blue dragon', 'Immortal jellyfish'],
    facts: {
      'Blue dragon': 'A tiny sea slug that floats upside down and stores stinging cells it steals from jellyfish.',
      'Immortal jellyfish': 'Can revert to its juvenile form after maturing, which in theory lets it avoid dying of old age.',
    },
  },
  {
    id: 'nat-cattle-breed',
    category: 'nature',
    prompt: 'Name a breed of cattle',
    qualifier: 'Cattle breeds from anywhere in the world, by common name; Indian zebu breeds count',
    strip: ['cattle', 'cow'],
    answers: `
      Holstein Friesian|Holstein|Friesian|Holstein-Friesian@Holstein Friesian cattle; Jersey@Jersey cattle; Guernsey@Guernsey cattle; Ayrshire@Ayrshire cattle; Brown Swiss@Brown Swiss; Hereford@Hereford cattle;
      Aberdeen Angus|Angus|Black Angus@Aberdeen Angus; Highland|Highland cattle@Highland cattle; Charolais@Charolais cattle; Limousin@Limousin cattle; Simmental@Simmental cattle; Shorthorn@Shorthorn;
      Longhorn|Texas Longhorn@Texas Longhorn; Brahman|Brahman cattle@Brahman cattle; Belted Galloway|Galloway@Galloway cattle; Dexter@Dexter cattle; Wagyu@Wagyu; Kobe@Kobe beef; Piedmontese@Piedmontese cattle;
      Chianina@Chianina; Belgian Blue@Belgian Blue; Gir|Gir cattle|Gyr@Gir cattle; Sahiwal@Sahiwal cattle; Red Sindhi@Red Sindhi; Tharparkar@Tharparkar cattle; Kankrej@Kankrej cattle; Ongole@Ongole cattle;
      Hallikar@Hallikar; Amrit Mahal|Amritmahal@Amritmahal; Khillari@Khillari cattle; Kangayam@Kangayam cattle; Deoni@Deoni cattle; Rathi@Rathi cattle; Hariana@Hariana cattle; Punganur@Punganur cattle;
      Vechur@Vechur cattle; Malnad Gidda@Malnad Gidda; Krishna Valley@Krishna Valley cattle; Dangi@Dangi cattle; Bargur@Bargur cattle; Umblachery@Umblachery cattle; Pulikulam@Pulikulam cattle; Bhagnari@Bhagnari;
      Ankole-Watusi|Watusi@Ankole-Watusi; Zebu@Zebu; Santa Gertrudis@Santa Gertrudis cattle; Beefmaster@Beefmaster; Brangus@Brangus; Red Poll@Red Poll; Devon|Red Devon@Devon cattle; Sussex@Sussex cattle;
      Gloucester@Gloucester cattle; White Park@White Park cattle; Chillingham@Chillingham cattle; British White@British White; Welsh Black@Welsh Black cattle; Lincoln Red@Lincoln Red; Salers@Salers cattle;
      Blonde d'Aquitaine@Blonde d'Aquitaine; Normande@Normande cattle; Montbéliarde@Montbéliarde; Tarentaise@Tarentaise cattle; Pinzgauer@Pinzgauer cattle; Gelbvieh@Gelbvieh; Fleckvieh@Fleckvieh;
      Murray Grey@Murray Grey; Droughtmaster@Droughtmaster; Nguni@Nguni cattle; Boran@Boran cattle; Taurine|taurine cattle@Taurine cattle`,
    legendary: ['Vechur', 'Punganur'],
    facts: {
      Vechur: 'A Kerala cow only about 90 cm tall, listed as the smallest cattle breed in the world.',
      Punganur: 'A tiny humped cow from Andhra Pradesh, only about 70 to 90 cm tall, once nearly extinct.',
    },
  },
  {
    id: 'nat-baby-animal',
    category: 'nature',
    prompt: 'Name a word for a baby animal',
    qualifier: 'The word for a young animal (e.g. calf, joey); "baby" or "young" alone do not count',
    groups: {
      textbook: 'Puppy|pup; Kitten|kitty; Calf; Lamb; Foal; Piglet; Chick; Cub; Duckling; Fawn; Kid; Joey',
      honours: 'Cygnet; Gosling; Leveret; Tadpole|pollywog; Fry; Owlet; Eaglet; Squab; Poult; Hatchling; Colt; Filly; Elver; Larva|larvae',
      rare: 'Kit; Fingerling; Smolt; Parr; Alevin; Whelp; Cheeper; Nymph; Spiderling; Fledgling; Nestling; Squeaker; Pinkie; Kitling; Shoat; Heifer; Yearling; Weaner; Gilt',
      deep: 'Peachick; Hogget; Teg; Shearling; Pullet; Cockerel; Keet; Grilse; Spat; Hoglet',
      legendary: 'Cria; Eyas',
    },
    facts: {
      Cria: 'The word for a baby alpaca, llama, vicuña or guanaco.',
      Eyas: 'A young hawk or falcon taken from the nest for falconry.',
    },
  },
  {
    id: 'nat-collective-noun',
    category: 'nature',
    prompt: 'Name a collective noun for a group of animals',
    qualifier: 'A word for a group of animals (herd, pride, flock); the group word only, not the animal',
    groups: {
      textbook: 'Herd; Flock; Pack; Pride; School; Swarm; Pod; Colony; Litter; Brood; Troop',
      honours: 'Gaggle; Murder; Parliament; Murmuration; Shoal; Army; Bevy; Covey; Drove; Nest; Hive; Cast; Clutch; Flight; Skein; Fleet; Band; Gang; Streak; Ambush',
      rare: 'Exaltation; Unkindness; Conspiracy; Parade; Crash; Dazzle; Tower; Bloat; Business; Shrewdness; Mischief; Charm; Siege; Wake; Kettle; Convocation; Caravan; Cackle; Clowder; Kindle; Romp; Rafter; Sounder; Mob; Coalition; Leap; Lounge; Obstinacy; Zeal; Memory; Dray; Bask; Knot; Bale; Scourge; Cete; Skulk; Leash; Huddle; Waddle; Rookery; Raft; Paddling; Sord; Team; Flamboyance',
      deep: 'Ostentation; Descent; Sedge; Congregation; Bouquet; Cloud; Kaleidoscope; Rhumba; Quiver; Prickle; Tiding; Wisdom; Wedge; Watch; Stand; Muster; Shiver',
      legendary: 'Implausibility; Pandemonium',
    },
    facts: {
      Implausibility: 'A group of gnus is called an implausibility, which rather suits the animal.',
      Pandemonium: 'The collective noun for a group of parrots, which is easy to believe.',
    },
  },
  {
    id: 'nat-india-tree',
    category: 'nature',
    prompt: 'Name a tree found in India',
    qualifier: 'Native or common trees of India, by common name; fruit trees count',
    strip: ['tree'],
    answers: `
      Banyan|banyan tree|bargad|vad@Ficus benghalensis; Peepal|pipal|bodhi tree|sacred fig|ashwattha@Ficus religiosa; Neem|margosa|vepa|azadirachta@Azadirachta indica; Mango|mango tree|aam@Mango;
      Tamarind|imli|chinch@Tamarind; Teak|sagwan|saguan@Teak; Sal|shorea@Shorea robusta; Sandalwood|chandan@Sandalwood; Rosewood|Indian rosewood|sheesham|shisham@Dalbergia sissoo; Ashoka|Saraca asoca|ashok@Saraca asoca;
      Gulmohar|flamboyant|royal poinciana|Delonix regia@Delonix regia; Jacaranda@Jacaranda; Amaltas|golden shower|Indian laburnum|cassia fistula@Cassia fistula; Coconut palm|coconut tree|coconut@Coconut; Areca palm|betel nut palm|areca nut|supari@Areca catechu;
      Palmyra palm|toddy palm|tadgola|panai@Borassus flabellifer; Date palm|khajur@Date palm; Jackfruit|kathal|halasu|panasa@Jackfruit; Cashew|cashew tree|kaju@Cashew; Guava|amrud|peru@Guava;
      Banana|banana plant|kela@Banana; Papaya|papita@Papaya; Lemon|lemon tree|nimbu@Lemon; Pomegranate|anar@Pomegranate; Jamun|black plum|java plum|jambul@Syzygium cumini; Ber|Indian jujube|Indian plum|Ziziphus mauritiana@Ziziphus mauritiana;
      Wood apple|bael|bilva|bel@Aegle marmelos; Custard apple|sitaphal|sharifa@Annona squamosa; Sapota|chikoo|chiku@Sapodilla; Mahua|madhuca|Madhuca longifolia@Madhuca longifolia; Arjuna|arjun tree|Terminalia arjuna@Terminalia arjuna;
      Babul|kikar|Acacia nilotica|Indian gum arabic tree@Vachellia nilotica; Khejri|Prosopis cineraria|shami|ghaf@Prosopis cineraria; Eucalyptus|gum tree|nilgiri@Eucalyptus; Silk cotton tree|semal|red silk-cotton@Bombax ceiba;
      Kadamba|kadam|Neolamarckia cadamba@Neolamarckia cadamba; Pongamia|karanj|Indian beech|pongam@Pongamia; Tulsi|holy basil|Ocimum tenuiflorum@Holy basil; Rain tree|monkey pod|samanea@Samanea saman; Mahogany@Mahogany;
      Bamboo|bans|veduru@Bamboo; Deodar|Himalayan cedar@Cedrus deodara; Chir pine|Himalayan long-leaved pine|chir@Pinus roxburghii; Blue pine|Himalayan blue pine|kail@Pinus wallichiana; Himalayan oak|ban oak@Quercus leucotrichophora;
      Rhododendron|burans|Rhododendron arboreum@Rhododendron arboreum; Champa|temple tree|frangipani|plumeria@Plumeria; Magnolia champaca|golden champa|champak@Magnolia champaca; Indian almond|badam|tropical almond|Terminalia catappa@Terminalia catappa;
      Siris|Albizia lebbeck|shirish|woman's tongue tree@Albizia lebbeck; Mulberry|shahtoot|tut@Mulberry; Hog plum|amra|ambado@Spondias mombin; Singapore cherry|bakul|Mimusops elengi|spanish cherry@Mimusops elengi; Cannonball tree|nagalinga|nagalingam@Couroupita guianensis;
      Silver oak|Grevillea robusta@Grevillea robusta; Casuarina|she-oak|Australian pine@Casuarina; Mangrove|sundari|sundri|Heritiera fomes@Heritiera fomes; Rubber tree|rubber|Hevea brasiliensis@Hevea brasiliensis; Dragon blood tree@Dracaena cinnabari; Pterocarpus|Indian kino tree|bijasal|Malabar kino@Pterocarpus marsupium; Rudraksha|Elaeocarpus ganitrus@Elaeocarpus ganitrus`,
    legendary: ['Cannonball tree', 'Mahua'],
    facts: {
      'Cannonball tree': 'Its round, hard fruits hang from the trunk, and its flowers are used in temples because they resemble a hooded cobra over a lingam.',
      Mahua: 'A tree of central India whose flowers are eaten and fermented, and are central to the livelihoods of many tribal communities.',
    },
  },
  {
    id: 'nat-flower',
    category: 'nature',
    prompt: 'Name a type of flower',
    qualifier: 'Flowers or flowering plants by common name, wild or garden; "flower" alone does not count',
    strip: ['flower'],
    answers: `
      Rose@Rose; Lily@Lilium; Tulip@Tulip; Daisy@Bellis perennis; Sunflower@Common sunflower; Lotus|kamal|padma@Nelumbo nucifera; Jasmine|mogra|chameli|mallige@Jasmine; Marigold|genda|zendu@Tagetes; Hibiscus|gudhal|china rose|jaswand@Hibiscus;
      Orchid@Orchid; Daffodil@Narcissus (plant); Lavender@Lavandula; Carnation@Dianthus caryophyllus; Chrysanthemum|shevanti|sevanthi@Chrysanthemum; Dahlia@Dahlia; Poppy@Papaver; Pansy@Pansy;
      Violet@Viola (plant); Iris@Iris (plant); Peony@Peony; Petunia@Petunia; Geranium@Pelargonium; Snapdragon@Antirrhinum; Zinnia@Zinnia; Cosmos@Cosmos (plant); Aster@Aster (genus); Begonia@Begonia; Bluebell@Hyacinthoides non-scripta;
      Buttercup@Ranunculus; Dandelion@Taraxacum; Foxglove@Digitalis; Lilac@Syringa; Magnolia@Magnolia; Camellia@Camellia; Azalea@Azalea; Hydrangea@Hydrangea; Primrose@Primula vulgaris; Forget-me-not@Myosotis;
      Hyacinth@Hyacinth (plant); Crocus@Crocus; Snowdrop@Galanthus; Lily of the valley@Convallaria majalis; Gladiolus@Gladiolus; Freesia@Freesia; Gerbera|Barberton daisy@Gerbera; Anthurium@Anthurium; Bird of paradise|strelitzia@Strelitzia;
      Frangipani|plumeria|champa@Plumeria; Bougainvillea|paper flower@Bougainvillea; Oleander|kaner@Nerium; Crossandra|kanakambaram|aboli@Crossandra infundibuliformis; Tuberose|rajnigandha|nelasampige@Polianthes tuberosa;
      Night-blooming jasmine|parijat|harsingar|night jasmine@Nyctanthes arbor-tristis; Morning glory@Ipomoea; Balsam|touch-me-not|garden balsam@Impatiens balsamina; Lantana@Lantana; Kurinji|Neelakurinji@Strobilanthes kunthiana;
      Brahma Kamal|Saussurea obvallata@Saussurea obvallata; Blue poppy|Himalayan blue poppy@Meconopsis; Edelweiss@Edelweiss; Cherry blossom|sakura@Cherry blossom; Wisteria@Wisteria; Gardenia@Gardenia; Plumbago@Plumbago; Vinca|periwinkle|sadabahar@Catharanthus roseus;
      Water lily|waterlily@Nymphaeaceae; Hollyhock@Alcea; Sweet pea@Sweet pea; Delphinium@Delphinium; Lupin|lupine@Lupinus; Cornflower@Centaurea cyanus; Poinsettia@Poinsettia; Amaryllis@Hippeastrum; Corpse flower|titan arum@Amorphophallus titanum; Rafflesia@Rafflesia arnoldii`,
    tryhard: ['Corpse flower'],
    legendary: ['Kurinji', 'Brahma Kamal'],
    facts: {
      Kurinji: 'Blooms only once in 12 years, turning the hills of the Nilgiris and Munnar blue; it last bloomed in 2018.',
      'Brahma Kamal': 'The state flower of Uttarakhand, a Himalayan bloom that opens at night and is rarely seen.',
    },
  },
  {
    id: 'nat-houseplant',
    category: 'nature',
    prompt: 'Name a houseplant',
    qualifier: 'Plants commonly grown indoors or in pots, by common name',
    strip: ['plant'],
    answers: `
      Money plant|pothos|devil's ivy|golden pothos@Epipremnum aureum; Snake plant|mother-in-law's tongue|sansevieria@Dracaena trifasciata; Aloe vera|aloe|ghritkumari@Aloe vera; Spider plant@Chlorophytum comosum;
      Peace lily|spathiphyllum@Spathiphyllum; Rubber plant|rubber fig@Ficus elastica; Fiddle-leaf fig|fiddle leaf fig@Ficus lyrata; Weeping fig|ficus benjamina@Ficus benjamina; Monstera|Swiss cheese plant|split-leaf philodendron@Monstera deliciosa;
      Philodendron@Philodendron; Boston fern|sword fern@Nephrolepis exaltata; Maidenhair fern@Adiantum; Bird's nest fern@Asplenium nidus; Areca palm|butterfly palm|golden cane palm@Dypsis lutescens; Parlour palm|parlor palm@Chamaedorea elegans;
      Kentia palm@Howea forsteriana; ZZ plant|zanzibar gem|Zamioculcas@Zamioculcas; Jade plant|money tree|lucky plant@Crassula ovata; Pilea|Chinese money plant|pancake plant@Pilea peperomioides; Calathea|prayer plant@Calathea;
      Maranta|prayer plant (maranta)@Maranta leuconeura; Dracaena|dragon tree@Dracaena (plant); Lucky bamboo@Dracaena sanderiana; Chinese evergreen|aglaonema@Aglaonema; Dumb cane|dieffenbachia@Dieffenbachia;
      English ivy|ivy@Hedera helix; African violet@Streptocarpus sect. Saintpaulia; Christmas cactus|Thanksgiving cactus@Schlumbergera; Cast iron plant|aspidistra@Aspidistra; Croton|variegated croton@Codiaeum variegatum;
      Tradescantia|wandering jew|inch plant@Tradescantia; Coleus@Coleus; Polka dot plant|freckle face@Hypoestes phyllostachya; Bromeliad@Bromeliaceae; Anthurium|flamingo flower@Anthurium; Orchid (phalaenopsis)|moth orchid@Phalaenopsis;
      Air plant|tillandsia@Tillandsia; String of pearls@Curio rowleyanus; Hoya|wax plant|porcelain flower@Hoya (plant); Ponytail palm|elephant's foot@Beaucarnea recurvata; Schefflera|umbrella plant|umbrella tree@Schefflera;
      Yucca@Yucca; Cyclamen@Cyclamen; Nerve plant|fittonia@Fittonia; Venus flytrap@Venus flytrap; Pitcher plant@Pitcher plant; Sundew@Drosera; Bonsai@Bonsai;
      Rosemary@Rosmarinus; Mint|pudina@Mentha; Basil|tulsi@Ocimum basilicum; Mother of thousands|Kalanchoe daigremontiana@Kalanchoe daigremontiana; Kalanchoe|flaming Katy@Kalanchoe blossfeldiana; Oxalis|false shamrock|purple shamrock@Oxalis triangularis`,
    legendary: ['Mother of thousands', 'Pilea'],
    facts: {
      'Mother of thousands': 'Grows hundreds of tiny plantlets along the edges of its leaves that drop off and root wherever they land.',
      Pilea: 'The Chinese money plant spread worldwide as cuttings were passed between friends, after a Norwegian missionary brought it from Yunnan.',
    },
  },
  {
    id: 'nat-succulent',
    category: 'nature',
    prompt: 'Name a cactus or succulent',
    qualifier: 'Cacti and other succulent plants by common name or genus',
    strip: ['cactus'],
    answers: `
      Saguaro@Saguaro; Prickly pear|opuntia|nopal|nagphani@Opuntia; Barrel cactus@Echinocactus; Golden barrel cactus|mother-in-law's cushion@Echinocactus grusonii; Organ pipe cactus@Organ Pipe Cactus; Cholla|jumping cholla@Cylindropuntia;
      Christmas cactus@Schlumbergera; Easter cactus@Hatiora gaertneri; Moon cactus|chin cactus@Gymnocalycium mihanovichii; Bunny ears cactus|angel's wings@Opuntia microdasys; Old man cactus@Cephalocereus senilis;
      Peyote@Peyote; Queen of the night|Dutchman's pipe cactus@Epiphyllum oxypetalum; Dragon fruit|pitaya|pitahaya@Pitaya; Fishbone cactus|zigzag cactus@Epiphyllum anguliger; Cereus|night-blooming cereus@Cereus (plant); Mammillaria|pincushion cactus@Mammillaria;
      Hedgehog cactus@Echinocereus; Rat tail cactus@Disocactus flagelliformis; Totem pole cactus@Pachycereus schottii; Fairy castle cactus@Acanthocereus tetragonus; Sea urchin cactus@Astrophytum asterias; Bishop's cap cactus@Astrophytum myriostigma;
      Aloe vera|ghritkumari|aloe@Aloe vera; Haworthia|zebra plant@Haworthia; Echeveria@Echeveria; Sempervivum|hens and chicks|houseleek@Sempervivum; Sedum|stonecrop@Sedum; Jade plant|money plant (jade)@Crassula ovata;
      Kalanchoe@Kalanchoe; Panda plant|chocolate soldier@Kalanchoe tomentosa; Agave|century plant@Agave; Blue agave|tequila agave@Agave tequilana; Sisal|Agave sisalana@Agave sisalana; Yucca@Yucca; Burro's tail|donkey tail|Sedum morganianum@Sedum morganianum;
      String of pearls|string of beads@Curio rowleyanus; String of hearts|chain of hearts@Ceropegia woodii; Lithops|living stones|pebble plant@Lithops; Euphorbia|spurge|crown of thorns@Euphorbia milii; Pencil cactus|milk bush|pencil tree|Euphorbia tirucalli@Euphorbia tirucalli;
      Indian spurge tree|Euphorbia neriifolia|common milk hedge|thor@Euphorbia neriifolia; Stapelia|starfish flower|carrion flower@Stapelia; Hoodia@Hoodia; Ice plant|Delosperma@Delosperma; Portulaca|moss rose|purslane|nine o'clock plant@Portulaca grandiflora;
      Ponytail palm|elephant's foot@Beaucarnea recurvata; Desert rose|Adenium@Adenium obesum; Baobab@Adansonia; Bottle tree|Brachychiton@Brachychiton rupestris; Welwitschia@Welwitschia; Snake plant|sansevieria@Dracaena trifasciata;
      Zebra cactus@Haworthiopsis attenuata; Rosary vine@Ceropegia; Pachypodium|Madagascar palm@Pachypodium lamerei; Graptopetalum|ghost plant@Graptopetalum paraguayense; Dudleya|chalk dudleya@Dudleya; Aeonium|tree houseleek@Aeonium; Crassula|crassula@Crassula; Cotyledon@Cotyledon; Pachyphytum|moonstones@Pachyphytum oviferum`,
    legendary: ['Lithops', 'Welwitschia'],
    facts: {
      Lithops: 'Living stones: African succulents that mimic pebbles, with only a pair of leaves just above the ground.',
      Welwitschia: 'A Namib Desert plant with just two leaves that keep growing for 1,000 years or more.',
    },
  },
  {
    id: 'nat-horse-breed',
    category: 'nature',
    prompt: 'Name a breed of horse',
    qualifier: 'Horse breeds and pony breeds by name; Indian breeds count',
    strip: ['horse', 'pony'],
    answers: `
      Arabian|Arabian horse|Arab@Arabian horse; Thoroughbred@Thoroughbred; Clydesdale@Clydesdale horse; Shire|Shire horse@Shire horse; Percheron@Percheron; Belgian|Belgian draft|Belgian horse@Belgian Draught;
      Friesian|Friesian horse@Friesian horse; Andalusian|Pura Raza Española|Spanish horse@Andalusian horse; Lipizzan|Lipizzaner@Lipizzan; Appaloosa@Appaloosa; Mustang@Mustang horse; Quarter Horse|American Quarter Horse@American Quarter Horse;
      Morgan|Morgan horse@Morgan horse; Paint|Pinto|American Paint Horse@American Paint Horse; Palomino@Palomino; Tennessee Walker|Tennessee Walking Horse@Tennessee Walking Horse; Standardbred@Standardbred;
      Hanoverian@Hanoverian horse; Holsteiner@Holsteiner; Trakehner@Trakehner; Oldenburg@Oldenburg horse; Dutch Warmblood|KWPN@Dutch Warmblood; Irish Draught@Irish Draught; Connemara|Connemara pony@Connemara pony;
      Shetland|Shetland pony@Shetland pony; Welsh pony|Welsh Mountain pony@Welsh pony and cob; Exmoor|Exmoor pony@Exmoor pony; Dartmoor pony@Dartmoor pony; New Forest pony@New Forest pony; Fell pony@Fell pony; Dales pony@Dales pony;
      Highland pony@Highland pony; Icelandic|Icelandic horse@Icelandic horse; Haflinger@Haflinger; Fjord|Fjord horse|Norwegian Fjord@Fjord horse; Camargue|Camargue horse@Camargue horse; Akhal-Teke|Akhal Teke@Akhal-Teke;
      Przewalski's horse|Przewalski|Takhi@Przewalski's horse; Mongolian horse@Mongolian horse; Marwari|Marwari horse@Marwari horse; Kathiawari|Kathiawari horse@Kathiawari horse; Manipuri pony|Manipuri@Manipuri pony;
      Spiti pony|Spiti horse@Spiti horse; Zanskari pony|Zanskari@Zanskari horse; Deccani horse|Deccani@Deccani horse; Falabella@Falabella;
      Brumby@Brumby; Camarillo White Horse@Camarillo White Horse; Cleveland Bay@Cleveland Bay; Suffolk Punch|Suffolk horse@Suffolk Punch; Hackney|Hackney horse@Hackney horse; Gypsy Vanner|Irish Cob|Gypsy Cob@Irish Cob;
      Knabstrupper@Knabstrupper; Kladruber@Kladruber; Criollo@Criollo horse; Paso Fino@Paso Fino; Peruvian Paso@Peruvian Paso; Mangalarga Marchador@Mangalarga Marchador; Selle Français@Selle Français; Anglo-Arab@Anglo-Arabian;
      Barb|Barb horse@Barb horse; Karabakh|Karabakh horse@Karabakh horse; Don horse|Don@Don horse; Orlov Trotter@Orlov Trotter; Budyonny|Budyonny horse@Budyonny horse; Hucul|Hucul pony@Hucul pony; Waler@Waler horse; Chincoteague pony@Chincoteague pony`,
    legendary: ['Marwari', 'Zanskari pony'],
    facts: {
      Marwari: 'A Rajasthani breed with distinctive inward-curving ears that can almost touch at the tips.',
      'Zanskari pony': 'A hardy pony of Ladakh that carries loads across mountain passes above 4,000 metres.',
    },
  },
  {
    id: 'nat-cat-breed',
    category: 'nature',
    prompt: 'Name a breed of domestic cat',
    qualifier: 'Recognised pedigree or well-known domestic cat breeds; wild cats do not count',
    strip: ['cat'],
    answers: `
      Persian@Persian cat; Siamese@Siamese cat; Maine Coon@Maine Coon; Bengal@Bengal cat; Ragdoll@Ragdoll; British Shorthair@British Shorthair; Sphynx|Sphynx cat@Sphynx cat; Scottish Fold@Scottish Fold;
      Abyssinian@Abyssinian cat; Birman@Birman; Russian Blue@Russian Blue; Norwegian Forest cat|Wegie@Norwegian Forest cat; Siberian@Siberian cat; Burmese@Burmese cat; American Shorthair@American Shorthair;
      Oriental Shorthair@Oriental Shorthair; Devon Rex@Devon Rex; Cornish Rex@Cornish Rex; Exotic Shorthair@Exotic Shorthair; Turkish Angora|Angora@Turkish Angora; Turkish Van@Turkish Van; Savannah@Savannah cat;
      Egyptian Mau@Egyptian Mau; Ocicat@Ocicat; Manx@Manx cat; Munchkin@Munchkin cat; Himalayan|Colourpoint@Himalayan cat; Tonkinese@Tonkinese cat; Balinese@Balinese cat; Javanese@Javanese cat; Havana Brown@Havana Brown;
      Bombay@Bombay cat; Chartreux@Chartreux cat; Korat@Korat; Singapura@Singapura cat; Somali@Somali cat; Snowshoe@Snowshoe cat; Selkirk Rex@Selkirk Rex; LaPerm@LaPerm; American Curl@American Curl; Japanese Bobtail@Japanese Bobtail;
      Kurilian Bobtail@Kurilian Bobtail; American Bobtail@American Bobtail; Pixie-bob@Pixie-bob; Toyger@Toyger; Chausie@Chausie; Peterbald@Peterbald; Donskoy|Don Sphynx@Donskoy cat; Ukrainian Levkoy@Ukrainian Levkoy;
      Nebelung@Nebelung; Burmilla@Burmilla; Asian|Asian cat@Asian cat; Tiffanie|Asian Semi-longhair@Asian Semi-longhair; Sokoke@Sokoke; Khao Manee@Khao Manee; Thai|Thai cat|Old-style Siamese@Thai cat;
      Lykoi|werewolf cat@Lykoi; Minskin@Minskin; Napoleon|Minuet@Minuet cat; Ragamuffin@Ragamuffin cat; Neva Masquerade@Neva Masquerade; Cymric@Cymric cat; Australian Mist@Australian Mist;
      Highlander@Highlander cat; Serengeti@Serengeti cat; Ojos Azules@Ojos Azules; Aegean|Aegean cat@Aegean cat; Arabian Mau@Arabian Mau`,
    legendary: ['Khao Manee', 'Lykoi'],
    facts: {
      'Khao Manee': 'An ancient Thai breed with a pure white coat and often one blue and one gold eye, once kept at royal courts.',
      Lykoi: 'A breed that looks like a werewolf because of patchy, roan-coloured fur, which arose from a natural mutation.',
    },
  },
  {
    id: 'nat-extinct',
    category: 'nature',
    prompt: 'Name an extinct animal',
    qualifier: 'Animals that have died out, from prehistoric to recent (but not dinosaurs)',
    answers: `
      Dodo@Dodo; Woolly mammoth|mammoth@Woolly mammoth; Saber-toothed cat|sabre-toothed tiger|Smilodon|saber-toothed tiger@Smilodon; Thylacine|Tasmanian tiger@Thylacine; Passenger pigeon@Passenger pigeon; Great auk@Great auk;
      Steller's sea cow@Steller's sea cow; Quagga@Quagga; Aurochs@Aurochs; Moa@Moa; Haast's eagle@Haast's eagle; Elephant bird@Elephant bird; Irish elk|giant deer@Irish elk; Woolly rhinoceros|woolly rhino@Woolly rhinoceros;
      Cave bear@Cave bear; Cave lion@Panthera spelaea; Dire wolf@Dire wolf; Giant ground sloth|ground sloth|Megatherium@Megatherium; Glyptodon@Glyptodon; Megalodon@Megalodon; Dunkleosteus@Dunkleosteus; Trilobite@Trilobite;
      Mastodon@Mastodon; Gomphotherium@Gomphotherium; Deinotherium@Deinotherium; Paraceratherium|Indricotherium@Paraceratherium; Andrewsarchus@Andrewsarchus; Basilosaurus@Basilosaurus; Ambulocetus@Ambulocetus;
      Pakicetus@Pakicetus; Diprotodon@Diprotodon; Thylacoleo|marsupial lion@Thylacoleo; Megalania|Varanus priscus@Varanus priscus; Titanoboa@Titanoboa; Gigantopithecus@Gigantopithecus; Sivatherium@Sivatherium;
      Western black rhinoceros@Western black rhinoceros; Javan tiger@Javan tiger; Bali tiger@Bali tiger; Caspian tiger@Caspian tiger; Pyrenean ibex|bucardo@Pyrenean ibex; Golden toad@Golden toad; Baiji|Yangtze river dolphin@Baiji;
      Carolina parakeet@Carolina parakeet; Heath hen@Heath hen; Labrador duck@Labrador duck; Huia@Huia; Rodrigues solitaire@Rodrigues solitaire; Pink-headed duck@Pink-headed duck; Himalayan quail@Himalayan quail;
      Asiatic cheetah|Indian cheetah@Asiatic cheetah; Falkland Islands wolf|warrah@Falkland Islands wolf; Japanese wolf@Japanese wolf; Tarpan@Tarpan; Pinta Island tortoise|Lonesome George@Pinta Island tortoise; Stephens Island wren@Stephens Island wren; Eskimo curlew@Eskimo curlew; Ivory-billed woodpecker@Ivory-billed woodpecker; Atlas bear@Atlas bear; Barbary lion@Barbary lion; Cape lion@Cape lion; Archaeopteryx@Archaeopteryx; Pterodactyl|pterosaur|Pteranodon@Pteranodon; Ichthyosaur@Ichthyosauria; Plesiosaur@Plesiosaur; Mosasaurus|mosasaur@Mosasaurus; Eurypterid|sea scorpion@Eurypterid; Meganeura@Meganeura; Arthropleura@Arthropleura; Anomalocaris@Anomalocaris; Hallucigenia@Hallucigenia`,
    tryhard: ['Hallucigenia'],
    legendary: ['Sivatherium', 'Hallucigenia'],
    facts: {
      Sivatherium: 'A giant giraffe relative with moose-like horns whose fossils were found in the Siwalik Hills of India.',
      Hallucigenia: 'A tiny Cambrian worm-like creature so strange that scientists first drew it upside down and back to front.',
    },
  },
  {
    id: 'nat-deep-sea',
    category: 'nature',
    prompt: 'Name an animal of the deep sea',
    qualifier: 'Animals that live in the deep ocean (below about 200 metres), by common name',
    answers: `
      Anglerfish|deep-sea anglerfish@Anglerfish; Giant squid@Giant squid; Colossal squid@Colossal squid; Vampire squid@Vampire squid; Dumbo octopus@Dumbo octopus; Gulper eel|pelican eel@Pelican eel; Fangtooth|common fangtooth@Anoplogaster;
      Viperfish@Viperfish; Barreleye|spookfish@Barreleye; Hatchetfish@Marine hatchetfish; Lanternfish@Lanternfish; Dragonfish@Stomiidae; Frilled shark@Frilled shark; Goblin shark@Goblin shark; Greenland shark@Greenland shark;
      Megamouth shark@Megamouth shark; Cookiecutter shark@Cookiecutter shark; Sixgill shark@Bluntnose sixgill shark; Oarfish@Oarfish; Giant isopod@Bathynomus giganteus; Giant tube worm|tube worm@Riftia pachyptila;
      Yeti crab@Yeti crab; Vent shrimp@Rimicaris exoculata; Pompeii worm@Alvinella pompejana; Sea pig@Scotoplanes; Deep-sea jellyfish|Atolla jellyfish@Atolla wyvillei;
      Glass squid@Cranchiidae; Bigfin squid@Magnapinna; Cock-eyed squid@Histioteuthidae; Black swallower@Chiasmodon niger; Blobfish@Psychrolutes marcidus;
      Humpback anglerfish@Melanocetus johnsonii; Tripod fish@Bathypterois; Snailfish|Mariana snailfish@Snailfish; Grenadier|rattail|macrourid@Grenadier (fish);
      Chimaera|ghost shark|ratfish@Chimaera; Coelacanth@Coelacanth; Siphonophore|giant siphonophore@Siphonophore; Comb jelly@Ctenophora; Sperm whale@Sperm whale; Elephant seal|southern elephant seal@Southern elephant seal;
      Leatherback turtle@Leatherback sea turtle; Pyrosome@Pyrosome; Cusk eel|Abyssobrotula galatheae|Pacific cusk eel@Cusk-eel; Whalefall worm|bone-eating worm|zombie worm|Osedax@Osedax; Glowing sucker octopus@Stauroteuthis syrtensis; Deep-sea spider crab@Macrocheira kaempferi; Hagfish@Hagfish;
      Sea lily@Crinoid; Brittle star@Brittle star; Basket star@Basket star; Deep-sea coral|cold-water coral@Cold-water coral; Glass sponge|Venus' flower basket@Hexactinellida`,
    legendary: ['Pompeii worm', 'Black swallower'],
    facts: {
      'Pompeii worm': 'Lives on hydrothermal vents and is one of the most heat-tolerant animals, enduring temperatures of about 80 degrees Celsius.',
      'Black swallower': 'A deep-sea fish whose stretchy stomach lets it swallow prey ten times its own mass.',
    },
  },
  {
    id: 'nat-polar-animal',
    category: 'nature',
    prompt: 'Name an animal that lives in the Arctic or Antarctic',
    qualifier: 'Animals native to polar regions (either pole), by common name',
    answers: `
      Polar bear@Polar bear; Arctic fox@Arctic fox; Arctic wolf@Arctic wolf; Arctic hare@Arctic hare; Snowshoe hare@Snowshoe hare; Reindeer|caribou@Reindeer; Muskox|musk ox@Muskox; Walrus@Walrus; Narwhal@Narwhal;
      Beluga whale|beluga@Beluga whale; Bowhead whale@Bowhead whale; Orca|killer whale@Orca; Harp seal@Harp seal; Ringed seal@Ringed seal; Bearded seal@Bearded seal; Hooded seal@Hooded seal; Weddell seal@Weddell seal;
      Leopard seal@Leopard seal; Crabeater seal@Crabeater seal; Ross seal@Ross seal; Southern elephant seal|elephant seal@Southern elephant seal; Antarctic fur seal|fur seal@Antarctic fur seal; Emperor penguin@Emperor penguin;
      Adélie penguin|Adelie penguin@Adélie penguin; Chinstrap penguin@Chinstrap penguin; Gentoo penguin@Gentoo penguin; King penguin@King penguin; Macaroni penguin@Macaroni penguin; Snow petrel@Snow petrel; Wandering albatross@Wandering albatross;
      Skua|south polar skua|brown skua@South polar skua; Snowy owl@Snowy owl; Snow goose@Snow goose; Arctic tern@Arctic tern; Puffin|Atlantic puffin@Atlantic puffin; Ptarmigan|rock ptarmigan@Rock ptarmigan; Snow bunting@Snow bunting;
      Gyrfalcon@Gyrfalcon; Ivory gull@Ivory gull; Lemming@Lemming; Wolverine@Wolverine; Arctic ground squirrel@Arctic ground squirrel; Stoat|ermine@Stoat; Greenland shark@Greenland shark; Arctic char@Arctic char;
      Antarctic krill|krill@Antarctic krill; Antarctic toothfish@Antarctic toothfish; Icefish|crocodile icefish@Channichthyidae; Blue whale@Blue whale; Humpback whale@Humpback whale; Minke whale|Antarctic minke whale@Antarctic minke whale; Snowy sheathbill@Snowy sheathbill; Antarctic midge|Belgica antarctica@Belgica antarctica; Tardigrade|water bear@Tardigrade;
      Arctic cod|polar cod@Polar cod; Spectacled eider@Spectacled eider; Greenland dog|Alaskan malamute@Alaskan Malamute; Siberian husky|husky@Siberian Husky; Svalbard reindeer@Svalbard reindeer`,
    legendary: ['Antarctic midge'],
    facts: {
      'Antarctic midge': 'At about 6 mm long, the largest purely land animal in Antarctica.',
    },
  },
  {
    id: 'nat-turtle',
    category: 'nature',
    prompt: 'Name a turtle or tortoise',
    qualifier: 'Turtles, tortoises and terrapins by common name; sea, freshwater and land species all count',
    strip: ['turtle', 'tortoise'],
    answers: `
      Green sea turtle|green turtle@Green sea turtle; Leatherback|leatherback turtle|leatherback sea turtle@Leatherback sea turtle; Loggerhead|loggerhead turtle@Loggerhead sea turtle; Hawksbill|hawksbill turtle@Hawksbill sea turtle;
      Olive ridley|olive ridley turtle|Ridley@Olive ridley sea turtle; Kemp's ridley@Kemp's ridley sea turtle; Flatback|flatback turtle@Flatback sea turtle; Galápagos tortoise|Galapagos giant tortoise|giant tortoise@Galápagos tortoise;
      Aldabra giant tortoise|Aldabra tortoise@Aldabra giant tortoise; Indian star tortoise|star tortoise@Indian star tortoise; Leopard tortoise@Leopard tortoise; Sulcata tortoise|African spurred tortoise@African spurred tortoise;
      Hermann's tortoise@Hermann's tortoise; Greek tortoise|spur-thighed tortoise@Greek tortoise; Russian tortoise|Horsfield's tortoise@Russian tortoise; Red-footed tortoise@Red-footed tortoise; Yellow-footed tortoise@Yellow-footed tortoise;
      Radiated tortoise@Radiated tortoise; Ploughshare tortoise|angonoka@Ploughshare tortoise; Gopher tortoise@Gopher tortoise; Desert tortoise@Desert tortoise; Pancake tortoise@Pancake tortoise; Egyptian tortoise@Egyptian tortoise;
      Elongated tortoise@Elongated tortoise; Impressed tortoise@Impressed tortoise; Travancore tortoise|Indotestudo forstenii@Travancore tortoise; Asian forest tortoise|Manouria emys@Asian forest tortoise;
      Red-eared slider|red-eared terrapin|slider@Red-eared slider; Painted turtle@Painted turtle; Snapping turtle|common snapping turtle@Common snapping turtle; Alligator snapping turtle@Alligator snapping turtle; Box turtle@Box turtle;
      Map turtle@Map turtle; Musk turtle|stinkpot@Common musk turtle; Mud turtle@Mud turtle; Softshell turtle|Indian softshell turtle|Nilssonia gangetica@Indian softshell turtle; Indian flapshell turtle|flapshell turtle@Indian flapshell turtle;
      Indian roofed turtle|roofed turtle@Indian roofed turtle; Indian tent turtle|tent turtle@Indian tent turtle; Crowned river turtle@Hardella thurjii; Three-striped roofed turtle|Batagur dhongoka@Three-striped roofed turtle;
      Red-crowned roofed turtle|Bengal roof turtle|Batagur kachuga@Red-crowned roofed turtle; Northern river terrapin|Batagur baska|river terrapin@Northern river terrapin; Diamondback terrapin@Diamondback terrapin;
      European pond turtle|pond turtle@European pond turtle; Matamata@Matamata; Pig-nosed turtle|Fly River turtle@Pig-nosed turtle; Big-headed turtle@Big-headed turtle; Yellow-bellied slider@Yellow-bellied slider;
      Chinese softshell turtle@Chinese softshell turtle; Giant Asian pond turtle@Giant Asian pond turtle; Spotted turtle@Spotted turtle; Wood turtle@Wood turtle; Bog turtle@Bog turtle; Blanding's turtle@Blanding's turtle;
      Eastern box turtle@Eastern box turtle; Loggerhead musk turtle@Loggerhead musk turtle; Kinixys|hinge-back tortoise|hingeback tortoise@Kinixys;`,
    legendary: ['Ploughshare tortoise', 'Indian roofed turtle'],
    facts: {
      'Ploughshare tortoise': 'Also called the angonoka, one of the rarest tortoises on Earth, found only in northwest Madagascar.',
      'Indian roofed turtle': 'A freshwater turtle of the Ganges basin whose shell has a tent-like ridge; it is endangered.',
    },
  },
];
