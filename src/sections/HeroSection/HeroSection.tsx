import React from 'react';
import { ArrowRight, Sparkles, Users, ShieldCheck, CheckCircle } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { HeroDashboardPreview } from './HeroDashboardPreview';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-8 sm:pt-14 pb-12 sm:pb-20 overflow-hidden"
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
            alt="Mumbai Skyline at Dusk"
            width={1774}
            height={887}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-[center_25%] sm:object-[center_35%] scale-105 transition-transform duration-1000"
          />
        </picture>

        {/* Sophisticated Multi-Layer Overlay Gradient */}
        {/* Layer 1: Dark Navy fade at top for navbar readability, clearing over skyline, then deep navy at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/60 to-dark-bg/95" />

        {/* Layer 2: Subtle radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-navy-950/30 to-navy-950/80" />

        {/* Layer 3: Warm gold dusk reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/70 via-transparent to-gold/5 pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center items-center text-center">
        {/* Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-gold-light bg-gold/10 border border-gold/30 mb-5 sm:mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-gold shrink-0 animate-pulse" />
          <span>India’s Human-Led, AI-Powered Real Estate Growth System</span>
        </div>

        {/* Main H1 Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12] max-w-4xl">
          More Than Leads.{' '}
          <span className="block mt-1 sm:mt-2 gold-gradient-text">
            A Complete Growth System.
          </span>
        </h1>

        {/* Subhead Value Proposition */}
        <p className="mt-5 sm:mt-7 text-sm sm:text-lg md:text-xl text-text-secondary max-w-2xl font-normal leading-relaxed">
          Get relevant property-owner leads, dedicated human sales support, and
          AI-powered tools designed to help brokers and agencies close deals with
          confidence.
        </p>

        {/* Dual Primary & Secondary CTAs */}
        <div className="mt-7 sm:mt-9 flex flex-col xs:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md xs:max-w-none">
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
        <div className="mt-8 sm:mt-11 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-8 text-xs sm:text-sm text-text-secondary">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-gold shrink-0" />
            <span>Rental, Resale &amp; Commercial Leads</span>
          </div>
          <div className="hidden sm:block text-white/20">•</div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-gold shrink-0" />
            <span>Dedicated Human Sales Support</span>
          </div>
          <div className="hidden sm:block text-white/20">•</div>
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
