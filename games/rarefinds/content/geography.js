const c = require('./_countries');

module.exports = [
  {
    id: 'geo-country-s',
    category: 'geography',
    prompt: 'Name a country that begins with S',
    qualifier: 'UN member or observer states, by their common English name',
    answers: c.countriesStartingWith('S'),
    closed: 26,
    legendary: ['São Tomé and Príncipe'],
  },
  {
    id: 'geo-africa',
    category: 'geography',
    prompt: 'Name a country in Africa',
    qualifier: 'Sovereign UN member states',
    answers: c.countriesIn('AF'),
    closed: 54,
    legendary: ['Comoros'],
  },
  {
    id: 'geo-asia',
    category: 'geography',
    prompt: 'Name a country in Asia',
    qualifier: 'UN member or observer states; transcontinental countries count',
    answers: c.countriesIn('AS'),
    legendary: ['Brunei'],
  },
  {
    id: 'geo-south-america',
    category: 'geography',
    prompt: 'Name a country in South America',
    qualifier: 'Sovereign states only (French Guiana is part of France)',
    answers: c.countriesIn('SA'),
    closed: 12,
    legendary: ['Suriname'],
  },
  {
    id: 'geo-oceania',
    category: 'geography',
    prompt: 'Name a country in Oceania',
    qualifier: 'Sovereign UN member states',
    answers: c.countriesIn('OC'),
    closed: 14,
    legendary: ['Kiribati'],
  },
  {
    id: 'geo-europe-capital',
    category: 'geography',
    prompt: 'Name the capital city of a European country',
    qualifier: 'Capitals of UN member or observer states in Europe, including transcontinental ones',
    answers: c.europeanCapitals(),
    strip: ['city'],
    tryhard: ['Monaco', 'Vatican City'],
    legendary: ['Vaduz'],
    facts: { Monaco: 'A city-state, so the country and its capital share a name.', 'Vatican City': 'The smallest country in the world is its own capital.' },
  },
  {
    id: 'geo-indian-state',
    category: 'geography',
    prompt: 'Name a state or union territory of India',
    qualifier: 'The 28 states and 8 union territories as of 2024',
    closed: 36,
    answers: `
      Andhra Pradesh|AP; Arunachal Pradesh; Assam; Bihar; Chhattisgarh|Chattisgarh; Goa; Gujarat; Haryana;
      Himachal Pradesh|HP; Jharkhand; Karnataka; Kerala; Madhya Pradesh|MP; Maharashtra; Manipur; Meghalaya;
      Mizoram; Nagaland; Odisha|Orissa; Punjab@Punjab, India; Rajasthan; Sikkim; Tamil Nadu|TN; Telangana;
      Tripura; Uttar Pradesh|UP; Uttarakhand|Uttaranchal; West Bengal|WB;
      Andaman and Nicobar Islands|Andaman and Nicobar|Andamans; Chandigarh;
      Dadra and Nagar Haveli and Daman and Diu|Daman and Diu|Dadra and Nagar Haveli;
      Delhi|New Delhi|NCT of Delhi; Jammu and Kashmir|J&K|Kashmir@Jammu and Kashmir (union territory); Ladakh; Lakshadweep;
      Puducherry|Pondicherry@Puducherry (union territory)`,
    legendary: ['Lakshadweep'],
  },
  {
    id: 'geo-us-state',
    category: 'geography',
    prompt: 'Name a US state',
    qualifier: 'The 50 states (Washington, D.C. is not a state)',
    closed: 50,
    answers: `
      Alabama; Alaska; Arizona; Arkansas; California; Colorado; Connecticut; Delaware; Florida;
      Georgia@Georgia (U.S. state); Hawaii; Idaho; Illinois; Indiana; Iowa; Kansas; Kentucky; Louisiana;
      Maine; Maryland; Massachusetts; Michigan; Minnesota; Mississippi; Missouri; Montana; Nebraska;
      Nevada; New Hampshire; New Jersey; New Mexico; New York|New York State@New York (state); North Carolina;
      North Dakota; Ohio; Oklahoma; Oregon; Pennsylvania; Rhode Island; South Carolina; South Dakota;
      Tennessee; Texas; Utah; Vermont; Virginia; Washington|Washington State@Washington (state);
      West Virginia; Wisconsin; Wyoming`,
    legendary: ['Delaware'],
  },
  {
    id: 'geo-river-india',
    category: 'geography',
    prompt: 'Name a river that flows through India',
    qualifier: 'Rivers with their own English Wikipedia article',
    strip: ['river'],
    sparql: `SELECT ?item ?itemLabel ?alt ?article ?sitelinks WHERE {
      ?item wdt:P31/wdt:P279* wd:Q4022 ; wdt:P17 wd:Q668 ; wikibase:sitelinks ?sitelinks .
      ?article schema:about ?item ; schema:isPartOf <https://en.wikipedia.org/> .
      OPTIONAL { ?item skos:altLabel ?alt FILTER(LANG(?alt) = "en") }
      SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
    }`,
    legendary: ['Vrishabhavathi River'],
    facts: { 'Vrishabhavathi River': 'A river that rises in Bengaluru; the city has now turned much of it into a drain.' },
  },
];
