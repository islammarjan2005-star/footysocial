// Football Wordle - Guess the 5-letter footballer surname

// Target words - famous footballers with 5-letter surnames
export const targetWords: string[] = [
  'MESSI',
  'SALAH',
  'KROOS',
  'JAMES',
  'SILVA',
  'VARANE',  // 6 letters, removing
  'SANKA',   // Bukayo Saka variant, removing
  'BRUNO',
  'VIDAL',
  'MOUNT',
  'JESUS',
  'TRENT',   // First name but recognizable
  'FODEN',
  'STONE',   // Stones
  'RODRI',
  'KANTE',
  'POGBA',
  'ALABA',
  'DAVIS',
  'REECE',   // James
  'CUFFY',   // removing - too obscure
  'SOYLU',   // removing - too obscure
  'MOURA',   // Lucas Moura
  'LUCAS',   // First name
  'PIQUE',
  'RAMOS',
  'RAKIC',   // removing
  'MATIC',
  'OSCAR',
  'COSTA',
  'GUNDO',   // Gundogan nickname, removing
  'THIAM',   // removing - too obscure
  'ICARDI',  // 6 letters
  'ZIYECH',  // 6 letters
  'DIABY',
  'FIRPO',
  'SCHAR',
  'PABLO',
  'SAMIR',
  'LAMAR',   // removing
  'ANGEL',
  'COMAN',
  'SIMON',
  'DAVID',   // First name used as surname context
  'REYNA',
  'ACUNA',
  'COADY',
  'DUFFY',
  'TARIQ',
  'DIGNE',
  'AYALA',
  'ALLAN',
  'ANDRE',
  'CEDRI',   // removing
  'GUAITA',  // 6 letters
  'RAMOS',
  'KROSS',   // variant spelling
  'DIOGO',
  'JOTA',    // 4 letters
  'KEITA',
  'MATIP',
  'BOWEN',
  'TOMIS',   // removing
  'LACAZ',   // removing
  'PEDRO',
  'AKANJI',  // 6 letters
  'GRIEL',   // removing
  'SAISS',
  'LOPES',
  'NOBLE',
  'GOMEZ',
  'AYOZE',
  'AURIER',  // 6 letters
  'ANDER',
  'OTAME',   // removing
  'MEYER',
  'BURNS',
  'LEWIS',
  'DOHERTY', // 7 letters
  'NEVES',
  'CUNHA',
  'GUEDE',   // removing
  'DALOT',
  'EDSON',
  'DYBALA',  // 6 letters
].filter(w => w.length === 5);

// Clean list of 5-letter target words (answers)
export const answers: string[] = [
  'MESSI',
  'SALAH',
  'KROOS',
  'JAMES',
  'SILVA',
  'BRUNO',
  'VIDAL',
  'MOUNT',
  'JESUS',
  'FODEN',
  'RODRI',
  'KANTE',
  'POGBA',
  'ALABA',
  'DAVIS',
  'REECE',
  'MOURA',
  'PIQUE',
  'RAMOS',
  'MATIC',
  'OSCAR',
  'COSTA',
  'DIABY',
  'FIRPO',
  'SCHAR',
  'PABLO',
  'ANGEL',
  'COMAN',
  'SIMON',
  'DAVID',
  'REYNA',
  'ACUNA',
  'COADY',
  'DUFFY',
  'DIGNE',
  'AYALA',
  'ALLAN',
  'ANDRE',
  'KEITA',
  'MATIP',
  'BOWEN',
  'PEDRO',
  'SAISS',
  'LOPES',
  'NOBLE',
  'GOMEZ',
  'AYOZE',
  'ANDER',
  'MEYER',
  'BURNS',
  'LEWIS',
  'NEVES',
  'CUNHA',
  'DALOT',
  'EDSON',
  'PEREZ',
  'RUBEN',
  'LUCHO',
  'DIOGO',
  'FELIX',
  'PULGA',
  'HAKAM',
  'ISAKI',
  'LARIN',
  'MODRI',
  'YAMAL',
  'GAKPO',
  'MALEN',
  'DEPAY',
  'BLIND',
  'TIMBER',
  'TADIC',
  'GULER',
  'CELIK',
  'YAZIC',
  'NERES',
  'HWANG',
  'MINAM',
  'LEIVA',
  'VILLA',
  'XHAKA',
  'SAGNA',
  'DIARRA',
  'UMTIT',
  'KIMMICH',
  'GOMES',
  'SEMEDO',
].filter(w => w.length === 5);

// Extended valid guesses (includes answers + other valid 5-letter footballer names)
export const validGuesses: Set<string> = new Set([
  ...answers,
  // Additional valid guesses
  'RONNY',
  'HARRY',
  'KEVIN',
  'ERLIN',
  'MASON',
  'BUKAY',
  'DECLA',
  'RAHEE',
  'PHILI',
  'VIRGI',
  'TRENT',
  'LISAT',
  'MANUE',
  'STEPH',
  'CARVA',
  'MODRI',
  'VININ',
  'JUDE',
  'WAYNE',
  'ZLATA',
  'ANTHO',
  'MARCU',
  'JADON',
  'CHELS',
  'ARSEN',
  'LIVER',
  'SPIKE',
  'FOOTY',
  'GOALS',
  'PITCH',
  'MATCH',
  'SCORE',
  'BOOTS',
  'GRASS',
  'COACH',
  'EXTRA',
  'BENCH',
  'SQUAD',
]);

// Get today's word (based on date)
export function getTodaysWord(): string {
  const startDate = new Date('2024-01-01').getTime();
  const today = new Date().setHours(0, 0, 0, 0);
  const dayIndex = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
  return answers[dayIndex % answers.length];
}

// Get a random word
export function getRandomWord(): string {
  return answers[Math.floor(Math.random() * answers.length)];
}

// Check if a guess is valid
export function isValidGuess(guess: string): boolean {
  return validGuesses.has(guess.toUpperCase()) || answers.includes(guess.toUpperCase());
}

// Letter state types
export type LetterState = 'correct' | 'present' | 'absent' | 'empty';

// Evaluate a guess against the target
export function evaluateGuess(guess: string, target: string): LetterState[] {
  const result: LetterState[] = Array(5).fill('absent');
  const targetChars = target.split('');
  const guessChars = guess.toUpperCase().split('');

  // First pass: mark correct positions
  for (let i = 0; i < 5; i++) {
    if (guessChars[i] === targetChars[i]) {
      result[i] = 'correct';
      targetChars[i] = '#'; // Mark as used
    }
  }

  // Second pass: mark present letters
  for (let i = 0; i < 5; i++) {
    if (result[i] !== 'correct') {
      const targetIndex = targetChars.indexOf(guessChars[i]);
      if (targetIndex !== -1) {
        result[i] = 'present';
        targetChars[targetIndex] = '#'; // Mark as used
      }
    }
  }

  return result;
}

// Player hints - show who the player is after winning/losing
export const playerHints: Record<string, string> = {
  'MESSI': 'Lionel Messi - Inter Miami / Argentina',
  'SALAH': 'Mohamed Salah - Liverpool / Egypt',
  'KROOS': 'Toni Kroos - Real Madrid (retired) / Germany',
  'JAMES': 'Reece James - Chelsea / England',
  'SILVA': 'Bernardo Silva - Man City / Portugal',
  'BRUNO': 'Bruno Fernandes - Man United / Portugal',
  'VIDAL': 'Arturo Vidal - Colo-Colo / Chile',
  'MOUNT': 'Mason Mount - Man United / England',
  'JESUS': 'Gabriel Jesus - Arsenal / Brazil',
  'FODEN': 'Phil Foden - Man City / England',
  'RODRI': 'Rodri - Man City / Spain',
  'KANTE': "N'Golo Kanté - Al-Ittihad / France",
  'POGBA': 'Paul Pogba - (Free Agent) / France',
  'ALABA': 'David Alaba - Real Madrid / Austria',
  'RAMOS': 'Sergio Ramos - (Free Agent) / Spain',
  'PIQUE': 'Gerard Piqué - (Retired) / Spain',
  'COSTA': 'Diego Costa - (Free Agent) / Spain',
  'KEITA': 'Naby Keïta - Werder Bremen / Guinea',
  'MATIP': 'Joël Matip - (Free Agent) / Cameroon',
  'BOWEN': 'Jarrod Bowen - West Ham / England',
  'NEVES': 'Rúben Neves - Al-Hilal / Portugal',
  'CUNHA': 'Matheus Cunha - Wolves / Brazil',
  'GAKPO': 'Cody Gakpo - Liverpool / Netherlands',
  'DEPAY': 'Memphis Depay - Atlético Madrid / Netherlands',
  'XHAKA': 'Granit Xhaka - Bayer Leverkusen / Switzerland',
  'GOMES': 'André Gomes - Lille / Portugal',
  'FELIX': 'João Félix - Chelsea / Portugal',
  'DALOT': 'Diogo Dalot - Man United / Portugal',
  'GOMEZ': 'Joe Gomez - Liverpool / England',
};
