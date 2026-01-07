import { useState, useCallback } from 'react';
import type { BlindRankingPlayer, RankingCategory } from '../data/blindRankingData';
import {
  getRandomPlayersForRanking,
  getRandomCategory,
  calculateScore,
  categoryLabels,
  categoryDescriptions,
  getValidCategories,
} from '../data/blindRankingData';
import './BlindRanking.css';

interface BlindRankingProps {
  onBack: () => void;
}

type GameState = 'category-select' | 'ranking' | 'results';

interface ResultDetail {
  player: BlindRankingPlayer;
  guessedRank: number;
  actualRank: number;
  points: number;
}

export function BlindRanking({ onBack }: BlindRankingProps) {
  const [gameState, setGameState] = useState<GameState>('category-select');
  const [category, setCategory] = useState<RankingCategory | null>(null);
  const [availablePlayers, setAvailablePlayers] = useState<BlindRankingPlayer[]>([]);
  const [rankedPlayers, setRankedPlayers] = useState<(BlindRankingPlayer | null)[]>(
    Array(10).fill(null)
  );
  const [selectedPlayer, setSelectedPlayer] = useState<BlindRankingPlayer | null>(null);
  const [results, setResults] = useState<{
    score: number;
    maxScore: number;
    correctPositions: number;
    details: ResultDetail[];
  } | null>(null);
  const [highScore, setHighScore] = useState<number>(() => {
    const saved = localStorage.getItem('blindRankingHighScore');
    return saved ? parseInt(saved, 10) : 0;
  });

  const startGame = useCallback((selectedCategory: RankingCategory) => {
    const players = getRandomPlayersForRanking(10);
    setCategory(selectedCategory);
    setAvailablePlayers(players);
    setRankedPlayers(Array(10).fill(null));
    setSelectedPlayer(null);
    setResults(null);
    setGameState('ranking');
  }, []);

  const startRandomGame = useCallback(() => {
    const randomCat = getRandomCategory();
    startGame(randomCat);
  }, [startGame]);

  const handlePlayerSelect = useCallback((player: BlindRankingPlayer) => {
    if (selectedPlayer?.id === player.id) {
      setSelectedPlayer(null);
    } else {
      setSelectedPlayer(player);
    }
  }, [selectedPlayer]);

  const handleSlotClick = useCallback((slotIndex: number) => {
    if (!selectedPlayer) {
      // If clicking a filled slot without selection, select that player to move
      const playerInSlot = rankedPlayers[slotIndex];
      if (playerInSlot) {
        setSelectedPlayer(playerInSlot);
        // Remove from slot
        const newRanked = [...rankedPlayers];
        newRanked[slotIndex] = null;
        setRankedPlayers(newRanked);
        setAvailablePlayers(prev => [...prev, playerInSlot]);
      }
      return;
    }

    // Place selected player in slot
    const currentOccupant = rankedPlayers[slotIndex];
    const newRanked = [...rankedPlayers];
    newRanked[slotIndex] = selectedPlayer;
    setRankedPlayers(newRanked);

    // Remove selected player from available
    setAvailablePlayers(prev => prev.filter(p => p.id !== selectedPlayer.id));

    // If there was a player in this slot, put them back in available
    if (currentOccupant) {
      setAvailablePlayers(prev => [...prev, currentOccupant]);
    }

    setSelectedPlayer(null);
  }, [selectedPlayer, rankedPlayers]);

  const handleSubmit = useCallback(() => {
    if (!category || rankedPlayers.some(p => p === null)) return;

    const finalRanking = rankedPlayers.filter((p): p is BlindRankingPlayer => p !== null);
    const result = calculateScore(finalRanking, category);
    setResults(result);

    if (result.score > highScore) {
      setHighScore(result.score);
      localStorage.setItem('blindRankingHighScore', result.score.toString());
    }

    setGameState('results');
  }, [category, rankedPlayers, highScore]);

  const playAgain = useCallback(() => {
    setGameState('category-select');
    setCategory(null);
    setAvailablePlayers([]);
    setRankedPlayers(Array(10).fill(null));
    setResults(null);
  }, []);

  const filledSlots = rankedPlayers.filter(p => p !== null).length;
  const canSubmit = filledSlots === 10;

  return (
    <div className="blind-ranking">
      <header className="br-header">
        <button className="br-back-btn" onClick={onBack}>
          ← Back
        </button>
        <h1>Blind Ranking</h1>
        <div className="br-high-score">Best: {highScore}</div>
      </header>

      {gameState === 'category-select' && (
        <div className="br-category-select">
          <h2>Choose a Category</h2>
          <p className="br-instructions">
            Rank 10 random players from highest to lowest without seeing their stats!
          </p>

          <div className="br-category-grid">
            {getValidCategories().map(cat => (
              <button
                key={cat}
                className="br-category-btn"
                onClick={() => startGame(cat)}
              >
                <span className="br-cat-label">{categoryLabels[cat]}</span>
                <span className="br-cat-desc">{categoryDescriptions[cat]}</span>
              </button>
            ))}
          </div>

          <button className="br-random-btn" onClick={startRandomGame}>
            🎲 Random Category
          </button>
        </div>
      )}

      {gameState === 'ranking' && category && (
        <div className="br-game">
          <div className="br-category-banner">
            <span>Rank by:</span>
            <strong>{categoryLabels[category]}</strong>
            <span className="br-direction">Highest → Lowest</span>
          </div>

          <div className="br-slots">
            {rankedPlayers.map((player, index) => (
              <div
                key={index}
                className={`br-slot ${player ? 'filled' : 'empty'} ${
                  !player && selectedPlayer ? 'ready' : ''
                }`}
                onClick={() => handleSlotClick(index)}
              >
                <span className="br-slot-rank">#{index + 1}</span>
                {player ? (
                  <div className="br-slot-player">
                    <img src={player.imageUrl} alt={player.name} />
                    <span className="br-slot-name">{player.name}</span>
                  </div>
                ) : (
                  <span className="br-slot-empty">
                    {selectedPlayer ? 'Tap to place' : 'Empty'}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="br-available">
            <h3>Available Players ({availablePlayers.length})</h3>
            <div className="br-player-pool">
              {availablePlayers.map(player => (
                <div
                  key={player.id}
                  className={`br-player-card ${
                    selectedPlayer?.id === player.id ? 'selected' : ''
                  }`}
                  onClick={() => handlePlayerSelect(player)}
                >
                  <img src={player.imageUrl} alt={player.name} />
                  <span>{player.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="br-actions">
            <span className="br-progress">{filledSlots}/10 ranked</span>
            <button
              className="br-submit-btn"
              disabled={!canSubmit}
              onClick={handleSubmit}
            >
              Submit Ranking
            </button>
          </div>
        </div>
      )}

      {gameState === 'results' && results && category && (
        <div className="br-results">
          <div className="br-score-card">
            <h2>Results</h2>
            <div className="br-final-score">
              <span className="br-score-value">{results.score}</span>
              <span className="br-score-max">/ {results.maxScore}</span>
            </div>
            <div className="br-score-details">
              <span>{results.correctPositions} exact positions</span>
              <span>{Math.round((results.score / results.maxScore) * 100)}% accuracy</span>
            </div>
            {results.score > highScore - results.score && results.score >= highScore && (
              <div className="br-new-high">🏆 New High Score!</div>
            )}
          </div>

          <div className="br-results-list">
            <div className="br-results-header">
              <span>Player</span>
              <span>Your Rank</span>
              <span>Actual ({categoryLabels[category]})</span>
              <span>Points</span>
            </div>
            {results.details
              .sort((a, b) => a.actualRank - b.actualRank)
              .map((detail) => (
                <div
                  key={detail.player.id}
                  className={`br-result-row ${
                    detail.guessedRank === detail.actualRank
                      ? 'perfect'
                      : Math.abs(detail.guessedRank - detail.actualRank) <= 1
                      ? 'close'
                      : ''
                  }`}
                >
                  <div className="br-result-player">
                    <img src={detail.player.imageUrl} alt={detail.player.name} />
                    <span>{detail.player.name}</span>
                  </div>
                  <span className="br-result-guess">#{detail.guessedRank}</span>
                  <div className="br-result-actual">
                    <span className="br-actual-rank">#{detail.actualRank}</span>
                    <span className="br-actual-value">
                      {category === 'market_value' && '€'}
                      {detail.player.stats[category].toLocaleString()}
                      {category === 'instagram' && 'M'}
                    </span>
                  </div>
                  <span className={`br-result-points ${detail.points === 10 ? 'max' : ''}`}>
                    +{detail.points}
                  </span>
                </div>
              ))}
          </div>

          <div className="br-results-actions">
            <button className="br-play-again" onClick={playAgain}>
              Play Again
            </button>
            <button className="br-back-home" onClick={onBack}>
              Back to Menu
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
