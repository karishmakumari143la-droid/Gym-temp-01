import React from 'react';
import { TrustStat } from '../types';
import { Info, Activity } from 'lucide-react';

interface TrustStatsProps {
  stats: TrustStat[];
}

export const TrustStats: React.FC<TrustStatsProps> = ({ stats }) => {
  return (
    <section
      id="trust-stats"
      aria-label="Gym Performance Data"
      className="relative bg-[#090a0d] border-b border-[#1b1e25] py-14 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle background technical grid */}
      <div className="absolute inset-0 bg-technical-grid opacity-30 pointer-events-none" />
      
      {/* Subtle orange atmospheric glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-[#ea580c]/5 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Editorial Top Bar with technical telemetry */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-8 border-b border-[#1c202a] text-xs gap-2">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse" />
            <span className="uppercase tracking-[0.2em] font-heading font-black text-xs text-white">
              VERIFIED FACILITY PERFORMANCE METRICS
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 text-[11px] text-[#71717a] font-mono">
            <Info className="w-3.5 h-3.5 text-[#ea580c]" />
            <span>*Replace with verified client data.</span>
          </div>
        </div>

        {/* 4 Performance Data Columns with Sleek Separators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 divide-y lg:divide-y-0 lg:divide-x divide-[#1a1d26]">
          {stats.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex flex-col justify-center ${idx !== 0 ? 'pt-6 lg:pt-0 lg:pl-10' : ''} group`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono tracking-widest text-[#52525b] uppercase">
                  METRIC 0{idx + 1}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#272b35] group-hover:bg-[#ea580c] transition-colors" />
              </div>

              {/* Large High-Contrast Display Metric */}
              <div className="flex items-baseline gap-1 my-1">
                <span className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#ea580c] transition-all duration-300">
                  {stat.value}
                </span>
              </div>

              {/* Metric Label */}
              <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#e4e4e7] mt-1">
                {stat.label}
              </span>

              {stat.sublabel && (
                <span className="text-xs text-[#a1a1aa] mt-0.5 leading-normal">
                  {stat.sublabel}
                </span>
              )}

              {/* Thin orange progress indicator */}
              <div className="w-12 h-[2px] bg-[#222631] group-hover:bg-[#ea580c] group-hover:w-20 transition-all duration-500 mt-4 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

