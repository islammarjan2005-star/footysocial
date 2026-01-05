import { useState } from 'react';
import { useGame } from '../context/GameContext';
import './SetupScreen.css';

export function SetupScreen() {
  const { dispatch } = useGame();
  const [playerCount, setPlayerCount] = useState(2);

  const handleStart = () => {
    dispatch({ type: 'START_GAME', playerCount });
  };

  return (
    <div className="setup-screen">
      <div className="setup-card">
        <div className="logo">
          <span className="logo-icon">⚽</span>
          <h1>Footy Social</h1>
        </div>

        <h2>Guess Who</h2>
        <p className="subtitle">Football Edition</p>

        <div className="player-select">
          <label>Number of Players</label>
          <div className="player-buttons">
            {[2, 3, 4].map((num) => (
              <button
                key={num}
                className={`player-btn ${playerCount === num ? 'active' : ''}`}
                onClick={() => setPlayerCount(num)}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <button className="start-btn" onClick={handleStart}>
          Start Game
        </button>

        <div className="rules">
          <h3>How to Play</h3>
          <ul>
            <li>Each player gets a secret footballer</li>
            <li>Take turns asking yes/no questions</li>
            <li>Eliminate footballers who don't match</li>
            <li>First to guess correctly wins!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
