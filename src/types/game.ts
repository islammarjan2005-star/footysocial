import type { Footballer } from '../data/footballers';

export type GamePhase =
  | 'setup'           // Choosing number of players
  | 'assigning'       // Showing each player their secret footballer
  | 'playing'         // Main game - asking questions, eliminating
  | 'passing'         // Screen shown while passing device
  | 'guessing'        // Player is making a guess
  | 'gameover';       // Game finished - show winner

export interface Player {
  id: number;
  name: string;
  secretFootballer: Footballer;
  eliminatedIds: Set<number>; // IDs of footballers this player has eliminated
}

export interface GameState {
  phase: GamePhase;
  players: Player[];
  currentPlayerIndex: number;
  winner: Player | null;
  allFootballers: Footballer[];
}

export type GameAction =
  | { type: 'START_GAME'; playerCount: number }
  | { type: 'CONFIRM_SECRET'; playerId: number }
  | { type: 'TOGGLE_ELIMINATE'; footballerId: number }
  | { type: 'END_TURN' }
  | { type: 'READY_TO_PLAY' }
  | { type: 'START_GUESS' }
  | { type: 'MAKE_GUESS'; footballerId: number }
  | { type: 'CANCEL_GUESS' }
  | { type: 'RESET_GAME' };
