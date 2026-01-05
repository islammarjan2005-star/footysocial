import { useGame } from '../context/GameContext';
import './PassingScreen.css';

export function PassingScreen() {
  const { state, dispatch, currentPlayer } = useGame();

  if (!currentPlayer) return null;

  const handleReady = () => {
    dispatch({ type: 'READY_TO_PLAY' });
  };

  return (
    <div className="passing-screen">
      <div className="passing-card">
        <div className="pass-icon">📱</div>
        <h2>Pass the Device!</h2>
        <p className="pass-instruction">
          Hand the device to <strong>{currentPlayer.name}</strong>
        </p>

        <div className="privacy-notice">
          <span className="lock-icon">🔒</span>
          <p>Make sure no one else can see the screen before tapping "Ready"</p>
        </div>

        <button className="ready-btn" onClick={handleReady}>
          I'm {currentPlayer.name} - Ready to Play!
        </button>

        <div className="turn-order">
          <p>Turn order:</p>
          <div className="player-dots">
            {state.players.map((player, index) => (
              <div
                key={player.id}
                className={`player-dot ${
                  index === state.currentPlayerIndex ? 'active' : ''
                }`}
              >
                {player.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
