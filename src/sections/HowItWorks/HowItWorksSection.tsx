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
  Sparkles,
  Lock,
  ChevronRight,
} from 'lucide-react';
import { SectionContainer } from '../../components/ui/SectionContainer';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { processSteps } from '../../data/processSteps';

const stepIcons = [
  Search, // 1. Source
  Filter, // 2. Filter
  Cpu, // 3. Screen
  UserCheck, // 4. Review
  ShieldCheck, // 5. Allocate
  Send, // 6. Deliver
  LineChart, // 7. Track
];

interface StageStyle {
  containerClass: string;
  badgeClass: string;
  iconClass: string;
  stageLabelClass: string;
  titleClass: string;
  taglineClass: string;
  descClass: string;
  actionBorder: string;
  actionText: string;
  checkColor: string;
  specialBadge?: string;
  specialBadgeClass?: string;
  flowNext: string;
}

function getStageStyle(step: number): StageStyle {
  switch (step) {
    case 1:
      return {
        containerClass:
          'bg-white border-slate-200/90 shadow-card-light hover:shadow-card-hover hover:border-navy-300',
        badgeClass: 'bg-navy-900 text-white ring-4 ring-navy-100',
        iconClass: 'bg-soft-blue text-navy-900 border-slate-200/80',
        stageLabelClass: 'text-navy-900 bg-navy-50 border border-navy-200/60',
        titleClass: 'text-navy-900',
        taglineClass: 'text-slate-500',
        descClass: 'text-slate-600',
        actionBorder: 'border-slate-100',
        actionText: 'text-slate-600',
        checkColor: 'text-emerald-600',
        flowNext: 'Next: Algorithmic Filter',
      };
    case 2:
      return {
        containerClass:
          'bg-[#F0F5FA] border-blue-200/80 shadow-card-light hover:shadow-card-hover hover:border-blue-400',
        badgeClass: 'bg-navy-900 text-white ring-4 ring-blue-100',
        iconClass: 'bg-white text-navy-900 border-blue-200/80 shadow-xs',
        stageLabelClass: 'text-blue-900 bg-blue-100/70 border border-blue-200/80',
        titleClass: 'text-navy-900',
        taglineClass: 'text-slate-600',
        descClass: 'text-slate-600',
        actionBorder: 'border-blue-200/60',
        actionText: 'text-slate-700',
        checkColor: 'text-emerald-600',
        flowNext: 'Next: AI Qualification',
      };
    case 3:
      return {
        containerClass:
          'bg-white border-slate-200/90 shadow-card-light hover:shadow-card-hover hover:border-navy-300',
        badgeClass: 'bg-navy-900 text-white ring-4 ring-navy-100',
        iconClass: 'bg-soft-blue text-navy-900 border-slate-200/80',
        stageLabelClass: 'text-navy-900 bg-navy-50 border border-navy-200/60',
        titleClass: 'text-navy-900',
        taglineClass: 'text-slate-500',
        descClass: 'text-slate-600',
        actionBorder: 'border-slate-100',
        actionText: 'text-slate-600',
        checkColor: 'text-emerald-600',
        flowNext: 'Next: Human Verification',
      };
    case 4:
      return {
        containerClass:
          'bg-[#FAF6ED] border-gold/40 shadow-card-light hover:shadow-card-hover hover:border-gold/70 ring-1 ring-gold/20',
        badgeClass:
          'bg-gradient-to-br from-gold to-gold-dark text-navy-950 font-black ring-4 ring-amber-100 shadow-sm',
        iconClass: 'bg-white text-gold-deep border-gold/40 shadow-xs',
        stageLabelClass: 'text-gold-deep bg-amber-100/80 border border-gold/40 font-bold',
        titleClass: 'text-navy-900',
        taglineClass: 'text-amber-800 font-bold',
        descClass: 'text-slate-700',
        actionBorder: 'border-amber-200/60',
        actionText: 'text-slate-800 font-medium',
        checkColor: 'text-amber-600',
        specialBadge: 'Human Differentiator',
        specialBadgeClass: 'bg-gold/20 text-gold-deep border-gold/40',
        flowNext: 'Next: 1:1 Exclusivity Lock',
      };
    case 5:
      return {
        containerClass:
          'bg-gradient-to-br from-navy-950 via-navy-900 to-navy-850 border-gold/40 shadow-xl hover:border-gold ring-1 ring-gold/30 text-white',
        badgeClass:
          'bg-gradient-to-br from-gold to-gold-dark text-navy-950 font-black ring-4 ring-gold/30 shadow-gold',
        iconClass: 'bg-navy-800/90 text-gold-light border-gold/40 shadow-xs',
        stageLabelClass: 'text-gold-light bg-gold/15 border border-gold/40 font-bold',
        titleClass: 'text-white',
        taglineClass: 'text-gold-light font-semibold',
        descClass: 'text-slate-200',
        actionBorder: 'border-navy-700/80',
        actionText: 'text-gold-light font-medium',
        checkColor: 'text-gold',
        specialBadge: '1:1 Exclusivity Guarantee',
        specialBadgeClass: 'bg-gold/25 text-gold-light border-gold/50',
        flowNext: 'Next: Instant Delivery',
      };
    case 6:
      return {
        containerClass:
          'bg-white border-slate-200/90 shadow-card-light hover:shadow-card-hover hover:border-emerald-300',
        badgeClass: 'bg-navy-900 text-white ring-4 ring-navy-100',
        iconClass: 'bg-emerald-50 text-emerald-800 border-emerald-200/80 shadow-xs',
        stageLabelClass: 'text-emerald-900 bg-emerald-100/70 border border-emerald-200/70',
        titleClass: 'text-navy-900',
        taglineClass: 'text-slate-500',
        descClass: 'text-slate-600',
        actionBorder: 'border-slate-100',
        actionText: 'text-slate-600',
        checkColor: 'text-emerald-600',
        flowNext: 'Next: CRM Follow-Up',
      };
    case 7:
    default:
      return {
        containerClass:
          'bg-[#F0F5FA] border-blue-200/80 shadow-card-light hover:shadow-card-hover hover:border-blue-400 md:col-span-2 lg:col-span-2',
        badgeClass: 'bg-navy-900 text-white ring-4 ring-blue-100',
        iconClass: 'bg-white text-navy-900 border-blue-200/80 shadow-xs',
        stageLabelClass: 'text-blue-900 bg-blue-100/70 border border-blue-200/80 font-bold',
        titleClass: 'text-navy-900',
        taglineClass: 'text-slate-600 font-semibold',
        descClass: 'text-slate-600',
        actionBorder: 'border-blue-200/60',
        actionText: 'text-slate-700 font-medium',
        checkColor: 'text-emerald-600',
        specialBadge: 'Closed-Loop Intelligence',
        specialBadgeClass: 'bg-blue-200/60 text-navy-900 border-blue-300',
        flowNext: 'Ongoing Optimization Loop',
      };
  }
}

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

        {/* Continuous Process Pipeline Header Ribbon */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-x-auto">
          <div className="min-w-[680px] flex items-center justify-between relative">
            {/* Visual connecting rail line */}
            <div
              className="absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-navy-900 via-gold to-navy-900 -translate-y-1/2 z-0 opacity-25"
              aria-hidden="true"
            />

            {processSteps.map((stepItem, idx) => {
              const IconComp = stepIcons[idx] || Search;
              const isHighlight = stepItem.step === 4 || stepItem.step === 5;

              return (
                <div key={stepItem.step} className="flex items-center gap-2 relative z-10">
                  <div
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${
                      isHighlight
                        ? 'bg-navy-900 text-gold-light border-gold/50 shadow-xs'
                        : 'bg-white text-navy-900 border-slate-200 shadow-xs'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center ${
                        isHighlight
                          ? 'bg-gold text-navy-950'
                          : 'bg-soft-blue text-navy-900'
                      }`}
                    >
                      {stepItem.step}
                    </span>
                    <IconComp className="w-3.5 h-3.5" />
                    <span className="text-xs font-semibold whitespace-nowrap">
                      {stepItem.title}
                    </span>
                  </div>

                  {idx < processSteps.length - 1 && (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 7-Step Cards Grid with Visual Flow */}
        <div className="relative">
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {processSteps.map((stepItem, idx) => {
              const IconComp = stepIcons[idx] || Search;
              const style = getStageStyle(stepItem.step);

              return (
                <div
                  key={stepItem.step}
                  className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 relative group ${style.containerClass}`}
                >
                  <div>
                    {/* Header: Stage Number, Icon & Label */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-transform group-hover:scale-105 ${style.badgeClass}`}
                        >
                          0{stepItem.step}
                        </span>
                        <span
                          className={`p-2.5 rounded-xl border flex items-center justify-center transition-colors ${style.iconClass}`}
                        >
                          <IconComp className="w-4 h-4" />
                        </span>
                      </div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${style.stageLabelClass}`}
                      >
                        Stage 0{stepItem.step}
                      </span>
                    </div>

                    {/* Special Feature Pill (For Human Review and 1:1 Exclusivity) */}
                    {style.specialBadge && (
                      <div className="mb-3">
                        <span
                          className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${style.specialBadgeClass}`}
                        >
                          {stepItem.step === 4 && <Sparkles className="w-3 h-3 text-gold" />}
                          {stepItem.step === 5 && <Lock className="w-3 h-3 text-gold" />}
                          {style.specialBadge}
                        </span>
                      </div>
                    )}

                    {/* Title & Tagline */}
                    <h3 className={`text-xl font-bold font-serif mb-1 ${style.titleClass}`}>
                      {stepItem.title}
                    </h3>
                    <p className={`text-xs mb-3 ${style.taglineClass}`}>
                      {stepItem.tagline}
                    </p>

                    {/* Description */}
                    <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${style.descClass}`}>
                      {stepItem.description}
                    </p>
                  </div>

                  <div>
                    {/* Key Action Verification Box */}
                    <div
                      className={`pt-3.5 border-t flex items-start gap-2 text-[11px] sm:text-xs font-medium mb-3 ${style.actionBorder} ${style.actionText}`}
                    >
                      <CheckCircle2
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${style.checkColor}`}
                      />
                      <span>{stepItem.keyAction}</span>
                    </div>

                    {/* Next Pipeline Step Indicator */}
                    <div className="flex items-center justify-between text-[10px] font-semibold tracking-wide uppercase opacity-75 pt-1">
                      <span>Pipeline Flow</span>
                      <span className="flex items-center gap-1">
                        {style.flowNext}
                        <ArrowRight className="w-2.5 h-2.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Process Note */}
        <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm">
          <div className="max-w-2xl">
            <h4 className="text-base sm:text-lg font-bold text-navy-900 font-serif mb-1">
              Want to see a live sample of our verified owner briefing?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We will walk you through an actual sanitized lead delivery sheet and explain our verification criteria during your discovery call.
            </p>
          </div>
          <Button
            href="#contact"
            variant="primary"
            size="md"
            className="shrink-0"
            iconRight={<ArrowRight className="w-4 h-4" />}
          >
            Request Workflow Demo
          </Button>
        </div>
      </SectionContainer>
    </section>
  );
};
