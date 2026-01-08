import { useState, useCallback, useEffect } from 'react';
import type { Player, PlayerSet } from '../data/playerSets';
import { getUniqueAttributes, questionCategories } from '../data/playerSets';
import { recordGameResult } from '../utils/storage';
import './GameScreen.css';

interface GameScreenProps {
  playerSet: PlayerSet;
  mode: 'pass-play' | 'vs-ai';
  onBack: () => void;
  onGameEnd: (won: boolean, questionsAsked: number) => void;
}

type GamePhase = 'select-secret' | 'passing' | 'playing' | 'guessing' | 'result';

interface GameState {
  phase: GamePhase;
  currentPlayer: 1 | 2;
  player1Secret: Player | null;
  player2Secret: Player | null;
  player1Eliminated: Set<number>;
  player2Eliminated: Set<number>;
  questionsAsked: number;
  turnQuestion: string | null;
  turnAnswer: boolean | null;
  winner: 1 | 2 | null;
  wrongGuesses: number;
}

export function GameScreen({ playerSet, mode, onBack, onGameEnd }: GameScreenProps) {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'select-secret',
    currentPlayer: 1,
    player1Secret: null,
    player2Secret: null,
    player1Eliminated: new Set(),
    player2Eliminated: new Set(),
    questionsAsked: 0,
    turnQuestion: null,
    turnAnswer: null,
    winner: null,
    wrongGuesses: 0,
  });

  const [showGrid, setShowGrid] = useState(true);
  const [selectedForGuess, setSelectedForGuess] = useState<Player | null>(null);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [pendingQuestion, setPendingQuestion] = useState<{ category: string; value: string } | null>(null);

  const attributes = getUniqueAttributes(playerSet.players);

  // AI opponent logic
  useEffect(() => {
    if (mode === 'vs-ai' && gameState.currentPlayer === 2) {
      if (gameState.phase === 'select-secret') {
        // AI selects a random secret
        setTimeout(() => {
          const randomPlayer = playerSet.players[Math.floor(Math.random() * playerSet.players.length)];
          setGameState(prev => ({
            ...prev,
            player2Secret: randomPlayer,
            phase: 'passing',
          }));
        }, 500);
      } else if (gameState.phase === 'playing') {
        // AI's turn to ask a question or guess
        setTimeout(() => aiTakeTurn(), 1000);
      }
    }
  }, [gameState.currentPlayer, gameState.phase, mode]);

  const aiTakeTurn = useCallback(() => {
    const remainingPlayers = playerSet.players.filter(p => !gameState.player2Eliminated.has(p.id));

    // If only one player left, guess them
    if (remainingPlayers.length === 1) {
      const guess = remainingPlayers[0];
      if (guess.id === gameState.player1Secret?.id) {
        setGameState(prev => ({ ...prev, winner: 2, phase: 'result' }));
      } else {
        // AI guessed wrong
        setGameState(prev => ({
          ...prev,
          currentPlayer: 1,
          wrongGuesses: prev.wrongGuesses + 1,
        }));
      }
      return;
    }

    // AI asks a strategic question
    const bestQuestion = findBestAIQuestion(remainingPlayers);
    if (bestQuestion) {
      const { category, value } = bestQuestion;
      const answer = checkAnswer(gameState.player1Secret!, category, value);

      // Eliminate players based on answer
      const toEliminate = new Set(gameState.player2Eliminated);
      remainingPlayers.forEach(player => {
        const playerMatch = checkAnswer(player, category, value);
        if (playerMatch !== answer) {
          toEliminate.add(player.id);
        }
      });

      setGameState(prev => ({
        ...prev,
        player2Eliminated: toEliminate,
        questionsAsked: prev.questionsAsked + 1,
        currentPlayer: 1,
      }));
    }
  }, [gameState, playerSet.players]);

  const getPlayerAttribute = (player: Player, key: string): string | boolean => {
    switch (key) {
      case 'position': return player.position;
      case 'club': return player.club;
      case 'nationality': return player.nationality;
      case 'hairColor': return player.hairColor;
      case 'facialHair': return player.facialHair;
      default: return '';
    }
  };

  const findBestAIQuestion = (remainingPlayers: Player[]) => {
    let bestQuestion = null;
    let bestScore = -1;

    // Try each possible question
    for (const category of questionCategories) {
      if (category.type === 'boolean') {
        const yesCount = remainingPlayers.filter(p => p.facialHair).length;
        const noCount = remainingPlayers.length - yesCount;
        const balance = Math.min(yesCount, noCount);
        if (balance > bestScore) {
          bestScore = balance;
          bestQuestion = { category: category.key, value: 'true' };
        }
      } else {
        const values = attributes[category.key as keyof typeof attributes] || [];
        for (const value of values) {
          const matchCount = remainingPlayers.filter(p =>
            getPlayerAttribute(p, category.key) === value
          ).length;
          const nonMatchCount = remainingPlayers.length - matchCount;
          const balance = Math.min(matchCount, nonMatchCount);
          if (balance > bestScore) {
            bestScore = balance;
            bestQuestion = { category: category.key, value: String(value) };
          }
        }
      }
    }

    return bestQuestion;
  };

  const checkAnswer = (player: Player, category: string, value: string): boolean => {
    if (category === 'facialHair') {
      return player.facialHair === (value === 'true');
    }
    return String(getPlayerAttribute(player, category)) === value;
  };

  const handleSelectSecret = (player: Player) => {
    if (gameState.currentPlayer === 1) {
      setGameState(prev => ({
        ...prev,
        player1Secret: player,
        phase: mode === 'vs-ai' ? 'select-secret' : 'passing',
        currentPlayer: mode === 'vs-ai' ? 2 : 1,
      }));

      if (mode === 'vs-ai') {
        // AI will auto-select in useEffect
      }
    } else {
      setGameState(prev => ({
        ...prev,
        player2Secret: player,
        phase: 'passing',
        currentPlayer: 1,
      }));
    }
  };

  const handlePassDevice = () => {
    if (gameState.phase === 'passing') {
      if (!gameState.player2Secret && mode === 'pass-play') {
        // Player 2 needs to select
        setGameState(prev => ({ ...prev, phase: 'select-secret', currentPlayer: 2 }));
      } else {
        // Start playing
        setGameState(prev => ({ ...prev, phase: 'playing' }));
      }
    }
  };

  const handleAskQuestion = (category: string, value: string) => {
    const opponentSecret = gameState.currentPlayer === 1 ? gameState.player2Secret : gameState.player1Secret;
    if (!opponentSecret) return;

    const answer = checkAnswer(opponentSecret, category, value);
    const currentEliminated = gameState.currentPlayer === 1 ? gameState.player1Eliminated : gameState.player2Eliminated;

    // Calculate which players to eliminate
    const remainingPlayers = playerSet.players.filter(p => !currentEliminated.has(p.id));
    const toEliminate = new Set(currentEliminated);

    remainingPlayers.forEach(player => {
      const playerMatch = checkAnswer(player, category, value);
      if (playerMatch !== answer) {
        toEliminate.add(player.id);
      }
    });

    setGameState(prev => ({
      ...prev,
      [prev.currentPlayer === 1 ? 'player1Eliminated' : 'player2Eliminated']: toEliminate,
      questionsAsked: prev.questionsAsked + 1,
      turnQuestion: `${getCategoryLabel(category)}: ${formatValue(category, value)}`,
      turnAnswer: answer,
    }));

    setShowQuestionModal(false);
    setPendingQuestion(null);
  };

  const handleEndTurn = () => {
    setGameState(prev => ({
      ...prev,
      currentPlayer: prev.currentPlayer === 1 ? 2 : 1,
      turnQuestion: null,
      turnAnswer: null,
    }));
  };

  const handleMakeGuess = (player: Player) => {
    setSelectedForGuess(player);
  };

  const handleConfirmGuess = () => {
    if (!selectedForGuess) return;

    const opponentSecret = gameState.currentPlayer === 1 ? gameState.player2Secret : gameState.player1Secret;

    if (selectedForGuess.id === opponentSecret?.id) {
      // Correct guess - win!
      setGameState(prev => ({
        ...prev,
        winner: prev.currentPlayer,
        phase: 'result',
      }));

      // Record stats
      const isPlayer1 = gameState.currentPlayer === 1;
      recordGameResult(
        isPlayer1,
        gameState.questionsAsked,
        playerSet.id,
        mode === 'vs-ai',
        gameState.wrongGuesses === 0
      );

      onGameEnd(isPlayer1, gameState.questionsAsked);
    } else {
      // Wrong guess
      setGameState(prev => ({
        ...prev,
        wrongGuesses: prev.wrongGuesses + 1,
        currentPlayer: prev.currentPlayer === 1 ? 2 : 1,
      }));
      setSelectedForGuess(null);
    }
  };

  const getCategoryLabel = (key: string) => {
    return questionCategories.find(c => c.key === key)?.label || key;
  };

  const formatValue = (category: string, value: string) => {
    if (category === 'facialHair') {
      return value === 'true' ? 'Yes' : 'No';
    }
    return value;
  };

  const currentEliminated = gameState.currentPlayer === 1 ? gameState.player1Eliminated : gameState.player2Eliminated;
  const remainingCount = playerSet.players.length - currentEliminated.size;

  // Render based on phase
  if (gameState.phase === 'select-secret') {
    return (
      <div className="game-screen">
        <header className="game-header">
          <button className="back-btn" onClick={onBack}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <h1>Select Your Player</h1>
          <div className="header-spacer" />
        </header>

        <div className="select-info">
          <span className="player-badge">Player {gameState.currentPlayer}</span>
          <p>Choose a player for your opponent to guess</p>
        </div>

        <div className="player-grid selection">
          {playerSet.players.map(player => (
            <button
              key={player.id}
              className="player-card selectable"
              onClick={() => handleSelectSecret(player)}
            >
              <img
                src={player.imageUrl}
                alt={player.name}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23333" width="100" height="100"/><text x="50" y="55" text-anchor="middle" fill="%23666" font-size="40">?</text></svg>';
                }}
              />
              <span className="player-name">{player.name}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (gameState.phase === 'passing') {
    const needsPlayer2Select = !gameState.player2Secret && mode === 'pass-play';
    return (
      <div className="game-screen passing-screen">
        <div className="pass-content">
          <div className="pass-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="7" r="4" />
              <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 11l2 2 4-4" />
            </svg>
          </div>
          <h2>
            {needsPlayer2Select
              ? 'Pass to Player 2'
              : 'Ready to Play!'
            }
          </h2>
          <p>
            {needsPlayer2Select
              ? 'Hand the device to Player 2 to select their secret player.'
              : mode === 'vs-ai'
                ? 'The AI has selected their player. Ready to guess?'
                : 'Both players have selected. Time to guess!'
            }
          </p>
          <button className="primary-btn" onClick={handlePassDevice}>
            {needsPlayer2Select ? "I'm Player 2" : 'Start Game'}
          </button>
        </div>
      </div>
    );
  }

  if (gameState.phase === 'result') {
    const isPlayer1Winner = gameState.winner === 1;
    const didPlayerWin = mode === 'vs-ai' ? isPlayer1Winner : true;

    return (
      <div className="game-screen result-screen">
        <div className="result-content">
          <div className={`result-icon ${didPlayerWin ? 'win' : 'lose'}`}>
            {didPlayerWin ? '🎉' : '😔'}
          </div>
          <h2>
            {mode === 'vs-ai'
              ? (didPlayerWin ? 'You Win!' : 'AI Wins!')
              : `Player ${gameState.winner} Wins!`
            }
          </h2>
          <p>
            Solved in {gameState.questionsAsked} question{gameState.questionsAsked !== 1 ? 's' : ''}
          </p>

          <div className="result-reveal">
            <div className="reveal-card">
              <span className="reveal-label">Player 1's Secret</span>
              <img src={gameState.player1Secret?.imageUrl} alt="" />
              <span className="reveal-name">{gameState.player1Secret?.name}</span>
            </div>
            <div className="reveal-card">
              <span className="reveal-label">{mode === 'vs-ai' ? "AI's" : "Player 2's"} Secret</span>
              <img src={gameState.player2Secret?.imageUrl} alt="" />
              <span className="reveal-name">{gameState.player2Secret?.name}</span>
            </div>
          </div>

          <div className="result-actions">
            <button className="primary-btn" onClick={onBack}>
              Play Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Playing phase
  return (
    <div className="game-screen">
      <header className="game-header">
        <button className="back-btn" onClick={onBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="game-info">
          <span className="player-badge small">
            {mode === 'vs-ai' && gameState.currentPlayer === 2 ? 'AI Turn' : `Player ${gameState.currentPlayer}`}
          </span>
          <span className="remaining-count">{remainingCount} remaining</span>
        </div>
        <button className="toggle-btn" onClick={() => setShowGrid(!showGrid)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {showGrid ? (
              <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Turn feedback */}
      {gameState.turnQuestion && (
        <div className={`turn-feedback ${gameState.turnAnswer ? 'yes' : 'no'}`}>
          <span className="question">{gameState.turnQuestion}</span>
          <span className="answer">{gameState.turnAnswer ? 'YES' : 'NO'}</span>
        </div>
      )}

      {/* Player grid */}
      {showGrid && (
        <div className="player-grid playing">
          {playerSet.players.map(player => {
            const isEliminated = currentEliminated.has(player.id);
            return (
              <button
                key={player.id}
                className={`player-card ${isEliminated ? 'eliminated' : ''} ${selectedForGuess?.id === player.id ? 'selected' : ''}`}
                onClick={() => !isEliminated && handleMakeGuess(player)}
                disabled={isEliminated}
              >
                <img
                  src={player.imageUrl}
                  alt={player.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23333" width="100" height="100"/><text x="50" y="55" text-anchor="middle" fill="%23666" font-size="40">?</text></svg>';
                  }}
                />
                <span className="player-name">{player.name}</span>
                {isEliminated && <div className="eliminated-overlay">X</div>}
              </button>
            );
          })}
        </div>
      )}

      {/* Actions */}
      <div className="game-actions">
        {selectedForGuess ? (
          <div className="guess-confirm">
            <div className="guess-player">
              <img src={selectedForGuess.imageUrl} alt="" />
              <span>Guess: {selectedForGuess.name}?</span>
            </div>
            <div className="guess-buttons">
              <button className="cancel-btn" onClick={() => setSelectedForGuess(null)}>Cancel</button>
              <button className="confirm-btn" onClick={handleConfirmGuess}>Confirm</button>
            </div>
          </div>
        ) : gameState.turnQuestion ? (
          <button className="primary-btn" onClick={handleEndTurn}>
            End Turn
          </button>
        ) : (
          <button className="primary-btn" onClick={() => setShowQuestionModal(true)}>
            Ask Question
          </button>
        )}
      </div>

      {/* Question Modal */}
      {showQuestionModal && (
        <div className="modal-overlay" onClick={() => setShowQuestionModal(false)}>
          <div className="question-modal" onClick={e => e.stopPropagation()}>
            <h2>Ask a Question</h2>

            {!pendingQuestion ? (
              <div className="category-list">
                {questionCategories.map(cat => (
                  <button
                    key={cat.key}
                    className="category-btn"
                    onClick={() => {
                      if (cat.type === 'boolean') {
                        setPendingQuestion({ category: cat.key, value: '' });
                      } else {
                        setPendingQuestion({ category: cat.key, value: '' });
                      }
                    }}
                  >
                    {cat.label}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                ))}
              </div>
            ) : (
              <div className="value-selection">
                <button className="back-to-categories" onClick={() => setPendingQuestion(null)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                  Back
                </button>
                <h3>{getCategoryLabel(pendingQuestion.category)}</h3>

                {pendingQuestion.category === 'facialHair' ? (
                  <div className="boolean-options">
                    <button onClick={() => handleAskQuestion('facialHair', 'true')}>
                      Has Facial Hair
                    </button>
                    <button onClick={() => handleAskQuestion('facialHair', 'false')}>
                      No Facial Hair
                    </button>
                  </div>
                ) : (
                  <div className="value-list">
                    {(attributes[pendingQuestion.category as keyof typeof attributes] || []).map(value => (
                      <button
                        key={String(value)}
                        className="value-btn"
                        onClick={() => handleAskQuestion(pendingQuestion.category, String(value))}
                      >
                        {String(value)}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            <button className="modal-cancel" onClick={() => {
              setShowQuestionModal(false);
              setPendingQuestion(null);
            }}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
