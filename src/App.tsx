import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { defaultGymConfig } from './config/gymConfig';
import { GymFullConfig } from './types';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { TemplateCustomizer } from './components/TemplateCustomizer';
import { ScrollToTop } from './components/ScrollToTop';

// Routed Pages
import { HomePage } from './pages/HomePage';
import { WhyUsPage } from './pages/WhyUsPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { MembershipPage } from './pages/MembershipPage';
import { TrainersPage } from './pages/TrainersPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [config, setConfig] = useState<GymFullConfig>(defaultGymConfig);

  // Modal states
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<string>('Muscle Building');
  const [selectedPlanOrProgram, setSelectedPlanOrProgram] = useState<string>('');

  // Customizer state
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  const openTrialModal = (planOrProgramName?: string, goal?: string) => {
    if (planOrProgramName) setSelectedPlanOrProgram(planOrProgramName);
    if (goal) setSelectedGoal(goal);
    setIsLeadModalOpen(true);
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0b0c0e] text-[#f4f4f5] flex flex-col selection:bg-[#ea580c] selection:text-black">
        {/* Top Announcement Bar */}
        <AnnouncementBar
          config={config.announcement}
          onCtaClick={() => openTrialModal('Announcement Free Trial Pass')}
        />

        {/* Global Persistent Header / Navbar */}
        <Navbar
          business={config.business}
          onJoinClick={() => openTrialModal('Navbar Join Now')}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  config={config}
                  onOpenTrialModal={openTrialModal}
                />
              }
            />
            <Route
              path="/why-us"
              element={
                <WhyUsPage
                  config={config}
                  onOpenTrialModal={openTrialModal}
                />
              }
            />
            <Route
              path="/programs"
              element={
                <ProgramsPage
                  config={config}
                  onOpenTrialModal={openTrialModal}
                />
              }
            />
            <Route
              path="/membership"
              element={
                <MembershipPage
                  config={config}
                  onOpenTrialModal={openTrialModal}
                />
              }
            />
            <Route
              path="/trainers"
              element={
                <TrainersPage
                  config={config}
                  onOpenTrialModal={openTrialModal}
                />
              }
            />
            <Route
              path="/gallery"
              element={
                <GalleryPage
                  config={config}
                  onOpenTrialModal={openTrialModal}
                />
              }
            />
            <Route
              path="/reviews"
              element={
                <ReviewsPage
                  config={config}
                  onOpenTrialModal={openTrialModal}
                />
              }
            />
            <Route
              path="/faq"
              element={
                <FAQPage
                  config={config}
                  onOpenTrialModal={openTrialModal}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <ContactPage
                  config={config}
                  onOpenTrialModal={openTrialModal}
                />
              }
            />
            {/* Fallback wildcard to HomePage */}
            <Route
              path="*"
              element={
                <HomePage
                  config={config}
                  onOpenTrialModal={openTrialModal}
                />
              }
            />
          </Routes>
        </main>

        {/* Global Persistent Footer */}
        <Footer
          business={config.business}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* Mobile Sticky Conversion Bar */}
        <MobileStickyBar
          business={config.business}
          defaultMessage={config.whatsapp.defaultMessage}
          onJoinClick={() => openTrialModal('Mobile Sticky Bar')}
        />

        {/* Lead Generation Modal */}
        <LeadModal
          isOpen={isLeadModalOpen}
          onClose={() => setIsLeadModalOpen(false)}
          business={config.business}
          initialGoal={selectedGoal}
          initialPlanOrProgram={selectedPlanOrProgram}
        />

        {/* White-Label Template Customizer Drawer */}
        <TemplateCustomizer
          isOpen={isCustomizerOpen}
          onClose={() => setIsCustomizerOpen(false)}
          config={config}
          onUpdateConfig={setConfig}
        />
      </div>
    </HashRouter>
  );
}
