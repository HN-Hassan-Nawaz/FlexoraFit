import { programs } from '../../data/programs';
import { trainers } from '../../data/trainers';
import { dailyWorkouts } from '../../data/workouts';
import { pricingPlans } from '../../data/pricing';
import { testimonials } from '../../data/testimonials';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';
import Badge from '../common/Badge';

import ProgramCard from '../cards/ProgramCard';
import TrainerCard from '../cards/TrainerCard';
import PricingCard from '../cards/PricingCard';
import WorkoutCard from '../cards/WorkoutCard';
import StatCard from '../cards/StatCard';
import TestimonialCard from '../cards/TestimonialCard';
import CTASection from '../sections/CTASection';

import { Users, Award, Calendar, ThumbsUp, Activity, Flame, Trophy, CheckSquare, Sparkles, Brain, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeProps {
  onNavigate: (hash: string) => void;
  id?: string;
}

export default function Home({ onNavigate, id }: HomeProps) {
  // Take subsets for preview
  const previewPrograms = programs.slice(0, 4);
  const previewTrainers = trainers.slice(0, 3);
  const todayWorkout = dailyWorkouts[0]; // Monday Chestnut/Triceps as default preview

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div id={id} className="pt-20">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 to-white dark:from-stone-950 dark:to-neutral-900 border-b border-slate-200/60 dark:border-stone-850/60 py-16 md:py-28 transition-colors duration-300">
        {/* Orbs */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

        <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Badge variant="primary" className="mb-4">
              <Sparkles size={11} className="mr-1 inline-block text-emerald-500 animate-pulse" />
              <span>THE ULTIMATE TRAINING RETREAT</span>
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Build Strength.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400 dark:from-emerald-400 dark:to-emerald-300">
                Stay Consistent.
              </span><br />
              Transform Daily.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-stone-400 font-medium leading-relaxed max-w-xl">
              FlexoraFit helps you follow daily workouts, explore expert fitness programs, connect with trainers, and stay committed to your health journey.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <PrimaryButton
                onClick={() => onNavigate('#membership')}
                icon={<Sparkles size={14} />}
              >
                Start Your Journey
              </PrimaryButton>
              <SecondaryButton
                onClick={() => onNavigate('#daily-workout')}
                icon={<Activity size={14} className="text-emerald-500" />}
              >
                View Daily Workout
              </SecondaryButton>
            </div>
          </div>

          {/* Premium dashboard-style workout card */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative p-6 rounded-2xl bg-neutral-900 text-white shadow-2xl border border-stone-800 shadow-emerald-500/5 select-none text-left"
            >
              {/* Tracker Widget Header */}
              <div className="flex justify-between items-center border-b border-stone-800 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <Activity size={16} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black tracking-wider text-stone-500 uppercase">FLEXORA OS</h4>
                    <p className="text-xs font-bold text-white leading-none">Fitness Console</p>
                  </div>
                </div>
                <Badge variant="success">Online</Badge>
              </div>

              {/* Stats Panel */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-stone-950/40 border border-stone-800/80">
                  <div className="flex items-center gap-1 text-stone-500 mb-1">
                    <Flame size={12} className="text-rose-500" />
                    <span className="text-[10px] font-bold">CALORIES</span>
                  </div>
                  <span className="text-sm font-black">480 <span className="text-[10px] text-stone-500">kcal</span></span>
                </div>
                <div className="p-3 rounded-xl bg-stone-950/40 border border-stone-800/80">
                  <div className="flex items-center gap-1 text-stone-500 mb-1">
                    <Trophy size={11} className="text-emerald-400" />
                    <span className="text-[10px] font-bold">STREAK</span>
                  </div>
                  <span className="text-sm font-black">14 <span className="text-[10px] text-stone-500">days</span></span>
                </div>
                <div className="p-3 rounded-xl bg-stone-950/40 border border-stone-800/80">
                  <div className="flex items-center gap-1 text-stone-500 mb-1">
                    <Clock size={11} className="text-indigo-400" />
                    <span className="text-[10px] font-bold">RECOVERY</span>
                  </div>
                  <span className="text-sm font-black">94% <span className="text-[10px] text-stone-500">ready</span></span>
                </div>
              </div>

              {/* Progress Bar inside widget */}
              <div className="mb-5">
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-stone-400">Streak Progress</span>
                  <span className="text-emerald-400">85% Complete</span>
                </div>
                <div className="w-full h-2 bg-stone-950 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[85%]" />
                </div>
              </div>

              {/* Exercises layout list */}
              <div className="space-y-2.5">
                <div className="text-[10px] font-black uppercase text-stone-500 tracking-wider flex items-center gap-1 mb-2">
                  <CheckSquare size={11} className="text-emerald-400" />
                  <span>Today's Exercises Preview</span>
                </div>
                
                <div className="flex justify-between items-center p-2.5 rounded-lg bg-stone-950/60 border border-stone-900/60">
                  <span className="text-xs font-bold text-stone-300">Barbell Bench Press</span>
                  <Badge variant="primary" className="text-[10px] py-0 px-2">4 Sets</Badge>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded-lg bg-stone-950/60 border border-stone-900/60">
                  <span className="text-xs font-bold text-stone-300">Weighted Chest Dips</span>
                  <Badge variant="primary" className="text-[10px] py-0 px-2">3 Sets</Badge>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded-lg bg-stone-950/60 border border-stone-900/60">
                  <span className="text-xs font-bold text-stone-300">Dumbbell Tricep Extension</span>
                  <Badge variant="primary" className="text-[10px] py-0 px-2">3 Sets</Badge>
                </div>
              </div>

              {/* Weekly visual logs */}
              <div className="mt-5 border-t border-stone-800 pt-4 flex justify-between items-center">
                <span className="text-[10px] font-bold text-stone-500">WEEKLY WORKOUT REGISTRY</span>
                <div className="flex gap-1.5">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                    <span
                      key={i}
                      className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold ${
                        i < 5 ? 'bg-emerald-500 text-stone-950 font-black' : 'bg-stone-800 text-stone-500'
                      }`}
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 2. Stats Section */}
      <section className="py-12 bg-slate-50 dark:bg-stone-950 transition-colors duration-300">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              value="500+"
              label="Active Members"
              icon={<Users size={24} />}
            />
            <StatCard
              value="25+"
              label="Expert Trainers"
              icon={<Award size={24} />}
            />
            <StatCard
              value="60+"
              label="Weekly Classes"
              icon={<Calendar size={24} />}
            />
            <StatCard
              value="95%"
              label="Satisfaction Rate"
              icon={<ThumbsUp size={24} />}
            />
          </div>
        </Container>
      </section>

      {/* 3. Programs Preview */}
      <section className="py-20 bg-white dark:bg-stone-900 transition-colors duration-300">
        <Container>
          <SectionHeading
            title="Premium Training Programs"
            subtitle="Explore our science-backed curriculum, customized for high performance, strength, and life-changing health outcomes."
            tagline="Curated Curriculum"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {previewPrograms.map((prog) => (
              <motion.div key={prog.id} variants={itemVariants}>
                <ProgramCard
                  program={prog}
                  onSelect={(p) => onNavigate('#programs')}
                />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <SecondaryButton onClick={() => onNavigate('#programs')}>
              Explore All 8 Fitness Schemes &rarr;
            </SecondaryButton>
          </div>
        </Container>
      </section>

      {/* 4. Daily Workout Preview */}
      <section className="py-20 bg-slate-50 dark:bg-stone-950 transition-colors duration-300">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Workout explanation details */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <Badge variant="primary" className="mb-4">
              <span>ACTIVE SCHEDULE TRACKER</span>
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-tight mb-5">
              Today's Curated Base Routine
            </h2>
            <p className="text-base text-slate-600 dark:text-stone-400 leading-relaxed font-medium mb-6">
              Our daily workouts provide a safe, smart dynamic program built to eliminate administrative stress. No more wondering what to do on the weight room floor; open the app, review the custom reps and rest targets, and commit.
            </p>
            <ul className="space-y-3 mb-8 font-semibold text-xs text-slate-700 dark:text-stone-300">
              <li className="flex items-center gap-2.5">
                <ShieldCheck size={16} className="text-emerald-500 shrink-0" />
                <span>Alternating daily muscle focus blocks</span>
              </li>
              <li className="flex items-center gap-2.5">
                <ShieldCheck size={16} className="text-emerald-500 shrink-0" />
                <span>Adjustable rest targets based on heart rates</span>
              </li>
              <li className="flex items-center gap-2.5">
                <ShieldCheck size={16} className="text-emerald-500 shrink-0" />
                <span>Mark routine completed to trigger performance streak</span>
              </li>
            </ul>
            <PrimaryButton onClick={() => onNavigate('#daily-workout')}>
              View Complete Weekly Timetable
            </PrimaryButton>
          </div>

          {/* Actual Card Preview */}
          <div className="lg:col-span-6 w-full">
            <WorkoutCard
              workout={todayWorkout}
              onExplore={() => onNavigate('#daily-workout')}
            />
          </div>
        </Container>
      </section>

      {/* 5. Bento Grid: Why Choose FlexoraFit */}
      <section className="py-20 bg-white dark:bg-stone-900 transition-colors duration-300">
        <Container>
          <SectionHeading
            title="Engineered For High Standards"
            subtitle="We reject the outdated model of warehouse gyms. Discover our professional ecosystem built for modern lifestyles."
            tagline="The Flexora Difference"
          />

          {/* Bento dynamic grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[220px]">
            {/* Box 1: Daily Workout Guidance */}
            <div className="md:col-span-6 lg:col-span-5 bg-stone-100/50 dark:bg-stone-950/30 p-6 rounded-2xl border border-slate-200/80 dark:border-stone-850/80 hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between text-left">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center">
                <Calendar size={18} />
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 uppercase tracking-wide">Daily Workout Guidance</h3>
                <p className="text-xs text-slate-500 dark:text-stone-400 leading-relaxed font-semibold">
                  A fresh, structured workout waiting for you every single day of the week, designed with calibrated rep-volumes.
                </p>
              </div>
            </div>

            {/* Box 2: Expert Support */}
            <div className="md:col-span-6 lg:col-span-7 bg-stone-100/50 dark:bg-stone-950/30 p-6 rounded-2xl border border-slate-200/80 dark:border-stone-850/80 hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between text-left">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center">
                <Award size={18} />
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 uppercase tracking-wide">Elite Credentials & Certifications</h3>
                <p className="text-xs text-slate-500 dark:text-stone-400 leading-relaxed font-semibold">
                  No uncertified part-timers. Our trainers hold national gold-standard credentials (NASM, CSCS, USAW) and professional kinesiology structures.
                </p>
              </div>
            </div>

            {/* Box 3: Flexible Schedule */}
            <div className="md:col-span-6 lg:col-span-7 bg-stone-100/50 dark:bg-stone-950/30 p-6 rounded-2xl border border-slate-200/80 dark:border-stone-850/80 hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between text-left">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center">
                <Clock size={18} />
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 uppercase tracking-wide">Flexible Studio Timetable</h3>
                <p className="text-xs text-slate-500 dark:text-stone-400 leading-relaxed font-semibold">
                  With over 60 group sessions hosted weekly from 7:00 AM HIIT intervals to 6:30 PM recovery stretching, match work easily.
                </p>
              </div>
            </div>

            {/* Box 4: Nutrition */}
            <div className="md:col-span-6 lg:col-span-5 bg-stone-100/50 dark:bg-stone-950/30 p-6 rounded-2xl border border-slate-200/80 dark:border-stone-850/80 hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between text-left">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center">
                <Brain size={18} />
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 uppercase tracking-wide">Nutritional Portions Science</h3>
                <p className="text-xs text-slate-500 dark:text-stone-400 leading-relaxed font-semibold">
                  Ditch extreme starvation diets. Utilize realistic metabolic calorie calculators and macro structures to nourish muscle.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Trainers Section */}
      <section className="py-20 bg-slate-50 dark:bg-stone-950 transition-colors duration-300">
        <Container>
          <SectionHeading
            title="Elite Coaching Core"
            subtitle="Our coaches are active professional athletes, coaches, and sports science scholars holding gold-standard credentials."
            tagline="Expert Leaders"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewTrainers.map((tr) => (
              <TrainerCard
                key={tr.id}
                trainer={tr}
                onBook={() => onNavigate('#contact')}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <SecondaryButton onClick={() => onNavigate('#trainers')}>
              Meet All 6 Elite Coaches &rarr;
            </SecondaryButton>
          </div>
        </Container>
      </section>

      {/* 7. Membership Section */}
      <section className="py-20 bg-white dark:bg-stone-900 transition-colors duration-300">
        <Container>
          <SectionHeading
            title="Choose Your Membership Tier"
            subtitle="Transparent pricing. No hidden cancellation charges or administrative initiation fees. Choose the path that matches your ambition."
            tagline="Direct Pricing"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                onSelect={() => onNavigate('#contact')}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Success Transformations */}
      <section className="py-20 bg-slate-50 dark:bg-stone-950 transition-colors duration-300">
        <Container>
          <SectionHeading
            title="Real transformations. Real metrics."
            subtitle="We reject generic fake fitness success. These are real citizens with real work schedules who built consistency."
            tagline="Athletic Journeys"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test) => (
              <TestimonialCard
                key={test.id}
                testimonial={test}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* 9. Final Universal CTA */}
      <CTASection
        onPrimaryClick={() => onNavigate('#membership')}
        onSecondaryClick={() => onNavigate('#contact')}
      />
    </div>
  );
}
