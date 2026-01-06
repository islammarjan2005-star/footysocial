import { useState, useEffect } from 'react';
import './LandingPage.css';

interface LandingPageProps {
  onPlayGuessWho: () => void;
}

export function LandingPage({ onPlayGuessWho }: LandingPageProps) {
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    setAnimateHero(true);
  }, []);

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className={`hero ${animateHero ? 'animate' : ''}`}>
        <div className="hero-background">
          <div className="floating-ball ball-1">⚽</div>
          <div className="floating-ball ball-2">⚽</div>
          <div className="floating-ball ball-3">⚽</div>
          <div className="floating-ball ball-4">🏆</div>
          <div className="floating-ball ball-5">⭐</div>
        </div>

        <div className="hero-content">
          <div className="logo-container">
            <div className="logo-icon">⚽</div>
            <h1 className="logo-text">
              <span className="logo-footy">Footy</span>
              <span className="logo-social">Social</span>
            </h1>
          </div>

          <p className="tagline">The Ultimate Football Party Game Platform</p>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">24+</span>
              <span className="stat-label">Players</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">5</span>
              <span className="stat-label">Leagues</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Fun</span>
            </div>
          </div>

          <div className="scroll-indicator">
            <span>Explore Games</span>
            <div className="scroll-arrow">↓</div>
          </div>
        </div>
      </header>

      {/* Games Section */}
      <section className="games-section" id="games">
        <div className="section-header">
          <h2 className="section-title">Party Games</h2>
          <p className="section-subtitle">Pass-and-play games perfect for game nights with friends</p>
        </div>

        <div className="games-grid">
          {/* Guess Who Game Card */}
          <div className="game-card featured" onClick={onPlayGuessWho}>
            <div className="game-card-badge">Featured</div>
            <div className="game-card-icon">
              <span className="icon-main">🎯</span>
              <span className="icon-secondary">❓</span>
            </div>
            <h3 className="game-card-title">Guess Who</h3>
            <p className="game-card-subtitle">Football Edition</p>
            <p className="game-card-description">
              The classic guessing game with your favorite footballers!
              Eliminate players by asking yes/no questions about their features.
            </p>
            <div className="game-card-features">
              <span className="feature">👥 2 Players</span>
              <span className="feature">⏱️ 10-15 min</span>
              <span className="feature">📱 Pass & Play</span>
            </div>
            <button className="play-button">
              <span>Play Now</span>
              <span className="play-arrow">→</span>
            </button>
          </div>

          {/* Coming Soon Cards */}
          <div className="game-card coming-soon">
            <div className="game-card-badge">Coming Soon</div>
            <div className="game-card-icon">
              <span className="icon-main">🧠</span>
            </div>
            <h3 className="game-card-title">Trivia Blitz</h3>
            <p className="game-card-description">
              Test your football knowledge in rapid-fire rounds!
            </p>
            <div className="game-card-features">
              <span className="feature">👥 2-8 Players</span>
              <span className="feature">⏱️ 5-20 min</span>
            </div>
            <button className="play-button disabled">
              <span>Coming Soon</span>
            </button>
          </div>

          <div className="game-card coming-soon">
            <div className="game-card-badge">Coming Soon</div>
            <div className="game-card-icon">
              <span className="icon-main">🔮</span>
            </div>
            <h3 className="game-card-title">Predict & Win</h3>
            <p className="game-card-description">
              Make predictions and compete with friends for bragging rights!
            </p>
            <div className="game-card-features">
              <span className="feature">👥 2-10 Players</span>
              <span className="feature">⏱️ Ongoing</span>
            </div>
            <button className="play-button disabled">
              <span>Coming Soon</span>
            </button>
          </div>

          <div className="game-card coming-soon">
            <div className="game-card-badge">Coming Soon</div>
            <div className="game-card-icon">
              <span className="icon-main">⚡</span>
            </div>
            <h3 className="game-card-title">Transfer Rumors</h3>
            <p className="game-card-description">
              Guess if the transfer rumor is real or fake!
            </p>
            <div className="game-card-features">
              <span className="feature">👥 1-6 Players</span>
              <span className="feature">⏱️ 10 min</span>
            </div>
            <button className="play-button disabled">
              <span>Coming Soon</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">Why Footy Social?</h2>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>No App Required</h3>
            <p>Works right in your browser - just open and play!</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Pass & Play</h3>
            <p>Share one device for the ultimate party game experience</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚽</div>
            <h3>Real Players</h3>
            <p>Featuring stars from the top leagues around the world</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎉</div>
            <h3>Party Ready</h3>
            <p>Perfect for watch parties, game nights, and hangouts</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span>⚽</span>
            <span>Footy Social</span>
          </div>
          <p className="footer-text">The party game platform for football fans</p>
          <p className="footer-copyright">Made with ❤️ for the beautiful game</p>
        </div>
      </footer>
    </div>
  );
}
