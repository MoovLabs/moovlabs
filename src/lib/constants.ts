export const SITE_CONFIG = {
  name: 'Moovlabs',
  fullName: 'Moovlabs Studio',
  url: 'https://www.moovlabs.tech',
  email: 'hello@moovlabs.tech',
  phone: '+261 37 50 146 26',
  address: 'Antananarivo, Madagascar',
  socials: {
    linkedin: 'https://www.linkedin.com/company/moovlabs-studio/',
    instagram: 'https://www.instagram.com/moovlabs_studio/',
    facebook: 'https://www.facebook.com/profile.php?id=61586093841906',
    dribbble: 'https://dribbble.com/moovlabs',
    github: 'https://github.com/moovlabs',
  },
} as const;

export const LOCALES = ['fr', 'en'] as const;
export const DEFAULT_LOCALE = 'fr' as const;

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  slower: 0.8,
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
