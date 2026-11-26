module.exports = [
  {
    id: 'sport-ind-test-captain',
    category: 'sport',
    prompt: 'Name someone who has captained India in a Test match',
    qualifier: 'Anyone who led India in at least one men\'s Test, up to the end of 2025',
    answers: `
      C. K. Nayudu|CK Nayudu|Nayudu|Cottari Kanakaiya Nayudu; Iftikhar Ali Khan Pataudi|Nawab of Pataudi senior|Pataudi senior;
      Lala Amarnath|Amarnath; Vijay Hazare|Hazare; Vinoo Mankad|Mankad; Ghulam Ahmed@Ghulam Ahmed (cricketer); Polly Umrigar|Umrigar;
      Hemu Adhikari|Adhikari; Dattajirao Gaekwad|Datta Gaekwad|Gaekwad; Pankaj Roy|Roy; Nari Contractor|Contractor;
      Mansoor Ali Khan Pataudi|Tiger Pataudi|MAK Pataudi|Pataudi junior; Chandu Borde|Borde; Ajit Wadekar|Wadekar;
      Srinivas Venkataraghavan|Venkataraghavan|Venkat; Sunil Gavaskar|Gavaskar|Sunny Gavaskar; Bishan Singh Bedi|Bishan Bedi|Bedi;
      Gundappa Viswanath|Vishwanath|Viswanath; Kapil Dev|Kapil; Dilip Vengsarkar|Vengsarkar; Ravi Shastri|Shastri;
      Krishnamachari Srikkanth|Kris Srikkanth|Srikkanth; Mohammad Azharuddin|Azharuddin|Azhar; Sachin Tendulkar|Sachin|Tendulkar;
      Sourav Ganguly|Ganguly|Dada; Rahul Dravid|Dravid; Anil Kumble|Kumble; Virender Sehwag|Sehwag|Viru;
      MS Dhoni|Mahendra Singh Dhoni|Dhoni|Mahi; Virat Kohli|Kohli; Ajinkya Rahane|Rahane; Rohit Sharma|Rohit;
      KL Rahul|Lokesh Rahul|Rahul; Jasprit Bumrah|Bumrah; Shubman Gill|Gill`,
    legendary: ['C. K. Nayudu', 'Iftikhar Ali Khan Pataudi'],
    facts: {
      'C. K. Nayudu': 'India\'s first Test captain, at Lord\'s in 1932.',
      'Iftikhar Ali Khan Pataudi': 'Played Test cricket for both England and India, and captained India on the 1946 tour of England.',
    },
  },
  {
    id: 'sport-cricket-field-position',
    category: 'sport',
    prompt: 'Name a fielding position in cricket',
    qualifier: 'Named positions on a cricket field, including wicketkeeper and bowler',
    strip: ['fielder', 'position'],
    groups: {
      textbook: 'Slip|first slip|slips; Gully; Point; Cover|cover point; Mid-off|mid off; Mid-on|mid on; Midwicket|mid-wicket|mid wicket; Square leg; Fine leg; Third man; Wicketkeeper|wicket keeper|keeper',
      honours: `Long on; Long off; Silly point; Short leg; Extra cover; Deep midwicket|deep mid-wicket; Deep square leg; Long leg; Deep cover;
        Backward point; Cow corner; Bowler; Deep point; Short third man; Leg slip; Silly mid-on; Silly mid-off`,
      rare: `Short midwicket|short mid-wicket; Deep extra cover; Sweeper|sweeper cover; Short fine leg; Leg gully; Second slip; Third slip;
        Short cover; Short mid-on; Short mid-off; Deep backward square leg|deep backward square; Long stop; Straight hit; Wide long on; Wide long off;
        Fourth slip; Deep fine leg; Deep third man`,
      deep: 'Backward square leg; Forward short leg; Square cover; Forward point; Sweeper cover point; Deep forward square leg',
      legendary: 'Fly slip|flyslip',
    },
    facts: { 'Fly slip': 'A slip fielder stationed much deeper than normal, to catch edges that carry a long way.' },
  },
  {
    id: 'sport-cricket-dismissal',
    category: 'sport',
    prompt: 'Name a way a batter can be out in cricket',
    qualifier: 'The modes of dismissal in the Laws of Cricket, including ones since merged or renamed',
    closed: 11,
    groups: {
      textbook: 'Bowled|clean bowled; Caught|catch|catch out; LBW|leg before wicket|leg before; Run out|runout; Stumped|stumping',
      honours: 'Hit wicket',
      rare: 'Obstructing the field|obstructing; Timed out',
      deep: 'Handled the ball|handling the ball; Hit the ball twice|double hit',
      legendary: 'Retired out',
    },
    facts: { 'Retired out': 'A batter who walks off without the umpire or opposing captain\'s consent and does not return is out, not "retired hurt".' },
  },
  {
    id: 'sport-pl-club',
    category: 'sport',
    prompt: 'Name a club that has played in the English Premier League',
    qualifier: 'Any club to play at least one top-flight Premier League season since 1992, up to the 2025-26 season',
    strip: ['fc', 'football club', 'afc'],
    answers: `
      Arsenal@Arsenal F.C.; Aston Villa|Villa@Aston Villa F.C.; Barnsley@Barnsley F.C.; Birmingham City|Birmingham@Birmingham City F.C.;
      Blackburn Rovers|Blackburn@Blackburn Rovers F.C.; Blackpool@Blackpool F.C.; Bolton Wanderers|Bolton@Bolton Wanderers F.C.;
      Bournemouth|AFC Bournemouth@AFC Bournemouth; Bradford City|Bradford@Bradford City A.F.C.; Brentford@Brentford F.C.;
      Brighton & Hove Albion|Brighton|Brighton and Hove Albion@Brighton & Hove Albion F.C.; Burnley@Burnley F.C.;
      Cardiff City|Cardiff@Cardiff City F.C.; Charlton Athletic|Charlton@Charlton Athletic F.C.; Chelsea@Chelsea F.C.;
      Coventry City|Coventry@Coventry City F.C.; Crystal Palace|Palace@Crystal Palace F.C.; Derby County|Derby@Derby County F.C.;
      Everton@Everton F.C.; Fulham@Fulham F.C.; Huddersfield Town|Huddersfield@Huddersfield Town A.F.C.; Hull City|Hull@Hull City A.F.C.;
      Ipswich Town|Ipswich@Ipswich Town F.C.; Leeds United|Leeds@Leeds United F.C.; Leicester City|Leicester@Leicester City F.C.;
      Liverpool@Liverpool F.C.; Luton Town|Luton@Luton Town F.C.; Manchester City|Man City@Manchester City F.C.;
      Manchester United|Man United|Man Utd@Manchester United F.C.; Middlesbrough|Boro@Middlesbrough F.C.;
      Newcastle United|Newcastle@Newcastle United F.C.; Norwich City|Norwich@Norwich City F.C.;
      Nottingham Forest|Forest@Nottingham Forest F.C.; Oldham Athletic|Oldham@Oldham Athletic A.F.C.; Portsmouth|Pompey@Portsmouth F.C.;
      Queens Park Rangers|QPR@Queens Park Rangers F.C.; Reading@Reading F.C.; Sheffield United@Sheffield United F.C.;
      Sheffield Wednesday@Sheffield Wednesday F.C.; Southampton@Southampton F.C.; Stoke City|Stoke@Stoke City F.C.;
      Sunderland@Sunderland A.F.C.; Swansea City|Swansea@Swansea City A.F.C.; Swindon Town|Swindon@Swindon Town F.C.;
      Tottenham Hotspur|Tottenham|Spurs@Tottenham Hotspur F.C.; Watford@Watford F.C.; West Bromwich Albion|West Brom@West Bromwich Albion F.C.;
      West Ham United|West Ham@West Ham United F.C.; Wigan Athletic|Wigan@Wigan Athletic F.C.; Wimbledon|Wimbledon FC@Wimbledon F.C.;
      Wolverhampton Wanderers|Wolves@Wolverhampton Wanderers F.C.`,
    legendary: ['Swindon Town', 'Barnsley'],
    facts: {
      'Swindon Town': 'Spent just the 1993-94 season in the Premier League, conceding 100 goals and going straight back down.',
      Barnsley: 'Played a single Premier League season, 1997-98, and finished bottom.',
    },
  },
  {
    id: 'sport-laliga-club',
    category: 'sport',
    prompt: 'Name a club that has played in Spain\'s top division, La Liga',
    qualifier: 'Any club to play at least one top-flight season since La Liga began in 1929, up to 2025',
    strip: ['fc', 'cf', 'club de futbol'],
    answers: `
      Real Madrid|Madrid@Real Madrid CF; FC Barcelona|Barcelona|Barca|Barça@FC Barcelona; Atlético Madrid|Atletico Madrid|Atleti|Atlético de Madrid@Atlético Madrid;
      Sevilla@Sevilla FC; Real Betis|Betis@Real Betis; Valencia@Valencia CF; Villarreal@Villarreal CF;
      Athletic Bilbao|Athletic Club|Athletic@Athletic Bilbao; Real Sociedad|Sociedad@Real Sociedad; Celta Vigo|Celta|Celta de Vigo@RC Celta de Vigo;
      Espanyol|Español@RCD Espanyol; Getafe@Getafe CF; Osasuna@CA Osasuna; Mallorca|Real Mallorca@RCD Mallorca; Rayo Vallecano|Rayo@Rayo Vallecano;
      Alavés|Alaves|Deportivo Alavés@Deportivo Alavés; Girona@Girona FC; Las Palmas|UD Las Palmas@UD Las Palmas; Cádiz|Cadiz@Cádiz CF;
      Granada@Granada CF; Almería|Almeria@UD Almería; Elche@Elche CF; Levante@Levante UD; Eibar@SD Eibar; Leganés|Leganes@CD Leganés;
      Valladolid|Real Valladolid@Real Valladolid; Deportivo La Coruña|Deportivo|Depor|La Coruña@Deportivo de La Coruña; Málaga|Malaga@Málaga CF;
      Real Zaragoza|Zaragoza@Real Zaragoza; Racing Santander|Racing de Santander|Racing@Racing de Santander;
      Sporting Gijón|Sporting Gijon|Sporting@Sporting de Gijón; Real Oviedo|Oviedo@Real Oviedo; Tenerife|CD Tenerife@CD Tenerife;
      Hércules|Hercules@Hércules CF; Numancia@CD Numancia; Recreativo Huelva|Recreativo|Recreativo de Huelva@Recreativo de Huelva;
      Xerez@Xerez CD; Real Murcia|Murcia@Real Murcia; Albacete@Albacete Balompié; Salamanca|UD Salamanca@UD Salamanca;
      Compostela|SD Compostela@SD Compostela; Logroñés|Logrones@CD Logroñés; Mérida|Merida@CP Mérida; Lleida@UE Lleida;
      Extremadura@CF Extremadura; Burgos@Burgos CF; Badajoz@CD Badajoz; Córdoba|Cordoba@Córdoba CF; Castellón|Castellon@CD Castellón`,
    legendary: ['Xerez', 'Mérida'],
    facts: {
      Xerez: 'The Andalusian club\'s only top-flight season was 2009-10.',
      Mérida: 'A club from Extremadura that reached La Liga for the 1995-96 season.',
    },
  },
  {
    id: 'sport-wc-host',
    category: 'sport',
    prompt: 'Name a country that has hosted, or been awarded, the men\'s FIFA World Cup',
    qualifier: 'Hosts or co-hosts from 1930 to 2026, plus countries already awarded 2030 and 2034',
    closed: 23,
    answers: `
      Uruguay; Italy; France; Brazil; Switzerland; Sweden; Chile; England; Mexico; Germany|West Germany; Argentina; Spain;
      United States|USA|US|America; South Korea|Korea; Japan; South Africa; Russia; Qatar; Canada; Portugal; Morocco; Paraguay; Saudi Arabia`,
    legendary: ['Sweden', 'Chile'],
    facts: {
      Sweden: 'Hosted 1958, where a 17-year-old Pelé helped Brazil win the first of five titles.',
      Chile: 'Hosted 1962 and finished third.',
    },
  },
  {
    id: 'sport-ballon-dor',
    category: 'sport',
    prompt: 'Name a men\'s Ballon d\'Or winner',
    qualifier: 'Men\'s Ballon d\'Or winners from 1956 to 2025',
    answers: `
      Stanley Matthews|Matthews; Alfredo Di Stéfano|Di Stefano|Alfredo Di Stefano; Raymond Kopa|Kopa; Omar Sívori|Sivori|Omar Sivori;
      Josef Masopust|Masopust; Lev Yashin|Yashin; Denis Law; Eusébio|Eusebio; Flórián Albert|Florian Albert; Bobby Charlton|Charlton;
      George Best|Best; Gianni Rivera|Rivera; Gerd Müller|Gerd Muller|Muller; Johan Cruyff|Cruyff; Franz Beckenbauer|Beckenbauer;
      Oleg Blokhin|Blokhin; Allan Simonsen|Simonsen; Kevin Keegan|Keegan; Karl-Heinz Rummenigge|Rummenigge; Paolo Rossi;
      Michel Platini|Platini; Igor Belanov|Belanov; Ruud Gullit|Gullit; Marco van Basten|Van Basten; Lothar Matthäus|Matthaus|Lothar Matthaus;
      Jean-Pierre Papin|Papin; Roberto Baggio|Baggio; Hristo Stoichkov|Stoichkov; George Weah|Weah; Matthias Sammer|Sammer;
      Ronaldo|Ronaldo Nazário|R9|Ronaldo Luís Nazário de Lima@Ronaldo (Brazilian footballer); Zinedine Zidane|Zidane|Zizou;
      Rivaldo; Luís Figo|Figo|Luis Figo; Michael Owen|Owen; Pavel Nedvěd|Nedved|Pavel Nedved; Andriy Shevchenko|Shevchenko|Sheva;
      Fabio Cannavaro|Cannavaro; Kaká|Kaka; Cristiano Ronaldo|CR7; Lionel Messi|Messi; Luka Modrić|Modric|Luka Modric;
      Karim Benzema|Benzema; Rodri; Ousmane Dembélé|Dembele|Ousmane Dembele`,
    legendary: ['Igor Belanov', 'Omar Sívori'],
    facts: {
      'Igor Belanov': 'Won the 1986 award after a hat-trick for the Soviet Union against Belgium at the World Cup.',
      'Omar Sívori': 'The 1961 winner, an Argentine-born forward who played for Italy and Juventus.',
    },
  },
  {
    id: 'sport-f1-team',
    category: 'sport',
    prompt: 'Name a team that has entered the Formula One World Championship',
    qualifier: 'Constructors under any of their names, 1950 to 2025',
    strip: ['f1', 'f1 team', 'racing', 'team'],
    answers: `
      Ferrari|Scuderia Ferrari@Scuderia Ferrari; McLaren@McLaren; Williams|Williams Racing@Williams Racing; Red Bull|Red Bull Racing@Red Bull Racing;
      Mercedes@Mercedes-Benz in Formula One; Lotus|Team Lotus@Team Lotus; Brabham@Brabham; Tyrrell|Tyrrell Racing@Tyrrell Racing;
      Benetton@Benetton Formula; Renault@Renault in Formula One; Alpine|Alpine F1@Alpine F1 Team; Aston Martin@Aston Martin in Formula One;
      Haas|Haas F1@Haas F1 Team; Alfa Romeo@Alfa Romeo in Formula One; Sauber@Sauber Motorsport; Toro Rosso|Scuderia Toro Rosso@Scuderia Toro Rosso;
      AlphaTauri|Scuderia AlphaTauri@Scuderia AlphaTauri; Racing Bulls|Visa Cash App RB|RB@Racing Bulls; Jordan|Jordan Grand Prix@Jordan Grand Prix;
      Minardi@Minardi; Jaguar|Jaguar Racing@Jaguar Racing (Formula One); Stewart|Stewart Grand Prix@Stewart Grand Prix; BAR|British American Racing@British American Racing;
      Honda@Honda in Formula One; Toyota@Toyota in Formula One; BMW Sauber@BMW Sauber; Force India@Force India; Racing Point@Racing Point F1 Team;
      Spyker@Spyker F1; Midland@Midland F1 Racing; Super Aguri@Super Aguri F1; Caterham@Caterham F1; Marussia|Manor|Manor Racing@Manor Motorsport; 
      HRT|Hispania Racing|Hispania@Hispania Racing; Arrows@Arrows Grand Prix International; Ligier@Ligier;
      Prost|Prost Grand Prix@Prost Grand Prix; Lotus F1|Lotus F1 Team@Lotus F1; Cooper@Cooper Car Company; BRM@British Racing Motors;
      Matra@Matra; March|March Engineering@March Engineering; Hesketh@Hesketh Racing; Wolf|Walter Wolf Racing@Walter Wolf Racing;
      Shadow@Shadow Racing Cars; Surtees@Surtees Racing Organisation; Vanwall@Vanwall; Maserati@Maserati in Formula One;
      Cadillac|Cadillac F1@Cadillac in Formula One; Osella@Osella; Zakspeed@Zakspeed; Larrousse@Larrousse;
      Brawn|Brawn GP@Brawn GP; Ensign@Ensign Racing; Fittipaldi@Fittipaldi Automotive; Penske@Penske Racing; Lola@Lola Cars`,
    legendary: ['Brawn', 'Vanwall'],
    facts: {
      Brawn: 'Raced for a single season, 2009, and won both the drivers\' and constructors\' titles.',
      Vanwall: 'A British team that won the first Constructors\' Championship, in 1958.',
    },
  },
  {
    id: 'sport-f1-champion',
    category: 'sport',
    prompt: 'Name a Formula One World Drivers\' Champion',
    qualifier: 'Every drivers\' champion from 1950 to 2025',
    answers: `
      Giuseppe Farina|Nino Farina|Farina; Juan Manuel Fangio|Fangio; Alberto Ascari|Ascari; Mike Hawthorn|Hawthorn; Jack Brabham|Brabham;
      Phil Hill; Graham Hill; Jim Clark|Clark; John Surtees|Surtees; Denny Hulme|Hulme; Jackie Stewart|Stewart; Jochen Rindt|Rindt;
      Emerson Fittipaldi|Fittipaldi; Niki Lauda|Lauda; James Hunt|Hunt; Mario Andretti|Andretti; Jody Scheckter|Scheckter;
      Alan Jones@Alan Jones (racing driver); Nelson Piquet|Piquet; Keke Rosberg; Alain Prost|Prost; Ayrton Senna|Senna; Nigel Mansell|Mansell;
      Michael Schumacher|Schumacher; Damon Hill; Jacques Villeneuve; Mika Häkkinen|Mika Hakkinen|Hakkinen|Häkkinen;
      Fernando Alonso|Alonso; Kimi Räikkönen|Kimi Raikkonen|Raikkonen|Räikkönen; Lewis Hamilton|Hamilton; Jenson Button|Button;
      Sebastian Vettel|Vettel; Nico Rosberg; Max Verstappen|Verstappen; Lando Norris|Norris`,
    legendary: ['Giuseppe Farina', 'Mike Hawthorn'],
    facts: {
      'Giuseppe Farina': 'Won the very first Formula One World Championship, in 1950.',
      'Mike Hawthorn': 'Became Britain\'s first F1 champion in 1958 and retired weeks later, dying in a road accident in 1959.',
    },
  },
  {
    id: 'sport-f1-circuit',
    category: 'sport',
    prompt: 'Name a circuit that has hosted a Formula One race',
    qualifier: 'Any track used for a World Championship Grand Prix, 1950 to 2025',
    strip: ['circuit', 'raceway', 'international circuit', 'grand prix'],
    answers: `
      Silverstone|Silverstone Circuit@Silverstone Circuit; Monza|Autodromo Nazionale Monza@Monza Circuit; Spa-Francorchamps|Spa|Circuit de Spa-Francorchamps@Circuit de Spa-Francorchamps;
      Monaco|Circuit de Monaco|Monte Carlo@Circuit de Monaco; Suzuka|Suzuka Circuit@Suzuka International Racing Course;
      Interlagos|Autódromo José Carlos Pace|Autodromo Jose Carlos Pace@Autódromo José Carlos Pace; Circuit of the Americas|COTA@Circuit of the Americas;
      Red Bull Ring|Spielberg@Red Bull Ring; Hungaroring@Hungaroring; Zandvoort|Circuit Zandvoort@Circuit Zandvoort; Imola|Autodromo Enzo e Dino Ferrari@Imola Circuit;
      Albert Park|Albert Park Circuit|Melbourne@Albert Park Circuit; Marina Bay|Marina Bay Street Circuit|Singapore@Marina Bay Street Circuit;
      Bahrain International Circuit|Sakhir|Bahrain@Bahrain International Circuit; Yas Marina|Yas Marina Circuit|Abu Dhabi@Yas Marina Circuit;
      Jeddah Corniche Circuit|Jeddah@Jeddah Corniche Circuit; Lusail|Losail|Lusail International Circuit@Lusail International Circuit;
      Baku City Circuit|Baku@Baku City Circuit; Circuit Gilles Villeneuve|Montreal|Montréal@Circuit Gilles Villeneuve;
      Autódromo Hermanos Rodríguez|Mexico City|Hermanos Rodriguez@Autódromo Hermanos Rodríguez; Circuit de Barcelona-Catalunya|Barcelona|Catalunya|Montmeló@Circuit de Barcelona-Catalunya;
      Shanghai International Circuit|Shanghai@Shanghai International Circuit; Las Vegas Strip Circuit|Las Vegas@Las Vegas Strip Circuit;
      Miami International Autodrome|Miami@Miami International Autodrome; Nürburgring|Nurburgring@Nürburgring; Hockenheimring|Hockenheim@Hockenheimring;
      Magny-Cours|Circuit de Nevers Magny-Cours@Circuit de Nevers Magny-Cours; Paul Ricard|Circuit Paul Ricard@Circuit Paul Ricard;
      Sepang|Sepang International Circuit@Sepang International Circuit; Istanbul Park@Istanbul Park; Sochi Autodrom|Sochi@Sochi Autodrom;
      Mugello@Mugello Circuit; Portimão|Algarve International Circuit|Portimao@Algarve International Circuit; Kyalami@Kyalami;
      Brands Hatch@Brands Hatch; Österreichring|Osterreichring|Zeltweg@Österreichring; Watkins Glen@Watkins Glen International;
      Indianapolis Motor Speedway|Indianapolis|Indy@Indianapolis Motor Speedway; Fuji Speedway|Fuji@Fuji Speedway;
      Buddh International Circuit|Buddh|Greater Noida@Buddh International Circuit; Valencia Street Circuit|Valencia@Valencia Street Circuit;
      Korea International Circuit|Yeongam@Korea International Circuit; Adelaide Street Circuit|Adelaide@Adelaide Street Circuit;
      Jerez|Circuito de Jerez@Circuito de Jerez; Estoril|Circuito do Estoril@Circuito do Estoril; Jarama|Circuito del Jarama@Circuito del Jarama;
      Montjuïc|Montjuic@Montjuïc circuit; Dijon-Prenois|Dijon@Dijon-Prenois; Zolder|Circuit Zolder@Circuit Zolder;
      Aintree@Aintree Motor Racing Circuit; Pescara@Pescara Circuit; Sebring@Sebring International Raceway; Anderstorp@Scandinavian Raceway;
      Reims-Gueux|Reims@Reims-Gueux; Circuit de Charade|Clermont-Ferrand|Charade@Circuit de Charade; Bremgarten|Circuit Bremgarten@Circuit Bremgarten;
      Nivelles@Nivelles-Baulers; Detroit Street Circuit|Detroit@Detroit Street Circuit; Long Beach@Long Beach Grand Prix; Donington Park@Donington Park;
      Mosport|Canadian Tire Motorsport Park@Canadian Tire Motorsport Park; Avus@AVUS; Pedralbes@Pedralbes Circuit`,
    legendary: ['Buddh International Circuit', 'Pescara'],
    facts: {
      'Buddh International Circuit': 'India\'s Formula One track near Delhi hosted the Indian Grand Prix from 2011 to 2013.',
      Pescara: 'At about 25 km, the longest circuit ever used for a Formula One race, in 1957.',
    },
  },
  {
    id: 'sport-olympic-host-city',
    category: 'sport',
    prompt: 'Name a city that has hosted the Olympic Games',
    qualifier: 'Summer or Winter Games host cities, 1896 to 2032 (Paris 2024, Los Angeles 2028 and Brisbane 2032 count)',
    answers: `
      Athens; Paris; St. Louis|Saint Louis; London; Stockholm; Antwerp; Amsterdam; Los Angeles|LA; Berlin; Helsinki; Melbourne; Rome;
      Tokyo; Mexico City; Munich; Montreal|Montréal; Moscow; Seoul; Barcelona; Atlanta; Sydney; Beijing|Peking; Rio de Janeiro|Rio; Brisbane;
      Chamonix; St. Moritz|Saint Moritz|Sankt Moritz; Lake Placid@Lake Placid, New York; Garmisch-Partenkirchen|Garmisch; Oslo; Cortina d'Ampezzo|Cortina;
      Innsbruck; Grenoble; Sapporo; Sarajevo; Calgary; Albertville; Lillehammer; Nagano@Nagano (city); Salt Lake City; Turin|Torino;
      Vancouver; Sochi; Pyeongchang@Pyeongchang County; Milan|Milano`,
    legendary: ['Lake Placid', 'St. Louis'],
    facts: {
      'Lake Placid': 'A small New York village that hosted the Winter Games twice, in 1932 and 1980.',
      'St. Louis': 'Hosted the 1904 Games, the first Olympics held in the United States.',
    },
  },
  {
    id: 'sport-ind-olympic-medallist',
    category: 'sport',
    prompt: 'Name a medallist from India at the Olympics',
    qualifier: 'Indian athletes who have won an Olympic medal, 1900 to Paris 2024',
    answers: `
      Norman Pritchard|Pritchard; Khashaba Dadasaheb Jadhav|K. D. Jadhav|Khashaba Jadhav|KD Jadhav|Jadhav@Khashaba Dadasaheb Jadhav;
      Leander Paes|Paes; Karnam Malleswari|Malleswari; Rajyavardhan Singh Rathore|Rathore|Rajyavardhan Rathore;
      Abhinav Bindra|Bindra; Sushil Kumar; Vijender Singh|Vijender; Mary Kom|MC Mary Kom; Saina Nehwal|Saina; Gagan Narang|Narang;
      Vijay Kumar@Vijay Kumar (sport shooter); Yogeshwar Dutt|Yogeshwar; P. V. Sindhu|PV Sindhu|Sindhu; Sakshi Malik|Sakshi;
      Mirabai Chanu|Saikhom Mirabai Chanu|Chanu; Lovlina Borgohain|Lovlina; Ravi Kumar Dahiya|Ravi Dahiya|Dahiya; Bajrang Punia|Bajrang;
      Neeraj Chopra|Neeraj; Manu Bhaker|Manu; Sarabjot Singh|Sarabjot; Swapnil Kusale|Swapnil; Aman Sehrawat|Aman;
      P. R. Sreejesh|PR Sreejesh|Sreejesh; Dhyan Chand|Major Dhyan Chand; Balbir Singh Sr.|Balbir Singh|Balbir Singh Senior;
      Leslie Claudius|Claudius; Harmanpreet Singh|Harmanpreet; Vasudevan Baskaran|Baskaran; Ashok Kumar@Ashok Kumar (field hockey);
      Udham Singh@Udham Singh (field hockey); Charanjit Singh@Charanjit Singh (field hockey)`,
    legendary: ['Norman Pritchard', 'Khashaba Dadasaheb Jadhav'],
    facts: {
      'Norman Pritchard': 'Won two athletics silver medals at the 1900 Paris Games, representing India.',
      'Khashaba Dadasaheb Jadhav': 'India\'s first individual Olympic medallist after independence, with wrestling bronze at Helsinki 1952.',
    },
  },
  {
    id: 'sport-ind-badminton-player',
    category: 'sport',
    prompt: 'Name an Indian badminton player',
    qualifier: 'Indian players, past or present, who have a Wikipedia article, up to 2025',
    answers: `
      Prakash Padukone|Padukone; Pullela Gopichand|Gopichand; Saina Nehwal|Saina; P. V. Sindhu|PV Sindhu|Sindhu;
      Kidambi Srikanth|Srikanth; Lakshya Sen|Lakshya; H. S. Prannoy|HS Prannoy|Prannoy; B. Sai Praneeth|Sai Praneeth;
      Parupalli Kashyap|Kashyap; Satwiksairaj Rankireddy|Satwik|Satwiksairaj; Chirag Shetty|Chirag; Jwala Gutta|Jwala;
      Ashwini Ponnappa|Ponnappa; Ajay Jayaram|Jayaram; Sameer Verma; Treesa Jolly|Treesa; Gayatri Gopichand|Gayatri;
      Aparna Popat|Popat; Nandu Natekar|Natekar; Dinesh Khanna; Manu Attri; B. Sumeeth Reddy|Sumeeth Reddy;
      Sikki Reddy|N. Sikki Reddy; Pranav Chopra|Pranav Jerry Chopra; Unnati Hooda|Unnati; Malvika Bansod|Malvika;
      Kiran George; Priyanshu Rajawat|Priyanshu; Ashmita Chaliha|Ashmita; Rituparna Das; Tasnim Mir; Tanvi Sharma;
      Sourabh Verma; Anupama Upadhyaya; Arundhati Pantawane; Trupti Murgunde`,
    legendary: ['Nandu Natekar', 'Dinesh Khanna'],
    facts: {
      'Nandu Natekar': 'Won India\'s first international badminton titles in the 1950s and was a pioneer of the sport in the country.',
      'Dinesh Khanna': 'The only Indian man to win the Asian Games singles gold, in 1962.',
    },
  },
  {
    id: 'sport-ind-football-club',
    category: 'sport',
    prompt: 'Name an Indian football club',
    qualifier: 'Clubs that have played in the ISL, I-League or old National Football League, up to 2025',
    strip: ['fc', 'football club', 'sc'],
    answers: `
      Bengaluru FC|Bengaluru|BFC@Bengaluru FC; Kerala Blasters|Kerala Blasters FC|KBFC@Kerala Blasters FC; Mumbai City FC|Mumbai City@Mumbai City FC;
      Mohun Bagan Super Giant|ATK Mohun Bagan|ATK|Mohun Bagan SG@Mohun Bagan Super Giant; East Bengal|East Bengal FC|SC East Bengal@East Bengal Club;
      FC Goa|Goa@FC Goa; Chennaiyin FC|Chennaiyin@Chennaiyin FC; NorthEast United|NorthEast United FC@NorthEast United FC;
      Hyderabad FC|Hyderabad@Hyderabad FC; Odisha FC|Odisha|Delhi Dynamos@Odisha FC; Jamshedpur FC|Jamshedpur@Jamshedpur FC;
      Punjab FC|RoundGlass Punjab|Minerva Punjab@Punjab FC; Mohammedan SC|Mohammedan Sporting|Mohammedan@Mohammedan SC (Kolkata);
      FC Pune City|Pune City@FC Pune City; Mohun Bagan AC|Mohun Bagan|Mohun Bagan Athletic Club@Mohun Bagan AC; Churchill Brothers|Churchill Brothers SC@Churchill Brothers S.C.;
      Salgaocar|Salgaocar FC@Salgaocar FC; Dempo|Dempo SC@Dempo S.C.; Sporting Clube de Goa|Sporting Goa@Sporting Clube de Goa;
      Gokulam Kerala|Gokulam Kerala FC@Gokulam Kerala FC; Aizawl FC|Aizawl@Aizawl FC; Shillong Lajong|Lajong@Shillong Lajong FC;
      Real Kashmir|Real Kashmir FC@Real Kashmir FC; Rajasthan United|Rajasthan United FC@Rajasthan United FC;
      Sreenidi Deccan|Sreenidi Deccan FC@Sreenidi Deccan FC; TRAU|TRAU FC@TRAU FC; NEROCA|NEROCA FC|Neroca@NEROCA FC;
      Inter Kashi|Inter Kashi FC@Inter Kashi FC; Mahindra United|Mahindra United FC@Mahindra United; Mumbai FC|Mumbai FC (old)@Mumbai FC;
      Pune FC|Pune@Pune FC; Vasco|Vasco SC|Vasco Sports Club@Vasco SC; Chennai City|Chennai City FC@Chennai City FC;
      Kerala Police|Kerala Police FC@Kerala Police FC; Bengal Mumbai FC@Bengal Mumbai FC; Air India FC|Air India@Air India FC;
      JCT Mills|JCT|JCT Phagwara@JCT FC; Tollygunge Agragami|Tollygunge@Tollygunge Agragami FC;
      Diamond Harbour|Diamond Harbour FC@Diamond Harbour FC; Kenkre|Kenkre FC@Kenkre FC;
      United SC|United Sports Club@United SC; ONGC|ONGC FC@ONGC FC`,
    legendary: ['JCT Mills', 'Sporting Clube de Goa'],
    facts: {
      'JCT Mills': 'A Punjab mill team that won the first National Football League in 1996-97.',
      'Sporting Clube de Goa': 'A club from Goa that played in India\'s national top flight in the 2000s.',
    },
  },
  {
    id: 'sport-pkl-team',
    category: 'sport',
    prompt: 'Name a team in the Pro Kabaddi League',
    qualifier: 'The 12 franchises in the league as of 2025',
    closed: 12,
    answers: `
      Bengal Warriors|Bengal Warriorz@Bengal Warriorz; Bengaluru Bulls|Bulls@Bengaluru Bulls; Dabang Delhi K.C.|Dabang Delhi|Dabang Delhi KC|Delhi@Dabang Delhi K.C.;
      Gujarat Giants|Gujarat Fortunegiants|Gujarat@Gujarat Giants (kabaddi); Haryana Steelers|Haryana@Haryana Steelers;
      Jaipur Pink Panthers|Jaipur@Jaipur Pink Panthers; Patna Pirates|Patna@Patna Pirates; Puneri Paltan|Pune@Puneri Paltan;
      Tamil Thalaivas|Tamil@Tamil Thalaivas; Telugu Titans|Telugu@Telugu Titans; U Mumba|Mumba@U Mumba; UP Yoddhas|Yoddhas|Uttar Pradesh@UP Yoddhas`,
    legendary: ['Puneri Paltan'],
    facts: { 'Puneri Paltan': '"Paltan" is Marathi for platoon or battalion.' },
  },
  {
    id: 'sport-nba-team',
    category: 'sport',
    prompt: 'Name a team in the NBA',
    qualifier: 'The 30 current franchises of the National Basketball Association, by city or nickname',
    closed: 30,
    answers: `
      Atlanta Hawks|Hawks; Boston Celtics|Celtics; Brooklyn Nets|Nets; Charlotte Hornets|Hornets; Chicago Bulls|Bulls;
      Cleveland Cavaliers|Cavaliers|Cavs; Dallas Mavericks|Mavericks|Mavs; Denver Nuggets|Nuggets; Detroit Pistons|Pistons;
      Golden State Warriors|Warriors; Houston Rockets|Rockets; Indiana Pacers|Pacers; Los Angeles Clippers|LA Clippers|Clippers;
      Los Angeles Lakers|LA Lakers|Lakers; Memphis Grizzlies|Grizzlies; Miami Heat|Heat; Milwaukee Bucks|Bucks;
      Minnesota Timberwolves|Timberwolves|Wolves|T-Wolves; New Orleans Pelicans|Pelicans; New York Knicks|Knicks;
      Oklahoma City Thunder|Thunder|OKC; Orlando Magic|Magic; Philadelphia 76ers|76ers|Sixers; Phoenix Suns|Suns;
      Portland Trail Blazers|Trail Blazers|Blazers; Sacramento Kings|Kings; San Antonio Spurs|Spurs; Toronto Raptors|Raptors;
      Utah Jazz|Jazz; Washington Wizards|Wizards`,
    legendary: ['Utah Jazz', 'Toronto Raptors'],
    facts: {
      'Utah Jazz': 'The name dates from when the franchise began in New Orleans, a city famous for jazz.',
      'Toronto Raptors': 'The only NBA team based in Canada, and 2019 champions.',
    },
  },
  {
    id: 'sport-nfl-team',
    category: 'sport',
    prompt: 'Name a team in the NFL',
    qualifier: 'The 32 current franchises of the National Football League, by city or nickname',
    closed: 32,
    answers: `
      Arizona Cardinals|Cardinals; Atlanta Falcons|Falcons; Baltimore Ravens|Ravens; Buffalo Bills|Bills; Carolina Panthers|Panthers;
      Chicago Bears|Bears; Cincinnati Bengals|Bengals; Cleveland Browns|Browns; Dallas Cowboys|Cowboys; Denver Broncos|Broncos;
      Detroit Lions|Lions; Green Bay Packers|Packers; Houston Texans|Texans; Indianapolis Colts|Colts; Jacksonville Jaguars|Jaguars|Jags;
      Kansas City Chiefs|Chiefs; Las Vegas Raiders|Raiders|Oakland Raiders; Los Angeles Chargers|Chargers; Los Angeles Rams|Rams;
      Miami Dolphins|Dolphins; Minnesota Vikings|Vikings; New England Patriots|Patriots|Pats; New Orleans Saints|Saints;
      New York Giants|Giants; New York Jets|Jets; Philadelphia Eagles|Eagles; Pittsburgh Steelers|Steelers;
      San Francisco 49ers|49ers|Niners; Seattle Seahawks|Seahawks; Tampa Bay Buccaneers|Buccaneers|Bucs;
      Tennessee Titans|Titans; Washington Commanders|Commanders|Washington Redskins`,
    legendary: ['Green Bay Packers', 'Houston Texans'],
    facts: {
      'Green Bay Packers': 'The only major US pro team owned by its fans, not a private owner.',
      'Houston Texans': 'The newest NFL franchise, playing since 2002.',
    },
  },
  {
    id: 'sport-ind-street-game',
    category: 'sport',
    prompt: 'Name a traditional playground game played in India',
    qualifier: 'Street, school or village games, with or without equipment',
    strip: ['game'],
    groups: {
      textbook: 'Kho-kho|kho kho; Kabaddi; Gilli-danda|gilli danda|gulli danda|danda gooli; Hide and seek|hide-and-seek|chhupan chhupai; Lagori|seven stones|pittu|satoliya; Marbles|goli|kanche|kancha; Carrom; Ludo; Snakes and ladders|saap seedhi; Hopscotch|stapu|stappu|ekka dukka; Tag|chain chain|pakdam pakdai|catch',
      honours: `Spinning top|lattu|bambaram|bhaunra; Kite flying|kite fighting|patang|patangbazi; Langdi|langdi tang|hopping tag; Blind man's buff|blindfold|aankh micholi|aankh michauli;
        Antakshari; Dumb charades|dumb charade; Chor police|chor-police|police chor; Skipping|skipping rope|jump rope; Pachisi|chaupar|chaupad;
        Statue|statue game|stand still|stop and go; Dodgeball|dodge ball|ball tag; Cycle tyre race|tyre race|tyre rolling|rolling tyre; Dog and the bone|rumal chor|kerchief game;
        Sack race; Lock and key|lock-and-key; Memory game|memory; Throwball`,
      rare: `Aadu puli attam|goats and tigers|bagh chal; Ashta chamma|ashta-chamma|chowka bara; Vamana guntalu; Four corners|four corner|char kona; Kancha-goli;
        Mallakhamb|mallakhamba; Pittoo; Chain-chain; Seven tiles; Lukka chuppi|luka chuppi; Dhappa|dabba dabba; Kokla chhapaki|kokla chapaki|kokla chhapi;
        Mooknayak; Nondi|nondi aattam; Kuruvi|crow game; Ghar ghar|house house; Shop shop|dukaan dukaan; Pulijudam; Bhatukli|bhatukli game;
        Pitthu garam|pitthu garam game; Pooja Kalash`,
      deep: `Ghoda-Ghoda|ghoda game; Chhi chhi; Kabutar|kabutar uda; Tikli mar|tikli maar; Rassa kasi|rassa kashi|tug of war|tug-of-war;
        Seer game|seer; Aale|aale game; Lambi kood|lambi koodh; Dhaap|dhaap kheval; Vish amrit|vish-amrit|vish amrit game`,
      legendary: 'Pallanguzhi|mancala',
    },
    facts: { Pallanguzhi: 'A South Indian board game of seeds and pits, played for centuries, related to mancala.' },
  },
  {
    id: 'sport-ball-type',
    category: 'sport',
    prompt: 'Name a type of ball used in a sport',
    qualifier: 'A ball for a recognised sport or game, like a cricket ball',
    strip: ['ball'],
    groups: {
      textbook: 'Cricket ball|cricket; Football|soccer ball|soccer; Basketball|basket ball|basket; Tennis ball|tennis; Golf ball|golf; Volleyball|volley ball; Rugby ball|rugby; Baseball|base ball; Hockey ball|hockey',
      honours: `Table tennis ball|ping pong ball|ping-pong ball|table tennis|ping pong; Squash ball|squash; Bowling ball|bowling|ten pin ball; Billiard ball|billiards ball|pool ball|snooker ball|cue ball;
        Handball|hand ball; Water polo ball|water polo; Softball|soft ball; Netball; Lacrosse ball|lacrosse; Beach ball|beach volleyball ball; Medicine ball|med ball;
        Dodgeball|dodge ball; American football|gridiron ball|NFL ball; Throwball|throw ball; Pickleball|pickleball ball|pickle ball; Tennis ball (rubber)|rubber ball|tennis cricket ball`,
      rare: `Polo ball|polo; Croquet ball|croquet; Bocce ball|bocce|boules|petanque ball|pétanque ball; Gaelic football|Gaelic ball; Australian rules football|aussie rules ball|AFL ball; Sepak takraw ball|sepak takraw|rattan ball;
        Korfball; Gym ball|Swiss ball|exercise ball|stability ball; Kickball; Hurling sliotar|sliotar; Cork ball|cork cricket ball; Stress ball;
        Bouncy ball|super ball|superball; Padel ball|padel; Racquetball|racquetball ball; Cricket tennis ball; Bat and ball|rounders ball|rounders; Fives ball|eton fives`,
      deep: `Bowls|lawn bowls jack|jack|lawn bowls; Real tennis ball|real tennis; Cage ball|kin-ball|kin ball; Tchoukball; Pesäpallo ball|pesapallo; Shinty ball|shinty; Camogie ball|camogie; Bossaball; Hornussen; Pelota|pelota ball|basque pelota; Jai alai|jai alai ball|pelota (jai alai); Goalball|goal ball; Bandy ball|bandy; Floorball|floor ball; Skittles|skittle ball; Handball (team)|team handball; Tamburello`,
      legendary: 'Wiffle ball|whiffle ball',
    },
    facts: { 'Wiffle ball': 'A hollow plastic ball with holes, so it curves wildly when thrown; invented in Connecticut in 1953.' },
  },
  {
    id: 'sport-equipment',
    category: 'sport',
    prompt: 'Name a piece of sports equipment',
    qualifier: 'Gear used in playing a sport, other than balls, like a cricket bat',
    groups: {
      textbook: 'Bat|cricket bat; Racket|racquet|tennis racket|badminton racket; Helmet; Net; Goalpost|goal post|goals; Hockey stick|stick; Gloves|batting gloves|goalkeeper gloves|boxing gloves; Shuttlecock|shuttle|birdie; Stumps|wickets|wicket',
      honours: `Bails|bail; Pads|batting pads|leg guards; Shin guards|shin pads; Boxing gloves; Punching bag|boxing bag|heavy bag; Skipping rope|jump rope;
        Dumbbells|dumbbell; Barbell|bar bell; Whistle; Stopwatch|stop watch; Scoreboard; Trophy|cup|medal; Hurdles|hurdle; Javelin; Discus; Shot put|shot|shotput;
        Baton|relay baton; Starting blocks|blocks|block; Pole vault pole|vaulting pole|pole; Goggles|swimming goggles; Swim cap|swimming cap|cap; Kickboard|kick board; Oar|oars;
        Paddle; Bow|archery bow; Arrow|arrows; Target|archery target; Basketball hoop|hoop|basket; Backboard; Cones|cone|marker cones; Gym mat|mat|yoga mat;
        Cricket pads|thigh pad|arm guard|box|abdominal guard|abdo guard|cup; Jersey|kit|uniform; Studs|boots|football boots|cleats|spikes|running spikes`,
      rare: `Foil|rapier; Épée|epee; Sabre|saber; Fencing mask|mask; Chalk|gym chalk; Rosin bag|rosin; Crampons; Ice axe; Harness|climbing harness; Carabiner|karabiner|carabiners;
        Hockey puck|puck; Curling stone|stone|rock; Broom|curling broom; Snowboard; Skis|ski; Ski poles|poles; Ice skates|skates|skate; Roller skates|rollerblades|inline skates;
        Skateboard|board; Surfboard|surf board; Wetsuit|wet suit; Snorkel|snorkelling mask|snorkeling mask|diving mask; Flippers|fins; Life jacket|lifejacket|buoy;
        Pommel horse; Parallel bars; Balance beam|beam; Springboard|diving board; Vaulting box|vault; Trampoline; Swiss ball|gym ball; Resistance band|resistance bands|exercise band;
        Kettlebell|kettle bell; Weight plates|plates|weights; Treadmill; Exercise bike|spin bike; Rowing machine|erg|ergometer; Pull-up bar|chin-up bar|pullup bar; Cricket sight screen|sight screen|sightscreen;
        Bowling machine|ball machine; Speed gun|radar gun; Hawk-Eye|hawkeye; Third umpire monitor|DRS; Stump mic|stump microphone; Pitch roller|roller; Boundary rope|boundary cushion;
        Line marker|line marking machine|marker; Corner flag|corner flags; Offside flag|linesman's flag|flag; Penalty spot; Referee card|yellow card|red card|cards; Linesman|line judge|rafter`,
      deep: `Hackey sack|footbag; Mouthguard|gumshield|gum shield; Cricket box|box guard; Sweatband|wristband|headband; Compression sleeves|compression sleeve; Cycling shoes|cleats (cycling); Clipless pedals; Tri-bars|aero bars;
        Bo staff; Nunchaku|nunchucks; Sai|sai (martial art); Katana|bokken|shinai; Chakram; Mace|gada; Dhal|dhal and talwar; Talwar; Gada|mace (wrestling); Mallakhamb pole|mallakhamb`,
      legendary: 'Snickometer',
    },
    facts: { Snickometer: 'Uses sound and video to show whether the ball clipped the bat before reaching the keeper.' },
  },
  {
    id: 'sport-martial-art',
    category: 'sport',
    prompt: 'Name a martial art or combat sport',
    qualifier: 'Named fighting styles or combat sports, by their usual name',
    strip: ['martial art', 'martial arts'],
    answers: `
      Karate; Judo; Taekwondo|tae kwon do|TKD; Kung fu|Chinese martial arts|gongfu@Chinese martial arts; Aikido; Jujutsu|ju-jitsu|jiu-jitsu|jujitsu@Jujutsu;
      Kendo; Muay Thai|Thai boxing@Muay Thai; Capoeira; Krav Maga; Kalaripayattu|kalari|kalarippayattu; Sumo|sumo wrestling@Sumo;
      Brazilian jiu-jitsu|BJJ|Brazilian jiu jitsu@Brazilian jiu-jitsu; Wing Chun|Ving Tsun@Wing Chun; Tai chi|taichi|tai chi chuan@Tai chi;
      Kickboxing|kick boxing@Kickboxing; Sambo@Sambo (martial art); Pencak silat|silat@Pencak silat; Kenpo|kenpō|Kempo@Kenpō;
      Savate|French boxing@Savate; Hapkido@Hapkido; Jeet Kune Do|JKD@Jeet Kune Do; Filipino martial arts|Eskrima|Escrima|Arnis|Kali@Filipino martial arts;
      Lethwei|Burmese boxing@Lethwei; Wushu@Wushu (sport); Gatka|gatka@Gatka; Thang-ta|Thang Ta|Huyen Langlon@Thang-ta; Silambam|silambattam@Silambam;
      Kushti|pehlwani|Indian wrestling|Malla-yuddha@Kushti; Mixed martial arts|MMA@Mixed martial arts; Shotokan@Shotokan; Ninjutsu|ninja@Ninjutsu;
      Iaido@Iaido; Kyudo|Japanese archery@Kyūdō; Taekkyon|Taekkyeon@Taekkyon; Systema@Systema; Bokator@Bokator; Vovinam@Vovinam;
      Boxing; Wrestling|freestyle wrestling|Greco-Roman wrestling@Wrestling; Fencing; Sanshou|Sanda@Sanshou; Shaolin kung fu|Shaolin@Shaolin Kung Fu;
      Aiki-jujutsu|Daito-ryu@Daitō-ryū Aiki-jūjutsu; Kyokushin|Kyokushin karate@Kyokushin; Bartitsu@Bartitsu; Glima@Glima; Lutte traditionnelle|Senegalese wrestling|Laamb@Laamb;
      Kalarippayattu fighting|Varma Kalai|Varma kalai@Varma kalai`,
    legendary: ['Kalaripayattu', 'Bokator'],
    facts: {
      Kalaripayattu: 'A martial art from Kerala, often called one of the oldest fighting systems in the world.',
      Bokator: 'An ancient Cambodian martial art, said to be the root of Khmer fighting styles.',
    },
  },
  {
    id: 'sport-water-sport',
    category: 'sport',
    prompt: 'Name a water sport or watersport activity',
    qualifier: 'Sports or activities done in, on or under water',
    groups: {
      textbook: 'Swimming|swim; Diving|platform diving|springboard diving; Water polo; Surfing|surf; Sailing|yachting; Rowing|crew|sculling; Kayaking|kayak; Canoeing|canoe; Scuba diving|scuba',
      honours: `Snorkelling|snorkeling; Water skiing|waterskiing; Wakeboarding|wake boarding; Windsurfing|windsurf; Kitesurfing|kiteboarding|kite surfing; Paddleboarding|stand-up paddleboarding|SUP|paddle boarding;
        Jet skiing|jet ski|jetski; White water rafting|rafting|river rafting; Parasailing; Banana boat ride|banana boat; Synchronised swimming|synchronized swimming|artistic swimming;
        Freediving|free diving; Bodyboarding|body boarding|boogie boarding; Dragon boat racing|dragon boat; Cliff diving|high diving; Triathlon (swim)|triathlon; Water volleyball|pool volleyball;
        Fishing|angling; Rowing (sculls)|skiff; Speedboat racing|powerboat racing|hydroplane racing; Pedalo|pedal boating|paddle boat`,
      rare: `Underwater hockey|octopush; Kneeboarding; Flyboarding|flyboard; Sea kayaking|ocean kayaking; Canoe polo|kayak polo; Water basketball; Tubing|river tubing|inner tubing;
        Coasteering; Hydrofoiling|foiling|hydrofoil; Wing foiling|wing-foiling|wingfoil; Bodysurfing|body surfing; Aquathlon; Swimrun; Open water swimming|marathon swimming; Ice swimming|winter swimming;
        Spearfishing|spear fishing; Wreck diving; Cave diving; Technical diving|tec diving; Shark diving|cage diving; Canyoning|canyoneering; Sea scooter|underwater scooter`,
      deep: `Underwater photography; Aqua aerobics|water aerobics|aquafit; Dragon boat; Water jousting|jousting; Tube sliding|water slide; Boat racing|regatta; Aquabike|aqua bike|aquacycling; Fin swimming|finswimming; Underwater target shooting; Aquathlon (run swim)`,
      legendary: 'Underwater rugby',
    },
    facts: { 'Underwater rugby': 'Played at the bottom of a pool with a salt-water-filled ball, goals in sunken baskets and breath-hold tactics.' },
  },
  {
    id: 'sport-winter-sport',
    category: 'sport',
    prompt: 'Name a winter sport',
    qualifier: 'Sports played on snow or ice, in or beyond the Winter Olympics',
    groups: {
      textbook: 'Skiing|ski; Snowboarding|snow boarding; Ice hockey; Figure skating|ice skating|skating; Speed skating; Curling; Bobsleigh|bobsled|bobsleds|bobsled',
      honours: `Luge; Skeleton; Biathlon; Ski jumping; Cross-country skiing|cross country skiing|nordic skiing|XC skiing; Alpine skiing|downhill skiing|slalom|giant slalom|downhill;
        Nordic combined; Freestyle skiing|freestyle ski; Short track speed skating|short track; Ice dancing|ice dance; Sledding|tobogganing|sledging|sleigh riding; Snowshoeing|snow shoeing;
        Ice climbing; Ski mountaineering|skimo; Snowmobiling|snowmobile|snow mobile; Snow tubing|snow tube`,
      rare: `Bandy; Ice fishing; Ski cross|skicross; Moguls|mogul skiing; Slopestyle|slope style; Big air; Halfpipe|half-pipe|half pipe; Telemark skiing|telemark; Snowkiting|snow kiting;
        Ringette; Broomball; Ice stock sport|ice stock|eisstock; Para ice hockey|sledge hockey|sled hockey; Aerials|aerial skiing; Ski ballet|ski acro; Speed skiing; Snowboard cross|boardercross|snowboard cross;
        Parallel giant slalom|parallel slalom; Wheelchair curling; Ice cross|ice cross downhill|red bull crashed ice; Dog sledding|dogsled|dog sled racing|mushing|sled dog racing; Ice sailing|iceboating`,
      deep: 'Ice yachting; Snow polo; Bandy (rink)|rink bandy; Snow rugby|snow volleyball|snow soccer; Winter triathlon; Skibob|ski bob|skibobbing; Ice speedway|ice racing; Spring skiing; Hut-to-hut skiing',
      legendary: 'Skijoring|ski-joring',
    },
    facts: { Skijoring: 'A person on skis is pulled across snow by a horse, dog or vehicle.' },
  },
  {
    id: 'sport-athletics-event',
    category: 'sport',
    prompt: 'Name a track and field or athletics event',
    qualifier: 'Standard events in athletics, including road and combined events',
    strip: ['metres', 'meters', 'm'],
    groups: {
      textbook: '100 metres|100m|100 meters|hundred metres|100 meter dash|100 dash; 200 metres|200m|200 meters; 400 metres|400m|400 meters; 800 metres|800m|800 meters; 1500 metres|1500m|1500 meters; Marathon|42km; Long jump; High jump; Javelin throw|javelin; Shot put|shotput; Discus throw|discus; Relay|4x100|4x100m relay',
      honours: `Triple jump; Pole vault; Hammer throw|hammer; 110 metres hurdles|110m hurdles|110 hurdles; 100 metres hurdles|100m hurdles|100 hurdles; 400 metres hurdles|400m hurdles|400 hurdles;
        3000 metres steeplechase|steeplechase|3000m steeplechase; 5000 metres|5000m|5k; 10000 metres|10000m|10,000 metres|10k; Decathlon; Heptathlon;
        4x400 metres relay|4x400m relay|4x400 relay|4x400; Half marathon; 20 km walk|20km walk|walking; Cross country|cross-country running`,
      rare: `Pentathlon|athletics pentathlon; 50 km race walk|50 km walk|50km walk; 3000 metres|3000m; 60 metres|60m|60 metres indoor; 60 metres hurdles|60m hurdles; 300 metres|300m;
        Mile|mile run|one mile; 2000 metres steeplechase|2000m steeplechase; Mixed 4x400 relay|mixed relay|mixed relay 4x400m; Ultramarathon|ultra marathon|ultra; Trail running|trail run;
        Mountain running|fell running|hill running; Weight throw|weight for distance; Standing long jump|standing jump; Standing high jump; Standing triple jump; Medley relay|distance medley relay|sprint medley relay;
        Hurdles|hurdling; Sprint|sprinting; Middle distance|middle-distance running; Long distance|distance running|long-distance running; 1000 metres|1000m; 1 mile relay; 20 km|20 kilometres`,
      deep: `Cross country relay; Tug of war (athletics); Obstacle race|obstacle course race; Three-legged race|3-legged race; Sack race; Egg and spoon race|egg and spoon; Wheelbarrow race|wheelbarrow;
        Hop step and jump|hop-step-jump|hop, step and jump; Hep; Throwing the discus; Octathlon|octathlon; Tetrathlon|tetrathlon; Decastar; Backward running|retro running`,
      legendary: 'Race walk|racewalking',
    },
    facts: { 'Race walk': 'One foot must always touch the ground, and a straight knee is required at contact; judges disqualify walkers who break the rules.' },
  },
  {
    id: 'sport-gymnastics-apparatus',
    category: 'sport',
    prompt: 'Name a gymnastics apparatus or piece of equipment',
    qualifier: 'Apparatus in artistic, rhythmic and trampoline gymnastics, plus mallakhamb, and training equipment',
    groups: {
      textbook: 'Floor|floor exercise|floor mat; Pommel horse|pommel; Rings|still rings; Vault|vaulting table|vault table; Parallel bars|parallels; High bar|horizontal bar|high bar; Uneven bars|asymmetric bars|asymmetrical bars; Balance beam|beam',
      honours: `Trampoline; Hoop; Ball; Clubs|club; Ribbon; Rope|skipping rope; Springboard|spring board; Mini trampoline|mini-tramp|minitramp|trampette; Tumble track|tumbling track|tumbling; Spring floor|sprung floor;
        Foam pit|pit; Crash mat|landing mat|safety mat|mat; Chalk|gym chalk; Grips|hand grips|gymnastics grips; Air track|airtrack|air floor`,
      rare: `Parallettes|parallette; Mushroom|pommel trainer; Balance board|wobble board; Rope climb|climbing rope; Cheese mat|cheese wedge|wedge; Resi pit|resi; Loop bar|bar; Vault runway|runway;
        Landing mat|dismount mat; Rhythmic carpet|rhythmic floor; Gymnastics ring|gym ring|rings (training); Giant swing bar|giant; Beam cover|beam mat; Tumble trak; Double mini trampoline|double mini|DMT; Aerial hoop|lyra`,
      deep: 'Mallakhamb pole|mallakhamba|mallakhamb; Rope mallakhamb|rope mallakhamba|hanging mallakhamb; Cane mallakhamba; Tumbling rail; Fly springs',
      legendary: 'Rhönrad|gymwheel|German wheel|Rhonrad',
    },
    facts: { 'Rhönrad': 'A large steel wheel the gymnast stands inside and rolls, invented in Germany in the 1920s.' },
  },
  {
    id: 'sport-yoga-pose',
    category: 'sport',
    prompt: 'Name a yoga pose or asana',
    qualifier: 'Named asanas, by their Sanskrit or common English name',
    strip: ['pose', 'asana'],
    groups: {
      textbook: 'Tadasana|mountain pose|mountain|samasthiti; Vrikshasana|tree pose|tree; Trikonasana|triangle pose|triangle; Bhujangasana|cobra pose|cobra; Padmasana|lotus pose|lotus; Sukhasana|easy pose|easy; Shavasana|savasana|corpse pose|corpse; Surya Namaskar|sun salutation|sun salutations|surya namaskara; Adho Mukha Svanasana|downward dog|downward facing dog|downward-facing dog|downward dog pose; Balasana|child pose|child\'s pose|childs pose',
      honours: `Vajrasana|thunderbolt pose|diamond pose; Dhanurasana|bow pose|bow; Virabhadrasana|warrior pose|warrior; Paschimottanasana|seated forward bend|seated forward fold;
        Halasana|plough pose|plow pose|plow; Sarvangasana|shoulder stand|shoulderstand|supported shoulder stand; Matsyasana|fish pose|fish; Ardha Matsyendrasana|half spinal twist|half lord of the fishes|seated twist;
        Chakrasana|wheel pose|wheel|urdhva dhanurasana|upward bow; Garudasana|eagle pose|eagle; Naukasana|boat pose|boat|navasana; Setu Bandhasana|bridge pose|bridge;
        Shirshasana|headstand|head stand; Uttanasana|standing forward bend|standing forward fold|forward fold; Utkatasana|chair pose|chair|fierce pose; Natarajasana|dancer pose|dancer|lord of the dance;
        Ustrasana|camel pose|camel; Gomukhasana|cow face pose|cow-face pose|cow face; Marjaryasana|cat pose|cat|cat-cow|cat cow; Bitilasana|cow pose|cow; Bakasana|crow pose|crow|crane pose|crane`,
      rare: `Mayurasana|peacock pose|peacock; Hanumanasana|splits|monkey pose|front splits; Vrischikasana|scorpion pose|scorpion; Shalabhasana|locust pose|locust; Makarasana|crocodile pose|crocodile;
        Janu Sirsasana|head to knee pose|head-to-knee; Baddha Konasana|butterfly pose|butterfly|bound angle pose|cobbler pose; Upavistha Konasana|wide-angle seated forward bend|seated straddle;
        Ardha Chandrasana|half moon pose|half moon; Parivrtta Trikonasana|revolved triangle pose|revolved triangle; Anjaneyasana|low lunge|crescent lunge|lunge pose; Ashtanga Namaskara|eight-limbed pose|knees chest chin;
        Phalakasana|plank pose|plank; Chaturanga Dandasana|four-limbed staff pose|low plank|chaturanga; Urdhva Mukha Svanasana|upward dog|upward facing dog|upward-facing dog;
        Pincha Mayurasana|forearm stand|feathered peacock pose|peacock feather pose; Adho Mukha Vrksasana|handstand|handstand pose; Salamba Sirsasana|supported headstand; Supta Virasana|reclined hero pose;
        Virasana|hero pose|hero; Siddhasana|accomplished pose|perfect pose; Ardha Padmasana|half lotus|half lotus pose; Bhadrasana|gracious pose; Mandukasana|frog pose|frog; Simhasana|lion pose|lion`,
      deep: `Yoganidrasana|yogic sleep pose|yoga nidra pose|sleeping yogi; Tolasana|scale pose|scale; Eka Pada Rajakapotasana|king pigeon pose|pigeon pose|pigeon; Kapotasana|pigeon pose (deep)|dove pose; Astavakrasana|eight-angle pose|eight angle pose;
        Durvasasana|durvasa pose; Viparita Karani|legs up the wall|legs-up-the-wall; Dwi Pada Sirsasana|feet behind head|two feet behind head|behind the head pose; Padangusthasana|big toe pose;
        Gorakshasana|cowherd pose|gorakshasana pose; Bhairavasana|fierce pose (hamstring)|bhairava pose`,
      legendary: 'Kukkutasana|rooster pose|rooster|cock pose',
    },
    facts: { Kukkutasana: 'A tough arm balance sitting in lotus: the hands press down while the folded legs lift clear of the floor.' },
  },
  {
    id: 'sport-ind-cricket-stadium',
    category: 'sport',
    prompt: 'Name a cricket stadium in India',
    qualifier: 'Grounds that have hosted men\'s international cricket in India, up to 2025',
    strip: ['stadium', 'cricket stadium', 'cricket ground', 'ground'],
    answers: `
      Eden Gardens|Eden@Eden Gardens; Wankhede Stadium|Wankhede@Wankhede Stadium; M. A. Chidambaram Stadium|Chepauk|MA Chidambaram Stadium|Chidambaram@M. A. Chidambaram Stadium;
      M. Chinnaswamy Stadium|Chinnaswamy|Chinnaswamy Stadium@M. Chinnaswamy Stadium; Arun Jaitley Stadium|Feroz Shah Kotla|Kotla|Firoz Shah Kotla@Arun Jaitley Stadium;
      Narendra Modi Stadium|Motera|Sardar Patel Stadium|Ahmedabad@Narendra Modi Stadium; Rajiv Gandhi International Cricket Stadium|Uppal Stadium|Uppal|Hyderabad@Rajiv Gandhi International Cricket Stadium;
      Punjab Cricket Association IS Bindra Stadium|Mohali|PCA Stadium|IS Bindra Stadium|Bindra Stadium@Punjab Cricket Association IS Bindra Stadium;
      Himachal Pradesh Cricket Association Stadium|Dharamsala|HPCA Stadium|HPCA@Himachal Pradesh Cricket Association Stadium; Green Park Stadium|Green Park|Kanpur@Green Park Stadium;
      Brabourne Stadium|Brabourne@Brabourne Stadium; Sawai Mansingh Stadium|Jaipur@Sawai Mansingh Stadium; Holkar Cricket Stadium|Holkar Stadium|Indore|Holkar@Holkar Cricket Stadium;
      JSCA International Stadium Complex|JSCA Stadium|Ranchi|JSCA@JSCA International Stadium Complex; Vidarbha Cricket Association Stadium|Jamtha|VCA Stadium|Nagpur@Vidarbha Cricket Association Stadium;
      Barabati Stadium|Cuttack|Barabati@Barabati Stadium; Greenfield International Stadium|Greenfield|Thiruvananthapuram|Trivandrum|Karyavattom@Greenfield International Stadium;
      Dr. Y.S. Rajasekhara Reddy ACA–VDCA Cricket Stadium|ACA-VDCA Stadium|ACA VDCA|Visakhapatnam|Vizag|YSR Stadium@ACA–VDCA Cricket Stadium;
      Niranjan Shah Stadium|Saurashtra Cricket Association Stadium|Rajkot|SCA Stadium@Niranjan Shah Stadium; Maharashtra Cricket Association Stadium|MCA Stadium|Gahunje|Pune|Subrata Roy Sahara Stadium@Maharashtra Cricket Association Stadium;
      BRSABV Ekana Cricket Stadium|Ekana Stadium|Ekana|Lucknow@BRSABV Ekana Cricket Stadium; Barsapara Cricket Stadium|Barsapara|Guwahati|ACA Stadium@Barsapara Cricket Stadium;
      Shaheed Veer Narayan Singh International Cricket Stadium|Raipur|Nava Raipur|SVNS Stadium@Shaheed Veer Narayan Singh International Cricket Stadium;
      Maharaja Yadavindra Singh International Cricket Stadium|Mullanpur|New Chandigarh|New PCA Stadium@Maharaja Yadavindra Singh International Cricket Stadium;
      Keenan Stadium|Jamshedpur|Keenan@Keenan Stadium; Lal Bahadur Shastri Stadium|LB Stadium|Fateh Maidan|Hyderabad LB Stadium@Lal Bahadur Shastri Stadium, Hyderabad;
      Nehru Stadium, Chennai|Nehru Stadium Chennai@Jawaharlal Nehru Stadium, Chennai; Nehru Stadium, Pune|Nehru Stadium Pune@Nehru Stadium, Pune; 
      Moti Bagh Stadium|Moti Bagh|Baroda|Vadodara@Moti Bagh Stadium; Sector 16 Stadium|Sector 16|Chandigarh@Sector 16 Stadium; Madhavrao Scindia Cricket Ground|Madhavrao Scindia|Rajkot (old)@Madhavrao Scindia Cricket Ground;
      
      Nahar Singh Stadium|Faridabad|Nahar Singh@Nahar Singh Stadium; Captain Roop Singh Stadium|Roop Singh Stadium|Gwalior|Roop Singh@Captain Roop Singh Stadium;
      Gandhi Sports Complex Ground|Amritsar|Gandhi Sports Complex@Gandhi Sports Complex Ground; Barkatullah Khan Stadium|Jodhpur|Barkatullah@Barkatullah Khan Stadium;
      Reliance Stadium|Vadodara Reliance|Reliance Stadium Vadodara|Vadodara Cricket@Reliance Stadium`,
    legendary: ['Keenan Stadium', 'Barabati Stadium'],
    facts: {
      'Keenan Stadium': 'A Jamshedpur ground owned by Tata Steel that hosted several ODIs in the 1980s and 90s.',
      'Barabati Stadium': 'A riverside ground in Cuttack, Odisha, built on land beside an old fort.',
    },
  },
  {
    id: 'sport-world-cricket-ground',
    category: 'sport',
    prompt: 'Name a cricket ground outside India',
    qualifier: 'Test or international grounds around the world, excluding India, up to 2025',
    strip: ['stadium', 'cricket ground', 'ground', 'oval', 'cricket stadium', 'cricket club ground'],
    answers: `
      Lord's|Lords|Lord's Cricket Ground|Home of Cricket@Lord's; The Oval|Kia Oval|Oval|Kennington Oval@The Oval; Old Trafford|Old Trafford Cricket Ground@Old Trafford Cricket Ground;
      Headingley|Headingley Stadium@Headingley Cricket Ground; Edgbaston|Edgbaston Cricket Ground@Edgbaston Cricket Ground; Trent Bridge@Trent Bridge;
      Rose Bowl|Utilita Bowl|Ageas Bowl|Hampshire Bowl@Rose Bowl (stadium); Sophia Gardens|Cardiff@Sophia Gardens; Riverside Ground|Chester-le-Street|Riverside@Riverside Ground;
      Melbourne Cricket Ground|MCG@Melbourne Cricket Ground; Sydney Cricket Ground|SCG@Sydney Cricket Ground; Adelaide Oval@Adelaide Oval;
      The Gabba|Gabba|Brisbane Cricket Ground@The Gabba; WACA Ground|WACA|Perth Waca@WACA Ground; Optus Stadium|Perth Stadium@Optus Stadium;
      Bellerive Oval|Blundstone Arena|Hobart@Bellerive Oval; Manuka Oval|Canberra@Manuka Oval; Newlands Cricket Ground|Newlands|Cape Town@Newlands Cricket Ground;
      Wanderers Stadium|The Wanderers|Johannesburg|Bullring@Wanderers Stadium; SuperSport Park|Centurion|Centurion Park@SuperSport Park;
      Kingsmead Cricket Ground|Kingsmead|Durban@Kingsmead Cricket Ground; St George's Park Cricket Ground|St George's Park|Port Elizabeth|Gqeberha@St George's Park Cricket Ground;
      Eden Park|Auckland@Eden Park; Basin Reserve|Wellington@Basin Reserve; Hagley Oval|Christchurch@Hagley Oval; Seddon Park|Hamilton@Seddon Park;
      Galle International Stadium|Galle@Galle International Stadium; R. Premadasa Stadium|Premadasa|Khettarama|Colombo@R. Premadasa Stadium;
      Pallekele International Cricket Stadium|Pallekele|Kandy@Pallekele International Cricket Stadium; Sharjah Cricket Stadium|Sharjah@Sharjah Cricket Stadium;
      Dubai International Cricket Stadium|Dubai@Dubai International Cricket Stadium; Sheikh Zayed Stadium|Abu Dhabi|Zayed Cricket Stadium@Sheikh Zayed Cricket Stadium;
      Gaddafi Stadium|Lahore@Gaddafi Stadium; National Stadium, Karachi|National Stadium|Karachi@National Stadium, Karachi;
      Rawalpindi Cricket Stadium|Pindi|Rawalpindi@Rawalpindi Cricket Stadium; Sher-e-Bangla National Cricket Stadium|Mirpur|Shere Bangla|Dhaka@Sher-e-Bangla National Cricket Stadium;
      Kensington Oval|Bridgetown|Barbados@Kensington Oval; Sabina Park|Kingston|Jamaica@Sabina Park; Queen's Park Oval|Port of Spain|Trinidad@Queen's Park Oval;
      Bourda|Georgetown|Bourda Oval@Bourda; Providence Stadium|Guyana National Stadium|Providence@Guyana National Stadium; Antigua Recreation Ground|ARG|St John's@Antigua Recreation Ground;
      Sir Vivian Richards Stadium|Vivian Richards Stadium|North Sound|Antigua Stadium@Sir Vivian Richards Stadium; Harare Sports Club|Harare@Harare Sports Club;
      Queens Sports Club|Bulawayo|Queens@Queens Sports Club; Malahide Cricket Club Ground|Malahide|The Village@Malahide Cricket Club Ground; Grace Road|Leicester@Grace Road;
      County Ground, Bristol|Bristol@County Ground, Bristol; Taunton|Cooper Associates County Ground|County Ground Taunton@County Ground, Taunton; Scarborough|North Marine Road@North Marine Road Ground;
      Arnos Vale Ground|Arnos Vale|St Vincent@Arnos Vale Ground; Warner Park|Basseterre|Warner Park Sporting Complex@Warner Park Sporting Complex; Beausejour Stadium|Daren Sammy Cricket Ground|St Lucia|Gros Islet@Daren Sammy Cricket Ground;
      Grenada National Stadium|Grenada|St George's@Grenada National Stadium; Kabul International Cricket Stadium|Kabul|Afghanistan Stadium@Kabul International Cricket Stadium;
      Kinrara Oval|Kuala Lumpur|Kinrara@Kinrara Oval;
      Bready|Bready Cricket Club@Bready Cricket Club`,
    legendary: ['Bourda', 'Pallekele International Cricket Stadium'],
    facts: {
      Bourda: 'A Georgetown, Guyana ground below sea level, hemmed in by walls to keep the water out.',
      'Pallekele International Cricket Stadium': 'A hill-country Sri Lankan ground near Kandy, opened in 2009.',
    },
  },
  {
    id: 'sport-team-sport',
    category: 'sport',
    prompt: 'Name a team sport',
    qualifier: 'Sports played by teams, whether or not they are in the Olympics',
    groups: {
      textbook: 'Cricket; Football|soccer; Hockey|field hockey; Basketball; Volleyball; Kabaddi; Kho-kho|kho kho; Handball|team handball; Rugby|rugby union; Baseball',
      honours: `Netball; Water polo; Softball; Lacrosse; Ultimate frisbee|ultimate|frisbee; Polo; Tug of war|tug-of-war; Dragon boat racing|dragon boat|dragon boating; Dodgeball|dodge ball;
        Throwball|throw ball; American football|gridiron; Ice hockey; Rugby league|league; Rugby sevens|rugby 7s|sevens; Futsal|five-a-side football|5-a-side; Beach volleyball; Beach soccer|beach football;
        Relay running|relay|relays; Rowing|eights; Gaelic football; Hurling|camogie; Australian rules football|Aussie rules|AFL|footy|Australian football; Bandy; Roller hockey|inline hockey|roller derby; Sepak takraw|kick volleyball`,
      rare: `Korfball; Sepak raga; Floorball; Pesäpallo|pesapallo|Finnish baseball; Rounders; Tchoukball; Underwater hockey|octopush; Broomball; Shinty; Ringette; Curling; Bobsleigh|four-man bobsleigh;
        Goalball; Wheelchair basketball; Wheelchair rugby|murderball|quad rugby; Sitting volleyball; Paintball; Airsoft|airsoft team; Quidditch|quadball; Cycle polo|bicycle polo; Elephant polo; Horseball|horse ball; Water basketball;
        Canoe polo|kayak polo; Handball (beach)|beach handball; Footvolley|foot volley; Teqball team|teqball; Kin-ball|kin ball; Speedball|speed ball; Gaga ball|gaga|ga-ga; Four square; Capture the flag|capture-the-flag; Kickball|kick ball; Slapball`,
      deep: 'Lacrosse (box)|box lacrosse; Roller hockey (quad)|rink hockey|quad hockey; Hornussen; Calcio storico|calcio fiorentino; Sipa; Pelota team|frontenis team; Bossaball; Pickle|pickle team; Hurling (women)|camogie (women); Ulama; Kemari; Pato; Mob football|shrovetide football|Atherstone Ball Game|Royal Shrovetide Football; Tamburello|tamburello (team)',
      legendary: 'Buzkashi|kokpar',
    },
    facts: { Buzkashi: 'A Central Asian game in which riders on horseback fight over a goat or calf carcass; considered the national sport of Afghanistan.' },
  },
  {
    id: 'sport-ind-chess-player',
    category: 'sport',
    prompt: 'Name an Indian chess player',
    qualifier: 'Indian chess grandmasters and other title-holders with a Wikipedia article, up to 2025',
    answers: `
      Viswanathan Anand|Vishy Anand|Anand|Vishy; Dommaraju Gukesh|D. Gukesh|Gukesh|D Gukesh; Rameshbabu Praggnanandhaa|Praggnanandhaa|Pragg|R Praggnanandhaa|Praggnanandha;
      Arjun Erigaisi|Erigaisi; Koneru Humpy|Humpy; Dronavalli Harika|Harika Dronavalli|Harika; Vidit Gujrathi|Vidit; Pentala Harikrishna|Harikrishna|P. Harikrishna;
      Nihal Sarin|Nihal; Rameshbabu Vaishali|Vaishali|R Vaishali; Divya Deshmukh|Divya; Krishnan Sasikiran|Sasikiran;
      Surya Shekhar Ganguly|Surya Ganguly|Surya Sekhar Ganguly; Dibyendu Barua|Barua; Manuel Aaron|Aaron; Baskaran Adhiban|Adhiban|B. Adhiban;
      S. P. Sethuraman|Sethuraman|SP Sethuraman; Abhijeet Gupta; Parimarjan Negi|Negi; Raunak Sadhwani|Raunak; Aravindh Chithambaram|Aravindh;
      Murali Karthikeyan|Karthikeyan; Leon Luke Mendonca|Leon Mendonca|Mendonca; Sahaj Grover; Deep Sengupta; Neelotpal Das;
      Tania Sachdev|Tania; Mary Ann Gomes|Mary Gomes; R. B. Ramesh|RB Ramesh|Ramesh; Sandipan Chanda|Chanda; Diptayan Ghosh;
      Harsha Bharathakoti|Harsha; Pranav Anand|Pranav; Mitrabha Guha; Karthik Venkataraman;
      Ashwin Jayaram; G. N. Gopal|Gopal|GN Gopal; Abhimanyu Puranik|Puranik; Bhakti Kulkarni|Kulkarni;
      Padmini Rout|Rout; Soumya Swaminathan|Swaminathan; Eesha Karavade|Karavade`,
    legendary: ['Manuel Aaron', 'Mary Ann Gomes'],
    facts: {
      'Manuel Aaron': 'India\'s first International Master, a title he won in 1961.',
      'Mary Ann Gomes': 'India\'s first woman to earn a Woman Grandmaster-level title.',
    },
  },
  {
    id: 'sport-tennis-gs-man',
    category: 'sport',
    prompt: 'Name a man who has won a tennis Grand Slam singles title in the Open Era',
    qualifier: 'Men\'s singles major champions from 1968 to the end of 2025',
    answers: `
      Rod Laver|Laver; Ken Rosewall|Rosewall; John Newcombe|Newcombe; Arthur Ashe|Ashe; Stan Smith@Stan Smith; Ilie Năstase|Nastase|Ilie Nastase;
      Jan Kodeš|Jan Kodes|Kodes; Andrés Gimeno|Andres Gimeno|Gimeno; Manuel Orantes|Orantes; Jimmy Connors|Connors; Björn Borg|Bjorn Borg|Borg;
      Guillermo Vilas|Vilas; Johan Kriek|Kriek; Brian Teacher|Teacher; Mats Wilander|Wilander; John McEnroe|McEnroe; Ivan Lendl|Lendl;
      Yannick Noah|Noah; Boris Becker|Becker; Stefan Edberg|Edberg; Pat Cash|Cash; Andre Agassi|Agassi; Pete Sampras|Sampras; Jim Courier|Courier;
      Michael Stich|Stich; Thomas Muster|Muster; Sergi Bruguera|Bruguera; Michael Chang|Chang; Richard Krajicek|Krajicek; Yevgeny Kafelnikov|Kafelnikov;
      Petr Korda|Korda; Carlos Moyà|Carlos Moya|Moya; Gustavo Kuerten|Kuerten|Guga; Patrick Rafter|Rafter; Marat Safin|Safin; Goran Ivanišević|Goran Ivanisevic|Ivanisevic;
      Lleyton Hewitt|Hewitt; Thomas Johansson|Johansson; Juan Carlos Ferrero|Ferrero; Albert Costa|Costa; Gastón Gaudio|Gaston Gaudio|Gaudio;
      Andy Roddick|Roddick; Roger Federer|Federer; Rafael Nadal|Nadal; Novak Djokovic|Djokovic; Andy Murray|Murray; Juan Martín del Potro|Del Potro|Delpo;
      Marin Čilić|Marin Cilic|Cilic; Stan Wawrinka|Wawrinka; Dominic Thiem|Thiem; Daniil Medvedev|Medvedev; Carlos Alcaraz|Alcaraz; Jannik Sinner|Sinner`,
    legendary: ['Brian Teacher', 'Gastón Gaudio'],
    facts: {
      'Brian Teacher': 'Won the 1980 Australian Open, beating Kim Warwick in the final.',
      'Gastón Gaudio': 'Won the 2004 French Open in an all-Argentine final against Guillermo Coria.',
    },
  },
  {
    id: 'sport-wimbledon-woman',
    category: 'sport',
    prompt: 'Name a woman who has won the Wimbledon singles title in the Open Era',
    qualifier: 'Ladies\' singles champions from 1968 to the end of 2025',
    answers: `
      Ann Haydon-Jones|Ann Jones|Haydon-Jones; Margaret Court|Court; Billie Jean King|King; Evonne Goolagong Cawley|Evonne Goolagong|Goolagong;
      Virginia Wade|Wade; Chris Evert|Evert; Martina Navratilova|Navratilova; Steffi Graf|Graf; Conchita Martínez|Conchita Martinez|Martinez;
      Martina Hingis|Hingis; Lindsay Davenport|Davenport; Jana Novotná|Jana Novotna|Novotna; Venus Williams|Venus; Serena Williams|Serena;
      Amélie Mauresmo|Amelie Mauresmo|Mauresmo; Maria Sharapova|Sharapova; Petra Kvitová|Petra Kvitova|Kvitova; Marion Bartoli|Bartoli;
      Angelique Kerber|Kerber; Garbiñe Muguruza|Garbine Muguruza|Muguruza; Simona Halep|Halep; Ashleigh Barty|Barty; Elena Rybakina|Rybakina;
      Markéta Vondroušová|Marketa Vondrousova|Vondrousova; Barbora Krejčíková|Barbora Krejcikova|Krejcikova; Iga Świątek|Iga Swiatek|Swiatek`,
    legendary: ['Ann Haydon-Jones', 'Marion Bartoli'],
    facts: {
      'Ann Haydon-Jones': 'Won the 1969 Wimbledon title and was also a world table tennis champion.',
      'Marion Bartoli': 'Won Wimbledon in 2013 without dropping a set, then retired weeks later.',
    },
  },
];
