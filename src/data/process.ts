import type { LocalizedString } from '@/src/types';

export interface ProcessStep {
  number: string;
  icon: string;
  title: string;
  description: LocalizedString;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    icon: 'Search',
    title: 'DISCOVER',
    description: {
      fr: 'Comprendre le problème, les objectifs et les besoins de votre audience.',
      en: 'Understand the problem, objectives, and your audience\'s needs.',
    },
  },
  {
    number: '02',
    icon: 'Target',
    title: 'DEFINE',
    description: {
      fr: 'Définir la stratégie, l\'architecture et les parcours utilisateurs.',
      en: 'Define the strategy, architecture, and user journeys.',
    },
  },
  {
    number: '03',
    icon: 'PenTool',
    title: 'DESIGN',
    description: {
      fr: 'Créer l\'expérience visuelle et les interfaces utilisateur.',
      en: 'Create the visual experience and user interfaces.',
    },
  },
  {
    number: '04',
    icon: 'Code2',
    title: 'BUILD',
    description: {
      fr: 'Développer le produit avec des technologies modernes et performantes.',
      en: 'Develop the product with modern, performant technologies.',
    },
  },
  {
    number: '05',
    icon: 'Rocket',
    title: 'LAUNCH',
    description: {
      fr: 'Lancer, mesurer et améliorer continuellement.',
      en: 'Launch, measure, and continuously improve.',
    },
  },
];
