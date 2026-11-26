const c = require('./_countries');

const nameOf = (entry) => entry.split('@')[0].split('|')[0];
// Countries from the shared table by their first name, so spellings and titles stay in one place.
const pick = (list) => {
  const have = new Set(c.ROWS.map((r) => nameOf(r.country)));
  for (const n of list) if (!have.has(n)) throw new Error(`geography-more: unknown country ${n}`);
  return c.ROWS.filter((r) => list.includes(nameOf(r.country))).map((r) => r.country).join(';');
};

module.exports = [
  {
    id: 'geo-europe-country',
    category: 'geography',
    prompt: 'Name a country in Europe',
    qualifier: 'UN member or observer states; transcontinental countries count',
    answers: c.countriesIn('EU'),
    legendary: ['Liechtenstein', 'Moldova'],
    facts: {
      Liechtenstein: 'An Alpine principality between Switzerland and Austria, and one of only two doubly landlocked countries in the world.',
      Moldova: 'Landlocked between Romania and Ukraine, and home to some of the largest wine cellars on Earth.',
    },
  },
  {
    id: 'geo-north-america',
    category: 'geography',
    prompt: 'Name a country in North America',
    qualifier: 'Sovereign UN member states, including Central America and the Caribbean',
    answers: c.countriesIn('NA'),
    closed: 23,
    legendary: ['Saint Kitts and Nevis', 'Dominica'],
    facts: {
      'Saint Kitts and Nevis': 'The smallest sovereign state in the Americas, in both area and population.',
      Dominica: 'The "nature island" of the Caribbean, not to be confused with the Dominican Republic.',
    },
  },
  {
    id: 'geo-country-bm',
    category: 'geography',
    prompt: 'Name a country that begins with B or M',
    qualifier: 'UN member or observer states, by their common English name',
    answers: c.ROWS.filter((r) => 'BM'.includes(nameOf(r.country)[0])).map((r) => r.country).join(';'),
    legendary: ['Burundi', 'Micronesia'],
    facts: {
      Burundi: 'A small, hilly country in East Africa on the shore of Lake Tanganyika.',
      Micronesia: 'A Pacific nation of more than 600 islands, spread across four states: Yap, Chuuk, Pohnpei and Kosrae.',
    },
  },
  {
    id: 'geo-country-vowel',
    category: 'geography',
    prompt: 'Name a country that begins with a vowel (A, E, I, O or U)',
    qualifier: 'UN member or observer states, by their common English name',
    answers: c.ROWS.filter((r) => 'AEIOU'.includes(nameOf(r.country)[0])).map((r) => r.country).join(';'),
    legendary: ['Eswatini', 'Oman'],
    facts: {
      Eswatini: 'A small kingdom in southern Africa that was called Swaziland until 2018.',
      Oman: 'A sultanate on the southeast coast of the Arabian Peninsula.',
    },
  },
  {
    id: 'geo-landlocked',
    category: 'geography',
    prompt: 'Name a landlocked country',
    qualifier: 'UN member or observer states with no sea coast (44 countries)',
    closed: 44,
    answers: pick([
      'Afghanistan', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan', 'Belarus', 'Bhutan', 'Bolivia', 'Botswana',
      'Burkina Faso', 'Burundi', 'Central African Republic', 'Chad', 'Czech Republic', 'Eswatini', 'Ethiopia',
      'Hungary', 'Kazakhstan', 'Kyrgyzstan', 'Laos', 'Lesotho', 'Liechtenstein', 'Luxembourg', 'Malawi', 'Mali',
      'Moldova', 'Mongolia', 'Nepal', 'Niger', 'North Macedonia', 'Paraguay', 'Rwanda', 'San Marino', 'Serbia',
      'Slovakia', 'South Sudan', 'Switzerland', 'Tajikistan', 'Turkmenistan', 'Uganda', 'Uzbekistan', 'Vatican City',
      'Zambia', 'Zimbabwe',
    ]),
    legendary: ['Lesotho', 'Liechtenstein'],
    facts: {
      Lesotho: 'A mountain kingdom completely surrounded by South Africa.',
      Liechtenstein: 'One of only two doubly landlocked countries: every neighbour is landlocked too.',
    },
  },
  {
    id: 'geo-island-nation',
    category: 'geography',
    prompt: 'Name an island country',
    qualifier: 'UN member states lying wholly on islands, with no land border (38 countries)',
    closed: 38,
    answers: pick([
      'Antigua and Barbuda', 'Bahamas', 'Bahrain', 'Barbados', 'Cape Verde', 'Comoros', 'Cuba', 'Cyprus', 'Dominica',
      'Fiji', 'Grenada', 'Iceland', 'Jamaica', 'Japan', 'Kiribati', 'Madagascar', 'Maldives', 'Malta',
      'Marshall Islands', 'Mauritius', 'Micronesia', 'Nauru', 'New Zealand', 'Palau', 'Philippines',
      'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'São Tomé and Príncipe',
      'Seychelles', 'Singapore', 'Solomon Islands', 'Sri Lanka', 'Tonga', 'Trinidad and Tobago', 'Tuvalu', 'Vanuatu',
    ]),
    legendary: ['Nauru', 'Tuvalu'],
    facts: {
      Nauru: 'The smallest island nation, and the third-smallest country in the world, with no official capital city.',
      Tuvalu: 'A chain of low coral atolls in the Pacific, with a population of around 11,000.',
    },
  },
  {
    id: 'geo-asian-capital',
    category: 'geography',
    prompt: 'Name the capital city of a country in Asia',
    qualifier: 'Capitals of Asian UN member states (Israel and Palestine left out; Russia, Turkey, Egypt and Cyprus count elsewhere)',
    strip: ['city'],
    answers: `
      Kabul; Yerevan; Baku; Manama; Dhaka; Thimphu; Bandar Seri Begawan; Phnom Penh; Beijing|Peking; Tbilisi;
      New Delhi|Delhi; Jakarta; Tehran; Baghdad; Tokyo; Amman; Astana|Nur-Sultan; Kuwait City;
      Bishkek; Vientiane; Beirut; Kuala Lumpur; Malé|Male; Ulaanbaatar|Ulan Bator; Naypyidaw|Nay Pyi Taw;
      Kathmandu; Pyongyang; Muscat@Muscat, Oman; Islamabad; Manila; Doha; Riyadh; Singapore; Seoul;
      Colombo; Sri Jayawardenepura Kotte|Kotte; Damascus; Dushanbe; Bangkok; Dili; Ashgabat|Ashkhabad;
      Abu Dhabi; Tashkent; Hanoi; Sanaa|Sana'a`,
    legendary: ['Bandar Seri Begawan', 'Dushanbe'],
    facts: {
      'Bandar Seri Begawan': 'The capital of Brunei, famous for the huge gold-domed Omar Ali Saifuddien Mosque.',
      Dushanbe: 'The capital of Tajikistan; its name means "Monday" in Tajik, after an old market day.',
    },
  },
  {
    id: 'geo-african-capital',
    category: 'geography',
    prompt: 'Name the capital city of a country in Africa',
    qualifier: 'Official or de facto capitals of African UN member states (several countries have more than one)',
    strip: ['city'],
    answers: `
      Algiers|Alger; Luanda; Porto-Novo; Gaborone; Ouagadougou; Gitega; Bujumbura; Praia; Bangui; N'Djamena|Ndjamena;
      Moroni@Moroni, Comoros; Brazzaville; Kinshasa; Djibouti@Djibouti (city); Cairo; Malabo; Asmara; Mbabane; Addis Ababa|Addis Abeba;
      Libreville; Banjul; Accra; Conakry; Bissau; Yamoussoukro; Abidjan; Nairobi; Maseru; Monrovia; Tripoli@Tripoli, Libya;
      Antananarivo|Tana; Lilongwe; Bamako; Nouakchott; Port Louis; Rabat; Maputo; Windhoek; Niamey; Abuja; Kigali;
      São Tomé|Sao Tome; Dakar; Victoria@Victoria, Seychelles; Freetown; Mogadishu|Mogadiscio; Pretoria; Cape Town;
      Bloemfontein; Juba; Khartoum; Dodoma; Dar es Salaam; Lomé|Lome; Tunis; Kampala; Lusaka; Harare`,
    legendary: ['Gitega', 'Mbabane'],
    facts: {
      Gitega: 'Burundi made this small inland city its political capital in 2019, replacing Bujumbura.',
      Mbabane: 'The administrative capital of Eswatini, in the Ezulwini Valley highlands.',
    },
  },
  {
    id: 'geo-india-state-capital',
    category: 'geography',
    prompt: 'Name the capital of an Indian state or union territory',
    qualifier: 'Capitals of the 28 states and 8 union territories, including joint and second capitals',
    strip: ['city'],
    answers: `
      Hyderabad@Hyderabad, India; Amaravati; Itanagar; Dispur; Patna; Raipur@Raipur, Chhattisgarh; Panaji|Panjim;
      Gandhinagar; Chandigarh; Shimla|Simla; Ranchi; Bengaluru|Bangalore; Thiruvananthapuram|Trivandrum;
      Bhopal; Mumbai|Bombay; Nagpur; Imphal; Shillong; Aizawl; Kohima; Bhubaneswar; Jaipur; Gangtok;
      Chennai|Madras; Agartala; Lucknow; Dehradun; Kolkata|Calcutta; Port Blair; Kavaratti; Puducherry|Pondicherry@Pondicherry (city);
      Daman@Daman, India; Silvassa; Leh; Srinagar; Jammu; Delhi@New Delhi; Gairsain|Bhararisain; Dharamshala|Dharamsala`,
    legendary: ['Kavaratti', 'Gairsain'],
    facts: {
      Kavaratti: 'The capital of Lakshadweep, a union territory of coral islands in the Arabian Sea.',
      Gairsain: "Uttarakhand's summer capital in the hills, chosen in 2020 alongside Dehradun.",
    },
  },
  {
    id: 'geo-india-coastal',
    category: 'geography',
    prompt: 'Name an Indian state or union territory with a sea coast or islands',
    qualifier: 'The 9 coastal states and 4 island or coastal union territories (closed set of 13)',
    closed: 13,
    answers: `
      Gujarat; Maharashtra; Goa; Karnataka; Kerala; Tamil Nadu|TN; Andhra Pradesh|AP; Odisha|Orissa; West Bengal|WB;
      Puducherry|Pondicherry@Puducherry (union territory); Lakshadweep; Andaman and Nicobar Islands|Andaman and Nicobar|Andamans;
      Dadra and Nagar Haveli and Daman and Diu|Daman and Diu`,
    legendary: ['Lakshadweep', 'Dadra and Nagar Haveli and Daman and Diu'],
    facts: {
      Lakshadweep: "India's smallest union territory: 36 coral islands off the Kerala coast.",
      'Dadra and Nagar Haveli and Daman and Diu': 'Formed in 2020 by merging two earlier union territories; its coast is at Daman and Diu.',
    },
  },
  {
    id: 'geo-karnataka-city',
    category: 'geography',
    prompt: 'Name a city or town in Karnataka',
    qualifier: 'Cities and towns in Karnataka that have their own Wikipedia article',
    missingTier: 'deep',
    answers: `
      Bengaluru|Bangalore; Mysuru|Mysore@Mysore; Hubballi|Hubli|Hubli-Dharwad@Hubli-Dharwad; Dharwad; Mangaluru|Mangalore@Mangalore;
      Belagavi|Belgaum@Belgaum; Kalaburagi|Gulbarga@Kalaburagi; Ballari|Bellary@Ballari; Vijayapura|Bijapur@Vijayapura;
      Shivamogga|Shimoga@Shimoga; Tumakuru|Tumkur@Tumkur; Davanagere|Davangere; Hassan@Hassan, Karnataka; Udupi;
      Mandya; Raichur; Bidar; Hosapete|Hospet@Hosapete; Gadag@Gadag-Betageri; Chitradurga; Kolar@Kolar, Karnataka;
      Chikkamagaluru|Chikmagalur@Chikkamagaluru; Madikeri|Mercara; Karwar; Bagalkot|Bagalkote; Koppal; Hampi;
      Badami; Ramanagara; Channapatna; Srirangapatna|Seringapatam@Srirangapatna; Sirsi@Sirsi, Karnataka; Karkala;
      Puttur@Puttur, Dakshina Kannada; Gokarna@Gokarna, Karnataka; Honnavar; Kundapura; Bhatkal; Yadgir; Haveri;
      Ranebennuru|Ranebennur; Gangavathi; Sindhanur; Tiptur; Arsikere; Chikkaballapur; Doddaballapur; Hoskote;
      Nelamangala; Anekal; Devanahalli; Kanakapura; Magadi; Mudhol; Jamkhandi; Gokak; Nippani; Sankeshwar; Kumta;
      Ankola; Moodbidri; Sullia; Belur@Belur, Karnataka; Halebidu|Halebeedu; Pattadakal; Aihole; Bhadravathi|Bhadravati@Bhadravathi, Karnataka;
      Sagara|Sagar@Sagara, Karnataka; Thirthahalli; Hunsur; Nanjangud; Kollegal; T. Narasipura|Narasipura`,
    legendary: ['Pattadakal', 'Aihole'],
    facts: {
      Pattadakal: 'A UNESCO World Heritage village in Bagalkot whose temples blend northern and southern Indian styles.',
      Aihole: 'An early Chalukya site with over a hundred temples, called a cradle of Indian temple architecture.',
    },
  },
  {
    id: 'geo-karnataka-district',
    category: 'geography',
    prompt: 'Name a district of Karnataka',
    qualifier: 'The 31 districts as of 2024 (closed set; former names accepted)',
    closed: 31,
    strip: ['district'],
    answers: `
      Bagalkot|Bagalkote@Bagalkot district; Ballari|Bellary@Ballari district; Belagavi|Belgaum@Belgaum district;
      Bengaluru Rural|Bangalore Rural@Bengaluru Rural district; Bengaluru Urban|Bangalore Urban@Bengaluru Urban district; Bidar@Bidar district;
      Chamarajanagar|Chamarajanagara@Chamarajanagar district; Chikkaballapur@Chikkaballapur district;
      Chikkamagaluru|Chikmagalur@Chikkamagaluru district; Chitradurga@Chitradurga district;
      Dakshina Kannada|South Canara@Dakshina Kannada district; Davanagere|Davangere@Davanagere district; Dharwad@Dharwad district;
      Gadag@Gadag district; Hassan@Hassan district; Haveri@Haveri district; Kalaburagi|Gulbarga@Kalaburagi district;
      Kodagu|Coorg@Kodagu district; Kolar@Kolar district; Koppal@Koppal district; Mandya@Mandya district;
      Mysuru|Mysore@Mysore district; Raichur@Raichur district; Ramanagara|Ramanagaram|Bengaluru South@Ramanagara district;
      Shivamogga|Shimoga@Shimoga district; Tumakuru|Tumkur@Tumkur district; Udupi@Udupi district;
      Uttara Kannada|North Canara@Uttara Kannada district; Vijayanagara@Vijayanagara district; Vijayapura|Bijapur@Vijayapura district; Yadgir@Yadgir district`,
    legendary: ['Vijayanagara', 'Chamarajanagar'],
    facts: {
      Vijayanagara: 'The newest district of Karnataka, carved out of Ballari in 2021 around Hosapete and Hampi.',
      Chamarajanagar: 'The southernmost district of Karnataka, bordering Tamil Nadu and home to BR Hills.',
    },
  },
  {
    id: 'geo-bangalore-area',
    category: 'geography',
    prompt: 'Name an area or neighbourhood of Bengaluru',
    qualifier: 'Localities of Bengaluru with their own Wikipedia article',
    missingTier: 'deep',
    answers: `
      Koramangala; Indiranagar@Indiranagar, Bangalore; Jayanagar@Jayanagar, Bangalore; Whitefield@Whitefield, Bangalore; Malleshwaram|Malleswaram; Basavanagudi;
      HSR Layout|HSR; BTM Layout|BTM; Electronic City; Yelahanka; Hebbal@Hebbal, Bangalore; Marathahalli|Marathalli; Banashankari;
      Rajajinagar; JP Nagar|J. P. Nagar@J. P. Nagar, Bangalore; Jalahalli; Yeshwanthpur|Yeshvantpur; Bellandur; Sarjapur|Sarjapura;
      Frazer Town; Richmond Town@Richmond Town, Bangalore; Shivajinagar@Shivajinagar, Bangalore; Ulsoor|Halasuru;
      Vijayanagar@Vijayanagar, Bangalore; Peenya; Kengeri; Bommanahalli; Domlur; Cox Town; Sadashivanagar;
      Rajarajeshwari Nagar|RR Nagar; Basaveshwaranagar; Nagarbhavi; Hennur; Kalyan Nagar; Banaswadi;
      KR Puram|Krishnarajapuram; Mahadevapura; Brookefield; Bannerghatta; Cunningham Road; Seshadripuram; Chickpet;
      Vasanth Nagar; Benson Town; Cooke Town; Bilekahalli; Hulimavu; Kadugodi; Varthur; Mathikere; Sanjaynagar;
      Vidyaranyapura; Nandini Layout; Hesaraghatta; Jakkur; Thanisandra; Kammanahalli; Austin Town; Ejipura;
      Madiwala; Girinagar; Chamrajpet|Chamarajpet; Gandhi Bazaar|Gandhibazaar`,
    legendary: ['Hesaraghatta', 'Cooke Town'],
    facts: {
      Hesaraghatta: "A lake-side suburb on the northern edge of Bengaluru, once the city's main water source.",
      'Cooke Town': 'A planned colony in East Bengaluru named after a British-era official.',
    },
  },
  {
    id: 'geo-hill-station',
    category: 'geography',
    prompt: 'Name a hill station in India',
    qualifier: 'Hill stations and mountain resort towns in India',
    strip: ['hill station'],
    missingTier: 'deep',
    answers: `
      Ooty|Udhagamandalam|Ootacamund@Ooty; Kodaikanal; Munnar; Shimla|Simla; Manali@Manali, Himachal Pradesh; Darjeeling; Mussoorie; Nainital;
      Madikeri|Coorg@Madikeri; Mount Abu; Gangtok; Shillong; Lonavala|Lonavla; Mahabaleshwar; Panchgani; Matheran;
      Coonoor; Yercaud; Kalimpong; Dalhousie@Dalhousie, India; McLeod Ganj|Mcleodganj; Dharamshala|Dharamsala; Kasauli;
      Almora; Ranikhet; Auli@Auli, India; Lansdowne@Lansdowne, Uttarakhand; Chail@Chail, Himachal Pradesh; Kufri; Pachmarhi; Araku Valley|Araku;
      Ponmudi; Yelagiri; Kotagiri; Chikmagalur|Chikkamagaluru@Chikkamagaluru; Nandi Hills|Nandidurga@Nandi Hills, India; Agumbe;
      Kemmangundi; Horsley Hills; Saputara; Khandala; Kasol; Mukteshwar; Landour; Pelling; Lachung; Ziro@Ziro;
      Tawang; Cherrapunji|Sohra; Dirang; Kausani; Bhimtal; Vagamon; Valparai; Sakleshpur; Thekkady`,
    legendary: ['Yelagiri', 'Pachmarhi'],
    facts: {
      Yelagiri: "A small hill station in Tamil Nadu's Tirupattur district, a popular weekend trip from Bengaluru.",
      Pachmarhi: "Madhya Pradesh's only hill station, called \"Queen of the Satpuras\".",
    },
  },
  {
    id: 'geo-national-park-india',
    category: 'geography',
    prompt: 'Name a national park in India',
    qualifier: 'Declared national parks of India',
    strip: ['national park'],
    missingTier: 'deep',
    answers: `
      Jim Corbett|Corbett@Jim Corbett National Park; Ranthambore|Ranthambhore@Ranthambore National Park; Kaziranga@Kaziranga National Park;
      Bandipur@Bandipur National Park; Nagarhole|Nagarahole|Rajiv Gandhi National Park@Nagarhole National Park; Kanha@Kanha National Park;
      Bandhavgarh@Bandhavgarh National Park; Gir@Gir National Park; Sundarbans@Sundarbans National Park;
      Periyar@Periyar National Park; Keoladeo|Bharatpur@Keoladeo National Park; Sanjay Gandhi@Sanjay Gandhi National Park;
      Pench@Pench National Park; Panna@Panna National Park; Satpura@Satpura National Park;
      Manas@Manas National Park; Nanda Devi@Nanda Devi National Park; Valley of Flowers@Valley of Flowers National Park;
      Great Himalayan@Great Himalayan National Park; Silent Valley@Silent Valley National Park; Eravikulam@Eravikulam National Park;
      Bannerghatta@Bannerghatta National Park; Bhitarkanika@Bhitarkanika National Park; Simlipal@Simlipal National Park;
      Dachigam@Dachigam National Park; Hemis@Hemis National Park; Rajaji@Rajaji National Park; Namdapha@Namdapha National Park;
      Dudhwa@Dudhwa National Park; Kudremukh@Kudremukh National Park; Anshi@Anshi National Park;
      Mollem|Bhagwan Mahavir@Mollem National Park; Velavadar|Blackbuck@Blackbuck National Park; Desert@Desert National Park;
      Orang@Orang National Park; Dibru-Saikhowa@Dibru-Saikhowa National Park; Nameri@Nameri National Park;
      Balphakram|Balpakram@Balphakram National Park; Keibul Lamjao@Keibul Lamjao National Park; Khangchendzonga|Kanchenjunga@Khangchendzonga National Park;
      Pin Valley@Pin Valley National Park; Mukurthi@Mukurthi National Park; Guindy@Guindy National Park;
      Gulf of Mannar@Gulf of Mannar Marine National Park; Mahatma Gandhi Marine@Mahatma Gandhi Marine National Park;
      Rani Jhansi Marine@Rani Jhansi Marine National Park; Saddle Peak@Saddle Peak National Park; Campbell Bay@Campbell Bay National Park; Galathea@Galathea National Park`,
    legendary: ['Saddle Peak', 'Mukurthi'],
    facts: {
      'Saddle Peak': 'The park around the highest point of the Andaman Islands, at 732 metres.',
      Mukurthi: 'A Nilgiri park created to protect the Nilgiri tahr, a rare mountain goat.',
    },
  },
  {
    id: 'geo-unesco-india',
    category: 'geography',
    prompt: 'Name a UNESCO World Heritage Site in India',
    qualifier: 'Sites inscribed on the World Heritage List up to 2024, by their usual name',
    strip: ['world heritage site'],
    missingTier: 'deep',
    answers: `
      Taj Mahal; Agra Fort; Ajanta Caves; Ellora Caves; Konark Sun Temple|Konark|Sun Temple;
      Mahabalipuram|Group of Monuments at Mahabalipuram; Kaziranga@Kaziranga National Park; Manas@Manas National Park;
      Keoladeo@Keoladeo National Park; Churches and Convents of Goa|Basilica of Bom Jesus@Churches and Convents of Goa; Khajuraho|Khajuraho Group of Monuments@Khajuraho Group of Monuments;
      Hampi|Group of Monuments at Hampi@Hampi; Fatehpur Sikri; Elephanta Caves; Great Living Chola Temples|Brihadisvara Temple@Great Living Chola Temples;
      Pattadakal|Group of Monuments at Pattadakal@Pattadakal; Sundarbans@Sundarbans National Park;
      Nanda Devi and Valley of Flowers@Nanda Devi and Valley of Flowers National Parks; Sanchi|Buddhist Monuments at Sanchi@Sanchi;
      Humayun's Tomb; Qutb Minar@Qutb Minar; Mountain Railways of India|Darjeeling Himalayan Railway@Mountain Railways of India;
      Mahabodhi Temple|Bodh Gaya@Mahabodhi Temple; Bhimbetka|Rock Shelters of Bhimbetka@Bhimbetka rock shelters;
      Champaner-Pavagadh|Champaner@Champaner-Pavagadh Archaeological Park; Chhatrapati Shivaji Terminus|Victoria Terminus|CST;
      Red Fort|Lal Qila; Jantar Mantar@Jantar Mantar, Jaipur; Western Ghats;
      Hill Forts of Rajasthan|Chittorgarh Fort|Kumbhalgarh@Hill Forts of Rajasthan; Rani ki Vav|Rani-ki-Vav;
      Great Himalayan National Park; Nalanda|Nalanda Mahavihara; Khangchendzonga National Park@Khangchendzonga National Park;
      Capitol Complex|Le Corbusier's Capitol Complex@Capitol Complex, Chandigarh; Historic City of Ahmedabad|Ahmedabad;
      Victorian Gothic and Art Deco Ensemble of Mumbai|Art Deco Mumbai@Victorian Gothic and Art Deco Ensemble of Mumbai; Ramappa Temple|Rudreshwara Temple;
      Dholavira; Santiniketan|Shantiniketan; Hoysala Temples|Sacred Ensembles of the Hoysalas|Belur|Halebidu@Hoysala architecture;
      Charaideo Moidams|Moidams; Jaipur City|Jaipur@Jaipur`,
    legendary: ['Dholavira', 'Charaideo Moidams'],
    facts: {
      Dholavira: 'A 4,500-year-old Harappan city in Gujarat with an advanced system of water reservoirs.',
      'Charaideo Moidams': 'The mound-burial tombs of the Ahom kings in Assam, inscribed in 2024.',
    },
  },
  {
    id: 'geo-seven-wonders',
    category: 'geography',
    prompt: 'Name one of the Seven Wonders of the World, ancient or new',
    qualifier: 'The seven wonders of the ancient world and the seven chosen in 2007 (closed set of 14)',
    closed: 14,
    answers: `
      Great Wall of China|Great Wall; Petra; Christ the Redeemer|Christ the Redeemer statue@Christ the Redeemer (statue);
      Machu Picchu; Chichen Itza|Chichén Itzá@Chichen Itza; Colosseum|Coliseum; Taj Mahal;
      Great Pyramid of Giza|Great Pyramid|Pyramid of Giza|Pyramids of Giza; Hanging Gardens of Babylon|Hanging Gardens;
      Statue of Zeus at Olympia|Statue of Zeus; Temple of Artemis; Mausoleum at Halicarnassus|Mausoleum of Mausolus;
      Colossus of Rhodes; Lighthouse of Alexandria|Pharos of Alexandria|Pharos`,
    legendary: ['Mausoleum at Halicarnassus', 'Temple of Artemis'],
    facts: {
      'Mausoleum at Halicarnassus': 'The tomb of King Mausolus in modern Bodrum, Turkey; the word "mausoleum" comes from it.',
      'Temple of Artemis': 'A huge marble temple at Ephesus that was destroyed and rebuilt several times.',
    },
  },
  {
    id: 'geo-ocean-sea',
    category: 'geography',
    prompt: 'Name an ocean or sea',
    qualifier: 'The five oceans and well-known named seas (contested names left out)',
    strip: ['ocean', 'sea', 'the'],
    answers: `
      Pacific Ocean|Pacific; Atlantic Ocean|Atlantic; Indian Ocean; Arctic Ocean|Arctic; Southern Ocean|Antarctic Ocean;
      Mediterranean Sea|Mediterranean; Caribbean Sea|Caribbean; Arabian Sea; Bay of Bengal|Bengal Bay; Red Sea; Black Sea;
      Baltic Sea|Baltic; North Sea; Yellow Sea; Philippine Sea; Coral Sea; Tasman Sea; Timor Sea; Arafura Sea; Andaman Sea;
      Java Sea; Celebes Sea; Sulu Sea; Banda Sea; Laccadive Sea|Lakshadweep Sea; Adriatic Sea|Adriatic; Aegean Sea|Aegean;
      Ionian Sea|Ionian; Tyrrhenian Sea|Tyrrhenian; Ligurian Sea; Norwegian Sea; Barents Sea; Kara Sea; Laptev Sea;
      East Siberian Sea; Chukchi Sea; Beaufort Sea; Bering Sea; Sea of Okhotsk|Okhotsk Sea; Greenland Sea; Labrador Sea;
      Sargasso Sea; Weddell Sea; Ross Sea; Amundsen Sea; Bellingshausen Sea; Irish Sea; Celtic Sea; White Sea;
      Sea of Azov|Azov Sea; Sea of Marmara|Marmara Sea; Gulf of Mexico; Hudson Bay; Gulf of Aden; Gulf of Oman|Sea of Oman;
      Bismarck Sea; Solomon Sea; Flores Sea; Molucca Sea|Maluku Sea; Savu Sea; Gulf of Thailand; Gulf of California; Gulf of Alaska`,
    legendary: ['Sargasso Sea', 'Bellingshausen Sea'],
    facts: {
      'Sargasso Sea': 'The only sea with no coastline: it is defined by ocean currents and floating sargassum seaweed.',
      'Bellingshausen Sea': 'A part of the Southern Ocean off Antarctica, named after the Russian explorer who first sighted the continent.',
    },
  },
  {
    id: 'geo-desert',
    category: 'geography',
    prompt: 'Name a desert',
    qualifier: 'Deserts of the world with their own Wikipedia article',
    strip: ['desert'],
    answers: `
      Sahara|Sahara Desert; Gobi|Gobi Desert; Thar|Thar Desert|Great Indian Desert@Thar Desert; Kalahari|Kalahari Desert; Atacama|Atacama Desert;
      Namib|Namib Desert; Arabian Desert; Mojave|Mojave Desert@Mojave Desert; Sonoran Desert; Great Victoria Desert; Great Sandy Desert;
      Gibson Desert; Simpson Desert; Taklamakan|Taklimakan|Taklamakan Desert; Karakum|Karakum Desert|Kara-Kum@Karakum Desert; Kyzylkum|Kyzyl Kum|Kyzylkum Desert;
      Patagonian Desert|Patagonia@Patagonian Desert; Syrian Desert; Negev|Negev Desert; Chihuahuan Desert; Great Basin Desert;
      Antarctic Desert|Antarctica@Antarctica; Rub' al Khali|Empty Quarter|Rub al Khali; Nubian Desert; Libyan Desert;
      Ordos Desert|Ordos; Danakil Desert|Danakil@Danakil Depression; Dasht-e Kavir|Kavir Desert;
      Dasht-e Lut|Lut Desert; Thal Desert|Thal; Cholistan Desert|Cholistan; Painted Desert@Painted Desert (United States);
      Colorado Desert; Black Rock Desert; Tanami Desert; Sturt Stony Desert; Strzelecki Desert; Little Sandy Desert;
      Tabernas Desert; Judaean Desert|Judean Desert; Sinai Desert|Sinai@Sinai Peninsula; Ténéré|Tenere;
      Western Desert@Western Desert (Egypt); Eastern Desert; Sechura Desert; Badain Jaran Desert; Tengger Desert;
      Kumtag Desert; Mu Us Desert; Nefud Desert|Nafud|An Nafud; Registan|Registan Desert; Kharan Desert; Rann of Kutch`,
    legendary: ['Danakil Desert', 'Dasht-e Lut'],
    facts: {
      'Danakil Desert': 'A volcanic desert in Ethiopia, Eritrea and Djibouti, among the hottest places on Earth.',
      'Dasht-e Lut': 'A salt desert in Iran where a ground temperature of over 70 degrees Celsius has been recorded by satellite.',
    },
  },
  {
    id: 'geo-eight-thousanders',
    category: 'geography',
    prompt: 'Name a mountain over 8,000 metres high',
    qualifier: 'The 14 eight-thousanders (closed set)',
    closed: 14,
    strip: ['mount', 'mt'],
    answers: `
      Mount Everest|Everest|Sagarmatha|Chomolungma; K2|Mount Godwin-Austen|Godwin-Austen|Chogori;
      Kangchenjunga|Kanchenjunga|Kanchanjunga|Kachenjunga; Lhotse; Makalu; Cho Oyu; Dhaulagiri|Dhaulagiri I;
      Manaslu; Nanga Parbat; Annapurna|Annapurna I; Gasherbrum I|Hidden Peak|K5; Broad Peak; Gasherbrum II|K4;
      Shishapangma|Shisha Pangma|Xixabangma|Gosainthan`,
    legendary: ['Shishapangma', 'Gasherbrum II'],
    facts: {
      Shishapangma: 'The lowest of the fourteen at 8,027 m, and the only one that lies wholly inside a single country, China.',
      'Gasherbrum II': 'At 8,035 m it was first climbed in 1956 and is one of the more approachable eight-thousanders.',
    },
  },
  {
    id: 'geo-mountain-range',
    category: 'geography',
    prompt: 'Name a mountain range',
    qualifier: 'Mountain ranges or systems with their own Wikipedia article',
    strip: ['mountains', 'range', 'the'],
    answers: `
      Himalayas|Himalaya; Alps; Andes; Rocky Mountains|Rockies; Appalachian Mountains|Appalachians; Ural Mountains|Urals;
      Caucasus Mountains|Caucasus; Pyrenees; Carpathian Mountains|Carpathians; Atlas Mountains|Atlas; Karakoram|Karakorum; Hindu Kush;
      Western Ghats|Sahyadri; Eastern Ghats; Aravalli Range|Aravalli|Aravali; Vindhya Range|Vindhyas|Vindhya; Satpura Range|Satpura;
      Nilgiri Mountains|Nilgiris|Nilgiri Hills; Sierra Nevada@Sierra Nevada (U.S.); Cascade Range|Cascades; Altai Mountains|Altai;
      Tian Shan|Tien Shan; Pamir Mountains|Pamirs|Pamir; Zagros Mountains|Zagros; Alborz|Elburz; Kunlun Mountains|Kunlun;
      Dolomites; Apennine Mountains|Apennines; Balkan Mountains|Balkan Range; Great Dividing Range; Southern Alps; Drakensberg;
      Rwenzori Mountains|Ruwenzori; Scandinavian Mountains|Scandes; Tatra Mountains|Tatras; Sudetes; Brooks Range; Alaska Range;
      Sierra Madre Occidental; Sierra Madre Oriental; Annamite Range|Truong Son; Qinling|Qin Mountains; Taurus Mountains|Taurus;
      Jura Mountains|Jura; Vosges; Cantabrian Mountains; Black Forest; Harz; Ore Mountains; Julian Alps; Pindus; Rila; Pirin;
      Cardamom Mountains; Pir Panjal Range|Pir Panjal; Zanskar Range|Zanskar; Siwalik Hills|Shivalik Hills|Siwaliks;
      Anamalai Hills|Anaimalai; Palani Hills|Palani; Shevaroy Hills; Javadi Hills; Mahabharat Range; Patkai Range|Patkai;
      Garo Hills; Khasi Hills; Naga Hills; Lushai Hills|Mizo Hills`,
    legendary: ['Annamite Range', 'Rwenzori Mountains'],
    facts: {
      'Annamite Range': 'A mountain chain running along the border of Laos and Vietnam, home to the rare saola.',
      'Rwenzori Mountains': 'The "Mountains of the Moon" in Uganda and DR Congo, with equatorial glaciers.',
    },
  },
  {
    id: 'geo-volcano',
    category: 'geography',
    prompt: 'Name a famous volcano',
    qualifier: 'Named volcanoes with their own Wikipedia article, active, dormant or extinct',
    strip: ['mount', 'mt', 'volcano'],
    answers: `
      Mount Fuji|Fuji|Fujiyama; Vesuvius|Mount Vesuvius; Etna|Mount Etna@Mount Etna; Krakatoa|Krakatau; Mount St. Helens|St Helens|Mount Saint Helens;
      Mount Pinatubo|Pinatubo; Mauna Loa; Kilauea|Kīlauea; Mount Kilimanjaro|Kilimanjaro; Mount Elbrus|Elbrus; Popocatépetl|Popocatepetl;
      Cotopaxi; Mount Rainier|Rainier; Mount Hood; Mount Merapi|Merapi; Mount Tambora|Tambora; Mount Bromo|Bromo; Eyjafjallajökull|Eyjafjallajokull;
      Hekla; Katla@Katla (volcano); Stromboli; Santorini|Thera; Mount Pelée|Mount Pelee|Pelee; Soufrière Hills|Soufriere Hills;
      Mount Erebus|Erebus; Mount Ararat|Ararat; Mayon Volcano|Mayon|Mount Mayon; Taal Volcano|Taal; Mount Agung|Agung; Mount Rinjani|Rinjani;
      Mount Sinabung|Sinabung; Mount Ruapehu|Ruapehu; Mount Taranaki|Taranaki|Mount Egmont; Mount Ngauruhoe|Ngauruhoe;
      Whakaari / White Island|White Island|Whakaari; Mount Aso|Aso; Sakurajima; Mount Ontake|Ontake; Mount Unzen|Unzen;
      Mount Nyiragongo|Nyiragongo; Mount Cameroon; Ol Doinyo Lengai; Teide|Mount Teide; Chimborazo; Nevado del Ruiz; Llullaillaco;
      Ojos del Salado; Villarrica@Villarrica (volcano); Barren Island@Barren Island (Andaman Islands); Mount Mazama|Crater Lake; Mount Shasta|Shasta;
      Lassen Peak|Mount Lassen; Yellowstone Caldera|Yellowstone|Yellowstone Supervolcano; Paricutin|Parícutin;
      Mount Kenya; Piton de la Fournaise; Vulcano; Olympus Mons; Mauna Kea; Haleakalā|Haleakala; Mount Spurr; Mount Redoubt; Mount Augustine`,
    legendary: ['Barren Island', 'Ol Doinyo Lengai'],
    facts: {
      'Barren Island': "India's only confirmed active volcano, on an uninhabited island in the Andaman Sea.",
      'Ol Doinyo Lengai': 'A Tanzanian volcano that erupts unusual natrocarbonatite lava, which is black and runs cooler than normal.',
    },
  },
  {
    id: 'geo-world-river',
    category: 'geography',
    prompt: "Name one of the world's long rivers",
    qualifier: 'Rivers at least 1,500 km long, by their usual English name',
    strip: ['river'],
    answers: `
      Nile|Nile River; Amazon|Amazon River@Amazon River; Yangtze|Yangtze River|Chang Jiang; Mississippi|Mississippi River; Yenisei|Yenisey|Yenisei River;
      Yellow River|Huang He; Ob|Ob River; Paraná|Parana|Paraná River@Paraná River; Congo|Congo River|Zaire River@Congo River; Amur|Amur River; Lena@Lena (river);
      Mekong|Mekong River; Mackenzie|Mackenzie River@Mackenzie River; Niger|Niger River; Murray|Murray River@Murray River; Volga|Volga River; Zambezi|Zambezi River;
      Danube|Danube River; Ganges|Ganga|Ganges River; Indus|Indus River; Brahmaputra|Brahmaputra River; Tigris|Tigris River; Euphrates|Euphrates River;
      Orinoco|Orinoco River; Salween|Salween River; Irrawaddy|Irrawaddy River|Ayeyarwady@Irrawaddy River; Don@Don (river); Dnieper|Dnepr|Dnieper River; Ural@Ural (river);
      Columbia|Columbia River@Columbia River; Colorado|Colorado River; Rio Grande; Missouri|Missouri River; Yukon|Yukon River; St. Lawrence|Saint Lawrence River|St Lawrence River@Saint Lawrence River;
      Amu Darya|Oxus; Syr Darya|Jaxartes; Tarim|Tarim River@Tarim River; Limpopo|Limpopo River; Orange|Orange River@Orange River; Madeira|Madeira River;
      São Francisco|Sao Francisco|São Francisco River@São Francisco River; Tocantins|Tocantins River; Ohio|Ohio River; Arkansas|Arkansas River;
      Kolyma|Kolyma River; Purus|Purus River@Purus River; Araguaia|Araguaia River@Araguaia River; Japurá|Japura|Caquetá River@Japurá River; Rio Negro|Negro@Rio Negro (Amazon);
      Juruá|Jurua|Juruá River; Xingu|Xingu River@Xingu River; Irtysh|Irtysh River; Kama|Kama River; Okavango|Okavango River@Okavango River; Uruguay River|Uruguay@Uruguay River;
      Sepik|Sepik River; Fly River|Fly; Krishna|Krishna River; Godavari|Godavari River; Kaveri|Cauvery|Kaveri River@Kaveri; Narmada|Narmada River; Yamuna|Jumna|Yamuna River`,
    legendary: ['Purus', 'Kolyma'],
    facts: {
      Purus: 'A long, extremely winding Amazon tributary in Peru and Brazil that runs for over 3,300 km.',
      Kolyma: 'A Siberian river that flows north into the Arctic Ocean through some of the coldest inhabited land on Earth.',
    },
  },
  {
    id: 'geo-lake-india',
    category: 'geography',
    prompt: 'Name a lake in India',
    qualifier: 'Natural lakes, lagoons and well-known reservoirs with a Wikipedia article',
    strip: ['lake'],
    missingTier: 'deep',
    answers: `
      Chilika Lake|Chilika|Chilka; Vembanad Lake|Vembanad|Vembanad Kayal; Dal Lake|Dal; Wular Lake|Wular; Loktak Lake|Loktak; Sambhar Lake|Sambhar|Sambhar Salt Lake;
      Pulicat Lake|Pulicat; Kolleru Lake|Kolleru; Lonar Lake|Lonar; Naini Lake|Nainital Lake|Naini; Bhimtal Lake|Bhimtal; Pushkar Lake|Pushkar; Lake Pichola|Pichola;
      Fateh Sagar Lake|Fateh Sagar; Hussain Sagar|Hussain Sagar Lake; Ooty Lake; Kodaikanal Lake|Kodai Lake; Ulsoor Lake|Ulsoor|Halasuru Lake; Sukhna Lake|Sukhna;
      Tsomgo Lake|Tsomgo|Changu Lake; Bellandur Lake|Bellandur; Sasthamkotta Lake|Sasthamkotta; Ashtamudi Lake|Ashtamudi; Renuka Lake|Renuka;
      Rewalsar Lake|Rewalsar; Deepor Beel|Deepor; Umiam Lake|Barapani|Umiam; Jaisamand Lake|Dhebar Lake|Jaisamand; Powai Lake|Powai; Vihar Lake;
      Tulsi Lake; Ana Sagar Lake|Ana Sagar; Udai Sagar Lake|Udaisagar; Nakki Lake|Nakki; Mansar Lake|Mansar; Surinsar Lake|Surinsar;
      Nigeen Lake|Nigeen; Manasbal Lake|Manasbal; Hebbal Lake|Hebbal; Sankey Tank|Sankey; Kukkarahalli Lake|Kukkarahalli;
      Karanji Lake|Karanji; Hesaraghatta Lake; Madiwala Lake|Madivala; Upper Lake|Bhoj Wetland|Upper Lake Bhopal@Upper Lake (Bhopal);
      Govind Sagar|Gobind Sagar|Govind Sagar Lake; Hirakud Reservoir|Hirakud; Nagarjuna Sagar; Sardar Sarovar|Sardar Sarovar Dam;
      Chandratal|Chandra Taal|Chandra Tal; Prashar Lake|Parashar Lake; Khajjiar Lake|Khajjiar; Mirik Lake|Sumendu Lake`,
    legendary: ['Lonar Lake', 'Loktak Lake'],
    facts: {
      'Lonar Lake': 'A salty crater lake in Maharashtra formed by a meteorite impact roughly 50,000 years ago.',
      'Loktak Lake': "Manipur's lake famous for its floating islands of vegetation, called phumdis.",
    },
  },
  {
    id: 'geo-waterfall',
    category: 'geography',
    prompt: 'Name a famous waterfall',
    qualifier: 'Waterfalls, in India or abroad, that have their own Wikipedia article',
    strip: ['falls', 'waterfall', 'waterfalls', 'the'],
    answers: `
      Niagara Falls|Niagara; Victoria Falls|Mosi-oa-Tunya; Angel Falls|Salto Angel; Iguazu Falls|Iguazú Falls|Iguaçu Falls|Iguassu Falls; Yosemite Falls;
      Gullfoss; Jog Falls|Gersoppa Falls|Joga; Dudhsagar Falls|Dudhsagar; Athirappilly Falls|Athirapally|Athirappally; Hogenakkal Falls|Hogenakkal;
      Shivanasamudra Falls|Shivanasamudra|Shivasamudram; Nohkalikai Falls|Nohkalikai; Chitrakote Falls|Chitrakoot Falls|Chitrakote;
      Abbey Falls; Kaieteur Falls|Kaieteur; Sutherland Falls; Tugela Falls|Tugela; Dettifoss; Seljalandsfoss; Skógafoss|Skogafoss;
      Rhine Falls|Rheinfall; Reichenbach Falls; Multnomah Falls; Bridalveil Fall|Bridal Veil Falls;
      Detian Falls|Ban Gioc Falls|Ban Gioc–Detian Falls; Kuang Si Falls|Kuang Si; Huangguoshu Waterfall|Huangguoshu;
      Krimml Waterfalls|Krimml; Staubbach Falls|Staubbach; Gavarnie Falls|Gavarnie; Cascata delle Marmore|Marmore Falls|Marmore;
      Tequendama Falls|Tequendama; Gocta Cataracts|Gocta; Kunchikal Falls|Kunchikal; Barkana Falls|Barkana; Unchalli Falls|Lushington Falls|Unchalli;
      Magod Falls|Magod; Hebbe Falls|Hebbe; Mallalli Falls|Mallalli; Iruppu Falls|Irupu Falls|Iruppu; Thoseghar Waterfalls|Thoseghar;
      Havasu Falls; Horseshoe Falls; Kegon Falls|Kegon; Nachi Falls|Nachi; Murchison Falls|Kabalega Falls; Blue Nile Falls|Tis Abay|Tis Issat; Boyoma Falls|Stanley Falls`,
    legendary: ['Kunchikal Falls', 'Boyoma Falls'],
    facts: {
      'Kunchikal Falls': 'A Karnataka waterfall in the Agumbe forest, one of the tallest in India at about 455 m.',
      'Boyoma Falls': 'A series of seven cataracts on the Congo River, the waterfalls with the largest volume of water in the world.',
    },
  },
  {
    id: 'geo-largest-island',
    category: 'geography',
    prompt: 'Name one of the 20 largest islands in the world',
    qualifier: 'The 20 largest islands by area (closed set; Australia counts as a continent)',
    closed: 20,
    strip: ['island'],
    answers: `
      Greenland; New Guinea; Borneo; Madagascar; Baffin Island|Baffin; Sumatra; Honshu; Victoria Island@Victoria Island (Canada);
      Great Britain|Britain; Ellesmere Island|Ellesmere; Sulawesi|Celebes; South Island; Java; North Island; Luzon;
      Newfoundland@Newfoundland (island); Cuba; Iceland; Mindanao; Ireland|Island of Ireland@Ireland (island)`,
    legendary: ['Ellesmere Island', 'Mindanao'],
    facts: {
      'Ellesmere Island': 'The northernmost island of Canada, so far north it is only a short distance from Greenland.',
      Mindanao: 'The second-largest island in the Philippines, famous for Mount Apo and the durian.',
    },
  },
  {
    id: 'geo-us-city',
    category: 'geography',
    prompt: 'Name a large US city',
    qualifier: 'US cities with more than 400,000 people in the 2020 census',
    strip: ['city'],
    answers: `
      New York City|New York|NYC; Los Angeles|LA; Chicago; Houston; Phoenix@Phoenix, Arizona; Philadelphia|Philly;
      San Antonio; San Diego; Dallas; San Jose@San Jose, California; Austin@Austin, Texas; Jacksonville@Jacksonville, Florida;
      Fort Worth; Columbus@Columbus, Ohio; Indianapolis; Charlotte@Charlotte, North Carolina; San Francisco|SF|San Fran; Seattle; Denver;
      Oklahoma City|OKC; Nashville@Nashville, Tennessee; Washington, D.C.|Washington DC|Washington|DC; El Paso@El Paso, Texas;
      Las Vegas|Vegas; Boston; Detroit; Portland@Portland, Oregon; Louisville@Louisville, Kentucky; Memphis@Memphis, Tennessee; Baltimore;
      Milwaukee; Albuquerque@Albuquerque, New Mexico; Tucson@Tucson, Arizona; Fresno@Fresno, California; Sacramento@Sacramento, California;
      Mesa@Mesa, Arizona; Atlanta; Kansas City@Kansas City, Missouri; Colorado Springs@Colorado Springs, Colorado; Omaha@Omaha, Nebraska;
      Raleigh@Raleigh, North Carolina; Miami; Virginia Beach@Virginia Beach, Virginia; Long Beach@Long Beach, California;
      Oakland@Oakland, California; Minneapolis; Tulsa@Tulsa, Oklahoma; Bakersfield@Bakersfield, California`,
    legendary: ['Bakersfield', 'Virginia Beach'],
    facts: {
      Bakersfield: "The oil-and-farming city at the southern end of California's Central Valley, known for the \"Bakersfield sound\" in country music.",
      'Virginia Beach': "Virginia's most populous city, with a long resort beachfront on the Atlantic coast.",
    },
  },
  {
    id: 'geo-canada-province',
    category: 'geography',
    prompt: 'Name a Canadian province or territory',
    qualifier: 'The 10 provinces and 3 territories (closed set)',
    closed: 13,
    answers: `
      Alberta; British Columbia|BC; Manitoba; New Brunswick; Newfoundland and Labrador|Newfoundland|Labrador; Nova Scotia;
      Ontario; Prince Edward Island|PEI; Quebec|Québec; Saskatchewan; Northwest Territories|NWT; Nunavut; Yukon`,
    legendary: ['Nunavut'],
    facts: { Nunavut: "Canada's largest and newest territory, created in 1999, with a population smaller than many towns." },
  },
  {
    id: 'geo-australia-city',
    category: 'geography',
    prompt: 'Name a city or large town in Australia',
    qualifier: 'Capital cities and major regional centres with their own Wikipedia article',
    strip: ['city'],
    answers: `
      Sydney; Melbourne; Brisbane; Perth; Adelaide; Gold Coast@Gold Coast, Queensland; Newcastle@Newcastle, New South Wales; Canberra;
      Wollongong; Hobart; Geelong; Townsville; Cairns; Darwin@Darwin, Northern Territory; Toowoomba; Ballarat; Bendigo;
      Launceston@Launceston, Tasmania; Alice Springs; Mackay@Mackay, Queensland; Rockhampton; Bunbury@Bunbury, Western Australia;
      Bundaberg; Albury; Wagga Wagga; Mildura; Broken Hill; Coober Pedy; Kalgoorlie; Fremantle; Broome@Broome, Western Australia;
      Geraldton; Dubbo; Port Macquarie; Hervey Bay; Gladstone@Gladstone, Queensland; Warrnambool; Shepparton; Whyalla;
      Mount Gambier@Mount Gambier, South Australia; Katherine@Katherine, Northern Territory; Tamworth@Tamworth, New South Wales;
      Lismore@Lismore, New South Wales; Coffs Harbour; Mount Isa; Devonport@Devonport, Tasmania; Burnie`,
    legendary: ['Coober Pedy', 'Whyalla'],
    facts: {
      'Coober Pedy': 'An opal-mining town in South Australia where many people live in underground homes to escape the heat.',
      Whyalla: "A South Australian steel city on Spencer Gulf, once famous for building ships far from the open sea.",
    },
  },
  {
    id: 'geo-japan-city',
    category: 'geography',
    prompt: 'Name one of the largest cities in Japan',
    qualifier: 'Tokyo or one of the 20 designated cities (closed set)',
    closed: 21,
    answers: `
      Tokyo; Yokohama; Osaka; Nagoya; Sapporo; Fukuoka; Kobe; Kawasaki@Kawasaki, Kanagawa; Kyoto; Saitama@Saitama (city); Hiroshima;
      Sendai; Kitakyushu|Kita-Kyushu; Chiba@Chiba (city); Sakai@Sakai, Osaka; Niigata@Niigata (city); Hamamatsu;
      Kumamoto; Sagamihara; Okayama; Shizuoka@Shizuoka (city)`,
    legendary: ['Sagamihara', 'Kitakyushu'],
    facts: {
      Sagamihara: "A designated city in Kanagawa, home to JAXA's space science centre where the Hayabusa probe was run.",
      Kitakyushu: "The city at the northern tip of Kyushu, once a heart of Japan's steel industry.",
    },
  },
  {
    id: 'geo-currency',
    category: 'geography',
    prompt: 'Name a currency used in the world today',
    qualifier: 'Currencies in use by countries, by their usual name (a generic name like "dollar" counts as the main one)',
    strip: ['currency'],
    answers: `
      Rupee|Indian rupee|INR@Indian rupee; Dollar|US dollar|United States dollar|USD@United States dollar; Euro|EUR; Pound|Pound sterling|British pound|GBP@Pound sterling;
      Yen|Japanese yen@Japanese yen; Yuan|Renminbi|RMB@Renminbi; Won|South Korean won@South Korean won; Franc|Swiss franc@Swiss franc;
      Ruble|Rouble|Russian ruble@Russian ruble; Real|Brazilian real@Brazilian real; Rand|South African rand@South African rand;
      Baht|Thai baht@Thai baht; Ringgit|Malaysian ringgit@Malaysian ringgit; Dirham|UAE dirham|United Arab Emirates dirham@United Arab Emirates dirham;
      Riyal|Saudi riyal@Saudi riyal; Dinar|Kuwaiti dinar@Kuwaiti dinar; Krona|Swedish krona@Swedish krona; Krone|Norwegian krone@Norwegian krone;
      Zloty|Złoty|Polish zloty@Polish złoty; Forint|Hungarian forint@Hungarian forint; Koruna|Czech koruna@Czech koruna; Lira|Turkish lira@Turkish lira;
      Shekel|New shekel|Israeli new shekel@Israeli new shekel; Naira|Nigerian naira@Nigerian naira; Shilling|Kenyan shilling@Kenyan shilling;
      Cedi|Ghanaian cedi@Ghanaian cedi; Taka|Bangladeshi taka@Bangladeshi taka; Rupiah|Indonesian rupiah@Indonesian rupiah;
      Dong|Đồng|Vietnamese dong@Vietnamese đồng; Kyat|Burmese kyat|Myanmar kyat@Burmese kyat; Kip|Lao kip@Lao kip; Riel|Cambodian riel@Cambodian riel;
      Tugrik|Tögrög|Mongolian tögrög@Mongolian tögrög; Som|Kyrgyzstani som@Kyrgyzstani som; Lek|Albanian lek@Albanian lek; Lev|Bulgarian lev@Bulgarian lev;
      Leu|Romanian leu@Romanian leu; Hryvnia|Ukrainian hryvnia@Ukrainian hryvnia; Dram|Armenian dram@Armenian dram; Lari|Georgian lari@Georgian lari;
      Manat|Azerbaijani manat@Azerbaijani manat; Tenge|Kazakhstani tenge@Kazakhstani tenge; Rufiyaa|Maldivian rufiyaa@Maldivian rufiyaa;
      Ngultrum|Bhutanese ngultrum@Bhutanese ngultrum; Kwacha|Zambian kwacha@Zambian kwacha; Pula|Botswana pula@Botswana pula;
      Birr|Ethiopian birr@Ethiopian birr; Dalasi|Gambian dalasi@Gambian dalasi; Ariary|Malagasy ariary@Malagasy ariary;
      Peso|Mexican peso@Mexican peso; Guarani|Guaraní|Paraguayan guaraní@Paraguayan guaraní; Quetzal|Guatemalan quetzal@Guatemalan quetzal;
      Loti|Lesotho loti@Lesotho loti; Vatu|Vanuatu vatu@Vanuatu vatu; Kina|Papua New Guinean kina@Papua New Guinean kina;
      Pa'anga|Paanga|Tongan paʻanga@Tongan paʻanga; Tala|Samoan tala@Samoan tālā; Metical|Mozambican metical@Mozambican metical; Kwanza|Angolan kwanza@Angolan kwanza`,
    legendary: ['Ngultrum', "Pa'anga"],
    facts: {
      Ngultrum: "Bhutan's currency, fixed at par with the Indian rupee, which is also accepted there.",
      "Pa'anga": "Tonga's currency; the name comes from a word for the small discs once used in a game.",
    },
  },
];
