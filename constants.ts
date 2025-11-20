
import { Game, Language } from './types';

const RAW_GAMES = [
  {
    id: 'summer-pockets-rb',
    brand: 'KEY',
    title: { en: 'Summer Pockets RB', zh: 'Summer Pockets RB' },
    description: { 
        en: 'Island Optic Array · Time-Lapse Photography Engine', 
        zh: '鸟白岛光学阵列 · 延时摄影引擎' 
    },
    price: 4899,
    originalPrice: 5200,
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1203830/header.jpg',
    tags: { en: ['Flagship', 'Optic Zoom'], zh: ['旗舰', '光学变焦'] },
    rating: 4.9,
    releaseDate: '2020-06-26',
    features: { 
        en: ['Butterfly Sensor', 'Tear-Resistant Display', 'Nostalgia Filter'],
        zh: ['蝴蝶传感器', '抗泪显示屏', '怀旧滤镜']
    }
  },
  {
    id: 'riddle-joker',
    brand: 'YUZU',
    title: { en: 'Riddle Joker Pro', zh: 'Riddle Joker Pro' },
    description: { 
        en: 'Quantum Encryption · Stealth Acoustics', 
        zh: '量子加密 · 隐形声学' 
    },
    price: 4299,
    originalPrice: 4500,
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1277930/header.jpg',
    tags: { en: ['Security', 'Enterprise'], zh: ['安全', '企业级'] },
    rating: 4.8,
    releaseDate: '2018-03-30',
    features: { 
        en: ['Astral Projection Chip', 'Bio-Authentication', 'Secret Service OS'],
        zh: ['星幽投影芯片', '生物认证', '特勤局OS']
    }
  },
  {
    id: 'atri',
    brand: 'ANIPLEX',
    title: { en: 'ATRI -My Dear Moments-', zh: 'ATRI -My Dear Moments-' },
    description: { 
        en: 'Liquid Cooling Bionic · High-Performance Android', 
        zh: '液冷仿生技术 · 高性能安卓' 
    },
    price: 3699,
    originalPrice: 3900,
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1230140/header.jpg',
    tags: { en: ['AI Native', 'Robotics'], zh: ['AI原生', '机器人'] },
    rating: 4.9,
    releaseDate: '2020-06-19',
    features: { 
        en: ['Emotional Processing Unit', 'Underwater IP68', 'Memory Restoration'],
        zh: ['情感处理单元', '水下IP68', '记忆修复']
    }
  },
  {
    id: 'aokana',
    brand: 'OTHER',
    title: { en: 'Aokana: Four Rhythm', zh: '苍之彼方的四重奏' },
    description: { 
        en: 'Anti-Gravity Grav-Shoes · 144Hz Sky Refresh Rate', 
        zh: '反重力鞋 · 144Hz 天空刷新率' 
    },
    price: 3299,
    originalPrice: 4500,
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1049410/header.jpg',
    tags: { en: ['Sport', 'High Refresh'], zh: ['竞技', '高刷'] },
    rating: 4.9,
    releaseDate: '2019-09-27',
    features: { 
        en: ['Grav-Shoes Gen 3', 'Sky High Throughput', 'Sport Mode Pro'],
        zh: ['第三代反重力鞋', '超高空吞吐量', '专业竞技模式']
    }
  },
  {
    id: 'senren-banka',
    brand: 'YUZU',
    title: { en: 'Senren * Banka', zh: '千恋＊万花' },
    description: { 
        en: 'Traditional Craftsmanship · Murasame Tempered Glass', 
        zh: '传统工艺 · 丛雨钢化玻璃' 
    },
    price: 3999,
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1144400/header.jpg',
    tags: { en: ['Heritage', 'Craftsmanship'], zh: ['传承', '匠心'] },
    rating: 4.8,
    releaseDate: '2020-02-14',
    features: { 
        en: ['Spirit Sealing Tech', 'Kyoto Design Language', 'Guardian OS'],
        zh: ['封灵技术', '京都设计语言', '守护灵OS']
    }
  },
  {
    id: 'sanoba-witch',
    brand: 'YUZU',
    title: { en: 'Sanoba Witch', zh: '魔女的夜宴' },
    description: { 
        en: 'Occult Processing Unit · Emotional Resonation', 
        zh: '玄学处理单元 · 情感共鸣' 
    },
    price: 4599,
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/888790/header.jpg',
    tags: { en: ['Magic', 'Wireless'], zh: ['魔法', '无线'] },
    rating: 4.9,
    releaseDate: '2018-10-26',
    features: { 
        en: ['Mana Battery', 'Coven Connectivity', 'Heartbeat Sensor'],
        zh: ['魔力电池', '魔女集会连接', '心跳传感器']
    }
  },
  {
    id: 'white-album-2',
    brand: 'OTHER',
    title: { en: 'White Album 2', zh: '白色相簿2' },
    description: { 
        en: 'Lossless Audio · Heartbreak Engine 2.0', 
        zh: '无损音频 · 心碎引擎 2.0' 
    },
    price: 2999,
    originalPrice: 3500,
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/2476620/header.jpg',
    tags: { en: ['Pro Audio', 'Triangle Arch'], zh: ['专业音频', '三角架构'] },
    rating: 5.0,
    releaseDate: '2010-03-26',
    features: { 
        en: ['Dynamic Range Compression', 'Airport Noise Cancellation', 'Winter Durability'],
        zh: ['动态范围压缩', '机场降噪', '冬季耐候性']
    }
  },
  {
    id: 'steins-gate',
    brand: 'OTHER',
    title: { en: 'Steins;Gate', zh: '命运石之门' },
    description: { 
        en: 'Timeline Divergence Meter · Microwave Oculink', 
        zh: '世界线变动率探测仪 · 微波Oculink' 
    },
    price: 4999,
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/412830/header.jpg',
    tags: { en: ['Sci-Fi', 'Time Leap'], zh: ['科幻', '时间跳跃'] },
    rating: 5.0,
    releaseDate: '2009-10-15',
    features: { 
        en: ['Reading Steiner GPU', 'Divergence 1.048596%', 'IBM 5100 Emulation'],
        zh: ['Reading Steiner GPU', '变动率 1.048596%', 'IBM 5100 模拟']
    }
  },
  {
    id: 'clannad',
    brand: 'KEY',
    title: { en: 'CLANNAD', zh: 'CLANNAD' },
    description: { 
        en: 'Big Dango Display · Biological Tear-Duct Cleaning', 
        zh: '大团子显示屏 · 生物泪腺清洗系统' 
    },
    price: 3999,
    originalPrice: 4200,
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/324160/header.jpg',
    tags: { en: ['Family', 'Life OS'], zh: ['家族', '人生OS'] },
    rating: 5.0,
    releaseDate: '2004-04-28',
    features: { 
        en: ['After Story Expansion', 'Light Orb Energy', 'Starfish Logic Board'],
        zh: ['After Story 扩展坞', '光玉能源', '海星逻辑主板']
    }
  }
];

export const getGames = (lang: Language): Game[] => {
  return RAW_GAMES.map(g => ({
    id: g.id,
    title: g.title[lang],
    description: g.description[lang],
    price: g.price,
    originalPrice: g.originalPrice,
    image: g.image,
    tags: g.tags[lang],
    rating: g.rating,
    releaseDate: g.releaseDate,
    features: g.features[lang],
    brand: g.brand as any
  }));
};

export const GAMES = getGames('en');
