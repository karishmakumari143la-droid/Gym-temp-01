import React from 'react';
import { Star, ExternalLink, MessageSquareQuote } from 'lucide-react';
import { TestimonialItem, GymBusinessConfig } from '../types';

interface TestimonialsProps {
  testimonials: TestimonialItem[];
  business: GymBusinessConfig;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials, business }) => {
  return (
    <section
      id="reviews"
      aria-label="Member Reviews and Testimonials"
      className="bg-[#0e1014] py-20 sm:py-28 border-b border-[#1b1e25] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#ea580c]">
              Verified Feedback
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mt-2">
              WHAT OUR MEMBERS SAY.
            </h2>
          </div>

          <a
            id="read-google-reviews-btn"
            href={business.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#16181f] hover:bg-[#20232b] text-white border border-[#272b35] text-xs font-bold uppercase tracking-wider transition-colors w-fit"
          >
            <span>READ GOOGLE REVIEWS</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#ea580c]" />
          </a>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-[#111317] border border-[#20242e] rounded-sm p-7 flex flex-col justify-between hover:border-[#ea580c]/40 transition-all duration-200 relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1" aria-label={`${test.rating} out of 5 stars`}>
                    {[...Array(test.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#ea580c] text-[#ea580c]"
                      />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-5 h-5 text-[#3f4554]" />
                </div>

                <p className="text-sm text-[#d4d4d8] leading-relaxed mb-6">
                  "{test.text}"
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-[#1e222b]">
                  <h4 className="font-heading text-lg font-bold uppercase text-white tracking-wide">
                    {test.name}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-[#a1a1aa] mt-0.5">
                    <span>{test.membershipType}</span>
                    <span className="text-[11px] text-[#71717a]">{test.date}</span>
                  </div>
                </div>

                <span className="text-[10px] text-[#52525b] mt-2 block font-mono">
                  /* [REAL CUSTOMER TESTIMONIAL PLACEHOLDER] */
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
