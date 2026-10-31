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
          eyebrow="Who We Serve"
          title="Built for Real Estate Professionals"
          subtitle="Whether you are an independent luxury broker, a growing agency, or a specialized commercial consultant, Dealestate adapts to your operating scale."
          theme="light"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {audienceProfiles.map((item) => {
            const IconComponent = iconMap[item.id as keyof typeof iconMap] || User;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-card-light hover:shadow-card-hover hover:border-gold/40 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="p-3 rounded-xl bg-navy-900 text-white group-hover:bg-gold-deep transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 font-serif mb-3">
                    {item.role}
                  </h3>

                  <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-900 mb-4">
                    <span className="font-bold block mb-0.5 text-amber-950">Common Operational Challenge:</span>
                    {item.challenge}
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/70 text-xs text-emerald-900 mb-6">
                    <span className="font-bold block mb-0.5 text-emerald-950">How Dealestate Helps:</span>
                    {item.solution}
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                      Key Practical Benefits:
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
                  Request Category Consultation
                </Button>
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
};
