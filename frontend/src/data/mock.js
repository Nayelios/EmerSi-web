// GROUPE RÉALIS - All content data

export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?auto=format&fit=crop&w=1920&q=80',
  interior: 'https://images.unsplash.com/photo-1581784878214-8d5596b98a01?auto=format&fit=crop&w=1200&q=80',
  exterior: 'https://images.unsplash.com/photo-1713936025889-e7920f0fb952?auto=format&fit=crop&w=1200&q=80',
  excavation: 'https://images.unsplash.com/photo-1770021601330-888e30209a60?auto=format&fit=crop&w=1200&q=80',
  declutter: 'https://images.unsplash.com/flagged/photo-1573168710465-7f7da9a23a15?auto=format&fit=crop&w=1200&q=80',
  system: 'https://images.unsplash.com/photo-1737898401256-be74592ec8b2?auto=format&fit=crop&w=1920&q=80',
  experience: 'https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?auto=format&fit=crop&w=1920&q=80',
  about: 'https://images.unsplash.com/photo-1618832515490-e181c4794a45?auto=format&fit=crop&w=1920&q=80',
  parcours: 'https://images.unsplash.com/photo-1746458258536-b9ee5db20a73?auto=format&fit=crop&w=1920&q=80',
};

export const NAV_LINKS = [
  { label: 'Le Système', href: '/systeme' },
  { label: 'L’Expérience', href: '/experience' },
  { label: 'Parcours', href: '/parcours' },
  { label: 'Expertises', href: '/expertises' },
  { label: 'Partenaires', href: '/partenaires' },
  { label: 'À propos', href: '/a-propos' },
];

export const PILLARS = [
  {
    id: 'soulagement',
    title: 'Soulagement',
    subtitle: 'Un seul responsable. Vous respirez.',
    description: 'Fini les multiples interlocuteurs. Un responsable unique prend en charge votre projet de A à Z. Vous déléguez réellement.',
    icon: 'Heart',
  },
  {
    id: 'passage',
    title: 'Passage à l’acte',
    subtitle: 'Un cadre clair. Vous avancez.',
    description: 'Des options claires, des décisions simplifiées. Votre projet passe de l’idée à la réalité sans friction.',
    icon: 'ArrowRight',
  },
  {
    id: 'confiance',
    title: 'Confiance',
    subtitle: 'Un pilotage maîtrisé. Vous savez où vous allez.',
    description: 'Transparence totale, standards élevés, contrôle rigoureux. Vous gardez la visibilité à chaque étape.',
    icon: 'Shield',
  },
];

export const STEPS = [
  {
    number: '01',
    title: 'Comprendre',
    description: 'Analyse de vos objectifs, contraintes et priorités. Nous prenons le temps de saisir l’essence de votre projet.',
  },
  {
    number: '02',
    title: 'Clarifier',
    description: 'Cadrage des options, arbitrages et prise de décision. Un chemin clair se dessine.',
  },
  {
    number: '03',
    title: 'Planifier',
    description: 'Coordination, séquence et échéancier précis. Chaque étape est anticipée.',
  },
  {
    number: '04',
    title: 'Exécuter',
    description: 'Standard élevé, contrôle continu et finitions impeccables. La qualité ne se négocie pas.',
  },
  {
    number: '05',
    title: 'Livrer',
    description: 'Validation minutieuse, ajustements finaux et suivi post-livraison. Votre satisfaction est notre signature.',
  },
];

export const EXPERTISES = [
  {
    slug: 'finition-interieure',
    title: 'Finition intérieure haut de gamme',
    shortTitle: 'Finition intérieure',
    description: 'Finition intérieure personnalisée haut de gamme : un responsable unique, une exécution maîtrisée, des finitions impeccables.',
    image: 'interior',
    problems: [
      'Vous voulez un rendu haut de gamme, sans approximations.',
      'Vous ne voulez pas gérer plusieurs corps de métier.',
      'Vous voulez que chaque détail soit cohérent avec votre style.',
    ],
  },
  {
    slug: 'amenagement-exterieur',
    title: 'Aménagement extérieur personnalisé',
    shortTitle: 'Aménagement extérieur',
    description: 'Aménagement extérieur haut de gamme : design, coordination et exécution avec une seule signature.',
    image: 'exterior',
    problems: [
      'Vous voulez un extérieur signature, pas un catalogue.',
      'Vous voulez que ça avance vite, sans compromis sur la qualité.',
      'Vous voulez une cohérence globale (matières, lignes, finitions).',
    ],
  },
  {
    slug: 'excavation',
    title: 'Excavation & préparation',
    shortTitle: 'Excavation',
    description: 'Excavation et préparation : sécuriser les bases, coordonner la suite, éviter les mauvaises surprises.',
    image: 'excavation',
    problems: [
      'Vous voulez des bases solides et une exécution sécurisée.',
      'Vous voulez limiter les imprévus et les retards.',
      'Vous voulez une coordination propre avec la suite du projet.',
    ],
  },
  {
    slug: 'desencombrement',
    title: 'Désencombrement & remise à neuf',
    shortTitle: 'Désencombrement',
    description: 'Désencombrement et remise à neuf : reprendre le contrôle rapidement, avec méthode et discrétion.',
    image: 'declutter',
    problems: [
      'Vous voulez une remise à niveau rapide, propre, discrète.',
      'Vous voulez un cadre clair et un pilotage complet.',
      'Vous voulez que le lieu redevienne fonctionnel et valorisé.',
    ],
  },
];

export const EXPERTISE_BENEFITS = [
  'Un responsable unique',
  'Un cadre clair et des décisions simplifiées',
  'Un projet qui avance sans relances',
  'Un résultat à la hauteur du niveau d’exigence',
];

export const EXPERTISE_PROMISE = 'Nous prenons en charge le projet de bout en bout : cadrage, planification, coordination, exécution, finitions.';

export const EXPERTISE_PROCESS = [
  'Analyse & compréhension',
  'Cadrage des options',
  'Planification',
  'Exécution + contrôle',
  'Livraison + suivi',
];

export const PARTNER_BENEFITS = [
  'Flux de projets qualifiés et haut de gamme',
  'Cadre de travail structuré et professionnel',
  'Pilotage et coordination assurés',
  'Standards élevés, reconnaissance du travail bien fait',
  'Simplicité administrative',
];

export const PARTNER_REQUIREMENTS = [
  'Qualité d’exécution irréprochable',
  'Fiabilité et respect des engagements',
  'Communication proactive',
  'Respect du cadre et des standards RÉALIS',
];

export const PARTNER_PROCESS = [
  { step: 'Candidature', description: 'Soumettez votre profil et portfolio.' },
  { step: 'Échange', description: 'Discussion approfondie sur vos compétences et valeurs.' },
  { step: 'Test sur projet', description: 'Collaboration sur un premier projet encadré.' },
  { step: 'Intégration', description: 'Bienvenue dans le réseau RÉALIS.' },
];

export const CONTACT_PROJECT_TYPES = [
  'Finition intérieure',
  'Aménagement extérieur',
  'Excavation & préparation',
  'Désencombrement & remise à neuf',
  'Autre',
];

export const CONTACT_URGENCY = [
  'Immédiat',
  'Moins de 30 jours',
  '1 à 3 mois',
  'Plus de 3 mois',
];

export const CONTACT_BUDGET = [
  'Moins de 25 000 $',
  '25 000 $ — 50 000 $',
  '50 000 $ — 100 000 $',
  '100 000 $ — 250 000 $',
  'Plus de 250 000 $',
];

export const CONTACT_OBJECTIVES = [
  'Vendre',
  'Rénover',
  'Améliorer',
  'Valoriser',
  'Autre',
];

export const QUALIFICATION_POINTS = [
  'Particuliers à fort pouvoir d’achat',
  'Projets personnalisés',
  'Exigence élevée',
  'Volonté de passer à l’action maintenant',
];

export const FOOTER_ZONES = [
  'Montréal',
  'Rive-Nord',
  'Rive-Sud',
  'Laurentides',
  'Lanaudière',
];
