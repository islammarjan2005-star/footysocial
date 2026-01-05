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

// FotMob CDN - reliable source for player images
const getPlayerImage = (fotmobId: number) =>
  `https://images.fotmob.com/image_resources/logo/playerimages/${fotmobId}.png`;

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
    imageUrl: getPlayerImage(737066)
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
    imageUrl: getPlayerImage(292462)
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
    imageUrl: getPlayerImage(169200)
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
    imageUrl: getPlayerImage(961995)
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
    imageUrl: getPlayerImage(422685)
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
    imageUrl: getPlayerImage(209405)
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
    imageUrl: getPlayerImage(1077894)
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
    imageUrl: getPlayerImage(846033)
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
    imageUrl: getPlayerImage(93447)
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
    imageUrl: getPlayerImage(1083323)
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
    imageUrl: getPlayerImage(1467236)
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
    imageUrl: getPlayerImage(170323)
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
    imageUrl: getPlayerImage(690230)
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
    imageUrl: getPlayerImage(848844)
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
    imageUrl: getPlayerImage(687681)
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
    imageUrl: getPlayerImage(1152455)
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
    imageUrl: getPlayerImage(1156141)
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
    imageUrl: getPlayerImage(194165)
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
    imageUrl: getPlayerImage(701154)
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
    imageUrl: getPlayerImage(692984)
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
    imageUrl: getPlayerImage(654096)
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
    imageUrl: getPlayerImage(696365)
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
    imageUrl: getPlayerImage(319784)
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
    imageUrl: getPlayerImage(815006)
  }
];

// Helper function to get unique values for filtering
export const getUniqueLeagues = () => [...new Set(footballers.map(f => f.league))];
export const getUniqueNationalities = () => [...new Set(footballers.map(f => f.nationality))];
export const getUniqueClubs = () => [...new Set(footballers.map(f => f.club))];
export const getUniquePositions = () => [...new Set(footballers.map(f => f.position))];
