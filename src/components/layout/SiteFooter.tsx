import React from 'react';
import {
  ArrowUp,
  Phone,
  Mail,
  MessageSquare,
  Globe,
  Linkedin,
  Instagram,
} from 'lucide-react';
import { primaryNavItems } from '../../data/navigation';
import {
  siteConfig,
  hasPhoneContact,
  hasEmailContact,
  hasWhatsAppContact,
  hasLinkedInContact,
  hasInstagramContact,
} from '../../data/siteConfig';

export const SiteFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-navy-950 text-slate-400 border-t border-white/10 py-14 sm:py-16 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          {/* Col 1-4: Brand Summary & Direct Contact */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#top" className="inline-block p-1" aria-label="Dealestate Homepage">
              <img
                src="/assets/brand/dealestate-logo.webp"
                alt="Dealestate Official Logo"
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
            <p className="text-[11px] text-slate-400 font-mono">
              Powered by{' '}
              <a
                href={siteConfig.parentWebsite || 'https://www.codnexa.co.in'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-light hover:underline font-semibold"
              >
                Codnexa
              </a>{' '}
              • Lucknow &amp; Key Metro Corridors
            </p>

            {/* Direct Contact Links */}
            <div className="space-y-2 pt-2 text-xs">
              {hasPhoneContact(siteConfig) && (
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[\s\-\(\)]/g, '')}`}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-gold-light transition-colors group"
                >
                  <span className="p-1.5 rounded-lg bg-navy-900 border border-white/10 group-hover:border-gold/40 text-gold-light">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  <span>{siteConfig.contact.phone}</span>
                </a>
              )}

              {hasEmailContact(siteConfig) && (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-gold-light transition-colors group"
                >
                  <span className="p-1.5 rounded-lg bg-navy-900 border border-white/10 group-hover:border-gold/40 text-gold-light">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  <span>{siteConfig.contact.email}</span>
                </a>
              )}

              {hasWhatsAppContact(siteConfig) && (
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hi%20Dealestate%2C%20I%20am%20interested%20in%20verified%20owner%20leads.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors group"
                >
                  <span className="p-1.5 rounded-lg bg-emerald-950/60 border border-emerald-700/40 group-hover:border-emerald-500 text-emerald-400">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </span>
                  <span>Chat on WhatsApp</span>
                </a>
              )}
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5 pt-3">
              {hasLinkedInContact(siteConfig) && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Codnexa LinkedIn"
                  className="p-2 rounded-lg bg-navy-900 border border-white/10 hover:border-gold/50 text-slate-400 hover:text-gold-light transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}

              {hasInstagramContact(siteConfig) && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Codnexa Instagram"
                  className="p-2 rounded-lg bg-navy-900 border border-white/10 hover:border-gold/50 text-slate-400 hover:text-gold-light transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}

              {siteConfig.parentWebsite && (
                <a
                  href={siteConfig.parentWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Codnexa Official Website"
                  className="p-2 rounded-lg bg-navy-900 border border-white/10 hover:border-gold/50 text-slate-400 hover:text-gold-light transition-colors"
                >
                  <Globe className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Col 5-6: Lead Streams (2 cols) */}
          <div className="lg:col-span-3">
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
                  1:1 Single-Broker Exclusivity
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-gold-light transition-colors">
                  7-Stage Lead Process
                </a>
              </li>
            </ul>
          </div>

          {/* Col 7-9: Growth Support (3 cols) */}
          <div className="lg:col-span-3">
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
                  AI-Assisted Listing Screening
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
                <a href="#solutions" className="hover:text-gold-light transition-colors">
                  Digital Marketing &amp; SEO (Add-on)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 10-12: Navigation & About (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {siteConfig.brandName}. All rights reserved. A real estate growth offering by {siteConfig.parentCompany}.
          </p>

          <div className="flex items-center gap-6">
            <a href={siteConfig.legal.privacyPolicyUrl} className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href={siteConfig.legal.termsUrl} className="hover:text-white transition-colors">
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
