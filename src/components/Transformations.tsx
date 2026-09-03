import React from 'react';
import { TrendingUp, Info, ShieldCheck, Award } from 'lucide-react';
import { TransformationItem, ImageAssetsConfig, ImageAltConfig } from '../types';
import { SafeImage } from './SafeImage';
import { APPROVED_IMAGE_ASSETS } from '../config/gymConfig';

interface TransformationsProps {
  items: TransformationItem[];
  imageAssets?: ImageAssetsConfig;
  imageAlt?: ImageAltConfig;
}

export const Transformations: React.FC<TransformationsProps> = ({
  items,
  imageAssets,
  imageAlt,
}) => {
  const transUrl = imageAssets?.transformation || APPROVED_IMAGE_ASSETS.transformation;
  const transAlt = imageAlt?.transformation || 'Member transformation result at IronVault Fitness';

  return (
    <section
      id="transformations"
      aria-label="Member Progress and Transformations"
      className="bg-[#0b0c0e] py-20 sm:py-28 border-b border-[#1b1e25] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-heading font-black text-[#ea580c]">
              MEASURABLE MILESTONES
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mt-2">
              REAL PEOPLE. <br className="sm:hidden" />
              <span className="text-[#ea580c]">REAL PROGRESS.</span>
            </h2>
          </div>
          <div className="bg-[#14161b] border border-[#222731] p-4 rounded-xl max-w-md flex items-start gap-3 text-xs text-[#a1a1aa]">
            <Info className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">Editorial Notice:</strong> Do not fabricate health or body-transformation claims. Replace placeholder demo results with verified client data and member consent.
            </span>
          </div>
        </div>

        {/* Featured Transformation Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Main Transformation Visual Feature */}
          <div className="lg:col-span-5 bg-[#111317] border border-[#232733] rounded-2xl overflow-hidden flex flex-col justify-between shadow-2xl">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-[#16181f]">
              <SafeImage
                src={transUrl}
                alt={transAlt}
                fallbackLabel="Verified Member Progress Documentation"
                className="w-full h-full object-cover object-top filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-transparent pointer-events-none" />
              
              {/* Badge: DEMO TRANSFORMATION / SAMPLE RESULT */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#ea580c]/40 text-xs font-heading font-black text-[#ea580c] uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>DEMO TRANSFORMATION • SAMPLE RESULT</span>
              </div>
            </div>

            <div className="p-6 sm:p-7">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-[#ea580c] uppercase px-2.5 py-1 rounded bg-[#ea580c]/10 border border-[#ea580c]/25">
                  12-WEEK MESOCYCLE
                </span>
                <span className="text-xs text-[#71717a] font-medium">Verified InBody Track</span>
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase text-white mt-2">
                Structured Hypertrophy & Fat Loss
              </h3>
              <p className="text-xs sm:text-sm text-[#a1a1aa] mt-2 leading-relaxed">
                Periodized strength routine, caloric deficit guidance, and progressive overload adherence documented over 90 days.
              </p>
            </div>
          </div>

          {/* Member Result Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-[#111317] border border-[#20242e] rounded-xl p-6 flex flex-col justify-between hover:border-[#ea580c]/50 transition-all duration-300 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded bg-[#1c1f26] text-[#ea580c] border border-[#282d38]">
                      {item.duration}
                    </span>
                    <TrendingUp className="w-4 h-4 text-[#ea580c]" />
                  </div>

                  <h4 className="font-heading text-xl font-bold uppercase text-white tracking-wide mb-1">
                    {item.memberName}
                  </h4>
                  <p className="text-xs font-semibold text-[#a1a1aa] mb-4">
                    Goal: <span className="text-[#d4d4d8]">{item.goal}</span>
                  </p>

                  {/* Verified outcome box */}
                  <div className="p-3.5 rounded-lg bg-[#16181f] border border-[#252a35] mb-4">
                    <span className="text-[10px] uppercase font-black text-[#ea580c] tracking-widest block mb-1">
                      VERIFIED OUTCOME
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-white">
                      {item.result}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#a1a1aa] italic leading-relaxed">
                    "{item.testimonial}"
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#1b1e25] text-[11px] text-[#71717a] flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[#ea580c]">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified Member
                  </span>
                  <span className="text-[10px] text-[#71717a]">Member Result</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
