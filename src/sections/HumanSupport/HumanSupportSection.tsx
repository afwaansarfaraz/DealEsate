import React from 'react';
import { Users, PhoneCall, CalendarCheck, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionContainer } from '../../components/ui/SectionContainer';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';

export const HumanSupportSection: React.FC = () => {
  return (
    <section
      id="human-support"
      className="bg-navy-900 py-20 sm:py-28 text-white relative overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-navy-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <SectionContainer className="relative z-10">
        <SectionHeading
          eyebrow="The Dealestate Differentiator"
          title="Technology Helps. People Make the Difference."
          subtitle="AI automates data filtering, but closing high-value real estate deals requires human trust, empathy, and disciplined communication."
          theme="dark"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Feature Column: 7 Cols */}
          <div className="lg:col-span-7 space-y-5">
            <div className="bg-navy-surface/80 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-card-dark">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">
                Dedicated Human Sales Desk for Your Brokerage
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Most lead generation services dump raw phone numbers into your inbox and disappear. Dealestate pairs your team with trained property specialists who handle outreach, initial landlord conversations, and disciplined follow-up workflows.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <span className="p-2 rounded-lg bg-gold/15 text-gold-light shrink-0 mt-0.5">
                    <PhoneCall className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-white">First-Touch Calling</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Courteous outreach to confirm owner availability and requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="p-2 rounded-lg bg-gold/15 text-gold-light shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Intent Qualification</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Filters out casual inquiries, brokers, and out-of-market listings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="p-2 rounded-lg bg-gold/15 text-gold-light shrink-0 mt-0.5">
                    <CalendarCheck className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Visit Coordination</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Warm introduction and scheduling handoff to your field agents.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="p-2 rounded-lg bg-gold/15 text-gold-light shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Continuous Oversight</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Human agents audit AI recommendations before dispatch.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scope Guardrail Note */}
            <p className="text-xs text-slate-400 italic">
              * Note: Exact support scope, outreach channels, and coverage hours are formally agreed upon client onboarding to align with your operating standards.
            </p>
          </div>

          {/* Right Visual Comparison Column: 5 Cols */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 p-6 sm:p-7 border border-gold/30 shadow-xl relative">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-gold-light bg-gold/15 border border-gold/30 mb-4">
                The Dealestate Difference
              </span>

              <h4 className="text-lg font-bold text-white mb-4">
                How Our System Compares
              </h4>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-lg bg-navy-900/80 border border-white/5">
                  <p className="font-semibold text-slate-400 mb-1">Traditional Lead Resellers:</p>
                  <p className="text-slate-300">
                    Sells unverified contact spreadsheets to 10+ brokers. 60%+ dead numbers, zero follow-up support.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-gold/10 border border-gold/30">
                  <p className="font-semibold text-gold-light mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                    The Dealestate Model:
                  </p>
                  <p className="text-slate-200">
                    Exclusive single-client allocation, dual AI + human verification, and dedicated specialists assisting your team through qualification.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10">
                <Button href="#contact" variant="primary" fullWidth size="md" iconRight={<ArrowRight className="w-4 h-4" />}>
                  Discuss Your Sales Support Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
