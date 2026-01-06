import { useState } from 'react';
import { useGame } from '../context/GameContext';
import { FootballerCard } from './FootballerCard';
import { ArrowLeftIcon } from './Icons';
import './GameBoard.css';

export function GameBoard() {
  const { state, dispatch, currentPlayer } = useGame();
  const [ripple, setRipple] = useState<{ x: number; y: number; id: number } | null>(null);

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

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>, callback: () => void) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ x, y, id: Date.now() });
    setTimeout(() => setRipple(null), 600);
    callback();
  };

  const totalCount = state.allFootballers.length;
  const remainingCount = state.allFootballers.filter(
    (f) => !currentPlayer.eliminatedIds.has(f.id)
  ).length;
  const eliminatedCount = totalCount - remainingCount;
  const progressPercent = (eliminatedCount / totalCount) * 100;

  // Tension level based on remaining cards
  const getTensionLevel = () => {
    if (remainingCount <= 3) return 'critical';
    if (remainingCount <= 6) return 'high';
    if (remainingCount <= 12) return 'medium';
    return 'low';
  };

  return (
    <div className={`game-board tension-${getTensionLevel()}`}>
      <header className="game-header">
        <div className="player-info">
          <span className="player-badge">{currentPlayer.name}'s Turn</span>
          <div className="remaining-display">
            <span className="remaining-count">{remainingCount}</span>
            <span className="remaining-label">remaining</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
            <div className="progress-glow" style={{ left: `${progressPercent}%` }} />
          </div>
          <div className="progress-markers">
            <span className={eliminatedCount >= 6 ? 'reached' : ''}>25%</span>
            <span className={eliminatedCount >= 12 ? 'reached' : ''}>50%</span>
            <span className={eliminatedCount >= 18 ? 'reached' : ''}>75%</span>
          </div>
        </div>

        <div className="header-hint">
          <ArrowLeftIcon size={14} />
          <span>Tap cards to eliminate players</span>
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
        <button
          className="guess-btn"
          onClick={(e) => handleButtonClick(e, handleGuess)}
        >
          {ripple && (
            <span
              className="ripple"
              style={{ left: ripple.x, top: ripple.y }}
            />
          )}
          <span className="btn-icon">🎯</span>
          <span>Make a Guess</span>
        </button>
        <button
          className="end-turn-btn"
          onClick={(e) => handleButtonClick(e, handleEndTurn)}
        >
          <span>End Turn</span>
          <span className="btn-arrow">→</span>
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
