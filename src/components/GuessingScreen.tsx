import { useState } from 'react';
import { useGame } from '../context/GameContext';
import { FootballerCard } from './FootballerCard';
import './GuessingScreen.css';

export function GuessingScreen() {
  const { state, dispatch, currentPlayer } = useGame();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  if (!currentPlayer) return null;

  // Filter to show only non-eliminated footballers
  const availableFootballers = state.allFootballers.filter(
    (f) => !currentPlayer.eliminatedIds.has(f.id)
  );

  const handleSelect = (footballerId: number) => {
    setSelectedId(footballerId);
  };

  const handleConfirmGuess = () => {
    if (selectedId !== null) {
      dispatch({ type: 'MAKE_GUESS', footballerId: selectedId });
    }
  };

  const handleCancel = () => {
    dispatch({ type: 'CANCEL_GUESS' });
  };

  const selectedFootballer = state.allFootballers.find(
    (f) => f.id === selectedId
  );

  return (
    <div className="guessing-screen">
      <header className="guess-header">
        <h2>🎯 Make Your Guess!</h2>
        <p>Select who you think is your opponent's secret footballer</p>
      </header>

      <div className="guess-grid">
        {availableFootballers.map((footballer) => (
          <FootballerCard
            key={footballer.id}
            footballer={footballer}
            showName={true}
            isSelected={selectedId === footballer.id}
            onClick={() => handleSelect(footballer.id)}
            size="small"
          />
        ))}
      </div>

      {selectedId && selectedFootballer && (
        <div className="guess-confirmation">
          <p>
            You're guessing: <strong>{selectedFootballer.name}</strong>
          </p>
          <p className="warning">
            ⚠️ If you're wrong, you lose your turn!
          </p>
        </div>
      )}

      <div className="guess-controls">
        <button className="cancel-btn" onClick={handleCancel}>
          ← Go Back
        </button>
        <button
          className="confirm-guess-btn"
          onClick={handleConfirmGuess}
          disabled={selectedId === null}
        >
          Confirm Guess
        </button>
      </div>
    </div>
  );
}
