import { GameProvider, useGame } from './context/GameContext';
import { SetupScreen } from './components/SetupScreen';
import { SecretAssignment } from './components/SecretAssignment';
import { GameBoard } from './components/GameBoard';
import { PassingScreen } from './components/PassingScreen';
import { GuessingScreen } from './components/GuessingScreen';
import { GameOver } from './components/GameOver';
import './App.css';

function GameContent() {
  const { state } = useGame();

  switch (state.phase) {
    case 'setup':
      return <SetupScreen />;
    case 'assigning':
      return <SecretAssignment />;
    case 'passing':
      return <PassingScreen />;
    case 'playing':
      return <GameBoard />;
    case 'guessing':
      return <GuessingScreen />;
    case 'gameover':
      return <GameOver />;
    default:
      return <SetupScreen />;
  }
}

function App() {
  return (
    <GameProvider>
      <div className="app">
        <GameContent />
      </div>
    </GameProvider>
  );
}

export default App;
