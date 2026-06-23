import { DailyWorkout } from '../../types';
import Badge from '../common/Badge';
import { Flame, Clock, Dumbbell, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface WorkoutCardProps {
  workout: DailyWorkout;
  onExplore?: (workout: DailyWorkout) => void;
  id?: string;
}

export default function WorkoutCard({ workout, onExplore, id }: WorkoutCardProps) {
  return (
    <motion.div
      id={id}
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-stone-900 border border-slate-200/80 dark:border-stone-800/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300"
    >
      {/* Card Header Info */}
      <div className="flex justify-between items-start gap-4 mb-4">
        <div>
          <Badge variant="primary" className="mb-2">
            {workout.day}
          </Badge>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {workout.focus}
          </h3>
        </div>
        <Badge variant={workout.difficulty === 'Advanced' ? 'error' : 'warning'}>
          {workout.difficulty}
        </Badge>
      </div>

      {/* Quick stats row */}
      <div className="flex gap-4 mb-6 border-b border-slate-100 dark:border-stone-800/60 pb-4 text-xs font-semibold text-slate-500 dark:text-stone-400">
        <div className="flex items-center gap-1.5">
          <Clock size={14} className="text-emerald-500" />
          <span>{workout.duration}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Flame size={14} className="text-rose-500" />
          <span>~{workout.estimatedCalories} kcal</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Dumbbell size={14} className="text-emerald-500" />
          <span>{workout.exercises.length} Exercises</span>
        </div>
      </div>

      {/* Exercises mini preview */}
      <div className="space-y-3 mb-6">
        <div className="text-xs font-extrabold text-slate-800 dark:text-stone-300 uppercase tracking-widest flex items-center gap-1">
          <Zap size={12} className="text-emerald-500" />
          <span>Exercise Overview</span>
        </div>
        <ul className="space-y-2">
          {workout.exercises.slice(0, 3).map((ex, idx) => (
            <li key={idx} className="flex justify-between items-center text-xs text-slate-600 dark:text-stone-400 font-medium">
              <span className="truncate">{ex.name}</span>
              <span className="text-emerald-600 dark:text-emerald-400 shrink-0 font-bold ml-2">
                {ex.sets}x{ex.reps}
              </span>
            </li>
          ))}
          {workout.exercises.length > 3 && (
            <li className="text-[10px] text-slate-400 dark:text-stone-500 italic mt-1 font-semibold">
              + {workout.exercises.length - 3} more exercises in full routine
            </li>
          )}
        </ul>
      </div>

      {/* CTA Button */}
      <button
        onClick={() => onExplore?.(workout)}
        className="w-full py-3 px-4 rounded-xl bg-emerald-600/10 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-stone-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer outline-none focus:ring-2 focus:ring-emerald-500"
      >
        Open Full Routine
      </button>
    </motion.div>
  );
}
