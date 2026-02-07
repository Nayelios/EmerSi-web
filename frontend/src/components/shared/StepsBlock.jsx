import React from 'react';
import { useInView } from '../../hooks/useInView';

export const StepsBlock = ({ steps, title, subtitle, dark = false }) => {
  const [ref, isVisible] = useInView();

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-28 ${dark ? 'bg-charcoal-800' : 'bg-background'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Title */}
          <div className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div className="section-divider mb-6" />
            <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6 ${
              dark ? 'text-cream-100' : 'text-charcoal-800'
            }`}>
              {title || 'Votre projet, étape par étape'}
            </h2>
            {subtitle && (
              <p className={`text-base leading-relaxed max-w-md ${
                dark ? 'text-charcoal-300' : 'text-charcoal-400'
              }`}>
                {subtitle}
              </p>
            )}
          </div>

          {/* Right - Steps */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`fade-in-up stagger-${Math.min(index + 1, 5)} ${isVisible ? 'visible' : ''} step-line flex gap-6 pb-8`}
              >
                <div className={`step-number ${
                  dark
                    ? 'bg-bronze-500/10 text-bronze-400 border border-bronze-500/20'
                    : 'bg-bronze-50 text-bronze-600 border border-bronze-200/50'
                }`}>
                  {step.number}
                </div>
                <div className="pt-1.5">
                  <h3 className={`font-serif text-xl font-medium mb-2 ${
                    dark ? 'text-cream-100' : 'text-charcoal-800'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    dark ? 'text-charcoal-300' : 'text-charcoal-400'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
