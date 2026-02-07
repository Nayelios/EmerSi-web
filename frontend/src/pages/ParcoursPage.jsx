import React from 'react';
import { HeroSection } from '../components/shared/HeroSection';
import { CTABlock } from '../components/shared/CTABlock';
import { useInView } from '../hooks/useInView';
import { IMAGES, STEPS } from '../data/mock';

const DetailedStep = ({ step, index }) => {
  const [ref, isVisible] = useInView();
  const isEven = index % 2 === 0;

  const expandedDescriptions = [
    'Nous prenons le temps de saisir l\u2019essence de votre projet. Objectifs, contraintes, priorités, style de vie — chaque élément compte. Cette étape est la fondation de tout ce qui suit.',
    'Nous vous présentons les meilleures options, avec des recommandations claires et argumentées. Vous arbitrez en toute connaissance de cause, sans zone grise.',
    'Séquence, coordination, échéancier — chaque étape est anticipée et organisée pour garantir fluidité et respect des délais.',
    'Standard élevé, contrôle continu, finitions impeccables. Nous supervisons chaque phase avec rigueur pour un résultat à la hauteur de vos exigences.',
    'Validation minutieuse, ajustements finaux et suivi post-livraison. Votre satisfaction est notre signature, et notre engagement ne s\u2019arrête pas à la remise des clés.',
  ];

  return (
    <section
      ref={ref}
      className={`py-16 lg:py-20 ${isEven ? 'bg-background' : 'bg-cream-50'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`fade-in-up ${isVisible ? 'visible' : ''} flex flex-col md:flex-row gap-8 md:gap-16 items-start`}>
          <div className="flex-shrink-0">
            <span className="font-serif text-6xl lg:text-7xl font-light text-bronze-200">
              {step.number}
            </span>
          </div>
          <div className="max-w-2xl">
            <h3 className="font-serif text-2xl md:text-3xl font-light text-charcoal-800 mb-4">
              {step.title}
            </h3>
            <p className="text-base text-charcoal-400 leading-relaxed">
              {expandedDescriptions[index]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function ParcoursPage() {
  return (
    <div className="page-enter">
      <HeroSection
        subtitle="Parcours client"
        title="Votre projet, étape par étape."
        text="De la clarté à la livraison. 5 étapes simples : analyse, cadrage, planification, exécution, livraison."
        backgroundImage={IMAGES.parcours}
        primaryCTA="Demander une prise en charge"
        compact
      />

      {STEPS.map((step, index) => (
        <DetailedStep key={step.number} step={step} index={index} />
      ))}

      <CTABlock ctaText="Demander une prise en charge" />
    </div>
  );
}
