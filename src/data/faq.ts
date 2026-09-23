import type { LocalizedString } from '@/src/types';

export interface FaqItem {
  question: LocalizedString;
  answer: LocalizedString;
}

export const faqItems: FaqItem[] = [
  {
    question: {
      fr: 'Quels types de services proposez-vous ?',
      en: 'What types of services do you offer?',
    },
    answer: {
      fr: 'Nous proposons trois grandes catégories de services : Digital (sites web, applications web et mobiles, e-commerce, produits digitaux), Brand (logo, identité de marque, UI/UX design, design systems) et Content (vidéo, motion design, contenu réseaux sociaux, contenu digital).',
      en: 'We offer three main categories of services: Digital (websites, web and mobile applications, e-commerce, digital products), Brand (logo, brand identity, UI/UX design, design systems), and Content (video, motion design, social media content, digital content).',
    },
  },
  {
    question: {
      fr: 'Quel est votre délai typique pour un projet ?',
      en: 'What is your typical timeline for a project?',
    },
    answer: {
      fr: 'Nos délais varient selon l\'envergure et la complexité. Un projet de branding standard prend 2-4 semaines, tandis qu\'un site web sur mesure nécessite généralement 4-8 semaines. Les applications mobiles et plateformes complexes peuvent prendre 8-16 semaines. Nous fournissons un calendrier détaillé lors de notre consultation initiale.',
      en: 'Our timelines vary depending on scope and complexity. A standard branding project takes 2-4 weeks, while a custom website typically requires 4-8 weeks. Mobile applications and complex platforms can take 8-16 weeks. We provide a detailed timeline during our initial consultation.',
    },
  },
  {
    question: {
      fr: 'Comment se déroule la collaboration ?',
      en: 'How does the collaboration work?',
    },
    answer: {
      fr: 'Nous suivons un processus en 5 étapes : Discover (comprendre vos besoins), Define (stratégie), Design (conception), Build (développement) et Launch (lancement). À chaque étape, vous êtes impliqué dans les décisions clés avec des points réguliers et des livrables intermédiaires.',
      en: 'We follow a 5-step process: Discover (understand your needs), Define (strategy), Design (creation), Build (development), and Launch (launch). At each stage, you\'re involved in key decisions with regular check-ins and intermediate deliverables.',
    },
  },
  {
    question: {
      fr: 'Comment gérez-vous la facturation ?',
      en: 'How do you handle billing?',
    },
    answer: {
      fr: 'Nous fonctionnons sur un modèle de prix fixe transparent pour la plupart des projets, divisé en étapes (typiquement 50% d\'acompte, 50% à la livraison). Pour les partenariats continus, nous proposons des forfaits de maintenance adaptés à vos besoins.',
      en: 'We operate on a transparent fixed-price model for most projects, divided into milestones (typically 50% upfront, 50% on delivery). For ongoing partnerships, we offer maintenance packages tailored to your needs.',
    },
  },
  {
    question: {
      fr: 'Fournissez-vous un support après lancement ?',
      en: 'Do you provide post-launch support?',
    },
    answer: {
      fr: 'Absolument. Nous offrons 30 jours de support gratuit après le lancement pour assurer que tout fonctionne parfaitement. Au-delà, nous proposons des forfaits de maintenance flexibles incluant mises à jour de sécurité, corrections de bugs, optimisations et évolutions.',
      en: 'Absolutely. We offer 30 days of free support after launch to ensure everything runs smoothly. Beyond that, we offer flexible maintenance packages including security updates, bug fixes, optimizations, and feature enhancements.',
    },
  },
  {
    question: {
      fr: 'Quelles technologies utilisez-vous ?',
      en: 'What technologies do you use?',
    },
    answer: {
      fr: 'Nous utilisons les technologies les plus modernes et éprouvées : React, Next.js, TypeScript, Node.js, Python, React Native pour le mobile, PostgreSQL, MongoDB, Prisma, Docker, AWS et Firebase. Nous adaptons notre stack technique aux besoins spécifiques de chaque projet.',
      en: 'We use the most modern and proven technologies: React, Next.js, TypeScript, Node.js, Python, React Native for mobile, PostgreSQL, MongoDB, Prisma, Docker, AWS, and Firebase. We adapt our tech stack to the specific needs of each project.',
    },
  },
  {
    question: {
      fr: 'Qu\'est-ce qui rend Moovlabs différent ?',
      en: 'What makes Moovlabs different?',
    },
    answer: {
      fr: 'Nous allions réflexion stratégique, design esthétique haut de gamme et excellence technique. Nous ne faisons pas que de belles choses ; nous construisons des actifs digitaux qui stimulent la croissance et positionnent votre marque comme leader. Notre approche est holistique : Brand × Digital × Content.',
      en: 'We combine strategic thinking, high-end aesthetic design, and technical excellence. We don\'t just make beautiful things; we build digital assets that drive growth and position your brand as a leader. Our approach is holistic: Brand × Digital × Content.',
    },
  },
];
