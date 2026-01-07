import { useState, useCallback, useEffect } from 'react';
import type { LetterState } from '../data/footballWordleData';
import {
  getRandomWord,
  evaluateGuess,
  playerHints,
} from '../data/footballWordleData';
import './FootballWordle.css';

interface FootballWordleProps {
  onBack: () => void;
}

interface GuessRow {
  letters: string[];
  states: LetterState[];
  submitted: boolean;
}

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'],
];

const MAX_GUESSES = 6;
const WORD_LENGTH = 5;

export function FootballWordle({ onBack }: FootballWordleProps) {
  const [targetWord, setTargetWord] = useState(() => getRandomWord());
  const [guesses, setGuesses] = useState<GuessRow[]>(() =>
    Array(MAX_GUESSES).fill(null).map(() => ({
      letters: Array(WORD_LENGTH).fill(''),
      states: Array(WORD_LENGTH).fill('empty' as LetterState),
      submitted: false,
    }))
  );
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [keyboardStates, setKeyboardStates] = useState<Record<string, LetterState>>({});
  const [shake, setShake] = useState(false);
  const [revealRow, setRevealRow] = useState<number | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const showMessage = useCallback((msg: string, duration = 1500) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), duration);
  }, []);

  const handleKeyPress = useCallback((key: string) => {
    if (gameOver) return;

    if (key === 'ENTER') {
      // Submit guess
      if (currentCol !== WORD_LENGTH) {
        setShake(true);
        setTimeout(() => setShake(false), 500);
        showMessage('Not enough letters');
        return;
      }

      const guess = guesses[currentRow].letters.join('');
      const states = evaluateGuess(guess, targetWord);

      // Update guesses with states
      setGuesses(prev => {
        const newGuesses = [...prev];
        newGuesses[currentRow] = {
          ...newGuesses[currentRow],
          states,
          submitted: true,
        };
        return newGuesses;
      });

      // Reveal animation
      setRevealRow(currentRow);
      setTimeout(() => setRevealRow(null), 500 * WORD_LENGTH);

      // Update keyboard states
      setTimeout(() => {
        setKeyboardStates(prev => {
          const newStates = { ...prev };
          for (let i = 0; i < WORD_LENGTH; i++) {
            const letter = guess[i];
            const state = states[i];
            // Only upgrade state (absent -> present -> correct)
            if (!newStates[letter] ||
                state === 'correct' ||
                (state === 'present' && newStates[letter] === 'absent')) {
              newStates[letter] = state;
            }
          }
          return newStates;
        });
      }, 300 * WORD_LENGTH);

      // Check win/lose
      const isCorrect = states.every(s => s === 'correct');
      if (isCorrect) {
        setTimeout(() => {
          setWon(true);
          setGameOver(true);
        }, 300 * WORD_LENGTH);
      } else if (currentRow === MAX_GUESSES - 1) {
        setTimeout(() => {
          setGameOver(true);
        }, 300 * WORD_LENGTH);
      } else {
        setCurrentRow(r => r + 1);
        setCurrentCol(0);
      }
    } else if (key === '⌫' || key === 'BACKSPACE') {
      // Delete letter
      if (currentCol > 0) {
        setGuesses(prev => {
          const newGuesses = [...prev];
          newGuesses[currentRow] = {
            ...newGuesses[currentRow],
            letters: [
              ...newGuesses[currentRow].letters.slice(0, currentCol - 1),
              '',
              ...newGuesses[currentRow].letters.slice(currentCol),
            ],
          };
          return newGuesses;
        });
        setCurrentCol(c => c - 1);
      }
    } else if (/^[A-Z]$/.test(key)) {
      // Add letter
      if (currentCol < WORD_LENGTH) {
        setGuesses(prev => {
          const newGuesses = [...prev];
          newGuesses[currentRow] = {
            ...newGuesses[currentRow],
            letters: [
              ...newGuesses[currentRow].letters.slice(0, currentCol),
              key,
              ...newGuesses[currentRow].letters.slice(currentCol + 1),
            ],
          };
          return newGuesses;
        });
        setCurrentCol(c => c + 1);
      }
    }
  }, [currentRow, currentCol, guesses, targetWord, gameOver, showMessage]);

  // Keyboard listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      const key = e.key.toUpperCase();
      if (key === 'ENTER' || key === 'BACKSPACE' || /^[A-Z]$/.test(key)) {
        handleKeyPress(key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyPress]);

  const handleNewGame = useCallback(() => {
    setTargetWord(getRandomWord());
    setGuesses(Array(MAX_GUESSES).fill(null).map(() => ({
      letters: Array(WORD_LENGTH).fill(''),
      states: Array(WORD_LENGTH).fill('empty' as LetterState),
      submitted: false,
    })));
    setCurrentRow(0);
    setCurrentCol(0);
    setGameOver(false);
    setWon(false);
    setKeyboardStates({});
    setRevealRow(null);
  }, []);

  const getShareText = useCallback(() => {
    const rows = guesses.slice(0, currentRow + (won ? 1 : 0));
    const emojiGrid = rows
      .filter(r => r.submitted)
      .map(row =>
        row.states.map(s => {
          if (s === 'correct') return '🟩';
          if (s === 'present') return '🟨';
          return '⬛';
        }).join('')
      ).join('\n');

    return `Footy Wordle ${won ? currentRow + 1 : 'X'}/${MAX_GUESSES}\n\n${emojiGrid}`;
  }, [guesses, currentRow, won]);

  const handleShare = useCallback(() => {
    const text = getShareText();
    if (navigator.share) {
      navigator.share({ text });
    } else {
      navigator.clipboard.writeText(text);
      showMessage('Copied to clipboard!');
    }
  }, [getShareText, showMessage]);

  return (
    <div className="football-wordle">
      {/* Header */}
      <header className="fw-header">
        <button className="fw-back-btn" onClick={onBack}>← Back</button>
        <h1>Footy Wordle</h1>
        <div className="fw-header-spacer" />
      </header>

      {/* Message */}
      {message && <div className="fw-message">{message}</div>}

      {/* Grid */}
      <div className="fw-grid">
        {guesses.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`fw-row ${shake && rowIndex === currentRow ? 'shake' : ''}`}
          >
            {row.letters.map((letter, colIndex) => {
              const isRevealing = revealRow === rowIndex;
              const delay = isRevealing ? colIndex * 0.3 : 0;

              return (
                <div
                  key={colIndex}
                  className={`fw-tile ${row.submitted ? row.states[colIndex] : ''} ${letter ? 'filled' : ''} ${isRevealing ? 'reveal' : ''}`}
                  style={{ animationDelay: `${delay}s` }}
                >
                  <span className="fw-tile-letter">{letter}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Game Over */}
      {gameOver && (
        <div className="fw-game-over">
          <div className={`fw-result ${won ? 'win' : 'lose'}`}>
            {won ? '🎉 Brilliant!' : '😔 Better luck next time!'}
          </div>
          <div className="fw-answer">
            The answer was: <strong>{targetWord}</strong>
          </div>
          {playerHints[targetWord] && (
            <div className="fw-hint">{playerHints[targetWord]}</div>
          )}
          <div className="fw-share-preview">
            <pre>{getShareText()}</pre>
          </div>
          <div className="fw-actions">
            <button className="fw-btn fw-btn-share" onClick={handleShare}>
              Share
            </button>
            <button className="fw-btn fw-btn-new" onClick={handleNewGame}>
              Play Again
            </button>
          </div>
        </div>
      )}

      {/* Keyboard */}
      {!gameOver && (
        <div className="fw-keyboard">
          {KEYBOARD_ROWS.map((row, rowIndex) => (
            <div key={rowIndex} className="fw-keyboard-row">
              {row.map(key => (
                <button
                  key={key}
                  className={`fw-key ${key === 'ENTER' || key === '⌫' ? 'wide' : ''} ${keyboardStates[key] || ''}`}
                  onClick={() => handleKeyPress(key)}
                >
                  {key}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
