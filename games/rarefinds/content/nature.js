module.exports = [
  {
    id: 'nat-penguin',
    category: 'nature',
    prompt: 'Name a species of penguin',
    qualifier: 'Living species, by common English name',
    strip: ['penguin'],
    closed: 18,
    answers: `
      Emperor penguin@Emperor penguin; King penguin@King penguin; Adélie penguin|Adelie@Adélie penguin;
      Chinstrap penguin|ringed penguin@Chinstrap penguin; Gentoo penguin@Gentoo penguin;
      Little penguin|little blue penguin|blue penguin|fairy penguin@Little penguin; Magellanic penguin@Magellanic penguin;
      Humboldt penguin|Peruvian penguin@Humboldt penguin; African penguin|jackass penguin|black-footed penguin|Cape penguin@African penguin;
      Galápagos penguin|Galapagos@Galápagos penguin; Macaroni penguin@Macaroni penguin; Royal penguin@Royal penguin;
      Southern rockhopper penguin|rockhopper|rockhopper penguin@Southern rockhopper penguin; Northern rockhopper penguin@Northern rockhopper penguin;
      Fiordland penguin|Fiordland crested penguin@Fiordland penguin; Snares penguin|Snares crested penguin@Snares penguin;
      Erect-crested penguin|erect crested@Erect-crested penguin; Yellow-eyed penguin|hoiho@Yellow-eyed penguin`,
    legendary: ['Snares penguin'],
  },
  {
    id: 'nat-cat-species',
    category: 'nature',
    prompt: 'Name a species of cat',
    qualifier: 'Any member of the cat family, wild or domestic',
    answers: `
      Lion; Tiger; Leopard; Jaguar; Cheetah; Snow leopard|ounce; Clouded leopard; Sunda clouded leopard;
      Cougar|puma|mountain lion|panther (cougar)@Cougar; Eurasian lynx|lynx; Canada lynx; Iberian lynx; Bobcat;
      Caracal; Serval; Ocelot; Margay; Oncilla|little spotted cat|tigrina@Oncilla; Jaguarundi; Sand cat; Black-footed cat;
      Fishing cat; Flat-headed cat; Rusty-spotted cat; Leopard cat; Sunda leopard cat; Pallas's cat|manul|Pallas cat;
      Marbled cat; Asian golden cat; African golden cat; Bay cat|Bornean bay cat; Jungle cat|swamp cat|reed cat;
      European wildcat; African wildcat; Chinese mountain cat|Chinese desert cat; Geoffroy's cat; Kodkod|guiña;
      Pampas cat; Andean mountain cat|Andean cat; Cat|domestic cat|house cat|housecat`,
    tryhard: ['Ocelot'],
    legendary: ['Rusty-spotted cat'],
    facts: { 'Rusty-spotted cat': "The world's smallest wild cat, found in India and Sri Lanka." },
  },
  {
    id: 'nat-dinosaur',
    category: 'nature',
    prompt: 'Name a dinosaur',
    qualifier: 'A dinosaur genus. Pterosaurs and marine reptiles are not dinosaurs.',
    strip: ['dinosaur'],
    answers: `
      Tyrannosaurus|T rex|T-rex|Tyrannosaurus rex|trex; Triceratops; Velociraptor|raptor; Stegosaurus; Brachiosaurus; Diplodocus;
      Spinosaurus; Ankylosaurus; Allosaurus; Iguanodon; Parasaurolophus; Pachycephalosaurus; Apatosaurus; Brontosaurus;
      Archaeopteryx; Compsognathus; Deinonychus; Gallimimus; Giganotosaurus; Carnotaurus; Dilophosaurus; Baryonyx;
      Utahraptor; Therizinosaurus; Oviraptor; Protoceratops; Psittacosaurus; Maiasaura; Edmontosaurus; Hadrosaurus;
      Corythosaurus; Lambeosaurus; Styracosaurus; Pachyrhinosaurus; Centrosaurus; Chasmosaurus; Torosaurus; Kentrosaurus;
      Euoplocephalus; Nodosaurus; Argentinosaurus; Patagotitan; Dreadnoughtus; Camarasaurus; Mamenchisaurus; Plateosaurus;
      Coelophysis; Herrerasaurus; Eoraptor; Microraptor; Sinosauropteryx; Troodon; Albertosaurus; Daspletosaurus;
      Gorgosaurus; Tarbosaurus; Yutyrannus; Mapusaurus; Carcharodontosaurus; Ceratosaurus; Cryolophosaurus; Megalosaurus;
      Suchomimus; Ornithomimus; Struthiomimus; Deinocheirus; Muttaburrasaurus; Leaellynasaura; Amargasaurus;
      Nigersaurus; Ouranosaurus; Saltasaurus; Rajasaurus; Isisaurus; Barapasaurus; Pentaceratops; Einiosaurus;
      Huayangosaurus; Scelidosaurus; Heterodontosaurus; Saurolophus; Shantungosaurus; Concavenator; Irritator;
      Majungasaurus; Abelisaurus; Masiakasaurus; Minmi@Minmi (dinosaur)`,
    tryhard: ['Archaeopteryx'],
    legendary: ['Rajasaurus'],
    facts: { Rajasaurus: 'A horned predator whose fossils were found in Gujarat, India; its name means "king lizard".' },
  },
  {
    id: 'nat-dog-breed',
    category: 'nature',
    prompt: 'Name a breed of dog',
    qualifier: 'Breeds with their own English Wikipedia article',
    strip: ['dog', 'hound'],
    sparql: `SELECT ?item ?itemLabel ?alt ?article ?sitelinks WHERE {
      ?item wdt:P31 wd:Q39367 ; wikibase:sitelinks ?sitelinks .
      ?article schema:about ?item ; schema:isPartOf <https://en.wikipedia.org/> .
      OPTIONAL { ?item skos:altLabel ?alt FILTER(LANG(?alt) = "en") }
      SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
    }`,
    legendary: [],
  },
];
