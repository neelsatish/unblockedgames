module.exports = [
  {
    id: 'hist-roman-deity',
    category: 'history',
    prompt: 'Name a god or goddess from Roman mythology',
    qualifier: 'Roman names only; Greek names like Zeus do not count',
    answers: `
      Jupiter|Jove@Jupiter (mythology); Juno@Juno (mythology); Neptune@Neptune (mythology); Ceres@Ceres (mythology); Minerva; Apollo; Diana@Diana (mythology);
      Mars@Mars (mythology); Venus@Venus (mythology); Vulcan@Vulcan (mythology); Mercury@Mercury (mythology); Bacchus; Pluto@Pluto (mythology);
      Vesta@Vesta (mythology); Proserpina|Proserpine; Cupid; Victoria@Victoria (mythology); Fortuna; Janus; Saturn@Saturn (mythology);
      Ops@Ops; Aurora@Aurora (mythology); Luna@Luna (goddess); Sol@Sol (Roman mythology); Faunus; Flora@Flora (mythology); Pomona@Pomona (mythology); Terra@Terra (mythology);
      Somnus; Bellona@Bellona (goddess); Quirinus; Liber; Silvanus@Silvanus (mythology); Vertumnus; Concordia@Concordia (mythology); Pax@Pax (mythology);
      Juventas; Terminus@Terminus (mythology); Aesculapius; Hercules; Cybele; Orcus; Dis Pater; Bona Dea; Salus;
      Juturna; Sancus; Portunus; Pales@Pales; Cardea; Saturnus@Saturn (mythology)`.replace('; Saturnus@Saturn (mythology)', ''),
    legendary: ['Cardea', 'Terminus'],
    facts: {
      Cardea: 'A Roman goddess of door hinges, believed to protect households from evil spirits.',
      Terminus: 'The god of boundary stones; Romans held a festival, the Terminalia, to honour him each February.',
    },
  },
  {
    id: 'hist-norse-deity',
    category: 'history',
    prompt: 'Name a god, goddess or being from Norse mythology',
    qualifier: 'Gods, goddesses, giants and creatures of the Norse myths',
    answers: `
      Odin|Woden|Wotan@Odin; Thor@Thor; Loki; Freyja|Freya@Freyja; Freyr|Frey; Frigg|Frigga; Baldr|Balder|Baldur; Tyr|Týr@Týr; Heimdall|Heimdallr@Heimdallr;
      Njord|Njörðr@Njörðr; Skadi|Skaði@Skaði; Bragi; Idun|Iðunn|Idunn@Iðunn; Sif; Hel@Hel (being); Fenrir|Fenris|Fenrisulfr; Jormungandr|Midgard Serpent|Jörmungandr@Jörmungandr;
      Sleipnir; Hod|Höðr|Hodr@Höðr; Vidar|Víðarr@Víðarr; Vali@Váli (son of Odin); Ullr|Ull@Ullr; Forseti; Mimir|Mímir@Mímir; Aegir|Ægir@Ægir; Ran|Rán@Rán;
      Sigyn; Gefjon|Gefion@Gefjon; Eir; Hoenir|Hœnir@Hœnir; Buri|Búri@Búri; Ymir; Angrboda|Angrboða@Angrboða; Huginn and Muninn|Huginn|Muninn@Huginn and Muninn;
      Magni@Móði and Magni; Surtr|Surt@Surtr; Garmr|Garm@Garmr; Ratatoskr; Nidhogg|Níðhöggr@Níðhöggr; Valkyrie|Valkyries@Valkyrie; Fafnir|Fáfnir@Fáfnir;
      Nornir|Norns@Norns; Gullveig; Hyrrokkin|Hyrrokin@Hyrrokkin; Thrym|Þrymr@Þrymr; Skrymir|Skrýmir@Skrýmir; Mjolnir|Mjölnir@Mjölnir`,
    tryhard: ['Hyrrokkin'],
    legendary: ['Forseti', 'Gefjon'],
    facts: {
      Forseti: 'The god of justice and reconciliation, said to settle every dispute that came to him.',
      Gefjon: 'In the Prose Edda she ploughed away land from Sweden that became the Danish island of Zealand.',
    },
  },
  {
    id: 'hist-egyptian-deity',
    category: 'history',
    prompt: 'Name a god or goddess from ancient Egypt',
    qualifier: 'Deities of ancient Egyptian religion and myth',
    answers: `
      Ra|Re@Ra; Osiris; Isis; Horus; Set|Seth@Set (deity); Anubis; Thoth; Hathor; Bastet|Bast; Sekhmet; Ptah; Amun|Amon|Amun-Ra|Amen@Amun;
      Aten|Aton@Aten; Nut|Nuit@Nut (goddess); Geb|Seb; Shu@Shu (Egyptian god); Tefnut; Nephthys|Nebthet; Sobek|Sebek; Khnum; Khonsu|Khons;
      Maat|Ma'at|Maat@Maat; Mut@Mut; Neith; Serket|Selket|Serqet@Serket; Taweret|Thoeris|Tawaret; Bes@Bes; Apis@Apis (deity); Apep|Apophis|Apopis@Apep;
      Atum|Tem; Khepri|Khepera; Hapi@Hapi (Nile god); Seshat|Sesheta; Wadjet|Uto|Buto@Wadjet; Nekhbet|Nekhbit; Min@Min (god); Montu|Mentu;
      Heka@Heka (god); Satet|Satis; Anuket|Anukis; Meretseger|Meresger; Anhur|Onuris; Ammit|Ammut; Renenutet|Renenet; Wepwawet|Wepwawet; Sokar|Seker;
      Neper|Nepri; Hemen; Mafdet; Nefertem|Nefertum; Imentet`,
    legendary: ['Meretseger', 'Ammit'],
    facts: {
      Meretseger: 'A cobra goddess of the Theban hills, her name means "she who loves silence", who watched over the workers\' tombs.',
      Ammit: 'A creature with a crocodile head, a lion\'s body and a hippo\'s hindquarters, who waited at the weighing of the heart.',
    },
  },
  {
    id: 'hist-ramayana-character',
    category: 'history',
    prompt: 'Name a character from the Ramayana',
    qualifier: 'Named characters of Valmiki\'s epic',
    answers: `
      Rama|Ram|Sri Rama@Rama; Sita|Seetha@Sita; Lakshmana|Lakshman|Laxman@Lakshmana; Hanuman|Hanumaan@Hanuman; Ravana|Raavan@Ravana;
      Bharata|Bharat@Bharata (Ramayana); Shatrughna|Shatrughan@Shatrughna; Dasharatha|Dashratha|Dasaratha@Dasharatha; Kaushalya|Kausalya@Kausalya;
      Kaikeyi|Kaikeyee@Kaikeyi; Sumitra@Sumitra; Sugriva|Sugreeva@Sugriva; Vali|Bali|Vaali@Vali (Ramayana); Angada|Angad@Angada;
      Jambavan|Jambavant|Jambavantha|Jambavan@Jambavan; Vibhishana|Vibhishan|Vibheeshana@Vibhishana; Kumbhakarna|Kumbhkaran|Kumbakarna@Kumbhakarna;
      Indrajit|Meghnad|Meghanada@Indrajit; Surpanakha|Shurpanakha|Soorpanakha@Shurpanakha; Mandodari@Mandodari; Maricha|Marichi@Maricha;
      Jatayu|Jatayus@Jatayu; Sampati|Sampathi@Sampati; Shabari|Sabari|Shabri@Shabari; Manthara|Kubja@Manthara; Valmiki|Valmeeki@Valmiki;
      Janaka|Janak|King Janaka@Janaka; Urmila|Urmilla@Urmila; Lava and Kusha|Lava|Kusha|Luv Kush|Lav Kush@Lava (Ramayana); Tataka|Tadaka|Taraka@Tataka;
      Ahalya|Ahilya@Ahalya; Trijata|Trijata@Trijata; Kabandha@Kabandha; Vishvamitra|Vishwamitra@Vishvamitra; Vasishtha|Vashistha|Vasistha@Vasishtha;
      Agastya|Agasthya@Agastya; Rishyasringa|Rishyashringa|Rishyasrnga@Rishyasringa; Nala@Nala (Ramayana);
      Nila@Nila (Ramayana); Sushena@Sushena; Atikaya@Atikaya; Prahasta@Prahasta; Mayasura|Maya@Mayasura`,
    legendary: ['Trijata', 'Sampati'],
    facts: {
      Trijata: 'A rakshasi who guarded Sita in Lanka but befriended her, and whose dream foretold Ravana\'s fall.',
      Sampati: 'The elder brother of Jatayu; with his wings burnt, he used his far sight to tell the vanaras where Sita was held.',
    },
  },
  {
    id: 'hist-mahabharata-character',
    category: 'history',
    prompt: 'Name a character from the Mahabharata',
    qualifier: 'Named characters of Vyasa\'s epic, Pandavas, Kauravas and others',
    answers: `
      Arjuna|Arjun@Arjuna; Bhima@Bhima; Yudhishthira|Yudhisthira|Dharmaraja|Yudhishtir@Yudhishthira; Nakula|Nakul@Nakula; Sahadeva|Sahadev@Sahadeva;
      Draupadi|Panchali|Krishnaa@Draupadi; Krishna@Krishna; Karna|Karan@Karna; Duryodhana|Suyodhana|Duryodhan@Duryodhana; Dushasana|Dussasana|Dushasan@Dushasana;
      Shakuni|Sakuni@Shakuni; Bhishma|Bheeshma@Bhishma; Drona|Dronacharya|Guru Drona@Drona; Ashwatthama|Ashwathama|Aswatthama@Ashvatthama;
      Kripa|Kripacharya@Kripa; Kunti|Pritha@Kunti; Gandhari|Gandhaari@Gandhari; Dhritarashtra|Dhritrashtra@Dhritarashtra; Pandu@Pandu; Vidura|Vidur@Vidura;
      Vyasa|Ved Vyasa|Vedavyasa@Vyasa; Sanjaya@Sanjaya; Abhimanyu@Abhimanyu; Ghatotkacha|Ghatotkach@Ghatotkacha; Hidimbi|Hidimba (female)@Hidimbi;
      Hidimba@Hidimba; Ekalavya|Eklavya@Ekalavya; Uttara@Uttara (Mahabharata); Subhadra@Subhadra; Balarama|Balram@Balarama; Satyaki@Satyaki;
      Drupada|Yajnasena@Drupada; Dhrishtadyumna|Dhrishtadyumna@Dhrishtadyumna; Shikhandi|Shikhandin@Shikhandi; Jayadratha|Jayadrath@Jayadratha;
      Parikshit|Parikshita@Parikshit; Madri@Madri; Ulupi|Uloopi@Ulupi; Chitrangada@Chitrangada (princess); Barbarika|Barbarik@Barbarika;
      Iravan|Aravan@Iravan; Bhurishravas@Bhurishravas; Shalya|Salya@Shalya; Kritavarma@Kritavarma; Vikarna@Vikarna; Yuyutsu@Yuyutsu;
      Kichaka|Keechaka@Kichaka; Virata|Matsya king Virata@Virata; Satyavati|Matsyagandha@Satyavati; Shantanu|Shantanu@Shantanu; Amba@Amba (Mahabharata);
      Ambika@Ambika (Mahabharata); Ambalika@Ambalika; Sudeshna@Sudeshna; Bhagadatta@Bhagadatta; Shishupala|Sisupala@Shishupala; Jarasandha|Jarasandh@Jarasandha;
      Dhaumya@Dhaumya`,
    tryhard: ['Barbarika'],
    legendary: ['Barbarika', 'Yuyutsu'],
    facts: {
      Barbarika: 'A folk-tradition warrior, grandson of Bhima, said to be able to end the war in one minute with just three arrows.',
      Yuyutsu: 'A son of Dhritarashtra by a maidservant who left his Kaurava brothers to join the Pandavas before the war.',
    },
  },
  {
    id: 'hist-mughal-emperor',
    category: 'history',
    prompt: 'Name an emperor of the Mughal Empire',
    qualifier: 'The 18 main emperors, from Babur (1526) to Bahadur Shah Zafar (1857)',
    strip: ['emperor'],
    closed: 18,
    answers: `
      Babur@Babur; Humayun; Akbar@Akbar; Jahangir; Shah Jahan|Shahjahan|Shah Jehan; Aurangzeb|Alamgir|Alamgir I@Aurangzeb;
      Bahadur Shah I|Bahadur Shah Alam|Shah Alam I@Bahadur Shah I; Jahandar Shah; Farrukhsiyar|Farrukhsiyar; Rafi ud-Darajat|Rafi-ud-Darjat@Rafi ud-Darajat;
      Rafi ud-Daulah|Shah Jahan II@Rafi ud-Daulah; Muhammad Shah|Muhammad Shah Rangila|Rangila; Ahmad Shah Bahadur|Ahmad Shah@Ahmad Shah Bahadur;
      Alamgir II@Alamgir II; Shah Jahan III@Shah Jahan III; Shah Alam II@Shah Alam II; Akbar II|Akbar Shah II@Akbar II;
      Bahadur Shah II|Bahadur Shah Zafar|Bahadur Shah@Bahadur Shah II`,
    legendary: ['Rafi ud-Darajat', 'Rafi ud-Daulah'],
    facts: {
      'Rafi ud-Darajat': 'Became emperor in 1719 as a young man and reigned for only about three months.',
      'Rafi ud-Daulah': 'Ruled for just a few months in 1719, the second of two brothers to reign briefly that year.',
    },
  },
  {
    id: 'hist-freedom-fighter',
    category: 'history',
    prompt: 'Name an Indian freedom fighter',
    qualifier: 'Leaders and revolutionaries of the Indian independence movement, 1757 to 1947',
    answers: `
      Mahatma Gandhi|Gandhi|Mohandas Gandhi|MK Gandhi|Bapu@Mahatma Gandhi; Jawaharlal Nehru|Nehru; Subhas Chandra Bose|Subhash Chandra Bose|Netaji|Bose@Subhas Chandra Bose;
      Bhagat Singh; Chandrashekhar Azad|Chandra Shekhar Azad|Azad@Chandra Shekhar Azad; Vallabhbhai Patel|Sardar Patel|Sardar Vallabhbhai Patel@Vallabhbhai Patel;
      Bal Gangadhar Tilak|Tilak|Lokmanya Tilak; Lala Lajpat Rai|Lajpat Rai; Bipin Chandra Pal|Bipin Pal; Gopal Krishna Gokhale|Gokhale;
      Dadabhai Naoroji|Naoroji; Rani Lakshmibai|Lakshmibai|Rani of Jhansi|Jhansi ki Rani@Lakshmibai, Rani of Jhansi; Mangal Pandey;
      Tatya Tope|Tantia Tope@Tatya Tope; Velu Nachiyar|Rani Velu Nachiyar@Velu Nachiyar; Kittur Chennamma|Rani Chennamma|Chennamma@Kittur Chennamma;
      Tipu Sultan|Tiger of Mysore@Tipu Sultan; Abul Kalam Azad|Maulana Azad|Maulana Abul Kalam Azad@Abul Kalam Azad; Sarojini Naidu|Nightingale of India;
      Rajendra Prasad; C. Rajagopalachari|Rajaji|Rajagopalachari@C. Rajagopalachari; B. R. Ambedkar|Ambedkar|Babasaheb Ambedkar|BR Ambedkar@B. R. Ambedkar;
      Abdul Ghaffar Khan|Frontier Gandhi|Badshah Khan@Abdul Ghaffar Khan; Rash Behari Bose; Sukhdev Thapar|Sukhdev; Shivaram Rajguru|Rajguru;
      Ram Prasad Bismil|Bismil; Ashfaqulla Khan|Ashfaqullah Khan; Khudiram Bose; Surya Sen|Masterda; Har Dayal|Lala Har Dayal;
      Bhikaiji Cama|Madame Cama|Madam Cama; Aruna Asaf Ali; Vinoba Bhave|Vinoba; Jayaprakash Narayan|JP Narayan|Loknayak; Annie Besant; Sri Aurobindo|Aurobindo Ghose|Aurobindo;
      Birsa Munda; Veerapandiya Kattabomman|Kattabomman|Veerapandiya Kattabomman@Veerapandiya Kattabomman; Alluri Sitarama Raju|Alluri Sitarama Raju; Pingali Venkayya;
      Udham Singh; Matangini Hazra; Kasturba Gandhi|Kasturba; V. O. Chidambaram Pillai|VO Chidambaram Pillai|Chidambaram Pillai|VOC@V. O. Chidambaram Pillai;
      Subramania Bharati|Subramanya Bharathi|Bharathiyar|Subramania Bharathi@Subramania Bharati; Sangolli Rayanna; Rani Gaidinliu|Gaidinliu; Pazhassi Raja|Kerala Varma Pazhassi Raja@Pazhassi Raja;
      Durgabai Deshmukh; Lal Bahadur Shastri|Shastri; Maharana Pratap? ; Kanaklata Barua|Kanaklata Barua@Kanaklata Barua; Ullaskar Dutta;
      Vasudev Balwant Phadke|Vasudev Balwant Phadke@Vasudev Balwant Phadke; Rani Abbakka|Abbakka Chowta@Abbakka Chowta;
      Madan Lal Dhingra|Madan Lal Dhingra@Madan Lal Dhingra; Pritilata Waddedar|Pritilata Waddedar@Pritilata Waddedar; Vir Narayan Singh`.replace(/; Maharana Pratap\? ;/, ';').replace(/; Lala Hardayal Singh;/, ';').replace(/; Vir Narayan Singh$/, '').replace('Pritilata Waddedar|Pritilata Waddedar@', 'Pritilata Waddedar@').replace('Madan Lal Dhingra|Madan Lal Dhingra@', 'Madan Lal Dhingra@').replace('Kanaklata Barua|Kanaklata Barua@', 'Kanaklata Barua@').replace('Vasudev Balwant Phadke|Vasudev Balwant Phadke@', 'Vasudev Balwant Phadke@'),
    legendary: ['Matangini Hazra', 'Pingali Venkayya'],
    facts: {
      'Matangini Hazra': 'A Bengal veteran of the movement who led a procession at Tamluk in 1942 carrying the national flag.',
      'Pingali Venkayya': 'A man from Andhra who designed the flag that became the basis for India\'s national flag.',
    },
  },
  {
    id: 'hist-indian-president',
    category: 'history',
    prompt: 'Name a President of India',
    qualifier: 'Elected Presidents since 1950, up to 2025; acting presidents do not count',
    strip: ['president'],
    closed: 15,
    answers: `
      Rajendra Prasad|Dr Rajendra Prasad; Sarvepalli Radhakrishnan|Radhakrishnan|S. Radhakrishnan@Sarvepalli Radhakrishnan; Zakir Husain|Zakir Hussain|Dr Zakir Husain@Zakir Husain (politician);
      V. V. Giri|VV Giri|Varahagiri Venkata Giri|Giri@V. V. Giri; Fakhruddin Ali Ahmed|Fakhruddin Ahmed; Neelam Sanjiva Reddy|Sanjiva Reddy|N. Sanjiva Reddy@Neelam Sanjiva Reddy;
      Zail Singh|Giani Zail Singh@Zail Singh; R. Venkataraman|Venkataraman|Ramaswamy Venkataraman@R. Venkataraman; Shankar Dayal Sharma;
      K. R. Narayanan|Narayanan|KR Narayanan@K. R. Narayanan; A. P. J. Abdul Kalam|Abdul Kalam|Kalam|APJ Abdul Kalam@A. P. J. Abdul Kalam;
      Pratibha Patil|Pratibha Devisingh Patil; Pranab Mukherjee; Ram Nath Kovind|Kovind; Droupadi Murmu|Murmu`,
    legendary: ['Fakhruddin Ali Ahmed', 'V. V. Giri'],
    facts: {
      'Fakhruddin Ali Ahmed': 'The second President to die in office, in 1977.',
      'V. V. Giri': 'The only President elected as an independent candidate, in the close 1969 contest.',
    },
  },
  {
    id: 'hist-indian-dynasty',
    category: 'history',
    prompt: 'Name a dynasty or empire that ruled part of India',
    qualifier: 'Ruling dynasties and empires of the Indian subcontinent before 1858',
    strip: ['dynasty', 'empire'],
    missingTier: 'deep',
    answers: `
      Maurya Empire|Mauryan|Maurya; Gupta Empire|Gupta|Guptas; Chola dynasty|Cholas|Chola@Chola dynasty; Chera dynasty|Cheras|Chera; Pandya dynasty|Pandyas|Pandya;
      Pallava dynasty|Pallavas|Pallava; Chalukya dynasty|Chalukya|Chalukyas; Rashtrakuta dynasty|Rashtrakuta|Rashtrakutas; Hoysala Empire|Hoysala|Hoysalas;
      Kadamba dynasty|Kadamba|Kadambas; Western Ganga dynasty|Ganga|Gangas@Western Ganga dynasty; Vijayanagara Empire|Vijayanagara|Vijayanagar;
      Bahmani Sultanate|Bahmani|Bahmanis; Satavahana dynasty|Satavahana|Satavahanas; Kushan Empire|Kushan|Kushana; Shunga Empire|Sunga|Shunga;
      Kanva dynasty|Kanva|Kanvas; Nanda Empire|Nanda dynasty|Nanda|Nandas; Haryanka dynasty|Haryanka; Shaishunaga dynasty|Shishunaga|Shishunaga dynasty;
      Pala Empire|Pala|Palas; Sena dynasty|Sena|Senas; Gurjara-Pratihara dynasty|Pratihara|Gurjara-Pratihara|Pratiharas; Paramara dynasty|Paramara|Parmar;
      Chahamana dynasty|Chauhan|Chauhans|Chahamana; Chaulukya dynasty|Solanki|Solankis|Chaulukya; Chandela dynasty|Chandela|Chandelas;
      Kakatiya dynasty|Kakatiya|Kakatiyas; Seuna dynasty|Yadava|Yadavas|Seuna@Seuna (Yadava) dynasty; Mughal Empire|Mughal|Mughals; Maratha Empire|Maratha|Marathas;
      Sikh Empire|Sikh; Ahom dynasty|Ahom|Ahoms; Delhi Sultanate|Delhi Sultan; Vakataka dynasty|Vakataka|Vakatakas; Maukhari dynasty|Maukhari|Maukharis;
      Pushyabhuti dynasty|Vardhana dynasty|Harsha's dynasty@Pushyabhuti dynasty; Gahadavala dynasty|Gahadavala|Gahadvala; Wadiyar dynasty|Wodeyar|Wadiyar|Wodeyars@Wadiyar dynasty;
      Kalachuri dynasty|Kalachuri|Kalachuris; Eastern Ganga dynasty|Eastern Ganga; Indo-Greek Kingdom|Indo-Greeks|Indo-Greek; Hindu Shahi|Shahi dynasty@Hindu Shahis;
      Khalji dynasty|Khilji|Khalji|Khilji dynasty; Tughlaq dynasty|Tughluq|Tughlaq|Tughlaq dynasty@Tughlaq dynasty; Lodi dynasty|Lodi|Lodis@Lodi dynasty;
      Sayyid dynasty|Sayyid|Sayyids@Sayyid dynasty; Mamluk dynasty (Delhi)|Slave dynasty|Mamluk dynasty|Mamluk@Mamluk dynasty (Delhi); Western Satraps|Kshatrapas|Saka Western Satraps@Western Satraps`,
    tryhard: ['Vakataka dynasty'],
    legendary: ['Vakataka dynasty', 'Maukhari dynasty'],
    facts: {
      'Vakataka dynasty': 'Ruled the Deccan in the 3rd to 5th centuries and sponsored some of the finest Ajanta caves.',
      'Maukhari dynasty': 'Ruled from Kannauj in the 6th century, and later fought for the same land that Harsha would take.',
    },
  },
  {
    id: 'hist-british-monarch',
    category: 'history',
    prompt: 'Name a King or Queen of England or Britain since 1066',
    qualifier: 'Crowned or regnant monarchs from William the Conqueror to Charles III',
    strip: ['king', 'queen'],
    answers: `
      William I|William the Conqueror@William the Conqueror; William II|William Rufus@William II of England; Henry I|Henry Beauclerc@Henry I of England;
      Stephen|King Stephen@Stephen, King of England; Matilda|Empress Matilda|Maud@Empress Matilda; Henry II@Henry II of England;
      Richard I|Richard the Lionheart|Richard Lionheart|Lionheart@Richard I of England; John|King John|John Lackland@John, King of England; Henry III@Henry III of England;
      Edward I|Longshanks@Edward I of England; Edward II@Edward II of England; Edward III@Edward III of England; Richard II@Richard II of England;
      Henry IV@Henry IV of England; Henry V@Henry V of England; Henry VI@Henry VI of England; Edward IV@Edward IV of England; Edward V@Edward V of England;
      Richard III@Richard III of England; Henry VII@Henry VII of England; Henry VIII@Henry VIII of England; Edward VI@Edward VI of England;
      Lady Jane Grey|Jane Grey|Queen Jane|Nine Days' Queen@Lady Jane Grey; Mary I|Bloody Mary@Mary I of England; Elizabeth I|Good Queen Bess|Gloriana@Elizabeth I;
      James I|James VI and I|James VI@James VI and I; Charles I@Charles I of England; Charles II@Charles II of England; James II@James II of England;
      William III|William of Orange@William III of England; Mary II@Mary II of England; Anne|Queen Anne@Anne, Queen of Great Britain;
      George I@George I of Great Britain; George II@George II of Great Britain; George III@George III; George IV@George IV; William IV@William IV;
      Victoria|Queen Victoria@Queen Victoria; Edward VII; George V; Edward VIII; George VI; Elizabeth II|Queen Elizabeth II|Queen Elizabeth; Charles III|King Charles III`,
    legendary: ['Edward V', 'Lady Jane Grey'],
    facts: {
      'Edward V': 'Was king for about 11 weeks in 1483, aged 12, and was never crowned.',
      'Lady Jane Grey': 'Proclaimed queen in 1553 and reigned for only nine days, giving her the nickname the Nine Days\' Queen.',
    },
  },
  {
    id: 'hist-roman-emperor',
    category: 'history',
    prompt: 'Name a Roman emperor',
    qualifier: 'Emperors of Rome from Augustus to Romulus Augustulus, including usurpers who held the throne',
    strip: ['emperor'],
    answers: `
      Augustus|Octavian|Octavius@Augustus; Tiberius@Tiberius; Caligula|Gaius@Caligula; Claudius@Claudius; Nero@Nero; Galba@Galba; Otho@Otho; Vitellius@Vitellius;
      Vespasian@Vespasian; Titus@Titus; Domitian@Domitian; Nerva@Nerva; Trajan@Trajan; Hadrian@Hadrian; Antoninus Pius@Antoninus Pius;
      Marcus Aurelius@Marcus Aurelius; Lucius Verus@Lucius Verus; Commodus@Commodus; Pertinax@Pertinax; Didius Julianus|Julianus@Didius Julianus;
      Septimius Severus|Severus@Septimius Severus; Caracalla@Caracalla; Geta|Publius Septimius Geta@Publius Septimius Geta; Macrinus@Macrinus;
      Elagabalus|Heliogabalus@Elagabalus; Severus Alexander|Alexander Severus@Severus Alexander; Maximinus Thrax|Maximinus@Maximinus Thrax;
      Gordian I@Gordian I; Gordian II@Gordian II; Gordian III@Gordian III; Philip the Arab|Philip I@Philip the Arab; Decius@Decius;
      Valerian@Valerian (emperor); Gallienus@Gallienus; Claudius Gothicus|Claudius II@Claudius Gothicus; Aurelian@Aurelian; Tacitus@Tacitus (emperor);
      Probus@Probus (emperor); Carus@Carus; Diocletian@Diocletian; Maximian@Maximian; Constantius Chlorus|Constantius I@Constantius Chlorus; Galerius@Galerius;
      Constantine the Great|Constantine I|Constantine@Constantine the Great; Maxentius@Maxentius; Licinius@Licinius; Constantine II@Constantine II (emperor);
      Constans|Constans I@Constans; Constantius II@Constantius II; Julian|Julian the Apostate@Julian (emperor); Jovian@Jovian (emperor); Valentinian I@Valentinian I;
      Valens@Valens; Gratian@Gratian; Theodosius I|Theodosius the Great|Theodosius@Theodosius I; Honorius@Honorius (emperor); Arcadius@Arcadius;
      Romulus Augustulus|Romulus@Romulus Augustulus`,
    legendary: ['Didius Julianus'],
    facts: { 'Didius Julianus': 'Won the throne in 193 AD by outbidding rivals at an auction run by the Praetorian Guard, and lasted about two months.' },
  },
  {
    id: 'hist-pharaoh',
    category: 'history',
    prompt: 'Name a pharaoh of ancient Egypt',
    qualifier: 'Rulers of ancient Egypt from Narmer to Cleopatra',
    strip: ['pharaoh'],
    answers: `
      Narmer|Menes@Narmer; Djoser|Zoser|Netjerikhet@Djoser; Sneferu|Snefru|Snofru@Sneferu; Khufu|Cheops@Khufu; Khafre|Chephren@Khafre; Menkaure|Mycerinus@Menkaure;
      Pepi II|Pepy II|Pepi II Neferkare@Pepi II Neferkare; Mentuhotep II|Nebhepetre Mentuhotep@Mentuhotep II; Senusret I|Sesostris I@Senusret I;
      Senusret III|Sesostris III@Senusret III; Amenemhat III@Amenemhat III; Sobekneferu|Neferusobek@Sobekneferu; Ahmose I|Ahmose@Ahmose I;
      Thutmose I|Tuthmosis I|Thutmosis I@Thutmose I; Thutmose II|Tuthmosis II@Thutmose II; Hatshepsut@Hatshepsut; Thutmose III|Tuthmosis III@Thutmose III;
      Amenhotep II|Amenophis II@Amenhotep II; Amenhotep III|Amenophis III@Amenhotep III; Akhenaten|Amenhotep IV|Akhenaton|Ikhnaton@Akhenaten;
      Smenkhkare|Smenkhkara@Smenkhkare; Tutankhamun|King Tut|Tutankhamen|Tut@Tutankhamun; Ay@Ay (pharaoh); Horemheb|Haremhab@Horemheb; Ramesses I|Ramses I@Ramesses I;
      Seti I|Sethos I@Seti I; Ramesses II|Ramses II|Rameses II|Ramesses the Great@Ramesses II; Merneptah|Merenptah@Merneptah; Ramesses III|Ramses III@Ramesses III;
      Psamtik I|Psammetichus I@Psamtik I; Necho II|Necho@Necho II; Apries|Wahibre@Apries; Amasis II|Ahmose II@Amasis II; Nectanebo II@Nectanebo II;
      Cleopatra VII|Cleopatra@Cleopatra; Ptolemy I Soter|Ptolemy I@Ptolemy I Soter; Taharqa|Taharka@Taharqa; Shoshenq I|Shishak|Sheshonk I@Shoshenq I;
      Teti|Teti I@Teti; Unas|Unis@Unas; Userkaf@Userkaf; Sahure@Sahure; Djedefre|Radjedef@Djedefre; Shepseskaf@Shepseskaf; Hor-Aha|Aha@Hor-Aha;
      Amenemhat I@Amenemhat I; Thutmose IV|Tuthmosis IV@Thutmose IV; Khasekhemwy@Khasekhemwy; Psusennes I@Psusennes I; Piye|Piankhi@Piye;
      Ptolemy II Philadelphus|Ptolemy II@Ptolemy II Philadelphus; Nefertiti@Nefertiti`.replace('; Nefertiti@Nefertiti', ''),
    legendary: ['Sobekneferu', 'Khasekhemwy'],
    facts: {
      Sobekneferu: 'Probably the first woman confirmed to have ruled Egypt as pharaoh, at the end of the 12th Dynasty.',
      Khasekhemwy: 'The last king of the Second Dynasty, who reunited Egypt after a period of unrest.',
    },
  },
  {
    id: 'hist-ancient-civilization',
    category: 'history',
    prompt: 'Name an ancient civilisation or empire',
    qualifier: 'Peoples and states of the ancient and early medieval world, before about 600 AD in the Old World or 1500 in the Americas',
    strip: ['civilization', 'civilisation', 'empire', 'ancient'],
    answers: `
      Egyptian|Egypt|Ancient Egypt@Ancient Egypt; Mesopotamian|Mesopotamia@Mesopotamia; Sumerian|Sumer|Sumerians@Sumer; Akkadian|Akkad@Akkadian Empire;
      Babylonian|Babylon|Babylonia@Babylonia; Assyrian|Assyria@Assyria; Indus Valley|Harappan|Indus|Indus Valley Civilisation|Harappa@Indus Valley Civilisation;
      Persian|Persia|Achaemenid|Achaemenid Empire@Achaemenid Empire; Greek|Greece|Ancient Greece@Ancient Greece; Roman|Rome|Ancient Rome@Ancient Rome;
      Phoenician|Phoenicians|Phoenicia@Phoenicia; Minoan|Minoans@Minoan civilization; Mycenaean|Mycenaeans@Mycenaean Greece; Hittite|Hittites@Hittites;
      Etruscan|Etruscans@Etruscan civilization; Carthaginian|Carthage|Carthaginians@Ancient Carthage; Maya|Mayan|Mayans@Maya civilization;
      Aztec|Aztecs@Aztec Empire; Inca|Incas|Incan@Inca Empire; Olmec|Olmecs@Olmecs; Zapotec|Zapotecs@Zapotec civilization; Teotihuacan@Teotihuacan;
      Nazca|Nasca@Nazca culture; Moche|Mochica@Moche culture; Caral|Norte Chico@Caral-Supe civilization; Kushite|Kush|Nubia|Nubian@Kingdom of Kush;
      Aksumite|Aksum|Axum@Kingdom of Aksum; Parthian|Parthia|Parthians@Parthian Empire; Sasanian|Sassanid|Sasanian Empire@Sasanian Empire; Scythian|Scythians@Scythians;
      Celtic|Celts|Celt@Celts; Thracian|Thracians|Thrace@Thracians; Dacian|Dacians|Dacia@Dacia; Elamite|Elam@Elam; Urartian|Urartu@Urartu; Lydian|Lydia@Lydia;
      Phrygian|Phrygia@Phrygia; Nabataean|Nabataeans|Nabatean@Nabataeans; Mitanni|Mitannian@Mitanni; Kassite|Kassites@Kassites; Khmer|Khmer Empire@Khmer Empire;
      Ancestral Puebloan|Anasazi|Ancestral Puebloans@Ancestral Puebloans; Mississippian|Mississippian culture@Mississippian culture; Vedic|Vedic civilisation@Vedic period;
      Dilmun@Dilmun; Maurya|Mauryan Empire|Maurya Empire@Maurya Empire; Gupta|Gupta Empire@Gupta Empire; Han|Han dynasty|Han China@Han dynasty;
      Macedonian|Macedon|Macedonia|Macedonian Empire@Macedonia (ancient kingdom); Seleucid|Seleucids|Seleucid Empire@Seleucid Empire; Hellenistic|Hellenistic Greece@Hellenistic period`,
    legendary: ['Caral', 'Dilmun'],
    facts: {
      Caral: 'A city in Peru, about 5,000 years old, among the earliest in the Americas, built with no sign of pottery or walls of war.',
      Dilmun: 'A Bronze Age trading land in the Persian Gulf, linked to Bahrain, which Sumerian poems described as a paradise.',
    },
  },
  {
    id: 'hist-explorer',
    category: 'history',
    prompt: 'Name a famous explorer or traveller',
    qualifier: 'Explorers, navigators and travellers from history, not astronauts',
    strip: ['explorer'],
    answers: `
      Christopher Columbus|Columbus@Christopher Columbus; Vasco da Gama|Da Gama@Vasco da Gama; Ferdinand Magellan|Magellan@Ferdinand Magellan; Marco Polo@Marco Polo;
      James Cook|Captain Cook@James Cook; Amerigo Vespucci|Vespucci@Amerigo Vespucci; Bartolomeu Dias|Bartholomew Diaz|Dias@Bartolomeu Dias; Henry Hudson@Henry Hudson;
      John Cabot|Giovanni Caboto@John Cabot; Jacques Cartier|Cartier@Jacques Cartier; Samuel de Champlain|Champlain@Samuel de Champlain;
      Hernán Cortés|Hernan Cortes|Cortes|Cortez@Hernán Cortés; Francisco Pizarro|Pizarro@Francisco Pizarro; Leif Erikson|Leif Ericson|Leif Eriksson@Leif Erikson;
      Erik the Red|Eric the Red@Erik the Red; Ibn Battuta@Ibn Battuta; Zheng He|Cheng Ho@Zheng He; Roald Amundsen|Amundsen@Roald Amundsen;
      Robert Falcon Scott|Captain Scott|Scott@Robert Falcon Scott; Ernest Shackleton|Shackleton@Ernest Shackleton; Edmund Hillary|Hillary@Edmund Hillary;
      Tenzing Norgay|Tenzing@Tenzing Norgay; Francis Drake|Sir Francis Drake|Drake@Francis Drake; Walter Raleigh|Sir Walter Raleigh|Raleigh@Walter Raleigh;
      Abel Tasman|Tasman@Abel Tasman; Vitus Bering|Bering@Vitus Bering; Juan Ponce de León|Ponce de Leon@Juan Ponce de León; Hernando de Soto|De Soto@Hernando de Soto;
      Vasco Núñez de Balboa|Balboa@Vasco Núñez de Balboa; Meriwether Lewis|Lewis@Meriwether Lewis; William Clark|Clark@William Clark (explorer);
      David Livingstone|Livingstone@David Livingstone; Henry Morton Stanley|Stanley@Henry Morton Stanley; Mungo Park@Mungo Park (explorer);
      Richard Francis Burton|Richard Burton@Richard Francis Burton; Alexander von Humboldt|Humboldt@Alexander von Humboldt; Fridtjof Nansen|Nansen@Fridtjof Nansen;
      Robert Peary|Peary@Robert Peary; Matthew Henson|Henson@Matthew Henson; Thor Heyerdahl|Heyerdahl@Thor Heyerdahl; Jacques Cousteau|Cousteau@Jacques Cousteau;
      Pytheas|Pytheas of Massalia@Pytheas; Xuanzang|Hiuen Tsang|Hsuan Tsang|Hieun Tsang@Xuanzang; Faxian|Fa-Hien|Fa Hien|Fa-hsien@Faxian;
      Afanasy Nikitin|Athanasius Nikitin@Afanasy Nikitin; Pedro Álvares Cabral|Pedro Alvares Cabral|Cabral@Pedro Álvares Cabral; Willem Barentsz|Barentsz@Willem Barentsz;
      Matthew Flinders|Flinders@Matthew Flinders; John Franklin|Franklin@John Franklin; Sacagawea|Sacajawea@Sacagawea; Henry the Navigator|Prince Henry the Navigator@Prince Henry the Navigator;
      Gertrude Bell@Gertrude Bell; Mary Kingsley@Mary Kingsley; Ibn Fadlan|Ahmad ibn Fadlan@Ahmad ibn Fadlan; Hanno the Navigator|Hanno@Hanno the Navigator`,
    legendary: ['Pytheas', 'Afanasy Nikitin'],
    facts: {
      Pytheas: 'A Greek from Massalia who sailed to Britain and beyond around 325 BC and described the midnight sun.',
      'Afanasy Nikitin': 'A Russian merchant who travelled to India in the 1460s and wrote "A Journey Beyond Three Seas".',
    },
  },
  {
    id: 'hist-inventor',
    category: 'history',
    prompt: 'Name a famous inventor',
    qualifier: 'Inventors of well-known machines and devices, ancient to modern, with a Wikipedia article',
    strip: ['inventor'],
    answers: `
      Thomas Edison|Edison@Thomas Edison; Alexander Graham Bell|Graham Bell|Bell@Alexander Graham Bell; Nikola Tesla|Tesla@Nikola Tesla;
      Wright brothers|Orville Wright|Wilbur Wright|Wright Brothers@Wright brothers; Guglielmo Marconi|Marconi@Guglielmo Marconi; Johannes Gutenberg|Gutenberg@Johannes Gutenberg;
      James Watt|Watt@James Watt; George Stephenson|Stephenson@George Stephenson; Karl Benz|Benz@Karl Benz; Henry Ford|Ford@Henry Ford;
      Samuel Morse|Morse@Samuel Morse; Alessandro Volta|Volta@Alessandro Volta; Benjamin Franklin|Franklin@Benjamin Franklin; Eli Whitney|Whitney@Eli Whitney;
      Alfred Nobel|Nobel@Alfred Nobel; Louis Braille|Braille@Louis Braille; John Logie Baird|Logie Baird|Baird@John Logie Baird; Tim Berners-Lee|Berners-Lee@Tim Berners-Lee;
      Charles Babbage|Babbage@Charles Babbage; Rudolf Diesel|Diesel@Rudolf Diesel; Gottlieb Daimler|Daimler@Gottlieb Daimler; Michael Faraday|Faraday@Michael Faraday;
      Isaac Singer|Singer@Isaac Singer; Elias Howe|Howe@Elias Howe; Cyrus McCormick|McCormick@Cyrus McCormick; Robert Fulton|Fulton@Robert Fulton;
      Richard Arkwright|Arkwright@Richard Arkwright; James Hargreaves|Hargreaves@James Hargreaves; Samuel Crompton|Crompton@Samuel Crompton;
      Edmund Cartwright|Cartwright@Edmund Cartwright; John Kay|Kay@John Kay (flying shuttle); Thomas Newcomen|Newcomen@Thomas Newcomen; Humphry Davy|Davy@Humphry Davy;
      Joseph Swan|Swan@Joseph Swan; Lewis Latimer|Latimer@Lewis Howard Latimer; Elijah McCoy|McCoy@Elijah McCoy; Garrett Morgan|Morgan@Garrett Morgan;
      Granville Woods|Woods@Granville Woods; Cai Lun|Ts'ai Lun|Tsai Lun@Cai Lun; Bi Sheng|Pi Sheng@Bi Sheng; Archimedes@Archimedes;
      Hero of Alexandria|Heron of Alexandria|Heron@Hero of Alexandria; Ctesibius|Ktesibios@Ctesibius; Leonardo da Vinci|Da Vinci@Leonardo da Vinci;
      Blaise Pascal|Pascal@Blaise Pascal; Evangelista Torricelli|Torricelli@Evangelista Torricelli; Christiaan Huygens|Huygens@Christiaan Huygens;
      Vladimir Zworykin|Zworykin@Vladimir K. Zworykin; Philo Farnsworth|Farnsworth@Philo Farnsworth; Hedy Lamarr|Lamarr@Hedy Lamarr; Percy Spencer|Spencer@Percy Spencer;
      Jagadish Chandra Bose|J. C. Bose|JC Bose|Bose@Jagadish Chandra Bose; M. Visvesvaraya|Visvesvaraya|Mokshagundam Visvesvaraya@M. Visvesvaraya; Wilhelm Röntgen|Roentgen|Rontgen@Wilhelm Röntgen`,
    legendary: ['Ctesibius', 'Bi Sheng'],
    facts: {
      Ctesibius: 'A Greek engineer in Alexandria around 250 BC, said to have built the first accurate water clocks and a force pump.',
      'Bi Sheng': 'A Chinese commoner who made the first known movable type, from baked clay, around 1040 AD.',
    },
  },
  {
    id: 'hist-india-fort',
    category: 'history',
    prompt: 'Name a fort in India',
    qualifier: 'Historic forts in India, by their usual name',
    strip: ['fort'],
    missingTier: 'deep',
    answers: `
      Red Fort|Lal Qila|Lal Quila@Red Fort; Agra Fort|Red Fort of Agra@Agra Fort; Amer Fort|Amber Fort|Amer@Amer Fort; Jaigarh Fort@Jaigarh Fort; Nahargarh Fort@Nahargarh Fort;
      Mehrangarh Fort|Mehrangarh@Mehrangarh; Jaisalmer Fort|Sonar Quila|Golden Fort@Jaisalmer Fort; Chittorgarh Fort|Chittor Fort|Chittorgarh|Chittor@Chittorgarh Fort;
      Kumbhalgarh Fort|Kumbhalgarh@Kumbhalgarh; Ranthambore Fort|Ranthambhore Fort@Ranthambore Fort; Gwalior Fort@Gwalior Fort; Golconda Fort|Golconda@Golconda Fort;
      Bidar Fort@Bidar Fort; Gulbarga Fort|Kalaburagi Fort@Gulbarga Fort; Raichur Fort@Raichur Fort; Chitradurga Fort|Chitradurga|Kallina Kote@Chitradurga Fort;
      Bangalore Fort@Bangalore Fort; Devanahalli Fort@Devanahalli Fort; Raigad Fort|Raigad@Raigad Fort; Sinhagad|Sinhagad Fort|Singhagad@Sinhagad; Pratapgad|Pratapgad Fort@Pratapgad;
      Shivneri Fort|Shivneri@Shivneri Fort; Rajgad Fort|Rajgad@Rajgad Fort; Torna Fort|Torna@Torna Fort; Daulatabad Fort|Devagiri|Devgiri@Daulatabad Fort;
      Panhala Fort|Panhala@Panhala Fort; Sindhudurg Fort|Sindhudurg@Sindhudurg Fort; Murud-Janjira|Janjira Fort|Janjira|Murud Janjira@Murud-Janjira;
      Purana Qila|Old Fort@Purana Qila; Salimgarh Fort@Salimgarh Fort; Tughlaqabad Fort|Tughlaqabad@Tughlaqabad Fort; Kangra Fort|Kangra@Kangra Fort;
      Kalinjar Fort|Kalinjar@Kalinjar Fort; Jhansi Fort@Jhansi Fort; Fort St. George|Fort St George@Fort St. George, India; Fort William@Fort William, India;
      Gingee Fort|Senji Fort|Jinji Fort|Gingee@Gingee Fort; Vellore Fort@Vellore Fort; Rock Fort|Tiruchirappalli Rock Fort|Trichy Rock Fort|Rockfort@Tiruchirappalli Rock Fort;
      Bekal Fort|Bekal@Bekal Fort; Aguada Fort@Fort Aguada; Chapora Fort@Chapora Fort; Rohtasgarh Fort@Rohtasgarh Fort; Allahabad Fort|Prayagraj Fort@Allahabad Fort;
      Lohagarh Fort|Lohagarh@Lohagarh Fort; Junagarh Fort@Junagarh Fort; Taragarh Fort@Taragarh Fort, Ajmer; Asirgarh Fort|Asirgarh@Asirgarh Fort;
      Kondapalli Fort@Kondapalli Fort; Warangal Fort@Warangal Fort; Bhongir Fort|Bhuvanagiri Fort@Bhongir Fort; Gooty Fort@Gooty Fort; Srirangapatna Fort@Srirangapatna`,
    legendary: ['Murud-Janjira', 'Gingee Fort'],
    facts: {
      'Murud-Janjira': 'A sea fort on an island off the Konkan coast that was said to have resisted every attempt to capture it.',
      'Gingee Fort': 'Shivaji is said to have called it the most impregnable fort in India, and the British nicknamed it the Troy of the East.',
    },
  },
  {
    id: 'hist-empire',
    category: 'history',
    prompt: 'Name an empire from history',
    qualifier: 'Empires from any period up to 1950, by their usual name',
    strip: ['empire'],
    missingTier: 'deep',
    answers: `
      Roman Empire|Rome@Roman Empire; Byzantine Empire|Eastern Roman Empire|Byzantium@Byzantine Empire; Ottoman Empire|Ottoman|Ottomans@Ottoman Empire;
      Persian Empire|Achaemenid Empire|Achaemenid@Achaemenid Empire; Mongol Empire|Mongol|Mongols@Mongol Empire; British Empire|British@British Empire;
      Mughal Empire|Mughal|Mughals@Mughal Empire; Maurya Empire|Mauryan Empire|Maurya@Maurya Empire; Gupta Empire|Gupta@Gupta Empire; Vijayanagara Empire|Vijayanagar|Vijayanagara@Vijayanagara Empire;
      Maratha Empire|Maratha|Marathas@Maratha Empire; Spanish Empire|Spain@Spanish Empire; Portuguese Empire|Portugal@Portuguese Empire; Dutch Empire|Dutch@Dutch Empire;
      French colonial empire|French Empire|French@French colonial empire; Russian Empire|Russia@Russian Empire; Austro-Hungarian Empire|Austria-Hungary|Habsburg Empire@Austria-Hungary;
      Holy Roman Empire@Holy Roman Empire; German Empire|Second Reich@German Empire; Japanese Empire|Empire of Japan|Imperial Japan@Empire of Japan;
      Aztec Empire|Aztec|Aztecs@Aztec Empire; Inca Empire|Inca|Incas@Inca Empire; Carolingian Empire|Carolingian@Carolingian Empire; Assyrian Empire|Assyria|Neo-Assyrian Empire@Neo-Assyrian Empire;
      Babylonian Empire|Babylonia|Neo-Babylonian Empire@Neo-Babylonian Empire; Akkadian Empire|Akkad@Akkadian Empire; Hittite Empire|Hittites@Hittite Empire;
      Macedonian Empire|Alexander's Empire|Empire of Alexander the Great@Macedonian Empire; Seleucid Empire|Seleucid@Seleucid Empire; Parthian Empire|Parthia@Parthian Empire;
      Sasanian Empire|Sassanid Empire|Sasanian|Sassanid@Sasanian Empire; Kushan Empire|Kushan@Kushan Empire; Songhai Empire|Songhai@Songhai Empire; Mali Empire|Mali@Mali Empire;
      Ghana Empire|Ghana@Ghana Empire; Ethiopian Empire|Abyssinia@Ethiopian Empire; Khmer Empire|Khmer@Khmer Empire; Srivijaya|Srivijaya Empire@Srivijaya;
      Majapahit|Majapahit Empire@Majapahit; Timurid Empire|Timurid|Timurids@Timurid Empire; Safavid Empire|Safavid|Safavids@Safavid Iran; Golden Horde@Golden Horde;
      Brazilian Empire|Empire of Brazil@Empire of Brazil; Ashanti Empire|Asante Empire|Ashanti@Ashanti Empire; Benin Empire|Kingdom of Benin|Edo Empire@Benin Empire;
      Sikh Empire|Sikh@Sikh Empire; Qing Empire|Qing dynasty|Qing@Qing dynasty; Han Empire|Han dynasty@Han dynasty; Tang Empire|Tang dynasty@Tang dynasty;
      Delhi Sultanate@Delhi Sultanate; Abbasid Caliphate|Abbasid@Abbasid Caliphate; Umayyad Caliphate|Umayyad@Umayyad Caliphate; Napoleonic Empire|First French Empire@First French Empire;
      Zulu Kingdom|Zulu Empire@Zulu Kingdom; Mexican Empire@First Mexican Empire; Axumite Empire|Aksumite Empire|Kingdom of Aksum@Kingdom of Aksum`,
    legendary: ['Srivijaya', 'Ghana Empire'],
    facts: {
      Srivijaya: 'A sea power based on Sumatra that controlled trade through the Strait of Malacca from about the 7th to the 13th century.',
      'Ghana Empire': 'A West African empire rich in gold and salt that lay far to the north-west of the modern country of Ghana.',
    },
  },
  {
    id: 'hist-renaissance-artist',
    category: 'history',
    prompt: 'Name a Renaissance artist',
    qualifier: 'Painters, sculptors and architects of the European Renaissance, about 1300 to 1600',
    strip: ['artist', 'painter'],
    answers: `
      Leonardo da Vinci|Da Vinci|Leonardo@Leonardo da Vinci; Michelangelo|Michelangelo Buonarroti@Michelangelo; Raphael|Raffaello|Raffaello Sanzio@Raphael;
      Donatello@Donatello; Sandro Botticelli|Botticelli@Sandro Botticelli; Titian|Tiziano@Titian; Giorgione@Giorgione; Tintoretto@Tintoretto;
      Paolo Veronese|Veronese@Paolo Veronese; Filippo Brunelleschi|Brunelleschi@Filippo Brunelleschi; Masaccio@Masaccio; Fra Angelico|Beato Angelico@Fra Angelico;
      Piero della Francesca@Piero della Francesca; Andrea Mantegna|Mantegna@Andrea Mantegna; Giovanni Bellini|Bellini@Giovanni Bellini; Jan van Eyck|Van Eyck@Jan van Eyck;
      Hieronymus Bosch|Bosch@Hieronymus Bosch; Pieter Bruegel the Elder|Bruegel|Brueghel@Pieter Bruegel the Elder; Albrecht Dürer|Albrecht Durer|Durer|Dürer@Albrecht Dürer;
      Hans Holbein the Younger|Holbein@Hans Holbein the Younger; Lucas Cranach the Elder|Cranach@Lucas Cranach the Elder; Matthias Grünewald|Grunewald@Matthias Grünewald;
      Rogier van der Weyden|Van der Weyden@Rogier van der Weyden; Hans Memling|Memling@Hans Memling; Andrea del Verrocchio|Verrocchio@Andrea del Verrocchio;
      Lorenzo Ghiberti|Ghiberti@Lorenzo Ghiberti; Benvenuto Cellini|Cellini@Benvenuto Cellini; Giorgio Vasari|Vasari@Giorgio Vasari; Correggio@Correggio;
      Parmigianino@Parmigianino; Pontormo|Jacopo Pontormo@Pontormo; Bronzino@Bronzino; El Greco@El Greco; Domenico Ghirlandaio|Ghirlandaio@Domenico Ghirlandaio;
      Pietro Perugino|Perugino@Pietro Perugino; Luca Signorelli|Signorelli@Luca Signorelli; Paolo Uccello|Uccello@Paolo Uccello; Filippo Lippi|Fra Filippo Lippi@Filippo Lippi;
      Andrea del Sarto@Andrea del Sarto; Giulio Romano@Giulio Romano; Andrea Palladio|Palladio@Andrea Palladio; Sofonisba Anguissola@Sofonisba Anguissola;
      Lavinia Fontana@Lavinia Fontana; Quentin Matsys|Massys|Metsys@Quentin Matsys; Joachim Patinir|Patinir@Joachim Patinir; Hugo van der Goes@Hugo van der Goes;
      Gerard David@Gerard David; Jean Fouquet|Fouquet@Jean Fouquet; Antonello da Messina@Antonello da Messina; Carlo Crivelli|Crivelli@Carlo Crivelli;
      Lorenzo Lotto|Lotto@Lorenzo Lotto; Sebastiano del Piombo@Sebastiano del Piombo; Rosso Fiorentino@Rosso Fiorentino; Tilman Riemenschneider@Tilman Riemenschneider;
      Gentile Bellini@Gentile Bellini; Vittore Carpaccio|Carpaccio@Vittore Carpaccio; Donato Bramante|Bramante@Donato Bramante; Luca della Robbia@Luca della Robbia`,
    legendary: ['Sofonisba Anguissola', 'Joachim Patinir'],
    facts: {
      'Sofonisba Anguissola': 'An Italian portrait painter from Cremona who became court painter to Philip II of Spain.',
      'Joachim Patinir': 'A Flemish painter often called the first artist to treat landscape as the main subject of a picture.',
    },
  },
  {
    id: 'hist-greek-philosopher',
    category: 'history',
    prompt: 'Name an ancient Greek philosopher',
    qualifier: 'Philosophers of the ancient Greek world, including later Greek-writing thinkers up to about 500 AD',
    strip: ['philosopher'],
    answers: `
      Socrates@Socrates; Plato@Plato; Aristotle@Aristotle; Pythagoras@Pythagoras; Thales|Thales of Miletus@Thales of Miletus; Anaximander@Anaximander;
      Anaximenes|Anaximenes of Miletus@Anaximenes of Miletus; Heraclitus@Heraclitus; Parmenides@Parmenides; Zeno of Elea|Zeno@Zeno of Elea; Empedocles@Empedocles;
      Anaxagoras@Anaxagoras; Democritus@Democritus; Leucippus@Leucippus; Protagoras@Protagoras; Gorgias@Gorgias; Diogenes|Diogenes of Sinope|Diogenes the Cynic@Diogenes;
      Epicurus@Epicurus; Zeno of Citium|Zeno the Stoic@Zeno of Citium; Epictetus@Epictetus; Pyrrho@Pyrrho; Xenophanes@Xenophanes; Antisthenes@Antisthenes;
      Aristippus@Aristippus; Theophrastus@Theophrastus; Plotinus@Plotinus; Plutarch@Plutarch; Chrysippus@Chrysippus; Cleanthes@Cleanthes; Carneades@Carneades;
      Sextus Empiricus@Sextus Empiricus; Hypatia@Hypatia; Proclus@Proclus; Porphyry|Porphyry of Tyre@Porphyry (philosopher); Iamblichus@Iamblichus;
      Speusippus@Speusippus; Xenocrates@Xenocrates; Crates of Thebes|Crates@Crates of Thebes;
      Philolaus@Philolaus; Melissus of Samos|Melissus@Melissus of Samos; Archytas@Archytas; Thrasymachus@Thrasymachus; Prodicus@Prodicus; Hippias of Elis|Hippias@Hippias;
      Pherecydes of Syros|Pherecydes@Pherecydes of Syros; Diogenes of Apollonia@Diogenes of Apollonia; Aristarchus of Samos@Aristarchus of Samos; Strato of Lampsacus@Strato of Lampsacus;
      Panaetius@Panaetius; Posidonius@Posidonius; Arcesilaus@Arcesilaus; Menippus@Menippus; Cebes@Cebes of Thebes; Aristocles@Aristocles of Messene`.replace('; Aristocles@Aristocles of Messene', '').replace('; Cebes@Cebes of Thebes', ''),
    legendary: ['Crates of Thebes'],
    facts: {
      'Crates of Thebes': 'A Cynic who is said to have given away his fortune to live a life of poverty in Athens.',
    },
  },
  {
    id: 'hist-round-table-knight',
    category: 'history',
    prompt: 'Name a Knight of the Round Table',
    qualifier: 'Knights of King Arthur\'s court in the legends, such as in Malory\'s Le Morte d\'Arthur',
    strip: ['sir'],
    missingTier: 'deep',
    answers: `
      Lancelot|Launcelot|Sir Lancelot@Lancelot; Galahad|Sir Galahad@Galahad; Gawain|Sir Gawain|Gawaine@Gawain; Percival|Perceval|Parzival@Percival; Bors|Sir Bors@Bors the Younger;
      Tristan|Tristram|Sir Tristan@Tristan; Kay|Sir Kay|Cai@Kay (Arthurian legend); Bedivere|Bedwyr|Sir Bedivere@Bedivere; Gareth|Sir Gareth@Gareth; Gaheris|Gaheris@Gaheris;
      Agravain|Agravaine@Agravain; Mordred|Modred@Mordred; Lamorak|Lamorack@Lamorak; Palamedes@Palamedes (Arthurian legend); Yvain|Ywain|Owain|Iwain@Yvain; Erec@Erec;
      Sagramore@Sagramore; Dagonet|Sir Dagonet@Dagonet; Lionel@Lionel (Arthurian legend); Ector|Sir Ector@Ector; Pellinore|King Pellinore@King Pellinore; Caradoc|Caradoc Briefbras@Caradoc;
      Lucan|Lucan the Butler@Lucan the Butler; Griflet|Girflet@Griflet; Dinadan|Sir Dinadan@Dinadan; Balin|Sir Balin@Balin and Balan; Bleoberis|Bleoberis de Ganis@Bleoberis;
      Galehaut|Galehault@Galehaut; Pelleas|Sir Pelleas@Pelleas; Tor|Sir Tor@Tor (Arthurian knight); Safir@Safir; Hector de Maris|Ector de Maris@Hector de Maris;
      Elyan the White@Elyan the White; Segwarides|Segwarides@Segwarides; Brunor@Brunor; Ironside|Sir Ironside@Ironside (Arthurian knight)`.replace('Segwarides|Segwarides@Segwarides', 'Segwarides@Segwarides'),
    tryhard: ['Dinadan'],
    legendary: ['Dagonet', 'Dinadan'],
    facts: {
      Dagonet: 'The jester of Arthur\'s court who was knighted by the king as a joke and proved braver than expected.',
      Dinadan: 'A witty knight who made fun of the demands of chivalry and of tournaments.',
    },
  },
  {
    id: 'hist-delhi-sultan',
    category: 'history',
    prompt: 'Name a ruler of the Delhi Sultanate',
    qualifier: 'Sultans of Delhi from Qutb ud-Din Aibak (1206) to Ibrahim Lodi (1526)',
    strip: ['sultan'],
    missingTier: 'deep',
    answers: `
      Qutb ud-Din Aibak|Qutbuddin Aibak|Qutb-ud-din Aibak|Aibak|Aybak@Qutb ud-Din Aibak; Aram Shah|Aram Baksh@Aram Shah; Iltutmish|Shams ud-Din Iltutmish|Altamash|Shamsuddin Iltutmish@Iltutmish;
      Rukn ud-Din Firuz|Ruknuddin Firoz@Rukn ud-Din Firuz; Razia Sultana|Razia|Raziya|Radiyya@Razia Sultana; Muiz ud-Din Bahram|Bahram Shah|Muizuddin Bahram@Muiz ud-Din Bahram;
      Ala ud-Din Masud|Alauddin Masud|Masud Shah@Ala ud-Din Masud; Nasir ud-Din Mahmud|Nasiruddin Mahmud@Nasir ud-Din Mahmud; Ghiyas ud-Din Balban|Balban|Ghiyasuddin Balban@Balban;
      Muiz ud-Din Qaiqabad|Kaiqubad|Qaiqabad|Muizuddin Kaikobad@Muiz ud-Din Qaiqabad; Kayumars|Shamsuddin Kayumars@Kayumars (Delhi sultan);
      Jalal ud-Din Khalji|Jalaluddin Khilji|Jalal-ud-din Khilji|Jalaluddin Khalji@Jalal-ud-Din Khalji; Alauddin Khalji|Alauddin Khilji|Ala ud-Din Khalji|Ala-ud-din Khilji@Alauddin Khalji;
      Shihab ud-Din Umar|Shihabuddin Umar@Shihab ud-Din Umar; Qutb ud-Din Mubarak Shah|Qutbuddin Mubarak Shah|Mubarak Shah Khalji@Qutb ud-Din Mubarak Shah; Khusrau Khan|Nasiruddin Khusrau Shah@Khusrau Khan;
      Ghiyath al-Din Tughluq|Ghiyasuddin Tughlaq|Tughlaq|Ghazi Malik|Ghiyas ud-Din Tughlaq@Ghiyath al-Din Tughluq; Muhammad bin Tughluq|Muhammad Tughlaq|Muhammad bin Tughlaq|Mohammad bin Tughlaq@Muhammad bin Tughluq;
      Firuz Shah Tughlaq|Firoz Shah Tughlaq|Firuz Shah Tughluq@Firuz Shah Tughlaq; Tughlaq Shah II|Ghiyath al-Din Tughluq II|Tughluq Shah II@Tughlaq Shah II; Abu Bakr Shah@Abu Bakr Shah;
      Khizr Khan|Khizr Khan Sayyid@Khizr Khan; Alam Shah|Ala ud-Din Alam Shah|Alauddin Alam Shah@Alam Shah; Bahlul Lodi|Bahlol Lodi|Buhlul Lodi|Bahlul Khan Lodi@Bahlul Lodi;
      Sikandar Lodi|Sikandar Khan Lodi|Sikander Lodi@Sikandar Lodi; Ibrahim Lodi|Ibrahim Khan Lodi@Ibrahim Lodi`,
    legendary: ['Aram Shah', 'Alam Shah'],
    facts: {
      'Aram Shah': 'Took the throne after Aibak\'s death in 1210 and was removed within a year by Iltutmish.',
      'Alam Shah': 'The last of the Sayyid dynasty, who gave up the throne to Bahlul Lodi and retired to Badaun.',
    },
  },
  {
    id: 'hist-viceroy-india',
    category: 'history',
    prompt: 'Name a British Governor-General or Viceroy of India',
    qualifier: 'Holders of the office from Warren Hastings (1773) to Louis Mountbatten (1947), or C. Rajagopalachari as the last Governor-General',
    strip: ['lord', 'viceroy', 'governor-general', 'governor general'],
    missingTier: 'deep',
    answers: `
      Warren Hastings|Hastings@Warren Hastings; Charles Cornwallis|Cornwallis|Lord Cornwallis@Charles Cornwallis, 1st Marquess Cornwallis;
      John Shore|Lord Teignmouth|Sir John Shore@John Shore, 1st Baron Teignmouth; Richard Wellesley|Lord Wellesley|Wellesley@Richard Wellesley, 1st Marquess Wellesley;
      Gilbert Elliot|Lord Minto I|Minto I@Gilbert Elliot-Murray-Kynynmound, 1st Earl of Minto; Francis Rawdon-Hastings|Marquess of Hastings|Lord Moira|Lord Hastings@Francis Rawdon-Hastings, 1st Marquess of Hastings;
      William Amherst|Lord Amherst|Amherst@William Amherst, 1st Earl Amherst; William Bentinck|Lord William Bentinck|Bentinck@Lord William Bentinck;
      Lord Auckland|George Eden|Auckland@George Eden, 1st Earl of Auckland; Lord Ellenborough|Edward Law|Ellenborough@Edward Law, 1st Earl of Ellenborough;
      Henry Hardinge|Lord Hardinge I|Hardinge I@Henry Hardinge, 1st Viscount Hardinge; Lord Dalhousie|Dalhousie|James Broun-Ramsay|Marquess of Dalhousie@James Broun-Ramsay, 1st Marquess of Dalhousie;
      Charles Canning|Lord Canning|Canning@Charles Canning, 1st Earl Canning; Lord Elgin|James Bruce|Elgin|Earl of Elgin|Elgin I@James Bruce, 8th Earl of Elgin;
      John Lawrence|Lord Lawrence|Sir John Lawrence|Lawrence@John Lawrence, 1st Baron Lawrence; Lord Mayo|Richard Bourke|Mayo@Richard Bourke, 6th Earl of Mayo;
      Lord Northbrook|Thomas Baring|Northbrook@Thomas Baring, 1st Earl of Northbrook; Lord Lytton|Robert Bulwer-Lytton|Lytton@Robert Bulwer-Lytton, 1st Earl of Lytton;
      Lord Ripon|Marquess of Ripon|George Robinson|Ripon@George Robinson, 1st Marquess of Ripon; Lord Dufferin|Dufferin|Frederick Hamilton-Temple-Blackwood@Frederick Hamilton-Temple-Blackwood, 1st Marquess of Dufferin and Ava;
      Lord Lansdowne|Lansdowne|Henry Petty-Fitzmaurice@Henry Petty-Fitzmaurice, 5th Marquess of Lansdowne; Lord Elgin II|Victor Bruce|Elgin II@Victor Bruce, 9th Earl of Elgin;
      Lord Curzon|Curzon|George Curzon@George Curzon, 1st Marquess Curzon of Kedleston; Lord Minto|Minto|Minto II|Gilbert Elliot-Murray-Kynynmound@Gilbert Elliot-Murray-Kynynmound, 4th Earl of Minto;
      Lord Hardinge|Charles Hardinge|Hardinge|Hardinge II@Charles Hardinge, 1st Baron Hardinge of Penshurst; Lord Chelmsford|Chelmsford|Frederic Thesiger@Frederic Thesiger, 1st Viscount Chelmsford;
      Lord Reading|Rufus Isaacs|Reading@Rufus Isaacs, 1st Marquess of Reading; Lord Irwin|Edward Wood|Lord Halifax|Halifax@Edward Wood, 1st Earl of Halifax;
      Lord Willingdon|Willingdon|Freeman Freeman-Thomas@Freeman Freeman-Thomas, 1st Marquess of Willingdon; Lord Linlithgow|Linlithgow|Victor Hope@Victor Hope, 2nd Marquess of Linlithgow;
      Lord Wavell|Archibald Wavell|Wavell@Archibald Wavell, 1st Earl Wavell; Lord Mountbatten|Louis Mountbatten|Mountbatten@Louis Mountbatten, 1st Earl Mountbatten of Burma;
      C. Rajagopalachari|Rajaji|Rajagopalachari@C. Rajagopalachari; Charles Metcalfe|Lord Metcalfe|Metcalfe@Charles Metcalfe, 1st Baron Metcalfe; George Barlow|Sir George Barlow@Sir George Barlow, 1st Baronet;
      John Adam|John Adam@John Adam (administrator)`,
    tryhard: ['John Adam'],
    legendary: ['John Shore', 'John Adam'],
    facts: {
      'John Shore': 'Governor-General from 1793 to 1798 who succeeded Cornwallis and was later made Baron Teignmouth.',
      'John Adam': 'A Scottish East India Company official who was acting Governor-General for about seven months in 1823.',
    },
  },
  {
    id: 'hist-greek-creature',
    category: 'history',
    prompt: 'Name a monster or creature from Greek mythology',
    qualifier: 'Beasts, monsters and mythical creatures of Greek myth; gods and heroes do not count',
    answers: `
      Minotaur@Minotaur; Medusa@Medusa; Cerberus@Cerberus; Hydra|Lernaean Hydra@Lernaean Hydra; Chimera|Chimaera@Chimera (mythology); Sphinx@Sphinx;
      Cyclops|Cyclopes@Cyclopes; Pegasus@Pegasus; Centaur|Centaurs@Centaur; Satyr|Satyrs@Satyr; Harpy|Harpies@Harpy; Siren|Sirens@Siren (mythology);
      Scylla@Scylla; Charybdis@Charybdis; Typhon@Typhon; Echidna@Echidna (mythology); Nemean Lion|Nemean lion@Nemean lion; Erymanthian Boar@Erymanthian Boar;
      Stymphalian Birds|Stymphalian birds@Stymphalian birds; Ladon@Ladon (mythology); Orthrus|Orthros@Orthrus; Python@Python (mythology); Gorgon|Gorgons@Gorgon;
      Griffin|Gryphon|Griffon@Griffin; Hippocampus|Hippocamp@Hippocampus (mythology); Lamia@Lamia (mythology); Empusa@Empusa; Cretan Bull@Cretan Bull;
      Ceryneian Hind|Cerynitian Hind|Golden Hind@Ceryneian Hind; Mares of Diomedes|Man-eating mares@Mares of Diomedes; Geryon@Geryon; Argus Panoptes|Argus@Argus Panoptes;
      Talos@Talos; Ophiotaurus@Ophiotaurus; Hecatoncheires|Hundred-Handed Ones|Hundred-Handers@Hecatoncheires; Giants|Gigantes@Gigantes; Titans|Titan@Titan (mythology);
      Nymph|Nymphs@Nymph; Dryad|Dryads@Dryad; Naiad|Naiads@Naiad; Nereid|Nereids@Nereid; Phoenix@Phoenix (mythology); Chrysaor@Chrysaor; Colchian Dragon|Dragon of Colchis@Dragon of Colchis;
      Sea serpent|Cetus@Cetus (mythology); Chimaera? `.replace('; Chimaera? ', ''),
    legendary: ['Ophiotaurus', 'Empusa'],
    facts: {
      Ophiotaurus: 'A creature that was half bull and half serpent, said to bring the power to defeat the gods to whoever burned its entrails.',
      Empusa: 'A shape-shifting spirit in the service of Hecate, said to have one leg of bronze and one of a donkey.',
    },
  },
  {
    id: 'hist-trojan-war-figure',
    category: 'history',
    prompt: 'Name a character from the Trojan War',
    qualifier: 'Named heroes, kings, seers and others from the Iliad, the Odyssey and the myths around Troy',
    answers: `
      Achilles@Achilles; Hector@Hector; Paris|Alexander|Paris of Troy@Paris (mythology); Helen of Troy|Helen|Helen of Sparta@Helen of Troy; Menelaus@Menelaus;
      Agamemnon@Agamemnon; Odysseus|Ulysses@Odysseus; Priam|King Priam@Priam; Hecuba|Hekabe@Hecuba; Cassandra@Cassandra; Andromache@Andromache; Patroclus|Patroklos@Patroclus;
      Ajax the Great|Ajax|Great Ajax|Telamonian Ajax@Ajax the Great; Ajax the Lesser|Lesser Ajax@Ajax the Lesser; Nestor@Nestor (mythology); Diomedes@Diomedes;
      Aeneas@Aeneas; Sarpedon@Sarpedon; Glaucus@Glaucus (son of Hippolochus); Thersites@Thersites; Calchas@Calchas; Laocoön|Laocoon@Laocoön; Sinon@Sinon; Philoctetes@Philoctetes;
      Neoptolemus|Pyrrhus|Neoptolemos@Neoptolemus; Briseis@Briseis; Chryseis@Chryseis; Penthesilea@Penthesilea; Memnon@Memnon (mythology); Deiphobus@Deiphobus;
      Helenus@Helenus; Polyxena@Polyxena; Troilus@Troilus; Antenor@Antenor (mythology); Pandarus@Pandarus; Idomeneus@Idomeneus; Teucer@Teucer;
      Palamedes@Palamedes (mythology); Machaon@Machaon (mythology); Podalirius@Podalirius; Automedon@Automedon; Eurypylus@Eurypylus (son of Telephus); Nireus@Nireus;
      Protesilaus@Protesilaus; Thetis@Thetis; Peleus@Peleus; Dolon@Dolon (mythology); Rhesus|Rhesos@Rhesus (king of Thrace); Euphorbus@Euphorbus; Astyanax@Astyanax;
      Iphigenia@Iphigenia; Clytemnestra@Clytemnestra; Orestes@Orestes; Aeneid? `.replace('; Aeneid? ', ''),
    legendary: ['Dolon', 'Nireus'],
    facts: {
      Dolon: 'A Trojan sent to spy on the Greek camp by night, who was caught by Odysseus and Diomedes.',
      Nireus: 'The king of Syme, said in the Iliad to be the most handsome Greek at Troy after Achilles.',
    },
  },
  {
    id: 'hist-greek-city',
    category: 'history',
    prompt: 'Name a city or city-state of ancient Greece',
    qualifier: 'Cities of the ancient Greek world, mainland, islands and colonies, before Roman rule',
    missingTier: 'deep',
    answers: `
      Athens|Ancient Athens@Classical Athens; Sparta@Sparta; Corinth|Ancient Corinth@Ancient Corinth; Thebes@Thebes, Greece; Argos@Argos, Peloponnese; Delphi@Delphi;
      Olympia@Olympia, Greece; Megara@Megara; Syracuse@Syracuse, Sicily; Miletus@Miletus; Ephesus@Ephesus; Halicarnassus@Halicarnassus; Eretria@Eretria;
      Chalcis@Chalcis; Delos@Delos; Mycenae@Mycenae; Tiryns@Tiryns; Pylos@Pylos; Knossos@Knossos; Troy@Troy; Pergamon|Pergamum@Pergamon; Priene@Priene;
      Aegina@Aegina; Epidaurus|Epidauros@Epidaurus; Plataea@Plataea; Mantinea@Mantinea; Olynthus@Olynthus; Elis@Elis; Abdera@Abdera, Thrace; Amphipolis@Amphipolis;
      Potidaea@Potidaea; Cumae@Cumae; Byzantium|Byzantion@Byzantium; Sybaris@Sybaris; Croton|Kroton@Crotone; Cyrene@Cyrene, Libya; Smyrna@Smyrna;
      Rhodes|Rhodos@Rhodes; Lindos@Lindos; Eleusis@Eleusis; Marathon@Marathon, Greece; Thermopylae@Thermopylae; Naupactus@Naupactus; Phocaea@Phocaea;
      Colophon@Colophon, Ionia; Mytilene@Mytilene; Chios@Chios; Samos@Samos; Kos|Cos@Kos; Paros@Paros; Thasos@Thasos`,
    legendary: ['Sybaris', 'Abdera'],
    facts: {
      Sybaris: 'A rich Greek colony in southern Italy whose name gave English the word "sybarite", for someone who loves luxury.',
      Abdera: 'The Thracian home of Democritus and Protagoras, yet teased in antiquity for the foolishness of its people.',
    },
  },
  {
    id: 'hist-mesoamerican-deity',
    category: 'history',
    prompt: 'Name an Aztec, Maya or Inca god or goddess',
    qualifier: 'Deities of Mesoamerican and Andean mythology',
    answers: `
      Quetzalcoatl@Quetzalcoatl; Huitzilopochtli@Huitzilopochtli; Tezcatlipoca@Tezcatlipoca; Tlaloc@Tlaloc; Xipe Totec@Xipe Totec; Coatlicue@Coatlicue;
      Coyolxauhqui@Coyolxauhqui; Chalchiuhtlicue@Chalchiuhtlicue; Xochiquetzal@Xochiquetzal; Mictlantecuhtli@Mictlantecuhtli; Mictecacihuatl|Mictecacihuatl@Mictecacihuatl;
      Centeotl@Centeotl; Xolotl@Xolotl; Tonatiuh@Tonatiuh; Ometeotl@Ometeotl; Tlaltecuhtli@Tlaltecuhtli; Itzamna|Itzamná@Itzamna; Kukulkan|Kukulcan@Kukulkan;
      Chaac|Chac|Chaak@Chaac; Ixchel|Ix Chel@Ixchel; Hun Hunahpu@Hun Hunahpu; Camazotz@Camazotz; Ah Puch|Yum Cimil@Ah Puch; Kinich Ahau|Kinich Ahau@Kinich Ahau;
      Inti@Inti; Viracocha|Wiracocha@Viracocha; Pachamama@Pachamama; Mama Quilla|Mama Killa@Mama Killa; Illapa|Illapa@Illapa; Supay@Supay; Pachacamac@Pachacamac;
      Mama Cocha@Mama Cocha; Ek Chuaj@Ek Chuaj; Yum Kaax@Yum Kaax; Huracan|Hurakan@Huracan; Mixcoatl@Mixcoatl; Tlazolteotl@Tlazolteotl; Mayahuel@Mayahuel;
      Ehecatl@Ehecatl; Chicomecoatl@Chicomecoatl; Cihuacoatl@Cihuacoatl; Xiuhtecuhtli@Xiuhtecuhtli; Itzpapalotl@Itzpapalotl; Tzitzimitl@Tzitzimitl;
      Huehuecoyotl@Huehuecoyotl; Patecatl@Patecatl; Tlazolteotl2? `.replace('; Tlazolteotl2? ', '').replace('Mictecacihuatl|Mictecacihuatl@', 'Mictecacihuatl@').replace('Kinich Ahau|Kinich Ahau@', 'Kinich Ahau@').replace('Illapa|Illapa@', 'Illapa@'),
    legendary: ['Mayahuel', 'Ek Chuaj'],
    facts: {
      Mayahuel: 'The Aztec goddess of the maguey plant, from which the drink pulque is made.',
      'Ek Chuaj': 'A Maya god of merchants and cacao, often shown carrying a pack on his back.',
    },
  },
  {
    id: 'hist-chinese-dynasty',
    category: 'history',
    prompt: 'Name a Chinese dynasty',
    qualifier: 'Dynasties and ruling houses of China, ancient to 1912, including the shorter-lived ones',
    strip: ['dynasty'],
    missingTier: 'deep',
    answers: `
      Xia dynasty|Xia@Xia dynasty; Shang dynasty|Shang|Yin dynasty@Shang dynasty; Zhou dynasty|Zhou@Zhou dynasty; Western Zhou|Western Zhou dynasty@Western Zhou;
      Eastern Zhou|Eastern Zhou dynasty@Eastern Zhou; Qin dynasty|Qin@Qin dynasty; Han dynasty|Han@Han dynasty; Western Han|Former Han@Western Han; Eastern Han|Later Han@Eastern Han;
      Xin dynasty|Xin@Xin dynasty; Cao Wei|Wei@Cao Wei; Shu Han|Shu@Shu Han; Eastern Wu|Wu@Eastern Wu; Western Jin|Western Jin dynasty@Jin dynasty (266–420);
      Eastern Jin|Eastern Jin dynasty@Eastern Jin; Northern Wei@Northern Wei; Liu Song dynasty|Liu Song@Liu Song dynasty; Southern Qi@Southern Qi; Liang dynasty|Liang@Liang dynasty;
      Chen dynasty|Chen@Chen dynasty; Sui dynasty|Sui@Sui dynasty; Tang dynasty|Tang@Tang dynasty; Wu Zhou|Zhou of Wu Zetian@Wu Zhou; Liao dynasty|Liao|Khitan Liao@Liao dynasty;
      Song dynasty|Song@Song dynasty; Northern Song|Northern Song dynasty@Northern Song; Southern Song|Southern Song dynasty@Southern Song; Western Xia|Xi Xia|Tangut Xia@Western Xia;
      Jin dynasty (Jurchen)|Jin dynasty|Jurchen Jin|Later Jin Jurchen@Jin dynasty (1115–1234); Yuan dynasty|Yuan@Yuan dynasty; Ming dynasty|Ming@Ming dynasty;
      Qing dynasty|Qing|Manchu dynasty@Qing dynasty; Shun dynasty|Shun@Shun dynasty; Southern Ming@Southern Ming; Later Liang|Later Liang dynasty@Later Liang (Five Dynasties);
      Later Tang|Later Tang dynasty@Later Tang; Later Jin|Later Jin dynasty@Later Jin (Five Dynasties); Later Han (Five Dynasties)|Later Han dynasty@Later Han (Five Dynasties);
      Later Zhou|Later Zhou dynasty@Later Zhou; Southern Tang@Southern Tang; Northern Zhou@Northern Zhou; Northern Qi@Northern Qi; Western Wei@Western Wei; Eastern Wei@Eastern Wei`,
    legendary: ['Xin dynasty', 'Western Xia'],
    facts: {
      'Xin dynasty': 'Founded by Wang Mang, it lasted only 14 years, between the Western and Eastern Han.',
      'Western Xia': 'A Tangut state in north-west China that created its own script.',
    },
  },
  {
    id: 'hist-ottoman-sultan',
    category: 'history',
    prompt: 'Name a sultan of the Ottoman Empire',
    qualifier: 'The 36 sultans, from Osman I (c. 1299) to Mehmed VI (1922)',
    strip: ['sultan'],
    closed: 36,
    answers: `
      Osman I|Osman Gazi|Osman@Osman I; Orhan|Orhan Gazi|Orhan I@Orhan; Murad I|Murad@Murad I; Bayezid I|Bayezid the Thunderbolt|Beyazit I@Bayezid I; Mehmed I|Mehmed Celebi@Mehmed I;
      Murad II@Murad II; Mehmed II|Mehmed the Conqueror|Mehmet the Conqueror|Fatih Sultan Mehmed@Mehmed the Conqueror; Bayezid II|Beyazit II@Bayezid II; Selim I|Selim the Grim|Yavuz Sultan Selim@Selim I;
      Suleiman the Magnificent|Suleiman I|Suleyman the Magnificent|Suleiman the Lawgiver|Suleiman@Suleiman the Magnificent; Selim II|Selim the Sot@Selim II; Murad III@Murad III;
      Mehmed III@Mehmed III; Ahmed I|Ahmet I@Ahmed I; Mustafa I@Mustafa I; Osman II|Osman the Young@Osman II; Murad IV@Murad IV; Ibrahim|Ibrahim the Mad|Ibrahim I@Ibrahim of the Ottoman Empire;
      Mehmed IV|Mehmed the Hunter@Mehmed IV; Suleiman II@Suleiman II of the Ottoman Empire; Ahmed II@Ahmed II; Mustafa II@Mustafa II; Ahmed III@Ahmed III; Mahmud I@Mahmud I;
      Osman III@Osman III; Mustafa III@Mustafa III; Abdul Hamid I|Abdulhamid I@Abdul Hamid I; Selim III@Selim III; Mustafa IV@Mustafa IV; Mahmud II@Mahmud II;
      Abdulmejid I|Abdulmecid I|Abdulmejid@Abdulmejid I; Abdulaziz|Abdulaziz I|Abdul Aziz@Abdulaziz; Murad V@Murad V; Abdul Hamid II|Abdulhamid II|Abdul Hamid the Damned@Abdul Hamid II;
      Mehmed V|Mehmed Resad|Mehmed Reshad@Mehmed V; Mehmed VI|Mehmed Vahideddin|Vahdettin@Mehmed VI`,
    legendary: ['Mustafa I', 'Murad V'],
    facts: {
      'Mustafa I': 'Was placed on the throne twice, in 1617 and again in 1622, and was set aside both times.',
      'Murad V': 'Reigned for only 93 days in 1876 before being removed as unfit to rule.',
    },
  },
  {
    id: 'hist-moonwalker',
    category: 'history',
    prompt: 'Name an astronaut who walked on the Moon',
    qualifier: 'The 12 people who walked on the Moon during Apollo, 1969 to 1972',
    strip: ['astronaut'],
    closed: 12,
    answers: `
      Neil Armstrong|Armstrong@Neil Armstrong; Buzz Aldrin|Aldrin|Edwin Aldrin@Buzz Aldrin; Pete Conrad|Charles Conrad|Conrad@Pete Conrad; Alan Bean|Bean@Alan Bean;
      Alan Shepard|Shepard@Alan Shepard; Edgar Mitchell|Mitchell@Edgar Mitchell; David Scott|Dave Scott@David Scott; James Irwin|Jim Irwin|Irwin@James Irwin;
      John Young|Young@John Young (astronaut); Charles Duke|Charlie Duke|Duke@Charles Duke; Gene Cernan|Eugene Cernan|Cernan@Gene Cernan; Harrison Schmitt|Jack Schmitt|Schmitt@Harrison Schmitt`,
    legendary: ['Harrison Schmitt', 'Alan Shepard'],
    facts: {
      'Harrison Schmitt': 'The only professional geologist to walk on the Moon, on Apollo 17.',
      'Alan Shepard': 'At 47 the oldest to walk on the Moon at the time, and famous for hitting golf balls there on Apollo 14.',
    },
  },
  {
    id: 'hist-first-lady',
    category: 'history',
    prompt: 'Name a First Lady of the United States',
    qualifier: 'Wives, and other women who served as hostess, of Presidents up to 2025',
    strip: ['first lady'],
    answers: `
      Martha Washington; Abigail Adams; Dolley Madison; Elizabeth Monroe; Louisa Adams; Rachel Jackson; Anna Harrison|Anna Symmes Harrison; Letitia Tyler;
      Julia Tyler; Sarah Polk|Sarah Childress Polk; Margaret Taylor; Abigail Fillmore; Jane Pierce; Mary Todd Lincoln|Mary Lincoln|Mary Todd; Eliza Johnson;
      Julia Grant|Julia Dent Grant; Lucy Webb Hayes|Lucy Hayes|Lemonade Lucy; Lucretia Garfield; Frances Folsom Cleveland|Frances Cleveland; Caroline Harrison;
      Ida McKinley; Edith Roosevelt|Edith Kermit Roosevelt; Helen Herron Taft|Helen Taft|Nellie Taft; Ellen Axson Wilson|Ellen Wilson; Edith Wilson|Edith Bolling Galt Wilson;
      Florence Harding|Florence Kling Harding; Grace Coolidge; Lou Henry Hoover|Lou Hoover; Eleanor Roosevelt; Bess Truman; Mamie Eisenhower;
      Jacqueline Kennedy|Jackie Kennedy|Jacqueline Kennedy Onassis|Jackie O|Jackie Onassis@Jacqueline Kennedy Onassis; Lady Bird Johnson|Claudia Johnson@Lady Bird Johnson;
      Pat Nixon; Betty Ford; Rosalynn Carter; Nancy Reagan; Barbara Bush; Hillary Clinton|Hillary Rodham Clinton; Laura Bush; Michelle Obama; Melania Trump; Jill Biden;
      Hannah Van Buren|Hannah Hoes Van Buren; Elizabeth Kortright Monroe? `.replace('; Elizabeth Kortright Monroe? ', ''),
    legendary: ['Letitia Tyler', 'Margaret Taylor'],
    facts: {
      'Letitia Tyler': 'Died in the White House in 1842 while her husband was President, after a stroke that left her unable to appear in public.',
      'Margaret Taylor': 'Rarely appeared in public as First Lady and left most hostess duties to her daughter.',
    },
  },
  {
    id: 'hist-vijayanagara-ruler',
    category: 'history',
    prompt: 'Name a ruler of the Vijayanagara Empire',
    qualifier: 'Kings and regents of the empire (1336 to about 1646), from Harihara I onward',
    strip: ['raya', 'deva raya', 'king'],
    missingTier: 'deep',
    answers: `
      Harihara I|Harihara@Harihara I; Bukka Raya I|Bukka I|Bukka Raya|Bukka@Bukka Raya I; Harihara II@Harihara II; Virupaksha Raya I|Virupaksha I@Virupaksha I;
      Bukka Raya II|Bukka II@Bukka Raya II; Deva Raya I|Devaraya I@Deva Raya I; Ramachandra Raya@Ramachandra Raya; Vira Vijaya Bhupati|Vira Vijaya Bukka Raya@Vira Vijaya Bukka Raya;
      Deva Raya II|Devaraya II|Praudha Deva Raya|Gajabetekara@Deva Raya II; Mallikarjuna Raya|Mallikarjuna@Mallikarjuna Raya; Virupaksha Raya II|Virupaksha II@Virupaksha Raya II;
      Praudha Raya@Praudha Raya; Saluva Narasimha Deva Raya|Saluva Narasimha@Saluva Narasimha Deva Raya; Narasimha Raya II|Immadi Narasimha@Narasimha Raya II;
      Tuluva Narasa Nayaka|Narasa Nayaka|Narasa Nayaka@Tuluva Narasa Nayaka; Vira Narasimha Raya|Vira Narasimha@Vira Narasimha Raya; Krishnadevaraya|Krishna Deva Raya|Krishnadeva Raya|Sri Krishnadevaraya@Krishnadevaraya;
      Achyuta Deva Raya|Achyuta Raya|Achyutaraya@Achyuta Deva Raya; Venkata I|Venkata Deva Raya I@Venkata I; Sadasiva Raya|Sadashiva Raya|Sadashiva@Sadasiva Raya;
      Aliya Rama Raya|Rama Raya|Ramaraya@Aliya Rama Raya; Tirumala Deva Raya|Tirumala Raya@Tirumala Deva Raya; Sriranga I|Sriranga Raya I@Sriranga I;
      Venkata II|Venkatapati Raya|Venkata Deva Raya II@Venkatapati Raya; Rama Deva Raya|Ramadeva Raya@Rama Deva Raya; Venkata III@Venkata III; Sriranga II|Sriranga Raya II@Sriranga II;
      Sriranga III@Sriranga III; Vira Pratapa Deva Raya|Pratapa Deva Raya@Vira Pratapa Deva Raya`,
    legendary: ['Virupaksha Raya II', 'Rama Deva Raya'],
    facts: {
      'Virupaksha Raya II': 'A weak last ruler of the Sangama line, whose reign ended in a coup in the 1480s.',
      'Rama Deva Raya': 'A king of the Aravidu line who ruled in the early 1600s from Chandragiri and Vellore.',
    },
  },
];
