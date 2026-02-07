import React from 'react';
import { Heart, ArrowRight, Shield } from 'lucide-react';
import { HeroSection } from '../components/shared/HeroSection';
import { CTABlock } from '../components/shared/CTABlock';
import { useInView } from '../hooks/useInView';
import { IMAGES } from '../data/mock';

const PillarDetailBlock = ({ icon: Icon, label, title, description, features, index }) => {
  const [ref, isVisible] = useInView();
  const isEven = index % 2 === 0;

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-24 ${isEven ? 'bg-background' : 'bg-cream-50'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`fade-in-up ${isVisible ? 'visible' : ''} max-w-3xl ${isEven ? '' : 'ml-auto'}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-sm bg-bronze-50 flex items-center justify-center">
              <Icon className="w-5 h-5 text-bronze-500" />
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-bronze-500">{label}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal-800 mb-6">
            {title}
          </h2>
          <p className="text-base text-charcoal-400 leading-relaxed mb-8">
            {description}
          </p>
          <div className="space-y-4">
            {features.map((feat, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-bronze-400 mt-2.5 flex-shrink-0" />
                <p className="text-sm text-charcoal-600 leading-relaxed">{feat}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const pillarDetails = [
  {
    icon: Heart,
    label: 'Pilier 1 — Soulagement',
    title: 'Vous déléguez réellement.',
    description: 'Plus de coordination. Plus de relances. Plus de charge mentale. Vous confiez votre projet à un responsable unique qui gère tout, du début à la fin.',
    features: [
      'Un interlocuteur unique pour toutes vos questions.',
      'Plus besoin de comparer, coordonner ou relancer.',
      'Libérez votre temps pour ce qui compte vraiment.',
    ],
  },
  {
    icon: ArrowRight,
    label: 'Pilier 2 — Passage à l\u2019acte',
    title: 'Un cadre clair, une décision rapide.',
    description: 'On ne vous noie pas dans les options. On vous présente les meilleures, on vous aide à décider, et on avance. Votre projet ne reste pas au stade d\u2019idée.',
    features: [
      'Options claires et recommandations argumentées.',
      'Décisions simplifiées, sans zone grise.',
      'Passage rapide de la décision à l\u2019action.',
    ],
  },
  {
    icon: Shield,
    label: 'Pilier 3 — Confiance',
    title: 'Pilotage, transparence, standards.',
    description: 'Vous savez où en est votre projet, à tout moment. Les standards sont élevés, les contrôles rigoureux, et la qualité ne se négocie pas.',
    features: [
      'Suivi régulier et communication proactive.',
      'Contrôle qualité continu sur chaque phase.',
      'Standards élevés, sans compromis.',
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="page-enter">
      <HeroSection
        subtitle="L\u2019Expérience RÉALIS"
        title="Soulagement, passage à l\u2019acte, confiance."
        text="Une expérience client hors du commun : un projet qui avance, sans friction, sous contrôle."
        backgroundImage={IMAGES.experience}
        primaryCTA="Lancer mon projet"
        compact
      />

      {/* Promise */}
      <section className="py-20 lg:py-24 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-cream-100 leading-snug max-w-3xl mx-auto">
            Vous ne portez plus le projet seul.
          </blockquote>
        </div>
      </section>

      {pillarDetails.map((pillar, index) => (
        <PillarDetailBlock key={index} {...pillar} index={index} />
      ))}

      <CTABlock />
    </div>
  );
}
