import { useState, useEffect, useCallback } from 'react';
import {
  higherLowerPlayers,
  getNextPlayer,
  getRandomSharedStat,
  getPlayerStat,
  statLabels,
  type HigherLowerPlayer,
  type StatType,
} from '../data/higherLowerData';
import './HigherLower.css';

interface HigherLowerProps {
  onBack: () => void;
}

type GameState = 'playing' | 'revealing' | 'correct' | 'wrong' | 'gameover';

export function HigherLower({ onBack }: HigherLowerProps) {
  const [leftPlayer, setLeftPlayer] = useState<HigherLowerPlayer | null>(null);
  const [rightPlayer, setRightPlayer] = useState<HigherLowerPlayer | null>(null);
  const [currentStatType, setCurrentStatType] = useState<StatType>('instagram');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('higherLowerHighScore');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [gameState, setGameState] = useState<GameState>('playing');
  const [displayedCount, setDisplayedCount] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [usedIds, setUsedIds] = useState<string[]>([]);
  const [lastGuess, setLastGuess] = useState<'higher' | 'lower'>('higher');

  // Initialize game
  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const shuffled = [...higherLowerPlayers].sort(() => Math.random() - 0.5);
    const player1 = shuffled[0];
    const player2 = shuffled[1];
    const statType = getRandomSharedStat(player1, player2);

    setLeftPlayer(player1);
    setRightPlayer(player2);
    setCurrentStatType(statType);
    setUsedIds([player1.id, player2.id]);
    setScore(0);
    setGameState('playing');
    setDisplayedCount(0);
  };

  // Count-up animation
  useEffect(() => {
    if (gameState === 'revealing' && rightPlayer) {
      const rightStat = getPlayerStat(rightPlayer, currentStatType);
      if (!rightStat) return;

      const target = rightStat.value;
      const duration = 1500;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setDisplayedCount(target);
          clearInterval(timer);
          // Small delay then show result
          setTimeout(() => {
            checkResult();
          }, 500);
        } else {
          setDisplayedCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [gameState, rightPlayer, currentStatType]);

  const checkResult = useCallback(() => {
    if (!leftPlayer || !rightPlayer) return;

    const leftStat = getPlayerStat(leftPlayer, currentStatType);
    const rightStat = getPlayerStat(rightPlayer, currentStatType);
    if (!leftStat || !rightStat) return;

    const wasHigher = rightStat.value >= leftStat.value;
    const guessedHigher = lastGuess === 'higher';

    if ((wasHigher && guessedHigher) || (!wasHigher && !guessedHigher)) {
      setGameState('correct');
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > highScore) {
        setHighScore(newScore);
        localStorage.setItem('higherLowerHighScore', newScore.toString());
      }
    } else {
      setGameState('wrong');
    }
  }, [leftPlayer, rightPlayer, currentStatType, score, highScore, lastGuess]);

  const handleGuess = (guess: 'higher' | 'lower') => {
    if (gameState !== 'playing') return;
    setLastGuess(guess);
    setGameState('revealing');
  };

  const handleNext = () => {
    if (gameState === 'wrong') {
      setGameState('gameover');
      return;
    }

    // Slide animation
    setIsSliding(true);

    setTimeout(() => {
      // Move right to left, get new right
      const newLeft = rightPlayer;
      const newRight = getNextPlayer([...usedIds]);
      const newStatType = newLeft ? getRandomSharedStat(newLeft, newRight) : 'instagram';

      setLeftPlayer(newLeft);
      setRightPlayer(newRight);
      setCurrentStatType(newStatType);
      setUsedIds(prev => [...prev, newRight.id]);
      setDisplayedCount(0);
      setGameState('playing');
      setIsSliding(false);
    }, 500);
  };

  if (!leftPlayer || !rightPlayer) {
    return <div className="higher-lower loading">Loading...</div>;
  }

  const leftStat = getPlayerStat(leftPlayer, currentStatType);
  const rightStat = getPlayerStat(rightPlayer, currentStatType);

  if (!leftStat || !rightStat) {
    return <div className="higher-lower loading">Loading...</div>;
  }

  // Format display value based on stat type
  const formatDisplayValue = (value: number, statType: StatType): string => {
    if (statType === 'weekly_wage') {
      if (value >= 1000000) return `£${(value / 1000000).toFixed(1)}M`;
      return `£${(value / 1000).toFixed(0)}K`;
    }
    if (statType === 'market_value') {
      return `€${value}M`;
    }
    if (statType === 'instagram') {
      return `${value}M`;
    }
    return value.toLocaleString();
  };

  return (
    <div className="higher-lower">
      {/* Header */}
      <div className="hl-header">
        <button className="hl-back-btn" onClick={onBack}>
          <span>←</span> Back
        </button>
        <div className="hl-score-container">
          <div className="hl-score">
            <span className="hl-score-label">Score</span>
            <span className="hl-score-value">{score}</span>
          </div>
          <div className="hl-highscore">
            <span className="hl-score-label">Best</span>
            <span className="hl-score-value">{highScore}</span>
          </div>
        </div>
      </div>

      {/* Stat Type Banner */}
      <div className="hl-stat-banner">
        <span className="hl-stat-type">{statLabels[currentStatType]}</span>
      </div>

      {/* Game Area */}
      <div className={`hl-game-area ${isSliding ? 'sliding' : ''}`}>
        {/* Left Card - Known */}
        <div className="hl-card hl-card-left">
          <div className="hl-card-bg" style={{ backgroundImage: `url(${leftPlayer.imageUrl})` }} />
          <div className="hl-card-overlay" />
          <div className="hl-card-content">
            <h2 className="hl-player-name">{leftPlayer.name}</h2>
            <p className="hl-player-team">{leftPlayer.team}</p>
            <div className="hl-stat-label">has</div>
            <div className="hl-stat-value">{leftStat.display}</div>
            <div className="hl-stat-unit">{leftStat.unit}</div>
          </div>
        </div>

        {/* VS Badge */}
        <div className="hl-vs-badge">
          <span>VS</span>
        </div>

        {/* Right Card - Guess */}
        <div className={`hl-card hl-card-right ${gameState === 'correct' ? 'correct' : ''} ${gameState === 'wrong' ? 'wrong' : ''}`}>
          <div className="hl-card-bg" style={{ backgroundImage: `url(${rightPlayer.imageUrl})` }} />
          <div className="hl-card-overlay" />
          <div className="hl-card-content">
            <h2 className="hl-player-name">{rightPlayer.name}</h2>
            <p className="hl-player-team">{rightPlayer.team}</p>

            {gameState === 'playing' ? (
              <>
                <div className="hl-stat-label">has</div>
                <div className="hl-guess-buttons">
                  <button className="hl-guess-btn higher" onClick={() => handleGuess('higher')}>
                    <span className="hl-arrow">▲</span>
                    Higher
                  </button>
                  <button className="hl-guess-btn lower" onClick={() => handleGuess('lower')}>
                    <span className="hl-arrow">▼</span>
                    Lower
                  </button>
                </div>
                <div className="hl-stat-unit">{rightStat.unit}</div>
              </>
            ) : (
              <>
                <div className="hl-stat-label">has</div>
                <div className={`hl-stat-value ${gameState === 'revealing' ? 'counting' : ''}`}>
                  {formatDisplayValue(displayedCount, currentStatType)}
                </div>
                <div className="hl-stat-unit">{rightStat.unit}</div>

                {(gameState === 'correct' || gameState === 'wrong') && (
                  <div className={`hl-result ${gameState}`}>
                    {gameState === 'correct' ? (
                      <>
                        <span className="hl-result-icon">✓</span>
                        <button className="hl-next-btn" onClick={handleNext}>Next</button>
                      </>
                    ) : (
                      <>
                        <span className="hl-result-icon">✗</span>
                        <button className="hl-next-btn" onClick={handleNext}>Continue</button>
                      </>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Game Over Modal */}
      {gameState === 'gameover' && (
        <div className="hl-gameover-overlay">
          <div className="hl-gameover-modal">
            <h2 className="hl-gameover-title">Game Over!</h2>
            <div className="hl-gameover-score">
              <span className="hl-gameover-label">Final Score</span>
              <span className="hl-gameover-value">{score}</span>
            </div>
            {score >= highScore && score > 0 && (
              <div className="hl-new-record">New High Score!</div>
            )}
            <div className="hl-gameover-highscore">
              Best: {highScore}
            </div>
            <div className="hl-gameover-buttons">
              <button className="hl-play-again-btn" onClick={startNewGame}>
                Play Again
              </button>
              <button className="hl-menu-btn" onClick={onBack}>
                Back to Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
