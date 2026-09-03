import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Navigation,
  ExternalLink,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { GymFullConfig } from '../types';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { PageWrapper } from '../components/PageWrapper';
import { buildTelUrl, buildWhatsAppUrl } from '../config/gymConfig';

interface ContactPageProps {
  config: GymFullConfig;
  onOpenTrialModal: (source?: string, goal?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ config }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredTime: 'Morning (6 AM – 10 AM)',
    goal: 'Strength Training',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Send formatted WhatsApp message
    const msg = `Hi ${config.business.name}, I want to schedule a visit!\nName: ${formData.name}\nPhone: ${formData.phone}\nPreferred Time: ${formData.preferredTime}\nGoal: ${formData.goal}\nMessage: ${formData.message || 'None'}`;
    const url = buildWhatsAppUrl(config.business.whatsappNumber, msg);

    setIsSubmitted(true);
    window.open(url, '_blank');
  };

  const whatsappInquiryUrl = buildWhatsAppUrl(
    config.business.whatsappNumber,
    `Hi ${config.business.name}, I'm planning to visit your gym in ${config.business.locality}, ${config.business.city}. Can you share visitor guidelines?`
  );

  return (
    <PageWrapper>
      <SEOHead
        title={`Contact Us & Gym Location | ${config.business.name} — ${config.business.city}`}
        description={`Visit ${config.business.name} located at ${config.business.fullAddress}. Open 7 days a week. Phone: ${config.business.displayPhone}. Get directions, check operational hours, or schedule a tour.`}
        canonicalPath="/contact"
        ogImage={config.imageAssets.interior}
      />

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Contact & Location' }]} />

      {/* Header Section */}
      <section className="bg-[#0b0c0e] pt-14 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#1b1e25]">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-heading font-black text-[#ea580c]">
            FIND YOUR GROUND
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight mt-2 mb-6">
            VISIT {config.business.name} IN {config.business.city.toUpperCase()}.
          </h1>
          <p className="text-base sm:text-lg text-[#a1a1aa] max-w-3xl leading-relaxed">
            Located centrally in {config.business.locality} with secure basement parking, dedicated entry, and easy access from major arterials. Drop in for a facility tour or book an introductory session.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="bg-[#0e1014] py-16 sm:py-24 border-b border-[#1b1e25] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Schedule Visit Form (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-[#111317] border border-[#20242e]">
                <Phone className="w-5 h-5 text-[#ea580c] mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#71717a] block">Phone Desk</span>
                <a href={buildTelUrl(config.business.phone)} className="text-sm font-bold text-white hover:text-[#ea580c] transition-colors">
                  {config.business.displayPhone}
                </a>
              </div>

              <div className="p-5 rounded-xl bg-[#111317] border border-[#20242e]">
                <MessageCircle className="w-5 h-5 text-[#22c55e] mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#71717a] block">WhatsApp Desk</span>
                <a href={whatsappInquiryUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-[#22c55e] transition-colors">
                  +{config.business.whatsappNumber}
                </a>
              </div>

              <div className="p-5 rounded-xl bg-[#111317] border border-[#20242e]">
                <Mail className="w-5 h-5 text-[#ea580c] mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#71717a] block">Email Inquiries</span>
                <a href={`mailto:${config.business.email}`} className="text-xs font-bold text-white hover:text-[#ea580c] transition-colors truncate block">
                  {config.business.email}
                </a>
              </div>
            </div>

            {/* Schedule a Visit Form */}
            <div className="bg-[#111317] border border-[#20242e] rounded-xl p-6 sm:p-8 shadow-xl">
              <div className="mb-6">
                <span className="text-xs font-heading font-black text-[#ea580c] uppercase tracking-wider">
                  SCHEDULE A WALKTHROUGH
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white mt-1">
                  PLAN YOUR FACILITY VISIT
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a1aa] mt-1">
                  Fill in your details to reserve a guided facility tour and movement test with a coach.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-lg bg-[#141820] border border-[#22c55e]/30 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#22c55e] mx-auto" />
                  <h4 className="font-heading text-xl font-bold text-white uppercase">
                    VISIT REQUEST RECEIVED!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#a1a1aa] max-w-md mx-auto">
                    We have redirected your request to our front desk WhatsApp. A coach will confirm your visitor pass within 15 minutes.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-3 px-5 py-2 rounded bg-[#1c202a] text-xs font-semibold text-[#d4d4d8] hover:text-white cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#a1a1aa] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Malhotra"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#161820] border border-[#282d3a] text-white text-sm focus:outline-none focus:border-[#ea580c]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#a1a1aa] mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#161820] border border-[#282d3a] text-white text-sm focus:outline-none focus:border-[#ea580c]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#a1a1aa] mb-1.5">
                        Preferred Visit Time
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#161820] border border-[#282d3a] text-white text-sm focus:outline-none focus:border-[#ea580c]"
                      >
                        <option>Morning (6 AM – 10 AM)</option>
                        <option>Midday (11 AM – 3 PM)</option>
                        <option>Evening (5 PM – 9 PM)</option>
                        <option>Weekend Afternoon</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#a1a1aa] mb-1.5">
                        Primary Training Focus
                      </label>
                      <select
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#161820] border border-[#282d3a] text-white text-sm focus:outline-none focus:border-[#ea580c]"
                      >
                        <option>Strength & Muscle Building</option>
                        <option>Fat Loss & Metabolic Conditioning</option>
                        <option>Athletic & Functional Movement</option>
                        <option>1-on-1 Personal Training</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-[#a1a1aa] mb-1.5">
                      Notes / Specific Requirements (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Any specific workout preferences or prior injuries..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg bg-[#161820] border border-[#282d3a] text-white text-sm focus:outline-none focus:border-[#ea580c]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-[#ea580c] hover:bg-[#f97316] text-black font-heading font-black text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer active:scale-98"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>CONFIRM & CHAT ON WHATSAPP</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Location, Hours, Service Areas & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address & Hours Box */}
            <div className="p-7 rounded-xl bg-[#111317] border border-[#20242e] space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#71717a] block mb-1">
                  Physical Address
                </span>
                <h4 className="font-heading text-xl font-bold uppercase text-white mb-2">
                  {config.business.name}
                </h4>
                <p className="text-sm text-[#d4d4d8] leading-relaxed flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#ea580c] shrink-0 mt-1" />
                  <span>{config.business.fullAddress}</span>
                </p>
              </div>

              {/* Operating Hours */}
              <div className="pt-5 border-t border-[#1e222b]">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#71717a] block mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#ea580c]" />
                  <span>Weekly Operating Schedule</span>
                </span>
                <div className="space-y-1.5 text-xs sm:text-sm text-[#d4d4d8]">
                  <div className="flex justify-between">
                    <span className="text-[#a1a1aa]">Monday – Friday:</span>
                    <span className="font-semibold text-white">{config.business.openingHours.weekday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#a1a1aa]">Saturday:</span>
                    <span className="font-semibold text-white">{config.business.openingHours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#a1a1aa]">Sunday:</span>
                    <span className="font-semibold text-white">{config.business.openingHours.sunday}</span>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="pt-5 border-t border-[#1e222b]">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#71717a] block mb-2">
                  Serving Localities
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {config.business.serviceAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#171920] border border-[#272b36] text-xs text-[#d4d4d8]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Get Directions Link */}
              <div className="pt-2">
                <a
                  href={config.business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-lg bg-[#16181f] hover:bg-[#ea580c] text-white hover:text-black font-heading font-black text-xs tracking-wider uppercase border border-[#272b36] hover:border-[#ea580c] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>OPEN LIVE IN GOOGLE MAPS</span>
                </a>
              </div>
            </div>

            {/* Google Maps Live Frame */}
            <div className="bg-[#111317] border border-[#20242e] rounded-xl overflow-hidden relative min-h-[300px] flex flex-col">
              <div className="p-3 bg-[#16181f] border-b border-[#20242e] flex items-center justify-between text-xs text-[#a1a1aa]">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#ea580c]" />
                  Live Navigation
                </span>
                <a
                  href={config.business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[#ea580c] hover:underline"
                >
                  Open in App <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="flex-1 w-full h-[280px]">
                <iframe
                  title={`${config.business.name} Map Location in ${config.business.city}`}
                  src={config.business.googleMapsEmbedUrl}
                  className="w-full h-full border-0 filter grayscale contrast-125 opacity-85 hover:opacity-100 hover:filter-none transition-all duration-300"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};
