export type Locale = 'fr' | 'en';

export interface LocalizedString {
  fr: string;
  en: string;
}

export interface LocalizedContent {
  title: LocalizedString;
  description: LocalizedString;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface NavItem {
  label: LocalizedString;
  href: string;
}

export interface StatItem {
  value: string;
  label: LocalizedString;
}

export interface MetaData {
  title: LocalizedString;
  description: LocalizedString;
  keywords: LocalizedString;
}
