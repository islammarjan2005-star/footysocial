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

// DiceBear Avatars - 100% reliable cartoon avatars, perfect for Guess Who!
// Each player gets a unique consistent avatar based on their name
const getPlayerImage = (name: string) =>
  `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`;

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
    imageUrl: getPlayerImage("Erling Haaland")
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
    imageUrl: getPlayerImage("Mohamed Salah")
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
    imageUrl: getPlayerImage("Kevin De Bruyne")
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
    imageUrl: getPlayerImage("Bukayo Saka")
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
    imageUrl: getPlayerImage("Bruno Fernandes")
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
    imageUrl: getPlayerImage("Virgil van Dijk")
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
    imageUrl: getPlayerImage("Jude Bellingham")
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
    imageUrl: getPlayerImage("Vinicius Jr")
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
    imageUrl: getPlayerImage("Robert Lewandowski")
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
    imageUrl: getPlayerImage("Pedri")
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
    imageUrl: getPlayerImage("Lamine Yamal")
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
    imageUrl: getPlayerImage("Thibaut Courtois")
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
    imageUrl: getPlayerImage("Lautaro Martinez")
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
    imageUrl: getPlayerImage("Rafael Leao")
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
    imageUrl: getPlayerImage("Victor Osimhen")
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
    imageUrl: getPlayerImage("Florian Wirtz")
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
    imageUrl: getPlayerImage("Jamal Musiala")
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
    imageUrl: getPlayerImage("Harry Kane")
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
    imageUrl: getPlayerImage("Kylian Mbappe")
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
    imageUrl: getPlayerImage("Ousmane Dembele")
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
    imageUrl: getPlayerImage("Declan Rice")
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
    imageUrl: getPlayerImage("Marcus Rashford")
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
    imageUrl: getPlayerImage("Alisson Becker")
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
    imageUrl: getPlayerImage("Phil Foden")
  }
];

// Helper function to get unique values for filtering
export const getUniqueLeagues = () => [...new Set(footballers.map(f => f.league))];
export const getUniqueNationalities = () => [...new Set(footballers.map(f => f.nationality))];
export const getUniqueClubs = () => [...new Set(footballers.map(f => f.club))];
export const getUniquePositions = () => [...new Set(footballers.map(f => f.position))];
