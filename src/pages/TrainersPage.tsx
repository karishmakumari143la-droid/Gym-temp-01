import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Calendar, Target, Activity } from 'lucide-react';
import { GymFullConfig } from '../types';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { PageWrapper } from '../components/PageWrapper';
import { Trainers } from '../components/Trainers';
import { FreeTrialCTA } from '../components/FreeTrialCTA';

interface TrainersPageProps {
  config: GymFullConfig;
  onOpenTrialModal: (source?: string, goal?: string) => void;
}

export const TrainersPage: React.FC<TrainersPageProps> = ({ config, onOpenTrialModal }) => {
  return (
    <PageWrapper>
      <SEOHead
        title={`Certified Personal Trainers & Coaches | ${config.business.name} — ${config.business.city}`}
        description={`Meet certified coaches at ${config.business.name} in ${config.business.city}. CSCS, K11, and ACE certified experts specializing in strength training, biomechanics, functional agility, and fat loss.`}
        canonicalPath="/trainers"
        ogImage={config.imageAssets.maleTrainer}
      />

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Our Coaches' }]} />

      {/* Page Header */}
      <section className="bg-[#0b0c0e] pt-14 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#1b1e25]">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-heading font-black text-[#ea580c]">
            SCIENCE OVER TRENDS
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight mt-2 mb-6">
            COACHES COMMITTED TO YOUR TRAJECTORY.
          </h1>
          <p className="text-base sm:text-lg text-[#a1a1aa] max-w-3xl leading-relaxed">
            We don't employ influencers or rep counters. Every coach at {config.business.name} holds internationally recognized certifications, undergoes monthly continuing education, and trains with the same rigor they expect from members.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-[#1c1f26]">
            <div>
              <span className="font-heading text-2xl sm:text-3xl font-black text-[#ea580c]">100%</span>
              <p className="text-xs text-[#a1a1aa] uppercase mt-1">Certified Coaches</p>
            </div>
            <div>
              <span className="font-heading text-2xl sm:text-3xl font-black text-white">8+ Yrs</span>
              <p className="text-xs text-[#a1a1aa] uppercase mt-1">Average Experience</p>
            </div>
            <div>
              <span className="font-heading text-2xl sm:text-3xl font-black text-[#ea580c]">500+</span>
              <p className="text-xs text-[#a1a1aa] uppercase mt-1">Transformations Supervised</p>
            </div>
            <div>
              <span className="font-heading text-2xl sm:text-3xl font-black text-white">Zero</span>
              <p className="text-xs text-[#a1a1aa] uppercase mt-1">Generic Cookie-Cutter Routines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Profiles Component */}
      <Trainers
        trainers={config.trainers}
        onBookSession={(trainer) => onOpenTrialModal(`Coach Consultation: ${trainer}`, 'Personal Training')}
      />

      {/* The 4-Step Personal Training Framework */}
      <section className="bg-[#0e1014] py-16 sm:py-24 border-b border-[#1b1e25] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest font-heading font-black text-[#ea580c]">
              DELIBERATE PROGRESSION
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mt-2">
              HOW 1-ON-1 COACHING WORKS.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#111317] border border-[#20242e] p-6 rounded-xl relative">
              <span className="text-3xl font-heading font-black text-[#2d323e]">01</span>
              <h3 className="font-heading text-lg font-bold uppercase text-white mt-2 mb-2">
                Biometric Audit
              </h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                InBody scan to benchmark visceral fat, skeletal muscle mass, and segmental symmetry.
              </p>
            </div>

            <div className="bg-[#111317] border border-[#20242e] p-6 rounded-xl relative">
              <span className="text-3xl font-heading font-black text-[#ea580c]">02</span>
              <h3 className="font-heading text-lg font-bold uppercase text-white mt-2 mb-2">
                Movement Screening
              </h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                Testing ankle dorsiflexion, hip rotational mobility, thoracic spine mobility, and core stability.
              </p>
            </div>

            <div className="bg-[#111317] border border-[#20242e] p-6 rounded-xl relative">
              <span className="text-3xl font-heading font-black text-[#2d323e]">03</span>
              <h3 className="font-heading text-lg font-bold uppercase text-white mt-2 mb-2">
                Periodized Programming
              </h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                A custom 12-week mesocycle dictating exercise selection, rep ranges, RPE targets, and deload weeks.
              </p>
            </div>

            <div className="bg-[#111317] border border-[#20242e] p-6 rounded-xl relative">
              <span className="text-3xl font-heading font-black text-[#22c55e]">04</span>
              <h3 className="font-heading text-lg font-bold uppercase text-white mt-2 mb-2">
                Nutrition & Accountability
              </h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                Caloric targets, protein allocation, weekly check-ins, and progressive overload adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <FreeTrialCTA
        business={config.business}
        trialMessage={config.whatsapp.trialMessage}
        onClaimFreeTrial={() => onOpenTrialModal('Trainers Page Free Trial')}
      />
    </PageWrapper>
  );
};
