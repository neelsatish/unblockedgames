module.exports = [
  {
    id: 'food-vegetable',
    category: 'food',
    prompt: 'Name a vegetable',
    qualifier: 'Anything cooked or eaten as a vegetable (tomato, cucumber and mushroom count)',
    answers: `
      Potato|aloo; Onion|pyaz|kanda; Tomato|tamatar; Carrot|gajar; Cabbage|patta gobhi; Cauliflower|gobi|phool gobhi; Spinach|palak; Brinjal|eggplant|aubergine|baingan@Eggplant;
      Okra|ladies finger|lady finger|ladyfinger|bhindi; Cucumber|kheera|kakdi; Capsicum|bell pepper|sweet pepper|shimla mirch@Bell pepper; Peas|green peas|pea|matar@Pea;
      Pumpkin|kaddu; Broccoli; Beetroot|beet|chukandar; Radish|mooli; Garlic|lahsun; Ginger|adrak; Green beans|French beans|string beans|beans@Green bean; Lettuce; Celery;
      Corn|sweet corn|sweetcorn|bhutta@Sweet corn; Sweet potato|shakarkandi; Zucchini|courgette; Bottle gourd|lauki|dudhi|calabash@Calabash;
      Bitter gourd|karela|bitter melon|hagalakai@Momordica charantia; Ridge gourd|turai|tori|luffa@Luffa; Snake gourd|padwal@Trichosanthes cucumerina;
      Ash gourd|winter melon|wax gourd|petha@Wax gourd; Ivy gourd|tindora|tondli|kundru|kovakkai@Coccinia grandis; Pointed gourd|parwal|parval@Trichosanthes dioica;
      Drumstick|moringa|murungakkai|nuggekai@Moringa oleifera; Cluster beans|guar|gawar@Guar; Yam@Yam (vegetable); Elephant foot yam|suran|jimikand@Amorphophallus paeoniifolius;
      Taro|arbi|colocasia; Cassava|tapioca|kappa; Plantain|raw banana|cooking banana@Cooking banana; Kale; Leek; Asparagus; Artichoke|globe artichoke;
      Brussels sprouts|brussel sprouts|brussels sprout@Brussels sprout; Turnip|shalgam; Parsnip; Spring onion|scallion|green onion@Scallion; Shallot; Mushroom;
      Methi|fenugreek leaves|fenugreek@Fenugreek; Amaranth leaves|chaulai|harive|thotakura|rajgira leaves@Amaranth; Mustard greens|sarson|sarson ka saag@Brassica juncea;
      Chilli|green chilli|chili|chili pepper|hari mirch@Chili pepper; Lotus stem|lotus root|kamal kakdi|nadru@Nelumbo nucifera; Kohlrabi|knol khol|ganth gobhi;
      Bok choy|pak choi|pak choy; Chinese cabbage|napa cabbage@Napa cabbage; Red cabbage; Rhubarb; Fennel|fennel bulb; Swiss chard|chard; Watercress;
      Arugula|rocket|rucola@Eruca vesicaria; Endive; Radicchio; Jerusalem artichoke|sunchoke; Celeriac; Rutabaga|swede; Edamame;
      Water chestnut|Chinese water chestnut@Eleocharis dulcis; Water caltrop|singhara|singhada@Water caltrop; Broad beans|fava beans|fava bean|broad bean@Vicia faba;
      Chayote|chow chow|Bangalore brinjal|seeme badanekai@Chayote; Bamboo shoot|bamboo shoots@Bamboo shoot; Purple yam|ube@Dioscorea alata; Snow peas|mangetout|snow pea@Snow pea;
      Butternut squash; Romanesco|Romanesco broccoli@Romanesco broccoli`,
    tryhard: ['Tomato'],
    legendary: ['Romanesco'],
    facts: {
      Tomato: 'Botanically a fruit, but cooked and eaten as a vegetable.',
      Romanesco: 'A lime-green cabbage relative whose spiky florets grow in a natural spiral pattern.',
    },
  },
  {
    id: 'food-indian-bread',
    category: 'food',
    prompt: 'Name an Indian bread',
    qualifier: 'Rotis, flatbreads and other breads from Indian cuisine',
    answers: `
      Roti|chapati|chapatti|phulka|fulka@Chapati; Naan|nan; Paratha|parantha|parotha; Parotta|Kerala parotta|Malabar parotta|porotta|barotta@Parotta; Puri|poori@Puri (food);
      Bhatura|bhature|batura; Kulcha; Rumali roti|roomali roti; Missi roti; Makki di roti|makki ki roti; Thepla|methi thepla; Bhakri; Jolada rotti|jowar roti|jolada roti|jowar bhakri@Jolada rotti;
      Akki rotti|akki roti; Thalipeeth; Luchi; Pav|pao|ladi pav; Bakarkhani|bakar khani; Sheermal|shirmal; Taftan@Taftan (bread); Puran poli|holige|obbattu|bobbatlu;
      Litti|litti chokha@Litti (dish); Baati|bati|dal baati@Dal baati; Pathiri|ari pathiri; Sel roti; Khakhra; Kachori|kachauri; Appam|palappam; Tandoori roti; Ragi rotti|ragi roti`,
    legendary: ['Bakarkhani'],
    tiers: { Pav: 'honours', 'Missi roti': 'rare' },
    facts: { Bakarkhani: 'A thick, layered, biscuit-like bread, famous in Hyderabad and Old Dhaka.' },
  },
  {
    id: 'food-south-indian',
    category: 'food',
    prompt: 'Name a South Indian dish',
    qualifier: 'Dishes, snacks and sweets from Karnataka, Kerala, Tamil Nadu, Andhra Pradesh or Telangana',
    answers: `
      Dosa|dosai|dose@Dosa (food); Masala dosa|masale dose; Idli|idly|iddli; Vada|vadai|vade@Vada (food); Medu vada|medhu vadai|uddina vade; Sambar|sambhar|huli@Sambar (dish); Rasam|saaru|chaaru@Rasam (dish);
      Upma|uppittu|uppuma; Pongal|ven pongal|khara pongal@Pongal (dish); Uttapam|uthappam|oothappam; Appam|aappam|palappam; Puttu; Idiyappam|string hoppers|idiappam|nool puttu|shavige;
      Bisi bele bath|bisibelebath|bisi bele bhath; Pesarattu; Avial|aviyal; Thoran; Kootu; Poriyal; Kuzhambu|kulambu; Neer dosa|neer dose; Rava idli;
      Ragi mudde|ragi ball|mudde; Curd rice|thayir sadam|mosaru anna|daddojanam; Puliyogare|tamarind rice|puliodarai|pulihora; Lemon rice|chitranna;
      Chettinad chicken|chicken chettinad@Chicken Chettinad; Hyderabadi biryani; Haleem|Hyderabadi haleem; Paniyaram|kuzhi paniyaram|guliyappa|paddu;
      Pazham pori|ethakka appam|banana fritters; Kozhukattai|kozhukkattai|kozhukatta@Kozhukkatta; Murukku|chakli; Banana chips; Mysore pak; Dharwad peda; Chiroti; Pootharekulu|putharekulu;
      Payasam|payasa|kheer@Kheer; Unniyappam; Ada pradhaman|ada payasam; Mirchi ka salan; Double ka meetha|shahi tukda; Kothu parotta|kottu parotta; Parotta|Kerala parotta|porotta;
      Chicken 65; Maddur vada|maddur vade; Goli baje|Mangalore bajji|goli bajji|goli bajje@Mangalore bajji; Mangalore buns|banana buns; Bonda|Mysore bonda@Bonda (snack);
      Sadya|sadhya|onasadya; Kesari bath|kesari|rava kesari|kesari bhath@Kesari bat; Akki rotti|akki roti; Benne dosa|benne dose|Davangere benne dose; Sevai|santhakai`,
    legendary: ['Maddur vada'],
    facts: { 'Maddur vada': 'A crisp onion vada named after Maddur, a town between Bangalore and Mysore.' },
  },
  {
    id: 'food-indian-street',
    category: 'food',
    prompt: 'Name an Indian street food',
    qualifier: 'Chaats and snacks sold by street vendors and stalls in India',
    answers: `
      Pani puri|golgappa|gol gappa|puchka|phuchka|gupchup|pani poori|panipuri@Panipuri; Bhel puri|bhelpuri|bhel|churumuri|churmuri; Sev puri|sevpuri|dahi puri;
      Pav bhaji|pao bhaji; Vada pav|vada pao|wada pav|wada pao; Samosa; Aloo tikki|tikki|aloo tikki chaat; Chole bhature|chole bhatura|chhole bhature; Dabeli|kutchi dabeli;
      Kachori|kachauri|raj kachori; Pakora|pakoda|bhajji|bhaji|bajji|pakode|kanda bhaji|onion pakoda@Pakora; Momo|momos@Momo (food); Kathi roll|kati roll|frankie|egg roll@Kati roll; Jalebi|jilebi;
      Papdi chaat|papri chaat; Dahi vada|dahi bhalla|dahi vade|thayir vadai; Ragda pattice|ragda patties|ragda; Misal pav|misal; Aloo chaat;
      Sabudana vada; Batata vada|aloo bonda; Mirchi bajji|mirchi bhajji|mirchi vada; Gobi manchurian|gobi manchuri|gobhi manchurian; Litti chokha; Jhalmuri|jhal muri;
      Ghugni; Dhokla; Khandvi@Khandvi (food); Fafda; Bread pakora; Masala puri; Goli baje|Mangalore bajji|goli bajji|goli bajje@Mangalore bajji; Bun maska; Keema pav; Seekh kebab|seekh kabab; Galouti kebab|galawati kebab;
      Kulfi; Falooda|faluda; Shawarma; Bombay sandwich|Bombay masala sandwich|masala sandwich; Egg bhurji|anda bhurji|akuri@Egg bhurji; Medu vada; Bonda|Mysore bonda@Bonda (snack); Ram ladoo|ram laddu;
      Chana jor garam`,
    legendary: ['Ghugni'],
    tiers: { 'Bun maska': 'rare', 'Keema pav': 'rare', 'Ram ladoo': 'deep', 'Chana jor garam': 'deep' },
    facts: { Ghugni: 'A spicy dried-pea curry sold from street carts across Bengal and Odisha.' },
  },
  {
    id: 'food-curry',
    category: 'food',
    prompt: 'Name an Indian curry',
    qualifier: 'Named curries and gravy dishes from Indian cuisine',
    strip: ['curry'],
    answers: `
      Butter chicken|murgh makhani|chicken makhani; Chicken tikka masala; Palak paneer|saag paneer; Paneer butter masala|paneer makhani|paneer makhanwala@Paneer makhani;
      Shahi paneer; Kadai paneer|kadhai paneer|karahi paneer; Matar paneer|mutter paneer; Chana masala|chole|chhole|channa masala|chickpea curry|pindi chole; Rajma|rajma chawal|rajma masala;
      Dal makhani|maa ki dal|kaali dal; Dal|daal|dhal|dal tadka|dal fry; Aloo gobi; Baingan bharta|bharta|baingan ka bharta; Malai kofta;
      Korma|qorma|kurma|navratan korma|navratna korma; Rogan josh|roghan josh; Vindaloo|vindalho; Kadhi|kadhi pakora|kadi; Chicken Chettinad|chettinad chicken; Sambar|sambhar@Sambar (dish);
      Avial|aviyal; Kootu; Kuzhambu|kulambu; Keema|kheema|keema matar|qeema; Nihari; Sarson da saag|sarson ka saag|saag; Paya@Paya (food); Laal maas|lal maas;
      Gatte ki sabzi|gatte ki sabji|gatte; Dum aloo|aloo dum; Undhiyu; Xacuti; Sorpotel; Cafreal|chicken cafreal; Machher jhol|macher jhol|maacher jhol|fish jhol;
      Chingri malai curry|chingri malaikari|prawn malai curry; Shorshe ilish|shorshe ilish; Chicken curry; Egg curry|anda curry; Jalfrezi|chicken jalfrezi; Dopiaza|do pyaza;
      Pasanda; Dhansak; Mirchi ka salan|salan; Baghara baingan|bagara baingan|baghare baingan; Phaal|phall; Madras curry|madras; Moilee|meen moilee|fish molee;
      Kaalan|kalan; Olan@Olan (dish); Erissery; Pulissery|moru curry; Theeyal; Aloo matar|aloo mutter; Mutton curry|kosha mangsho; Fish curry`,
    legendary: ['Xacuti'],
    tiers: { 'Gatte ki sabzi': 'rare', 'Egg curry': 'honours', Moilee: 'rare', 'Fish curry': 'honours' },
    facts: { Xacuti: 'A Goan curry made with roasted grated coconut and a long list of dry-roasted spices.' },
  },
  {
    id: 'food-rice-dish',
    category: 'food',
    prompt: 'Name a rice dish',
    qualifier: 'Named rice dishes from anywhere in the world',
    strip: ['rice'],
    answers: `
      Biryani|biriyani|briyani; Pulao|pilaf|pilau|pulav|plov@Pilaf; Fried rice; Risotto; Paella; Jambalaya; Sushi; Khichdi|khichri|kitchari|khichuri; Curd rice|thayir sadam|mosaru anna;
      Lemon rice|chitranna@Chitranna; Bisi bele bath|bisibelebath|bisi bele bhath; Pongal|ven pongal@Pongal (dish); Jeera rice|zeera rice; Puliyogare|tamarind rice|pulihora|puliodarai@Pulihora;
      Kheer|payasam|chawal ki kheer; Rice pudding; Onigiri|rice ball; Nasi goreng; Nasi lemak; Bibimbap; Gimbap|kimbap; Arroz con pollo; Congee|kanji|jook|rice porridge;
      Donburi; Katsudon; Gyudon; Oyakodon; Omurice; Arancini; Jollof rice|jollof; Gallo pinto; Hainanese chicken rice|chicken rice; Claypot rice; Zongzi; Tahdig; Maqluba|maqlooba;
      Kabsa; Mandi@Mandi (food); Kedgeree; Dirty rice; Hoppin' John|hoppin john; Coconut rice; Mango sticky rice; Nasi campur; Supplì|suppli; Tehri|tahri|tehari@Tehri (dish);
      Pakhala|panta bhat|poita bhat; Hyderabadi biryani; Vangi bath; Ghee rice|neychoru; Idli; Dosa@Dosa (food); Rice and beans; Mujaddara; Chelow kabab; Spanish rice`,
    tryhard: ['Sushi'],
    tiers: { 'Vangi bath': 'rare' },
    legendary: ['Tahdig'],
    facts: { Tahdig: 'The crispy golden crust of rice scraped from the bottom of the pot in Persian cooking.' },
  },
  {
    id: 'food-japanese',
    category: 'food',
    prompt: 'Name a Japanese dish',
    qualifier: 'Dishes, snacks and sweets from Japanese cuisine',
    answers: `
      Sushi|maki|nigiri|makizushi|inari|inarizushi|chirashi|chirashizushi; Ramen; Tempura; Sashimi; Udon; Soba|zaru soba; Miso soup; Teriyaki; Yakitori; Takoyaki; Okonomiyaki; Onigiri|rice ball; Bento|bento box;
      Tonkatsu|katsu; Japanese curry|katsu curry|kare raisu|curry rice; Gyoza|gyōza; Mochi; Dorayaki; Edamame; Sukiyaki; Shabu-shabu|shabu shabu; Unagi;
      Donburi; Katsudon; Gyudon; Oyakodon; Tamagoyaki; Natto|nattō@Nattō; Karaage|kara-age; Yakisoba; Omurice; Chawanmushi; Nikujaga; Oden; Taiyaki; Dango; Daifuku;
      Tsukemen; Melon pan|melonpan; Kakigori|kakigōri|shaved ice@Kakigōri; Senbei|rice crackers; Ochazuke; Monjayaki; Nabemono|nabe|hot pot; Chankonabe|chanko nabe|chanko;
      Fugu|pufferfish; Yakiniku; Tamago kake gohan|TKG; Hiyashi chuka; Tonkotsu ramen; Wagashi; Castella; Imagawayaki; Kushikatsu; Katsu sando|katsu sandwich@Katsu sando;
      Agedashi tofu; Mentaiko; Umeboshi; Tsukemono; Matcha ice cream|green tea ice cream@Green tea ice cream`,
    tryhard: ['Fugu'],
    legendary: ['Chankonabe'],
    facts: {
      Chankonabe: 'A protein-packed hotpot that sumo wrestlers eat in large amounts to gain weight.',
      Fugu: 'Pufferfish, which can be deadly if badly prepared; chefs need a special licence to serve it.',
    },
  },
  {
    id: 'food-chinese',
    category: 'food',
    prompt: 'Name a Chinese dish',
    qualifier: 'Chinese dishes, including Indo-Chinese and American-Chinese favourites',
    answers: `
      Fried rice; Chow mein|chowmein|hakka noodles; Spring roll|spring rolls; Dim sum; Jiaozi|Chinese dumplings|dumplings|potstickers; Wonton|wontons|wanton; Baozi|bao|steamed bun;
      Xiaolongbao|soup dumplings|xiao long bao; Kung Pao chicken|kung pao|gong bao chicken; Sweet and sour pork|sweet and sour chicken|sweet and sour; Peking duck|Beijing duck;
      Mapo tofu; Hot and sour soup; Manchow soup|manchow; Manchurian|gobi manchurian|chicken manchurian|veg manchurian@Manchurian (dish); Chilli chicken|chili chicken;
      Chop suey|American chop suey; Egg foo young|egg foo yung; Hot pot|Chinese hot pot|huoguo; Congee|jook; Char siu; General Tso's chicken|general tso; Orange chicken;
      Dan dan noodles|dandan noodles; Zhajiangmian; Lo mein; Chow fun|ho fun; Mooncake|moon cake; Egg tart|dan tat; Century egg|thousand-year egg; Tea egg; Zongzi; Tangyuan;
      Red braised pork belly|hong shao rou; Dongpo pork; Lamian|Lanzhou noodles|hand-pulled noodles; Rice noodle roll|cheung fun; Shumai|siu mai|shaomai; Har gow;
      Twice cooked pork; Fortune cookie; Stinky tofu; Scallion pancake|cong you bing|spring onion pancake@Cong you bing; Jianbing; Youtiao; Sesame chicken; Lemon chicken; Beggar's chicken|beggars chicken;
      Char siu bao|cha siu bao; Mongolian beef; White cut chicken; Steamed fish; Lion's head|lions head meatballs@Lion's Head (food)`,
    tryhard: ['Fortune cookie'],
    legendary: ["Beggar's chicken"],
    facts: {
      "Beggar's chicken": 'Chicken wrapped in lotus leaves and clay, then baked; legend says a beggar invented it.',
      'Fortune cookie': 'Invented in the United States and almost unknown in China itself.',
    },
  },
  {
    id: 'food-mexican',
    category: 'food',
    prompt: 'Name a Mexican dish',
    qualifier: 'Dishes, snacks and drinks from Mexican cuisine (Tex-Mex counts)',
    answers: `
      Taco|tacos; Burrito|burritos; Nachos; Quesadilla; Enchilada|enchiladas; Guacamole; Salsa@Salsa (sauce); Tortilla; Fajita|fajitas; Chimichanga; Tamale|tamales|tamal;
      Churro|churros; Tostada@Tostada (tortilla); Mole|mole poblano@Mole (sauce); Pozole|posole; Chilaquiles; Elote|Mexican street corn; Huevos rancheros; Refried beans|frijoles refritos;
      Pico de gallo; Tres leches cake|tres leches; Flan|creme caramel@Crème caramel; Sopaipilla|sopapilla; Carnitas; Al pastor|tacos al pastor; Barbacoa; Birria; Cochinita pibil; Chiles en nogada;
      Chile relleno|chiles rellenos; Menudo@Menudo (soup); Sope|sopes@Sope (food); Gordita|gorditas; Taquito|taquitos|flautas; Tlayuda; Torta; Chalupa; Empanada|empanadas;
      Horchata; Agua fresca; Chili con carne|chili; Frijoles charros; Huitlacoche|corn smut; Pan dulce; Concha@Concha (bread); Tortilla chips; Queso fundido; Champurrado;
 Mole de olla; Esquites; Sopa de lima; Pambazo; Molletes; Aguachile; Carne asada; Tortilla soup|sopa de tortilla; Jarritos; Cajeta; Atole; Picadillo`,
    legendary: ['Huitlacoche'],
    facts: { Huitlacoche: 'A fungus that grows on corn cobs, prized in Mexico as a delicacy.' },
  },
  {
    id: 'food-italian',
    category: 'food',
    prompt: 'Name an Italian dish that is not pasta',
    qualifier: 'Italian dishes, breads, snacks and desserts (pasta shapes and gnocchi do not count)',
    answers: `
      Pizza; Risotto; Tiramisu|tiramisù; Gelato; Bruschetta; Focaccia; Panna cotta; Cannoli|cannolo; Calzone; Arancini|arancina; Caprese salad|insalata caprese|caprese;
      Minestrone; Osso buco|ossobuco; Polenta; Ciabatta; Panettone; Biscotti|cantucci; Carpaccio; Prosciutto; Salami; Pesto; Saltimbocca; Parmigiana|eggplant parmesan|melanzane alla parmigiana;
      Vitello tonnato; Ribollita; Panzanella; Affogato; Zabaglione|zabaione; Semifreddo; Granita; Cassata; Sfogliatella|sfogliatelle; Zeppole|zeppola; Pandoro; Grissini|breadsticks|breadstick;
      Piadina; Frittata; Supplì|suppli; Porchetta; Bistecca alla fiorentina|Florentine steak; Pizza Margherita|margherita; Amaretti|amaretti di saronno@Amaretti di Saronno; Torrone;
      Olive all'ascolana|olive ascolane; Caponata; Bagna càuda|bagna cauda; Fritto misto; Crostini; Antipasto; Maritozzo|maritozzi; Bombolone|bomboloni; Torta caprese; Pizzelle;
      Cotoletta|cotoletta alla milanese|Milanese cutlet; Panino|panini; Stromboli@Stromboli (food); Spumoni; Chicken parmigiana|chicken parmesan|chicken parm; Cacciatore|chicken cacciatore;
 Burrata; Mozzarella in carrozza; Pizza al taglio; Farinata; Gianduja|gianduia@Gianduja (chocolate)`,
    legendary: ['Vitello tonnato'],
    facts: { 'Vitello tonnato': 'Cold sliced veal served under a creamy tuna sauce, from Piedmont.' },
  },
  {
    id: 'food-cake',
    category: 'food',
    prompt: 'Name a type of cake',
    qualifier: 'Named cakes from anywhere in the world',
    strip: ['cake'],
    answers: `
      Chocolate cake; Black Forest cake|black forest|black forest gateau|Schwarzwälder Kirschtorte@Black Forest gateau; Red velvet cake|red velvet; Cheesecake; Carrot cake; Pound cake;
      Sponge cake|Victoria sponge|Victoria sandwich|Victoria sponge cake; Fruitcake|fruit cake; Plum cake; Pineapple upside-down cake|pineapple cake|upside-down cake; Angel food cake; Chiffon cake;
      Swiss roll|jelly roll|cake roll; Tres leches cake|tres leches; Tiramisu; Sachertorte|Sacher torte|sacher; Battenberg cake|battenberg; Molten chocolate cake|lava cake|choco lava|chocolate lava cake;
      Cupcake|fairy cake; Opera cake; Madeleine@Madeleine (cake); Bundt cake; Baumkuchen; Christmas cake; Simnel cake; Dundee cake; Coffee and walnut cake|coffee cake|coffee walnut cake; Marble cake; Genoise|génoise;
      Dobos torte|dobos; Mawa cake; Butter cake; Castella; Mooncake|moon cake; Ice cream cake; Pavlova; Lamington; Kek lapis; Bebinca|bibik; Funnel cake; Rainbow cake;
      Hummingbird cake; German chocolate cake; Boston cream pie; Charlotte@Charlotte (cake); Yule log|bûche de Noël|buche de noel@Yule log (cake); Princess cake|prinsesstårta;
      Kransekake; Eccles cake; Shortcake|strawberry shortcake; Japanese cheesecake|cotton cheesecake;
      Devil's food cake|devils food; Rum cake; Mille crêpe|mille crepe|crepe cake; Basque cheesecake|burnt cheesecake; King cake; Coconut cake; Layer cake`,
    legendary: ['Kransekake'],
    tiers: { 'Mawa cake': 'rare' },
    facts: { Kransekake: 'A Norwegian and Danish tower of stacked almond rings, served at weddings and celebrations.' },
  },
  {
    id: 'food-bread',
    category: 'food',
    prompt: 'Name a type of bread',
    qualifier: 'Named breads from anywhere in the world (Indian breads count)',
    strip: ['bread'],
    answers: `
      Baguette; Sourdough; Ciabatta; Focaccia; Brioche; Croissant; Pita|pitta; Naan|nan; Roti|chapati|chapatti@Chapati; Bagel; Rye bread; Pumpernickel; Challah; Tortilla;
      Paratha; Cornbread; Soda bread; Garlic bread; Bun; Pretzel; English muffin; Crumpet; Whole wheat bread|brown bread|whole wheat|wholemeal bread; White bread; Multigrain bread;
      Pav|pao; Bread roll|roll|dinner roll|brötchen; Lavash; Matzo|matzah|matza@Matzah; Injera; Arepa; Banana bread; Hot cross bun; Pandesal|pan de sal; Milk bread|Hokkaido milk bread|shokupan@Hokkaido milk bread;
      Melon pan|melonpan; Panettone; Stollen; Pão de queijo|pao de queijo|cheese bread; Khachapuri; Simit; Pane carasau|carta da musica; Damper@Damper (food); Johnnycake;
      Bannock@Bannock (British and Irish food); Frybread|fry bread; Flatbread; Grissini|breadsticks; Crispbread|knäckebröd|knackebrod; Potato bread; Kulcha; Bhatura; Puri|poori@Puri (food); Bhakri;
 Fougasse@Fougasse (bread); Bammy; Ezekiel bread; Zopf; Pan de muerto; Rugbrød; Barmbrack; Malt loaf; Kaiser roll; Pane di Altamura`,
    tiers: { Pav: 'honours' },
    legendary: ['Pane carasau'],
    facts: { 'Pane carasau': 'A paper-thin Sardinian flatbread, nicknamed music paper.' },
  },
  {
    id: 'food-herb',
    category: 'food',
    prompt: 'Name a herb used in cooking',
    qualifier: 'Leafy culinary herbs (spices like cumin are a different question)',
    answers: `
      Basil; Tulsi|holy basil|tulasi@Ocimum tenuiflorum; Mint|pudina|spearmint@Mentha; Coriander|cilantro|dhania|kothimbir|coriander leaves; Parsley; Rosemary; Thyme; Oregano;
      Sage@Salvia officinalis; Dill|soya|suva|shepu|sabbasige; Chives; Bay leaf|bay leaves|tej patta; Tarragon; Marjoram; Lemongrass|lemon grass; Curry leaves|curry leaf|kadi patta|karibevu|kari patta@Curry tree;
      Methi|fenugreek leaves|fenugreek|kasuri methi@Fenugreek; Lovage; Chervil; Sorrel; Fennel|fennel leaves; Lemon balm; Borage; Savory|summer savory@Summer savory; Stevia;
      Perilla|shiso; Thai basil; Vietnamese coriander|rau ram@Persicaria odorata; Culantro|sawtooth coriander|long coriander@Eryngium foetidum; Epazote; Kaffir lime leaves|makrut lime|kaffir lime@Kaffir lime;
      Pandan|pandan leaves|screwpine@Pandanus amaryllifolius; Hyssop; Lavender; Chamomile; Lemon verbena; Garlic chives|Chinese chives; Wild garlic|ramsons|bear's garlic@Allium ursinum;
      Sweet cicely@Myrrhis odorata; Angelica; Rue; Mexican oregano; Ajwain leaves|Indian borage|karpooravalli|doddapatre@Coleus amboinicus; Peppermint; Stinging nettle|nettle@Urtica dioica; Purslane@Portulaca oleracea`,
    legendary: ['Epazote'],
    facts: { Epazote: 'A strong-smelling Mexican herb, traditionally cooked with black beans.' },
  },
  {
    id: 'food-nut',
    category: 'food',
    prompt: 'Name a nut',
    qualifier: 'Anything eaten as a nut (peanut, coconut and makhana count)',
    strip: ['nut'],
    answers: `
      Almond|badam; Cashew|kaju|cashew nut; Peanut|groundnut|moongphali|shengdana|kadalekai; Walnut|akhrot; Pistachio|pista; Hazelnut|filbert; Macadamia|macadamia nut;
      Pecan; Brazil nut; Pine nut|pine nuts|chilgoza|pignoli; Chestnut; Coconut|nariyal; Acorn; Areca nut|betel nut|supari; Chironji|charoli|chirongi@Buchanania lanzan;
      Makhana|fox nut|phool makhana|foxnut@Euryale ferox; Kola nut|cola nut; Tiger nut|tigernut|chufa@Cyperus esculentus; Candlenut; Butternut@Juglans cinerea; Hickory nut|hickory@Hickory;
      Beechnut|beech nut|beech@Beech; Ginkgo nut|ginkgo@Ginkgo biloba; Pili nut|pili@Canarium ovatum; Black walnut@Juglans nigra; Bunya nut|bunya@Araucaria bidwillii; Mongongo|manketti@Schinziophyton rautanenii;
      Sacha inchi; Shea nut|shea@Shea tree; Malabar chestnut|money tree@Pachira aquatica; Lotus seed; Baru nut|baru@Dipteryx alata`,
    tryhard: ['Coconut'],
    legendary: ['Chironji'],
    facts: {
      Chironji: 'Tiny almond-flavoured seeds used to garnish Indian sweets like kheer and halwa.',
      Coconut: 'Botanically a drupe, not a true nut.',
    },
  },
  {
    id: 'food-citrus',
    category: 'food',
    prompt: 'Name a citrus fruit',
    qualifier: 'Any citrus fruit, variety or named citrus hybrid',
    answers: `
      Orange|santra@Orange (fruit); Lemon|nimbu; Lime|nimbu pani lime@Lime (fruit); Grapefruit; Mandarin|mandarin orange|Nagpur orange@Mandarin orange; Tangerine; Clementine;
      Pomelo|chakotra|pummelo|shaddock; Sweet lime|mosambi|mousambi|musambi@Citrus limetta; Kumquat|cumquat; Yuzu; Citron; Bergamot|bergamot orange@Bergamot orange; Blood orange;
      Key lime; Kaffir lime|makrut lime; Calamansi|calamondin; Ugli fruit|ugli; Satsuma@Satsuma mandarin; Tangelo|minneola; Meyer lemon; Finger lime@Citrus australasica;
      Buddha's hand|buddhas hand|fingered citron; Sudachi; Kabosu; Dekopon|sumo citrus|shiranui; Bitter orange|Seville orange|sour orange; Navel orange; Valencia orange;
      Rangpur@Rangpur (fruit); Kinnow; Oroblanco|sweetie; Hassaku; Iyokan; Etrog; Limequat; Citrange; Desert lime@Citrus glauca; Amanatsu; Persian lime`,
    legendary: ["Buddha's hand"],
    facts: { "Buddha's hand": 'A citron split into finger-like segments with almost no pulp, used for its scent and zest.' },
  },
  {
    id: 'food-tea',
    category: 'food',
    prompt: 'Name a type of tea',
    qualifier: 'Kinds of tea and tea drinks (herbal teas count)',
    strip: ['tea'],
    answers: `
      Black tea; Green tea; White tea; Oolong|oolong tea; Masala chai|chai|masala tea|cutting chai; Darjeeling tea|darjeeling; Assam tea|assam; Nilgiri tea|nilgiri;
      Earl Grey tea|earl grey; English breakfast tea|english breakfast; Matcha; Chamomile tea|chamomile; Peppermint tea|mint tea|pudina chai; Herbal tea|tisane; Jasmine tea;
      Lapsang souchong; Pu'er tea|puer|pu-erh|pu erh|puerh; Rooibos|red bush|redbush; Bubble tea|boba|boba tea|pearl milk tea; Iced tea|ice tea; Kahwah|kahwa|kehwa|Kashmiri kahwa;
      Noon chai|pink tea|Kashmiri chai|sheer chai; Butter tea|po cha|gur gur; Yerba mate|mate@Mate (drink); Hibiscus tea; Ginger tea|adrak chai|ginger chai; Genmaicha; Sencha; Gyokuro;
      Hōjicha|hojicha|houjicha; Kombucha; Thai tea|cha yen; Teh tarik; Hong Kong-style milk tea|Hong Kong milk tea|milk tea; Yellow tea; Chrysanthemum tea; Barley tea|mugicha|boricha;
      Ceylon tea|ceylon; Keemun; Lady Grey@Lady Grey (tea); Russian Caravan; Turkish tea|çay; Maghrebi mint tea|Moroccan mint tea|Moroccan tea; Kukicha; Tieguanyin|iron goddess; Longjing tea|dragon well|longjing;
      Da Hong Pao; Silver needle|Baihao Yinzhen@Baihao Yinzhen; Lemon tea; Blue tea|butterfly pea tea|butterfly pea flower tea@Butterfly pea flower tea`,
    legendary: ['Noon chai'],
    facts: { 'Noon chai': 'A pink, salted Kashmiri tea; baking soda and long boiling give it the colour.' },
  },
  {
    id: 'food-coffee',
    category: 'food',
    prompt: 'Name a coffee drink',
    qualifier: 'Coffee drinks as served in cafes or at home',
    strip: ['coffee'],
    answers: `
      Espresso; Cappuccino; Latte|caffe latte|caffè latte@Caffè latte; Americano|caffe americano@Caffè Americano; Mocha|caffe mocha|mochaccino|cafe mocha@Caffè mocha;
      Macchiato|caffe macchiato|espresso macchiato@Caffè macchiato; Flat white; Cold brew|cold brew coffee@Cold brew coffee; Iced coffee|cold coffee; Frappe|frappé|Greek frappe@Frappé coffee;
      Frappuccino; Affogato; Turkish coffee|Greek coffee; Filter coffee|South Indian filter coffee|kaapi|degree coffee|Indian filter coffee@Indian filter coffee; Dalgona coffee|dalgona|whipped coffee;
      Cortado; Ristretto; Lungo; Doppio; Long black; Café au lait|cafe au lait; Café con leche|cafe con leche; Vienna coffee|Viennese coffee|Wiener Melange@Vienna coffee;
      Cuban espresso|cafe cubano|cafecito; Vietnamese iced coffee|ca phe sua da|cà phê sữa đá; Egg coffee|cà phê trứng; Instant coffee|nescafe; Black coffee; Café de olla|cafe de olla;
      Latte macchiato; Galão|galao; Mazagran@Mazagran (drink); Yuenyeung|yuanyang|kopi cham; Drip coffee|pour-over;
      Decaf|decaffeinated coffee@Decaffeination; Arabic coffee|qahwa; Einspänner|einspanner; Café Touba|cafe touba`,
    legendary: ['Yuenyeung'],
    facts: { Yuenyeung: 'A Hong Kong drink that mixes coffee with milk tea in one cup.' },
  },
  {
    id: 'food-soft-drink',
    category: 'food',
    prompt: 'Name a soft drink brand',
    qualifier: 'Fizzy soft drink brands from anywhere (not juices or energy drinks)',
    answers: `
      Coca-Cola|coke|coca cola|cocacola; Pepsi; Sprite@Sprite (drink); Fanta; 7 Up|7up|seven up; Mountain Dew|mtn dew|dew; Thums Up|thumbs up; Limca; Mirinda; Dr Pepper|dr. pepper;
      Diet Coke|coke light; Coca-Cola Zero Sugar|coke zero|coca cola zero; Pepsi Max|pepsi zero|pepsi black; Gold Spot|goldspot; Campa Cola|campa; Appy Fizz|appy; Bovonto;
      Schweppes; Canada Dry; Fresca; Sunkist@Sunkist (soft drink); A&W Root Beer|A&W|a and w; Barq's|barqs; Irn-Bru|irn bru; Tango@Tango (drink); Lilt; Vimto; Crush@Crush (soft drink);
      Sierra Mist|Starry; Big Red@Big Red (soda); RC Cola|Royal Crown Cola|royal crown; Inca Kola; Jarritos; Ramune; Orangina; Mug Root Beer|mug; Faygo; Moxie; Tab@Tab (drink);
      Mello Yello; Squirt@Squirt (soda); Sun Drop|sundrop; Ting@Ting (drink); Cheerwine; Vernors`,
    legendary: ['Gold Spot'],
    facts: { 'Gold Spot': 'An Indian orange fizzy drink from Parle, sold to Coca-Cola in 1993 along with Thums Up and Limca.' },
  },
  {
    id: 'food-chocolate',
    category: 'food',
    prompt: 'Name a chocolate bar or chocolate brand',
    qualifier: 'Chocolate bars, chocolate sweets and chocolate brands',
    answers: `
      Dairy Milk|Cadbury Dairy Milk|dairy milk silk|silk@Cadbury Dairy Milk; Cadbury; KitKat|kit kat; Snickers; Mars@Mars (chocolate bar); Twix; Bounty@Bounty (chocolate bar);
      Milky Way@Milky Way (chocolate bar); 5 Star|five star@5 Star (chocolate bar); Munch|Nestle Munch@Nestlé Munch; Perk@Perk (chocolate bar); Toblerone; Ferrero Rocher|ferrero;
      Kinder Joy; Kinder Bueno; Kinder Surprise|kinder egg; Galaxy|Dove@Galaxy (chocolate); Lindt|Lindt & Sprüngli|lindt and sprungli@Lindt & Sprüngli; Hershey's|hersheys|Hershey@The Hershey Company;
      Hershey bar|hershey's milk chocolate; Reese's Peanut Butter Cups|reeses|reese's; M&M's|m&ms|m and ms; Nutella; Milkybar|milky bar; Aero@Aero (chocolate); Nestlé Crunch|crunch;
      Butterfinger; Toffee Crisp; Twirl@Twirl (chocolate bar); Flake@Flake (chocolate bar); Wispa; Crunchie; Picnic@Picnic (chocolate bar); Boost@Boost (chocolate bar); Double Decker@Double Decker (chocolate bar);
      Yorkie@Yorkie (chocolate bar); Maltesers; Smarties; Rolo; Milka; Ritter Sport; Godiva@Godiva Chocolatier; Nestlé|nestle; Gems@Gems (chocolate); Bournville@Bournville (chocolate); Choco Pie|chocopie|Lotte Choco Pie;
      Tony's Chocolonely|tonys chocolonely; Hershey's Kisses|kisses; 3 Musketeers|three musketeers@3 Musketeers (chocolate bar); Baby Ruth; Oh Henry!|oh henry; Caramello; Celebrations@Celebrations (confectionery);
      Freddo; Fry's Chocolate Cream|frys chocolate cream; Terry's Chocolate Orange|chocolate orange; Quality Street@Quality Street (confectionery); Lion@Lion (chocolate bar); Ghirardelli`,
    legendary: ["Tony's Chocolonely"],
    tiers: { Perk: 'honours', Gems: 'honours' },
    facts: { "Tony's Chocolonely": 'A Dutch brand whose bars are split into deliberately unequal pieces, to make a point about unfair trade.' },
  },
  {
    id: 'food-cereal',
    category: 'food',
    prompt: 'Name a breakfast cereal',
    qualifier: 'Breakfast cereal brands or types (corn flakes, muesli and oats count)',
    answers: `
      Corn Flakes|cornflakes|corn flake; Froot Loops|fruit loops; Frosted Flakes|Frosties; Cocoa Krispies|Coco Pops|chocos; Rice Krispies; Special K; Cheerios; Weetabix; Shredded wheat;
      Muesli; Granola; Oatmeal|oats|porridge|oat porridge|rolled oats; Lucky Charms; Cinnamon Toast Crunch; Cap'n Crunch|captain crunch|capn crunch; Trix@Trix (cereal); Cocoa Puffs;
      Golden Grahams; Honey Smacks|sugar smacks; Raisin Bran; All-Bran|all bran; Grape-Nuts|grape nuts; Wheaties; Reese's Puffs|reeses puffs; Cookie Crisp; Shreddies;
      Crunchy Nut; Chex; Kix@Kix (cereal); Apple Jacks; Corn Pops; Count Chocula; Fruity Pebbles|cocoa pebbles|pebbles; Puffed rice|murmura|kurmura|mandakki|muri; Weetos;
      Honey Bunches of Oats; Krave@Krave (cereal); Sugar Puffs|Honey Monster Puffs; Frosted Mini-Wheats|mini wheats; Crispix; Alpen; Golden Crisp; Honeycomb@Honeycomb (cereal);
      Life@Life (cereal); Total@Total (cereal); Product 19; Puffed wheat; Ready Brek`,
    legendary: ['Grape-Nuts'],
    tiers: { Alpen: 'rare' },
    facts: { 'Grape-Nuts': 'Contains neither grapes nor nuts; it is baked from wheat and barley.' },
  },
  {
    id: 'food-sandwich',
    category: 'food',
    prompt: 'Name a type of sandwich',
    qualifier: 'Named sandwiches from anywhere (burgers and hot dogs count)',
    strip: ['sandwich'],
    answers: `
      Club sandwich|club; BLT|bacon lettuce tomato; Grilled cheese|cheese toastie|toastie|grilled cheese sandwich; Submarine sandwich|sub|hoagie|hero|grinder; Hamburger|burger;
      Cheeseburger; Hot dog|hotdog; Panini|panino@Panino; Reuben sandwich|reuben; Cuban sandwich|cubano; Bánh mì|banh mi; Cheesesteak|Philly cheesesteak|philly cheese steak; Sloppy joe;
      Monte Cristo sandwich|monte cristo; Croque monsieur|croque madame; French dip; Po' boy|po boy|poboy; Muffuletta|muffaletta; Peanut butter and jelly sandwich|PB&J|peanut butter and jam|pbj;
      Egg sandwich|egg salad sandwich|egg mayo; Tuna sandwich|tuna mayo; Bombay sandwich|Bombay masala sandwich|masala sandwich; Vada pav|vada pao; Dabeli; Gyro|gyros@Gyros; Shawarma;
      Döner kebab|doner kebab|doner; Pulled pork sandwich|pulled pork; Chip butty|chip sandwich; Bacon sandwich|bacon butty|bacon sarnie; Fish finger sandwich; Cucumber sandwich;
      Tea sandwich|finger sandwich; Open sandwich|smørrebrød|smorrebrod; Katsu sando; Tramezzino|tramezzini; Torta; Pambazo; Lobster roll; Chicken sandwich;
      Ice cream sandwich; Elvis sandwich|peanut butter and banana sandwich; Fluffernutter; Chacarero; Francesinha; Bauru@Bauru (sandwich); Choripán|choripan; Hot Brown|Kentucky hot brown;
      Jucy Lucy|juicy lucy; Patty melt; Chopped cheese; Dagwood sandwich|dagwood; Roast beef sandwich; Meatball sandwich|meatball sub; Breakfast sandwich|egg muffin; Pan bagnat; Bocadillo; Toast sandwich; Sabich`,
    legendary: ['Elvis sandwich'],
    facts: { 'Elvis sandwich': 'Toasted peanut butter, banana and sometimes bacon, named after Elvis Presley.' },
  },
  {
    id: 'food-soup',
    category: 'food',
    prompt: 'Name a soup',
    qualifier: 'Named soups from anywhere (rasam and thukpa count)',
    strip: ['soup'],
    answers: `
      Tomato soup; Chicken soup|chicken noodle soup; Minestrone; Miso soup; French onion soup|onion soup; Cream of mushroom soup|mushroom soup|cream of mushroom; Hot and sour soup; Sweet corn soup|corn soup|chicken corn soup@Corn soup;
      Manchow soup|manchow; Pumpkin soup; Lentil soup|dal soup; Gazpacho; Borscht|borsch|borshch; Chowder; Clam chowder; Pho|phở; Ramen; Tom yum|tom yam; Tom kha gai|tom kha;
      Wonton soup; Egg drop soup; Mulligatawny; Rasam@Rasam (dish); Bisque|lobster bisque@Bisque (food); Goulash; Vichyssoise; Bouillabaisse; Gumbo; Pea soup|split pea soup;
      Cock-a-leekie|cock a leekie; Scotch broth; Ribollita; Avgolemono; Laksa; Thukpa; Shorba; Pozole|posole; Tortilla soup|sopa de tortilla; Menudo@Menudo (soup);
      Caldo verde; Solyanka; Shchi; Okroshka; Harira; Pepper soup; Cullen skink; Bird's nest soup|birds nest soup; Sinigang; Tteokguk; Samgyetang; Soto@Soto (food);
      Vegetable soup; Beef noodle soup; Consommé|consomme; Wedding soup|Italian wedding soup; Matzah ball soup|matzo ball soup; Bone broth; Oxtail soup; Miyeok-guk|seaweed soup; Callaloo; Fanesca`,
    legendary: ['Cullen skink'],
    facts: { 'Cullen skink': 'A thick Scottish soup of smoked haddock, potatoes and onions.' },
  },
  {
    id: 'food-sauce',
    category: 'food',
    prompt: 'Name a sauce or dip',
    qualifier: 'Named sauces, dips and table condiments (ketchup and chutney count)',
    strip: ['sauce'],
    answers: `
      Ketchup|tomato ketchup; Tomato sauce|marinara|marinara sauce|pizza sauce; Mayonnaise|mayo; Mustard@Mustard (condiment); Soy sauce|soya sauce; Hot sauce|chilli sauce|chili sauce;
      Sriracha|sriracha sauce@Sriracha; Tabasco|tabasco sauce@Tabasco sauce; Barbecue sauce|BBQ sauce|bbq; Pesto; Alfredo sauce|alfredo; Béchamel sauce|bechamel|white sauce;
      Hollandaise sauce|hollandaise; Velouté sauce|veloute; Espagnole sauce|espagnole; Tartar sauce|tartare sauce; Worcestershire sauce|worcester sauce; Oyster sauce; Fish sauce|nam pla;
      Hoisin sauce|hoisin; Sweet chili sauce|sweet chilli sauce; Schezwan sauce|szechuan sauce|schezwan chutney|sichuan sauce; Gravy; Salsa@Salsa (sauce); Guacamole; Hummus|houmous;
      Tzatziki; Aioli; Chimichurri; Mint sauce; Chutney|mint chutney|green chutney|pudina chutney; Raita; Ranch dressing|ranch; Thousand Island dressing|thousand island; Vinaigrette; Cranberry sauce; Apple sauce|applesauce;
      Brown sauce|HP sauce; Bolognese sauce|bolognese|ragu|ragù; Arrabbiata sauce|arrabbiata|arrabiata; Peanut sauce|satay sauce; Harissa; Romesco; Mole@Mole (sauce); Sambal; Gochujang;
      Ponzu; Tahini; XO sauce; Demi-glace|demi glace; Beurre blanc; Béarnaise sauce|bearnaise; Remoulade|rémoulade; Mornay sauce|mornay|cheese sauce; Sweet and sour sauce;
      Teriyaki sauce|teriyaki@Teriyaki; Caesar dressing; Baba ghanoush|baba ganoush; Muhammara; Toum; Nam prik|nam phrik; Tamarind chutney|imli chutney|saunth;
      Coconut chutney; Tkemali; Salsa verde; Pico de gallo; Queso|chile con queso@Chile con queso; Ajvar; Piri piri sauce|peri peri|piri piri@Piri piri`,
    legendary: ['XO sauce'],
    facts: { 'XO sauce': 'A Hong Kong sauce of dried scallops and shrimp, named XO to sound luxurious.' },
  },
  {
    id: 'food-legume',
    category: 'food',
    prompt: 'Name a pulse or bean',
    qualifier: 'Beans, lentils, dried peas and other pulses (English or Indian names)',
    answers: `
      Chickpea|chana|kabuli chana|garbanzo|chole|Bengal gram|kala chana|chana dal|kadle; Kidney bean|rajma|red kidney bean|cannellini|cannellini bean|white kidney bean; Lentil|masoor|masoor dal|red lentil|lentils;
      Black gram|urad|urad dal|udad|black lentil|uddina bele@Vigna mungo; Mung bean|moong|green gram|moong dal|mung|hesaru|sprouts; Pigeon pea|toor|tur|arhar|toor dal|tuvar|togari bele;
      Black-eyed pea|lobia|chawli|black-eyed bean|black eyed peas|alasande; Cowpea; Moth bean|matki|mat bean|madike@Vigna aconitifolia; Horse gram|kulthi|hurali|kollu@Macrotyloma uniflorum;
      Soybean|soya|soy|soya bean|soy bean; Pea|peas|matar|green peas|dried peas|yellow peas|split peas@Pea; Lima bean|butter bean|double beans; Fava bean|broad bean|faba bean@Vicia faba;
      Navy bean|haricot bean|baked beans; Pinto bean; Black turtle bean|black bean|black beans; Adzuki bean|azuki|red bean|aduki;
      Common bean|French bean|haricot|green bean@Phaseolus vulgaris; Hyacinth bean|avarekalu|avarekai|field bean|lablab|val|sem@Lablab; Rice bean@Vigna umbellata; Winged bean;
      Velvet bean@Mucuna pruriens; Lupin bean|lupini|lupini beans@Lupin bean; Grass pea|khesari|khesari dal@Lathyrus sativus; Bambara groundnut|bambara bean; Tepary bean; Runner bean;
      Cranberry bean|borlotti|borlotti bean; Flageolet bean|flageolet; Edamame; Sword bean|canavalia@Canavalia gladiata; Jack bean@Canavalia ensiformis;
      Puy lentil|french green lentil; Guar|cluster bean@Guar`,
    legendary: ['Bambara groundnut'],
    facts: { 'Bambara groundnut': 'An African legume that ripens its pods underground, like a peanut.' },
  },
  {
    id: 'food-fast-food-chain',
    category: 'food',
    prompt: 'Name a fast food or cafe chain',
    qualifier: 'Restaurant, pizza, burger, coffee or snack chains with outlets in many cities',
    answers: `
      McDonald's|mcdonalds|mcd|maccas; KFC|Kentucky Fried Chicken; Burger King|BK; Domino's|dominos|Domino's Pizza; Pizza Hut; Subway@Subway (restaurant); Starbucks; Taco Bell; Wendy's|wendys;
      Dunkin'|dunkin|Dunkin Donuts|dunkin' donuts; Papa John's|papa johns; Popeyes; Chick-fil-A|chick fil a|chickfila; Five Guys; In-N-Out Burger|in n out|in-n-out; Shake Shack; Tim Hortons|tim hortons|timmies;
      Krispy Kreme; Chipotle Mexican Grill|chipotle; Panda Express; Arby's|arbys; Dairy Queen|DQ; Sonic Drive-In|sonic; Jack in the Box; Carl's Jr.|carls jr|carl's jr; Hardee's|hardees;
      Little Caesars|little caesar's; Baskin-Robbins|baskin robbins; Costa Coffee|costa; Café Coffee Day|CCD|cafe coffee day|coffee day; Haldiram's|haldirams|haldiram; Wow! Momo|wow momo;
      Chaayos; Chai Point; Faasos; Goli Vada Pav; Nando's|nandos; Pret a Manger|pret; Greggs; Wimpy@Wimpy (restaurant); Jollibee; MOS Burger|mos burger; Lotteria; Yoshinoya; CoCo Ichibanya|coco ichiban;
      Sbarro; Auntie Anne's|auntie annes; Cinnabon; Wingstop; Whataburger; Johnny Rockets; Quiznos; Church's Texas Chicken|churchs chicken|Texas Chicken@Church's Texas Chicken; Saravana Bhavan|hotel saravana bhavan;
      Adyar Ananda Bhavan|A2B; Barbeque Nation; Jumbo King|jumboking;
      Pizza Express|PizzaExpress@PizzaExpress; Mister Donut; Gong Cha; Chatime; Tim Ho Wan; Din Tai Fung; Hesburger; Paris Baguette; Tous les Jours`,
    legendary: ['Jollibee'],
    tiers: { Chaayos: 'rare' },
    facts: { Jollibee: 'A Filipino chain that outsells McDonald\'s in its home country and serves sweet spaghetti.' },
  },
  {
    id: 'food-grain',
    category: 'food',
    prompt: 'Name a grain or millet',
    qualifier: 'Cereal grains, millets and grain-like seeds such as quinoa (English or Indian names)',
    answers: `
      Rice|chawal|akki; Wheat|gehun|godhi; Maize|corn|makka|makki|makai@Maize; Barley|jau; Oats|oat@Oat; Rye; Sorghum|jowar|jola|cholam|jonna@Sorghum bicolor; Pearl millet|bajra|sajje|kambu|bajri;
      Finger millet|ragi|nachni|mandua|kezhvaragu; Foxtail millet|kangni|navane|thinai|korra; Little millet|samai|saame|kutki|sama@Panicum sumatrense; Kodo millet|kodo|harka|varagu|arikelu@Paspalum scrobiculatum;
      Barnyard millet|sanwa|oodalu|kuthiraivali|samak|jhangora@Echinochloa frumentacea; Proso millet|chena|baragu|panivaragu|common millet; Browntop millet|korale@Urochloa ramosa; Millet;
      Quinoa; Buckwheat|kuttu|kuttu atta; Amaranth|rajgira|ramdana|amaranth grain@Amaranth grain; Teff; Spelt; Triticale; Fonio; Wild rice; Emmer|khapli|khapli wheat; Einkorn|einkorn wheat;
      Durum wheat|durum; Khorasan wheat|kamut; Freekeh; Job's tears|jobs tears|adlay; Chia seed|chia@Chia seed; Basmati|basmati rice; Brown rice; Red rice; Black rice|forbidden rice;
      Bulgur|bulgar|dalia|daliya; Semolina|sooji|rava|suji; Couscous; Poha|flattened rice|aval|avalakki|chivda@Flattened rice; Puffed rice|murmura|kurmura|mandakki|muri`,
    legendary: ["Job's tears"],
    facts: { "Job's tears": 'A tall grass whose shiny seeds are eaten as grain and also strung as beads.' },
  },
  {
    id: 'food-utensil',
    category: 'food',
    prompt: 'Name a kitchen utensil or tool',
    qualifier: 'Hand tools, pots and pans used in a kitchen (not big appliances)',
    groups: {
      textbook: 'Knife; Spoon; Fork; Spatula; Ladle; Whisk; Tongs; Peeler|vegetable peeler; Grater; Rolling pin|belan; Chopping board|cutting board',
      honours: `Colander; Sieve|strainer|chalni|tea strainer; Can opener|tin opener; Bottle opener; Measuring cup|measuring cups; Measuring spoons|measuring spoon; Mixing bowl|bowl;
        Frying pan|pan|skillet; Saucepan|pot|cooking pot; Kadai|kadhai|karahi|wok; Tawa|tava|griddle; Pressure cooker; Mortar and pestle|pestle and mortar|mortar|pestle|khal batta|okhli;
        Potato masher|masher; Kitchen scissors|scissors|kitchen shears; Oven mitt|oven glove|oven gloves|mitten; Baking tray|baking sheet|tray|oven tray; Wooden spoon; Chopsticks; Cake tin|baking tin|cake pan; Plate`,
      rare: `Garlic press; Zester|microplane; Mandoline|mandolin slicer|mandoline slicer; Pizza cutter; Ice cream scoop|scoop; Funnel; Slotted spoon|skimmer|jhara|jhaara; Pastry brush|basting brush|brush;
        Cookie cutter; Piping bag|icing bag; Lemon squeezer|citrus juicer|juicer|citrus press; Salad spinner; Cleaver|meat cleaver; Apple corer|corer; Melon baller; Nutcracker; Kitchen timer|timer;
        Kitchen scale|weighing scale|scales; Idli stand|idli plate|idli cooker|idli maker; Murukku press|chakli maker|sev maker|sevai press|shavige press; Coconut scraper|coconut grater|eeli|thuruvi;
        Rolling board|chakla|polpat|chakla belan; Masala box|masala dabba|spice box|anjarai petti; Tadka pan|tempering ladle|tadka ladle|oggarane sowtu; Churner|mathani|madhani|kadagolu|butter churner;
        Steamer|steamer basket; Thermometer|kitchen thermometer|meat thermometer; Egg slicer; Rice paddle|rice scoop; Dosa pan|dosa tawa; Appam pan|appachatti|appam chatti; Paniyaram pan|appe pan|kuzhi paniyaram pan`,
      deep: `Mezzaluna; Bench scraper|dough scraper; Fish slice; Baster|turkey baster; Pastry blender|pastry cutter; Spider|spider strainer; Trussing needle; Cherry pitter|olive pitter;
        Egg separator; Sushi mat|makisu|bamboo mat; Tortilla press; Spurtle; Ricer|potato ricer; Flour sifter|sifter; Dredger; Mouli|food mill; Pie bird; Lame|bread lame; Puttu maker|puttu kutti;
        Sil batta|grinding stone|ammikallu|ammi kal; Pasta machine; Dumpling press`,
      legendary: 'Boti|bonti|aruvamanai|eelige mane|eelige',
    },
    facts: { Boti: 'A curved blade fixed to a wooden base; the cook sits on the floor and pushes vegetables against it.' },
  },
  {
    id: 'food-cooking-method',
    category: 'food',
    prompt: 'Name a way of cooking food',
    qualifier: 'Cooking techniques, from frying to tadka',
    groups: {
      textbook: 'Frying|fry|fried|deep frying|deep fry|deep-frying; Boiling|boil|boiled; Baking|bake|baked; Grilling|grill|grilled|barbecuing|barbecue|bbq; Roasting|roast|roasted; Steaming|steam|steamed; Microwaving|microwave',
      honours: `Shallow frying|shallow fry|pan frying|pan fry|pan-frying; Stir frying|stir-fry|stir fry|stir-frying; Sauteing|sauté|saute|sautéing|sautéed; Toasting|toast|toasted; Simmering|simmer;
        Stewing|stew|stewed; Poaching|poach|poached; Broiling|broil; Smoking|smoke|smoked; Pressure cooking|pressure cook; Tempering|tadka|tarka|chaunk|chhaunk|baghar|oggarane|thalimpu|vaghar;
        Braising|braise|braised; Slow cooking|slow cook|slow cooker; Air frying|air fry|air fryer|air-frying; Blanching|blanch; Tandoori|tandoor|tandoor cooking|clay oven`,
      rare: `Sous vide; Caramelising|caramelizing|caramelise|caramelize|caramelisation; Searing|sear|seared; Flambé|flambe|flambéing|flambeing; Dum|dum cooking|dum pukht; Bhuna|bhunao|bhuno|bhunna;
        Curing|cure|cured; Pickling|pickle|pickled; Fermenting|fermentation|ferment|fermented; Coddling|coddle|coddled; Parboiling|parboil; Reducing|reduction|reduce; Glazing|glaze;
        Basting|baste; Spit roasting|rotisserie|spit roast; Double boiling|bain-marie|bain marie|water bath; Scrambling|scramble|scrambled; Charring|char|fire roasting|flame roasting;
        Drying|sun drying|dehydrating; Griddling|griddle; Dry roasting|dry roast|dry-roasting; Brining|brine|brined`,
      deep: `Confit; En papillote|papillote|baking in parchment; Blackening|blackened|blacken; Blowtorching|torching|blowtorch; Pit cooking|earth oven|pit roasting|hangi|umu|imu;
        Infusing|infuse|infusion; Clay pot cooking|clay pot|handi cooking|handi; Coal roasting|ember roasting|ash roasting; Nitro freezing|liquid nitrogen; Salt baking|salt crust|salt-crust baking;
        Hot stone cooking|stone grilling|pathar ka gosht; Leaf wrapping|banana leaf steaming|patrode|paturi; Rendering|render; Deglazing|deglaze; Sweating|sweat`,
      legendary: 'Dhungar|dhuanaar|dhungar method|coal smoking',
    },
    facts: { Dhungar: 'An Indian smoking trick: a hot coal is set in a tiny bowl inside the pot, drizzled with ghee and covered.' },
  },
  {
    id: 'food-ice-cream-flavour',
    category: 'food',
    prompt: 'Name an ice cream flavour',
    qualifier: 'Ice cream, gelato or kulfi flavours',
    strip: ['ice cream', 'flavour', 'flavor'],
    groups: {
      textbook: 'Vanilla; Chocolate; Strawberry; Butterscotch; Mango; Pistachio|pista; Cookies and cream|cookies n cream|cookies & cream|oreo; Mint chocolate chip|mint choc chip|mint chip|mint',
      honours: `Coffee; Black currant|blackcurrant; Kesar pista|saffron pistachio|kesar|saffron; Tutti frutti|tutti-frutti; Caramel|salted caramel; Cookie dough|chocolate chip cookie dough;
        Chocolate chip|choc chip; Rocky road; Neapolitan; Coconut|tender coconut; Banana; Blueberry; Cotton candy|candy floss|candyfloss; Bubblegum|bubble gum; Litchi|lychee|lichi;
        Peanut butter; Matcha|green tea; Sitaphal|custard apple; Chikoo|chiku|sapota; Anjeer|fig|fig and honey|anjeer badam; Kulfi|malai|malai kulfi; Rose|gulkand|rose petal`,
      rare: `Raspberry; Lemon|lemon sorbet; Guava|spicy guava; Jackfruit; Cherry; Rum and raisin|rum raisin; Toffee|English toffee; Hazelnut|gianduja; Almond|badam; Dulce de leche;
        Pralines and cream|praline; Black forest; Red velvet; Brownie|chocolate brownie|fudge brownie|brownie fudge; Birthday cake|cake batter; Tiramisu; Cheesecake|strawberry cheesecake|blueberry cheesecake;
        Honey|honey almond; Sweet corn|corn; Paan|meetha paan|pan; Gulab jamun; Cinnamon; Ginger; Orange; Pineapple; Cashew|kaju|kaju kishmish|cashew raisin; Double chocolate|death by chocolate|chocolate fudge;
        Kala khatta; Watermelon; Passion fruit; Grape; Peach; Apple pie; Butter pecan; Maple walnut|walnut; Mocha|coffee chocolate; Pumpkin|pumpkin spice`,
      deep: `Avocado; Black sesame; Lavender; Ube|purple yam; Durian; Earl Grey; Chilli chocolate|chili chocolate|chilli; Garlic; Basil; Olive oil; Taro; Tamarind|imli; Kokum; Jamun;
        Stracciatella; Spumoni; Moose tracks; Superman; Salted egg yolk; Charcoal|activated charcoal; Cheese|cheddar; Bacon; Sweet potato; Thandai; Masala chai|chai; Filter coffee; Mysore pak;
        Rasmalai; Elaneer|tender coconut water; Grapefruit; Rhubarb; Mascarpone; Ricotta; Rose falooda|falooda`,
      legendary: 'Grape-Nuts|grape nuts|grapenut',
    },
    facts: { 'Grape-Nuts': 'Ice cream made with the breakfast cereal is a classic in Jamaica and New England.' },
  },
  {
    id: 'food-pizza-topping',
    category: 'food',
    prompt: 'Name a pizza topping',
    qualifier: 'Things commonly put on top of a pizza',
    groups: {
      textbook: 'Cheese|mozzarella|extra cheese; Pepperoni; Mushroom|mushrooms; Onion|onions; Tomato|tomatoes; Olives|olive|black olives|green olives; Capsicum|bell pepper|peppers|green pepper|green capsicum; Sweet corn|corn; Chicken',
      honours: `Paneer|paneer tikka; Jalapeño|jalapeno|jalapenos|jalapeños; Pineapple; Sausage|sausages; Ham; Bacon; Spinach; Basil; Chicken tikka|tandoori chicken; Garlic; Oregano;
        Chilli flakes|chili flakes|red chilli flakes|red pepper flakes; Barbecue chicken|bbq chicken; Baby corn; Pizza sauce|tomato sauce|marinara; Red paprika|paprika|red pepper|red capsicum; Peri peri chicken|peri peri|piri piri`,
      rare: `Anchovies|anchovy; Artichoke|artichoke hearts; Feta; Ricotta; Parmesan; Goat cheese|chevre; Sun-dried tomatoes|sun dried tomato|sundried tomatoes; Rocket|arugula; Prosciutto; Salami;
        Meatballs|meatball; Minced meat|beef|ground beef|keema|mince; Prawns|shrimp|prawn; Tuna; Egg|eggs; Broccoli; Zucchini|courgette; Eggplant|brinjal|aubergine; Pesto; Potato|potatoes;
        Caramelised onion|caramelized onion|caramelised onions; Gherkins|pickles|gherkin; Cheddar; Cherry tomatoes; Chorizo; Red onion; Mixed herbs|italian seasoning; Hot honey|honey; Gouda; Blue cheese|gorgonzola`,
      deep: `Figs|fig; Pear; Truffle|truffle oil; Clams|clam; Calamari|squid; Smoked salmon|salmon; Kimchi; Butter chicken; Burrata; Capers; Lamb; Duck; Avocado; Mussels; Peas; Sweet potato;
        Pumpkin; Walnuts|walnut; Dates; Kebab|doner kebab; Mango; Tofu; Soya chunks|soya; Gobi|cauliflower; Crab; Lobster; Peanuts`,
      legendary: 'Banana',
    },
    facts: { Banana: 'Banana and curry powder pizza is a genuine favourite in Sweden.' },
  },
];
