import { useState, useEffect } from 'react';
import type { PlayerSet } from '../data/playerSets';
import { builtInSets } from '../data/playerSets';
import { getCustomSets, getPlayerStats, getSelectedSetId, setSelectedSetId } from '../utils/storage';
import type { GameStats } from '../utils/storage';
import './HomeScreen.css';

interface HomeScreenProps {
  onStartGame: (set: PlayerSet, mode: 'pass-play' | 'vs-ai') => void;
  onOpenProfile: () => void;
  onOpenSetEditor: () => void;
  onOpenSettings: () => void;
}

export function HomeScreen({ onStartGame, onOpenProfile, onOpenSetEditor, onOpenSettings }: HomeScreenProps) {
  const [selectedSet, setSelectedSet] = useState<PlayerSet | null>(null);
  const [allSets, setAllSets] = useState<PlayerSet[]>([]);
  const [stats, setStats] = useState<GameStats | null>(null);
  const [showModeSelect, setShowModeSelect] = useState(false);

  useEffect(() => {
    // Load all sets
    const customSets = getCustomSets();
    const all = [...builtInSets, ...customSets];
    setAllSets(all);

    // Load previously selected set or default to first
    const savedSetId = getSelectedSetId();
    const savedSet = all.find(s => s.id === savedSetId) || all[0];
    setSelectedSet(savedSet);

    // Load stats
    setStats(getPlayerStats());
  }, []);

  const handleSelectSet = (set: PlayerSet) => {
    setSelectedSet(set);
    setSelectedSetId(set.id);
  };

  const handlePlay = () => {
    setShowModeSelect(true);
  };

  const handleSelectMode = (mode: 'pass-play' | 'vs-ai') => {
    if (selectedSet) {
      onStartGame(selectedSet, mode);
    }
    setShowModeSelect(false);
  };

  const winRate = stats && stats.gamesPlayed > 0
    ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100)
    : 0;

  return (
    <div className="home-screen">
      {/* Header */}
      <header className="home-header">
        <div className="home-logo">
          <span className="logo-icon">?</span>
          <div className="logo-text">
            <h1>Guess Who</h1>
            <span className="subtitle">Football Edition</span>
          </div>
        </div>
        <button className="icon-btn" onClick={onOpenSettings} aria-label="Settings">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
          </svg>
        </button>
      </header>

      {/* Quick Stats */}
      <div className="quick-stats" onClick={onOpenProfile}>
        <div className="stat">
          <span className="stat-value">{stats?.gamesWon || 0}</span>
          <span className="stat-label">Wins</span>
        </div>
        <div className="stat">
          <span className="stat-value">{winRate}%</span>
          <span className="stat-label">Win Rate</span>
        </div>
        <div className="stat">
          <span className="stat-value">{stats?.currentWinStreak || 0}</span>
          <span className="stat-label">Streak</span>
        </div>
        <div className="stat-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>

      {/* Set Selection */}
      <section className="sets-section">
        <div className="section-header">
          <h2>Choose Your Set</h2>
          <button className="text-btn" onClick={onOpenSetEditor}>
            + Create
          </button>
        </div>

        <div className="sets-carousel">
          {allSets.map(set => (
            <button
              key={set.id}
              className={`set-card ${selectedSet?.id === set.id ? 'selected' : ''}`}
              onClick={() => handleSelectSet(set)}
              style={{ '--set-color': set.color } as React.CSSProperties}
            >
              <div className="set-icon">{set.icon}</div>
              <div className="set-info">
                <span className="set-name">{set.name}</span>
                <span className="set-count">{set.players.length} players</span>
              </div>
              {set.isCustom && <span className="custom-badge">Custom</span>}
              {selectedSet?.id === set.id && (
                <div className="selected-check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Selected Set Preview */}
      {selectedSet && (
        <section className="set-preview">
          <div className="preview-header">
            <div className="preview-icon" style={{ background: selectedSet.color }}>
              {selectedSet.icon}
            </div>
            <div className="preview-info">
              <h3>{selectedSet.name}</h3>
              <p>{selectedSet.description}</p>
            </div>
          </div>
          <div className="preview-faces">
            {selectedSet.players.slice(0, 6).map((player, i) => (
              <div key={player.id} className="preview-face" style={{ animationDelay: `${i * 0.1}s` }}>
                <img
                  src={player.imageUrl}
                  alt={player.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23333" width="100" height="100"/><text x="50" y="55" text-anchor="middle" fill="%23666" font-size="40">?</text></svg>';
                  }}
                />
              </div>
            ))}
            {selectedSet.players.length > 6 && (
              <div className="preview-more">+{selectedSet.players.length - 6}</div>
            )}
          </div>
        </section>
      )}

      {/* Play Button */}
      <div className="play-section">
        <button className="play-btn" onClick={handlePlay}>
          <span>Play</span>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>

      {/* Mode Selection Modal */}
      {showModeSelect && (
        <div className="modal-overlay" onClick={() => setShowModeSelect(false)}>
          <div className="mode-modal" onClick={e => e.stopPropagation()}>
            <h2>Select Game Mode</h2>
            <div className="mode-options">
              <button className="mode-option" onClick={() => handleSelectMode('pass-play')}>
                <div className="mode-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="7" r="4" />
                    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                    <circle cx="19" cy="7" r="4" />
                    <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
                  </svg>
                </div>
                <div className="mode-info">
                  <span className="mode-name">Pass & Play</span>
                  <span className="mode-desc">Play with a friend on one device</span>
                </div>
              </button>
              <button className="mode-option" onClick={() => handleSelectMode('vs-ai')}>
                <div className="mode-icon ai">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <circle cx="9" cy="12" r="2" />
                    <circle cx="15" cy="12" r="2" />
                    <path d="M9 16h6" />
                  </svg>
                </div>
                <div className="mode-info">
                  <span className="mode-name">vs AI</span>
                  <span className="mode-desc">Challenge the computer</span>
                </div>
              </button>
            </div>
            <button className="cancel-btn" onClick={() => setShowModeSelect(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Install PWA hint */}
      <div className="install-hint">
        Add to Home Screen for the best experience
      </div>
    </div>
  );
}
