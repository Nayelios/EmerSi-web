import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/button';
import { useInView } from '../../hooks/useInView';

export const CTABlock = ({
  title = 'Vous êtes prêt à avancer.',
  subtitle = 'Nous sommes prêts à prendre le relais.',
  ctaText = 'Lancer mon projet',
  ctaLink = '/contact',
  dark = true,
}) => {
  const [ref, isVisible] = useInView();

  return (
    <section
      ref={ref}
      className={`py-24 lg:py-32 ${
        dark ? 'bg-charcoal-800' : 'bg-cream-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
          <div className="section-divider mx-auto mb-8" />
          <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-3 ${
            dark ? 'text-cream-100' : 'text-charcoal-800'
          }`}>
            {title}
          </h2>
          <p className={`font-serif text-xl md:text-2xl font-light italic mb-10 ${
            dark ? 'text-bronze-300' : 'text-bronze-500'
          }`}>
            {subtitle}
          </p>
          <Link to={ctaLink}>
            <Button
              className={`font-sans text-sm tracking-wide px-10 py-3.5 h-auto rounded-sm group ${
                dark
                  ? 'bg-cream-100 text-charcoal-800 hover:bg-white'
                  : 'bg-charcoal-800 text-cream-100 hover:bg-charcoal-700'
              }`}
            >
              {ctaText}
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
