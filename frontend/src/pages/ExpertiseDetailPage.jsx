import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import { HeroSection } from '../components/shared/HeroSection';
import { CTABlock } from '../components/shared/CTABlock';
import { useInView } from '../hooks/useInView';
import {
  IMAGES,
  EXPERTISES,
  EXPERTISE_PROMISE,
  EXPERTISE_BENEFITS,
  EXPERTISE_PROCESS,
} from '../data/mock';

const ProblemBlock = ({ problems }) => {
  const [ref, isVisible] = useInView();
  return (
    <section ref={ref} className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`fade-in-up ${isVisible ? 'visible' : ''} max-w-3xl`}>
          <div className="section-divider mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal-800 mb-8">
            L\u2019intention
          </h2>
          <div className="space-y-5">
            {problems.map((problem, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-bronze-500 mt-2.5 flex-shrink-0" />
                <p className="text-base text-charcoal-600 leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PromiseBlock = () => {
  const [ref, isVisible] = useInView();
  return (
    <section ref={ref} className="py-20 lg:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`fade-in-up ${isVisible ? 'visible' : ''} max-w-3xl mx-auto text-center`}>
          <p className="text-xs uppercase tracking-[0.2em] text-bronze-500 mb-6">La promesse RÉALIS</p>
          <blockquote className="font-serif text-2xl md:text-3xl font-light text-charcoal-800 leading-snug">
            {EXPERTISE_PROMISE}
          </blockquote>
        </div>
      </div>
    </section>
  );
};

const BenefitsBlock = () => {
  const [ref, isVisible] = useInView();
  return (
    <section ref={ref} className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div className="section-divider mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal-800 mb-4">
              Ce que vous obtenez
            </h2>
            <p className="text-base text-charcoal-400">
              Des résultats concrets, à la hauteur de vos exigences.
            </p>
          </div>
          <div className={`fade-in-up stagger-2 ${isVisible ? 'visible' : ''} space-y-4`}>
            {EXPERTISE_BENEFITS.map((benefit, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-cream-50 rounded-sm border border-cream-400/30">
                <div className="w-6 h-6 rounded-full bg-bronze-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-bronze-500" />
                </div>
                <span className="text-base text-charcoal-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessBlock = () => {
  const [ref, isVisible] = useInView();
  return (
    <section ref={ref} className="py-20 lg:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`fade-in-up ${isVisible ? 'visible' : ''} mb-12`}>
          <div className="section-divider mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal-800">
            Comment on intervient
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {EXPERTISE_PROCESS.map((step, i) => (
            <div
              key={i}
              className={`fade-in-up stagger-${Math.min(i + 1, 5)} ${isVisible ? 'visible' : ''} p-6 bg-white rounded-sm border border-cream-400/30`}
            >
              <span className="font-serif text-2xl font-light text-bronze-300 mb-3 block">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-sm font-medium text-charcoal-700">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function ExpertiseDetailPage() {
  const { slug } = useParams();
  const expertise = EXPERTISES.find((e) => e.slug === slug);

  if (!expertise) return <Navigate to="/expertises" replace />;

  return (
    <div className="page-enter">
      <HeroSection
        subtitle="Expertise"
        title={expertise.title}
        text={expertise.description}
        backgroundImage={IMAGES[expertise.image]}
        primaryCTA="Demander une prise en charge"
        compact
      />
      <ProblemBlock problems={expertise.problems} />
      <PromiseBlock />
      <BenefitsBlock />
      <ProcessBlock />
      <CTABlock ctaText="Demander une prise en charge" />
    </div>
  );
}
