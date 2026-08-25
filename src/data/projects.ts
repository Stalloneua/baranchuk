import type { Language } from '../i18n';

export interface ProjectCopy {
  title: string;
  description: string;
  client: string;
  role: string;
}

export interface Project {
  id: string;
  thumbnail: string;
  videoUrl: string;
  videoType: 'youtube' | 'vimeo';
  year: string;
  images: string[];
  copy: Record<Language, ProjectCopy>;
}

export const socialLinks = {
  personalInstagram: 'https://www.instagram.com/roma.baranchuk/',
  youtube: 'https://www.youtube.com/channel/UCCxXpqAD2MnVBhMAueVENIA',
};

const projectAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const bmwX6mImages = [
  projectAsset('projects/bmw-x6m-garage/01-road-front.png'),
  projectAsset('projects/bmw-x6m-garage/02-garage-front.png'),
  projectAsset('projects/bmw-x6m-garage/03-road-side.png'),
  projectAsset('projects/bmw-x6m-garage/04-interior-wide.png'),
  projectAsset('projects/bmw-x6m-garage/05-road-rear-underpass.png'),
  projectAsset('projects/bmw-x6m-garage/06-interior-seat.png'),
  projectAsset('projects/bmw-x6m-garage/07-bridge-front.png'),
  projectAsset('projects/bmw-x6m-garage/08-road-wide-rear.png'),
  projectAsset('projects/bmw-x6m-garage/09-road-three-quarter.png'),
];

export const projects: Project[] = [
  {
    id: 'nordi-obiednuiemo-svit',
    thumbnail: 'https://i.ytimg.com/vi/Mq4DUDplAVA/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/Mq4DUDplAVA',
    videoType: 'youtube',
    year: '2025',
    images: [
      'https://i.ytimg.com/vi/Mq4DUDplAVA/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Mq4DUDplAVA/sddefault.jpg',
      'https://i.ytimg.com/vi/Mq4DUDplAVA/hqdefault.jpg',
      'https://i.ytimg.com/vi/Mq4DUDplAVA/mqdefault.jpg',
    ],
    copy: {
      uk: {
        title: "NORDI - ОБ'ЄДНУЄМО СВІТ",
        description:
          "Відеопроєкт для NORDI про рух, логістику й відчуття зв'язку між людьми та містами.\n\nУ кадрі — дорога, вантажівки, пакунки, люди й маленькі моменти, з яких складається велика історія доставки.",
        client: 'NORDI',
        role: 'Продакшн - Роман Баранчук\nЗйомка / Монтаж / Саунд-дизайн / Кольорокорекція',
      },
      en: {
        title: 'NORDI - CONNECTING THE WORLD',
        description:
          'A video project for NORDI about movement, logistics, and the feeling of connection between people and cities.\n\nThe frame follows the road, trucks, parcels, people, and the small moments that shape a larger delivery story.',
        client: 'NORDI',
        role: 'Production - Roman Baranchuk\nFilming / Editing / Sound design / Color correction',
      },
    },
  },
  {
    id: 'bmw-x6m-garage-carshowroom',
    thumbnail: bmwX6mImages[6],
    videoUrl: 'https://www.youtube.com/embed/YfAoYbMC5F8',
    videoType: 'youtube',
    year: '2026',
    images: bmwX6mImages,
    copy: {
      uk: {
        title: 'BMW X6M - GARAGE CARSHOWROOM',
        description:
          'Брутальна візуальна історія, побудована навколо характеру та динаміки BMW X6M.\n\nПохмурий Київ, архітектура мосту та кінематографічний ритм стали основою атмосфери й візуальної мови цього відео. Яскравим акцентом автомобіля став червоний салон із карбоновими елементами, що додав кадрам ще більшої напруги та контрасту.\n\nКлієнт: GARAGE CAR SHOWROOM\nАвто: BMW X6M\nЛокація: Київ, Україна',
        client: 'GARAGE CAR SHOWROOM',
        role: 'Продакшн — Роман Баранчук\nЗйомка / Монтаж / Саунд-дизайн / Кольорокорекція',
      },
      en: {
        title: 'BMW X6M - GARAGE CARSHOWROOM',
        description:
          'A brutal visual story built around the character and dynamics of the BMW X6M.\n\nMoody Kyiv, the bridge architecture, and a cinematic rhythm shaped the atmosphere and visual language of this video. The red interior with carbon elements became the car’s vivid accent, adding more tension and contrast to the frames.\n\nClient: GARAGE CAR SHOWROOM\nCar: BMW X6M\nLocation: Kyiv, Ukraine',
        client: 'GARAGE CAR SHOWROOM',
        role: 'Production - Roman Baranchuk\nFilming / Editing / Sound design / Color correction',
      },
    },
  },
  {
    id: 'porsche-911-winter-edition',
    thumbnail: 'https://i.ytimg.com/vi/Hu1ydwTteVw/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2026',
    images: [
      'https://i.ytimg.com/vi/Hu1ydwTteVw/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Hu1ydwTteVw/sddefault.jpg',
      'https://i1.ytimg.com/vi/Hu1ydwTteVw/hqdefault.jpg',
      'https://i.ytimg.com/vi/Hu1ydwTteVw/mqdefault.jpg',
    ],
    copy: {
      uk: {
        title: 'Porsche 911. Зимова версія',
        description:
          'Реальний automotive film з YouTube-каналу Roman Baranchuk: чистий рух, холодне світло, дорога й увага до деталей автомобіля.',
        client: 'Власний проєкт / automotive',
        role: 'Камера / монтаж / колір',
      },
      en: {
        title: 'Porsche 911. Winter edition',
        description:
          "A real automotive film from the Roman Baranchuk YouTube channel: clean movement, cold light, the road, and attention to the car's details.",
        client: 'Personal project / automotive',
        role: 'Camera / editing / color',
      },
    },
  },
];
