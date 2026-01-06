import { useState } from 'react';
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
  showRating?: boolean;
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

// Player ratings
const getPlayerRating = (name: string): number => {
  const ratings: Record<string, number> = {
    'Erling Haaland': 91, 'Mohamed Salah': 90, 'Kevin De Bruyne': 91,
    'Bukayo Saka': 86, 'Bruno Fernandes': 88, 'Virgil van Dijk': 89,
    'Jude Bellingham': 90, 'Vinicius Jr': 92, 'Robert Lewandowski': 88,
    'Pedri': 87, 'Lamine Yamal': 83, 'Thibaut Courtois': 90,
    'Lautaro Martinez': 88, 'Rafael Leao': 86, 'Victor Osimhen': 87,
    'Florian Wirtz': 87, 'Jamal Musiala': 86, 'Harry Kane': 90,
    'Kylian Mbappe': 93, 'Ousmane Dembele': 85, 'Declan Rice': 89,
    'Marcus Rashford': 84, 'Alisson Becker': 89, 'Phil Foden': 88,
  };
  return ratings[name] || 85;
};

export function FootballerCard({
  footballer,
  isEliminated = false,
  showName = false,
  isSecret = false,
  isSelected = false,
  onClick,
  size = 'small',
  showRating = true,
}: FootballerCardProps) {
  const [isFlipping, setIsFlipping] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  const handleClick = () => {
    if (onClick && !isEliminated) {
      // Trigger particle burst
      setShowParticles(true);
      setTimeout(() => setShowParticles(false), 600);

      // Trigger flip animation
      setIsFlipping(true);
      setTimeout(() => {
        setIsFlipping(false);
        onClick();
      }, 300);
    } else if (onClick) {
      onClick();
    }
  };

  const rating = getPlayerRating(footballer.name);

  return (
    <div
      className={`footballer-card ${size} ${isEliminated ? 'eliminated' : ''} ${
        isSecret ? 'secret' : ''
      } ${isSelected ? 'selected' : ''} ${onClick ? 'clickable' : ''} ${isFlipping ? 'flipping' : ''}`}
      onClick={handleClick}
    >
      {/* Particle burst effect */}
      {showParticles && (
        <div className="particle-container">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="particle" style={{ '--i': i } as React.CSSProperties} />
          ))}
        </div>
      )}

      <div className="card-inner">
        <div className="card-frame">
          <div className="card-shine" />
          <div className="card-glow" />
          <div className="card-gloss" />

          {/* Rating badge - FUT style */}
          {showRating && (
            <div className="card-rating">
              <span className="rating-number">{rating}</span>
              <span className="rating-pos">{getPositionCode(footballer.position)}</span>
            </div>
          )}

          <div className="card-image-container">
            <div className="card-image">
              <img
                src={footballer.imageUrl}
                alt={footballer.name}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(footballer.name)}&backgroundColor=b6e3f4`;
                }}
              />
            </div>
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
