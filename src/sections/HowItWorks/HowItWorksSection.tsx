import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionContainer } from '../../components/ui/SectionContainer';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { processSteps } from '../../data/processSteps';

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-ivory py-20 sm:py-28 border-t border-slate-200/70 relative">
      <SectionContainer>
        <SectionHeading
          eyebrow="Structured Methodology"
          title="The 7-Step Lead-to-Opportunity Process"
          subtitle="How Dealestate transforms unverified market noise into exclusive, actionable owner opportunities for your sales team."
          theme="light"
        />

        {/* 7-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((stepItem, idx) => {
            const isLast = idx === processSteps.length - 1;

            return (
              <div
                key={stepItem.step}
                className={`bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-card-light hover:shadow-card-hover transition-all duration-300 relative ${
                  isLast ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-ivory-warm border-gold/40' : ''
                }`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-full bg-navy-900 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                      0{stepItem.step}
                    </span>
                    <span className="text-[11px] font-semibold text-gold-deep uppercase tracking-wider">
                      {stepItem.tagline}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-900 font-serif mb-2">
                    {stepItem.title}
                  </h3>
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

        {/* Bottom Process Note */}
        <div className="mt-12 p-6 rounded-2xl bg-soft-blue border border-soft-blue-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-navy-900 mb-1">
              Want to see a live sample of our verified owner briefing?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              We will walk you through an actual sanitized lead delivery sheet during your discovery call.
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

