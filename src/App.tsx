import { useState } from 'react';
import { GameProvider, useGame } from './context/GameContext';
import { SetupScreen } from './components/SetupScreen';
import { SecretAssignment } from './components/SecretAssignment';
import { GameBoard } from './components/GameBoard';
import { PassingScreen } from './components/PassingScreen';
import { GuessingScreen } from './components/GuessingScreen';
import { GameOver } from './components/GameOver';
import { LandingPage } from './components/LandingPage';
import { SquadBuilder } from './components/SquadBuilder';
import { HigherLower } from './components/HigherLower';
import { BlindRanking } from './components/BlindRanking';
import { FootballPoker } from './components/FootballPoker';
import './App.css';

type AppView = 'landing' | 'guess-who' | 'squad-builder' | 'higher-lower' | 'blind-ranking' | 'football-poker';

function GameContent({ onBackToLanding }: { onBackToLanding: () => void }) {
  const { state } = useGame();

  switch (state.phase) {
    case 'setup':
      return <SetupScreen onBack={onBackToLanding} />;
    case 'selecting':
      return <SecretAssignment />;
    case 'assigning':
      return <SecretAssignment />; // Legacy - keeping for compatibility
    case 'passing':
      return <PassingScreen />;
    case 'playing':
      return <GameBoard />;
    case 'guessing':
      return <GuessingScreen />;
    case 'gameover':
      return <GameOver onBackToLanding={onBackToLanding} />;
    default:
      return <SetupScreen onBack={onBackToLanding} />;
  }
}

function App() {
  const [currentView, setCurrentView] = useState<AppView>('landing');

  const handlePlayGuessWho = () => {
    setCurrentView('guess-who');
  };

  const handlePlaySquadBuilder = () => {
    setCurrentView('squad-builder');
  };

  const handlePlayHigherLower = () => {
    setCurrentView('higher-lower');
  };

  const handlePlayBlindRanking = () => {
    setCurrentView('blind-ranking');
  };

  const handlePlayFootballPoker = () => {
    setCurrentView('football-poker');
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
  };

  if (currentView === 'landing') {
    return (
      <div className="app">
        <LandingPage
          onPlayGuessWho={handlePlayGuessWho}
          onPlaySquadBuilder={handlePlaySquadBuilder}
          onPlayHigherLower={handlePlayHigherLower}
          onPlayBlindRanking={handlePlayBlindRanking}
          onPlayFootballPoker={handlePlayFootballPoker}
        />
      </div>
    );
  }

  if (currentView === 'squad-builder') {
    return (
      <div className="app">
        <SquadBuilder onBack={handleBackToLanding} />
      </div>
    );
  }

  if (currentView === 'higher-lower') {
    return (
      <div className="app">
        <HigherLower onBack={handleBackToLanding} />
      </div>
    );
  }

  if (currentView === 'blind-ranking') {
    return (
      <div className="app">
        <BlindRanking onBack={handleBackToLanding} />
      </div>
    );
  }

  if (currentView === 'football-poker') {
    return (
      <div className="app">
        <FootballPoker onBack={handleBackToLanding} />
      </div>
    );
  }

  return (
    <GameProvider>
      <div className="app">
        <GameContent onBackToLanding={handleBackToLanding} />
      </div>
    </GameProvider>
  );
}

export default App;
