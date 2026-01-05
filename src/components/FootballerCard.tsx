import type { Footballer } from '../data/footballers';
import './FootballerCard.css';

interface FootballerCardProps {
  footballer: Footballer;
  isEliminated?: boolean;
  showName?: boolean;
  isSecret?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
}

export function FootballerCard({
  footballer,
  isEliminated = false,
  showName = false,
  isSecret = false,
  isSelected = false,
  onClick,
  size = 'small',
}: FootballerCardProps) {
  return (
    <div
      className={`footballer-card ${size} ${isEliminated ? 'eliminated' : ''} ${
        isSecret ? 'secret' : ''
      } ${isSelected ? 'selected' : ''} ${onClick ? 'clickable' : ''}`}
      onClick={onClick}
    >
      <div className="card-inner">
        <div className="card-frame">
          <div className="card-image">
            <img src={footballer.imageUrl} alt={footballer.name} />
            {isEliminated && <div className="eliminated-overlay">✕</div>}
          </div>
        </div>
        {showName && <div className="card-name">{footballer.name}</div>}
        {isSecret && (
          <div className="secret-badge">
            <span>YOUR SECRET</span>
          </div>
        )}
      </div>
    </div>
  );
}
