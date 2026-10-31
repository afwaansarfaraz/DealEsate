import React, { useEffect, useRef } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { NavigationItem } from '../../types/content';
import { Button } from '../ui/Button';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavigationItem[];
  ctaItem: NavigationItem;
  activeId?: string;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
  items,
  ctaItem,
  activeId,
}) => {
  const navRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Focus close button on open
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={navRef}
        className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-navy-950 border-l border-white/15 p-6 flex flex-col justify-between shadow-2xl z-10 animate-in slide-in-from-right duration-300 text-white"
      >
        <div>
          {/* Top Header inside Drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-white/15">
            <div className="flex items-center gap-2">
              <img
                src="/assets/brand/dealestate-logo.webp"
                alt="Dealestate"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/brand/dealestate-logo.png';
                }}
              />
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 active:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="mt-6 flex flex-col space-y-1.5">
            {items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={onClose}
                  className={`group flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-gold/15 text-gold-light border-l-4 border-gold pl-3 font-semibold'
                      : 'text-[#F7F3EA] hover:text-white hover:bg-white/10 active:bg-white/15'
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold`}
                >
                  <span className="tracking-wide">{item.label}</span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                      isActive ? 'text-gold' : 'text-gold/80 group-hover:text-gold'
                    }`}
                  />
                </a>
              );
            })}
          </nav>
        </div>

        {/* Bottom CTA in Drawer */}
        <div className="pt-6 border-t border-white/15">
          <Button
            href={ctaItem.href}
            variant="primary"
            size="lg"
            fullWidth
            onClick={onClose}
            iconRight={<ArrowRight className="w-4 h-4" />}
          >
            {ctaItem.label}
          </Button>
          <p className="mt-3 text-center text-xs text-slate-300 font-medium">
            Verified Owner Leads &amp; Dedicated Human Sales Support
          </p>
        </div>
      </div>
    </div>
  );
};

