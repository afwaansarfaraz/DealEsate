import React from 'react';
import { SiteHeader } from '../components/layout/SiteHeader';
import { HeroSection } from '../sections/HeroSection/HeroSection';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-text-primary flex flex-col antialiased selection:bg-gold/30 selection:text-gold-light">
      {/* Top Anchor */}
      <div id="top" className="sr-only" />

      {/* Sticky Site Header with Brand Logo and Navigation */}
      <SiteHeader />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 flex flex-col">
        {/* Phase 1 Core Deliverable: Hero Section */}
        <HeroSection />

        {/* Phase 2 Anchor Stubs (Ensures Header and CTA Anchor Links function seamlessly) */}
        <div id="owner-leads" className="sr-only" aria-hidden="true" />
        <div id="human-support" className="sr-only" aria-hidden="true" />
        <div id="solutions" className="sr-only" aria-hidden="true" />
        <div id="how-it-works" className="sr-only" aria-hidden="true" />
        <div id="why-dealestate" className="sr-only" aria-hidden="true" />
        <div id="faq" className="sr-only" aria-hidden="true" />
        <div id="contact" className="sr-only" aria-hidden="true" />
      </main>

      {/* Baseline Footer */}
      <footer className="w-full border-t border-white/10 bg-navy-950 py-8 text-center text-xs text-text-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary">
            &copy; {new Date().getFullYear()} Dealestate. All rights reserved.
          </p>
          <p className="text-[11px] text-text-muted">
            India’s First Human-Led, AI-Powered Real Estate Growth System
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
