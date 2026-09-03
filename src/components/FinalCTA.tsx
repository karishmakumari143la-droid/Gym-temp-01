import React from 'react';
import { MessageCircle, Phone, ArrowRight, Zap, Shield } from 'lucide-react';
import { GymBusinessConfig } from '../types';
import { buildTelUrl, buildWhatsAppUrl } from '../config/gymConfig';

interface FinalCTAProps {
  business: GymBusinessConfig;
  trialMessage: string;
  onBookFreeTrial: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  business,
  trialMessage,
  onBookFreeTrial,
}) => {
  const dynamicTrialMsg = trialMessage.replace('[Gym Name]', business.name).replace('[GYM NAME]', business.name);
  const whatsappUrl = buildWhatsAppUrl(business.whatsappNumber, dynamicTrialMsg);

  return (
    <section
      id="final-cta"
      aria-label="Final Call To Action"
      className="relative bg-[#050608] py-28 sm:py-36 border-b border-[#181b22] px-4 sm:px-6 lg:px-8 overflow-hidden text-center"
    >
      {/* Background technical grid */}
      <div className="absolute inset-0 bg-technical-grid opacity-25 pointer-events-none" />

      {/* Subtle light sweep beam motion */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="w-[200%] h-full bg-gradient-to-r from-transparent via-white/[0.02] to-transparent animate-light-sweep" />
      </div>

      {/* Dynamic ambient center highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-[#ea580c]/12 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#ea580c]/40 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-[#141722] border border-[#262c3b] text-[#ea580c] font-mono text-xs font-bold uppercase tracking-widest">
          <Zap className="w-3.5 h-3.5 fill-[#ea580c]" />
          <span>JOIN THE IRONVAULT BROTHERHOOD</span>
        </div>

        {/* Exact Headline */}
        <h2 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-[0.92] mb-6">
          READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ea580c] to-[#f97316]">TRAIN?</span>
        </h2>

        {/* Exact Subtext */}
        <p className="text-lg sm:text-2xl text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed mb-12">
          Join a gym built for people who take fitness seriously.
        </p>

        {/* Action Controls: GET STARTED */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <button
            id="final-cta-get-started-btn"
            onClick={onBookFreeTrial}
            className="w-full sm:w-auto px-10 py-4.5 rounded-xl font-heading font-black text-base tracking-widest uppercase bg-[#ea580c] hover:bg-[#f97316] text-black shadow-2xl shadow-[#ea580c]/25 hover:shadow-[#ea580c]/45 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer active:scale-98 hover:-translate-y-0.5"
          >
            <span>GET STARTED</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            id="final-cta-whatsapp-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4.5 rounded-xl font-heading font-bold text-sm tracking-wider uppercase bg-[#141720] hover:bg-[#1b202c] text-white border border-[#272e3d] transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#22c55e]" />
            <span>WHATSAPP DESK</span>
          </a>

          <a
            id="final-cta-call-btn"
            href={buildTelUrl(business.phone)}
            className="w-full sm:w-auto px-6 py-4.5 rounded-xl font-heading font-bold text-sm tracking-wider uppercase bg-[#141720] hover:bg-[#1b202c] text-[#e4e4e7] border border-[#272e3d] transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#ea580c]" />
            <span>DIRECT CALL</span>
          </a>
        </div>

        {/* Reassurance note */}
        <div className="mt-12 text-xs text-[#52525b] font-mono flex items-center justify-center gap-2">
          <span>{business.locality}, {business.city}</span>
          <span>•</span>
          <span>Open Mon–Fri: {business.openingHours?.weekday || '05:30 AM – 11:00 PM'}</span>
        </div>
      </div>
    </section>
  );
};

