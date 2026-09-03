import React from 'react';
import { ArrowUpRight, Flame, Shield, UserCheck, Activity } from 'lucide-react';
import { TrainingGoalItem } from '../types';
import { APPROVED_IMAGE_ASSETS } from '../config/gymConfig';

interface TrainingGoalsProps {
  goals: TrainingGoalItem[];
  onSelectGoal: (goalTitle: string) => void;
}

export const TrainingGoals: React.FC<TrainingGoalsProps> = ({ goals, onSelectGoal }) => {
  // Centralized fallback image resolver for training goals
  const getGoalImageUrl = (goal: TrainingGoalItem) => {
    if (goal.imageUrl) return goal.imageUrl;
    const num = goal.number;
    const title = goal.title.toUpperCase();
    if (num === '01' || title.includes('MUSCLE') || title.includes('STRENGTH')) {
      return APPROVED_IMAGE_ASSETS.strengthTraining;
    }
    if (num === '02' || title.includes('FUNCTIONAL')) {
      return APPROVED_IMAGE_ASSETS.functionalTraining;
    }
    if (num === '03' || title.includes('FAT LOSS') || title.includes('CONDITIONING')) {
      return APPROVED_IMAGE_ASSETS.transformation;
    }
    if (num === '04' || title.includes('PERSONAL') || title.includes('COACH')) {
      return APPROVED_IMAGE_ASSETS.maleTrainer;
    }
    return undefined;
  };

  // Specific responsive framing to ensure trainers & transformations aren't cropped awkwardly
  const getGoalObjectPosition = (goal: TrainingGoalItem) => {
    const num = goal.number;
    const title = goal.title.toUpperCase();
    if (num === '04' || title.includes('PERSONAL') || title.includes('COACH')) {
      return 'object-[center_20%]'; // Keep trainer's face and upper torso centered in tall card
    }
    return 'object-center';
  };

  // Helper for goal icons in fallback CSS poster designs
  const getGoalIcon = (title: string) => {
    const t = title.toUpperCase();
    if (t.includes('FAT LOSS') || t.includes('CARDIO')) {
      return <Flame className="w-8 h-8 text-[#ea580c]" />;
    }
    if (t.includes('PERSONAL') || t.includes('COACH')) {
      return <UserCheck className="w-8 h-8 text-[#ea580c]" />;
    }
    if (t.includes('FUNCTIONAL')) {
      return <Activity className="w-8 h-8 text-[#ea580c]" />;
    }
    return <Shield className="w-8 h-8 text-[#ea580c]" />;
  };

  return (
    <section
      id="training-goals"
      aria-label="Training Goals"
      className="relative bg-[#07080a] py-20 sm:py-28 border-b border-[#1a1d25] px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background technical grid */}
      <div className="absolute inset-0 bg-technical-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-[2px] bg-[#ea580c]" />
            <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#ea580c]">
              PURPOSE-DRIVEN PATHWAYS
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
            TRAIN FOR YOUR GOAL.
          </h2>
          <p className="text-[#a1a1aa] text-base mt-3 max-w-xl leading-relaxed">
            Choose your core focus. Every discipline is supported by structured programming, biomechanical coaching, and measurable progression.
          </p>
        </div>

        {/* 4 Poster-Style Cards in Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal) => {
            const imageUrl = getGoalImageUrl(goal);
            const hasImage = Boolean(imageUrl);

            return (
              <div
                key={goal.id}
                className="group relative h-[440px] sm:h-[460px] rounded-xl overflow-hidden bg-[#0e1015] border border-[#212633] flex flex-col justify-between p-7 transition-all duration-500 hover:border-[#ea580c]/80 hover:shadow-2xl hover:shadow-[#ea580c]/10 cursor-pointer"
                onClick={() => onSelectGoal(goal.title)}
              >
                {/* Background Layer: Approved Image */}
                {hasImage ? (
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={goal.title}
                      loading="lazy"
                      className={`w-full h-full object-cover ${getGoalObjectPosition(goal)} filter brightness-[0.88] contrast-105 group-hover:scale-[1.03] transition-transform duration-500 ease-out`}
                    />
                    {/* Layered dark overlay so typography remains crisp while keeping image clearly visible */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-[#07080a]/65 to-black/30 group-hover:opacity-85 transition-opacity duration-500 z-10" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(234,88,12,0.12)_0%,transparent_60%)] z-10 pointer-events-none" />
                  </div>
                ) : (
                  <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#131722] via-[#0d1016] to-[#07080a] overflow-hidden">
                    {/* Architectural geometric angled lines and subtle grid */}
                    <div className="absolute inset-0 bg-technical-grid opacity-30" />
                    <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#ea580c]/10 blur-[50px]" />
                    <div className="absolute top-1/4 -right-6 w-32 h-[1px] bg-gradient-to-r from-transparent to-[#ea580c]/40 rotate-45" />
                    <div className="absolute top-1/3 -right-2 w-32 h-[1px] bg-gradient-to-r from-transparent to-[#ea580c]/20 rotate-45" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-[#07080a]/70 to-transparent z-10" />
                  </div>
                )}

                {/* Poster Top Bar: Large Number & Dynamic Arrow */}
                <div className="relative z-20 flex items-center justify-between">
                  <span className="font-heading font-black text-2xl text-white tracking-wider">
                    {goal.number}
                  </span>
                  
                  <div className="w-10 h-10 rounded-full bg-[#12141a]/80 border border-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#ea580c] group-hover:text-black group-hover:border-[#ea580c] transition-all duration-300 shadow-md">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>

                {/* Poster Center Visual for CSS Cards (fallback only) */}
                {!hasImage && (
                  <div className="relative z-20 flex items-center justify-center my-auto">
                    <div className="w-16 h-16 rounded-2xl bg-[#171b26]/90 border border-[#2d3445] flex items-center justify-center shadow-inner group-hover:border-[#ea580c]/50 group-hover:scale-105 transition-all duration-300">
                      {getGoalIcon(goal.title)}
                    </div>
                  </div>
                )}

                {/* Poster Bottom Content: Title & Short Description */}
                <div className="relative z-20">
                  <div className="w-8 h-[2px] bg-[#ea580c] mb-3 group-hover:w-14 transition-all duration-400" />
                  <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white tracking-wide mb-2 leading-none">
                    {goal.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#d4d4d8] leading-relaxed line-clamp-3">
                    {goal.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

