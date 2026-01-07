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
  onPlaySquadBuilder: () => void;
  onPlayHigherLower: () => void;
  onPlayBlindRanking: () => void;
  onPlayFootballPoker: () => void;
  onPlayFootballConnections: () => void;
}

export function LandingPage({ onPlayGuessWho, onPlaySquadBuilder, onPlayHigherLower, onPlayBlindRanking, onPlayFootballPoker, onPlayFootballConnections }: LandingPageProps) {
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

          {/* Squad Builder Game Card - FUT Style */}
          <div className="game-card featured fut-style" onClick={onPlaySquadBuilder}>
            <div className="game-card-badge">New</div>
            <div className="fut-preview">
              <div className="fut-pitch">
                <div className="fut-formation">
                  {/* Front 3 */}
                  <div className="fut-row front">
                    <div className="fut-player-card">
                      <div className="fut-card-rating">92</div>
                      <div className="fut-card-pos">LW</div>
                      <div className="fut-card-face">
                        <img src="https://www.fifarosters.com/assets/players/fifa25/faces/238794.png" alt="Vini Jr" />
                      </div>
                      <div className="fut-card-flag flag-br"></div>
                    </div>
                    <div className="fut-player-card">
                      <div className="fut-card-rating">91</div>
                      <div className="fut-card-pos">ST</div>
                      <div className="fut-card-face">
                        <img src="https://www.fifarosters.com/assets/players/fifa25/faces/239085.png" alt="Haaland" />
                      </div>
                      <div className="fut-card-flag flag-no"></div>
                    </div>
                    <div className="fut-player-card">
                      <div className="fut-card-rating">90</div>
                      <div className="fut-card-pos">RW</div>
                      <div className="fut-card-face">
                        <img src="https://www.fifarosters.com/assets/players/fifa25/faces/209331.png" alt="Salah" />
                      </div>
                      <div className="fut-card-flag flag-eg"></div>
                    </div>
                  </div>
                  {/* Midfield 3 */}
                  <div className="fut-row mid">
                    <div className="fut-player-card">
                      <div className="fut-card-rating">91</div>
                      <div className="fut-card-pos">CM</div>
                      <div className="fut-card-face">
                        <img src="https://www.fifarosters.com/assets/players/fifa25/faces/192985.png" alt="KDB" />
                      </div>
                      <div className="fut-card-flag flag-be"></div>
                    </div>
                    <div className="fut-player-card">
                      <div className="fut-card-rating">89</div>
                      <div className="fut-card-pos">CDM</div>
                      <div className="fut-card-face">
                        <img src="https://www.fifarosters.com/assets/players/fifa25/faces/234378.png" alt="Rice" />
                      </div>
                      <div className="fut-card-flag flag-en"></div>
                    </div>
                    <div className="fut-player-card">
                      <div className="fut-card-rating">90</div>
                      <div className="fut-card-pos">CM</div>
                      <div className="fut-card-face">
                        <img src="https://www.fifarosters.com/assets/players/fifa25/faces/252371.png" alt="Bellingham" />
                      </div>
                      <div className="fut-card-flag flag-en"></div>
                    </div>
                  </div>
                  {/* Formation Label */}
                  <div className="fut-formation-label">4-3-3</div>
                </div>
              </div>
            </div>
            <h3 className="game-card-title">Squad Builder</h3>
            <p className="game-card-subtitle">FUT Challenge</p>
            <p className="game-card-description">
              Build your ultimate dream team! Arrange players in formations and compete for the best chemistry.
            </p>
            <div className="game-card-features">
              <span className="feature"><UsersIcon size={16} /> 1-4 Players</span>
              <span className="feature"><ClockIcon size={16} /> 15-20 min</span>
              <span className="feature"><PhoneIcon size={16} /> Draft Mode</span>
            </div>
            <button className="play-button">
              <span>Play Now</span>
              <span className="play-arrow"><ArrowRightIcon size={20} /></span>
            </button>
          </div>

          {/* Higher or Lower Game Card */}
          <div className="game-card featured higher-lower-style" onClick={onPlayHigherLower}>
            <div className="game-card-badge">New</div>
            <div className="hl-preview">
              <div className="hl-preview-cards">
                <div className="hl-preview-card left">
                  <img src="https://www.fifarosters.com/assets/players/fifa25/faces/20801.png" alt="Ronaldo" />
                  <div className="hl-preview-stat">639M</div>
                </div>
                <div className="hl-preview-vs">VS</div>
                <div className="hl-preview-card right">
                  <img src="https://www.fifarosters.com/assets/players/fifa25/faces/158023.png" alt="Messi" />
                  <div className="hl-preview-question">?</div>
                </div>
              </div>
            </div>
            <h3 className="game-card-title">Higher or Lower</h3>
            <p className="game-card-subtitle">Football Stats</p>
            <p className="game-card-description">
              Goals, trophies, followers, wages - guess which player has the higher stat!
            </p>
            <div className="game-card-features">
              <span className="feature"><UsersIcon size={16} /> 1 Player</span>
              <span className="feature"><ClockIcon size={16} /> Endless</span>
              <span className="feature"><TrophyIcon size={16} /> High Scores</span>
            </div>
            <button className="play-button">
              <span>Play Now</span>
              <span className="play-arrow"><ArrowRightIcon size={20} /></span>
            </button>
          </div>

          {/* Blind Ranking Game Card */}
          <div className="game-card featured blind-ranking-style" onClick={onPlayBlindRanking}>
            <div className="game-card-badge">New</div>
            <div className="br-preview">
              <div className="br-preview-ranks">
                <div className="br-preview-item">
                  <span className="br-rank">#1</span>
                  <img src="https://www.fifarosters.com/assets/players/fifa25/faces/231866.png" alt="Rodri" />
                </div>
                <div className="br-preview-item">
                  <span className="br-rank">#2</span>
                  <img src="https://www.fifarosters.com/assets/players/fifa25/faces/238794.png" alt="Vinicius" />
                </div>
                <div className="br-preview-item">
                  <span className="br-rank">#3</span>
                  <img src="https://www.fifarosters.com/assets/players/fifa25/faces/239085.png" alt="Haaland" />
                </div>
                <div className="br-preview-item faded">
                  <span className="br-rank">#4</span>
                  <span className="br-question">?</span>
                </div>
              </div>
              <div className="br-preview-label">Ballon d'Or 2024</div>
            </div>
            <h3 className="game-card-title">Blind Ranking</h3>
            <p className="game-card-subtitle">Test Your Knowledge</p>
            <p className="game-card-description">
              Rank 10 players by stats without seeing the numbers. How well do you know the game?
            </p>
            <div className="game-card-features">
              <span className="feature"><UsersIcon size={16} /> 1 Player</span>
              <span className="feature"><ClockIcon size={16} /> 5-10 min</span>
              <span className="feature"><TrophyIcon size={16} /> High Scores</span>
            </div>
            <button className="play-button">
              <span>Play Now</span>
              <span className="play-arrow"><ArrowRightIcon size={20} /></span>
            </button>
          </div>

          {/* Football Poker Game Card */}
          <div className="game-card featured football-poker-style" onClick={onPlayFootballPoker}>
            <div className="game-card-badge">New</div>
            <div className="poker-preview">
              {/* Felt table with ambient glow */}
              <div className="poker-table">
                <div className="poker-table-glow"></div>
                {/* Community cards */}
                <div className="poker-community">
                  <div className="poker-card-premium">
                    <div className="poker-card-inner">
                      <span className="poker-corner top" style={{ color: '#e90052' }}>9<span>♥</span></span>
                      <img src="https://www.fifarosters.com/assets/players/fifa25/faces/239085.png" alt="Haaland" />
                      <span className="poker-corner bottom" style={{ color: '#e90052' }}>9<span>♥</span></span>
                    </div>
                  </div>
                  <div className="poker-card-premium">
                    <div className="poker-card-inner">
                      <span className="poker-corner top" style={{ color: '#ee8707' }}>7<span>♦</span></span>
                      <img src="https://www.fifarosters.com/assets/players/fifa25/faces/238794.png" alt="Vini" />
                      <span className="poker-corner bottom" style={{ color: '#ee8707' }}>7<span>♦</span></span>
                    </div>
                  </div>
                  <div className="poker-card-premium">
                    <div className="poker-card-inner">
                      <span className="poker-corner top" style={{ color: '#008fd7' }}>A<span>♣</span></span>
                      <img src="https://www.fifarosters.com/assets/players/fifa25/faces/192985.png" alt="KDB" />
                      <span className="poker-corner bottom" style={{ color: '#008fd7' }}>A<span>♣</span></span>
                    </div>
                  </div>
                </div>
                {/* Pot chips */}
                <div className="poker-pot">
                  <span className="poker-chip"></span>
                  <span className="poker-chip gold"></span>
                  <span className="poker-chip"></span>
                </div>
                {/* Player hole cards */}
                <div className="poker-hole-cards">
                  <div className="poker-card-premium hole">
                    <div className="poker-card-inner">
                      <span className="poker-corner top" style={{ color: '#d20515' }}>9<span>♠</span></span>
                      <img src="https://www.fifarosters.com/assets/players/fifa25/faces/202126.png" alt="Kane" />
                      <span className="poker-corner bottom" style={{ color: '#d20515' }}>9<span>♠</span></span>
                    </div>
                  </div>
                  <div className="poker-card-premium hole">
                    <div className="poker-card-inner">
                      <span className="poker-corner top" style={{ color: '#e90052' }}>K<span>♥</span></span>
                      <img src="https://www.fifarosters.com/assets/players/fifa25/faces/209331.png" alt="Salah" />
                      <span className="poker-corner bottom" style={{ color: '#e90052' }}>K<span>♥</span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="poker-preview-hand">
                <span className="hand-label">YOUR HAND</span>
                <span className="hand-name">Pair of 9s</span>
              </div>
            </div>
            <h3 className="game-card-title">Football Hold'em</h3>
            <p className="game-card-subtitle">Suits = Leagues</p>
            <p className="game-card-description">
              Texas Hold'em where suits are leagues and numbers are shirt numbers. Real footballers on every card!
            </p>
            <div className="game-card-features">
              <span className="feature"><UsersIcon size={16} /> 1 Player</span>
              <span className="feature"><ClockIcon size={16} /> 5-10 min</span>
              <span className="feature"><TrophyIcon size={16} /> Texas Hold'em</span>
            </div>
            <button className="play-button">
              <span>Play Now</span>
              <span className="play-arrow"><ArrowRightIcon size={20} /></span>
            </button>
          </div>

          {/* Football Connections Game Card */}
          <div className="game-card featured connections-style" onClick={onPlayFootballConnections}>
            <div className="game-card-badge">New</div>
            <div className="connections-preview">
              <div className="connections-grid-preview">
                <div className="connections-tile-preview">
                  <img src="https://www.fifarosters.com/assets/players/fifa25/faces/158023.png" alt="Messi" />
                </div>
                <div className="connections-tile-preview">
                  <img src="https://www.fifarosters.com/assets/players/fifa25/faces/20801.png" alt="Ronaldo" />
                </div>
                <div className="connections-tile-preview selected">
                  <img src="https://www.fifarosters.com/assets/players/fifa25/faces/209331.png" alt="Salah" />
                </div>
                <div className="connections-tile-preview selected">
                  <img src="https://www.fifarosters.com/assets/players/fifa25/faces/239085.png" alt="Haaland" />
                </div>
                <div className="connections-tile-preview selected">
                  <img src="https://www.fifarosters.com/assets/players/fifa25/faces/202126.png" alt="Kane" />
                </div>
                <div className="connections-tile-preview">
                  <img src="https://www.fifarosters.com/assets/players/fifa25/faces/231747.png" alt="Mbappe" />
                </div>
                <div className="connections-tile-preview">
                  <img src="https://www.fifarosters.com/assets/players/fifa25/faces/192985.png" alt="KDB" />
                </div>
                <div className="connections-tile-preview selected">
                  <img src="https://www.fifarosters.com/assets/players/fifa25/faces/200104.png" alt="Son" />
                </div>
              </div>
              <div className="connections-solved-preview">
                <div className="connections-category yellow">Premier League Golden Boot</div>
              </div>
            </div>
            <h3 className="game-card-title">Football Connections</h3>
            <p className="game-card-subtitle">Find the Link</p>
            <p className="game-card-description">
              Group 16 footballers into 4 secret categories. Can you find what connects them?
            </p>
            <div className="game-card-features">
              <span className="feature"><UsersIcon size={16} /> 1 Player</span>
              <span className="feature"><ClockIcon size={16} /> 5-10 min</span>
              <span className="feature"><BrainIcon size={16} /> Puzzle</span>
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
