/**
 * ARCANA: THE TOWER - Card Database & Logic (ROUND 2)
 * Card Types: Attack, Spell, Defense, Support, Technique, Ultimate
 * Targets: Enemy, Self
 */

export const CARD_TYPES = {
  ATTACK: 'Attack',
  SPELL: 'Spell',
  DEFENSE: 'Defense',
  SUPPORT: 'Support',
  TECHNIQUE: 'Technique',
  ULTIMATE: 'Ultimate'
};

export const CARD_TARGETS = {
  ENEMY: 'Enemy',
  SELF: 'Self'
};

export const CARD_DATABASE = [
  // 1. Basic Strike
  {
    id: 'basic_strike',
    name: 'Basic Strike (ฟาดฟันพื้นฐาน)',
    type: CARD_TYPES.ATTACK,
    cost: 1,
    damage: 8,
    shield: 0,
    target: CARD_TARGETS.ENEMY,
    stabilityChange: 0,
    description: 'รวบรวมมานาฟาดฟันใส่ศัตรู สร้างความเสียหาย 8 หน่วย',
    flavor: 'เพลงดาบพื้นฐานที่ผสานพลังเวทมนตร์ภายในร่างกาย',
    icon: '⚔️',
    color: '#ef4444',
    effect: (battle, card) => {
      const dmg = battle.calculatePlayerDamage(card.damage, 'attack');
      battle.damageEnemy(dmg);
      battle.log(`ผู้เล่นใช้ [Basic Strike] สร้างความเสียหาย ${dmg} หน่วย!`);
    }
  },

  // 2. Heavy Strike
  {
    id: 'heavy_strike',
    name: 'Heavy Strike (ฟาดฟันหนักหน่วง)',
    type: CARD_TYPES.ATTACK,
    cost: 2,
    damage: 16,
    shield: 0,
    target: CARD_TARGETS.ENEMY,
    stabilityChange: 0,
    description: 'รวบรวมพลังเวทฟาดฟันอย่างรุนแรง สร้างความเสียหาย 16 หน่วย',
    flavor: 'การบีบอัดมานาลงในปลายคมดาบ ปลดปล่อยแรงกระแทกมหาศาล',
    icon: '💥',
    color: '#dc2626',
    effect: (battle, card) => {
      const dmg = battle.calculatePlayerDamage(card.damage, 'attack');
      battle.damageEnemy(dmg);
      battle.log(`ผู้เล่นใช้ [Heavy Strike] ฟาดฟันรุนแรง สร้างความเสียหาย ${dmg} หน่วย!`);
    }
  },

  // 3. Fire Bolt
  {
    id: 'fire_bolt',
    name: 'Fire Bolt (กระสุนเพลิง)',
    type: CARD_TYPES.SPELL,
    cost: 1,
    damage: 12,
    shield: 0,
    target: CARD_TARGETS.ENEMY,
    stabilityChange: -5,
    description: 'ยิงเปลวเพลิงบริสุทธิ์ สร้างความเสียหาย 12 หน่วย และทำให้ศัตรูติดสถานะ Burn 1 (เสถียรภาพ -5%)',
    flavor: 'คาถาไฟที่แผดเผาอย่างต่อเนื่อง สร้างความร้อนหลอมละลายเกราะ',
    icon: '🔥',
    color: '#f97316',
    effect: (battle, card) => {
      const dmg = battle.calculatePlayerDamage(card.damage, 'spell');
      battle.damageEnemy(dmg);
      battle.applyStatus('enemy', 'burn', 1);
      battle.modifyStability(-5);
      battle.log(`ผู้เล่นร่าย [Fire Bolt] เผาศัตรู ${dmg} หน่วย และติด Burn (1)!`);
    }
  },

  // 4. Wind Cutter
  {
    id: 'wind_cutter',
    name: 'Wind Cutter (คมมีดวายุ)',
    type: CARD_TYPES.SPELL,
    cost: 2,
    damage: 18,
    shield: 0,
    target: CARD_TARGETS.ENEMY,
    stabilityChange: -8,
    description: 'สะบัดคลื่นลมคมกริบ สร้างความเสียหาย 18 หน่วยแก่ศัตรู (เสถียรภาพ -8%)',
    flavor: 'เวทลมความเร็วสูงที่ตัดผ่านอากาศด้วยแรงดันมานาเฉียบพลัน',
    icon: '🌪️',
    color: '#06b6d4',
    effect: (battle, card) => {
      const dmg = battle.calculatePlayerDamage(card.damage, 'spell');
      battle.damageEnemy(dmg);
      battle.modifyStability(-8);
      battle.log(`ผู้เล่นร่าย [Wind Cutter] คมมีดวายุเฉือนศัตรู ${dmg} หน่วย!`);
    }
  },

  // 5. Magic Shield
  {
    id: 'magic_shield',
    name: 'Magic Shield (โล่เวทมนตร์)',
    type: CARD_TYPES.DEFENSE,
    cost: 1,
    damage: 0,
    shield: 12,
    target: CARD_TARGETS.SELF,
    stabilityChange: 0,
    description: 'กางข่ายมนตราป้องกันตนเอง ได้รับ Shield 12 หน่วย',
    flavor: 'สนามพลังอีเธอร์เบี่ยงเบนแรงกระแทกจากอาวุธและคาถาศัตรู',
    icon: '🛡️',
    color: '#3b82f6',
    effect: (battle, card) => {
      battle.addPlayerShield(card.shield);
      battle.log(`ผู้เล่นกาง [Magic Shield] ได้รับ Shield ${card.shield} หน่วย!`);
    }
  },

  // 6. Reinforced Barrier
  {
    id: 'reinforced_barrier',
    name: 'Reinforced Barrier (บาเรียเสริมกำลัง)',
    type: CARD_TYPES.DEFENSE,
    cost: 2,
    damage: 0,
    shield: 24,
    target: CARD_TARGETS.SELF,
    stabilityChange: 0,
    description: 'กางข่ายมนตราซ้อนทับ ได้รับ Shield 24 หน่วย และได้รับสถานะ Guard 1 (ลด Damage ลง 30%)',
    flavor: 'โครงสร้างผลึกเวทมนตร์สองชั้น มั่นคงดุจกำแพงหินผา',
    icon: '🔰',
    color: '#1d4ed8',
    effect: (battle, card) => {
      battle.addPlayerShield(card.shield);
      battle.applyStatus('player', 'guard', 1);
      battle.log(`ผู้เล่นเปิดใช้ [Reinforced Barrier] ได้รับ Shield ${card.shield} และสถานะ Guard (1)!`);
    }
  },

  // 7. Focus
  {
    id: 'focus',
    name: 'Focus (เพ่งจิตรวมสมาธิ)',
    type: CARD_TYPES.SUPPORT,
    cost: 1,
    damage: 0,
    shield: 0,
    target: CARD_TARGETS.SELF,
    stabilityChange: 20,
    description: 'ปรับกระแสมานา ฟื้นฟูความเสถียร +20% และได้รับสถานะ Focus 1 (การโจมตี/เวทถัดไปแรงขึ้น 50%)',
    flavor: 'การกำหนดลมหายใจของนักเวทชั้นยอด เพื่อจูนคลื่นพลังให้ตรงกับธรรมชาติ',
    icon: '🎯',
    color: '#8b5cf6',
    effect: (battle) => {
      battle.modifyStability(20);
      battle.applyStatus('player', 'focus', 1);
      battle.log(`ผู้เล่นใช้ [Focus] ฟื้นความเสถียร +20% และได้รับสถานะ Focus (1)!`);
    }
  },

  // 8. Concentration
  {
    id: 'concentration',
    name: 'Concentration (จดจ่อจิต)',
    type: CARD_TYPES.SUPPORT,
    cost: 2,
    damage: 0,
    shield: 0,
    target: CARD_TARGETS.SELF,
    stabilityChange: 0,
    description: 'เพ่งสมาธิเข้าสู่ห้วงเวทมนตร์ จั่วการ์ดขึ้นมือ 2 ใบ',
    flavor: 'การเปิดญาณสัมผัส ดึงการ์ดเวทที่ซ่อนอยู่ในมิติคลังเก็บ',
    icon: '🎴',
    color: '#a855f7',
    effect: (battle) => {
      battle.drawCards(2);
      battle.log(`ผู้เล่นใช้ [Concentration] จั่วการ์ด 2 ใบขึ้นมือ!`);
    }
  },

  // 9. Quick Cast
  {
    id: 'quick_cast',
    name: 'Quick Cast (ร่ายฉับพลัน)',
    type: CARD_TYPES.TECHNIQUE,
    cost: 1,
    damage: 0,
    shield: 0,
    target: CARD_TARGETS.SELF,
    stabilityChange: 0,
    description: 'เร่งจังหวะเวท การ์ดใบถัดไปที่เล่นในเทิร์นนี้ใช้ Mana ลดลง 1 หน่วย (ต่ำสุด 0)',
    flavor: 'การลัดวงจรร่ายคาถาโดยข้ามขั้นตอนการร่ายมนตร์ครึ่งหนึ่ง',
    icon: '⚡',
    color: '#eab308',
    effect: (battle) => {
      battle.playerModifiers.nextCardCostDiscount += 1;
      battle.log(`ผู้เล่นใช้ [Quick Cast] การ์ดใบถัดไปในเทิร์นนี้ใช้ Mana ลดลง 1 หน่วย!`);
    }
  },

  // 10. Arcane Burst
  {
    id: 'arcane_burst',
    name: 'Arcane Burst (ระเบิดมนตรา)',
    type: CARD_TYPES.SPELL,
    cost: 3,
    damage: 30,
    shield: 0,
    target: CARD_TARGETS.ENEMY,
    stabilityChange: -15,
    description: 'ปลดปล่อยพลังเวทมหาศาล ระเบิดใส่ศัตรู สร้างความเสียหาย 30 หน่วย (เสถียรภาพ -15%)',
    flavor: 'ลำแสงทำลายล้างที่บิดเบือนมิติรอบข้าง พลังรุนแรงแลกกับความเสถียรของร่างกาย',
    icon: '💠',
    color: '#c026d3',
    effect: (battle, card) => {
      const dmg = battle.calculatePlayerDamage(card.damage, 'spell');
      battle.damageEnemy(dmg);
      battle.modifyStability(-15);
      battle.log(`ผู้เล่นร่ายมหาเวท [Arcane Burst] ระเบิดสร้างความเสียหาย ${dmg} หน่วย!`);
    }
  },

  // 11. Mana Surge
  {
    id: 'mana_surge',
    name: 'Mana Surge (ทะยานมานา)',
    type: CARD_TYPES.SUPPORT,
    cost: 0,
    damage: 0,
    shield: 0,
    target: CARD_TARGETS.SELF,
    stabilityChange: 5,
    description: 'ดึงพลังงานบริสุทธิ์ ฟื้นฟู Mana 2 หน่วย และเพิ่มความเสถียรมานา +5%',
    flavor: 'การสูบฉีดมานาสำรองจากผลึกที่พกติดตัวเพื่อคืนชีพจรต่อสู้',
    icon: '💧',
    color: '#0ea5e9',
    effect: (battle) => {
      battle.modifyPlayerMana(2);
      battle.modifyStability(5);
      battle.log(`ผู้เล่นใช้ [Mana Surge] ฟื้นฟู Mana +2 และความเสถียร +5%!`);
    }
  },

  // 12. Limit Break (Ultimate)
  {
    id: 'limit_break',
    name: 'Limit Break (ปลดขีดจำกัด)',
    type: CARD_TYPES.ULTIMATE,
    cost: 3,
    damage: 35,
    shield: 10,
    target: CARD_TARGETS.ENEMY,
    stabilityChange: -20,
    description: 'ปลดปล่อยพลังก้าวข้ามขีดจำกัด สร้างความเสียหาย 35 หน่วย และได้รับ Shield 10 หน่วย (เงื่อนไข: เทิร์นที่ 3 ขึ้นไป หรือความเสถียรมานา <= 70%)',
    flavor: 'พลังขั้นสุดยอดของนักเวทแห่งอัลเคนา ทะลวงมิติด้วยความมุ่งมั่นอันเด็ดเดี่ยว',
    icon: '🌟',
    color: '#f43f5e',
    conditionDescription: 'เทิร์น 3+ หรือ เสถียรภาพ <= 70%',
    canPlay: (battle) => {
      return battle.turn >= 3 || battle.manaStability <= 70;
    },
    effect: (battle, card) => {
      const dmg = battle.calculatePlayerDamage(card.damage, 'ultimate');
      battle.damageEnemy(dmg);
      battle.addPlayerShield(card.shield);
      battle.modifyStability(-20);
      battle.log(`★ ท่าไม้ตาย [Limit Break] ทะลวงศัตรู ${dmg} หน่วย พร้อมกาง Shield ${card.shield}!`);
    }
  },

  // 13. Flame Rush (Rina Character Reward - Relationship >= 50)
  {
    id: 'flame_rush',
    name: 'Flame Rush (ประกายเพลิงโหม)',
    type: CARD_TYPES.ATTACK,
    cost: 2,
    damage: 22,
    shield: 0,
    target: CARD_TARGETS.ENEMY,
    stabilityChange: -6,
    description: 'ผสานเปลวเพลิงกับความมุ่งมั่นของ Rina สร้างความเสียหายไฟ 22 หน่วย และทำให้ศัตรูติด Burn (1)',
    flavor: 'เวทเพลิงรุกเร็วที่ถ่ายทอดจากสไตล์การต่อสู้แบบตรงไปตรงมาของ Rina',
    icon: '🔥',
    color: '#ea580c',
    characterReward: 'rina',
    effect: (battle, card) => {
      const dmg = battle.calculatePlayerDamage(card.damage, 'attack');
      battle.damageEnemy(dmg);
      battle.applyStatus('enemy', 'burn', 1);
      battle.modifyStability(-6);
      battle.log(`ผู้เล่นประสานใจกับ Rina ใช้ [Flame Rush] ฟาดเพลิง ${dmg} หน่วย และติด Burn (1)!`);
    }
  },

  // 14. Perfect Calculation (Kai Character Reward - Relationship >= 50)
  {
    id: 'perfect_calculation',
    name: 'Perfect Calculation (การคำนวณสมบูรณ์แบบ)',
    type: CARD_TYPES.TECHNIQUE,
    cost: 1,
    damage: 0,
    shield: 10,
    target: CARD_TARGETS.SELF,
    stabilityChange: 10,
    description: 'คำนวณเส้นทางมานาตามแบบ Kai: ได้รับ Shield 10 หน่วย, Guard (1) และการ์ดถัดไปในเทิร์นใช้ Mana ลดลง 1 หน่วย',
    flavor: 'อัลกอริทึมวิเคราะห์วงจรเวทมนตร์ของ Kai ที่เปลี่ยนความผิดพลาดให้กลายเป็นเกราะอันแน่นหนา',
    icon: '📱',
    color: '#0284c7',
    characterReward: 'kai',
    effect: (battle, card) => {
      battle.addPlayerShield(card.shield);
      battle.applyStatus('player', 'guard', 1);
      battle.playerModifiers.nextCardCostDiscount += 1;
      battle.modifyStability(10);
      battle.log(`ผู้เล่นใช้ [Perfect Calculation] ของ Kai คำนวณสนามพลัง รับ Shield 10, Guard (1) และลดค่าร่ายถัดไป!`);
    }
  },

  // 15. Tower Resonance (Mika Character Reward - Relationship >= 50)
  {
    id: 'tower_resonance',
    name: 'Tower Resonance (คลื่นสะท้อนหอคอย)',
    type: CARD_TYPES.SPELL,
    cost: 2,
    damage: 16,
    shield: 0,
    target: CARD_TARGETS.ENEMY,
    stabilityChange: 15,
    description: 'คลื่นพลังโบราณเชื่อมโยงผ่าน Mika: สร้างความเสียหาย 16 หน่วย และฟื้นฟูความเสถียรมานา +15%',
    flavor: 'สัมผัสอันอ่อนโยนแต่ลึกซึ้งของ Mika ที่ปลอบประโลมกระแสมานาที่ปั่นป่วนให้กลับมาสงบนิ่ง',
    icon: '🔮',
    color: '#10b981',
    characterReward: 'mika',
    effect: (battle, card) => {
      const dmg = battle.calculatePlayerDamage(card.damage, 'spell');
      battle.damageEnemy(dmg);
      battle.modifyStability(15);
      battle.log(`ผู้เล่นรับพลังสะท้อนของ Mika ใช้ [Tower Resonance] โจมตี ${dmg} หน่วย และคืนความเสถียร +15%!`);
    }
  },

  // 16. Emergency Barrier (Professor Hayase Character Reward - Relationship >= 50)
  {
    id: 'emergency_barrier',
    name: 'Emergency Barrier (บาเรียฉุกเฉิน)',
    type: CARD_TYPES.DEFENSE,
    cost: 2,
    damage: 0,
    shield: 30,
    target: CARD_TARGETS.SELF,
    stabilityChange: 0,
    description: 'มหาข่ายเวทป้องกันระดับอาจารย์: ได้รับ Shield แข็งแกร่ง 30 หน่วย และสถานะ Guard (1)',
    flavor: 'เวทคุ้มครองนักเรียนขั้นสูงสุดของอาจารย์ Hayase ที่พร้อมกางออกเสมอเมื่อศิษย์ตกอยู่ในอันตราย',
    icon: '🏛️',
    color: '#7c3aed',
    characterReward: 'hayase',
    effect: (battle, card) => {
      battle.addPlayerShield(card.shield);
      battle.applyStatus('player', 'guard', 1);
      battle.log(`ผู้เล่นเปิดใช้ [Emergency Barrier] ของอาจารย์ Hayase ได้รับ Shield 30 หน่วย และ Guard (1)!`);
    }
  }
];

/**
 * High-detail 2D Card Art Illustrations (SVG)
 * Priority cards: Fire Bolt, Wind Cutter, Magic Shield, Focus, Mana Recovery/Surge,
 * Quick Cast, Arcane Burst, Flame Rush, Perfect Calculation, Tower Resonance,
 * Emergency Barrier, Limit Break
 */
export const CARD_ART_SVGS = {
  basic_strike: `
    <svg viewBox="0 0 100 70" class="card-vector-art">
      <defs>
        <linearGradient id="bladeG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="50%" stop-color="#f87171"/>
          <stop offset="100%" stop-color="#b91c1c"/>
        </linearGradient>
      </defs>
      <path d="M18 54 L72 14 L82 20 L28 60 Z" fill="url(#bladeG)"/>
      <polygon points="72,14 82,20 88,12" fill="#fef08a"/>
      <line x1="12" y1="62" x2="28" y2="46" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
      <path d="M28 46 Q55 25 80 40" stroke="#fca5a5" stroke-width="2" stroke-dasharray="4,3" fill="none"/>
    </svg>
  `,
  heavy_strike: `
    <svg viewBox="0 0 100 70" class="card-vector-art">
      <defs>
        <radialGradient id="heavyG" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="40%" stop-color="#ef4444"/>
          <stop offset="100%" stop-color="#7f1d1d"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="35" r="22" fill="url(#heavyG)" opacity="0.6"/>
      <polygon points="50,8 58,28 78,16 68,36 88,40 68,48 76,64 54,52 46,64 48,46 26,48 40,36 24,24 44,28" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
      <line x1="22" y1="22" x2="78" y2="48" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `,
  fire_bolt: `
    <svg viewBox="0 0 100 70" class="card-vector-art">
      <defs>
        <linearGradient id="fireG" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stop-color="#ea580c"/>
          <stop offset="60%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#fef08a"/>
        </linearGradient>
      </defs>
      <path d="M15 35 Q35 20 60 28 Q80 18 90 35 Q80 52 60 42 Q35 50 15 35 Z" fill="url(#fireG)"/>
      <circle cx="76" cy="35" r="8" fill="#ffffff"/>
      <circle cx="76" cy="35" r="5" fill="#fef08a"/>
      <circle cx="35" cy="28" r="3" fill="#f97316"/>
      <circle cx="45" cy="42" r="2.5" fill="#f97316"/>
    </svg>
  `,
  wind_cutter: `
    <svg viewBox="0 0 100 70" class="card-vector-art">
      <defs>
        <linearGradient id="windG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#a5f3fc"/>
          <stop offset="50%" stop-color="#06b6d4"/>
          <stop offset="100%" stop-color="#083344"/>
        </linearGradient>
      </defs>
      <path d="M20 50 Q50 10 85 22 Q55 32 30 58 Z" fill="url(#windG)"/>
      <path d="M12 38 Q45 2 75 14 Q48 24 22 46 Z" fill="#67e8f9" opacity="0.75"/>
      <path d="M35 62 Q65 25 92 40 Q68 46 45 68 Z" fill="#0891b2" opacity="0.6"/>
    </svg>
  `,
  magic_shield: `
    <svg viewBox="0 0 100 70" class="card-vector-art">
      <defs>
        <radialGradient id="shieldG" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#93c5fd" stop-opacity="0.85"/>
          <stop offset="70%" stop-color="#2563eb" stop-opacity="0.5"/>
          <stop offset="100%" stop-color="#1e3a8a" stop-opacity="0.2"/>
        </radialGradient>
      </defs>
      <polygon points="50,10 78,24 70,54 50,65 30,54 22,24" fill="url(#shieldG)" stroke="#60a5fa" stroke-width="2.5"/>
      <polygon points="50,18 70,28 64,48 50,56 36,48 30,28" fill="none" stroke="#bfdbfe" stroke-width="1.5" stroke-dasharray="4,2"/>
      <circle cx="50" cy="36" r="6" fill="#ffffff" opacity="0.9"/>
    </svg>
  `,
  reinforced_barrier: `
    <svg viewBox="0 0 100 70" class="card-vector-art">
      <defs>
        <linearGradient id="reinfG" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#3b82f6"/>
          <stop offset="100%" stop-color="#1d4ed8"/>
        </linearGradient>
      </defs>
      <polygon points="50,8 82,22 75,56 50,68 25,56 18,22" fill="#0f172a" stroke="#60a5fa" stroke-width="2"/>
      <polygon points="50,14 74,26 68,50 50,60 32,50 26,26" fill="url(#reinfG)" stroke="#93c5fd" stroke-width="2"/>
      <line x1="50" y1="18" x2="50" y2="56" stroke="#ffffff" stroke-width="2"/>
      <line x1="32" y1="36" x2="68" y2="36" stroke="#ffffff" stroke-width="2"/>
    </svg>
  `,
  focus: `
    <svg viewBox="0 0 100 70" class="card-vector-art">
      <defs>
        <radialGradient id="focusG" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#e9d5ff"/>
          <stop offset="50%" stop-color="#a855f7"/>
          <stop offset="100%" stop-color="#3b0764"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="35" r="24" fill="none" stroke="#c084fc" stroke-width="2" stroke-dasharray="6,3"/>
      <circle cx="50" cy="35" r="15" fill="none" stroke="#e9d5ff" stroke-width="2"/>
      <circle cx="50" cy="35" r="6" fill="url(#focusG)"/>
      <line x1="50" y1="5" x2="50" y2="65" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="4,4"/>
      <line x1="20" y1="35" x2="80" y2="35" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="4,4"/>
    </svg>
  `,
  concentration: `
    <svg viewBox="0 0 100 70" class="card-vector-art">
      <defs>
        <linearGradient id="concG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#d8b4fe"/>
          <stop offset="100%" stop-color="#6b21a8"/>
        </linearGradient>
      </defs>
      <polygon points="50,45 20,40 18,20 50,25" fill="#3b0764" stroke="#c084fc" stroke-width="1.5"/>
      <polygon points="50,45 80,40 82,20 50,25" fill="#3b0764" stroke="#c084fc" stroke-width="1.5"/>
      <path d="M50 25 Q35 15 20 20 L20 40 Q35 35 50 45 Q65 35 80 40 L80 20 Q65 15 50 25 Z" fill="url(#concG)"/>
      <circle cx="50" cy="18" r="4" fill="#fef08a"/>
      <circle cx="36" cy="12" r="2" fill="#c084fc"/>
      <circle cx="64" cy="12" r="2" fill="#c084fc"/>
    </svg>
  `,
  quick_cast: `
    <svg viewBox="0 0 100 70" class="card-vector-art">
      <defs>
        <linearGradient id="qcG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="50%" stop-color="#eab308"/>
          <stop offset="100%" stop-color="#ca8a04"/>
        </linearGradient>
      </defs>
      <polygon points="54,8 30,36 48,36 44,64 72,32 52,32" fill="url(#qcG)" stroke="#fef08a" stroke-width="1.5"/>
      <circle cx="50" cy="35" r="26" fill="none" stroke="#fde047" stroke-width="1.5" stroke-dasharray="10,5"/>
    </svg>
  `,
  arcane_burst: `
    <svg viewBox="0 0 100 70" class="card-vector-art">
      <defs>
        <radialGradient id="burstG" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="25%" stop-color="#f0abfc"/>
          <stop offset="60%" stop-color="#c026d3"/>
          <stop offset="100%" stop-color="#4a044e"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="35" r="24" fill="url(#burstG)"/>
      <polygon points="50,5 56,26 78,20 62,35 78,50 56,44 50,65 44,44 22,50 38,35 22,20 44,26" fill="#f5d0fe" stroke="#e879f9" stroke-width="1"/>
    </svg>
  `,
  mana_surge: `
    <svg viewBox="0 0 100 70" class="card-vector-art">
      <defs>
        <linearGradient id="surgeG" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#bae6fd"/>
          <stop offset="50%" stop-color="#0ea5e9"/>
          <stop offset="100%" stop-color="#0369a1"/>
        </linearGradient>
      </defs>
      <path d="M50 10 C40 28 32 38 32 48 C32 58 40 64 50 64 C60 64 68 58 68 48 C68 38 60 28 50 10 Z" fill="url(#surgeG)" stroke="#7dd3fc" stroke-width="1.5"/>
      <ellipse cx="45" cy="44" rx="4" ry="7" fill="#ffffff" opacity="0.6"/>
      <circle cx="28" cy="30" r="3" fill="#38bdf8" opacity="0.8"/>
      <circle cx="72" cy="32" r="3.5" fill="#38bdf8" opacity="0.8"/>
    </svg>
  `,
  limit_break: `
    <svg viewBox="0 0 100 70" class="card-vector-art">
      <defs>
        <radialGradient id="lbG" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="35%" stop-color="#fde047"/>
          <stop offset="70%" stop-color="#f43f5e"/>
          <stop offset="100%" stop-color="#4c0519"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="35" r="26" fill="url(#lbG)"/>
      <polygon points="50,6 55,25 74,15 63,31 82,35 63,39 74,55 55,45 50,64 45,45 26,55 37,39 18,35 37,31 26,15 45,25" fill="#fef08a" stroke="#dc2626" stroke-width="1"/>
    </svg>
  `,
  flame_rush: `
    <svg viewBox="0 0 100 70" class="card-vector-art">
      <defs>
        <linearGradient id="frG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="40%" stop-color="#ea580c"/>
          <stop offset="100%" stop-color="#7c2d12"/>
        </linearGradient>
      </defs>
      <path d="M15 45 Q35 15 65 20 Q90 10 88 40 Q85 60 55 55 Q25 65 15 45 Z" fill="url(#frG)"/>
      <polygon points="65,20 85,25 75,38" fill="#fef08a"/>
      <path d="M25 45 Q50 30 75 42" stroke="#ffffff" stroke-width="2" fill="none"/>
    </svg>
  `,
  perfect_calculation: `
    <svg viewBox="0 0 100 70" class="card-vector-art">
      <defs>
        <linearGradient id="pcG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fed7aa"/>
          <stop offset="50%" stop-color="#ea580c"/>
          <stop offset="100%" stop-color="#1e293b"/>
        </linearGradient>
      </defs>
      <rect x="25" y="15" width="50" height="40" rx="4" fill="#0f172a" stroke="#ea580c" stroke-width="2"/>
      <circle cx="50" cy="35" r="14" fill="none" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4,2"/>
      <line x1="35" y1="35" x2="65" y2="35" stroke="#f97316" stroke-width="1"/>
      <line x1="50" y1="20" x2="50" y2="50" stroke="#f97316" stroke-width="1"/>
      <circle cx="50" cy="35" r="3" fill="#fdba74"/>
    </svg>
  `,
  tower_resonance: `
    <svg viewBox="0 0 100 70" class="card-vector-art">
      <defs>
        <radialGradient id="trG" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#a7f3d0"/>
          <stop offset="50%" stop-color="#10b981"/>
          <stop offset="100%" stop-color="#064e3b"/>
        </radialGradient>
      </defs>
      <polygon points="45,10 55,10 58,58 42,58" fill="#042f2e" stroke="#10b981" stroke-width="2"/>
      <ellipse cx="50" cy="35" rx="35" ry="12" fill="none" stroke="#6ee7b7" stroke-width="1.5" stroke-dasharray="6,3"/>
      <ellipse cx="50" cy="35" rx="20" ry="7" fill="none" stroke="#a7f3d0" stroke-width="1.5"/>
      <circle cx="50" cy="18" r="4" fill="url(#trG)"/>
    </svg>
  `,
  emergency_barrier: `
    <svg viewBox="0 0 100 70" class="card-vector-art">
      <defs>
        <linearGradient id="ebG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#d8b4fe"/>
          <stop offset="50%" stop-color="#7c3aed"/>
          <stop offset="100%" stop-color="#2e1065"/>
        </linearGradient>
      </defs>
      <polygon points="50,8 80,20 72,56 50,66 28,56 20,20" fill="url(#ebG)" stroke="#d4af37" stroke-width="2.5"/>
      <polygon points="50,16 70,26 64,50 50,58 36,50 30,26" fill="#1e1b4b" stroke="#e9d5ff" stroke-width="1.2"/>
      <circle cx="50" cy="36" r="8" fill="#fbbf24" stroke="#d4af37" stroke-width="1"/>
    </svg>
  `
};

export function getCardArtSvg(id) {
  let searchId = id;
  if (searchId === 'wind_slash') searchId = 'wind_cutter';
  if (searchId === 'mana_recovery') searchId = 'mana_surge';
  return CARD_ART_SVGS[searchId] || null;
}

/**
 * Initial Starter Deck (10 Cards as required in Round 5):
 * Basic Strike x3
 * Magic Shield x2
 * Focus x2
 * Fire Bolt x2
 * Wind Cutter x1
 * Total: 10 cards
 */
export const INITIAL_STARTER_DECK_IDS = [
  'basic_strike',
  'basic_strike',
  'basic_strike',
  'magic_shield',
  'magic_shield',
  'focus',
  'focus',
  'fire_bolt',
  'fire_bolt',
  'wind_cutter'
];

export const INITIAL_UNLOCKED_CARD_IDS = [
  'basic_strike',
  'magic_shield',
  'focus',
  'fire_bolt',
  'wind_cutter'
];

/**
 * Returns a cloned instance of a card from database by ID
 */
export function getCardById(id) {
  let searchId = id;
  if (searchId === 'wind_slash') searchId = 'wind_cutter';
  if (searchId === 'mana_recovery') searchId = 'mana_surge';

  let card = CARD_DATABASE.find(c => c.id === searchId);
  if (!card) {
    if (id === 'wind_slash' || id === 'wind_cutter') {
      card = CARD_DATABASE.find(c => c.id === 'wind_cutter' || c.id === 'wind_slash');
    } else if (id === 'mana_surge' || id === 'mana_recovery') {
      card = CARD_DATABASE.find(c => c.id === 'mana_surge' || c.id === 'mana_recovery');
    }
  }
  if (!card) return null;
  return { ...card };
}

/**
 * Creates a standard starter deck for Round 4 Turn-Based Card Battle (10 cards)
 */
export function createStarterDeck(customCardIds = null) {
  const cardIds = customCardIds && customCardIds.length >= 10 ? customCardIds : INITIAL_STARTER_DECK_IDS;

  return cardIds.map((id, index) => {
    const card = getCardById(id) || getCardById('basic_strike');
    return {
      ...card,
      instanceId: `${id}_${Date.now()}_${index}_${Math.random().toString(36).substring(2, 6)}`
    };
  });
}
