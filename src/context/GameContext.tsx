import React, { createContext, useContext, useReducer, type ReactNode } from 'react';
import type { GameState, GameAction, Player } from '../types/game';
import { footballers, type Footballer } from '../data/footballers';

const initialState: GameState = {
  phase: 'setup',
  players: [],
  currentPlayerIndex: 0,
  winner: null,
  allFootballers: footballers,
};

// Shuffle array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START_GAME': {
      // Shuffle footballers and assign one to each player
      const shuffledFootballers = shuffleArray(footballers);
      const players: Player[] = [];

      for (let i = 0; i < action.playerCount; i++) {
        players.push({
          id: i,
          name: `Player ${i + 1}`,
          secretFootballer: shuffledFootballers[i],
          eliminatedIds: new Set(),
        });
      }

      return {
        ...state,
        phase: 'assigning',
        players,
        currentPlayerIndex: 0,
        winner: null,
      };
    }

    case 'CONFIRM_SECRET': {
      const nextPlayerIndex = state.currentPlayerIndex + 1;

      // If all players have seen their secret, move to passing screen before game
      if (nextPlayerIndex >= state.players.length) {
        return {
          ...state,
          currentPlayerIndex: 0,
          phase: 'passing',
        };
      }

      return {
        ...state,
        currentPlayerIndex: nextPlayerIndex,
      };
    }

    case 'READY_TO_PLAY': {
      return {
        ...state,
        phase: 'playing',
      };
    }

    case 'TOGGLE_ELIMINATE': {
      const currentPlayer = state.players[state.currentPlayerIndex];
      const newEliminatedIds = new Set(currentPlayer.eliminatedIds);

      if (newEliminatedIds.has(action.footballerId)) {
        newEliminatedIds.delete(action.footballerId);
      } else {
        newEliminatedIds.add(action.footballerId);
      }

      const updatedPlayers = state.players.map((player, index) =>
        index === state.currentPlayerIndex
          ? { ...player, eliminatedIds: newEliminatedIds }
          : player
      );

      return {
        ...state,
        players: updatedPlayers,
      };
    }

    case 'END_TURN': {
      const nextPlayerIndex =
        (state.currentPlayerIndex + 1) % state.players.length;

      return {
        ...state,
        currentPlayerIndex: nextPlayerIndex,
        phase: 'passing',
      };
    }

    case 'START_GUESS': {
      return {
        ...state,
        phase: 'guessing',
      };
    }

    case 'MAKE_GUESS': {
      const currentPlayer = state.players[state.currentPlayerIndex];
      // Find the opponent (for 2 players, it's the other player)
      // For multiplayer, we need to know who they're guessing about
      // For MVP with 2 players, opponent is the other player
      const opponentIndex = (state.currentPlayerIndex + 1) % state.players.length;
      const opponent = state.players[opponentIndex];

      const isCorrect = opponent.secretFootballer.id === action.footballerId;

      if (isCorrect) {
        return {
          ...state,
          phase: 'gameover',
          winner: currentPlayer,
        };
      }

      // Wrong guess - lose turn (move to next player)
      const nextPlayerIndex =
        (state.currentPlayerIndex + 1) % state.players.length;

      return {
        ...state,
        currentPlayerIndex: nextPlayerIndex,
        phase: 'passing',
      };
    }

    case 'CANCEL_GUESS': {
      return {
        ...state,
        phase: 'playing',
      };
    }

    case 'RESET_GAME': {
      return initialState;
    }

    default:
      return state;
  }
}

interface GameContextType {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
  currentPlayer: Player | null;
  getOpponentSecretFootballer: () => Footballer | null;
}

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const currentPlayer = state.players[state.currentPlayerIndex] || null;

  const getOpponentSecretFootballer = (): Footballer | null => {
    if (state.players.length < 2) return null;
    const opponentIndex = (state.currentPlayerIndex + 1) % state.players.length;
    return state.players[opponentIndex].secretFootballer;
  };

  return (
    <GameContext.Provider
      value={{ state, dispatch, currentPlayer, getOpponentSecretFootballer }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
