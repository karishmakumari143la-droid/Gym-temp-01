import React, { useState } from 'react';
import { GalleryItem, GymBusinessConfig } from '../types';
import { SafeImage } from './SafeImage';

interface GalleryProps {
  galleryItems: GalleryItem[];
  business: GymBusinessConfig;
}

export const Gallery: React.FC<GalleryProps> = ({ galleryItems, business }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Gym Floor',
    'Strength Zone',
    'Cardio',
    'Functional Training',
    'Trainers',
    'Members',
  ];

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="gallery"
      aria-label="Gym Facility Gallery"
      className="bg-[#0e1014] py-20 sm:py-28 border-b border-[#1b1e25] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#ea580c]">
              Virtual Facility Tour
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mt-2">
              INSIDE {business.name}
            </h2>
          </div>
          <p className="text-[#a1a1aa] max-w-md text-base leading-relaxed">
            Take a look inside our high-performance facility, acoustically treated strength deck, and dedicated coaching zones.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#ea580c] text-black'
                  : 'bg-[#14161b] text-[#a1a1aa] hover:text-white border border-[#222731]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#111317] border border-[#20242e] rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#ea580c]/50 transition-all duration-300"
            >
              {/* Media Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#16181e]">
                <SafeImage
                  src={item.imageUrl}
                  alt={item.alt}
                  fallbackLabel={item.title}
                  categoryBadge={item.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-[#ea580c] border border-white/10">
                  {item.category}
                </div>
              </div>

              {/* Caption & Metadata */}
              <div className="p-5">
                <h4 className="font-heading text-lg font-bold uppercase text-white tracking-wide mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-[#a1a1aa] leading-relaxed line-clamp-2">
                  {item.caption}
                </p>
                <div className="mt-3 pt-3 border-t border-[#1e222b] flex items-center justify-between text-[10px] text-[#71717a] font-mono">
                  <span>Category: {item.category}</span>
                  <span>{business.locality}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
