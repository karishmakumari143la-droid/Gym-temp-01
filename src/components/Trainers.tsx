import React from 'react';
import { Award, Clock, ArrowRight } from 'lucide-react';
import { TrainerItem } from '../types';
import { SafeImage } from './SafeImage';

interface TrainersProps {
  trainers: TrainerItem[];
  onBookSession: (trainerName: string) => void;
}

export const Trainers: React.FC<TrainersProps> = ({ trainers, onBookSession }) => {
  return (
    <section
      id="trainers"
      aria-label="Certified Coaches and Trainers"
      className="bg-[#0b0c0e] py-20 sm:py-28 border-b border-[#1b1e25] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-heading font-black text-[#ea580c]">
              TECHNICAL MASTERY & MENTORSHIP
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mt-2">
              MEET YOUR COACHES.
            </h2>
          </div>
          <p className="text-[#a1a1aa] max-w-md text-base leading-relaxed">
            Personalized guidance from experienced trainers who focus on lifting mechanics, injury prevention, and sustainable progression.
          </p>
        </div>

        {/* Primary 2-Trainer Grid as Specified */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-[#111317] border border-[#20242e] rounded-xl overflow-hidden flex flex-col justify-between group hover:border-[#ea580c]/50 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Trainer Photo */}
                <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-[#16181e]">
                  <SafeImage
                    src={trainer.imageUrl}
                    alt={`${trainer.name} - ${trainer.specialization}`}
                    fallbackLabel={trainer.name}
                    categoryBadge="Certified Coach"
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-[#111317]/20 to-transparent opacity-95" />
                  
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-xs font-semibold text-[#ea580c] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{trainer.experience}</span>
                  </div>
                </div>

                {/* Trainer Info */}
                <div className="p-6 sm:p-8">
                  <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white tracking-wide">
                    {trainer.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#ea580c] mt-1 mb-4">
                    {trainer.specialization}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-[#d4d4d8] bg-[#181b22] px-3.5 py-2 rounded-lg border border-[#262b36] mb-4">
                    <Award className="w-4 h-4 text-[#ea580c] shrink-0" />
                    <span className="truncate">{trainer.certification}</span>
                  </div>

                  <p className="text-sm text-[#a1a1aa] leading-relaxed">
                    {trainer.shortBio}
                  </p>
                </div>
              </div>

              {/* Book a session button */}
              <div className="p-6 sm:p-8 pt-0">
                <button
                  id={`trainer-book-btn-${trainer.id}`}
                  onClick={() => onBookSession(trainer.name)}
                  className="w-full py-3.5 px-5 rounded-lg bg-[#181a20] hover:bg-[#ea580c] text-white hover:text-black font-heading font-black text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 border border-[#292d38] hover:border-[#ea580c] active:scale-98 cursor-pointer"
                >
                  <span>BOOK A SESSION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
