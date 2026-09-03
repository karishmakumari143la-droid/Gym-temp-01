import React from 'react';
import { Dumbbell, Shield, CheckCircle2, Wind, Sparkles } from 'lucide-react';
import { GymFullConfig } from '../types';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { PageWrapper } from '../components/PageWrapper';
import { Gallery } from '../components/Gallery';
import { FreeTrialCTA } from '../components/FreeTrialCTA';

interface GalleryPageProps {
  config: GymFullConfig;
  onOpenTrialModal: (source?: string, goal?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ config, onOpenTrialModal }) => {
  return (
    <PageWrapper>
      <SEOHead
        title={`Gym Facility & Equipment Photo Gallery | ${config.business.name} — ${config.business.city}`}
        description={`Explore the photo gallery of ${config.business.name} in ${config.business.locality}, ${config.business.city}. Heavy lifting decks, Eleiko barbells, functional turf, dumbbell runs up to 50kg, and high-flow air management.`}
        canonicalPath="/gallery"
        ogImage={config.imageAssets.interior}
      />

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Facility Gallery' }]} />

      {/* Page Header */}
      <section className="bg-[#0b0c0e] pt-14 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#1b1e25]">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-heading font-black text-[#ea580c]">
            ARCHITECTURE & APPARATUS
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight mt-2 mb-6">
            FACILITY & EQUIPMENT SHOWCASE.
          </h1>
          <p className="text-base sm:text-lg text-[#a1a1aa] max-w-3xl leading-relaxed">
            Every square foot of {config.business.name} is zoned for focus and kinetic flow. Inspect our lifting platforms, functional turf lanes, calibrated plates, and spacious training deck.
          </p>
        </div>
      </section>

      {/* Gallery Showcase Grid */}
      <Gallery
        galleryItems={config.gallery}
        business={config.business}
      />

      {/* Equipment Inventory Checklist */}
      <section className="bg-[#0b0c0e] py-16 sm:py-24 border-b border-[#1b1e25] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest font-heading font-black text-[#ea580c]">
              HARDWARE SPECIFICATIONS
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mt-2">
              EQUIPMENT INVENTORY.
            </h2>
            <p className="text-sm text-[#a1a1aa] mt-2">
              We invest in commercial-grade apparatus with calibrated tolerances, knurled grip shafts, and impact-absorbing flooring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-[#111317] border border-[#20242e]">
              <Dumbbell className="w-5 h-5 text-[#ea580c] mb-3" />
              <h3 className="font-heading text-lg font-bold uppercase text-white mb-2">
                Free Weights & Barbells
              </h3>
              <ul className="space-y-1.5 text-xs text-[#a1a1aa]">
                <li>• Calibrated Olympic Bars (20kg & 15kg)</li>
                <li>• Urethane Dumbbell Rack (2.5kg to 50kg)</li>
                <li>• Competition Bumper & Cast Iron Plates</li>
                <li>• EZ-Curl & Safety Squat Specialty Bars</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[#111317] border border-[#20242e]">
              <Shield className="w-5 h-5 text-[#ea580c] mb-3" />
              <h3 className="font-heading text-lg font-bold uppercase text-white mb-2">
                Racks & Platforms
              </h3>
              <ul className="space-y-1.5 text-xs text-[#a1a1aa]">
                <li>• 4 Heavy-Duty 3x3 Power Cages</li>
                <li>• Drop Platforms with High-Density Rubber</li>
                <li>• Adjustable Flat & Incline Benches</li>
                <li>• Dedicated Deadlift Deadening Tiles</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[#111317] border border-[#20242e]">
              <Sparkles className="w-5 h-5 text-[#ea580c] mb-3" />
              <h3 className="font-heading text-lg font-bold uppercase text-white mb-2">
                Functional & Conditioning
              </h3>
              <ul className="space-y-1.5 text-xs text-[#a1a1aa]">
                <li>• 25-Meter Sprint & Sled Push Turf</li>
                <li>• Concept2 SkiErgs, Rowers & Echo Bikes</li>
                <li>• Plyometric Boxes & Medicine Balls</li>
                <li>• Battle Ropes & Suspension Rig</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[#111317] border border-[#20242e]">
              <Wind className="w-5 h-5 text-[#ea580c] mb-3" />
              <h3 className="font-heading text-lg font-bold uppercase text-white mb-2">
                Air & Acoustic Climate
              </h3>
              <ul className="space-y-1.5 text-xs text-[#a1a1aa]">
                <li>• Hospital-Grade HEPA Fresh Air Intake</li>
                <li>• Controlled 21°C Microclimate AC</li>
                <li>• Sound-Dampening Acoustic Wall Panels</li>
                <li>• Sanitized Daily Touch Surfaces</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <FreeTrialCTA
        business={config.business}
        trialMessage={config.whatsapp.trialMessage}
        onClaimFreeTrial={() => onOpenTrialModal('Gallery Page Free Trial')}
      />
    </PageWrapper>
  );
};
