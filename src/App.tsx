import React, { useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { defaultGymConfig } from './config/gymConfig';
import { GymFullConfig } from './types';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';
import { MobileStickyBar } from './components/MobileStickyBar';
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
import { AdminCustomizerPage } from './pages/AdminCustomizerPage';

const CONFIG_STORAGE_KEY = 'ironvault_gym_config';

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/admin' || location.pathname === '/customizer';

  // Persistent gym configuration
  const [config, setConfig] = useState<GymFullConfig>(() => {
    try {
      const saved = localStorage.getItem(CONFIG_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.business && parsed.imageAssets) {
          return parsed;
        }
      }
    } catch {
      // fallback to default
    }
    return defaultGymConfig;
  });

  const handleUpdateConfig = (newConfig: GymFullConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(newConfig));
    } catch {
      // ignore
    }
  };

  const handleResetConfig = () => {
    setConfig(defaultGymConfig);
    try {
      localStorage.removeItem(CONFIG_STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  // Public Lead Modal states
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<string>('Muscle Building');
  const [selectedPlanOrProgram, setSelectedPlanOrProgram] = useState<string>('');

  const openTrialModal = (planOrProgramName?: string, goal?: string) => {
    if (planOrProgramName) setSelectedPlanOrProgram(planOrProgramName);
    if (goal) setSelectedGoal(goal);
    setIsLeadModalOpen(true);
  };

  // If on internal admin/customizer route, render dedicated admin console without public navigation
  if (isAdminRoute) {
    return (
      <Routes>
        <Route
          path="/admin"
          element={
            <AdminCustomizerPage
              config={config}
              onUpdateConfig={handleUpdateConfig}
              onResetConfig={handleResetConfig}
            />
          }
        />
        <Route
          path="/customizer"
          element={
            <AdminCustomizerPage
              config={config}
              onUpdateConfig={handleUpdateConfig}
              onResetConfig={handleResetConfig}
            />
          }
        />
      </Routes>
    );
  }

  // Finished public website experience
  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#f4f4f5] flex flex-col selection:bg-[#ea580c] selection:text-black">
      {/* Top Announcement Bar */}
      <AnnouncementBar
        config={config.announcement}
        onCtaClick={() => openTrialModal('Announcement Free Trial Pass')}
      />

      {/* Global Persistent Header / Navbar (Finished public website only) */}
      <Navbar
        business={config.business}
        onJoinClick={() => openTrialModal('Navbar Join Now')}
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
          {/* Internal Admin fallback routes */}
          <Route
            path="/admin"
            element={
              <AdminCustomizerPage
                config={config}
                onUpdateConfig={handleUpdateConfig}
                onResetConfig={handleResetConfig}
              />
            }
          />
          <Route
            path="/customizer"
            element={
              <AdminCustomizerPage
                config={config}
                onUpdateConfig={handleUpdateConfig}
                onResetConfig={handleResetConfig}
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
      <Footer business={config.business} />

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
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <AppContent />
    </HashRouter>
  );
}
