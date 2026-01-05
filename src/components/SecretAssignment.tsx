import { useState } from 'react';
import { useGame } from '../context/GameContext';
import { FootballerCard } from './FootballerCard';
import './SecretAssignment.css';

export function SecretAssignment() {
  const { state, dispatch, currentPlayer } = useGame();
  const [isRevealed, setIsRevealed] = useState(false);

  if (!currentPlayer) return null;

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const handleConfirm = () => {
    setIsRevealed(false);
    dispatch({ type: 'CONFIRM_SECRET', playerId: currentPlayer.id });
  };

  const isLastPlayer = state.currentPlayerIndex === state.players.length - 1;

  return (
    <div className="secret-assignment">
      <div className="assignment-card">
        <h2>{currentPlayer.name}</h2>
        <p className="instruction">
          {isRevealed
            ? 'Remember this footballer - they are your secret!'
            : 'Tap the card to reveal your secret footballer'}
        </p>

        <div className="secret-card-container">
          {!isRevealed ? (
            <div className="hidden-card" onClick={handleReveal}>
              <div className="hidden-card-inner">
                <span>?</span>
                <p>Tap to Reveal</p>
              </div>
            </div>
          ) : (
            <div className="revealed-card">
              <FootballerCard
                footballer={currentPlayer.secretFootballer}
                showName={true}
                isSecret={true}
                size="large"
              />
              <div className="footballer-details">
                <div className="detail">
                  <span className="label">Position:</span>
                  <span className="value">{currentPlayer.secretFootballer.position}</span>
                </div>
                <div className="detail">
                  <span className="label">Club:</span>
                  <span className="value">{currentPlayer.secretFootballer.club}</span>
                </div>
                <div className="detail">
                  <span className="label">League:</span>
                  <span className="value">{currentPlayer.secretFootballer.league}</span>
                </div>
                <div className="detail">
                  <span className="label">Nationality:</span>
                  <span className="value">{currentPlayer.secretFootballer.nationality}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {isRevealed && (
          <button className="confirm-btn" onClick={handleConfirm}>
            {isLastPlayer ? 'Start Game!' : 'Got it! Next Player'}
          </button>
        )}
      </div>
    </div>
  );
}
