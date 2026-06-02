import { CameraBagPreset } from './types';

export const PRESETS: CameraBagPreset[] = [
  {
    id: 'gopro',
    name: '極限 POV 輕裝組',
    weight: 1.2,
    icon: 'Camera',
    description: '輕型運動相機、自拍組與固定夾，街頭滑行必備。',
    gearList: ['GoPro Hero 12 x1', '隨身折疊腳架 x1', '安全別針與扣帶 x2', '防風套 x1']
  },
  {
    id: 'fujifilm',
    name: '街頭寫真小獵手',
    weight: 2.8,
    icon: 'Camera',
    description: '輕單眼加一機一鏡，捕捉滑行中的定格瞬間與日常街拍。',
    gearList: ['Fujifilm X-T5 x1', 'XF 35mm F1.4 鏡頭 x1', '滑板多功能 T 字板手 x1', '隨身保溫瓶 x1']
  },
  {
    id: 'vx1000',
    name: '傳奇 VX 復古神機',
    weight: 5.2,
    icon: 'Video',
    description: '90年代滑板片黃金時代標配，Sony VX1000 與世紀黃金魚眼鏡頭。',
    gearList: ['Sony DCR-VX1000 x1', 'Century Precision 0.3x 魚眼鏡頭 x1', '加重大容量鋰電池 x2', '帶提把的重型金屬兔籠 x1']
  },
  {
    id: 'cinematic',
    name: '商業大片級攝製組',
    weight: 8.5,
    icon: 'Video',
    description: '重型三人團隊大片裝備，高畫質攝影機、大三元與無線跟焦系統。',
    gearList: ['RED V-Raptor 8K x1', '24-70mm F2.8 電影鏡頭 x1', '三軸高承重穩定器 x1', 'V-Mount 廣播級電池 x2']
  }
];
