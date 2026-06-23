import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'error' | 'neutral';
  className?: string;
  id?: string;
}

export default function Badge({ children, variant = 'primary', className = '', id }: BadgeProps) {
  const baseStyles = 'inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full tracking-wide transition-colors duration-200';
  
  const variants = {
    primary: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20',
    secondary: 'bg-stone-500/10 text-stone-600 dark:text-stone-400 border border-stone-500/20',
    outline: 'bg-transparent text-slate-700 dark:text-stone-300 border border-slate-300 dark:border-stone-700',
    success: 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20',
    warning: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20',
    error: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20',
    neutral: 'bg-slate-100 text-slate-700 dark:bg-stone-900 dark:text-stone-300'
  };

  return (
    <span id={id} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
