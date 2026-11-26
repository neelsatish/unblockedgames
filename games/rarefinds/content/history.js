module.exports = [
  {
    id: 'hist-greek-deity',
    category: 'history',
    prompt: 'Name a god or goddess from Greek mythology',
    qualifier: 'Greek names only; Roman names like Jupiter do not count',
    answers: `
      Zeus; Hera; Poseidon; Demeter; Athena|Athene; Apollo; Artemis; Ares; Aphrodite; Hephaestus|Hephaistos; Hermes; Dionysus|Dionysos;
      Hades; Hestia; Persephone|Kore; Eros; Nike@Nike (mythology); Hecate|Hekate; Pan@Pan (god); Helios; Selene; Eos; Gaia|Gaea|Ge;
      Uranus|Ouranos@Uranus (mythology); Cronus|Kronos; Rhea@Rhea (mythology); Hypnos; Thanatos; Nemesis@Nemesis (mythology); Tyche;
      Asclepius|Asklepios; Hebe@Hebe (mythology); Iris@Iris (mythology); Morpheus; Nyx; Erebus@Erebus (mythology); Chaos@Chaos (cosmogony);
      Tartarus; Oceanus|Okeanos; Tethys@Tethys (mythology); Hyperion@Hyperion (Titan); Themis; Mnemosyne; Atlas@Atlas (mythology);
      Prometheus; Epimetheus; Triton@Triton (mythology); Proteus; Nereus; Aeolus|Aiolos@Aeolus (god); Boreas@Boreas (god); Zephyrus|Zephyr;
      Notus; Eurus; Hymen|Hymenaeus@Hymen (god); Harmonia; Eris@Eris (mythology); Enyo; Deimos@Deimos (deity); Phobos@Phobos (mythology);
      Priapus; Calliope; Clio; Erato; Euterpe; Melpomene; Polyhymnia; Terpsichore; Thalia@Thalia (Muse); Urania; Clotho; Lachesis;
      Atropos; Charon; Heracles|Herakles|Hercules; Metis@Metis (mythology); Leto; Dione@Dione (mythology)`,
    tryhard: ['Heracles'],
    legendary: ['Hymen'],
    facts: {
      Heracles: 'A hero who only became a god after his death; Hercules is the Roman version of his name.',
      Hymen: 'The god of weddings; Greek wedding songs called out his name.',
    },
  },
  {
    id: 'hist-us-president',
    category: 'history',
    prompt: 'Name a President of the United States',
    qualifier: 'Anyone who has held the office, up to 2025',
    strip: ['president'],
    closed: 45,
    answers: `
      George Washington|Washington; John Adams|Adams; Thomas Jefferson|Jefferson; James Madison|Madison; James Monroe|Monroe;
      John Quincy Adams|Adams|JQA; Andrew Jackson|Jackson; Martin Van Buren|Van Buren; William Henry Harrison|Harrison; John Tyler|Tyler;
      James K. Polk|James Polk|Polk; Zachary Taylor|Taylor; Millard Fillmore|Fillmore; Franklin Pierce|Pierce; James Buchanan|Buchanan;
      Abraham Lincoln|Lincoln|Abe Lincoln; Andrew Johnson|Johnson; Ulysses S. Grant|Ulysses Grant|Grant; Rutherford B. Hayes|Rutherford Hayes|Hayes;
      James A. Garfield|James Garfield|Garfield; Chester A. Arthur|Chester Arthur|Arthur; Grover Cleveland|Cleveland; Benjamin Harrison|Harrison;
      William McKinley|McKinley; Theodore Roosevelt|Teddy Roosevelt|Roosevelt; William Howard Taft|Taft; Woodrow Wilson|Wilson;
      Warren G. Harding|Warren Harding|Harding; Calvin Coolidge|Coolidge; Herbert Hoover|Hoover; Franklin D. Roosevelt|FDR|Franklin Roosevelt|Roosevelt;
      Harry S. Truman|Harry Truman|Truman; Dwight D. Eisenhower|Eisenhower|Ike; John F. Kennedy|JFK|Kennedy|John Kennedy;
      Lyndon B. Johnson|LBJ|Lyndon Johnson|Johnson; Richard Nixon|Nixon; Gerald Ford|Ford; Jimmy Carter|Carter; Ronald Reagan|Reagan;
      George H. W. Bush|George HW Bush|Bush Sr|George Bush Sr|Bush|George Bush; Bill Clinton|Clinton; George W. Bush|George W Bush|Bush Jr|Dubya|Bush|George Bush;
      Barack Obama|Obama; Donald Trump|Trump; Joe Biden|Biden|Joseph Biden`,
    legendary: ['Chester A. Arthur'],
  },
  {
    id: 'hist-indian-pm',
    category: 'history',
    prompt: 'Name a Prime Minister of India',
    qualifier: 'Including acting prime ministers, up to 2025',
    strip: ['prime minister'],
    closed: 15,
    answers: `
      Jawaharlal Nehru|Nehru|Pandit Nehru; Gulzarilal Nanda|Nanda; Lal Bahadur Shastri|Shastri; Indira Gandhi|Indira;
      Morarji Desai|Desai; Charan Singh|Chaudhary Charan Singh; Rajiv Gandhi|Rajiv; V. P. Singh|VP Singh|Vishwanath Pratap Singh;
      Chandra Shekhar@Chandra Shekhar; P. V. Narasimha Rao|PV Narasimha Rao|Narasimha Rao; Atal Bihari Vajpayee|Vajpayee|Atal Vajpayee;
      H. D. Deve Gowda|HD Deve Gowda|Deve Gowda; I. K. Gujral|IK Gujral|Gujral|Inder Kumar Gujral; Manmohan Singh|Manmohan; Narendra Modi|Modi`,
    legendary: ['Gulzarilal Nanda'],
    facts: { 'Gulzarilal Nanda': 'Acting Prime Minister twice, each time for 13 days, after the deaths of Nehru and Shastri.' },
  },
  {
    id: 'hist-shakespeare',
    category: 'history',
    prompt: 'Name a play by William Shakespeare',
    qualifier: 'The 38 plays usually counted in his canon',
    closed: 38,
    answers: `
      All's Well That Ends Well; Antony and Cleopatra; As You Like It; The Comedy of Errors; Coriolanus@Coriolanus; Cymbeline;
      Hamlet; Henry IV, Part 1|Henry IV Part 1|Henry IV|1 Henry IV; Henry IV, Part 2|Henry IV Part 2|Henry IV|2 Henry IV; Henry V@Henry V (play);
      Henry VI, Part 1|Henry VI Part 1|Henry VI; Henry VI, Part 2|Henry VI Part 2|Henry VI; Henry VI, Part 3|Henry VI Part 3|Henry VI;
      Henry VIII@Henry VIII (play); Julius Caesar@Julius Caesar (play); King John@King John (play); King Lear|Lear; Love's Labour's Lost|Loves Labours Lost;
      Macbeth; Measure for Measure; The Merchant of Venice; The Merry Wives of Windsor; A Midsummer Night's Dream|Midsummer Nights Dream;
      Much Ado About Nothing; Othello; Pericles, Prince of Tyre|Pericles; Richard II@Richard II (play); Richard III@Richard III (play);
      Romeo and Juliet; The Taming of the Shrew; The Tempest; Timon of Athens; Titus Andronicus; Troilus and Cressida; Twelfth Night;
      The Two Gentlemen of Verona; The Two Noble Kinsmen; The Winter's Tale|Winters Tale`,
    legendary: ['The Two Noble Kinsmen'],
    facts: { 'The Two Noble Kinsmen': 'Co-written with John Fletcher, and left out of the 1623 First Folio.' },
  },
];
