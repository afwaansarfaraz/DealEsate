import React from 'react';
import { CheckCircle2, ShieldCheck, UserCheck, Building2, Key, Home } from 'lucide-react';

export const HeroDashboardPreview: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-10 lg:mt-14 rounded-2xl glass-card p-4 sm:p-6 shadow-2xl border border-white/10 relative overflow-hidden">
      {/* Decorative ambient subtle glow */}
      <div
        className="absolute -top-24 -right-24 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-72 h-72 bg-navy-600/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Mockup Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-white/10 gap-2.5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500/50" />
          </div>
          <div>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-text-primary">
              Verified Owner Stream
            </span>
            <span className="text-[11px] text-text-muted ml-2 font-mono hidden sm:inline">
              // Exclusive Allocation Model
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/5 border border-white/10 text-text-secondary">
            <ShieldCheck className="w-3.5 h-3.5 text-gold" />
            Human-Reviewed
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-gold/10 border border-gold/20 text-gold-light">
            <UserCheck className="w-3.5 h-3.5 text-gold" />
            1 Client : 1 Lead
          </span>
        </div>
      </div>

      {/* Lead Stream Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {/* Item 1: Rental Owner */}
        <div className="bg-navy-900/80 rounded-xl p-3.5 sm:p-4 border border-white/5 hover:border-gold/30 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
              <Key className="w-3 h-3" />
              Rental Owner
            </span>
            <span className="text-[10px] text-text-muted">Verified Today</span>
          </div>
          <h4 className="text-xs sm:text-sm font-semibold text-text-primary line-clamp-1">
            3 BHK High-Rise Apartment
          </h4>
          <p className="text-[11px] text-text-secondary mt-0.5">
            Gomti Nagar Extension • Direct Owner
          </p>
          <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px]">
            <span className="text-text-muted flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              Contact Verified
            </span>
            <span className="text-gold-light font-medium">Assigned</span>
          </div>
        </div>

        {/* Item 2: Commercial Owner */}
        <div className="bg-navy-900/80 rounded-xl p-3.5 sm:p-4 border border-white/5 hover:border-gold/30 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-amber-400 bg-amber-950/60 border border-amber-800/40 px-2 py-0.5 rounded">
              <Building2 className="w-3 h-3" />
              Commercial Owner
            </span>
            <span className="text-[10px] text-text-muted">Verified Today</span>
          </div>
          <h4 className="text-xs sm:text-sm font-semibold text-text-primary line-clamp-1">
            Bare-Shell Office Space (3,200 sq.ft)
          </h4>
          <p className="text-[11px] text-text-secondary mt-0.5">
            Vibhuti Khand • Prime Commercial Hub
          </p>
          <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px]">
            <span className="text-text-muted flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-amber-400" />
              Owner Confirmed
            </span>
            <span className="text-gold-light font-medium">Assigned</span>
          </div>
        </div>

        {/* Item 3: Resale Owner */}
        <div className="bg-navy-900/80 rounded-xl p-3.5 sm:p-4 border border-white/5 hover:border-gold/30 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-blue-400 bg-blue-950/60 border border-blue-800/40 px-2 py-0.5 rounded">
              <Home className="w-3 h-3" />
              Resale Owner
            </span>
            <span className="text-[10px] text-text-muted">Verified Today</span>
          </div>
          <h4 className="text-xs sm:text-sm font-semibold text-text-primary line-clamp-1">
            Independent Duplex Villa
          </h4>
          <p className="text-[11px] text-text-secondary mt-0.5">
            Sushant Golf City • Freehold Property
          </p>
          <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px]">
            <span className="text-text-muted flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-blue-400" />
              Screened &amp; Cleared
            </span>
            <span className="text-gold-light font-medium">Assigned</span>
          </div>
        </div>
      </div>

      {/* Bottom Process Bar */}
      <div className="mt-4 pt-3.5 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-text-muted">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span>Workflow: Portal Screening &rarr; AI Filtering &rarr; Human Review &rarr; Dedicated Broker Delivery</span>
        </span>
        <span className="text-text-secondary font-medium">
          Zero Duplicate Reselling
        </span>
      </div>
    </div>
  );
};
