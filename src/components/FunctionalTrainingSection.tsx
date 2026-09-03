import React from 'react';
import { ArrowRight, Flame, Target, ShieldCheck, Zap } from 'lucide-react';
import { GymBusinessConfig, ImageAssetsConfig, ImageAltConfig } from '../types';
import { SafeImage } from './SafeImage';
import { APPROVED_IMAGE_ASSETS } from '../config/gymConfig';

interface FunctionalTrainingSectionProps {
  business: GymBusinessConfig;
  imageAssets?: ImageAssetsConfig;
  imageAlt?: ImageAltConfig;
  onExploreProgram: () => void;
}

export const FunctionalTrainingSection: React.FC<FunctionalTrainingSectionProps> = ({
  business,
  imageAssets,
  imageAlt,
  onExploreProgram,
}) => {
  const functionalUrl = imageAssets?.functionalTraining || APPROVED_IMAGE_ASSETS.functionalTraining;
  const functionalAlt = imageAlt?.functionalTraining || `Functional training session at ${business.name}`;

  return (
    <section
      id="functional-training"
      aria-label="Functional Training Feature"
      className="py-20 sm:py-28 bg-[#0a0b0e] border-b border-[#1b1e25] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#262b37] bg-[#14161e] shadow-2xl aspect-[4/3] sm:aspect-[16/11]">
              <SafeImage
                src={functionalUrl}
                alt={functionalAlt}
                fallbackLabel="Functional Movement Session at IronVault"
                className="w-full h-full object-cover object-center filter brightness-95 contrast-105 hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Badge overlay on bottom corner */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-[#111319]/90 border border-[#2b303d] backdrop-blur-md px-4 py-2.5 rounded-lg flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#ea580c]/15 flex items-center justify-center shrink-0">
                  <Flame className="w-4 h-4 text-[#ea580c]" />
                </div>
                <div>
                  <div className="text-xs font-heading font-black text-white uppercase tracking-wider">TURF & AGILITY TRACK</div>
                  <div className="text-[11px] text-[#a1a1aa]">Sled pushes, kettlebells & mobility circuits</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Value Proposition */}
          <div className="lg:col-span-6">
            <span className="text-xs font-heading font-black text-[#ea580c] uppercase tracking-widest block mb-3">
              ATHLETIC PERFORMANCE
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[0.96] mb-6">
              FUNCTIONAL TRAINING. <br />
              <span className="text-[#ea580c]">REAL RESULTS.</span>
            </h2>
            <p className="text-lg text-[#d4d4d8] font-normal leading-relaxed mb-8">
              Improve strength, movement, conditioning and everyday performance through purposeful functional training.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="p-4 rounded-xl bg-[#12141a] border border-[#222631]">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-[#ea580c]" />
                  <span className="font-heading font-bold text-sm text-white uppercase">Movement Quality</span>
                </div>
                <p className="text-xs text-[#a1a1aa] leading-relaxed">
                  Enhances joint mobility, structural balance, and resilience against everyday postural strain.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#12141a] border border-[#222631]">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-[#ea580c]" />
                  <span className="font-heading font-bold text-sm text-white uppercase">Metabolic Conditioning</span>
                </div>
                <p className="text-xs text-[#a1a1aa] leading-relaxed">
                  High-output intervals combining battle ropes, sled drives, and plyometric boxes for peak VO2 max.
                </p>
              </div>
            </div>

            {/* Call To Action */}
            <button
              id="functional-explore-program-btn"
              onClick={onExploreProgram}
              className="px-8 py-4 rounded font-heading font-black text-base tracking-wider uppercase bg-[#ea580c] hover:bg-[#f97316] text-black transition-all duration-200 shadow-xl shadow-[#ea580c]/15 inline-flex items-center gap-2 active:scale-98 cursor-pointer"
            >
              <span>EXPLORE PROGRAM</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
