import React from 'react';
import { Phone, MessageCircle, Zap } from 'lucide-react';
import { GymBusinessConfig } from '../types';
import { buildTelUrl, buildWhatsAppUrl } from '../config/gymConfig';

interface MobileStickyBarProps {
  business: GymBusinessConfig;
  defaultMessage: string;
  onJoinClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  business,
  defaultMessage,
  onJoinClick,
}) => {
  const dynamicMsg = defaultMessage.replace('[Gym Name]', business.name).replace('[GYM NAME]', business.name);
  const whatsappUrl = buildWhatsAppUrl(business.whatsappNumber, dynamicMsg);
  const telUrl = buildTelUrl(business.phone);

  return (
    <aside
      id="mobile-sticky-conversion-bar"
      aria-label="Quick Contact and Booking Bar"
      className="fixed bottom-0 inset-x-0 z-40 bg-[#0d0e12]/95 backdrop-blur-lg border-t border-[#232732] p-2.5 lg:hidden shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* CALL */}
        <a
          id="mobile-sticky-call-btn"
          href={telUrl}
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-[#16181f] border border-[#272b36] text-[#e4e4e7] hover:text-white text-[11px] font-bold tracking-wider uppercase active:scale-95 transition-all min-h-[44px]"
          aria-label={`Call ${business.name}`}
        >
          <Phone className="w-4 h-4 text-[#ea580c] mb-0.5" />
          <span>CALL</span>
        </a>

        {/* WHATSAPP */}
        <a
          id="mobile-sticky-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-[#16181f] border border-[#272b36] text-[#e4e4e7] hover:text-white text-[11px] font-bold tracking-wider uppercase active:scale-95 transition-all min-h-[44px]"
          aria-label="Chat with Gym on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-[#22c55e] mb-0.5" />
          <span>WHATSAPP</span>
        </a>

        {/* JOIN NOW */}
        <button
          id="mobile-sticky-join-btn"
          onClick={onJoinClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-[#ea580c] text-black text-[11px] font-heading font-black tracking-wider uppercase shadow-md active:scale-95 transition-all min-h-[44px] cursor-pointer"
          aria-label="Join Now and Claim Free Trial"
        >
          <Zap className="w-4 h-4 text-black mb-0.5 fill-black" />
          <span>JOIN NOW</span>
        </button>
      </div>
    </aside>
  );
};
