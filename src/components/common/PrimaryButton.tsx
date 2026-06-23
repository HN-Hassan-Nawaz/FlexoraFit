import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'motion/react';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: any;
}

export default function PrimaryButton({
  children,
  icon,
  className = '',
  id,
  type = 'button',
  onClick,
  ...props
}: PrimaryButtonProps) {
  return (
    <motion.button
      id={id}
      type={type}
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ y: 0, scale: 0.98 }}
      className={`inline-flex items-center justify-center px-6 py-3.5 text-sm font-extrabold uppercase tracking-wider rounded-xl cursor-pointer bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25 active:bg-emerald-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/55 outline-none select-none ${className}`}
      {...props}
    >
      <span className="flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1 text-black">{icon}</span>}
      </span>
    </motion.button>
  );
}
