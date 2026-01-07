import { useState, useCallback, useMemo } from 'react';
import type {
  ConnectionsPuzzle,
  ConnectionsCategory,
  ConnectionsPlayer,
} from '../data/footballConnectionsData';
import {
  getRandomPuzzle,
  shuffleArray,
  difficultyColors,
} from '../data/footballConnectionsData';
import './FootballConnections.css';

interface FootballConnectionsProps {
  onBack: () => void;
}

interface GamePlayer extends ConnectionsPlayer {
  categoryName: string;
  difficulty: number;
}

export function FootballConnections({ onBack }: FootballConnectionsProps) {
  const [puzzle, setPuzzle] = useState<ConnectionsPuzzle>(() => getRandomPuzzle());
  const [gameKey, setGameKey] = useState(0);

  // Flatten and shuffle players for the grid
  const allPlayers = useMemo(() => {
    const players: GamePlayer[] = [];
    puzzle.categories.forEach(cat => {
      cat.players.forEach(player => {
        players.push({
          ...player,
          categoryName: cat.name,
          difficulty: cat.difficulty,
        });
      });
    });
    return shuffleArray(players);
  }, [puzzle, gameKey]);

  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [solved, setSolved] = useState<ConnectionsCategory[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [shakeWrong, setShakeWrong] = useState(false);
  const [lastGuessResult, setLastGuessResult] = useState<'correct' | 'wrong' | 'close' | null>(null);

  const maxMistakes = 4;
  const remainingPlayers = allPlayers.filter(
    p => !solved.some(s => s.players.some(sp => sp.name === p.name))
  );

  const handleSelect = useCallback((playerName: string) => {
    if (gameOver) return;

    setSelected(prev => {
      const newSet = new Set(prev);
      if (newSet.has(playerName)) {
        newSet.delete(playerName);
      } else if (newSet.size < 4) {
        newSet.add(playerName);
      }
      return newSet;
    });
    setLastGuessResult(null);
  }, [gameOver]);

  const handleSubmit = useCallback(() => {
    if (selected.size !== 4 || gameOver) return;

    const selectedNames = Array.from(selected);

    // Check if all selected belong to same category
    const selectedPlayers = allPlayers.filter(p => selectedNames.includes(p.name));
    const categories = new Set(selectedPlayers.map(p => p.categoryName));

    if (categories.size === 1) {
      // Correct!
      const categoryName = selectedPlayers[0].categoryName;
      const category = puzzle.categories.find(c => c.name === categoryName)!;

      setSolved(prev => [...prev, category].sort((a, b) => a.difficulty - b.difficulty));
      setSelected(new Set());
      setLastGuessResult('correct');

      // Check win
      if (solved.length + 1 === 4) {
        setWon(true);
        setGameOver(true);
      }
    } else {
      // Wrong - check if 3/4 correct (close)
      const categoryCount: Record<string, number> = {};
      selectedPlayers.forEach(p => {
        categoryCount[p.categoryName] = (categoryCount[p.categoryName] || 0) + 1;
      });
      const maxInCategory = Math.max(...Object.values(categoryCount));

      if (maxInCategory === 3) {
        setLastGuessResult('close');
      } else {
        setLastGuessResult('wrong');
      }

      setShakeWrong(true);
      setTimeout(() => setShakeWrong(false), 500);

      const newMistakes = mistakes + 1;
      setMistakes(newMistakes);

      if (newMistakes >= maxMistakes) {
        setGameOver(true);
        setWon(false);
      }
    }
  }, [selected, allPlayers, puzzle, solved, mistakes, gameOver]);

  const handleShuffle = useCallback(() => {
    setGameKey(k => k + 1);
  }, []);

  const handleDeselectAll = useCallback(() => {
    setSelected(new Set());
  }, []);

  const handleNewGame = useCallback(() => {
    setPuzzle(getRandomPuzzle());
    setGameKey(k => k + 1);
    setSelected(new Set());
    setSolved([]);
    setMistakes(0);
    setGameOver(false);
    setWon(false);
    setLastGuessResult(null);
  }, []);

  return (
    <div className="football-connections">
      {/* Header */}
      <header className="fc-header">
        <button className="fc-back-btn" onClick={onBack}>← Back</button>
        <h1>Football Connections</h1>
        <div className="fc-mistakes">
          {Array.from({ length: maxMistakes }).map((_, i) => (
            <span
              key={i}
              className={`fc-mistake-dot ${i < mistakes ? 'used' : ''}`}
            />
          ))}
        </div>
      </header>

      {/* Instructions */}
      <div className="fc-instructions">
        Find groups of 4 footballers that share something in common
      </div>

      {/* Solved Categories */}
      <div className="fc-solved">
        {solved.map(category => (
          <div
            key={category.name}
            className="fc-solved-category"
            style={{
              background: difficultyColors[category.difficulty].bg,
              color: difficultyColors[category.difficulty].text,
            }}
          >
            <div className="fc-solved-name">{category.name}</div>
            <div className="fc-solved-players">
              {category.players.map(p => p.name).join(', ')}
            </div>
          </div>
        ))}
      </div>

      {/* Game Grid */}
      {!gameOver && (
        <div className={`fc-grid ${shakeWrong ? 'shake' : ''}`}>
          {remainingPlayers.map(player => (
            <button
              key={player.name}
              className={`fc-tile ${selected.has(player.name) ? 'selected' : ''}`}
              onClick={() => handleSelect(player.name)}
            >
              <img
                src={`https://www.fifarosters.com/assets/players/fifa25/faces/${player.fifaId}.png`}
                alt={player.name}
                className="fc-tile-img"
              />
              <span className="fc-tile-name">{player.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Feedback */}
      {lastGuessResult && !gameOver && (
        <div className={`fc-feedback fc-feedback-${lastGuessResult}`}>
          {lastGuessResult === 'correct' && '✓ Correct!'}
          {lastGuessResult === 'close' && 'One away...'}
          {lastGuessResult === 'wrong' && '✗ Not quite'}
        </div>
      )}

      {/* Action Buttons */}
      {!gameOver && (
        <div className="fc-actions">
          <button className="fc-btn fc-btn-shuffle" onClick={handleShuffle}>
            Shuffle
          </button>
          <button
            className="fc-btn fc-btn-deselect"
            onClick={handleDeselectAll}
            disabled={selected.size === 0}
          >
            Deselect All
          </button>
          <button
            className="fc-btn fc-btn-submit"
            onClick={handleSubmit}
            disabled={selected.size !== 4}
          >
            Submit
          </button>
        </div>
      )}

      {/* Game Over Screen */}
      {gameOver && (
        <div className="fc-game-over">
          <div className={`fc-result ${won ? 'win' : 'lose'}`}>
            {won ? '🎉 Congratulations!' : '😔 Game Over'}
          </div>

          {!won && (
            <div className="fc-reveal">
              <p>The categories were:</p>
              {puzzle.categories
                .filter(c => !solved.some(s => s.name === c.name))
                .sort((a, b) => a.difficulty - b.difficulty)
                .map(category => (
                  <div
                    key={category.name}
                    className="fc-solved-category fc-revealed"
                    style={{
                      background: difficultyColors[category.difficulty].bg,
                      color: difficultyColors[category.difficulty].text,
                    }}
                  >
                    <div className="fc-solved-name">{category.name}</div>
                    <div className="fc-solved-players">
                      {category.players.map(p => p.name).join(', ')}
                    </div>
                  </div>
                ))}
            </div>
          )}

          <button className="fc-btn fc-btn-new" onClick={handleNewGame}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
