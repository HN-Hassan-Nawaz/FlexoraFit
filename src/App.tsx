import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { ThemeProvider } from './components/theme/ThemeProvider';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Subpage Views
import Home from './components/pages/Home';
import About from './components/pages/About';
import Programs from './components/pages/Programs';
import DailyWorkout from './components/pages/DailyWorkout';
import Trainers from './components/pages/Trainers';
import Schedule from './components/pages/Schedule';
import Membership from './components/pages/Membership';
import Nutrition from './components/pages/Nutrition';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfService from './components/pages/TermsOfService';
import LiabilityWaiver from './components/pages/LiabilityWaiver';

import { motion, AnimatePresence } from 'motion/react';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-stone-950 text-slate-800 dark:text-stone-300 transition-colors duration-300 antialiased selection:bg-emerald-500 selection:text-white">
      {/* Sticky Top Interactive Glassmorphic Navbar */}
      <Navbar currentPath={location.pathname} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex-1"
          >
            <Routes>
              <Route path="/" element={<Home onNavigate={navigateTo} />} />
              <Route path="/home" element={<Home onNavigate={navigateTo} />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/daily-workout" element={<DailyWorkout />} />
              <Route path="/trainers" element={<Trainers onNavigate={navigateTo} />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/nutrition" element={<Nutrition />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/liability-waiver" element={<LiabilityWaiver />} />
              <Route path="*" element={<Home onNavigate={navigateTo} />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </BrowserRouter>
  );
}
