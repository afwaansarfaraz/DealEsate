import React from 'react';
import { ArrowUp } from 'lucide-react';
import { primaryNavItems } from '../../data/navigation';
import { siteConfig } from '../../data/siteConfig';

export const SiteFooter: React.FC = () => {
  return (
    <footer className="w-full bg-navy-950 text-slate-400 border-t border-white/10 py-14 sm:py-16 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          {/* Col 1-2: Brand Summary */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#top" className="inline-block p-1">
              <img
                src="/assets/brand/dealestate-logo.webp"
                alt="Dealestate Logo"
                width={160}
                height={42}
                className="h-9 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/brand/dealestate-logo.png';
                }}
              />
            </a>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              India’s first human-led, AI-powered real estate growth system. Empowering brokers and agencies with verified property-owner leads, dedicated sales specialists, and intelligent automation.
            </p>
            <p className="text-[11px] text-slate-500 font-mono">
              Initial Focus Market: Lucknow &amp; Selected Key Indian Metro Corridors
            </p>
          </div>

          {/* Col 3: Lead Streams */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Owner Lead Streams
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#owner-leads" className="hover:text-gold-light transition-colors">
                  Rental Owner Leads
                </a>
              </li>
              <li>
                <a href="#owner-leads" className="hover:text-gold-light transition-colors">
                  Resale Owner Leads
                </a>
              </li>
              <li>
                <a href="#owner-leads" className="hover:text-gold-light transition-colors">
                  Commercial Owner Leads
                </a>
              </li>
              <li>
                <a href="#owner-leads" className="hover:text-gold-light transition-colors">
                  Exclusive Allocation Protocol
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Solutions & Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Growth Support
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#human-support" className="hover:text-gold-light transition-colors">
                  Dedicated Human Sales Support
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-gold-light transition-colors">
                  AI-Assisted Listing Verification
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-gold-light transition-colors">
                  AI Property Marketing Videos
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-gold-light transition-colors">
                  CRM &amp; WhatsApp Automation
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-gold-light transition-colors">
                  7-Step Process Workflow
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Quick Anchors */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {primaryNavItems.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="hover:text-gold-light transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved. Built for Indian Real Estate Professionals.
          </p>

          <div className="flex items-center gap-6">
            <a href={siteConfig.legal.privacyPolicyUrl} className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <a href={siteConfig.legal.termsUrl} className="hover:text-slate-400 transition-colors">
              Terms of Service
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 p-2 rounded-lg bg-navy-900 border border-white/10 hover:border-gold/50 text-slate-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium">Top</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

