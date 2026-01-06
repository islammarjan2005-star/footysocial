import { useState } from 'react';
import { useGame } from '../context/GameContext';
import './SetupScreen.css';

interface SetupScreenProps {
  onBack?: () => void;
}

export function SetupScreen({ onBack }: SetupScreenProps) {
  const { dispatch } = useGame();
  const [playerCount, setPlayerCount] = useState(2);

  const handleStart = () => {
    dispatch({ type: 'START_GAME', playerCount });
  };

  return (
    <div className="setup-screen">
      {/* Back button */}
      {onBack && (
        <button className="back-to-home" onClick={onBack}>
          <span className="back-arrow">←</span>
          <span>Home</span>
        </button>
      )}

      {/* Floating particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }} />
        ))}
      </div>

      <div className="setup-card">
        <div className="logo">
          <div className="logo-icon">
            <span>⚽</span>
          </div>
          <h1>Footy Social</h1>
          <div className="logo-tagline">Party Games</div>
        </div>

        <div className="game-mode">
          <h2>Guess Who</h2>
          <p className="subtitle">Football Edition</p>
        </div>

        <div className="player-select">
          <label>Select Players</label>
          <div className="player-buttons">
            {[2, 3, 4].map((num) => (
              <button
                key={num}
                className={`player-btn ${playerCount === num ? 'active' : ''}`}
                onClick={() => setPlayerCount(num)}
              >
                <span className="player-num">{num}</span>
                <span className="player-label">players</span>
              </button>
            ))}
          </div>
        </div>

        <button className="start-btn" onClick={handleStart}>
          <span className="btn-text">Start Game</span>
          <span className="btn-icon">→</span>
        </button>

        <div className="rules">
          <h3>How to Play</h3>
          <div className="rules-grid">
            <div className="rule-item">
              <span className="rule-icon">🎭</span>
              <span>Get a secret footballer</span>
            </div>
            <div className="rule-item">
              <span className="rule-icon">❓</span>
              <span>Ask yes/no questions</span>
            </div>
            <div className="rule-item">
              <span className="rule-icon">❌</span>
              <span>Eliminate suspects</span>
            </div>
            <div className="rule-item">
              <span className="rule-icon">🏆</span>
              <span>Guess to win!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
