import { useState, useEffect } from 'react';
import { getSettings, saveSettings } from '../utils/storage';
import type { Settings } from '../utils/storage';
import './SettingsScreen.css';

interface SettingsScreenProps {
  onBack: () => void;
}

export function SettingsScreen({ onBack }: SettingsScreenProps) {
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    setSettings(getSettings());
  }, []);

  const updateSetting = <K extends keyof Settings>(key: K, value: Settings[K]) => {
    if (!settings) return;
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    saveSettings(newSettings);
  };

  if (!settings) return null;

  return (
    <div className="settings-screen">
      <header className="settings-header">
        <button className="back-btn" onClick={onBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <h1>Settings</h1>
        <div className="header-spacer" />
      </header>

      <div className="settings-content">
        {/* Game Settings */}
        <section className="settings-section">
          <h2>Game</h2>

          <div className="setting-item">
            <div className="setting-info">
              <span className="setting-label">AI Difficulty</span>
              <span className="setting-desc">How challenging the AI opponent is</span>
            </div>
            <div className="difficulty-toggle">
              {(['easy', 'medium', 'hard'] as const).map(level => (
                <button
                  key={level}
                  className={settings.aiDifficulty === level ? 'active' : ''}
                  onClick={() => updateSetting('aiDifficulty', level)}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <span className="setting-label">Show Hints</span>
              <span className="setting-desc">Display helpful tips during gameplay</span>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.showHints}
                onChange={e => updateSetting('showHints', e.target.checked)}
              />
              <span className="toggle-slider" />
            </label>
          </div>
        </section>

        {/* Preferences */}
        <section className="settings-section">
          <h2>Preferences</h2>

          <div className="setting-item">
            <div className="setting-info">
              <span className="setting-label">Sound Effects</span>
              <span className="setting-desc">Play sounds for game actions</span>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.soundEnabled}
                onChange={e => updateSetting('soundEnabled', e.target.checked)}
              />
              <span className="toggle-slider" />
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <span className="setting-label">Haptic Feedback</span>
              <span className="setting-desc">Vibrate on button presses</span>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.hapticEnabled}
                onChange={e => updateSetting('hapticEnabled', e.target.checked)}
              />
              <span className="toggle-slider" />
            </label>
          </div>
        </section>

        {/* About */}
        <section className="settings-section">
          <h2>About</h2>
          <div className="about-info">
            <div className="app-info">
              <span className="app-name">Guess Who - Football Edition</span>
              <span className="app-version">Version 2.0.0</span>
            </div>
            <p className="app-desc">
              The classic guessing game, reimagined for football fans.
              Challenge friends or test your skills against AI.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
