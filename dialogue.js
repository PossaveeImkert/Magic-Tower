/**
 * ARCANA: THE TOWER - Complete 6-Chapter Main Story Engine & Script
 * Setting: Late 1990s - Early 2000s Modern Fantasy Tokyo Magic Academy
 * Chapters:
 *   Chapter 1: "วันธรรมดาที่ไม่ธรรมดา" (The Ordinary Day)
 *   Chapter 2: "หอคอยกลางเมือง" (The Tower Appears)
 *   Chapter 3: "นักเรียนต้องห้าม" (The Forbidden Student)
 *   Chapter 4: "ชั้นแรก" (The First Floor)
 *   Chapter 5: "ความจริงของเวทมนตร์" (The Truth of Magic)
 *   Chapter 6: "จุดจบของหอคอย" (The End of the Tower) — COMPLETE CONCLUSION, NO CH 7
 */

import { CHARACTERS } from './characters.js';
import { assetLoader } from './assetLoader.js';

export const STORY_SCENES = {
  // =========================================================================
  // CHAPTER 1: "วันธรรมดาที่ไม่ธรรมดา" (The Ordinary Day)
  // =========================================================================
  ch1_sc1_morning: {
    id: 'ch1_sc1_morning',
    chapter: 1,
    chapterName: 'Chapter 1: วันธรรมดาที่ไม่ธรรมดา (The Ordinary Day)',
    title: 'ทางเดินหน้าสถาบัน - เช้าวันเปิดภาคเรียน',
    background: 'classroom',
    music: 'academy',
    dialogues: [
      {
        speaker: 'player',
        text: 'เสียงประกาศสถานีรถไฟชินจูกุแว่วมาตามลม พร้อมกับเสียงกระดิ่งเวทบอกเวลาแปดโมงเช้า...',
        emotion: 'thought'
      },
      {
        speaker: 'player',
        text: 'นี่คือโตเกียวปลายศตวรรษที่ 20 ยุคที่โทรศัพท์ฝาพับกับเพจเจอร์เป็นของฮิต และเวทมนตร์คือศาสตร์วิชาชีพที่มีอยู่จริงในชีวิตประจำวัน',
        emotion: 'thought'
      },
      {
        speaker: 'daiki',
        text: 'เฮ้! เร็น! ทางนี้! เกือบมาสายคาบแรกแล้วไหมล่ะ!',
        emotion: 'cheer'
      },
      {
        speaker: 'aoi',
        text: 'คนที่เกือบสายคือเธอต่างหากล่ะไดกิ มัวแต่นั่งจูนชิปรูนบนมือถือจนลืมดูตารางรถไฟ',
        emotion: 'sigh'
      },
      {
        speaker: 'daiki',
        text: 'โธ่ อาโออิ! นี่มันรุ่นใหม่ล่าสุดเลยนะ รองรับคลื่นเวท 900MHz เชียวนะ ในฐานะ External Mage ฉันต้องเตรียมอุปกรณ์ให้พร้อมสิ!',
        emotion: 'excited'
      },
      {
        speaker: 'aoi',
        text: 'สำหรับ Internal Mage อย่างพวกเรา พลังที่ไหลเวียนในร่างกายต่างหากคือของจริง ไม่ต้องพึ่งแบตเตอรี่ด้วยซ้ำ',
        emotion: 'proud'
      }
    ],
    nextScene: 'ch1_sc2_class'
  },

  ch1_sc2_class: {
    id: 'ch1_sc2_class',
    chapter: 1,
    chapterName: 'Chapter 1: วันธรรมดาที่ไม่ธรรมดา',
    title: 'ห้องเรียนปีหนึ่ง - ภาควิชาทฤษฎีเวทมนตร์',
    background: 'classroom',
    dialogues: [
      {
        speaker: 'shindou',
        text: 'นั่งที่ให้เรียบร้อย... ยินดีต้อนรับนักเรียนใหม่ทุกคนสู่สถาบันการศึกษาเวทมนตร์แห่งชาติ',
        emotion: 'serious'
      },
      {
        speaker: 'shindou',
        text: 'ในโลกยุคนี้ Internal Mage ใช้ร่างกายเป็นแกนเวท แต่ต้องระวัง "Mana Stability" ไม่ให้พลังย้อนกลับทำลายชีพจรตนเอง',
        emotion: 'explaining'
      },
      {
        speaker: 'shindou',
        text: 'ส่วน External Mage อาศัยสื่อกลาง เช่น โทรศัพท์ วงจรอิเล็กทรอนิกส์ หรือไม้เท้า ควบคุมได้แม่นยำกว่าแต่พึ่งพาเครื่องมือ ทั้งสองศาสตร์ไม่มีใครเหนือกว่าใคร',
        emotion: 'explaining'
      },
      {
        speaker: 'shindou',
        text: 'เอาล่ะ... ก่อนจะเข้าสู่เนื้อหาเชิงลึก เราจะมาทดสอบสำรับการ์ดเวทมนตร์พื้นฐานในวิชาปฏิบัติการต่อสู้กัน',
        emotion: 'command'
      }
    ],
    nextScene: 'ch1_sc3_exercise'
  },

  ch1_sc3_exercise: {
    id: 'ch1_sc3_exercise',
    chapter: 1,
    chapterName: 'Chapter 1: วันธรรมดาที่ไม่ธรรมดา',
    title: 'ลานฝึกซ้อมเวทมนตร์ในร่ม',
    background: 'classroom',
    dialogues: [
      {
        speaker: 'shindou',
        text: 'คุณเร็น... ในฐานะที่คุณมีศักยภาพผสมผสาน ก้าวออกมาข้างหน้าและทดสอบการ์ดชุดแรกกับ [หุ่นฝึกซ้อมเวทมนตร์]',
        emotion: 'command'
      },
      {
        speaker: 'player',
        text: 'จำกฎพื้นฐาน: บริหารจัดการ Mana, กาง Shield เพื่อป้องกัน และโจมตีเมื่อสบโอกาส... เริ่มการฝึกซ้อม!',
        emotion: 'determined'
      }
    ],
    battleTrigger: {
      enemyId: 'training_dummy',
      enemyName: 'หุ่นฝึกซ้อมเวทมนตร์ (Training Dummy)',
      enemyHp: 45,
      postVictoryScene: 'ch1_sc5_break'
    }
  },

  ch1_sc5_break: {
    id: 'ch1_sc5_break',
    chapter: 1,
    chapterName: 'Chapter 1: วันธรรมดาที่ไม่ธรรมดา',
    title: 'เวลาพักกลางวัน - ระเบียงทางเชื่อม',
    background: 'classroom',
    music: 'academy',
    onEnter: (game) => {
      game.unlockStoryCard('quick_cast', 'Quick Cast');
    },
    dialogues: [
      {
        speaker: 'hayase',
        text: '『ยินดีด้วย! คุณผ่านการทดสอบขั้นแรก ได้รับการ์ดใหม่ [Quick Cast] เพิ่มลงในสำรับแล้ว!』',
        emotion: 'system'
      },
      {
        speaker: 'kai',
        text: 'ฟาดฟันได้เฉียบขาดมาก! จัดสรรมานาได้คุ้มค่าทุกเทิร์นเลยนะเนี่ย!',
        emotion: 'cheer'
      },
      {
        speaker: 'rina',
        text: 'การร่ายเวทรักษาความเสถียรมานาของเธอน่าสนใจมาก มีระเบียบวินัยและสัญชาตญาณที่ดีเลย!',
        emotion: 'smile'
      },
      {
        speaker: 'mika',
        text: '(มิกะยืนอยู่มุมระเบียง แววตาสงบนิ่งแต่แฝงความกังวลมองออกไปนอกหน้าต่างสถาบัน)',
        emotion: 'shy'
      }
    ],
    choice: {
      prompt: 'ช่วงพักกลางวันหลังการฝึก คุณอยากเริ่มต้นพูดคุยกับใคร?',
      options: [
        {
          text: 'ลองถาม Rina เรื่องเวทมนตร์',
          targetScene: 'ch1_sc6_announcement',
          effect: (game) => {
            game.unlockStoryCard('quick_cast', 'Quick Cast');
            game.increaseRelationship('rina', 5);
            game.state.storyChoices['ch1_choice_1'] = 'rina';
          }
        },
        {
          text: 'ถาม Kai เกี่ยวกับอุปกรณ์เวทมนตร์',
          targetScene: 'ch1_sc6_announcement',
          effect: (game) => {
            game.unlockStoryCard('quick_cast', 'Quick Cast');
            game.increaseRelationship('kai', 5);
            game.state.storyChoices['ch1_choice_1'] = 'kai';
          }
        },
        {
          text: 'สังเกต Mika ที่ดูเหมือนกังวล',
          targetScene: 'ch1_sc6_announcement',
          effect: (game) => {
            game.unlockStoryCard('quick_cast', 'Quick Cast');
            game.increaseRelationship('mika', 5);
            game.state.storyChoices['ch1_choice_1'] = 'mika';
          }
        }
      ]
    }
  },

  ch1_sc6_announcement: {
    id: 'ch1_sc6_announcement',
    chapter: 1,
    chapterName: 'Chapter 1: วันธรรมดาที่ไม่ธรรมดา',
    title: 'สัญญาณไซเรนฉุกเฉินทั่วเมือง',
    background: 'alarm',
    music: 'city',
    dialogues: [
      {
        speaker: 'broadcast',
        text: '「หวีดดดดดดดดดดดดดดดดดดด—!!」\n(เสียงหวูดเตือนภัยระดับชาติกระหึ่มขึ้นจากเสาสัญญาณทั่วโตเกียว)',
        emotion: 'alarm'
      },
      {
        speaker: 'broadcast',
        text: '『ประกาศฉุกเฉินจากกองบัญชาการเวทมนตร์แห่งชาติ! ตรวจพบโครงสร้างปริศนาขนาดมหึมาผุดขึ้น ณ ใจกลางเมืองชินจูกุ!』',
        emotion: 'alarm'
      },
      {
        speaker: 'broadcast',
        text: '『โครงสร้างมีลักษณะคล้าย "หอคอยทมิฬไร้จุดสิ้นสุด" ตรวจไม่พบคลื่นพลังงานที่สามารถระบุประเภทในระบบเดิมได้!』',
        emotion: 'alarm'
      },
      {
        speaker: 'kai',
        text: 'หน้าต่างห้องเรียนสั่นไปหมดแล้ว! ดูบนฟ้านั่นสิ... เสาหินสีดำทมิฬแทงทะลุหมู่เมฆขึ้นไปเลย!',
        emotion: 'shock'
      }
    ],
    nextScene: 'ch1_sc7_reaction'
  },

  ch1_sc7_reaction: {
    id: 'ch1_sc7_reaction',
    chapter: 1,
    chapterName: 'Chapter 1: วันธรรมดาที่ไม่ธรรมดา',
    title: 'ห้องเรียนสถาบัน - คำสั่งปิดพื้นที่',
    background: 'alarm',
    dialogues: [
      {
        speaker: 'hayase',
        text: 'นักเรียนทุกคนประจำอยู่ในห้องเรียน! ทางสถาบันสั่งปิดทางเข้าออกชั่วคราวตามมาตรการป้องกันภัยขั้นสูงสุด!',
        emotion: 'command'
      },
      {
        speaker: 'rina',
        text: 'อาจารย์คะ หอคอยนั่นมันคืออะไรกันแน่? การทดลองลับของรัฐบาล หรือเวทมนตร์โบราณที่ตื่นขึ้นคะ?',
        emotion: 'worried'
      },
      {
        speaker: 'hayase',
        text: 'ยังไม่มีคำตอบที่แน่ชัด... วงการเวทมนตร์ทั่วโลกไม่เคยมีบันทึกถึงโครงสร้างรูปทรงเรขาคณิตเช่นนี้มาก่อน',
        emotion: 'solemn'
      }
    ],
    choice: {
      prompt: 'เมื่อหอคอยทมิฬปรากฏขึ้นกลางเมือง คุณคิดว่าสิ่งที่ควรทำที่สุดในตอนนี้คืออะไร?',
      options: [
        {
          text: 'สิ่งแรกที่ต้องทำคือช่วยคนในเมือง',
          targetScene: 'ch1_sc8_end',
          effect: (game) => {
            game.increaseRelationship('hayase', 3);
            game.state.storyChoices['ch1_tower_reaction'] = 'help_people';
          }
        },
        {
          text: 'เราควรรู้ก่อนว่าหอคอยคืออะไร',
          targetScene: 'ch1_sc8_end',
          effect: (game) => {
            game.increaseRelationship('kai', 3);
            game.state.storyChoices['ch1_tower_reaction'] = 'analyze';
          }
        },
        {
          text: 'ฉันรู้สึกว่ามันกำลังเรียกหาเรา',
          targetScene: 'ch1_sc8_end',
          effect: (game) => {
            game.increaseRelationship('mika', 3);
            game.state.storyChoices['ch1_tower_reaction'] = 'calling';
          }
        }
      ]
    }
  },

  ch1_sc8_end: {
    id: 'ch1_sc8_end',
    chapter: 1,
    chapterName: 'Chapter 1: วันธรรมดาที่ไม่ธรรมดา',
    title: 'สัญญาณสั่นสะเทือนในมือ',
    background: 'classroom',
    autoSaveCheckpoint: 'บทสรุป Chapter 1: วันธรรมดาที่ไม่ธรรมดา',
    dialogues: [
      {
        speaker: 'player',
        text: '(ผมเอามือแตะกระเป๋าใส่สำรับการ์ดและอุปกรณ์เวทประจำตัว... ทันใดนั้น แสงสีครามจาง ๆ ก็สว่างวาบขึ้นมา)',
        emotion: 'thought'
      },
      {
        speaker: 'player',
        text: '(มันตอบสนองต่อคลื่นความถี่ของหอคอยทมิฬโดยตรง... ราวกับมีบางสิ่งในตัวผมที่หอคอยนั้นกำลังรอคอยอยู่)',
        emotion: 'thought'
      },
      {
        speaker: 'shindou',
        text: '『จบบทที่ 1: ระบบบันทึกอัตโนมัติได้รับการบันทึกเรียบร้อย』',
        emotion: 'system'
      }
    ],
    nextScene: 'ch2_sc1_lockdown'
  },

  // =========================================================================
  // CHAPTER 2: "หอคอยกลางเมือง" (The Tower Appears)
  // =========================================================================
  ch2_sc1_lockdown: {
    id: 'ch2_sc1_lockdown',
    chapter: 2,
    chapterName: 'Chapter 2: หอคอยกลางเมือง (The Tower Appears)',
    title: 'ถนนชินจูกุ - ข่ายมนตราปิดล้อมเมือง',
    background: 'city_sealed',
    music: 'city',
    dialogues: [
      {
        speaker: 'daiki',
        text: 'สามวันแล้วตั้งแต่หอคอยโผล่มา... ย่านใจกลางเมืองโดนแถบมนตราสีเหลืองกั้นไว้หมด รถไฟใต้ดินหยุดวิ่งสนิทเลย',
        emotion: 'sigh'
      },
      {
        speaker: 'aoi',
        text: 'กองกำลังป้องกันเวทมนตร์พยายามใช้คาถาตรวจสอบทุกประเภทแล้ว แต่คลื่นความถี่ของหอคอยสะท้อนกลับมาเป็นค่าว่างเปล่า',
        emotion: 'serious'
      },
      {
        speaker: 'player',
        text: 'คลื่นพลังงานของมันกำลังส่งผลกระทบต่อสิ่งมีชีวิตรอบนอก... มีรายงานพบสัตว์อสูรมานารั่วไหลออกมาตามรอยต่อมิติ',
        emotion: 'thought'
      }
    ],
    nextScene: 'ch2_sc2_investigation'
  },

  ch2_sc2_investigation: {
    id: 'ch2_sc2_investigation',
    chapter: 2,
    chapterName: 'Chapter 2: หอคอยกลางเมือง',
    title: 'ดาดฟ้าสถาบัน - การตรวจวัดคลื่นมานา',
    background: 'city_sealed',
    music: 'mystery',
    dialogues: [
      {
        speaker: 'hayase',
        text: 'ดูนี่สิ... เข็มทิศมานาหมุนวนผิดปกติอย่างบ้าคลั่ง ค่าการสั่นพ้องเปลี่ยนไปทุก 3 วินาที',
        emotion: 'explaining'
      },
      {
        speaker: 'hayase',
        text: 'มันไม่ได้ปล่อยไอพิษหรือพลังทำลาย แต่เหมือนกำลัง "ส่งคลื่นค้นหา" สัญญาณที่เข้ากันได้ในหมู่ประชากร',
        emotion: 'serious'
      }
    ],
    choice: {
      prompt: 'คุณจะเลือกแนวทางใดในการตรวจสอบข้อมูลและสัญลักษณ์ของหอคอย?',
      options: [
        {
          text: 'ตรวจสอบข้อมูลด้วยเวทมนตร์',
          targetScene: 'ch2_sc3_choice',
          effect: (game) => {
            game.increaseRelationship('rina', 3);
            game.state.storyChoices['ch2_investigation'] = 'magic';
          }
        },
        {
          text: 'ตรวจสอบข้อมูลด้วยอุปกรณ์',
          targetScene: 'ch2_sc3_choice',
          effect: (game) => {
            game.increaseRelationship('kai', 3);
            game.state.storyChoices['ch2_investigation'] = 'gadget';
          }
        },
        {
          text: 'ถาม Mika ว่าเคยเห็นสัญลักษณ์นี้หรือไม่',
          targetScene: 'ch2_sc3_choice',
          effect: (game) => {
            game.increaseRelationship('mika', 5);
            game.state.storyChoices['ch2_investigation'] = 'mika';
          }
        }
      ]
    }
  },

  ch2_sc3_choice: {
    id: 'ch2_sc3_choice',
    chapter: 2,
    chapterName: 'Chapter 2: หอคอยกลางเมือง',
    title: 'ชายแดนเขตแนวป้องกันสถาบัน',
    background: 'city_sealed',
    dialogues: [
      {
        speaker: 'player',
        text: 'สัญญาณรบกวนผิดปกติกำลังดังขึ้นที่สวนป่าด้านหลังสถาบัน... มีบางสิ่งกำลังจะทะลุรอยแยกออกมา!',
        emotion: 'alert'
      },
      {
        speaker: 'rina',
        text: 'มันมาแล้ว! อสูรมานาป่าชานเมือง... ร่างกายมันอาบด้วยไฟฟ้าสถิต!',
        emotion: 'tense'
      }
    ],
    choice: {
      prompt: 'ก่อนเริ่มการต่อสู้จริงครั้งแรก คุณจะจัดแนวทางเข้าปะทะอย่างไร?',
      options: [
        {
          text: 'ฉันจะนำเอง',
          targetScene: 'ch2_sc4_battle',
          effect: (game) => {
            game.increaseRelationship('rina', 2);
            game.state.storyChoices['ch2_approach'] = 'lead';
          }
        },
        {
          text: 'วางแผนก่อน',
          targetScene: 'ch2_sc4_battle',
          effect: (game) => {
            game.increaseRelationship('kai', 2);
            game.state.storyChoices['ch2_approach'] = 'plan';
          }
        }
      ]
    }
  },

  ch2_sc4_battle: {
    id: 'ch2_sc4_battle',
    chapter: 2,
    chapterName: 'Chapter 2: หอคอยกลางเมือง',
    title: 'แนวป่าสถาบัน - การปะทะสัตว์อสูรมานา',
    background: 'courtyard_rift',
    dialogues: [
      {
        speaker: 'mana_beast',
        text: '「โฮกกกกกกกกก!!」\n(สัตว์อสูรเกล็ดผลึกสีครามกระโจนออกมาจากรอยแยกมิติ!)',
        emotion: 'menacing'
      },
      {
        speaker: 'player',
        text: 'มันคือ [อสูรมานาป่าชานเมือง]! ร่างกายของมันสลับการโจมตีและการสร้างเกราะ ระวังกระแสไฟฟ้าให้ดี!',
        emotion: 'determined'
      }
    ],
    battleTrigger: {
      enemyId: 'mana_beast',
      enemyName: 'อสูรมานาป่าชานเมือง (Mana Beast)',
      enemyHp: 70,
      postVictoryScene: 'ch2_sc5_tower_reaction'
    }
  },

  ch2_sc5_tower_reaction: {
    id: 'ch2_sc5_tower_reaction',
    chapter: 2,
    chapterName: 'Chapter 2: หอคอยกลางเมือง',
    title: 'ซากผลึกมานาที่สลายตัว',
    background: 'courtyard_cleared',
    onEnter: (game) => {
      game.unlockStoryCard('mana_surge', 'Mana Surge');
    },
    dialogues: [
      {
        speaker: 'hayase',
        text: '『ยอดเยี่ยมมาก! คุณเอาชนะอสูรมานาได้สำเร็จ ได้รับการ์ดใหม่ [Mana Recovery] เข้าสู่สำรับแล้ว!』',
        emotion: 'system'
      },
      {
        speaker: 'mana_beast',
        text: '(อสูรมานาแตกสลายกลายเป็นละอองไอเวทสีฟ้า และถูกดูดลอยขึ้นสู่อากาศตรงไปยังยอดหอคอย)',
        emotion: 'fading'
      },
      {
        speaker: 'kai',
        text: 'ดูที่หลังมือของนายสิ! อักขระเรขาคณิตรูปสามเหลี่ยมซ้อนทับสว่างวาบขึ้นมา!',
        emotion: 'shock'
      },
      {
        speaker: 'rina',
        text: 'อักขระนั่น... ลวดลายแบบเดียวกับที่จารึกอยู่บนฐานของหอคอยใจกลางโตเกียวเลย!',
        emotion: 'tense'
      }
    ],
    nextScene: 'ch2_sc6_debate'
  },

  ch2_sc6_debate: {
    id: 'ch2_sc6_debate',
    chapter: 2,
    chapterName: 'Chapter 2: หอคอยกลางเมือง',
    title: 'ห้องพักครูสถาบันเวทมนตร์',
    background: 'classroom',
    dialogues: [
      {
        speaker: 'daiki',
        text: 'หรือว่าหอคอยนี้จะสร้างขึ้นเพื่อผู้ใช้เวทสายใดสายหนึ่งโดยเฉพาะ? เช่นเป็นแหล่งพลังของ External Mage?',
        emotion: 'question'
      },
      {
        speaker: 'aoi',
        text: 'แต่คลื่นที่ปล่อยออกมากลับกระตุ้นชีพจรของ Internal Mage อย่างรุนแรงเช่นกัน... มันไม่แยกสายเลยสักนิด',
        emotion: 'explaining'
      },
      {
        speaker: 'shindou',
        text: 'บางทีแนวคิดเรื่องการแบ่งแยก Internal และ External ที่พวกเราเชื่อมาหลายร้อยปี... อาจไม่ใช่ความจริงทั้งหมด',
        emotion: 'solemn'
      }
    ],
    nextScene: 'ch2_sc7_end'
  },

  ch2_sc7_end: {
    id: 'ch2_sc7_end',
    chapter: 2,
    chapterName: 'Chapter 2: หอคอยกลางเมือง',
    title: 'ข้อความปริศนาบนหน้าจอคอมพิวเตอร์',
    background: 'classroom',
    autoSaveCheckpoint: 'บทสรุป Chapter 2: หอคอยกลางเมือง',
    dialogues: [
      {
        speaker: 'broadcast',
        text: '『ตรวจพบข้อความเข้ารหัสความถี่โบราณถูกส่งเข้ามายังจอ CRT ของสถาบัน:』\n"THE TOWER HAS RECOGNIZED A COMPATIBLE MAGIC SIGNATURE."',
        emotion: 'alarm'
      },
      {
        speaker: 'player',
        text: '(ข้อความดับวูบไป... ทิ้งไว้เพียงความเงียบงันและการรับรู้ว่า เวลาแห่งการเผชิญหน้ากำลังใกล้เข้ามา)',
        emotion: 'thought'
      },
      {
        speaker: 'shindou',
        text: '『จบบทที่ 2: ระบบทำการบันทึกอัตโนมัติเรียบร้อย』',
        emotion: 'system'
      }
    ],
    nextScene: 'ch3_sc1_research'
  },

  // =========================================================================
  // CHAPTER 3: "นักเรียนต้องห้าม" (The Forbidden Student)
  // =========================================================================
  ch3_sc1_research: {
    id: 'ch3_sc1_research',
    chapter: 3,
    chapterName: 'Chapter 3: นักเรียนต้องห้าม (The Forbidden Student)',
    title: 'หอสมุดเวทมนตร์สถาบันแห่งชาติ',
    background: 'archive_room',
    dialogues: [
      {
        speaker: 'player',
        text: 'กลิ่นกระดาษสาและหมึกรูนลอยอบอวล อาจารย์ชินโดอนุญาตให้พวกเราค้นคว้าเอกสารโบราณเพื่อหาเบาะแสของหอคอย',
        emotion: 'thought'
      },
      {
        speaker: 'daiki',
        text: 'เจอบันทึกสมัยปลายเอโดะเล่มหนึ่ง! พูดถึง "เสาหินทมิฬที่ควบคุมสมดุลแห่งเอโดะ" แต่ทำไมหน้าถัดไปถึงถูกฉีกทิ้งหมดล่ะ?',
        emotion: 'shock'
      }
    ],
    nextScene: 'ch3_sc2_archive'
  },

  ch3_sc2_archive: {
    id: 'ch3_sc2_archive',
    chapter: 3,
    chapterName: 'Chapter 3: นักเรียนต้องห้าม',
    title: 'ห้องเอกสารต้องห้ามระดับสีชาด',
    background: 'archive_room',
    dialogues: [
      {
        speaker: 'aoi',
        text: 'นี่ไม่ใช่การฉีกธรรมดา... มีการร่ายมนตร์ลบความทรงจำและประวัติศาสตร์ทับลงไป เพื่อไม่ให้คนรุ่นหลังรับรู้การมีอยู่ของมัน',
        emotion: 'serious'
      },
      {
        speaker: 'kuroki',
        text: 'เพราะว่าสิ่งที่อยู่บนหอคอย... คือสิ่งที่รัฐบาลเวทมนตร์กลัวที่สุดยังไงล่ะ',
        emotion: 'calm'
      }
    ],
    nextScene: 'ch3_sc3_kuroki'
  },

  ch3_sc3_kuroki: {
    id: 'ch3_sc3_kuroki',
    chapter: 3,
    chapterName: 'Chapter 3: นักเรียนต้องห้าม',
    title: 'การปรากฏตัวของ ชิกิ คุโรกิ',
    background: 'archive_room',
    dialogues: [
      {
        speaker: 'kuroki',
        text: 'ฉันชื่อ ชิกิ คุโรกิ... นักเรียนแผนกพิเศษที่พวกเธอคงไม่เคยเห็นในตารางสอนปกติ',
        emotion: 'calm'
      },
      {
        speaker: 'aoi',
        text: 'คลื่นมานาในร่างกายของเธอ... มันนิ่งสนิทจนน่าขนลุก ราวกับไม่ใช่ทั้ง Internal หรือ External เลย!',
        emotion: 'tense'
      },
      {
        speaker: 'kuroki',
        text: 'ตระกูลของฉันแบกรับ "กุญแจพันธุกรรมโบราณ" มาหลายร้อยปี... และถ้าพวกเธออยากพิสูจน์ว่าพร้อมจะไปต่อหรือไม่ จงประลองกับฉันในสนาม!',
        emotion: 'command'
      }
    ],
    nextScene: 'ch3_sc4_duel'
  },

  ch3_sc4_duel: {
    id: 'ch3_sc4_duel',
    chapter: 3,
    chapterName: 'Chapter 3: นักเรียนต้องห้าม',
    title: 'ลานประลองสถาบัน - การดวลกับคุโรกิ',
    background: 'classroom',
    dialogues: [
      {
        speaker: 'kuroki',
        text: 'แสดงให้ฉันเห็นสิเร็น ว่าสำรับการ์ดและจิตใจของเธอ มั่นคงพอที่จะไม่ถูกหอคอยกลืนกิน!',
        emotion: 'determined'
      }
    ],
    battleTrigger: {
      enemyId: 'student_rival',
      enemyName: 'ชิกิ คุโรกิ (Shiki Kuroki)',
      enemyHp: 65,
      postVictoryScene: 'ch3_sc5_choice'
    }
  },

  ch3_sc5_choice: {
    id: 'ch3_sc5_choice',
    chapter: 3,
    chapterName: 'Chapter 3: นักเรียนต้องห้าม',
    title: 'หลังการดวล - ความจริงของมิกะ',
    background: 'classroom',
    onEnter: (game) => {
      game.unlockStoryCard('concentration', 'Concentration');
    },
    dialogues: [
      {
        speaker: 'hayase',
        text: '『ยินดีด้วย! คุณผ่านการดวลทดสอบ ได้รับและปลดล็อกการ์ดใหม่ [Concentration]!』',
        emotion: 'system'
      },
      {
        speaker: 'mika',
        text: 'ยอดเยี่ยม... เธอสามารถเจาะทะลุเกราะของฉันได้ ฉันขอยอมรับในฝีมืออย่างจริงใจ',
        emotion: 'smile'
      },
      {
        speaker: 'mika',
        text: 'ความจริงคือ... ฉันชื่อ Mika ตระกูลของฉันแบกรับกุญแจโบราณมานาน และฉันอยากรู้ว่าเกิดอะไรขึ้นบนหอคอยนั้น',
        emotion: 'solemn'
      }
    ],
    choice: {
      prompt: 'เมื่อความเชื่อมโยงระหว่าง Mika กับหอคอยถูกเปิดเผย คุณจะตัดสินใจอย่างไร?',
      options: [
        {
          text: 'ฉันเชื่อใจ Mika',
          targetScene: 'ch3_sc6_info',
          effect: (game) => {
            game.unlockStoryCard('concentration', 'Concentration');
            game.increaseRelationship('mika', 10);
            game.state.storyFlags['mikaTrusted'] = true;
          }
        },
        {
          text: 'ฉันต้องรู้ความจริงทั้งหมด',
          targetScene: 'ch3_sc6_info',
          effect: (game) => {
            game.unlockStoryCard('concentration', 'Concentration');
            game.increaseRelationship('mika', 3);
            game.increaseRelationship('hayase', 2);
          }
        },
        {
          text: 'เรื่องนี้ต้องรายงานอาจารย์',
          targetScene: 'ch3_sc6_info',
          effect: (game) => {
            game.unlockStoryCard('concentration', 'Concentration');
            game.increaseRelationship('hayase', 8);
            game.decreaseRelationship('mika', 3);
            game.state.storyFlags['mikaReported'] = true;
          }
        }
      ]
    }
  },

  ch3_sc6_info: {
    id: 'ch3_sc6_info',
    chapter: 3,
    chapterName: 'Chapter 3: นักเรียนต้องห้าม',
    title: 'บันทึกโบราณ: แกนกลางแห่งอัลเคนา',
    background: 'archive_room',
    dialogues: [
      {
        speaker: 'kuroki',
        text: 'หอคอยนี้มีชื่อว่า "อัลเคนา ทาวเวอร์" สร้างขึ้นในยุคอารยธรรมบรรพกาล ก่อนประวัติศาสตร์ญี่ปุ่นจะถูกบันทึกนับพันปี',
        emotion: 'explaining'
      },
      {
        speaker: 'kuroki',
        text: 'ใจกลางของมันมี "Core" ที่สามารถจัดเรียงและปรับจูนความสัมพันธ์ระหว่างมนุษย์กับมานาธรรมชาติทั้งปวง',
        emotion: 'explaining'
      }
    ],
    nextScene: 'ch3_sc7_end'
  },

  ch3_sc7_end: {
    id: 'ch3_sc7_end',
    chapter: 3,
    chapterName: 'Chapter 3: นักเรียนต้องห้าม',
    title: 'ประตูปริศนาเปิดออก',
    background: 'city_sealed',
    autoSaveCheckpoint: 'บทสรุป Chapter 3: นักเรียนต้องห้าม',
    dialogues: [
      {
        speaker: 'broadcast',
        text: '『แจ้งข่าวด่วน! ฐานของหอคอยทมิฬได้เปิดรอยแยกบานประตูมิติขนาดใหญ่ขึ้นแล้ว! คลื่นมานาคงที่ชั่วขณะ!』',
        emotion: 'alarm'
      },
      {
        speaker: 'shindou',
        text: 'ทางสถาบันอนุมัติให้หน่วยนักเรียนแนวหน้าของพวกเธอร่วมภารกิจสำรวจชั้นแรก... เตรียมสำรับการ์ดให้พร้อม!',
        emotion: 'command'
      },
      {
        speaker: 'player',
        text: '『จบบทที่ 3: ก้าวเข้าสู่การสำรวจหอคอยอัลเคนา (ระบบทำการบันทึกอัตโนมัติ)』',
        emotion: 'system'
      }
    ],
    nextScene: 'ch4_sc1_enter'
  },

  // =========================================================================
  // CHAPTER 4: "ชั้นแรก" (The First Floor)
  // =========================================================================
  ch4_sc1_enter: {
    id: 'ch4_sc1_enter',
    chapter: 4,
    chapterName: 'Chapter 4: ชั้นแรก (The First Floor)',
    title: 'หน้าประตูศิลาทมิฬ - ทางเข้าหอคอยอัลเคนา',
    background: 'tower_entrance',
    dialogues: [
      {
        speaker: 'player',
        text: 'เมื่อก้าวผ่านประตูมิติ เสียงหวูดรถไฟและแสงสีนีออนของชินจูกุปี 1999 ก็เงียบหายไปในพริบตา...',
        emotion: 'thought'
      },
      {
        speaker: 'rina',
        text: 'สถาปัตยกรรมภายในทำจากหินออบซิเดียนสีดำขัดมัน มีเส้นแสงสีม่วงไหลเวียนตามผนังดุจเส้นเลือดใหญ่',
        emotion: 'wonder'
      },
      {
        speaker: 'kai',
        text: 'โทรศัพท์มือถือไม่มีสัญญาณเลย... แต่วงจรเวทในเครื่องกลับแสดงตัวเลขกำลังส่งพุ่งขึ้น 300%!',
        emotion: 'shock'
      },
      {
        speaker: 'mika',
        text: 'อากาศข้างในนี้... สั่นพ้องกับชีพจรของพวกเราอย่างประหลาด ระวังตัวด้วยนะ',
        emotion: 'worried'
      }
    ],
    choice: {
      prompt: 'ก่อนก้าวลึกเข้าไปในหอคอย คุณจะเลือกใครเป็นคู่หูเดินเคียงข้างในชั้นแรกนี้?',
      options: [
        {
          text: 'Rina (ลุยไปข้างหน้าด้วยพลังเวทมนตร์ภายในและความมุ่งมั่น)',
          targetScene: 'ch4_sc2_hall',
          effect: (game) => {
            game.increaseRelationship('rina', 5);
            game.state.selectedPartner = 'rina';
          }
        },
        {
          text: 'Kai (วิเคราะห์วงจรความถี่และใช้อุปกรณ์เกื้อหนุนอย่างมีเหตุผล)',
          targetScene: 'ch4_sc2_hall',
          effect: (game) => {
            game.increaseRelationship('kai', 5);
            game.state.selectedPartner = 'kai';
          }
        },
        {
          text: 'Mika (ใช้สัญชาตญาณและความเข้าใจในหอคอยโบราณ)',
          targetScene: 'ch4_sc2_hall',
          effect: (game) => {
            game.increaseRelationship('mika', 5);
            game.state.selectedPartner = 'mika';
          }
        }
      ]
    }
  },

  ch4_sc2_hall: {
    id: 'ch4_sc2_hall',
    chapter: 4,
    chapterName: 'Chapter 4: ชั้นแรก',
    title: 'โถงทางเดินแห่งความทรงจำ - การปะทะ',
    background: 'tower_hall',
    dialogues: [
      {
        speaker: 'player',
        text: (game) => {
          const partner = game.state.selectedPartner;
          if (partner === 'rina') return 'Rina เดินนำหน้าด้วยความกระฉับกระเฉง เปลวเพลิงสีฟ้าอ่อนลอยวนรอบฝ่ามือของเธอพร้อมรับมือ';
          if (partner === 'kai') return 'Kai กางเสาสัญญาณบนโทรศัพท์ฝาพับ คอยตรวจสอบความหนาแน่นของคลื่นมานาในทางเดินตลอดเวลา';
          if (partner === 'mika') return 'Mika เดินประกบข้างเบา ๆ คอยส่งสัญญาณเตือนทันทีที่ความถี่ของหอคอยเปลี่ยนแปลง';
          return 'ทุกคนเดินเกาะกลุ่มกันอย่างระมัดระวังไปตามโถงทางเดินหินสีดำ';
        },
        emotion: 'thought'
      },
      {
        speaker: 'mana_beast',
        text: '「กรรรรร!!」\n(อสูรมานาเฝ้าทางเดินกระโจนเข้าจู่โจม!)',
        emotion: 'menacing'
      },
      {
        speaker: 'player',
        text: 'ศัตรูระดับสูงกว่าเดิม! ทุกคนจัดแนวตั้งรับ เตรียมใช้การ์ดโจมตีประสานงาน!',
        emotion: 'determined'
      }
    ],
    battleTrigger: {
      enemyId: 'mana_beast',
      enemyName: 'อสูรมานาผู้พิทักษ์โถง (Hall Beast)',
      enemyHp: 75,
      postVictoryScene: 'ch4_sc3_archive'
    }
  },

  ch4_sc3_archive: {
    id: 'ch4_sc3_archive',
    chapter: 4,
    chapterName: 'Chapter 4: ชั้นแรก',
    title: 'ห้องวิจัยบรรพกาล - เศษซากอารยธรรม',
    background: 'tower_hall',
    dialogues: [
      {
        speaker: 'kai',
        text: 'ดูที่โต๊ะทดลองพวกนี้สิ! มีเศษแผงวงจรคล้ายชิปอิเล็กทรอนิกส์ แต่สลักด้วยอักขระเวทโบราณ!',
        emotion: 'excited'
      },
      {
        speaker: 'mika',
        text: 'คนโบราณไม่ได้ใช้เพียงคทาหรือคาถา... แต่พวกเขาสร้างเทคโนโลยีเวทที่ก้าวหน้าอย่างยิ่ง',
        emotion: 'serious'
      },
      {
        speaker: 'player',
        text: (game) => {
          const p = game.state.selectedPartner;
          if (p === 'rina') return 'Rina: "บรรยากาศในนี้กดดันมากเลย... แต่นายไม่ต้องกังวลนะ ถ้ามีอะไรฉันจะเข้าชาร์จทันที!"';
          if (p === 'kai') return 'Kai: "วงจรในมือถือฉันอ่านค่าได้แม่นยำขึ้นมากเมื่อเดินข้างนาย ดูเหมือนคลื่นของเราจะเกื้อหนุนกันนะ"';
          if (p === 'mika') return 'Mika: "ภาพสลักบนเสานี้... มันเล่าถึงประตูแกนกลางชั้น 5 ฉันเริ่มจำความรู้สึกนี้ได้แล้วล่ะ"';
          return 'พวกเราสำรวจดูรอบห้องอย่างพินิจพิเคราะห์';
        },
        emotion: 'thought'
      }
    ],
    nextScene: 'ch4_sc4_message'
  },

  ch4_sc4_message: {
    id: 'ch4_sc4_message',
    chapter: 4,
    chapterName: 'Chapter 4: ชั้นแรก',
    title: 'ข้อความจากผู้สร้างหอคอย',
    background: 'tower_hall',
    dialogues: [
      {
        speaker: 'broadcast',
        text: '『ตรวจพบลำแสงฮอโลกราฟิกโบราณฉายขึ้นกลางห้อง:』\n"หอคอยแห่งนี้มิใช่อาวุธทำลายล้าง หากแต่เป็นสถานีปรับสมดุลคลื่นชีวภาพ เพื่อผสานพลังงานเวทเข้ากับมนุษย์โดยไม่ก่อให้เกิดความเจ็บปวด"',
        emotion: 'info'
      },
      {
        speaker: 'rina',
        text: 'เพื่อไม่ให้เกิดความเจ็บปวดงั้นเหรอ...? แปลว่าการที่ Internal Mage เกิดอาการ Mana Instability ก็เป็นสิ่งที่พวกเขาพยายามแก้ตั้งแต่ตอนนั้นแล้ว?',
        emotion: 'worried'
      }
    ],
    nextScene: 'ch4_sc5_kagami'
  },

  ch4_sc5_kagami: {
    id: 'ch4_sc5_kagami',
    chapter: 4,
    chapterName: 'Chapter 4: ชั้นแรก',
    title: 'การปรากฏตัวของ ดร. คากามิ',
    background: 'tower_hall',
    dialogues: [
      {
        speaker: 'kagami',
        text: 'ฮ่าฮ่าฮ่า! เข้าใจได้ถูกต้องแล้ว!',
        emotion: 'smirk'
      },
      {
        speaker: 'kagami',
        text: 'ฉันคือ ดร. คากามิ... อดีตนักวิจัยที่กระทรวงเวทมนตร์ตราหน้าว่าเป็นคนนอกรีต เพราะฉันพยายามจะปลุกหอคอยนี้ขึ้นมา!',
        emotion: 'confident'
      },
      {
        speaker: 'player',
        text: 'คุณคือคนที่อยู่เบื้องหลังการรบกวนสัญญาณหอคอยงั้นหรือ?!',
        emotion: 'alert'
      },
      {
        speaker: 'kagami',
        text: 'ฉันเพียงแต่ทำหน้าที่เป็นผู้เร่งกระบวนการ... และเพื่อทดสอบว่าพวกเธอคู่ควรกับการไปต่อหรือไม่ จงเอาชนะโกเลมตัวนี้ให้ได้!',
        emotion: 'command'
      }
    ],
    nextScene: 'ch4_sc6_guardian_battle'
  },

  ch4_sc6_guardian_battle: {
    id: 'ch4_sc6_guardian_battle',
    chapter: 4,
    chapterName: 'Chapter 4: ชั้นแรก',
    title: 'ห้องโถงใหญ่ - ปะทะผู้พิทักษ์ประตูหอคอย',
    background: 'tower_hall',
    dialogues: [
      {
        speaker: 'rina',
        text: (game) => {
          return (game.state.relationships?.rina >= 50)
            ? 'คราวนี้มันไม่เหมือนการฝึกแล้วนะ! แต่ถ้ามีนายอยู่ข้าง ๆ ฉันมั่นใจเต็มร้อย!'
            : 'คราวนี้มันไม่เหมือนการฝึกแล้วนะ';
        },
        emotion: 'determined'
      },
      {
        speaker: 'kai',
        text: (game) => {
          return (game.state.relationships?.kai >= 50)
            ? 'อย่าประมาท วิเคราะห์รูปแบบการโจมตีก่อน ฉันคำนวณจุดบอดของเกราะมันให้แล้ว!'
            : 'อย่าประมาท วิเคราะห์รูปแบบการโจมตีก่อน';
        },
        emotion: 'serious'
      },
      {
        speaker: 'mika',
        text: (game) => {
          return (game.state.relationships?.mika >= 50)
            ? 'มัน...กำลังมองมาที่เรา แต่คลื่นมานานี้ ฉันจะช่วยอ่านการเคลื่อนไหวให้เอง!'
            : 'มัน...กำลังมองมาที่เรา';
        },
        emotion: 'tense'
      },
      {
        speaker: 'tower_guardian',
        text: '「คำสั่ง... กำจัด... ผู้บุกรุก...」\n(โกเลมเกราะหนักเงื้อง้าวเวทขึ้นสูง ปลดปล่อยสนามพลังสะท้อนดาเมจ!)',
        emotion: 'menacing'
      },
      {
        speaker: 'player',
        text: 'ระวังมหาเวทคาลามิตี้และเกราะ Guard ของมัน! รวมพลังกันเดี๋ยวนี้!',
        emotion: 'determined'
      }
    ],
    battleTrigger: {
      enemyId: 'tower_guardian',
      enemyName: 'ผู้พิทักษ์ประตูหอคอย (Tower Guardian)',
      enemyHp: 95,
      postVictoryScene: 'ch4_sc7_end'
    }
  },

  ch4_sc7_end: {
    id: 'ch4_sc7_end',
    chapter: 4,
    chapterName: 'Chapter 4: ชั้นแรก',
    title: 'ลิฟต์แกนกลางเลื่อนขึ้น',
    background: 'tower_hall',
    onEnter: (game) => {
      game.unlockStoryCard('reinforced_barrier', 'Reinforced Barrier');
    },
    autoSaveCheckpoint: 'บทสรุป Chapter 4: ชั้นแรกของหอคอย',
    dialogues: [
      {
        speaker: 'hayase',
        text: '『ยินดีด้วย! คุณพิชิตผู้พิทักษ์ประตูหอคอยสำเร็จ ได้รับการ์ดใหม่ [Reinforced Barrier]!』',
        emotion: 'system'
      },
      {
        speaker: 'tower_guardian',
        text: '(เกราะโกเลมโบราณสลายตัว กลไกใจกลางห้องส่งเสียงดังครืน ประตูลิฟต์แกนกลางเปิดออกสู่ชั้นบนสุด)',
        emotion: 'fading'
      },
      {
        speaker: 'kagami',
        text: 'น่าประทับใจมาก... ฉันจะไปรอพวกเธอที่ห้องแกนกลางชั้น 5 มาร่วมดูจุดกำเนิดของยุคสมัยใหม่ด้วยกันเถอะ!',
        emotion: 'laugh'
      },
      {
        speaker: 'player',
        text: '『จบบทที่ 4: ลิฟต์กำลังมุ่งสู่ชั้นแกนกลาง (ระบบทำการบันทึกอัตโนมัติ)』',
        emotion: 'system'
      }
    ],
    nextScene: 'ch5_sc1_truth'
  },

  // =========================================================================
  // CHAPTER 5: "ความจริงของเวทมนตร์" (The Truth of Magic)
  // =========================================================================
  ch5_sc1_truth: {
    id: 'ch5_sc1_truth',
    chapter: 5,
    chapterName: 'Chapter 5: ความจริงของเวทมนตร์ (The Truth of Magic)',
    title: 'ชั้นที่ 5 - หอจดหมายเหตุแกนกลาง',
    background: 'tower_core',
    dialogues: [
      {
        speaker: 'player',
        text: 'ผนังรอบห้องสะท้อนภาพประวัติศาสตร์เวทมนตร์โบราณที่แท้จริง...',
        emotion: 'thought'
      },
      {
        speaker: 'aoi',
        text: 'นี่มัน... มนุษย์ในอดีตทุกคนไม่ได้เกิดมาพร้อมพลังเวท หรือไร้พลังเวทโดยกำเนิด แต่เกิดจากการกระจายตัวของละอองมานาจากหอคอยนี้!',
        emotion: 'shock'
      },
      {
        speaker: 'daiki',
        text: 'แปลว่าการแบ่งแยก Internal กับ External เป็นเพียงความไม่สมบูรณ์ที่ตกค้างมาจากการที่หอคอยหยุดทำงานเมื่อพันปีก่อนงั้นเหรอ?!',
        emotion: 'shock'
      }
    ],
    nextScene: 'ch5_sc2_kuroki_secret'
  },

  ch5_sc2_kuroki_secret: {
    id: 'ch5_sc2_kuroki_secret',
    chapter: 5,
    chapterName: 'Chapter 5: ความจริงของเวทมนตร์',
    title: 'พันธุกรรมของผู้คุมระบบ',
    background: 'tower_core',
    dialogues: [
      {
        speaker: 'kuroki',
        text: 'ใช่แล้ว... บรรพบุรุษของฉันปิดผนึกหอคอยนี้ไว้ เพราะกลัวว่าพลังอันมหาศาลจะถูกนำไปใช้ในสงคราม',
        emotion: 'solemn'
      },
      {
        speaker: 'kuroki',
        text: 'ฉันพกรหัสกุญแจนี้ไว้ในยีนมาโดยไม่รู้ตัว แต่ ดร. คากามิ ต้องการใช้พลังนี้ฝืนบังคับให้ทุกคนเชื่อมต่อพร้อมกัน',
        emotion: 'serious'
      }
    ],
    nextScene: 'ch5_sc3_debate'
  },

  ch5_sc3_debate: {
    id: 'ch5_sc3_debate',
    chapter: 5,
    chapterName: 'Chapter 5: ความจริงของเวทมนตร์',
    title: 'การถกเถียงเรื่องอนาคตของหอคอย',
    background: 'tower_core',
    dialogues: [
      {
        speaker: 'kai',
        text: 'ถ้าเราทำลายหอคอยทิ้ง เราอาจขจัดภัยคุกคามได้ แต่ความรู้และโอกาสที่จะรักษาอาการมานาไม่เสถียรก็จะหายไปตลอดกาลนะ!',
        emotion: 'worried'
      },
      {
        speaker: 'rina',
        text: 'แต่ถ้าปล่อยให้ทำงานต่อไปโดยไม่มีการควบคุม โตเกียวทั้งเมืองอาจกลายเป็นเตาหลอมมานาจนผู้คนล้มตาย!',
        emotion: 'tense'
      }
    ],
    choice: {
      prompt: 'เมื่อความจริงเรื่องต้นกำเนิดเวทมนตร์ถูกเปิดเผย คุณมีความคิดเห็นอย่างไร?',
      options: [
        {
          text: 'เวทมนตร์ควรเป็นสิ่งที่ทุกคนเข้าถึงได้',
          targetScene: 'ch5_sc4_kagami_plan',
          effect: (game) => {
            game.increaseRelationship('kai', 3);
            game.increaseRelationship('rina', 3);
            game.state.storyChoices['ch5_truth_stance'] = 'accessible';
          }
        },
        {
          text: 'พลังที่อันตรายต้องถูกควบคุม',
          targetScene: 'ch5_sc4_kagami_plan',
          effect: (game) => {
            game.increaseRelationship('hayase', 5);
            game.state.storyChoices['ch5_truth_stance'] = 'controlled';
          }
        },
        {
          text: 'เราควรเข้าใจมันก่อนตัดสิน',
          targetScene: 'ch5_sc4_kagami_plan',
          effect: (game) => {
            game.increaseRelationship('mika', 5);
            game.state.storyChoices['ch5_truth_stance'] = 'understand';
          }
        }
      ]
    }
  },

  ch5_sc4_kagami_plan: {
    id: 'ch5_sc4_kagami_plan',
    chapter: 5,
    chapterName: 'Chapter 5: ความจริงของเวทมนตร์',
    title: 'แผนการขั้นสุดท้ายของ ดร. คากามิ',
    background: 'tower_core',
    dialogues: [
      {
        speaker: 'kagami',
        text: 'ไม่มีความก้าวหน้าใดเกิดขึ้นได้โดยปราศจากความเสี่ยง!',
        emotion: 'shout'
      },
      {
        speaker: 'kagami',
        text: 'ฉันจะโอเวอร์โหลดแกนกลาง ปลดปล่อยคลื่นปรับจูนมานาสู่ประชากรญี่ปุ่นทั้งหมดในคราวเดียว ลบล้างขีดจำกัดมนุษย์ให้หมดสิ้น!',
        emotion: 'wild'
      },
      {
        speaker: 'player',
        text: 'นั่นมันการบีบบังคับ! คลื่นพลังมหาศาลขนาดนั้นจะฉีกชีพจรเวทของผู้คนมากกว่าช่วยพวกเขา!',
        emotion: 'angry'
      },
      {
        speaker: 'kagami',
        text: 'เช่นนั้นก็หยุด [ผลึกพิทักษ์ชั้นสูง] ของฉันให้ได้ก่อนสิ!',
        emotion: 'smirk'
      }
    ],
    nextScene: 'ch5_sc5_battle'
  },

  ch5_sc5_battle: {
    id: 'ch5_sc5_battle',
    chapter: 5,
    chapterName: 'Chapter 5: ความจริงของเวทมนตร์',
    title: 'หน้าห้องแกนกลาง - ปะทะผลึกพิทักษ์ชั้นสูง',
    background: 'tower_core',
    dialogues: [
      {
        speaker: 'elite_construct',
        text: '「คลื่นความร้อนแผ่ขยาย... ยิงลำแสงพลาสมาทำลายเป้าหมาย...」',
        emotion: 'menacing'
      },
      {
        speaker: 'player',
        text: 'ระวังความเสียหายจากสถานะ Burn! ใช้ Magic Shield และการ์ดแก้ทางด่วน!',
        emotion: 'determined'
      }
    ],
    battleTrigger: {
      enemyId: 'elite_construct',
      enemyName: 'ผลึกพิทักษ์ชั้นสูง (Elite Tower Construct)',
      enemyHp: 105,
      postVictoryScene: 'ch5_sc6_choice'
    }
  },

  ch5_sc6_choice: {
    id: 'ch5_sc6_choice',
    chapter: 5,
    chapterName: 'Chapter 5: ความจริงของเวทมนตร์',
    title: 'ปณิธานก่อนเข้าสู่ห้องแกนกลาง',
    background: 'tower_core',
    onEnter: (game) => {
      game.unlockStoryCard('arcane_burst', 'Arcane Burst');
    },
    dialogues: [
      {
        speaker: 'hayase',
        text: '『ยินดีด้วย! คุณเอาชนะผลึกพิทักษ์ชั้นสูงสำเร็จ ได้รับมหาเวท [Arcane Burst]!』',
        emotion: 'system'
      },
      {
        speaker: 'player',
        text: 'ผลึกพิทักษ์พังทลายลงแล้ว... เบื้องหน้าคือประตูบานสุดท้ายสู่ห้องแกนกลางหลัก',
        emotion: 'thought'
      },
      {
        speaker: 'rina',
        text: 'ไม่ว่าผลลัพธ์จะเป็นอย่างไร ปณิธานที่เธอจะยึดถือในการเผชิญหน้าครั้งสุดท้ายคืออะไร?',
        emotion: 'serious'
      }
    ],
    nextScene: 'ch5_sc7_end'
  },

  ch5_sc7_end: {
    id: 'ch5_sc7_end',
    chapter: 5,
    chapterName: 'Chapter 5: ความจริงของเวทมนตร์',
    title: 'ก้าวข้ามธรณีประตูสู่จุดจบ',
    background: 'tower_core',
    autoSaveCheckpoint: 'บทสรุป Chapter 5: ประตูสู่ห้องแกนกลาง',
    dialogues: [
      {
        speaker: 'player',
        text: 'ประตูบานยักษ์เปิดออก... ท้องฟ้าสีครามเข้มของโตเกียวยามค่ำคืนสะท้อนอยู่ใต้ฝ่าเท้าผ่านพื้นกระจกคริสตัล',
        emotion: 'thought'
      },
      {
        speaker: 'hayase',
        text: '『เตรียมพร้อมสู่การต่อสู้ชี้ชะตาสุดท้ายใน Chapter 6 (ระบบทำการบันทึกอัตโนมัติก่อนศึกตัดสิน)』',
        emotion: 'system'
      }
    ],
    nextScene: 'ch6_sc1_core'
  },

  // =========================================================================
  // CHAPTER 6: "จุดจบของหอคอย" (The End of the Tower) — COMPLETE ENDING
  // =========================================================================
  ch6_sc1_core: {
    id: 'ch6_sc1_core',
    chapter: 6,
    chapterName: 'Chapter 6: จุดจบของหอคอย (The End of the Tower)',
    title: 'ใจกลางแกนคริสตัล - ยอดหอคอยอัลเคนา',
    background: 'tower_core',
    dialogues: [
      {
        speaker: 'player',
        text: 'ใจกลางห้องมีลูกทรงกลมเรขาคณิตขนาดมหึมากำลังหมุนวนด้วยความเร็วสูง ปล่อยประกายไฟและคลื่นมานาสีม่วง',
        emotion: 'thought'
      },
      {
        speaker: 'kagami',
        text: 'สายไปแล้ว! รหัสโอเวอร์โหลดของฉันเชื่อมต่อกับแกนกลางเรียบร้อยแล้ว!',
        emotion: 'wild'
      },
      {
        speaker: 'mika',
        text: 'ดร. คากามิ! ระบบเตือนภัยสีแดงกำลังกระพริบ! แกนกลางไม่ได้กำลังปรับจูน... แต่มันกำลังจะระเบิดเพราะการโอเวอร์โหลด!',
        emotion: 'alarm'
      }
    ],
    nextScene: 'ch6_sc2_truth'
  },

  ch6_sc2_truth: {
    id: 'ch6_sc2_truth',
    chapter: 6,
    chapterName: 'Chapter 6: จุดจบของหอคอย',
    title: 'ความจริงของระบบปรับสมดุล',
    background: 'tower_core',
    dialogues: [
      {
        speaker: 'kagami',
        text: 'ไม่จริง... ฉันคำนวณสูตรมาเป็นสิบปี! มันจะต้องนำพาเผ่าพันธุ์มนุษย์ไปสู่ขั้นถัดไปสิ!',
        emotion: 'shock'
      },
      {
        speaker: 'player',
        text: 'หยุดหลอกตัวเองได้แล้ว! เวทมนตร์คือสิ่งที่มนุษย์ต้องค่อย ๆ เรียนรู้และอยู่ร่วมกับมัน ไม่ใช่ทางลัดที่บีบบังคับด้วยการทำลายล้าง!',
        emotion: 'determined'
      },
      {
        speaker: 'kagami',
        text: 'ฉันยอมถอยไม่ได้อีกแล้ว! ใครก็ตามที่ขวางทาง... จะต้องถูกกำจัด!',
        emotion: 'angry'
      }
    ],
    nextScene: 'ch6_sc3_battle_kagami'
  },

  ch6_sc3_battle_kagami: {
    id: 'ch6_sc3_battle_kagami',
    chapter: 6,
    chapterName: 'Chapter 6: จุดจบของหอคอย',
    title: 'ศึกตัดสิน Phase 1 - ปะทะ ดร. คากามิ',
    background: 'tower_core',
    dialogues: [
      {
        speaker: 'kagami',
        text: 'รับมือปืนรูนโอเวอร์คล็อกและสนามพลังมิติของฉันให้ได้เถอะ!',
        emotion: 'command'
      }
    ],
    battleTrigger: {
      enemyId: 'antagonist_kagami',
      enemyName: 'ดร. คากามิ (Dr. Kagami)',
      enemyHp: 110,
      postVictoryScene: 'ch6_sc4_core_overload'
    }
  },

  ch6_sc4_core_overload: {
    id: 'ch6_sc4_core_overload',
    chapter: 6,
    chapterName: 'Chapter 6: จุดจบของหอคอย',
    title: 'แกนกลางคลุ้มคลั่ง - สภาวะวิกฤต',
    background: 'alarm',
    onEnter: (game) => {
      game.unlockStoryCard('limit_break', 'Limit Break');
    },
    autoSaveCheckpoint: 'ก่อนศึกตัดสินแกนกลางหอคอย (FINAL BOSS)',
    dialogues: [
      {
        speaker: 'kagami',
        text: 'อั่ก... เครื่องแปลงสัญญาณของฉัน... พังแล้วงั้นเหรอ...',
        emotion: 'pain'
      },
      {
        speaker: 'broadcast',
        text: '『คำเตือน! แกนกลางหอคอยอัลเคนาเข้าสู่สภาวะไม่เสถียรขั้นวิกฤต (Critical Singularity)! มานากำลังดูดกลืนมิติรอบข้าง!』',
        emotion: 'alarm'
      },
      {
        speaker: 'rina',
        text: 'แกนกลางกำลังกลายสภาพเป็นสัตว์ประหลาดพลังงานขนาดยักษ์! ถ้าไม่หยุดมันตอนนี้ ชินจูกุจะถูกดูดหายไปหมดแน่!',
        emotion: 'shout'
      },
      {
        speaker: 'hayase',
        text: '『มาตรการฉุกเฉินสูงสุด: ปลดล็อกพลังขั้นสุดยอด [Limit Break] เข้าสู่สำรับของคุณแล้ว!』',
        emotion: 'system'
      }
    ],
    nextScene: 'ch6_sc5_battle_core'
  },

  ch6_sc5_battle_core: {
    id: 'ch6_sc5_battle_core',
    chapter: 6,
    chapterName: 'Chapter 6: จุดจบของหอคอย',
    title: 'ศึกตัดสิน Phase 2 (FINAL BOSS) - แกนกลางหอคอยคลั่ง',
    background: 'tower_core',
    dialogues: [
      {
        speaker: 'rina',
        text: (game) => {
          game.unlockStoryCard('limit_break', 'Limit Break');
          return (game.state.relationships?.rina >= 50)
            ? 'ถ้าเป็นนาย ฉันเชื่อว่าคงหาทางออกได้! พวกเราลุยมาด้วยกันขนาดนี้แล้ว ไม่มีวันยอมแพ้เด็ดขาด!'
            : 'เราคงต้องช่วยกันหาทางออก';
        },
        emotion: 'determined'
      },
      {
        speaker: 'kai',
        text: (game) => {
          return (game.state.relationships?.kai >= 50)
            ? 'วิเคราะห์คลื่นมานาของแกนกลางแล้ว จุดอ่อนอยู่ที่จังหวะการเปลี่ยนเฟส! อย่าปล่อยให้มันตั้งรับได้เด็ดขาด!'
            : 'แกนกลางมีพลังงานมหาศาล ระวังตัวด้วย';
        },
        emotion: 'serious'
      },
      {
        speaker: 'mika',
        text: (game) => {
          return (game.state.relationships?.mika >= 50)
            ? 'แกนกลางไม่ได้ต้องการทำลายล้าง... มันแค่ตอบสนองต่อเจตจำนงของผู้เชื่อมต่อ! เธอคือคนที่มันยอมรับนะ!'
            : 'ฉันสัมผัสได้ถึงเสียงสะท้อนของหอคอย...';
        },
        emotion: 'tense'
      },
      {
        speaker: 'hayase',
        text: (game) => {
          return (game.state.relationships?.hayase >= 50)
            ? 'ในฐานะอาจารย์ ฉันภูมิใจในตัวพวกเธอ... จงเชื่อมั่นในพลังและสายสัมพันธ์ที่พวกเธอฝึกฝนมา!'
            : 'มีสติและคุมความเสถียรมานาไว้ให้ดี';
        },
        emotion: 'command'
      },
      {
        speaker: 'tower_core',
        text: '「คลื่นสิงกูลาริตี้... ปลดปล่อยมหาเวทคาลามิตี้... คำนวณการคงอยู่ของเป้าหมาย...」',
        emotion: 'menacing'
      },
      {
        speaker: 'player',
        text: 'ใช้พลังการ์ดทั้งหมดที่มี! นี่คือขีดสุดของพลังพวกเรา... ลุยเลย!',
        emotion: 'determined'
      }
    ],
    battleTrigger: {
      enemyId: 'tower_core_final',
      enemyName: 'แกนกลางหอคอยคลั่ง (Unstable Tower Core)',
      enemyHp: 130,
      postVictoryScene: 'ch6_sc6_final_choice'
    }
  },

  ch6_sc6_final_choice: {
    id: 'ch6_sc6_final_choice',
    chapter: 6,
    chapterName: 'Chapter 6: จุดจบของหอคอย',
    title: 'แท่นควบคุมหลัก - การตัดสินใจเลือกชะตากรรม',
    background: 'tower_core',
    dialogues: [
      {
        speaker: 'tower_core',
        text: '「คลื่นวิกฤตสงบลงชั่วคราว... รอคำสั่งจากผู้ถือครองกุญแจและผู้ชนะการประลอง...」',
        emotion: 'fading'
      },
      {
        speaker: 'mika',
        text: 'แท่นควบคุมเปิดรับคำสั่งสุดท้ายจากเธอแล้ว นี่คือสิทธิ์ของเธอในการกำหนดอนาคตของหอคอยอัลเคนา',
        emotion: 'solemn'
      }
    ],
    choice: {
      prompt: 'คุณจะเลือกกำหนดชะตากรรมสุดท้ายของหอคอยอัลเคนาอย่างไร?',
      options: [
        {
          text: 'Choice A: ทำลายแกนกลางทิ้งอย่างสมบูรณ์ เพื่อขจัดอันตรายและไม่ให้ใครนำพลังนี้มาใช้อีก',
          targetScene: 'ch6_sc7_resolution',
          effect: (game) => {
            game.state.storyFlags['finalChoice'] = 'destroy';
            game.state.storyChoices['final_ending'] = 'destroy';
          }
        },
        {
          text: 'Choice B: ผนึกแกนกลางและจมลงสู่ใต้ผืนดิน เพื่อรอคอยวันที่มนุษยชาติพร้อมเข้าใจมันอย่างแท้จริง',
          targetScene: 'ch6_sc7_resolution',
          effect: (game) => {
            game.state.storyFlags['finalChoice'] = 'seal';
            game.state.storyChoices['final_ending'] = 'seal';
          }
        },
        {
          text: 'Choice C: ปรับสมดุลและปิดระบบอย่างสันติ พร้อมเปิดเผยข้อมูลประวัติศาสตร์สู่สังคมเวทมนตร์',
          targetScene: 'ch6_sc7_resolution',
          effect: (game) => {
            game.state.storyFlags['finalChoice'] = 'preserve_deactivate';
            game.state.storyChoices['final_ending'] = 'preserve_deactivate';
          }
        }
      ]
    }
  },

  ch6_sc7_resolution: {
    id: 'ch6_sc7_resolution',
    chapter: 6,
    chapterName: 'Chapter 6: จุดจบของหอคอย',
    title: 'ฟ้าสางเหนือโตเกียว - การปิดฉากของหอคอย',
    background: 'ending_morning',
    dialogues: [
      {
        speaker: 'player',
        text: 'เสียงเครื่องจักรยักษ์หยุดลงอย่างนุ่มนวล... ลำแสงสีดำทมิฬที่พวยพุ่งเหนือฟากฟ้าโตเกียวค่อย ๆ สลายตัวกลายเป็นละอองทองคำ',
        emotion: 'thought'
      },
      {
        speaker: 'kai',
        text: 'ดูที่เส้นขอบฟ้าสิ! แสงอาทิตย์ยามเช้าส่องผ่านเมฆลงมาแล้ว! โตเกียวรอดพ้นแล้วพวกเรา!',
        emotion: 'cheer'
      },
      {
        speaker: 'rina',
        text: 'ชีพจรมานาในร่างกายของฉัน... สงบและมั่นคงอย่างที่ไม่เคยรู้สึกมาก่อน ราวกับอากาศรอบตัวบริสุทธิ์ขึ้นอย่างแท้จริง',
        emotion: 'smile'
      },
      {
        speaker: 'hayase',
        text: 'หน่วยกู้ภัยและเจ้าหน้าที่กระทรวงกำลังเข้ามาควบคุมพื้นที่... ดร. คากามิ ถูกควบคุมตัวเพื่อรับการบำบัดและสอบสวนอย่างยุติธรรม',
        emotion: 'relief'
      }
    ],
    nextScene: 'ch6_sc8_epilogue'
  },

  ch6_sc8_epilogue: {
    id: 'ch6_sc8_epilogue',
    chapter: 6,
    chapterName: 'Chapter 6: จุดจบของหอคอย',
    title: 'บทส่งท้าย - เส้นทางที่เปลี่ยนไป',
    background: 'ending_morning',
    dialogues: [
      {
        speaker: 'player',
        text: (game) => {
          const choice = game.state.storyFlags['finalChoice'] || 'preserve_deactivate';
          if (choice === 'destroy') {
            return '【ผลการตัดสินใจ】 แกนกลางหอคอยถูกทำลายลงอย่างสมบูรณ์ ขจัดภัยคุกคามแห่งหายนะภัยไปตลอดกาล โลกเวทมนตร์ก้าวเข้าสู่ยุคที่ต้องพึ่งพาตนเองด้วยความระมัดระวัง';
          }
          if (choice === 'seal') {
            return '【ผลการตัดสินใจ】 แกนกลางหอคอยถูกผนึกและจมลึกสู่ใต้ผืนดินอย่างสงบ เพื่อรอคอยวันที่มนุษยชาติจะมีสติปัญญาและจิตใจพร้อมทำความเข้าใจมันในอนาคต';
          }
          return '【ผลการตัดสินใจ】 ระบบแกนกลางได้รับการปิดการทำงานอย่างสันติ องค์ความรู้บรรพกาลถูกส่งมอบให้สถาบันเวทมนตร์ศึกษาเพื่อพัฒนาคุณภาพชีวิตของผู้คนอย่างเท่าเทียม';
        },
        emotion: 'thought'
      },
      {
        speaker: 'rina',
        text: (game) => {
          return (game.state.relationships?.rina >= 50)
            ? 'Rina ยังคงเป็นเพื่อนสนิทที่คอยชวนคุณไปฝึกซ้อมบนดาดฟ้าทุกเย็น เธอมักจะยิ้มกว้างและบอกว่าการได้ต่อสู้ร่วมกับคุณคือช่วงเวลาที่ดีที่สุดในรั้วสถาบัน'
            : 'Rina กลับมาตั้งใจฝึกซ้อมเวทมนตร์ภายในตามปกติ ทักทายคุณอย่างเป็นมิตรเมื่อเดินสวนกันที่โถงทางเดิน';
        },
        emotion: 'smile'
      },
      {
        speaker: 'kai',
        text: (game) => {
          return (game.state.relationships?.kai >= 50)
            ? 'Kai เดินหน้าวิจัยเทคโนโลยีเชื่อมต่อเวทมนตร์กับอุปกรณ์สื่อสารอย่างจริงจังในฐานะคู่หูที่ไว้ใจได้ โดยมักจะส่งเครื่องต้นแบบรุ่นใหม่ล่าสุดมาให้คุณทดสอบเป็นคนแรกเสมอ'
            : 'Kai ยังคงสนุกกับการดัดแปลงแกดเจ็ตเวทมนตร์และโทรศัพท์รุ่นใหม่ในชมรมเทคโนโลยีเวท';
        },
        emotion: 'smile'
      },
      {
        speaker: 'mika',
        text: (game) => {
          return (game.state.relationships?.mika >= 50)
            ? 'Mika เริ่มต้นชีวิตนักเรียนปกติอย่างมีความสุข เธอเริ่มเปิดใจศึกษาประวัติศาสตร์หอคอยอย่างเปิดเผย และยิ้มทักทายคุณอย่างอบอุ่นทุกเช้า'
            : 'Mika เข้าเรียนในหลักสูตรปกติของสถาบัน และค่อย ๆ ปรับตัวเข้ากับเพื่อนร่วมชั้นอย่างสงบ';
        },
        emotion: 'smile'
      },
      {
        speaker: 'hayase',
        text: (game) => {
          return (game.state.relationships?.hayase >= 50)
            ? 'อาจารย์ Hayase ยังคงทุ่มเทสอนคนรุ่นใหม่เกี่ยวกับความจริงของเวทมนตร์ โดยมองคุณเป็นศิษย์เอกที่สืบทอดเจตนารมณ์ในการเชื่อมโยงผู้คนเข้าด้วยกัน'
            : 'อาจารย์ Hayase ยังคงทำหน้าที่อาจารย์ผู้เข้มงวดและดูแลความปลอดภัยของนักเรียนในสถาบันอย่างเคร่งครัด';
        },
        emotion: 'solemn'
      }
    ],
    nextScene: 'ch6_sc9_ending'
  },

  ch6_sc9_ending: {
    id: 'ch6_sc9_ending',
    chapter: 6,
    chapterName: 'Chapter 6: จุดจบของหอคอย (บทสรุปบริบูรณ์)',
    title: 'เช้าวันใหม่ ณ สถาบันเวทมนตร์แห่งชาติ',
    background: 'classroom',
    dialogues: [
      {
        speaker: 'player',
        text: 'สายลมฤดูใบไม้ผลิพัดผ่านหน้าต่างห้องเรียน แสงแดดอุ่นสาดส่องลงบนโต๊ะเรียนไม้',
        emotion: 'thought'
      },
      {
        speaker: 'player',
        text: 'โทรศัพท์ฝาพับในกระเป๋าสั่นเบา ๆ พร้อมข้อความจากเพื่อน ๆ นัดกินข้าวกลางวัน...',
        emotion: 'thought'
      },
      {
        speaker: 'player',
        text: 'ผมมองสำรับการ์ดเวทมนตร์บนฝ่ามือ... การเดินทางครั้งแรกในฐานะนักเรียนเวทมนตร์ปีหนึ่งจบลงแล้ว',
        emotion: 'thought'
      },
      {
        speaker: 'player',
        text: 'หอคอยอันตรายได้จากไป ปริศนาได้รับการคลี่คลาย และโลกใบนี้ยังคงหมุนต่อไปด้วยความหวังของวันพรุ่งนี้',
        emotion: 'thought'
      },
      {
        speaker: 'broadcast',
        text: '『การเดินทางของคุณสิ้นสุดลงอย่างสมบูรณ์แล้ว ขอขอบคุณที่ร่วมเดินทางใน ARCANA: THE TOWER』',
        emotion: 'info'
      }
    ],
    // Triggers The End screen overlay
    isFinalEndingScene: true
  }
};

export class DialogueEngine {
  constructor(game) {
    this.game = game;
    this.currentScene = null;
    this.dialogueIndex = 0;
    this.isTyping = false;
    this.typingTimer = null;
    this.autoTimer = null;
    this.isAuto = false;
    this.isSkip = false;
    this.logHistory = [];
    this.lastAdvanceTime = 0;

    // Cached DOM elements
    this.container = document.getElementById('vn-container');
    this.bgElement = document.getElementById('vn-background');
    this.portraitContainer = document.getElementById('vn-portraits');
    this.speakerNameEl = document.getElementById('vn-speaker-name');
    this.speakerCategoryEl = document.getElementById('vn-speaker-category');
    this.dialogueTextEl = document.getElementById('vn-dialogue-text');
    this.choiceContainer = document.getElementById('vn-choice-container');
    this.autoBtn = document.getElementById('btn-vn-auto');
    this.skipBtn = document.getElementById('btn-vn-skip');
    this.chapterBannerEl = document.getElementById('vn-chapter-banner');

    this.initEvents();
  }

  initEvents() {
    // Continue click on textbox or advance button
    const advanceTrigger = document.getElementById('vn-advance-trigger');
    if (advanceTrigger) {
      advanceTrigger.addEventListener('click', () => this.handleAdvance());
    }

    if (this.autoBtn) {
      this.autoBtn.addEventListener('click', () => this.toggleAuto());
    }

    if (this.skipBtn) {
      this.skipBtn.addEventListener('click', () => this.toggleSkip());
    }

    const logBtn = document.getElementById('btn-vn-log');
    if (logBtn) {
      logBtn.addEventListener('click', () => this.openDialogueLog());
    }

    // Keyboard support: Space or Enter to advance
    window.addEventListener('keydown', (e) => {
      if (this.game.currentScreen !== 'vn') return;
      if (document.querySelector('.modal:not(.hidden)')) return; // do not advance if modal open

      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        this.handleAdvance();
      } else if (e.code === 'KeyA') {
        this.toggleAuto();
      } else if (e.code === 'KeyS') {
        this.toggleSkip();
      } else if (e.code === 'KeyL') {
        this.openDialogueLog();
      }
    });
  }

  loadScene(sceneId, startDialogueIndex = 0, isSaveLoad = false) {
    const scene = STORY_SCENES[sceneId];
    if (!scene) {
      console.error(`Scene ${sceneId} not found in STORY_SCENES`);
      return;
    }

    const previousChapter = this.game.state.chapter;
    this.currentScene = scene;
    this.dialogueIndex = startDialogueIndex;

    // Update Game state
    this.game.state.scene = sceneId;
    this.game.state.sceneName = scene.title;
    this.game.state.chapter = scene.chapter || 1;
    this.game.state.chapterName = scene.chapterName || `Chapter ${scene.chapter || 1}`;
    this.game.state.dialogueIndex = startDialogueIndex;

    // Execute onEnter hook if defined on scene
    if (typeof scene.onEnter === 'function' && !isSaveLoad) {
      scene.onEnter(this.game);
    }

    // Auto-save on new chapter transition (when not loading a save)
    if (!isSaveLoad && scene.chapter && scene.chapter !== previousChapter) {
      this.game.autoSave(`เริ่ม ${scene.chapterName}`);
    } else if (!isSaveLoad && scene.autoSaveCheckpoint) {
      this.game.autoSave(scene.autoSaveCheckpoint);
    }

    // Update Chapter Banner UI
    if (this.chapterBannerEl) {
      this.chapterBannerEl.innerHTML = `
        <span class="chapter-tag">Chapter ${this.game.state.chapter}</span>
        <span class="scene-title">${scene.title}</span>
      `;
    }

    // Set Background
    this.renderBackground(scene.background);

    // Audio Atmosphere Transition (300-800ms smooth fade)
    const isBattleMusic = ['battle', 'boss', 'finalBattle'].includes(this.game.audio.currentMusicId);
    if (scene.music) {
      this.game.audio.fadeMusic(scene.music, 600);
    } else if (isSaveLoad || isBattleMusic) {
      const chapter = scene.chapter || 1;
      if (chapter === 1) {
        this.game.audio.fadeMusic('academy', 600);
      } else if (chapter === 2) {
        this.game.audio.fadeMusic(scene.background === 'archive_room' ? 'mystery' : 'city', 600);
      } else if (chapter === 3) {
        this.game.audio.fadeMusic(scene.background === 'archive_room' ? 'mystery' : 'academy', 600);
      } else if (chapter === 4 || chapter === 5) {
        this.game.audio.fadeMusic('tower', 600);
      } else if (chapter === 6) {
        if (scene.isFinalEndingScene || sceneId.includes('final_choice') || sceneId.includes('resolution') || sceneId.includes('epilogue') || sceneId.includes('ending')) {
          this.game.audio.fadeMusic('ending', 600);
        } else {
          this.game.audio.fadeMusic('tower', 600);
        }
      }
    }

    // Show Chapter Title Card overlay on chapter opening scenes (if not loading save)
    const isChapterOpeningScene = [
      'ch1_sc1_morning',
      'ch2_sc1_lockdown',
      'ch3_sc1_research',
      'ch4_sc1_enter',
      'ch5_sc1_truth',
      'ch6_sc1_core'
    ].includes(sceneId);

    if (!isSaveLoad && (isChapterOpeningScene || scene.showChapterTitleCard)) {
      this.displayChapterTitleCard(scene.chapter || this.game.state.chapter, scene.title || scene.chapterName);
    }

    // Hide any previous choices
    this.hideChoices();

    // Render first dialogue
    this.showDialogue(this.dialogueIndex);
  }

  renderBackground(bgType) {
    if (!this.bgElement) return;
    const bgData = assetLoader.getBackground(bgType);
    this.bgElement.className = `vn-bg vn-bg-${bgType || 'classroom'}`;

    if (bgData.imageUrl) {
      const testImg = new Image();
      testImg.referrerPolicy = 'no-referrer';
      testImg.onload = () => {
        if (this.bgElement) {
          this.bgElement.style.backgroundImage = `url("${bgData.imageUrl}")`;
          this.bgElement.innerHTML = '';
        }
      };
      testImg.onerror = () => {
        if (this.bgElement) {
          this.bgElement.style.backgroundImage = '';
          if (bgData.fallbackSvg) {
            this.bgElement.innerHTML = bgData.fallbackSvg;
          }
        }
      };
      testImg.src = bgData.imageUrl;
    } else if (bgData.fallbackSvg) {
      this.bgElement.style.backgroundImage = '';
      this.bgElement.innerHTML = bgData.fallbackSvg;
    } else {
      this.bgElement.style.backgroundImage = '';
      this.bgElement.innerHTML = '';
    }
  }

  showDialogue(index) {
    if (!this.currentScene) return;

    // Clear auto timer if running
    if (this.autoTimer) {
      clearTimeout(this.autoTimer);
      this.autoTimer = null;
    }

    const dialogues = this.currentScene.dialogues || [];

    // Check if we reached the end of current dialogues
    if (index >= dialogues.length) {
      // Check for Final Ending scene
      if (this.currentScene.isFinalEndingScene) {
        this.stopSkip();
        this.stopAuto();
        this.showTheEndModal();
        return;
      }

      // Check for Battle Trigger
      if (this.currentScene.battleTrigger) {
        this.stopSkip();
        this.stopAuto();
        this.game.triggerBattle(this.currentScene.battleTrigger);
        return;
      }

      // Check for Choice
      if (this.currentScene.choice) {
        this.stopSkip(); // Skip must always halt at choices
        this.renderChoices(this.currentScene.choice);
        return;
      }

      // Check for nextScene
      if (this.currentScene.nextScene) {
        this.loadScene(this.currentScene.nextScene, 0);
        return;
      }

      return;
    }

    const item = dialogues[index];
    this.dialogueIndex = index;
    this.game.state.dialogueIndex = index;

    // Resolve Speaker Info
    let speakerKey = item.speaker;
    if (speakerKey === 'aoi') speakerKey = 'rina';
    if (speakerKey === 'daiki') speakerKey = 'kai';
    if (speakerKey === 'kuroki') speakerKey = 'mika';
    if (speakerKey === 'shindou') speakerKey = 'hayase';

    const char = CHARACTERS[speakerKey] || {
      name: item.speaker,
      category: 'General',
      themeColor: '#cbd5e1',
      avatarSvg: ''
    };

    let speakerName = char.name;
    if (speakerKey === 'player') {
      const pName = this.game.state.playerName || 'นักเรียนใหม่';
      speakerName = `${pName} (คุณ)`;
    }

    if (this.speakerNameEl) {
      this.speakerNameEl.textContent = speakerName;
      this.speakerNameEl.style.color = char.themeColor || '#ffffff';
    }
    if (this.speakerCategoryEl) {
      this.speakerCategoryEl.textContent = char.category || '';
    }

    // Update Character Portrait
    this.renderPortraits(speakerKey, char, item.emotion);

    // Resolve dynamic text if function, and replace player name and legacy name placeholders
    let rawText = typeof item.text === 'function' ? item.text(this.game) : item.text;
    const pName = this.game.state.playerName || 'นักเรียนใหม่';
    const resolvedText = String(rawText || '')
      .replace(/\[PLAYER\]/g, pName)
      .replace(/\{playerName\}/g, pName)
      .replace(/คุณ\(ผู้เล่น\)/g, pName)
      .replace(/คุณเร็น/g, pName)
      .replace(/เร็น/g, pName)
      .replace(/อาจารย์ชินโด/g, 'อาจารย์ Hayase')
      .replace(/ชินโด/g, 'Hayase')
      .replace(/อาโออิ/g, 'Rina')
      .replace(/ไดกิ/g, 'Kai')
      .replace(/คุโรกิ/g, 'Mika');

    this.currentDialogueFullText = resolvedText;

    // Save to log history
    this.logHistory.push({
      speaker: speakerName,
      category: char.category,
      color: char.themeColor,
      text: resolvedText,
      timestamp: new Date().toLocaleTimeString('th-TH')
    });

    // Animate text typing
    this.typewriteText(resolvedText);
  }

  renderPortraits(speakerKey, char, emotion = 'normal') {
    if (!this.portraitContainer) return;
    this.portraitContainer.innerHTML = '';

    if (!char) return;

    // Special cases: system alerts, anomalies, training dummies
    if (speakerKey === 'broadcast' || speakerKey === 'tower_construct' || speakerKey === 'training_dummy' || speakerKey === 'mana_beast' || speakerKey === 'tower_guardian' || speakerKey === 'elite_construct' || speakerKey === 'tower_core') {
      const portraitDiv = document.createElement('div');
      portraitDiv.className = `character-portrait-box active-speaker`;
      portraitDiv.innerHTML = `
        <div class="avatar-wrapper" style="--char-color: ${char.themeColor || '#ec4899'}">
          ${char.avatarSvg || ''}
        </div>
      `;
      this.portraitContainer.appendChild(portraitDiv);
      return;
    }

    const portraitData = assetLoader.getCharacterPortrait(speakerKey, emotion);

    const slotDiv = document.createElement('div');
    slotDiv.className = 'vn-portrait-slot pos-center active-speaker fade-in';

    const figureDiv = document.createElement('div');
    figureDiv.className = 'portrait-figure';

    if (portraitData.imageUrl) {
      const img = document.createElement('img');
      img.className = 'portrait-img';
      img.src = portraitData.imageUrl;
      img.alt = portraitData.name || char.name || speakerKey;
      img.referrerPolicy = 'no-referrer';

      img.onerror = () => {
        // Fallback smoothly to procedural SVG or avatarSvg
        figureDiv.innerHTML = portraitData.fallbackSvg || char.avatarSvg || '';
      };

      figureDiv.appendChild(img);
    } else {
      figureDiv.innerHTML = portraitData.fallbackSvg || char.avatarSvg || '';
    }

    slotDiv.appendChild(figureDiv);
    this.portraitContainer.appendChild(slotDiv);
  }

  typewriteText(fullText) {
    if (this.typingTimer) {
      clearInterval(this.typingTimer);
      this.typingTimer = null;
    }

    // If skip mode is active, display instantly and schedule next fast leap
    if (this.isSkip) {
      this.dialogueTextEl.innerHTML = this.formatDialogueText(fullText);
      this.isTyping = false;
      this.scheduleNextAdvance(60);
      return;
    }

    this.isTyping = true;
    this.dialogueTextEl.innerHTML = '';
    const speed = this.getTypingSpeed();

    let charIndex = 0;
    this.typingTimer = setInterval(() => {
      charIndex += 2; // Type 2 chars per tick for snappy feeling
      if (charIndex >= fullText.length) {
        charIndex = fullText.length;
        clearInterval(this.typingTimer);
        this.typingTimer = null;
        this.isTyping = false;
        this.dialogueTextEl.innerHTML = this.formatDialogueText(fullText);

        // Subtle blip
        this.game.audio.playBlip();

        // If Auto Mode is active, schedule auto advance
        if (this.isAuto) {
          this.scheduleNextAdvance(this.game.settings.autoSpeed || 2500);
        }
      } else {
        this.dialogueTextEl.innerHTML = this.formatDialogueText(fullText.substring(0, charIndex));
      }
    }, speed);
  }

  formatDialogueText(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br/>')
      .replace(/\[([^\]]+)\]/g, '<span class="text-highlight">[$1]</span>');
  }

  getTypingSpeed() {
    const s = this.game.settings.textSpeed;
    if (s === 'fast') return 8;
    if (s === 'slow') return 30;
    return 16; // normal
  }

  handleAdvance() {
    if (this.currentChapterCardDismiss) {
      this.currentChapterCardDismiss();
    }

    const now = Date.now();
    // Prevent double-click spam only when manual advancing (skip mode bypasses debounce)
    if (!this.isSkip && now - this.lastAdvanceTime < 90) return;
    this.lastAdvanceTime = now;

    if (this.isTyping) {
      // Complete current text immediately
      if (this.typingTimer) {
        clearInterval(this.typingTimer);
        this.typingTimer = null;
      }
      this.isTyping = false;
      const textToDisplay = this.currentDialogueFullText || (this.currentScene?.dialogues?.[this.dialogueIndex]?.text) || '';
      this.dialogueTextEl.innerHTML = this.formatDialogueText(String(textToDisplay));
      if (this.isSkip) {
        this.scheduleNextAdvance(60);
      } else if (this.isAuto) {
        this.scheduleNextAdvance(this.game.settings.autoSpeed || 2500);
      }
      return;
    }

    // Advance to next dialogue line
    this.showDialogue(this.dialogueIndex + 1);
  }

  scheduleNextAdvance(delayMs) {
    if (this.autoTimer) clearTimeout(this.autoTimer);
    this.autoTimer = setTimeout(() => {
      this.handleAdvance();
    }, delayMs);
  }

  toggleAuto() {
    this.isAuto = !this.isAuto;
    if (this.isAuto) {
      this.stopSkip();
      this.autoBtn?.classList.add('active');
      if (!this.isTyping) {
        this.scheduleNextAdvance(this.game.settings.autoSpeed || 2500);
      }
    } else {
      this.stopAuto();
    }
  }

  stopAuto() {
    this.isAuto = false;
    this.autoBtn?.classList.remove('active');
    if (!this.isSkip && this.autoTimer) {
      clearTimeout(this.autoTimer);
      this.autoTimer = null;
    }
  }

  toggleSkip() {
    this.isSkip = !this.isSkip;
    if (this.isSkip) {
      this.stopAuto();
      this.skipBtn?.classList.add('active');
      this.handleAdvance();
    } else {
      this.stopSkip();
    }
  }

  stopSkip() {
    this.isSkip = false;
    this.skipBtn?.classList.remove('active');
    if (!this.isAuto && this.autoTimer) {
      clearTimeout(this.autoTimer);
      this.autoTimer = null;
    }
  }

  renderChoices(choiceData) {
    this.stopSkip();
    this.stopAuto();
    if (!this.choiceContainer) return;
    this.choiceContainer.innerHTML = '';
    this.choiceContainer.classList.remove('hidden');

    const promptEl = document.createElement('div');
    promptEl.className = 'choice-prompt';
    promptEl.innerHTML = `<span>⚡</span> ${choiceData.prompt}`;
    this.choiceContainer.appendChild(promptEl);

    const listEl = document.createElement('div');
    listEl.className = 'choice-list';

    choiceData.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'choice-option-btn';
      btn.innerHTML = `<span class="choice-num">0${idx + 1}</span> <span class="choice-text">${opt.text}</span>`;
      btn.addEventListener('mouseenter', () => {
        this.game.audio.playSelect();
      });
      btn.addEventListener('click', () => {
        this.game.audio.playConfirm();
        if (opt.effect) {
          opt.effect(this.game);
        }
        if (opt.action) {
          opt.action(this.game);
        }
        this.hideChoices();
        if (opt.targetScene) {
          this.loadScene(opt.targetScene, 0);
        }
      });
      listEl.appendChild(btn);
    });

    this.choiceContainer.appendChild(listEl);
  }

  hideChoices() {
    if (this.choiceContainer) {
      this.choiceContainer.innerHTML = '';
      this.choiceContainer.classList.add('hidden');
    }
  }

  openDialogueLog() {
    const modal = document.getElementById('modal-log');
    const logContent = document.getElementById('log-history-content');
    if (!modal || !logContent) return;

    logContent.innerHTML = '';
    if (this.logHistory.length === 0) {
      logContent.innerHTML = '<div class="empty-log-msg">ยังไม่มีประวัติบทสนทนา</div>';
    } else {
      this.logHistory.forEach(item => {
        const row = document.createElement('div');
        row.className = 'log-item';
        row.innerHTML = `
          <div class="log-item-header">
            <span class="log-speaker" style="color: ${item.color}">${item.speaker}</span>
            <span class="log-category">${item.category || ''}</span>
            <span class="log-time">${item.timestamp}</span>
          </div>
          <div class="log-text">${item.text.replace(/\n/g, '<br/>')}</div>
        `;
        logContent.appendChild(row);
      });
    }

    modal.classList.remove('hidden');
    setTimeout(() => {
      logContent.scrollTop = logContent.scrollHeight;
    }, 50);
  }

  /**
   * Display Cinematic Chapter Title Card Overlay
   */
  displayChapterTitleCard(chapterNum, title) {
    const overlay = document.getElementById('vn-chapter-card');
    const numEl = document.getElementById('chapter-card-num');
    const titleEl = document.getElementById('chapter-card-title');
    if (!overlay) return;

    const CHAPTER_TITLES = {
      1: 'วันธรรมดาที่ไม่ธรรมดา',
      2: 'หอคอยกลางเมือง',
      3: 'นักเรียนต้องห้าม',
      4: 'ชั้นแรก',
      5: 'ความจริงของเวทมนตร์',
      6: 'จุดจบของหอคอย'
    };
    const cleanTitle = CHAPTER_TITLES[chapterNum] || title || `บทที่ ${chapterNum}`;

    if (numEl) numEl.textContent = `CHAPTER ${chapterNum}`;
    if (titleEl) titleEl.textContent = cleanTitle;

    overlay.classList.remove('hidden');
    void overlay.offsetWidth; // trigger reflow for css transition
    overlay.classList.add('show');
    this.game.audio.playSFX('focus');

    // Auto dismiss after 1.8 seconds (or 300ms if Skip mode is active), or if user clicks overlay
    let dismissed = false;
    const dismissCard = () => {
      if (dismissed) return;
      dismissed = true;
      this.currentChapterCardDismiss = null;
      overlay.classList.remove('show');
      setTimeout(() => overlay.classList.add('hidden'), 350);
      overlay.removeEventListener('click', dismissCard);
    };

    this.currentChapterCardDismiss = dismissCard;
    overlay.addEventListener('click', dismissCard);
    const duration = this.isSkip ? 300 : 1800;
    setTimeout(dismissCard, duration);
  }

  /**
   * Complete Story "THE END" Screen
   */
  showTheEndModal() {
    this.game.audio.playVictory();

    // Mark completed edition persistently
    try {
      localStorage.setItem('arcana_completed_edition', 'true');
    } catch (e) {}
    if (this.game?.state) {
      if (!this.game.state.storyFlags) this.game.state.storyFlags = {};
      this.game.state.storyFlags.gameCompleted = true;
    }
    const badge = document.getElementById('title-completed-badge');
    if (badge) badge.classList.remove('hidden');

    let modal = document.getElementById('modal-the-end');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'modal-the-end';
      modal.className = 'the-end-modal';
      modal.innerHTML = `
        <div class="the-end-title">THE END</div>
        <div class="the-end-subtitle">MAGIC TOWER — THE TOWER IN THE CITY</div>
        <p class="the-end-desc">
          การเดินทางของนักเรียนเวทมนตร์ปีหนึ่งและปริศนาแห่งหอคอยโบราณได้สิ้นสุดลงอย่างสมบูรณ์แล้ว...<br/>
          ทั้ง 6 Chapters ได้ถูกถ่ายทอดจนถึงปลายทางแห่งสันติภาพและบทเรียนของมนุษยชาติ
        </p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">
          <button id="btn-end-view-credits" class="btn-secondary" style="font-size: 1.05rem; padding: 0.85rem 1.75rem;">
            📜 ดูเครดิตผู้สร้าง (VIEW CREDITS)
          </button>
          <button id="btn-end-return-title" class="btn-primary" style="font-size: 1.05rem; padding: 0.85rem 1.75rem;">
            🏠 กลับสู่หน้าจอหลัก (MAIN MENU)
          </button>
        </div>
      `;
      document.body.appendChild(modal);

      document.getElementById('btn-end-return-title')?.addEventListener('click', () => {
        this.game.audio.playSelect();
        modal.classList.add('hidden');
        this.game.showScreen('title');
      });

      document.getElementById('btn-end-view-credits')?.addEventListener('click', () => {
        this.game.audio.playSelect();
        modal.classList.add('hidden');
        this.game.openCreditsModal();
      });
    } else {
      modal.classList.remove('hidden');
    }
  }
}
