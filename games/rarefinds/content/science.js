const ELEMENTS = [
  ['Hydrogen', 'H'], ['Helium', 'He'], ['Lithium', 'Li'], ['Beryllium', 'Be'], ['Boron', 'B'], ['Carbon', 'C'], ['Nitrogen', 'N'], ['Oxygen', 'O'],
  ['Fluorine', 'F'], ['Neon', 'Ne'], ['Sodium', 'Na'], ['Magnesium', 'Mg'], ['Aluminium|Aluminum', 'Al'], ['Silicon', 'Si'], ['Phosphorus', 'P'],
  ['Sulfur|Sulphur', 'S'], ['Chlorine', 'Cl'], ['Argon', 'Ar'], ['Potassium', 'K'], ['Calcium', 'Ca'], ['Scandium', 'Sc'], ['Titanium', 'Ti'],
  ['Vanadium', 'V'], ['Chromium', 'Cr'], ['Manganese', 'Mn'], ['Iron', 'Fe'], ['Cobalt', 'Co'], ['Nickel', 'Ni'], ['Copper', 'Cu'], ['Zinc', 'Zn'],
  ['Gallium', 'Ga'], ['Germanium', 'Ge'], ['Arsenic', 'As'], ['Selenium', 'Se'], ['Bromine', 'Br'], ['Krypton', 'Kr'], ['Rubidium', 'Rb'],
  ['Strontium', 'Sr'], ['Yttrium', 'Y'], ['Zirconium', 'Zr'], ['Niobium', 'Nb'], ['Molybdenum', 'Mo'], ['Technetium', 'Tc'], ['Ruthenium', 'Ru'],
  ['Rhodium', 'Rh'], ['Palladium', 'Pd'], ['Silver', 'Ag'], ['Cadmium', 'Cd'], ['Indium', 'In'], ['Tin', 'Sn'], ['Antimony', 'Sb'], ['Tellurium', 'Te'],
  ['Iodine', 'I'], ['Xenon', 'Xe'], ['Caesium|Cesium', 'Cs'], ['Barium', 'Ba'], ['Lanthanum', 'La'], ['Cerium', 'Ce'], ['Praseodymium', 'Pr'],
  ['Neodymium', 'Nd'], ['Promethium', 'Pm'], ['Samarium', 'Sm'], ['Europium', 'Eu'], ['Gadolinium', 'Gd'], ['Terbium', 'Tb'], ['Dysprosium', 'Dy'],
  ['Holmium', 'Ho'], ['Erbium', 'Er'], ['Thulium', 'Tm'], ['Ytterbium', 'Yb'], ['Lutetium', 'Lu'], ['Hafnium', 'Hf'], ['Tantalum', 'Ta'],
  ['Tungsten|Wolfram', 'W'], ['Rhenium', 'Re'], ['Osmium', 'Os'], ['Iridium', 'Ir'], ['Platinum', 'Pt'], ['Gold', 'Au'], ['Mercury@Mercury (element)', 'Hg'],
  ['Thallium', 'Tl'], ['Lead', 'Pb'], ['Bismuth', 'Bi'], ['Polonium', 'Po'], ['Astatine', 'At'], ['Radon', 'Rn'], ['Francium', 'Fr'], ['Radium', 'Ra'],
  ['Actinium', 'Ac'], ['Thorium', 'Th'], ['Protactinium', 'Pa'], ['Uranium', 'U'], ['Neptunium', 'Np'], ['Plutonium', 'Pu'], ['Americium', 'Am'],
  ['Curium', 'Cm'], ['Berkelium', 'Bk'], ['Californium', 'Cf'], ['Einsteinium', 'Es'], ['Fermium', 'Fm'], ['Mendelevium', 'Md'], ['Nobelium', 'No'],
  ['Lawrencium', 'Lr'], ['Rutherfordium', 'Rf'], ['Dubnium', 'Db'], ['Seaborgium', 'Sg'], ['Bohrium', 'Bh'], ['Hassium', 'Hs'], ['Meitnerium', 'Mt'],
  ['Darmstadtium', 'Ds'], ['Roentgenium', 'Rg'], ['Copernicium', 'Cn'], ['Nihonium', 'Nh'], ['Flerovium', 'Fl'], ['Moscovium', 'Mc'],
  ['Livermorium', 'Lv'], ['Tennessine', 'Ts'], ['Oganesson', 'Og'],
];
if (ELEMENTS.length !== 118) throw new Error('element table must have 118 rows');

// Element symbols are accepted as aliases (so "Fe" scores as iron).
const withSymbol = ([name, sym]) => {
  const [main, title] = name.split('@');
  return `${main}|${sym}${title ? '@' + title : ''}`;
};

module.exports = [
  {
    id: 'sci-element',
    category: 'science',
    prompt: 'Name a chemical element',
    qualifier: 'Any of the 118 named elements; symbols work too',
    answers: ELEMENTS.map(withSymbol).join(';'),
    closed: 118,
    strip: ['element'],
    tryhard: ['Molybdenum'],
    legendary: ['Technetium'],
    facts: {
      Technetium: 'The first element to be made artificially (1937); every isotope of it is radioactive.',
      Molybdenum: 'Its name comes from the Greek word for lead, because its ore was mistaken for lead.',
    },
  },
  {
    id: 'sci-element-one-letter',
    category: 'science',
    prompt: 'Name a chemical element whose symbol is a single letter',
    qualifier: 'For example, O for oxygen',
    answers: ELEMENTS.filter(([, s]) => s.length === 1).map(withSymbol).join(';'),
    closed: 14,
    strip: ['element'],
    legendary: ['Yttrium'],
    facts: { Yttrium: 'Named after Ytterby, a Swedish village that also gave its name to ytterbium, terbium and erbium.' },
  },
  {
    id: 'sci-bone',
    category: 'science',
    prompt: 'Name a bone in the human body',
    qualifier: 'Anatomical or common names; groups like "rib" or "vertebra" count',
    strip: ['bone'],
    answers: `
      Femur|thigh bone; Tibia|shin bone|shinbone; Fibula; Patella|kneecap|knee cap; Humerus; Radius@Radius (bone); Ulna;
      Clavicle|collarbone|collar bone; Scapula|shoulder blade; Sternum|breastbone|breast bone; Rib|ribs|rib cage; Vertebra|vertebrae|spine|backbone|spinal column;
      Sacrum; Coccyx|tailbone|tail bone; Hip bone|pelvis|pelvic bone|coxal bone|innominate bone; Ilium@Ilium (bone); Ischium; Pubis|pubic bone@Pubis (bone);
      Mandible|jawbone|jaw bone|lower jaw|jaw; Maxilla|upper jaw; Frontal bone; Parietal bone; Temporal bone; Occipital bone;
      Sphenoid bone; Ethmoid bone; Nasal bone; Lacrimal bone; Zygomatic bone|cheekbone|cheek bone; Palatine bone; Vomer;
      Inferior nasal concha|turbinate; Hyoid bone|hyoid; Malleus|hammer; Incus|anvil; Stapes|stirrup;
      Atlas@Atlas (anatomy); Axis@Axis (anatomy); Scaphoid bone|scaphoid; Lunate bone|lunate; Triquetral bone|triquetrum;
      Pisiform bone|pisiform; Trapezium@Trapezium (bone); Trapezoid bone|trapezoid; Capitate bone|capitate; Hamate bone|hamate;
      Metacarpal|metacarpals@Metacarpal bones; Carpal|carpals|carpal bones|wrist bones@Carpal bones; Tarsal|tarsals|tarsal bones@Tarsus (skeleton); Phalanx|phalanges@Phalanx bone; Talus|ankle bone|astragalus@Talus bone; Calcaneus|heel bone;
      Navicular bone|navicular; Cuboid bone|cuboid; Cuneiform bone|cuneiform|cuneiforms@Cuneiform bones; Metatarsal|metatarsals@Metatarsal bones;
      Sesamoid bone|sesamoid; Skull|cranium`,
    tryhard: ['Stapes'],
    legendary: ['Hyoid bone'],
    facts: {
      'Hyoid bone': 'The only bone in the body that does not touch any other bone.',
      Stapes: 'The smallest bone in the human body, about 3 mm long.',
    },
  },
  {
    id: 'sci-moon',
    category: 'science',
    prompt: 'Name a moon in the Solar System',
    qualifier: 'Named natural satellites of planets and dwarf planets',
    strip: ['moon'],
    display: {},
    answers: `
      Moon|the Moon|Luna@Moon; Phobos@Phobos (moon); Deimos@Deimos (moon);
      Io@Io (moon); Europa@Europa (moon); Ganymede@Ganymede (moon); Callisto@Callisto (moon); Amalthea@Amalthea (moon);
      Himalia@Himalia (moon); Elara@Elara (moon); Pasiphae@Pasiphae (moon); Sinope@Sinope (moon); Lysithea@Lysithea (moon);
      Carme@Carme (moon); Ananke@Ananke (moon); Leda@Leda (moon); Thebe@Thebe (moon); Adrastea@Adrastea (moon); Metis@Metis (moon);
      Mimas@Mimas (moon); Enceladus; Tethys@Tethys (moon); Dione@Dione (moon); Rhea@Rhea (moon); Titan@Titan (moon);
      Hyperion@Hyperion (moon); Iapetus@Iapetus (moon); Phoebe@Phoebe (moon); Janus@Janus (moon); Epimetheus@Epimetheus (moon);
      Helene@Helene (moon); Telesto@Telesto (moon); Calypso@Calypso (moon); Atlas@Atlas (moon); Prometheus@Prometheus (moon);
      Pandora@Pandora (moon); Pan@Pan (moon); Daphnis@Daphnis (moon); Ymir@Ymir (moon); Paaliaq; Tarvos@Tarvos (moon);
      Ijiraq@Ijiraq (moon); Kiviuq@Kiviuq (moon); Mundilfari@Mundilfari (moon); Albiorix@Albiorix (moon); Skathi@Skathi (moon);
      Siarnaq@Siarnaq (moon); Methone@Methone (moon); Pallene@Pallene (moon); Polydeuces@Polydeuces (moon); Anthe@Anthe (moon);
      Miranda@Miranda (moon); Ariel@Ariel (moon); Umbriel; Titania@Titania (moon); Oberon@Oberon (moon); Puck@Puck (moon);
      Cordelia@Cordelia (moon); Ophelia@Ophelia (moon); Bianca@Bianca (moon); Cressida@Cressida (moon); Desdemona@Desdemona (moon);
      Juliet@Juliet (moon); Portia@Portia (moon); Rosalind@Rosalind (moon); Belinda@Belinda (moon); Perdita@Perdita (moon);
      Mab@Mab (moon); Cupid@Cupid (moon); Caliban@Caliban (moon); Sycorax@Sycorax (moon); Prospero@Prospero (moon);
      Setebos@Setebos (moon); Stephano@Stephano (moon); Trinculo@Trinculo (moon); Francisco@Francisco (moon); Margaret@Margaret (moon);
      Ferdinand@Ferdinand (moon); Triton@Triton (moon); Nereid@Nereid (moon); Naiad@Naiad (moon); Thalassa@Thalassa (moon);
      Despina@Despina (moon); Galatea@Galatea (moon); Larissa@Larissa (moon); Proteus@Proteus (moon); Halimede@Halimede (moon);
      Psamathe@Psamathe (moon); Sao@Sao (moon); Laomedeia; Neso@Neso (moon); Hippocamp@Hippocamp (moon);
      Charon@Charon (moon); Nix@Nix (moon); Hydra@Hydra (moon); Kerberos@Kerberos (moon); Styx@Styx (moon);
      Dysnomia@Dysnomia (moon); Hiiaka|Hi'iaka@Hiʻiaka (moon); Namaka@Namaka (moon)`,
    legendary: ['Hyperion'],
    facts: { Hyperion: "Saturn's sponge-like moon; it tumbles chaotically instead of spinning steadily." },
    missingTier: 'deep',
  },
];
