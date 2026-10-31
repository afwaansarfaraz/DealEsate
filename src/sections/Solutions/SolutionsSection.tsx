import React from 'react';
import {
  Building2,
  ShieldCheck,
  Users,
  Video,
  LayoutDashboard,
  MessageSquare,
  TrendingUp,
  Check,
  ArrowRight,
  Info,
} from 'lucide-react';
import { SectionContainer } from '../../components/ui/SectionContainer';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { solutionsData } from '../../data/solutions';

const iconMap = {
  Building2: Building2,
  ShieldCheck: ShieldCheck,
  Users: Users,
  Video: Video,
  LayoutDashboard: LayoutDashboard,
  MessageSquare: MessageSquare,
  TrendingUp: TrendingUp,
};

export const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="bg-soft-blue py-20 sm:py-28 border-t border-slate-200/70 relative">
      <SectionContainer>
        <SectionHeading
          eyebrow="Complete Growth Solutions"
          title="Everything You Need to Build a Stronger Real Estate Business"
          subtitle="Beyond owner leads, Dealestate equips your agency with the tools, people, and automated workflows needed to scale your market presence."
          theme="light"
        />

        {/* 7 Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutionsData.map((item, idx) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Building2;
            const isHeroItem = idx === 0;

            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between shadow-card-light hover:shadow-card-hover hover:border-gold/40 transition-all duration-300 group ${
                  isHeroItem ? 'md:col-span-2 lg:col-span-3 border-gold/40 bg-gradient-to-br from-white via-white to-amber-50/20' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="p-3 rounded-xl bg-soft-blue text-navy-800 border border-slate-200 group-hover:bg-gold/15 group-hover:text-gold-deep group-hover:border-gold/30 transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </span>
                      <span className="text-xs font-bold text-navy-900/60 font-mono">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {item.isOptionalAddon && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 px-2.5 py-0.5 rounded-full">
                          Optional Add-On
                        </span>
                      )}
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {item.eyebrow}
                      </span>
                    </div>
                  </div>

                  <h3
                    className={`font-bold text-navy-900 font-serif mb-2.5 ${
                      isHeroItem ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  <div
                    className={`space-y-2 pt-4 border-t border-slate-100 mb-6 ${
                      isHeroItem ? 'grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 space-y-0' : ''
                    }`}
                  >
                    {item.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-900 hover:text-gold-deep transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Explore this solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Scope Note Banner */}
        <div className="mt-8 p-4 rounded-xl bg-white/70 border border-slate-200/70 flex items-start gap-3 text-xs text-slate-600 max-w-4xl mx-auto">
          <Info className="w-4 h-4 text-gold-deep shrink-0 mt-0.5" />
          <p>
            <span className="font-semibold text-navy-900">Scope Note:</span> Digital marketing, bespoke SEO campaigns, and custom video production are available as specialized add-on services and are scoped separately from core owner lead subscriptions.
          </p>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600 mb-4">
            Need a tailored combination of leads, human follow-up, and automated pipelines?
          </p>
          <Button href="#contact" variant="primary" size="md">
            Request a Tailored Solutions Consultation
          </Button>
        </div>
      </SectionContainer>
    </section>
  );
};
