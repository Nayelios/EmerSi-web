import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import { useInView } from '../../hooks/useInView';

export const HeroSection = ({
  title,
  subtitle,
  text,
  primaryCTA,
  primaryCTALink = '/contact',
  secondaryCTA,
  secondaryCTALink,
  backgroundImage,
  overlay = true,
  compact = false,
  showScroll = false,
}) => {
  const [ref, isVisible] = useInView();

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden ${
        compact ? 'pt-32 pb-20 lg:pt-40 lg:pb-28' : 'min-h-screen flex items-center'
      }`}
    >
      {/* Background Image */}
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal-800/90 via-charcoal-800/70 to-charcoal-800/40" />
          )}
        </>
      )}

      {/* Content */}
      <div className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 ${
        compact ? '' : 'py-32 lg:py-0'
      }`}>
        <div className="max-w-3xl">
          {subtitle && (
            <p
              className={`fade-in-up ${isVisible ? 'visible' : ''} text-xs uppercase tracking-[0.25em] mb-6 ${
                backgroundImage ? 'text-bronze-300' : 'text-bronze-500'
              }`}
            >
              {subtitle}
            </p>
          )}

          <h1
            className={`fade-in-up stagger-1 ${isVisible ? 'visible' : ''} font-serif font-light leading-[1.1] mb-8 ${
              backgroundImage ? 'text-cream-100' : 'text-charcoal-800'
            } ${
              compact ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-4xl md:text-6xl lg:text-7xl'
            }`}
          >
            {title}
          </h1>

          {text && (
            <p
              className={`fade-in-up stagger-2 ${isVisible ? 'visible' : ''} text-base md:text-lg leading-relaxed max-w-2xl mb-10 ${
                backgroundImage ? 'text-cream-300/90' : 'text-charcoal-400'
              }`}
            >
              {text}
            </p>
          )}

          <div className={`fade-in-up stagger-3 ${isVisible ? 'visible' : ''} flex flex-wrap gap-4`}>
            {primaryCTA && (
              <Link to={primaryCTALink}>
                <Button
                  className={`font-sans text-sm tracking-wide px-8 py-3 h-auto rounded-sm group ${
                    backgroundImage
                      ? 'bg-cream-100 text-charcoal-800 hover:bg-white'
                      : 'bg-charcoal-800 text-cream-100 hover:bg-charcoal-700'
                  }`}
                >
                  {primaryCTA}
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </Link>
            )}
            {secondaryCTA && secondaryCTALink && (
              <Link to={secondaryCTALink}>
                <Button
                  variant="outline"
                  className={`font-sans text-sm tracking-wide px-8 py-3 h-auto rounded-sm ${
                    backgroundImage
                      ? 'border-cream-300/30 text-cream-100 hover:bg-cream-100/10'
                      : 'border-charcoal-200 text-charcoal-600 hover:bg-charcoal-50'
                  }`}
                >
                  {secondaryCTA}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {showScroll && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className={`w-5 h-5 ${
            backgroundImage ? 'text-cream-300/50' : 'text-charcoal-300'
          }`} />
        </div>
      )}
    </section>
  );
};
