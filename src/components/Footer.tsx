import React from 'react';
import { Link } from 'react-router-dom';
import {
  Dumbbell,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Instagram,
  ArrowUp,
  Shield,
} from 'lucide-react';
import { GymBusinessConfig } from '../types';
import { buildTelUrl, buildWhatsAppUrl } from '../config/gymConfig';

interface FooterProps {
  business: GymBusinessConfig;
  onOpenCustomizer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ business, onOpenCustomizer }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = buildWhatsAppUrl(
    business.whatsappNumber,
    `Hi, I have an inquiry about ${business.name}.`
  );

  return (
    <footer
      id="footer"
      aria-label="Site Footer"
      className="bg-[#08090b] text-[#a1a1aa] border-t border-[#1a1d24] pt-16 pb-24 lg:pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#181b22]">
          {/* Col 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 inline-flex focus:outline-none">
              <div className="w-8 h-8 rounded bg-[#ea580c] flex items-center justify-center text-black font-black">
                <Dumbbell className="w-4 h-4 text-black" />
              </div>
              <span className="font-heading text-2xl font-black tracking-wider text-white uppercase">
                {business.logoText}{' '}
                <span className="text-[#ea580c]">{business.logoAccent}</span>
              </span>
            </Link>

            <p className="font-heading text-lg font-bold text-white uppercase tracking-wider">
              {business.tagline}
            </p>

            <p className="text-sm text-[#71717a] leading-relaxed max-w-sm">
              A serious strength and conditioning environment built for deliberate physical progression, science-backed coaching, and longevity.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded bg-[#13151b] border border-[#232731] flex items-center justify-center text-[#d4d4d8] hover:text-[#ea580c] hover:border-[#ea580c] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded bg-[#13151b] border border-[#232731] flex items-center justify-center text-[#22c55e] hover:border-[#22c55e] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={buildTelUrl(business.phone)}
                className="w-9 h-9 rounded bg-[#13151b] border border-[#232731] flex items-center justify-center text-[#d4d4d8] hover:text-[#ea580c] transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-base font-bold uppercase tracking-wider text-white">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/why-us" className="hover:text-[#ea580c] transition-colors">Why Choose Us</Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-[#ea580c] transition-colors">Programs</Link>
              </li>
              <li>
                <Link to="/membership" className="hover:text-[#ea580c] transition-colors">Memberships</Link>
              </li>
              <li>
                <Link to="/trainers" className="hover:text-[#ea580c] transition-colors">Our Coaches</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#ea580c] transition-colors">Gym Gallery</Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-[#ea580c] transition-colors">Reviews & Results</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#ea580c] transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#ea580c] transition-colors">Contact & Map</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Local Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-base font-bold uppercase tracking-wider text-white">
              Operating Hours
            </h4>
            <div className="space-y-2 text-xs text-[#d4d4d8]">
              <p><span className="text-[#71717a]">Mon – Fri:</span> {business.openingHours.weekday}</p>
              <p><span className="text-[#71717a]">Saturday:</span> {business.openingHours.saturday}</p>
              <p><span className="text-[#71717a]">Sunday:</span> {business.openingHours.sunday}</p>
            </div>

            <div className="pt-3">
              <h5 className="text-xs uppercase font-semibold text-[#71717a] mb-1">Local Service Areas</h5>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                {business.serviceAreas.join(' • ')}
              </p>
            </div>
          </div>

          {/* Col 4: Contact & Template Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-base font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-[#d4d4d8]">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#ea580c] shrink-0 mt-0.5" />
                <span>{business.fullAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#ea580c] shrink-0" />
                <a href={buildTelUrl(business.phone)} className="hover:underline">{business.displayPhone}</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#ea580c] shrink-0" />
                <span>{business.email}</span>
              </p>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenCustomizer}
                className="w-full py-2 px-3 rounded bg-[#13161c] border border-[#272c38] hover:border-[#ea580c] text-xs font-semibold text-[#d4d4d8] hover:text-white transition-colors text-left flex items-center justify-between cursor-pointer"
              >
                <span>White-Label Customizer</span>
                <span className="text-[10px] bg-[#ea580c]/20 text-[#ea580c] px-1.5 py-0.5 rounded font-mono">gym-01</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717a]">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#ea580c]" />
            <span>© {new Date().getFullYear()} {business.name}. All Rights Reserved. Reusable Gym Template 01 (ID: gym-01).</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#a1a1aa] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
