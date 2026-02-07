import React from 'react';
import { HeroSection } from '../components/shared/HeroSection';
import { PillarsBlock } from '../components/shared/PillarsBlock';
import { CTABlock } from '../components/shared/CTABlock';
import { useInView } from '../hooks/useInView';
import { IMAGES, PILLARS } from '../data/mock';

const StoryBlock = () => {
  const [ref, isVisible] = useInView();
  return (
    <section ref={ref} className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div className="section-divider mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal-800 mb-6">
              Notre vision
            </h2>
            <div className="space-y-4 text-base text-charcoal-500 leading-relaxed">
              <p>
                GROUPE RÉALIS est né d\u2019un constat simple : les particuliers à fort pouvoir d\u2019achat méritent une expérience à la hauteur de leurs projets.
              </p>
              <p>
                Trop souvent, des projets ambitieux restent bloqués par la complexité de la coordination, la multiplicité des intervenants et l\u2019absence d\u2019un cadre clair.
              </p>
              <p>
                Nous avons créé un système qui change la donne : un responsable unique, un pilotage rigoureux et des standards qui ne se négocient pas.
              </p>
            </div>
          </div>
          <div className={`fade-in-up stagger-2 ${isVisible ? 'visible' : ''} img-zoom rounded-sm overflow-hidden`}>
            <img
              src={IMAGES.about}
              alt="L'équipe RÉALIS"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SignatureBlock = () => {
  const [ref, isVisible] = useInView();
  return (
    <section ref={ref} className="py-20 lg:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`fade-in-up ${isVisible ? 'visible' : ''} max-w-3xl mx-auto text-center`}>
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-charcoal-800 leading-snug mb-6">
            Vos envies, votre signature, notre souci du détail.
          </blockquote>
          <div className="section-divider mx-auto" />
        </div>
      </div>
    </section>
  );
};

const ValuesBlock = () => {
  const [ref, isVisible] = useInView();
  const values = [
    { title: 'Rigueur', desc: 'Chaque détail compte. Nous ne laissons rien au hasard.' },
    { title: 'Transparence', desc: 'Communication proactive et clarté à chaque étape.' },
    { title: 'Excellence', desc: 'Des standards élevés, non négociables.' },
    { title: 'Engagement', desc: 'Votre projet est notre projet. Point final.' },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`fade-in-up ${isVisible ? 'visible' : ''} mb-12`}>
          <div className="section-divider mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal-800">
            Nos valeurs
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <div
              key={i}
              className={`fade-in-up stagger-${i + 1} ${isVisible ? 'visible' : ''} p-8 border border-cream-400/30 rounded-sm`}
            >
              <h3 className="font-serif text-lg font-medium text-charcoal-800 mb-3">{val.title}</h3>
              <p className="text-sm text-charcoal-400 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function AboutPage() {
  return (
    <div className="page-enter">
      <HeroSection
        subtitle="À propos"
        title="Groupe RÉALIS"
        text="Un système d\u2019intervention premium pour des projets personnalisés haut de gamme."
        backgroundImage={IMAGES.system}
        primaryCTA="Lancer mon projet"
        compact
      />
      <StoryBlock />
      <SignatureBlock />
      <PillarsBlock pillars={PILLARS} dark />
      <ValuesBlock />
      <CTABlock />
    </div>
  );
}
