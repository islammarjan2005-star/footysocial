import { useState, useEffect } from 'react';
import {
  FootballIcon,
  TrophyIcon,
  StarIcon,
  TargetIcon,
  QuestionIcon,
  BrainIcon,
  CrystalBallIcon,
  BoltIcon,
  UsersIcon,
  ClockIcon,
  PhoneIcon,
  PartyIcon,
  ArrowRightIcon,
  ArrowDownIcon,
} from './Icons';
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
          <div className="floating-ball ball-1"><FootballIcon size={48} /></div>
          <div className="floating-ball ball-2"><FootballIcon size={32} /></div>
          <div className="floating-ball ball-3"><FootballIcon size={40} /></div>
          <div className="floating-ball ball-4"><TrophyIcon size={32} /></div>
          <div className="floating-ball ball-5"><StarIcon size={28} /></div>
        </div>

        <div className="hero-content">
          <div className="logo-container">
            <div className="logo-icon"><FootballIcon size={80} /></div>
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
            <div className="scroll-arrow"><ArrowDownIcon size={24} /></div>
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
              <span className="icon-main"><TargetIcon size={64} color="#e63946" /></span>
              <span className="icon-secondary"><QuestionIcon size={32} color="#2196f3" /></span>
            </div>
            <h3 className="game-card-title">Guess Who</h3>
            <p className="game-card-subtitle">Football Edition</p>
            <p className="game-card-description">
              The classic guessing game with your favorite footballers!
              Eliminate players by asking yes/no questions about their features.
            </p>
            <div className="game-card-features">
              <span className="feature"><UsersIcon size={16} /> 2 Players</span>
              <span className="feature"><ClockIcon size={16} /> 10-15 min</span>
              <span className="feature"><PhoneIcon size={16} /> Pass & Play</span>
            </div>
            <button className="play-button">
              <span>Play Now</span>
              <span className="play-arrow"><ArrowRightIcon size={20} /></span>
            </button>
          </div>

          {/* Coming Soon Cards */}
          <div className="game-card coming-soon">
            <div className="game-card-badge">Coming Soon</div>
            <div className="game-card-icon">
              <span className="icon-main"><BrainIcon size={64} color="#9c27b0" /></span>
            </div>
            <h3 className="game-card-title">Trivia Blitz</h3>
            <p className="game-card-description">
              Test your football knowledge in rapid-fire rounds!
            </p>
            <div className="game-card-features">
              <span className="feature"><UsersIcon size={16} /> 2-8 Players</span>
              <span className="feature"><ClockIcon size={16} /> 5-20 min</span>
            </div>
            <button className="play-button disabled">
              <span>Coming Soon</span>
            </button>
          </div>

          <div className="game-card coming-soon">
            <div className="game-card-badge">Coming Soon</div>
            <div className="game-card-icon">
              <span className="icon-main"><CrystalBallIcon size={64} color="#673ab7" /></span>
            </div>
            <h3 className="game-card-title">Predict & Win</h3>
            <p className="game-card-description">
              Make predictions and compete with friends for bragging rights!
            </p>
            <div className="game-card-features">
              <span className="feature"><UsersIcon size={16} /> 2-10 Players</span>
              <span className="feature"><ClockIcon size={16} /> Ongoing</span>
            </div>
            <button className="play-button disabled">
              <span>Coming Soon</span>
            </button>
          </div>

          <div className="game-card coming-soon">
            <div className="game-card-badge">Coming Soon</div>
            <div className="game-card-icon">
              <span className="icon-main"><BoltIcon size={64} color="#ff9800" /></span>
            </div>
            <h3 className="game-card-title">Transfer Rumors</h3>
            <p className="game-card-description">
              Guess if the transfer rumor is real or fake!
            </p>
            <div className="game-card-features">
              <span className="feature"><UsersIcon size={16} /> 1-6 Players</span>
              <span className="feature"><ClockIcon size={16} /> 10 min</span>
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
            <div className="feature-icon"><PhoneIcon size={48} color="#e63946" /></div>
            <h3>No App Required</h3>
            <p>Works right in your browser - just open and play!</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><UsersIcon size={48} color="#2196f3" /></div>
            <h3>Pass & Play</h3>
            <p>Share one device for the ultimate party game experience</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><FootballIcon size={48} color="#4caf50" /></div>
            <h3>Real Players</h3>
            <p>Featuring stars from the top leagues around the world</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><PartyIcon size={48} color="#ff9800" /></div>
            <h3>Party Ready</h3>
            <p>Perfect for watch parties, game nights, and hangouts</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <FootballIcon size={24} />
            <span>Footy Social</span>
          </div>
          <p className="footer-text">The party game platform for football fans</p>
          <p className="footer-copyright">Made with love for the beautiful game</p>
        </div>
      </footer>
    </div>
  );
}
