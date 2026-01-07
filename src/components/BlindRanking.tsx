import { useState, useCallback, useMemo } from 'react';
import { blindRankingPlayers } from '../data/blindRankingData';
import './BlindRanking.css';

interface BlindRankingProps {
  onBack: () => void;
}

type Tier = 'S' | 'A' | 'B' | 'C' | 'D';

interface RankedPlayer {
  id: string;
  name: string;
  imageUrl: string;
  tier: Tier;
}

type GameState = 'intro' | 'ranking' | 'results';

const PLAYER_COUNT = 10;

const tierColors: Record<Tier, string> = {
  S: '#ff5555',
  A: '#ff9500',
  B: '#ffd000',
  C: '#4ecdc4',
  D: '#a0a0a0',
};

const tierDescriptions: Record<Tier, string> = {
  S: 'Elite - Best of the best',
  A: 'Great - Top tier player',
  B: 'Good - Solid performer',
  C: 'Average - Decent player',
  D: 'Below Average',
};

export function BlindRanking({ onBack }: BlindRankingProps) {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rankedPlayers, setRankedPlayers] = useState<RankedPlayer[]>([]);

  // Shuffle players once when starting a new game
  const shuffledPlayers = useMemo(() => {
    const shuffled = [...blindRankingPlayers].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, PLAYER_COUNT);
  }, [gameState === 'intro']); // Re-shuffle when returning to intro

  const currentPlayer = shuffledPlayers[currentIndex];
  const isLastPlayer = currentIndex === PLAYER_COUNT - 1;

  const startGame = useCallback(() => {
    setGameState('ranking');
    setCurrentIndex(0);
    setRankedPlayers([]);
  }, []);

  const handleTierSelect = useCallback((tier: Tier) => {
    const newRankedPlayer: RankedPlayer = {
      id: currentPlayer.id,
      name: currentPlayer.name,
      imageUrl: currentPlayer.imageUrl,
      tier,
    };

    setRankedPlayers(prev => [...prev, newRankedPlayer]);

    if (isLastPlayer) {
      setGameState('results');
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentPlayer, isLastPlayer]);

  const playAgain = useCallback(() => {
    setGameState('intro');
    setCurrentIndex(0);
    setRankedPlayers([]);
  }, []);

  // Group players by tier for results
  const tierLists = useMemo(() => {
    const tiers: Record<Tier, RankedPlayer[]> = {
      S: [],
      A: [],
      B: [],
      C: [],
      D: [],
    };
    rankedPlayers.forEach(player => {
      tiers[player.tier].push(player);
    });
    return tiers;
  }, [rankedPlayers]);

  return (
    <div className="blind-ranking">
      <header className="br-header">
        <button className="br-back-btn" onClick={onBack}>
          ← Back
        </button>
        <h1>Blind Ranking</h1>
        {gameState === 'ranking' && (
          <div className="br-progress-counter">{currentIndex + 1}/{PLAYER_COUNT}</div>
        )}
        {gameState !== 'ranking' && <div className="br-spacer" />}
      </header>

      {gameState === 'intro' && (
        <div className="br-intro">
          <div className="br-intro-card">
            <h2>How It Works</h2>
            <div className="br-rules">
              <div className="br-rule">
                <span className="br-rule-num">1</span>
                <p>Players appear <strong>one at a time</strong></p>
              </div>
              <div className="br-rule">
                <span className="br-rule-num">2</span>
                <p>Assign each player a <strong>tier (S to D)</strong></p>
              </div>
              <div className="br-rule">
                <span className="br-rule-num">3</span>
                <p><strong>No going back!</strong> Trust your gut</p>
              </div>
              <div className="br-rule">
                <span className="br-rule-num">4</span>
                <p>See your <strong>final tier list</strong> at the end</p>
              </div>
            </div>
            <div className="br-tier-preview">
              {(['S', 'A', 'B', 'C', 'D'] as Tier[]).map(tier => (
                <div key={tier} className="br-tier-badge" style={{ background: tierColors[tier] }}>
                  {tier}
                </div>
              ))}
            </div>
            <button className="br-start-btn" onClick={startGame}>
              Start Ranking
            </button>
          </div>
        </div>
      )}

      {gameState === 'ranking' && currentPlayer && (
        <div className="br-ranking-screen">
          <div className="br-player-reveal">
            <div className="br-player-image-container">
              <img
                src={currentPlayer.imageUrl}
                alt={currentPlayer.name}
                className="br-player-image"
              />
            </div>
            <h2 className="br-player-name">{currentPlayer.name}</h2>
            <p className="br-prompt">What tier is this player?</p>
          </div>

          <div className="br-tier-buttons">
            {(['S', 'A', 'B', 'C', 'D'] as Tier[]).map(tier => (
              <button
                key={tier}
                className="br-tier-btn"
                style={{
                  background: tierColors[tier],
                  boxShadow: `0 4px 20px ${tierColors[tier]}66`
                }}
                onClick={() => handleTierSelect(tier)}
              >
                <span className="br-tier-letter">{tier}</span>
                <span className="br-tier-desc">{tierDescriptions[tier]}</span>
              </button>
            ))}
          </div>

          <div className="br-remaining">
            {PLAYER_COUNT - currentIndex - 1} players remaining
          </div>
        </div>
      )}

      {gameState === 'results' && (
        <div className="br-results">
          <h2 className="br-results-title">Your Tier List</h2>

          <div className="br-tier-list">
            {(['S', 'A', 'B', 'C', 'D'] as Tier[]).map(tier => (
              <div key={tier} className="br-tier-row">
                <div
                  className="br-tier-label"
                  style={{ background: tierColors[tier] }}
                >
                  {tier}
                </div>
                <div className="br-tier-players">
                  {tierLists[tier].length === 0 ? (
                    <span className="br-empty-tier">Empty</span>
                  ) : (
                    tierLists[tier].map(player => (
                      <div key={player.id} className="br-tier-player">
                        <img src={player.imageUrl} alt={player.name} />
                        <span>{player.name}</span>
                      </div>
                    ))
                  )}
                </div>
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
