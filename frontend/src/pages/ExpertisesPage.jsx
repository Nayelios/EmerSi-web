import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { HeroSection } from '../components/shared/HeroSection';
import { CTABlock } from '../components/shared/CTABlock';
import { useInView } from '../hooks/useInView';
import { IMAGES, EXPERTISES } from '../data/mock';

const ExpertiseGrid = () => {
  const [ref, isVisible] = useInView();
  return (
    <section ref={ref} className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`fade-in-up ${isVisible ? 'visible' : ''} mb-16`}>
          <div className="section-divider mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal-800 mb-4">
            Quatre domaines. Un même standard.
          </h2>
          <p className="text-base text-charcoal-400 max-w-xl">
            Chaque expertise bénéficie du même niveau de rigueur, de pilotage et de finition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXPERTISES.map((exp, index) => (
            <Link
              key={exp.slug}
              to={`/expertises/${exp.slug}`}
              className={`fade-in-up stagger-${Math.min(index + 1, 4)} ${isVisible ? 'visible' : ''} expertise-card group block`}
            >
              <div className="img-zoom rounded-sm overflow-hidden mb-6">
                <div className="aspect-[16/10] relative">
                  <img
                    src={IMAGES[exp.image]}
                    alt={exp.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-charcoal-900/10 group-hover:bg-charcoal-900/20 transition-colors duration-500" />
                </div>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-bronze-500 mb-2">
                Expertise
              </p>
              <h3 className="font-serif text-xl lg:text-2xl text-charcoal-800 mb-3 group-hover:text-bronze-600 transition-colors duration-300">
                {exp.title}
              </h3>
              <p className="text-sm text-charcoal-400 leading-relaxed mb-4 max-w-md">
                {exp.description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-bronze-500 group-hover:text-bronze-600 transition-colors duration-300">
                Découvrir
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function ExpertisesPage() {
  return (
    <div className="page-enter">
      <HeroSection
        subtitle="Nos expertises"
        title="L’excellence, dans chaque domaine."
        text="Finition intérieure, aménagement extérieur, excavation, désencombrement. Quatre expertises, un même engagement de qualité."
        primaryCTA="Demander une prise en charge"
        compact
      />
      <ExpertiseGrid />
      <CTABlock />
    </div>
  );
}
