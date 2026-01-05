import { useGame } from '../context/GameContext';
import { FootballerCard } from './FootballerCard';
import './GameBoard.css';

export function GameBoard() {
  const { state, dispatch, currentPlayer } = useGame();

  if (!currentPlayer) return null;

  const handleCardClick = (footballerId: number) => {
    dispatch({ type: 'TOGGLE_ELIMINATE', footballerId });
  };

  const handleEndTurn = () => {
    dispatch({ type: 'END_TURN' });
  };

  const handleGuess = () => {
    dispatch({ type: 'START_GUESS' });
  };

  const remainingCount = state.allFootballers.filter(
    (f) => !currentPlayer.eliminatedIds.has(f.id)
  ).length;

  return (
    <div className="game-board">
      <header className="game-header">
        <div className="player-info">
          <span className="player-badge">{currentPlayer.name}'s Turn</span>
          <span className="remaining-count">{remainingCount} remaining</span>
        </div>
        <div className="header-hint">
          Ask a yes/no question, then tap cards to eliminate
        </div>
      </header>

      <div className="footballer-grid">
        {state.allFootballers.map((footballer) => (
          <FootballerCard
            key={footballer.id}
            footballer={footballer}
            isEliminated={currentPlayer.eliminatedIds.has(footballer.id)}
            showName={true}
            onClick={() => handleCardClick(footballer.id)}
            size="small"
          />
        ))}
      </div>

      <div className="game-controls">
        <button className="guess-btn" onClick={handleGuess}>
          🎯 Make a Guess
        </button>
        <button className="end-turn-btn" onClick={handleEndTurn}>
          End Turn →
        </button>
      </div>

      <div className="question-suggestions">
        <p>Question ideas:</p>
        <div className="suggestion-tags">
          <span>Premier League?</span>
          <span>Forward?</span>
          <span>English?</span>
          <span>Facial hair?</span>
          <span>Blonde hair?</span>
        </div>
      </div>
    </div>
  );
}
