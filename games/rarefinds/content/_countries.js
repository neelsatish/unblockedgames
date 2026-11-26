// The 193 UN member states plus the two UN observer states (Vatican City, Palestine).
// Format: "Name|alias|alias@Wikipedia title ; continents ; capital (Europe only)"
// Continents: AF Africa, AS Asia, EU Europe, NA North America, SA South America, OC Oceania.
// Transcontinental countries list every continent they are commonly placed in.
const ROWS = `
Afghanistan;AS
Albania;EU;Tirana
Algeria;AF
Andorra;EU;Andorra la Vella
Angola;AF
Antigua and Barbuda|Antigua;NA
Argentina;SA
Armenia;AS EU;Yerevan
Australia;OC
Austria;EU;Vienna|Wien
Azerbaijan;AS EU;Baku
Bahamas|The Bahamas@The Bahamas;NA
Bahrain;AS
Bangladesh;AS
Barbados;NA
Belarus;EU;Minsk
Belgium;EU;Brussels|Bruxelles|Brussel
Belize;NA
Benin;AF
Bhutan;AS
Bolivia;SA
Bosnia and Herzegovina|Bosnia|Bosnia-Herzegovina;EU;Sarajevo
Botswana;AF
Brazil|Brasil;SA
Brunei|Brunei Darussalam;AS
Bulgaria;EU;Sofia
Burkina Faso;AF
Burundi;AF
Cambodia;AS
Cameroon;AF
Canada;NA
Cape Verde|Cabo Verde;AF
Central African Republic|CAR;AF
Chad;AF
Chile;SA
China|People's Republic of China|PRC;AS
Colombia;SA
Comoros;AF
Republic of the Congo|Congo|Congo-Brazzaville|Congo Republic;AF
Democratic Republic of the Congo|Congo|DRC|DR Congo|Congo-Kinshasa|Zaire;AF
Costa Rica;NA
Ivory Coast|Cote d'Ivoire;AF
Croatia;EU;Zagreb
Cuba;NA
Cyprus;EU AS;Nicosia
Czech Republic|Czechia;EU;Prague|Praha
Denmark;EU;Copenhagen|Kobenhavn
Djibouti;AF
Dominica;NA
Dominican Republic;NA
East Timor|Timor-Leste;AS
Ecuador;SA
Egypt;AF AS
El Salvador;NA
Equatorial Guinea;AF
Eritrea;AF
Estonia;EU;Tallinn
Eswatini|Swaziland;AF
Ethiopia;AF
Fiji;OC
Finland;EU;Helsinki
France;EU;Paris
Gabon;AF
Gambia|The Gambia@The Gambia;AF
Georgia@Georgia (country);AS EU;Tbilisi
Germany;EU;Berlin
Ghana;AF
Greece;EU;Athens
Grenada;NA
Guatemala;NA
Guinea;AF
Guinea-Bissau;AF
Guyana;SA
Haiti;NA
Honduras;NA
Hungary;EU;Budapest
Iceland;EU;Reykjavik
India|Bharat;AS
Indonesia;AS
Iran;AS
Iraq;AS
Ireland|Republic of Ireland|Eire@Republic of Ireland;EU;Dublin
Israel;AS
Italy;EU;Rome|Roma
Jamaica;NA
Japan;AS
Jordan;AS
Kazakhstan;AS EU;Astana|Nur-Sultan
Kenya;AF
Kiribati;OC
Kuwait;AS
Kyrgyzstan;AS
Laos|Lao;AS
Latvia;EU;Riga
Lebanon;AS
Lesotho;AF
Liberia;AF
Libya;AF
Liechtenstein;EU;Vaduz
Lithuania;EU;Vilnius
Luxembourg;EU;Luxembourg City|Luxembourg
Madagascar;AF
Malawi;AF
Malaysia;AS
Maldives;AS
Mali;AF
Malta;EU;Valletta
Marshall Islands;OC
Mauritania;AF
Mauritius;AF
Mexico;NA
Micronesia|Federated States of Micronesia@Federated States of Micronesia;OC
Moldova;EU;Chisinau
Monaco;EU;Monaco|Monaco City@Monaco
Mongolia;AS
Montenegro;EU;Podgorica
Morocco;AF
Mozambique;AF
Myanmar|Burma;AS
Namibia;AF
Nauru;OC
Nepal;AS
Netherlands|Holland|The Netherlands;EU;Amsterdam
New Zealand|Aotearoa;OC
Nicaragua;NA
Niger;AF
Nigeria;AF
North Korea|DPRK;AS
North Macedonia|Macedonia;EU;Skopje
Norway;EU;Oslo
Oman;AS
Pakistan;AS
Palau;OC
Palestine|State of Palestine@State of Palestine;AS
Panama;NA
Papua New Guinea|PNG;OC
Paraguay;SA
Peru;SA
Philippines;AS
Poland;EU;Warsaw|Warszawa
Portugal;EU;Lisbon|Lisboa
Qatar;AS
Romania;EU;Bucharest
Russia|Russian Federation;EU AS;Moscow|Moskva
Rwanda;AF
Saint Kitts and Nevis|St Kitts and Nevis|St Kitts;NA
Saint Lucia|St Lucia;NA
Saint Vincent and the Grenadines|St Vincent and the Grenadines|St Vincent;NA
Samoa;OC
San Marino;EU;City of San Marino|San Marino@City of San Marino
São Tomé and Príncipe|Sao Tome;AF
Saudi Arabia;AS
Senegal;AF
Serbia;EU;Belgrade|Beograd
Seychelles;AF
Sierra Leone;AF
Singapore;AS
Slovakia;EU;Bratislava
Slovenia;EU;Ljubljana
Solomon Islands;OC
Somalia;AF
South Africa;AF
South Korea|Republic of Korea;AS
South Sudan;AF
Spain|Espana;EU;Madrid
Sri Lanka;AS
Sudan;AF
Suriname|Surinam;SA
Sweden;EU;Stockholm
Switzerland;EU;Bern|Berne
Syria;AS
Tajikistan;AS
Tanzania;AF
Thailand;AS
Togo;AF
Tonga;OC
Trinidad and Tobago|Trinidad;NA
Tunisia;AF
Turkey|Turkiye;AS EU;Ankara
Turkmenistan;AS
Tuvalu;OC
Uganda;AF
Ukraine;EU;Kyiv|Kiev
United Arab Emirates|UAE|Emirates;AS
United Kingdom|UK|Britain|Great Britain|United Kingdom of Great Britain and Northern Ireland;EU;London
United States|USA|US|United States of America|America;NA
Uruguay;SA
Uzbekistan;AS
Vanuatu;OC
Vatican City|Vatican|Holy See;EU;Vatican City|Vatican
Venezuela;SA
Vietnam|Viet Nam;AS
Yemen;AS
Zambia;AF
Zimbabwe;AF
`.trim().split('\n').map((line) => {
  const [country, continents, capital] = line.split(';').map((s) => s.trim());
  return { country, continents: continents.split(' '), capital };
});

if (ROWS.length !== 195) throw new Error(`country table has ${ROWS.length} rows, expected 195`);

const nameOf = (entry) => entry.split('@')[0].split('|')[0];
module.exports = {
  ROWS,
  countriesIn: (code) => ROWS.filter((r) => r.continents.includes(code)).map((r) => r.country).join(';'),
  countriesStartingWith: (letter) => ROWS.filter((r) => nameOf(r.country).startsWith(letter)).map((r) => r.country).join(';'),
  europeanCapitals: () => ROWS.filter((r) => r.capital).map((r) => r.capital).join(';'),
  all: () => ROWS.map((r) => r.country).join(';'),
};
