import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '../../data/mock';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '../ui/sheet';
import { Button } from '../ui/button';

// Pages with dark hero backgrounds where header text should be light
const DARK_HERO_PAGES = ['/', '/systeme', '/experience', '/parcours', '/a-propos'];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const hasDarkHero = DARK_HERO_PAGES.includes(location.pathname) || location.pathname.startsWith('/expertises/');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isActive = (href) => location.pathname === href;
  const isLight = hasDarkHero && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-cream-400/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-serif text-xl md:text-2xl font-semibold tracking-wide text-charcoal-800">
            GROUPE{' '}
            <span className="text-bronze-500">RÉALIS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`link-underline px-3 py-2 text-sm tracking-wide transition-colors duration-300 ${
                isActive(link.href)
                  ? 'text-bronze-500 font-medium'
                  : 'text-charcoal-500 hover:text-charcoal-800'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact">
            <Button
              className="bg-charcoal-800 text-cream-100 hover:bg-charcoal-700 font-sans text-sm tracking-wide px-6 py-2.5 rounded-sm group"
            >
              Lancer mon projet
              <ArrowUpRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 text-charcoal-700 hover:text-charcoal-900"
                aria-label="Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-cream-100 w-[300px] sm:w-[350px] p-0">
              <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-cream-400">
                  <span className="font-serif text-xl font-semibold text-charcoal-800">
                    GROUPE <span className="text-bronze-500">RÉALIS</span>
                  </span>
                </div>
                <nav className="flex flex-col p-6 gap-1 flex-1">
                  {NAV_LINKS.map((link, i) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`nav-item-animate py-3 px-4 text-base tracking-wide rounded-sm transition-colors duration-200 ${
                        isActive(link.href)
                          ? 'text-bronze-500 bg-bronze-50 font-medium'
                          : 'text-charcoal-600 hover:text-charcoal-800 hover:bg-cream-200'
                      }`}
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="p-6 border-t border-cream-400">
                  <Link to="/contact" className="block">
                    <Button className="w-full bg-charcoal-800 text-cream-100 hover:bg-charcoal-700 font-sans text-sm tracking-wide py-3 rounded-sm">
                      Lancer mon projet
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
