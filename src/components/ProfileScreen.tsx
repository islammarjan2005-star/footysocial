import { useState, useEffect } from 'react';
import { getPlayerStats, getUnlockedAchievements, getLockedAchievements, clearAllData } from '../utils/storage';
import type { GameStats, Achievement } from '../utils/storage';
import './ProfileScreen.css';

interface ProfileScreenProps {
  onBack: () => void;
}

export function ProfileScreen({ onBack }: ProfileScreenProps) {
  const [stats, setStats] = useState<GameStats | null>(null);
  const [unlockedAchievements, setUnlockedAchievements] = useState<Achievement[]>([]);
  const [lockedAchievements, setLockedAchievements] = useState<Achievement[]>([]);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  useEffect(() => {
    const playerStats = getPlayerStats();
    setStats(playerStats);
    setUnlockedAchievements(getUnlockedAchievements(playerStats));
    setLockedAchievements(getLockedAchievements(playerStats));
  }, []);

  const handleReset = () => {
    clearAllData();
    const freshStats = getPlayerStats();
    setStats(freshStats);
    setUnlockedAchievements(getUnlockedAchievements(freshStats));
    setLockedAchievements(getLockedAchievements(freshStats));
    setShowResetConfirm(false);
  };

  if (!stats) return null;

  const winRate = stats.gamesPlayed > 0
    ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100)
    : 0;

  return (
    <div className="profile-screen">
      {/* Header */}
      <header className="profile-header">
        <button className="back-btn" onClick={onBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <h1>Profile</h1>
        <div className="header-spacer" />
      </header>

      {/* Main Stats Card */}
      <div className="main-stats-card">
        <div className="big-stat">
          <span className="big-value">{stats.gamesWon}</span>
          <span className="big-label">Total Wins</span>
        </div>
        <div className="stats-grid">
          <div className="grid-stat">
            <span className="value">{stats.gamesPlayed}</span>
            <span className="label">Games</span>
          </div>
          <div className="grid-stat">
            <span className="value">{winRate}%</span>
            <span className="label">Win Rate</span>
          </div>
          <div className="grid-stat">
            <span className="value">{stats.bestWinStreak}</span>
            <span className="label">Best Streak</span>
          </div>
          <div className="grid-stat">
            <span className="value">{stats.avgQuestionsPerWin || '-'}</span>
            <span className="label">Avg Questions</span>
          </div>
        </div>
      </div>

      {/* Current Streak */}
      {stats.currentWinStreak > 0 && (
        <div className="streak-banner">
          <span className="streak-fire">🔥</span>
          <span className="streak-text">{stats.currentWinStreak} game win streak!</span>
        </div>
      )}

      {/* Achievements Section */}
      <section className="achievements-section">
        <h2>Achievements</h2>
        <div className="achievement-progress">
          <span>{unlockedAchievements.length} / {unlockedAchievements.length + lockedAchievements.length}</span>
        </div>

        {unlockedAchievements.length > 0 && (
          <div className="achievement-group">
            <h3>Unlocked</h3>
            <div className="achievements-list">
              {unlockedAchievements.map(achievement => (
                <div key={achievement.id} className="achievement-item unlocked">
                  <span className="achievement-icon">{achievement.icon}</span>
                  <div className="achievement-info">
                    <span className="achievement-name">{achievement.name}</span>
                    <span className="achievement-desc">{achievement.description}</span>
                  </div>
                  <svg className="achievement-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        )}

        {lockedAchievements.length > 0 && (
          <div className="achievement-group">
            <h3>Locked</h3>
            <div className="achievements-list">
              {lockedAchievements.map(achievement => (
                <div key={achievement.id} className="achievement-item locked">
                  <span className="achievement-icon locked">{achievement.icon}</span>
                  <div className="achievement-info">
                    <span className="achievement-name">{achievement.name}</span>
                    <span className="achievement-desc">{achievement.description}</span>
                  </div>
                  <svg className="achievement-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="11" width="14" height="10" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Reset Data */}
      <div className="reset-section">
        <button className="reset-btn" onClick={() => setShowResetConfirm(true)}>
          Reset All Data
        </button>
      </div>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="modal-overlay" onClick={() => setShowResetConfirm(false)}>
          <div className="confirm-modal" onClick={e => e.stopPropagation()}>
            <h3>Reset All Data?</h3>
            <p>This will delete all your stats, achievements, and custom sets. This cannot be undone.</p>
            <div className="confirm-buttons">
              <button className="confirm-cancel" onClick={() => setShowResetConfirm(false)}>
                Cancel
              </button>
              <button className="confirm-delete" onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
