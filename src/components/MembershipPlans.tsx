import React from 'react';
import { Check, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { MembershipPlan, GymBusinessConfig } from '../types';
import { buildWhatsAppUrl } from '../config/gymConfig';

interface MembershipPlansProps {
  plans: MembershipPlan[];
  business: GymBusinessConfig;
  membershipMessage: string;
  onSelectPlan: (planName: string) => void;
  onTalkToTrainer: () => void;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({
  plans,
  business,
  membershipMessage,
  onSelectPlan,
  onTalkToTrainer,
}) => {
  return (
    <section
      id="membership"
      aria-label="Membership Plans"
      className="bg-[#0e1014] py-20 sm:py-28 border-b border-[#1b1e25] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#ea580c]">
            Transparent Investment
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mt-2">
            MEMBERSHIPS THAT FIT YOUR GOAL.
          </h2>
          <p className="text-[#a1a1aa] text-base mt-3">
            Simple, no-hidden-cost memberships starting at ₹{business.startingPrice.toLocaleString('en-IN')}. All options include full floor access, baseline assessment, and continuous trainer guidance.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-14">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-sm p-7 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-[#151820] border-2 border-[#ea580c] shadow-xl shadow-[#ea580c]/10'
                  : 'bg-[#111317] border border-[#20242e] hover:border-[#333845]'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ea580c] text-black text-[11px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-2xl font-bold uppercase text-white tracking-wider">
                    {plan.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#a1a1aa] bg-[#1a1d24] px-2.5 py-1 rounded border border-[#262b36]">
                    {plan.duration}
                  </span>
                </div>

                {/* Price Display */}
                <div className="mt-4 mb-6 pb-6 border-b border-[#20242e]">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-white">
                      {plan.priceDisplay}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#71717a] uppercase tracking-wider block mt-1 font-mono">
                    /* Configurable client pricing */
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="text-[11px] uppercase tracking-widest font-bold text-[#71717a] block">
                    What's Included:
                  </span>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#d4d4d8]">
                      <Check className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary Plan CTA */}
              <button
                id={`plan-cta-${plan.id}`}
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full py-3.5 px-4 rounded font-heading font-black text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                  plan.isPopular
                    ? 'bg-[#ea580c] hover:bg-[#f97316] text-black shadow-md'
                    : 'bg-[#1a1d25] hover:bg-[#ea580c] text-white hover:text-black border border-[#2b303c] hover:border-[#ea580c]'
                }`}
              >
                <span>GET MEMBERSHIP DETAILS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Secondary Trainer Consultation Banner */}
        <div className="bg-[#121419] border border-[#222733] rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded bg-[#1b1f28] border border-[#2b3240] flex items-center justify-center text-[#ea580c] shrink-0 hidden sm:flex">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
                Not sure which plan is right for you?
              </h4>
              <p className="text-sm text-[#a1a1aa] mt-1">
                Speak directly with an IronVault coach to review your workout history and budget.
              </p>
            </div>
          </div>

          <button
            id="membership-talk-trainer-btn"
            onClick={onTalkToTrainer}
            className="w-full sm:w-auto px-6 py-3 rounded font-heading font-bold text-sm tracking-wider uppercase bg-[#1d212b] hover:bg-[#272c3a] text-white border border-[#303746] transition-colors whitespace-nowrap cursor-pointer"
          >
            TALK TO A TRAINER
          </button>
        </div>
      </div>
    </section>
  );
};
