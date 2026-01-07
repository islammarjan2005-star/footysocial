// Blind Ranking game data - ~50 players with multiple rankable stats

export type RankingCategory =
  | 'goals'
  | 'assists'
  | 'trophies'
  | 'market_value'
  | 'caps'
  | 'instagram'
  | 'ballon_dor_rank';

export interface BlindRankingPlayer {
  id: string;
  name: string;
  imageUrl: string;
  stats: Record<RankingCategory, number>;
}

export const categoryLabels: Record<RankingCategory, string> = {
  goals: 'Career Goals',
  assists: 'Career Assists',
  trophies: 'Major Trophies',
  market_value: 'Market Value (€M)',
  caps: 'International Caps',
  instagram: 'Instagram Followers (M)',
  ballon_dor_rank: '2024 Ballon d\'Or Ranking',
};

export const categoryDescriptions: Record<RankingCategory, string> = {
  goals: 'Rank by total career goals scored',
  assists: 'Rank by total career assists',
  trophies: 'Rank by major trophies won',
  market_value: 'Rank by current market value',
  caps: 'Rank by international appearances',
  instagram: 'Rank by Instagram follower count',
  ballon_dor_rank: 'Rank by 2024 Ballon d\'Or position',
};

// Pool of ~50 players with various stats
export const blindRankingPlayers: BlindRankingPlayer[] = [
  {
    id: 'ronaldo',
    name: 'Cristiano Ronaldo',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/20801.png',
    stats: { goals: 899, assists: 233, trophies: 34, market_value: 15, caps: 212, instagram: 639, ballon_dor_rank: 0 }
  },
  {
    id: 'messi',
    name: 'Lionel Messi',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/158023.png',
    stats: { goals: 838, assists: 374, trophies: 44, market_value: 25, caps: 187, instagram: 504, ballon_dor_rank: 0 }
  },
  {
    id: 'neymar',
    name: 'Neymar Jr',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/190871.png',
    stats: { goals: 439, assists: 278, trophies: 26, market_value: 30, caps: 128, instagram: 225, ballon_dor_rank: 0 }
  },
  {
    id: 'mbappe',
    name: 'Kylian Mbappé',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/231747.png',
    stats: { goals: 297, assists: 120, trophies: 17, market_value: 180, caps: 86, instagram: 118, ballon_dor_rank: 6 }
  },
  {
    id: 'vinicius',
    name: 'Vinicius Jr',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/238794.png',
    stats: { goals: 108, assists: 82, trophies: 12, market_value: 200, caps: 37, instagram: 56, ballon_dor_rank: 2 }
  },
  {
    id: 'haaland',
    name: 'Erling Haaland',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/239085.png',
    stats: { goals: 267, assists: 52, trophies: 10, market_value: 200, caps: 35, instagram: 42, ballon_dor_rank: 3 }
  },
  {
    id: 'bellingham',
    name: 'Jude Bellingham',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/252371.png',
    stats: { goals: 68, assists: 42, trophies: 4, market_value: 180, caps: 42, instagram: 32, ballon_dor_rank: 4 }
  },
  {
    id: 'salah',
    name: 'Mohamed Salah',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/209331.png',
    stats: { goals: 316, assists: 163, trophies: 12, market_value: 80, caps: 102, instagram: 65, ballon_dor_rank: 10 }
  },
  {
    id: 'benzema',
    name: 'Karim Benzema',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/165153.png',
    stats: { goals: 452, assists: 186, trophies: 26, market_value: 8, caps: 97, instagram: 72, ballon_dor_rank: 0 }
  },
  {
    id: 'debruyne',
    name: 'Kevin De Bruyne',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/192985.png',
    stats: { goals: 118, assists: 218, trophies: 17, market_value: 75, caps: 102, instagram: 20, ballon_dor_rank: 8 }
  },
  {
    id: 'lewandowski',
    name: 'Robert Lewandowski',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/188545.png',
    stats: { goals: 653, assists: 149, trophies: 23, market_value: 15, caps: 154, instagram: 34, ballon_dor_rank: 9 }
  },
  {
    id: 'kane',
    name: 'Harry Kane',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/202126.png',
    stats: { goals: 355, assists: 98, trophies: 1, market_value: 100, caps: 98, instagram: 16, ballon_dor_rank: 7 }
  },
  {
    id: 'pedri',
    name: 'Pedri',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/260746.png',
    stats: { goals: 22, assists: 28, trophies: 5, market_value: 100, caps: 30, instagram: 18, ballon_dor_rank: 21 }
  },
  {
    id: 'modric',
    name: 'Luka Modrić',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/177003.png',
    stats: { goals: 78, assists: 145, trophies: 27, market_value: 4, caps: 178, instagram: 24, ballon_dor_rank: 14 }
  },
  {
    id: 'kroos',
    name: 'Toni Kroos',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/182521.png',
    stats: { goals: 74, assists: 145, trophies: 32, market_value: 0, caps: 114, instagram: 46, ballon_dor_rank: 5 }
  },
  {
    id: 'rodri',
    name: 'Rodri',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/231866.png',
    stats: { goals: 44, assists: 42, trophies: 14, market_value: 120, caps: 63, instagram: 5, ballon_dor_rank: 1 }
  },
  {
    id: 'yamal',
    name: 'Lamine Yamal',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/277572.png',
    stats: { goals: 14, assists: 18, trophies: 3, market_value: 180, caps: 18, instagram: 26, ballon_dor_rank: 8 }
  },
  {
    id: 'saka',
    name: 'Bukayo Saka',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/246669.png',
    stats: { goals: 67, assists: 58, trophies: 1, market_value: 140, caps: 44, instagram: 8, ballon_dor_rank: 19 }
  },
  {
    id: 'foden',
    name: 'Phil Foden',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/237692.png',
    stats: { goals: 85, assists: 52, trophies: 17, market_value: 150, caps: 42, instagram: 12, ballon_dor_rank: 11 }
  },
  {
    id: 'bruno',
    name: 'Bruno Fernandes',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/212198.png',
    stats: { goals: 138, assists: 122, trophies: 3, market_value: 70, caps: 71, instagram: 14, ballon_dor_rank: 0 }
  },
  {
    id: 'vandijk',
    name: 'Virgil van Dijk',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/203376.png',
    stats: { goals: 47, assists: 18, trophies: 8, market_value: 35, caps: 65, instagram: 17, ballon_dor_rank: 0 }
  },
  {
    id: 'alisson',
    name: 'Alisson Becker',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/212831.png',
    stats: { goals: 1, assists: 3, trophies: 10, market_value: 35, caps: 73, instagram: 16, ballon_dor_rank: 0 }
  },
  {
    id: 'courtois',
    name: 'Thibaut Courtois',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/192119.png',
    stats: { goals: 0, assists: 0, trophies: 13, market_value: 35, caps: 102, instagram: 19, ballon_dor_rank: 0 }
  },
  {
    id: 'silva',
    name: 'Bernardo Silva',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/221697.png',
    stats: { goals: 78, assists: 97, trophies: 16, market_value: 80, caps: 94, instagram: 8, ballon_dor_rank: 0 }
  },
  {
    id: 'osimhen',
    name: 'Victor Osimhen',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/232419.png',
    stats: { goals: 123, assists: 22, trophies: 2, market_value: 75, caps: 35, instagram: 7, ballon_dor_rank: 0 }
  },
  {
    id: 'rice',
    name: 'Declan Rice',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/234378.png',
    stats: { goals: 22, assists: 28, trophies: 1, market_value: 130, caps: 57, instagram: 3, ballon_dor_rank: 20 }
  },
  {
    id: 'rashford',
    name: 'Marcus Rashford',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/231677.png',
    stats: { goals: 138, assists: 68, trophies: 4, market_value: 50, caps: 60, instagram: 38, ballon_dor_rank: 0 }
  },
  {
    id: 'griezmann',
    name: 'Antoine Griezmann',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/194765.png',
    stats: { goals: 281, assists: 128, trophies: 8, market_value: 25, caps: 137, instagram: 44, ballon_dor_rank: 0 }
  },
  {
    id: 'dybala',
    name: 'Paulo Dybala',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/211110.png',
    stats: { goals: 152, assists: 73, trophies: 8, market_value: 25, caps: 35, instagram: 52, ballon_dor_rank: 15 }
  },
  {
    id: 'son',
    name: 'Son Heung-min',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/200104.png',
    stats: { goals: 235, assists: 112, trophies: 0, market_value: 45, caps: 127, instagram: 15, ballon_dor_rank: 22 }
  },
  {
    id: 'wirtz',
    name: 'Florian Wirtz',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/256528.png',
    stats: { goals: 52, assists: 48, trophies: 2, market_value: 150, caps: 24, instagram: 4, ballon_dor_rank: 12 }
  },
  {
    id: 'gavi',
    name: 'Gavi',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/266706.png',
    stats: { goals: 12, assists: 18, trophies: 4, market_value: 90, caps: 23, instagram: 14, ballon_dor_rank: 0 }
  },
  {
    id: 'martinez',
    name: 'Lautaro Martínez',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/231458.png',
    stats: { goals: 176, assists: 43, trophies: 7, market_value: 110, caps: 62, instagram: 17, ballon_dor_rank: 7 }
  },
  {
    id: 'diaz',
    name: 'Luis Díaz',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/234396.png',
    stats: { goals: 78, assists: 38, trophies: 4, market_value: 75, caps: 56, instagram: 8, ballon_dor_rank: 23 }
  },
  {
    id: 'alexander-arnold',
    name: 'Trent Alexander-Arnold',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/232180.png',
    stats: { goals: 22, assists: 92, trophies: 7, market_value: 70, caps: 31, instagram: 20, ballon_dor_rank: 25 }
  },
  {
    id: 'ruben-dias',
    name: 'Rúben Dias',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/239677.png',
    stats: { goals: 14, assists: 8, trophies: 12, market_value: 75, caps: 52, instagram: 5, ballon_dor_rank: 16 }
  },
  {
    id: 'valverde',
    name: 'Federico Valverde',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/246010.png',
    stats: { goals: 32, assists: 38, trophies: 12, market_value: 120, caps: 62, instagram: 10, ballon_dor_rank: 17 }
  },
  {
    id: 'nunez',
    name: 'Darwin Núñez',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/253072.png',
    stats: { goals: 118, assists: 32, trophies: 2, market_value: 70, caps: 25, instagram: 8, ballon_dor_rank: 0 }
  },
  {
    id: 'hakimi',
    name: 'Achraf Hakimi',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/235212.png',
    stats: { goals: 35, assists: 68, trophies: 9, market_value: 65, caps: 86, instagram: 18, ballon_dor_rank: 0 }
  },
  {
    id: 'gundogan',
    name: 'İlkay Gündoğan',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/186942.png',
    stats: { goals: 98, assists: 88, trophies: 14, market_value: 20, caps: 82, instagram: 8, ballon_dor_rank: 0 }
  },
  {
    id: 'mount',
    name: 'Mason Mount',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/235367.png',
    stats: { goals: 45, assists: 42, trophies: 4, market_value: 35, caps: 38, instagram: 7, ballon_dor_rank: 0 }
  },
  {
    id: 'odegaard',
    name: 'Martin Ødegaard',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/222665.png',
    stats: { goals: 62, assists: 78, trophies: 1, market_value: 100, caps: 64, instagram: 8, ballon_dor_rank: 18 }
  },
  {
    id: 'tchouameni',
    name: 'Aurélien Tchouaméni',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/250087.png',
    stats: { goals: 14, assists: 12, trophies: 4, market_value: 80, caps: 40, instagram: 4, ballon_dor_rank: 0 }
  },
  {
    id: 'sancho',
    name: 'Jadon Sancho',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/232073.png',
    stats: { goals: 65, assists: 72, trophies: 2, market_value: 40, caps: 23, instagram: 10, ballon_dor_rank: 0 }
  },
  {
    id: 'raphinha',
    name: 'Raphinha',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/231778.png',
    stats: { goals: 72, assists: 48, trophies: 2, market_value: 70, caps: 28, instagram: 9, ballon_dor_rank: 26 }
  },
  {
    id: 'cucurella',
    name: 'Marc Cucurella',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/236351.png',
    stats: { goals: 6, assists: 22, trophies: 2, market_value: 45, caps: 22, instagram: 2, ballon_dor_rank: 0 }
  },
  {
    id: 'carvajal',
    name: 'Dani Carvajal',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/197781.png',
    stats: { goals: 22, assists: 58, trophies: 26, market_value: 20, caps: 54, instagram: 11, ballon_dor_rank: 4 }
  },
  {
    id: 'palmer',
    name: 'Cole Palmer',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/260423.png',
    stats: { goals: 42, assists: 28, trophies: 3, market_value: 110, caps: 10, instagram: 5, ballon_dor_rank: 13 }
  },
  {
    id: 'williams',
    name: 'Nico Williams',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/262987.png',
    stats: { goals: 28, assists: 32, trophies: 2, market_value: 70, caps: 25, instagram: 7, ballon_dor_rank: 24 }
  },
  {
    id: 'szczesny',
    name: 'Wojciech Szczęsny',
    imageUrl: 'https://www.fifarosters.com/assets/players/fifa25/faces/186153.png',
    stats: { goals: 0, assists: 0, trophies: 11, market_value: 3, caps: 84, instagram: 4, ballon_dor_rank: 0 }
  },
];

// Get random players for a round
export function getRandomPlayersForRanking(count: number = 10): BlindRankingPlayer[] {
  const shuffled = [...blindRankingPlayers].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// Get valid categories (where players have non-zero/meaningful values)
export function getValidCategories(): RankingCategory[] {
  return ['goals', 'assists', 'trophies', 'market_value', 'caps', 'instagram'];
}

// Get a random category
export function getRandomCategory(): RankingCategory {
  const categories = getValidCategories();
  return categories[Math.floor(Math.random() * categories.length)];
}

// Calculate score based on ranking accuracy
export function calculateScore(
  playerRanking: BlindRankingPlayer[],
  category: RankingCategory
): { score: number; maxScore: number; correctPositions: number; details: { player: BlindRankingPlayer; guessedRank: number; actualRank: number; points: number }[] } {
  // Get the correct ranking (highest to lowest)
  const correctRanking = [...playerRanking].sort((a, b) => b.stats[category] - a.stats[category]);

  let totalScore = 0;
  const maxScore = playerRanking.length * 10; // 10 points max per player
  let correctPositions = 0;

  const details = playerRanking.map((player, guessedIndex) => {
    const actualIndex = correctRanking.findIndex(p => p.id === player.id);
    const difference = Math.abs(guessedIndex - actualIndex);

    // Points: 10 for exact, decreasing by 2 for each position off
    const points = Math.max(0, 10 - (difference * 2));
    totalScore += points;

    if (difference === 0) correctPositions++;

    return {
      player,
      guessedRank: guessedIndex + 1,
      actualRank: actualIndex + 1,
      points
    };
  });

  return { score: totalScore, maxScore, correctPositions, details };
}
