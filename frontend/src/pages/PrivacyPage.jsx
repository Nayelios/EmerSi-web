import React from 'react';
import { Separator } from '../components/ui/separator';

export default function PrivacyPage() {
  return (
    <div className="page-enter">
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-bronze-500 mb-4">
            Légal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-charcoal-800 mb-8">
            Politique de confidentialité
          </h1>
          <Separator className="bg-cream-400 mb-10" />

          <div className="space-y-8 text-charcoal-500">
            <div>
              <h2 className="font-serif text-xl text-charcoal-800 mb-3">Collecte des données</h2>
              <p className="text-sm leading-relaxed">
                Nous collectons uniquement les informations nécessaires au traitement de votre demande de prise en charge : nom, coordonnées, détails du projet. Ces données sont collectées via notre formulaire de contact.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-charcoal-800 mb-3">Utilisation</h2>
              <p className="text-sm leading-relaxed">
                Vos données sont utilisées exclusivement pour répondre à votre demande, vous recontacter et assurer le suivi de votre projet. Elles ne sont jamais vendues ni partagées avec des tiers à des fins commerciales.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-charcoal-800 mb-3">Conservation</h2>
              <p className="text-sm leading-relaxed">
                Les données personnelles sont conservées pour la durée nécessaire au traitement de votre demande et au suivi de votre projet, puis archivées conformément aux obligations légales applicables.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-charcoal-800 mb-3">Sécurité</h2>
              <p className="text-sm leading-relaxed">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-charcoal-800 mb-3">Vos droits</h2>
              <p className="text-sm leading-relaxed">
                Vous disposez d\u2019un droit d\u2019accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à l\u2019adresse info@grouperealis.com.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-charcoal-800 mb-3">Contact</h2>
              <p className="text-sm leading-relaxed">
                Pour toute question relative à cette politique, vous pouvez nous écrire à info@grouperealis.com.
              </p>
            </div>

            <Separator className="bg-cream-400" />

            <p className="text-xs text-charcoal-300">
              Dernière mise à jour : août 2025
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
