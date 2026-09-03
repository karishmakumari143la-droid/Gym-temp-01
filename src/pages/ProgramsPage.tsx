import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Dumbbell, Activity, Shield, Zap, UserCheck, Users, Flame } from 'lucide-react';
import { GymFullConfig } from '../types';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { PageWrapper } from '../components/PageWrapper';
import { Programs } from '../components/Programs';
import { FunctionalTrainingSection } from '../components/FunctionalTrainingSection';
import { FreeTrialCTA } from '../components/FreeTrialCTA';

interface ProgramsPageProps {
  config: GymFullConfig;
  onOpenTrialModal: (source?: string, goal?: string) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ config, onOpenTrialModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = [
    { label: 'ALL DISCIPLINES', key: 'ALL' },
    { label: 'STRENGTH & HYPERTROPHY', key: 'STRENGTH' },
    { label: 'FUNCTIONAL & ATHLETIC', key: 'FUNCTIONAL' },
    { label: 'FAT LOSS & CONDITIONING', key: 'CONDITIONING' },
  ];

  const filteredPrograms = config.programs.filter((p) => {
    if (selectedCategory === 'ALL') return true;
    if (selectedCategory === 'STRENGTH') {
      return p.title.toLowerCase().includes('strength') || p.title.toLowerCase().includes('weight');
    }
    if (selectedCategory === 'FUNCTIONAL') {
      return p.title.toLowerCase().includes('functional') || p.title.toLowerCase().includes('group');
    }
    if (selectedCategory === 'CONDITIONING') {
      return p.title.toLowerCase().includes('hiit') || p.title.toLowerCase().includes('weight');
    }
    return true;
  });

  return (
    <PageWrapper>
      <SEOHead
        title={`Training Programs & Disciplines | ${config.business.name} — ${config.business.city}`}
        description={`Explore 6 science-backed training programs at ${config.business.name} in ${config.business.city}: Strength Training, Functional Conditioning, HIIT, Weight Management, and 1-on-1 Personal Training.`}
        canonicalPath="/programs"
        ogImage={config.imageAssets.strengthTraining}
      />

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Programs' }]} />

      {/* Header Section */}
      <section className="bg-[#0b0c0e] pt-14 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#1b1e25]">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-heading font-black text-[#ea580c]">
            DISCIPLINE OVER INTENTION
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight mt-2 mb-6">
            PROGRAMS BUILT FOR RAW ADAPTATION.
          </h1>
          <p className="text-base sm:text-lg text-[#a1a1aa] max-w-3xl leading-relaxed">
            Every workout at {config.business.name} follows a documented training stimulus. Whether your goal is absolute strength, metabolic conditioning, or athletic agility, our coaches guide your reps, sets, and tempo.
          </p>

          {/* Interactive Filter Chips */}
          <div className="flex flex-wrap gap-2.5 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-lg text-xs font-heading font-black tracking-wider uppercase transition-all cursor-pointer ${
                  selectedCategory === cat.key
                    ? 'bg-[#ea580c] text-black shadow-md shadow-[#ea580c]/20'
                    : 'bg-[#15171e] text-[#a1a1aa] hover:text-white border border-[#262a34]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Cards Grid */}
      <Programs
        programs={filteredPrograms}
        onSelectProgram={(title) => onOpenTrialModal(`Program: ${title}`, title)}
      />

      {/* Dedicated Functional Training Deep Dive */}
      <FunctionalTrainingSection
        business={config.business}
        imageAssets={config.imageAssets}
        imageAlt={config.imageAlt}
        onExploreProgram={() => onOpenTrialModal('Functional Athletic Conditioning')}
      />

      {/* Program Guidance & Next Steps */}
      <section className="bg-[#0e1014] py-16 border-b border-[#1b1e25] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#111317] border border-[#20242e] rounded-xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-heading font-black text-[#ea580c] uppercase tracking-wider">
                PROGRAM SELECTION ADVICE
              </span>
              <h3 className="font-heading text-2xl sm:text-4xl font-bold uppercase text-white">
                NOT SURE WHICH PROGRAM FITS YOUR GOALS?
              </h3>
              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                Take a complimentary movement screening with our head coach. We analyze your mobility, athletic history, and injury profile to recommend the exact training split for your body.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 shrink-0 w-full lg:w-auto">
              <button
                onClick={() => onOpenTrialModal('Program Guidance Assessment', 'Personal Training')}
                className="px-6 py-3.5 rounded-lg bg-[#ea580c] hover:bg-[#f97316] text-black font-heading font-black text-xs tracking-wider uppercase transition-all shadow-md text-center cursor-pointer"
              >
                BOOK FREE MOVEMENT SCREENING
              </button>
              <Link
                to="/membership"
                className="px-6 py-3.5 rounded-lg bg-[#181b23] hover:bg-[#222733] border border-[#2b3140] text-white text-xs font-heading font-bold tracking-wider uppercase transition-colors text-center"
              >
                SEE MEMBERSHIP TIERS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial Conversion */}
      <FreeTrialCTA
        business={config.business}
        trialMessage={config.whatsapp.trialMessage}
        onClaimFreeTrial={() => onOpenTrialModal('Programs Page Free Trial')}
      />
    </PageWrapper>
  );
};
