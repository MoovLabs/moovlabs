import type { Locale } from '@/src/types';

export const i18nConfig = {
  locales: ['fr', 'en'] as const,
  defaultLocale: 'fr' as const,
};

export type { Locale };

const dictionaries = {
  fr: () => import('./dictionaries/fr.json').then((m) => m.default),
  en: () => import('./dictionaries/en.json').then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};
