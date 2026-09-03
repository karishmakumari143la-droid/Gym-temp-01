import React from 'react';
import {
  Dumbbell,
  Wind,
  Lock,
  Car,
  UserCheck,
  Flame,
  HeartPulse,
  Wifi,
  CheckCircle,
} from 'lucide-react';
import { AmenityItem } from '../types';

interface AmenitiesProps {
  amenities: AmenityItem[];
}

export const Amenities: React.FC<AmenitiesProps> = ({ amenities }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5 text-[#ea580c]" />;
      case 'Wind':
        return <Wind className="w-5 h-5 text-[#ea580c]" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-[#ea580c]" />;
      case 'Car':
        return <Car className="w-5 h-5 text-[#ea580c]" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-[#ea580c]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#ea580c]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-[#ea580c]" />;
      case 'Wifi':
        return <Wifi className="w-5 h-5 text-[#ea580c]" />;
      default:
        return <CheckCircle className="w-5 h-5 text-[#ea580c]" />;
    }
  };

  return (
    <section
      id="amenities"
      aria-label="Gym Amenities and Facilities"
      className="bg-[#0b0c0e] py-20 sm:py-28 border-b border-[#1b1e25] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#ea580c]">
              Floor Standards & Comfort
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mt-2">
              PREMIUM AMENITIES.
            </h2>
          </div>
          <p className="text-[#a1a1aa] max-w-md text-base leading-relaxed">
            Every convenience has been considered so you can focus entirely on your training sessions without friction.
          </p>
        </div>

        {/* 8 Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-[#111317] border border-[#20242e] rounded-sm flex flex-col justify-between hover:border-[#ea580c]/50 transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded bg-[#181b22] border border-[#262b36] flex items-center justify-center mb-4">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="font-heading text-xl font-bold uppercase text-white tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1b1f28] flex items-center gap-1.5 text-[11px] text-[#ea580c] font-semibold">
                <span>Verified Available On-Site</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
