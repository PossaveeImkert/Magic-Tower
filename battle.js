/**
 * ARCANA: THE TOWER - Complete Turn-Based Card Battle Engine (ROUND 2)
 * Features:
 * - Top: Enemy (Name, HP, Shield, Statuses, Intent)
 * - Center: Battle Arena (Clash animations, Floating numbers, Combat Log 5-8 entries)
 * - Bottom: Player (Name, HP, Mana, Mana Stability, Shield, Statuses)
 * - Bottom-most: Card Hand & Discard/Draw Piles
 * - Side: End Turn Button with Turn Banner (PLAYER TURN / ENEMY TURN)
 * - Status Effects: Burn, Guard, Focus
 * - 3 Enemy Prototypes: Training Dummy, Mana Beast, Tower Guardian
 * - Victory / Defeat Screens with Stats and Retry/Load/Menu options
 * - Integrated Battle Tutorial (Skippable)
 */

import { createStarterDeck, CARD_TYPES, CARD_TARGETS, getCardArtSvg } from './cards.js';
import { CHARACTERS } from './characters.js';
import { assetLoader } from './assetLoader.js';

export const ENEMIES = {
  training_dummy: {
    id: 'training_dummy',
    name: 'หุ่นฝึกซ้อมเวทมนตร์ (Training Dummy)',
    maxHP: 45,
    aiType: 'dummy',
    actions: [
      { type: 'attack', value: 6, icon: '⚔️', description: 'โจมตีเบา 6 หน่วย' },
      { type: 'attack', value: 8, icon: '⚔️', description: 'ฟาดไม้ลงอาคม 8 หน่วย' },
      { type: 'defense', shield: 8, icon: '🛡️', description: 'ตั้งการ์ดไม้ ป้องกัน 8 หน่วย' }
    ]
  },
  mana_beast: {
    id: 'mana_beast',
    name: 'อสูรมานาป่าชานเมือง (Mana Beast)',
    maxHP: 70,
    aiType: 'balanced',
    actions: [
      { type: 'attack', value: 10, icon: '🐾', description: 'กรงเล็บมานา โจมตี 10 หน่วย' },
      { type: 'defense', shield: 12, status: { type: 'guard', stacks: 1 }, icon: '🛡️', description: 'เกล็ดผลึก ป้องกัน 12 + Guard' },
      { type: 'special', value: 14, status: { type: 'burn', stacks: 1 }, icon: '⚡', description: 'คลื่นสายฟ้า โจมตี 14 + Burn (1)' }
    ]
  },
  tower_guardian: {
    id: 'tower_guardian',
    name: 'ผู้พิทักษ์ประตูหอคอย (Tower Guardian)',
    maxHP: 95,
    aiType: 'boss',
    actions: [
      { type: 'attack', value: 12, icon: '⚔️', description: 'ง้าวเวททมิฬ โจมตี 12 หน่วย' },
      { type: 'defense', shield: 16, status: { type: 'guard', stacks: 1 }, icon: '🛡️', description: 'บาเรียหอคอย ป้องกัน 16 + Guard' },
      { type: 'special', value: 20, status: { type: 'burn', stacks: 2 }, icon: '💥', description: 'มหาเวทคาลามิตี้ โจมตี 20 + Burn (2)' }
    ]
  },
  student_rival: {
    id: 'student_rival',
    name: 'ชิกิ คุโรกิ (Shiki Kuroki)',
    maxHP: 65,
    aiType: 'balanced',
    actions: [
      { type: 'attack', value: 8, icon: '🗡️', description: 'ฟันดาบมานาสายลม 8 หน่วย' },
      { type: 'defense', shield: 10, status: { type: 'guard', stacks: 1 }, icon: '🛡️', description: 'บาเรียอีเธอร์โบราณ ป้องกัน 10 + Guard' },
      { type: 'special', value: 14, status: { type: 'focus', stacks: 1 }, icon: '🌀', description: 'ระเบิดกระแสเวท 14 หน่วย + Focus' }
    ]
  },
  elite_construct: {
    id: 'elite_construct',
    name: 'ผลึกพิทักษ์ชั้นสูง (Elite Tower Construct)',
    maxHP: 105,
    aiType: 'boss',
    actions: [
      { type: 'attack', value: 14, icon: '⚡', description: 'ลำแสงพลาสมา โจมตี 14 หน่วย' },
      { type: 'defense', shield: 18, status: { type: 'guard', stacks: 1 }, icon: '🛡️', description: 'เกราะสนามแม่เหล็ก ป้องกัน 18 + Guard' },
      { type: 'special', value: 18, status: { type: 'burn', stacks: 2 }, icon: '🔥', description: 'ระเบิดคลื่นความร้อน โจมตี 18 + Burn (2)' }
    ]
  },
  antagonist_kagami: {
    id: 'antagonist_kagami',
    name: 'ดร. คากามิ (Dr. Kagami)',
    maxHP: 110,
    aiType: 'boss',
    actions: [
      { type: 'attack', value: 14, icon: '🔫', description: 'ปืนรูนเวทมนตร์ ยิงทะลวง 14 หน่วย' },
      { type: 'defense', shield: 16, status: { type: 'guard', stacks: 1 }, icon: '🛡️', description: 'สนามพลังบิดเบือนมิติ ป้องกัน 16 + Guard' },
      { type: 'special', value: 20, status: { type: 'burn', stacks: 2 }, icon: '💥', description: 'โอเวอร์คล็อกข้ามขีดจำกัด โจมตี 20 + Burn (2)' }
    ]
  },
  tower_core_final: {
    id: 'tower_core_final',
    name: 'แกนกลางหอคอยคลั่ง (Unstable Tower Core)',
    maxHP: 130,
    aiType: 'boss',
    actions: [
      { type: 'attack', value: 16, icon: '☄️', description: 'ลำแสงคาลามิตี้บิดเบือนมิติ 16 หน่วย' },
      { type: 'special', value: 22, status: { type: 'burn', stacks: 2 }, icon: '🌌', description: 'สิงกูลาริตี้กลืนกินมานา โจมตี 22 + Burn (2)' },
      { type: 'defense', shield: 24, status: { type: 'guard', stacks: 1 }, icon: '🛡️', description: 'ผลึกฟื้นฟูโครงสร้าง ป้องกัน 24 + Guard' }
    ]
  },
  // Compatibility alias for round 1 scene triggers
  tower_construct: {
    id: 'tower_guardian',
    name: 'ผู้พิทักษ์ประตูหอคอย (Tower Guardian)',
    maxHP: 95,
    aiType: 'boss',
    actions: [
      { type: 'attack', value: 12, icon: '⚔️', description: 'ง้าวเวททมิฬ โจมตี 12 หน่วย' },
      { type: 'defense', shield: 16, status: { type: 'guard', stacks: 1 }, icon: '🛡️', description: 'บาเรียหอคอย ป้องกัน 16 + Guard' },
      { type: 'special', value: 20, status: { type: 'burn', stacks: 2 }, icon: '💥', description: 'มหาเวทคาลามิตี้ โจมตี 20 + Burn (2)' }
    ]
  }
};

export class BattleEngine {
  constructor(game) {
    this.game = game;

    // Player Status
    this.playerMaxHP = 100;
    this.playerHP = 100;
    this.playerMana = 3;
    this.playerMaxMana = 3;
    this.manaStability = 100;
    this.maxManaStability = 100;
    this.playerShield = 0;

    // Status Effects: { burn: number, guard: number, focus: number }
    this.playerStatuses = { burn: 0, guard: 0, focus: 0 };
    this.enemyStatuses = { burn: 0, guard: 0, focus: 0 };

    // Modifiers for active turn
    this.playerModifiers = {
      nextCardCostDiscount: 0,
      damageMultiplier: 1.0
    };

    // Battle Tracking Stats
    this.totalDamageDealt = 0;
    this.totalCardsPlayed = 0;
    this.turn = 1;
    this.phase = 'idle'; // 'player_turn', 'enemy_turn', 'resolving', 'victory', 'defeat'
    this.isTransitioning = false;
    this.isPlayingCard = false;

    // Enemy Status
    this.enemyId = 'training_dummy';
    this.enemyData = ENEMIES.training_dummy;
    this.enemyName = this.enemyData.name;
    this.enemyMaxHP = this.enemyData.maxHP;
    this.enemyHP = this.enemyData.maxHP;
    this.enemyShield = 0;
    this.enemyNextIntent = null;
    this.postVictoryScene = null;

    // Card Piles
    this.deck = [];
    this.hand = [];
    this.discardPile = [];
    this.handLimit = 7;

    // Logs (stores recent 5-8 entries)
    this.logs = [];

    // DOM Elements Cache
    this.battleScreen = document.getElementById('screen-battle');
    this.turnBannerEl = document.getElementById('battle-turn-banner');

    this.enemyNameEl = document.getElementById('battle-enemy-name');
    this.enemyHpEl = document.getElementById('battle-enemy-hp');
    this.enemyHpBar = document.getElementById('battle-enemy-hp-bar');
    this.enemyHpGhost = document.getElementById('battle-enemy-hp-ghost');
    this.enemyShieldEl = document.getElementById('battle-enemy-shield');
    this.enemyStatusesEl = document.getElementById('battle-enemy-statuses');
    this.enemyIntentEl = document.getElementById('battle-enemy-intent');
    this.enemyAvatarEl = document.getElementById('battle-enemy-avatar-box');

    this.playerHpEl = document.getElementById('battle-player-hp');
    this.playerNameEl = document.getElementById('battle-player-name');
    this.playerHpBar = document.getElementById('battle-player-hp-bar');
    this.playerHpGhost = document.getElementById('battle-player-hp-ghost');
    this.playerAvatarEl = document.getElementById('battle-player-avatar-box');
    this.playerManaEl = document.getElementById('battle-player-mana');
    this.playerManaOrbs = document.getElementById('battle-player-mana-orbs');
    this.playerStabilityVal = document.getElementById('battle-player-stability-val');
    this.playerStabilityBar = document.getElementById('battle-player-stability-bar');
    this.playerShieldEl = document.getElementById('battle-player-shield');
    this.playerStatusesEl = document.getElementById('battle-player-statuses');
    this.playerStabilityBadge = document.getElementById('battle-player-stability-badge');

    this.fxLayer = document.getElementById('battle-fx-layer');
    this.handContainer = document.getElementById('battle-hand-container');
    this.deckCountEl = document.getElementById('battle-deck-count');
    this.discardCountEl = document.getElementById('battle-discard-count');
    this.battleLogEl = document.getElementById('battle-log-list');
    this.endTurnBtn = document.getElementById('btn-end-turn');

    // Card Detail & Selection State (Part 6-12)
    this.selectedCardIndex = null;
    this.isCardDetailOpen = false;
    this.cardDetailOverlay = document.getElementById('battle-card-detail-overlay');
    this.cardDetailDialog = document.getElementById('battle-card-detail-dialog');
    this.cardDetailBackdrop = document.getElementById('card-detail-backdrop');

    this.initEvents();
  }

  initEvents() {
    if (this.endTurnBtn) {
      this.endTurnBtn.addEventListener('click', () => {
        // If card detail view is open, close it first to prevent accidental play
        if (this.isCardDetailOpen) {
          this.closeCardDetail();
          return;
        }
        if (this.phase === 'player_turn' && !this.isTransitioning) {
          this.endPlayerTurn();
        }
      });
    }

    // Backdrop click outside card detail dialog closes detail
    if (this.cardDetailBackdrop) {
      this.cardDetailBackdrop.addEventListener('click', (e) => {
        e.stopPropagation();
        this.game.audio.playCancel?.() || this.game.audio.playSFX('cancel');
        this.closeCardDetail();
      });
    }

    // Keyboard navigation: Escape closes card detail, Enter triggers USE CARD if playable
    window.addEventListener('keydown', (e) => {
      if (this.game.currentScreen !== 'battle') return;
      if (this.isCardDetailOpen) {
        if (e.key === 'Escape') {
          e.preventDefault();
          this.game.audio.playCancel?.() || this.game.audio.playSFX('cancel');
          this.closeCardDetail();
        } else if (e.key === 'Enter') {
          if (this.selectedCardIndex !== null && typeof this.selectedCardIndex === 'number') {
            const card = this.hand[this.selectedCardIndex];
            if (card) {
              const effectiveCost = Math.max(0, card.cost - this.playerModifiers.nextCardCostDiscount);
              const canAfford = this.playerMana >= effectiveCost;
              const meetsCondition = typeof card.canPlay !== 'function' || card.canPlay(this);
              if (canAfford && meetsCondition && this.phase === 'player_turn' && !this.isTransitioning && !this.isPlayingCard) {
                e.preventDefault();
                const idx = this.selectedCardIndex;
                this.closeCardDetail();
                this.playCard(idx);
              }
            }
          }
        }
      }
    });

    // Help / Tutorial Button in Battle UI
    const helpBtn = document.getElementById('btn-battle-help');
    if (helpBtn) {
      helpBtn.addEventListener('click', () => {
        this.openTutorial();
      });
    }

    // Tutorial close / skip buttons
    document.getElementById('btn-close-tutorial')?.addEventListener('click', () => {
      this.closeTutorial();
    });
    document.getElementById('btn-skip-tutorial')?.addEventListener('click', () => {
      this.closeTutorial();
    });
  }

  /**
   * Start a new Battle with enemyId or encounterData
   */
  startBattle(encounterData = {}) {
    this.closeCardDetail();
    this.phase = 'starting';
    this.isTransitioning = false;
    this.turn = 1;
    this.totalDamageDealt = 0;
    this.totalCardsPlayed = 0;

    // Resolve Enemy
    const targetEnemyId = typeof encounterData === 'string'
      ? encounterData
      : (encounterData.enemyId || 'training_dummy');

    this.enemyData = ENEMIES[targetEnemyId] || ENEMIES.training_dummy;
    this.enemyId = this.enemyData.id;
    this.enemyName = encounterData.enemyName || this.enemyData.name;
    this.enemyMaxHP = encounterData.enemyHp || this.enemyData.maxHP;
    this.enemyHP = this.enemyMaxHP;
    this.enemyShield = encounterData.enemyShield || 0;
    this.postVictoryScene = encounterData.postVictoryScene || 'scene_post_battle_victory';

    // Player Stats (Standard: HP 100/100, Mana 3/3, Stability 100/100)
    this.playerMaxHP = 100;
    this.playerHP = Math.min(this.playerMaxHP, this.game.state.playerHP || 100);
    this.playerMaxMana = 3;
    this.playerMana = 3;
    this.manaStability = 100;
    this.maxManaStability = 100;
    this.playerShield = this.game.state.playerInitialBonus?.shield || 0;

    // Reset Modifiers & Statuses
    this.playerStatuses = { burn: 0, guard: 0, focus: 0 };
    this.enemyStatuses = { burn: 0, guard: 0, focus: 0 };
    this.playerModifiers = {
      nextCardCostDiscount: 0,
      damageMultiplier: 1.0
    };

    // Clear logs
    this.logs = [];
    this.log(`⚔️ เริ่มต้นการต่อสู้กับ [${this.enemyName}]!`);

    // Prepare Deck & Hand from Player Customized Deck
    const playerDeckIds = (this.game.state?.playerDeck && this.game.state.playerDeck.length >= 10)
      ? this.game.state.playerDeck
      : null;
    this.deck = createStarterDeck(playerDeckIds);
    this.shuffle(this.deck);
    this.hand = [];
    this.discardPile = [];

    // Boss presentation styles on battle screen
    if (this.battleScreen) {
      this.battleScreen.classList.remove('boss-battle', 'final-boss-battle', 'core-overdrive');
      if (this.enemyData.aiType === 'boss') {
        this.battleScreen.classList.add('boss-battle');
      }
      if (this.enemyId === 'tower_core_final') {
        this.battleScreen.classList.add('final-boss-battle');
      }
    }

    // Play appropriate Battle Music based on encounter type
    if (this.enemyId === 'tower_core_final') {
      this.game.audio.playMusic('finalBattle');
    } else if (this.enemyData.aiType === 'boss' || this.enemyId === 'antagonist_kagami') {
      this.game.audio.playMusic('boss');
    } else {
      this.game.audio.playMusic('battle');
    }

    // Render Avatars
    this.renderEnemyAvatar();
    this.renderPlayerAvatar();

    // Decide initial enemy intent
    this.decideEnemyIntent();

    // Initial Draw 5 Cards
    this.drawCards(5);

    // Prompt tutorial on first ever battle if not shown before
    if (!localStorage.getItem('arcana_tutorial_viewed')) {
      this.openTutorial();
      localStorage.setItem('arcana_tutorial_viewed', 'true');
    }

    // Begin Player Turn 1
    this.startPlayerTurn();
  }

  renderEnemyAvatar() {
    if (!this.enemyAvatarEl) return;
    this.enemyAvatarEl.classList.remove('core-critical-pulse', 'boss-avatar-frame');
    this.enemyAvatarEl.innerHTML = '';

    const portrait = assetLoader.getEnemyPortrait(this.enemyId);
    if (this.enemyData.aiType === 'boss') {
      this.enemyAvatarEl.classList.add('boss-avatar-frame');
    }

    const fallbackSvg = portrait?.fallbackSvg || CHARACTERS.training_dummy?.avatarSvg || '';

    if (portrait && portrait.imageUrl) {
      // Safe non-blocking sequence: show placeholder immediately so there is never a broken icon
      this.enemyAvatarEl.innerHTML = fallbackSvg;

      const img = new Image();
      img.className = 'entity-avatar-img';
      img.alt = this.enemyName || 'Enemy';
      img.referrerPolicy = 'no-referrer';

      img.onload = () => {
        if (this.enemyAvatarEl) {
          this.enemyAvatarEl.innerHTML = '';
          this.enemyAvatarEl.appendChild(img);
        }
      };

      img.onerror = () => {
        assetLoader.reportFailedUrl(portrait.imageUrl);
        if (this.enemyAvatarEl) {
          this.enemyAvatarEl.innerHTML = fallbackSvg;
        }
      };

      img.src = portrait.imageUrl;
    } else {
      this.enemyAvatarEl.innerHTML = fallbackSvg;
    }
  }

  renderPlayerAvatar() {
    if (!this.playerAvatarEl) return;
    this.playerAvatarEl.innerHTML = '';

    const portrait = assetLoader.getCharacterPortrait('player', 'determined');
    const fallbackSvg = CHARACTERS.player?.avatarSvg || portrait?.fallbackSvg || '';

    if (portrait && portrait.imageUrl) {
      // Safe non-blocking sequence: show placeholder immediately
      this.playerAvatarEl.innerHTML = fallbackSvg;

      const img = new Image();
      img.className = 'entity-avatar-img';
      img.alt = 'Player';
      img.referrerPolicy = 'no-referrer';

      img.onload = () => {
        if (this.playerAvatarEl) {
          this.playerAvatarEl.innerHTML = '';
          this.playerAvatarEl.appendChild(img);
        }
      };

      img.onerror = () => {
        assetLoader.reportFailedUrl(portrait.imageUrl);
        if (this.playerAvatarEl) {
          this.playerAvatarEl.innerHTML = fallbackSvg;
        }
      };

      img.src = portrait.imageUrl;
    } else {
      this.playerAvatarEl.innerHTML = fallbackSvg;
    }
  }

  cleanup() {
    this.closeCardDetail();
    const overlay = document.getElementById('battle-result-overlay');
    if (overlay) {
      overlay.classList.add('hidden');
      overlay.innerHTML = '';
    }
    if (this.battleScreen) {
      this.battleScreen.classList.remove('boss-battle', 'final-boss-battle', 'core-overdrive');
    }
    if (this.fxLayer) {
      this.fxLayer.innerHTML = '';
    }
  }

  /**
   * Start Player Turn
   */
  startPlayerTurn() {
    this.closeCardDetail();
    this.phase = 'player_turn';
    this.isTransitioning = false;

    // Update Turn Banner
    this.updateTurnBanner('PLAYER TURN');

    // Rule: Clear player shield at start of player turn
    this.playerShield = 0;

    // Reset temporary modifiers
    this.playerModifiers.nextCardCostDiscount = 0;
    this.playerModifiers.damageMultiplier = 1.0;

    // Mana replenishment rule: "เมื่อเริ่ม Player Turn: Mana +1 จนถึง Max Mana"
    this.playerMana = Math.min(this.playerMaxMana, this.playerMana + 1);

    // Draw 1 card each turn (after initial turn 1 draw 5)
    if (this.turn > 1) {
      this.drawCards(1);
    }

    this.log(`--- [เทิร์นที่ ${this.turn}] เทิร์นของผู้เล่น (มานา +1, จั่วการ์ด 1 ใบ) ---`);

    this.updateUI();

    if (this.endTurnBtn) {
      this.endTurnBtn.disabled = false;
      this.endTurnBtn.classList.remove('opacity-50');
    }
  }

  /**
   * Draw N cards from deck, reshuffling discard pile if necessary
   */
  drawCards(count) {
    for (let i = 0; i < count; i++) {
      if (this.hand.length >= this.handLimit) {
        this.log(`⚠️ การ์ดบนมือเต็มขีดจำกัด (${this.handLimit} ใบ)`);
        break;
      }

      if (this.deck.length === 0) {
        if (this.discardPile.length === 0) {
          break; // No cards left anywhere
        }
        // Reshuffle discard pile into deck
        this.deck = [...this.discardPile];
        this.discardPile = [];
        this.shuffle(this.deck);
        this.log(`🔄 สับกองทิ้ง (${this.deck.length} ใบ) กลับเข้าสู่สำรับจั่วใหม่`);
        this.game.audio.playShuffle();
      }

      const card = this.deck.pop();
      if (card) {
        this.hand.push(card);
      }
    }
    this.updateUI();
  }

  /**
   * Play Card from Hand by index
   */
  playCard(handIndex) {
    if (this.phase !== 'player_turn' || this.isTransitioning || this.isPlayingCard) return;

    this.isPlayingCard = true;
    try {
      const card = this.hand[handIndex];
      if (!card) return;

      // Calculate effective mana cost considering Quick Cast discount
      const effectiveCost = Math.max(0, card.cost - this.playerModifiers.nextCardCostDiscount);

      // Check Ultimate or Card Condition
      if (typeof card.canPlay === 'function' && !card.canPlay(this)) {
        this.game.showToast(`ไม่ตรงตามเงื่อนไขใช้งาน: ${card.conditionDescription || 'ยังไม่สามารถใช้ได้'}`);
        this.flashWarning();
        return;
      }

      // Check Mana
      if (this.playerMana < effectiveCost) {
        this.game.showToast(`มานาไม่เพียงพอ! (ต้องการ ${effectiveCost}, ปัจจุบันมี ${this.playerMana})`);
        this.flashManaWarning();
        return;
      }

      // Spend Mana
      this.playerMana -= effectiveCost;

      // Reset discount if it was applied
      if (this.playerModifiers.nextCardCostDiscount > 0) {
        this.playerModifiers.nextCardCostDiscount = 0;
      }

      // Remove from Hand and add to Discard Pile
      this.hand.splice(handIndex, 1);
      this.discardPile.push(card);
      this.totalCardsPlayed++;

      // Audio cue
      this.game.audio.playCardPlay(card.type);

      // Card Animation towards target
      this.animateCardPlay(card);

      // Trigger Domain Magic VFX
      if (card.id === 'fire_bolt' || card.id === 'flame_rush') {
        this.triggerMagicEffect('fire', 'enemy');
      } else if (card.id === 'wind_cutter') {
        this.triggerMagicEffect('wind', 'enemy');
      } else if (card.type === CARD_TYPES.DEFENSE) {
        this.triggerMagicEffect('shield', 'player');
      } else if (card.id === 'arcane_burst' || card.id === 'tower_resonance') {
        this.triggerMagicEffect('arcane', 'enemy');
      } else if (card.type === CARD_TYPES.ULTIMATE) {
        this.triggerMagicEffect('ultimate', 'enemy');
      } else if (card.type === CARD_TYPES.SUPPORT || card.type === CARD_TYPES.TECHNIQUE) {
        this.triggerMagicEffect('focus', 'player');
      } else {
        this.triggerMagicEffect('slash', 'enemy');
      }

      // Execute Card Effect
      if (typeof card.effect === 'function') {
        card.effect(this, card);
      }

      this.updateUI();

      // Check Victory
      if (this.enemyHP <= 0) {
        this.handleVictory();
        return;
      }
    } finally {
      setTimeout(() => {
        this.isPlayingCard = false;
      }, 100);
    }
  }

  /**
   * Calculate player damage accounting for Focus status, modifiers, etc.
   */
  calculatePlayerDamage(baseDamage, type = 'attack') {
    let multiplier = this.playerModifiers.damageMultiplier || 1.0;

    // Focus Status: Increases next attack/spell by 50%
    if (this.playerStatuses.focus > 0) {
      multiplier += 0.5;
      this.playerStatuses.focus--;
      this.log(`🎯 [สถานะ Focus] เพิ่มความเสียหาย +50%!`);
    }

    // Resonant state bonus if stability is high
    if (this.manaStability >= 85) {
      multiplier += 0.1;
    }

    return Math.round(baseDamage * multiplier);
  }

  /**
   * Deal Damage to Enemy (accounting for Enemy Shield and Guard status)
   */
  damageEnemy(amount) {
    let actualDamage = amount;

    // Enemy Guard Status: Reduces damage taken by 30%
    if (this.enemyStatuses.guard > 0) {
      actualDamage = Math.max(1, Math.round(actualDamage * 0.7));
      this.enemyStatuses.guard--;
      this.log(`🛡️ [ศัตรูมี Guard] ลดความเสียหายที่ได้รับลง 30%!`);
    }

    // Absorb into Shield first
    if (this.enemyShield > 0) {
      if (this.enemyShield >= actualDamage) {
        this.enemyShield -= actualDamage;
        this.triggerDamageAnimation('enemy', actualDamage, 'shield_block');
        this.game.audio.playShield();
        actualDamage = 0;
      } else {
        const shieldAbsorbed = this.enemyShield;
        actualDamage -= shieldAbsorbed;
        this.enemyShield = 0;
        this.triggerDamageAnimation('enemy', shieldAbsorbed, 'shield_block');
        this.triggerDamageAnimation('enemy', actualDamage, actualDamage >= 25 ? 'critical' : 'damage');
        this.game.audio.playShield();
        this.game.audio.playDamage(actualDamage >= 25);
      }
    } else {
      this.triggerDamageAnimation('enemy', actualDamage, actualDamage >= 25 ? 'critical' : 'damage');
      this.game.audio.playDamage(actualDamage >= 25);
    }

    this.enemyHP = Math.max(0, this.enemyHP - actualDamage);
    this.totalDamageDealt += amount;
    this.updateUI();
  }

  /**
   * Deal Damage to Player (accounting for Player Shield and Guard status)
   */
  damagePlayer(amount) {
    let actualDamage = amount;

    // Player Guard Status: Reduces damage taken by 30%
    if (this.playerStatuses.guard > 0) {
      actualDamage = Math.max(1, Math.round(actualDamage * 0.7));
      this.playerStatuses.guard--;
      this.log(`🛡️ [ผู้เล่นมี Guard] ลดความเสียหายที่ได้รับลง 30%!`);
    }

    // Absorb into Shield first
    if (this.playerShield > 0) {
      if (this.playerShield >= actualDamage) {
        this.playerShield -= actualDamage;
        this.triggerDamageAnimation('player', actualDamage, 'shield_block');
        this.game.audio.playShield();
        actualDamage = 0;
      } else {
        const shieldAbsorbed = this.playerShield;
        actualDamage -= shieldAbsorbed;
        this.playerShield = 0;
        this.triggerDamageAnimation('player', shieldAbsorbed, 'shield_block');
        this.triggerDamageAnimation('player', actualDamage, actualDamage >= 20 ? 'critical' : 'damage');
        this.game.audio.playShield();
        this.game.audio.playDamage(actualDamage >= 20);
      }
    } else {
      this.triggerDamageAnimation('player', actualDamage, actualDamage >= 20 ? 'critical' : 'damage');
      this.game.audio.playDamage(actualDamage >= 20);
    }

    this.playerHP = Math.max(0, this.playerHP - actualDamage);
    this.game.state.playerHP = this.playerHP;
    this.updateUI();
  }

  addPlayerShield(amount) {
    this.playerShield += amount;
    this.game.audio.playShield();
    this.triggerDamageAnimation('player', amount, 'gain_shield');
    this.updateUI();
  }

  addEnemyShield(amount) {
    this.enemyShield += amount;
    this.game.audio.playShield();
    this.triggerDamageAnimation('enemy', amount, 'gain_shield');
    this.updateUI();
  }

  modifyPlayerMana(delta) {
    this.playerMana = Math.max(0, this.playerMana + delta);
    this.updateUI();
  }

  modifyStability(delta) {
    this.manaStability = Math.max(0, Math.min(this.maxManaStability, this.manaStability + delta));
    this.game.state.manaStability = this.manaStability;
    this.updateUI();
  }

  /**
   * Status Effect System: Burn, Guard, Focus
   */
  applyStatus(target, statusType, stacks = 1) {
    const statuses = target === 'player' ? this.playerStatuses : this.enemyStatuses;
    if (statuses[statusType] !== undefined) {
      statuses[statusType] += stacks;
      const targetLabel = target === 'player' ? 'ผู้เล่น' : 'ศัตรู';
      const icon = statusType === 'burn' ? '🔥' : statusType === 'guard' ? '🛡️' : '🎯';
      this.log(`${icon} [${targetLabel}] ได้รับสถานะ ${statusType.toUpperCase()} (+${stacks})!`);
      this.updateUI();
    }
  }

  resolveBurnStatuses(target) {
    const statuses = target === 'player' ? this.playerStatuses : this.enemyStatuses;
    if (statuses.burn > 0) {
      const burnDmg = statuses.burn * 3;
      statuses.burn = Math.max(0, statuses.burn - 1);
      if (target === 'player') {
        this.damagePlayer(burnDmg);
        this.log(`🔥 [Burn] ผู้เล่นถูกเผาผลาญ ${burnDmg} หน่วย!`);
      } else {
        this.damageEnemy(burnDmg);
        this.log(`🔥 [Burn] ศัตรูถูกแผดเผา ${burnDmg} หน่วย!`);
      }
    }
  }

  /**
   * AI Intent Generation based on Enemy Prototype
   */
  decideEnemyIntent() {
    const actions = this.enemyData.actions || [];
    if (actions.length === 0) return;

    if (this.enemyData.aiType === 'dummy') {
      // Training Dummy: mostly basic attacks, cyclic
      const idx = (this.turn - 1) % actions.length;
      this.enemyNextIntent = actions[idx];
    } else if (this.enemyData.aiType === 'balanced') {
      // Mana Beast: alternates attack and defense, with special every 3 turns
      if (this.turn % 3 === 0 && actions[2]) {
        this.enemyNextIntent = actions[2];
      } else {
        const idx = (this.turn % 2 === 1) ? 0 : 1;
        this.enemyNextIntent = actions[idx];
      }
    } else {
      // Tower Guardian: rotates cycle with powerful specials
      const pattern = [0, 1, 0, 2];
      const idx = pattern[(this.turn - 1) % pattern.length];
      this.enemyNextIntent = actions[idx] || actions[0];
    }

    this.updateEnemyIntentUI();
  }

  /**
   * End Player Turn -> Trigger Enemy Turn
   */
  endPlayerTurn() {
    if (this.phase !== 'player_turn' || this.isTransitioning) return;

    this.closeCardDetail();
    this.isTransitioning = true;
    this.phase = 'enemy_turn';

    if (this.endTurnBtn) {
      this.endTurnBtn.disabled = true;
      this.endTurnBtn.classList.add('opacity-50');
    }

    this.updateTurnBanner('ENEMY TURN');
    this.log(`--- จบเทิร์นของผู้เล่น -> เข้าสู่เทิร์นของศัตรู ---`);

    // Rule: Clear enemy shield from previous round
    this.enemyShield = 0;

    // Resolve Burn on player at turn end
    this.resolveBurnStatuses('player');
    if (this.playerHP <= 0) {
      this.handleDefeat();
      return;
    }

    // Delay enemy action slightly for tension & readability
    setTimeout(() => {
      this.executeEnemyAction();
    }, 750);
  }

  /**
   * Execute Enemy Action
   */
  executeEnemyAction() {
    const intent = this.enemyNextIntent;
    if (!intent) {
      this.finishEnemyTurn();
      return;
    }

    this.game.audio.playEnemyAttack();

    if (intent.type === 'attack') {
      this.triggerMagicEffect('slash', 'player');
      this.damagePlayer(intent.value);
      this.log(`💢 [${this.enemyName}] ใช้ [${intent.description}]!`);
    } else if (intent.type === 'defense') {
      this.triggerMagicEffect('shield', 'enemy');
      this.addEnemyShield(intent.shield || 10);
      if (intent.status) {
        this.applyStatus('enemy', intent.status.type, intent.status.stacks);
      }
      this.log(`🛡️ [${this.enemyName}] ใช้ [${intent.description}]!`);
    } else if (intent.type === 'special') {
      const specialFx = (this.enemyId === 'tower_core_final') ? 'distortion' : 'fire';
      this.triggerMagicEffect(specialFx, 'player');
      this.damagePlayer(intent.value);
      if (intent.status) {
        this.applyStatus('player', intent.status.type, intent.status.stacks);
      }
      this.log(`💥 [${this.enemyName}] ปลดปล่อยท่าพิเศษ [${intent.description}]!`);
    }

    // Check Defeat
    if (this.playerHP <= 0) {
      this.handleDefeat();
      return;
    }

    // Resolve Burn on enemy at end of enemy turn
    this.resolveBurnStatuses('enemy');
    if (this.enemyHP <= 0) {
      this.handleVictory();
      return;
    }

    // Finish Enemy Turn and start next Player Turn
    setTimeout(() => {
      this.finishEnemyTurn();
    }, 700);
  }

  finishEnemyTurn() {
    this.turn++;
    this.decideEnemyIntent();
    this.startPlayerTurn();
  }

  /**
   * Handle Battle Victory (Part 1 Hotfix + Part 17 UI)
   */
  handleVictory() {
    this.phase = 'victory';
    this.isTransitioning = true;
    this.closeCardDetail();

    this.log(`🏆 ชัยชนะ! [${this.enemyName}] พ่ายแพ้แล้ว!`);
    this.game.audio.playVictory();

    // 1. Restore Player HP to Max HP from player state (Part 1 Hotfix)
    const maxHP = (this.game.state && typeof this.game.state.playerMaxHP === 'number' && this.game.state.playerMaxHP > 0)
      ? this.game.state.playerMaxHP
      : this.playerMaxHP;
    this.playerHP = maxHP;

    // 2. Restore Mana Stability to Max Mana Stability from player state (Part 1 Hotfix)
    const maxStability = (this.game.state && typeof this.game.state.maxManaStability === 'number' && this.game.state.maxManaStability > 0)
      ? this.game.state.maxManaStability
      : this.maxManaStability;
    this.manaStability = maxStability;

    // 3. Update Player State (Retaining original playerMana behavior)
    if (this.game.state) {
      this.game.state.playerHP = maxHP;
      this.game.state.manaStability = maxStability;
    }

    this.updateUI();

    // 4. Auto-save with restored HP & Mana Stability so loading save preserves full state
    this.game.autoSave(`หลังกำราบ [${this.enemyName}]`);

    // 5. Render Victory Overlay with Main Menu visual style
    const overlay = document.getElementById('battle-result-overlay');
    if (overlay) {
      overlay.classList.remove('hidden');
      overlay.innerHTML = `
        <div class="result-modal victory">
          <div class="result-seal-box" aria-hidden="true">
            <svg viewBox="0 0 100 100" class="result-seal-svg">
              <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(245, 158, 11, 0.5)" stroke-width="1.5" stroke-dasharray="4,3"/>
              <polygon points="50,12 85,72 15,72" fill="none" stroke="rgba(56, 189, 248, 0.45)" stroke-width="1"/>
              <polygon points="50,88 15,28 85,28" fill="none" stroke="rgba(216, 180, 254, 0.45)" stroke-width="1"/>
              <circle cx="50" cy="50" r="14" fill="rgba(15, 23, 42, 0.7)" stroke="#fbbf24" stroke-width="1.5"/>
              <circle cx="50" cy="50" r="4" fill="#fbbf24"/>
            </svg>
          </div>
          <div class="result-kicker">◆ BATTLE RESOLUTION ◆</div>
          <div class="result-icon">★ VICTORY ★</div>
          <h2 class="result-title">กำราบศัตรูสำเร็จ!</h2>
          <p class="result-desc">คุณสามารถเอาชนะ <strong>[${this.enemyName}]</strong> ได้อย่างสมเกียรติ พลังเวทและความเสถียรกลับคืนสู่สภาวะสมบูรณ์</p>

          <div class="result-restored-pill">
            <span>❤️ HP ฟื้นฟูเต็มเปี่ยม (${this.playerHP}/${maxHP})</span>
            <span class="pill-dot">◆</span>
            <span>⚖️ Mana Stability เต็มร้อย (${this.manaStability}%)</span>
          </div>

          <div class="result-stats">
            <div>
              <span class="stat-lbl">รอบที่ใช้</span>
              <strong>${this.turn} เทิร์น</strong>
            </div>
            <div>
              <span class="stat-lbl">การ์ดที่เล่น</span>
              <strong>${this.totalCardsPlayed} ใบ</strong>
            </div>
            <div>
              <span class="stat-lbl">ความเสียหายรวม</span>
              <strong>${this.totalDamageDealt} หน่วย</strong>
            </div>
          </div>

          <div class="result-buttons">
            <button id="btn-victory-continue" class="btn-vn-menu btn-vn-primary">
              <span class="btn-vn-rail"></span>
              <span class="btn-vn-marker">▶</span>
              <span class="btn-vn-label-group">
                <span class="btn-vn-main">CONTINUE</span>
                <span class="btn-vn-sub">ดำเนินการต่อ เข้าสู่เรื่องราวถัดไป</span>
              </span>
            </button>
          </div>
        </div>
      `;

      document.getElementById('btn-victory-continue')?.addEventListener('click', () => {
        overlay.classList.add('hidden');
        this.cleanup();
        this.game.onBattleVictory(this.postVictoryScene);
      });
    }
  }

  /**
   * Handle Battle Defeat (Part 18)
   */
  handleDefeat() {
    this.phase = 'defeat';
    this.isTransitioning = true;
    this.closeCardDetail();

    this.log(`💀 พ่ายแพ้! พลังชีวิตของคุณลดลงเหลือ 0...`);
    this.game.audio.playDefeat();

    // NOTE: Defeat does NOT restore HP or stability, and does NOT overwrite pre-battle save
    const overlay = document.getElementById('battle-result-overlay');
    if (overlay) {
      overlay.classList.remove('hidden');
      overlay.innerHTML = `
        <div class="result-modal defeat">
          <div class="result-seal-box" aria-hidden="true">
            <svg viewBox="0 0 100 100" class="result-seal-svg">
              <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(239, 68, 68, 0.5)" stroke-width="1.5" stroke-dasharray="4,3"/>
              <polygon points="50,12 85,72 15,72" fill="none" stroke="rgba(244, 63, 94, 0.45)" stroke-width="1"/>
              <circle cx="50" cy="50" r="14" fill="rgba(15, 23, 42, 0.7)" stroke="#ef4444" stroke-width="1.5"/>
              <circle cx="50" cy="50" r="4" fill="#ef4444"/>
            </svg>
          </div>
          <div class="result-kicker defeat">◆ MISSION FAILED ◆</div>
          <div class="result-icon">💀 DEFEAT 💀</div>
          <h2 class="result-title">มานาในร่างกายหมดสิ้น...</h2>
          <p class="result-desc">คุณไม่สามารถต้านทานพลังของ <strong>[${this.enemyName}]</strong> ได้ในครั้งนี้</p>

          <div class="result-stats">
            <div>
              <span class="stat-lbl">สู้ได้</span>
              <strong>${this.turn} เทิร์น</strong>
            </div>
            <div>
              <span class="stat-lbl">ความเสียหายที่ทำได้</span>
              <strong>${this.totalDamageDealt} หน่วย</strong>
            </div>
          </div>

          <div class="result-buttons">
            <button id="btn-defeat-retry" class="btn-vn-menu btn-vn-primary">
              <span class="btn-vn-rail"></span>
              <span class="btn-vn-marker">🔄</span>
              <span class="btn-vn-label-group">
                <span class="btn-vn-main">RETRY BATTLE</span>
                <span class="btn-vn-sub">ลองใหม่อีกครั้ง</span>
              </span>
            </button>
            <button id="btn-defeat-load" class="btn-vn-menu">
              <span class="btn-vn-rail"></span>
              <span class="btn-vn-marker">📂</span>
              <span class="btn-vn-label-group">
                <span class="btn-vn-main">LOAD SAVE</span>
                <span class="btn-vn-sub">โหลดข้อมูลบันทึกก่อนหน้า</span>
              </span>
            </button>
            <button id="btn-defeat-menu" class="btn-vn-menu">
              <span class="btn-vn-rail"></span>
              <span class="btn-vn-marker">🏠</span>
              <span class="btn-vn-label-group">
                <span class="btn-vn-main">MAIN MENU</span>
                <span class="btn-vn-sub">กลับสู่หน้าจอหลัก</span>
              </span>
            </button>
          </div>
        </div>
      `;

      document.getElementById('btn-defeat-retry')?.addEventListener('click', () => {
        overlay.classList.add('hidden');
        this.startBattle({
          enemyId: this.enemyId,
          enemyName: this.enemyName,
          enemyHp: this.enemyMaxHP,
          postVictoryScene: this.postVictoryScene
        });
      });

      document.getElementById('btn-defeat-load')?.addEventListener('click', () => {
        overlay.classList.add('hidden');
        this.cleanup();
        this.game.openSaveLoadModal('load');
      });

      document.getElementById('btn-defeat-menu')?.addEventListener('click', () => {
        overlay.classList.add('hidden');
        this.cleanup();
        this.game.showScreen('title');
      });
    }
  }

  /**
   * Update full UI
   */
  updateUI() {
    // Enemy HP & Bar & Ghost bar
    if (this.enemyNameEl) this.enemyNameEl.textContent = this.enemyName;
    if (this.enemyHpEl) this.enemyHpEl.textContent = `${this.enemyHP}/${this.enemyMaxHP}`;
    if (this.enemyHpBar) {
      const pct = Math.max(0, Math.min(100, (this.enemyHP / this.enemyMaxHP) * 100));
      this.enemyHpBar.style.width = `${pct}%`;
      if (this.enemyHpGhost) {
        setTimeout(() => {
          if (this.enemyHpGhost) this.enemyHpGhost.style.width = `${pct}%`;
        }, 220);
      }
    }
    if (this.enemyShieldEl) {
      if (this.enemyShield > 0) {
        this.enemyShieldEl.classList.remove('hidden');
        this.enemyShieldEl.innerHTML = `<span class="shield-badge-icon">🛡️</span> Shield <strong class="shield-badge-num">${this.enemyShield}</strong>`;
      } else {
        this.enemyShieldEl.classList.add('hidden');
      }
    }

    // Final Boss low HP intensity pulse
    if (this.enemyId === 'tower_core_final') {
      const hpPct = (this.enemyHP / this.enemyMaxHP) * 100;
      if (hpPct <= 40) {
        this.enemyAvatarEl?.classList.add('core-critical-pulse');
        this.battleScreen?.classList.add('core-overdrive');
      } else {
        this.enemyAvatarEl?.classList.remove('core-critical-pulse');
        this.battleScreen?.classList.remove('core-overdrive');
      }
    }

    // Enemy Status Badges
    this.renderStatuses(this.enemyStatusesEl, this.enemyStatuses);

    // Player HP & Bar & Ghost bar & Name
    if (this.playerNameEl) {
      const pName = this.game.state?.playerName || 'นักเรียนใหม่';
      this.playerNameEl.textContent = `${pName} (คุณ)`;
    }
    if (this.playerHpEl) this.playerHpEl.textContent = `${this.playerHP}/${this.playerMaxHP}`;
    if (this.playerHpBar) {
      const pPct = Math.max(0, Math.min(100, (this.playerHP / this.playerMaxHP) * 100));
      this.playerHpBar.style.width = `${pPct}%`;
      if (this.playerHpGhost) {
        setTimeout(() => {
          if (this.playerHpGhost) this.playerHpGhost.style.width = `${pPct}%`;
        }, 220);
      }
    }
    if (this.playerShieldEl) {
      if (this.playerShield > 0) {
        this.playerShieldEl.classList.remove('hidden');
        this.playerShieldEl.innerHTML = `<span class="shield-badge-icon">🛡️</span> Shield <strong class="shield-badge-num">${this.playerShield}</strong>`;
      } else {
        this.playerShieldEl.classList.add('hidden');
      }
    }

    // Player Mana & Orbs (Gems)
    if (this.playerManaEl) this.playerManaEl.textContent = `${this.playerMana}/${this.playerMaxMana}`;
    if (this.playerManaOrbs) {
      this.playerManaOrbs.innerHTML = '';
      for (let i = 0; i < this.playerMaxMana; i++) {
        const orb = document.createElement('div');
        const isActive = i < this.playerMana;
        orb.className = `mana-gem ${isActive ? 'active' : 'empty'}`;
        orb.title = isActive ? `มานาพร้อมใช้ (${i + 1}/${this.playerMaxMana})` : `มานาใช้ไปแล้ว`;
        this.playerManaOrbs.appendChild(orb);
      }
    }

    // Mana Stability Gauge & Badges
    if (this.playerStabilityVal) this.playerStabilityVal.textContent = `${this.manaStability}/${this.maxManaStability}%`;
    if (this.playerStabilityBar) {
      const sPct = Math.max(0, Math.min(100, (this.manaStability / this.maxManaStability) * 100));
      this.playerStabilityBar.style.width = `${sPct}%`;
      if (this.manaStability <= 20) {
        this.playerStabilityBar.style.backgroundColor = '#b91c1c'; // Dark red critical
      } else if (this.manaStability <= 40) {
        this.playerStabilityBar.style.backgroundColor = '#ef4444'; // Red volatile
      } else if (this.manaStability >= 85) {
        this.playerStabilityBar.style.backgroundColor = '#10b981'; // Green resonant
      } else {
        this.playerStabilityBar.style.backgroundColor = '#38bdf8'; // Blue normal
      }
    }

    // Mana Stability State Label
    if (this.playerStabilityBadge) {
      if (this.manaStability <= 20) {
        this.playerStabilityBadge.classList.remove('hidden');
        this.playerStabilityBadge.textContent = '🚨 Critical (วิกฤตมานาย้อนกลับ)';
        this.playerStabilityBadge.className = 'stability-badge-critical';
      } else if (this.manaStability <= 40) {
        this.playerStabilityBadge.classList.remove('hidden');
        this.playerStabilityBadge.textContent = '⚠️ Unstable (มานาไม่เสถียร)';
        this.playerStabilityBadge.className = 'stability-badge-warning';
      } else if (this.manaStability >= 85) {
        this.playerStabilityBadge.classList.remove('hidden');
        this.playerStabilityBadge.textContent = '✨ Resonant (สมดุลสูงสุด)';
        this.playerStabilityBadge.className = 'stability-badge-resonant';
      } else {
        this.playerStabilityBadge.classList.remove('hidden');
        this.playerStabilityBadge.textContent = '⚖️ Stable (เสถียรปกติ)';
        this.playerStabilityBadge.className = 'stability-badge-normal';
      }
    }

    // Player Status Badges
    this.renderStatuses(this.playerStatusesEl, this.playerStatuses);

    // Deck & Discard Counters
    if (this.deckCountEl) this.deckCountEl.textContent = `${this.deck.length}`;
    if (this.discardCountEl) this.discardCountEl.textContent = `${this.discardPile.length}`;

    // Render Hand
    this.renderHand();
  }

  renderStatuses(containerEl, statuses) {
    if (!containerEl) return;
    containerEl.innerHTML = '';

    const items = [
      { key: 'burn', icon: '🔥', label: 'Burn', count: statuses.burn, desc: 'รับ Damage 3 หน่วยต่อชั้นเมื่อจบเทิร์น' },
      { key: 'guard', icon: '🛡️', label: 'Guard', count: statuses.guard, desc: 'ลด Damage ที่ได้รับลง 30%' },
      { key: 'focus', icon: '🎯', label: 'Focus', count: statuses.focus, desc: 'เพิ่มพลังโจมตี/เวทถัดไป 50%' }
    ];

    items.forEach(it => {
      if (it.count > 0) {
        const badge = document.createElement('div');
        badge.className = `status-pill status-${it.key}`;
        badge.title = `${it.label}: ${it.desc}`;
        badge.innerHTML = `<span class="status-icon">${it.icon}</span> <span class="status-name">${it.label}</span> <span class="status-count">${it.count}</span>`;
        containerEl.appendChild(badge);
      }
    });
  }

  renderHand() {
    if (!this.handContainer) return;
    this.handContainer.innerHTML = '';

    this.hand.forEach((card, idx) => {
      const effectiveCost = Math.max(0, card.cost - this.playerModifiers.nextCardCostDiscount);
      const canAfford = this.playerMana >= effectiveCost && this.phase === 'player_turn';
      const meetsCondition = typeof card.canPlay !== 'function' || card.canPlay(this);
      const isPlayable = canAfford && meetsCondition;
      const isSelected = this.selectedCardIndex === idx;

      const cardEl = document.createElement('div');
      cardEl.className = `battle-card type-${card.type.toLowerCase()} ${isPlayable ? 'playable' : 'unplayable'} ${isSelected ? 'selected' : ''}`;
      cardEl.dataset.index = idx;

      const cardVectorArt = getCardArtSvg(card.id) || `<span class="card-art-icon">${card.icon || '✨'}</span>`;

      cardEl.innerHTML = `
        <div class="card-header">
          <span class="card-cost ${effectiveCost < card.cost ? 'discounted' : ''}" title="ค่าร่ายมานา: ${effectiveCost}">${effectiveCost}</span>
          <span class="card-type-tag">${card.type}</span>
        </div>
        <div class="card-art-box">
          ${cardVectorArt}
        </div>
        <div class="card-body">
          <div class="card-name">${card.name}</div>
          <div class="card-description">${card.description}</div>
        </div>
        <div class="card-footer">
          <span class="card-target-tag">🎯 ${card.target || 'Enemy'}</span>
          ${card.stabilityChange !== undefined && card.stabilityChange !== 0 ? `<span class="card-stab-tag ${card.stabilityChange > 0 ? 'stab-plus' : 'stab-minus'}">${card.stabilityChange > 0 ? '+' : ''}${card.stabilityChange}%</span>` : ''}
        </div>
        ${!meetsCondition ? `<div class="card-lock-note">🔒 ${card.conditionDescription || 'ล็อก'}</div>` : ''}
      `;

      cardEl.addEventListener('mouseenter', () => {
        this.game.audio.playCardSelect();
      });

      // Part 6-12: Clicking card selects and opens Card Detail (NEVER plays immediately)
      cardEl.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openCardDetail(idx);
      });

      this.handContainer.appendChild(cardEl);
    });
  }

  /**
   * Open Card Detail View (Part 6-12)
   */
  openCardDetail(handIndex) {
    if (this.phase !== 'player_turn' || this.isTransitioning || this.isPlayingCard) return;
    const card = this.hand[handIndex];
    if (!card) return;

    this.selectedCardIndex = handIndex;
    this.isCardDetailOpen = true;
    this.game.audio.playCardSelect();

    this.updateHandSelection();
    this.renderCardDetailOverlay(card, handIndex);
  }

  /**
   * Close Card Detail View (Part 11)
   */
  closeCardDetail() {
    this.selectedCardIndex = null;
    this.isCardDetailOpen = false;
    const overlay = this.cardDetailOverlay || document.getElementById('battle-card-detail-overlay');
    if (overlay) {
      overlay.classList.add('hidden');
    }
    const dialog = this.cardDetailDialog || document.getElementById('battle-card-detail-dialog');
    if (dialog) {
      dialog.innerHTML = '';
    }
    this.updateHandSelection();
  }

  /**
   * Update Hand Card Selection Visuals
   */
  updateHandSelection() {
    if (!this.handContainer) return;
    const cardEls = this.handContainer.querySelectorAll('.battle-card');
    cardEls.forEach((el, idx) => {
      if (idx === this.selectedCardIndex) {
        el.classList.add('selected');
      } else {
        el.classList.remove('selected');
      }
    });
  }

  /**
   * Render Card Detail Overlay (Part 7, 8, 9, 10, 11, 14)
   */
  renderCardDetailOverlay(card, handIndex) {
    const overlay = this.cardDetailOverlay || document.getElementById('battle-card-detail-overlay');
    const dialog = this.cardDetailDialog || document.getElementById('battle-card-detail-dialog');
    if (!overlay || !dialog) return;

    const effectiveCost = Math.max(0, card.cost - this.playerModifiers.nextCardCostDiscount);
    const canAfford = this.playerMana >= effectiveCost;
    const meetsCondition = typeof card.canPlay !== 'function' || card.canPlay(this);
    const isPlayable = canAfford && meetsCondition && this.phase === 'player_turn' && !this.isTransitioning && !this.isPlayingCard;

    // Build real property badges
    const propBadges = [];

    // Mana Cost
    propBadges.push({
      label: 'MANA COST',
      val: `${effectiveCost} มานา${effectiveCost < card.cost ? ` (ลดจาก ${card.cost})` : ''}`,
      icon: '💎',
      highlight: effectiveCost < card.cost
    });

    // Card Type
    propBadges.push({
      label: 'CARD TYPE',
      val: card.type,
      icon: card.icon || '✨',
      type: card.type.toLowerCase()
    });

    // Target
    if (card.target) {
      const targetLabel = card.target === 'Enemy' ? 'ศัตรู (Enemy)' : card.target === 'Self' ? 'ตนเอง (Self)' : card.target;
      propBadges.push({
        label: 'TARGET',
        val: targetLabel,
        icon: '🎯'
      });
    }

    // Damage (only if positive number)
    if (typeof card.damage === 'number' && card.damage > 0) {
      propBadges.push({
        label: 'DAMAGE',
        val: `${card.damage} หน่วย`,
        icon: '⚔️',
        color: '#f87171'
      });
    }

    // Shield (only if positive number)
    if (typeof card.shield === 'number' && card.shield > 0) {
      propBadges.push({
        label: 'SHIELD',
        val: `+${card.shield} หน่วย`,
        icon: '🛡️',
        color: '#38bdf8'
      });
    }

    // Stability (only if defined and !== 0)
    if (typeof card.stabilityChange === 'number' && card.stabilityChange !== 0) {
      const isPositive = card.stabilityChange > 0;
      propBadges.push({
        label: isPositive ? 'STABILITY RECOVERY' : 'STABILITY COST',
        val: `${isPositive ? '+' : ''}${card.stabilityChange}%`,
        icon: '⚖️',
        color: isPositive ? '#34d399' : '#f97316'
      });
    }

    // Status Effects from card definition or description
    if (card.id === 'fire_bolt' || card.id === 'flame_rush' || card.description?.includes('Burn')) {
      propBadges.push({
        label: 'STATUS EFFECT',
        val: 'Burn (เผาไหม้ต่อเนื่อง)',
        icon: '🔥',
        color: '#f87171'
      });
    }
    if (card.id === 'barrier_ward' || card.id === 'iron_will' || card.description?.includes('Guard')) {
      propBadges.push({
        label: 'STATUS EFFECT',
        val: 'Guard (ลดดาเมจ 30%)',
        icon: '🛡️',
        color: '#60a5fa'
      });
    }
    if (card.id === 'focus_mind' || card.description?.includes('Focus')) {
      propBadges.push({
        label: 'STATUS EFFECT',
        val: 'Focus (เพิ่มพลัง +50%)',
        icon: '🎯',
        color: '#c084fc'
      });
    }

    const cardVectorArt = getCardArtSvg(card.id) || `<span class="card-modal-art-fallback">${card.icon || '✨'}</span>`;

    let validationMessage = '';
    if (!canAfford) {
      validationMessage = `<div class="card-detail-warning">⚠️ Mana ไม่เพียงพอ (ต้องการ ${effectiveCost} มานา, ปัจจุบันมี ${this.playerMana})</div>`;
    } else if (!meetsCondition) {
      validationMessage = `<div class="card-detail-warning">⚠️ ${card.conditionDescription || 'ไม่สามารถใช้งานการ์ดนี้ในขณะนี้ได้'}</div>`;
    }

    dialog.className = `card-detail-dialog type-${card.type.toLowerCase()}`;
    dialog.innerHTML = `
      <div class="card-detail-inner">
        <!-- Close button top-right -->
        <button id="btn-card-detail-close" class="btn-card-detail-close" title="ปิด (Esc)">✕</button>

        <!-- Top Header: Type & Cost -->
        <div class="card-detail-header">
          <div class="card-detail-type-badge type-${card.type.toLowerCase()}">
            <span class="type-icon">${card.icon || '✨'}</span>
            <span class="type-text">${card.type.toUpperCase()}</span>
          </div>
          <div class="card-detail-cost-orb ${effectiveCost < card.cost ? 'discounted' : ''}" title="ค่าร่ายมานา: ${effectiveCost}">
            <span class="cost-num">${effectiveCost}</span>
            <span class="cost-label">MANA</span>
          </div>
        </div>

        <!-- Center: Card Art Showcase -->
        <div class="card-detail-art-box">
          <div class="card-detail-art-frame">
            ${cardVectorArt}
          </div>
        </div>

        <!-- Card Title -->
        <div class="card-detail-title-block">
          <h3 class="card-detail-name">${card.name}</h3>
          ${card.flavor ? `<p class="card-detail-flavor">"${card.flavor}"</p>` : ''}
        </div>

        <!-- Properties Grid -->
        <div class="card-detail-props-grid">
          ${propBadges.map(b => `
            <div class="card-prop-item ${b.type ? `prop-${b.type}` : ''}">
              <span class="prop-icon">${b.icon}</span>
              <div class="prop-text-group">
                <span class="prop-lbl">${b.label}</span>
                <span class="prop-val" ${b.color ? `style="color: ${b.color};"` : ''}>${b.val}</span>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Description Box -->
        <div class="card-detail-desc-box">
          <div class="desc-header">📜 ความสามารถของการ์ด (EFFECT)</div>
          <div class="desc-body">${card.description}</div>
        </div>

        <!-- Validation warning if cannot play -->
        ${validationMessage}

        <!-- Action Buttons -->
        <div class="card-detail-actions">
          <button id="btn-card-use" class="btn-vn-menu btn-vn-primary ${isPlayable ? '' : 'disabled'}" ${isPlayable ? '' : 'disabled'}>
            <span class="btn-vn-rail"></span>
            <span class="btn-vn-marker">▶</span>
            <span class="btn-vn-label-group">
              <span class="btn-vn-main">USE CARD</span>
              <span class="btn-vn-sub">ร่ายการ์ดนี้เข้าสู่การต่อสู้</span>
            </span>
          </button>

          <button id="btn-card-back" class="btn-vn-menu">
            <span class="btn-vn-rail"></span>
            <span class="btn-vn-marker">↩</span>
            <span class="btn-vn-label-group">
              <span class="btn-vn-main">BACK</span>
              <span class="btn-vn-sub">กลับสู่มือ (ไม่ร่ายการ์ด)</span>
            </span>
          </button>
        </div>
      </div>
    `;

    overlay.classList.remove('hidden');

    // Prevent click inside dialog from bubbling to backdrop
    dialog.onclick = (e) => e.stopPropagation();

    // Bind Close button
    document.getElementById('btn-card-detail-close')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.game.audio.playCancel?.() || this.game.audio.playSFX('cancel');
      this.closeCardDetail();
    });

    // Bind Back button
    document.getElementById('btn-card-back')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.game.audio.playCancel?.() || this.game.audio.playSFX('cancel');
      this.closeCardDetail();
    });

    // Bind Use Card button
    document.getElementById('btn-card-use')?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!isPlayable) return;
      if (this.hand[handIndex] !== card) {
        this.closeCardDetail();
        this.updateUI();
        return;
      }
      this.closeCardDetail();
      this.playCard(handIndex);
    });
  }

  triggerMagicEffect(effectType, target = 'enemy') {
    this.game.audio.playMagicSFX(effectType);
    const stage = this.fxLayer || document.getElementById('battle-center-section');
    if (!stage) return;

    const fx = document.createElement('div');
    fx.className = `magic-fx fx-${effectType} target-${target}`;
    stage.appendChild(fx);
    setTimeout(() => fx.remove(), 700);
  }

  updateTurnBanner(text) {
    if (!this.turnBannerEl) return;
    this.turnBannerEl.textContent = text;
    if (text.includes('PLAYER')) {
      this.turnBannerEl.className = 'turn-banner player-turn';
    } else {
      this.turnBannerEl.className = 'turn-banner enemy-turn';
    }
  }

  updateEnemyIntentUI() {
    if (!this.enemyIntentEl || !this.enemyNextIntent) return;
    this.enemyIntentEl.innerHTML = `
      <span class="intent-icon">${this.enemyNextIntent.icon}</span>
      <span class="intent-desc">${this.enemyNextIntent.description}</span>
    `;
  }

  log(msg) {
    this.logs.push(msg);
    // Keep last 8 entries
    if (this.logs.length > 8) {
      this.logs.shift();
    }

    if (this.battleLogEl) {
      this.battleLogEl.innerHTML = this.logs.map(l => `<div class="battle-log-entry">${l}</div>`).join('');
      this.battleLogEl.scrollTop = this.battleLogEl.scrollHeight;
    }
  }

  animateCardPlay(card) {
    const stage = document.getElementById('battle-player-box') || document.getElementById('battle-center-section');
    if (!stage) return;
    const animEl = document.createElement('div');
    animEl.className = `card-play-anim type-${card.type.toLowerCase()}`;
    animEl.innerHTML = `<span>${card.icon || '✨'}</span> <strong>${card.name}</strong>`;
    stage.appendChild(animEl);
    setTimeout(() => animEl.remove(), 600);
  }

  triggerDamageAnimation(target, amount, type = 'damage') {
    const el = target === 'player'
      ? document.getElementById('battle-player-box')
      : document.getElementById('battle-enemy-box');

    if (el) {
      el.classList.add('hit-shake');
      setTimeout(() => el.classList.remove('hit-shake'), 350);

      const floatEl = document.createElement('div');
      floatEl.className = `floating-number ${type}`;
      if (type === 'shield' || type === 'gain_shield') {
        floatEl.textContent = `+${amount} 🛡️`;
      } else if (type === 'shield_block') {
        floatEl.textContent = `-${amount} 🛡️`;
      } else if (type === 'critical') {
        floatEl.textContent = `CRITICAL! -${amount}`;
      } else {
        floatEl.textContent = `-${amount}`;
      }
      el.appendChild(floatEl);
      setTimeout(() => floatEl.remove(), 850);
    }
  }

  flashManaWarning() {
    if (this.playerManaOrbs) {
      this.playerManaOrbs.classList.add('mana-shake');
      setTimeout(() => this.playerManaOrbs.classList.remove('mana-shake'), 400);
    }
  }

  flashWarning() {
    if (this.handContainer) {
      this.handContainer.classList.add('mana-shake');
      setTimeout(() => this.handContainer.classList.remove('mana-shake'), 400);
    }
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  openTutorial() {
    document.getElementById('modal-battle-tutorial')?.classList.remove('hidden');
  }

  closeTutorial() {
    document.getElementById('modal-battle-tutorial')?.classList.add('hidden');
  }
}
