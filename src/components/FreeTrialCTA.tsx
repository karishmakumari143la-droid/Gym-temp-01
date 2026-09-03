import React from 'react';
import { MessageCircle, CalendarCheck, ArrowRight, ShieldCheck } from 'lucide-react';
import { GymBusinessConfig } from '../types';
import { buildWhatsAppUrl } from '../config/gymConfig';

interface FreeTrialCTAProps {
  business: GymBusinessConfig;
  trialMessage: string;
  onClaimFreeTrial: () => void;
}

export const FreeTrialCTA: React.FC<FreeTrialCTAProps> = ({
  business,
  trialMessage,
  onClaimFreeTrial,
}) => {
  const dynamicTrialMsg = trialMessage.replace('[Gym Name]', business.name).replace('[GYM NAME]', business.name);
  const whatsappUrl = buildWhatsAppUrl(business.whatsappNumber, dynamicTrialMsg);

  return (
    <section
      id="free-trial"
      aria-label="Free Trial Guest Pass"
      className="relative bg-[#07080a] py-24 sm:py-32 border-b border-[#1a1d25] px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background technical grid and subtle atmospheric illumination */}
      <div className="absolute inset-0 bg-technical-grid opacity-25 pointer-events-none" />
      
      {/* Atmospheric center orange ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#ea580c]/12 blur-[140px] pointer-events-none" />

      {/* Floating subtle radial energy rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] rounded-full border border-[#ea580c]/10 pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Monospaced telemetry badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181c26] border border-[#2c3345] text-[#ea580c] text-xs font-mono font-bold uppercase tracking-widest mb-6">
          <CalendarCheck className="w-3.5 h-3.5" />
          <span>ZERO-COMMITMENT GUEST ACCESS</span>
        </div>

        {/* Headline */}
        <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight leading-[0.95] mb-5">
          START YOUR 1-DAY <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ea580c] to-[#f97316]">
            FREE TRIAL.
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-[#a1a1aa] leading-relaxed max-w-2xl mx-auto mb-10">
          Experience IronVault firsthand. No commitment.
        </p>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            id="free-trial-claim-btn"
            onClick={onClaimFreeTrial}
            className="w-full sm:w-auto px-10 py-4.5 rounded-xl font-heading font-black text-sm sm:text-base tracking-widest uppercase bg-[#ea580c] hover:bg-[#f97316] text-black shadow-2xl shadow-[#ea580c]/30 hover:shadow-[#ea580c]/50 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer active:scale-98 hover:-translate-y-0.5"
          >
            <span>CLAIM FREE PASS</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            id="free-trial-whatsapp-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4.5 rounded-xl font-heading font-bold text-sm tracking-wider uppercase bg-[#141720] hover:bg-[#1a1f2c] text-white border border-[#272f40] transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#22c55e]" />
            <span>INSTANT WHATSAPP</span>
          </a>
        </div>

        {/* Instant Access Specs */}
        <div className="mt-10 pt-8 border-t border-[#1a1f2c] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#71717a] font-mono">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#ea580c]" />
            Full facility access
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#ea580c]" />
            No credit card needed
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#ea580c]" />
            1-on-1 coach tour
          </span>
        </div>
      </div>
    </section>
  );
};
