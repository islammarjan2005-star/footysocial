import { useGame } from '../context/GameContext';
import { FootballerCard } from './FootballerCard';
import './GameOver.css';

export function GameOver() {
  const { state, dispatch } = useGame();

  const handlePlayAgain = () => {
    dispatch({ type: 'RESET_GAME' });
  };

  if (!state.winner) return null;

  return (
    <div className="game-over">
      <div className="game-over-card">
        <div className="confetti">🎉</div>
        <h1>Winner!</h1>
        <div className="winner-name">{state.winner.name}</div>

        <div className="reveal-section">
          <p>The secret footballers were:</p>
          <div className="reveals">
            {state.players.map((player) => (
              <div key={player.id} className="reveal-item">
                <span className="reveal-player">{player.name}:</span>
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

        <button className="play-again-btn" onClick={handlePlayAgain}>
          🔄 Play Again
        </button>
      </div>
    </div>
  );
}
