import React, { useState } from 'react';
import { Menu, ArrowRight } from 'lucide-react';
import { primaryNavItems, headerCTAItem } from '../../data/navigation';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Button } from '../ui/Button';
import { MobileNavigation } from './MobileNavigation';

export const SiteHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionIds = primaryNavItems.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds, 120);

  return (
    <>
      <header
        className="sticky top-0 z-40 w-full bg-navy-950/90 backdrop-blur-md border-b border-white/10 transition-all duration-200"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[72px] flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#top"
            className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md p-1"
            aria-label="Dealestate - Back to top"
          >
            <img
              src="/assets/brand/dealestate-logo.webp"
              alt="Dealestate Logo"
              width={160}
              height={42}
              className="h-8 sm:h-10 w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/brand/dealestate-logo.png';
              }}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {primaryNavItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-gold-light bg-gold/10 font-semibold'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Button
              href={headerCTAItem.href}
              variant="primary"
              size="sm"
              iconRight={<ArrowRight className="w-3.5 h-3.5" />}
            >
              {headerCTAItem.label}
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-lg text-text-secondary hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={primaryNavItems}
        ctaItem={headerCTAItem}
        activeId={activeSection}
      />
    </>
  );
};
