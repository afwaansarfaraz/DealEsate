import React from 'react';
import { User, Building, Briefcase, Check, ArrowRight } from 'lucide-react';
import { SectionContainer } from '../../components/ui/SectionContainer';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { audienceProfiles } from '../../data/audience';

const iconMap = {
  'independent-brokers': User,
  agencies: Building,
  'commercial-consultants': Briefcase,
};

export const AudienceSection: React.FC = () => {
  return (
    <section id="audience" className="bg-soft-blue py-20 sm:py-28 border-t border-slate-200/70 relative">
      <SectionContainer>
        <SectionHeading
          eyebrow="Target Audience"
          title="Built Exclusively for Real-Estate Professionals"
          subtitle="Whether you are a solo luxury agent or managing a 20-agent commercial team, Dealestate is tailored to your operational scale."
          theme="light"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {audienceProfiles.map((item) => {
            const IconComponent = iconMap[item.id as keyof typeof iconMap] || User;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-card-light hover:shadow-card-hover transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="p-3 rounded-xl bg-navy-900 text-white">
                      <IconComponent className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 font-serif mb-3">
                    {item.role}
                  </h3>

                  <div className="p-3.5 rounded-xl bg-red-50/60 border border-red-100 text-xs text-red-900 mb-4">
                    <span className="font-bold block mb-0.5">Common Bottleneck:</span>
                    {item.challenge}
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-900 mb-6">
                    <span className="font-bold block mb-0.5">The Dealestate Impact:</span>
                    {item.solution}
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Key Advantages:
                    </p>
                    {item.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-gold-deep shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  href="#contact"
                  variant="outline"
                  fullWidth
                  size="sm"
                  className="bg-white border-slate-300 text-navy-900 hover:bg-gold hover:text-navy-950 hover:border-gold"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Get Leads for Your Team
                </Button>
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
};

