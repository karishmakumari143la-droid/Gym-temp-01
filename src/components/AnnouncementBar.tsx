import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { AnnouncementConfig } from '../types';

interface AnnouncementBarProps {
  config: AnnouncementConfig;
  onCtaClick: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ config, onCtaClick }) => {
  if (!config.active) return null;

  return (
    <div
      id="announcement-bar"
      className="bg-[#121418] border-b border-[#232730] text-xs sm:text-sm text-[#e4e4e7] py-2 px-4 sticky top-0 z-50 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4 flex-wrap text-center">
        <span className="inline-flex items-center gap-1.5 font-medium tracking-wide uppercase text-xs sm:text-sm">
          <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-ping" />
          <span className="w-2 h-2 rounded-full bg-[#ea580c] -ml-3.5" />
          <Sparkles className="w-3.5 h-3.5 text-[#ea580c]" />
          <span>{config.text}</span>
        </span>
        <button
          id="announcement-book-btn"
          onClick={onCtaClick}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#f97316] hover:text-[#fb923c] uppercase tracking-wider underline underline-offset-4 decoration-[#ea580c]/50 transition-colors cursor-pointer"
        >
          {config.ctaText}
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
