import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { GymFullConfig } from '../types';
import { SEOHead } from '../components/SEOHead';
import { PageWrapper } from '../components/PageWrapper';
import { Hero } from '../components/Hero';
import { TrustStats } from '../components/TrustStats';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { TrainingGoals } from '../components/TrainingGoals';
import { Programs } from '../components/Programs';
import { GymInteriorSection } from '../components/GymInteriorSection';
import { MembershipPlans } from '../components/MembershipPlans';
import { FreeTrialCTA } from '../components/FreeTrialCTA';
import { Trainers } from '../components/Trainers';
import { Testimonials } from '../components/Testimonials';
import { FAQSection } from '../components/FAQSection';
import { FinalCTA } from '../components/FinalCTA';

interface HomePageProps {
  config: GymFullConfig;
  onOpenTrialModal: (source?: string, goal?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ config, onOpenTrialModal }) => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <SEOHead
        title={`${config.business.name} — Premium Gym & Fitness Centre in ${config.business.city}`}
        description={`${config.business.name} in ${config.business.locality}, ${config.business.city}. Built for strength, athletic conditioning, and longevity. Memberships from ₹${config.business.startingPrice.toLocaleString('en-IN')}/mo. Book your free trial.`}
        canonicalPath="/"
        ogImage={config.imageAssets.hero}
      />

      {/* Hero Section */}
      <Hero
        business={config.business}
        imageAssets={config.imageAssets}
        imageAlt={config.imageAlt}
        onStartFreeTrial={() => onOpenTrialModal('Home Hero Free Trial')}
        onViewMemberships={() => navigate('/membership')}
      />

      {/* Trust Statistics */}
      <TrustStats stats={config.trustStats} />

      {/* Why Choose Us with View Full Page Link */}
      <div>
        <WhyChooseUs items={config.whyChooseUs} />
        <div className="bg-[#0e1014] pb-12 border-b border-[#1b1e25] px-4 text-center">
          <Link
            to="/why-us"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#16181f] hover:bg-[#20242e] border border-[#272c38] text-white hover:text-[#ea580c] text-xs font-heading font-black tracking-widest uppercase transition-all shadow-md group"
          >
            <span>DISCOVER THE FULL IRONVAULT PHILOSOPHY & AMENITIES</span>
            <ArrowRight className="w-4 h-4 text-[#ea580c] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Training Goals Overview */}
      <div>
        <TrainingGoals
          goals={config.trainingGoals}
          onSelectGoal={(goal) => onOpenTrialModal(`Goal: ${goal}`, goal)}
        />
        <div className="bg-[#0e1014] pb-12 border-b border-[#1b1e25] px-4 text-center">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#16181f] hover:bg-[#20242e] border border-[#272c38] text-white hover:text-[#ea580c] text-xs font-heading font-black tracking-widest uppercase transition-all shadow-md group"
          >
            <span>VIEW ALL 6 TRAINING DISCIPLINES & SCHEDULES</span>
            <ArrowRight className="w-4 h-4 text-[#ea580c] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Programs Section */}
      <div>
        <Programs
          programs={config.programs}
          onSelectProgram={(title) => onOpenTrialModal(`Program: ${title}`)}
        />
        <div className="bg-[#090a0d] pb-14 border-b border-[#1a1d25] px-4 text-center">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#141720] hover:bg-[#1a1f2b] border border-[#272e3d] text-white hover:text-[#ea580c] font-heading font-black text-xs tracking-wider uppercase transition-all shadow-lg active:scale-98"
          >
            <span>VIEW DETAILED WEEKLY PROGRAM SCHEDULES</span>
            <ChevronRight className="w-4 h-4 text-[#ea580c]" />
          </Link>
        </div>
      </div>

      {/* Facility & Interior Showcase */}
      <div>
        <GymInteriorSection
          business={config.business}
          imageAssets={config.imageAssets}
          imageAlt={config.imageAlt}
          onExploreClick={() => navigate('/gallery')}
        />
        <div className="bg-[#0b0c0e] pb-12 border-b border-[#1b1e25] px-4 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#16181f] hover:bg-[#20242e] border border-[#272c38] text-white hover:text-[#ea580c] text-xs font-heading font-black tracking-widest uppercase transition-all shadow-md group"
          >
            <span>VIEW COMPLETE FACILITY PHOTO GALLERY</span>
            <ArrowRight className="w-4 h-4 text-[#ea580c] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Membership Plans Summary */}
      <div>
        <MembershipPlans
          plans={config.membershipPlans}
          business={config.business}
          membershipMessage={config.whatsapp.membershipMessage}
          onSelectPlan={(plan) => onOpenTrialModal(`Membership Plan: ${plan}`)}
          onTalkToTrainer={() => onOpenTrialModal('Trainer Consultation', 'Personal Training')}
        />
        <div className="bg-[#0e1014] pb-14 border-b border-[#1b1e25] px-4 text-center">
          <Link
            to="/membership"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#16181f] hover:bg-[#20242e] border border-[#2e3442] text-white hover:text-[#ea580c] font-heading font-black text-xs tracking-wider uppercase transition-all shadow-lg"
          >
            <span>VIEW FULL MEMBERSHIP COMPARISON TABLE & PERKS</span>
            <ChevronRight className="w-4 h-4 text-[#ea580c]" />
          </Link>
        </div>
      </div>

      {/* Free Trial CTA Teaser */}
      <FreeTrialCTA
        business={config.business}
        trialMessage={config.whatsapp.trialMessage}
        onClaimFreeTrial={() => onOpenTrialModal('Home Free Trial Block')}
      />

      {/* Coaches Preview */}
      <div>
        <Trainers
          trainers={config.trainers}
          onBookSession={(trainer) => onOpenTrialModal(`Coach Consultation: ${trainer}`, 'Personal Training')}
        />
        <div className="bg-[#0e1014] pb-12 border-b border-[#1b1e25] px-4 text-center">
          <Link
            to="/trainers"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#16181f] hover:bg-[#20242e] border border-[#272c38] text-white hover:text-[#ea580c] text-xs font-heading font-black tracking-widest uppercase transition-all shadow-md group"
          >
            <span>VIEW ALL COACH CREDENTIALS & SPECIALTIES</span>
            <ArrowRight className="w-4 h-4 text-[#ea580c] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Testimonials Teaser */}
      <div>
        <Testimonials
          testimonials={config.testimonials}
          business={config.business}
        />
        <div className="bg-[#0e1014] pb-12 border-b border-[#1b1e25] px-4 text-center">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#16181f] hover:bg-[#20242e] border border-[#272c38] text-white hover:text-[#ea580c] text-xs font-heading font-black tracking-widest uppercase transition-all shadow-md group"
          >
            <span>EXPLORE MEMBER TRANSFORMATIONS & GOOGLE REVIEWS</span>
            <ArrowRight className="w-4 h-4 text-[#ea580c] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* FAQs Teaser */}
      <div>
        <FAQSection
          faqs={config.faqs.slice(0, 4)}
          business={config.business}
        />
        <div className="bg-[#0b0c0e] pb-14 border-b border-[#1b1e25] px-4 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#16181f] hover:bg-[#20242e] border border-[#272c38] text-white hover:text-[#ea580c] text-xs font-heading font-black tracking-widest uppercase transition-all shadow-md group"
          >
            <span>HAVE MORE QUESTIONS? READ ALL 10 FREQUENTLY ASKED QUESTIONS</span>
            <ChevronRight className="w-4 h-4 text-[#ea580c]" />
          </Link>
        </div>
      </div>

      {/* Final Conversion CTA */}
      <FinalCTA
        business={config.business}
        trialMessage={config.whatsapp.trialMessage}
        onBookFreeTrial={() => onOpenTrialModal('Home Final CTA')}
      />
    </PageWrapper>
  );
};
