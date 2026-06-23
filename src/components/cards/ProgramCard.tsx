import { Program } from '../../types';
import Badge from '../common/Badge';
import { Clock, Target, ArrowRight, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface ProgramCardProps {
  program: Program;
  onSelect?: (program: Program) => void;
  id?: string;
}

export default function ProgramCard({ program, onSelect, id }: ProgramCardProps) {
  const getDifficultyVariant = (diff: string) => {
    switch (diff) {
      case 'Beginner': return 'success';
      case 'Intermediate': return 'warning';
      case 'Advanced': return 'error';
      default: return 'primary';
    }
  };

  return (
    <motion.div
      id={id}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="flex flex-col bg-white dark:bg-stone-900 border border-slate-200/80 dark:border-stone-800/80 rounded-xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-stone-950/20 hover:border-emerald-500/30 transition-all duration-300"
    >
      {/* Visual Image */}
      <div className="relative h-48 md:h-52 overflow-hidden group">
        <img
          src={program.image}
          alt={program.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
        <div className="absolute top-4 left-4">
          <Badge variant={getDifficultyVariant(program.difficulty)}>
            {program.difficulty}
          </Badge>
        </div>
      </div>

      {/* Info Body */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug">
          {program.name}
        </h3>
        <p className="text-sm text-slate-600 dark:text-stone-400 mb-6 flex-grow leading-relaxed">
          {program.description}
        </p>

        {/* Technical Data Blocks */}
        <div className="grid grid-cols-2 gap-3 border-t border-slate-100 dark:border-stone-800 pt-4 mb-5">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-stone-400">
            <Clock size={15} className="text-emerald-500" />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-stone-400">
            <Target size={15} className="text-emerald-500" />
            <span className="truncate">{program.targetGoal}</span>
          </div>
        </div>

        {/* Coach Line & Action Trigger */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-stone-300">
            <Award size={14} className="text-emerald-500" />
            <span>{program.trainerName}</span>
          </div>
          <button
            onClick={() => onSelect?.(program)}
            className="inline-flex items-center gap-1 text-xs font-black tracking-wider text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 uppercase transition-colors duration-200 outline-none focus:underline"
          >
            Explore Plan
            <ArrowRight size={14} className="stroke-[3]" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
