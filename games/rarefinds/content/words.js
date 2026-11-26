module.exports = [
  {
    id: 'word-ology',
    category: 'words',
    prompt: 'Name an English word that ends in "-ology"',
    qualifier: 'Real dictionary words spelled with -ology at the end (genealogy ends in -alogy)',
    groups: {
      textbook: 'Biology; Psychology; Technology; Geology; Sociology; Zoology; Ecology; Apology',
      honours: `Anthropology; Archaeology|archeology; Astrology; Cardiology; Criminology; Dermatology; Mythology; Neurology;
        Meteorology; Microbiology; Pathology; Physiology; Radiology; Theology; Ideology; Methodology; Terminology; Chronology;
        Oncology; Immunology; Virology; Cosmology; Paleontology|palaeontology; Toxicology; Seismology; Pharmacology; Gynecology|gynaecology;
        Numerology; Ophthalmology; Entomology; Etymology; Anthology; Biotechnology; Nanotechnology; Egyptology; Ornithology`,
      rare: `Hematology|haematology; Herpetology; Ichthyology; Mycology; Horology; Urology; Nephrology; Endocrinology;
        Gastroenterology; Rheumatology; Audiology; Speleology; Volcanology|vulcanology; Glaciology; Hydrology; Climatology;
        Phonology; Morphology; Embryology; Histology; Cytology; Epidemiology; Gerontology; Graphology; Philology; Lexicology;
        Ontology; Epistemology; Phenomenology; Topology; Trichology; Osteology; Kinesiology; Musicology; Primatology;
        Parasitology; Bacteriology; Penology; Doxology; Astrobiology; Cryptozoology; Ufology; Sexology; Pulmonology; Neonatology;
        Anesthesiology|anaesthesiology; Petrology; Limnology; Oceanology; Phrenology; Serology; Phraseology; Eschatology; Teleology`,
      deep: `Dendrology; Oology; Conchology; Malacology; Selenology; Myology; Odontology; Deontology; Axiology; Soteriology;
        Christology; Semiology; Victimology; Exobiology; Pomology; Oenology|enology; Nephology; Hippology; Cetology; Myrmecology;
        Arachnology; Bryology; Lichenology; Palynology; Sinology; Assyriology; Iconology; Escapology; Futurology; Chirology`,
      tryhard: 'Vexillology',
      legendary: 'Campanology',
    },
    facts: {
      Campanology: 'The study and art of bell-ringing.',
      Vexillology: 'The study of flags.',
      Apology: 'The everyday word hiding in a list of sciences.',
    },
  },
  {
    id: 'word-indian-language',
    category: 'words',
    prompt: "Name one of the 22 languages in the Eighth Schedule of India's Constitution",
    qualifier: 'The scheduled languages of India',
    strip: ['language'],
    closed: 22,
    answers: `
      Assamese@Assamese language; Bengali|Bangla@Bengali language; Bodo@Bodo language; Dogri@Dogri language; Gujarati@Gujarati language;
      Hindi; Kannada; Kashmiri|Koshur@Kashmiri language; Konkani@Konkani language; Maithili@Maithili language; Malayalam;
      Manipuri|Meitei|Meiteilon@Meitei language; Marathi@Marathi language; Nepali@Nepali language; Odia|Oriya@Odia language;
      Punjabi|Panjabi@Punjabi language; Sanskrit; Santali|Santhali@Santali language; Sindhi@Sindhi language; Tamil@Tamil language;
      Telugu@Telugu language; Urdu`,
    legendary: ['Dogri'],
    facts: { Dogri: 'Spoken mainly in Jammu; added to the Eighth Schedule in 2003.' },
  },
  {
    id: 'word-programming-language',
    category: 'words',
    prompt: 'Name a programming language',
    qualifier: 'Languages with their own English Wikipedia article',
    strip: ['programming language', 'language'],
    sparql: `SELECT ?item ?itemLabel ?alt ?article ?sitelinks WHERE {
      ?item wdt:P31/wdt:P279* wd:Q9143 ; wikibase:sitelinks ?sitelinks .
      ?article schema:about ?item ; schema:isPartOf <https://en.wikipedia.org/> .
      FILTER(?sitelinks >= 3)
      OPTIONAL { ?item skos:altLabel ?alt FILTER(LANG(?alt) = "en") }
      SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
    }`,
    // Markup and stylesheet languages are not programming languages (HTML is already absent from Wikidata's list).
    filter: (a) => !['Cascading Style Sheets', 'XML', 'HTML', 'Markdown', 'JSON', 'YAML'].includes(a.name),
    legendary: ['Logo'],
    facts: { Logo: 'A 1967 teaching language where you program a "turtle" to draw shapes.' },
  },
];
