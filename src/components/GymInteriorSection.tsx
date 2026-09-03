import React from 'react';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { GymBusinessConfig, ImageAssetsConfig, ImageAltConfig } from '../types';
import { SafeImage } from './SafeImage';
import { APPROVED_IMAGE_ASSETS } from '../config/gymConfig';

interface GymInteriorSectionProps {
  business: GymBusinessConfig;
  imageAssets?: ImageAssetsConfig;
  imageAlt?: ImageAltConfig;
  onExploreClick?: () => void;
}

export const GymInteriorSection: React.FC<GymInteriorSectionProps> = ({
  business,
  imageAssets,
  imageAlt,
  onExploreClick,
}) => {
  const interiorUrl = imageAssets?.interior || APPROVED_IMAGE_ASSETS.interior;
  const interiorAlt = imageAlt?.interior || `Modern gym interior at ${business.name}`;

  const keyPoints = [
    { title: 'Olympic lifting platforms', desc: 'Shock-absorbing bamboo & dense rubber drop zones with competition barbells.' },
    { title: 'Dumbbells up to 50kg', desc: 'Solid urethane precision pairs in 2.5kg increments with ergonomic knurled grips.' },
    { title: 'Functional turf lane', desc: 'Heavy sled push tracks, battle rope stations, and plyometric runways.' },
    { title: 'Calibrated plates', desc: 'Color-coded competition bumper plates with thin profiles for maximum bar loading.' },
  ];

  return (
    <section
      id="interior"
      aria-label="Gym Interior Showcase"
      className="relative py-20 sm:py-28 bg-[#07080a] border-b border-[#1a1d25] overflow-hidden"
    >
      {/* Background technical grid */}
      <div className="absolute inset-0 bg-technical-grid opacity-20 pointer-events-none" />
      
      {/* Orange atmospheric ambient glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#ea580c]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 60/40 Editorial Visual Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Large Facility Image (7 cols on lg) */}
          <div className="lg:col-span-7 relative group">
            {/* Subtle backlight framing */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ea580c]/20 to-transparent rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-700 pointer-events-none" />
            
            <div className="relative rounded-2xl overflow-hidden border border-[#232836] bg-[#101217] shadow-2xl aspect-[4/3] sm:aspect-[16/10] w-full">
              <SafeImage
                src={interiorUrl}
                alt={interiorAlt}
                fallbackLabel="IronVault Gym Interior and High Performance Training Facility"
                className="w-full h-full object-cover object-center filter brightness-95 contrast-105 group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              
              {/* Subtle edge vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
              
              {/* Badge overlay on bottom left */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse" />
                <span className="font-heading font-black text-xs text-white uppercase tracking-wider">
                  MAIN TRAINING FLOOR // 12,000 SQ. FT.
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Content (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-[2px] bg-[#ea580c]" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#ea580c]">
                FACILITY ARCHITECTURE
              </span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4 leading-[1.05]">
              BUILT FOR SERIOUS TRAINING.
            </h2>

            <p className="text-base text-[#a1a1aa] leading-relaxed mb-8">
              Every square foot of {business.name} has been custom architected to eliminate clutter and provide high-performance athletes with uncompromising training equipment.
            </p>

            {/* Key Points List */}
            <div className="space-y-4 mb-9">
              {keyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3.5 group/point">
                  <div className="w-6 h-6 rounded-md bg-[#161a24] border border-[#272e3f] flex items-center justify-center shrink-0 mt-0.5 group-hover/point:border-[#ea580c] group-hover/point:bg-[#ea580c]/10 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ea580c]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base uppercase text-white tracking-wide">
                      {point.title}
                    </h3>
                    <p className="text-xs text-[#8e95a5] leading-relaxed mt-0.5">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA: EXPLORE THE FACILITY */}
            <div>
              <button
                type="button"
                id="btn-explore-facility"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#ea580c] hover:bg-[#f97316] text-black font-heading font-black text-sm tracking-widest uppercase transition-all duration-300 shadow-xl shadow-[#ea580c]/15 hover:shadow-[#ea580c]/25 hover:translate-y-[-2px] active:translate-y-0 cursor-pointer w-full sm:w-auto"
              >
                <span>EXPLORE THE FACILITY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

