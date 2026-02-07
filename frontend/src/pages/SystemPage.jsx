import React from 'react';
import { HeroSection } from '../components/shared/HeroSection';
import { StepsBlock } from '../components/shared/StepsBlock';
import { CTABlock } from '../components/shared/CTABlock';
import { useInView } from '../hooks/useInView';
import { IMAGES, STEPS } from '../data/mock';
import { AlertTriangle, Target, Users } from 'lucide-react';

const ProblemBlock = () => {
  const [ref, isVisible] = useInView();
  const problems = [
    { icon: AlertTriangle, title: 'Multiplication d\u2019intervenants', text: 'Vous jongler entre différents prestataires, chacun avec ses méthodes et ses délais.' },
    { icon: Target, title: 'Zones floues et retards', text: 'Pas de cadre clair, des responsabilités diluées, des relances constantes.' },
    { icon: Users, title: 'Charge mentale', text: 'Vous finissez par piloter vous-même un projet que vous n\u2019avez ni le temps ni l\u2019envie de gérer.' },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`fade-in-up ${isVisible ? 'visible' : ''} mb-16`}>
          <div className="section-divider mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal-800 mb-4">
            Le problème du marché
          </h2>
          <p className="text-base text-charcoal-400 max-w-xl">
            La réalité de la plupart des projets haut de gamme aujourd\u2019hui.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <div
              key={i}
              className={`fade-in-up stagger-${i + 1} ${isVisible ? 'visible' : ''} p-8 bg-cream-50 border border-cream-400/30 rounded-sm`}
            >
              <item.icon className="w-5 h-5 text-bronze-500 mb-4" />
              <h3 className="font-serif text-lg font-medium text-charcoal-800 mb-3">{item.title}</h3>
              <p className="text-sm text-charcoal-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ChangeBlock = () => {
  const [ref, isVisible] = useInView();
  return (
    <section ref={ref} className="py-20 lg:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`fade-in-up ${isVisible ? 'visible' : ''} max-w-3xl`}>
          <div className="section-divider mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal-800 mb-6">
            Ce que RÉALIS change
          </h2>
          <div className="space-y-6">
            {[
              { label: 'Un responsable unique', desc: 'qui porte votre projet de bout en bout.' },
              { label: 'Un cadre clair', desc: 'avec des jalons, des livrables et une communication transparente.' },
              { label: 'Un pilotage rigoureux', desc: 'avec des standards élevés et un contrôle qualité continu.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-bronze-500 mt-2 flex-shrink-0" />
                <p className="text-base text-charcoal-700">
                  <span className="font-medium">{item.label}</span> {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function SystemPage() {
  return (
    <div className="page-enter">
      <HeroSection
        subtitle="Le Système RÉALIS"
        title="Un cadre clair, un responsable unique."
        text="Pourquoi RÉALIS n\u2019est pas un prestataire classique : prise en charge complète, pilotage rigoureux, clarté absolue."
        backgroundImage={IMAGES.system}
        primaryCTA="Demander une prise en charge"
        compact
      />
      <ProblemBlock />
      <ChangeBlock />
      <StepsBlock
        steps={STEPS}
        title="Comment on travaille"
        subtitle="Un processus structuré en 5 étapes pour chaque projet."
      />
      <CTABlock ctaText="Demander une prise en charge" />
    </div>
  );
}
