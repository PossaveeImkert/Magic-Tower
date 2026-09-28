/**
 * ARCANA: THE TOWER - Lightweight Audio & Atmosphere Engine
 * Web Audio Procedural Synthesizer + Sound Effect & Music Manager
 * Zero external asset dependencies, 100% offline, zero quota, gracefully handles autoplay & missing files
 */

import { AUDIO_PATHS, BGM_CATEGORIES } from './audioAssets.js';

export const MUSIC_CATEGORIES = {
  academy: {
    id: 'academy',
    name: 'Academy Hallways - Morning Sun',
    description: 'Calm, nostalgic magical academy atmosphere',
    bpm: 80,
    rootFreqs: [261.63, 293.66, 329.63, 392.00, 440.00], // C4, D4, E4, G4, A4 (Pentatonic)
    chords: [
      [261.63, 329.63, 392.00], // C Maj
      [220.00, 261.63, 329.63], // A Min
      [174.61, 220.00, 261.63], // F Maj
      [196.00, 246.94, 293.66]  // G Maj
    ],
    wave: 'triangle',
    filterFreq: 1100,
    interval: 1800
  },
  city: {
    id: 'city',
    name: 'Shinjuku 1999 - Neon & Cables',
    description: 'Modern Japanese late 90s city atmosphere',
    bpm: 92,
    rootFreqs: [220.00, 261.63, 329.63, 349.23, 392.00],
    chords: [
      [220.00, 261.63, 329.63], // A Min
      [174.61, 220.00, 261.63], // F Maj
      [196.00, 246.94, 293.66], // G Maj
      [164.81, 196.00, 246.94]  // E Min
    ],
    wave: 'sine',
    filterFreq: 900,
    interval: 1500
  },
  mystery: {
    id: 'mystery',
    name: 'Forbidden Archive - Arcane Resonance',
    description: 'Subtle mysterious ancient archive atmosphere',
    bpm: 68,
    rootFreqs: [220.00, 246.94, 261.63, 311.13, 329.63], // A, B, C, D#, E
    chords: [
      [220.00, 261.63, 311.13], // A Dim
      [196.00, 246.94, 293.66], // G
      [174.61, 220.00, 261.63], // F
      [164.81, 207.65, 246.94]  // E Maj
    ],
    wave: 'sine',
    filterFreq: 750,
    interval: 2200
  },
  tower: {
    id: 'tower',
    name: 'The Monolith - Obsidian Depths',
    description: 'Ancient magical tower atmosphere',
    bpm: 72,
    rootFreqs: [146.83, 174.61, 220.00, 261.63, 293.66], // D, F, A, C, D
    chords: [
      [146.83, 174.61, 220.00], // D Min
      [130.81, 164.81, 196.00], // C Maj
      [116.54, 146.83, 174.61], // Bb Maj
      [110.00, 146.83, 164.81]  // A Sus
    ],
    wave: 'triangle',
    filterFreq: 650,
    interval: 2400
  },
  battle: {
    id: 'battle',
    name: 'Tactical Clash - Card Battle',
    description: 'Driving magical card battle theme',
    bpm: 124,
    rootFreqs: [164.81, 196.00, 220.00, 246.94, 329.63], // E minor pentatonic
    chords: [
      [164.81, 196.00, 246.94], // E Min
      [130.81, 164.81, 196.00], // C Maj
      [146.83, 174.61, 220.00], // D Min
      [123.47, 164.81, 196.00]  // B Min
    ],
    wave: 'sawtooth',
    filterFreq: 1400,
    interval: 650
  },
  boss: {
    id: 'boss',
    name: 'Gatekeeper Awakening - Boss Theme',
    description: 'Urgent intense boss battle theme',
    bpm: 136,
    rootFreqs: [130.81, 155.56, 174.61, 196.00, 233.08], // C minor / Dorian
    chords: [
      [130.81, 155.56, 196.00], // C Min
      [116.54, 146.83, 174.61], // Bb Maj
      [103.83, 130.81, 155.56], // Ab Maj
      [98.00, 130.81, 146.83]   // G Sus
    ],
    wave: 'sawtooth',
    filterFreq: 1600,
    interval: 520
  },
  finalBattle: {
    id: 'finalBattle',
    name: 'Critical Singularity - Final Boss Theme',
    description: 'Epic apocalyptic final tower core battle',
    bpm: 146,
    rootFreqs: [146.83, 174.61, 220.00, 246.94, 293.66, 349.23],
    chords: [
      [146.83, 174.61, 220.00], // D Min
      [116.54, 146.83, 174.61], // Bb Maj
      [130.81, 164.81, 196.00], // C Maj
      [110.00, 138.59, 164.81]  // A Maj
    ],
    wave: 'sawtooth',
    filterFreq: 1800,
    interval: 420
  },
  ending: {
    id: 'ending',
    name: 'Beyond The Monolith - Dawn of Arcana',
    description: 'Peaceful emotional visual novel conclusion',
    bpm: 76,
    rootFreqs: [261.63, 293.66, 329.63, 392.00, 523.25], // C Maj
    chords: [
      [261.63, 329.63, 392.00], // C Maj
      [174.61, 220.00, 261.63], // F Maj
      [220.00, 261.63, 329.63], // A Min
      [196.00, 246.94, 293.66]  // G Maj
    ],
    wave: 'triangle',
    filterFreq: 1200,
    interval: 2000
  }
};

export class AudioManager {
  constructor() {
    this.ctx = null;
    this.masterGainNode = null;
    this.musicGainNode = null;
    this.sfxGainNode = null;

    // Volume levels (0.0 to 1.0)
    this.masterVolume = 0.8;
    this.musicVolume = 0.7;
    this.sfxVolume = 0.8;
    this.isMuted = false;
    this.enabled = true;

    // State tracking
    this.currentMusicId = null;
    this.previousMusicId = null;
    this.lastVnMusicId = 'academy';
    this.pendingMusicId = null;
    this.musicLoopTimer = null;
    this.musicStep = 0;
    this.activeMusicVoices = [];
    this.unlocked = false;

    // Optional HTML5 audio object cache if external files are provided
    this.audioElementCache = new Map();

    // Bind browser unlock listeners on first user interaction
    this.setupAutoplayUnlock();
  }

  /**
   * Unlock Web Audio on first user interaction without errors
   */
  setupAutoplayUnlock() {
    const unlockHandler = () => {
      this.ensureContext();
      if (this.ctx && this.ctx.state === 'running') {
        this.unlocked = true;
        if (this.pendingMusicId) {
          const track = this.pendingMusicId;
          this.pendingMusicId = null;
          this.playMusic(track);
        }
      }
      window.removeEventListener('pointerdown', unlockHandler);
      window.removeEventListener('keydown', unlockHandler);
      window.removeEventListener('click', unlockHandler);
    };

    window.addEventListener('pointerdown', unlockHandler, { passive: true });
    window.addEventListener('keydown', unlockHandler, { passive: true });
    window.addEventListener('click', unlockHandler, { passive: true });
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.setupAudioGraph();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  setupAudioGraph() {
    if (!this.ctx) return;
    try {
      this.masterGainNode = this.ctx.createGain();
      this.musicGainNode = this.ctx.createGain();
      this.sfxGainNode = this.ctx.createGain();

      this.musicGainNode.connect(this.masterGainNode);
      this.sfxGainNode.connect(this.masterGainNode);
      this.masterGainNode.connect(this.ctx.destination);

      this.applyGains();
    } catch (e) {
      console.warn('Audio graph initialization failed:', e);
    }
  }

  applyGains() {
    if (!this.ctx || !this.masterGainNode) return;
    const now = this.ctx.currentTime;
    const effectiveMaster = (this.isMuted || !this.enabled) ? 0 : this.masterVolume;
    const effectiveMusic = this.musicVolume;
    const effectiveSfx = this.sfxVolume;

    this.masterGainNode.gain.setTargetAtTime(effectiveMaster, now, 0.05);
    this.musicGainNode.gain.setTargetAtTime(effectiveMusic, now, 0.05);
    this.sfxGainNode.gain.setTargetAtTime(effectiveSfx, now, 0.05);
  }

  // =========================================================================
  // VOLUME & MUTE CONTROLS
  // =========================================================================

  setMasterVolume(val) {
    let num = Number(val) || 0;
    if (num > 0 && num <= 1.0) num = num * 100;
    const v = Math.max(0, Math.min(100, num));
    this.masterVolume = v / 100;
    this.applyGains();
  }

  setMusicVolume(val) {
    let num = Number(val) || 0;
    if (num > 0 && num <= 1.0) num = num * 100;
    const v = Math.max(0, Math.min(100, num));
    this.musicVolume = v / 100;
    this.applyGains();
  }

  setSFXVolume(val) {
    let num = Number(val) || 0;
    if (num > 0 && num <= 1.0) num = num * 100;
    const v = Math.max(0, Math.min(100, num));
    this.sfxVolume = v / 100;
    this.applyGains();
  }

  muteAll() {
    this.isMuted = true;
    this.applyGains();
  }

  unmuteAll() {
    this.isMuted = false;
    this.applyGains();
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    this.applyGains();
    return this.isMuted;
  }

  // Legacy volume / enabled property setters for backward compatibility
  set volume(v) {
    this.setMasterVolume(Math.round(v * 100));
  }

  get volume() {
    return this.masterVolume;
  }

  // =========================================================================
  // MUSIC SYSTEM
  // =========================================================================

  /**
   * Play background music category. If already playing, do nothing.
   */
  playMusic(id) {
    if (!id) return;
    if (this.currentMusicId === id) return; // Keep playing seamless

    this.ensureContext();
    if (!this.ctx || this.ctx.state === 'suspended') {
      this.pendingMusicId = id;
      return;
    }

    this.fadeMusic(id, 600);
  }

  /**
   * Fade smoothly into new music track (approx 300 - 1000ms)
   */
  fadeMusic(id, fadeDurationMs = 500) {
    if (!id) return;
    if (this.currentMusicId === id) return;

    this.ensureContext();
    if (!this.ctx || !MUSIC_CATEGORIES[id]) {
      this.currentMusicId = id;
      return;
    }

    const durationSec = Math.max(0.1, fadeDurationMs / 1000);
    const now = this.ctx.currentTime;

    // Fade out current music
    if (this.musicGainNode) {
      this.musicGainNode.gain.cancelScheduledValues(now);
      this.musicGainNode.gain.setValueAtTime(this.musicGainNode.gain.value, now);
      this.musicGainNode.gain.linearRampToValueAtTime(0.001, now + durationSec);
    }

    setTimeout(() => {
      this.stopMusicSynthesizer();
      this.previousMusicId = this.currentMusicId;
      this.currentMusicId = id;

      // Track last VN music when not entering battle tracks
      if (id !== 'battle' && id !== 'boss' && id !== 'finalBattle') {
        this.lastVnMusicId = id;
      }

      this.startMusicSynthesizer(id);

      // Fade in new music
      if (this.musicGainNode && this.ctx) {
        const inNow = this.ctx.currentTime;
        this.musicGainNode.gain.cancelScheduledValues(inNow);
        this.musicGainNode.gain.setValueAtTime(0.001, inNow);
        this.musicGainNode.gain.linearRampToValueAtTime(this.musicVolume, inNow + durationSec);
      }
    }, fadeDurationMs);
  }

  /**
   * Restore previous Visual Novel background music after battle
   */
  restoreVnMusic(fallbackCategory = 'academy') {
    const target = this.lastVnMusicId || fallbackCategory || 'academy';
    this.fadeMusic(target, 600);
  }

  /**
   * Stop currently playing background music
   */
  stopMusic(fadeDurationMs = 400) {
    if (!this.currentMusicId) return;

    if (!this.ctx || !this.musicGainNode) {
      this.stopMusicSynthesizer();
      this.currentMusicId = null;
      return;
    }

    const durationSec = Math.max(0.05, fadeDurationMs / 1000);
    const now = this.ctx.currentTime;
    this.musicGainNode.gain.cancelScheduledValues(now);
    this.musicGainNode.gain.setValueAtTime(this.musicGainNode.gain.value, now);
    this.musicGainNode.gain.linearRampToValueAtTime(0.001, now + durationSec);

    setTimeout(() => {
      this.stopMusicSynthesizer();
      this.currentMusicId = null;
    }, fadeDurationMs);
  }

  /**
   * Procedural Atmospheric Music Synthesizer
   */
  startMusicSynthesizer(id) {
    const config = MUSIC_CATEGORIES[id];
    if (!config || !this.ctx) return;

    this.musicStep = 0;
    const playChordStep = () => {
      if (this.currentMusicId !== id) return;
      if (!this.ctx || this.ctx.state !== 'running') return;

      try {
        // Prune finished voices to prevent memory leakage
        const curTime = this.ctx.currentTime;
        this.activeMusicVoices = this.activeMusicVoices.filter(v => v.endTime > curTime);

        const chordIndex = this.musicStep % config.chords.length;
        const chord = config.chords[chordIndex];
        const chordStartTime = this.ctx.currentTime;
        const stepDuration = config.interval / 1000;

        // Filtered warmth
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(config.filterFreq, chordStartTime);
        filter.connect(this.musicGainNode);

        // Play harmonic chord tones
        chord.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = config.wave || 'triangle';
          osc.frequency.setValueAtTime(freq, chordStartTime);

          // Subtle arpeggio delay for battle / mystery
          const noteStart = (id === 'battle' || id === 'boss' || id === 'finalBattle')
            ? chordStartTime + idx * 0.08
            : chordStartTime;

          const baseVolume = (id === 'battle' || id === 'boss' || id === 'finalBattle') ? 0.07 : 0.05;
          gain.gain.setValueAtTime(0.001, noteStart);
          gain.gain.linearRampToValueAtTime(baseVolume, noteStart + 0.15);
          gain.gain.exponentialRampToValueAtTime(0.001, noteStart + stepDuration * 1.1);

          osc.connect(gain);
          gain.connect(filter);

          osc.start(noteStart);
          osc.stop(noteStart + stepDuration * 1.2);
          this.activeMusicVoices.push({ osc, gain, endTime: noteStart + stepDuration * 1.2 });
        });

        // Add subtle high melody ping on alternate steps
        if (this.musicStep % 2 === 0 && config.rootFreqs) {
          const melodyFreq = config.rootFreqs[(this.musicStep * 2) % config.rootFreqs.length] * 2;
          const oscM = this.ctx.createOscillator();
          const gainM = this.ctx.createGain();
          oscM.type = 'sine';
          oscM.frequency.setValueAtTime(melodyFreq, chordStartTime + 0.3);

          gainM.gain.setValueAtTime(0.001, chordStartTime + 0.3);
          gainM.gain.linearRampToValueAtTime(0.03, chordStartTime + 0.4);
          gainM.gain.exponentialRampToValueAtTime(0.001, chordStartTime + 1.2);

          oscM.connect(gainM);
          gainM.connect(filter);
          oscM.start(chordStartTime + 0.3);
          oscM.stop(chordStartTime + 1.3);
          this.activeMusicVoices.push({ osc: oscM, gain: gainM, endTime: chordStartTime + 1.3 });
        }

        this.musicStep++;
      } catch (err) {
        console.warn('Music synth step err:', err);
      }
    };

    // Play first chord immediately
    playChordStep();

    // Loop interval
    if (this.musicLoopTimer) clearInterval(this.musicLoopTimer);
    this.musicLoopTimer = setInterval(playChordStep, config.interval);
  }

  stopMusicSynthesizer() {
    if (this.musicLoopTimer) {
      clearInterval(this.musicLoopTimer);
      this.musicLoopTimer = null;
    }
    this.activeMusicVoices.forEach(voice => {
      try {
        voice.osc.stop();
        voice.osc.disconnect();
      } catch {}
    });
    this.activeMusicVoices = [];
  }

  // =========================================================================
  // SOUND EFFECTS (SFX) SYSTEM
  // =========================================================================

  playSFX(sfxId) {
    if (!this.enabled || this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    switch (sfxId) {
      case 'click':
      case 'select':
      case 'choice_select':
        this.playSelect();
        break;
      case 'confirm':
      case 'choice_confirm':
        this.playConfirm();
        break;
      case 'cancel':
      case 'close':
        this.playCancel();
        break;
      case 'card_select':
        this.playCardSelect();
        break;
      case 'card_play':
        this.playCardPlay('Spell');
        break;
      case 'card_draw':
      case 'draw':
        this.playDraw();
        break;
      case 'damage':
        this.playDamage(false);
        break;
      case 'critical':
        this.playDamage(true);
        break;
      case 'shield':
        this.playShield();
        break;
      case 'heal':
        this.playHeal();
        break;
      case 'victory':
        this.playVictory();
        break;
      case 'defeat':
        this.playDefeat();
        break;
      case 'menu_open':
        this.playUISFX('menu_open');
        break;
      case 'menu_close':
        this.playUISFX('menu_close');
        break;
      case 'fire':
      case 'wind':
      case 'ice':
      case 'light':
      case 'dark':
      case 'neutral':
        this.playMagicSFX(sfxId);
        break;
      default:
        this.playSelect();
    }
  }

  playBlip() {
    if (!this.enabled || this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(540, now);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.sfxGainNode || this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.04);
    } catch {}
  }

  playSelect() {
    if (!this.enabled || this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(480, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.07);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

      osc.connect(gain);
      gain.connect(this.sfxGainNode || this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.07);
    } catch {}
  }

  playCardSelect() {
    if (!this.enabled || this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(650, now);
      osc.frequency.exponentialRampToValueAtTime(820, now + 0.04);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.sfxGainNode || this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.04);
    } catch {}
  }

  playConfirm() {
    if (!this.enabled || this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      [523.25, 783.99].forEach((f, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now + idx * 0.06);

        gain.gain.setValueAtTime(0.1, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.1);

        osc.connect(gain);
        gain.connect(this.sfxGainNode || this.ctx.destination);
        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.1);
      });
    } catch {}
  }

  playCancel() {
    if (!this.enabled || this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(380, now);
      osc.frequency.exponentialRampToValueAtTime(240, now + 0.09);

      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      osc.connect(gain);
      gain.connect(this.sfxGainNode || this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
    } catch {}
  }

  playDraw() {
    if (!this.enabled || this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(640, now + 0.08);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.sfxGainNode || this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    } catch {}
  }

  playShuffle() {
    this.playDraw();
  }

  /**
   * Card sound effects by card type:
   * Attack: short magical impact
   * Defense: shield sound
   * Spell: magical casting sound
   * Technique: quick movement / activation sound
   * Special: strong magical sound
   */
  playCardPlay(cardType) {
    if (!this.enabled || this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      if (cardType === 'Attack') {
        // Short magical impact: fast low pitch sweep
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(240, now);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.14);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
        osc.connect(gain);
        gain.connect(this.sfxGainNode || this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.15);
      } else if (cardType === 'Defense') {
        // Shield sound: resonant rise
        osc.type = 'sine';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.linearRampToValueAtTime(420, now + 0.16);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        osc.connect(gain);
        gain.connect(this.sfxGainNode || this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.18);
      } else if (cardType === 'Technique') {
        // Quick movement / activation: snappy high sweep
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(740, now + 0.12);
        gain.gain.setValueAtTime(0.13, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.connect(gain);
        gain.connect(this.sfxGainNode || this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.13);
      } else if (cardType === 'Ultimate' || cardType === 'Special') {
        // Strong magical sound: multi-tone flare
        [160, 320, 640].forEach((freq, i) => {
          const o = this.ctx.createOscillator();
          const g = this.ctx.createGain();
          o.type = 'sawtooth';
          o.frequency.setValueAtTime(freq, now + i * 0.04);
          o.frequency.exponentialRampToValueAtTime(freq * 1.5, now + 0.24);
          g.gain.setValueAtTime(0.08, now + i * 0.04);
          g.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
          o.connect(g);
          g.connect(this.sfxGainNode || this.ctx.destination);
          o.start(now + i * 0.04);
          o.stop(now + 0.28);
        });
      } else {
        // Spell / Support: magical casting chime
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(920, now + 0.2);
        gain.gain.setValueAtTime(0.14, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.connect(gain);
        gain.connect(this.sfxGainNode || this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.22);
      }
    } catch {}
  }

  playCardSFX(cardType) {
    this.playCardPlay(cardType);
  }

  /**
   * Magic sound effects (Fire, Wind, Ice, Light, Dark, Neutral)
   */
  playMagicSFX(magicType = 'neutral') {
    if (!this.enabled || this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      if (magicType === 'fire') {
        // Crackling burn
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(190, now);
        osc.frequency.exponentialRampToValueAtTime(65, now + 0.2);
        gain.gain.setValueAtTime(0.16, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      } else if (magicType === 'wind' || magicType === 'slash') {
        // Swift whoosh
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(750, now);
        osc.frequency.exponentialRampToValueAtTime(180, now + 0.18);
        gain.gain.setValueAtTime(0.14, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      } else if (magicType === 'ice') {
        // Crisp crystal chime
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.linearRampToValueAtTime(1320, now + 0.15);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      } else if (magicType === 'light') {
        // Bright shimmer
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, now);
        osc.frequency.exponentialRampToValueAtTime(1174.66, now + 0.22);
        gain.gain.setValueAtTime(0.13, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      } else if (magicType === 'dark') {
        // Ominous deep drone
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(110, now);
        osc.frequency.exponentialRampToValueAtTime(45, now + 0.24);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      } else if (magicType === 'shield') {
        // Shield resonance
        osc.type = 'sine';
        osc.frequency.setValueAtTime(280, now);
        osc.frequency.linearRampToValueAtTime(480, now + 0.2);
        gain.gain.setValueAtTime(0.14, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      } else {
        // Neutral magic / Arcane
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.2);
        gain.gain.setValueAtTime(0.14, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      }

      osc.connect(gain);
      gain.connect(this.sfxGainNode || this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    } catch {}
  }

  playDamage(isCritical = false) {
    if (!this.enabled || this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = isCritical ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(isCritical ? 180 : 120, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + (isCritical ? 0.22 : 0.14));

      gain.gain.setValueAtTime(isCritical ? 0.22 : 0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + (isCritical ? 0.25 : 0.16));

      osc.connect(gain);
      gain.connect(this.sfxGainNode || this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    } catch {}
  }

  playShield() {
    if (!this.enabled || this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.linearRampToValueAtTime(440, now + 0.15);

      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(this.sfxGainNode || this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    } catch {}
  }

  playHeal() {
    if (!this.enabled || this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      [392.00, 523.25, 659.25].forEach((f, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now + idx * 0.08);

        gain.gain.setValueAtTime(0.1, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.2);

        osc.connect(gain);
        gain.connect(this.sfxGainNode || this.ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.22);
      });
    } catch {}
  }

  playEnemyAttack() {
    if (!this.enabled || this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(50, now + 0.22);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.sfxGainNode || this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    } catch {}
  }

  playVictory() {
    if (!this.enabled || this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.09);
        gain.gain.setValueAtTime(0.14, now + idx * 0.09);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.09 + 0.35);

        osc.connect(gain);
        gain.connect(this.sfxGainNode || this.ctx.destination);
        osc.start(now + idx * 0.09);
        osc.stop(now + idx * 0.09 + 0.35);
      });
    } catch {}
  }

  playDefeat() {
    if (!this.enabled || this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const notes = [400, 360, 320, 240];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now + idx * 0.14);
        gain.gain.setValueAtTime(0.12, now + idx * 0.14);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.14 + 0.35);

        osc.connect(gain);
        gain.connect(this.sfxGainNode || this.ctx.destination);
        osc.start(now + idx * 0.14);
        osc.stop(now + idx * 0.14 + 0.35);
      });
    } catch {}
  }

  playUISFX(action = 'click') {
    if (action === 'confirm' || action === 'confirm_choice') {
      this.playConfirm();
    } else if (action === 'cancel' || action === 'close' || action === 'menu_close') {
      this.playCancel();
    } else if (action === 'menu_open') {
      this.playSelect();
    } else {
      this.playSelect();
    }
  }
}

export const audioManager = new AudioManager();

