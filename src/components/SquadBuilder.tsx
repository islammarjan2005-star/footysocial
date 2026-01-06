import { useState, useEffect } from 'react';
import { footballers, type Footballer } from '../data/footballers';
import { ArrowLeftIcon } from './Icons';
import './SquadBuilder.css';

interface SquadBuilderProps {
  onBack: () => void;
}

interface FormationPosition {
  id: string;
  name: string;
  row: number;
  col: number;
  x: number;
  y: number;
}

const formations: Record<string, FormationPosition[]> = {
  '4-3-3': [
    { id: 'GK', name: 'GK', row: 4, col: 2, x: 50, y: 90 },
    { id: 'LB', name: 'LB', row: 3, col: 0, x: 10, y: 72 },
    { id: 'CB1', name: 'CB', row: 3, col: 1, x: 35, y: 75 },
    { id: 'CB2', name: 'CB', row: 3, col: 3, x: 65, y: 75 },
    { id: 'RB', name: 'RB', row: 3, col: 4, x: 90, y: 72 },
    { id: 'CM1', name: 'CM', row: 2, col: 1, x: 25, y: 52 },
    { id: 'CDM', name: 'CDM', row: 2, col: 2, x: 50, y: 55 },
    { id: 'CM2', name: 'CM', row: 2, col: 3, x: 75, y: 52 },
    { id: 'LW', name: 'LW', row: 1, col: 0, x: 15, y: 28 },
    { id: 'ST', name: 'ST', row: 1, col: 2, x: 50, y: 22 },
    { id: 'RW', name: 'RW', row: 1, col: 4, x: 85, y: 28 },
  ],
  '4-4-2': [
    { id: 'GK', name: 'GK', row: 4, col: 2, x: 50, y: 90 },
    { id: 'LB', name: 'LB', row: 3, col: 0, x: 10, y: 72 },
    { id: 'CB1', name: 'CB', row: 3, col: 1, x: 35, y: 75 },
    { id: 'CB2', name: 'CB', row: 3, col: 3, x: 65, y: 75 },
    { id: 'RB', name: 'RB', row: 3, col: 4, x: 90, y: 72 },
    { id: 'LM', name: 'LM', row: 2, col: 0, x: 12, y: 50 },
    { id: 'CM1', name: 'CM', row: 2, col: 1, x: 38, y: 52 },
    { id: 'CM2', name: 'CM', row: 2, col: 3, x: 62, y: 52 },
    { id: 'RM', name: 'RM', row: 2, col: 4, x: 88, y: 50 },
    { id: 'ST1', name: 'ST', row: 1, col: 1, x: 35, y: 25 },
    { id: 'ST2', name: 'ST', row: 1, col: 3, x: 65, y: 25 },
  ],
  '4-5-1': [
    { id: 'GK', name: 'GK', row: 4, col: 2, x: 50, y: 90 },
    { id: 'LB', name: 'LB', row: 3, col: 0, x: 10, y: 72 },
    { id: 'CB1', name: 'CB', row: 3, col: 1, x: 35, y: 75 },
    { id: 'CB2', name: 'CB', row: 3, col: 3, x: 65, y: 75 },
    { id: 'RB', name: 'RB', row: 3, col: 4, x: 90, y: 72 },
    { id: 'LM', name: 'LM', row: 2, col: 0, x: 8, y: 48 },
    { id: 'CM1', name: 'CM', row: 2, col: 1, x: 30, y: 55 },
    { id: 'CAM', name: 'CAM', row: 2, col: 2, x: 50, y: 42 },
    { id: 'CM2', name: 'CM', row: 2, col: 3, x: 70, y: 55 },
    { id: 'RM', name: 'RM', row: 2, col: 4, x: 92, y: 48 },
    { id: 'ST', name: 'ST', row: 1, col: 2, x: 50, y: 20 },
  ],
};

const formationList = ['4-3-3', '4-4-2', '4-5-1'];

// Get flag class for nationality
const getFlagClass = (nationality: string): string => {
  const flagMap: Record<string, string> = {
    'Brazil': 'flag-br',
    'Norway': 'flag-no',
    'Egypt': 'flag-eg',
    'Belgium': 'flag-be',
    'England': 'flag-en',
    'Portugal': 'flag-pt',
    'Netherlands': 'flag-nl',
    'Spain': 'flag-es',
    'France': 'flag-fr',
    'Germany': 'flag-de',
    'Argentina': 'flag-ar',
    'Poland': 'flag-pl',
    'Nigeria': 'flag-ng',
  };
  return flagMap[nationality] || 'flag-default';
};

// Generate random rating based on position
const getPlayerRating = (footballer: Footballer): number => {
  const baseRatings: Record<string, number> = {
    'Erling Haaland': 91,
    'Mohamed Salah': 90,
    'Kevin De Bruyne': 91,
    'Bukayo Saka': 86,
    'Bruno Fernandes': 88,
    'Virgil van Dijk': 89,
    'Jude Bellingham': 90,
    'Vinicius Jr': 92,
    'Robert Lewandowski': 88,
    'Pedri': 87,
    'Lamine Yamal': 83,
    'Thibaut Courtois': 90,
    'Lautaro Martinez': 88,
    'Rafael Leao': 86,
    'Victor Osimhen': 87,
    'Florian Wirtz': 87,
    'Jamal Musiala': 86,
    'Harry Kane': 90,
    'Kylian Mbappe': 93,
    'Ousmane Dembele': 85,
    'Declan Rice': 89,
    'Marcus Rashford': 84,
    'Alisson Becker': 89,
    'Phil Foden': 88,
  };
  return baseRatings[footballer.name] || 85;
};

// Player ages (approximate for 2024/25 season)
const getPlayerAge = (name: string): number => {
  const ages: Record<string, number> = {
    'Erling Haaland': 24,
    'Mohamed Salah': 32,
    'Kevin De Bruyne': 33,
    'Bukayo Saka': 23,
    'Bruno Fernandes': 30,
    'Virgil van Dijk': 33,
    'Jude Bellingham': 21,
    'Vinicius Jr': 24,
    'Robert Lewandowski': 36,
    'Pedri': 22,
    'Lamine Yamal': 17,
    'Thibaut Courtois': 32,
    'Lautaro Martinez': 27,
    'Rafael Leao': 25,
    'Victor Osimhen': 25,
    'Florian Wirtz': 21,
    'Jamal Musiala': 21,
    'Harry Kane': 31,
    'Kylian Mbappe': 26,
    'Ousmane Dembele': 27,
    'Declan Rice': 25,
    'Marcus Rashford': 27,
    'Alisson Becker': 32,
    'Phil Foden': 24,
  };
  return ages[name] || 25;
};

// Player preferred foot
const getPreferredFoot = (name: string): string => {
  const leftFooted = ['Lionel Messi', 'Mohamed Salah', 'Phil Foden', 'Rafael Leao', 'Florian Wirtz'];
  return leftFooted.includes(name) ? 'Left' : 'Right';
};

// Player jersey numbers
const getJerseyNumber = (name: string): number => {
  const numbers: Record<string, number> = {
    'Erling Haaland': 9,
    'Mohamed Salah': 11,
    'Kevin De Bruyne': 17,
    'Bukayo Saka': 7,
    'Bruno Fernandes': 8,
    'Virgil van Dijk': 4,
    'Jude Bellingham': 5,
    'Vinicius Jr': 7,
    'Robert Lewandowski': 9,
    'Pedri': 8,
    'Lamine Yamal': 19,
    'Thibaut Courtois': 1,
    'Lautaro Martinez': 10,
    'Rafael Leao': 10,
    'Victor Osimhen': 9,
    'Florian Wirtz': 10,
    'Jamal Musiala': 42,
    'Harry Kane': 9,
    'Kylian Mbappe': 9,
    'Ousmane Dembele': 10,
    'Declan Rice': 41,
    'Marcus Rashford': 10,
    'Alisson Becker': 1,
    'Phil Foden': 47,
  };
  return numbers[name] || 10;
};

export function SquadBuilder({ onBack }: SquadBuilderProps) {
  const [currentFormation, setCurrentFormation] = useState('4-3-3');
  const [squad, setSquad] = useState<(Footballer | null)[]>(Array(11).fill(null));
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [showPlayerSelect, setShowPlayerSelect] = useState(false);
  const [teamRating, setTeamRating] = useState(0);
  const [chemistry, setChemistry] = useState(0);
  const [viewingPlayer, setViewingPlayer] = useState<{ player: Footballer; slotIndex: number } | null>(null);

  // Initialize with random squad
  useEffect(() => {
    const shuffled = [...footballers].sort(() => Math.random() - 0.5);
    setSquad(shuffled.slice(0, 11));
  }, []);

  // Calculate team rating and chemistry
  useEffect(() => {
    const filledSquad = squad.filter(p => p !== null) as Footballer[];
    if (filledSquad.length > 0) {
      const avgRating = Math.round(
        filledSquad.reduce((sum, p) => sum + getPlayerRating(p), 0) / filledSquad.length
      );
      setTeamRating(avgRating);

      // Simple chemistry calculation based on same league/club
      let chem = 0;
      const leagues = filledSquad.map(p => p.league);
      const clubs = filledSquad.map(p => p.club);

      leagues.forEach((league) => {
        if (leagues.filter(l => l === league).length > 1) chem += 3;
      });
      clubs.forEach((club) => {
        if (clubs.filter(c => c === club).length > 1) chem += 5;
      });

      setChemistry(Math.min(33, chem));
    }
  }, [squad]);

  const handleSlotClick = (index: number) => {
    const player = squad[index];
    if (player) {
      // Show player details if slot has a player
      setViewingPlayer({ player, slotIndex: index });
    } else {
      // Open player select if slot is empty
      setSelectedSlot(index);
      setShowPlayerSelect(true);
    }
  };

  const handleChangePlayer = () => {
    if (viewingPlayer) {
      setSelectedSlot(viewingPlayer.slotIndex);
      setViewingPlayer(null);
      setShowPlayerSelect(true);
    }
  };

  const handlePlayerSelect = (player: Footballer) => {
    if (selectedSlot !== null) {
      const newSquad = [...squad];
      // Check if player already in squad
      const existingIndex = newSquad.findIndex(p => p?.id === player.id);
      if (existingIndex !== -1) {
        // Swap players
        newSquad[existingIndex] = newSquad[selectedSlot];
      }
      newSquad[selectedSlot] = player;
      setSquad(newSquad);
      setShowPlayerSelect(false);
      setSelectedSlot(null);
    }
  };

  const handleFormationChange = () => {
    const currentIndex = formationList.indexOf(currentFormation);
    const nextIndex = (currentIndex + 1) % formationList.length;
    setCurrentFormation(formationList[nextIndex]);
  };

  const positions = formations[currentFormation];

  return (
    <div className="squad-builder">
      {/* Header */}
      <header className="sb-header">
        <button className="sb-back-btn" onClick={onBack}>
          <ArrowLeftIcon size={24} />
          <span>Back</span>
        </button>
        <div className="sb-title">
          <h1>Squad Builder</h1>
          <span className="sb-subtitle">FUT Challenge</span>
        </div>
        <div className="sb-stats">
          <div className="sb-stat">
            <span className="sb-stat-value">{teamRating}</span>
            <span className="sb-stat-label">Rating</span>
          </div>
          <div className="sb-stat">
            <span className="sb-stat-value">{chemistry}</span>
            <span className="sb-stat-label">Chemistry</span>
          </div>
        </div>
      </header>

      {/* Pitch */}
      <div className="sb-pitch-container">
        <div className="sb-pitch">
          {/* Pitch markings */}
          <div className="sb-pitch-markings">
            <div className="sb-center-circle"></div>
            <div className="sb-center-line"></div>
            <div className="sb-penalty-box top"></div>
            <div className="sb-penalty-box bottom"></div>
            <div className="sb-goal-box top"></div>
            <div className="sb-goal-box bottom"></div>
          </div>

          {/* Player cards */}
          {positions.map((pos, index) => {
            const player = squad[index];
            return (
              <div
                key={pos.id}
                className={`sb-player-slot ${selectedSlot === index ? 'selected' : ''} ${player ? 'filled' : 'empty'}`}
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                onClick={() => handleSlotClick(index)}
              >
                {player ? (
                  <div className="sb-fut-card">
                    <div className="sb-card-top">
                      <div className="sb-card-rating">{getPlayerRating(player)}</div>
                      <div className="sb-card-pos">{pos.name}</div>
                    </div>
                    <div className="sb-card-face">
                      <img
                        src={player.imageUrl}
                        alt={player.name}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(player.name)}`;
                        }}
                      />
                    </div>
                    <div className="sb-card-bottom">
                      <div className={`sb-card-flag ${getFlagClass(player.nationality)}`}></div>
                      <div className="sb-card-name">{player.name.split(' ').pop()}</div>
                    </div>
                  </div>
                ) : (
                  <div className="sb-empty-card">
                    <div className="sb-empty-pos">{pos.name}</div>
                    <div className="sb-empty-plus">+</div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Formation label */}
          <div className="sb-formation-label" onClick={handleFormationChange}>
            {currentFormation}
          </div>
        </div>
      </div>

      {/* Player Selection Modal */}
      {showPlayerSelect && (
        <div className="sb-modal-overlay" onClick={() => setShowPlayerSelect(false)}>
          <div className="sb-modal" onClick={e => e.stopPropagation()}>
            <div className="sb-modal-header">
              <h2>Select Player</h2>
              <button className="sb-modal-close" onClick={() => setShowPlayerSelect(false)}>×</button>
            </div>
            <div className="sb-player-grid">
              {footballers.map(player => (
                <div
                  key={player.id}
                  className={`sb-player-option ${squad.some(p => p?.id === player.id) ? 'in-squad' : ''}`}
                  onClick={() => handlePlayerSelect(player)}
                >
                  <div className="sb-option-card">
                    <div className="sb-option-rating">{getPlayerRating(player)}</div>
                    <div className="sb-option-face">
                      <img
                        src={player.imageUrl}
                        alt={player.name}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(player.name)}`;
                        }}
                      />
                    </div>
                    <div className={`sb-option-flag ${getFlagClass(player.nationality)}`}></div>
                  </div>
                  <span className="sb-option-name">{player.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Player Details Modal */}
      {viewingPlayer && (
        <div className="sb-modal-overlay" onClick={() => setViewingPlayer(null)}>
          <div className="sb-details-modal" onClick={e => e.stopPropagation()}>
            <button className="sb-modal-close details-close" onClick={() => setViewingPlayer(null)}>×</button>

            <div className="sb-details-card">
              <div className="sb-details-card-bg"></div>
              <div className="sb-details-rating">{getPlayerRating(viewingPlayer.player)}</div>
              <div className="sb-details-position">{viewingPlayer.player.position.substring(0, 3).toUpperCase()}</div>
              <div className="sb-details-face">
                <img
                  src={viewingPlayer.player.imageUrl}
                  alt={viewingPlayer.player.name}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(viewingPlayer.player.name)}`;
                  }}
                />
              </div>
              <div className="sb-details-name">{viewingPlayer.player.name}</div>
              <div className={`sb-details-flag ${getFlagClass(viewingPlayer.player.nationality)}`}></div>
            </div>

            <div className="sb-details-info">
              <div className="sb-details-row">
                <span className="sb-details-label">Full Name</span>
                <span className="sb-details-value">{viewingPlayer.player.name}</span>
              </div>
              <div className="sb-details-row">
                <span className="sb-details-label">Club</span>
                <span className="sb-details-value">{viewingPlayer.player.club}</span>
              </div>
              <div className="sb-details-row">
                <span className="sb-details-label">League</span>
                <span className="sb-details-value">{viewingPlayer.player.league}</span>
              </div>
              <div className="sb-details-row">
                <span className="sb-details-label">Position</span>
                <span className="sb-details-value">{viewingPlayer.player.position}</span>
              </div>
              <div className="sb-details-row">
                <span className="sb-details-label">Nationality</span>
                <span className="sb-details-value">{viewingPlayer.player.nationality}</span>
              </div>
              <div className="sb-details-row">
                <span className="sb-details-label">Age</span>
                <span className="sb-details-value">{getPlayerAge(viewingPlayer.player.name)}</span>
              </div>
              <div className="sb-details-row">
                <span className="sb-details-label">Jersey Number</span>
                <span className="sb-details-value">#{getJerseyNumber(viewingPlayer.player.name)}</span>
              </div>
              <div className="sb-details-row">
                <span className="sb-details-label">Preferred Foot</span>
                <span className="sb-details-value">{getPreferredFoot(viewingPlayer.player.name)}</span>
              </div>
              <div className="sb-details-row">
                <span className="sb-details-label">Overall Rating</span>
                <span className="sb-details-value rating">{getPlayerRating(viewingPlayer.player)}</span>
              </div>
            </div>

            <button className="sb-btn primary sb-change-btn" onClick={handleChangePlayer}>
              Change Player
            </button>
          </div>
        </div>
      )}

      {/* Bottom controls */}
      <div className="sb-controls">
        <button className="sb-btn" onClick={handleFormationChange}>
          Change Formation
        </button>
        <button className="sb-btn primary" onClick={() => {
          const shuffled = [...footballers].sort(() => Math.random() - 0.5);
          setSquad(shuffled.slice(0, 11));
        }}>
          Random Squad
        </button>
      </div>
    </div>
  );
}
