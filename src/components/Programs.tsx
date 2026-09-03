import React from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { ProgramItem } from '../types';

interface ProgramsProps {
  programs: ProgramItem[];
  onSelectProgram: (programTitle: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ programs, onSelectProgram }) => {
  return (
    <section
      id="programs"
      aria-label="Training Programs"
      className="relative bg-[#090a0d] py-20 sm:py-28 border-b border-[#1a1d25] px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background technical grid */}
      <div className="absolute inset-0 bg-technical-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-[2px] bg-[#ea580c]" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#ea580c]">
                METHODOLOGY & DISCIPLINES
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
              TRAINING THAT MOVES YOU FORWARD.
            </h2>
          </div>
          <p className="text-[#a1a1aa] max-w-md text-base leading-relaxed">
            Six disciplined training modalities engineered for biomechanical efficiency, progressive overload, and long-term athletic resilience.
          </p>
        </div>

        {/* Stacked Editorial Programs List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((prog, idx) => (
            <div
              key={prog.id}
              onClick={() => onSelectProgram(prog.title)}
              className="group relative p-7 bg-gradient-to-b from-[#11141c] via-[#0d0f15] to-[#0a0b0f] border border-[#1e2330] rounded-xl hover:border-[#ea580c]/60 transition-all duration-400 flex flex-col justify-between min-h-[220px] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ea580c]/5 cursor-pointer overflow-hidden"
            >
              {/* Micro-dot texture overlay */}
              <div className="absolute inset-0 bg-subtle-dots opacity-10 pointer-events-none" />

              <div>
                {/* Top Row: Category Number & Intensity Tag */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-black tracking-widest text-[#ea580c]">
                    0{idx + 1} // PROGRAM
                  </span>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-[#181c26] text-[#a1a1aa] border border-[#272e3d]">
                    {prog.intensity}
                  </span>
                </div>

                {/* Program Title */}
                <h3 className="font-heading text-2xl font-black uppercase text-white tracking-wide mb-2.5 group-hover:text-[#ea580c] transition-colors">
                  {prog.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed mb-4">
                  {prog.description}
                </p>
              </div>

              {/* Bottom Row: Target Focus & Animated Arrow */}
              <div className="pt-4 border-t border-[#1a1f2a] flex items-center justify-between mt-auto">
                <span className="text-[11px] font-medium text-[#71717a]">
                  Focus: <span className="text-[#d4d4d8] font-semibold">{prog.targetFocus}</span>
                </span>
                <div className="w-8 h-8 rounded-full bg-[#161a24] border border-[#262c3b] flex items-center justify-center text-[#71717a] group-hover:bg-[#ea580c] group-hover:text-black group-hover:border-[#ea580c] transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

