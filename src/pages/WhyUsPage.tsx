import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck, Dumbbell, Users, Target, Activity } from 'lucide-react';
import { GymFullConfig } from '../types';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { PageWrapper } from '../components/PageWrapper';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { GymInteriorSection } from '../components/GymInteriorSection';
import { Amenities } from '../components/Amenities';
import { FreeTrialCTA } from '../components/FreeTrialCTA';

interface WhyUsPageProps {
  config: GymFullConfig;
  onOpenTrialModal: (source?: string, goal?: string) => void;
}

export const WhyUsPage: React.FC<WhyUsPageProps> = ({ config, onOpenTrialModal }) => {
  return (
    <PageWrapper>
      <SEOHead
        title={`Why Choose Us | ${config.business.name} — ${config.business.city}`}
        description={`Learn why athletes and fitness enthusiasts choose ${config.business.name} in ${config.business.city}. Biomechanical precision, certified coaching, premium machinery, and an uncompromising atmosphere.`}
        canonicalPath="/why-us"
        ogImage={config.imageAssets.interior}
      />

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Why Choose Us' }]} />

      {/* Page Header */}
      <section className="bg-[#0b0c0e] pt-14 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#1b1e25]">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-heading font-black text-[#ea580c]">
            OUR STANDARDS & PHILOSOPHY
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight mt-2 mb-6">
            ENGINEERED FOR DELIBERATE RESULTS.
          </h1>
          <p className="text-base sm:text-lg text-[#a1a1aa] max-w-3xl leading-relaxed">
            Most commercial gyms are designed for crowds and low engagement. {config.business.name} was built with a single objective: creating a focused training environment with world-class biomechanics, certified coaches on the floor, and an atmosphere that demands your best effort.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-[#1c1f26]">
            <div className="p-4 rounded bg-[#111317] border border-[#1f232d]">
              <span className="text-2xl sm:text-3xl font-heading font-black text-white">100%</span>
              <p className="text-xs uppercase tracking-wider text-[#a1a1aa] mt-1">Biomechanical Load Alignment</p>
            </div>
            <div className="p-4 rounded bg-[#111317] border border-[#1f232d]">
              <span className="text-2xl sm:text-3xl font-heading font-black text-[#ea580c]">4:1</span>
              <p className="text-xs uppercase tracking-wider text-[#a1a1aa] mt-1">Member-to-Trainer Ratio</p>
            </div>
            <div className="p-4 rounded bg-[#111317] border border-[#1f232d]">
              <span className="text-2xl sm:text-3xl font-heading font-black text-white">ZERO</span>
              <p className="text-xs uppercase tracking-wider text-[#a1a1aa] mt-1">Crowding at Peak Hours</p>
            </div>
            <div className="p-4 rounded bg-[#111317] border border-[#1f232d]">
              <span className="text-2xl sm:text-3xl font-heading font-black text-[#22c55e]">3500+</span>
              <p className="text-xs uppercase tracking-wider text-[#a1a1aa] mt-1">Sq. Ft. Dedicated Floor</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <WhyChooseUs items={config.whyChooseUs} />

      {/* Deep-Dive Floor Methodology */}
      <section className="bg-[#0b0c0e] py-16 sm:py-24 border-b border-[#1b1e25] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest font-heading font-black text-[#ea580c]">
              THE IRONVAULT METHOD
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mt-2">
              HOW WE ELIMINATE GUESSWORK.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111317] border border-[#20242e] p-7 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-[#ea580c]/10 border border-[#ea580c]/30 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#ea580c]" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-white mb-3">
                1. Movement & Posture Screening
              </h3>
              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                Before lifting heavy weight, every member goes through joint mobility and kinetic chain assessment. We identify muscular imbalances to prevent injury from day one.
              </p>
            </div>

            <div className="bg-[#111317] border border-[#20242e] p-7 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-[#ea580c]/10 border border-[#ea580c]/30 flex items-center justify-center mb-6">
                <Dumbbell className="w-6 h-6 text-[#ea580c]" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-white mb-3">
                2. Progressive Overload Tracking
              </h3>
              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                We log training volume, rep ranges, and rest intervals systematically. You leave every session knowing whether you moved heavier weight or improved work capacity.
              </p>
            </div>

            <div className="bg-[#111317] border border-[#20242e] p-7 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-[#ea580c]/10 border border-[#ea580c]/30 flex items-center justify-center mb-6">
                <Activity className="w-6 h-6 text-[#ea580c]" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-white mb-3">
                3. Recovery & Tissue Longevity
              </h3>
              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                Muscles grow outside the gym. Our coaches guide recovery protocols, sleep optimization, and structured deload phases to guarantee sustainable long-term athletic health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gym Interior Architectural Section */}
      <GymInteriorSection
        business={config.business}
        imageAssets={config.imageAssets}
        imageAlt={config.imageAlt}
        onExploreClick={() => onOpenTrialModal('Why Us Interior Tour')}
      />

      {/* Amenities Section */}
      <Amenities amenities={config.amenities} />

      {/* Internal Navigation Links Bar */}
      <section className="bg-[#0e1014] py-14 border-b border-[#1b1e25] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-xl bg-[#13151b] border border-[#232733]">
          <div>
            <span className="text-xs font-heading font-black text-[#ea580c] uppercase tracking-wider">NEXT STEP</span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white mt-1">
              EXPLORE OUR TRAINING DISCIPLINES OR MEMBERSHIPS
            </h3>
            <p className="text-xs sm:text-sm text-[#a1a1aa] mt-1">
              Select a structured training discipline or find the membership plan that suits your schedule.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/programs"
              className="px-5 py-3 rounded bg-[#1a1e27] hover:bg-[#252a37] text-white border border-[#2e3544] text-xs font-heading font-black uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <span>EXPLORE PROGRAMS</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#ea580c]" />
            </Link>
            <Link
              to="/membership"
              className="px-5 py-3 rounded bg-[#ea580c] hover:bg-[#f97316] text-black text-xs font-heading font-black uppercase tracking-wider transition-colors"
            >
              MEMBERSHIP PLANS
            </Link>
          </div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <FreeTrialCTA
        business={config.business}
        trialMessage={config.whatsapp.trialMessage}
        onClaimFreeTrial={() => onOpenTrialModal('Why Us Page Trial')}
      />
    </PageWrapper>
  );
};
