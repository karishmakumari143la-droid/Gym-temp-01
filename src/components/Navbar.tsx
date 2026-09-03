import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Dumbbell } from 'lucide-react';
import { GymBusinessConfig } from '../types';
import { buildTelUrl } from '../config/gymConfig';

interface NavbarProps {
  business: GymBusinessConfig;
  onJoinClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  business,
  onJoinClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer whenever location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Why Us', path: '/why-us' },
    { label: 'Programs', path: '/programs' },
    { label: 'Membership', path: '/membership' },
    { label: 'Trainers', path: '/trainers' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      id="main-navbar"
      role="banner"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0c0e]/95 backdrop-blur-md border-b border-[#22262f] shadow-lg'
          : 'bg-[#0b0c0e]/85 backdrop-blur-sm border-b border-[#1b1e25]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label={`${business.name} Homepage`}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded bg-[#ea580c] flex items-center justify-center text-black font-black shadow-md group-hover:bg-[#f97316] transition-colors">
              <Dumbbell className="w-5 h-5 text-black" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl sm:text-2xl font-extrabold tracking-wider text-white uppercase leading-none">
                {business.logoText}{' '}
                <span className="text-[#ea580c]">{business.logoAccent}</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#a1a1aa] font-medium hidden sm:inline">
                {business.locality}, {business.city}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-5" aria-label="Desktop Primary Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs lg:text-sm tracking-wide transition-all relative py-1 focus:outline-none ${
                    isActive
                      ? 'font-bold text-[#ea580c]'
                      : 'font-medium text-[#d4d4d8] hover:text-[#ea580c]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ea580c] rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Compact Desktop for intermediate screens (lg to xl) */}
          <nav className="hidden lg:flex xl:hidden items-center gap-3.5" aria-label="Desktop Primary Navigation Compact">
            {navLinks.slice(0, 7).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs tracking-wide transition-colors py-1 ${
                    isActive
                      ? 'font-bold text-[#ea580c]'
                      : 'font-medium text-[#d4d4d8] hover:text-[#ea580c]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Direct Phone link */}
            <a
              href={buildTelUrl(business.phone)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold text-[#d4d4d8] hover:text-white transition-colors"
              aria-label={`Call ${business.displayPhone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#ea580c]" />
              <span>{business.displayPhone}</span>
            </a>

            {/* Primary CTA */}
            <button
              id="navbar-join-now-btn"
              onClick={onJoinClick}
              className="px-4 xl:px-5 py-2 rounded font-heading font-bold text-xs xl:text-sm tracking-wider uppercase bg-[#ea580c] hover:bg-[#f97316] text-black transition-all shadow-md active:scale-95 cursor-pointer"
            >
              JOIN NOW
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded text-[#d4d4d8] hover:text-white bg-[#14161b] border border-[#22262f] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#0e1014] border-b border-[#22262f] px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-left py-2.5 px-3.5 text-sm font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#181a20] text-[#ea580c] font-bold border-l-2 border-[#ea580c]'
                      : 'text-[#e4e4e7] hover:bg-[#181a20] hover:text-[#ea580c]'
                  }`
                }
              >
                <span>{link.label}</span>
              </NavLink>
            ))}

            <div className="pt-3 border-t border-[#22262f] flex flex-col gap-3 mt-2">
              <a
                href={buildTelUrl(business.phone)}
                className="flex items-center justify-center gap-2 py-2.5 rounded bg-[#16181e] text-sm font-semibold text-[#e4e4e7] border border-[#272b35]"
              >
                <Phone className="w-4 h-4 text-[#ea580c]" />
                Call {business.displayPhone}
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onJoinClick();
                }}
                className="w-full py-3 rounded font-heading font-extrabold text-base tracking-wider uppercase bg-[#ea580c] text-black text-center cursor-pointer shadow-lg active:scale-98"
              >
                JOIN NOW — CLAIM FREE TRIAL
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
