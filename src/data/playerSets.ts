// Player Sets Data - Multiple themed sets for Guess Who

export interface Player {
  id: number;
  name: string;
  position: 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';
  club: string;
  nationality: string;
  hairColor: 'Black' | 'Brown' | 'Blonde' | 'Red' | 'Bald' | 'Gray';
  facialHair: boolean;
  imageUrl: string;
}

export interface PlayerSet {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  players: Player[];
  isCustom?: boolean;
}

// FIFA 25 face images from FIFARosters
const getFIFAImage = (fifaId: number) =>
  `https://www.fifarosters.com/assets/players/fifa25/faces/${fifaId}.png`;

// FIFA 23 for older/legend players
const getFIFA23Image = (fifaId: number) =>
  `https://www.fifarosters.com/assets/players/fifa23/faces/${fifaId}.png`;

// ============================================
// PREMIER LEAGUE SET
// ============================================
export const premierLeagueSet: PlayerSet = {
  id: 'premier-league',
  name: 'Premier League',
  description: 'Current Premier League stars',
  icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  color: '#3d195b',
  players: [
    // Manchester City
    { id: 1, name: "Erling Haaland", position: "Forward", club: "Manchester City", nationality: "Norway", hairColor: "Blonde", facialHair: false, imageUrl: getFIFAImage(239085) },
    { id: 2, name: "Kevin De Bruyne", position: "Midfielder", club: "Manchester City", nationality: "Belgium", hairColor: "Red", facialHair: true, imageUrl: getFIFAImage(192985) },
    { id: 3, name: "Phil Foden", position: "Midfielder", club: "Manchester City", nationality: "England", hairColor: "Blonde", facialHair: false, imageUrl: getFIFAImage(237692) },
    { id: 4, name: "Rodri", position: "Midfielder", club: "Manchester City", nationality: "Spain", hairColor: "Brown", facialHair: true, imageUrl: getFIFAImage(231866) },
    // Liverpool
    { id: 5, name: "Mohamed Salah", position: "Forward", club: "Liverpool", nationality: "Egypt", hairColor: "Black", facialHair: true, imageUrl: getFIFAImage(209331) },
    { id: 6, name: "Virgil van Dijk", position: "Defender", club: "Liverpool", nationality: "Netherlands", hairColor: "Black", facialHair: true, imageUrl: getFIFAImage(203376) },
    { id: 7, name: "Alisson Becker", position: "Goalkeeper", club: "Liverpool", nationality: "Brazil", hairColor: "Brown", facialHair: true, imageUrl: getFIFAImage(212831) },
    { id: 8, name: "Trent Alexander-Arnold", position: "Defender", club: "Liverpool", nationality: "England", hairColor: "Brown", facialHair: false, imageUrl: getFIFAImage(231281) },
    // Arsenal
    { id: 9, name: "Bukayo Saka", position: "Forward", club: "Arsenal", nationality: "England", hairColor: "Black", facialHair: false, imageUrl: getFIFAImage(246669) },
    { id: 10, name: "Declan Rice", position: "Midfielder", club: "Arsenal", nationality: "England", hairColor: "Brown", facialHair: false, imageUrl: getFIFAImage(234378) },
    { id: 11, name: "Martin Odegaard", position: "Midfielder", club: "Arsenal", nationality: "Norway", hairColor: "Blonde", facialHair: false, imageUrl: getFIFAImage(232415) },
    { id: 12, name: "William Saliba", position: "Defender", club: "Arsenal", nationality: "France", hairColor: "Black", facialHair: false, imageUrl: getFIFAImage(246497) },
    // Manchester United
    { id: 13, name: "Bruno Fernandes", position: "Midfielder", club: "Manchester United", nationality: "Portugal", hairColor: "Brown", facialHair: true, imageUrl: getFIFAImage(212198) },
    { id: 14, name: "Marcus Rashford", position: "Forward", club: "Manchester United", nationality: "England", hairColor: "Black", facialHair: true, imageUrl: getFIFAImage(231677) },
    { id: 15, name: "Casemiro", position: "Midfielder", club: "Manchester United", nationality: "Brazil", hairColor: "Brown", facialHair: true, imageUrl: getFIFAImage(200145) },
    { id: 16, name: "Lisandro Martinez", position: "Defender", club: "Manchester United", nationality: "Argentina", hairColor: "Brown", facialHair: false, imageUrl: getFIFAImage(237949) },
    // Chelsea
    { id: 17, name: "Cole Palmer", position: "Midfielder", club: "Chelsea", nationality: "England", hairColor: "Brown", facialHair: false, imageUrl: getFIFAImage(252306) },
    { id: 18, name: "Enzo Fernandez", position: "Midfielder", club: "Chelsea", nationality: "Argentina", hairColor: "Brown", facialHair: false, imageUrl: getFIFAImage(254071) },
    { id: 19, name: "Nicolas Jackson", position: "Forward", club: "Chelsea", nationality: "Senegal", hairColor: "Black", facialHair: false, imageUrl: getFIFAImage(244100) },
    { id: 20, name: "Reece James", position: "Defender", club: "Chelsea", nationality: "England", hairColor: "Black", facialHair: true, imageUrl: getFIFAImage(243547) },
    // Tottenham
    { id: 21, name: "Son Heung-min", position: "Forward", club: "Tottenham", nationality: "South Korea", hairColor: "Black", facialHair: false, imageUrl: getFIFAImage(200104) },
    { id: 22, name: "James Maddison", position: "Midfielder", club: "Tottenham", nationality: "England", hairColor: "Brown", facialHair: false, imageUrl: getFIFAImage(230999) },
    // West Ham
    { id: 23, name: "Jarrod Bowen", position: "Forward", club: "West Ham", nationality: "England", hairColor: "Brown", facialHair: false, imageUrl: getFIFAImage(235616) },
    // Newcastle
    { id: 24, name: "Alexander Isak", position: "Forward", club: "Newcastle", nationality: "Sweden", hairColor: "Black", facialHair: false, imageUrl: getFIFAImage(238803) },
  ]
};

// ============================================
// LA LIGA SET
// ============================================
export const laLigaSet: PlayerSet = {
  id: 'la-liga',
  name: 'La Liga',
  description: 'Spanish league superstars',
  icon: '🇪🇸',
  color: '#ee324e',
  players: [
    // Real Madrid
    { id: 1, name: "Jude Bellingham", position: "Midfielder", club: "Real Madrid", nationality: "England", hairColor: "Black", facialHair: false, imageUrl: getFIFAImage(252371) },
    { id: 2, name: "Vinicius Jr", position: "Forward", club: "Real Madrid", nationality: "Brazil", hairColor: "Black", facialHair: false, imageUrl: getFIFAImage(238794) },
    { id: 3, name: "Kylian Mbappe", position: "Forward", club: "Real Madrid", nationality: "France", hairColor: "Black", facialHair: false, imageUrl: getFIFAImage(231747) },
    { id: 4, name: "Thibaut Courtois", position: "Goalkeeper", club: "Real Madrid", nationality: "Belgium", hairColor: "Brown", facialHair: true, imageUrl: getFIFAImage(192119) },
    { id: 5, name: "Federico Valverde", position: "Midfielder", club: "Real Madrid", nationality: "Uruguay", hairColor: "Brown", facialHair: false, imageUrl: getFIFAImage(246082) },
    { id: 6, name: "Antonio Rudiger", position: "Defender", club: "Real Madrid", nationality: "Germany", hairColor: "Black", facialHair: true, imageUrl: getFIFAImage(205452) },
    { id: 7, name: "Luka Modric", position: "Midfielder", club: "Real Madrid", nationality: "Croatia", hairColor: "Blonde", facialHair: false, imageUrl: getFIFAImage(177003) },
    { id: 8, name: "Rodrygo", position: "Forward", club: "Real Madrid", nationality: "Brazil", hairColor: "Black", facialHair: false, imageUrl: getFIFAImage(241640) },
    // Barcelona
    { id: 9, name: "Lamine Yamal", position: "Forward", club: "Barcelona", nationality: "Spain", hairColor: "Black", facialHair: false, imageUrl: getFIFAImage(277643) },
    { id: 10, name: "Pedri", position: "Midfielder", club: "Barcelona", nationality: "Spain", hairColor: "Brown", facialHair: false, imageUrl: getFIFAImage(251854) },
    { id: 11, name: "Robert Lewandowski", position: "Forward", club: "Barcelona", nationality: "Poland", hairColor: "Brown", facialHair: false, imageUrl: getFIFAImage(188545) },
    { id: 12, name: "Gavi", position: "Midfielder", club: "Barcelona", nationality: "Spain", hairColor: "Brown", facialHair: false, imageUrl: getFIFAImage(269188) },
    { id: 13, name: "Raphinha", position: "Forward", club: "Barcelona", nationality: "Brazil", hairColor: "Brown", facialHair: true, imageUrl: getFIFAImage(231048) },
    { id: 14, name: "Jules Kounde", position: "Defender", club: "Barcelona", nationality: "France", hairColor: "Black", facialHair: false, imageUrl: getFIFAImage(239817) },
    { id: 15, name: "Frenkie de Jong", position: "Midfielder", club: "Barcelona", nationality: "Netherlands", hairColor: "Blonde", facialHair: false, imageUrl: getFIFAImage(234213) },
    { id: 16, name: "Marc-Andre ter Stegen", position: "Goalkeeper", club: "Barcelona", nationality: "Germany", hairColor: "Brown", facialHair: true, imageUrl: getFIFAImage(192448) },
    // Atletico Madrid
    { id: 17, name: "Antoine Griezmann", position: "Forward", club: "Atletico Madrid", nationality: "France", hairColor: "Brown", facialHair: true, imageUrl: getFIFAImage(194765) },
    { id: 18, name: "Alvaro Morata", position: "Forward", club: "Atletico Madrid", nationality: "Spain", hairColor: "Brown", facialHair: true, imageUrl: getFIFAImage(205653) },
    { id: 19, name: "Jan Oblak", position: "Goalkeeper", club: "Atletico Madrid", nationality: "Slovenia", hairColor: "Brown", facialHair: true, imageUrl: getFIFAImage(200389) },
    { id: 20, name: "Koke", position: "Midfielder", club: "Atletico Madrid", nationality: "Spain", hairColor: "Brown", facialHair: true, imageUrl: getFIFAImage(193747) },
    // Other La Liga
    { id: 21, name: "Isco", position: "Midfielder", club: "Real Betis", nationality: "Spain", hairColor: "Black", facialHair: true, imageUrl: getFIFAImage(197781) },
    { id: 22, name: "Dani Parejo", position: "Midfielder", club: "Villarreal", nationality: "Spain", hairColor: "Brown", facialHair: true, imageUrl: getFIFAImage(194152) },
    { id: 23, name: "Iago Aspas", position: "Forward", club: "Celta Vigo", nationality: "Spain", hairColor: "Red", facialHair: true, imageUrl: getFIFAImage(189513) },
    { id: 24, name: "Take Kubo", position: "Forward", club: "Real Sociedad", nationality: "Japan", hairColor: "Black", facialHair: false, imageUrl: getFIFAImage(239053) },
  ]
};

// ============================================
// CHAMPIONS LEAGUE LEGENDS SET
// ============================================
export const legendsSet: PlayerSet = {
  id: 'legends',
  name: 'Legends',
  description: 'Champions League all-time greats',
  icon: '👑',
  color: '#0d1f4c',
  players: [
    { id: 1, name: "Cristiano Ronaldo", position: "Forward", club: "Al-Nassr", nationality: "Portugal", hairColor: "Brown", facialHair: false, imageUrl: getFIFAImage(20801) },
    { id: 2, name: "Lionel Messi", position: "Forward", club: "Inter Miami", nationality: "Argentina", hairColor: "Brown", facialHair: true, imageUrl: getFIFAImage(158023) },
    { id: 3, name: "Neymar Jr", position: "Forward", club: "Al-Hilal", nationality: "Brazil", hairColor: "Brown", facialHair: true, imageUrl: getFIFAImage(190871) },
    { id: 4, name: "Zlatan Ibrahimovic", position: "Forward", club: "Retired", nationality: "Sweden", hairColor: "Brown", facialHair: true, imageUrl: getFIFA23Image(41236) },
    { id: 5, name: "Sergio Ramos", position: "Defender", club: "Sevilla", nationality: "Spain", hairColor: "Brown", facialHair: true, imageUrl: getFIFAImage(155862) },
    { id: 6, name: "Toni Kroos", position: "Midfielder", club: "Retired", nationality: "Germany", hairColor: "Brown", facialHair: false, imageUrl: getFIFA23Image(182521) },
    { id: 7, name: "Karim Benzema", position: "Forward", club: "Al-Ittihad", nationality: "France", hairColor: "Black", facialHair: true, imageUrl: getFIFAImage(165153) },
    { id: 8, name: "Manuel Neuer", position: "Goalkeeper", club: "Bayern Munich", nationality: "Germany", hairColor: "Blonde", facialHair: false, imageUrl: getFIFAImage(167495) },
    { id: 9, name: "Andres Iniesta", position: "Midfielder", club: "Retired", nationality: "Spain", hairColor: "Bald", facialHair: false, imageUrl: getFIFA23Image(41418) },
    { id: 10, name: "Xavi Hernandez", position: "Midfielder", club: "Retired", nationality: "Spain", hairColor: "Black", facialHair: true, imageUrl: getFIFA23Image(42487) },
    { id: 11, name: "Gerard Pique", position: "Defender", club: "Retired", nationality: "Spain", hairColor: "Brown", facialHair: true, imageUrl: getFIFA23Image(152729) },
    { id: 12, name: "Thomas Muller", position: "Forward", club: "Bayern Munich", nationality: "Germany", hairColor: "Brown", facialHair: false, imageUrl: getFIFAImage(189596) },
    { id: 13, name: "Robert Lewandowski", position: "Forward", club: "Barcelona", nationality: "Poland", hairColor: "Brown", facialHair: false, imageUrl: getFIFAImage(188545) },
    { id: 14, name: "Marco Reus", position: "Midfielder", club: "LA Galaxy", nationality: "Germany", hairColor: "Blonde", facialHair: false, imageUrl: getFIFAImage(188350) },
    { id: 15, name: "Gareth Bale", position: "Forward", club: "Retired", nationality: "Wales", hairColor: "Brown", facialHair: true, imageUrl: getFIFA23Image(173731) },
    { id: 16, name: "Eden Hazard", position: "Forward", club: "Retired", nationality: "Belgium", hairColor: "Brown", facialHair: false, imageUrl: getFIFA23Image(183277) },
    { id: 17, name: "Sergio Busquets", position: "Midfielder", club: "Inter Miami", nationality: "Spain", hairColor: "Black", facialHair: true, imageUrl: getFIFAImage(184243) },
    { id: 18, name: "Marcelo", position: "Defender", club: "Retired", nationality: "Brazil", hairColor: "Black", facialHair: true, imageUrl: getFIFA23Image(176676) },
    { id: 19, name: "Dani Alves", position: "Defender", club: "Retired", nationality: "Brazil", hairColor: "Brown", facialHair: true, imageUrl: getFIFA23Image(124898) },
    { id: 20, name: "David Silva", position: "Midfielder", club: "Retired", nationality: "Spain", hairColor: "Gray", facialHair: true, imageUrl: getFIFA23Image(168542) },
    { id: 21, name: "Giorgio Chiellini", position: "Defender", club: "Retired", nationality: "Italy", hairColor: "Black", facialHair: true, imageUrl: getFIFA23Image(138412) },
    { id: 22, name: "Gianluigi Buffon", position: "Goalkeeper", club: "Retired", nationality: "Italy", hairColor: "Gray", facialHair: false, imageUrl: getFIFA23Image(1179) },
    { id: 23, name: "Arjen Robben", position: "Forward", club: "Retired", nationality: "Netherlands", hairColor: "Bald", facialHair: false, imageUrl: getFIFA23Image(9014) },
    { id: 24, name: "Philipp Lahm", position: "Defender", club: "Retired", nationality: "Germany", hairColor: "Brown", facialHair: false, imageUrl: getFIFA23Image(46444) },
  ]
};

// ============================================
// WORLD CUP 2022 SET
// ============================================
export const worldCup2022Set: PlayerSet = {
  id: 'world-cup-2022',
  name: 'World Cup 2022',
  description: 'Stars from Qatar 2022',
  icon: '🏆',
  color: '#8a1538',
  players: [
    // Argentina (Winners)
    { id: 1, name: "Lionel Messi", position: "Forward", club: "Inter Miami", nationality: "Argentina", hairColor: "Brown", facialHair: true, imageUrl: getFIFAImage(158023) },
    { id: 2, name: "Julian Alvarez", position: "Forward", club: "Atletico Madrid", nationality: "Argentina", hairColor: "Brown", facialHair: false, imageUrl: getFIFAImage(248566) },
    { id: 3, name: "Emi Martinez", position: "Goalkeeper", club: "Aston Villa", nationality: "Argentina", hairColor: "Brown", facialHair: true, imageUrl: getFIFAImage(215698) },
    { id: 4, name: "Angel Di Maria", position: "Forward", club: "Benfica", nationality: "Argentina", hairColor: "Brown", facialHair: false, imageUrl: getFIFAImage(183898) },
    // France (Runners-up)
    { id: 5, name: "Kylian Mbappe", position: "Forward", club: "Real Madrid", nationality: "France", hairColor: "Black", facialHair: false, imageUrl: getFIFAImage(231747) },
    { id: 6, name: "Olivier Giroud", position: "Forward", club: "AC Milan", nationality: "France", hairColor: "Brown", facialHair: true, imageUrl: getFIFAImage(179844) },
    { id: 7, name: "Antoine Griezmann", position: "Forward", club: "Atletico Madrid", nationality: "France", hairColor: "Brown", facialHair: true, imageUrl: getFIFAImage(194765) },
    { id: 8, name: "Hugo Lloris", position: "Goalkeeper", club: "Retired", nationality: "France", hairColor: "Brown", facialHair: true, imageUrl: getFIFA23Image(167948) },
    // Brazil
    { id: 9, name: "Neymar Jr", position: "Forward", club: "Al-Hilal", nationality: "Brazil", hairColor: "Brown", facialHair: true, imageUrl: getFIFAImage(190871) },
    { id: 10, name: "Richarlison", position: "Forward", club: "Tottenham", nationality: "Brazil", hairColor: "Black", facialHair: false, imageUrl: getFIFAImage(227535) },
    { id: 11, name: "Vinicius Jr", position: "Forward", club: "Real Madrid", nationality: "Brazil", hairColor: "Black", facialHair: false, imageUrl: getFIFAImage(238794) },
    { id: 12, name: "Casemiro", position: "Midfielder", club: "Manchester United", nationality: "Brazil", hairColor: "Brown", facialHair: true, imageUrl: getFIFAImage(200145) },
    // Morocco
    { id: 13, name: "Achraf Hakimi", position: "Defender", club: "PSG", nationality: "Morocco", hairColor: "Black", facialHair: true, imageUrl: getFIFAImage(235212) },
    { id: 14, name: "Youssef En-Nesyri", position: "Forward", club: "Fenerbahce", nationality: "Morocco", hairColor: "Black", facialHair: false, imageUrl: getFIFAImage(231379) },
    { id: 15, name: "Sofyan Amrabat", position: "Midfielder", club: "Fenerbahce", nationality: "Morocco", hairColor: "Black", facialHair: true, imageUrl: getFIFAImage(225902) },
    // England
    { id: 16, name: "Harry Kane", position: "Forward", club: "Bayern Munich", nationality: "England", hairColor: "Brown", facialHair: true, imageUrl: getFIFAImage(202126) },
    { id: 17, name: "Bukayo Saka", position: "Forward", club: "Arsenal", nationality: "England", hairColor: "Black", facialHair: false, imageUrl: getFIFAImage(246669) },
    { id: 18, name: "Jude Bellingham", position: "Midfielder", club: "Real Madrid", nationality: "England", hairColor: "Black", facialHair: false, imageUrl: getFIFAImage(252371) },
    // Portugal
    { id: 19, name: "Cristiano Ronaldo", position: "Forward", club: "Al-Nassr", nationality: "Portugal", hairColor: "Brown", facialHair: false, imageUrl: getFIFAImage(20801) },
    { id: 20, name: "Bruno Fernandes", position: "Midfielder", club: "Manchester United", nationality: "Portugal", hairColor: "Brown", facialHair: true, imageUrl: getFIFAImage(212198) },
    // Germany
    { id: 21, name: "Jamal Musiala", position: "Midfielder", club: "Bayern Munich", nationality: "Germany", hairColor: "Black", facialHair: false, imageUrl: getFIFAImage(256790) },
    // Spain
    { id: 22, name: "Pedri", position: "Midfielder", club: "Barcelona", nationality: "Spain", hairColor: "Brown", facialHair: false, imageUrl: getFIFAImage(251854) },
    // Netherlands
    { id: 23, name: "Cody Gakpo", position: "Forward", club: "Liverpool", nationality: "Netherlands", hairColor: "Black", facialHair: false, imageUrl: getFIFAImage(246620) },
    // Croatia
    { id: 24, name: "Luka Modric", position: "Midfielder", club: "Real Madrid", nationality: "Croatia", hairColor: "Blonde", facialHair: false, imageUrl: getFIFAImage(177003) },
  ]
};

// All pre-built sets
export const builtInSets: PlayerSet[] = [
  premierLeagueSet,
  laLigaSet,
  legendsSet,
  worldCup2022Set,
];

// Get all unique attributes for filter questions
export function getUniqueAttributes(players: Player[]) {
  return {
    positions: [...new Set(players.map(p => p.position))],
    clubs: [...new Set(players.map(p => p.club))],
    nationalities: [...new Set(players.map(p => p.nationality))],
    hairColors: [...new Set(players.map(p => p.hairColor))],
  };
}

// Question categories for the game
export const questionCategories = [
  { key: 'position', label: 'Position', type: 'select' as const },
  { key: 'club', label: 'Club', type: 'select' as const },
  { key: 'nationality', label: 'Nationality', type: 'select' as const },
  { key: 'hairColor', label: 'Hair Color', type: 'select' as const },
  { key: 'facialHair', label: 'Facial Hair', type: 'boolean' as const },
];
