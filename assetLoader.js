/**
 * ARCANA: THE TOWER - Asset & Presentation Loader
 * 2D Visual Novel Presentation Engine
 * Late 1990s - Early 2000s Japanese Magic Academy Art Direction
 */

import { CHARACTERS } from './characters.js';

// Pre-generated High-Fidelity Character & Background Art Assets
export const ASSET_PATHS = {
  characters: {
    player: {
      normal: '/src/assets/images/protagonist_portrait_1790578353883.jpg',
      happy: '/src/assets/images/protagonist_portrait_1790578353883.jpg',
      serious: '/src/assets/images/protagonist_portrait_1790578353883.jpg',
      surprised: '/src/assets/images/protagonist_portrait_1790578353883.jpg',
      angry: '/src/assets/images/protagonist_portrait_1790578353883.jpg',
      sad: '/src/assets/images/protagonist_portrait_1790578353883.jpg',
      worried: '/src/assets/images/protagonist_portrait_1790578353883.jpg',
      determined: '/src/assets/images/protagonist_portrait_1790578353883.jpg'
    },
    rina: {
      normal: '/src/assets/images/rina_portrait_1790578115942.jpg',
      happy: '/src/assets/images/rina_portrait_1790578115942.jpg',
      excited: '/src/assets/images/rina_portrait_1790578115942.jpg',
      smile: '/src/assets/images/rina_portrait_1790578115942.jpg',
      cheer: '/src/assets/images/rina_portrait_1790578115942.jpg',
      serious: '/src/assets/images/rina_portrait_1790578115942.jpg',
      worried: '/src/assets/images/rina_portrait_1790578115942.jpg',
      proud: '/src/assets/images/rina_portrait_1790578115942.jpg'
    },
    kai: {
      normal: '/src/assets/images/kai_portrait_1790578127676.jpg',
      smug: '/src/assets/images/kai_portrait_1790578127676.jpg',
      serious: '/src/assets/images/kai_portrait_1790578127676.jpg',
      concerned: '/src/assets/images/kai_portrait_1790578127676.jpg',
      happy: '/src/assets/images/kai_portrait_1790578127676.jpg',
      excited: '/src/assets/images/kai_portrait_1790578127676.jpg',
      surprised: '/src/assets/images/kai_portrait_1790578127676.jpg',
      shock: '/src/assets/images/kai_portrait_1790578127676.jpg'
    },
    mika: {
      normal: '/src/assets/images/mika_portrait_1790578142728.jpg',
      nervous: '/src/assets/images/mika_portrait_1790578142728.jpg',
      shy: '/src/assets/images/mika_portrait_1790578142728.jpg',
      worried: '/src/assets/images/mika_portrait_1790578142728.jpg',
      determined: '/src/assets/images/mika_portrait_1790578142728.jpg',
      thoughtful: '/src/assets/images/mika_portrait_1790578142728.jpg',
      sad: '/src/assets/images/mika_portrait_1790578142728.jpg'
    },
    hayase: {
      normal: '/src/assets/images/hayase_portrait_1790578364280.jpg',
      serious: '/src/assets/images/hayase_portrait_1790578364280.jpg',
      command: '/src/assets/images/hayase_portrait_1790578364280.jpg',
      solemn: '/src/assets/images/hayase_portrait_1790578364280.jpg',
      concerned: '/src/assets/images/hayase_portrait_1790578364280.jpg',
      proud: '/src/assets/images/hayase_portrait_1790578364280.jpg',
      explaining: '/src/assets/images/hayase_portrait_1790578364280.jpg'
    },
    kagami: {
      normal: '/src/assets/images/kagami_portrait_1790578375534.jpg',
      serious: '/src/assets/images/kagami_portrait_1790578375534.jpg',
      intense: '/src/assets/images/kagami_portrait_1790578375534.jpg',
      resolute: '/src/assets/images/kagami_portrait_1790578375534.jpg',
      command: '/src/assets/images/kagami_portrait_1790578375534.jpg',
      angry: '/src/assets/images/kagami_portrait_1790578375534.jpg'
    }
  },
  backgrounds: {
    academy_classroom: '/src/assets/images/bg_classroom_1790578153581.jpg',
    classroom: '/src/assets/images/bg_classroom_1790578153581.jpg',
    tower_exterior: '/src/assets/images/bg_tower_exterior_1790578167980.jpg',
    courtyard_rift: '/src/assets/images/bg_tower_exterior_1790578167980.jpg',
    tower_entrance: '/src/assets/images/bg_tower_exterior_1790578167980.jpg',
    academy_library: '/src/assets/images/bg_academy_library_1790578390599.jpg',
    archive_room: '/src/assets/images/bg_academy_library_1790578390599.jpg',
    tower_archive: '/src/assets/images/bg_academy_library_1790578390599.jpg',
    tower_core: '/src/assets/images/bg_tower_core_1790578402902.jpg',
    tower_hall: '/src/assets/images/bg_tower_core_1790578402902.jpg',
    tower_laboratory: '/src/assets/images/bg_tower_core_1790578402902.jpg'
  },
  enemies: {
    training_dummy: '/src/assets/images/enemy_training_dummy_1790579571653.jpg',
    mana_beast: '/src/assets/images/enemy_mana_beast_1790579586423.jpg',
    tower_guardian: '/src/assets/images/enemy_tower_guardian_1790579604408.jpg',
    tower_construct: '/src/assets/images/enemy_tower_guardian_1790579604408.jpg',
    elite_construct: '/src/assets/images/enemy_tower_guardian_1790579604408.jpg',
    antagonist_kagami: '/src/assets/images/kagami_portrait_1790578375534.jpg',
    kagami: '/src/assets/images/kagami_portrait_1790578375534.jpg',
    student_rival: '/src/assets/images/mika_portrait_1790578142728.jpg',
    kuroki: '/src/assets/images/mika_portrait_1790578142728.jpg',
    tower_core_final: '/src/assets/images/enemy_tower_core_1790579619536.jpg',
    tower_core: '/src/assets/images/enemy_tower_core_1790579619536.jpg'
  }
};

/**
 * Procedural High-Detail 2D Anime VN Portrait Generators
 * Used as primary illustration or instant robust fallback if external images fail.
 */
function generatePortraitSvg(characterId, expression = 'normal') {
  const char = CHARACTERS[characterId] || CHARACTERS.player;
  const theme = char.themeColor || '#6366f1';

  // Base configurations per character
  let hairColor = '#1e293b';
  let hairHighlight = '#475569';
  let skinTone = '#fef08a';
  let eyeColor = '#1e1b4b';
  let eyeHighlight = '#67e8f9';
  let uniformColor = '#0f172a';
  let accentColor = theme;
  let hairBackPath = '';
  let hairFrontPath = '';
  let accessorySvg = '';

  if (characterId === 'rina') {
    hairColor = '#0369a1';
    hairHighlight = '#38bdf8';
    skinTone = '#fef3c7';
    eyeColor = '#0c4a6e';
    eyeHighlight = '#bae6fd';
    uniformColor = '#0f172a';
    accentColor = '#f97316'; // fire hint
    hairBackPath = '<path d="M22 45 C15 5 105 5 98 45 C98 95 88 120 78 125 L42 125 C32 120 22 95 22 45 Z" fill="#0369a1"/>';
    hairFrontPath = '<path d="M30 40 Q48 55 60 42 Q72 55 90 40 Q78 30 60 28 Q42 30 30 40 Z" fill="#0284c7"/><path d="M26 48 Q34 68 40 54 M80 54 Q86 68 94 48" stroke="#38bdf8" stroke-width="2" fill="none"/>';
    accessorySvg = '<circle cx="60" cy="98" r="5" fill="#f97316"/><path d="M55 99 L48 112 M65 99 L72 112" stroke="#ea580c" stroke-width="3"/>';
  } else if (characterId === 'kai') {
    hairColor = '#7c2d12';
    hairHighlight = '#ea580c';
    skinTone = '#fed7aa';
    eyeColor = '#431407';
    eyeHighlight = '#fed7aa';
    uniformColor = '#1e293b';
    accentColor = '#ea580c';
    hairBackPath = '<path d="M24 55 L32 20 L48 32 L60 14 L75 30 L92 20 L96 55 C96 85 82 105 60 105 C38 105 24 85 24 55 Z" fill="#7c2d12"/>';
    hairFrontPath = '<polygon points="38,36 48,50 56,38 65,52 76,38 60,32" fill="#9a3412"/>';
    // 1990s anime wireframe rectangular glasses & flip-phone collar
    accessorySvg = `
      <rect x="36" y="55" width="20" height="13" rx="2" fill="#fdba74" opacity="0.3" stroke="#ea580c" stroke-width="1.8"/>
      <rect x="64" y="55" width="20" height="13" rx="2" fill="#fdba74" opacity="0.3" stroke="#ea580c" stroke-width="1.8"/>
      <line x1="56" y1="61" x2="64" y2="61" stroke="#ea580c" stroke-width="1.8"/>
      <!-- Small flip phone gadget on breast pocket -->
      <rect x="76" y="86" width="14" height="24" rx="2" fill="#334155" stroke="#f97316" stroke-width="1.5"/>
      <line x1="83" y1="80" x2="83" y2="86" stroke="#f97316" stroke-width="2"/>
    `;
  } else if (characterId === 'mika') {
    hairColor = '#134e4a';
    hairHighlight = '#2dd4bf';
    skinTone = '#fef3c7';
    eyeColor = '#0f766e';
    eyeHighlight = '#5eead4';
    uniformColor = '#0f172a';
    accentColor = '#10b981';
    hairBackPath = '<path d="M25 48 C25 18 95 18 95 48 C95 88 84 105 60 105 C36 105 25 88 25 48 Z" fill="#134e4a"/><path d="M22 60 L18 105 L30 95 Z M98 60 L102 105 L90 95 Z" fill="#0f766e"/>';
    hairFrontPath = '<path d="M30 40 Q45 28 60 38 Q75 28 90 40 Q75 60 60 48 Q45 60 30 40 Z" fill="#042f2e"/>';
    accessorySvg = '<polygon points="60,92 54,102 66,102" fill="#10b981"/><circle cx="60" cy="98" r="2" fill="#a7f3d0"/>';
  } else if (characterId === 'hayase') {
    hairColor = '#475569';
    hairHighlight = '#94a3b8';
    skinTone = '#fce7f3';
    eyeColor = '#1e1b4b';
    eyeHighlight = '#c084fc';
    uniformColor = '#1e1b4b';
    accentColor = '#a855f7';
    hairBackPath = '<path d="M26 56 C26 18 94 18 94 56 C94 80 82 96 60 96 C38 96 26 80 26 56 Z" fill="#475569"/>';
    hairFrontPath = '<path d="M30 42 Q60 28 90 42 Q72 40 60 40 Q46 40 30 42 Z" fill="#334155"/>';
    accessorySvg = `
      <circle cx="48" cy="60" r="8" fill="none" stroke="#d8b4fe" stroke-width="1.8"/>
      <circle cx="72" cy="60" r="8" fill="none" stroke="#d8b4fe" stroke-width="1.8"/>
      <line x1="56" y1="60" x2="64" y2="60" stroke="#d8b4fe" stroke-width="1.8"/>
      <!-- High collar & Instructor medal -->
      <polygon points="60,86 52,98 68,98" fill="#d4af37"/>
    `;
  } else if (characterId === 'kagami') {
    hairColor = '#334155';
    hairHighlight = '#64748b';
    skinTone = '#fed7aa';
    eyeColor = '#881337';
    eyeHighlight = '#fda4af';
    uniformColor = '#881337';
    accentColor = '#f43f5e';
    hairBackPath = '<path d="M26 50 C26 12 94 12 94 50 C94 80 84 98 60 98 C36 98 26 80 26 50 Z" fill="#334155"/>';
    hairFrontPath = '<path d="M30 38 L60 32 L90 38 L76 54 L60 46 L44 54 Z" fill="#1e293b"/>';
    accessorySvg = `
      <rect x="36" y="52" width="20" height="15" rx="3" fill="#fecdd3" opacity="0.4" stroke="#e11d48" stroke-width="1.8"/>
      <rect x="64" y="52" width="20" height="15" rx="3" fill="#fecdd3" opacity="0.4" stroke="#e11d48" stroke-width="1.8"/>
      <line x1="56" y1="59" x2="64" y2="59" stroke="#e11d48" stroke-width="2"/>
    `;
  } else {
    // Protagonist (Player)
    hairBackPath = '<path d="M25 60 C25 22 95 22 95 60 C95 82 85 96 60 96 C35 96 25 82 25 60 Z" fill="#1e293b"/>';
    hairFrontPath = '<path d="M30 45 Q50 28 60 46 Q70 26 90 44 Q76 60 60 50 Q44 62 30 45 Z" fill="#0f172a"/>';
    accessorySvg = '<polygon points="60,92 56,102 64,102" fill="#fbbf24"/><path d="M57 90 L63 90 L61 114 L59 114 Z" fill="#6366f1"/>';
  }

  // Expression-specific facial changes (Mouth, Eyebrows, Eye shape)
  let eyebrows = '<path d="M42 54 Q48 52 54 54 M66 54 Q72 52 78 54" stroke="#0f172a" stroke-width="2" fill="none"/>';
  let eyes = `
    <ellipse cx="48" cy="62" rx="4.5" ry="5.5" fill="${eyeColor}"/>
    <ellipse cx="72" cy="62" rx="4.5" ry="5.5" fill="${eyeColor}"/>
    <circle cx="49" cy="60" r="1.5" fill="${eyeHighlight}"/>
    <circle cx="73" cy="60" r="1.5" fill="${eyeHighlight}"/>
  `;
  let mouth = '<path d="M54 75 Q60 78 66 75" stroke="#94a3b8" stroke-width="2" fill="none"/>';

  const exp = String(expression || 'normal').toLowerCase();

  if (exp === 'happy' || exp === 'smile' || exp === 'cheer' || exp === 'excited') {
    eyebrows = '<path d="M42 52 Q48 50 54 52 M66 52 Q72 50 78 52" stroke="#0f172a" stroke-width="2" fill="none"/>';
    eyes = `
      <path d="M44 63 Q48 58 53 63" stroke="${eyeColor}" stroke-width="2.5" fill="none"/>
      <path d="M67 63 Q72 58 77 63" stroke="${eyeColor}" stroke-width="2.5" fill="none"/>
    `;
    mouth = '<path d="M52 74 Q60 82 68 74 Z" fill="#f43f5e" stroke="#9f1239" stroke-width="1.5"/>';
  } else if (exp === 'serious' || exp === 'determined' || exp === 'command') {
    eyebrows = '<path d="M42 56 L54 52 M66 52 L78 56" stroke="#0f172a" stroke-width="2.5"/>';
    mouth = '<line x1="53" y1="76" x2="67" y2="76" stroke="#0f172a" stroke-width="2"/>';
  } else if (exp === 'surprised' || exp === 'shock' || exp === 'alert') {
    eyebrows = '<path d="M42 50 Q48 46 54 50 M66 50 Q72 46 78 50" stroke="#0f172a" stroke-width="2" fill="none"/>';
    eyes = `
      <ellipse cx="48" cy="62" rx="5.5" ry="6.5" fill="${eyeColor}"/>
      <ellipse cx="72" cy="62" rx="5.5" ry="6.5" fill="${eyeColor}"/>
      <circle cx="49" cy="60" r="2" fill="${eyeHighlight}"/>
      <circle cx="73" cy="60" r="2" fill="${eyeHighlight}"/>
    `;
    mouth = '<ellipse cx="60" cy="76" rx="4" ry="6" fill="#881337"/>';
  } else if (exp === 'worried' || exp === 'nervous' || exp === 'tense' || exp === 'shy') {
    eyebrows = '<path d="M42 52 L54 55 M66 55 L78 52" stroke="#0f172a" stroke-width="2"/>';
    mouth = '<path d="M54 77 Q60 74 66 77" stroke="#475569" stroke-width="2" fill="none"/>';
  } else if (exp === 'angry' || exp === 'menacing' || exp === 'wild') {
    eyebrows = '<path d="M41 57 L54 51 M66 51 L79 57" stroke="#991b1b" stroke-width="3"/>';
    mouth = '<path d="M52 77 Q60 71 68 77" stroke="#991b1b" stroke-width="2.5" fill="none"/>';
  } else if (exp === 'smug' || exp === 'amused' || exp === 'smirk') {
    eyebrows = '<path d="M42 53 Q48 50 54 54 M66 52 Q72 50 78 52" stroke="#0f172a" stroke-width="2" fill="none"/>';
    mouth = '<path d="M54 75 Q62 78 68 72" stroke="#9a3412" stroke-width="2.2" fill="none"/>';
  }

  return `
    <svg viewBox="0 0 120 135" class="vn-portrait-svg" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="aura_${characterId}" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="${theme}" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="${theme}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <!-- Atmospheric aura glow -->
      <circle cx="60" cy="65" r="54" fill="url(#aura_${characterId})"/>
      <!-- Hair back -->
      ${hairBackPath}
      <!-- Face -->
      <ellipse cx="60" cy="65" rx="29" ry="31" fill="${skinTone}"/>
      <!-- Hair front / bangs -->
      ${hairFrontPath}
      <!-- Eyes & Brows -->
      ${eyebrows}
      ${eyes}
      <!-- Nose -->
      <path d="M59 68 L58 71 L61 71" stroke="#d97706" stroke-width="1.2" fill="none"/>
      <!-- Mouth -->
      ${mouth}
      <!-- Academy Uniform Shoulder & Collar -->
      <path d="M34 96 L60 87 L86 96 L80 130 L40 130 Z" fill="${uniformColor}" stroke="${accentColor}" stroke-width="1.5"/>
      ${accessorySvg}
    </svg>
  `;
}

/**
 * Procedural Cinematic Anime Visual Novel Background Generators
 * Covers all 15 required background keys with rich atmospheric art.
 */
function generateBackgroundSvg(bgKey) {
  switch (bgKey) {
    case 'academy_classroom':
    case 'classroom':
      return `
        <svg viewBox="0 0 1920 1080" class="vn-bg-svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="wallG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#312e81"/><stop offset="100%" stop-color="#1e1b4b"/></linearGradient>
            <linearGradient id="floorG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#451a03"/><stop offset="100%" stop-color="#1c1917"/></linearGradient>
            <linearGradient id="windowG" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fed7aa" stop-opacity="0.9"/><stop offset="100%" stop-color="#38bdf8" stop-opacity="0.4"/></linearGradient>
          </defs>
          <rect width="1920" height="720" fill="url(#wallG)"/>
          <rect y="720" width="1920" height="360" fill="url(#floorG)"/>
          <!-- Windows with sunbeam -->
          <rect x="120" y="80" width="440" height="500" rx="8" fill="url(#windowG)" stroke="#cbd5e1" stroke-width="10"/>
          <rect x="620" y="80" width="440" height="500" rx="8" fill="url(#windowG)" stroke="#cbd5e1" stroke-width="10"/>
          <!-- Chalkboard with arcane runes -->
          <rect x="1140" y="100" width="680" height="380" rx="10" fill="#064e3b" stroke="#854d0e" stroke-width="12"/>
          <circle cx="1480" cy="280" r="100" fill="none" stroke="#a7f3d0" stroke-width="2" stroke-dasharray="10,6"/>
          <polygon points="1480,195 1565,335 1395,335" fill="none" stroke="#fef08a" stroke-width="2"/>
          <text x="1170" y="150" fill="#fef08a" font-family="monospace" font-size="22">ARCANA LECTURE: MANA FLOW & DUAL POTENTIAL</text>
          <!-- Wooden Student Desks -->
          <polygon points="300,750 650,750 720,950 220,950" fill="#78350f" stroke="#451a03" stroke-width="4"/>
          <polygon points="850,750 1200,750 1270,950 770,950" fill="#78350f" stroke="#451a03" stroke-width="4"/>
          <polygon points="1400,750 1750,750 1820,950 1320,950" fill="#78350f" stroke="#451a03" stroke-width="4"/>
        </svg>
      `;

    case 'academy_hallway':
      return `
        <svg viewBox="0 0 1920 1080" class="vn-bg-svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="hallPersp" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#1e1b4b"/><stop offset="50%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e1b4b"/></linearGradient>
          </defs>
          <rect width="1920" height="1080" fill="url(#hallPersp)"/>
          <polygon points="960,400 1920,0 1920,1080 960,700" fill="#1e293b"/>
          <polygon points="960,400 0,0 0,1080 960,700" fill="#334155"/>
          <polygon points="960,700 0,1080 1920,1080" fill="#0f172a"/>
          <!-- Lockers and magical notice boards -->
          <rect x="60" y="300" width="300" height="500" fill="#475569" stroke="#94a3b8" stroke-width="4"/>
          <rect x="1560" y="300" width="300" height="500" fill="#475569" stroke="#94a3b8" stroke-width="4"/>
          <circle cx="960" cy="550" r="40" fill="#38bdf8" opacity="0.8"/>
        </svg>
      `;

    case 'academy_gate':
      return `
        <svg viewBox="0 0 1920 1080" class="vn-bg-svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="gateSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0284c7"/><stop offset="60%" stop-color="#bae6fd"/><stop offset="100%" stop-color="#fed7aa"/></linearGradient>
          </defs>
          <rect width="1920" height="720" fill="url(#gateSky)"/>
          <rect y="720" width="1920" height="360" fill="#475569"/>
          <!-- Brick Entrance Pillars with Arcane Crests -->
          <rect x="240" y="320" width="160" height="580" fill="#78350f" stroke="#d4af37" stroke-width="8"/>
          <rect x="1520" y="320" width="160" height="580" fill="#78350f" stroke="#d4af37" stroke-width="8"/>
          <circle cx="320" cy="400" r="35" fill="#f59e0b"/>
          <circle cx="1600" cy="400" r="35" fill="#f59e0b"/>
          <!-- Iron Wrought Academy Gate -->
          <line x1="400" y1="450" x2="1520" y2="450" stroke="#1e293b" stroke-width="6"/>
          <line x1="400" y1="750" x2="1520" y2="750" stroke="#1e293b" stroke-width="6"/>
          <!-- Distant academy building & trees -->
          <polygon points="760,480 960,380 1160,480 1160,720 760,720" fill="#1e1b4b"/>
          <circle cx="560" cy="580" r="100" fill="#f472b6" opacity="0.8"/>
          <circle cx="1360" cy="580" r="100" fill="#f472b6" opacity="0.8"/>
        </svg>
      `;

    case 'academy_courtyard':
    case 'courtyard_cleared':
    case 'ending_morning':
      return `
        <svg viewBox="0 0 1920 1080" class="vn-bg-svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="skyMorn" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0284c7"/><stop offset="60%" stop-color="#fdba74"/><stop offset="100%" stop-color="#fef08a"/></linearGradient>
          </defs>
          <rect width="1920" height="680" fill="url(#skyMorn)"/>
          <rect y="680" width="1920" height="400" fill="#334155"/>
          <!-- Academy Main Building in distance -->
          <polygon points="600,450 960,350 1320,450 1320,680 600,680" fill="#1e1b4b"/>
          <polygon points="960,250 940,350 980,350" fill="#f59e0b"/>
          <circle cx="960" cy="480" r="45" fill="#fef08a" stroke="#d97706" stroke-width="4"/>
          <!-- Cherry blossoms / courtyard trees -->
          <circle cx="320" cy="560" r="140" fill="#f472b6" opacity="0.85"/>
          <circle cx="1600" cy="560" r="140" fill="#f472b6" opacity="0.85"/>
          <!-- Brick Gateway Pillars -->
          <rect x="200" y="520" width="120" height="380" fill="#78350f" stroke="#d4af37" stroke-width="6"/>
          <rect x="1600" y="520" width="120" height="380" fill="#78350f" stroke="#d4af37" stroke-width="6"/>
        </svg>
      `;

    case 'city_center':
    case 'alarm':
      return `
        <svg viewBox="0 0 1920 1080" class="vn-bg-svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="shinjukuNight" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4a044e"/><stop offset="60%" stop-color="#18181b"/><stop offset="100%" stop-color="#09090b"/></linearGradient>
          </defs>
          <rect width="1920" height="1080" fill="url(#shinjukuNight)"/>
          <!-- Shinjuku late 90s station & towers -->
          <rect x="120" y="240" width="280" height="680" fill="#1e293b"/>
          <rect x="440" y="180" width="380" height="740" fill="#0f172a"/>
          <rect x="1120" y="200" width="340" height="720" fill="#1e293b"/>
          <rect x="1500" y="280" width="300" height="640" fill="#0f172a"/>
          <!-- Neon billboards -->
          <rect x="480" y="260" width="180" height="90" rx="4" fill="#ec4899" opacity="0.85"/>
          <rect x="1160" y="280" width="160" height="80" rx="4" fill="#06b6d4" opacity="0.85"/>
          <!-- Tower silhouette piercing the clouds -->
          <polygon points="920,50 1000,50 1050,750 870,750" fill="#581c87" stroke="#f43f5e" stroke-width="2"/>
          <polygon points="0,920 1920,920 1920,1080 0,1080" fill="#09090b"/>
          <line x1="0" y1="910" x2="1920" y2="910" stroke="#f59e0b" stroke-width="8" stroke-dasharray="30,20"/>
        </svg>
      `;

    case 'night_city':
      return `
        <svg viewBox="0 0 1920 1080" class="vn-bg-svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="peacefulNight" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#020617"/><stop offset="60%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e1b4b"/></linearGradient>
          </defs>
          <rect width="1920" height="1080" fill="url(#peacefulNight)"/>
          <!-- Peaceful starry night sky -->
          <circle cx="300" cy="180" r="2" fill="#ffffff"/><circle cx="750" cy="120" r="2.5" fill="#fef08a"/><circle cx="1200" cy="160" r="2" fill="#ffffff"/><circle cx="1500" cy="100" r="3" fill="#67e8f9"/>
          <!-- Tokyo skyline silhouettes with warm illuminated windows -->
          <rect x="200" y="450" width="220" height="500" fill="#090d16"/>
          <rect x="460" y="380" width="300" height="570" fill="#0f172a"/>
          <rect x="1200" y="400" width="260" height="550" fill="#090d16"/>
          <rect x="1500" y="440" width="280" height="510" fill="#0f172a"/>
          <!-- Warm glowing windows -->
          <circle cx="520" cy="460" r="4" fill="#fef08a"/><circle cx="560" cy="460" r="4" fill="#fef08a"/><circle cx="600" cy="460" r="4" fill="#fef08a"/>
          <circle cx="520" cy="520" r="4" fill="#fef08a"/><circle cx="560" cy="520" r="4" fill="#fef08a"/><circle cx="600" cy="520" r="4" fill="#fef08a"/>
          <!-- Peaceful street with street lamps -->
          <polygon points="0,950 1920,950 1920,1080 0,1080" fill="#020617"/>
          <circle cx="400" cy="910" r="14" fill="#fbbf24" opacity="0.9"/>
          <circle cx="1520" cy="910" r="14" fill="#fbbf24" opacity="0.9"/>
        </svg>
      `;

    case 'tower_hall':
      return `
        <svg viewBox="0 0 1920 1080" class="vn-bg-svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="hallG" cx="50%" cy="30%" r="50%"><stop offset="0%" stop-color="#4c1d95"/><stop offset="60%" stop-color="#0f0728"/><stop offset="100%" stop-color="#02010a"/></radialGradient>
          </defs>
          <rect width="1920" height="1080" fill="url(#hallG)"/>
          <!-- Endless obsidian floor with purple glowing mana veins -->
          <polygon points="960,350 1920,1080 0,1080" fill="#050314" stroke="#9333ea" stroke-width="2"/>
          <line x1="960" y1="350" x2="350" y2="1080" stroke="#c084fc" stroke-width="3" stroke-dasharray="12,8"/>
          <line x1="960" y1="350" x2="1570" y2="1080" stroke="#c084fc" stroke-width="3" stroke-dasharray="12,8"/>
          <!-- Floating geometric obsidian monoliths -->
          <polygon points="260,220 340,380 280,680 200,520" fill="#18181b" stroke="#a855f7" stroke-width="3"/>
          <polygon points="1660,220 1740,380 1680,680 1600,520" fill="#18181b" stroke="#a855f7" stroke-width="3"/>
        </svg>
      `;

    case 'tower_laboratory':
      return `
        <svg viewBox="0 0 1920 1080" class="vn-bg-svg" preserveAspectRatio="xMidYMid slice">
          <rect width="1920" height="1080" fill="#09090b"/>
          <!-- Ancient research apparatus & glowing crystal data banks -->
          <rect x="180" y="240" width="380" height="680" rx="8" fill="#18181b" stroke="#f43f5e" stroke-width="4"/>
          <rect x="1360" y="240" width="380" height="680" rx="8" fill="#18181b" stroke="#f43f5e" stroke-width="4"/>
          <!-- Work table with CRT screens and magical wires -->
          <polygon points="450,750 1470,750 1570,1000 350,1000" fill="#27272a" stroke="#52525b" stroke-width="4"/>
          <rect x="840" y="580" width="240" height="180" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="5"/>
          <text x="860" y="660" fill="#38bdf8" font-family="monospace" font-size="20">CORE OVERCLOCK</text>
          <text x="860" y="700" fill="#f43f5e" font-family="monospace" font-size="16">CRITICAL: 98%</text>
        </svg>
      `;

    case 'academy_library':
    case 'archive_room':
    case 'tower_archive':
      return `
        <svg viewBox="0 0 1920 1080" class="vn-bg-svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="lampG" cx="50%" cy="40%" r="50%"><stop offset="0%" stop-color="#fef08a" stop-opacity="0.9"/><stop offset="100%" stop-color="#1e1b4b" stop-opacity="0"/></radialGradient>
          </defs>
          <rect width="1920" height="1080" fill="#0f172a"/>
          <!-- Endless wooden bookshelf archives -->
          <rect x="80" y="100" width="450" height="880" fill="#451a03" stroke="#78350f" stroke-width="8"/>
          <rect x="1390" y="100" width="450" height="880" fill="#451a03" stroke="#78350f" stroke-width="8"/>
          <!-- Glowing crystal desk lamp -->
          <rect x="650" y="600" width="620" height="280" rx="8" fill="#292524" stroke="#44403c" stroke-width="6"/>
          <circle cx="960" cy="540" r="280" fill="url(#lampG)"/>
          <polygon points="960,480 940,540 980,540" fill="#fbbf24"/>
          <!-- Ancient grimoires stacked -->
          <rect x="700" y="570" width="160" height="40" rx="4" fill="#881337" stroke="#fda4af" stroke-width="2"/>
          <rect x="710" y="530" width="140" height="40" rx="4" fill="#064e3b" stroke="#a7f3d0" stroke-width="2"/>
        </svg>
      `;

    case 'academy_training_room':
      return `
        <svg viewBox="0 0 1920 1080" class="vn-bg-svg" preserveAspectRatio="xMidYMid slice">
          <rect width="1920" height="1080" fill="#1e1b4b"/>
          <!-- Reinforced barrier dome grid -->
          <circle cx="960" cy="540" r="480" fill="none" stroke="#38bdf8" stroke-width="3" stroke-dasharray="16,8"/>
          <circle cx="960" cy="540" r="320" fill="none" stroke="#a855f7" stroke-width="2"/>
          <!-- Duel Arena Ring -->
          <ellipse cx="960" cy="850" rx="700" ry="200" fill="#0f172a" stroke="#f59e0b" stroke-width="8"/>
        </svg>
      `;

    case 'city_street':
    case 'city_center':
    case 'city_sealed':
    case 'alarm':
      return `
        <svg viewBox="0 0 1920 1080" class="vn-bg-svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="cityNight" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#311042"/><stop offset="60%" stop-color="#111827"/><stop offset="100%" stop-color="#030712"/></linearGradient>
          </defs>
          <rect width="1920" height="1080" fill="url(#cityNight)"/>
          <!-- Tokyo street buildings & telephone poles -->
          <rect x="150" y="320" width="300" height="600" fill="#1f2937"/>
          <rect x="500" y="240" width="350" height="680" fill="#111827"/>
          <rect x="1100" y="260" width="320" height="660" fill="#1f2937"/>
          <rect x="1480" y="300" width="340" height="620" fill="#111827"/>
          <!-- Monolith Tower piercing clouds in background -->
          <polygon points="920,80 1000,80 1040,750 880,750" fill="#581c87" stroke="#f43f5e" stroke-width="2"/>
          <!-- Asphalt street with yellow warning barrier tapes -->
          <polygon points="0,920 1920,920 1920,1080 0,1080" fill="#0f172a"/>
          <line x1="0" y1="910" x2="1920" y2="910" stroke="#f59e0b" stroke-width="8" stroke-dasharray="30,20"/>
          <!-- Utility poles & overhead wires -->
          <line x1="380" y1="200" x2="380" y2="920" stroke="#000000" stroke-width="8"/>
          <line x1="380" y1="250" x2="1600" y2="280" stroke="#000000" stroke-width="2"/>
        </svg>
      `;

    case 'tower_exterior':
    case 'courtyard_rift':
      return `
        <svg viewBox="0 0 1920 1080" class="vn-bg-svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="twExtSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4c0519"/><stop offset="50%" stop-color="#2e1065"/><stop offset="100%" stop-color="#020617"/></linearGradient>
          </defs>
          <rect width="1920" height="1080" fill="url(#twExtSky)"/>
          <!-- Colossal Obsidian Monolith Tower -->
          <polygon points="900,20 1020,20 1080,1080 840,1080" fill="#09090b" stroke="#9333ea" stroke-width="4"/>
          <!-- Crimson rift lightning -->
          <path d="M960 20 L940 300 L990 450 L930 700 L960 1080" stroke="#f43f5e" stroke-width="4" stroke-dasharray="12,8" fill="none"/>
          <circle cx="960" cy="300" r="160" fill="none" stroke="#e11d48" stroke-width="2" stroke-dasharray="8,6"/>
        </svg>
      `;

    case 'tower_entrance':
    case 'tower_hall':
      return `
        <svg viewBox="0 0 1920 1080" class="vn-bg-svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="portalG" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#a855f7"/><stop offset="60%" stop-color="#3b0764"/><stop offset="100%" stop-color="#030712"/></radialGradient>
          </defs>
          <rect width="1920" height="1080" fill="#030712"/>
          <!-- Giant Archway Gate -->
          <path d="M480 1080 L480 400 Q960 160 1440 400 L1440 1080 Z" fill="url(#portalG)" stroke="#c084fc" stroke-width="8"/>
          <!-- Ancient Obelisk Glyphs on sides -->
          <rect x="220" y="240" width="160" height="840" fill="#18181b" stroke="#7e22ce" stroke-width="4"/>
          <rect x="1540" y="240" width="160" height="840" fill="#18181b" stroke="#7e22ce" stroke-width="4"/>
        </svg>
      `;

    case 'tower_laboratory':
    case 'tower_core':
    default:
      return `
        <svg viewBox="0 0 1920 1080" class="vn-bg-svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="coreG" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ffffff"/><stop offset="25%" stop-color="#f0abfc"/><stop offset="60%" stop-color="#86198f"/><stop offset="100%" stop-color="#09090b"/></radialGradient>
          </defs>
          <rect width="1920" height="1080" fill="#09090b"/>
          <!-- Rotating concentric arcane rings -->
          <circle cx="960" cy="540" r="420" fill="none" stroke="#d946ef" stroke-width="3" stroke-dasharray="24,12"/>
          <circle cx="960" cy="540" r="280" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="16,8"/>
          <circle cx="960" cy="540" r="160" fill="url(#coreG)"/>
          <polygon points="960,320 1020,440 960,560 900,440" fill="#f43f5e" opacity="0.6"/>
        </svg>
      `;
  }
}

/**
 * Robust Asset Loader & Cache Manager
 */
class AssetLoaderService {
  constructor() {
    this.imageCache = new Map();
    this.failedUrls = new Set();
  }

  /**
   * Preload an image URL into memory cache
   */
  async preload(url) {
    if (!url) return false;
    if (this.imageCache.has(url)) return true;
    if (this.failedUrls.has(url)) return false;

    return new Promise((resolve) => {
      const img = new Image();
      img.referrerPolicy = 'no-referrer';
      img.onload = () => {
        this.imageCache.set(url, img);
        resolve(true);
      };
      img.onerror = () => {
        this.failedUrls.add(url);
        resolve(false);
      };
      img.src = url;
    });
  }

  reportFailedUrl(url) {
    if (!url) return;
    this.failedUrls.add(url);
    this.imageCache.delete(url);
  }

  /**
   * Resolve Character Portrait (alias for getCharacterPortrait)
   */
  getPortrait(characterId, expression = 'normal') {
    return this.getCharacterPortrait(characterId, expression);
  }

  /**
   * Resolve Character Portrait
   */
  getCharacterPortrait(characterId, expression = 'normal') {
    const normId = this.normalizeId(characterId);
    const exp = String(expression || 'normal').toLowerCase();

    // Check pre-generated image assets
    const charImages = ASSET_PATHS.characters[normId];
    let imageUrl = null;
    if (charImages) {
      imageUrl = charImages[exp] || charImages['normal'] || null;
      if (this.failedUrls.has(imageUrl)) {
        imageUrl = null;
      }
    }

    const fallbackSvg = generatePortraitSvg(normId, exp);
    const charMeta = CHARACTERS[normId] || CHARACTERS.player;

    return {
      characterId: normId,
      expression: exp,
      imageUrl,
      fallbackSvg,
      themeColor: charMeta.themeColor || '#6366f1',
      name: charMeta.name
    };
  }

  /**
   * Resolve Background Asset
   */
  getBackground(bgKey) {
    const key = this.normalizeBgKey(bgKey);
    let imageUrl = ASSET_PATHS.backgrounds[key] || null;
    if (this.failedUrls.has(imageUrl)) {
      imageUrl = null;
    }

    const fallbackSvg = generateBackgroundSvg(key);

    return {
      bgKey: key,
      imageUrl,
      fallbackSvg
    };
  }

  /**
   * Resolve Enemy Portrait Asset with guaranteed fallback
   */
  getEnemyPortrait(enemyId) {
    const normId = this.normalizeEnemyId(enemyId);
    let imageUrl = ASSET_PATHS.enemies[normId] || ASSET_PATHS.enemies[enemyId] || null;
    if (this.failedUrls.has(imageUrl)) {
      imageUrl = null;
    }

    const charMeta = CHARACTERS[normId] || CHARACTERS[enemyId] || CHARACTERS.training_dummy;
    const fallbackSvg = charMeta?.avatarSvg || generatePortraitSvg(normId, 'serious');

    return {
      enemyId: normId,
      imageUrl,
      fallbackSvg,
      name: charMeta?.name || 'Enemy',
      themeColor: charMeta?.themeColor || '#ef4444'
    };
  }

  normalizeEnemyId(id) {
    if (id === 'tower_construct') return 'tower_guardian';
    if (id === 'student_rival') return 'kuroki';
    if (id === 'antagonist_kagami') return 'kagami';
    if (id === 'tower_core_final') return 'tower_core';
    return id || 'training_dummy';
  }

  normalizeId(id) {
    if (id === 'aoi') return 'rina';
    if (id === 'daiki') return 'kai';
    if (id === 'kuroki') return 'mika';
    if (id === 'shindou') return 'hayase';
    return id || 'player';
  }

  normalizeBgKey(key) {
    if (!key) return 'academy_classroom';
    if (key === 'classroom') return 'academy_classroom';
    if (key === 'city_sealed' || key === 'alarm') return 'city_street';
    if (key === 'courtyard_cleared' || key === 'ending_morning') return 'academy_courtyard';
    if (key === 'archive_room') return 'academy_library';
    return key;
  }
}

export const assetLoader = new AssetLoaderService();
export { generatePortraitSvg, generateBackgroundSvg };
