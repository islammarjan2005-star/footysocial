import { useGame } from '../context/GameContext';
import { FootballerCard } from './FootballerCard';
import { TrophyIcon, StarIcon } from './Icons';
import './GameOver.css';

// Generate confetti particles
const confettiColors = ['#ffd700', '#f0d048', '#c9a227', '#ffeb3b', '#ff9800', '#4caf50'];
const confettiShapes = ['square', 'rect', 'circle'];

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
      {/* Firework bursts */}
      <div className="fireworks">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="firework" style={{ '--delay': `${i * 0.5}s` } as React.CSSProperties}>
            {[...Array(12)].map((_, j) => (
              <div key={j} className="spark" style={{ '--angle': `${j * 30}deg` } as React.CSSProperties} />
            ))}
          </div>
        ))}
      </div>

      {/* Confetti particles */}
      <div className="confetti-container">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className={`confetti-piece ${confettiShapes[i % 3]}`}
            style={{
              left: `${Math.random() * 100}%`,
              backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)],
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating stars */}
      <div className="floating-stars">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="floating-star"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <StarIcon size={24} color="#f0d048" />
          </div>
        ))}
      </div>

      <div className="game-over-card">
        <div className="trophy-container">
          <div className="trophy-glow" />
          <div className="trophy-icon">
            <TrophyIcon size={80} color="#f0d048" />
          </div>
          <div className="trophy-rays" />
        </div>

        <h1>WINNER!</h1>
        <div className="winner-name">{state.winner.name}</div>

        <div className="reveal-section">
          <p>The secret footballers were:</p>
          <div className="reveals">
            {state.players.map((player) => (
              <div key={player.id} className={`reveal-item ${player.id === state.winner?.id ? 'winner' : ''}`}>
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
