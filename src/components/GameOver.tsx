import { useGame } from '../context/GameContext';
import { FootballerCard } from './FootballerCard';
import './GameOver.css';

// Generate confetti particles
const confettiColors = ['#ffd700', '#00ff88', '#00b4ff', '#ff4757', '#a855f7'];

interface GameOverProps {
  onBackToLanding?: () => void;
}

export function GameOver({ onBackToLanding }: GameOverProps) {
  const { state, dispatch } = useGame();

  const handlePlayAgain = () => {
    dispatch({ type: 'RESET_GAME' });
  };

  if (!state.winner) return null;

  return (
    <div className="game-over">
      {/* Confetti particles */}
      <div className="confetti-container">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="confetti-piece"
            style={{
              left: `${Math.random() * 100}%`,
              backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)],
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="game-over-card">
        <div className="trophy-icon">🏆</div>
        <h1>Winner!</h1>
        <div className="winner-name">{state.winner.name}</div>

        <div className="reveal-section">
          <p>The secret footballers were:</p>
          <div className="reveals">
            {state.players.map((player) => (
              <div key={player.id} className="reveal-item">
                <span className="reveal-player">
                  {player.name}
                  {player.id === state.winner?.id && <span className="crown">👑</span>}
                </span>
                <div className="reveal-card">
                  <FootballerCard
                    footballer={player.secretFootballer}
                    showName={true}
                    size="medium"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="game-over-buttons">
          <button className="play-again-btn" onClick={handlePlayAgain}>
            <span>Play Again</span>
            <span className="btn-icon">↻</span>
          </button>
          {onBackToLanding && (
            <button className="back-home-btn" onClick={onBackToLanding}>
              <span>Back to Home</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
