import React, { useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { useInView } from '../hooks/useInView';
import { toast } from 'sonner';
import {
  CONTACT_PROJECT_TYPES,
  CONTACT_URGENCY,
  CONTACT_BUDGET,
  CONTACT_OBJECTIVES,
} from '../data/mock';

const initialForm = {
  projectType: '',
  city: '',
  postalCode: '',
  urgency: '',
  budget: '',
  decisionMaker: '',
  objective: '',
  phone: '',
  email: '',
  freeText: '',
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [ref, isVisible] = useInView();

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.phone) {
      toast.error('Veuillez remplir au minimum votre email et téléphone.');
      return;
    }
    // Save to localStorage (mock)
    const submissions = JSON.parse(localStorage.getItem('realis_submissions') || '[]');
    submissions.push({ ...form, submittedAt: new Date().toISOString() });
    localStorage.setItem('realis_submissions', JSON.stringify(submissions));
    setSubmitted(true);
    toast.success('Demande envoyée avec succès !');
  };

  if (submitted) {
    return (
      <div className="page-enter min-h-screen flex items-center justify-center pt-24 pb-16">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-bronze-50 flex items-center justify-center mx-auto mb-6">
            <Send className="w-7 h-7 text-bronze-500" />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-light text-charcoal-800 mb-4">
            Demande reçue.
          </h1>
          <p className="text-base text-charcoal-400 mb-2">
            Réponse sous 24h ouvrables. Cadre clair dès le départ.
          </p>
          <p className="text-sm text-charcoal-300">
            Nous vous contacterons au numéro ou à l’adresse fournie.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-enter">
      {/* Header */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-bronze-500 mb-4">
              Contact
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-charcoal-800 mb-4">
              Demande de prise en charge
            </h1>
            <p className="text-base text-charcoal-400">
              Dites-nous en plus sur votre projet. Réponse sous 24h ouvrables.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section ref={ref} className="pb-20 lg:pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <form onSubmit={handleSubmit} className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div className="max-w-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {/* Project Type */}
                <div className="md:col-span-2">
                  <Label className="text-sm text-charcoal-600 mb-2 block">Type de projet</Label>
                  <Select onValueChange={(v) => handleChange('projectType', v)}>
                    <SelectTrigger className="h-11 rounded-sm border-cream-400 bg-white focus:ring-bronze-500">
                      <SelectValue placeholder="Sélectionnez un type" />
                    </SelectTrigger>
                    <SelectContent>
                      {CONTACT_PROJECT_TYPES.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* City */}
                <div>
                  <Label className="text-sm text-charcoal-600 mb-2 block">Ville</Label>
                  <Input
                    className="h-11 rounded-sm border-cream-400 bg-white focus-visible:ring-bronze-500"
                    placeholder="Votre ville"
                    value={form.city}
                    onChange={(e) => handleChange('city', e.target.value)}
                  />
                </div>

                {/* Postal Code */}
                <div>
                  <Label className="text-sm text-charcoal-600 mb-2 block">Code postal</Label>
                  <Input
                    className="h-11 rounded-sm border-cream-400 bg-white focus-visible:ring-bronze-500"
                    placeholder="H1A 1A1"
                    value={form.postalCode}
                    onChange={(e) => handleChange('postalCode', e.target.value)}
                  />
                </div>

                {/* Urgency */}
                <div>
                  <Label className="text-sm text-charcoal-600 mb-2 block">Urgence</Label>
                  <Select onValueChange={(v) => handleChange('urgency', v)}>
                    <SelectTrigger className="h-11 rounded-sm border-cream-400 bg-white focus:ring-bronze-500">
                      <SelectValue placeholder="Délai souhaité" />
                    </SelectTrigger>
                    <SelectContent>
                      {CONTACT_URGENCY.map((u) => (
                        <SelectItem key={u} value={u}>{u}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Budget */}
                <div>
                  <Label className="text-sm text-charcoal-600 mb-2 block">Budget estimé</Label>
                  <Select onValueChange={(v) => handleChange('budget', v)}>
                    <SelectTrigger className="h-11 rounded-sm border-cream-400 bg-white focus:ring-bronze-500">
                      <SelectValue placeholder="Plage de budget" />
                    </SelectTrigger>
                    <SelectContent>
                      {CONTACT_BUDGET.map((b) => (
                        <SelectItem key={b} value={b}>{b}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Decision Maker */}
                <div className="md:col-span-2">
                  <Label className="text-sm text-charcoal-600 mb-3 block">Êtes-vous le décisionnaire ?</Label>
                  <RadioGroup
                    onValueChange={(v) => handleChange('decisionMaker', v)}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="oui" id="dm-oui" className="border-cream-400 text-bronze-500" />
                      <Label htmlFor="dm-oui" className="text-sm text-charcoal-600 cursor-pointer">Oui</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="non" id="dm-non" className="border-cream-400 text-bronze-500" />
                      <Label htmlFor="dm-non" className="text-sm text-charcoal-600 cursor-pointer">Non</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Objective */}
                <div className="md:col-span-2">
                  <Label className="text-sm text-charcoal-600 mb-2 block">Objectif principal</Label>
                  <Select onValueChange={(v) => handleChange('objective', v)}>
                    <SelectTrigger className="h-11 rounded-sm border-cream-400 bg-white focus:ring-bronze-500">
                      <SelectValue placeholder="Votre objectif" />
                    </SelectTrigger>
                    <SelectContent>
                      {CONTACT_OBJECTIVES.map((o) => (
                        <SelectItem key={o} value={o}>{o}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Phone */}
                <div>
                  <Label className="text-sm text-charcoal-600 mb-2 block">Téléphone *</Label>
                  <Input
                    type="tel"
                    required
                    className="h-11 rounded-sm border-cream-400 bg-white focus-visible:ring-bronze-500"
                    placeholder="(514) 000-0000"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                  />
                </div>

                {/* Email */}
                <div>
                  <Label className="text-sm text-charcoal-600 mb-2 block">Email *</Label>
                  <Input
                    type="email"
                    required
                    className="h-11 rounded-sm border-cream-400 bg-white focus-visible:ring-bronze-500"
                    placeholder="vous@email.com"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                </div>

                {/* Free Text */}
                <div className="md:col-span-2">
                  <Label className="text-sm text-charcoal-600 mb-2 block">
                    Ce que vous voulez obtenir (résultat)
                  </Label>
                  <Textarea
                    className="min-h-[120px] rounded-sm border-cream-400 bg-white focus-visible:ring-bronze-500 resize-none"
                    placeholder="Décrivez le résultat idéal que vous souhaitez…"
                    value={form.freeText}
                    onChange={(e) => handleChange('freeText', e.target.value)}
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="mt-10">
                <Button
                  type="submit"
                  className="bg-charcoal-800 text-cream-100 hover:bg-charcoal-700 font-sans text-sm tracking-wide px-10 py-3.5 h-auto rounded-sm group"
                >
                  Envoyer ma demande
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </div>

              <p className="mt-6 text-sm text-charcoal-300">
                Réponse sous 24h ouvrables. Cadre clair dès le départ.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
