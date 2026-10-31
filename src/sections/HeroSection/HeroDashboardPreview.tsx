import React from 'react';
import { Building2, Home, Key, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';

export const HeroDashboardPreview: React.FC = () => {
  return (
    <div
      className="w-full max-w-4xl mx-auto rounded-2xl bg-navy-950/85 backdrop-blur-md border border-white/15 p-4 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300"
      aria-label="Illustrative Lead Stream and Pipeline Preview"
    >
      {/* Top Header Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/10 text-left">
        <div className="flex items-center gap-2.5">
          <span className="p-2 rounded-lg bg-gold/15 text-gold border border-gold/30">
            <ShieldCheck className="w-4 h-4" />
          </span>
          <div>
            <div className="text-xs sm:text-sm font-semibold text-white">
              Lead Allocation &amp; Screening Desk
            </div>
            <p className="text-[11px] text-text-muted">
              Live Allocation Channel • 1 Client : 1 Lead Model
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-700/50 text-[11px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Active Micro-Market: Lucknow
          </span>
        </div>
      </div>

      {/* 3 Lead Category Illustrative Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
        {/* Item 1: Rental Owner */}
        <div className="bg-navy-900/80 rounded-lg p-3.5 border border-white/5 hover:border-gold/30 transition-colors">
          <div className="flex items-center justify-between mb-1.5">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
              <Key className="w-3 h-3" />
              Rental Owner
            </span>
            <span className="text-[10px] text-text-muted">Verified Today</span>
          </div>
          <div className="text-xs sm:text-sm font-semibold text-text-primary line-clamp-1">
            3 BHK High-Rise Apartment
          </div>
          <p className="text-[11px] text-text-secondary mt-0.5">
            Gomti Nagar Extension • Direct Owner
          </p>
          <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
            <span className="text-text-muted flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              Contact Verified
            </span>
            <span className="text-gold-light font-medium">Assigned</span>
          </div>
        </div>

        {/* Item 2: Commercial Owner */}
        <div className="bg-navy-900/80 rounded-lg p-3.5 border border-white/5 hover:border-gold/30 transition-colors">
          <div className="flex items-center justify-between mb-1.5">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-amber-400 bg-amber-950/60 border border-amber-800/40 px-2 py-0.5 rounded">
              <Building2 className="w-3 h-3" />
              Commercial Owner
            </span>
            <span className="text-[10px] text-text-muted">Verified Today</span>
          </div>
          <div className="text-xs sm:text-sm font-semibold text-text-primary line-clamp-1">
            Bare-Shell Office Space (3,200 sq.ft)
          </div>
          <p className="text-[11px] text-text-secondary mt-0.5">
            Vibhuti Khand • Prime Commercial Hub
          </p>
          <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
            <span className="text-text-muted flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-amber-400" />
              Owner Confirmed
            </span>
            <span className="text-gold-light font-medium">Assigned</span>
          </div>
        </div>

        {/* Item 3: Resale Owner */}
        <div className="bg-navy-900/80 rounded-lg p-3.5 border border-white/5 hover:border-gold/30 transition-colors">
          <div className="flex items-center justify-between mb-1.5">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-blue-400 bg-blue-950/60 border border-blue-800/40 px-2 py-0.5 rounded">
              <Home className="w-3 h-3" />
              Resale Owner
            </span>
            <span className="text-[10px] text-text-muted">Verified Today</span>
          </div>
          <div className="text-xs sm:text-sm font-semibold text-text-primary line-clamp-1">
            Independent Duplex Villa
          </div>
          <p className="text-[11px] text-text-secondary mt-0.5">
            Sushant Golf City • Freehold Property
          </p>
          <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
            <span className="text-text-muted flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-blue-400" />
              Screening Cleared
            </span>
            <span className="text-gold-light font-medium">Assigned</span>
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="mt-3.5 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-text-muted">
        <span className="flex items-center gap-1.5">
          <TrendingUp className="w-3.5 h-3.5 text-gold-light" />
          <span>Single-broker allocation lock enforced across all delivered records</span>
        </span>
        <span className="text-text-secondary italic">
          Illustrative UI — Leads delivered via WhatsApp, Email &amp; CRM feed
        </span>
      </div>
    </div>
  );
};
