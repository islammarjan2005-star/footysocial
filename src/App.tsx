import { useState, useCallback } from 'react';
import type { PlayerSet } from './data/playerSets';
import { HomeScreen } from './components/HomeScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { SettingsScreen } from './components/SettingsScreen';
import { GameScreen } from './components/GameScreen';
import './App.css';

type AppView = 'home' | 'profile' | 'settings' | 'game';

interface GameConfig {
  playerSet: PlayerSet;
  mode: 'pass-play' | 'vs-ai';
}

function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [gameConfig, setGameConfig] = useState<GameConfig | null>(null);

  const handleStartGame = useCallback((playerSet: PlayerSet, mode: 'pass-play' | 'vs-ai') => {
    setGameConfig({ playerSet, mode });
    setCurrentView('game');
  }, []);

  const handleOpenProfile = useCallback(() => {
    setCurrentView('profile');
  }, []);

  const handleOpenSettings = useCallback(() => {
    setCurrentView('settings');
  }, []);

  const handleOpenSetEditor = useCallback(() => {
    // TODO: Implement set editor
    alert('Custom set editor coming soon!');
  }, []);

  const handleBack = useCallback(() => {
    setCurrentView('home');
    setGameConfig(null);
  }, []);

  const handleGameEnd = useCallback((_won: boolean, _questionsAsked: number) => {
    // Stats are already recorded in GameScreen
    // Could show achievement unlock animation here
  }, []);

  return (
    <div className="app">
      {currentView === 'home' && (
        <HomeScreen
          onStartGame={handleStartGame}
          onOpenProfile={handleOpenProfile}
          onOpenSetEditor={handleOpenSetEditor}
          onOpenSettings={handleOpenSettings}
        />
      )}

      {currentView === 'profile' && (
        <ProfileScreen onBack={handleBack} />
      )}

      {currentView === 'settings' && (
        <SettingsScreen onBack={handleBack} />
      )}

      {currentView === 'game' && gameConfig && (
        <GameScreen
          playerSet={gameConfig.playerSet}
          mode={gameConfig.mode}
          onBack={handleBack}
          onGameEnd={handleGameEnd}
        />
      )}
    </div>
  );
}

export default App;
