import React from 'react';
import {
  ShieldCheck,
  Users,
  Video,
  LayoutDashboard,
  MessageSquare,
  TrendingUp,
  Check,
  ArrowRight,
} from 'lucide-react';
import { SectionContainer } from '../../components/ui/SectionContainer';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { solutionsData } from '../../data/solutions';

const iconMap = {
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
          eyebrow="Integrated Ecosystem"
          title="Complete Growth Support"
          subtitle="Beyond owner leads, Dealestate equips your agency with the tools, people, and automated workflows needed to scale your market presence."
          theme="light"
        />

        {/* 6 Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutionsData.map((item) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || ShieldCheck;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between shadow-card-light hover:shadow-card-hover hover:border-gold/40 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-3 rounded-xl bg-soft-blue text-navy-800 border border-slate-200 group-hover:bg-gold/15 group-hover:text-gold-deep group-hover:border-gold/30 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {item.eyebrow}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-navy-900 font-serif mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100 mb-6">
                    {item.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
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
                  <span>Learn how it integrates</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600 mb-4">
            Need a custom combination of leads, human follow-up, and digital marketing?
          </p>
          <Button href="#contact" variant="primary" size="md">
            Request a Tailored Solutions Consultation
          </Button>
        </div>
      </SectionContainer>
    </section>
  );
};

