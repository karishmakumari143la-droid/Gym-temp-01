import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, ArrowRight, MapPin, ChevronDown, Activity } from 'lucide-react';
import { GymBusinessConfig, ImageAssetsConfig, ImageAltConfig } from '../types';
import { SafeImage } from './SafeImage';
import { APPROVED_IMAGE_ASSETS } from '../config/gymConfig';

interface HeroProps {
  business: GymBusinessConfig;
  imageAssets?: ImageAssetsConfig;
  imageAlt?: ImageAltConfig;
  onStartFreeTrial: () => void;
  onViewMemberships: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  business,
  imageAssets,
  imageAlt,
  onStartFreeTrial,
  onViewMemberships,
}) => {
  const heroUrl = imageAssets?.hero || APPROVED_IMAGE_ASSETS.hero;
  const heroAlt = imageAlt?.hero || `${business.name} premium fitness centre in ${business.city}`;

  // Subtle desktop parallax (clamped & smooth, disabled on mobile)
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion or is on mobile
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches || window.innerWidth < 1024) return;

    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Very small subtle offset between -10px and +10px
      const targetX = ((clientX / innerWidth) - 0.5) * 16;
      const targetY = ((clientY / innerHeight) - 0.5) * 16;

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setParallaxOffset({ x: targetX, y: targetY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-[92vh] sm:min-h-[94vh] flex items-center bg-[#07080a] overflow-hidden border-b border-[#1b1e25]"
    >
      {/* =========================================================================
          LAYERED VISUAL BACKGROUND
          ========================================================================= */}
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: `translate3d(${parallaxOffset.x * 0.5}px, ${parallaxOffset.y * 0.5}px, 0) scale(1.05)`,
        }}
      >
        {/* Layer 1: Full-Bleed Approved Hero Gym Photograph */}
        <SafeImage
          src={heroUrl}
          alt={heroAlt}
          fallbackLabel="IronVault Elite Training Deck"
          priority={true}
          className="w-full h-full object-cover object-[center_35%] filter brightness-90 contrast-[1.08]"
        />

        {/* Layer 2: Deep subtle dark gradient for base contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080a] via-[#07080a]/85 sm:via-[#07080a]/75 to-[#07080a]/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-black/65 z-10" />

        {/* Layer 3: Black-to-transparent radial gradient behind typography */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_45%,rgba(7,8,10,0.92)_0%,rgba(7,8,10,0.6)_45%,transparent_75%)] z-10" />

        {/* Layer 4: Subtle orange atmospheric glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_35%_25%,rgba(234,88,12,0.14)_0%,transparent_55%)] animate-orange-pulse z-10" />

        {/* Layer 5: Film grain / noise texture */}
        <div className="absolute inset-0 bg-film-grain z-20 pointer-events-none" />

        {/* Layer 6: Extremely subtle animated light sweep */}
        <div className="absolute -top-[30%] -left-[20%] w-[140%] h-[140%] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06)_0%,transparent_60%)] animate-light-sweep z-20 pointer-events-none" />

        {/* Floating atmospheric micro particles */}
        <div className="hidden sm:block absolute top-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-[#ea580c]/30 blur-[0.5px] animate-particle-1 z-20" />
        <div className="hidden sm:block absolute bottom-1/3 left-1/2 w-1 h-1 rounded-full bg-white/25 blur-[0.5px] animate-particle-2 z-20" />
      </div>

      {/* =========================================================================
          DECORATIVE FLOATING MICRO ELEMENTS (CAMPAIGN AESTHETIC)
          ========================================================================= */}
      <div className="hidden xl:flex absolute top-10 right-12 z-20 items-center gap-6 text-[10px] font-mono tracking-widest text-[#71717a] pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#12141a]/80 border border-[#232733] backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] animate-pulse" />
          <span className="text-[#a1a1aa] font-semibold">FACILITY DECK 01 // OPERATIONAL</span>
        </div>
        <div className="flex items-center gap-2">
          <span>LAT 12°58'N</span>
          <span className="text-[#3f3f46]">•</span>
          <span>LONG 77°35'E</span>
        </div>
        <div className="px-2.5 py-1 rounded border border-[#272b35] text-[#d4d4d8]">
          EST. 2024
        </div>
      </div>

      {/* Decorative vertical coordinates bar on the left edge */}
      <div className="hidden 2xl:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-4 text-[9px] font-mono tracking-widest text-[#52525b] pointer-events-none select-none">
        <span className="rotate-90 origin-center uppercase">IRONVAULT SYSTEM</span>
        <div className="w-[1px] h-14 bg-gradient-to-b from-[#ea580c]/60 via-[#272b35] to-transparent" />
        <span className="text-[#ea580c] font-bold">01 / 04</span>
      </div>

      {/* =========================================================================
          HERO CONTENT CONTAINER
          ========================================================================= */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
        <div className="max-w-3xl">
          
          {/* Step 1: Small Label Sequence */}
          <div className="animate-hero-1 flex flex-wrap items-center gap-2.5 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#ea580c]/15 border border-[#ea580c]/40 text-[#ea580c] font-heading font-black text-xs tracking-widest uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] animate-ping" />
              <span>DISCIPLINE. DEDICATION. DESTINATION.</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#141720]/90 border border-[#272c38] backdrop-blur-md">
              <MapPin className="w-3.5 h-3.5 text-[#ea580c]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#d4d4d8]">
                {business.locality}, {business.city} • From ₹{business.startingPrice.toLocaleString('en-IN')}/mo
              </span>
            </div>
          </div>

          {/* Step 2: Hero Editorial Dominant Heading */}
          <h1 className="animate-hero-2 font-heading text-5xl sm:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-[0.92] mb-6">
            BUILD YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f4f4f5] to-[#ea580c] relative inline-block">
              STRONGEST
              {/* Subtle orange accent underline */}
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#ea580c] to-transparent opacity-80" />
            </span>{' '}
            SELF.
          </h1>

          {/* Step 3: Supporting Description */}
          <p className="animate-hero-3 text-lg sm:text-xl text-[#d4d4d8] font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10">
            Premium training, expert coaching and a serious environment built to help you train with purpose.
          </p>

          {/* Step 4: Primary & Secondary CTAs */}
          <div className="animate-hero-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              id="hero-start-trial-btn"
              onClick={onStartFreeTrial}
              className="px-8 py-4 rounded font-heading font-black text-lg tracking-wider uppercase bg-[#ea580c] hover:bg-[#f97316] text-black transition-all duration-200 shadow-xl shadow-[#ea580c]/25 hover:shadow-[#ea580c]/40 flex items-center justify-center gap-2 active:scale-98 cursor-pointer group"
            >
              <span>START FREE TRIAL</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-view-memberships-btn"
              onClick={onViewMemberships}
              className="px-7 py-4 rounded font-heading font-bold text-lg tracking-wider uppercase bg-[#141720]/90 hover:bg-[#1e2330] text-white border border-[#2d3342] hover:border-[#ea580c]/50 transition-all duration-200 flex items-center justify-center cursor-pointer backdrop-blur-sm"
            >
              VIEW MEMBERSHIPS
            </button>
          </div>

          {/* Step 5: Trust Micro-Points with Sleek Dividers */}
          <div className="animate-hero-5 pt-6 border-t border-[#232733] flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm text-[#a1a1aa]">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0" />
              <span className="font-medium text-[#e4e4e7]">Certified Trainers</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0" />
              <span className="font-medium text-[#e4e4e7]">Premium Equipment</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0" />
              <span className="font-medium text-[#e4e4e7]">Flexible Memberships</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 8: SCROLL INDICATOR
          ========================================================================= */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[10px] font-mono tracking-[0.25em] text-[#71717a] uppercase pointer-events-none select-none">
        <span>SCROLL TO EXPLORE</span>
        <div className="w-[1px] h-8 bg-[#272b35] relative overflow-hidden rounded-full">
          <div className="w-full h-3 bg-[#ea580c] rounded-full animate-scroll-line" />
        </div>
      </div>
    </section>
  );
};

