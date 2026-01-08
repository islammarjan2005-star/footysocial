// Local Storage Utilities for Guess Who PWA

import type { PlayerSet, Player } from '../data/playerSets';

const STORAGE_KEYS = {
  CUSTOM_SETS: 'guessWho_customSets',
  PLAYER_STATS: 'guessWho_playerStats',
  SETTINGS: 'guessWho_settings',
  SELECTED_SET: 'guessWho_selectedSet',
};

// ============================================
// CUSTOM SETS MANAGEMENT
// ============================================

export function getCustomSets(): PlayerSet[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.CUSTOM_SETS);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function saveCustomSet(set: PlayerSet): void {
  const sets = getCustomSets();
  const existingIndex = sets.findIndex(s => s.id === set.id);

  if (existingIndex >= 0) {
    sets[existingIndex] = set;
  } else {
    sets.push({ ...set, isCustom: true });
  }

  localStorage.setItem(STORAGE_KEYS.CUSTOM_SETS, JSON.stringify(sets));
}

export function deleteCustomSet(setId: string): void {
  const sets = getCustomSets().filter(s => s.id !== setId);
  localStorage.setItem(STORAGE_KEYS.CUSTOM_SETS, JSON.stringify(sets));
}

export function createEmptyCustomSet(): PlayerSet {
  const id = `custom-${Date.now()}`;
  return {
    id,
    name: 'My Custom Set',
    description: 'Custom player set',
    icon: '⚽',
    color: '#4CAF50',
    players: [],
    isCustom: true,
  };
}

export function createCustomPlayer(partialPlayer: Partial<Player>): Player {
  return {
    id: Date.now(),
    name: partialPlayer.name || 'Unknown Player',
    position: partialPlayer.position || 'Forward',
    club: partialPlayer.club || 'Unknown Club',
    nationality: partialPlayer.nationality || 'Unknown',
    hairColor: partialPlayer.hairColor || 'Black',
    facialHair: partialPlayer.facialHair || false,
    imageUrl: partialPlayer.imageUrl || '',
  };
}

// ============================================
// PLAYER STATS & PROFILE
// ============================================

export interface GameStats {
  gamesPlayed: number;
  gamesWon: number;
  gamesLost: number;
  questionsAsked: number;
  avgQuestionsPerWin: number;
  currentWinStreak: number;
  bestWinStreak: number;
  favoriteSet: string | null;
  achievements: Achievement[];
  lastPlayed: string | null;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: string | null;
}

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_win', name: 'First Victory', description: 'Win your first game', icon: '🏆', unlockedAt: null },
  { id: 'streak_3', name: 'Hot Streak', description: 'Win 3 games in a row', icon: '🔥', unlockedAt: null },
  { id: 'streak_5', name: 'On Fire', description: 'Win 5 games in a row', icon: '💥', unlockedAt: null },
  { id: 'streak_10', name: 'Unstoppable', description: 'Win 10 games in a row', icon: '⚡', unlockedAt: null },
  { id: 'quick_win', name: 'Mind Reader', description: 'Win in 3 or fewer questions', icon: '🧠', unlockedAt: null },
  { id: 'games_10', name: 'Dedicated', description: 'Play 10 games', icon: '🎮', unlockedAt: null },
  { id: 'games_50', name: 'Enthusiast', description: 'Play 50 games', icon: '🌟', unlockedAt: null },
  { id: 'games_100', name: 'Legend', description: 'Play 100 games', icon: '👑', unlockedAt: null },
  { id: 'all_sets', name: 'Explorer', description: 'Play with all built-in sets', icon: '🗺️', unlockedAt: null },
  { id: 'custom_set', name: 'Creator', description: 'Create a custom set', icon: '🎨', unlockedAt: null },
  { id: 'perfect_game', name: 'Perfect', description: 'Win without any wrong guesses', icon: '💎', unlockedAt: null },
  { id: 'ai_master', name: 'AI Slayer', description: 'Beat AI on hard mode', icon: '🤖', unlockedAt: null },
];

export function getPlayerStats(): GameStats {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.PLAYER_STATS);
    if (stored) {
      const stats = JSON.parse(stored);
      // Ensure achievements have all the latest ones
      const mergedAchievements = ACHIEVEMENTS.map(a => {
        const existing = stats.achievements?.find((e: Achievement) => e.id === a.id);
        return existing || a;
      });
      return { ...stats, achievements: mergedAchievements };
    }
  } catch {
    // Fall through to default
  }

  return {
    gamesPlayed: 0,
    gamesWon: 0,
    gamesLost: 0,
    questionsAsked: 0,
    avgQuestionsPerWin: 0,
    currentWinStreak: 0,
    bestWinStreak: 0,
    favoriteSet: null,
    achievements: ACHIEVEMENTS,
    lastPlayed: null,
  };
}

export function savePlayerStats(stats: GameStats): void {
  localStorage.setItem(STORAGE_KEYS.PLAYER_STATS, JSON.stringify(stats));
}

export function recordGameResult(
  won: boolean,
  questionsAsked: number,
  setId: string,
  wasAIHardMode?: boolean,
  hadWrongGuesses?: boolean
): GameStats {
  const stats = getPlayerStats();

  stats.gamesPlayed++;
  stats.questionsAsked += questionsAsked;
  stats.lastPlayed = new Date().toISOString();

  if (won) {
    stats.gamesWon++;
    stats.currentWinStreak++;
    stats.bestWinStreak = Math.max(stats.bestWinStreak, stats.currentWinStreak);
    stats.avgQuestionsPerWin = Math.round(
      (stats.avgQuestionsPerWin * (stats.gamesWon - 1) + questionsAsked) / stats.gamesWon
    );

    // Check win-related achievements
    unlockAchievement(stats, 'first_win');
    if (stats.currentWinStreak >= 3) unlockAchievement(stats, 'streak_3');
    if (stats.currentWinStreak >= 5) unlockAchievement(stats, 'streak_5');
    if (stats.currentWinStreak >= 10) unlockAchievement(stats, 'streak_10');
    if (questionsAsked <= 3) unlockAchievement(stats, 'quick_win');
    if (!hadWrongGuesses) unlockAchievement(stats, 'perfect_game');
    if (wasAIHardMode) unlockAchievement(stats, 'ai_master');
  } else {
    stats.gamesLost++;
    stats.currentWinStreak = 0;
  }

  // Check games played achievements
  if (stats.gamesPlayed >= 10) unlockAchievement(stats, 'games_10');
  if (stats.gamesPlayed >= 50) unlockAchievement(stats, 'games_50');
  if (stats.gamesPlayed >= 100) unlockAchievement(stats, 'games_100');

  // Track favorite set
  const setTracker = JSON.parse(localStorage.getItem('guessWho_setUsage') || '{}');
  setTracker[setId] = (setTracker[setId] || 0) + 1;
  localStorage.setItem('guessWho_setUsage', JSON.stringify(setTracker));

  const mostUsedSet = Object.entries(setTracker).sort((a, b) => (b[1] as number) - (a[1] as number))[0];
  if (mostUsedSet) {
    stats.favoriteSet = mostUsedSet[0];
  }

  savePlayerStats(stats);
  return stats;
}

function unlockAchievement(stats: GameStats, achievementId: string): boolean {
  const achievement = stats.achievements.find(a => a.id === achievementId);
  if (achievement && !achievement.unlockedAt) {
    achievement.unlockedAt = new Date().toISOString();
    return true;
  }
  return false;
}

export function getUnlockedAchievements(stats: GameStats): Achievement[] {
  return stats.achievements.filter(a => a.unlockedAt !== null);
}

export function getLockedAchievements(stats: GameStats): Achievement[] {
  return stats.achievements.filter(a => a.unlockedAt === null);
}

// ============================================
// SETTINGS
// ============================================

export interface Settings {
  soundEnabled: boolean;
  hapticEnabled: boolean;
  theme: 'dark' | 'light' | 'auto';
  showHints: boolean;
  aiDifficulty: 'easy' | 'medium' | 'hard';
}

export function getSettings(): Settings {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    return stored ? JSON.parse(stored) : getDefaultSettings();
  } catch {
    return getDefaultSettings();
  }
}

export function getDefaultSettings(): Settings {
  return {
    soundEnabled: true,
    hapticEnabled: true,
    theme: 'dark',
    showHints: true,
    aiDifficulty: 'medium',
  };
}

export function saveSettings(settings: Settings): void {
  localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
}

// ============================================
// SELECTED SET
// ============================================

export function getSelectedSetId(): string | null {
  return localStorage.getItem(STORAGE_KEYS.SELECTED_SET);
}

export function setSelectedSetId(setId: string): void {
  localStorage.setItem(STORAGE_KEYS.SELECTED_SET, setId);
}

// ============================================
// CLEAR ALL DATA
// ============================================

export function clearAllData(): void {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
  localStorage.removeItem('guessWho_setUsage');
}
