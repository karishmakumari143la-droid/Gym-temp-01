import React, { useState } from 'react';
import { X, CheckCircle2, MessageCircle, Send, Dumbbell, Sparkles } from 'lucide-react';
import { LeadFormData, GymBusinessConfig } from '../types';
import { buildWhatsAppUrl } from '../config/gymConfig';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  business: GymBusinessConfig;
  initialGoal?: string;
  initialPlanOrProgram?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  business,
  initialGoal = 'General Fitness',
  initialPlanOrProgram,
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    whatsapp: '',
    fitnessGoal: initialGoal || 'Muscle Building',
    preferredTime: 'Morning (6:00 AM – 9:00 AM)',
    message: initialPlanOrProgram
      ? `Interested in: ${initialPlanOrProgram}`
      : 'Interested in booking a 1-day free trial session.',
    planOrProgram: initialPlanOrProgram,
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const formattedText = `*New Lead Enquiry — ${business.name}*\n\n` +
      `*Name:* ${formData.name || 'Prospect'}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*WhatsApp:* ${formData.whatsapp || formData.phone || 'Same'}\n` +
      `*Fitness Goal:* ${formData.fitnessGoal}\n` +
      `*Preferred Time:* ${formData.preferredTime}\n` +
      (formData.planOrProgram ? `*Plan / Program:* ${formData.planOrProgram}\n` : '') +
      `*Note:* ${formData.message || 'I want to claim my free trial workout.'}`;

    const url = buildWhatsAppUrl(business.whatsappNumber, formattedText);
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <div
      id="lead-enquiry-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-lg bg-[#111317] border border-[#262a34] rounded-sm p-6 sm:p-8 shadow-2xl my-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-[#71717a] hover:text-white bg-[#171920] border border-[#272b35] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 flex items-center justify-center text-[#22c55e] mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-3xl font-bold uppercase text-white tracking-wide mb-2">
              PASS RESERVED!
            </h3>
            <p className="text-sm text-[#d4d4d8] max-w-sm mx-auto leading-relaxed mb-6">
              Thank you {formData.name || 'there'}. Our floor manager at {business.name} has received your details and will confirm your pass timing.
            </p>
            <div className="p-4 rounded bg-[#161921] border border-[#222733] text-left text-xs text-[#a1a1aa] mb-6">
              <p className="font-semibold text-white mb-1">Workout Checklist:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Bring clean sports shoes for gym floor</li>
                <li>Workout towel (mandatory for hygiene)</li>
                <li>Personal water bottle</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleSendViaWhatsApp}
                className="flex-1 py-3 px-4 rounded bg-[#22c55e] hover:bg-[#16a34a] text-black font-heading font-black text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Confirm on WhatsApp Now</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="py-3 px-4 rounded bg-[#1c1f27] hover:bg-[#252934] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ea580c] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Complimentary Guest Pass</span>
            </div>

            <h3
              id="modal-title"
              className="font-heading text-3xl sm:text-4xl font-black uppercase text-white tracking-tight leading-none mb-2"
            >
              BOOK YOUR FREE TRIAL
            </h3>

            <p className="text-xs sm:text-sm text-[#a1a1aa] mb-6">
              Train for a day at {business.name}, {business.locality}. Zero sales push.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#d4d4d8] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Arjun Patel"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded bg-[#16181f] border border-[#292e3a] text-sm text-white placeholder-[#52525b] focus:outline-none focus:border-[#ea580c]"
                />
              </div>

              {/* Phone & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#d4d4d8] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98XXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-[#16181f] border border-[#292e3a] text-sm text-white placeholder-[#52525b] focus:outline-none focus:border-[#ea580c]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#d4d4d8] mb-1">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Optional if same"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-[#16181f] border border-[#292e3a] text-sm text-white placeholder-[#52525b] focus:outline-none focus:border-[#ea580c]"
                  />
                </div>
              </div>

              {/* Fitness Goal Dropdown */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#d4d4d8] mb-1">
                  Primary Fitness Goal *
                </label>
                <select
                  value={formData.fitnessGoal}
                  onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded bg-[#16181f] border border-[#292e3a] text-sm text-white focus:outline-none focus:border-[#ea580c]"
                >
                  <option value="Muscle Building">Muscle Building</option>
                  <option value="Fat Loss">Fat Loss</option>
                  <option value="Strength">Strength</option>
                  <option value="General Fitness">General Fitness</option>
                  <option value="Personal Training">Personal Training</option>
                </select>
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#d4d4d8] mb-1">
                  Preferred Workout Slot
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded bg-[#16181f] border border-[#292e3a] text-sm text-white focus:outline-none focus:border-[#ea580c]"
                >
                  <option value="Morning (6:00 AM – 9:00 AM)">Morning (6:00 AM – 9:00 AM)</option>
                  <option value="Mid-Day (10:00 AM – 1:00 PM)">Mid-Day (10:00 AM – 1:00 PM)</option>
                  <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
                  <option value="Night (8:00 PM – 10:30 PM)">Night (8:00 PM – 10:30 PM)</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#d4d4d8] mb-1">
                  Note / Special Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Any injury history or questions?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded bg-[#16181f] border border-[#292e3a] text-xs sm:text-sm text-white placeholder-[#52525b] focus:outline-none focus:border-[#ea580c]"
                />
              </div>

              {/* Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-4 rounded bg-[#ea580c] hover:bg-[#f97316] text-black font-heading font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>GET STARTED</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="py-3.5 px-4 rounded bg-[#171922] hover:bg-[#20232e] text-white border border-[#2d3340] font-heading font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#22c55e]" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
