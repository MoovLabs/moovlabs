import type { Project } from '@/src/types';

export const projects: Project[] = [
  {
    id: 'moovnow',
    slug: 'moovnow',
    title: 'MoovNow',
    category: {
      fr: 'Produit Digital / Application Web',
      en: 'Digital Product / Web Application',
    },
    year: '2024',
    description: {
      fr: 'Plateforme digitale innovante conçue pour transformer l\'expérience utilisateur avec une interface moderne et des fonctionnalités avancées.',
      en: 'Innovative digital platform designed to transform the user experience with a modern interface and advanced features.',
    },
    longDescription: {
      fr: 'MoovNow est une application web complète développée pour offrir une expérience utilisateur fluide et intuitive. Le projet intègre un design moderne, des performances optimisées et une architecture scalable.',
      en: 'MoovNow is a comprehensive web application developed to deliver a smooth and intuitive user experience. The project integrates modern design, optimized performance, and scalable architecture.',
    },
    image: '/images/projects/moovnow.png',
    tags: ['UI/UX', 'Web App', 'Dashboard'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    challenge: {
      fr: 'Créer une plateforme digitale capable de gérer des flux de données complexes tout en maintenant une expérience utilisateur exceptionnelle.',
      en: 'Create a digital platform capable of handling complex data flows while maintaining an exceptional user experience.',
    },
    solution: {
      fr: 'Nous avons conçu une architecture modulaire avec un système de design cohérent, permettant une navigation intuitive et des performances optimales.',
      en: 'We designed a modular architecture with a consistent design system, enabling intuitive navigation and optimal performance.',
    },
    result: {
      fr: 'Une plateforme performante et scalable qui répond aux besoins des utilisateurs avec une interface moderne et engageante.',
      en: 'A performant and scalable platform that meets user needs with a modern, engaging interface.',
    },
    color: 'hsl(38, 65%, 52%)',
  },
  {
    id: 'rentafarm',
    slug: 'rentafarm',
    title: 'RentAFarm',
    category: {
      fr: 'Application Mobile / Marketplace',
      en: 'Mobile Application / Marketplace',
    },
    year: '2024',
    description: {
      fr: 'Marketplace mobile connectant directement les agriculteurs aux consommateurs, avec une expérience d\'achat fluide et locale.',
      en: 'Mobile marketplace connecting farmers directly to consumers, with a smooth and local shopping experience.',
    },
    longDescription: {
      fr: 'RentAFarm est une application mobile marketplace qui révolutionne la distribution agricole en créant un lien direct entre producteurs locaux et consommateurs. L\'application propose une expérience d\'achat intuitive avec géolocalisation et paiement intégré.',
      en: 'RentAFarm is a mobile marketplace application that revolutionizes agricultural distribution by creating a direct link between local producers and consumers. The app offers an intuitive shopping experience with geolocation and integrated payment.',
    },
    image: '/images/projects/rentafarm.png',
    tags: ['Mobile', 'Marketplace', 'iOS/Android'],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Stripe'],
    challenge: {
      fr: 'Développer une marketplace mobile capable de gérer la logistique complexe de la vente directe agricole tout en offrant une expérience simple.',
      en: 'Develop a mobile marketplace capable of managing the complex logistics of direct agricultural sales while offering a simple experience.',
    },
    solution: {
      fr: 'Une application native cross-platform avec géolocalisation intelligente, système de paiement sécurisé et interface optimisée pour tous les profils d\'utilisateurs.',
      en: 'A cross-platform native application with intelligent geolocation, secure payment system, and interface optimized for all user profiles.',
    },
    result: {
      fr: 'Une application adoptée rapidement par les producteurs et consommateurs locaux, facilitant l\'accès aux produits frais et de qualité.',
      en: 'An application quickly adopted by local producers and consumers, facilitating access to fresh, quality products.',
    },
    color: 'hsl(142, 45%, 42%)',
  },
  {
    id: 'workly',
    slug: 'workly',
    title: 'Workly',
    category: {
      fr: 'Produit Digital / Plateforme',
      en: 'Digital Product / Platform',
    },
    year: '2023',
    description: {
      fr: 'Plateforme de gestion et de collaboration conçue pour optimiser la productivité des équipes avec des outils modernes et intuitifs.',
      en: 'Management and collaboration platform designed to optimize team productivity with modern and intuitive tools.',
    },
    longDescription: {
      fr: 'Workly est une plateforme complète de gestion de projet et de collaboration d\'équipe. Elle combine des outils de planification, de communication et de suivi en un seul produit cohérent et performant.',
      en: 'Workly is a comprehensive project management and team collaboration platform. It combines planning, communication, and tracking tools into a single cohesive, performant product.',
    },
    image: '/icon-moovlabs.png',
    tags: ['SaaS', 'Platform', 'Productivity'],
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'AWS'],
    challenge: {
      fr: 'Concevoir une plateforme de productivité capable de rivaliser avec les solutions existantes tout en offrant une expérience différenciante.',
      en: 'Design a productivity platform capable of competing with existing solutions while offering a differentiating experience.',
    },
    solution: {
      fr: 'Un design épuré centré sur l\'efficacité, avec une architecture temps réel pour la collaboration et des intégrations natives avec les outils populaires.',
      en: 'A clean design focused on efficiency, with real-time architecture for collaboration and native integrations with popular tools.',
    },
    result: {
      fr: 'Une plateforme qui améliore significativement la productivité des équipes grâce à une interface intuitive et des fonctionnalités puissantes.',
      en: 'A platform that significantly improves team productivity through an intuitive interface and powerful features.',
    },
    color: 'hsl(250, 55%, 55%)',
  },
  {
    id: 'madaexplorer',
    slug: 'madaexplorer',
    title: 'MadaExplorer',
    category: {
      fr: 'Tourisme / Expérience Digitale',
      en: 'Tourism / Digital Experience',
    },
    year: '2023',
    description: {
      fr: 'Expérience digitale immersive dédiée à la découverte de Madagascar, avec des parcours interactifs et un design captivant.',
      en: 'Immersive digital experience dedicated to discovering Madagascar, with interactive journeys and captivating design.',
    },
    longDescription: {
      fr: 'MadaExplorer est une expérience digitale qui met en valeur la beauté et la richesse de Madagascar. Le site propose des parcours interactifs, une cartographie immersive et du contenu rich media pour inspirer les voyageurs.',
      en: 'MadaExplorer is a digital experience that showcases the beauty and richness of Madagascar. The site offers interactive journeys, immersive mapping, and rich media content to inspire travelers.',
    },
    image: '/images/projects/madaexplorer.png',
    tags: ['Tourism', 'Interactive', 'Experience'],
    technologies: ['Next.js', 'Three.js', 'GSAP', 'Mapbox', 'Contentful'],
    challenge: {
      fr: 'Créer une expérience digitale capable de capturer la magie de Madagascar et d\'inspirer les voyageurs à travers le monde.',
      en: 'Create a digital experience capable of capturing the magic of Madagascar and inspiring travelers around the world.',
    },
    solution: {
      fr: 'Une expérience immersive combinant animations 3D, cartographie interactive et storytelling visuel pour transporter les visiteurs au cœur de l\'île.',
      en: 'An immersive experience combining 3D animations, interactive mapping, and visual storytelling to transport visitors to the heart of the island.',
    },
    result: {
      fr: 'Une vitrine digitale premium qui positionne Madagascar comme une destination incontournable et génère un engagement fort des visiteurs.',
      en: 'A premium digital showcase that positions Madagascar as a must-visit destination and generates strong visitor engagement.',
    },
    color: 'hsl(175, 50%, 40%)',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
