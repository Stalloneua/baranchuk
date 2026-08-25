import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Language = 'uk' | 'en';

type TranslationDictionary = {
  nav: {
    projects: string;
    about: string;
    homeAria: string;
    navigationAria: string;
    languageAria: string;
  };
  home: {
    projectsTitle: string;
    projectsAria: string;
    focusTitle: string;
    socialAria: string;
    youtubeLabel: string;
  };
  project: {
    notFound: string;
    back: string;
    client: string;
    role: string;
    year: string;
    frames: string;
    frameAlt: (title: string, index: number) => string;
  };
  about: {
    title: string;
    subtitle: string;
    paragraphs: Array<Array<string | { text: string; strong: true }>>;
    instagramProduction: string;
    instagramPersonal: string;
    youtube: string;
  };
  footer: {
    roman: string;
    copyright: (year: number) => string;
  };
};

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationDictionary;
};

const languageStorageKey = 'baranchuk-language';
const defaultLanguage: Language = 'uk';

const translations: Record<Language, TranslationDictionary> = {
  uk: {
    nav: {
      projects: 'ПРОЄКТИ',
      about: 'ПРО МЕНЕ',
      homeAria: 'Головна Baranchuk Production',
      navigationAria: 'Головна навігація',
      languageAria: 'Перемикач мови',
    },
    home: {
      projectsTitle: 'ПРОЄКТИ',
      projectsAria: 'Вибрані проєкти',
      focusTitle: 'НАПРЯМИ.',
      socialAria: 'Соціальні профілі',
      youtubeLabel: 'YouTube / Роман Баранчук',
    },
    project: {
      notFound: 'Проєкт не знайдено',
      back: '← Назад до проєктів',
      client: 'Клієнт',
      role: 'Роль',
      year: 'Рік',
      frames: 'Кадри',
      frameAlt: (title, index) => `${title}: кадр ${index}`,
    },
    about: {
      title: 'РОМАН БАРАНЧУК',
      subtitle: 'Оператор та режисер.',
      paragraphs: [
        ['Для мене відео — це насамперед ', { text: 'спосіб розповідати історії', strong: true }, '.'],
        [
          'У кожному проєкті для мене важливо не просто створити красиве зображення, а знайти ідею, атмосферу та емоцію, які варто передати глядачеві. Я прагну, щоб кожен кадр, рух камери, світло та звук працювали на загальну історію.',
        ],
        [
          'Працюю з різними форматами — від ',
          { text: 'комерційних та іміджевих відео до автомобільних зйомок, документальних історій та інтерв’ю', strong: true },
          '. Окремо спеціалізуюся на автомобільному контенті, де поєдную динаміку, естетику та кінематографічний підхід.',
        ],
        [
          'У роботі для мене важливі ',
          { text: 'якість, актуальність та увага до деталей', strong: true },
          '. Мене особливо цікавлять проєкти, у яких є простір для режисури, роботи з героями та пошуку власної візуальної мови.',
        ],
        [
          'Постійно шукаю нові підходи до зйомки та сторітелінгу, експериментую з формою і прагну створювати відео, які ',
          { text: 'не просто привертають увагу, а залишають після себе емоцію.', strong: true },
        ],
        [{ text: 'Відкритий до ваших проєктів.', strong: true }],
      ],
      instagramProduction: 'Instagram / Baranchuk Production',
      instagramPersonal: 'Instagram / Roma Baranchuk',
      youtube: 'YouTube / Роман Баранчук',
    },
    footer: {
      roman: 'Роман Баранчук',
      copyright: (year) => `© ${year} Roman Baranchuk. Усі права захищені.`,
    },
  },
  en: {
    nav: {
      projects: 'PROJECTS',
      about: 'ABOUT',
      homeAria: 'Baranchuk Production home',
      navigationAria: 'Primary navigation',
      languageAria: 'Language switcher',
    },
    home: {
      projectsTitle: 'PROJECTS',
      projectsAria: 'Selected projects',
      focusTitle: 'FOCUS.',
      socialAria: 'Social profiles',
      youtubeLabel: 'YouTube / Roman Baranchuk',
    },
    project: {
      notFound: 'Project not found',
      back: '← Back to projects',
      client: 'Client',
      role: 'Role',
      year: 'Year',
      frames: 'Frames',
      frameAlt: (title, index) => `${title}: frame ${index}`,
    },
    about: {
      title: 'ROMAN BARANCHUK',
      subtitle: 'Cinematographer and director.',
      paragraphs: [
        ['For me, video is first and foremost ', { text: 'a way to tell stories', strong: true }, '.'],
        [
          'In every project, it is important for me not only to create a beautiful image, but to find the idea, atmosphere, and emotion worth passing on to the viewer. I want every frame, camera movement, light, and sound to serve the story as a whole.',
        ],
        [
          'I work across different formats — from ',
          { text: 'commercial and image films to automotive shoots, documentary stories, and interviews', strong: true },
          '. I have a dedicated focus on automotive content, where I combine dynamics, aesthetics, and a cinematic approach.',
        ],
        [
          'In my work, ',
          { text: 'quality, relevance, and attention to detail', strong: true },
          ' matter most. I am especially interested in projects that leave room for directing, working with people, and searching for a distinct visual language.',
        ],
        [
          'I am constantly looking for new approaches to shooting and storytelling, experimenting with form, and aiming to create videos that ',
          { text: 'do more than attract attention — they leave an emotion behind.', strong: true },
        ],
        [{ text: 'Open to your projects.', strong: true }],
      ],
      instagramProduction: 'Instagram / Baranchuk Production',
      instagramPersonal: 'Instagram / Roma Baranchuk',
      youtube: 'YouTube / Roman Baranchuk',
    },
    footer: {
      roman: 'Roman Baranchuk',
      copyright: (year) => `© ${year} Roman Baranchuk. All rights reserved.`,
    },
  },
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return defaultLanguage;
  }

  const storedLanguage = window.localStorage.getItem(languageStorageKey);
  return storedLanguage === 'en' || storedLanguage === 'uk' ? storedLanguage : defaultLanguage;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(languageStorageKey, nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('useI18n must be used inside I18nProvider');
  }

  return context;
}
