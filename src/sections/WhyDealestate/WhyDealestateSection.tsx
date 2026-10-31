import React from 'react';
import { Target, UserCheck, Users, Cpu, BarChart3, Shield } from 'lucide-react';
import { SectionContainer } from '../../components/ui/SectionContainer';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { whyDealestateAdvantages } from '../../data/whyDealestate';

const iconMap = {
  Target: Target,
  UserCheck: UserCheck,
  Users: Users,
  Cpu: Cpu,
  BarChart3: BarChart3,
  Shield: Shield,
};

export const WhyDealestateSection: React.FC = () => {
  return (
    <section id="why-dealestate" className="bg-ivory py-20 sm:py-28 border-t border-slate-200/70 relative">
      <SectionContainer>
        <SectionHeading
          eyebrow="Competitive Edge"
          title="Why Leading Brokers Choose Dealestate"
          subtitle="A growth system engineered specifically to resolve the chronic pain points of Indian real estate brokerages."
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyDealestateAdvantages.map((adv) => {
            const IconComponent = iconMap[adv.icon as keyof typeof iconMap] || Shield;

            return (
              <div
                key={adv.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-card-light hover:shadow-card-hover hover:border-gold/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="p-3 rounded-xl bg-gold/10 text-gold-deep border border-gold/20">
                    <IconComponent className="w-5 h-5" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {adv.eyebrow}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-navy-900 font-serif mb-2">
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
};

