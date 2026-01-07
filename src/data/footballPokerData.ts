// Football Poker - Cards are real footballers
// Suits = Leagues, Numbers = Shirt Numbers

export type League = 'hearts' | 'diamonds' | 'clubs' | 'spades';

export const leagueNames: Record<League, string> = {
  hearts: 'Premier League',
  diamonds: 'La Liga',
  clubs: 'Serie A',
  spades: 'Bundesliga',
};

export const leagueColors: Record<League, string> = {
  hearts: '#e90052', // PL pink
  diamonds: '#ee8707', // La Liga orange
  clubs: '#008fd7', // Serie A blue
  spades: '#d20515', // Bundesliga red
};

export interface FootballCard {
  value: number; // 2-14 (14 = Ace)
  suit: League;
  player: {
    name: string;
    imageUrl: string;
    shirtNumber: number;
  };
}

// Map of players by league and shirt number
// Using FIFA IDs for images: https://www.fifarosters.com/assets/players/fifa25/faces/{ID}.png
const playersByLeagueAndNumber: Record<League, Record<number, { name: string; fifaId: number }>> = {
  // Premier League (Hearts)
  hearts: {
    2: { name: 'Kyle Walker', fifaId: 188377 },
    3: { name: 'Ben Chilwell', fifaId: 225796 },
    4: { name: 'Declan Rice', fifaId: 234378 },
    5: { name: 'John Stones', fifaId: 203574 },
    6: { name: 'Lisandro Martinez', fifaId: 235243 },
    7: { name: 'Bukayo Saka', fifaId: 246669 },
    8: { name: 'Bruno Fernandes', fifaId: 212198 },
    9: { name: 'Erling Haaland', fifaId: 239085 },
    10: { name: 'Mohamed Salah', fifaId: 209331 },
    11: { name: 'Marcus Rashford', fifaId: 231677 },
    12: { name: 'Kieran Trippier', fifaId: 200867 },
    13: { name: 'Alisson', fifaId: 212831 },
    14: { name: 'Kevin De Bruyne', fifaId: 192985 }, // Ace
  },
  // La Liga (Diamonds)
  diamonds: {
    2: { name: 'Dani Carvajal', fifaId: 197781 },
    3: { name: 'Eder Militao', fifaId: 234213 },
    4: { name: 'David Alaba', fifaId: 197445 },
    5: { name: 'Jude Bellingham', fifaId: 252371 },
    6: { name: 'Nacho', fifaId: 210035 },
    7: { name: 'Vinicius Jr', fifaId: 238794 },
    8: { name: 'Toni Kroos', fifaId: 182521 },
    9: { name: 'Robert Lewandowski', fifaId: 188545 },
    10: { name: 'Luka Modric', fifaId: 177003 },
    11: { name: 'Rodrygo', fifaId: 243812 },
    12: { name: 'Eduardo Camavinga', fifaId: 249091 },
    13: { name: 'Thibaut Courtois', fifaId: 192119 },
    14: { name: 'Kylian Mbappe', fifaId: 231747 }, // Ace
  },
  // Serie A (Clubs)
  clubs: {
    2: { name: 'Denzel Dumfries', fifaId: 226078 },
    3: { name: 'Federico Dimarco', fifaId: 226730 },
    4: { name: 'Rafael Leao', fifaId: 241721 },
    5: { name: 'Manuel Locatelli', fifaId: 228534 },
    6: { name: 'Alessandro Bastoni', fifaId: 238086 },
    7: { name: 'Alvaro Morata', fifaId: 201153 },
    8: { name: 'Nicolo Barella', fifaId: 233319 },
    9: { name: 'Lautaro Martinez', fifaId: 231458 },
    10: { name: 'Paulo Dybala', fifaId: 211110 },
    11: { name: 'Khvicha Kvaratskhelia', fifaId: 246012 },
    12: { name: 'Mattia Zaccagni', fifaId: 231368 },
    13: { name: 'Gianluigi Donnarumma', fifaId: 230621 },
    14: { name: 'Dusan Vlahovic', fifaId: 245084 }, // Ace
  },
  // Bundesliga (Spades)
  spades: {
    2: { name: 'Noussair Mazraoui', fifaId: 238092 },
    3: { name: 'Kim Min-jae', fifaId: 241967 },
    4: { name: 'Matthijs de Ligt', fifaId: 233818 },
    5: { name: 'Dayot Upamecano', fifaId: 232440 },
    6: { name: 'Joshua Kimmich', fifaId: 212622 },
    7: { name: 'Serge Gnabry', fifaId: 204458 },
    8: { name: 'Leon Goretzka', fifaId: 209658 },
    9: { name: 'Harry Kane', fifaId: 202126 },
    10: { name: 'Florian Wirtz', fifaId: 256528 },
    11: { name: 'Kingsley Coman', fifaId: 213345 },
    12: { name: 'Jamal Musiala', fifaId: 256932 },
    13: { name: 'Manuel Neuer', fifaId: 167495 },
    14: { name: 'Leroy Sane', fifaId: 228469 }, // Ace
  },
};

// Generate player image URL
function getPlayerImageUrl(fifaId: number): string {
  return `https://www.fifarosters.com/assets/players/fifa25/faces/${fifaId}.png`;
}

// Create a single card
export function createCard(value: number, suit: League): FootballCard {
  const playerData = playersByLeagueAndNumber[suit][value];
  return {
    value,
    suit,
    player: {
      name: playerData.name,
      imageUrl: getPlayerImageUrl(playerData.fifaId),
      shirtNumber: value === 14 ? 1 : value, // Ace shows as 1 (goalkeeper vibes) or keep original
    },
  };
}

// Create a full deck (52 cards)
export function createDeck(): FootballCard[] {
  const deck: FootballCard[] = [];
  const suits: League[] = ['hearts', 'diamonds', 'clubs', 'spades'];

  for (const suit of suits) {
    for (let value = 2; value <= 14; value++) {
      deck.push(createCard(value, suit));
    }
  }

  return deck;
}

// Shuffle deck
export function shuffleDeck(deck: FootballCard[]): FootballCard[] {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Get display value for card (2-10, J, Q, K, A)
export function getCardDisplayValue(value: number): string {
  if (value <= 10) return value.toString();
  if (value === 11) return 'J';
  if (value === 12) return 'Q';
  if (value === 13) return 'K';
  return 'A';
}

// Get suit symbol
export function getSuitSymbol(suit: League): string {
  switch (suit) {
    case 'hearts': return '♥';
    case 'diamonds': return '♦';
    case 'clubs': return '♣';
    case 'spades': return '♠';
  }
}

// Poker hand types (ranked lowest to highest)
export type HandRank =
  | 'high-card'
  | 'pair'
  | 'two-pair'
  | 'three-of-a-kind'
  | 'straight'
  | 'flush'
  | 'full-house'
  | 'four-of-a-kind'
  | 'straight-flush'
  | 'royal-flush';

export const handRankNames: Record<HandRank, string> = {
  'high-card': 'High Card',
  'pair': 'Pair',
  'two-pair': 'Two Pair',
  'three-of-a-kind': 'Three of a Kind',
  'straight': 'Straight',
  'flush': 'Flush',
  'full-house': 'Full House',
  'four-of-a-kind': 'Four of a Kind',
  'straight-flush': 'Straight Flush',
  'royal-flush': 'Royal Flush',
};

// Football-themed hand descriptions
export const handRankFootballDesc: Record<HandRank, string> = {
  'high-card': 'Star Player',
  'pair': 'Same Role, Different Leagues',
  'two-pair': 'Two Roles Doubled Up',
  'three-of-a-kind': 'Role Dominates Europe',
  'straight': 'Perfectly Balanced Squad',
  'flush': 'League Dominance',
  'full-house': 'Full Squad Harmony',
  'four-of-a-kind': 'European Takeover',
  'straight-flush': 'League Dream Team',
  'royal-flush': 'Ultimate League XI',
};

// Hand evaluation
export interface HandResult {
  rank: HandRank;
  rankValue: number; // For comparing same-type hands
  highCards: number[]; // For tiebreakers
  cards: FootballCard[];
}

export function evaluateHand(cards: FootballCard[]): HandResult {
  if (cards.length !== 5) {
    throw new Error('Hand must have exactly 5 cards');
  }

  const values = cards.map(c => c.value).sort((a, b) => b - a);
  const suits = cards.map(c => c.suit);

  const isFlush = suits.every(s => s === suits[0]);
  const isStraight = checkStraight(values);

  const valueCounts = getValueCounts(values);
  const counts = Object.values(valueCounts).sort((a, b) => b - a);

  // Royal Flush
  if (isFlush && isStraight && values[0] === 14) {
    return { rank: 'royal-flush', rankValue: 10, highCards: values, cards };
  }

  // Straight Flush
  if (isFlush && isStraight) {
    return { rank: 'straight-flush', rankValue: 9, highCards: values, cards };
  }

  // Four of a Kind
  if (counts[0] === 4) {
    return { rank: 'four-of-a-kind', rankValue: 8, highCards: sortByCount(valueCounts), cards };
  }

  // Full House
  if (counts[0] === 3 && counts[1] === 2) {
    return { rank: 'full-house', rankValue: 7, highCards: sortByCount(valueCounts), cards };
  }

  // Flush
  if (isFlush) {
    return { rank: 'flush', rankValue: 6, highCards: values, cards };
  }

  // Straight
  if (isStraight) {
    return { rank: 'straight', rankValue: 5, highCards: values, cards };
  }

  // Three of a Kind
  if (counts[0] === 3) {
    return { rank: 'three-of-a-kind', rankValue: 4, highCards: sortByCount(valueCounts), cards };
  }

  // Two Pair
  if (counts[0] === 2 && counts[1] === 2) {
    return { rank: 'two-pair', rankValue: 3, highCards: sortByCount(valueCounts), cards };
  }

  // Pair
  if (counts[0] === 2) {
    return { rank: 'pair', rankValue: 2, highCards: sortByCount(valueCounts), cards };
  }

  // High Card
  return { rank: 'high-card', rankValue: 1, highCards: values, cards };
}

function checkStraight(sortedValues: number[]): boolean {
  // Check for A-2-3-4-5 (wheel)
  if (sortedValues[0] === 14 && sortedValues[1] === 5 &&
      sortedValues[2] === 4 && sortedValues[3] === 3 && sortedValues[4] === 2) {
    return true;
  }

  // Normal straight check
  for (let i = 0; i < sortedValues.length - 1; i++) {
    if (sortedValues[i] - sortedValues[i + 1] !== 1) {
      return false;
    }
  }
  return true;
}

function getValueCounts(values: number[]): Record<number, number> {
  const counts: Record<number, number> = {};
  for (const v of values) {
    counts[v] = (counts[v] || 0) + 1;
  }
  return counts;
}

function sortByCount(valueCounts: Record<number, number>): number[] {
  return Object.entries(valueCounts)
    .sort((a, b) => {
      if (b[1] !== a[1]) return b[1] - a[1]; // Sort by count first
      return Number(b[0]) - Number(a[0]); // Then by value
    })
    .map(([v]) => Number(v));
}

// Compare two hands, returns positive if hand1 wins, negative if hand2 wins, 0 for tie
export function compareHands(hand1: HandResult, hand2: HandResult): number {
  if (hand1.rankValue !== hand2.rankValue) {
    return hand1.rankValue - hand2.rankValue;
  }

  // Same rank, compare high cards
  for (let i = 0; i < hand1.highCards.length; i++) {
    if (hand1.highCards[i] !== hand2.highCards[i]) {
      return hand1.highCards[i] - hand2.highCards[i];
    }
  }

  return 0; // Tie
}

// Find best 5-card hand from 7 cards (for Texas Hold'em)
export function findBestHand(cards: FootballCard[]): HandResult {
  if (cards.length < 5) {
    throw new Error('Need at least 5 cards');
  }

  if (cards.length === 5) {
    return evaluateHand(cards);
  }

  // Generate all 5-card combinations from 7 cards
  const combinations = getCombinations(cards, 5);
  let bestHand: HandResult | null = null;

  for (const combo of combinations) {
    const result = evaluateHand(combo);
    if (!bestHand || compareHands(result, bestHand) > 0) {
      bestHand = result;
    }
  }

  return bestHand!;
}

// Generate all combinations of size k from array
function getCombinations<T>(arr: T[], k: number): T[][] {
  const result: T[][] = [];

  function combine(start: number, combo: T[]) {
    if (combo.length === k) {
      result.push([...combo]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      combo.push(arr[i]);
      combine(i + 1, combo);
      combo.pop();
    }
  }

  combine(0, []);
  return result;
}
