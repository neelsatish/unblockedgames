module.exports = [
  // ───────────────────────────── SCIENCE ─────────────────────────────
  {
    id: 'sci-constellation',
    category: 'science',
    prompt: 'Name a constellation',
    qualifier: 'Any of the 88 modern IAU constellations, by English or Latin name',
    strip: ['constellation'],
    closed: 88,
    answers: `
      Andromeda@Andromeda (constellation); Antlia; Apus; Aquarius@Aquarius (constellation); Aquila@Aquila (constellation); Ara@Ara (constellation);
      Aries@Aries (constellation); Auriga; Boötes|Bootes|the Herdsman@Boötes; Caelum; Camelopardalis|the Giraffe@Camelopardalis; Cancer@Cancer (constellation)|the Crab;
      Canes Venatici|hunting dogs; Canis Major|the Great Dog@Canis Major; Canis Minor|the Little Dog@Canis Minor; Capricornus|Capricorn@Capricornus;
      Carina@Carina (constellation); Cassiopeia@Cassiopeia (constellation); Centaurus|the Centaur@Centaurus; Cepheus@Cepheus (constellation); Cetus|the Whale@Cetus (constellation);
      Chamaeleon; Circinus; Columba@Columba (constellation); Coma Berenices; Corona Australis; Corona Borealis; Corvus@Corvus (constellation)|the Crow;
      Crater@Crater (constellation); Crux|Southern Cross@Crux; Cygnus|the Swan@Cygnus (constellation); Delphinus|the Dolphin@Delphinus;
      Dorado; Draco@Draco (constellation)|the Dragon; Equuleus; Eridanus@Eridanus (constellation); Fornax; Gemini@Gemini (constellation)|the Twins;
      Grus@Grus (constellation); Hercules@Hercules (constellation); Horologium@Horologium (constellation); Hydra@Hydra (constellation); Hydrus;
      Indus@Indus (constellation); Lacerta; Leo@Leo (constellation)|the Lion; Leo Minor; Lepus@Lepus (constellation)|the Hare; Libra@Libra (constellation);
      Lupus@Lupus (constellation); Lynx@Lynx (constellation); Lyra|the Lyre@Lyra; Mensa@Mensa (constellation); Microscopium; Monoceros;
      Musca; Norma@Norma (constellation); Octans; Ophiuchus|the Serpent Bearer; Orion@Orion (constellation)|the Hunter; Pavo@Pavo (constellation)|the Peacock;
      Pegasus@Pegasus (constellation); Perseus@Perseus (constellation); Phoenix@Phoenix (constellation); Pictor; Pisces@Pisces (constellation)|the Fish;
      Piscis Austrinus; Puppis; Pyxis@Pyxis (constellation); Reticulum; Sagitta; Sagittarius@Sagittarius (constellation)|the Archer; Scorpius|Scorpio@Scorpius;
      Sculptor@Sculptor (constellation); Scutum@Scutum (constellation); Serpens; Sextans; Taurus@Taurus (constellation)|the Bull; Telescopium;
      Triangulum; Triangulum Australe; Tucana; Ursa Major|the Great Bear|Big Dipper|Saptarishi@Ursa Major; Ursa Minor|the Little Bear|Little Dipper@Ursa Minor;
      Vela@Vela (constellation); Virgo@Virgo (constellation)|the Maiden; Volans; Vulpecula`,
    tryhard: ['Ophiuchus'],
    legendary: ['Antlia', 'Mensa'],
    facts: {
      Antlia: 'The "air pump" constellation, one of the many faint ones named after scientific instruments in the 1750s.',
      Mensa: 'The only constellation named after a landform: Table Mountain in South Africa.',
    },
  },
  {
    id: 'sci-organ',
    category: 'science',
    prompt: 'Name an organ of the human body',
    qualifier: 'Internal or external organs by their usual name; bones and muscles do not count',
    strip: ['organ'],
    answers: `
      Heart@Heart; Brain@Human brain; Lungs|lung@Lung; Liver; Kidney|kidneys@Kidney; Stomach; Skin; Intestine|intestines|bowel|gut@Gastrointestinal tract;
      Small intestine; Large intestine|colon@Large intestine; Pancreas; Spleen; Gallbladder|gall bladder; Bladder|urinary bladder@Urinary bladder;
      Eye|eyes@Human eye; Ear|ears@Ear; Nose@Human nose; Tongue; Esophagus|oesophagus|food pipe|gullet@Esophagus; Trachea|windpipe;
      Larynx|voice box; Pharynx|throat@Pharynx; Thyroid|thyroid gland@Thyroid; Pituitary gland|pituitary@Pituitary gland; Adrenal gland|adrenal glands|adrenals@Adrenal gland;
      Thymus; Appendix|vermiform appendix@Appendix (anatomy); Rectum; Duodenum; Jejunum; Ileum; Cecum|caecum;
      Uterus|womb; Ovary|ovaries@Ovary; Fallopian tube|fallopian tubes|uterine tube@Fallopian tube; Prostate|prostate gland@Prostate; Testis|testicle|testes@Testicle;
      Penis; Vagina; Spinal cord; Diaphragm@Thoracic diaphragm; Tonsils|tonsil@Tonsil; Hypothalamus; Pineal gland|pineal@Pineal gland;
      Parathyroid gland|parathyroid@Parathyroid gland; Salivary gland|salivary glands@Salivary gland; Mammary gland|breast@Mammary gland; Cochlea;
      Retina; Cornea; Lymph node|lymph nodes@Lymph node; Bone marrow@Bone marrow; Urethra; Ureter; Aorta; Cerebellum; Cerebrum;
      Pleura@Pulmonary pleurae; Peritoneum; Mesentery; Placenta; Hair|nails@Hair`,
    tryhard: ['Mesentery'],
    legendary: ['Mesentery'],
    facts: { Mesentery: 'Reclassified as a distinct organ in 2016, though doctors had described it for centuries.' },
  },
  {
    id: 'sci-muscle',
    category: 'science',
    prompt: 'Name a muscle in the human body',
    qualifier: 'Named skeletal, smooth or cardiac muscles; groups like "abs" or "glutes" count',
    strip: ['muscle', 'muscles'],
    answers: `
      Biceps|biceps brachii@Biceps; Triceps|triceps brachii@Triceps; Deltoid|delts@Deltoid muscle; Pectoralis major|pecs|pectorals|pectoral muscles@Pectoralis major;
      Trapezius|traps@Trapezius; Latissimus dorsi|lats@Latissimus dorsi muscle; Rectus abdominis|abs|abdominals|six-pack@Rectus abdominis muscle; Obliques|external oblique@Abdominal external oblique muscle;
      Gluteus maximus|glutes|butt muscle@Gluteus maximus; Gluteus medius@Gluteus medius muscle; Quadriceps|quads|quadriceps femoris@Quadriceps femoris muscle;
      Hamstrings|hamstring@Hamstring; Gastrocnemius|calf muscle|calves@Gastrocnemius muscle; Soleus@Soleus muscle; Tibialis anterior@Tibialis anterior muscle;
      Sartorius@Sartorius muscle; Gracilis@Gracilis muscle; Adductor magnus@Adductor magnus muscle; Iliopsoas|psoas@Iliopsoas; Piriformis@Piriformis muscle;
      Rhomboids|rhomboid@Rhomboid muscles; Infraspinatus@Infraspinatus muscle; Supraspinatus@Supraspinatus muscle; Teres major@Teres major muscle;
      Subscapularis@Subscapularis muscle; Serratus anterior@Serratus anterior muscle; Brachialis@Brachialis muscle; Brachioradialis@Brachioradialis muscle;
      Masseter@Masseter muscle; Temporalis@Temporalis muscle; Orbicularis oculi@Orbicularis oculi muscle; Orbicularis oris@Orbicularis oris muscle;
      Sternocleidomastoid|SCM@Sternocleidomastoid muscle; Platysma@Platysma; Diaphragm@Thoracic diaphragm; Intercostal muscles|intercostals@Intercostal muscle;
      Erector spinae@Erector spinae muscles; Transversus abdominis@Transverse abdominal muscle; Rectus femoris@Rectus femoris muscle; Vastus lateralis@Vastus lateralis muscle;
      Biceps femoris@Biceps femoris muscle; Popliteus@Popliteus muscle; Plantaris@Plantaris muscle; Cardiac muscle|heart muscle@Cardiac muscle;
      Smooth muscle@Smooth muscle; Skeletal muscle@Skeletal muscle; Zygomaticus major@Zygomaticus major muscle; Buccinator@Buccinator muscle; Frontalis@Occipitofrontalis muscle;
      Stapedius@Stapedius muscle; Levator scapulae@Levator scapulae muscle; Pronator teres@Pronator teres muscle; Flexor carpi radialis@Flexor carpi radialis muscle;
      Tensor fasciae latae@Tensor fasciae latae muscle; Pectineus@Pectineus muscle`,
    legendary: ['Stapedius'],
    facts: { Stapedius: 'The smallest skeletal muscle in the body, only about 1 mm long, deep inside the middle ear.' },
  },
  {
    id: 'sci-vitamin-mineral',
    category: 'science',
    prompt: 'Name a vitamin or a mineral that the body needs',
    qualifier: 'The 13 vitamins (by letter or chemical name) and the dietary minerals',
    strip: ['vitamin'],
    missingTier: 'deep',
    answers: `
      Vitamin A|retinol@Vitamin A; Vitamin B1|thiamine|thiamin@Thiamine; Vitamin B2|riboflavin@Riboflavin; Vitamin B3|niacin|nicotinic acid@Niacin;
      Vitamin B5|pantothenic acid@Pantothenic acid; Vitamin B6|pyridoxine@Vitamin B6; Vitamin B7|biotin|vitamin H@Biotin; Vitamin B9|folate|folic acid@Folate;
      Vitamin B12|cobalamin|cyanocobalamin@Vitamin B12; Vitamin C|ascorbic acid@Vitamin C; Vitamin D|calciferol|cholecalciferol@Vitamin D; Vitamin E|tocopherol@Vitamin E;
      Vitamin K|phylloquinone@Vitamin K; Calcium; Iron; Magnesium; Zinc; Potassium; Sodium; Phosphorus; Iodine|iodide@Iodine; Selenium; Copper; Manganese;
      Chromium; Molybdenum; Fluoride|fluorine@Fluoride; Chloride|chlorine@Chloride; Sulfur|sulphur@Sulfur; Cobalt; Vitamin B complex|B complex@Vitamin B; Choline@Choline`,
    tryhard: ['Molybdenum'],
    legendary: ['Molybdenum'],
    facts: { Molybdenum: 'Needed only in tiny traces, yet enzymes that process sulphur in your cells depend on it.' },
  },
  {
    id: 'sci-si-unit',
    category: 'science',
    prompt: 'Name an SI unit',
    qualifier: 'The 7 base units and the 22 named derived units of the metric SI system, by unit name',
    closed: 29,
    answers: `
      Metre|meter@Metre; Kilogram|kilogramme|kg@Kilogram; Second|sec@Second; Ampere|amp|amps@Ampere; Kelvin@Kelvin; Mole@Mole (unit); Candela|cd@Candela;
      Radian@Radian; Steradian@Steradian; Hertz|Hz@Hertz; Newton|N@Newton (unit); Pascal|Pa@Pascal (unit); Joule|J@Joule; Watt|W@Watt;
      Coulomb|C@Coulomb; Volt|V@Volt; Farad|F@Farad; Ohm@Ohm (unit); Siemens@Siemens (unit); Weber@Weber (unit); Tesla@Tesla (unit);
      Henry@Henry (unit); Degree Celsius|Celsius|°C@Celsius; Lumen@Lumen (unit); Lux@Lux (unit); Becquerel|Bq@Becquerel; Gray@Gray (unit); Sievert|Sv@Sievert; Katal@Katal`,
    tryhard: ['Katal'],
    legendary: ['Katal'],
    facts: { Katal: 'The unit of catalytic activity, adopted in 1999, and it almost nobody has heard of.' },
  },
  {
    id: 'sci-star',
    category: 'science',
    prompt: 'Name a star (other than the Sun)',
    qualifier: 'Individually named stars, by proper name or catalogue designation',
    strip: ['star'],
    answers: `
      Sirius; Canopus; Arcturus; Vega@Vega; Capella; Rigel; Procyon; Betelgeuse; Achernar; Altair; Aldebaran; Antares; Spica; Pollux|Pollux (star)@Pollux (star);
      Fomalhaut; Deneb; Regulus; Polaris|North Star|Pole Star|Dhruva@Polaris; Alpha Centauri|Rigil Kentaurus@Alpha Centauri; Proxima Centauri|Proxima@Proxima Centauri;
      Barnard's Star|Barnards Star@Barnard's Star; Mizar@Mizar; Alcor@Alcor (star); Algol; Bellatrix; Castor@Castor (star); Mira@Mira; Thuban; Alnilam; Alnitak; Mintaka;
      Saiph; Dubhe; Merak@Merak (star); Alioth; Alkaid; Sadr@Gamma Cygni; Tau Ceti; Wolf 359; Hadar@Beta Centauri; Acrux; Mimosa@Beta Crucis; Shaula; Alphard; Rasalhague;
      Denebola; Enif; Markab@Alpha Pegasi; Scheat; Algenib; Alpheratz; Mirach; Almach; Hamal; Menkar; Kochab; Eltanin|Etamin@Gamma Draconis; Gacrux; Elnath; Alhena;
      Mirfak; Albireo; Sheliak; Eta Carinae; VY Canis Majoris; UY Scuti; 61 Cygni; Epsilon Eridani; Ross 128; TRAPPIST-1|Trappist-1@TRAPPIST-1;
      Lalande 21185; Luyten's Star; Tabby's Star|KIC 8462852|Boyajian's Star@KIC 8462852; Stephenson 2-18; R136a1; Zubenelgenubi;
      Zubeneschamali; Alderamin; Alfirk; Diphda; Ankaa; Schedar; Caph; Ruchbah; Segin@Epsilon Cassiopeiae; Navi@Gamma Cassiopeiae; Unukalhai; Vindemiatrix; Porrima@Gamma Virginis; Cor Caroli;
      Gienah@Gamma Corvi; Algorab; Kraz@Beta Corvi; Sabik; Nunki; Kaus Australis; Ascella; Rukbat`,
    tryhard: ['Tau Ceti'],
    legendary: ['Tabby\'s Star'],
    facts: { "Tabby's Star": 'Its brightness dips in odd, irregular ways, which led to wild guesses about alien megastructures.' },
  },
  {
    id: 'sci-gas',
    category: 'science',
    prompt: 'Name a gas',
    qualifier: 'Substances that are gases at ordinary room temperature, elements or compounds',
    missingTier: 'deep',
    answers: `
      Oxygen; Nitrogen; Hydrogen; Carbon dioxide|CO2; Methane; Helium; Neon; Argon; Ozone|O3; Ammonia|NH3; Chlorine; Nitrous oxide|laughing gas|N2O@Nitrous oxide;
      Carbon monoxide|CO@Carbon monoxide; Sulfur dioxide|sulphur dioxide|SO2@Sulfur dioxide; Hydrogen sulfide|hydrogen sulphide|H2S@Hydrogen sulfide; Radon; Krypton; Xenon;
      Propane; Butane; Acetylene|ethyne@Acetylene; Ethylene|ethene@Ethylene; Natural gas; LPG|liquefied petroleum gas|cooking gas@Liquefied petroleum gas; Fluorine;
      Hydrogen chloride|HCl@Hydrogen chloride; Nitric oxide|NO@Nitric oxide; Nitrogen dioxide|NO2@Nitrogen dioxide; Phosgene; Formaldehyde; Ethane; Water vapour|steam|water vapor@Water vapor;
      Chlorine dioxide; Sulfur hexafluoride|SF6; Freon|CFC|chlorofluorocarbon@Chlorofluorocarbon; Biogas|gobar gas@Biogas; Hydrogen cyanide|HCN; Phosphine; Silane; Arsine; Diborane;
      Tear gas|CS gas@CS gas; Mustard gas@Sulfur mustard; Marsh gas; Syngas|synthesis gas@Syngas; Producer gas; Coal gas; Methyl isocyanate|MIC@Methyl isocyanate; Ethylene oxide;
      Carbonyl sulfide; Vinyl chloride; Isobutane; Dimethyl ether|DME@Dimethyl ether`,
    tryhard: ['Xenon'],
    legendary: ['Methyl isocyanate'],
    facts: { 'Methyl isocyanate': 'The gas leaked in the 1984 Bhopal disaster, one of the world\'s worst industrial accidents.' },
  },
  {
    id: 'sci-acid',
    category: 'science',
    prompt: 'Name an acid',
    qualifier: 'Acids by name, with or without the word "acid"; formulas such as HCl also work',
    strip: ['acid'],
    answers: `
      Hydrochloric acid|HCl|muriatic acid|hydrochloric@Hydrochloric acid; Sulfuric acid|sulphuric acid|H2SO4|oil of vitriol@Sulfuric acid; Nitric acid|HNO3|aqua fortis@Nitric acid;
      Acetic acid|ethanoic acid|vinegar acid@Acetic acid; Citric acid@Citric acid; Lactic acid@Lactic acid; Formic acid|methanoic acid@Formic acid; Carbonic acid|H2CO3@Carbonic acid;
      Phosphoric acid@Phosphoric acid; Oxalic acid@Oxalic acid; Tartaric acid@Tartaric acid; Malic acid@Malic acid; Ascorbic acid@Vitamin C; Benzoic acid@Benzoic acid;
      Boric acid|boracic acid@Boric acid; Hydrofluoric acid|HF@Hydrofluoric acid; Hydrobromic acid|HBr@Hydrobromic acid; Hydroiodic acid|HI@Hydroiodic acid; Perchloric acid@Perchloric acid;
      Folic acid@Folate; Uric acid@Uric acid; Salicylic acid@Salicylic acid; Stearic acid@Stearic acid; Oleic acid@Oleic acid; Palmitic acid@Palmitic acid; Linoleic acid@Linoleic acid;
      Butyric acid|butanoic acid@Butyric acid; Propionic acid|propanoic acid@Propionic acid; Amino acid|amino acids@Amino acid; Nucleic acid|DNA|RNA@Nucleic acid; Fatty acid@Fatty acid;
      Hydrocyanic acid|prussic acid@Hydrogen cyanide; Chloric acid@Chloric acid; Sulfurous acid@Sulfurous acid; Nitrous acid@Nitrous acid; Hypochlorous acid@Hypochlorous acid;
      Acetylsalicylic acid|aspirin@Aspirin; Gallic acid@Gallic acid; Tannic acid|tannin@Tannic acid; Glutamic acid@Glutamic acid; Aspartic acid@Aspartic acid; Humic acid@Humic substances;
      Chromic acid@Chromic acid; Fluoroantimonic acid@Fluoroantimonic acid; Carborane acid@Carborane acid; Triflic acid|trifluoromethanesulfonic acid@Triflic acid; Gibberellic acid@Gibberellic acid;
      Abscisic acid@Abscisic acid; Hyaluronic acid@Hyaluronic acid; Glycolic acid@Glycolic acid; Sorbic acid@Sorbic acid; Succinic acid@Succinic acid; Fumaric acid@Fumaric acid`,
    tryhard: ['Fluoroantimonic acid'],
    legendary: ['Fluoroantimonic acid'],
    facts: { 'Fluoroantimonic acid': 'The strongest known superacid, around a quintillion times stronger than sulphuric acid, yet it can be stored in Teflon.' },
  },
  {
    id: 'sci-alloy',
    category: 'science',
    prompt: 'Name an alloy',
    qualifier: 'Metal mixtures, by their usual name (steel and brass count; pure metals do not)',
    strip: ['alloy'],
    answers: `
      Steel; Brass; Bronze; Stainless steel; Solder; Pewter; Amalgam@Amalgam (chemistry); Duralumin; Nichrome; Electrum; Invar; Gunmetal; Cast iron; Wrought iron;
      Sterling silver; Constantan; Monel; Inconel; Nitinol; Alnico; Magnalium; Cupronickel|cupro-nickel@Cupronickel; Hastelloy; Wood's metal|woods metal@Wood's metal; Zamak;
      Damascus steel@Damascus steel; Wootz steel|wootz@Wootz steel; Britannia metal; Nickel silver|German silver@Nickel silver; Billon@Billon (alloy); Tombac; Rose gold@Rose gold;
      White gold@White gold; Bell metal; Pot metal; Mu-metal|mu metal@Mu-metal; Permalloy; Kovar; Stellite; Babbitt metal|babbit@Babbitt (alloy); Admiralty brass@Admiralty brass;
      Panchaloha|panchdhatu|five metals@Panchaloha; Bidri|bidriware@Bidriware; Carbon steel@Carbon steel; Tool steel@Tool steel; Spring steel@Spring steel; 
      Galinstan; Field's metal@Field's metal; Rose's metal@Rose's metal; Sheffield plate@Sheffield plate; Shibuichi; Orichalcum@Orichalcum; Pinchbeck@Pinchbeck (alloy);
      Terne@Terne; Dowmetal|magnesium alloy@Magnesium alloy; Titanium alloy@Titanium alloy; Aluminium alloy|aluminum alloy@Aluminium alloy; Y alloy; Vitallium@Vitallium`,
    tryhard: ['Galinstan'],
    legendary: ['Panchaloha', 'Wootz steel'],
    facts: {
      Panchaloha: 'A five-metal alloy of copper, brass, lead, silver and gold used for temple idols in South India.',
      'Wootz steel': 'Crucible steel first made in southern India over 2,000 years ago; it later became the Damascus sword steel.',
    },
  },
  {
    id: 'sci-cloud',
    category: 'science',
    prompt: 'Name a type of cloud',
    qualifier: 'Named cloud types, including the 10 main genera and well-known special clouds',
    strip: ['cloud', 'clouds'],
    answers: `
      Cumulus@Cumulus cloud; Cirrus@Cirrus cloud; Stratus@Stratus cloud; Nimbus|rain cloud@Nimbus cloud; Cumulonimbus|thundercloud|thunderhead@Cumulonimbus cloud; Nimbostratus@Nimbostratus cloud;
      Altocumulus@Altocumulus cloud; Altostratus@Altostratus cloud; Cirrocumulus|mackerel sky@Cirrocumulus cloud; Cirrostratus@Cirrostratus cloud; Stratocumulus@Stratocumulus cloud;
      Mammatus|mammatus clouds@Mammatus cloud; Lenticular|lenticular clouds|lenticularis@Lenticular cloud; Noctilucent|noctilucent clouds|night-shining@Noctilucent cloud;
      Nacreous|mother-of-pearl|polar stratospheric cloud@Polar stratospheric cloud; Shelf cloud|arcus|arcus cloud@Arcus cloud; Roll cloud@Roll cloud; Wall cloud@Wall cloud;
      Funnel cloud@Funnel cloud; Asperitas|undulatus asperatus@Asperitas (cloud); Pileus@Pileus (meteorology); Contrail|vapour trail|vapor trail@Contrail; Pyrocumulus|fire cloud@Pyrocumulus cloud;
      Cumulus humilis|fair weather cumulus@Cumulus humilis cloud; Cumulus congestus|towering cumulus@Cumulus congestus cloud; Anvil cloud|incus@Cumulonimbus incus; Cap cloud@Cap cloud;
      Morning Glory cloud|morning glory@Morning Glory cloud; Fog@Fog; Mist@Mist; Fractus|scud@Fractus cloud; Mare's tails|mares tails|cirrus uncinus@Cirrus uncinus cloud;
      Kelvin-Helmholtz clouds|billow clouds|Kelvin Helmholtz@Kelvin–Helmholtz instability; Hole punch cloud|fallstreak hole@Fallstreak hole; Virga@Virga; Cloud street@Cloud street;
      Stratus fractus; Altocumulus castellanus; Haboob@Haboob`,
    legendary: ['Asperitas'],
    facts: { Asperitas: 'Added to the International Cloud Atlas in 2017, the first new cloud type in over 60 years.' },
  },
  {
    id: 'sci-weather',
    category: 'science',
    prompt: 'Name a weather event or phenomenon',
    qualifier: 'Weather events and atmospheric phenomena people can see or feel',
    strip: ['storm'],
    answers: `
      Rain@Rain; Snow@Snow; Hail@Hail; Sleet@Ice pellets; Fog@Fog; Mist@Mist; Thunder@Thunder; Lightning@Lightning; Tornado@Tornado; Hurricane|cyclone|typhoon@Tropical cyclone;
      Monsoon@Monsoon; Drought@Drought; Flood@Flood; Blizzard@Blizzard; Heat wave|heatwave@Heat wave; Cold wave@Cold wave; Dust storm|sandstorm@Dust storm; Haze@Haze; Frost@Frost; Dew@Dew;
      Rainbow@Rainbow; Aurora|northern lights|southern lights|aurora borealis@Aurora; Waterspout@Waterspout; Thunderstorm@Thunderstorm; Cloudburst@Cloudburst; Squall@Squall;
      El Niño|El Nino@El Niño–Southern Oscillation; La Niña|La Nina@La Niña; Western Disturbance|western disturbances@Western Disturbance; Loo|hot wind@Loo (wind);
      Ball lightning@Ball lightning; Sun dog|sundog|parhelion@Sun dog; Halo@Halo (optical phenomenon); Graupel@Graupel; Freezing rain@Freezing rain; Dust devil|whirlwind@Dust devil; Derecho@Derecho;
      Smog@Smog; Fire whirl|fire tornado@Fire whirl; Storm surge@Storm surge; St. Elmo's fire|Saint Elmo's fire@St. Elmo's fire; Sprite|red sprite@Sprite (lightning); Heat lightning@Heat lightning;
      Drizzle@Drizzle; Gale@Gale; Sea breeze@Sea breeze; Whiteout@Whiteout (weather); Black ice@Black ice; Rime@Rime ice; Hoar frost@Hoar frost; Mirage@Mirage;
      Fata Morgana@Fata Morgana (mirage); Rain shadow@Rain shadow; Chinook|foehn|Föhn wind@Foehn wind; Mistral@Mistral (wind); Sirocco@Sirocco; Bora@Bora (wind); Haboob@Haboob;
      Jet stream@Jet stream; Polar vortex@Polar vortex; Atmospheric river@Atmospheric river; Moonbow|lunar rainbow@Moonbow; Green flash@Green flash; Gustnado@Gustnado; Microburst@Microburst;
      Brinicle|ice finger of death@Brinicle; Thundersnow@Thundersnow; Heat island|urban heat island@Urban heat island`,
    tryhard: ['Gustnado'],
    legendary: ['Gustnado', 'Brinicle'],
    facts: {
      Gustnado: 'A short-lived whirl of wind at the edge of a storm, not a true tornado because it is not connected to the cloud.',
      Brinicle: 'An icicle of super-cold brine that grows underwater and freezes whatever it touches on the seabed.',
    },
  },
  {
    id: 'sci-gemstone',
    category: 'science',
    prompt: 'Name a gemstone',
    qualifier: 'Gemstones and jewellery stones, including birthstones and organic gems like pearl',
    strip: ['stone'],
    answers: `
      Diamond; Ruby; Sapphire; Emerald; Amethyst; Topaz; Opal; Pearl; Garnet; Turquoise; Aquamarine@Aquamarine (gem); Peridot; Citrine; Jade; Onyx; Agate; Lapis lazuli|lapis;
      Moonstone@Moonstone (gemstone); Tourmaline; Zircon; Tanzanite; Alexandrite; Jasper; Carnelian|cornelian; Amber; Obsidian; Spinel; Beryl; Malachite; Bloodstone|heliotrope@Heliotrope (mineral);
      Morganite; Kunzite; Iolite; Sunstone; Tiger's eye|tigers eye@Tiger's eye; Rose quartz@Rose quartz; Hessonite|gomed|gomedh@Hessonite; Chrysoberyl; Cat's eye|cats eye|lehsunia@Chatoyancy; Larimar;
      Labradorite; Tsavorite; Rhodonite; Sodalite; Fluorite; Coral|red coral|moonga@Red coral; Quartz@Quartz; Smoky quartz|smoky topaz@Smoky quartz; Bixbite|red beryl@Red beryl;
      Heliodor|golden beryl@Heliodor; Goshenite@Goshenite; Chalcedony@Chalcedony; Chrysoprase@Chrysoprase; Sardonyx@Sardonyx; Hematite@Hematite; Jet|jet stone@Jet (lignite); Ammolite@Ammolite;
      Painite@Painite; Jadeite@Jadeite; Nephrite@Nephrite; Rhodochrosite@Rhodochrosite; Kyanite@Kyanite; Andalusite@Andalusite; Apatite@Apatite; Prehnite@Prehnite; Charoite@Charoite;
      Demantoid@Andradite; Rubellite@Elbaite; Padparadscha@Padparadscha; Black opal; Fire opal; Star sapphire|star ruby@Asterism (gemology); Cubic zirconia|CZ@Cubic zirconia; Moissanite@Moissanite; Blue John@Blue John (mineral)`,
    tryhard: ['Painite'],
    legendary: ['Painite'],
    facts: { Painite: 'Once the rarest gem on Earth: only a few crystals were known until the 2000s.' },
  },
  {
    id: 'sci-rock',
    category: 'science',
    prompt: 'Name a type of rock',
    qualifier: 'Named igneous, sedimentary or metamorphic rocks (single minerals like quartz do not count)',
    strip: ['rock'],
    answers: `
      Granite; Basalt; Marble; Limestone; Sandstone; Slate; Shale; Gneiss; Schist; Quartzite; Obsidian; Pumice; Chalk; Coal; Conglomerate@Conglomerate (geology); Dolomite|dolostone@Dolostone;
      Gabbro; Diorite; Andesite; Rhyolite; Tuff; Breccia; Flint; Peridotite; Granodiorite; Syenite; Laterite; Khondalite; Charnockite; Dunite; Kimberlite; Anthracite; Travertine;
      Siltstone; Mudstone; Claystone; Phyllite; Hornfels; Serpentinite; Soapstone|steatite@Soapstone; Greywacke|graywacke@Greywacke; Arkose; Chert; Scoria; Pegmatite; Eclogite;
      Migmatite; Amphibolite; Komatiite; Tillite; Loess@Loess; Lignite|brown coal@Lignite; Bituminous coal@Bituminous coal; Oil shale@Oil shale; Evaporite@Evaporite; Coquina; Oolite|oolitic limestone@Oolite;
      Diabase|dolerite@Diabase; Trachyte; Dacite; Tephrite; Porphyry@Porphyry (geology); Basanite; Anorthosite; Norite; Pyroxenite; Monzonite; Tonalite; Mylonite; Skarn;
      Banded iron formation|BIF@Banded iron formation; Rock salt|halite rock@Halite; Bauxite@Bauxite; Ironstone@Ironstone`,
    tryhard: ['Charnockite'],
    legendary: ['Charnockite', 'Khondalite'],
    facts: {
      Charnockite: 'Named after Job Charnock, the founder of Kolkata, because his gravestone is carved from it.',
      Khondalite: 'A metamorphic rock named after the Khond people of Odisha; it is common in the Eastern Ghats.',
    },
  },
  {
    id: 'sci-mineral',
    category: 'science',
    prompt: 'Name a mineral',
    qualifier: 'Natural minerals and ores by their usual names (rocks like granite do not count)',
    strip: ['mineral'],
    answers: `
      Quartz; Feldspar; Mica; Calcite; Gypsum; Talc; Fluorite; Apatite; Orthoclase; Corundum; Topaz; Diamond; Pyrite|fool's gold|fools gold; Galena; Hematite; Magnetite; Bauxite;
      Halite|rock salt@Halite; Graphite; Cinnabar; Malachite; Azurite; Olivine; Garnet; Hornblende; Augite; Biotite; Muscovite; Dolomite@Dolomite (mineral); Siderite; Sphalerite|zinc blende@Sphalerite;
      Chalcopyrite|copper pyrite@Chalcopyrite; Cassiterite|tinstone@Cassiterite; Barite|baryte@Baryte; Beryl; Kyanite; Zircon; Rutile; Ilmenite; Monazite; Cuprite; Limonite; Magnesite; Serpentine|serpentine group@Serpentine group;
      Asbestos; Kaolinite|kaolin|china clay@Kaolinite; Bornite; Stibnite|antimonite@Stibnite; Wolframite; Uraninite|pitchblende@Uraninite; Realgar; Orpiment; Borax; Chromite; Molybdenite; Vermiculite;
      Zeolite@Zeolite; Tourmaline; Epidote; Pyroxene; Amphibole; Plagioclase; Albite; Anorthite; Spinel; Sulfur|sulphur@Sulfur; Native copper; Gold|native gold@Native gold; Silver|native silver@Native silver;
      Platinum|native platinum@Native platinum; Bismuthinite; Pentlandite; Scheelite; Fluorapatite; Wollastonite; Sillimanite; Staurolite; Andalusite; Lepidolite; Spodumene; Carnallite; Sylvite;
      Trona; Anhydrite; Celestine|celestite@Celestine (mineral); Smithsonite; Cerussite; Anglesite; Goethite; Gibbsite; Diaspore; Illite; Montmorillonite; Chlorite@Chlorite group; Brucite;
      Lazurite; Beryllonite; Thorianite; Bastnäsite|bastnasite@Bastnäsite; Cryolite; Columbite; Tantalite; Pyrolusite; Rhodochrosite; Sodalite; Perovskite@Perovskite`,
    tryhard: ['Perovskite'],
    legendary: ['Perovskite', 'Monazite'],
    facts: {
      Perovskite: 'Its crystal structure is thought to be the most common in Earth\'s deep mantle, and also powers a new kind of solar cell.',
      Monazite: 'Kerala\'s beach sands are rich in monazite, a source of thorium and rare earth elements.',
    },
  },
  {
    id: 'sci-isro-mission',
    category: 'science',
    prompt: 'Name an ISRO mission, satellite or launch vehicle',
    qualifier: 'Indian Space Research Organisation missions, satellites and rockets, including planned ones',
    answers: `
      Chandrayaan-1|Chandrayaan 1@Chandrayaan-1; Chandrayaan-2|Chandrayaan 2@Chandrayaan-2; Chandrayaan-3|Chandrayaan 3@Chandrayaan-3; Mangalyaan|Mars Orbiter Mission|MOM@Mars Orbiter Mission;
      Aditya-L1|Aditya L1|Aditya@Aditya-L1; Gaganyaan@Gaganyaan; AstroSat|Astrosat@AstroSat; Aryabhata@Aryabhata (satellite); Bhaskara@Bhaskara (satellite); Rohini@Rohini (satellite);
      APPLE|Ariane Passenger Payload Experiment@Ariane Passenger Payload Experiment; INSAT|Indian National Satellite System@Indian National Satellite System; GSAT@GSAT;
      IRS|Indian Remote Sensing@Indian Remote Sensing; Cartosat@Cartosat; Oceansat@Oceansat; RISAT|Radar Imaging Satellite@RISAT; EDUSAT@GSAT-3;
      Kalpana-1|Kalpana 1@Kalpana-1; NavIC|IRNSS@Indian Regional Navigation Satellite System; PSLV|Polar Satellite Launch Vehicle@Polar Satellite Launch Vehicle;
      GSLV|Geosynchronous Satellite Launch Vehicle@Geosynchronous Satellite Launch Vehicle; LVM3|GSLV Mk III|GSLV Mark III@LVM3; SLV|Satellite Launch Vehicle@Satellite Launch Vehicle;
      ASLV|Augmented Satellite Launch Vehicle@Augmented Satellite Launch Vehicle; SSLV|Small Satellite Launch Vehicle@Small Satellite Launch Vehicle; RLV-TD|Reusable Launch Vehicle@RLV Technology Demonstration Programme;
      Pragyan|Pragyan rover@Pragyan (rover); SROSS@Stretched Rohini Satellite Series; Megha-Tropiques@Megha-Tropiques; SARAL@SARAL;
      Youthsat; Bhuvan@Bhuvan; SpaDeX|Space Docking Experiment@SpaDeX; XPoSat|X-ray Polarimeter Satellite@XPoSat; NISAR|NASA-ISRO Synthetic Aperture Radar@NASA-ISRO Synthetic Aperture Radar;
      Shukrayaan|Venus Orbiter Mission@Venus Orbiter Mission; Mangalyaan 2|Mars Lander Mission@Mars Orbiter Mission 2; Chandrayaan-4@Chandrayaan-4; Cartosat-2; Oceansat-2; Insat-1@INSAT-1A; Insat-3D@INSAT-3D;
      Gsat-6A@GSAT-6A; Hylas; IRNSS-1A; PSLV-C37|PSLV C37; Saraswati satellite|GSAT-29@GSAT-29; Technology Experiment Satellite|TES; Sriharikota@Satish Dhawan Space Centre; Cryogenic engine|CE-20@CE-20; Vikas engine@Vikas (rocket engine)`,
    tryhard: ['SpaDeX'],
    legendary: ['APPLE'],
    facts: { APPLE: 'India\'s first experimental communication satellite (1981), carried to orbit on a bullock cart on its way to the launch pad, a famous photo.' },
  },
  {
    id: 'sci-indian-scientist',
    category: 'science',
    prompt: 'Name an Indian scientist',
    qualifier: 'Scientists, mathematicians and engineers born in India or of Indian origin (not politicians or pure inventors)',
    answers: `
      C. V. Raman|CV Raman|Chandrasekhara Venkata Raman|Raman@C. V. Raman; A. P. J. Abdul Kalam|APJ Abdul Kalam|Abdul Kalam|Kalam@A. P. J. Abdul Kalam; Homi J. Bhabha|Homi Bhabha|Bhabha@Homi J. Bhabha;
      Vikram Sarabhai|Sarabhai@Vikram Sarabhai; Satyendra Nath Bose|S. N. Bose|SN Bose|Bose@Satyendra Nath Bose; Jagadish Chandra Bose|J. C. Bose|JC Bose@Jagadish Chandra Bose;
      Srinivasa Ramanujan|Ramanujan@Srinivasa Ramanujan; Subrahmanyan Chandrasekhar|Chandrasekhar|S. Chandrasekhar@Subrahmanyan Chandrasekhar; Meghnad Saha|M. N. Saha@Meghnad Saha;
      Aryabhata@Aryabhata; Brahmagupta@Brahmagupta; Bhaskara II|Bhaskaracharya|Bhaskara@Bhāskara II; Varahamihira@Varāhamihira; Sushruta|Susruta@Sushruta; Charaka@Charaka;
      Kalpana Chawla@Kalpana Chawla; Sunita Williams@Sunita Williams; Venkatraman Ramakrishnan|Venki Ramakrishnan|Ramakrishnan@Venkatraman Ramakrishnan;
      Har Gobind Khorana|Khorana@Har Gobind Khorana; M. S. Swaminathan|MS Swaminathan|Swaminathan@M. S. Swaminathan; Verghese Kurien|Kurien@Verghese Kurien;
      Raja Ramanna@Raja Ramanna; Anil Kakodkar@Anil Kakodkar; K. Sivan|Sivan@K. Sivan; S. Somanath|Somanath@S. Somanath; G. Madhavan Nair|Madhavan Nair@G. Madhavan Nair;
      K. Radhakrishnan@K. Radhakrishnan; U. R. Rao|UR Rao@U. R. Rao; Satish Dhawan|Dhawan@Satish Dhawan; Vainu Bappu@Vainu Bappu; Jayant Narlikar|Narlikar@Jayant Narlikar;
      Birbal Sahni@Birbal Sahni; Shanti Swaroop Bhatnagar|S. S. Bhatnagar@Shanti Swaroop Bhatnagar; Prasanta Chandra Mahalanobis|P. C. Mahalanobis|Mahalanobis@Prasanta Chandra Mahalanobis;
      Salim Ali@Salim Ali; Asima Chatterjee@Asima Chatterjee; Anandibai Joshi|Anandi Gopal Joshi@Anandi Gopal Joshi; Janaki Ammal|E. K. Janaki Ammal@Janaki Ammal;
      Tessy Thomas@Tessy Thomas; Ritu Karidhal|Ritu Karidhal Srivastava@Ritu Karidhal; Nambi Narayanan@Nambi Narayanan; Mylswamy Annadurai|Annadurai@Mylswamy Annadurai;
      Gagandeep Kang@Gagandeep Kang; Ashoke Sen@Ashoke Sen; Manjul Bhargava@Manjul Bhargava; Narinder Singh Kapany|Kapany@Narinder Singh Kapany; Yellapragada Subbarow|Subbarow@Yellapragada Subbarow;
      Raj Reddy@Raj Reddy; Kamal Ranadive@Kamal Ranadive; Obaid Siddiqi@Obaid Siddiqi; C. R. Rao|C. R. Rao@Calyampudi Radhakrishna Rao; Harish-Chandra|Harish Chandra@Harish-Chandra;
      D. D. Kosambi|Kosambi@Damodar Dharmananda Kosambi; Yash Pal@Yash Pal; Bibha Chowdhuri@Bibha Chowdhuri; Sir M. Visvesvaraya|Visvesvaraya|M. Visvesvaraya@Mokshagundam Visvesvaraya`,
    legendary: ['Bibha Chowdhuri', 'Kamal Ranadive'],
    facts: {
      'Bibha Chowdhuri': 'A pioneering woman physicist who studied cosmic rays; a star was named for her after her work was rediscovered.',
      'Kamal Ranadive': 'A cell biologist who researched cancer and leprosy and helped create the Indian Women Scientists\' Association.',
    },
  },
  {
    id: 'sci-lab-equipment',
    category: 'science',
    prompt: 'Name a piece of laboratory equipment',
    qualifier: 'Apparatus found in a school or college science lab',
    strip: ['lab', 'laboratory'],
    groups: {
      textbook: 'Beaker; Test tube|test tubes; Bunsen burner|burner; Microscope; Conical flask|Erlenmeyer flask|flask; Measuring cylinder|graduated cylinder; Thermometer; Pipette; Burette; Tripod stand',
      honours: 'Petri dish|petri plate; Funnel|filter funnel; Retort stand|clamp stand|ring stand; Wire gauze; Spatula; Tongs|test tube holder; Round-bottom flask|round bottom flask; Volumetric flask|measuring flask; Dropper|dropping pipette; Glass rod|stirring rod; Test tube rack|test tube stand; Safety goggles|goggles; Lab coat|apron; Balance|weighing balance|scale; Magnifying glass|hand lens; Watch glass; Evaporating dish|china dish; Crucible; Filter paper; Litmus paper|litmus; Stopwatch; Voltmeter; Ammeter; Galvanometer; Prism; Lens; Magnet|bar magnet; Delivery tube',
      rare: 'Condenser|Liebig condenser; Centrifuge; Fume hood|fume cupboard; Autoclave; Desiccator; Separating funnel|separatory funnel; Distillation flask; Kipp\'s apparatus|Kipps apparatus; Spectrometer; pH meter; Hot plate; Magnetic stirrer; Water bath; Mortar and pestle|pestle and mortar; Pipette filler|pipette bulb; Boiling tube; Gas jar; Beehive shelf|beehive; Tripod; Clay triangle|pipe-clay triangle; Cathode ray tube; Vernier calipers|vernier caliper; Screw gauge|micrometer screw gauge; Spring balance; Wheatstone bridge|metre bridge; Rheostat; Resistance box; Tuning fork; Sonometer; Ripple tank; Dissection kit|dissecting kit; Slide|glass slide|cover slip; Haemocytometer|hemocytometer; Ph indicator|universal indicator',
      deep: 'Schlenk line; Soxhlet extractor; Rotary evaporator|rotavap; Glovebox|glove box; Cuvette; Spectrophotometer; Thiele tube; Dewar flask|Dewar; Buchner funnel|Büchner funnel; Buchner flask; Kjeldahl flask; Hydrometer; Colorimeter; Polarimeter; Van de Graaff generator; Geiger counter|Geiger-Müller counter; Oscilloscope; Cloud chamber; Gel electrophoresis|electrophoresis tank; PCR machine|thermal cycler; Vortex mixer; Micropipette; Sphygmomanometer; Clinostat',
      legendary: 'Kymograph',
    },
    facts: { Kymograph: 'A rotating drum with a pen that traced muscle contractions and heartbeats onto smoked paper in 19th-century labs.' },
  },

  // ───────────────────────────── TECH ─────────────────────────────
  {
    id: 'tech-company',
    category: 'tech',
    prompt: 'Name a technology company',
    qualifier: 'Well-known hardware, software, internet or electronics companies worldwide',
    strip: ['inc', 'corporation', 'corp', 'company'],
    answers: `
      Google@Google; Apple|Apple Inc@Apple Inc.; Microsoft@Microsoft; Amazon|Amazon.com@Amazon (company); Meta|Facebook Inc|Meta Platforms@Meta Platforms; Tesla|Tesla Inc@Tesla, Inc.;
      Nvidia|NVIDIA@Nvidia; Intel@Intel; IBM|International Business Machines@IBM; Oracle@Oracle Corporation; Adobe@Adobe Inc.; Samsung|Samsung Electronics@Samsung Electronics;
      Sony@Sony; Netflix@Netflix; Uber@Uber; Airbnb@Airbnb; Salesforce@Salesforce; Cisco@Cisco; Qualcomm@Qualcomm; AMD|Advanced Micro Devices@Advanced Micro Devices; OpenAI@OpenAI;
      Anthropic@Anthropic; Dell@Dell; HP|Hewlett-Packard@HP Inc.; Zoom@Zoom Communications; Spotify@Spotify; Twitter|X Corp@Twitter; Snap|Snapchat@Snap Inc.; Pinterest@Pinterest;
      PayPal@PayPal; Stripe@Stripe, Inc.; SpaceX@SpaceX; ByteDance@ByteDance; Tencent@Tencent; Alibaba@Alibaba Group; Baidu@Baidu; Huawei@Huawei; Xiaomi@Xiaomi; Infosys@Infosys;
      TCS|Tata Consultancy Services@Tata Consultancy Services; Wipro@Wipro; HCLTech|HCL@HCLTech; Flipkart@Flipkart; Zomato@Zomato; Swiggy@Swiggy; Paytm@Paytm; Zoho@Zoho Corporation;
      Freshworks@Freshworks; Dropbox@Dropbox; Slack@Slack (software); Palantir@Palantir Technologies; Broadcom@Broadcom Inc.; Texas Instruments@Texas Instruments; Micron@Micron Technology;
      TSMC|Taiwan Semiconductor@TSMC; ASML@ASML Holding; Arm|ARM Holdings@Arm Holdings; Lenovo@Lenovo; Asus|ASUS@Asus; Acer@Acer Inc.; LG|LG Electronics@LG Electronics;
      Panasonic@Panasonic; Toshiba@Toshiba; Nokia@Nokia; Ericsson@Ericsson; Motorola@Motorola; Atari@Atari; Nintendo@Nintendo; Epic Games@Epic Games; Roblox@Roblox Corporation; Unity@Unity Technologies;
      GitHub@GitHub; Reddit@Reddit; Yahoo@Yahoo!; Mozilla@Mozilla; Cloudflare@Cloudflare; Snowflake@Snowflake Inc.; Shopify@Shopify; Atlassian@Atlassian; Workday@Workday, Inc.;
      ServiceNow@ServiceNow; VMware@VMware; Red Hat@Red Hat; Rivian@Rivian; Waymo@Waymo; Zerodha@Zerodha; Ola|Ola Cabs@Ola Cabs; Raspberry Pi Foundation|Raspberry Pi@Raspberry Pi Foundation`,
    legendary: ['Atari'],
    facts: { Atari: 'Founded in 1972, it made Pong, then popularised video games at home; its name comes from a Go term.' },
  },
  {
    id: 'tech-smartphone-brand',
    category: 'tech',
    prompt: 'Name a smartphone or mobile phone brand',
    qualifier: 'Brands that sell or sold phones, worldwide, including past brands',
    answers: `
      Apple|iPhone@IPhone; Samsung|Galaxy@Samsung Galaxy; Xiaomi|Mi@Xiaomi; Oppo|OPPO@Oppo; Vivo|vivo@Vivo (technology company); Realme|realme@Realme; OnePlus|One Plus@OnePlus;
      Google Pixel|Pixel@Google Pixel; Motorola|Moto@Motorola Mobility; Nokia@Nokia; Huawei@Huawei; Honor@Honor (brand); Sony|Xperia@Sony Xperia; LG@LG Electronics; Lava@Lava International;
      Micromax@Micromax Informatics; Karbonn|Karbonn Mobiles@Karbonn Mobiles; Itel@Itel Mobile; Tecno@Tecno Mobile; Infinix@Infinix Mobile; iQOO|IQOO@IQOO; Nothing@Nothing (company);
      Asus|ROG Phone@Asus ROG Phone; HTC@HTC; BlackBerry@BlackBerry; Lenovo@Lenovo; Redmi@Redmi; Gionee@Gionee; Panasonic@Panasonic; Sharp|Aquos@Sharp Aquos; Fairphone@Fairphone;
      Meizu@Meizu; ZTE@ZTE; Alcatel@Alcatel Mobile; Ulefone; Intex@Intex Technologies; Coolpad@Coolpad; TCL@TCL Technology; Sony Ericsson@Sony Ericsson; Palm@Palm, Inc.;
      Blu|BLU@Blu Products; Oukitel; Cat|Caterpillar phone@Cat phone; Vertu@Vertu; Yu|YU Televentures@YU Televentures; Jio|JioPhone@JioPhone;
      Obi Worldphone|Obi@Obi Worldphone; Videocon@Videocon; Celkon@Celkon; Wiko@Wiko; Essential@Essential Products; Razer@Razer Phone; Kyocera@Kyocera; Siemens@Siemens Mobile`,
    tryhard: ['Vertu'],
    legendary: ['Vertu'],
    facts: {
      Vertu: 'A British luxury phone brand, once founded by Nokia, with handsets that cost as much as a car.',
    },
  },
  {
    id: 'tech-car-brand',
    category: 'tech',
    prompt: 'Name a car brand',
    qualifier: 'Car and SUV manufacturers or marques, worldwide, past or present',
    strip: ['motors', 'cars', 'motor'],
    answers: `
      Toyota; Honda; Ford|Ford Motor Company@Ford Motor Company; Maruti Suzuki|Maruti@Maruti Suzuki; Tata Motors|Tata@Tata Motors; Mahindra|Mahindra & Mahindra@Mahindra & Mahindra; Hyundai@Hyundai Motor Company;
      Kia@Kia; Volkswagen|VW@Volkswagen; BMW@BMW; Mercedes-Benz|Mercedes|Merc@Mercedes-Benz; Audi@Audi; Porsche@Porsche; Ferrari@Ferrari; Lamborghini@Lamborghini; Tesla@Tesla, Inc.; Nissan@Nissan;
      Renault@Renault; Skoda|Škoda@Škoda Auto; MG|MG Motor@MG Motor; Jeep@Jeep; Chevrolet|Chevy@Chevrolet; Volvo@Volvo Cars; Land Rover|Range Rover@Land Rover; Jaguar@Jaguar Cars; Mini@Mini (marque);
      Bentley@Bentley; Rolls-Royce|Rolls Royce@Rolls-Royce Motor Cars; Aston Martin@Aston Martin; McLaren@McLaren Automotive; Bugatti@Bugatti; Maserati@Maserati; Alfa Romeo@Alfa Romeo;
      Fiat@Fiat Automobiles; Peugeot@Peugeot; Citroën|Citroen@Citroën; Opel@Opel; Lexus@Lexus; Subaru@Subaru; Mazda@Mazda; Mitsubishi@Mitsubishi Motors; Suzuki@Suzuki; Isuzu@Isuzu;
      Datsun@Datsun; BYD@BYD Company; Lotus@Lotus Cars; Koenigsegg@Koenigsegg; Pagani@Pagani (company); Dodge@Dodge; Cadillac@Cadillac; Buick@Buick; Lincoln@Lincoln Motor Company;
      Chrysler@Chrysler; Ram|Ram Trucks@Ram Trucks; GMC@GMC (automobile); Rivian@Rivian; Lucid@Lucid Motors; Polestar@Polestar; Genesis@Genesis Motor; Acura@Acura; Infiniti@Infiniti;
      Force Motors|Force@Force Motors; Hindustan Motors|Hindustan|Ambassador@Hindustan Motors; Premier|Premier Automobiles@Premier Automobiles Limited; Ashok Leyland@Ashok Leyland;
      Daewoo@Daewoo; Saab@Saab Automobile; Seat|SEAT@SEAT; Cupra@Cupra (marque); Dacia@Dacia; Lancia@Lancia; Smart@Smart (automobile); Tata Nano@Tata Nano; Vauxhall@Vauxhall Motors; Holden@Holden;
      Pontiac@Pontiac (automobile); Oldsmobile@Oldsmobile; Plymouth@Plymouth (automobile); Hummer@Hummer; DeLorean@DeLorean Motor Company; Maybach@Maybach; Zeekr@Zeekr; Ola Electric@Ola Electric`,
    tryhard: ['Koenigsegg'],
    legendary: ['Premier'],
    facts: {
      Premier: 'Made the Premier Padmini, the black-and-yellow Mumbai taxi, from a licensed Fiat design.',
    },
  },
  {
    id: 'tech-car-model-india',
    category: 'tech',
    prompt: 'Name a car model sold in India',
    qualifier: 'Passenger car or SUV models sold in India now or in the past, by model name',
    answers: `
      Swift@Maruti Suzuki Swift; Alto|Maruti Alto@Maruti Suzuki Alto; WagonR|Wagon R@Maruti Suzuki Wagon R; Baleno@Suzuki Baleno (2015); Dzire|Swift Dzire@Maruti Suzuki Dzire;
      Brezza|Vitara Brezza@Maruti Suzuki Brezza; Ertiga@Suzuki Ertiga; Celerio@Maruti Suzuki Celerio; Ciaz@Maruti Suzuki Ciaz; Grand Vitara@Suzuki Vitara; Fronx@Maruti Suzuki Fronx;
      Jimny@Suzuki Jimny; Maruti 800@Maruti 800; Omni@Maruti Suzuki Omni; Gypsy@Maruti Suzuki Gypsy; Zen@Maruti Suzuki Zen; Esteem@Maruti Suzuki Esteem; S-Presso|S Presso@Maruti Suzuki S-Presso;
      Nexon@Tata Nexon; Harrier@Tata Harrier; Safari@Tata Safari; Punch@Tata Punch; Tiago@Tata Tiago; Tigor@Tata Tigor; Altroz@Tata Altroz; Nano@Tata Nano; Indica@Tata Indica;
      Sumo@Tata Sumo; Indigo@Tata Indigo; Sierra@Tata Sierra; Curvv@Tata Curvv; Thar@Mahindra Thar; Scorpio@Mahindra Scorpio; XUV700@Mahindra XUV700; Bolero@Mahindra Bolero;
      XUV300@Mahindra XUV300; Marazzo@Mahindra Marazzo; KUV100@Mahindra KUV100; Xylo@Mahindra Xylo; TUV300@Mahindra TUV300; Verito@Mahindra Verito; Logan@Mahindra Logan; Creta@Hyundai Creta;
      i20@Hyundai i20; Venue@Hyundai Venue; Verna@Hyundai Verna; Santro@Hyundai Santro; Grand i10|i10@Hyundai Grand i10; Alcazar@Hyundai Alcazar; Aura@Hyundai Aura; Tucson@Hyundai Tucson;
      Innova|Innova Crysta@Toyota Innova; Fortuner@Toyota Fortuner; Camry@Toyota Camry; Etios@Toyota Etios; Glanza@Toyota Glanza; Hyryder|Urban Cruiser Hyryder@Toyota Urban Cruiser Hyryder; City@Honda City;
      Amaze@Honda Amaze; Civic@Honda Civic; Jazz@Honda Fit; WR-V@Honda WR-V; Elevate@Honda Elevate; Accord@Honda Accord; Seltos@Kia Seltos; Sonet@Kia Sonet; Carens@Kia Carens;
      Kwid@Renault Kwid; Triber@Renault Triber; Duster@Renault Duster; Kiger@Renault Kiger; Kushaq@Škoda Kushaq; Slavia@Škoda Slavia; Octavia@Škoda Octavia; Superb@Škoda Superb; Rapid@Škoda Rapid;
      Hector@MG Hector; Windsor@MG Windsor; Astor@MG Astor; Gloster@MG Gloster; ZS EV@MG ZS EV; Ambassador@Hindustan Ambassador; Padmini@Premier Padmini; Contessa@Hindustan Contessa; Fiat 1100@Fiat 1100;
      Taigun@Volkswagen Taigun; Polo@Volkswagen Polo; Virtus@Volkswagen Virtus; Magnite@Nissan Magnite; Kicks@Nissan Kicks; Sunny@Nissan Sunny; Micra@Nissan Micra;
      Ecosport@Ford EcoSport; Endeavour@Ford Endeavour; Figo@Ford Figo; Aspire@Ford Aspire; Fiesta@Ford Fiesta; Beat@Chevrolet Beat; Spark@Chevrolet Spark; Tavera@Chevrolet Tavera; Gurkha@Force Gurkha;
      Trax|Force Trax@Force Trax; Matiz@Daewoo Matiz; Cielo@Daewoo Cielo; Qualis@Toyota Qualis; Lancer@Mitsubishi Lancer; Pajero@Mitsubishi Pajero; Aria@Tata Aria`,
    legendary: ['Contessa', 'Gypsy'],
    facts: {
      Contessa: 'A 1980s Hindustan Motors saloon, loosely based on the British Vauxhall Victor; the "Indian Muscle Car".',
      Gypsy: 'A rugged Maruti 4x4 used by the Indian Army and police for decades, built until 2018.',
    },
  },
  {
    id: 'tech-social-media',
    category: 'tech',
    prompt: 'Name a social media or messaging app',
    qualifier: 'Social networks, messaging and sharing platforms, past or present',
    answers: `
      Facebook|FB@Facebook; Instagram|Insta|IG@Instagram; WhatsApp|Whatsapp|Whats app@WhatsApp; YouTube|Youtube@YouTube; Twitter|X@Twitter; Snapchat|Snap@Snapchat; TikTok|Tik Tok@TikTok;
      LinkedIn@LinkedIn; Pinterest@Pinterest; Reddit@Reddit; Tumblr@Tumblr; Telegram@Telegram (software); Discord@Discord; Twitch@Twitch (service); Threads@Threads (social network); Bluesky@Bluesky;
      Mastodon@Mastodon (social network); Quora@Quora; Koo@Koo (social network); ShareChat@ShareChat; Moj@Moj (app); Josh@Josh (app); Vine@Vine (service); Orkut@Orkut; MySpace|Myspace@Myspace;
      Google+|Google Plus@Google+; Flickr@Flickr; Skype@Skype; Signal@Signal (software); WeChat@WeChat; Weibo|Sina Weibo@Sina Weibo; Line@Line (software); Viber@Viber; Clubhouse@Clubhouse (app);
      BeReal@BeReal; Medium@Medium (website); Goodreads@Goodreads; Behance@Behance; Hike|Hike Messenger@Hike Messenger; Vimeo@Vimeo; Truth Social@Truth Social; Gab@Gab (social network);
      Parler@Parler; VK|VKontakte@VK (service); Kik@Kik Messenger; Roposo@Roposo; Trell@Trell; Friendster@Friendster; Bebo@Bebo; Path@Path (social network);
      Periscope@Periscope (app); Musical.ly|Musically@Musical.ly; Houseparty@Houseparty; Yik Yak@Yik Yak; Ask.fm|Ask FM@Ask.fm; Foursquare@Foursquare City Guide; Meetup@Meetup; Nextdoor@Nextdoor;
      Messenger|Facebook Messenger@Facebook Messenger; Kakao Talk|KakaoTalk@KakaoTalk; Zalo@Zalo; Imo|imo@Imo (software); Threema@Threema; Element|Riot@Element (software); Lemon8@Lemon8; Rumble@Rumble (company); Substack@Substack`,
    legendary: ['Orkut', 'Friendster'],
    facts: {
      Orkut: 'Google\'s social network (2004 to 2014) was huge in India and Brazil, named after its Turkish creator Orkut Büyükkökten.',
      Friendster: 'An early social network from 2002 that had millions of users before Facebook overtook it.',
    },
  },
  {
    id: 'tech-browser',
    category: 'tech',
    prompt: 'Name a web browser',
    qualifier: 'Web browsers for computers or phones, past or present',
    strip: ['browser'],
    answers: `
      Chrome|Google Chrome@Google Chrome; Firefox|Mozilla Firefox@Firefox; Safari@Safari (web browser); Edge|Microsoft Edge@Microsoft Edge; Opera@Opera (web browser); Brave@Brave (web browser);
      Internet Explorer|IE@Internet Explorer; Netscape Navigator|Netscape@Netscape Navigator; Vivaldi@Vivaldi (web browser); Tor Browser|Tor@Tor (network); Samsung Internet@Samsung Internet;
      UC Browser|UC@UC Browser; DuckDuckGo@DuckDuckGo; Arc@Arc (web browser); Mosaic@Mosaic (web browser); Maxthon@Maxthon; Konqueror@Konqueror; Lynx@Lynx (web browser); SeaMonkey@SeaMonkey;
      Waterfox@Waterfox; Midori@Midori (web browser); Pale Moon@Pale Moon; Chromium@Chromium (web browser); Opera Mini@Opera Mini; Puffin@Puffin Browser; Yandex Browser|Yandex@Yandex Browser;
      Epic|Epic Privacy Browser@Epic (web browser); Dolphin@Dolphin Browser; K-Meleon@K-Meleon; Flock@Flock (web browser); Camino@Camino (web browser); Cốc Cốc|Coc Coc@Cốc Cốc; Torch@Torch (web browser);
      Comodo Dragon@Comodo Dragon; Galeon@Galeon; Epiphany|GNOME Web@GNOME Web; Falkon@Falkon; Ecosia@Ecosia;
      Whale|Naver Whale@Naver Whale; QQ Browser|QQ@QQ Browser; Sleipnir@Sleipnir (web browser); Rockmelt@RockMelt; Lunascape@Lunascape;
      OmniWeb@OmniWeb; Cyberdog@Cyberdog; Opera GX@Opera GX; Firefox Focus@Firefox Focus; Librewolf|LibreWolf@LibreWolf; Mullvad Browser@Mullvad Browser`,
    legendary: ['Epic', 'Mosaic'],
    facts: {
      Epic: 'A privacy-focused browser built in Bangalore by Hidden Reflex, released in 2010 and based on Chromium.',
      Mosaic: 'The 1993 browser that put images inline with text and helped make the web popular; Netscape grew out of its team.',
    },
  },
  {
    id: 'tech-operating-system',
    category: 'tech',
    prompt: 'Name an operating system or Linux distribution',
    qualifier: 'Operating systems for computers, phones and devices, plus well-known Linux distros',
    strip: ['os'],
    answers: `
      Windows|Microsoft Windows@Microsoft Windows; macOS|Mac OS|OS X|Mac OS X@MacOS; Linux@Linux; Android@Android (operating system); iOS@IOS; Ubuntu@Ubuntu; Chrome OS|ChromeOS@ChromeOS;
      Unix@Unix; MS-DOS|DOS|MSDOS@MS-DOS; Fedora@Fedora Linux; Debian@Debian; Red Hat Enterprise Linux|RHEL@Red Hat Enterprise Linux; Linux Mint|Mint@Linux Mint; Kali Linux|Kali@Kali Linux;
      Arch Linux|Arch@Arch Linux; CentOS@CentOS; FreeBSD@FreeBSD; OpenBSD@OpenBSD; NetBSD@NetBSD; Solaris@Solaris (operating system); HarmonyOS|Harmony OS@HarmonyOS; watchOS@WatchOS; tvOS@TvOS;
      iPadOS@IPadOS; Symbian@Symbian; BlackBerry OS@BlackBerry OS; Windows Phone@Windows Phone; webOS|WebOS@WebOS; Tizen@Tizen; Fire OS|FireOS@Fire OS; KaiOS@KaiOS;
      BOSS Linux|BOSS|Bharat Operating System Solutions@Bharat Operating System Solutions; Haiku@Haiku (operating system); ReactOS@ReactOS; Plan 9|Plan 9 from Bell Labs@Plan 9 from Bell Labs;
      TempleOS@TempleOS; Windows XP@Windows XP; Windows 7@Windows 7; Windows 95@Windows 95; Windows 98@Windows 98; Windows 10@Windows 10; Windows 11@Windows 11; Windows Vista@Windows Vista;
      Windows 8@Windows 8; Windows ME|Windows Millennium Edition@Windows Me; Windows NT@Windows NT; OpenSUSE|SUSE@OpenSUSE; Gentoo@Gentoo Linux; Slackware@Slackware; Raspberry Pi OS|Raspbian@Raspberry Pi OS;
      Pop!_OS|Pop OS@Pop!_OS; Zorin OS@Zorin OS; Elementary OS@Elementary OS; Manjaro@Manjaro; CP/M|CPM@CP/M; OS/2@OS/2; BeOS@BeOS; AmigaOS@AmigaOS; Palm OS@Palm OS; OpenVMS|VMS@OpenVMS; z/OS@Z/OS;
      MINIX@Minix; Qubes OS@Qubes OS; Tails@Tails (operating system); Android TV@Android TV; Wear OS@Wear OS; Fuchsia@Fuchsia (operating system); Maemo@Maemo; MeeGo@MeeGo; Sailfish OS@Sailfish OS;
      Ubuntu Touch@Ubuntu Touch; Lineage OS|LineageOS@LineageOS; GrapheneOS@GrapheneOS; Chrome OS Flex; MorphOS@MorphOS; RISC OS@RISC OS; Mac OS 9|Classic Mac OS@Classic Mac OS; Xenix@Xenix; Multics@Multics;
      Android Go@Android Go; Nothing OS@Nothing OS; HyperOS@HyperOS; MIUI@MIUI; OxygenOS@OxygenOS; ColorOS@ColorOS; One UI|OneUI@One UI`,
    legendary: ['Multics', 'BOSS Linux'],
    facts: {
      Multics: 'The 1960s time-sharing system that inspired Unix; its name was shortened to "Unix" as a pun on it.',
      'BOSS Linux': 'Bharat Operating System Solutions, a Debian-based Linux made by India\'s C-DAC for government use.',
    },
  },
  {
    id: 'tech-computer-part',
    category: 'tech',
    prompt: 'Name a part or component of a computer',
    qualifier: 'Hardware inside or attached to a desktop or laptop computer',
    answers: `
      Motherboard@Motherboard; CPU|processor|central processing unit@Central processing unit; GPU|graphics card|graphics processing unit|video card@Graphics processing unit;
      RAM|memory|random access memory@Random-access memory; Hard disk|hard drive|HDD|hard disk drive@Hard disk drive; SSD|solid state drive|solid-state drive@Solid-state drive;
      Power supply|PSU|SMPS@Power supply unit (computer); Heat sink|heatsink@Heat sink; Cabinet|computer case|tower|chassis@Computer case; Monitor|screen|display@Computer monitor;
      Keyboard@Computer keyboard; Mouse@Computer mouse; Webcam@Webcam; Speakers|computer speakers@Computer speakers; Microphone|mic@Microphone; Printer@Computer printer;
      Scanner@Image scanner; Optical drive|CD drive|DVD drive|CD-ROM@Optical disc drive; Floppy drive|floppy disk drive@Floppy disk drive; Sound card@Sound card;
      Network card|NIC|LAN card|network interface card@Network interface controller; Modem@Modem; Router@Router (computing); BIOS@BIOS; Chipset@Chipset; Cache|CPU cache@CPU cache;
      ROM|read-only memory@Read-only memory; Touchpad|trackpad@Touchpad; Joystick@Joystick; Graphics tablet|drawing tablet@Graphics tablet; Thermal paste|thermal compound@Thermal paste;
      CMOS battery@Nonvolatile BIOS memory; SATA|SATA cable@Serial ATA; PCI Express|PCIe@PCI Express; NVMe@NVM Express; Expansion card@Expansion card; USB port|USB@USB;
      HDMI port|HDMI@HDMI; Cooling fan|fan|CPU fan@Computer fan; Liquid cooler|water cooling@Computer cooling; Heat pipe@Heat pipe; Capacitor@Capacitor; Transistor@Transistor;
      Integrated circuit|chip|microchip@Integrated circuit; Bus@Bus (computing); Ethernet port|Ethernet@Ethernet; Wi-Fi card|wifi adapter@Wireless network interface controller;
      Bluetooth adapter@Bluetooth; Memory card|SD card@Secure Digital; Pen drive|USB flash drive|flash drive@USB flash drive; Docking station@Docking station; Kensington lock@Kensington Security Slot;
      TPM|Trusted Platform Module@Trusted Platform Module; ALU|Arithmetic logic unit@Arithmetic logic unit; Control unit@Control unit; Register|CPU register@Processor register; Clock|system clock@Clock rate;
      Northbridge@Northbridge (computing); Southbridge@Southbridge (computing); Jumper@Jumper (computing); DIMM@DIMM; Socket|CPU socket@CPU socket; VGA port|VGA@Video Graphics Array; DisplayPort@DisplayPort`,
    legendary: ['TPM', 'Northbridge'],
    facts: {
      TPM: 'A tiny security chip that stores encryption keys; Windows 11 made it a requirement for installation.',
      Northbridge: 'An old motherboard chip linking the CPU, RAM and graphics; its job is now built into the processor itself.',
    },
  },
  {
    id: 'tech-keyboard-key',
    category: 'tech',
    prompt: 'Name a special key on a computer keyboard',
    qualifier: 'Non-letter keys such as Enter, Shift, F-keys, arrows and modifier keys (letters and digits are not counted)',
    strip: ['key'],
    answers: `
      Enter|Return|enter key@Enter key; Shift@Shift key; Control|Ctrl@Control key; Alt|Alternate@Alt key; Escape|Esc@Escape key; Tab@Tab key; Caps Lock|CapsLock@Caps Lock; Backspace@Backspace;
      Delete|Del@Delete key; Space bar|Spacebar|Space@Space bar; Windows|Windows key|Win key@Windows key; Function|function keys|F1|F2|F5|F12@Function key; Num Lock|NumLock@Num Lock;
      Scroll Lock|ScrLk@Scroll Lock; Print Screen|PrtScn|PrtSc|PrintScreen@Print Screen; Pause|Pause Break|Break@Pause/Break key; Insert|Ins@Insert key; Home@Home key; End@End key;
      Page Up|Page Down|PgUp|PgDn@Page Up and Page Down keys; Arrow keys|arrows|cursor keys@Arrow keys; Menu key|context menu key|application key@Menu key; Command|Cmd@Command key;
      Option@Option key; Fn|Function modifier@Fn key; SysRq|System Request@Magic SysRq key; AltGr|Alt Gr@AltGr key; Compose key|Compose@Compose key; Super key|Super@Super key (keyboard button);
      Meta key|Meta@Meta key; Numeric keypad|numpad|keypad@Numeric keypad; Dead key@Dead key;
      Tilde key|backtick key|grave accent key@Backtick; Hash key|pound key@Number sign; 
      Backslash key|Backslash@Backslash; Forward slash key|slash@Slash (punctuation)`,
    tryhard: ['SysRq'],
    legendary: ['SysRq', 'Compose key'],
    facts: {
      SysRq: 'The "System Request" key, still on some keyboards from the IBM days; on Linux it can safely reboot a frozen machine.',
      'Compose key': 'Press it, then two characters to type accents, like Compose then e then \' for the letter é.',
    },
  },
  {
    id: 'tech-google-product',
    category: 'tech',
    prompt: 'Name a Google product or service',
    qualifier: 'Products and services made by Google, past or present',
    strip: ['google'],
    answers: `
      Search|Google Search@Google Search; Gmail|Google Mail@Gmail; Maps|Google Maps@Google Maps; YouTube@YouTube; Chrome|Google Chrome@Google Chrome; Android@Android (operating system);
      Drive|Google Drive@Google Drive; Docs|Google Docs@Google Docs; Sheets|Google Sheets@Google Sheets; Slides|Google Slides@Google Slides; Photos|Google Photos@Google Photos;
      Translate|Google Translate@Google Translate; Calendar|Google Calendar@Google Calendar; Meet|Google Meet@Google Meet; Pay|Google Pay|GPay@Google Pay (payment method); Play Store|Google Play|Play@Google Play;
      Assistant|Google Assistant@Google Assistant; Gemini|Bard@Gemini (chatbot); Chromecast@Chromecast; Pixel@Google Pixel; Nest|Google Nest@Google Nest; Fitbit@Fitbit; Earth|Google Earth@Google Earth;
      Classroom|Google Classroom@Google Classroom; Forms|Google Forms@Google Forms; Keep|Google Keep@Google Keep; Lens|Google Lens@Google Lens; Duo|Google Duo@Google Duo; Hangouts|Google Hangouts@Google Hangouts;
      Allo|Google Allo@Google Allo; Google+|Google Plus@Google+; Google Wave|Wave@Apache Wave; Glass|Google Glass@Google Glass; Stadia|Google Stadia@Google Stadia; Waymo@Waymo;
      Android TV@Android TV; Wear OS@Wear OS; Firebase@Firebase; Colab|Google Colab@Google Colab; Scholar|Google Scholar@Google Scholar; Books|Google Books@Google Books; News|Google News@Google News;
      Flights|Google Flights@Google Flights; Podcasts|Google Podcasts@Google Podcasts; Tasks|Google Tasks@Google Tasks; Trends|Google Trends@Google Trends;
      Analytics|Google Analytics@Google Analytics; Ads|Google Ads@Google Ads; AdSense@AdSense; Blogger@Blogger (service); Picasa@Picasa; Orkut@Orkut; Chromebook@Chromebook; Cloud|Google Cloud@Google Cloud Platform;
      Pixel Watch@Google Pixel Watch; Pixel Buds@Pixel Buds; Android Auto@Android Auto; Google Fi|Project Fi@Google Fi; Gboard@Gboard; Chrome Remote Desktop@Chrome Remote Desktop;
      Street View|Google Street View@Google Street View; Sky|Google Sky@Google Sky; Moon|Google Moon@Google Moon; Reader|Google Reader@Google Reader; Buzz|Google Buzz@Google Buzz; Talk|Google Talk@Google Talk;
      Voice|Google Voice@Google Voice; Chat|Google Chat@Google Chat; Arts & Culture|Google Arts & Culture@Google Arts & Culture; Sites|Google Sites@Google Sites; Groups|Google Groups@Google Groups;
      Domains|Google Domains@Google Domains; Wallet|Google Wallet@Google Wallet; TensorFlow@TensorFlow; Go@Go (programming language); Kotlin@Kotlin; Flutter@Flutter (software); Dart@Dart (programming language);
      DeepMind@Google DeepMind; AlphaGo@AlphaGo; Waze@Waze; Nexus|Nexus phones@Google Nexus; Daydream@Google Daydream; Cardboard@Google Cardboard; Jamboard@Jamboard; Inbox|Inbox by Gmail@Inbox by Gmail; Google Answers@Google Answers`,
    legendary: ['Google Wave', 'Inbox'],
    facts: {
      'Google Wave': 'A 2009 real-time collaboration tool that confused almost everyone and was shut down within two years.',
      Inbox: 'An experimental email app from 2014 that sorted mail into bundles; it was closed in 2019 after features moved to Gmail.',
    },
  },
  {
    id: 'tech-apple-product',
    category: 'tech',
    prompt: 'Name an Apple product, service or software',
    qualifier: 'Hardware, services and apps made by Apple Inc., past or present',
    strip: ['apple'],
    answers: `
      iPhone@IPhone; iPad@IPad; Mac|Macintosh@Mac (computer); MacBook@MacBook; MacBook Air@MacBook Air; MacBook Pro@MacBook Pro; iMac@IMac; Mac Mini|Mac mini@Mac Mini; Mac Pro@Mac Pro; Mac Studio@Mac Studio;
      Apple Watch|Watch@Apple Watch; AirPods@AirPods; Apple TV@Apple TV (device); HomePod@HomePod; iPod@IPod; iPod Nano@IPod Nano; iPod Shuffle@IPod Shuffle; iPod Touch@IPod Touch; AirTag@AirTag; Vision Pro|Apple Vision Pro@Apple Vision Pro;
      Apple Pencil@Apple Pencil; Magic Mouse@Magic Mouse; Siri@Siri; iTunes@ITunes; iCloud@ICloud; App Store@App Store (Apple); Safari@Safari (web browser); FaceTime@FaceTime;
      iMessage@IMessage; Apple Pay@Apple Pay; Apple Music@Apple Music; Apple Maps@Apple Maps; Apple Arcade@Apple Arcade; Newton|Apple Newton|MessagePad@Newton (platform); Apple I@Apple I; Apple II@Apple II;
      Lisa|Apple Lisa@Apple Lisa; iBook@IBook; PowerBook@PowerBook; eMac@EMac; Apple Card@Apple Card; Fitness+|Apple Fitness+@Apple Fitness+; Final Cut Pro@Final Cut Pro; Logic Pro@Logic Pro;
      GarageBand@GarageBand; Pages@Pages (word processor); Keynote@Keynote (presentation software); Numbers@Numbers (spreadsheet); Xcode@Xcode; Swift@Swift (programming language); AirDrop@AirDrop;
      Time Machine@Time Machine (macOS); Spotlight@Spotlight (Apple); Mac OS|macOS@MacOS; iOS@IOS; iPadOS@IPadOS; watchOS@WatchOS; tvOS@TvOS; visionOS@VisionOS; Apple Silicon|M1|M2@Apple silicon;
      Apple Pippin|Pippin@Apple Pippin; Apple Podcasts|Podcasts@Apple Podcasts; Apple News@Apple News; Apple Books|iBooks@Apple Books; Apple Wallet|Wallet@Apple Wallet; Apple TV+|Apple TV Plus@Apple TV+;
      Apple Intelligence@Apple Intelligence; Apple Store@Apple Store; AppleCare@AppleCare; AirPlay@AirPlay; AirPort|AirPort Express@AirPort; Lightning|Lightning connector@Lightning (connector);
      MagSafe@MagSafe; Thunderbolt@Thunderbolt (interface); Find My|Find My iPhone@Find My; Face ID@Face ID; Touch ID@Touch ID; Retina display|Retina@Retina display;
      QuickTime@QuickTime; HyperCard@HyperCard; ClarisWorks@ClarisWorks; Aperture@Aperture (software); iWork@IWork; iLife@ILife; iPhoto@IPhoto; iMovie@IMovie; Apple III@Apple III; Power Mac@Power Mac; Xserve@Xserve`,
    legendary: ['Apple Pippin', 'HyperCard'],
    facts: {
      'Apple Pippin': 'A 1996 games console built on Mac technology that flopped; it cost far more than rivals like the PlayStation.',
      HyperCard: 'A 1987 tool for linking "cards" with clickable buttons, which inspired early ideas behind the web.',
    },
  },
  {
    id: 'tech-microsoft-product',
    category: 'tech',
    prompt: 'Name a Microsoft product or service',
    qualifier: 'Software, hardware and services from Microsoft, past or present',
    strip: ['microsoft'],
    answers: `
      Windows|Microsoft Windows@Microsoft Windows; Office|Microsoft Office@Microsoft Office; Word|Microsoft Word@Microsoft Word; Excel|Microsoft Excel@Microsoft Excel; PowerPoint|Microsoft PowerPoint@Microsoft PowerPoint;
      Outlook|Microsoft Outlook@Microsoft Outlook; OneNote|Microsoft OneNote@Microsoft OneNote; OneDrive|Microsoft OneDrive@OneDrive; Teams|Microsoft Teams@Microsoft Teams; Edge|Microsoft Edge@Microsoft Edge;
      Bing@Microsoft Bing; Xbox@Xbox; Surface|Microsoft Surface@Microsoft Surface; Azure|Microsoft Azure@Microsoft Azure; Visual Studio@Visual Studio; VS Code|Visual Studio Code@Visual Studio Code;
      GitHub@GitHub; LinkedIn@LinkedIn; Skype@Skype; Paint|MS Paint|Microsoft Paint@Microsoft Paint; Notepad@Microsoft Notepad; Access|Microsoft Access@Microsoft Access; Publisher|Microsoft Publisher@Microsoft Publisher;
      Copilot|Microsoft Copilot@Microsoft Copilot; Minecraft@Minecraft; Internet Explorer|IE@Internet Explorer; Cortana@Cortana (virtual assistant); Zune@Zune; Kinect@Kinect; HoloLens@Microsoft HoloLens; MSN@MSN;
      Hotmail|Outlook.com@Outlook.com; Windows Phone@Windows Phone; Clippy|Office Assistant@Office Assistant; Windows Media Player@Windows Media Player; Visio|Microsoft Visio@Microsoft Visio;
      Project|Microsoft Project@Microsoft Project; SharePoint@SharePoint; Dynamics 365|Dynamics@Microsoft Dynamics 365; PowerShell@PowerShell; .NET|dotnet@.NET; TypeScript@TypeScript;
      Power BI@Microsoft Power BI; Flight Simulator|Microsoft Flight Simulator@Microsoft Flight Simulator; Solitaire|Microsoft Solitaire@Microsoft Solitaire; Minesweeper@Microsoft Minesweeper;
      Encarta|Microsoft Encarta@Encarta; Windows Defender|Microsoft Defender@Microsoft Defender Antivirus; Whiteboard|Microsoft Whiteboard@Microsoft Whiteboard; MS-DOS|DOS@MS-DOS;
      Windows Server@Windows Server; SQL Server|Microsoft SQL Server@Microsoft SQL Server; Exchange|Exchange Server@Microsoft Exchange Server; Halo@Halo (franchise); Forza@Forza; Age of Empires@Age of Empires;
      Xbox Game Pass|Game Pass@Xbox Game Pass; Xbox Live@Xbox network; Windows Live@Windows Live; Live Messenger|MSN Messenger@Windows Live Messenger; Silverlight@Microsoft Silverlight; Bob|Microsoft Bob@Microsoft Bob;
      Windows Mobile@Windows Mobile; Lumia@Microsoft Lumia; Band|Microsoft Band@Microsoft Band; Sway|Microsoft Sway@Microsoft Sway; Planner|Microsoft Planner@Microsoft Planner; To Do|Microsoft To Do@Microsoft To Do;
      Forms|Microsoft Forms@Microsoft Forms; Stream|Microsoft Stream@Microsoft Stream; Loop|Microsoft Loop@Microsoft Loop; Authenticator|Microsoft Authenticator@Microsoft Authenticator;
      Math Solver|Microsoft Math Solver@Microsoft Math Solver; Start menu|Start Menu@Start menu; Fluent|Fluent Design@Fluent Design System; Mojang@Mojang Studios; Bethesda@Bethesda Softworks; Activision@Activision Blizzard`,
    legendary: ['Bob', 'Zune'],
    facts: {
      Bob: 'A 1995 "friendly" interface with a cartoon house and talking dog helpers; it flopped within a year.',
      Zune: 'Microsoft\'s music player, launched in 2006 to rival the iPod; it was discontinued in 2012.',
    },
  },
  {
    id: 'tech-ai-chatbot',
    category: 'tech',
    prompt: 'Name an AI assistant, chatbot or AI model',
    qualifier: 'Chatbots, voice assistants and well-known AI models or image generators, past or present',
    strip: ['ai'],
    answers: `
      ChatGPT|Chat GPT@ChatGPT; Gemini|Google Gemini|Bard@Gemini (chatbot); Claude@Claude (language model); Copilot|Microsoft Copilot@Microsoft Copilot; Siri@Siri; Alexa|Amazon Alexa@Amazon Alexa;
      Google Assistant|Hey Google@Google Assistant; Cortana@Cortana (virtual assistant); Bixby@Bixby (software); Grok@Grok (chatbot); DeepSeek@DeepSeek; Perplexity|Perplexity AI@Perplexity AI; Llama|LLaMA|Meta AI@Llama (language model);
      Mistral|Le Chat|Mistral AI@Mistral AI; Ernie Bot|ERNIE|Wenxin Yiyan@Ernie Bot; Qwen|Tongyi Qianwen@Qwen; Kimi@Kimi (chatbot); Character.AI|Character AI@Character.ai; Replika@Replika;
      DALL-E|DALL·E|Dall-E|dalle@DALL-E; Midjourney@Midjourney; Stable Diffusion@Stable Diffusion; Sora@Sora (text-to-video model); ELIZA|Eliza@ELIZA;
      Watson|IBM Watson@Watson (computer); Tay|Microsoft Tay@Tay (chatbot); Cleverbot@Cleverbot; Jarvis|J.A.R.V.I.S.@J.A.R.V.I.S.; GPT-4|GPT 4@GPT-4; GPT-3|GPT 3@GPT-3;
      GPT-2|GPT 2@GPT-2; BERT@BERT (language model); AlphaGo@AlphaGo; AlphaFold@AlphaFold; Deep Blue@Deep Blue (chess computer); Firefly|Adobe Firefly@Adobe Firefly; 
      Suno@Suno AI; Whisper|OpenAI Whisper@Whisper (speech recognition system); Codex|OpenAI Codex@OpenAI Codex; Github Copilot|GitHub Copilot@GitHub Copilot;
      Alice|Yandex Alice@Alice (virtual assistant); Hound|SoundHound@SoundHound; SmarterChild@SmarterChild; A.L.I.C.E.|ALICE@Artificial Linguistic Internet Computer Entity;
      Parry|PARRY@PARRY; Gemma@Gemma (language model); Flux|FLUX.1@Flux (text-to-image model);
      Imagen@Imagen (text-to-image model); Veo@Veo (text-to-video model); Gato@Gato (DeepMind); PaLM@PaLM; LaMDA@LaMDA`,
    tryhard: ['ELIZA'],
    legendary: ['ELIZA'],
    facts: {
      ELIZA: 'A 1960s program at MIT that mimicked a therapist; people grew attached to it even though it was only matching patterns.',
    },
  },
  {
    id: 'tech-robot',
    category: 'tech',
    prompt: 'Name a famous robot',
    qualifier: 'Real or fictional robots, rovers and androids that people recognise by name',
    answers: `
      ASIMO|Asimo@ASIMO; Sophia@Sophia (robot); Roomba@Roomba; Atlas|Boston Dynamics Atlas@Atlas (robot); Spot|Boston Dynamics Spot@Spot (robot); Optimus|Tesla Bot@Optimus (robot);
      Optimus Prime@Optimus Prime; R2-D2|R2D2|R2 D2@R2-D2; C-3PO|C3PO|C 3PO@C-3PO; WALL-E|Wall-E|WALL·E@WALL-E; Robby the Robot|Robby@Robby the Robot; Terminator|T-800@T-800; Baymax@Baymax;
      Marvin the Paranoid Android|Marvin@Marvin the Paranoid Android; Data|Lt. Cmdr. Data@Data (Star Trek); HAL 9000|HAL@HAL 9000; K-9|K9@K-9 (Doctor Who); Johnny 5|Number 5|Short Circuit@Johnny 5;
      Bender|Bender Rodriguez@Bender (Futurama); Gort@Gort (The Day the Earth Stood Still); Astro Boy|Atom@Astro Boy; Doraemon@Doraemon; Chitti|Chitti the Robot@Chitti (Enthiran);
      Iron Giant|The Iron Giant@The Iron Giant; Ultron@Ultron; Vision@Vision (Marvel Comics); Tachikoma@Tachikoma; Curiosity|Curiosity rover@Curiosity (rover); Perseverance|Perseverance rover@Perseverance (rover);
      Opportunity|Opportunity rover@Opportunity (rover); Spirit|Spirit rover@Spirit (rover); Sojourner|Sojourner rover@Sojourner (rover); Pragyan|Pragyan rover@Pragyan (rover);
      Shakey|Shakey the robot@Shakey the robot; Unimate@Unimate; Pepper|SoftBank Pepper@Pepper (robot); NAO|Nao@Nao (robot); AIBO|Aibo@AIBO; Kismet@Kismet (robot); Da Vinci|da Vinci Surgical System@Da Vinci Surgical System; Daksh|DRDO Daksh@DRDO Daksh; Valkyrie|NASA Valkyrie@Valkyrie (robot); Robonaut@Robonaut; Canadarm@Canadarm;
      BigDog@BigDog; Digit|Agility Digit@Digit (robot); Ameca@Ameca (robot); Figure 01|Figure@Figure AI; Cozmo@Cozmo;
      Furby@Furby; Dalek@Dalek; Cyberman@Cyberman; Cylon@Cylon (Battlestar Galactica); Replicant@Replicant; Megatron@Megatron; Bumblebee@Bumblebee (Transformers);
      Mazinger Z|Mazinger@Mazinger Z; Gundam|RX-78-2@RX-78-2 Gundam; EVE|Eve@EVE (WALL-E); Metal Gear|Metal Gear Rex@Metal Gear; Maria|Maschinenmensch|False Maria@Maschinenmensch`,
    tryhard: ['Shakey'],
    legendary: ['Shakey', 'Chitti'],
    facts: {
      Shakey: 'Built at Stanford in the late 1960s, the first mobile robot that could reason about its own actions; it wobbled when it moved.',
      Chitti: 'The humanoid robot from the Tamil films Enthiran (2010) and 2.0, played by Rajinikanth.',
    },
  },
  {
    id: 'tech-rocket-launcher',
    category: 'tech',
    prompt: 'Name a rocket or launch vehicle',
    qualifier: 'Orbital launchers and famous rockets from any country, past or present',
    strip: ['rocket'],
    answers: `
      Saturn V|Saturn 5@Saturn V; Falcon 9@Falcon 9; Falcon Heavy@Falcon Heavy; Starship|SpaceX Starship@SpaceX Starship; Space Shuttle@Space Shuttle; Soyuz|Soyuz rocket@Soyuz (rocket family);
      Proton@Proton (rocket family); Ariane 5|Ariane V@Ariane 5; Ariane 6@Ariane 6; Atlas V|Atlas 5@Atlas V; Delta IV@Delta IV; Titan|Titan II@Titan (rocket family); Vostok@Vostok (rocket family);
      Long March|Chang Zheng@Long March (rocket family); Electron|Rocket Lab Electron@Electron (rocket); New Shepard@New Shepard; New Glenn@New Glenn; Vulcan Centaur|Vulcan@Vulcan Centaur;
      SLS|Space Launch System@Space Launch System; Energia@Energia (rocket); N1@N1 (rocket); V-2|V2@V-2 rocket; Redstone@Redstone (rocket); Vanguard@Vanguard (rocket); H-II|H2A@H-IIA; H3@H3 (rocket);
      Vega@Vega (rocket); Zenit@Zenit (rocket family); Angara@Angara (rocket family); Delta II@Delta II; PSLV|Polar Satellite Launch Vehicle@Polar Satellite Launch Vehicle;
      GSLV|Geosynchronous Satellite Launch Vehicle@Geosynchronous Satellite Launch Vehicle; LVM3|GSLV Mk III|Bahubali rocket@LVM3; SSLV|Small Satellite Launch Vehicle@Small Satellite Launch Vehicle;
      SLV|Satellite Launch Vehicle@Satellite Launch Vehicle; ASLV@Augmented Satellite Launch Vehicle; Vikram-S|Vikram S@Vikram-S; Agnibaan|Agnibaan SOrTeD@Agnikul Cosmos; Vikram-1|Vikram 1@Vikram-1;
      Ariane 1@Ariane 1; Ariane 4@Ariane 4; Sputnik rocket|R-7@R-7 Semyorka; Jupiter-C@Juno I; Juno II@Juno II; Titan IV@Titan IV; Atlas|Atlas rocket@Atlas (rocket family); Thor|Thor-Delta@Thor (rocket family);
      Scout@Scout (rocket family); Pegasus@Pegasus (rocket); Minotaur@Minotaur (rocket family); Antares@Antares (rocket); Black Arrow@Black Arrow; Blue Streak@Blue Streak (missile);
      Diamant@Diamant; Epsilon@Epsilon (rocket); Kuaizhou@Kuaizhou; Zhuque-2@Zhuque-2; LauncherOne@LauncherOne; Firefly Alpha@Firefly Alpha; Neutron@Rocket Lab Neutron; Terran 1@Terran 1;
      Falcon 1@Falcon 1; Ares I@Ares I; Ares V@Ares V; Saturn I@Saturn I; Saturn IB@Saturn IB; Mercury-Redstone@Mercury-Redstone Launch Vehicle; Gemini-Titan@Titan II GLV`,
    legendary: ['Black Arrow', 'Blue Streak'],
    facts: {
      'Black Arrow': 'Britain\'s only home-built satellite launcher; it put the Prospero satellite in orbit in 1971, then was cancelled.',
      'Blue Streak': 'A British missile that was later reused as the first stage of the European Europa rocket.',
    },
  },
  {
    id: 'tech-satellite',
    category: 'tech',
    prompt: 'Name an artificial satellite or space telescope',
    qualifier: 'Named satellites, constellations and space telescopes in orbit, past or present',
    answers: `
      Sputnik 1|Sputnik@Sputnik 1; Explorer 1@Explorer 1; Aryabhata@Aryabhata (satellite); Bhaskara@Bhaskara (satellite); Rohini@Rohini (satellite); APPLE|Ariane Passenger Payload Experiment@Ariane Passenger Payload Experiment;
      INSAT|Indian National Satellite System@Indian National Satellite System; GSAT@GSAT; IRS|Indian Remote Sensing@Indian Remote Sensing; Cartosat@Cartosat; Oceansat@Oceansat;
      RISAT@RISAT; EDUSAT@GSAT-3; Kalpana-1|Kalpana 1|Metsat@Kalpana-1; Astrosat|AstroSat@AstroSat; NavIC|IRNSS@Indian Regional Navigation Satellite System; Hubble Space Telescope|Hubble@Hubble Space Telescope;
      James Webb Space Telescope|James Webb|JWST|Webb@James Webb Space Telescope; Chandra X-ray Observatory|Chandra@Chandra X-ray Observatory; Kepler|Kepler Space Telescope@Kepler space telescope;
      Spitzer Space Telescope|Spitzer@Spitzer Space Telescope; TESS|Transiting Exoplanet Survey Satellite@Transiting Exoplanet Survey Satellite; Gaia@Gaia (spacecraft); Landsat@Landsat program; GPS|Global Positioning System@Global Positioning System;
      GLONASS@GLONASS; Galileo|Galileo satellite navigation@Galileo (satellite navigation); BeiDou|Beidou@BeiDou; Telstar@Telstar; Starlink@Starlink; Iridium@Iridium satellite constellation;
      TIROS-1|Tiros 1|TIROS@TIROS-1; Envisat@Envisat; Terra|EOS Terra@Terra (satellite); Aqua@Aqua (satellite); Compton Gamma Ray Observatory|Compton@Compton Gamma Ray Observatory; Fermi|Fermi Gamma-ray Space Telescope@Fermi Gamma-ray Space Telescope;
      Planck|Planck Space Observatory@Planck (spacecraft); Herschel|Herschel Space Observatory@Herschel Space Observatory; WMAP@Wilkinson Microwave Anisotropy Probe; COBE@Cosmic Background Explorer;
      Hipparcos@Hipparcos; Euclid@Euclid (spacecraft); XMM-Newton|XMM Newton@XMM-Newton; Swift@Swift Gamma-Ray Burst Mission; Skylab@Skylab; Mir@Mir; International Space Station|ISS@International Space Station;
      Tiangong@Tiangong space station; Vanguard 1|Vanguard@Vanguard 1; Syncom|Syncom 3@Syncom; Early Bird|Intelsat I@Intelsat I; Intelsat@Intelsat; Inmarsat@Inmarsat; Eutelsat@Eutelsat;
      Sentinel@Copernicus Programme; Meteosat@Meteosat; GOES@Geostationary Operational Environmental Satellite; Oneweb|OneWeb@OneWeb;
      Kuiper|Project Kuiper@Project Kuiper; XPoSat@XPoSat; Wide-field Infrared Survey Explorer|WISE@Wide-field Infrared Survey Explorer; Nancy Grace Roman Space Telescope|Roman@Nancy Grace Roman Space Telescope;
      CHEOPS@CHEOPS; LISA Pathfinder|LISA@LISA Pathfinder; Pixxel|Firefly Pixxel@Pixxel; Oscar 1|OSCAR 1@OSCAR 1`,
    tryhard: ['Hipparcos'],
    legendary: ['Hipparcos', 'Syncom'],
    facts: {
      Hipparcos: 'Launched in 1989, it measured the positions of over 100,000 stars with extraordinary accuracy; the word "parallax" lies behind its name.',
      Syncom: 'The 1963 Syncom 2 and 3 were the first geosynchronous satellites, and relayed live TV from the 1964 Tokyo Olympics.',
    },
  },
];
