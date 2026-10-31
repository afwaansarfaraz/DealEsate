import React from 'react';
import {
  Users,
  PhoneCall,
  CalendarCheck,
  ShieldCheck,
  Cpu,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { SectionContainer } from '../../components/ui/SectionContainer';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';

export const HumanSupportSection: React.FC = () => {
  return (
    <section
      id="human-support"
      className="bg-navy py-20 sm:py-28 text-white relative overflow-hidden"
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
          eyebrow="Core Differentiator"
          title="Technology Finds the Opportunity. People Help Move It Forward."
          subtitle="AI automates data filtering and duplicate detection, but closing high-value real estate transactions requires human empathy, trust, and disciplined follow-up."
          theme="dark"
        />

        {/* Balanced Two-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Human Desk Overview & Feature Breakdown (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="bg-navy-surface rounded-2xl p-6 sm:p-8 border border-white/10 shadow-card-dark flex-1">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-gold-light bg-gold/15 border border-gold/30 w-fit mb-4">
                <Users className="w-3.5 h-3.5 text-gold" />
                <span>Dedicated Human Sales Desk</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">
                Real Real-Estate Specialists Working as an Extension of Your Office
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Most lead services simply dump unverified phone numbers into a spreadsheet and leave your agents to cold-call alone. Dealestate provides trained sales professionals who assist with preliminary landlord outreach, lead qualification, and appointment coordination under agreed service terms.
              </p>

              {/* 4 Feature Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <span className="p-2.5 rounded-lg bg-gold/15 text-gold-light shrink-0 mt-0.5">
                    <PhoneCall className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-white">First-Touch Calling</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Courteous outreach to confirm property availability, owner details, and timelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="p-2.5 rounded-lg bg-gold/15 text-gold-light shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Intent Qualification</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Filters out casual inquiries, middleman reposts, and expired listings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="p-2.5 rounded-lg bg-gold/15 text-gold-light shrink-0 mt-0.5">
                    <CalendarCheck className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Visit Coordination</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Warm introduction and scheduling handoff directly to your licensed field agents.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="p-2.5 rounded-lg bg-gold/15 text-gold-light shrink-0 mt-0.5">
                    <UserCheck className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Human Oversight</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Real people review AI screening anomalies where judgment and market context matter.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scope Boundary Guardrail */}
            <p className="text-xs text-slate-400 italic">
              * Note: Exact support scope, outreach channels, and coverage hours are agreed with each client upon onboarding. Dealestate does not conduct physical site visits or guarantee deal closures.
            </p>
          </div>

          {/* Right Column: AI + Human Synergy Visual Workflow (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="rounded-2xl bg-gradient-to-b from-navy-surface to-navy-950 p-6 sm:p-7 border border-gold/30 shadow-card-dark flex-1 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-gold-light bg-gold/15 border border-gold/30 mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                  Connected System
                </span>

                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                  How AI &amp; Human Sales Support Work Together
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Neither technology nor people alone are sufficient. Dealestate connects both in a unified workflow:
                </p>

                {/* Stepped Synergy Cards */}
                <div className="space-y-3 text-xs">
                  {/* Step 1: AI Layer */}
                  <div className="p-3.5 rounded-xl bg-navy-900/90 border border-white/10 flex items-start gap-3">
                    <span className="p-2 rounded-lg bg-blue-500/20 text-blue-300 shrink-0 mt-0.5">
                      <Cpu className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="font-bold text-white block mb-0.5">1. AI Screening Layer</span>
                      <p className="text-slate-300 leading-relaxed">
                        Scans listing feeds, filters location parameters, and flags suspicious or duplicate records.
                      </p>
                    </div>
                  </div>

                  {/* Step 2: Human Layer */}
                  <div className="p-3.5 rounded-xl bg-gold/10 border border-gold/40 flex items-start gap-3">
                    <span className="p-2 rounded-lg bg-gold/20 text-gold-light shrink-0 mt-0.5">
                      <Users className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="font-bold text-gold-light block mb-0.5">2. Human Specialist Layer</span>
                      <p className="text-slate-200 leading-relaxed">
                        Trained real estate callers verify owner intent, confirm specs, and initiate warm conversations.
                      </p>
                    </div>
                  </div>

                  {/* Step 3: Broker Action */}
                  <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-600/40 flex items-start gap-3">
                    <span className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="font-bold text-emerald-300 block mb-0.5">3. Client Closure Layer</span>
                      <p className="text-slate-300 leading-relaxed">
                        Your licensed agents receive primed owner opportunities ready for property site visits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-white/10 mt-6">
                <Button
                  href="#contact"
                  variant="primary"
                  fullWidth
                  size="md"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Configure Your Sales Support Desk
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
