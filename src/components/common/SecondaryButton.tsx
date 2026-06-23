import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'motion/react';

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: any;
}

export default function SecondaryButton({
  children,
  icon,
  className = '',
  id,
  type = 'button',
  onClick,
  ...props
}: SecondaryButtonProps) {
  return (
    <motion.button
      id={id}
      type={type}
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ y: 0, scale: 0.98 }}
      className={`inline-flex items-center justify-center px-6 py-3.5 text-xs font-black uppercase tracking-wider rounded-xl cursor-pointer bg-slate-50 dark:bg-stone-900 hover:bg-slate-100 dark:hover:bg-stone-850 border border-slate-300/80 dark:border-white/10 text-slate-800 dark:text-stone-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 outline-none select-none ${className}`}
      {...props}
    >
      <span className="flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>
    </motion.button>
  );
}
