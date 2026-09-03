import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X, Shield, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';
import { GymFullConfig } from '../types';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { PageWrapper } from '../components/PageWrapper';
import { MembershipPlans } from '../components/MembershipPlans';
import { FreeTrialCTA } from '../components/FreeTrialCTA';

interface MembershipPageProps {
  config: GymFullConfig;
  onOpenTrialModal: (source?: string, goal?: string) => void;
}

export const MembershipPage: React.FC<MembershipPageProps> = ({ config, onOpenTrialModal }) => {
  const comparisonRows = [
    {
      feature: 'Full Floor & Equipment Access',
      starter: 'General Hours',
      transform: 'Full Access',
      commit: 'Full Access',
      annual: 'Full Priority 24/7 Access',
    },
    {
      feature: 'Personal Trainer Induction & Goal Audit',
      starter: '1 Session',
      transform: '2 Sessions',
      commit: '4 Sessions',
      annual: '6 Sessions + Monthly Review',
    },
    {
      feature: 'InBody Biometric Scan & Analysis',
      starter: '1 Baseline',
      transform: 'Monthly (3 Scans)',
      commit: 'Bi-Weekly (12 Scans)',
      annual: 'Unlimited Biometric Audits',
    },
    {
      feature: 'Functional Turf & Agility Zone Access',
      starter: true,
      transform: true,
      commit: true,
      annual: true,
    },
    {
      feature: 'Locker, Sauna & Hot Shower Access',
      starter: 'Standard Locker',
      transform: 'Standard Locker',
      commit: 'Priority Locker',
      annual: 'Dedicated Reserved Locker',
    },
    {
      feature: 'Custom Nutrition & Macronutrient Blueprint',
      starter: false,
      transform: true,
      commit: true,
      annual: true,
    },
    {
      feature: 'Complimentary Membership Freeze Period',
      starter: '7 Days',
      transform: '15 Days',
      commit: '30 Days',
      annual: '60 Days + Emergency Freeze',
    },
    {
      feature: 'Guest Workout Passes Included',
      starter: 'None',
      transform: '1 Pass / month',
      commit: '2 Passes / month',
      annual: '5 Passes / month',
    },
  ];

  return (
    <PageWrapper>
      <SEOHead
        title={`Membership Plans & Pricing | ${config.business.name} — ${config.business.city}`}
        description={`Transparent gym memberships in ${config.business.city} starting at ₹${config.business.startingPrice.toLocaleString('en-IN')}/mo. Monthly, Quarterly, Semi-Annual, and Annual Elite passes with zero hidden registration fees.`}
        canonicalPath="/membership"
        ogImage={config.imageAssets.hero}
      />

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Membership Plans' }]} />

      {/* Header Section */}
      <section className="bg-[#0b0c0e] pt-14 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#1b1e25]">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-heading font-black text-[#ea580c]">
            INVEST IN PHYSICAL DOMINANCE
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight mt-2 mb-6">
            TRANSPARENT MEMBERSHIP TIERS.
          </h1>
          <p className="text-base sm:text-lg text-[#a1a1aa] max-w-3xl leading-relaxed">
            No ambiguous sales pitches or pushy consultants. Choose a membership tier that aligns with your timeline, complete with direct access to certified coaches, high-end equipment, and locker facilities.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded bg-[#ea580c]/10 border border-[#ea580c]/30 text-xs font-semibold text-[#ea580c]">
            <Sparkles className="w-4 h-4 text-[#ea580c]" />
            <span>Every membership comes with a zero-risk 1-day floor pass test before you commit.</span>
          </div>
        </div>
      </section>

      {/* Membership Plans Cards */}
      <MembershipPlans
        plans={config.membershipPlans}
        business={config.business}
        membershipMessage={config.whatsapp.membershipMessage}
        onSelectPlan={(plan) => onOpenTrialModal(`Plan: ${plan}`)}
        onTalkToTrainer={() => onOpenTrialModal('Trainer Consultation Request', 'Personal Training')}
      />

      {/* Detailed Plan Comparison Table */}
      <section className="bg-[#0b0c0e] py-16 sm:py-24 border-b border-[#1b1e25] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest font-heading font-black text-[#ea580c]">
              SIDE-BY-SIDE MATRIX
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mt-2">
              COMPARE PLAN INCLUSIONS.
            </h2>
            <p className="text-sm text-[#a1a1aa] mt-2">
              See exact feature breakdowns across Starter, Transform, Commit, and Annual Elite tiers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#222631] bg-[#111317]">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-[#202531] bg-[#16181f]">
                  <th className="p-4 sm:p-5 text-xs font-heading font-black uppercase tracking-wider text-white w-1/3">
                    Feature / Inclusion
                  </th>
                  <th className="p-4 text-center text-xs font-heading font-black uppercase tracking-wider text-[#d4d4d8]">
                    Starter (1 Mo)
                  </th>
                  <th className="p-4 text-center text-xs font-heading font-black uppercase tracking-wider text-[#ea580c]">
                    Transform (3 Mo)
                  </th>
                  <th className="p-4 text-center text-xs font-heading font-black uppercase tracking-wider text-[#d4d4d8]">
                    Commit (6 Mo)
                  </th>
                  <th className="p-4 text-center text-xs font-heading font-black uppercase tracking-wider text-white bg-[#1a1d26]">
                    Annual Elite
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e222c] text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#14161d] transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-[#f4f4f5] border-r border-[#1e222c]">
                      {row.feature}
                    </td>

                    {/* Starter */}
                    <td className="p-4 text-center text-[#a1a1aa] border-r border-[#1e222c]">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <Check className="w-4 h-4 text-[#22c55e] mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-[#71717a] mx-auto" />
                        )
                      ) : (
                        row.starter
                      )}
                    </td>

                    {/* Transform */}
                    <td className="p-4 text-center text-[#e4e4e7] font-semibold border-r border-[#1e222c] bg-[#ea580c]/5">
                      {typeof row.transform === 'boolean' ? (
                        row.transform ? (
                          <Check className="w-4 h-4 text-[#22c55e] mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-[#71717a] mx-auto" />
                        )
                      ) : (
                        row.transform
                      )}
                    </td>

                    {/* Commit */}
                    <td className="p-4 text-center text-[#d4d4d8] border-r border-[#1e222c]">
                      {typeof row.commit === 'boolean' ? (
                        row.commit ? (
                          <Check className="w-4 h-4 text-[#22c55e] mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-[#71717a] mx-auto" />
                        )
                      ) : (
                        row.commit
                      )}
                    </td>

                    {/* Annual */}
                    <td className="p-4 text-center text-white font-bold bg-[#141720]">
                      {typeof row.annual === 'boolean' ? (
                        row.annual ? (
                          <Check className="w-4 h-4 text-[#ea580c] mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-[#71717a] mx-auto" />
                        )
                      ) : (
                        row.annual
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Honest Membership Policy Callout */}
      <section className="bg-[#0e1014] py-14 border-b border-[#1b1e25] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#12141a] border border-[#222631]">
            <Shield className="w-6 h-6 text-[#ea580c] mb-3" />
            <h4 className="font-heading text-lg font-bold uppercase text-white mb-1">
              Zero Hidden Registration Fees
            </h4>
            <p className="text-xs text-[#a1a1aa] leading-relaxed">
              What you see is what you pay. We don’t levy sneaky locker deposits, maintenance fees, or unannounced administration charges.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#12141a] border border-[#222631]">
            <Shield className="w-6 h-6 text-[#ea580c] mb-3" />
            <h4 className="font-heading text-lg font-bold uppercase text-white mb-1">
              Flexible Freeze Protections
            </h4>
            <p className="text-xs text-[#a1a1aa] leading-relaxed">
              Travelling or injured? Pause your membership seamlessly with one WhatsApp notification without losing days on your plan.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#12141a] border border-[#222631]">
            <HelpCircle className="w-6 h-6 text-[#ea580c] mb-3" />
            <h4 className="font-heading text-lg font-bold uppercase text-white mb-1">
              Have Questions Before Joining?
            </h4>
            <p className="text-xs text-[#a1a1aa] leading-relaxed mb-3">
              Check our full FAQ covering guest policies, student concessions, and payment methods.
            </p>
            <Link
              to="/faq"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ea580c] hover:underline"
            >
              <span>Visit FAQ Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <FreeTrialCTA
        business={config.business}
        trialMessage={config.whatsapp.trialMessage}
        onClaimFreeTrial={() => onOpenTrialModal('Membership Page Trial')}
      />
    </PageWrapper>
  );
};
