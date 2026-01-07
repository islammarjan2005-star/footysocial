import { useState, useCallback } from 'react';
import {
  createDeck,
  shuffleDeck,
  evaluateHand,
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

type GamePhase = 'betting' | 'dealt' | 'draw' | 'result';

const STARTING_CHIPS = 1000;
const ANTE = 10;

export function FootballPoker({ onBack }: FootballPokerProps) {
  const [chips, setChips] = useState(STARTING_CHIPS);
  const [pot, setPot] = useState(0);
  const [phase, setPhase] = useState<GamePhase>('betting');
  const [deck, setDeck] = useState<FootballCard[]>([]);
  const [playerHand, setPlayerHand] = useState<FootballCard[]>([]);
  const [dealerHand, setDealerHand] = useState<FootballCard[]>([]);
  const [selectedCards, setSelectedCards] = useState<Set<number>>(new Set());
  const [playerResult, setPlayerResult] = useState<HandResult | null>(null);
  const [dealerResult, setDealerResult] = useState<HandResult | null>(null);
  const [winner, setWinner] = useState<'player' | 'dealer' | 'tie' | null>(null);
  const [showDealerCards, setShowDealerCards] = useState(false);

  const dealCards = useCallback(() => {
    if (chips < ANTE) return;

    const newDeck = shuffleDeck(createDeck());
    const pHand = newDeck.slice(0, 5);
    const dHand = newDeck.slice(5, 10);
    const remaining = newDeck.slice(10);

    setDeck(remaining);
    setPlayerHand(pHand);
    setDealerHand(dHand);
    setChips(c => c - ANTE);
    setPot(ANTE * 2); // Both player and dealer ante
    setPhase('dealt');
    setSelectedCards(new Set());
    setPlayerResult(null);
    setDealerResult(null);
    setWinner(null);
    setShowDealerCards(false);
  }, [chips]);

  const toggleCardSelection = useCallback((index: number) => {
    if (phase !== 'dealt') return;
    setSelectedCards(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }, [phase]);

  const drawCards = useCallback(() => {
    // Replace selected cards with new ones from deck
    const newHand = [...playerHand];
    let deckIndex = 0;

    selectedCards.forEach(cardIndex => {
      if (deckIndex < deck.length) {
        newHand[cardIndex] = deck[deckIndex];
        deckIndex++;
      }
    });

    setPlayerHand(newHand);
    setDeck(deck.slice(deckIndex));
    setPhase('draw');

    // Evaluate hands and determine winner
    setTimeout(() => {
      const pResult = evaluateHand(newHand);
      const dResult = evaluateHand(dealerHand);

      setPlayerResult(pResult);
      setDealerResult(dResult);
      setShowDealerCards(true);

      const comparison = compareHands(pResult, dResult);

      if (comparison > 0) {
        setWinner('player');
        setChips(c => c + pot);
      } else if (comparison < 0) {
        setWinner('dealer');
      } else {
        setWinner('tie');
        setChips(c => c + pot / 2); // Return half on tie
      }

      setPhase('result');
      setPot(0);
    }, 500);
  }, [playerHand, dealerHand, selectedCards, deck, pot]);

  const standPat = useCallback(() => {
    // Keep all cards, go straight to showdown
    setPhase('draw');

    setTimeout(() => {
      const pResult = evaluateHand(playerHand);
      const dResult = evaluateHand(dealerHand);

      setPlayerResult(pResult);
      setDealerResult(dResult);
      setShowDealerCards(true);

      const comparison = compareHands(pResult, dResult);

      if (comparison > 0) {
        setWinner('player');
        setChips(c => c + pot);
      } else if (comparison < 0) {
        setWinner('dealer');
      } else {
        setWinner('tie');
        setChips(c => c + pot / 2);
      }

      setPhase('result');
      setPot(0);
    }, 500);
  }, [playerHand, dealerHand, pot]);

  const newGame = useCallback(() => {
    setPhase('betting');
    setPlayerHand([]);
    setDealerHand([]);
    setSelectedCards(new Set());
    setPlayerResult(null);
    setDealerResult(null);
    setWinner(null);
    setShowDealerCards(false);
  }, []);

  const resetGame = useCallback(() => {
    setChips(STARTING_CHIPS);
    newGame();
  }, [newGame]);

  return (
    <div className="football-poker">
      <header className="fp-header">
        <button className="fp-back-btn" onClick={onBack}>← Back</button>
        <h1>Football Poker</h1>
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
            <p>Ante: {ANTE} chips</p>
            <p>5-Card Draw Poker</p>
          </div>
          {chips >= ANTE ? (
            <button className="fp-deal-btn" onClick={dealCards}>
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

      {(phase === 'dealt' || phase === 'draw' || phase === 'result') && (
        <div className="fp-game-area">
          {/* Dealer's Hand */}
          <div className="fp-hand-section fp-dealer-section">
            <h3>Dealer's Hand {dealerResult && `- ${handRankNames[dealerResult.rank]}`}</h3>
            <div className="fp-hand">
              {dealerHand.map((card, i) => (
                <div
                  key={i}
                  className={`fp-card ${!showDealerCards ? 'fp-card-back' : ''}`}
                >
                  {showDealerCards ? (
                    <CardFace card={card} />
                  ) : (
                    <div className="fp-card-back-design">⚽</div>
                  )}
                </div>
              ))}
            </div>
            {dealerResult && showDealerCards && (
              <p className="fp-hand-desc">{handRankFootballDesc[dealerResult.rank]}</p>
            )}
          </div>

          {/* Pot */}
          <div className="fp-pot">
            {pot > 0 && <span>Pot: {pot}</span>}
            {winner === 'player' && <span className="fp-win">You Win!</span>}
            {winner === 'dealer' && <span className="fp-lose">Dealer Wins</span>}
            {winner === 'tie' && <span className="fp-tie">Push</span>}
          </div>

          {/* Player's Hand */}
          <div className="fp-hand-section fp-player-section">
            <h3>Your Hand {playerResult && `- ${handRankNames[playerResult.rank]}`}</h3>
            <div className="fp-hand">
              {playerHand.map((card, i) => (
                <div
                  key={i}
                  className={`fp-card ${selectedCards.has(i) ? 'fp-card-selected' : ''}`}
                  onClick={() => toggleCardSelection(i)}
                >
                  <CardFace card={card} />
                  {phase === 'dealt' && selectedCards.has(i) && (
                    <div className="fp-card-swap">SWAP</div>
                  )}
                </div>
              ))}
            </div>
            {playerResult && (
              <p className="fp-hand-desc">{handRankFootballDesc[playerResult.rank]}</p>
            )}
          </div>

          {/* Actions */}
          <div className="fp-actions">
            {phase === 'dealt' && (
              <>
                <p className="fp-hint">Tap cards to swap (up to 5)</p>
                <div className="fp-action-btns">
                  <button className="fp-action-btn fp-draw-btn" onClick={drawCards}>
                    {selectedCards.size > 0 ? `Draw ${selectedCards.size}` : 'Draw'}
                  </button>
                  <button className="fp-action-btn fp-stand-btn" onClick={standPat}>
                    Stand Pat
                  </button>
                </div>
              </>
            )}
            {phase === 'result' && (
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
