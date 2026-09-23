import type { NavItem, LocalizedString } from '@/src/types';

export interface NavigationData {
  main: NavItem[];
  footer: NavItem[];
  socials: { name: string; href: string }[];
}

export const navigationData: NavigationData = {
  main: [
    { label: { fr: 'Projets', en: 'Work' }, href: '/#work' },
    { label: { fr: 'Services', en: 'Services' }, href: '/#services' },
    { label: { fr: 'Studio', en: 'Studio' }, href: '/#studio' },
    { label: { fr: 'Insights', en: 'Insights' }, href: '/#insights' },
    { label: { fr: 'Contact', en: 'Contact' }, href: '/#contact' },
  ],
  footer: [
    { label: { fr: 'Projets', en: 'Work' }, href: '/#work' },
    { label: { fr: 'Services', en: 'Services' }, href: '/#services' },
    { label: { fr: 'Studio', en: 'Studio' }, href: '/#studio' },
    { label: { fr: 'Insights', en: 'Insights' }, href: '/#insights' },
    { label: { fr: 'Contact', en: 'Contact' }, href: '/#contact' },
  ],
  socials: [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/moovlabs-studio/' },
    { name: 'GitHub', href: 'https://github.com/moovlabs' },
    { name: 'Instagram', href: 'https://www.instagram.com/moovlabs_studio/' },
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61586093841906' },
  ],
};
