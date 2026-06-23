import { useState, useEffect } from 'react';
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

import { motion, AnimatePresence } from 'motion/react';

function AppContent() {
  const [hash, setHash] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash || '#home';
    }
    return '#home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const activeHash = window.location.hash || '#home';
      setHash(activeHash);
      // Ensure page scrolls to top instantly on swap
      window.scrollTo({ top: 0 });
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (newHash: string) => {
    window.location.hash = newHash;
  };

  const renderActivePage = () => {
    switch (hash) {
      case '#home':
        return <Home onNavigate={navigateTo} />;
      case '#about':
        return <About />;
      case '#programs':
        return <Programs />;
      case '#daily-workout':
        return <DailyWorkout />;
      case '#trainers':
        return <Trainers onNavigate={navigateTo} />;
      case '#schedule':
        return <Schedule />;
      case '#membership':
        return <Membership />;
      case '#nutrition':
        return <Nutrition />;
      case '#blog':
        return <Blog />;
      case '#contact':
        return <Contact />;
      default:
        // Graceful fallback of route matches
        if (hash.startsWith('#')) {
          const matchedRoute = hash.slice(1);
          if (matchedRoute === 'home') return <Home onNavigate={navigateTo} />;
          if (matchedRoute === 'about') return <About />;
          if (matchedRoute === 'programs') return <Programs />;
          if (matchedRoute === 'daily-workout') return <DailyWorkout />;
          if (matchedRoute === 'trainers') return <Trainers onNavigate={navigateTo} />;
          if (matchedRoute === 'schedule') return <Schedule />;
          if (matchedRoute === 'membership') return <Membership />;
          if (matchedRoute === 'nutrition') return <Nutrition />;
          if (matchedRoute === 'blog') return <Blog />;
          if (matchedRoute === 'contact') return <Contact />;
        }
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-stone-950 text-slate-800 dark:text-stone-300 transition-colors duration-300 antialiased selection:bg-emerald-500 selection:text-white">
      {/* Sticky Top Interactive Glassmorphic Navbar */}
      <Navbar currentHash={hash} onNavigate={navigateTo} />

      {/* Main viewport canvas with layout transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={hash}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Sitemap Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
