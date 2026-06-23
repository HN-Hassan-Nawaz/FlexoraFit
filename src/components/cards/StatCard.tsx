import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface StatCardProps {
  value: string;
  label: string;
  icon: ReactNode;
  id?: string;
}

export default function StatCard({ value, label, icon, id }: StatCardProps) {
  return (
    <motion.div
      id={id}
      whileHover={{ scale: 1.02 }}
      className="flex items-center gap-5 p-6 bg-white dark:bg-stone-900 border border-slate-200/80 dark:border-stone-800/80 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Icon Area */}
      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
        {icon}
      </div>

      {/* Info Area */}
      <div className="flex flex-col">
        <span className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-none mb-1 shadow-sm">
          {value}
        </span>
        <span className="text-xs md:text-sm font-bold text-slate-500 dark:text-stone-400 capitalize">
          {label}
        </span>
      </div>
    </motion.div>
  );
}
