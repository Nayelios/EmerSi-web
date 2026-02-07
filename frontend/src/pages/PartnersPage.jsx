import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { HeroSection } from '../components/shared/HeroSection';
import { CTABlock } from '../components/shared/CTABlock';
import { useInView } from '../hooks/useInView';
import { PARTNER_BENEFITS, PARTNER_REQUIREMENTS, PARTNER_PROCESS } from '../data/mock';

const BenefitsSection = () => {
  const [ref, isVisible] = useInView();
  return (
    <section ref={ref} className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div className="section-divider mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal-800 mb-4">
              Ce qu\u2019on apporte
            </h2>
            <p className="text-base text-charcoal-400 mb-8">
              Intégrer le réseau RÉALIS, c\u2019est accéder à un écosystème structuré et premium.
            </p>
            <div className="space-y-4">
              {PARTNER_BENEFITS.map((benefit, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-bronze-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-bronze-500" />
                  </div>
                  <span className="text-base text-charcoal-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`fade-in-up stagger-2 ${isVisible ? 'visible' : ''}`}>
            <div className="section-divider mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal-800 mb-4">
              Ce qu\u2019on exige
            </h2>
            <p className="text-base text-charcoal-400 mb-8">
              L\u2019excellence est un engagement mutuel.
            </p>
            <div className="space-y-4">
              {PARTNER_REQUIREMENTS.map((req, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-charcoal-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="w-3 h-3 text-cream-100" />
                  </div>
                  <span className="text-base text-charcoal-700">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const [ref, isVisible] = useInView();
  return (
    <section ref={ref} className="py-20 lg:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`fade-in-up ${isVisible ? 'visible' : ''} mb-12`}>
          <div className="section-divider mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal-800">
            Le processus d\u2019intégration
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PARTNER_PROCESS.map((item, i) => (
            <div
              key={i}
              className={`fade-in-up stagger-${i + 1} ${isVisible ? 'visible' : ''} p-8 bg-white rounded-sm border border-cream-400/30`}
            >
              <span className="font-serif text-3xl font-light text-bronze-300 mb-4 block">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-lg font-medium text-charcoal-800 mb-2">{item.step}</h3>
              <p className="text-sm text-charcoal-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function PartnersPage() {
  return (
    <div className="page-enter">
      <HeroSection
        subtitle="Devenir partenaire"
        title="Rejoindre un système d\u2019intervention premium."
        text="Cadre clair, standards élevés, projets haut de gamme. Si l\u2019excellence est votre standard, nous voulons travailler avec vous."
        primaryCTA="Candidater"
        compact
      />

      {/* For whom */}
      <section className="py-16 lg:py-20 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-serif text-xl md:text-2xl font-light text-cream-100 max-w-2xl mx-auto">
            Pour les équipes terrain qui aiment les projets premium et veulent travailler dans un cadre structuré.
          </p>
        </div>
      </section>

      <BenefitsSection />
      <ProcessSection />

      <CTABlock
        title="Prêt à travailler différemment ?"
        subtitle="Rejoignez le réseau RÉALIS."
        ctaText="Candidater"
      />
    </div>
  );
}
