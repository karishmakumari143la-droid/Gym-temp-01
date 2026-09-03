import React, { useState } from 'react';
import { Search, ChevronDown, MessageSquare, HelpCircle, Phone } from 'lucide-react';
import { GymFullConfig } from '../types';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { PageWrapper } from '../components/PageWrapper';
import { buildWhatsAppUrl, buildTelUrl } from '../config/gymConfig';
import { FreeTrialCTA } from '../components/FreeTrialCTA';

interface FAQPageProps {
  config: GymFullConfig;
  onOpenTrialModal: (source?: string, goal?: string) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ config, onOpenTrialModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2', 'faq-3']);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categories = ['All', 'Memberships', 'Facilities & Timings', 'Coaching & Beginners'];

  // Categorize questions logically
  const getCategory = (question: string) => {
    const q = question.toLowerCase();
    if (q.includes('membership') || q.includes('cost') || q.includes('price') || q.includes('fee')) {
      return 'Memberships';
    }
    if (q.includes('timing') || q.includes('hour') || q.includes('location') || q.includes('parking') || q.includes('equipment')) {
      return 'Facilities & Timings';
    }
    return 'Coaching & Beginners';
  };

  const filteredFaqs = config.faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === 'All' || getCategory(faq.question) === activeCategory;
    const matchesQuery =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const whatsappInquiryUrl = buildWhatsAppUrl(
    config.business.whatsappNumber,
    `Hi ${config.business.name}, I have a question not listed on your FAQ page.`
  );

  return (
    <PageWrapper>
      <SEOHead
        title={`Frequently Asked Questions | ${config.business.name} — ${config.business.city}`}
        description={`Find clear answers to questions about memberships, free trials, personal training, opening hours, and equipment at ${config.business.name} in ${config.business.city}.`}
        canonicalPath="/faq"
        ogImage={config.imageAssets.hero}
      />

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Frequently Asked Questions' }]} />

      {/* Header Section */}
      <section className="bg-[#0b0c0e] pt-14 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#1b1e25]">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-heading font-black text-[#ea580c]">
            KNOWLEDGE BASE & POLICIES
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mt-2 mb-4">
            FREQUENTLY ASKED QUESTIONS.
          </h1>
          <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed mb-8">
            Clear, transparent answers about floor protocols, memberships, trial passes, and coach assistance.
          </p>

          {/* Instant Search Bar */}
          <div className="relative mb-6">
            <Search className="w-5 h-5 text-[#71717a] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g., pricing, beginner, free trial, parking)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#111317] border border-[#262b36] text-white placeholder-[#71717a] text-sm focus:outline-none focus:border-[#ea580c] transition-colors"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#ea580c] text-black font-bold'
                    : 'bg-[#15171e] text-[#a1a1aa] hover:text-white border border-[#232731]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion List */}
      <section className="bg-[#0b0c0e] py-16 sm:py-24 border-b border-[#1b1e25] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 bg-[#111317] border border-[#20242e] rounded-xl p-8">
              <HelpCircle className="w-10 h-10 text-[#71717a] mx-auto mb-3" />
              <h3 className="font-heading text-xl font-bold uppercase text-white mb-2">
                No matching questions found
              </h3>
              <p className="text-xs sm:text-sm text-[#a1a1aa] max-w-md mx-auto mb-6">
                We couldn't find an answer for "{searchQuery}". Connect with our team directly on WhatsApp for an immediate response.
              </p>
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#ea580c] text-black font-heading font-black text-xs uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => {
                const isOpen = openIds.includes(faq.id);
                return (
                  <div
                    key={faq.id}
                    className={`bg-[#111317] border rounded-xl transition-all ${
                      isOpen ? 'border-[#ea580c]/50 bg-[#14161d]' : 'border-[#20242e]'
                    }`}
                  >
                    <button
                      id={`faq-page-btn-${faq.id}`}
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
                        id={`faq-page-answer-${faq.id}`}
                        className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#d4d4d8] leading-relaxed border-t border-[#1d212b]"
                      >
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Direct WhatsApp Prompt Box */}
          <div className="mt-14 p-8 rounded-xl bg-[#111317] border border-[#202532] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-heading text-xl font-bold uppercase text-white">
                STILL HAVE A QUESTION?
              </h3>
              <p className="text-xs sm:text-sm text-[#a1a1aa]">
                Our management and head trainers are on call during floor hours.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg bg-[#22c55e] hover:bg-[#16a34a] text-black text-xs font-heading font-black uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={buildTelUrl(config.business.phone)}
                className="px-5 py-3 rounded-lg bg-[#16181f] hover:bg-[#20242e] border border-[#282d3a] text-white text-xs font-heading font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#ea580c]" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <FreeTrialCTA
        business={config.business}
        trialMessage={config.whatsapp.trialMessage}
        onClaimFreeTrial={() => onOpenTrialModal('FAQ Page Free Trial')}
      />
    </PageWrapper>
  );
};
