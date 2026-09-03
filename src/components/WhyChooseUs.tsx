import React from 'react';
import { WhyChooseItem } from '../types';
import { Award, ShieldCheck, Target, Users2, ArrowUpRight } from 'lucide-react';

interface WhyChooseUsProps {
  items: WhyChooseItem[];
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ items }) => {
  // Helper to assign a tailored athletic icon
  const getFeatureIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Award className="w-5 h-5 text-[#ea580c]" />;
      case 1:
        return <ShieldCheck className="w-5 h-5 text-[#ea580c]" />;
      case 2:
        return <Target className="w-5 h-5 text-[#ea580c]" />;
      default:
        return <Users2 className="w-5 h-5 text-[#ea580c]" />;
    }
  };

  return (
    <section
      id="why-us"
      aria-label="Why Choose Us"
      className="relative bg-[#07080a] py-20 sm:py-28 border-b border-[#1a1d25] px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background technical grid accent */}
      <div className="absolute inset-0 bg-technical-grid opacity-20 pointer-events-none" />
      
      {/* Subtle orange accent glow on side */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#ea580c]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-[2px] bg-[#ea580c]" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#ea580c]">
                THE IRONVAULT STANDARD
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
              MORE THAN A GYM.
            </h2>
          </div>
          <p className="text-[#a1a1aa] max-w-md text-base leading-relaxed">
            Engineered specifically for athletes and individuals who demand uncompromising equipment, structured programming, and tangible results.
          </p>
        </div>

        {/* 4 Feature Blocks in Sophisticated Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className="group relative p-7 sm:p-8 bg-gradient-to-b from-[#11141b] via-[#0d0f14] to-[#0a0b0e] border border-[#202532] rounded-xl hover:border-[#ea580c]/60 transition-all duration-400 flex flex-col justify-between min-h-[300px] hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#ea580c]/5 overflow-hidden"
            >
              {/* Micro-dot texture overlay inside card */}
              <div className="absolute inset-0 bg-subtle-dots opacity-15 pointer-events-none" />

              {/* Large Background Ghost Number */}
              <div className="absolute -top-4 right-3 font-heading font-black text-8xl text-white/[0.04] group-hover:text-[#ea580c]/10 transition-colors duration-500 select-none pointer-events-none">
                {item.number}
              </div>

              {/* Top Row: Icon + Tiny Number Tag */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#181c26] border border-[#272e3d] flex items-center justify-center group-hover:bg-[#ea580c]/15 group-hover:border-[#ea580c]/40 transition-all">
                    {getFeatureIcon(idx)}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#71717a] group-hover:text-[#ea580c] transition-colors">
                    [{item.number}]
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-black uppercase text-white tracking-wide mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Orange Accent Line & Subtle Arrow */}
              <div className="relative z-10 mt-8 pt-4 border-t border-[#1c212c] flex items-center justify-between">
                <div className="w-8 h-[2px] bg-[#272e3d] group-hover:bg-[#ea580c] group-hover:w-16 transition-all duration-400 rounded-full" />
                <ArrowUpRight className="w-4 h-4 text-[#52525b] group-hover:text-[#ea580c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

