// Higher or Lower game data - Multiple stat types
export type StatType =
  | 'instagram'
  | 'market_value'
  | 'goals'
  | 'trophies'
  | 'caps'
  | 'weekly_wage'
  | 'assists'
  | 'age';

export interface PlayerStat {
  type: StatType;
  value: number;
  display: string;
  unit: string;
}

export interface HigherLowerPlayer {
  id: string;
  name: string;
  team: string;
  imageUrl: string;
  stats: PlayerStat[];
}

// Stat display helpers
export const statLabels: Record<StatType, string> = {
  instagram: 'Instagram Followers',
  market_value: 'Market Value',
  goals: 'Career Goals',
  trophies: 'Major Trophies',
  caps: 'International Caps',
  weekly_wage: 'Weekly Wage',
  assists: 'Career Assists',
  age: 'Age',
};

export const statUnits: Record<StatType, string> = {
  instagram: 'million followers',
  market_value: 'million euros',
  goals: 'goals',
  trophies: 'trophies',
  caps: 'caps',
  weekly_wage: 'per week',
  assists: 'assists',
  age: 'years old',
};

export const higherLowerPlayers: HigherLowerPlayer[] = [
  {
    id: 'ronaldo',
    name: 'Cristiano Ronaldo',
    team: 'Al-Nassr',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/20801.png',
    stats: [
      { type: 'instagram', value: 639, display: '639M', unit: 'million followers' },
      { type: 'goals', value: 899, display: '899', unit: 'career goals' },
      { type: 'trophies', value: 34, display: '34', unit: 'major trophies' },
      { type: 'caps', value: 212, display: '212', unit: 'Portugal caps' },
      { type: 'weekly_wage', value: 3200000, display: '£3.2M', unit: 'per week' },
      { type: 'age', value: 39, display: '39', unit: 'years old' },
    ]
  },
  {
    id: 'messi',
    name: 'Lionel Messi',
    team: 'Inter Miami',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/158023.png',
    stats: [
      { type: 'instagram', value: 504, display: '504M', unit: 'million followers' },
      { type: 'goals', value: 838, display: '838', unit: 'career goals' },
      { type: 'trophies', value: 44, display: '44', unit: 'major trophies' },
      { type: 'caps', value: 187, display: '187', unit: 'Argentina caps' },
      { type: 'assists', value: 374, display: '374', unit: 'career assists' },
      { type: 'age', value: 37, display: '37', unit: 'years old' },
    ]
  },
  {
    id: 'neymar',
    name: 'Neymar Jr',
    team: 'Al-Hilal',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/190871.png',
    stats: [
      { type: 'instagram', value: 225, display: '225M', unit: 'million followers' },
      { type: 'goals', value: 439, display: '439', unit: 'career goals' },
      { type: 'trophies', value: 26, display: '26', unit: 'major trophies' },
      { type: 'caps', value: 128, display: '128', unit: 'Brazil caps' },
      { type: 'market_value', value: 30, display: '€30M', unit: 'market value' },
      { type: 'age', value: 32, display: '32', unit: 'years old' },
    ]
  },
  {
    id: 'mbappe',
    name: 'Kylian Mbappé',
    team: 'Real Madrid',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/231747.png',
    stats: [
      { type: 'instagram', value: 118, display: '118M', unit: 'million followers' },
      { type: 'goals', value: 297, display: '297', unit: 'career goals' },
      { type: 'trophies', value: 17, display: '17', unit: 'major trophies' },
      { type: 'caps', value: 86, display: '86', unit: 'France caps' },
      { type: 'market_value', value: 180, display: '€180M', unit: 'market value' },
      { type: 'weekly_wage', value: 1250000, display: '£1.25M', unit: 'per week' },
      { type: 'age', value: 26, display: '26', unit: 'years old' },
    ]
  },
  {
    id: 'vinicius',
    name: 'Vinicius Jr',
    team: 'Real Madrid',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/238794.png',
    stats: [
      { type: 'instagram', value: 56, display: '56M', unit: 'million followers' },
      { type: 'goals', value: 108, display: '108', unit: 'career goals' },
      { type: 'trophies', value: 12, display: '12', unit: 'major trophies' },
      { type: 'caps', value: 37, display: '37', unit: 'Brazil caps' },
      { type: 'market_value', value: 200, display: '€200M', unit: 'market value' },
      { type: 'age', value: 24, display: '24', unit: 'years old' },
    ]
  },
  {
    id: 'haaland',
    name: 'Erling Haaland',
    team: 'Manchester City',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/239085.png',
    stats: [
      { type: 'instagram', value: 42, display: '42M', unit: 'million followers' },
      { type: 'goals', value: 267, display: '267', unit: 'career goals' },
      { type: 'trophies', value: 10, display: '10', unit: 'major trophies' },
      { type: 'caps', value: 35, display: '35', unit: 'Norway caps' },
      { type: 'market_value', value: 200, display: '€200M', unit: 'market value' },
      { type: 'weekly_wage', value: 375000, display: '£375K', unit: 'per week' },
      { type: 'age', value: 24, display: '24', unit: 'years old' },
    ]
  },
  {
    id: 'bellingham',
    name: 'Jude Bellingham',
    team: 'Real Madrid',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/252371.png',
    stats: [
      { type: 'instagram', value: 32, display: '32M', unit: 'million followers' },
      { type: 'goals', value: 68, display: '68', unit: 'career goals' },
      { type: 'trophies', value: 4, display: '4', unit: 'major trophies' },
      { type: 'caps', value: 42, display: '42', unit: 'England caps' },
      { type: 'market_value', value: 180, display: '€180M', unit: 'market value' },
      { type: 'age', value: 21, display: '21', unit: 'years old' },
    ]
  },
  {
    id: 'salah',
    name: 'Mohamed Salah',
    team: 'Liverpool',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/209331.png',
    stats: [
      { type: 'instagram', value: 65, display: '65M', unit: 'million followers' },
      { type: 'goals', value: 316, display: '316', unit: 'career goals' },
      { type: 'trophies', value: 12, display: '12', unit: 'major trophies' },
      { type: 'caps', value: 102, display: '102', unit: 'Egypt caps' },
      { type: 'market_value', value: 80, display: '€80M', unit: 'market value' },
      { type: 'assists', value: 163, display: '163', unit: 'career assists' },
      { type: 'age', value: 32, display: '32', unit: 'years old' },
    ]
  },
  {
    id: 'benzema',
    name: 'Karim Benzema',
    team: 'Al-Ittihad',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/165153.png',
    stats: [
      { type: 'instagram', value: 72, display: '72M', unit: 'million followers' },
      { type: 'goals', value: 452, display: '452', unit: 'career goals' },
      { type: 'trophies', value: 26, display: '26', unit: 'major trophies' },
      { type: 'caps', value: 97, display: '97', unit: 'France caps' },
      { type: 'age', value: 36, display: '36', unit: 'years old' },
    ]
  },
  {
    id: 'debruyne',
    name: 'Kevin De Bruyne',
    team: 'Manchester City',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/192985.png',
    stats: [
      { type: 'instagram', value: 20, display: '20M', unit: 'million followers' },
      { type: 'goals', value: 118, display: '118', unit: 'career goals' },
      { type: 'assists', value: 218, display: '218', unit: 'career assists' },
      { type: 'trophies', value: 17, display: '17', unit: 'major trophies' },
      { type: 'caps', value: 102, display: '102', unit: 'Belgium caps' },
      { type: 'market_value', value: 75, display: '€75M', unit: 'market value' },
      { type: 'weekly_wage', value: 400000, display: '£400K', unit: 'per week' },
      { type: 'age', value: 33, display: '33', unit: 'years old' },
    ]
  },
  {
    id: 'lewandowski',
    name: 'Robert Lewandowski',
    team: 'Barcelona',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/188545.png',
    stats: [
      { type: 'instagram', value: 34, display: '34M', unit: 'million followers' },
      { type: 'goals', value: 653, display: '653', unit: 'career goals' },
      { type: 'trophies', value: 23, display: '23', unit: 'major trophies' },
      { type: 'caps', value: 154, display: '154', unit: 'Poland caps' },
      { type: 'market_value', value: 15, display: '€15M', unit: 'market value' },
      { type: 'age', value: 36, display: '36', unit: 'years old' },
    ]
  },
  {
    id: 'kane',
    name: 'Harry Kane',
    team: 'Bayern Munich',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/202126.png',
    stats: [
      { type: 'instagram', value: 16, display: '16M', unit: 'million followers' },
      { type: 'goals', value: 355, display: '355', unit: 'career goals' },
      { type: 'trophies', value: 1, display: '1', unit: 'major trophies' },
      { type: 'caps', value: 98, display: '98', unit: 'England caps' },
      { type: 'market_value', value: 100, display: '€100M', unit: 'market value' },
      { type: 'weekly_wage', value: 400000, display: '£400K', unit: 'per week' },
      { type: 'age', value: 31, display: '31', unit: 'years old' },
    ]
  },
  {
    id: 'pedri',
    name: 'Pedri',
    team: 'Barcelona',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/260746.png',
    stats: [
      { type: 'instagram', value: 18, display: '18M', unit: 'million followers' },
      { type: 'goals', value: 22, display: '22', unit: 'career goals' },
      { type: 'trophies', value: 5, display: '5', unit: 'major trophies' },
      { type: 'caps', value: 30, display: '30', unit: 'Spain caps' },
      { type: 'market_value', value: 100, display: '€100M', unit: 'market value' },
      { type: 'age', value: 22, display: '22', unit: 'years old' },
    ]
  },
  {
    id: 'modric',
    name: 'Luka Modrić',
    team: 'Real Madrid',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/177003.png',
    stats: [
      { type: 'instagram', value: 24, display: '24M', unit: 'million followers' },
      { type: 'goals', value: 78, display: '78', unit: 'career goals' },
      { type: 'trophies', value: 27, display: '27', unit: 'major trophies' },
      { type: 'caps', value: 178, display: '178', unit: 'Croatia caps' },
      { type: 'market_value', value: 4, display: '€4M', unit: 'market value' },
      { type: 'age', value: 39, display: '39', unit: 'years old' },
    ]
  },
  {
    id: 'kroos',
    name: 'Toni Kroos',
    team: 'Retired',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/182521.png',
    stats: [
      { type: 'instagram', value: 46, display: '46M', unit: 'million followers' },
      { type: 'goals', value: 74, display: '74', unit: 'career goals' },
      { type: 'trophies', value: 32, display: '32', unit: 'major trophies' },
      { type: 'caps', value: 114, display: '114', unit: 'Germany caps' },
      { type: 'assists', value: 145, display: '145', unit: 'career assists' },
      { type: 'age', value: 34, display: '34', unit: 'years old' },
    ]
  },
  {
    id: 'rashford',
    name: 'Marcus Rashford',
    team: 'Manchester United',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/231677.png',
    stats: [
      { type: 'instagram', value: 38, display: '38M', unit: 'million followers' },
      { type: 'goals', value: 138, display: '138', unit: 'career goals' },
      { type: 'trophies', value: 4, display: '4', unit: 'major trophies' },
      { type: 'caps', value: 60, display: '60', unit: 'England caps' },
      { type: 'market_value', value: 50, display: '€50M', unit: 'market value' },
      { type: 'weekly_wage', value: 300000, display: '£300K', unit: 'per week' },
      { type: 'age', value: 27, display: '27', unit: 'years old' },
    ]
  },
  {
    id: 'pogba',
    name: 'Paul Pogba',
    team: 'Free Agent',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/195864.png',
    stats: [
      { type: 'instagram', value: 61, display: '61M', unit: 'million followers' },
      { type: 'goals', value: 62, display: '62', unit: 'career goals' },
      { type: 'trophies', value: 11, display: '11', unit: 'major trophies' },
      { type: 'caps', value: 91, display: '91', unit: 'France caps' },
      { type: 'age', value: 31, display: '31', unit: 'years old' },
    ]
  },
  {
    id: 'griezmann',
    name: 'Antoine Griezmann',
    team: 'Atlético Madrid',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/194765.png',
    stats: [
      { type: 'instagram', value: 44, display: '44M', unit: 'million followers' },
      { type: 'goals', value: 281, display: '281', unit: 'career goals' },
      { type: 'trophies', value: 8, display: '8', unit: 'major trophies' },
      { type: 'caps', value: 137, display: '137', unit: 'France caps' },
      { type: 'market_value', value: 25, display: '€25M', unit: 'market value' },
      { type: 'age', value: 33, display: '33', unit: 'years old' },
    ]
  },
  {
    id: 'dybala',
    name: 'Paulo Dybala',
    team: 'Roma',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/211110.png',
    stats: [
      { type: 'instagram', value: 52, display: '52M', unit: 'million followers' },
      { type: 'goals', value: 152, display: '152', unit: 'career goals' },
      { type: 'trophies', value: 8, display: '8', unit: 'major trophies' },
      { type: 'caps', value: 35, display: '35', unit: 'Argentina caps' },
      { type: 'market_value', value: 25, display: '€25M', unit: 'market value' },
      { type: 'age', value: 31, display: '31', unit: 'years old' },
    ]
  },
  {
    id: 'yamal',
    name: 'Lamine Yamal',
    team: 'Barcelona',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/277572.png',
    stats: [
      { type: 'instagram', value: 26, display: '26M', unit: 'million followers' },
      { type: 'goals', value: 14, display: '14', unit: 'career goals' },
      { type: 'trophies', value: 3, display: '3', unit: 'major trophies' },
      { type: 'caps', value: 18, display: '18', unit: 'Spain caps' },
      { type: 'market_value', value: 180, display: '€180M', unit: 'market value' },
      { type: 'age', value: 17, display: '17', unit: 'years old' },
    ]
  },
  {
    id: 'saka',
    name: 'Bukayo Saka',
    team: 'Arsenal',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/246669.png',
    stats: [
      { type: 'instagram', value: 8, display: '8M', unit: 'million followers' },
      { type: 'goals', value: 67, display: '67', unit: 'career goals' },
      { type: 'trophies', value: 1, display: '1', unit: 'major trophies' },
      { type: 'caps', value: 44, display: '44', unit: 'England caps' },
      { type: 'market_value', value: 140, display: '€140M', unit: 'market value' },
      { type: 'age', value: 23, display: '23', unit: 'years old' },
    ]
  },
  {
    id: 'foden',
    name: 'Phil Foden',
    team: 'Manchester City',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/237692.png',
    stats: [
      { type: 'instagram', value: 12, display: '12M', unit: 'million followers' },
      { type: 'goals', value: 85, display: '85', unit: 'career goals' },
      { type: 'trophies', value: 17, display: '17', unit: 'major trophies' },
      { type: 'caps', value: 42, display: '42', unit: 'England caps' },
      { type: 'market_value', value: 150, display: '€150M', unit: 'market value' },
      { type: 'age', value: 24, display: '24', unit: 'years old' },
    ]
  },
  {
    id: 'bruno',
    name: 'Bruno Fernandes',
    team: 'Manchester United',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/212198.png',
    stats: [
      { type: 'instagram', value: 14, display: '14M', unit: 'million followers' },
      { type: 'goals', value: 138, display: '138', unit: 'career goals' },
      { type: 'assists', value: 122, display: '122', unit: 'career assists' },
      { type: 'trophies', value: 3, display: '3', unit: 'major trophies' },
      { type: 'caps', value: 71, display: '71', unit: 'Portugal caps' },
      { type: 'market_value', value: 70, display: '€70M', unit: 'market value' },
      { type: 'age', value: 30, display: '30', unit: 'years old' },
    ]
  },
  {
    id: 'vandijk',
    name: 'Virgil van Dijk',
    team: 'Liverpool',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/203376.png',
    stats: [
      { type: 'instagram', value: 17, display: '17M', unit: 'million followers' },
      { type: 'goals', value: 47, display: '47', unit: 'career goals' },
      { type: 'trophies', value: 8, display: '8', unit: 'major trophies' },
      { type: 'caps', value: 65, display: '65', unit: 'Netherlands caps' },
      { type: 'market_value', value: 35, display: '€35M', unit: 'market value' },
      { type: 'age', value: 33, display: '33', unit: 'years old' },
    ]
  },
  {
    id: 'alisson',
    name: 'Alisson Becker',
    team: 'Liverpool',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/212831.png',
    stats: [
      { type: 'instagram', value: 16, display: '16M', unit: 'million followers' },
      { type: 'goals', value: 1, display: '1', unit: 'career goals' },
      { type: 'trophies', value: 10, display: '10', unit: 'major trophies' },
      { type: 'caps', value: 73, display: '73', unit: 'Brazil caps' },
      { type: 'market_value', value: 35, display: '€35M', unit: 'market value' },
      { type: 'age', value: 32, display: '32', unit: 'years old' },
    ]
  },
  {
    id: 'courtois',
    name: 'Thibaut Courtois',
    team: 'Real Madrid',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/192119.png',
    stats: [
      { type: 'instagram', value: 19, display: '19M', unit: 'million followers' },
      { type: 'trophies', value: 13, display: '13', unit: 'major trophies' },
      { type: 'caps', value: 102, display: '102', unit: 'Belgium caps' },
      { type: 'market_value', value: 35, display: '€35M', unit: 'market value' },
      { type: 'age', value: 32, display: '32', unit: 'years old' },
    ]
  },
  {
    id: 'rodri',
    name: 'Rodri',
    team: 'Manchester City',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/231866.png',
    stats: [
      { type: 'instagram', value: 5, display: '5M', unit: 'million followers' },
      { type: 'goals', value: 44, display: '44', unit: 'career goals' },
      { type: 'trophies', value: 14, display: '14', unit: 'major trophies' },
      { type: 'caps', value: 63, display: '63', unit: 'Spain caps' },
      { type: 'market_value', value: 120, display: '€120M', unit: 'market value' },
      { type: 'age', value: 28, display: '28', unit: 'years old' },
    ]
  },
  {
    id: 'silva',
    name: 'Bernardo Silva',
    team: 'Manchester City',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/221697.png',
    stats: [
      { type: 'instagram', value: 8, display: '8M', unit: 'million followers' },
      { type: 'goals', value: 78, display: '78', unit: 'career goals' },
      { type: 'assists', value: 97, display: '97', unit: 'career assists' },
      { type: 'trophies', value: 16, display: '16', unit: 'major trophies' },
      { type: 'caps', value: 94, display: '94', unit: 'Portugal caps' },
      { type: 'market_value', value: 80, display: '€80M', unit: 'market value' },
      { type: 'age', value: 30, display: '30', unit: 'years old' },
    ]
  },
  {
    id: 'osimhen',
    name: 'Victor Osimhen',
    team: 'Galatasaray',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/232419.png',
    stats: [
      { type: 'instagram', value: 7, display: '7M', unit: 'million followers' },
      { type: 'goals', value: 123, display: '123', unit: 'career goals' },
      { type: 'trophies', value: 2, display: '2', unit: 'major trophies' },
      { type: 'caps', value: 35, display: '35', unit: 'Nigeria caps' },
      { type: 'market_value', value: 75, display: '€75M', unit: 'market value' },
      { type: 'age', value: 26, display: '26', unit: 'years old' },
    ]
  },
  {
    id: 'rice',
    name: 'Declan Rice',
    team: 'Arsenal',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/234378.png',
    stats: [
      { type: 'instagram', value: 3, display: '3M', unit: 'million followers' },
      { type: 'goals', value: 22, display: '22', unit: 'career goals' },
      { type: 'trophies', value: 1, display: '1', unit: 'major trophies' },
      { type: 'caps', value: 57, display: '57', unit: 'England caps' },
      { type: 'market_value', value: 130, display: '€130M', unit: 'market value' },
      { type: 'age', value: 26, display: '26', unit: 'years old' },
    ]
  },
];

// Get a random stat type that both players have
export function getRandomSharedStat(player1: HigherLowerPlayer, player2: HigherLowerPlayer): StatType {
  const player1Types = player1.stats.map(s => s.type);
  const player2Types = player2.stats.map(s => s.type);
  const sharedTypes = player1Types.filter(t => player2Types.includes(t));
  return sharedTypes[Math.floor(Math.random() * sharedTypes.length)];
}

// Get player's stat value for a given type
export function getPlayerStat(player: HigherLowerPlayer, statType: StatType): PlayerStat | undefined {
  return player.stats.find(s => s.type === statType);
}

// Utility to get random players that aren't the same
export function getRandomPlayers(exclude?: string[]): [HigherLowerPlayer, HigherLowerPlayer] {
  const available = higherLowerPlayers.filter(p => !exclude?.includes(p.id));
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return [shuffled[0], shuffled[1]];
}

// Get next player different from current ones
export function getNextPlayer(currentIds: string[]): HigherLowerPlayer {
  const available = higherLowerPlayers.filter(p => !currentIds.includes(p.id));
  if (available.length === 0) {
    // Reset if we've used all players
    return higherLowerPlayers[Math.floor(Math.random() * higherLowerPlayers.length)];
  }
  return available[Math.floor(Math.random() * available.length)];
}
