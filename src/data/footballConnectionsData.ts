// Football Connections - NYT Connections style game with footballers

export interface ConnectionsPlayer {
  name: string;
  fifaId: string;
}

export interface ConnectionsCategory {
  name: string;
  difficulty: 1 | 2 | 3 | 4; // 1=yellow(easy), 2=green, 3=blue, 4=purple(hard)
  players: ConnectionsPlayer[];
}

export interface ConnectionsPuzzle {
  id: number;
  categories: ConnectionsCategory[];
}

// Difficulty colors
export const difficultyColors: Record<number, { bg: string; text: string; name: string }> = {
  1: { bg: '#f9df6d', text: '#000', name: 'yellow' },
  2: { bg: '#a0c35a', text: '#000', name: 'green' },
  3: { bg: '#b0c4ef', text: '#000', name: 'blue' },
  4: { bg: '#ba81c5', text: '#000', name: 'purple' },
};

export const connectionsPuzzles: ConnectionsPuzzle[] = [
  {
    id: 1,
    categories: [
      {
        name: 'Won Ballon d\'Or',
        difficulty: 1,
        players: [
          { name: 'Messi', fifaId: '158023' },
          { name: 'Ronaldo', fifaId: '20801' },
          { name: 'Benzema', fifaId: '165153' },
          { name: 'Modric', fifaId: '177003' },
        ],
      },
      {
        name: 'Premier League Golden Boot Winners',
        difficulty: 2,
        players: [
          { name: 'Salah', fifaId: '209331' },
          { name: 'Kane', fifaId: '202126' },
          { name: 'Son', fifaId: '200104' },
          { name: 'Haaland', fifaId: '239085' },
        ],
      },
      {
        name: 'World Cup 2022 Winners (Argentina)',
        difficulty: 3,
        players: [
          { name: 'Di María', fifaId: '183898' },
          { name: 'Martínez', fifaId: '212190' },
          { name: 'De Paul', fifaId: '212616' },
          { name: 'Mac Allister', fifaId: '234396' },
        ],
      },
      {
        name: 'Played for Both Real Madrid AND Man City',
        difficulty: 4,
        players: [
          { name: 'Robinho', fifaId: '48515' },
          { name: 'Negredo', fifaId: '177509' },
          { name: 'Danilo', fifaId: '210035' },
          { name: 'Brahim Díaz', fifaId: '235243' },
        ],
      },
    ],
  },
  {
    id: 2,
    categories: [
      {
        name: 'Brazilian Forwards',
        difficulty: 1,
        players: [
          { name: 'Neymar', fifaId: '190871' },
          { name: 'Vinicius Jr', fifaId: '238794' },
          { name: 'Rodrygo', fifaId: '243812' },
          { name: 'Raphinha', fifaId: '231048' },
        ],
      },
      {
        name: 'German National Team',
        difficulty: 2,
        players: [
          { name: 'Müller', fifaId: '189596' },
          { name: 'Gündogan', fifaId: '186942' },
          { name: 'Sané', fifaId: '218667' },
          { name: 'Musiala', fifaId: '262519' },
        ],
      },
      {
        name: 'Serie A Top Scorers',
        difficulty: 3,
        players: [
          { name: 'Lautaro', fifaId: '224458' },
          { name: 'Osimhen', fifaId: '235479' },
          { name: 'Lukaku', fifaId: '192505' },
          { name: 'Vlahović', fifaId: '241721' },
        ],
      },
      {
        name: 'Wore #7 at Manchester United',
        difficulty: 4,
        players: [
          { name: 'Beckham', fifaId: '12147' },
          { name: 'Depay', fifaId: '203376' },
          { name: 'Di María', fifaId: '183898' },
          { name: 'Sánchez', fifaId: '193253' },
        ],
      },
    ],
  },
  {
    id: 3,
    categories: [
      {
        name: 'Liverpool Players',
        difficulty: 1,
        players: [
          { name: 'Van Dijk', fifaId: '203376' },
          { name: 'Alexander-Arnold', fifaId: '231281' },
          { name: 'Szoboszlai', fifaId: '243165' },
          { name: 'Mac Allister', fifaId: '234396' },
        ],
      },
      {
        name: 'Champions League Winners 2023 (Man City)',
        difficulty: 2,
        players: [
          { name: 'De Bruyne', fifaId: '192985' },
          { name: 'Rodri', fifaId: '231866' },
          { name: 'Stones', fifaId: '203574' },
          { name: 'Bernardo', fifaId: '212198' },
        ],
      },
      {
        name: 'La Liga Defenders',
        difficulty: 3,
        players: [
          { name: 'Araujo', fifaId: '244183' },
          { name: 'Rüdiger', fifaId: '205452' },
          { name: 'Hermoso', fifaId: '226161' },
          { name: 'Carvajal', fifaId: '198141' },
        ],
      },
      {
        name: 'Left-Footed Midfielders',
        difficulty: 4,
        players: [
          { name: 'Kroos', fifaId: '182521' },
          { name: 'David Silva', fifaId: '168542' },
          { name: 'Özil', fifaId: '176635' },
          { name: 'Eriksen', fifaId: '190460' },
        ],
      },
    ],
  },
  {
    id: 4,
    categories: [
      {
        name: 'French World Cup Winners 2018',
        difficulty: 1,
        players: [
          { name: 'Mbappé', fifaId: '231747' },
          { name: 'Griezmann', fifaId: '194765' },
          { name: 'Pogba', fifaId: '195864' },
          { name: 'Varane', fifaId: '201535' },
        ],
      },
      {
        name: 'Barcelona Midfielders',
        difficulty: 2,
        players: [
          { name: 'Pedri', fifaId: '252371' },
          { name: 'Gavi', fifaId: '257027' },
          { name: 'De Jong', fifaId: '226834' },
          { name: 'Fermín', fifaId: '261522' },
        ],
      },
      {
        name: 'African Players',
        difficulty: 3,
        players: [
          { name: 'Salah', fifaId: '209331' },
          { name: 'Mahrez', fifaId: '188567' },
          { name: 'Hakimi', fifaId: '235212' },
          { name: 'Koulibaly', fifaId: '201024' },
        ],
      },
      {
        name: 'Scored 50+ Goals in a Calendar Year',
        difficulty: 4,
        players: [
          { name: 'Messi', fifaId: '158023' },
          { name: 'Ronaldo', fifaId: '20801' },
          { name: 'Lewandowski', fifaId: '188545' },
          { name: 'Haaland', fifaId: '239085' },
        ],
      },
    ],
  },
  {
    id: 5,
    categories: [
      {
        name: 'Goalkeepers',
        difficulty: 1,
        players: [
          { name: 'Alisson', fifaId: '212831' },
          { name: 'Courtois', fifaId: '192119' },
          { name: 'Ederson', fifaId: '210257' },
          { name: 'Donnarumma', fifaId: '230621' },
        ],
      },
      {
        name: 'Dutch National Team',
        difficulty: 2,
        players: [
          { name: 'Van Dijk', fifaId: '203376' },
          { name: 'De Jong', fifaId: '226834' },
          { name: 'Depay', fifaId: '203376' },
          { name: 'Gakpo', fifaId: '243548' },
        ],
      },
      {
        name: 'Premier League Assists Leaders',
        difficulty: 3,
        players: [
          { name: 'De Bruyne', fifaId: '192985' },
          { name: 'Alexander-Arnold', fifaId: '231281' },
          { name: 'Saka', fifaId: '246669' },
          { name: 'Ødegaard', fifaId: '222665' },
        ],
      },
      {
        name: 'Captained Their National Team at a World Cup',
        difficulty: 4,
        players: [
          { name: 'Kane', fifaId: '202126' },
          { name: 'Lloris', fifaId: '167948' },
          { name: 'Neuer', fifaId: '167495' },
          { name: 'Modrić', fifaId: '177003' },
        ],
      },
    ],
  },
];

// Get a random puzzle
export function getRandomPuzzle(): ConnectionsPuzzle {
  const randomIndex = Math.floor(Math.random() * connectionsPuzzles.length);
  return connectionsPuzzles[randomIndex];
}

// Shuffle array helper
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
