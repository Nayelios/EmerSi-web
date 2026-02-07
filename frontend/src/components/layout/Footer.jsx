import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Mail, Phone } from 'lucide-react';
import { Separator } from '../ui/separator';
import { EXPERTISES, FOOTER_ZONES } from '../../data/mock';

export const Footer = () => {
  return (
    <footer className="bg-charcoal-800 text-cream-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-semibold text-cream-100">
                GROUPE <span className="text-bronze-400">RÉALIS</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-charcoal-300 mb-6 max-w-xs">
              Vos envies, votre signature, notre souci du détail.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm text-bronze-400 hover:text-bronze-300 transition-colors duration-300 group"
            >
              Lancer mon projet
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-cream-100 mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Le Système', href: '/systeme' },
                { label: 'L\u2019Expérience', href: '/experience' },
                { label: 'Parcours client', href: '/parcours' },
                { label: 'Devenir partenaire', href: '/partenaires' },
                { label: 'À propos', href: '/a-propos' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-charcoal-300 hover:text-cream-100 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertises */}
          <div>
            <h4 className="font-serif text-lg text-cream-100 mb-6">Expertises</h4>
            <ul className="space-y-3">
              {EXPERTISES.map((exp) => (
                <li key={exp.slug}>
                  <Link
                    to={`/expertises/${exp.slug}`}
                    className="text-sm text-charcoal-300 hover:text-cream-100 transition-colors duration-300"
                  >
                    {exp.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Zones */}
          <div>
            <h4 className="font-serif text-lg text-cream-100 mb-6">Contact</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-bronze-400 flex-shrink-0" />
                <span className="text-sm text-charcoal-300">info@grouperealis.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-bronze-400 flex-shrink-0" />
                <span className="text-sm text-charcoal-300">(514) 000-0000</span>
              </li>
            </ul>
            <h5 className="text-xs uppercase tracking-widest text-charcoal-400 mb-3">Zones desservies</h5>
            <div className="flex flex-wrap gap-2">
              {FOOTER_ZONES.map((zone) => (
                <span
                  key={zone}
                  className="inline-flex items-center gap-1 text-xs text-charcoal-300 bg-charcoal-700 px-2.5 py-1 rounded-sm"
                >
                  <MapPin className="w-3 h-3 text-bronze-400" />
                  {zone}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-charcoal-700" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal-400">
            © {new Date().getFullYear()} Groupe RÉALIS. Tous droits réservés.
          </p>
          <Link
            to="/confidentialite"
            className="text-xs text-charcoal-400 hover:text-cream-100 transition-colors duration-300"
          >
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
};
