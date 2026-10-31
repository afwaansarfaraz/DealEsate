import React from 'react';
import { Key, Home, Building2, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { SectionContainer } from '../../components/ui/SectionContainer';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { ownerLeadCategories } from '../../data/ownerLeads';

const iconMap = {
  Key: Key,
  Home: Home,
  Building2: Building2,
};

export const OwnerLeadsSection: React.FC = () => {
  return (
    <section id="owner-leads" className="bg-ivory py-20 sm:py-28 border-t border-slate-200/70 relative">
      <SectionContainer>
        <SectionHeading
          eyebrow="Core Inventory Streams"
          title="Verified Property-Owner Leads"
          subtitle="Direct, screened opportunities across three primary property categories. Distributed strictly on an exclusive 1 Client : 1 Lead basis."
          theme="light"
        />

        {/* 3 Lead Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ownerLeadCategories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Home;

            return (
              <div
                key={category.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-card-light hover:shadow-card-hover hover:border-gold/50 transition-all duration-300 group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="p-3 rounded-xl bg-gold/10 text-gold-deep border border-gold/20 group-hover:bg-gold group-hover:text-navy-950 transition-colors duration-200">
                      <IconComponent className="w-6 h-6" />
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase text-slate-700 bg-slate-100 border border-slate-200/80">
                      <ShieldCheck className="w-3.5 h-3.5 text-gold-deep" />
                      {category.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-navy-900 font-serif mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm font-medium text-gold-deep mb-3.5">
                    {category.tagline}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Checklist of Features */}
                  <div className="pt-5 border-t border-slate-100 space-y-2.5 mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      What is included:
                    </p>
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="mb-4 text-xs text-slate-500 font-medium">
                    <span className="text-slate-400">Best for:</span> {category.idealFor}
                  </div>
                  <Button
                    href="#contact"
                    variant="outline"
                    fullWidth
                    size="md"
                    className="bg-ivory border-slate-300 text-navy-900 hover:bg-gold hover:text-navy-950 hover:border-gold"
                    iconRight={<ArrowRight className="w-4 h-4" />}
                  >
                    Enquire for {category.title.split(' ')[0]} Leads
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Exclusivity Guarantee Strip */}
        <div className="mt-12 p-5 sm:p-6 rounded-xl bg-white border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <span className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-lg">
              1:1
            </span>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-navy-900">
                Strict Single-Broker Allocation Protocol
              </h4>
              <p className="text-xs sm:text-sm text-slate-500">
                Once a verified lead is allocated to your agency, it is never distributed to competing brokers in your focus micro-market.
              </p>
            </div>
          </div>
          <Button href="#contact" variant="primary" size="sm" className="shrink-0">
            Secure Your Locality
          </Button>
        </div>
      </SectionContainer>
    </section>
  );
};

