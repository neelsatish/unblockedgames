module.exports = [
  {
    id: 'sport-test-nation',
    category: 'sport',
    prompt: 'Name a country or team that plays Test cricket',
    qualifier: 'The 12 full members of the International Cricket Council',
    strip: ['cricket team', 'national cricket team', 'cricket'],
    closed: 12,
    answers: `
      Australia@Australia national cricket team; England@England cricket team; South Africa@South Africa national cricket team;
      West Indies|Windies@West Indies cricket team; New Zealand|Black Caps|Blackcaps@New Zealand national cricket team;
      India@India national cricket team; Pakistan@Pakistan national cricket team; Sri Lanka@Sri Lanka national cricket team;
      Zimbabwe@Zimbabwe national cricket team; Bangladesh@Bangladesh national cricket team; Ireland@Ireland cricket team;
      Afghanistan@Afghanistan national cricket team`,
    legendary: ['Zimbabwe'],
  },
  {
    id: 'sport-ipl-team',
    category: 'sport',
    prompt: 'Name a team that has played in the Indian Premier League',
    qualifier: 'Current or former IPL franchises, by any name they played under',
    closed: 15,
    answers: `
      Chennai Super Kings|CSK; Mumbai Indians|MI; Royal Challengers Bengaluru|RCB|Royal Challengers Bangalore;
      Kolkata Knight Riders|KKR; Sunrisers Hyderabad|SRH; Rajasthan Royals|RR; Delhi Capitals|DC|Delhi Daredevils;
      Punjab Kings|PBKS|Kings XI Punjab|KXIP; Lucknow Super Giants|LSG; Gujarat Titans|GT; Deccan Chargers|DC;
      Kochi Tuskers Kerala|Kochi Tuskers; Pune Warriors India|Pune Warriors; Rising Pune Supergiant|Rising Pune Supergiants|RPS;
      Gujarat Lions`,
    legendary: ['Kochi Tuskers Kerala'],
    facts: { 'Kochi Tuskers Kerala': 'Played only one IPL season, in 2011, before being expelled.' },
  },
  {
    id: 'sport-olympic',
    category: 'sport',
    prompt: 'Name a sport or discipline at the Paris 2024 Summer Olympics',
    qualifier: 'Sports and their disciplines, like beach volleyball',
    groups: {
      textbook: 'Athletics|track and field|running|javelin|javelin throw|sprinting; Swimming; Football|soccer; Basketball; Gymnastics; Tennis; Boxing; Badminton; Hockey|field hockey',
      honours: `Archery; Cycling; Diving; Fencing; Volleyball; Wrestling; Weightlifting; Judo;
        Table tennis|ping pong; Rowing; Shooting; Golf; Rugby sevens|rugby|rugby 7s; Taekwondo; Skateboarding; Surfing; Beach volleyball;
        Water polo; Handball`,
      rare: `Canoeing|canoe|kayaking|canoe sprint|canoe slalom; Equestrian|horse riding|dressage|show jumping|eventing; Sailing; Triathlon;
        Sport climbing|climbing|rock climbing; Artistic swimming|synchronised swimming|synchronized swimming; Trampoline|trampolining;
        Rhythmic gymnastics; BMX|BMX racing|BMX freestyle; Mountain biking|mountain bike; 3x3 basketball|3 on 3 basketball; Marathon swimming|open water swimming`,
      deep: 'Track cycling; Road cycling; Artistic gymnastics; Kitefoiling|kite foiling|formula kite; Windsurfing|iQFoil',
      tryhard: 'Breaking|breakdancing|break dancing',
      legendary: 'Modern pentathlon|pentathlon',
    },
    facts: {
      Breaking: 'Made its Olympic debut in Paris 2024.',
      'Modern pentathlon': 'Fencing, swimming, riding, and a combined running-and-shooting finale in one day.',
    },
  },
];
