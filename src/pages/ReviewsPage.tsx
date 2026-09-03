import React from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { GymFullConfig } from '../types';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { PageWrapper } from '../components/PageWrapper';
import { Transformations } from '../components/Transformations';
import { Testimonials } from '../components/Testimonials';
import { FreeTrialCTA } from '../components/FreeTrialCTA';

interface ReviewsPageProps {
  config: GymFullConfig;
  onOpenTrialModal: (source?: string, goal?: string) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ config, onOpenTrialModal }) => {
  return (
    <PageWrapper>
      <SEOHead
        title={`Member Reviews & Transformations | ${config.business.name} — ${config.business.city}`}
        description={`Read authentic member testimonials and verified physique transformations at ${config.business.name} in ${config.business.city}. 4.9★ rated training atmosphere with proven fat loss and strength results.`}
        canonicalPath="/reviews"
        ogImage={config.imageAssets.transformation}
      />

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Reviews & Transformations' }]} />

      {/* Header Section */}
      <section className="bg-[#0b0c0e] pt-14 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#1b1e25]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-heading font-black text-[#ea580c]">
                VERIFIED OUTCOMES
              </span>
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight mt-2 mb-4">
                RESULTS EARNED ON THE FLOOR.
              </h1>
              <p className="text-base sm:text-lg text-[#a1a1aa] max-w-2xl leading-relaxed">
                We measure progress in kilograms lifted, visceral fat reduced, and functional independence regained. Read firsthand experiences from our member community.
              </p>
            </div>

            {/* Google Rating Trust Badge */}
            <div className="p-5 rounded-xl bg-[#111317] border border-[#222631] shrink-0 max-w-xs">
              <div className="flex items-center gap-1.5 text-[#eab308] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="text-lg font-heading font-black text-white">
                4.9 / 5.0 RATING
              </div>
              <p className="text-xs text-[#a1a1aa] mt-0.5">
                Based on 280+ verified Google Reviews from {config.business.city} members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Results Section */}
      <Transformations
        items={config.transformations}
        imageAssets={config.imageAssets}
        imageAlt={config.imageAlt}
      />

      {/* Testimonials Component */}
      <Testimonials
        testimonials={config.testimonials}
        business={config.business}
      />

      {/* Methodology & Data Integrity Statement */}
      <section className="bg-[#0b0c0e] py-14 border-b border-[#1b1e25] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto p-6 rounded-xl bg-[#12141a] border border-[#202532] flex items-start gap-4">
          <ShieldCheck className="w-6 h-6 text-[#ea580c] shrink-0 mt-0.5" />
          <div className="text-xs text-[#a1a1aa] leading-relaxed space-y-1">
            <h4 className="font-heading font-bold text-sm text-white uppercase">
              Our Transparency Guarantee
            </h4>
            <p>
              Individual fitness outcomes vary based on adherence, genetic baseline, nutritional compliance, and consistency. We do not promote crash diets or dehydration tricks. All member milestones shown are logged through continuous InBody scans and gym attendance tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <FreeTrialCTA
        business={config.business}
        trialMessage={config.whatsapp.trialMessage}
        onClaimFreeTrial={() => onOpenTrialModal('Reviews Page Free Trial')}
      />
    </PageWrapper>
  );
};
