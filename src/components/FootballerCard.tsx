import type { Footballer } from '../data/footballers';
import { FlagIcon, CrossIcon } from './Icons';
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

// Get short position code
const getPositionCode = (position: string) => {
  switch (position) {
    case 'Goalkeeper': return 'GK';
    case 'Defender': return 'DEF';
    case 'Midfielder': return 'MID';
    case 'Forward': return 'FWD';
    default: return position.substring(0, 3).toUpperCase();
  }
};

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
          <div className="card-shine" />
          <div className="card-image-container">
            <div className="card-image">
              <img src={footballer.imageUrl} alt={footballer.name} />
            </div>
            <div className="card-position">{getPositionCode(footballer.position)}</div>
            <div className="card-flag">
              <FlagIcon country={footballer.nationality} size={18} />
            </div>
            {isEliminated && (
              <div className="eliminated-overlay">
                <span className="eliminated-x"><CrossIcon size={32} color="#fff" /></span>
              </div>
            )}
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
