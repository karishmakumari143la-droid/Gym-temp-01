import React from 'react';
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Navigation,
  ExternalLink,
} from 'lucide-react';
import { GymBusinessConfig } from '../types';
import { buildTelUrl, buildWhatsAppUrl } from '../config/gymConfig';

interface LocationSectionProps {
  business: GymBusinessConfig;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ business }) => {
  const whatsappUrl = buildWhatsAppUrl(
    business.whatsappNumber,
    `Hi, I want to visit ${business.name} in ${business.city}. Can you share directions and visitor timings?`
  );

  return (
    <section
      id="location"
      aria-label="Gym Location, Hours, and Service Areas"
      className="bg-[#0e1014] py-20 sm:py-28 border-b border-[#1b1e25] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#ea580c]">
            Prime Facility Location
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mt-2">
            TRAIN WITH US IN {business.city.toUpperCase()}.
          </h2>
          <p className="text-[#a1a1aa] text-base mt-2 max-w-xl">
            Centrally positioned in {business.locality} with secure parking, high street visibility, and convenient transit links.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#111317] border border-[#20242e] rounded-sm p-7 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Gym Name & Address */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#71717a] block mb-1">
                  Facility Address
                </span>
                <h3 className="font-heading text-2xl font-bold uppercase text-white mb-2">
                  {business.name}
                </h3>
                <p className="text-sm text-[#d4d4d8] leading-relaxed flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#ea580c] shrink-0 mt-1" />
                  <span>{business.fullAddress}</span>
                </p>
              </div>

              {/* Opening Hours */}
              <div className="pt-5 border-t border-[#1e222b]">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#71717a] block mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#ea580c]" />
                  <span>Operating Hours</span>
                </span>
                <div className="space-y-1.5 text-xs sm:text-sm text-[#d4d4d8]">
                  <div className="flex justify-between">
                    <span className="text-[#a1a1aa]">Monday – Friday:</span>
                    <span className="font-semibold text-white">{business.openingHours.weekday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#a1a1aa]">Saturday:</span>
                    <span className="font-semibold text-white">{business.openingHours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#a1a1aa]">Sunday:</span>
                    <span className="font-semibold text-white">{business.openingHours.sunday}</span>
                  </div>
                </div>
              </div>

              {/* Service Areas (Local SEO) */}
              <div className="pt-5 border-t border-[#1e222b]">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#71717a] block mb-2">
                  Serving Localities
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {business.serviceAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#171920] border border-[#272b36] text-xs text-[#d4d4d8]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Contacts */}
              <div className="pt-5 border-t border-[#1e222b] space-y-2">
                <a
                  href={buildTelUrl(business.phone)}
                  className="flex items-center gap-2 text-sm text-[#d4d4d8] hover:text-[#ea580c] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#ea580c]" />
                  <span>Phone: {business.displayPhone}</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#d4d4d8] hover:text-[#22c55e] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#22c55e]" />
                  <span>WhatsApp: +{business.whatsappNumber}</span>
                </a>
              </div>
            </div>

            {/* Directions Button */}
            <div className="mt-8 pt-6 border-t border-[#1e222b]">
              <a
                id="get-directions-btn"
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded bg-[#ea580c] hover:bg-[#f97316] text-black font-heading font-black text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>
            </div>
          </div>

          {/* Right Google Maps Embed Frame (7 cols) */}
          <div className="lg:col-span-7 bg-[#111317] border border-[#20242e] rounded-sm overflow-hidden relative min-h-[380px] sm:min-h-[460px] flex flex-col">
            <div className="p-3 bg-[#16181f] border-b border-[#20242e] flex items-center justify-between text-xs text-[#a1a1aa]">
              <span className="font-semibold text-white flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#ea580c]" />
                Google Maps Live Navigation
              </span>
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#ea580c] hover:underline"
              >
                Open in App <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex-1 w-full h-full relative">
              <iframe
                title={`${business.name} Map Location in ${business.city}`}
                src={business.googleMapsEmbedUrl}
                className="w-full h-full min-h-[360px] border-0 filter grayscale contrast-125 opacity-85 hover:opacity-100 hover:filter-none transition-all duration-300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
