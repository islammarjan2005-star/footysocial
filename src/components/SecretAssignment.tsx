import { useState } from 'react';
import { useGame } from '../context/GameContext';
import { footballers, type Footballer } from '../data/footballers';
import { FootballerCard } from './FootballerCard';
import './SecretAssignment.css';

export function SecretAssignment() {
  const { state, dispatch, currentPlayer } = useGame();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  if (!currentPlayer) return null;

  const handleSelect = (footballer: Footballer) => {
    // Can't select already taken footballers
    if (state.selectedFootballerIds.has(footballer.id)) return;

    setSelectedId(footballer.id);
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    if (selectedId) {
      dispatch({ type: 'SELECT_SECRET', footballerId: selectedId });
      setSelectedId(null);
      setShowConfirm(false);
    }
  };

  const handleCancel = () => {
    setSelectedId(null);
    setShowConfirm(false);
  };

  const selectedFootballer = selectedId
    ? footballers.find(f => f.id === selectedId)
    : null;

  // Show confirmation modal if player has selected
  if (showConfirm && selectedFootballer) {
    return (
      <div className="secret-assignment">
        <div className="assignment-card confirm-card">
          <h2>{currentPlayer.name}</h2>
          <p className="instruction">
            Are you sure you want this footballer as your secret?
          </p>

          <div className="selected-footballer">
            <FootballerCard
              footballer={selectedFootballer}
              showName={true}
              isSecret={true}
              size="large"
            />
            <div className="footballer-details">
              <div className="detail">
                <span className="label">Position:</span>
                <span className="value">{selectedFootballer.position}</span>
              </div>
              <div className="detail">
                <span className="label">Club:</span>
                <span className="value">{selectedFootballer.club}</span>
              </div>
              <div className="detail">
                <span className="label">League:</span>
                <span className="value">{selectedFootballer.league}</span>
              </div>
              <div className="detail">
                <span className="label">Nationality:</span>
                <span className="value">{selectedFootballer.nationality}</span>
              </div>
            </div>
          </div>

          <div className="confirm-buttons">
            <button className="cancel-btn" onClick={handleCancel}>
              Pick Different
            </button>
            <button className="confirm-btn" onClick={handleConfirm}>
              Confirm Selection
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Show selection grid
  return (
    <div className="secret-assignment selection-mode">
      <div className="selection-header">
        <h2>{currentPlayer.name}, Choose Your Secret Player!</h2>
        <p className="instruction">
          Tap a footballer to select them as your secret. Other players will try to guess who you picked!
        </p>
      </div>

      <div className="footballer-selection-grid">
        {footballers.map((footballer) => {
          const isTaken = state.selectedFootballerIds.has(footballer.id);
          return (
            <div
              key={footballer.id}
              className={`selection-card ${isTaken ? 'taken' : ''} ${selectedId === footballer.id ? 'selected' : ''}`}
              onClick={() => !isTaken && handleSelect(footballer)}
            >
              <FootballerCard
                footballer={footballer}
                showName={true}
                size="small"
                isEliminated={isTaken}
              />
              {isTaken && <div className="taken-overlay">TAKEN</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
