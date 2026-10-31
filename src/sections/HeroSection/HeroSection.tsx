import React from 'react';
import { ArrowRight, Sparkles, Users, ShieldCheck, CheckCircle } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { HeroDashboardPreview } from './HeroDashboardPreview';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-between pt-6 sm:pt-10 pb-12 sm:pb-16 overflow-hidden"
      aria-label="Hero - Dealestate Growth System"
    >
      {/* Background Skyline Image with Responsive Picture element */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <picture className="w-full h-full">
          {/* Mobile Source (screens < 768px) */}
          <source
            media="(max-width: 767px)"
            srcSet="/assets/hero/mumbai-skyline-mobile.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 767px)"
            srcSet="/assets/hero/mumbai-skyline-mobile.jpg"
            type="image/jpeg"
          />

          {/* Desktop Source (screens >= 768px) */}
          <source
            media="(min-width: 768px)"
            srcSet="/assets/hero/mumbai-skyline-desktop.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/assets/hero/mumbai-skyline-desktop.jpg"
            type="image/jpeg"
          />

          {/* Fallback Image */}
          <img
            src="/assets/hero/mumbai-skyline-desktop.jpg"
            alt="Mumbai Skyline at Dusk with Bandra-Worli Sea Link"
            width={1774}
            height={887}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-[center_30%] sm:object-[center_28%]"
          />
        </picture>

        {/* Refined, Minimal Overlay System: Preserves Sunset Colors & Skyline Architecture */}
        {/* Layer 1: Top vignette for navbar integration */}
        <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-navy-950/85 via-navy-950/30 to-transparent" />

        {/* Layer 2: Targeted soft radial vignette behind text - keeps sunset and bridge 100% luminous */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_35%,rgba(7,21,46,0.68)_0%,rgba(7,21,46,0.28)_55%,transparent_100%)]" />

        {/* Layer 3: Bottom gradient transition into dark background */}
        <div className="absolute bottom-0 inset-x-0 h-44 sm:h-60 bg-gradient-to-t from-dark-bg via-dark-bg/85 to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center items-center text-center">
        {/* Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-gold-light bg-navy-950/75 backdrop-blur-md border border-gold/40 mb-3.5 sm:mb-4.5 shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
          <Sparkles className="w-3.5 h-3.5 text-gold shrink-0 animate-pulse" />
          <span>India’s Human-Led, AI-Powered Real Estate Growth System</span>
        </div>

        {/* Refined H1 Headline: Balanced Size, Confident 2-Line Editorial Rhythm */}
        <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-white leading-[1.18] sm:leading-[1.15] max-w-3xl mb-3.5 sm:mb-4 drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
          More Than Leads.{' '}
          <span className="block mt-1 sm:mt-1.5 gold-gradient-text">
            A Complete Growth System.
          </span>
        </h1>

        {/* Subhead Value Proposition */}
        <p className="mb-6 sm:mb-7 text-sm sm:text-base md:text-lg text-slate-100/95 max-w-2xl font-normal leading-relaxed text-shadow-subtle">
          Get relevant property-owner leads, dedicated human sales support, and
          AI-powered tools designed to help brokers and agencies close deals with
          confidence.
        </p>

        {/* Dual Primary & Secondary CTAs */}
        <div className="mb-6 sm:mb-8 flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md xs:max-w-none">
          <Button
            href="#owner-leads"
            variant="primary"
            size="lg"
            className="w-full xs:w-auto"
            iconRight={<ArrowRight className="w-4 h-4" />}
          >
            Get Owner Leads
          </Button>
          <Button
            href="#solutions"
            variant="outline"
            size="lg"
            className="w-full xs:w-auto"
          >
            Explore Solutions
          </Button>
        </div>

        {/* Core Value Pillars Strip */}
        <div className="mb-8 sm:mb-10 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-7 text-xs sm:text-sm text-slate-200 font-medium text-shadow-subtle">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-gold shrink-0" />
            <span>Rental, Resale &amp; Commercial Leads</span>
          </div>
          <div className="hidden sm:block text-white/30">•</div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-gold shrink-0" />
            <span>Dedicated Human Sales Support</span>
          </div>
          <div className="hidden sm:block text-white/30">•</div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
            <span>Exclusive Single-Broker Allocation</span>
          </div>
        </div>

        {/* Static Illustrative Lead Stream Dashboard Preview */}
        <HeroDashboardPreview />
      </div>
    </section>
  );
};
