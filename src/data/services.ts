import type { ServiceCategory } from '@/src/types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'digital',
    slug: 'digital',
    title: { fr: 'Digital', en: 'Digital' },
    description: {
      fr: 'Nous concevons et développons des produits digitaux performants et intuitifs.',
      en: 'We design and develop high-performance, intuitive digital products.',
    },
    icon: 'Code',
    items: [
      {
        title: { fr: 'Sites Web', en: 'Websites' },
        description: {
          fr: 'Sites vitrines, corporate et sur mesure construits avec les technologies modernes.',
          en: 'Showcase, corporate, and custom websites built with modern technologies.',
        },
      },
      {
        title: { fr: 'Applications Web', en: 'Web Applications' },
        description: {
          fr: 'Applications web performantes avec des interfaces utilisateur riches et réactives.',
          en: 'High-performance web applications with rich, responsive user interfaces.',
        },
      },
      {
        title: { fr: 'Applications Mobiles', en: 'Mobile Applications' },
        description: {
          fr: 'Applications natives et cross-platform pour iOS et Android.',
          en: 'Native and cross-platform applications for iOS and Android.',
        },
      },
      {
        title: { fr: 'E-commerce', en: 'E-commerce' },
        description: {
          fr: 'Boutiques en ligne optimisées pour la conversion et l\'expérience d\'achat.',
          en: 'Online stores optimized for conversion and shopping experience.',
        },
      },
      {
        title: { fr: 'Produits Digitaux', en: 'Digital Products' },
        description: {
          fr: 'Plateformes SaaS, dashboards et outils digitaux sur mesure.',
          en: 'SaaS platforms, dashboards, and custom digital tools.',
        },
      },
    ],
  },
  {
    id: 'brand',
    slug: 'branding',
    title: { fr: 'Brand', en: 'Brand' },
    description: {
      fr: 'Nous créons des identités de marque mémorables et cohérentes.',
      en: 'We create memorable and consistent brand identities.',
    },
    icon: 'Palette',
    items: [
      {
        title: { fr: 'Logo Design', en: 'Logo Design' },
        description: {
          fr: 'Logos distinctifs qui capturent l\'essence de votre marque.',
          en: 'Distinctive logos that capture the essence of your brand.',
        },
      },
      {
        title: { fr: 'Identité de Marque', en: 'Brand Identity' },
        description: {
          fr: 'Systèmes visuels complets : typographie, couleurs, guidelines.',
          en: 'Complete visual systems: typography, colors, guidelines.',
        },
      },
      {
        title: { fr: 'Identité Visuelle', en: 'Visual Identity' },
        description: {
          fr: 'Direction artistique et univers graphique cohérent.',
          en: 'Art direction and consistent graphic universe.',
        },
      },
      {
        title: { fr: 'UI/UX Design', en: 'UI/UX Design' },
        description: {
          fr: 'Interfaces centrées utilisateur qui privilégient l\'ergonomie et l\'esthétique.',
          en: 'User-centered interfaces that prioritize usability and aesthetics.',
        },
      },
      {
        title: { fr: 'Design Systems', en: 'Design Systems' },
        description: {
          fr: 'Bibliothèques de composants et guidelines pour une cohérence à grande échelle.',
          en: 'Component libraries and guidelines for consistency at scale.',
        },
      },
    ],
  },
  {
    id: 'content',
    slug: 'content',
    title: { fr: 'Content', en: 'Content' },
    description: {
      fr: 'Nous produisons du contenu créatif qui engage et convertit.',
      en: 'We produce creative content that engages and converts.',
    },
    icon: 'Film',
    items: [
      {
        title: { fr: 'Vidéo', en: 'Video' },
        description: {
          fr: 'Production vidéo professionnelle pour votre communication.',
          en: 'Professional video production for your communication.',
        },
      },
      {
        title: { fr: 'Reels & Shorts', en: 'Reels & Shorts' },
        description: {
          fr: 'Contenus courts et percutants pour les réseaux sociaux.',
          en: 'Short, impactful content for social media.',
        },
      },
      {
        title: { fr: 'Motion Design', en: 'Motion Design' },
        description: {
          fr: 'Animations et motion graphics pour donner vie à vos idées.',
          en: 'Animations and motion graphics to bring your ideas to life.',
        },
      },
      {
        title: { fr: 'Contenu Réseaux Sociaux', en: 'Social Media Content' },
        description: {
          fr: 'Stratégie et création de contenu pour vos plateformes sociales.',
          en: 'Strategy and content creation for your social platforms.',
        },
      },
      {
        title: { fr: 'Contenu Digital', en: 'Digital Content' },
        description: {
          fr: 'Articles, newsletters et contenus éditoriaux pour votre marque.',
          en: 'Articles, newsletters, and editorial content for your brand.',
        },
      },
    ],
  },
];
