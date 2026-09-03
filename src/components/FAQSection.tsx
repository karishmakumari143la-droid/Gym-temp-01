import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQItem, GymBusinessConfig } from '../types';
import { buildWhatsAppUrl } from '../config/gymConfig';

interface FAQSectionProps {
  faqs: FAQItem[];
  business: GymBusinessConfig;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqs, business }) => {
  // Keep first 2 open by default for immediate crawlable content and visibility
  const [openIds, setOpenIds] = useState<string[]>([faqs[0]?.id || '', faqs[1]?.id || '']);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const whatsappInquiryUrl = buildWhatsAppUrl(
    business.whatsappNumber,
    `Hi, I have a question about ${business.name} that wasn't answered in the FAQ.`
  );

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="bg-[#0b0c0e] py-20 sm:py-28 border-b border-[#1b1e25] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#ea580c]">
            Got Questions?
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mt-2">
            FREQUENTLY ASKED QUESTIONS.
          </h2>
          <p className="text-[#a1a1aa] text-base mt-3 max-w-xl mx-auto">
            Direct, factual answers regarding memberships, floor protocols, trial bookings, and timings.
          </p>
        </div>

        {/* Crawlable FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`bg-[#111317] border rounded-sm transition-colors ${
                  isOpen ? 'border-[#ea580c]/50 bg-[#14161d]' : 'border-[#20242e]'
                }`}
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-heading text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#1b1f28] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#ea580c] text-black' : 'text-[#a1a1aa]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#d4d4d8] leading-relaxed border-t border-[#1d212b]"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions helper block */}
        <div className="mt-12 p-6 rounded bg-[#13161c] border border-[#232834] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[#ea580c] shrink-0 hidden sm:block" />
            <span className="text-sm text-[#d4d4d8]">
              Have a specific question not covered here? Ask our team directly on WhatsApp.
            </span>
          </div>
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded bg-[#1a1e27] hover:bg-[#222733] text-white border border-[#2d3444] text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#22c55e]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
