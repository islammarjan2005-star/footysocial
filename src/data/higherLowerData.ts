// Higher or Lower game data - Instagram followers (in millions)
export interface HigherLowerPlayer {
  id: string;
  name: string;
  team: string;
  imageUrl: string;
  followers: number; // Instagram followers in millions
  searchTerm: string; // What we're comparing
}

export const higherLowerPlayers: HigherLowerPlayer[] = [
  {
    id: 'ronaldo',
    name: 'Cristiano Ronaldo',
    team: 'Al-Nassr',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/8198-1694609670.jpg',
    followers: 639,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'messi',
    name: 'Lionel Messi',
    team: 'Inter Miami',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/28003-1710080339.jpg',
    followers: 504,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'neymar',
    name: 'Neymar Jr',
    team: 'Al-Hilal',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/68290-1701443760.jpg',
    followers: 225,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'mbappe',
    name: 'Kylian Mbappé',
    team: 'Real Madrid',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/342229-1682683695.jpg',
    followers: 118,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'vinicius',
    name: 'Vinicius Jr',
    team: 'Real Madrid',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/371998-1697036605.jpg',
    followers: 56,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'haaland',
    name: 'Erling Haaland',
    team: 'Manchester City',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/418560-1696931286.jpg',
    followers: 42,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'bellingham',
    name: 'Jude Bellingham',
    team: 'Real Madrid',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/581678-1693987498.jpg',
    followers: 32,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'salah',
    name: 'Mohamed Salah',
    team: 'Liverpool',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/148455-1717591157.jpg',
    followers: 65,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'benzema',
    name: 'Karim Benzema',
    team: 'Al-Ittihad',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/18922-1695029858.jpg',
    followers: 72,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'debruyne',
    name: 'Kevin De Bruyne',
    team: 'Manchester City',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/88755-1695029646.jpg',
    followers: 20,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'lewandowski',
    name: 'Robert Lewandowski',
    team: 'Barcelona',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/38253-1701097659.jpg',
    followers: 34,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'kane',
    name: 'Harry Kane',
    team: 'Bayern Munich',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/132098-1696510722.jpg',
    followers: 16,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'pedri',
    name: 'Pedri',
    team: 'Barcelona',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/581524-1696931593.jpg',
    followers: 18,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'modric',
    name: 'Luka Modrić',
    team: 'Real Madrid',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/27992-1695029422.jpg',
    followers: 24,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'kroos',
    name: 'Toni Kroos',
    team: 'Retired',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/31909-1695029522.jpg',
    followers: 46,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'rashford',
    name: 'Marcus Rashford',
    team: 'Manchester United',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/258923-1696938849.jpg',
    followers: 38,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'pogba',
    name: 'Paul Pogba',
    team: 'Free Agent',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/122153-1660911757.jpg',
    followers: 61,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'griezmann',
    name: 'Antoine Griezmann',
    team: 'Atlético Madrid',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/125037-1696939338.jpg',
    followers: 44,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'dybala',
    name: 'Paulo Dybala',
    team: 'Roma',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/206050-1694436359.jpg',
    followers: 52,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'yamal',
    name: 'Lamine Yamal',
    team: 'Barcelona',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/936545-1701626225.jpg',
    followers: 26,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'saka',
    name: 'Bukayo Saka',
    team: 'Arsenal',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/433177-1694436260.jpg',
    followers: 8,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'foden',
    name: 'Phil Foden',
    team: 'Manchester City',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/406635-1694436156.jpg',
    followers: 12,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'bruno',
    name: 'Bruno Fernandes',
    team: 'Manchester United',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/240306-1696938771.jpg',
    followers: 14,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'vandijk',
    name: 'Virgil van Dijk',
    team: 'Liverpool',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/139208-1695029906.jpg',
    followers: 17,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'alisson',
    name: 'Alisson Becker',
    team: 'Liverpool',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/105470-1695029983.jpg',
    followers: 16,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'courtois',
    name: 'Thibaut Courtois',
    team: 'Real Madrid',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/108390-1695030142.jpg',
    followers: 19,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'rodri',
    name: 'Rodri',
    team: 'Manchester City',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/357565-1696932258.jpg',
    followers: 5,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'silva',
    name: 'Bernardo Silva',
    team: 'Manchester City',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/241641-1696931850.jpg',
    followers: 8,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'osimhen',
    name: 'Victor Osimhen',
    team: 'Galatasaray',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/401923-1694436464.jpg',
    followers: 7,
    searchTerm: 'Instagram followers'
  },
  {
    id: 'rice',
    name: 'Declan Rice',
    team: 'Arsenal',
    imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/401173-1696931473.jpg',
    followers: 3,
    searchTerm: 'Instagram followers'
  },
];

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
