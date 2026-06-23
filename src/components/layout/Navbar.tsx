import { useState, useEffect } from 'react';
import Container from '../common/Container';
import ThemeToggle from '../theme/ThemeToggle';
import { Dumbbell, Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentHash: string;
  onNavigate: (hash: string) => void;
  id?: string;
}

export default function Navbar({ currentHash, onNavigate, id }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Active hash handler representing routing
  const activeRoute = currentHash || '#home';

  const navLinks = [
    { label: 'Home', hash: '#home' },
    { label: 'About', hash: '#about' },
    { label: 'Programs', hash: '#programs' },
    { label: 'Daily Workout', hash: '#daily-workout' },
    { label: 'Trainers', hash: '#trainers' },
    { label: 'Schedule', hash: '#schedule' },
    { label: 'Membership', hash: '#membership' },
    { label: 'Nutrition', hash: '#nutrition' },
    { label: 'Blog', hash: '#blog' },
    { label: 'Contact', hash: '#contact' },
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
  };

  return (
    <>
      <nav
        id={id}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-white/80 dark:bg-stone-950/80 backdrop-blur-md shadow-sm border-slate-205 dark:border-stone-800'
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
            className="flex items-center gap-2 text-slate-900 dark:text-white group select-none cursor-pointer"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500 text-stone-950 shadow-md shadow-emerald-500/20 transform group-hover:rotate-12 transition-transform duration-300">
              <Dumbbell size={20} className="stroke-[2.5]" />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase font-sans">
              Flexora<span className="text-emerald-500">Fit</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
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
          </div>

          {/* Right Action panel */}
          <div className="hidden xl:flex items-center gap-4">
            <ThemeToggle />
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
          <div className="flex xl:hidden items-center gap-3">
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

        {/* Mobile Fullscreen Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 inset-x-0 bg-white dark:bg-stone-950 border-b border-slate-200 dark:border-stone-900 shadow-xl overflow-hidden py-6 px-4 flex flex-col gap-3 z-40 max-h-[85vh] overflow-y-auto"
            >
              {navLinks.map((link) => (
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
              <div className="pt-4 border-t border-slate-100 dark:border-stone-900">
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
