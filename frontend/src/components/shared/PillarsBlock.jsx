import React from 'react';
import { Heart, ArrowRight, Shield } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const iconMap = {
  Heart,
  ArrowRight,
  Shield,
};

export const PillarsBlock = ({ pillars, dark = false }) => {
  const [ref, isVisible] = useInView();

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-28 ${dark ? 'bg-charcoal-800' : 'bg-cream-50'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div className="section-divider mx-auto mb-6" />
            <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-4 ${
              dark ? 'text-cream-100' : 'text-charcoal-800'
            }`}>
              Trois piliers. Une promesse.
            </h2>
            <p className={`text-base max-w-xl mx-auto ${
              dark ? 'text-charcoal-300' : 'text-charcoal-400'
            }`}>
              Chaque projet RÉALIS repose sur ces fondations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = iconMap[pillar.icon];
            return (
              <div
                key={pillar.id}
                className={`fade-in-up stagger-${index + 1} ${isVisible ? 'visible' : ''} pillar-card p-8 lg:p-10 rounded-sm ${
                  dark
                    ? 'bg-charcoal-700/50 border border-charcoal-600/50'
                    : 'bg-white border border-cream-400/50'
                }`}
              >
                <div className={`w-12 h-12 rounded-sm flex items-center justify-center mb-6 ${
                  dark ? 'bg-bronze-500/10' : 'bg-bronze-50'
                }`}>
                  {IconComponent && (
                    <IconComponent className="w-5 h-5 text-bronze-500" />
                  )}
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-bronze-500 mb-3">
                  {pillar.title}
                </p>
                <h3 className={`font-serif text-xl lg:text-2xl font-medium mb-4 ${
                  dark ? 'text-cream-100' : 'text-charcoal-800'
                }`}>
                  {pillar.subtitle}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  dark ? 'text-charcoal-300' : 'text-charcoal-400'
                }`}>
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
