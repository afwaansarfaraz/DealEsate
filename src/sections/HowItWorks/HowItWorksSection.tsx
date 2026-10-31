import React from 'react';
import {
  Search,
  Filter,
  Cpu,
  UserCheck,
  ShieldCheck,
  Send,
  LineChart,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { SectionContainer } from '../../components/ui/SectionContainer';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { processSteps } from '../../data/processSteps';

const stepIcons = [
  Search,        // 1. Source
  Filter,        // 2. Filter
  Cpu,           // 3. Screen
  UserCheck,     // 4. Review
  ShieldCheck,   // 5. Allocate
  Send,          // 6. Deliver
  LineChart,     // 7. Track
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-ivory py-20 sm:py-28 border-t border-slate-200/70 relative">
      <SectionContainer>
        <SectionHeading
          eyebrow="How It Works"
          title="A Clear Process. Better Lead Management."
          subtitle="From identifying prospective owners to exclusive delivery and follow-up support, our 7-stage workflow ensures consistency at every step."
          theme="light"
        />

        {/* Desktop / Tablet Timeline View */}
        <div className="relative">
          {/* Subtle connecting track line behind cards on desktop */}
          <div
            className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-slate-200 -translate-y-12 z-0"
            aria-hidden="true"
          />

          {/* Steps Grid / Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {processSteps.map((stepItem, idx) => {
              const IconComp = stepIcons[idx] || Search;
              const isLast = idx === processSteps.length - 1;

              return (
                <div
                  key={stepItem.step}
                  className={`bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-card-light hover:shadow-card-hover hover:border-gold/40 transition-all duration-300 relative group ${
                    isLast ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-amber-50/20 border-gold/30' : ''
                  }`}
                >
                  <div>
                    {/* Step Indicator Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="w-9 h-9 rounded-full bg-navy-900 text-white font-bold flex items-center justify-center text-xs shadow-sm group-hover:bg-gold-deep transition-colors">
                          0{stepItem.step}
                        </span>
                        <span className="p-2 rounded-lg bg-soft-blue text-navy-900 border border-slate-200/80 group-hover:text-gold-deep transition-colors">
                          <IconComp className="w-4 h-4" />
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-gold-deep uppercase tracking-wider">
                        Stage 0{stepItem.step}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-navy-900 font-serif mb-1">
                      {stepItem.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mb-2.5">
                      {stepItem.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {stepItem.description}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-slate-100 flex items-start gap-2 text-[11px] sm:text-xs text-slate-500 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{stepItem.keyAction}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Process Note */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <h4 className="text-base font-bold text-navy-900 mb-1">
              Want to see a live sample of our verified owner briefing?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              We will walk you through an actual sanitized lead delivery sheet and explain our verification criteria during your discovery call.
            </p>
          </div>
          <Button href="#contact" variant="primary" size="md" className="shrink-0" iconRight={<ArrowRight className="w-4 h-4" />}>
            Request Workflow Demo
          </Button>
        </div>
      </SectionContainer>
    </section>
  );
};
