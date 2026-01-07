import { useState, useCallback } from 'react';
import {
  createDeck,
  shuffleDeck,
  findBestHand,
  compareHands,
  getCardDisplayValue,
  getSuitSymbol,
  leagueNames,
  leagueColors,
  handRankNames,
  handRankFootballDesc,
} from '../data/footballPokerData';
import type { FootballCard, HandResult } from '../data/footballPokerData';
import './FootballPoker.css';

interface FootballPokerProps {
  onBack: () => void;
}

type GamePhase = 'betting' | 'preflop' | 'flop' | 'turn' | 'river' | 'showdown';

const STARTING_CHIPS = 1000;
const BIG_BLIND = 20;
const SMALL_BLIND = 10;

export function FootballPoker({ onBack }: FootballPokerProps) {
  const [chips, setChips] = useState(STARTING_CHIPS);
  const [pot, setPot] = useState(0);
  const [phase, setPhase] = useState<GamePhase>('betting');
  const [deck, setDeck] = useState<FootballCard[]>([]);
  const [playerHole, setPlayerHole] = useState<FootballCard[]>([]);
  const [dealerHole, setDealerHole] = useState<FootballCard[]>([]);
  const [community, setCommunity] = useState<FootballCard[]>([]);
  const [playerResult, setPlayerResult] = useState<HandResult | null>(null);
  const [dealerResult, setDealerResult] = useState<HandResult | null>(null);
  const [winner, setWinner] = useState<'player' | 'dealer' | 'tie' | null>(null);

  const dealHoleCards = useCallback(() => {
    if (chips < BIG_BLIND) return;

    const newDeck = shuffleDeck(createDeck());

    // Deal 2 cards to player and 2 to dealer
    const pHole = [newDeck[0], newDeck[2]]; // Alternating deal
    const dHole = [newDeck[1], newDeck[3]];
    const remaining = newDeck.slice(4);

    setDeck(remaining);
    setPlayerHole(pHole);
    setDealerHole(dHole);
    setCommunity([]);
    setChips(c => c - BIG_BLIND);
    setPot(BIG_BLIND + SMALL_BLIND); // Player posts big blind, dealer posts small
    setPhase('preflop');
    setPlayerResult(null);
    setDealerResult(null);
    setWinner(null);
  }, [chips]);

  const dealFlop = useCallback(() => {
    // Burn one, deal 3
    const flop = deck.slice(1, 4);
    setCommunity(flop);
    setDeck(deck.slice(4));
    setPhase('flop');
  }, [deck]);

  const dealTurn = useCallback(() => {
    // Burn one, deal 1
    const turnCard = deck[1];
    setCommunity(prev => [...prev, turnCard]);
    setDeck(deck.slice(2));
    setPhase('turn');
  }, [deck]);

  const dealRiver = useCallback(() => {
    // Burn one, deal 1
    const riverCard = deck[1];
    setCommunity(prev => [...prev, riverCard]);
    setDeck(deck.slice(2));
    setPhase('river');
  }, [deck]);

  const goToShowdown = useCallback(() => {
    // Evaluate both hands
    const playerCards = [...playerHole, ...community];
    const dealerCards = [...dealerHole, ...community];

    const pResult = findBestHand(playerCards);
    const dResult = findBestHand(dealerCards);

    setPlayerResult(pResult);
    setDealerResult(dResult);

    const comparison = compareHands(pResult, dResult);

    if (comparison > 0) {
      setWinner('player');
      setChips(c => c + pot);
    } else if (comparison < 0) {
      setWinner('dealer');
    } else {
      setWinner('tie');
      setChips(c => c + Math.floor(pot / 2));
    }

    setPhase('showdown');
    setPot(0);
  }, [playerHole, dealerHole, community, pot]);

  const handleCheck = useCallback(() => {
    // Check/Call - advance to next street
    switch (phase) {
      case 'preflop':
        dealFlop();
        break;
      case 'flop':
        dealTurn();
        break;
      case 'turn':
        dealRiver();
        break;
      case 'river':
        goToShowdown();
        break;
    }
  }, [phase, dealFlop, dealTurn, dealRiver, goToShowdown]);

  const handleBet = useCallback(() => {
    const betAmount = BIG_BLIND;
    if (chips < betAmount) return;

    setChips(c => c - betAmount);
    setPot(p => p + betAmount * 2); // Dealer calls

    // Then advance
    handleCheck();
  }, [chips, handleCheck]);

  const handleFold = useCallback(() => {
    setWinner('dealer');
    setPhase('showdown');
    setPot(0);
  }, []);

  const handleAllIn = useCallback(() => {
    const allInAmount = Math.min(chips, 100); // Cap at 100 for simplicity
    setChips(c => c - allInAmount);
    setPot(p => p + allInAmount * 2);

    // Deal remaining community cards and go to showdown
    let newCommunity = [...community];
    let deckIndex = 0;
    let currentDeck = [...deck];

    while (newCommunity.length < 5 && deckIndex < currentDeck.length) {
      deckIndex++; // Burn
      if (deckIndex < currentDeck.length) {
        newCommunity.push(currentDeck[deckIndex]);
        deckIndex++;
      }
    }

    setCommunity(newCommunity);

    // Evaluate
    setTimeout(() => {
      const playerCards = [...playerHole, ...newCommunity];
      const dealerCards = [...dealerHole, ...newCommunity];

      const pResult = findBestHand(playerCards);
      const dResult = findBestHand(dealerCards);

      setPlayerResult(pResult);
      setDealerResult(dResult);

      const comparison = compareHands(pResult, dResult);

      if (comparison > 0) {
        setWinner('player');
        setChips(c => c + pot + allInAmount * 2);
      } else if (comparison < 0) {
        setWinner('dealer');
      } else {
        setWinner('tie');
        setChips(c => c + Math.floor((pot + allInAmount * 2) / 2));
      }

      setPhase('showdown');
      setPot(0);
    }, 100);
  }, [chips, community, deck, playerHole, dealerHole, pot]);

  const newGame = useCallback(() => {
    setPhase('betting');
    setPlayerHole([]);
    setDealerHole([]);
    setCommunity([]);
    setPlayerResult(null);
    setDealerResult(null);
    setWinner(null);
  }, []);

  const resetGame = useCallback(() => {
    setChips(STARTING_CHIPS);
    newGame();
  }, [newGame]);

  const getPhaseName = () => {
    switch (phase) {
      case 'preflop': return 'Pre-Flop';
      case 'flop': return 'The Flop';
      case 'turn': return 'The Turn';
      case 'river': return 'The River';
      case 'showdown': return 'Showdown';
      default: return '';
    }
  };

  return (
    <div className="football-poker">
      <header className="fp-header">
        <button className="fp-back-btn" onClick={onBack}>← Back</button>
        <h1>Football Hold'em</h1>
        <div className="fp-chips">💰 {chips}</div>
      </header>

      <div className="fp-legend">
        <div className="fp-legend-item">
          <span className="fp-suit" style={{ color: '#e90052' }}>♥</span> Premier League
        </div>
        <div className="fp-legend-item">
          <span className="fp-suit" style={{ color: '#ee8707' }}>♦</span> La Liga
        </div>
        <div className="fp-legend-item">
          <span className="fp-suit" style={{ color: '#008fd7' }}>♣</span> Serie A
        </div>
        <div className="fp-legend-item">
          <span className="fp-suit" style={{ color: '#d20515' }}>♠</span> Bundesliga
        </div>
      </div>

      {phase === 'betting' && (
        <div className="fp-betting">
          <div className="fp-ante-info">
            <p>Big Blind: {BIG_BLIND} chips</p>
            <p>Texas Hold'em</p>
          </div>
          {chips >= BIG_BLIND ? (
            <button className="fp-deal-btn" onClick={dealHoleCards}>
              Deal Cards
            </button>
          ) : (
            <div className="fp-broke">
              <p>Out of chips!</p>
              <button className="fp-reset-btn" onClick={resetGame}>
                Start Over
              </button>
            </div>
          )}
        </div>
      )}

      {phase !== 'betting' && (
        <div className="fp-game-area">
          {/* Phase indicator */}
          <div className="fp-phase-indicator">
            <span className="fp-phase-name">{getPhaseName()}</span>
            {pot > 0 && <span className="fp-pot-amount">Pot: {pot}</span>}
          </div>

          {/* Dealer's Hole Cards */}
          <div className="fp-hand-section fp-dealer-section">
            <h3>Dealer {dealerResult && phase === 'showdown' && `- ${handRankNames[dealerResult.rank]}`}</h3>
            <div className="fp-hand fp-hole-cards">
              {dealerHole.map((card, i) => (
                <div
                  key={i}
                  className={`fp-card ${phase !== 'showdown' ? 'fp-card-back' : ''}`}
                >
                  {phase === 'showdown' ? (
                    <CardFace card={card} />
                  ) : (
                    <div className="fp-card-back-design">⚽</div>
                  )}
                </div>
              ))}
            </div>
            {dealerResult && phase === 'showdown' && (
              <p className="fp-hand-desc">{handRankFootballDesc[dealerResult.rank]}</p>
            )}
          </div>

          {/* Community Cards */}
          <div className="fp-community-section">
            <h3>Community Cards</h3>
            <div className="fp-hand fp-community-cards">
              {[0, 1, 2, 3, 4].map(i => {
                const isRevealed = i < community.length;
                // Use unique key based on card identity so new cards trigger animation
                const cardKey = isRevealed
                  ? `card-${community[i].player.name}-${community[i].suit}`
                  : `empty-${i}`;
                return (
                  <div
                    key={cardKey}
                    className={`fp-card fp-community-card ${!isRevealed ? 'fp-card-empty' : ''}`}
                    style={{ animationDelay: `${(i % 3) * 0.1}s` }}
                  >
                    {isRevealed ? (
                      <CardFace card={community[i]} />
                    ) : (
                      <div className="fp-card-placeholder">?</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Result */}
          {phase === 'showdown' && (
            <div className="fp-result">
              {winner === 'player' && <span className="fp-win">You Win!</span>}
              {winner === 'dealer' && <span className="fp-lose">Dealer Wins</span>}
              {winner === 'tie' && <span className="fp-tie">Split Pot!</span>}
            </div>
          )}

          {/* Player's Hole Cards */}
          <div className="fp-hand-section fp-player-section">
            <h3>Your Cards {playerResult && phase === 'showdown' && `- ${handRankNames[playerResult.rank]}`}</h3>
            <div className="fp-hand fp-hole-cards">
              {playerHole.map((card, i) => (
                <div key={i} className="fp-card fp-player-card">
                  <CardFace card={card} />
                </div>
              ))}
            </div>
            {playerResult && phase === 'showdown' && (
              <p className="fp-hand-desc">{handRankFootballDesc[playerResult.rank]}</p>
            )}
          </div>

          {/* Actions */}
          <div className="fp-actions">
            {phase !== 'showdown' && (
              <div className="fp-action-btns">
                <button className="fp-action-btn fp-check-btn" onClick={handleCheck}>
                  {phase === 'river' ? 'Show' : 'Check'}
                </button>
                <button className="fp-action-btn fp-bet-btn" onClick={handleBet} disabled={chips < BIG_BLIND}>
                  Bet {BIG_BLIND}
                </button>
                <button className="fp-action-btn fp-allin-btn" onClick={handleAllIn}>
                  All In
                </button>
                <button className="fp-action-btn fp-fold-btn" onClick={handleFold}>
                  Fold
                </button>
              </div>
            )}
            {phase === 'showdown' && (
              <button className="fp-action-btn fp-new-btn" onClick={newGame}>
                New Hand
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Card Face Component
function CardFace({ card }: { card: FootballCard }) {
  const suitColor = leagueColors[card.suit];
  const suitSymbol = getSuitSymbol(card.suit);
  const displayValue = getCardDisplayValue(card.value);

  return (
    <div className="fp-card-face">
      <div className="fp-card-corner fp-card-corner-top">
        <span className="fp-card-value" style={{ color: suitColor }}>{displayValue}</span>
        <span className="fp-card-suit" style={{ color: suitColor }}>{suitSymbol}</span>
      </div>
      <div className="fp-card-player">
        <img src={card.player.imageUrl} alt={card.player.name} />
      </div>
      <div className="fp-card-info">
        <span className="fp-card-name">{card.player.name}</span>
        <span className="fp-card-league">{leagueNames[card.suit]}</span>
      </div>
      <div className="fp-card-corner fp-card-corner-bottom">
        <span className="fp-card-value" style={{ color: suitColor }}>{displayValue}</span>
        <span className="fp-card-suit" style={{ color: suitColor }}>{suitSymbol}</span>
      </div>
    </div>
  );
}
