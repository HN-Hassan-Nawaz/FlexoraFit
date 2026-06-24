import { useState, useEffect } from 'react';
import Container from '../common/Container';
import ThemeToggle from '../theme/ThemeToggle';
import { Dumbbell, Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentHash: string;
  onNavigate: (hash: string) => void;
  id?: string;
}

export default function Navbar({ currentHash, onNavigate, id }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // States to control mobile dropdown submenus
  const [exploreMobileOpen, setExploreMobileOpen] = useState(false);
  const [moreMobileOpen, setMoreMobileOpen] = useState(false);

  // Active hash handler representing routing
  const activeRoute = currentHash || '#home';

  // 1. Core links that stay visible on both desktop and mobile
  const coreLinks = [
    { label: 'Home', hash: '#home' },
    { label: 'About Us', hash: '#about' },
    { label: 'Programs', hash: '#programs' },
    { label: 'Daily Workout', hash: '#daily-workout' },
    { label: 'Contact Us', hash: 'contact' },
  ];

  // 2. Explore Group Links
  const exploreLinks = [
    { label: 'Our Trainers', hash: '#trainers' },
    { label: 'Class Schedule', hash: '#schedule' },
    { label: 'Memberships', hash: '#membership' },
  ];

  // 3. Resources Group Links
  const resourceLinks = [
    { label: 'Nutrition Blog', hash: '#nutrition' },
    { label: 'Articles & Blog', hash: '#blog' },
    
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (hash: string) => {
    onNavigate(hash);
    setIsOpen(false);
    setExploreMobileOpen(false);
    setMoreMobileOpen(false);
  };

  // Helper to check if any link inside a group is currently active
  const isGroupActive = (links: { hash: string }[]) => {
    return links.some((link) => link.hash === activeRoute);
  };

  return (
    <>
      <nav
        id={id}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-white/80 dark:bg-stone-950/80 backdrop-blur-md shadow-sm border-slate-200 dark:border-stone-800'
            : 'bg-transparent border-transparent'
        }`}
      >
        <Container className="h-20 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="flex items-center gap-2 text-slate-900 dark:text-white group select-none cursor-pointer z-50"
          >
            <span className="text-xl font-black tracking-tighter uppercase font-sans">
              Flexora<span className="text-emerald-500">Fit</span>
            </span>
          </a>

          {/* DESKTOP NAVIGATION LINKS - Optimized with Hover Dropdowns */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Core Desktop Links */}
            {coreLinks.map((link) => (
              <a
                key={link.hash}
                href={link.hash}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.hash);
                }}
                className={`relative py-1.5 text-xs font-black uppercase tracking-wider transition-colors duration-200 outline-none select-none ${
                  activeRoute === link.hash
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-slate-600 hover:text-slate-900 dark:text-stone-300 dark:hover:text-white'
                }`}
              >
                {link.label}
                {activeRoute === link.hash && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 inset-x-0 h-0.5 bg-emerald-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}

            {/* Desktop Dropdown 1: Explore */}
            <div className="relative group/dropdown py-3 cursor-pointer">
              <span
                className={`flex items-center gap-1 text-xs font-black uppercase tracking-wider transition-colors duration-200 select-none ${
                  isGroupActive(exploreLinks)
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-slate-600 group-hover/dropdown:text-slate-900 dark:text-stone-300 dark:group-hover/dropdown:text-white'
                }`}
              >
                <span>Explore</span>
                <ChevronDown size={12} className="transition-transform duration-200 group-hover/dropdown:rotate-180" />
              </span>

              {/* Hidden Dropdown Menu Container */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 invisible opacity-0 group-hover/dropdown:visible group-hover/dropdown:opacity-100 transition-all duration-200 w-48 z-50">
                <div className="bg-white dark:bg-stone-900 border border-slate-100 dark:border-stone-800 rounded-xl shadow-xl py-2 flex flex-col backdrop-blur-md">
                  {exploreLinks.map((link) => (
                    <a
                      key={link.hash}
                      href={link.hash}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.hash);
                      }}
                      className={`px-4 py-2.5 text-[11px] font-bold uppercase tracking-wide transition-colors ${
                        activeRoute === link.hash
                          ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-450'
                          : 'text-slate-600 hover:bg-slate-50 dark:text-stone-300 dark:hover:bg-stone-800 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Dropdown 2: Resources */}
            <div className="relative group/dropdown py-3 cursor-pointer">
              <span
                className={`flex items-center gap-1 text-xs font-black uppercase tracking-wider transition-colors duration-200 select-none ${
                  isGroupActive(resourceLinks)
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-slate-600 group-hover/dropdown:text-slate-900 dark:text-stone-300 dark:group-hover/dropdown:text-white'
                }`}
              >
                <span>Blogs</span>
                <ChevronDown size={12} className="transition-transform duration-200 group-hover/dropdown:rotate-180" />
              </span>

              {/* Hidden Dropdown Menu Container */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 invisible opacity-0 group-hover/dropdown:visible group-hover/dropdown:opacity-100 transition-all duration-200 w-48 z-50">
                <div className="bg-white dark:bg-stone-900 border border-slate-100 dark:border-stone-800 rounded-xl shadow-xl py-2 flex flex-col backdrop-blur-md">
                  {resourceLinks.map((link) => (
                    <a
                      key={link.hash}
                      href={link.hash}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.hash);
                      }}
                      className={`px-4 py-2.5 text-[11px] font-bold uppercase tracking-wide transition-colors ${
                        activeRoute === link.hash
                          ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-450'
                          : 'text-slate-600 hover:bg-slate-50 dark:text-stone-300 dark:hover:bg-stone-800 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Action panel */}
          <div className="hidden lg:flex items-center gap-4">
            {/* <ThemeToggle /> */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleLinkClick('#membership')}
              className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-xs font-black uppercase tracking-wider cursor-pointer shadow-md shadow-emerald-500/10 transition-all duration-300 outline-none"
            >
              <div className="flex items-center gap-1.5">
                <Sparkles size={13} className="shrink-0 animate-pulse" />
                <span>Join Now</span>
              </div>
            </motion.button>
          </div>

          {/* Mobile Activators */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-stone-900 dark:hover:bg-stone-850 text-slate-700 dark:text-stone-300 border border-slate-200 dark:border-stone-800 transition-colors cursor-pointer outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </Container>

        {/* MOBILE FULLSCREEN ACCORDION PANEL */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 inset-x-0 bg-white dark:bg-stone-950 border-b border-slate-200 dark:border-stone-900 shadow-xl overflow-hidden py-6 px-4 flex flex-col gap-2 z-40 h-[90vh] overflow-y-auto lg:hidden"
            >
              {/* 1. Mobile Core Links */}
              {coreLinks.map((link) => (
                <a
                  key={link.hash}
                  href={link.hash}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.hash);
                  }}
                  className={`py-3 px-4 rounded-lg text-sm font-black uppercase tracking-wider text-left transition-colors ${
                    activeRoute === link.hash
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-450'
                      : 'hover:bg-slate-50 dark:hover:bg-stone-900 text-slate-700 dark:text-stone-300'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              {/* 2. Mobile Accordion: Explore Gym */}
              <div className="flex flex-col">
                <button
                  onClick={() => setExploreMobileOpen(!exploreMobileOpen)}
                  className="w-full py-3 px-4 rounded-lg text-sm font-black uppercase tracking-wider text-left flex items-center justify-between text-slate-700 dark:text-stone-300 hover:bg-slate-50 dark:hover:bg-stone-900 cursor-pointer"
                >
                  <span>Explore Gym</span>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform duration-200 ${exploreMobileOpen ? 'rotate-180 text-emerald-500' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {exploreMobileOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 flex flex-col gap-1 bg-slate-50/50 dark:bg-stone-900/30 rounded-lg mt-1"
                    >
                      {exploreLinks.map((link) => (
                        <a
                          key={link.hash}
                          href={link.hash}
                          onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick(link.hash);
                          }}
                          className={`py-2.5 px-4 rounded-md text-xs font-bold uppercase tracking-wide text-left transition-colors ${
                            activeRoute === link.hash
                              ? 'text-emerald-600 dark:text-emerald-400 font-black'
                              : 'text-slate-500 hover:text-slate-800 dark:text-stone-400 dark:hover:text-white'
                          }`}
                        >
                          {link.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 3. Mobile Accordion: More Resources */}
              <div className="flex flex-col">
                <button
                  onClick={() => setMoreMobileOpen(!moreMobileOpen)}
                  className="w-full py-3 px-4 rounded-lg text-sm font-black uppercase tracking-wider text-left flex items-center justify-between text-slate-700 dark:text-stone-300 hover:bg-slate-50 dark:hover:bg-stone-900 cursor-pointer"
                >
                  <span>Resources & More</span>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform duration-200 ${moreMobileOpen ? 'rotate-180 text-emerald-500' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {moreMobileOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 flex flex-col gap-1 bg-slate-50/50 dark:bg-stone-900/30 rounded-lg mt-1"
                    >
                      {resourceLinks.map((link) => (
                        <a
                          key={link.hash}
                          href={link.hash}
                          onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick(link.hash);
                          }}
                          className={`py-2.5 px-4 rounded-md text-xs font-bold uppercase tracking-wide text-left transition-colors ${
                            activeRoute === link.hash
                              ? 'text-emerald-600 dark:text-emerald-400 font-black'
                              : 'text-slate-500 hover:text-slate-800 dark:text-stone-400 dark:hover:text-white'
                          }`}
                        >
                          {link.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 4. Mobile Action Button Area */}
              <div className="pt-4 border-t border-slate-100 dark:border-stone-900 mt-2">
                <button
                  onClick={() => handleLinkClick('#membership')}
                  className="w-full py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-sm uppercase tracking-wider shadow-md shadow-emerald-500/10 cursor-pointer"
                >
                  Join FlexoraFit Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}