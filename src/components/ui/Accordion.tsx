import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../../data/faqs';

interface AccordionProps {
  items: FAQItem[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={`space-y-3.5 max-w-3xl mx-auto ${className || ''}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-xl border transition-all duration-200 ${
              isOpen
                ? 'bg-white border-gold/40 shadow-sm'
                : 'bg-white/80 border-slate-200/80 hover:border-slate-300'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-xl select-none"
            >
              <span className="text-base sm:text-lg font-semibold text-navy-900 leading-snug">
                {item.question}
              </span>
              <span
                className={`p-1.5 rounded-full shrink-0 transition-transform duration-200 ${
                  isOpen ? 'bg-gold/15 text-gold-deep rotate-180' : 'bg-slate-100 text-slate-500'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                <p className="pt-3">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

