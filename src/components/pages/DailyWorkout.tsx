import { useState } from 'react';
import { dailyWorkouts } from '../../data/workouts';
import { DailyWorkout, Exercise } from '../../types';
import Container from '../common/Container';
import PageHero from '../common/PageHero';
import Badge from '../common/Badge';
import { Dumbbell, Flame, Clock, Trophy, CheckSquare, RefreshCw, Sparkles, Check, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function DailyWorkoutPage() {
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const [completedDays, setCompletedDays] = useState<string[]>([]);
  const [streak, setStreak] = useState<number>(14);

  const activeWorkout = dailyWorkouts.find((w) => w.day === selectedDay) || dailyWorkouts[0];

  const handleToggleComplete = () => {
    if (completedDays.includes(selectedDay)) {
      setCompletedDays(completedDays.filter((d) => d !== selectedDay));
      setStreak((prev) => Math.max(14, prev - 1));
    } else {
      setCompletedDays([...completedDays, selectedDay]);
      setStreak((prev) => prev + 1);
    }
  };

  const getDifficultyBadgeVariant = (diff: string) => {
    switch (diff) {
      case 'Easy': return 'success';
      case 'Medium': return 'warning';
      case 'Hard': return 'error';
      default: return 'primary';
    }
  };

  return (
    <div className="flex flex-col text-left">
      <PageHero
        title="Your Daily Workout Planner."
        description="Ditch the confusion. Follow your structured weekly exercise split with precise sets, repetitions, and rest timers."
        tagline="Active Consistency Engine"
      />

      {/* Week Selector Section */}
      <section className="py-8 bg-slate-50 dark:bg-stone-950 border-b border-slate-205 dark:border-stone-900 transition-colors duration-300">
        <Container className="flex xl:justify-center overflow-x-auto gap-3 pb-2 sm:pb-0 scrollbar-none">
          {dailyWorkouts.map((w) => {
            const isSelected = selectedDay === w.day;
            const isCompleted = completedDays.includes(w.day);
            return (
              <button
                key={w.day}
                onClick={() => setSelectedDay(w.day)}
                className={`py-3 px-5 rounded-lg text-xs font-black uppercase tracking-wider flex items-center justify-between gap-3 min-w-[130px] shrink-0 border transition-all duration-300 cursor-pointer outline-none select-none ${
                  isSelected
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-500/10'
                    : 'bg-white dark:bg-stone-900 text-slate-700 dark:text-stone-300 border-slate-200 dark:border-stone-800 hover:bg-slate-50 dark:hover:bg-stone-850'
                }`}
              >
                <span>{w.day}</span>
                {isCompleted ? (
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${isSelected ? 'bg-white text-emerald-600' : 'bg-emerald-500 text-white'}`}>
                    <Check size={10} strokeWidth={3} />
                  </div>
                ) : (
                  <span className={`text-[9px] font-black uppercase ${isSelected ? 'text-white/80' : 'text-slate-400 dark:text-stone-550'}`}>
                    {w.focus.split(' ')[0]}
                  </span>
                )}
              </button>
            );
          })}
        </Container>
      </section>

      {/* Main Core Planner dashboard */}
      <section className="py-16 bg-white dark:bg-stone-900 transition-colors duration-300">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Target Workout Exercises list */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              
              {/* Active Exercise Headline & completing trigger */}
              <div className="p-6 bg-slate-50/50 dark:bg-stone-950/20 border border-slate-200/80 dark:border-stone-850/80 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Badge variant="primary">{activeWorkout.day}</Badge>
                    <Badge variant="outline">{activeWorkout.duration}</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white capitalize">
                    {activeWorkout.focus}
                  </h3>
                </div>
                
                {/* Complete Trigger Button */}
                <button
                  onClick={handleToggleComplete}
                  className={`py-3 px-6 rounded-xl font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-all duration-300 cursor-pointer outline-none ${
                    completedDays.includes(selectedDay)
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/10'
                      : 'bg-stone-900 hover:bg-emerald-600 text-white dark:bg-stone-950 dark:hover:bg-emerald-500 dark:hover:text-stone-950'
                  }`}
                >
                  {completedDays.includes(selectedDay) ? (
                    <>
                      <Check size={14} strokeWidth={3} className="animate-bounce" />
                      <span>Workout Completed</span>
                    </>
                  ) : (
                    <>
                      <CheckSquare size={14} />
                      <span>Mark As Completed</span>
                    </>
                  )}
                </button>
              </div>

              {/* Detailed Exercises list block */}
              <div className="space-y-4">
                <h4 className="text-sm font-black uppercase text-slate-900 dark:text-white tracking-widest flex items-center gap-1.5 mb-4">
                  <Dumbbell size={15} className="text-emerald-500" />
                  <span>Interactive Movements Grid</span>
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeWorkout.exercises.map((ex, index) => (
                    <div
                      key={ex.id}
                      className="p-5 bg-white dark:bg-stone-900 border border-slate-200/80 dark:border-stone-800/80 hover:border-emerald-500/20 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left"
                    >
                      <div className="flex justify-between items-start gap-3 mb-3">
                        <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-stone-950 text-slate-600 dark:text-stone-400 font-bold text-xs flex items-center justify-center shrink-0 border border-slate-200 dark:border-stone-800">
                          {index + 1}
                        </span>
                        <div className="flex-grow">
                          <h5 className="font-extrabold text-sm text-slate-900 dark:text-white leading-snug">
                            {ex.name}
                          </h5>
                          <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest block mt-1">
                            {ex.targetMuscle}
                          </span>
                        </div>
                        <Badge variant={getDifficultyBadgeVariant(ex.difficulty)} className="text-[9px] py-0 px-2 shrink-0">
                          {ex.difficulty}
                        </Badge>
                      </div>

                      {/* Dimensions Specs Row */}
                      <div className="grid grid-cols-3 gap-2 border-t border-dashed border-slate-100 dark:border-stone-800/80 pt-3 mt-auto text-[11px] font-semibold text-slate-500 dark:text-stone-400">
                        <div>
                          <span className="text-[9px] text-slate-400 block mb-0.5">SETS</span>
                          <strong className="text-slate-800 dark:text-white text-xs">{ex.sets} Working</strong>
                        </div>
                        <div>
                          <span className="text-[9px] text-slate-400 block mb-0.5">VOLUME</span>
                          <strong className="text-slate-800 dark:text-white text-xs">{ex.reps}</strong>
                        </div>
                        <div>
                          <span className="text-[9px] text-slate-400 block mb-0.5">REST TIME</span>
                          <strong className="text-slate-800 dark:text-white text-xs">{ex.restTime}</strong>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Performance tracking sidebar widget */}
            <div className="lg:col-span-4 flex flex-col gap-6 w-full">
              
              {/* Core Streak Dashboard Card */}
              <div className="p-6 rounded-2xl bg-stone-950 text-white shadow-xl shadow-emerald-500/5 text-left border border-stone-850">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <Trophy size={16} className="text-emerald-400 animate-pulse" />
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-stone-400">Active Streaks</h4>
                </div>
                
                <span className="text-4xl font-extrabold leading-none tracking-tight block mb-2 text-emerald-400">
                  {streak} <span className="text-xs font-black text-stone-400 uppercase tracking-widest pl-1">Days Strong</span>
                </span>
                <p className="text-xs leading-relaxed text-stone-400 font-medium mb-5">
                  Consistent daily movement creates permanent changes in performance. Complete daily split actions to escalate streak indicators.
                </p>

                {/* completion progress bar */}
                <div className="border-t border-stone-850 pt-5">
                  <div className="flex justify-between text-[11px] font-bold mb-1.5 text-stone-400">
                    <span>Target Completed This Week</span>
                    <span className="text-emerald-400">
                      {completedDays.length} of 7 Splits ({Math.round((completedDays.length / 7) * 100)}%)
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-stone-950 rounded-full overflow-hidden border border-stone-800">
                    <div
                      className="h-full bg-emerald-400 rounded-full transition-all duration-300"
                      style={{ width: `${(completedDays.length / 7) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Estimated burn summary */}
              <div className="p-6 bg-slate-50/50 dark:bg-stone-950/20 border border-slate-200/80 dark:border-stone-850/80 rounded-2xl text-left">
                <h4 className="text-xs font-black uppercase text-slate-800 dark:text-stone-450 tracking-wider mb-4 flex items-center gap-1">
                  <Flame size={14} className="text-rose-500" />
                  <span>Daily Caloric Outcome</span>
                </h4>
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-2xl font-black text-slate-900 dark:text-white">
                    ~{activeWorkout.estimatedCalories}
                  </span>
                  <span className="text-xs text-slate-500 font-bold">Kcal Est.</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-stone-450 leading-relaxed font-semibold">
                  This valuation uses metabolic equivalent coefficients mapped to a person weighing 180 lbs executing intense muscle splits.
                </p>
              </div>

              {/* Complete checklist */}
              <div className="p-6 bg-slate-50/50 dark:bg-stone-950/20 border border-slate-200/80 dark:border-stone-850/80 rounded-2xl text-left">
                <h4 className="text-xs font-black uppercase text-slate-805 dark:text-stone-450 tracking-wider mb-3">Weekly Progress Checklist</h4>
                <div className="space-y-2">
                  {dailyWorkouts.map((w) => (
                    <div key={w.day} className="flex items-center justify-between text-xs font-semibold text-slate-650 dark:text-stone-400">
                      <span>{w.day} split focus</span>
                      {completedDays.includes(w.day) ? (
                        <span className="text-emerald-500 font-bold flex items-center gap-1 text-[10px]">
                          <Check size={12} strokeWidth={3} />
                          <span>DONE</span>
                        </span>
                      ) : (
                        <span className="text-slate-400 dark:text-stone-600 text-[10px]">PENDING</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
