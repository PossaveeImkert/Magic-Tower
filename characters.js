/**
 * ARCANA: THE TOWER - Character Data & Avatars
 * World Setting: Late 1990s - Early 2000s Japanese Magic Academy
 */

export const CHARACTERS = {
  player: {
    id: 'player',
    name: 'นักเรียนใหม่ (คุณ)',
    englishName: 'Player',
    role: 'นักเรียนเวทมนตร์ปี 1',
    category: 'Dual Potential (ผู้มีศักยภาพคู่)',
    description: 'นักเรียนใหม่ปีหนึ่งสถาบันเวทมนตร์แห่งชาติ ไร้ประสบการณ์ เต็มไปด้วยความอยากรู้อยากเห็น และค่อยๆ มั่นใจขึ้นทีละขั้น',
    themeColor: '#4f46e5',
    avatarSvg: `
      <svg viewBox="0 0 120 120" class="character-svg">
        <circle cx="60" cy="60" r="56" fill="#1e1b4b" stroke="#6366f1" stroke-width="3"/>
        <!-- Hair back -->
        <path d="M25 60 C25 25 95 25 95 60 C95 80 85 95 60 95 C35 95 25 80 25 60 Z" fill="#1e293b"/>
        <!-- Face -->
        <ellipse cx="60" cy="65" rx="30" ry="32" fill="#fed7aa"/>
        <!-- Hair front/bangs -->
        <path d="M30 45 Q50 30 60 48 Q70 28 90 46 Q75 62 60 52 Q45 64 30 45 Z" fill="#0f172a"/>
        <!-- Eyes -->
        <ellipse cx="48" cy="62" rx="4.5" ry="5.5" fill="#1e1b4b"/>
        <ellipse cx="72" cy="62" rx="4.5" ry="5.5" fill="#1e1b4b"/>
        <circle cx="49" cy="60" r="1.5" fill="#38bdf8"/>
        <circle cx="73" cy="60" r="1.5" fill="#38bdf8"/>
        <!-- Academy Collar & Tie -->
        <path d="M38 96 L60 88 L82 96 L76 116 L44 116 Z" fill="#0f172a"/>
        <path d="M57 90 L63 90 L61 114 L59 114 Z" fill="#6366f1"/>
        <polygon points="60,92 56,102 64,102" fill="#fbbf24"/>
      </svg>
    `
  },
  rina: {
    id: 'rina',
    name: 'Rina (รินะ)',
    englishName: 'Rina',
    role: 'เพื่อนร่วมชั้น / Internal Mage',
    category: 'Internal Mage (สายเวทมนตร์ภายใน)',
    personality: 'ร่าเริง ตรงไปตรงมา รักการแข่งขัน เป็นมิตร ชอบเวทมนตร์เชิงปฏิบัติการ',
    combatStyle: 'Aggressive Spell Deck (เน้นพลังโจมตีรวดเร็วและต่อเนื่อง)',
    description: 'เพื่อนร่วมชั้นผู้มีพลังเวทมนตร์ภายในเข้มข้น ร่าเริง ตรงไปตรงมา รักการแข่งขันและชอบเวทมนตร์เชิงปฏิบัติการ',
    themeColor: '#0284c7',
    avatarSvg: `
      <svg viewBox="0 0 120 120" class="character-svg">
        <circle cx="60" cy="60" r="56" fill="#0c4a6e" stroke="#38bdf8" stroke-width="3"/>
        <!-- Long flowing hair -->
        <path d="M22 45 C20 10 100 10 98 45 C98 90 85 110 75 116 L45 116 C35 110 22 90 22 45 Z" fill="#0369a1"/>
        <!-- Face -->
        <ellipse cx="60" cy="62" rx="28" ry="30" fill="#fde68a"/>
        <!-- Bangs -->
        <path d="M32 40 Q48 55 60 42 Q72 55 88 40 Q75 32 60 30 Q45 32 32 40 Z" fill="#0284c7"/>
        <!-- Blue eyes with sharp focus -->
        <ellipse cx="48" cy="60" rx="4" ry="5.5" fill="#075985"/>
        <ellipse cx="72" cy="60" rx="4" ry="5.5" fill="#075985"/>
        <circle cx="49" cy="58" r="1.5" fill="#bae6fd"/>
        <circle cx="73" cy="58" r="1.5" fill="#bae6fd"/>
        <!-- Gentle confident smile -->
        <path d="M54 75 Q60 78 66 75" stroke="#b45309" stroke-width="2" fill="none"/>
        <!-- Uniform with ribbon -->
        <path d="M36 94 L60 86 L84 94 L80 116 L40 116 Z" fill="#0f172a"/>
        <circle cx="60" cy="95" r="5" fill="#38bdf8"/>
        <path d="M55 96 L48 108 M65 96 L72 108" stroke="#38bdf8" stroke-width="3"/>
      </svg>
    `
  },
  kai: {
    id: 'kai',
    name: 'Kai (ไค)',
    englishName: 'Kai',
    role: 'เพื่อนร่วมชั้น / External Mage',
    category: 'External Mage (สายเวทอุปกรณ์)',
    personality: 'สุขุม มีเหตุผล ประชดประชันเล็กน้อย ถนัดอุปกรณ์เวท ไม่ไว้วางใจพลังเวทที่ไม่เสถียร',
    combatStyle: 'Control / Defense Deck (เน้นการตั้งรับและคุมจังหวะ)',
    description: 'เพื่อนร่วมชั้นผู้ช่ำชองการใช้อุปกรณ์เวทมนตร์และโทรศัพท์ดัดแปลง สุขุม ช่างสังเกต และชอบวางแผนอย่างรอบคอบ',
    themeColor: '#ea580c',
    avatarSvg: `
      <svg viewBox="0 0 120 120" class="character-svg">
        <circle cx="60" cy="60" r="56" fill="#431407" stroke="#f97316" stroke-width="3"/>
        <!-- Spiky energetic hair -->
        <path d="M26 55 L35 25 L50 35 L62 18 L76 33 L90 24 L94 56 C94 85 80 100 60 100 C40 100 26 85 26 55 Z" fill="#7c2d12"/>
        <!-- Face -->
        <ellipse cx="60" cy="64" rx="28" ry="29" fill="#fed7aa"/>
        <!-- Short front spikes -->
        <polygon points="40,38 48,50 56,40 64,52 74,40 60,34" fill="#9a3412"/>
        <!-- Glasses / Goggles -->
        <rect x="36" y="54" width="20" height="15" rx="3" fill="#fdba74" opacity="0.6" stroke="#ea580c" stroke-width="2"/>
        <rect x="64" y="54" width="20" height="15" rx="3" fill="#fdba74" opacity="0.6" stroke="#ea580c" stroke-width="2"/>
        <line x1="56" y1="61" x2="64" y2="61" stroke="#ea580c" stroke-width="2"/>
        <!-- Grin -->
        <path d="M52 77 Q60 84 68 77 Z" fill="#ffffff" stroke="#9a3412" stroke-width="1.5"/>
        <!-- Flip Phone in hand / gadget collar -->
        <path d="M35 95 L60 88 L85 95 L80 116 L40 116 Z" fill="#1e293b"/>
        <rect x="76" y="80" width="16" height="26" rx="3" fill="#334155" stroke="#f97316" stroke-width="1.5"/>
        <line x1="84" y1="74" x2="84" y2="80" stroke="#f97316" stroke-width="2"/>
      </svg>
    `
  },
  hayase: {
    id: 'hayase',
    name: 'Professor Hayase (อาจารย์ฮายาเสะ)',
    englishName: 'Prof. Hayase',
    role: 'อาจารย์ประจำภาควิชาทฤษฎีเวท',
    category: 'Academy Instructor & Historian',
    personality: 'จริงจัง มีความรับผิดชอบ ใจเย็น ปกป้องนักเรียน รอบรู้ประวัติศาสตร์เวทมนตร์',
    combatStyle: 'Barrier & Ancient Wards (มหาข่ายเวทป้องกัน)',
    description: 'อาจารย์ผู้รอบรู้ทฤษฎีเวทมนตร์และประวัติศาสตร์หอคอย คอยอธิบายกฎและปกป้องเหล่านักเรียนอย่างจริงใจ',
    themeColor: '#7c3aed',
    avatarSvg: `
      <svg viewBox="0 0 120 120" class="character-svg">
        <circle cx="60" cy="60" r="56" fill="#2e1065" stroke="#a855f7" stroke-width="3"/>
        <!-- Neatly combed dark silver hair -->
        <path d="M28 58 C28 20 92 20 92 58 C92 78 80 94 60 94 C40 94 28 78 28 58 Z" fill="#475569"/>
        <!-- Face -->
        <ellipse cx="60" cy="64" rx="27" ry="29" fill="#fce7f3"/>
        <path d="M32 44 Q60 30 88 44 Q70 42 60 42 Q48 42 32 44 Z" fill="#334155"/>
        <!-- Wireframe glasses -->
        <circle cx="48" cy="60" r="8" fill="none" stroke="#d8b4fe" stroke-width="1.8"/>
        <circle cx="72" cy="60" r="8" fill="none" stroke="#d8b4fe" stroke-width="1.8"/>
        <line x1="56" y1="60" x2="64" y2="60" stroke="#d8b4fe" stroke-width="1.8"/>
        <!-- Stern expression -->
        <line x1="53" y1="76" x2="67" y2="76" stroke="#475569" stroke-width="2"/>
        <!-- High-collared mage trenchcoat -->
        <path d="M32 94 L60 84 L88 94 L84 116 L36 116 Z" fill="#1e1b4b" stroke="#a855f7" stroke-width="1.5"/>
        <polygon points="60,86 52,98 68,98" fill="#d4af37"/>
      </svg>
    `
  },
  mika: {
    id: 'mika',
    name: 'Mika (มิกะ)',
    englishName: 'Mika',
    role: 'นักเรียนเงียบขรึมผู้เชื่อมโยงกับหอคอย',
    category: 'Ancient Resonance (เวทมนตร์ไม่ปรากฏประเภท)',
    personality: 'เงียบ ช่างสังเกต กังวลต่อหอคอย เก็บซ่อนความลับสำคัญ แต่ไม่มีเจตนาหลอกลวง',
    combatStyle: 'Balanced / Utility Deck (สมดุลและฟื้นฟูเสถียรภาพ)',
    description: 'นักเรียนผู้มีคลื่นมานาเชื่อมโยงกับหอคอยอัลเคนาโดยตรง กังวลต่อสิ่งที่กำลังจะเกิดขึ้น แต่พร้อมยืนเคียงข้างเพื่อนๆ',
    themeColor: '#10b981',
    avatarSvg: `
      <svg viewBox="0 0 120 120" class="character-svg">
        <circle cx="60" cy="60" r="56" fill="#064e3b" stroke="#10b981" stroke-width="3"/>
        <path d="M26 50 C26 22 94 22 94 50 C94 85 82 98 60 98 C38 98 26 85 26 50 Z" fill="#134e4a"/>
        <ellipse cx="60" cy="64" rx="27" ry="29" fill="#fef3c7"/>
        <path d="M30 42 Q45 28 60 40 Q75 28 90 42 Q75 60 60 50 Q45 60 30 42 Z" fill="#042f2e"/>
        <ellipse cx="48" cy="60" rx="4" ry="5.5" fill="#0f766e"/>
        <ellipse cx="72" cy="60" rx="4" ry="5.5" fill="#0f766e"/>
        <circle cx="49" cy="58" r="1.5" fill="#5eead4"/>
        <circle cx="73" cy="58" r="1.5" fill="#5eead4"/>
        <line x1="55" y1="75" x2="65" y2="75" stroke="#042f2e" stroke-width="2"/>
        <path d="M36 94 L60 86 L84 94 L80 116 L40 116 Z" fill="#0f172a"/>
        <polygon points="60,88 54,98 66,98" fill="#10b981"/>
      </svg>
    `
  },
  broadcast: {
    id: 'broadcast',
    name: 'ระบบเสียงตามสายฉุกเฉิน',
    englishName: 'Emergency PA System',
    role: 'ศูนย์ควบคุมป้องกันภัยเวทมนตร์โตเกียว',
    category: 'System Alert',
    description: 'สัญญาณไซเรนแจ้งเตือนเหตุการณ์ผิดปกติระดับหายนะภัยแห่งชาติ',
    themeColor: '#dc2626',
    avatarSvg: `
      <svg viewBox="0 0 120 120" class="character-svg">
        <circle cx="60" cy="60" r="56" fill="#450a0a" stroke="#ef4444" stroke-width="3"/>
        <!-- Warning Triangle & Megaphone -->
        <polygon points="60,25 96,88 24,88" fill="#b91c1c" stroke="#fca5a5" stroke-width="3"/>
        <!-- Exclamation -->
        <line x1="60" y1="46" x2="60" y2="68" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
        <circle cx="60" cy="78" r="4" fill="#ffffff"/>
        <!-- Sound waves -->
        <path d="M18 50 A48 48 0 0 0 18 70" stroke="#f87171" stroke-width="3" fill="none"/>
        <path d="M102 50 A48 48 0 0 1 102 70" stroke="#f87171" stroke-width="3" fill="none"/>
      </svg>
    `
  },
  tower_construct: {
    id: 'tower_construct',
    name: 'เศษเสี้ยวจิตหอคอย',
    englishName: 'Tower Calamity Shard',
    role: 'สิ่งมีชีวิตพลังงานปริศนา',
    category: 'Tower Anomaly (ศัตรู)',
    description: 'ผลึกเวทมนตร์รูปทรงเรขาคณิตที่ลอยตัวและรวบรวมเศษคอนกรีตกับสายโทรศัพท์รอบเมือง กลายเป็นอสุรกายรุกราน',
    themeColor: '#ec4899',
    avatarSvg: `
      <svg viewBox="0 0 120 120" class="character-svg">
        <circle cx="60" cy="60" r="56" fill="#500724" stroke="#f43f5e" stroke-width="3"/>
        <!-- Floating Obelisk Monolith Shards -->
        <polygon points="60,18 76,55 60,98 44,55" fill="#e11d48" stroke="#fda4af" stroke-width="2"/>
        <polygon points="60,25 70,55 60,90 50,55" fill="#881337"/>
        <polygon points="25,48 42,60 30,80 20,64" fill="#9f1239" opacity="0.85"/>
        <polygon points="95,48 100,64 90,80 78,60" fill="#9f1239" opacity="0.85"/>
        <!-- Ominous Eye in Core -->
        <circle cx="60" cy="55" r="7" fill="#ffe4e6"/>
        <circle cx="60" cy="55" r="3.5" fill="#881337"/>
        <!-- Arcane glyph aura ring -->
        <circle cx="60" cy="55" r="32" fill="none" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="6,4"/>
      </svg>
    `
  },
  training_dummy: {
    id: 'training_dummy',
    name: 'หุ่นฝึกซ้อมเวทมนตร์',
    englishName: 'Training Dummy',
    role: 'เป้าฝึกซ้อมประจำสถาบัน',
    category: 'Target Automaton (ศัตรูฝึกซ้อม)',
    description: 'หุ่นกลไม้ลงอาคมสำหรับนักเรียนเวทมนตร์ปี 1 เพื่อทดสอบทักษะการใช้การ์ดและจังหวะต่อสู้',
    themeColor: '#ca8a04',
    avatarSvg: `
      <svg viewBox="0 0 120 120" class="character-svg">
        <circle cx="60" cy="60" r="56" fill="#422006" stroke="#ca8a04" stroke-width="3"/>
        <!-- Wooden Post Body -->
        <rect x="48" y="25" width="24" height="70" rx="8" fill="#854d0e" stroke="#eab308" stroke-width="2"/>
        <rect x="25" y="45" width="70" height="14" rx="4" fill="#713f12" stroke="#eab308" stroke-width="1.5"/>
        <!-- Target Rings on chest -->
        <circle cx="60" cy="65" r="16" fill="#fef08a" opacity="0.8"/>
        <circle cx="60" cy="65" r="11" fill="#dc2626"/>
        <circle cx="60" cy="65" r="6" fill="#ffffff"/>
        <!-- Head straw bundle -->
        <circle cx="60" cy="32" r="10" fill="#a16207"/>
        <!-- Stitched eyes -->
        <line x1="56" y1="30" x2="58" y2="34" stroke="#ffffff" stroke-width="1.5"/>
        <line x1="58" y1="30" x2="56" y2="34" stroke="#ffffff" stroke-width="1.5"/>
        <line x1="62" y1="30" x2="64" y2="34" stroke="#ffffff" stroke-width="1.5"/>
        <line x1="64" y1="30" x2="62" y2="34" stroke="#ffffff" stroke-width="1.5"/>
      </svg>
    `
  },
  mana_beast: {
    id: 'mana_beast',
    name: 'อสูรมานาป่าชานเมือง',
    englishName: 'Mana Beast',
    role: 'สัตว์อสูรพลังงานเวท',
    category: 'Wild Anomaly (ศัตรูปานกลาง)',
    description: 'สุนัขป่าที่ได้รับไอเวทมนตร์รั่วไหลจากรอยแยกหอคอย ร่างกายมีเกล็ดผลึกสีฟ้าและกรงเล็บสายฟ้า',
    themeColor: '#0284c7',
    avatarSvg: `
      <svg viewBox="0 0 120 120" class="character-svg">
        <circle cx="60" cy="60" r="56" fill="#082f49" stroke="#0ea5e9" stroke-width="3"/>
        <!-- Wolf/Beast head silhouette -->
        <polygon points="60,20 75,45 88,40 82,65 95,78 75,85 60,95 45,85 25,78 38,65 32,40 45,45" fill="#0369a1"/>
        <polygon points="60,30 70,50 60,82 50,50" fill="#0c4a6e"/>
        <!-- Glowing Ears & Crystals -->
        <polygon points="32,40 22,25 38,35" fill="#38bdf8"/>
        <polygon points="88,40 98,25 82,35" fill="#38bdf8"/>
        <!-- Glowing Cyan Eyes -->
        <polygon points="46,55 54,58 48,62" fill="#67e8f9"/>
        <polygon points="74,55 66,58 72,62" fill="#67e8f9"/>
        <!-- Fangs -->
        <polygon points="53,74 56,82 58,74" fill="#ffffff"/>
        <polygon points="67,74 64,82 62,74" fill="#ffffff"/>
        <!-- Mana spark runes -->
        <circle cx="60" cy="42" r="3" fill="#38bdf8"/>
      </svg>
    `
  },
  tower_guardian: {
    id: 'tower_guardian',
    name: 'ผู้พิทักษ์ประตูหอคอย',
    englishName: 'Tower Guardian',
    role: 'องครักษ์เกราะหอคอยโบราณ',
    category: 'Elite Gatekeeper (บอส)',
    description: 'เกราะหนักโกเลมโบราณที่ฟื้นคืนชีพจากการตื่นของหอคอยทมิฬ พกพาง้าวเวทและโล่สนามพลังสะท้อนการโจมตี',
    themeColor: '#7c3aed',
    avatarSvg: `
      <svg viewBox="0 0 120 120" class="character-svg">
        <circle cx="60" cy="60" r="56" fill="#2e1065" stroke="#a855f7" stroke-width="3"/>
        <!-- Golem Helm / Armor -->
        <path d="M35 35 L60 20 L85 35 L88 75 L60 95 L32 75 Z" fill="#4c1d95" stroke="#c084fc" stroke-width="2"/>
        <rect x="42" y="48" width="36" height="8" rx="2" fill="#0f172a"/>
        <!-- Crimson Visor Slit -->
        <rect x="45" y="50" width="30" height="4" rx="2" fill="#ef4444"/>
        <!-- Horns/Pillars on helmet -->
        <polygon points="32,35 24,18 36,28" fill="#7e22ce" stroke="#d8b4fe" stroke-width="1.5"/>
        <polygon points="88,35 96,18 84,28" fill="#7e22ce" stroke="#d8b4fe" stroke-width="1.5"/>
        <!-- Crest Crystal -->
        <polygon points="60,24 65,34 60,40 55,34" fill="#fbbf24"/>
        <!-- Heavy Collar -->
        <path d="M28 85 L60 76 L92 85 L85 105 L35 105 Z" fill="#1e1b4b" stroke="#9333ea" stroke-width="2"/>
      </svg>
    `
  },
  kuroki: {
    id: 'kuroki',
    name: 'ชิกิ คุโรกิ',
    englishName: 'Shiki Kuroki',
    role: 'นักเรียนเวทมนตร์ปี 1 (ผู้พกพาพันธุกรรมโบราณ)',
    category: 'Ancient Keyholder',
    description: 'นักเรียนผู้เงียบขรึม มีคลื่นมานาแปลกประหลาดที่ระบบตรวจจับของสถาบันไม่เคยบันทึกไว้',
    themeColor: '#10b981',
    avatarSvg: `
      <svg viewBox="0 0 120 120" class="character-svg">
        <circle cx="60" cy="60" r="56" fill="#064e3b" stroke="#10b981" stroke-width="3"/>
        <path d="M26 50 C26 22 94 22 94 50 C94 85 82 98 60 98 C38 98 26 85 26 50 Z" fill="#134e4a"/>
        <ellipse cx="60" cy="64" rx="27" ry="29" fill="#fef3c7"/>
        <path d="M30 42 Q45 28 60 40 Q75 28 90 42 Q75 60 60 50 Q45 60 30 42 Z" fill="#042f2e"/>
        <ellipse cx="48" cy="60" rx="4" ry="5.5" fill="#0f766e"/>
        <ellipse cx="72" cy="60" rx="4" ry="5.5" fill="#0f766e"/>
        <circle cx="49" cy="58" r="1.5" fill="#5eead4"/>
        <circle cx="73" cy="58" r="1.5" fill="#5eead4"/>
        <line x1="55" y1="75" x2="65" y2="75" stroke="#042f2e" stroke-width="2"/>
        <path d="M36 94 L60 86 L84 94 L80 116 L40 116 Z" fill="#0f172a"/>
        <polygon points="60,88 54,98 66,98" fill="#10b981"/>
      </svg>
    `
  },
  kagami: {
    id: 'kagami',
    name: 'ดร. คากามิ',
    englishName: 'Dr. Kagami',
    role: 'อดีตหัวหน้านักวิจัยกระทรวงเวทมนตร์',
    category: 'Rogue Researcher (ผู้ต่อต้าน)',
    description: 'นักวิจัยผู้มองเห็นความไม่เท่าเทียมของระบบเวทมนตร์ ปรารถนาจะใช้อัลเคนาทาวเวอร์เพื่อลบเส้นแบ่งระหว่างมนุษย์กับเวทมนตร์',
    themeColor: '#e11d48',
    avatarSvg: `
      <svg viewBox="0 0 120 120" class="character-svg">
        <circle cx="60" cy="60" r="56" fill="#4c0519" stroke="#f43f5e" stroke-width="3"/>
        <path d="M28 50 C28 15 92 15 92 50 C92 78 82 95 60 95 C38 95 28 78 28 50 Z" fill="#334155"/>
        <ellipse cx="60" cy="63" rx="27" ry="29" fill="#fed7aa"/>
        <path d="M32 40 L60 35 L88 40 L75 55 L60 48 L45 55 Z" fill="#1e293b"/>
        <rect x="36" y="52" width="20" height="15" rx="3" fill="#fecdd3" opacity="0.7" stroke="#e11d48" stroke-width="1.8"/>
        <rect x="64" y="52" width="20" height="15" rx="3" fill="#fecdd3" opacity="0.7" stroke="#e11d48" stroke-width="1.8"/>
        <line x1="56" y1="59" x2="64" y2="59" stroke="#e11d48" stroke-width="2"/>
        <path d="M52 75 Q60 80 68 75" stroke="#991b1b" stroke-width="2" fill="none"/>
        <path d="M32 94 L60 85 L88 94 L84 116 L36 116 Z" fill="#881337" stroke="#f43f5e" stroke-width="1.5"/>
      </svg>
    `
  },
  elite_construct: {
    id: 'elite_construct',
    name: 'ผลึกพิทักษ์ชั้นสูง',
    englishName: 'Elite Tower Construct',
    role: 'โกเลมทมิฬองครักษ์แกนกลาง',
    category: 'Ancient Guardian (บอสชั้น 5)',
    description: 'ผลึกมนตราทรงเรขาคณิตที่บีบอัดความหนาแน่นจนแผ่คลื่นความร้อนทำลายล้างรอบรัศมี',
    themeColor: '#d97706',
    avatarSvg: `
      <svg viewBox="0 0 120 120" class="character-svg">
        <circle cx="60" cy="60" r="56" fill="#451a03" stroke="#f59e0b" stroke-width="3"/>
        <polygon points="60,15 85,50 60,95 35,50" fill="#d97706" stroke="#fde68a" stroke-width="2"/>
        <circle cx="60" cy="50" r="10" fill="#fef08a"/>
        <circle cx="60" cy="50" r="5" fill="#b45309"/>
        <polygon points="20,40 32,55 24,70 12,55" fill="#f59e0b" opacity="0.8"/>
        <polygon points="100,40 108,55 96,70 88,55" fill="#f59e0b" opacity="0.8"/>
      </svg>
    `
  },
  tower_core: {
    id: 'tower_core',
    name: 'แกนกลางหอคอยอัลเคนา',
    englishName: 'Arcana Tower Core',
    role: 'ระบบควบคุมมานาบรรพกาล',
    category: 'Core System (บอสใหญ่)',
    description: 'แกนทรงกลมเรขาคณิตที่บรรจุประวัติศาสตร์เวทมนตร์นับพันปี และกำลังส่งคลื่นมานาบิดเบี้ยวไปทั่วฟ้าโตเกียว',
    themeColor: '#c026d3',
    avatarSvg: `
      <svg viewBox="0 0 120 120" class="character-svg">
        <circle cx="60" cy="60" r="56" fill="#3b0764" stroke="#e879f9" stroke-width="3"/>
        <circle cx="60" cy="60" r="32" fill="#701a75" stroke="#f0abfc" stroke-width="2"/>
        <circle cx="60" cy="60" r="18" fill="#d946ef"/>
        <circle cx="60" cy="60" r="8" fill="#ffffff"/>
        <!-- Orbiting glyphs -->
        <rect x="56" y="10" width="8" height="8" fill="#f0abfc" transform="rotate(45 60 14)"/>
        <rect x="56" y="98" width="8" height="8" fill="#f0abfc" transform="rotate(45 60 102)"/>
        <rect x="12" y="56" width="8" height="8" fill="#f0abfc" transform="rotate(45 16 60)"/>
        <rect x="100" y="56" width="8" height="8" fill="#f0abfc" transform="rotate(45 104 60)"/>
      </svg>
    `
  }
};

// Compatibility aliases for legacy saves and references
CHARACTERS.aoi = CHARACTERS.rina;
CHARACTERS.daiki = CHARACTERS.kai;
CHARACTERS.kuroki = CHARACTERS.mika;
CHARACTERS.shindou = CHARACTERS.hayase;
CHARACTERS.student_rival = CHARACTERS.kuroki;
CHARACTERS.antagonist_kagami = CHARACTERS.kagami;
CHARACTERS.tower_core_final = CHARACTERS.tower_core;

/**
 * Relationship stages specification according to Round 4
 */
export const RELATIONSHIP_STAGES = {
  rina: [
    { min: 0, max: 24, stage: 'Stranger (คนแปลกหน้า)', label: 'คนแปลกหน้า' },
    { min: 25, max: 49, stage: 'Acquaintance (คนรู้จัก)', label: 'คนรู้จัก' },
    { min: 50, max: 74, stage: 'Friend (เพื่อน)', label: 'เพื่อน' },
    { min: 75, max: 100, stage: 'Close Friend (เพื่อนสนิท)', label: 'เพื่อนสนิท' }
  ],
  kai: [
    { min: 0, max: 24, stage: 'Stranger (คนแปลกหน้า)', label: 'คนแปลกหน้า' },
    { min: 25, max: 49, stage: 'Acquaintance (คนรู้จัก)', label: 'คนรู้จัก' },
    { min: 50, max: 74, stage: 'Friend (เพื่อน)', label: 'เพื่อน' },
    { min: 75, max: 100, stage: 'Trusted Partner (คู่หูที่ไว้ใจได้)', label: 'คู่หูที่ไว้ใจได้' }
  ],
  mika: [
    { min: 0, max: 24, stage: 'Stranger (คนแปลกหน้า)', label: 'คนแปลกหน้า' },
    { min: 25, max: 49, stage: 'Acquaintance (คนรู้จัก)', label: 'คนรู้จัก' },
    { min: 50, max: 74, stage: 'Friend (เพื่อน)', label: 'เพื่อน' },
    { min: 75, max: 100, stage: 'Trusted Companion (มิตรแท้ผู้เข้าใจ)', label: 'มิตรแท้ผู้เข้าใจ' }
  ],
  hayase: [
    { min: 0, max: 24, stage: 'Instructor (อาจารย์-ศิษย์ทั่วไป)', label: 'อาจารย์-ศิษย์ทั่วไป' },
    { min: 25, max: 49, stage: 'Promising Student (ศิษย์ที่น่าจับตามอง)', label: 'ศิษย์ที่น่าจับตามอง' },
    { min: 50, max: 74, stage: 'Trusted Apprentice (ศิษย์เอกที่ไว้วางใจ)', label: 'ศิษย์เอกที่ไว้วางใจ' },
    { min: 75, max: 100, stage: 'True Successor (ผู้สืบทอดเจตนารมณ์)', label: 'ผู้สืบทอดเจตนารมณ์' }
  ]
};

// Aliases for relationship stages
RELATIONSHIP_STAGES.aoi = RELATIONSHIP_STAGES.rina;
RELATIONSHIP_STAGES.daiki = RELATIONSHIP_STAGES.kai;
RELATIONSHIP_STAGES.kuroki = RELATIONSHIP_STAGES.mika;
RELATIONSHIP_STAGES.shindou = RELATIONSHIP_STAGES.hayase;

export function getRelationshipStage(characterId, value = 0) {
  const normId = normalizeCharacterId(characterId);
  const stages = RELATIONSHIP_STAGES[normId] || RELATIONSHIP_STAGES.rina;
  const val = Math.max(0, Math.min(100, Number(value) || 0));
  const matched = stages.find(s => val >= s.min && val <= s.max);
  return matched ? matched.stage : 'Stranger';
}

export function normalizeCharacterId(characterId) {
  if (characterId === 'aoi') return 'rina';
  if (characterId === 'daiki') return 'kai';
  if (characterId === 'kuroki') return 'mika';
  if (characterId === 'shindou') return 'hayase';
  return characterId;
}
