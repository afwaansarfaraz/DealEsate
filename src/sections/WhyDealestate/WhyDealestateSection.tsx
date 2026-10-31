import React from 'react';
import {
  Sparkles,
  Building2,
  Target,
  ShieldCheck,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { SectionContainer } from '../../components/ui/SectionContainer';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { whyDealestateAdvantages } from '../../data/whyDealestate';

const iconMap = {
  Sparkles: Sparkles,
  Building2: Building2,
  Target: Target,
  ShieldCheck: ShieldCheck,
  Users: Users,
  BarChart3: BarChart3,
};

export const WhyDealestateSection: React.FC = () => {
  const flagshipItems = whyDealestateAdvantages.filter((item) => item.isFlagship);
  const supportingItems = whyDealestateAdvantages.filter((item) => !item.isFlagship);

  return (
    <section id="why-dealestate" className="bg-ivory py-20 sm:py-28 border-t border-slate-200/70 relative">
      <SectionContainer>
        <SectionHeading
          eyebrow="Core Differentiators"
          title="Why Choose Dealestate?"
          subtitle="Engineered specifically to solve the chronic challenges of Indian real estate brokerages through human sales expertise and verified owner opportunities."
          theme="light"
        />

        {/* Prominent Spotlight: The 2 Flagship Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {flagshipItems.map((item) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Sparkles;

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border-2 border-gold/40 p-8 sm:p-10 shadow-xl relative overflow-hidden group hover:border-gold transition-all duration-300"
              >
                {/* Decorative subtle background gold accent */}
                <div
                  className="absolute -top-12 -right-12 w-40 h-40 bg-gold/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <span className="p-3.5 rounded-2xl bg-navy-900 text-gold shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-gold-deep bg-amber-50 border border-gold/30 px-3.5 py-1 rounded-full">
                      {item.eyebrow}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 font-serif mb-4">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {item.highlightText && (
                    <div className="p-4 rounded-xl bg-amber-50/60 border border-gold/20 flex items-start gap-3 text-xs sm:text-sm text-navy-950 font-medium">
                      <CheckCircle className="w-4 h-4 text-gold-deep shrink-0 mt-0.5" />
                      <span>{item.highlightText}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Supporting Operational Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportingItems.map((adv) => {
            const IconComponent = iconMap[adv.icon as keyof typeof iconMap] || Target;

            return (
              <div
                key={adv.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-card-light hover:shadow-card-hover hover:border-gold/40 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="p-2.5 rounded-xl bg-soft-blue text-navy-900 border border-slate-200 group-hover:bg-gold/15 group-hover:text-gold-deep transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {adv.eyebrow}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-navy-900 font-serif mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-12 text-center">
          <Button href="#contact" variant="primary" size="md" iconRight={<ArrowRight className="w-4 h-4" />}>
            Experience the Dealestate Advantage
          </Button>
        </div>
      </SectionContainer>
    </section>
  );
};
