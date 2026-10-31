import React from 'react';
import { SectionContainer } from '../../components/ui/SectionContainer';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Accordion } from '../../components/ui/Accordion';
import { faqsData } from '../../data/faqs';

export const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="bg-soft-blue py-20 sm:py-28 border-t border-slate-200/70 relative">
      <SectionContainer>
        <SectionHeading
          eyebrow="Clear Answers"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our lead categories, verification standards, exclusivity model, and support scope."
          theme="light"
        />

        <Accordion items={faqsData} />

        <div className="mt-12 text-center text-xs sm:text-sm text-slate-500">
          Have a question not addressed here?{' '}
          <a href="#contact" className="text-gold-deep font-semibold hover:underline">
            Reach out through our enquiry form below.
          </a>
        </div>
      </SectionContainer>
    </section>
  );
};
