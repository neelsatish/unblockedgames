module.exports = [
  {
    id: 'school-subject',
    category: 'school',
    prompt: 'Name a subject taught at school',
    qualifier: 'Subjects in Indian or international school curricula',
    groups: {
      textbook: 'Mathematics|maths|math; English; Science; Physics; Chemistry; Biology; History; Geography',
      honours: `Computer science|CS|computing|computers; Economics; Hindi; Kannada; French; Art|fine art|arts; Music;
        Physical education|PE|PT|sports|games; Business studies|business; Accountancy|accounting|accounts; Psychology; Sociology;
        Political science|civics|politics; Environmental studies|EVS; Sanskrit; Spanish; German; Drama|theatre|theater`,
      rare: `Global perspectives; Information technology|IT|ICT; Statistics; Literature|English literature;
        Moral science|value education|values; General knowledge|GK; Design and technology|DT|design; Media studies; Philosophy;
        Tamil; Telugu; Malayalam; Urdu; Japanese; Mandarin|Chinese; Robotics; Coding|programming; Home science|home economics;
        Environmental management; Social studies; Life skills; Dance; Library; Personal, social and health education|PSHE`,
      deep: `Latin; Classics; Law; Astronomy; Marine science; Travel and tourism; Thinking skills; Entrepreneurship; Agriculture;
        Food and nutrition; Anthropology; Archaeology; Electronics; Textiles; Woodwork; Pottery|ceramics;
        Sign language; Debate; Journalism`,
      legendary: 'Further mathematics|further maths',
    },
  },
  {
    id: 'school-bag',
    category: 'school',
    prompt: 'Name something you might find in a school bag',
    qualifier: 'Things students actually carry to school',
    groups: {
      textbook: 'Pen; Pencil; Eraser|rubber; Ruler|scale; Notebook|exercise book|copy; Sharpener|pencil sharpener; Water bottle|bottle; Lunch box|tiffin|tiffin box|lunch; Textbook|book|books',
      honours: `Highlighter; Calculator; Geometry box|compass box|maths set; Compass; Protractor; Glue stick|glue; Scissors; Sketch pens|felt-tip pens|felt tips|markers;
        Crayons; Colour pencils|colored pencils|coloured pencils; Stapler; Sticky notes|post-it notes|post-its; Correction tape|whitener|correction fluid|Tipp-Ex|white-out;
        Pencil case|pencil pouch|pouch; School diary|diary|planner|almanac; File|folder; Laptop; Tablet|iPad; ID card|identity card; Earphones|headphones|earbuds;
        Tissues|napkin|handkerchief; Hand sanitiser|hand sanitizer|sanitiser|sanitizer; Snacks|snack; Phone|mobile phone|cell phone`,
      rare: `Set square; Divider|dividers; Mechanical pencil|lead pencil refills|pencil lead|leads; Graph paper; Flashcards|index cards|cue cards;
        Paper clips; Binder clips; Fountain pen; Ink cartridge|ink; Umbrella; Raincoat; Sports kit|PE kit|sports shoes; Sunscreen; Lip balm|chapstick;
        Bus pass; Wallet; Keys; Charger|power bank; Pen drive|USB drive|flash drive; Tape|sellotape|cellotape|scotch tape; Stickers; Hairbrush|comb;
        Library book; Lab coat; Swimming costume|swimsuit|goggles; Musical instrument|recorder|flute; Deodorant`,
      deep: `Stencil; Rubber bands; Hair ties|scrunchie|hair clips; Inhaler; Reading glasses|glasses|spectacles; Locker key; Library card; Origami paper;
        Chess set; Rubik's cube; Coins|change; Mouth freshener|mints|chewing gum; Report card; Permission slip; Spare socks; Bandage|band-aid|plaster`,
      legendary: 'French curve',
    },
    facts: { 'French curve': 'A curved drawing template used to trace smooth curves in technical drawing.' },
  },
];
