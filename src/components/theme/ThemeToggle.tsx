import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTheme();
        }
      }}
      className="relative flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-slate-100 hover:bg-slate-200 dark:bg-stone-900 dark:hover:bg-stone-800 border border-slate-200 dark:border-stone-800 text-slate-700 dark:text-stone-300 transition-all duration-300 outline-none focus:ring-2 focus:ring-emerald-500"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0, scale: theme === 'dark' ? 0 : 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute"
      >
        <Sun size={20} className="stroke-2 text-amber-500" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : -180, scale: theme === 'dark' ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute"
      >
        <Moon size={20} className="stroke-2 text-emerald-400" />
      </motion.div>
    </button>
  );
}
