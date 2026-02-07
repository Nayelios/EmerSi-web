import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import { HeroSection } from '../components/shared/HeroSection';
import { PillarsBlock } from '../components/shared/PillarsBlock';
import { StepsBlock } from '../components/shared/StepsBlock';
import { CTABlock } from '../components/shared/CTABlock';
import { useInView } from '../hooks/useInView';
import { IMAGES, PILLARS, STEPS, EXPERTISES, QUALIFICATION_POINTS } from '../data/mock';

const PromiseBlock = () => {
  const [ref, isVisible] = useInView();
  return (
    <section ref={ref} className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`fade-in-up ${isVisible ? 'visible' : ''} max-w-3xl mx-auto text-center`}>
          <Sparkles className="w-6 h-6 text-bronze-400 mx-auto mb-6" />
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-charcoal-800 leading-snug mb-6">
            Vous ne cherchez pas un prestataire. Vous cherchez quelqu\u2019un qui porte votre projet comme si c\u2019était le sien.
          </blockquote>
          <Separator className="w-16 mx-auto mb-6 bg-bronze-300" />
          <p className="text-base text-bronze-500 font-medium tracking-wide">
            C\u2019est exactement ce que nous faisons.
          </p>
        </div>
      </div>
    </section>
  );
};

const ExpertisesTeaser = () => {
  const [ref, isVisible] = useInView();
  return (
    <section ref={ref} className="py-20 lg:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`fade-in-up ${isVisible ? 'visible' : ''} text-center mb-16`}>
          <div className="section-divider mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal-800 mb-4">
            Nos expertises
          </h2>
          <p className="text-base text-charcoal-400 max-w-xl mx-auto">
            Quatre domaines d\u2019intervention. Un même standard d\u2019excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {EXPERTISES.map((exp, index) => (
            <Link
              key={exp.slug}
              to={`/expertises/${exp.slug}`}
              className={`fade-in-up stagger-${Math.min(index + 1, 4)} ${isVisible ? 'visible' : ''} expertise-card group relative overflow-hidden rounded-sm`}
            >
              <div className="img-zoom aspect-[16/10]">
                <img
                  src={IMAGES[exp.image]}
                  alt={exp.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-bronze-300 mb-2">
                  Expertise
                </p>
                <h3 className="font-serif text-xl lg:text-2xl text-cream-100 mb-2">
                  {exp.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-cream-300/80 group-hover:text-cream-100 transition-colors duration-300">
                  Découvrir
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className={`fade-in-up stagger-5 ${isVisible ? 'visible' : ''} text-center mt-12`}>
          <Link to="/expertises">
            <Button
              variant="outline"
              className="font-sans text-sm tracking-wide px-8 py-3 h-auto rounded-sm border-charcoal-200 text-charcoal-600 hover:bg-charcoal-800 hover:text-cream-100 hover:border-charcoal-800"
            >
              Voir toutes les expertises
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const QualificationBlock = () => {
  const [ref, isVisible] = useInView();
  return (
    <section ref={ref} className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div className="section-divider mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal-800 mb-4">
              Est-ce pour vous ?
            </h2>
            <p className="text-base text-charcoal-400 leading-relaxed">
              RÉALIS s\u2019adresse à ceux qui veulent le meilleur, sans compromis.
            </p>
          </div>
          <div className={`fade-in-up stagger-2 ${isVisible ? 'visible' : ''}`}>
            <div className="space-y-4">
              {QUALIFICATION_POINTS.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 bg-cream-50 rounded-sm border border-cream-400/30"
                >
                  <div className="w-6 h-6 rounded-full bg-bronze-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-bronze-500" />
                  </div>
                  <span className="text-base text-charcoal-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <div className="page-enter">
      <HeroSection
        subtitle="Projets personnalisés et haut de gamme"
        title="Vous n\u2019avez plus à porter votre projet seul."
        text="Vous n\u2019avez pas le temps de coordonner, comparer, relancer. Vous voulez un cadre clair, une décision rapide, un résultat à la hauteur. RÉALIS devient votre interlocuteur unique. Nous structurons, pilotons et livrons."
        primaryCTA="Lancer mon projet"
        primaryCTALink="/contact"
        secondaryCTA="Découvrir l\u2019expérience RÉALIS"
        secondaryCTALink="/experience"
        backgroundImage={IMAGES.hero}
        showScroll
      />

      <PromiseBlock />

      <PillarsBlock pillars={PILLARS} />

      <StepsBlock
        steps={STEPS}
        title="Un parcours clair, de la première rencontre à la livraison."
        subtitle="Cinq étapes simples. Zéro zone grise. Un projet qui avance."
      />

      <ExpertisesTeaser />

      <QualificationBlock />

      <CTABlock />
    </div>
  );
}
