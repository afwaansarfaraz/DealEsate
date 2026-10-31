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
    <section id="owner-leads" className="bg-ivory py-20 sm:py-28 border-t border-border-light relative">
      <SectionContainer>
        <SectionHeading
          eyebrow="Core Offerings"
          title="High-Quality Owner Leads for Every Business Need"
          subtitle="Direct property-owner opportunities filtered for relevance, verified for active intent, and allocated strictly on a 1 Client : 1 Lead exclusivity model."
          theme="light"
        />

        {/* 3 Distinct Offering Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ownerLeadCategories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Home;

            return (
              <div
                key={category.id}
                className="bg-white rounded-2xl border border-border-light p-6 sm:p-8 flex flex-col justify-between shadow-card-light hover:shadow-card-hover hover:border-gold transition-all duration-300 group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="p-3.5 rounded-xl bg-gold/10 text-gold-deep border border-gold/20 group-hover:bg-gold group-hover:text-navy-950 transition-colors duration-200">
                      <IconComponent className="w-6 h-6" />
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase text-slate-700 bg-slate-100 border border-border-light">
                      <ShieldCheck className="w-3.5 h-3.5 text-gold-deep" />
                      {category.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-navy font-serif mb-2">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-gold-deep mb-3.5">
                    {category.tagline}
                  </p>
                  <p className="text-sm text-slate-muted leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Checklist of Features */}
                  <div className="pt-5 border-t border-border-light space-y-2.5 mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                      What is included:
                    </p>
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-border-light">
                  <div className="mb-4 text-xs text-slate-600 font-medium">
                    <span className="text-slate-600 font-bold">Target Audience:</span> {category.idealFor}
                  </div>
                  <Button
                    href="#contact"
                    variant="outline"
                    fullWidth
                    size="md"
                    className="bg-white border-border-light text-navy hover:bg-gold hover:text-navy-950 hover:border-gold shadow-none hover:shadow-gold-sm"
                    iconRight={<ArrowRight className="w-4 h-4" />}
                  >
                    {category.ctaText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Exclusivity Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-border-light flex flex-col sm:flex-row items-center justify-between gap-5 shadow-card-light">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span className="w-12 h-12 rounded-xl bg-navy/10 text-navy flex items-center justify-center shrink-0 font-bold text-base border border-navy/20">
              1:1
            </span>
            <div>
              <h4 className="text-base font-bold text-navy">
                Strict Single-Broker Allocation Protocol
              </h4>
              <p className="text-xs sm:text-sm text-slate-muted mt-0.5">
                Once a verified owner lead is assigned to your account, it is never recycled or sold to competing brokers in your micro-market.
              </p>
            </div>
          </div>
          <Button href="#contact" variant="primary" size="md" className="shrink-0 w-full sm:w-auto">
            Reserve Your Locality
          </Button>
        </div>
      </SectionContainer>
    </section>
  );
};
