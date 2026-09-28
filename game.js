/**
 * ARCANA: THE TOWER - Core Game Engine
 * Coordinates Scenes, State, Audio Synthesizer, Save/Load, and Modals
 */

import { SaveManager, SAVE_SLOTS, formatPlayTime } from './save.js';
import { DialogueEngine } from './dialogue.js';
import { BattleEngine } from './battle.js';
import {
  createStarterDeck,
  INITIAL_STARTER_DECK_IDS,
  INITIAL_UNLOCKED_CARD_IDS,
  getCardById,
  CARD_DATABASE,
  getCardArtSvg
} from './cards.js';
import {
  CHARACTERS,
  getRelationshipStage,
  normalizeCharacterId
} from './characters.js';
import { assetLoader } from './assetLoader.js';
import { audioManager } from './audioManager.js';

export class Game {
  constructor() {
    this.audio = audioManager;
    this.settings = SaveManager.loadSettings();
    this.audio.enabled = this.settings.soundEnabled !== false;
    this.audio.isMuted = !!this.settings.isMuted;
    const master = this.settings.masterVolume !== undefined ? this.settings.masterVolume : (this.settings.soundVolume ? Math.round(this.settings.soundVolume * 100) : 80);
    const music = this.settings.musicVolume !== undefined ? this.settings.musicVolume : 70;
    const sfx = this.settings.sfxVolume !== undefined ? this.settings.sfxVolume : 80;
    this.audio.setMasterVolume(master);
    this.audio.setMusicVolume(music);
    this.audio.setSFXVolume(sfx);

    // Current Game Screen: 'title' | 'vn' | 'battle'
    this.currentScreen = 'title';

    // Current Card Collection filter
    this.currentCollectionFilter = 'ALL';

    // Play Time Tracker
    this.playTimeSeconds = 0;
    this.playTimeTimer = null;

    // Game Core State
    this.state = this.getInitialState();

    // Sub-engines
    this.dialogue = new DialogueEngine(this);
    this.battle = new BattleEngine(this);

    // Save/Load Modal Mode: 'save' | 'load'
    this.saveModalMode = 'save';

    this.initDOM();
    this.initTitleScreen();
    this.updateContinueButtonState();
    this.applySettingsToUI();

    // Global keyboard accessibility: ESC closes open modal
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const modals = [
          'modal-start-confirm',
          'modal-save-load',
          'modal-settings',
          'modal-card-collection',
          'modal-relationships',
          'modal-deck',
          'modal-credits',
          'modal-log',
          'modal-name-input',
          'modal-battle-tutorial'
        ];
        for (const mId of modals) {
          const el = document.getElementById(mId);
          if (el && !el.classList.contains('hidden')) {
            this.audio.playCancel();
            this.closeModal(mId);
            break;
          }
        }
      }
    });

    // Asynchronously preload core character portraits and backgrounds
    setTimeout(() => {
      assetLoader.preload('/src/assets/images/protagonist_portrait_1790578353883.jpg');
      assetLoader.preload('/src/assets/images/rina_portrait_1790578115942.jpg');
      assetLoader.preload('/src/assets/images/kai_portrait_1790578127676.jpg');
      assetLoader.preload('/src/assets/images/mika_portrait_1790578142728.jpg');
      assetLoader.preload('/src/assets/images/hayase_portrait_1790578364280.jpg');
      assetLoader.preload('/src/assets/images/kagami_portrait_1790578375534.jpg');
      assetLoader.preload('/src/assets/images/bg_classroom_1790578153581.jpg');
      assetLoader.preload('/src/assets/images/bg_tower_exterior_1790578167980.jpg');
      assetLoader.preload('/src/assets/images/bg_academy_library_1790578390599.jpg');
      assetLoader.preload('/src/assets/images/bg_tower_core_1790578402902.jpg');
      // Preload enemies
      assetLoader.preload('/src/assets/images/enemy_training_dummy_1790579571653.jpg');
      assetLoader.preload('/src/assets/images/enemy_mana_beast_1790579586423.jpg');
      assetLoader.preload('/src/assets/images/enemy_tower_guardian_1790579604408.jpg');
      assetLoader.preload('/src/assets/images/enemy_tower_core_1790579619536.jpg');
    }, 50);
  }

  getInitialState() {
    return {
      playerName: 'นักเรียนใหม่',
      chapter: 1,
      chapterName: 'Chapter 1: วันธรรมดาที่ไม่ธรรมดา (The Ordinary Day)',
      scene: 'ch1_sc1_morning',
      sceneName: 'ทางเดินหน้าสถาบัน - เช้าวันเปิดภาคเรียน',
      dialogueIndex: 0,
      playerHP: 100,
      playerMaxHP: 100,
      playerMana: 3,
      playerMaxMana: 3,
      manaStability: 100,
      maxManaStability: 100,
      deck: createStarterDeck(),
      hand: [],
      discardPile: [],
      // Round 4 Relationships (0 to 100)
      relationships: {
        rina: 0,
        kai: 0,
        mika: 0,
        hayase: 0
      },
      // Backward compatibility aliases
      characterRelationship: {
        aoi: 0,
        daiki: 0,
        shindou: 0,
        kuroki: 0
      },
      // Round 4 Deck Progression
      playerDeck: [...INITIAL_STARTER_DECK_IDS],
      unlockedCards: [...INITIAL_UNLOCKED_CARD_IDS],
      storyFlags: {},
      selectedPartner: null,
      storyChoices: {},
      battleState: null,
      playTime: 0,
      playerInitialBonus: null
    };
  }

  initDOM() {
    // Title Screen Buttons
    document.getElementById('btn-title-start')?.addEventListener('click', () => {
      this.audio.playSelect();
      const hasSaves = SaveManager.hasAnySave();
      if (hasSaves) {
        // Show start game confirmation modal (protect existing saves)
        document.getElementById('modal-start-confirm')?.classList.remove('hidden');
      } else {
        this.openNameInputModal();
      }
    });

    // Start Game Confirmation Modal Actions
    document.getElementById('btn-start-confirm-proceed')?.addEventListener('click', () => {
      this.audio.playConfirm();
      this.closeModal('modal-start-confirm');
      this.openNameInputModal();
    });

    document.getElementById('btn-start-confirm-cancel')?.addEventListener('click', () => {
      this.audio.playCancel();
      this.closeModal('modal-start-confirm');
    });

    document.getElementById('btn-close-start-confirm')?.addEventListener('click', () => {
      this.audio.playCancel();
      this.closeModal('modal-start-confirm');
    });

    document.getElementById('btn-confirm-start-game')?.addEventListener('click', () => {
      this.audio.playConfirm();
      const input = document.getElementById('input-protagonist-name');
      const name = input?.value?.trim() || 'นักเรียนใหม่';
      this.closeModal('modal-name-input');
      this.startNewGame(name);
    });

    document.getElementById('btn-close-name-modal')?.addEventListener('click', () => {
      this.audio.playCancel();
      this.closeModal('modal-name-input');
    });

    document.getElementById('btn-title-continue')?.addEventListener('click', () => {
      this.audio.playSelect();
      this.continueLatestGame();
    });

    // Card Collection Buttons
    document.getElementById('btn-title-collection')?.addEventListener('click', () => {
      this.audio.playSelect();
      this.openCardCollectionModal();
    });

    document.getElementById('btn-vn-collection')?.addEventListener('click', () => {
      this.audio.playSelect();
      this.openCardCollectionModal();
    });

    document.getElementById('btn-close-collection-modal')?.addEventListener('click', () => {
      this.audio.playCancel();
      this.closeModal('modal-card-collection');
    });

    document.getElementById('btn-collection-close')?.addEventListener('click', () => {
      this.audio.playCancel();
      this.closeModal('modal-card-collection');
    });

    // Collection Filter Buttons
    document.querySelectorAll('.col-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.audio.playSelect();
        const filterVal = btn.getAttribute('data-filter') || 'ALL';
        this.renderCardCollectionModal(filterVal);
      });
    });

    // Credits Modal Buttons
    document.getElementById('btn-title-credits')?.addEventListener('click', () => {
      this.audio.playSelect();
      this.openCreditsModal();
    });

    document.getElementById('btn-credits-return-title')?.addEventListener('click', () => {
      this.audio.playSelect();
      this.closeModal('modal-credits');
      this.showScreen('title');
    });

    document.getElementById('btn-title-deck')?.addEventListener('click', () => {
      this.audio.playSelect();
      this.openDeckModal();
    });

    document.getElementById('btn-title-relationships')?.addEventListener('click', () => {
      this.audio.playSelect();
      this.openRelationshipsModal();
    });

    document.getElementById('btn-title-load')?.addEventListener('click', () => {
      this.audio.playSelect();
      this.openSaveLoadModal('load');
    });

    document.getElementById('btn-title-settings')?.addEventListener('click', () => {
      this.audio.playSelect();
      this.openSettingsModal();
    });

    // VN In-Game Nav Buttons: Deck Management (Round 4)
    document.getElementById('btn-vn-deck')?.addEventListener('click', () => {
      this.audio.playSelect();
      this.openDeckModal();
    });

    document.getElementById('btn-close-deck-modal')?.addEventListener('click', () => {
      this.audio.playCancel();
      this.closeModal('modal-deck');
    });

    document.getElementById('btn-deck-confirm')?.addEventListener('click', () => {
      this.audio.playConfirm();
      this.closeModal('modal-deck');
      this.showToast('บันทึกการจัดสำรับการ์ดแล้ว');
    });

    // VN In-Game Nav Buttons: Character Bonds / Relationships (Round 4)
    document.getElementById('btn-vn-relationships')?.addEventListener('click', () => {
      this.audio.playSelect();
      this.openRelationshipsModal();
    });

    document.getElementById('btn-close-relationships-modal')?.addEventListener('click', () => {
      this.audio.playCancel();
      this.closeModal('modal-relationships');
    });

    document.getElementById('btn-vn-save')?.addEventListener('click', () => {
      this.audio.playSelect();
      this.openSaveLoadModal('save');
    });

    document.getElementById('btn-vn-load')?.addEventListener('click', () => {
      this.audio.playSelect();
      this.openSaveLoadModal('load');
    });

    document.getElementById('btn-vn-settings')?.addEventListener('click', () => {
      this.audio.playSelect();
      this.openSettingsModal();
    });

    document.getElementById('btn-vn-title')?.addEventListener('click', () => {
      this.audio.playSelect();
      if (confirm('ต้องการกลับสู่หน้าจอหลักหรือไม่? แนะนำให้บันทึกเกมก่อน')) {
        this.showScreen('title');
      }
    });

    // Save/Load Modal close & actions
    document.getElementById('btn-close-save-modal')?.addEventListener('click', () => {
      this.audio.playCancel();
      this.closeModal('modal-save-load');
    });

    // Settings Modal close & save
    document.getElementById('btn-close-settings-modal')?.addEventListener('click', () => {
      this.audio.playCancel();
      this.closeModal('modal-settings');
    });

    document.getElementById('btn-save-settings')?.addEventListener('click', () => {
      this.audio.playConfirm();
      this.saveSettingsFromUI();
    });

    // Dialogue Log Modal close
    document.getElementById('btn-close-log-modal')?.addEventListener('click', () => {
      this.audio.playCancel();
      this.closeModal('modal-log');
    });

    // Live Volume & Mute UI Listeners
    document.getElementById('setting-volume-master')?.addEventListener('input', (e) => {
      const v = parseInt(e.target.value, 10) || 0;
      const lbl = document.getElementById('val-volume-master');
      if (lbl) lbl.textContent = `${v}%`;
      this.audio.setMasterVolume(v);
    });

    document.getElementById('setting-volume-music')?.addEventListener('input', (e) => {
      const v = parseInt(e.target.value, 10) || 0;
      const lbl = document.getElementById('val-volume-music');
      if (lbl) lbl.textContent = `${v}%`;
      this.audio.setMusicVolume(v);
    });

    document.getElementById('setting-volume-sfx')?.addEventListener('input', (e) => {
      const v = parseInt(e.target.value, 10) || 0;
      const lbl = document.getElementById('val-volume-sfx');
      if (lbl) lbl.textContent = `${v}%`;
      this.audio.setSFXVolume(v);
    });

    document.getElementById('setting-mute-toggle')?.addEventListener('change', (e) => {
      if (e.target.checked) {
        this.audio.muteAll();
      } else {
        this.audio.unmuteAll();
      }
    });

    // Start timer
    this.startPlayTimer();
  }

  startPlayTimer() {
    if (this.playTimeTimer) clearInterval(this.playTimeTimer);
    this.playTimeTimer = setInterval(() => {
      if (this.currentScreen !== 'title') {
        this.playTimeSeconds++;
        this.state.playTime = this.playTimeSeconds;
      }
    }, 1000);
  }

  showScreen(screenName) {
    this.currentScreen = screenName;

    // Toggle screen containers
    document.querySelectorAll('.game-screen').forEach(el => el.classList.add('hidden'));

    const targetEl = document.getElementById(`screen-${screenName}`);
    if (targetEl) {
      targetEl.classList.remove('hidden');
    }

    if (screenName === 'title') {
      this.updateContinueButtonState();
      this.audio.fadeMusic('academy', 800);
    }
  }

  startNewGame(customName = null) {
    this.state = this.getInitialState();
    if (customName && customName.trim()) {
      this.state.playerName = customName.trim();
    }
    this.playTimeSeconds = 0;
    if (this.dialogue) {
      this.dialogue.logHistory = [];
      this.dialogue.stopAuto();
      this.dialogue.stopSkip();
    }
    this.showScreen('vn');
    this.dialogue.loadScene('ch1_sc1_morning', 0);
    this.autoSave('เริ่มต้นเกมใหม่');
  }

  continueLatestGame() {
    const latestSlot = SaveManager.getLatestSave();
    if (!latestSlot) {
      this.showToast('ไม่พบข้อมูลบันทึกที่สามารถเล่นต่อได้');
      return;
    }
    this.loadFromSlot(latestSlot);
  }

  updateContinueButtonState() {
    const continueBtn = document.getElementById('btn-title-continue');
    const infoSpan = document.getElementById('title-continue-info');
    if (!continueBtn) return;

    const hasAny = SaveManager.hasAnySave();
    continueBtn.disabled = !hasAny;
    if (hasAny) {
      continueBtn.classList.remove('disabled');
      const latest = SaveManager.getLatestSave();
      const info = SaveManager.getSlotInfo(latest);
      if (info) {
        continueBtn.title = `เล่นต่อจาก: ${info.chapterName} (${info.formattedTime})`;
        if (infoSpan) {
          const chapLabel = info.chapterName ? info.chapterName.split(':')[0].trim() : `Chapter ${info.chapter || 1}`;
          infoSpan.innerHTML = `
            <div class="continue-meta-row">
              <span class="continue-meta-chap">${chapLabel} · ${info.sceneName || 'บันทึกเหตุการณ์'}</span>
              <span class="continue-meta-time">Play Time: ${info.formattedPlayTime || '00:00'}</span>
            </div>
          `;
        }
      }
    } else {
      continueBtn.classList.add('disabled');
      continueBtn.title = 'ไม่มีบันทึกข้อมูลเกม';
      if (infoSpan) {
        infoSpan.textContent = 'ไม่มีบันทึกข้อมูลในระบบ';
      }
    }

    // Title screen completed edition badge
    const badge = document.getElementById('title-completed-badge');
    if (badge) {
      let isCompleted = false;
      try {
        if (localStorage.getItem('arcana_completed_edition') === 'true') {
          isCompleted = true;
        }
      } catch (e) {}
      if (this.state?.storyFlags?.gameCompleted) isCompleted = true;
      if (isCompleted) {
        badge.classList.remove('hidden');
      }
    }
  }

  /**
   * Auto Save triggered by major events
   */
  autoSave(checkpointNote = '') {
    const res = SaveManager.saveGame(SAVE_SLOTS.AUTO, {
      ...this.state,
      playTime: this.playTimeSeconds
    });

    if (res.success) {
      this.showToast(`บันทึกอัตโนมัติสำเร็จ: ${checkpointNote}`);
      this.updateContinueButtonState();
    }
  }

  /**
   * Transition to Battle
   */
  triggerBattle(encounterData) {
    // Disallow manual save during battle; auto save checkpoint before battle begins
    this.autoSave('ก่อนเริ่มการต่อสู้กับหอคอย');

    this.showScreen('battle');
    this.battle.startBattle(encounterData);

    // Dramatic BATTLE START Transition (700-900ms punchy clash)
    const overlay = document.getElementById('battle-start-overlay');
    const enemyNameEl = document.getElementById('battle-start-enemy-name');
    if (overlay) {
      if (enemyNameEl) {
        const name = encounterData?.enemyName || this.battle.enemyName || 'ศัตรูแห่งหอคอย';
        enemyNameEl.textContent = `VS ${name}`;
      }
      overlay.classList.remove('hidden');
      void overlay.offsetWidth;
      overlay.classList.add('show');
      this.audio.playSFX('attack');

      let dismissed = false;
      const dismissBattleStart = () => {
        if (dismissed) return;
        dismissed = true;
        overlay.classList.remove('show');
        setTimeout(() => overlay.classList.add('hidden'), 250);
        overlay.removeEventListener('click', dismissBattleStart);
      };

      overlay.addEventListener('click', dismissBattleStart);
      setTimeout(dismissBattleStart, 900);
    }
  }

  /**
   * Programmatic startBattle for Visual Novel or external calls
   * Example: startBattle("training_dummy", "chapter1_sceneX")
   */
  startBattle(enemyId, returnSceneId) {
    const encounter = typeof enemyId === 'object' ? enemyId : {
      enemyId: enemyId || 'training_dummy',
      postVictoryScene: returnSceneId || 'scene_post_battle_victory'
    };
    this.triggerBattle(encounter);
  }

  /**
   * Programmatic returnToScene for Visual Novel
   */
  returnToScene(sceneId) {
    this.showScreen('vn');
    const vnScreen = document.getElementById('screen-vn');
    if (vnScreen) {
      vnScreen.classList.remove('scene-transition-fade');
      void vnScreen.offsetWidth;
      vnScreen.classList.add('scene-transition-fade');
    }
    this.dialogue.loadScene(sceneId || 'scene_classroom_morning', 0);
  }

  /**
   * Return from Battle to Visual Novel post victory
   */
  onBattleVictory(nextSceneId) {
    if (this.state) {
      const maxHP = (typeof this.state.playerMaxHP === 'number' && this.state.playerMaxHP > 0)
        ? this.state.playerMaxHP
        : 100;
      const maxStab = (typeof this.state.maxManaStability === 'number' && this.state.maxManaStability > 0)
        ? this.state.maxManaStability
        : 100;
      this.state.playerHP = maxHP;
      this.state.manaStability = maxStab;
    }
    this.showScreen('vn');
    const vnScreen = document.getElementById('screen-vn');
    if (vnScreen) {
      vnScreen.classList.remove('scene-transition-fade');
      void vnScreen.offsetWidth;
      vnScreen.classList.add('scene-transition-fade');
    }
    this.dialogue.loadScene(nextSceneId || 'scene_post_battle_victory', 0);
  }

  /**
   * Open Save or Load Modal
   */
  openSaveLoadModal(mode = 'save') {
    if (this.currentScreen === 'battle' && mode === 'save') {
      this.showToast('ไม่อนุญาตให้บันทึกเกมด้วยตนเองระหว่างการต่อสู้');
      return;
    }

    this.saveModalMode = mode;
    const modal = document.getElementById('modal-save-load');
    const titleEl = document.getElementById('modal-save-title');
    if (titleEl) {
      titleEl.textContent = mode === 'save' ? 'บันทึกข้อมูลเกม (SAVE GAME)' : 'โหลดข้อมูลเกม (LOAD GAME)';
    }

    this.renderSaveSlots();
    modal?.classList.remove('hidden');
  }

  renderSaveSlots() {
    const container = document.getElementById('save-slots-container');
    if (!container) return;
    container.innerHTML = '';

    const slots = [
      { id: SAVE_SLOTS.AUTO, label: 'AUTO SAVE (บันทึกอัตโนมัติ)', isAuto: true },
      { id: SAVE_SLOTS.SLOT_1, label: 'SAVE SLOT 1 (สล็อตบันทึก 1)', isAuto: false },
      { id: SAVE_SLOTS.SLOT_2, label: 'SAVE SLOT 2 (สล็อตบันทึก 2)', isAuto: false },
      { id: SAVE_SLOTS.SLOT_3, label: 'SAVE SLOT 3 (สล็อตบันทึก 3)', isAuto: false }
    ];

    slots.forEach((slot, index) => {
      const hasData = SaveManager.hasSave(slot.id);
      const info = SaveManager.getSlotInfo(slot.id);
      const isCorrupted = hasData && !info;
      const slotCard = document.createElement('div');
      slotCard.className = `save-slot-card ${info ? 'occupied' : isCorrupted ? 'corrupted' : 'empty'}`;

      let contentHtml = '';
      if (info) {
        contentHtml = `
          <div class="slot-info-col">
            <div class="slot-header">
              <span class="slot-badge ${slot.isAuto ? 'slot-auto' : 'slot-manual'}">
                ${slot.isAuto ? '⚡ AUTO SAVE' : `💾 SLOT ${index}`}
              </span>
              <span class="slot-time">🕒 ${info.formattedTime}</span>
            </div>
            <div class="slot-body">
              <div class="slot-chapter">${info.chapterName}</div>
              <div class="slot-scene">📍 ${info.sceneName}</div>
              <div class="slot-stats">
                <span>❤️ HP: ${info.playerHP}/100</span>
                <span>⚖️ เสถียรภาพ: ${info.manaStability}%</span>
                <span>⏱️ เวลาเล่น: ${info.formattedPlayTime}</span>
              </div>
            </div>
          </div>
        `;
      } else if (isCorrupted) {
        contentHtml = `
          <div class="slot-info-col">
            <div class="slot-header">
              <span class="slot-badge">${slot.label.split('(')[0].trim()}</span>
            </div>
            <div class="slot-corrupted-notice" style="color: #ef4444; padding: 0.5rem 0; font-size: 0.85rem;">
              ⚠️ ไม่สามารถโหลดข้อมูล Save นี้ได้ (ไฟล์บันทึกเสียหาย)
            </div>
          </div>
        `;
      } else {
        contentHtml = `
          <div class="slot-info-col">
            <div class="slot-header">
              <span class="slot-badge">${slot.isAuto ? '⚡ AUTO SAVE' : `💾 SLOT ${index}`}</span>
            </div>
            <div class="slot-empty-notice">-- ว่าง (ไม่มีข้อมูลบันทึกในช่องนี้) --</div>
          </div>
        `;
      }

      slotCard.innerHTML = contentHtml;

      // Slot action buttons
      const actionsDiv = document.createElement('div');
      actionsDiv.className = 'slot-actions';

      if (this.saveModalMode === 'save') {
        // Can save only into manual slots (1, 2, 3), not auto save slot
        if (!slot.isAuto) {
          const saveBtn = document.createElement('button');
          saveBtn.className = 'btn-slot-action btn-save';
          saveBtn.textContent = info || isCorrupted ? 'บันทึกทับ' : 'บันทึก';
          saveBtn.addEventListener('click', () => {
            this.audio.playConfirm();
            this.saveToSlot(slot.id);
          });
          actionsDiv.appendChild(saveBtn);
        }
      } else {
        // Load Mode
        if (info) {
          const loadBtn = document.createElement('button');
          loadBtn.className = 'btn-slot-action btn-load';
          loadBtn.textContent = 'โหลดเกม (LOAD)';
          loadBtn.addEventListener('click', () => {
            this.audio.playConfirm();
            this.loadFromSlot(slot.id);
          });
          actionsDiv.appendChild(loadBtn);
        } else if (isCorrupted) {
          const loadBtn = document.createElement('button');
          loadBtn.className = 'btn-slot-action btn-load opacity-60';
          loadBtn.textContent = 'โหลดเกม';
          loadBtn.addEventListener('click', () => {
            this.audio.playCancel();
            this.showToast('ไม่สามารถโหลดข้อมูล Save นี้ได้');
          });
          actionsDiv.appendChild(loadBtn);
        }
      }

      // Delete action for manual slots if occupied or corrupted
      if ((info || isCorrupted) && !slot.isAuto) {
        const delBtn = document.createElement('button');
        delBtn.className = 'btn-slot-action btn-delete';
        delBtn.innerHTML = '🗑️ ลบ';
        delBtn.title = 'ลบข้อมูลบันทึกในสล็อตนี้';
        delBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.audio.playCancel();
          const slotTitle = slot.label.split('(')[0].trim();
          if (confirm(`ยืนยันการลบข้อมูลบันทึก [${slotTitle}] หรือไม่?\n\nข้อมูลในสล็อตนี้จะถูกลบถาวรและไม่สามารถกู้คืนได้`)) {
            SaveManager.deleteSave(slot.id);
            this.renderSaveSlots();
            this.updateContinueButtonState();
            this.showToast(`ลบข้อมูลบันทึก ${slotTitle} เรียบร้อยแล้ว`);
          }
        });
        actionsDiv.appendChild(delBtn);
      }

      slotCard.appendChild(actionsDiv);
      container.appendChild(slotCard);
    });
  }

  saveToSlot(slotId) {
    const res = SaveManager.saveGame(slotId, {
      ...this.state,
      playTime: this.playTimeSeconds
    });

    if (res.success) {
      this.showToast('บันทึกข้อมูลเกมสำเร็จเรียบร้อย!');
      this.renderSaveSlots();
      this.updateContinueButtonState();
    } else {
      this.showToast(`เกิดข้อผิดพลาดในการบันทึก: ${res.error}`);
    }
  }

  loadFromSlot(slotId) {
    const res = SaveManager.loadGame(slotId);
    if (!res.success) {
      this.showToast('ไม่สามารถโหลดข้อมูล Save นี้ได้');
      this.renderSaveSlots();
      return;
    }

    const data = res.data;
    // Map legacy scene IDs if loaded from older prototype rounds
    let sceneToLoad = data.scene || 'ch1_sc1_morning';
    if (sceneToLoad === 'scene_classroom_morning') sceneToLoad = 'ch1_sc1_morning';
    if (sceneToLoad === 'scene_pre_battle') sceneToLoad = 'ch1_sc4_training_battle';
    if (sceneToLoad === 'scene_post_battle_victory') sceneToLoad = 'ch1_sc5_break';
    if (sceneToLoad === 'scene_prototype_complete') sceneToLoad = 'ch6_sc9_ending';

    // Restore Game State
    this.state = {
      ...this.getInitialState(),
      ...data,
      scene: sceneToLoad
    };
    this.playTimeSeconds = data.playTime || 0;

    this.closeModal('modal-save-load');
    this.showToast('โหลดข้อมูลเกมสำเร็จ!');

    // Resume VN scene or appropriate screen with isSaveLoad = true
    if (this.dialogue) {
      this.dialogue.stopAuto();
      this.dialogue.stopSkip();
    }
    this.showScreen('vn');
    this.dialogue.loadScene(this.state.scene, this.state.dialogueIndex, true);
  }

  openSettingsModal() {
    this.applySettingsToUI();
    document.getElementById('modal-settings')?.classList.remove('hidden');
  }

  applySettingsToUI() {
    const speedSelect = document.getElementById('setting-text-speed');
    const autoSpeedSelect = document.getElementById('setting-auto-speed');
    const skipReadToggle = document.getElementById('setting-skip-read-toggle');
    const muteToggle = document.getElementById('setting-mute-toggle');
    const masterSlider = document.getElementById('setting-volume-master');
    const musicSlider = document.getElementById('setting-volume-music');
    const sfxSlider = document.getElementById('setting-volume-sfx');
    const masterVal = document.getElementById('val-volume-master');
    const musicVal = document.getElementById('val-volume-music');
    const sfxVal = document.getElementById('val-volume-sfx');

    if (speedSelect) speedSelect.value = this.settings.textSpeed || 'normal';
    if (autoSpeedSelect) autoSpeedSelect.value = this.settings.autoSpeed || 2500;
    if (skipReadToggle) skipReadToggle.checked = this.settings.skipReadText !== false;
    if (muteToggle) muteToggle.checked = !!this.settings.isMuted;

    const master = this.settings.masterVolume !== undefined ? this.settings.masterVolume : 80;
    const music = this.settings.musicVolume !== undefined ? this.settings.musicVolume : 70;
    const sfx = this.settings.sfxVolume !== undefined ? this.settings.sfxVolume : 80;

    if (masterSlider) masterSlider.value = master;
    if (musicSlider) musicSlider.value = music;
    if (sfxSlider) sfxSlider.value = sfx;

    if (masterVal) masterVal.textContent = `${master}%`;
    if (musicVal) musicVal.textContent = `${music}%`;
    if (sfxVal) sfxVal.textContent = `${sfx}%`;
  }

  saveSettingsFromUI() {
    const speedSelect = document.getElementById('setting-text-speed');
    const autoSpeedSelect = document.getElementById('setting-auto-speed');
    const skipReadToggle = document.getElementById('setting-skip-read-toggle');
    const muteToggle = document.getElementById('setting-mute-toggle');
    const masterSlider = document.getElementById('setting-volume-master');
    const musicSlider = document.getElementById('setting-volume-music');
    const sfxSlider = document.getElementById('setting-volume-sfx');

    const master = masterSlider ? parseInt(masterSlider.value, 10) : 80;
    const music = musicSlider ? parseInt(musicSlider.value, 10) : 70;
    const sfx = sfxSlider ? parseInt(sfxSlider.value, 10) : 80;
    const isMuted = muteToggle ? muteToggle.checked : false;
    const skipRead = skipReadToggle ? skipReadToggle.checked : true;

    this.settings = {
      ...this.settings,
      textSpeed: speedSelect ? speedSelect.value : 'normal',
      autoSpeed: autoSpeedSelect ? parseInt(autoSpeedSelect.value, 10) : 2500,
      skipReadText: skipRead,
      soundEnabled: true,
      masterVolume: master,
      musicVolume: music,
      sfxVolume: sfx,
      isMuted: isMuted,
      soundVolume: master / 100
    };

    this.audio.isMuted = isMuted;
    this.audio.enabled = true;
    this.audio.setMasterVolume(master);
    this.audio.setMusicVolume(music);
    this.audio.setSFXVolume(sfx);

    SaveManager.saveSettings(this.settings);
    this.closeModal('modal-settings');
    this.showToast('บันทึกการตั้งค่าแล้ว');
  }

  /**
   * Character Relationships (ROUND 4)
   */
  increaseRelationship(characterId, amount) {
    const normId = normalizeCharacterId(characterId);
    if (!this.state.relationships) {
      this.state.relationships = { rina: 0, kai: 0, mika: 0, hayase: 0 };
    }
    const oldScore = this.state.relationships[normId] || 0;
    const newScore = Math.min(100, Math.max(0, oldScore + amount));
    this.state.relationships[normId] = newScore;

    // Sync legacy aliases
    if (this.state.characterRelationship) {
      if (normId === 'rina') this.state.characterRelationship.aoi = newScore;
      if (normId === 'kai') this.state.characterRelationship.daiki = newScore;
      if (normId === 'mika') this.state.characterRelationship.kuroki = newScore;
      if (normId === 'hayase') this.state.characterRelationship.shindou = newScore;
    }

    const char = CHARACTERS[normId];
    const nameStr = char ? char.name : normId;
    this.showToast(`✨ สายสัมพันธ์กับ ${nameStr} +${amount} (ปัจจุบัน: ${newScore}/100)`);

    // Check relationship card reward threshold >= 50
    this.checkRelationshipCardRewards(normId, oldScore, newScore);
  }

  decreaseRelationship(characterId, amount) {
    const normId = normalizeCharacterId(characterId);
    if (!this.state.relationships) {
      this.state.relationships = { rina: 0, kai: 0, mika: 0, hayase: 0 };
    }
    const oldScore = this.state.relationships[normId] || 0;
    const newScore = Math.max(0, oldScore - amount);
    this.state.relationships[normId] = newScore;

    // Sync legacy aliases
    if (this.state.characterRelationship) {
      if (normId === 'rina') this.state.characterRelationship.aoi = newScore;
      if (normId === 'kai') this.state.characterRelationship.daiki = newScore;
      if (normId === 'mika') this.state.characterRelationship.kuroki = newScore;
      if (normId === 'hayase') this.state.characterRelationship.shindou = newScore;
    }

    const char = CHARACTERS[normId];
    const nameStr = char ? char.name : normId;
    this.showToast(`สายสัมพันธ์กับ ${nameStr} -${amount} (ปัจจุบัน: ${newScore}/100)`);
  }

  checkRelationshipCardRewards(normId, oldScore, newScore) {
    if (oldScore < 50 && newScore >= 50) {
      if (normId === 'rina') {
        this.unlockStoryCard('flame_rush', 'Flame Rush (หมัดเพลิงประจัญบาน)');
      } else if (normId === 'kai') {
        this.unlockStoryCard('perfect_calculation', 'Perfect Calculation (การคำนวณสมบูรณ์แบบ)');
      } else if (normId === 'mika') {
        this.unlockStoryCard('tower_resonance', 'Tower Resonance (คลื่นสะท้อนหอคอย)');
      } else if (normId === 'hayase') {
        this.unlockStoryCard('emergency_barrier', 'Emergency Barrier (บาเรียฉุกเฉิน)');
      }
    }
  }

  unlockStoryCard(cardId, cardName) {
    if (!this.state.unlockedCards) {
      this.state.unlockedCards = [...INITIAL_UNLOCKED_CARD_IDS];
    }
    if (!this.state.unlockedCards.includes(cardId)) {
      this.state.unlockedCards.push(cardId);
      this.showToast(`🎴 ปลดล็อกการ์ดใหม่: [${cardName}] เรียบร้อยแล้ว! สามารถจัดเข้าสำรับได้ที่เมนู DECK`);
      this.audio.playVictory();
    }
  }

  openRelationshipsModal() {
    this.renderRelationshipsModal();
    document.getElementById('modal-relationships')?.classList.remove('hidden');
  }

  renderRelationshipsModal() {
    const container = document.getElementById('relationships-cards-container');
    if (!container) return;
    container.innerHTML = '';

    const list = [
      { id: 'rina', cardReward: 'flame_rush', cardName: 'Flame Rush (หมัดเพลิงประจัญบาน)', desc: 'เพื่อนร่วมชั้น / Internal Mage' },
      { id: 'kai', cardReward: 'perfect_calculation', cardName: 'Perfect Calculation (การคำนวณสมบูรณ์แบบ)', desc: 'เพื่อนร่วมชั้น / External Mage' },
      { id: 'mika', cardReward: 'tower_resonance', cardName: 'Tower Resonance (คลื่นสะท้อนหอคอย)', desc: 'นักวิจัยหอคอยโบราณ' },
      { id: 'hayase', cardReward: 'emergency_barrier', cardName: 'Emergency Barrier (บาเรียฉุกเฉิน)', desc: 'อาจารย์ผู้สอนวิชาเวทมนตร์' }
    ];

    let rels = { ...(this.state.relationships || { rina: 0, kai: 0, mika: 0, hayase: 0 }) };
    // If on title screen or saves exist, combine highest recorded relationships
    for (let i = 1; i <= 3; i++) {
      const slotData = SaveManager.loadGame(`slot_${i}`);
      if (slotData.success && slotData.data?.relationships) {
        Object.keys(slotData.data.relationships).forEach(k => {
          rels[k] = Math.max(rels[k] || 0, slotData.data.relationships[k] || 0);
        });
      }
    }
    const autoData = SaveManager.loadGame('auto');
    if (autoData.success && autoData.data?.relationships) {
      Object.keys(autoData.data.relationships).forEach(k => {
        rels[k] = Math.max(rels[k] || 0, autoData.data.relationships[k] || 0);
      });
    }

    list.forEach(item => {
      const char = CHARACTERS[item.id] || {};
      const score = rels[item.id] || 0;
      const stageText = getRelationshipStage(item.id, score);
      const isCardUnlocked = score >= 50;

      const cardEl = document.createElement('div');
      cardEl.className = 'bond-card';
      cardEl.style.setProperty('--char-accent', char.themeColor || '#38bdf8');

      cardEl.innerHTML = `
        <div class="bond-avatar">
          ${char.avatarSvg || ''}
        </div>
        <div class="bond-info">
          <div class="bond-header">
            <span class="bond-name">${char.name || item.id}</span>
            <span class="bond-stage-badge">${stageText}</span>
          </div>
          <div class="bond-role">${item.desc}</div>
          <div class="bond-progress-wrap">
            <div class="bond-progress-labels">
              <span>ระดับความผูกพัน</span>
              <strong>${score} / 100</strong>
            </div>
            <div class="bond-progress-bar-bg">
              <div class="bond-progress-bar-fill" style="width: ${Math.min(100, score)}%;"></div>
            </div>
          </div>
          <div class="bond-card-reward ${isCardUnlocked ? 'unlocked' : ''}">
            <span>${isCardUnlocked ? '✅' : '🔒'} การ์ดพิเศษ (ระดับ 50+):</span>
            <strong>${item.cardName}</strong>
          </div>
        </div>
      `;

      container.appendChild(cardEl);
    });
  }

  /**
   * Deck Management (ROUND 4)
   */
  openDeckModal() {
    if (this.currentScreen === 'battle') {
      this.showToast('ไม่อนุญาตให้ปรับเปลี่ยนสำรับการ์ดระหว่างการต่อสู้');
      return;
    }
    this.renderDeckModal();
    document.getElementById('modal-deck')?.classList.remove('hidden');
  }

  renderDeckModal() {
    const activeListEl = document.getElementById('active-deck-cards-list');
    const poolListEl = document.getElementById('unlocked-cards-pool-list');
    const counterEl = document.getElementById('deck-size-counter');
    const badgeEl = document.getElementById('active-deck-badge');

    if (!activeListEl || !poolListEl) return;

    if (!this.state.playerDeck) {
      this.state.playerDeck = [...INITIAL_STARTER_DECK_IDS];
    }
    if (!this.state.unlockedCards) {
      this.state.unlockedCards = [...INITIAL_UNLOCKED_CARD_IDS];
    }

    const currentDeck = this.state.playerDeck;
    const currentSize = currentDeck.length;

    if (counterEl) {
      counterEl.textContent = `${currentSize} / 20 ใบ`;
      counterEl.style.color = currentSize < 10 ? '#ef4444' : currentSize > 20 ? '#f59e0b' : '#38bdf8';
    }
    if (badgeEl) {
      badgeEl.textContent = `${currentSize} ใบ`;
    }

    // Group active deck by card ID
    const deckCounts = {};
    currentDeck.forEach(id => {
      deckCounts[id] = (deckCounts[id] || 0) + 1;
    });

    // Render Active Deck List
    activeListEl.innerHTML = '';
    const uniqueDeckIds = Object.keys(deckCounts);

    if (uniqueDeckIds.length === 0) {
      activeListEl.innerHTML = '<div class="empty-log-msg">สำรับยังไม่มีการ์ด (ต้องมีอย่างน้อย 10 ใบ)</div>';
    } else {
      uniqueDeckIds.forEach(cardId => {
        const cardData = getCardById(cardId) || { name: cardId, cost: 1, description: '', icon: '🎴' };
        const count = deckCounts[cardId];

        const itemDiv = document.createElement('div');
        itemDiv.className = 'deck-item-card';
        itemDiv.innerHTML = `
          <div class="deck-item-info">
            <div class="deck-item-header">
              <span class="deck-cost-badge">${cardData.cost ?? 1}</span>
              <span class="deck-item-name">${cardData.icon || '🎴'} ${cardData.name}</span>
            </div>
            <div class="deck-item-desc">${cardData.description || ''}</div>
          </div>
          <div class="deck-item-actions">
            <span class="deck-count-pill">×${count}</span>
            <button class="btn-card-ctrl btn-card-remove" title="นำออก 1 ใบ" ${currentSize <= 10 ? 'disabled' : ''}>-</button>
          </div>
        `;

        itemDiv.querySelector('.btn-card-remove')?.addEventListener('click', (e) => {
          e.stopPropagation();
          this.removeCardFromDeck(cardId);
        });

        activeListEl.appendChild(itemDiv);
      });
    }

    // Render Unlocked Cards Pool
    poolListEl.innerHTML = '';
    const unlockedIds = this.state.unlockedCards;

    unlockedIds.forEach(cardId => {
      const cardData = getCardById(cardId) || { name: cardId, cost: 1, description: '', icon: '🎴' };
      const currentInDeck = deckCounts[cardId] || 0;
      const canAdd = currentInDeck < 3 && currentSize < 20;

      const itemDiv = document.createElement('div');
      itemDiv.className = 'deck-item-card';
      itemDiv.innerHTML = `
        <div class="deck-item-info">
          <div class="deck-item-header">
            <span class="deck-cost-badge">${cardData.cost ?? 1}</span>
            <span class="deck-item-name">${cardData.icon || '🎴'} ${cardData.name}</span>
          </div>
          <div class="deck-item-desc">${cardData.description || ''}</div>
        </div>
        <div class="deck-item-actions">
          <span class="deck-count-pill" style="font-size: 0.72rem; color: #94a3b8;">(ในสำรับ ${currentInDeck}/3)</span>
          <button class="btn-card-ctrl btn-card-add" title="เพิ่มเข้าสำรับ" ${!canAdd ? 'disabled' : ''}>+ เพิ่ม</button>
        </div>
      `;

      itemDiv.querySelector('.btn-card-add')?.addEventListener('click', (e) => {
        e.stopPropagation();
        this.addCardToDeck(cardId);
      });

      poolListEl.appendChild(itemDiv);
    });
  }

  addCardToDeck(cardId) {
    if (!this.state.playerDeck) this.state.playerDeck = [...INITIAL_STARTER_DECK_IDS];
    const currentSize = this.state.playerDeck.length;

    if (currentSize >= 20) {
      this.showToast('สำรับมีขนาดสูงสุดแล้ว (20 ใบ)');
      return;
    }

    const currentCount = this.state.playerDeck.filter(id => id === cardId).length;
    if (currentCount >= 3) {
      this.showToast('ใส่การ์ดชนิดนี้ได้สูงสุด 3 ใบในหนึ่งสำรับ');
      return;
    }

    this.state.playerDeck.push(cardId);
    this.audio.playSelect();
    this.renderDeckModal();
  }

  removeCardFromDeck(cardId) {
    if (!this.state.playerDeck) this.state.playerDeck = [...INITIAL_STARTER_DECK_IDS];
    const currentSize = this.state.playerDeck.length;

    if (currentSize <= 10) {
      this.showToast('สำรับต้องมีอย่างน้อย 10 ใบ');
      return;
    }

    const idx = this.state.playerDeck.lastIndexOf(cardId);
    if (idx !== -1) {
      this.state.playerDeck.splice(idx, 1);
      this.audio.playSelect();
      this.renderDeckModal();
    }
  }

  openNameInputModal() {
    const modal = document.getElementById('modal-name-input');
    const input = document.getElementById('input-protagonist-name');
    if (modal && input) {
      input.value = 'นักเรียนใหม่';
      modal.classList.remove('hidden');
      setTimeout(() => input.focus(), 50);
    } else {
      this.startNewGame();
    }
  }

  /**
   * Card Collection Modal Presentation
   */
  openCardCollectionModal() {
    this.currentCollectionFilter = 'ALL';
    this.renderCardCollectionModal('ALL');
    document.getElementById('modal-card-collection')?.classList.remove('hidden');
  }

  renderCardCollectionModal(filter = null) {
    if (filter) this.currentCollectionFilter = filter;
    const activeFilter = this.currentCollectionFilter || 'ALL';

    const container = document.getElementById('collection-cards-grid');
    const unlockedCounter = document.getElementById('collection-unlocked-count');
    const totalCounter = document.getElementById('collection-total-count');
    if (!container) return;

    // Collect all unlocked cards: current state + check saved games if on title screen
    const unlockedSet = new Set(this.state.unlockedCards || INITIAL_UNLOCKED_CARD_IDS);
    INITIAL_STARTER_DECK_IDS.forEach(id => unlockedSet.add(id));

    // If player unlocked cards in any slot, combine for rich collection viewer
    for (let i = 1; i <= 3; i++) {
      const slotData = SaveManager.loadGame(`slot_${i}`);
      if (slotData.success && slotData.data?.unlockedCards) {
        slotData.data.unlockedCards.forEach(id => unlockedSet.add(id));
      }
    }
    const autoData = SaveManager.loadGame('auto');
    if (autoData.success && autoData.data?.unlockedCards) {
      autoData.data.unlockedCards.forEach(id => unlockedSet.add(id));
    }

    const allCards = CARD_DATABASE;
    if (totalCounter) totalCounter.textContent = allCards.length;
    if (unlockedCounter) unlockedCounter.textContent = unlockedSet.size;

    // Update filter button active states
    document.querySelectorAll('.col-filter-btn').forEach(btn => {
      if (btn.getAttribute('data-filter') === activeFilter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Filter cards
    const filteredCards = allCards.filter(card => {
      if (activeFilter === 'ALL') return true;
      if (activeFilter === 'Special') return card.type === 'Special' || card.type === 'Ultimate';
      return card.type === activeFilter;
    });

    container.innerHTML = '';
    filteredCards.forEach(card => {
      const isUnlocked = unlockedSet.has(card.id);
      const artSvg = getCardArtSvg(card.id);

      const cardEl = document.createElement('div');
      cardEl.className = `collection-card-item ${isUnlocked ? 'unlocked' : 'locked'}`;
      cardEl.style.setProperty('--card-color', card.color || '#38bdf8');

      let artHtml = '';
      if (artSvg) {
        artHtml = `<div class="col-card-art">${artSvg}</div>`;
      } else {
        artHtml = `<div class="col-card-art"><span class="col-card-icon-fallback">${card.icon || '🎴'}</span></div>`;
      }

      cardEl.innerHTML = `
        <div class="col-card-cost">${card.cost ?? 1}</div>
        <div class="col-card-type">${card.type}</div>
        ${artHtml}
        <div class="col-card-name">${card.name}</div>
        <div class="col-card-desc">${card.description || ''}</div>
        ${card.flavor ? `<div class="col-card-flavor">“${card.flavor}”</div>` : ''}
        ${!isUnlocked ? `
          <div class="col-card-lock-badge">
            <span class="col-card-lock-icon">🔒</span>
            <span class="col-card-lock-text">ยังไม่ปลดล็อก<br/>(เล่นเนื้อเรื่องหรือเพิ่มสายสัมพันธ์)</span>
          </div>
        ` : ''}
      `;

      container.appendChild(cardEl);
    });
  }

  /**
   * Initialize Cinematic Main Menu Visuals & Interactivity
   */
  initTitleScreen() {
    // 1. Setup full screen background image via assetLoader
    const bgContainer = document.getElementById('title-bg-image');
    if (bgContainer) {
      const bgData = assetLoader.getBackground('tower_exterior');
      if (bgData?.imageUrl) {
        const testImg = new Image();
        testImg.referrerPolicy = 'no-referrer';
        testImg.onload = () => {
          bgContainer.style.backgroundImage = `url("${bgData.imageUrl}")`;
        };
        testImg.onerror = () => {
          if (bgData.fallbackSvg) {
            bgContainer.innerHTML = bgData.fallbackSvg;
          }
        };
        testImg.src = bgData.imageUrl;
      } else if (bgData?.fallbackSvg) {
        bgContainer.innerHTML = bgData.fallbackSvg;
      }
    }

    // 2. Setup character portrait showcase via assetLoader
    const charImg = document.getElementById('title-char-img');
    if (charImg) {
      const charData = assetLoader.getCharacterPortrait('rina', 'normal');
      if (charData?.imageUrl) {
        charImg.onerror = () => {
          // If image fails, fallback to procedural SVG seamlessly
          const charBox = document.getElementById('title-character-box');
          if (charBox && CHARACTERS.rina?.avatarSvg) {
            charImg.style.display = 'none';
            const svgDiv = document.createElement('div');
            svgDiv.className = 'title-character-svg-fallback';
            svgDiv.innerHTML = CHARACTERS.rina.avatarSvg;
            charBox.insertBefore(svgDiv, charBox.firstChild);
          }
        };
        charImg.src = charData.imageUrl;
      }
    }

    // 3. Audio hover effects on all title buttons
    document.querySelectorAll('.btn-vn-menu').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        if (!btn.disabled && !btn.classList.contains('disabled')) {
          this.audio.playSelect();
        }
      });
    });
  }

  /**
   * Credits Screen Presentation
   */
  openCreditsModal() {
    document.getElementById('modal-credits')?.classList.remove('hidden');
  }

  closeModal(modalId) {
    document.getElementById(modalId)?.classList.add('hidden');
  }

  showToast(message) {
    const toast = document.getElementById('game-toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('hidden');
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.classList.add('hidden'), 300);
    }, 2800);
  }
}

// Instantiate and start game when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  window.arcanaGame = new Game();
  window.startBattle = (enemyId, returnSceneId) => window.arcanaGame.startBattle(enemyId, returnSceneId);
  window.returnToScene = (sceneId) => window.arcanaGame.returnToScene(sceneId);
});
