import React from 'react';
import { SiteHeader } from '../components/layout/SiteHeader';
import { HeroSection } from '../sections/HeroSection/HeroSection';
import { OwnerLeadsSection } from '../sections/OwnerLeads/OwnerLeadsSection';
import { HumanSupportSection } from '../sections/HumanSupport/HumanSupportSection';
import { SolutionsSection } from '../sections/Solutions/SolutionsSection';
import { HowItWorksSection } from '../sections/HowItWorks/HowItWorksSection';
import { AudienceSection } from '../sections/Audience/AudienceSection';
import { WhyDealestateSection } from '../sections/WhyDealestate/WhyDealestateSection';
import { FAQSection } from '../sections/FAQ/FAQSection';
import { ContactSection } from '../sections/Contact/ContactSection';
import { SiteFooter } from '../components/layout/SiteFooter';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory text-text-charcoal flex flex-col antialiased selection:bg-gold/30 selection:text-gold-deep">
      {/* Top Anchor */}
      <div id="top" className="sr-only" />

      {/* Sticky Site Header with Brand Logo and Navigation */}
      <SiteHeader />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 flex flex-col">
        {/* Hero Section with Cinematic Skyline Background */}
        <HeroSection />

        {/* 1. Owner Lead Categories (Dominant Warm Ivory Surface) */}
        <OwnerLeadsSection />

        {/* 2. Human-Led Sales Support Spotlight (High-Impact Deep Navy Section) */}
        <HumanSupportSection />

        {/* 3. Solutions / Complete Growth Support (Alternate Soft Blue Surface) */}
        <SolutionsSection />

        {/* 4. The 7-Step Process Workflow (Warm Ivory Surface) */}
        <HowItWorksSection />

        {/* 5. Target Audience Profiles (Soft Blue Surface) */}
        <AudienceSection />

        {/* 6. Why Dealestate Advantages (Warm Ivory Surface) */}
        <WhyDealestateSection />

        {/* 7. Frequently Asked Questions Accordion (Soft Blue Surface) */}
        <FAQSection />

        {/* 8. Final CTA & Lead Conversion Form (High-Impact Deep Navy Section) */}
        <ContactSection />
      </main>

      {/* Official Dealestate Footer (Deep Navy) */}
      <SiteFooter />
    </div>
  );
};

export default App;
