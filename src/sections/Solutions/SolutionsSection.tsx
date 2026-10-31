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
import { solutionsData, type SolutionItem } from '../../data/solutions';

const iconMap = {
  Building2: Building2,
  ShieldCheck: ShieldCheck,
  Users: Users,
  Video: Video,
  LayoutDashboard: LayoutDashboard,
  MessageSquare: MessageSquare,
  TrendingUp: TrendingUp,
};

// Distinct styling configurations for each solution card to create balanced visual variety
interface CardStyleConfig {
  containerClass: string;
  iconBgClass: string;
  eyebrowClass: string;
  numberClass: string;
  titleClass: string;
  descClass: string;
  benefitsBorderClass: string;
  bulletIconClass: string;
  bulletTextClass: string;
  linkClass: string;
}

const getCardStyle = (item: SolutionItem): CardStyleConfig => {
  switch (item.id) {
    case 'owner-leads':
      // Card 1: Hero Flagship Card - Warm Ivory with Gold Accents
      return {
        containerClass:
          'md:col-span-2 lg:col-span-3 bg-gradient-to-br from-[#FCFBF8] via-[#FAF6ED] to-[#F5EEE0] border-2 border-gold/50 shadow-md hover:shadow-xl hover:border-gold',
        iconBgClass: 'bg-navy-900 text-gold border border-gold/40 shadow-xs',
        eyebrowClass: 'bg-amber-100 text-gold-deep border border-gold/40 font-bold',
        numberClass: 'text-navy-900/80',
        titleClass: 'text-navy-900 font-serif text-xl sm:text-2xl',
        descClass: 'text-slate-700',
        benefitsBorderClass: 'border-slate-200/70',
        bulletIconClass: 'text-emerald-700',
        bulletTextClass: 'text-navy-950 font-medium',
        linkClass: 'text-navy-950 font-bold hover:text-gold-deep',
      };

    case 'human-support':
      // Card 3: Key Differentiator Card - Deep Navy with Gold Accents
      return {
        containerClass:
          'bg-gradient-to-br from-navy-900 via-navy to-navy-surface text-white border-2 border-gold/40 shadow-card-dark hover:border-gold hover:shadow-[0_12px_36px_rgba(16,43,78,0.35)]',
        iconBgClass: 'bg-gold text-navy-950 shadow-sm',
        eyebrowClass: 'bg-gold/20 text-gold-light border border-gold/40 font-bold',
        numberClass: 'text-gold-light',
        titleClass: 'text-white font-serif text-lg sm:text-xl',
        descClass: 'text-slate-200',
        benefitsBorderClass: 'border-white/10',
        bulletIconClass: 'text-gold',
        bulletTextClass: 'text-slate-100',
        linkClass: 'text-gold-light font-bold hover:text-white',
      };

    case 'crm':
      // Card 5: Soft Blue Card - Pipeline Focus
      return {
        containerClass:
          'bg-[#F0F5FA] border border-blue-200/80 shadow-card-light hover:shadow-card-hover hover:border-blue-400',
        iconBgClass: 'bg-white text-navy-900 border border-slate-200/90 shadow-2xs',
        eyebrowClass: 'bg-blue-100/80 text-navy-800 border border-blue-200 font-semibold',
        numberClass: 'text-navy-900/80',
        titleClass: 'text-navy-900 font-serif text-lg sm:text-xl',
        descClass: 'text-slate-600',
        benefitsBorderClass: 'border-blue-200/60',
        bulletIconClass: 'text-emerald-600',
        bulletTextClass: 'text-slate-700',
        linkClass: 'text-navy-900 font-semibold hover:text-gold-deep',
      };

    case 'digital-marketing':
      // Card 7: Warm Ivory Optional Growth Add-On
      return {
        containerClass:
          'bg-[#FAF6ED] border border-amber-200/70 shadow-card-light hover:shadow-card-hover hover:border-gold/60',
        iconBgClass: 'bg-amber-100 text-gold-deep border border-gold/30',
        eyebrowClass: 'bg-amber-100 text-amber-900 border border-amber-300 font-bold',
        numberClass: 'text-navy-900/80',
        titleClass: 'text-navy-900 font-serif text-lg sm:text-xl',
        descClass: 'text-slate-600',
        benefitsBorderClass: 'border-amber-200/60',
        bulletIconClass: 'text-emerald-600',
        bulletTextClass: 'text-slate-700',
        linkClass: 'text-navy-900 font-semibold hover:text-gold-deep',
      };

    case 'ai-screening':
      // Card 2: Crisp White with Blue Tint Icon
      return {
        containerClass:
          'bg-white border border-slate-200/90 shadow-card-light hover:shadow-card-hover hover:border-blue-300',
        iconBgClass: 'bg-[#EAF1F8] text-navy-800 border border-slate-200',
        eyebrowClass: 'bg-slate-100 text-slate-700 border border-slate-200 font-semibold',
        numberClass: 'text-navy-900/80',
        titleClass: 'text-navy-900 font-serif text-lg sm:text-xl',
        descClass: 'text-slate-600',
        benefitsBorderClass: 'border-slate-200/70',
        bulletIconClass: 'text-emerald-600',
        bulletTextClass: 'text-slate-700',
        linkClass: 'text-navy-900 font-semibold hover:text-gold-deep',
      };

    case 'property-videos':
      // Card 4: Crisp White with Warm Gold Icon
      return {
        containerClass:
          'bg-white border border-slate-200/90 shadow-card-light hover:shadow-card-hover hover:border-gold/40',
        iconBgClass: 'bg-amber-50 text-gold-deep border border-gold/25',
        eyebrowClass: 'bg-amber-50/80 text-amber-900 border border-amber-200/60 font-semibold',
        numberClass: 'text-navy-900/80',
        titleClass: 'text-navy-900 font-serif text-lg sm:text-xl',
        descClass: 'text-slate-600',
        benefitsBorderClass: 'border-slate-200/70',
        bulletIconClass: 'text-emerald-600',
        bulletTextClass: 'text-slate-700',
        linkClass: 'text-navy-900 font-semibold hover:text-gold-deep',
      };

    case 'whatsapp-automation':
    default:
      // Card 6: Crisp White with Emerald Accent Icon
      return {
        containerClass:
          'bg-white border border-slate-200/90 shadow-card-light hover:shadow-card-hover hover:border-emerald-400/50',
        iconBgClass: 'bg-emerald-50 text-emerald-800 border border-emerald-200/70',
        eyebrowClass: 'bg-emerald-50 text-emerald-800 border border-emerald-200/70 font-semibold',
        numberClass: 'text-navy-900/80',
        titleClass: 'text-navy-900 font-serif text-lg sm:text-xl',
        descClass: 'text-slate-600',
        benefitsBorderClass: 'border-slate-200/70',
        bulletIconClass: 'text-emerald-600',
        bulletTextClass: 'text-slate-700',
        linkClass: 'text-navy-900 font-semibold hover:text-gold-deep',
      };
  }
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

        {/* 7 Solutions Grid with Harmonized Color Variations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutionsData.map((item, idx) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Building2;
            const isHeroItem = item.id === 'owner-leads';
            const styles = getCardStyle(item);

            return (
              <div
                key={item.id}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group ${styles.containerClass}`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className={`p-3 rounded-xl transition-transform duration-200 group-hover:scale-105 ${styles.iconBgClass}`}>
                        <IconComponent className="w-5 h-5" />
                      </span>
                      <span className={`text-xs font-mono font-bold ${styles.numberClass}`}>
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-full ${styles.eyebrowClass}`}>
                        {item.eyebrow}
                      </span>
                    </div>
                  </div>

                  <h3 className={`mb-2.5 ${styles.titleClass}`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed mb-5 ${styles.descClass}`}>
                    {item.description}
                  </p>

                  <div
                    className={`space-y-2 pt-4 border-t ${styles.benefitsBorderClass} mb-6 ${
                      isHeroItem ? 'grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 space-y-0' : ''
                    }`}
                  >
                    {item.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs">
                        <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${styles.bulletIconClass}`} />
                        <span className={styles.bulletTextClass}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className={`inline-flex items-center gap-1.5 text-xs transition-colors group-hover:translate-x-1 duration-200 ${styles.linkClass}`}
                >
                  <span>Explore this solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Scope Note Banner */}
        <div className="mt-8 p-4 rounded-xl bg-white/80 border border-slate-200 flex items-start gap-3 text-xs text-slate-700 max-w-4xl mx-auto shadow-xs">
          <Info className="w-4 h-4 text-gold-deep shrink-0 mt-0.5" />
          <p>
            <strong className="text-navy-900">Scope Note:</strong> Digital marketing, bespoke SEO campaigns, and custom video production are available as specialized add-on services and are scoped separately from core owner lead subscriptions.
          </p>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-700 font-medium mb-4">
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
