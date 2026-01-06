import { useState } from 'react';
import { GameProvider, useGame } from './context/GameContext';
import { SetupScreen } from './components/SetupScreen';
import { SecretAssignment } from './components/SecretAssignment';
import { GameBoard } from './components/GameBoard';
import { PassingScreen } from './components/PassingScreen';
import { GuessingScreen } from './components/GuessingScreen';
import { GameOver } from './components/GameOver';
import { LandingPage } from './components/LandingPage';
import './App.css';

type AppView = 'landing' | 'guess-who';

function GameContent({ onBackToLanding }: { onBackToLanding: () => void }) {
  const { state } = useGame();

  switch (state.phase) {
    case 'setup':
      return <SetupScreen onBack={onBackToLanding} />;
    case 'assigning':
      return <SecretAssignment />;
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

  const handleBackToLanding = () => {
    setCurrentView('landing');
  };

  if (currentView === 'landing') {
    return (
      <div className="app">
        <LandingPage onPlayGuessWho={handlePlayGuessWho} />
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
