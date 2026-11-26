module.exports = [
  {
    id: 'food-pasta',
    category: 'food',
    prompt: 'Name a type of pasta',
    qualifier: 'Pasta shapes or styles, by their usual name',
    strip: ['pasta'],
    missingTier: 'deep',
    answers: `
      Spaghetti; Penne; Fusilli|rotini@Fusilli; Farfalle|bow tie|bowtie|bow-tie pasta; Macaroni; Lasagna|lasagne; Ravioli; Tortellini;
      Linguine; Fettuccine|fettucine|fettuccini; Rigatoni; Tagliatelle; Pappardelle; Orzo|risoni; Conchiglie|shells|pasta shells;
      Gnocchi; Cannelloni; Manicotti; Ziti; Bucatini|perciatelli; Vermicelli; Capellini|angel hair|angel hair pasta;
      Orecchiette; Cavatappi; Ditalini; Tortelloni; Agnolotti; Cappelletti; Paccheri; Strozzapreti; Trofie; Gemelli;
      Radiatori; Campanelle; Casarecce; Cavatelli; Garganelli; Anelli; Stelline; Acini di pepe; Fregola|fregula;
      Malloreddus; Pici; Bigoli; Tagliolini; Mafalde|mafaldine|reginette@Mafaldine; Lumache; Calamarata; Tubetti;
      Ruote|wagon wheels|rotelle; Pastina; Corzetti; Busiate; Scialatielli; Mostaccioli; Sedanini`,
    legendary: ['Corzetti'],
    facts: { Corzetti: 'Flat Ligurian pasta coins, traditionally pressed with a carved wooden stamp.' },
  },
  {
    id: 'food-cheese',
    category: 'food',
    prompt: 'Name a type of cheese',
    qualifier: 'Named cheeses or cheese styles',
    strip: ['cheese'],
    missingTier: 'deep',
    answers: `
      Cheddar|cheddar cheese@Cheddar cheese; Mozzarella; Parmesan|Parmigiano Reggiano|Parmigiano-Reggiano@Parmigiano Reggiano; Brie;
      Camembert; Gouda|Gouda cheese@Gouda cheese; Feta; Emmental|Emmentaler|Swiss cheese|Swiss@Emmental cheese; Gruyère|Gruyere@Gruyère cheese;
      Roquefort; Gorgonzola; Stilton|Stilton cheese@Stilton cheese; Ricotta; Mascarpone; Halloumi|haloumi|squeaky cheese; Paneer|cottage cheese (Indian)@Paneer;
      Cottage cheese; Cream cheese; Monterey Jack; Colby|Colby cheese@Colby cheese; Provolone; Pecorino Romano|pecorino;
      Manchego; Edam|Edam cheese@Edam cheese; Havarti; Burrata; Taleggio|Taleggio cheese@Taleggio cheese; Fontina; Asiago|Asiago cheese@Asiago cheese;
      Comté|Comte@Comté cheese; Raclette; Reblochon; Munster|Muenster@Munster cheese; Limburger; Wensleydale|Wensleydale cheese@Wensleydale cheese;
      Red Leicester; Double Gloucester; Lancashire cheese|Lancashire; Cheshire cheese|Cheshire; Caerphilly|Caerphilly cheese@Caerphilly cheese;
      Jarlsberg|Jarlsberg cheese@Jarlsberg cheese; Leerdammer; Port Salut|Port-Salut; Boursin|Boursin cheese@Boursin cheese; Stinking Bishop|Stinking Bishop cheese@Stinking Bishop (cheese);
      Époisses|Epoisses|Époisses de Bourgogne@Époisses de Bourgogne; Pont-l'Évêque|Pont l'Eveque@Pont-l'Évêque cheese; Brillat-Savarin|Brillat-Savarin cheese@Brillat-Savarin cheese; Mimolette;
      Cantal|Cantal cheese@Cantal cheese; Beaufort|Beaufort cheese@Beaufort cheese; Queso fresco; Cotija|Cotija cheese@Cotija cheese; Oaxaca cheese|quesillo;
      Chhena|chhana|chenna; Bandel cheese|Bandel; Kalari|kalari cheese|kalari cheese|maish krej@Kalari (cheese); Graviera; Kefalotyri; Kasseri;
      Brunost|brown cheese|mysost|gjetost; Casu marzu|casu martzu; American cheese|processed cheese|cheese slices; Velveeta; Blue cheese; Goat cheese|chevre|goat's cheese|goats cheese;
      Tête de Moine|Tete de Moine; Gamonedo|Gamonedo cheese@Gamonedo cheese; Danish blue|Danablu; Cambozola`,
    tryhard: ['Casu marzu'],
    legendary: ['Bandel cheese'],
    tiers: { 'Queso fresco': 'rare' },
    facts: {
      'Casu marzu': 'A Sardinian sheep cheese that is deliberately infested with live insect larvae.',
      'Bandel cheese': 'A smoked cheese from Bandel in West Bengal, first made by Portuguese settlers in the 1600s.',
    },
  },
  {
    id: 'food-fruit',
    category: 'food',
    prompt: 'Name a fruit',
    qualifier: 'Fruits as people eat them (tomato and avocado count; vegetables like cucumber do not)',
    missingTier: 'deep',
    answers: `
      Apple; Banana; Orange@Orange (fruit); Mango; Grape; Strawberry; Pineapple; Watermelon; Papaya|pawpaw; Guava; Pomegranate|anar;
      Cherry; Peach|nectarine; Pear; Plum; Apricot; Kiwi|kiwifruit|kiwi fruit@Kiwifruit; Lemon; Lime@Lime (fruit); Grapefruit; Coconut; Lychee|litchi|lichi;
      Jackfruit; Custard apple|sitaphal|sugar apple|sweetsop@Sugar apple; Sapodilla|chikoo|chiku|sapota; Jamun|java plum|black plum@Syzygium cumini;
      Dragon fruit|pitaya|pitahaya@Pitaya; Passion fruit|passionfruit@Passion fruit; Fig|anjeer@Common fig; Date|dates@Date palm; Blueberry;
      Raspberry; Blackberry; Cranberry; Gooseberry; Amla|Indian gooseberry@Phyllanthus emblica; Mulberry; Avocado; Tomato;
      Cantaloupe; Honeydew|honeydew melon@Honeydew (melon); Muskmelon|kharbuja@Muskmelon; Tangerine; Mandarin|mandarin orange@Mandarin orange;
      Clementine; Kumquat; Persimmon; Quince; Starfruit|carambola|star fruit@Carambola; Durian; Rambutan; Mangosteen|purple mangosteen@Purple mangosteen;
      Longan; Loquat; Olive; Elderberry|elder@Sambucus; Boysenberry; Lingonberry; Cloudberry; Blackcurrant|black currant;
      Redcurrant|red currant; Huckleberry; Açaí|acai|acai berry@Açaí palm; Goji berry|goji|wolfberry@Goji; Ackee; Breadfruit; Soursop|graviola;
      Cherimoya; Feijoa; Tamarind|imli; Bael|wood apple|bel@Aegle marmelos; Kokum@Garcinia indica; Jujube|ber|Indian jujube@Jujube;
      Phalsa|falsa@Grewia asiatica; Karonda|Carissa carandas@Carissa carandas; Bilimbi@Averrhoa bilimbi; Salak|snake fruit; Noni|Morinda citrifolia@Morinda citrifolia;
      Miracle fruit|miracle berry@Synsepalum dulcificum; Yuzu; Pomelo; Bergamot orange|bergamot; Citron; Plantain|cooking banana@Cooking banana;
      Blood orange; Ugli fruit|ugli@Ugli fruit; Langsat|lanzones@Lansium parasiticum; Santol@Sandoricum koetjape; Marula; Baobab|monkey bread@Adansonia;
      Kiwano|horned melon|horned cucumber@Cucumis metuliferus; Cape gooseberry|physalis|golden berry|rasbhari@Physalis peruviana;
      Medlar|Mespilus germanica@Mespilus germanica; Damson; Greengage; Mirabelle|mirabelle plum@Mirabelle plum; Sloe|blackthorn@Prunus spinosa;
      Rose apple|jambu|wax apple@Syzygium jambos; Wood apple (elephant apple)|elephant apple|kaitha@Limonia acidissima; Sweet lime|mosambi|mausambi|musambi@Citrus limetta; Ice apple|tadgola|nungu@Borassus flabellifer`,
    tryhard: ['Tomato'],
    legendary: ['Phalsa'],
    // Editorial corrections where 60-day page views spiked or undercount everyday fruit.
    tiers: { Mango: 'textbook', Grape: 'textbook', Strawberry: 'textbook', Watermelon: 'textbook', Quince: 'rare', Fig: 'honours', Pomelo: 'rare', Breadfruit: 'rare', Soursop: 'rare', Loquat: 'rare' },
    facts: {
      Tomato: 'Botanically a berry, but cooked and taxed as a vegetable (a US court said so in 1893).',
      Phalsa: 'A small purple summer berry from India, often made into a sweet-sour sherbet.',
    },
  },
  {
    id: 'food-indian-sweet',
    category: 'food',
    prompt: 'Name an Indian sweet or dessert',
    qualifier: 'Traditional mithai and desserts from anywhere in India',
    missingTier: 'deep',
    answers: `
      Gulab jamun|gulabjamun; Rasgulla|rasagola|rosogolla|rossogolla|roshogolla@Rasgulla; Jalebi|jilebi|jilapi; Ladoo|laddu|laddoo|ladu|besan ladoo|besan laddu@Laddu;
      Barfi|burfi; Kaju katli|kaju barfi|kaju katri; Ras malai|rasmalai; Sandesh@Sandesh (confectionery); Mysore pak; Peda|pedha; Halwa|halva@Halva;
      Gajar ka halwa|gajar halwa|carrot halwa; Kheer|payesh|payasam|payasa|kheeri@Kheer; Kulfi; Shrikhand; Modak; Soan papdi|son papdi|patisa;
      Motichoor ladoo|motichoor laddu@Motichoor laddu; Cham cham|chomchom; Mishti doi; Malpua; Ghevar; Imarti|jangiri|jaangiri;
      Balushahi|badusha; Petha|agra petha; Kalakand; Rabri|rabdi; Phirni|firni; Basundi; Puran poli|holige|obbattu|bobbatlu@Puran poli; Unniyappam;
      Adhirasam|anarsa|ariselu@Anarsa; Double ka meetha|shahi tukda|shahi tukra; Qubani ka meetha; Sheer khurma|sheer korma; Chikki; Gajak; Rewari|revdi; Sohan halwa;
      Dharwad peda; Chiroti; Kesari bath|kesari|rava kesari|sheera|sooji halwa@Kesari; Shakarpara|shankarpali; Kozhukattai|kozhukkattai;
      Pootharekulu|putharekulu; Khaja; Falooda|faluda; Lassi; Mohanthal; Sutar feni|feni (sweet)|pheni@Feni (dessert); Bebinca|bibik;
      Dodol; Patishapta; Lyangcha|langcha; Pantua; Sitabhog; Parwal ki mithai; Gujiya|karanji|gujia; Thekua; Malai chop; Elaneer payasam;
      Ada pradhaman|ada payasam; Mawa cake; Kulfi falooda; Boondi|sweet boondi; Sweet pongal|sakkarai pongal|chakkara pongali|chakkarai pongal@Pongal (dish); Palkova|paalkova|palgova`,
    tryhard: ['Lassi'],
    legendary: ['Chiroti'],
    facts: {
      'Mysore pak': 'Created in the royal kitchen of the Mysore Palace in Karnataka.',
      Chiroti: 'A flaky, layered Karnataka sweet, traditionally made for weddings.',
      Lassi: 'A yogurt drink (sweet or salted) rather than a dessert, though sweet lassi often ends a meal.',
    },
  },
  {
    id: 'food-spice',
    category: 'food',
    prompt: 'Name a spice',
    qualifier: 'Single spices or well-known spice blends',
    missingTier: 'deep',
    answers: `
      Turmeric|haldi; Cumin|jeera; Coriander|dhania|cilantro seed; Cardamom|elaichi|green cardamom; Cinnamon|dalchini; Clove|cloves|laung;
      Black pepper|pepper|kali mirch|peppercorn|white pepper; Chili powder|chilli powder|red chilli|lal mirch|chili@Chili powder; Ginger|adrak|dry ginger|saunth; Garlic|lahsun;
      Nutmeg|jaiphal|mace|javitri; Saffron|kesar; Fenugreek|methi; Mustard seed|mustard|rai|sarson; Fennel|saunf|fennel seed;
      Star anise; Anise|aniseed; Bay leaf|tej patta|bay leaves; Asafoetida|hing; Paprika; Cayenne pepper|cayenne; Allspice|pimento;
      Vanilla; Sumac; Caraway|caraway seed; Shahi jeera|black cumin seed|Bunium persicum@Bunium persicum; Ajwain|carom|carom seeds|bishop's weed; Nigella|kalonji|nigella seed|black cumin@Nigella sativa;
      Amchur|amchoor|mango powder|dried mango powder@Amchoor; Black cardamom|badi elaichi; Long pepper|pippali|pipli; Sichuan pepper|Szechuan pepper;
      Juniper berry|juniper; Galangal; Garam masala; Chaat masala; Curry powder; Five-spice powder|five spice|Chinese five spice@Five-spice powder;
      Ras el hanout; Za'atar|zaatar; Baharat; Celery seed; Dill seed|dill; Poppy seed|khus khus|khaskhas; Sesame|sesame seed|til;
      Pink peppercorn; Grains of paradise; Mahleb|mahlab; Annatto|achiote; Kashmiri chilli|Kashmiri mirch|Kashmiri red chilli@Kashmiri chilli;
      Stone flower|kalpasi|dagad phool@Parmotrema perlatum; Marathi moggu|kapok bud; Kokum; Tamarind;
      Sambar powder|sambar masala; Rasam powder|rasam masala; Pav bhaji masala; Tandoori masala; Curry leaf|curry leaves|kadi patta|kari patta@Curry tree`,
    legendary: ['Stone flower'],
    // Seed spices resolve to their plants' articles, and blends have none, so these are set by hand.
    tiers: { 'Celery seed': 'rare', 'Dill seed': 'rare', 'Sambar powder': 'honours', 'Rasam powder': 'rare', 'Pav bhaji masala': 'rare', 'Tandoori masala': 'rare', 'Curry leaf': 'honours', 'Shahi jeera': 'rare' },
    facts: { 'Stone flower': 'Kalpasi is actually a lichen, used in Chettinad and Bisi Bele Bath spice mixes.' },
  },
];
