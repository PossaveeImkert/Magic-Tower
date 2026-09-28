/**
 * ARCANA: THE TOWER - Audio Configuration & Asset Registry
 * Defines BGM categories, SFX mappings, and fallback defaults
 */

export const BGM_CATEGORIES = {
  ACADEMY: 'academy',
  CITY: 'city',
  MYSTERY: 'mystery',
  TOWER: 'tower',
  BATTLE: 'battle',
  BOSS: 'boss',
  FINAL_BATTLE: 'finalBattle',
  ENDING: 'ending'
};

// Optional audio file paths registry. If an audio file path is configured here,
// AudioManager will attempt to play it; otherwise it gracefully uses procedural synthesis.
// Missing or failing files will never crash or interrupt gameplay.
export const AUDIO_PATHS = {
  bgm: {
    academy: null,
    city: null,
    mystery: null,
    tower: null,
    battle: null,
    boss: null,
    finalBattle: null,
    ending: null
  },
  sfx: {
    click: null,
    select: null,
    confirm: null,
    cancel: null,
    cardSelect: null,
    cardPlay: null,
    cardDraw: null,
    damage: null,
    critical: null,
    shield: null,
    heal: null,
    victory: null,
    defeat: null
  }
};

