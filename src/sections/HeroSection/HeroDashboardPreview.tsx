import React from 'react';
import { Building2, Home, Key, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';

export const HeroDashboardPreview: React.FC = () => {
  return (
    <div
      className="w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto rounded-xl sm:rounded-2xl bg-navy-950/90 backdrop-blur-md border border-white/20 p-3.5 sm:p-4 md:p-5 shadow-[0_12px_40px_rgba(0,0,0,0.6)] transition-all duration-300"
      aria-label="Illustrative Lead Stream and Pipeline Preview"
    >
      {/* Top Header Strip */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 sm:pb-3.5 mb-3 sm:mb-3.5 border-b border-white/15 text-left">
        <div className="flex items-center gap-2.5">
          <span className="p-1.5 sm:p-2 rounded-lg bg-gold/20 text-gold-light border border-gold/40 shadow-xs">
            <ShieldCheck className="w-4 h-4" />
          </span>
          <div>
            <div className="text-xs sm:text-sm font-bold text-white tracking-wide">
              Lead Allocation &amp; Screening Desk
            </div>
            <p className="text-[11px] text-slate-300 font-medium">
              Verified Pipeline • Strict 1 Client : 1 Lead Model
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/90 text-emerald-300 border border-emerald-600/60 text-[10px] sm:text-[11px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Active Focus: Lucknow &amp; Metro Corridors
          </span>
        </div>
      </div>

      {/* 3 Lead Category Illustrative Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-left">
        {/* Item 1: Rental Owner */}
        <div className="bg-navy-900/90 rounded-lg p-3 sm:p-3.5 border border-white/15 hover:border-emerald-500/50 transition-colors shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-1.5 mb-1.5">
              <span className="badge-category inline-flex items-center gap-1 text-emerald-300 bg-emerald-950/90 border border-emerald-600/60">
                <Key className="w-3 h-3 text-emerald-400 shrink-0" />
                Rental Owner
              </span>
              <span className="label-verified">Verified Today</span>
            </div>
            <div className="text-xs sm:text-[13px] font-bold text-white line-clamp-1">
              3 BHK High-Rise Apartment
            </div>
            <p className="text-[11px] text-slate-200 mt-0.5 font-medium line-clamp-1">
              Gomti Nagar Extension • Direct Owner
            </p>
          </div>
          <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
            <span className="text-slate-200 flex items-center gap-1 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              Contact Verified
            </span>
            <span className="text-gold-light font-bold text-[11px] bg-gold/15 px-1.5 py-0.5 rounded border border-gold/30">
              Assigned
            </span>
          </div>
        </div>

        {/* Item 2: Commercial Owner */}
        <div className="bg-navy-900/90 rounded-lg p-3 sm:p-3.5 border border-white/15 hover:border-amber-500/50 transition-colors shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-1.5 mb-1.5">
              <span className="badge-category inline-flex items-center gap-1 text-amber-300 bg-amber-950/90 border border-amber-600/60">
                <Building2 className="w-3 h-3 text-amber-400 shrink-0" />
                Commercial Owner
              </span>
              <span className="label-verified">Verified Today</span>
            </div>
            <div className="text-xs sm:text-[13px] font-bold text-white line-clamp-1">
              Bare-Shell Office (3,200 sq.ft)
            </div>
            <p className="text-[11px] text-slate-200 mt-0.5 font-medium line-clamp-1">
              Vibhuti Khand • Prime Commercial Hub
            </p>
          </div>
          <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
            <span className="text-slate-200 flex items-center gap-1 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              Owner Confirmed
            </span>
            <span className="text-gold-light font-bold text-[11px] bg-gold/15 px-1.5 py-0.5 rounded border border-gold/30">
              Assigned
            </span>
          </div>
        </div>

        {/* Item 3: Resale Owner */}
        <div className="bg-navy-900/90 rounded-lg p-3 sm:p-3.5 border border-white/15 hover:border-blue-500/50 transition-colors shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-1.5 mb-1.5">
              <span className="badge-category inline-flex items-center gap-1 text-blue-300 bg-blue-950/90 border border-blue-600/60">
                <Home className="w-3 h-3 text-blue-400 shrink-0" />
                Resale Owner
              </span>
              <span className="label-verified">Verified Today</span>
            </div>
            <div className="text-xs sm:text-[13px] font-bold text-white line-clamp-1">
              Independent Duplex Villa
            </div>
            <p className="text-[11px] text-slate-200 mt-0.5 font-medium line-clamp-1">
              Sushant Golf City • Freehold Property
            </p>
          </div>
          <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
            <span className="text-slate-200 flex items-center gap-1 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              Screening Cleared
            </span>
            <span className="text-gold-light font-bold text-[11px] bg-gold/15 px-1.5 py-0.5 rounded border border-gold/30">
              Assigned
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px] text-slate-300">
        <span className="flex items-center gap-1.5 font-medium">
          <TrendingUp className="w-3.5 h-3.5 text-gold-light shrink-0" />
          <span>Single-broker allocation lock enforced across all delivered records</span>
        </span>
        <span className="text-slate-400 italic">
          Illustrative UI • Delivered via WhatsApp, Email &amp; CRM feed
        </span>
      </div>
    </div>
  );
};
