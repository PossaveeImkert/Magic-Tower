/**
 * ARCANA: THE TOWER - Save & Load System
 * Uses Browser localStorage (3 Manual Slots + 1 Auto Save Slot)
 */

import { INITIAL_STARTER_DECK_IDS, INITIAL_UNLOCKED_CARD_IDS } from './cards.js';

const STORAGE_PREFIX = 'arcana_the_tower_';
export const SAVE_SLOTS = {
  SLOT_1: 'slot_1',
  SLOT_2: 'slot_2',
  SLOT_3: 'slot_3',
  AUTO: 'auto'
};

const REQUIRED_SAVE_FIELDS = [
  'scene'
];

/**
 * Format total play time in seconds into HH:MM:SS or MM:SS
 */
export function formatPlayTime(seconds) {
  if (typeof seconds !== 'number' || isNaN(seconds) || seconds < 0) {
    seconds = 0;
  }
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (hrs > 0) {
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Format timestamp into readable Thai/English localized date string
 */
export function formatSaveTimestamp(isoString) {
  if (!isoString) return '-';
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return '-';
    return d.toLocaleString('th-TH', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  } catch {
    return '-';
  }
}

/**
 * Validate that loaded save data contains all required keys and correct types
 */
export function validateSaveData(data) {
  if (!data || typeof data !== 'object') {
    return false;
  }
  for (const field of REQUIRED_SAVE_FIELDS) {
    if (data[field] === undefined || data[field] === null) {
      return false;
    }
  }
  if (!Array.isArray(data.deck)) {
    return false;
  }
  return true;
}

export class SaveManager {
  static getStorageKey(slotId) {
    return `${STORAGE_PREFIX}${slotId}`;
  }

  /**
   * Save game state into a given slot
   */
  static saveGame(slotId, gameState) {
    try {
      const payload = {
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        playerName: gameState.playerName || 'นักเรียนใหม่',
        chapter: gameState.chapter || 1,
        chapterName: gameState.chapterName || 'Chapter 1: เสียงไซเรนและหอคอยทมิฬ',
        scene: gameState.scene || 'ch1_sc1_morning',
        sceneName: gameState.sceneName || 'ห้องเรียนสถาบันเวทมนตร์',
        dialogueIndex: gameState.dialogueIndex || 0,
        playerHP: gameState.playerHP ?? 100,
        playerMaxHP: gameState.playerMaxHP ?? 100,
        playerMana: gameState.playerMana ?? 3,
        playerMaxMana: gameState.playerMaxMana ?? 3,
        manaStability: gameState.manaStability ?? 100,
        maxManaStability: gameState.maxManaStability ?? 100,
        deck: gameState.deck || [],
        hand: gameState.hand || [],
        discardPile: gameState.discardPile || [],
        playerDeck: gameState.playerDeck || [...INITIAL_STARTER_DECK_IDS],
        unlockedCards: gameState.unlockedCards || [...INITIAL_UNLOCKED_CARD_IDS],
        relationships: {
          rina: Math.max(0, Math.min(100, gameState.relationships?.rina ?? gameState.characterRelationship?.aoi ?? 0)),
          kai: Math.max(0, Math.min(100, gameState.relationships?.kai ?? gameState.characterRelationship?.daiki ?? 0)),
          mika: Math.max(0, Math.min(100, gameState.relationships?.mika ?? gameState.characterRelationship?.kuroki ?? 0)),
          hayase: Math.max(0, Math.min(100, gameState.relationships?.hayase ?? gameState.characterRelationship?.shindou ?? 0))
        },
        characterRelationship: {
          aoi: gameState.relationships?.rina ?? 0,
          daiki: gameState.relationships?.kai ?? 0,
          kuroki: gameState.relationships?.mika ?? 0,
          shindou: gameState.relationships?.hayase ?? 0
        },
        storyFlags: gameState.storyFlags || {},
        selectedPartner: gameState.selectedPartner || null,
        storyChoices: gameState.storyChoices || {},
        battleState: gameState.battleState || null,
        playTime: gameState.playTime || 0,
        customMetadata: gameState.customMetadata || {}
      };

      const jsonStr = JSON.stringify(payload);
      localStorage.setItem(this.getStorageKey(slotId), jsonStr);
      return { success: true };
    } catch (err) {
      console.error('Failed to save game:', err);
      return { success: false, error: err.message };
    }
  }

  /**
   * Load and validate game state from a slot
   */
  static loadGame(slotId) {
    try {
      const raw = localStorage.getItem(this.getStorageKey(slotId));
      if (!raw) {
        return { success: false, error: 'ไม่พบข้อมูลในสล็อตนี้' };
      }

      let parsed;
      try {
        parsed = JSON.parse(raw);
      } catch {
        return { success: false, error: 'ไม่สามารถโหลดข้อมูล Save นี้ได้ (ไฟล์เสียหาย)' };
      }

      if (!validateSaveData(parsed)) {
        return { success: false, error: 'ไม่สามารถโหลดข้อมูล Save นี้ได้ (ข้อมูลไม่สมบูรณ์)' };
      }

      // Populate safe backward-compatible defaults
      parsed.playerName = parsed.playerName || 'นักเรียนใหม่';
      parsed.chapter = typeof parsed.chapter === 'number' ? parsed.chapter : 1;
      parsed.chapterName = parsed.chapterName || `Chapter ${parsed.chapter}: วันธรรมดาที่ไม่ธรรมดา`;
      parsed.scene = parsed.scene || 'ch1_sc1_morning';
      parsed.dialogueIndex = typeof parsed.dialogueIndex === 'number' ? parsed.dialogueIndex : 0;
      parsed.playerHP = typeof parsed.playerHP === 'number' ? parsed.playerHP : 100;
      parsed.playerMaxHP = typeof parsed.playerMaxHP === 'number' ? parsed.playerMaxHP : 100;
      parsed.playerMana = typeof parsed.playerMana === 'number' ? parsed.playerMana : 3;
      parsed.playerMaxMana = typeof parsed.playerMaxMana === 'number' ? parsed.playerMaxMana : 3;
      parsed.manaStability = typeof parsed.manaStability === 'number' ? parsed.manaStability : 100;
      parsed.maxManaStability = typeof parsed.maxManaStability === 'number' ? parsed.maxManaStability : 100;
      parsed.deck = Array.isArray(parsed.deck) ? parsed.deck : [];
      parsed.hand = Array.isArray(parsed.hand) ? parsed.hand : [];
      parsed.discardPile = Array.isArray(parsed.discardPile) ? parsed.discardPile : [];
      parsed.relationships = {
        rina: Math.max(0, Math.min(100, parsed.relationships?.rina ?? parsed.characterRelationship?.aoi ?? 0)),
        kai: Math.max(0, Math.min(100, parsed.relationships?.kai ?? parsed.characterRelationship?.daiki ?? 0)),
        mika: Math.max(0, Math.min(100, parsed.relationships?.mika ?? parsed.characterRelationship?.kuroki ?? 0)),
        hayase: Math.max(0, Math.min(100, parsed.relationships?.hayase ?? parsed.characterRelationship?.shindou ?? 0))
      };
      parsed.characterRelationship = {
        aoi: parsed.relationships.rina,
        daiki: parsed.relationships.kai,
        kuroki: parsed.relationships.mika,
        shindou: parsed.relationships.hayase
      };
      parsed.unlockedCards = Array.isArray(parsed.unlockedCards) && parsed.unlockedCards.length > 0
        ? Array.from(new Set(parsed.unlockedCards))
        : [...INITIAL_UNLOCKED_CARD_IDS];
      parsed.playerDeck = Array.isArray(parsed.playerDeck) && parsed.playerDeck.length >= 10
        ? parsed.playerDeck
        : [...INITIAL_STARTER_DECK_IDS];
      parsed.storyFlags = parsed.storyFlags || {};
      parsed.storyChoices = parsed.storyChoices || {};
      parsed.selectedPartner = parsed.selectedPartner || null;
      parsed.playTime = typeof parsed.playTime === 'number' ? parsed.playTime : 0;

      return { success: true, data: parsed };
    } catch (err) {
      console.error('Error in loadGame:', err);
      return { success: false, error: 'ไม่สามารถโหลดข้อมูล Save นี้ได้' };
    }
  }

  /**
   * Delete a save slot
   */
  static deleteSave(slotId) {
    try {
      localStorage.removeItem(this.getStorageKey(slotId));
      return true;
    } catch (err) {
      console.error('Failed to delete save:', err);
      return false;
    }
  }

  /**
   * Check if a specific slot has save data
   */
  static hasSave(slotId) {
    return localStorage.getItem(this.getStorageKey(slotId)) !== null;
  }

  /**
   * Get metadata info for UI rendering of slot
   */
  static getSlotInfo(slotId) {
    try {
      const raw = localStorage.getItem(this.getStorageKey(slotId));
      if (!raw) return null;
      const data = JSON.parse(raw);
      return {
        slotId,
        chapter: data.chapter || 1,
        chapterName: data.chapterName || `Chapter ${data.chapter || 1}`,
        scene: data.scene,
        sceneName: data.sceneName || 'บันทึกเหตุการณ์',
        timestamp: data.timestamp,
        formattedTime: formatSaveTimestamp(data.timestamp),
        playTime: data.playTime || 0,
        formattedPlayTime: formatPlayTime(data.playTime || 0),
        playerHP: data.playerHP ?? 50,
        manaStability: data.manaStability ?? 85
      };
    } catch {
      return null;
    }
  }

  /**
   * Check if any save exists (for Continue button enablement)
   */
  static hasAnySave() {
    return (
      this.hasSave(SAVE_SLOTS.AUTO) ||
      this.hasSave(SAVE_SLOTS.SLOT_1) ||
      this.hasSave(SAVE_SLOTS.SLOT_2) ||
      this.hasSave(SAVE_SLOTS.SLOT_3)
    );
  }

  /**
   * Get the most recently modified save slot (for Continue button)
   */
  static getLatestSave() {
    const slots = [SAVE_SLOTS.AUTO, SAVE_SLOTS.SLOT_1, SAVE_SLOTS.SLOT_2, SAVE_SLOTS.SLOT_3];
    let latestSlot = null;
    let latestTime = -1;

    for (const slot of slots) {
      const info = this.getSlotInfo(slot);
      if (info && info.timestamp) {
        const time = new Date(info.timestamp).getTime();
        if (time > latestTime) {
          latestTime = time;
          latestSlot = slot;
        }
      }
    }
    return latestSlot;
  }

  /**
   * Save game settings (volume, text speed, auto delay, skip unread)
   */
  static saveSettings(settings) {
    try {
      localStorage.setItem(`${STORAGE_PREFIX}settings`, JSON.stringify(settings));
    } catch (e) {
      console.warn('Failed to save settings:', e);
    }
  }

  /**
   * Load game settings
   */
  static loadSettings() {
    const defaults = {
      textSpeed: 'normal', // 'fast', 'normal', 'slow'
      autoSpeed: 2500, // milliseconds
      skipReadText: true,
      masterVolume: 80, // 0 - 100
      musicVolume: 70,  // 0 - 100
      sfxVolume: 80,    // 0 - 100
      soundVolume: 0.8, // 0.0 - 1.0 (backward compat)
      soundEnabled: true,
      isMuted: false,
      scanlines: true
    };
    try {
      const raw = localStorage.getItem(`${STORAGE_PREFIX}settings`);
      if (raw) {
        return { ...defaults, ...JSON.parse(raw) };
      }
    } catch (e) {
      console.warn('Failed to load settings:', e);
    }
    return defaults;
  }
}
