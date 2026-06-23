import { useState } from 'react';
import { programs } from '../../data/programs';
import { Program } from '../../types';
import Container from '../common/Container';
import PageHero from '../common/PageHero';
import ProgramCard from '../cards/ProgramCard';
import Badge from '../common/Badge';
import { Sparkles, Calendar, User, Target, X, CheckSquare, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Programs() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const filters = [
    { label: 'All Curriculums', value: 'all' },
    { label: 'Strength & Power', value: 'strength' },
    { label: 'Weight Loss', value: 'weight-loss' },
    { label: 'Muscle Gain', value: 'muscle-gain' },
    { label: 'Cardio & Conditioning', value: 'cardio' },
    { label: 'Beginner Safe', value: 'beginner' }
  ];

  // Filter logic
  const filteredPrograms = activeFilter === 'all'
    ? programs
    : programs.filter((p) => p.category === activeFilter);

  return (
    <div className="flex flex-col text-left relative">
      <PageHero
        title="Formulated Fitness Curriculums."
        description="Explore our elite-tier training programs mapped around periodization, hypertrophic volume, and aerobic capacities."
        tagline="Science in motion"
      />

      {/* Filter Menu Section */}
      <section className="py-8 bg-slate-50 dark:bg-stone-950 border-b border-slate-200/50 dark:border-stone-900 transition-colors duration-300">
        <Container className="flex flex-wrap items-center justify-center gap-2.5">
          {filters.map((fil) => (
            <button
              key={fil.value}
              onClick={() => setActiveFilter(fil.value)}
              className={`py-2 px-4 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer outline-none select-none ${
                activeFilter === fil.value
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/10'
                  : 'bg-white dark:bg-stone-900 text-slate-700 dark:text-stone-300 hover:bg-slate-100 dark:hover:bg-stone-850 border border-slate-200 dark:border-stone-800'
              }`}
            >
              {fil.label}
            </button>
          ))}
        </Container>
      </section>

      {/* Grid List Section */}
      <section className="py-20 bg-white dark:bg-stone-900 transition-colors duration-300 min-h-[500px]">
        <Container>
          {filteredPrograms.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredPrograms.map((prog) => (
                  <motion.div
                    layout
                    key={prog.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ProgramCard
                      program={prog}
                      onSelect={(p) => setSelectedProgram(p)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-20 bg-slate-50 dark:bg-stone-950 rounded-2xl border border-slate-200/50 dark:border-stone-850">
              <p className="text-sm font-bold text-slate-500 dark:text-stone-400">No fitness schemes found carrying this exact theme.</p>
            </div>
          )}
        </Container>
      </section>

      {/* Program Deep Dive Modal Dialogue */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProgram(null)}
              className="absolute inset-0 bg-stone-950 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative w-full max-w-2xl bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto z-10 text-left"
            >
              {/* Cover visual banner */}
              <div className="relative h-48 sm:h-56">
                <img
                  src={selectedProgram.image}
                  alt={selectedProgram.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-stone-950/60 hover:bg-emerald-500 hover:text-white text-stone-300 border border-stone-800 transition-colors cursor-pointer outline-none"
                  aria-label="Close modal dialog"
                >
                  <X size={16} />
                </button>
                <div className="absolute bottom-4 left-6">
                  <Badge variant="primary" className="mb-2">
                    {selectedProgram.category.toUpperCase()}
                  </Badge>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    {selectedProgram.name}
                  </h3>
                </div>
              </div>

              {/* Informative description blocks */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap gap-4 items-center justify-between border-b border-slate-100 dark:border-stone-800 pb-5 mb-6 text-xs font-semibold text-slate-500 dark:text-stone-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={15} className="text-emerald-500" />
                    <span>Duration: <strong className="text-slate-800 dark:text-white">{selectedProgram.duration}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Dumbbell size={15} className="text-emerald-500" />
                    <span>Effort: <strong className="text-slate-800 dark:text-white">{selectedProgram.difficulty}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User size={15} className="text-emerald-500" />
                    <span>Coach: <strong className="text-slate-800 dark:text-white">{selectedProgram.trainerName}</strong></span>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm font-medium leading-relaxed text-slate-600 dark:text-stone-450 mb-8">
                  <h4 className="text-xs font-black uppercase text-slate-900 dark:text-white tracking-widest flex items-center gap-1.5">
                    <Target size={14} className="text-emerald-500" />
                    <span>Objective Mapped</span>
                  </h4>
                  <p className="bg-slate-55/40 dark:bg-stone-950/30 p-3 rounded-lg border border-slate-205 dark:border-stone-850 font-bold text-slate-850 dark:text-emerald-400">
                    {selectedProgram.targetGoal}
                  </p>
                  
                  <h4 className="text-xs font-black uppercase text-slate-900 dark:text-white tracking-widest pt-2">
                    Program Overview & Physiological Benefits
                  </h4>
                  <p>
                    {selectedProgram.description} This system implements an advanced, sports science-approved loading structure aimed at recruiting maximum muscle motor units. We monitor weekly fatigue rates to optimize joint restoration and muscle hypertrophy.
                  </p>
                  
                  <h4 className="text-xs font-black uppercase text-slate-900 dark:text-white tracking-widest pt-2 flex items-center gap-1.5">
                    <CheckSquare size={14} className="text-emerald-300" />
                    <span>Client Standard Rules Included</span>
                  </h4>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>3 structured barbell sessions per week</li>
                    <li>Individualized metabolic hydration metrics</li>
                    <li>Bi-weekly muscular dimension mapping charts</li>
                  </ul>
                </div>

                {/* Primary CTA button to Book */}
                <div className="flex justify-end pt-4 border-t border-slate-100 dark:border-stone-800 gap-3">
                  <button
                    onClick={() => setSelectedProgram(null)}
                    className="py-3 px-5 rounded-lg border border-slate-200 dark:border-stone-800 text-xs font-bold text-slate-700 dark:text-stone-400 hover:bg-slate-50 dark:hover:bg-stone-850 cursor-pointer outline-none"
                  >
                    Close Directory
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedProgram(null)}
                    className="py-3 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-wider transition-colors shadow-md shadow-emerald-500/10 cursor-pointer outline-none text-center"
                  >
                    Enlist In Program
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
