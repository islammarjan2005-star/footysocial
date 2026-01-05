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

// SoFIFA/EA FC player image URLs
const getPlayerImage = (fifaId: number) =>
  `https://cdn.sofifa.net/players/${String(fifaId).slice(0, 3)}/${String(fifaId).slice(3)}/25_120.png`;

export const footballers: Footballer[] = [
  // Premier League Stars
  {
    id: 1,
    name: "Erling Haaland",
    position: "Forward",
    league: "Premier League",
    club: "Manchester City",
    nationality: "Norway",
    hairColor: "Blonde",
    facialHair: false,
    imageUrl: getPlayerImage(239085)
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
    imageUrl: getPlayerImage(209331)
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
    imageUrl: getPlayerImage(192985)
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
    imageUrl: getPlayerImage(246669)
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
    imageUrl: getPlayerImage(212198)
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
    imageUrl: getPlayerImage(203376)
  },
  // La Liga Stars
  {
    id: 7,
    name: "Jude Bellingham",
    position: "Midfielder",
    league: "La Liga",
    club: "Real Madrid",
    nationality: "England",
    hairColor: "Black",
    facialHair: false,
    imageUrl: getPlayerImage(246126)
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
    imageUrl: getPlayerImage(238794)
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
    imageUrl: getPlayerImage(188545)
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
    imageUrl: getPlayerImage(250007)
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
    imageUrl: getPlayerImage(271195)
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
    imageUrl: getPlayerImage(192119)
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
    imageUrl: getPlayerImage(224285)
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
    imageUrl: getPlayerImage(241721)
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
    imageUrl: getPlayerImage(237392)
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
    imageUrl: getPlayerImage(247174)
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
    imageUrl: getPlayerImage(258005)
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
    imageUrl: getPlayerImage(202126)
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
    imageUrl: getPlayerImage(231747)
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
    imageUrl: getPlayerImage(231443)
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
    imageUrl: getPlayerImage(232698)
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
    imageUrl: getPlayerImage(231677)
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
    imageUrl: getPlayerImage(212831)
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
    imageUrl: getPlayerImage(237692)
  }
];

// Helper function to get unique values for filtering
export const getUniqueLeagues = () => [...new Set(footballers.map(f => f.league))];
export const getUniqueNationalities = () => [...new Set(footballers.map(f => f.nationality))];
export const getUniqueClubs = () => [...new Set(footballers.map(f => f.club))];
export const getUniquePositions = () => [...new Set(footballers.map(f => f.position))];
