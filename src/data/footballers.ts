export interface Footballer {
  id: number;
  name: string;
  position: 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';
  league: string;
  club: string;
  nationality: string;
  hairColor: 'Black' | 'Brown' | 'Blonde' | 'Red' | 'Bald';
  facialHair: boolean;
  imageUrl: string;
}

// FIFA 25 face images from FIFARosters
const getFIFAImage = (fifaId: number) =>
  `https://www.fifarosters.com/assets/players/fifa25/faces/${fifaId}.png`;

// FIFA 25 Player ID Reference:
// PL: Haaland 239085, Salah 209331, De Bruyne 192985, Saka 230658, Bruno 212622, Van Dijk 203376, Rice 231747, Rashford 231677

export const footballers: Footballer[] = [
  // Premier League Stars - using FIFA 25 face images
  {
    id: 1,
    name: "Erling Haaland",
    position: "Forward",
    league: "Premier League",
    club: "Manchester City",
    nationality: "Norway",
    hairColor: "Blonde",
    facialHair: false,
    imageUrl: getFIFAImage(239085)
  },
  {
    id: 2,
    name: "Mohamed Salah",
    position: "Forward",
    league: "Premier League",
    club: "Liverpool",
    nationality: "Egypt",
    hairColor: "Black",
    facialHair: true,
    imageUrl: getFIFAImage(209331)
  },
  {
    id: 3,
    name: "Kevin De Bruyne",
    position: "Midfielder",
    league: "Premier League",
    club: "Manchester City",
    nationality: "Belgium",
    hairColor: "Red",
    facialHair: true,
    imageUrl: getFIFAImage(192985)
  },
  {
    id: 4,
    name: "Bukayo Saka",
    position: "Forward",
    league: "Premier League",
    club: "Arsenal",
    nationality: "England",
    hairColor: "Black",
    facialHair: false,
    imageUrl: getFIFAImage(230658)
  },
  {
    id: 5,
    name: "Bruno Fernandes",
    position: "Midfielder",
    league: "Premier League",
    club: "Manchester United",
    nationality: "Portugal",
    hairColor: "Brown",
    facialHair: true,
    imageUrl: getFIFAImage(212622)
  },
  {
    id: 6,
    name: "Virgil van Dijk",
    position: "Defender",
    league: "Premier League",
    club: "Liverpool",
    nationality: "Netherlands",
    hairColor: "Black",
    facialHair: true,
    imageUrl: getFIFAImage(203376)
  },
  // La Liga Stars - using FIFA 25 face images
  {
    id: 7,
    name: "Jude Bellingham",
    position: "Midfielder",
    league: "La Liga",
    club: "Real Madrid",
    nationality: "England",
    hairColor: "Black",
    facialHair: false,
    imageUrl: getFIFAImage(251572)
  },
  {
    id: 8,
    name: "Vinicius Jr",
    position: "Forward",
    league: "La Liga",
    club: "Real Madrid",
    nationality: "Brazil",
    hairColor: "Black",
    facialHair: false,
    imageUrl: getFIFAImage(238794)
  },
  {
    id: 9,
    name: "Robert Lewandowski",
    position: "Forward",
    league: "La Liga",
    club: "Barcelona",
    nationality: "Poland",
    hairColor: "Brown",
    facialHair: false,
    imageUrl: getFIFAImage(188545)
  },
  {
    id: 10,
    name: "Pedri",
    position: "Midfielder",
    league: "La Liga",
    club: "Barcelona",
    nationality: "Spain",
    hairColor: "Brown",
    facialHair: false,
    imageUrl: getFIFAImage(246009)
  },
  {
    id: 11,
    name: "Lamine Yamal",
    position: "Forward",
    league: "La Liga",
    club: "Barcelona",
    nationality: "Spain",
    hairColor: "Black",
    facialHair: false,
    imageUrl: getFIFAImage(264298)
  },
  {
    id: 12,
    name: "Thibaut Courtois",
    position: "Goalkeeper",
    league: "La Liga",
    club: "Real Madrid",
    nationality: "Belgium",
    hairColor: "Brown",
    facialHair: true,
    imageUrl: getFIFAImage(192119)
  },
  // Serie A Stars
  {
    id: 13,
    name: "Lautaro Martinez",
    position: "Forward",
    league: "Serie A",
    club: "Inter Milan",
    nationality: "Argentina",
    hairColor: "Brown",
    facialHair: true,
    imageUrl: getFIFAImage(224458)
  },
  {
    id: 14,
    name: "Rafael Leao",
    position: "Forward",
    league: "Serie A",
    club: "AC Milan",
    nationality: "Portugal",
    hairColor: "Black",
    facialHair: false,
    imageUrl: getFIFAImage(243546)
  },
  {
    id: 15,
    name: "Victor Osimhen",
    position: "Forward",
    league: "Serie A",
    club: "Napoli",
    nationality: "Nigeria",
    hairColor: "Black",
    facialHair: false,
    imageUrl: getFIFAImage(231443)
  },
  // Bundesliga Stars
  {
    id: 16,
    name: "Florian Wirtz",
    position: "Midfielder",
    league: "Bundesliga",
    club: "Bayer Leverkusen",
    nationality: "Germany",
    hairColor: "Blonde",
    facialHair: false,
    imageUrl: getFIFAImage(246655)
  },
  {
    id: 17,
    name: "Jamal Musiala",
    position: "Midfielder",
    league: "Bundesliga",
    club: "Bayern Munich",
    nationality: "Germany",
    hairColor: "Black",
    facialHair: false,
    imageUrl: getFIFAImage(241741)
  },
  {
    id: 18,
    name: "Harry Kane",
    position: "Forward",
    league: "Bundesliga",
    club: "Bayern Munich",
    nationality: "England",
    hairColor: "Brown",
    facialHair: true,
    imageUrl: getFIFAImage(202126)
  },
  // La Liga / Ligue 1 Stars
  {
    id: 19,
    name: "Kylian Mbappe",
    position: "Forward",
    league: "La Liga",
    club: "Real Madrid",
    nationality: "France",
    hairColor: "Black",
    facialHair: false,
    imageUrl: getFIFAImage(231478)
  },
  {
    id: 20,
    name: "Ousmane Dembele",
    position: "Forward",
    league: "Ligue 1",
    club: "PSG",
    nationality: "France",
    hairColor: "Black",
    facialHair: true,
    imageUrl: getFIFAImage(221550)
  },
  // More Premier League
  {
    id: 21,
    name: "Declan Rice",
    position: "Midfielder",
    league: "Premier League",
    club: "Arsenal",
    nationality: "England",
    hairColor: "Brown",
    facialHair: false,
    imageUrl: getFIFAImage(231747)
  },
  {
    id: 22,
    name: "Marcus Rashford",
    position: "Forward",
    league: "Premier League",
    club: "Manchester United",
    nationality: "England",
    hairColor: "Black",
    facialHair: true,
    imageUrl: getFIFAImage(231677)
  },
  {
    id: 23,
    name: "Alisson Becker",
    position: "Goalkeeper",
    league: "Premier League",
    club: "Liverpool",
    nationality: "Brazil",
    hairColor: "Brown",
    facialHair: true,
    imageUrl: getFIFAImage(212831)
  },
  {
    id: 24,
    name: "Phil Foden",
    position: "Midfielder",
    league: "Premier League",
    club: "Manchester City",
    nationality: "England",
    hairColor: "Blonde",
    facialHair: false,
    imageUrl: getFIFAImage(237692)
  }
];

// Helper function to get unique values for filtering
export const getUniqueLeagues = () => [...new Set(footballers.map(f => f.league))];
export const getUniqueNationalities = () => [...new Set(footballers.map(f => f.nationality))];
export const getUniqueClubs = () => [...new Set(footballers.map(f => f.club))];
export const getUniquePositions = () => [...new Set(footballers.map(f => f.position))];
