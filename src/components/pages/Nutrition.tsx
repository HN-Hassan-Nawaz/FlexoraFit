import React, { useState } from 'react';
import { mealPlans, nutritionTips } from '../../data/nutrition';
import { MealPlan } from '../../types';
import Container from '../common/Container';
import PageHero from '../common/PageHero';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import { Apple, BatteryCharging, Flame, Sliders, ChevronDown, CheckSquare, Dumbbell, PlayCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Nutrition() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('meal-loss');
  
  // BMI states
  const [bmiWeight, setBmiWeight] = useState<string>('75');
  const [bmiHeight, setBmiHeight] = useState<string>('178');
  const [bmiResult, setBmiResult] = useState<number | null>(23.7);
  const [bmiClass, setBmiClass] = useState<string>('Healthy Weight');

  // Calorie states
  const [calWeight, setCalWeight] = useState<string>('75');
  const [calHeight, setCalHeight] = useState<string>('178');
  const [calAge, setCalAge] = useState<string>('28');
  const [calGender, setCalGender] = useState<'male' | 'female'>('male');
  const [calActivity, setCalActivity] = useState<number>(1.55); // Active default
  const [calResult, setCalResult] = useState<number | null>(2660);

  const activeMealPlan = mealPlans.find((m) => m.id === selectedPlanId) || mealPlans[0];

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(bmiWeight);
    const h = parseFloat(bmiHeight) / 100; // to meters
    if (w > 0 && h > 0) {
      const score = w / (h * h);
      const rounded = Math.round(score * 10) / 10;
      setBmiResult(rounded);
      
      if (rounded < 18.5) setBmiClass('Underweight');
      else if (rounded >= 18.5 && rounded < 25) setBmiClass('Healthy Weight');
      else if (rounded >= 25 && rounded < 30) setBmiClass('Overweight');
      else setBmiClass('Obese Complex');
    }
  };

  const calculateCalories = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(calWeight);
    const h = parseFloat(calHeight);
    const a = parseFloat(calAge);
    
    if (w > 0 && h > 0 && a > 0) {
      // Mifflin-St Jeor Formula
      let bmr = 0;
      if (calGender === 'male') {
        bmr = 10 * w + 6.25 * h - 5 * a + 5;
      } else {
        bmr = 10 * w + 6.25 * h - 5 * a - 161;
      }
      
      const tdee = bmr * calActivity;
      setCalResult(Math.round(tdee));
    }
  };

  return (
    <div className="flex flex-col text-left">
      <PageHero
        title="Metabolic Nutrition Coaching."
        description="Ditch starvation structures. Learn to balance macro targets, calculate baseline caloric burn rates, and fuel your muscle recovery."
        tagline="Satiety science"
      />

      {/* Interactive Meal Plans Switcher */}
      <section className="py-20 bg-white dark:bg-stone-900 transition-colors duration-300">
        <Container>
          <SectionHeading
            title="Spec-Designed Metabolic Meal Profiles"
            subtitle="Explore balanced whole-food models. Select representing calorie tiers optimized for active citizens."
            tagline="Meal Protocols"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Meal selector list (Left) */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {mealPlans.map((plan) => {
                const isSelected = selectedPlanId === plan.id;
                return (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={`p-5 rounded-xl border text-left flex items-start gap-4 transition-all duration-300 cursor-pointer outline-none ${
                      isSelected
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-500/10'
                        : 'bg-slate-50 dark:bg-stone-950 border-slate-200/80 dark:border-stone-850/80 text-slate-800 dark:text-stone-300 hover:bg-slate-100 dark:hover:bg-stone-900'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-white/20 text-white' : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'} shrink-0`}>
                      <Apple size={18} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm uppercase tracking-wide leading-tight mb-1">
                        {plan.title.replace('Plan', '')}
                      </h4>
                      <p className={`text-xs ${isSelected ? 'text-white/80' : 'text-slate-500 dark:text-stone-500'}`}>
                        {plan.goal}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* active meal detailed profile (Right) */}
            <div className="lg:col-span-8 p-6 lg:p-8 bg-slate-50 dark:bg-stone-950/20 border border-slate-200/80 dark:border-stone-850/80 rounded-2xl flex flex-col gap-6 text-left">
              <div>
                <Badge variant="primary" className="mb-2">MACRO CALIBRATED</Badge>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white capitalize">
                  {activeMealPlan.title}
                </h3>
                <p className="mt-2 text-xs font-semibold text-slate-500 dark:text-stone-400 leading-relaxed">
                  {activeMealPlan.description}
                </p>
              </div>

              {/* Macros values row */}
              <div className="grid grid-cols-4 gap-3 bg-white dark:bg-stone-900/60 p-4 border border-slate-200/50 dark:border-stone-800 rounded-xl">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold block mb-0.5 uppercase">PROTEIN</span>
                  <strong className="text-emerald-600 dark:text-emerald-400 text-sm md:text-base font-black">{activeMealPlan.macros.protein}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold block mb-0.5 uppercase">CARBS</span>
                  <strong className="text-slate-805 dark:text-white text-sm md:text-base font-black">{activeMealPlan.macros.carbs}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold block mb-0.5 uppercase">FATS</span>
                  <strong className="text-slate-805 dark:text-white text-sm md:text-base font-black">{activeMealPlan.macros.fats}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold block mb-0.5 uppercase">CALORIES</span>
                  <strong className="text-rose-500 text-sm md:text-base font-black">{activeMealPlan.macros.calories}</strong>
                </div>
              </div>

              {/* Meals list items block */}
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase text-slate-900 dark:text-white tracking-widest border-b border-slate-100 dark:border-stone-900 pb-2 flex items-center gap-1">
                  <CheckSquare size={13} className="text-emerald-500" />
                  <span>Meal Sequences Structure</span>
                </h4>
                
                <div className="space-y-3.5 text-xs sm:text-sm font-medium">
                  <div className="flex gap-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 w-24 shrink-0 pt-0.5">BREAKFAST:</span>
                    <p className="text-slate-600 dark:text-stone-400 leading-relaxed font-semibold">{activeMealPlan.meals.breakfast}</p>
                  </div>
                  <div className="flex gap-3 border-t border-dashed border-slate-100 dark:border-stone-900 pt-3.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 w-24 shrink-0 pt-0.5">LUNCH:</span>
                    <p className="text-slate-600 dark:text-stone-400 leading-relaxed font-semibold">{activeMealPlan.meals.lunch}</p>
                  </div>
                  <div className="flex gap-3 border-t border-dashed border-slate-100 dark:border-stone-900 pt-3.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 w-24 shrink-0 pt-0.5">MID SNACK:</span>
                    <p className="text-slate-600 dark:text-stone-400 leading-relaxed font-semibold">{activeMealPlan.meals.snack}</p>
                  </div>
                  <div className="flex gap-3 border-t border-dashed border-slate-100 dark:border-stone-900 pt-3.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 w-24 shrink-0 pt-0.5">DINNER:</span>
                    <p className="text-slate-600 dark:text-stone-400 leading-relaxed font-semibold">{activeMealPlan.meals.dinner}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Practical Nutrition Advice Cards */}
      <section className="py-20 bg-slate-50 dark:bg-stone-950 transition-colors duration-300">
        <Container>
          <SectionHeading
            title="Satiety & Loading Guidelines"
            subtitle="Understand core mechanical elements of food intake to support muscle gains and cell hydration."
            tagline="Coaching Tips"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nutritionTips.map((tip) => (
              <div
                key={tip.id}
                className="p-6 bg-white dark:bg-stone-900 border border-slate-200/80 dark:border-stone-850/80 rounded-xl flex flex-col items-start text-left hover:border-emerald-500/20 transition-all duration-300"
              >
                <Badge variant="outline" className="mb-3">{tip.category}</Badge>
                <h4 className="font-bold text-sm lg:text-base text-slate-900 dark:text-white mb-2 uppercase tracking-wide">{tip.title}</h4>
                <p className="text-xs text-slate-500 dark:text-stone-400 leading-relaxed font-semibold">{tip.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Two interactive functional physical Calculators */}
      <section className="py-20 bg-white dark:bg-stone-900 transition-colors duration-300">
        <Container className="max-w-5xl">
          <SectionHeading
            title="Metabolic Metrology Metrics Tools"
            subtitle="Use our fully functional calculators to audit Body Mass Index values or configure required Daily Energy Expenditures."
            tagline="Calculators Panel"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Calculator 1: BMI */}
            <div className="p-6 lg:p-8 bg-slate-50 dark:bg-stone-950 border border-slate-200/80 dark:border-stone-850/80 rounded-2xl flex flex-col text-left">
              <div className="flex items-center gap-2 mb-6 border-b border-slate-200/50 dark:border-stone-900 pb-4">
                <Sliders size={20} className="text-emerald-500" />
                <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-900 dark:text-white">BMI Body Index Calculator</h3>
              </div>

              <form onSubmit={calculateBMI} className="space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="bmi-weight-input" className="block text-xs font-black uppercase text-slate-650 dark:text-stone-400 mb-1.5">Weight (in Kilograms)</label>
                    <input
                      id="bmi-weight-input"
                      type="number"
                      value={bmiWeight}
                      onChange={(e) => setBmiWeight(e.target.value)}
                      className="w-full py-3 px-4 rounded-lg bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-800 text-xs font-bold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="e.g. 75"
                      min="30"
                      max="250"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="bmi-height-input" className="block text-xs font-black uppercase text-slate-650 dark:text-stone-400 mb-1.5">Height (in Centimeters)</label>
                    <input
                      id="bmi-height-input"
                      type="number"
                      value={bmiHeight}
                      onChange={(e) => setBmiHeight(e.target.value)}
                      className="w-full py-3 px-4 rounded-lg bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-800 text-xs font-bold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="e.g. 178"
                      min="100"
                      max="250"
                      required
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider transition-colors shadow-md shadow-emerald-500/10 cursor-pointer outline-none"
                  >
                    Calculate BMI Index
                  </button>
                </div>
              </form>

              {/* BMI score output */}
              <AnimatePresence mode="wait">
                {bmiResult !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-6 p-4 bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 rounded-xl"
                  >
                    <div className="flex justify-between items-center text-xs font-black uppercase mb-1.5">
                      <span className="text-slate-500 dark:text-stone-400">BMI Metric Score</span>
                      <span className="text-emerald-600 dark:text-emerald-450">{bmiClass}</span>
                    </div>
                    <span className="text-3xl font-black text-slate-900 dark:text-white leading-none">{bmiResult}</span>
                    <p className="text-[10px] text-slate-400 dark:text-stone-500 font-bold mt-1.5">
                      * Healthy range operates between 18.5 and 24.9. Consult coach for deeper analysis.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Calculator 2: Caloric Burn Tracker (TDEE) */}
            <div className="p-6 lg:p-8 bg-slate-50 dark:bg-stone-950 border border-slate-200/80 dark:border-stone-850/80 rounded-2xl flex flex-col text-left">
              <div className="flex items-center gap-2 mb-6 border-b border-slate-200/50 dark:border-stone-900 pb-4">
                <Flame size={20} className="text-rose-500" />
                <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-900 dark:text-white">Daily Calorie Expenditure (TDEE)</h3>
              </div>

              <form onSubmit={calculateCalories} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cal-weight-input" className="block text-xs font-black uppercase text-slate-650 dark:text-stone-400 mb-1.5">Weight (kg)</label>
                    <input
                      id="cal-weight-input"
                      type="number"
                      value={calWeight}
                      onChange={(e) => setCalWeight(e.target.value)}
                      className="w-full py-3 px-4 rounded-lg bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-800 text-xs font-bold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                      min="30"
                      max="250"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cal-height-input" className="block text-xs font-black uppercase text-slate-650 dark:text-stone-400 mb-1.5">Height (cm)</label>
                    <input
                      id="cal-height-input"
                      type="number"
                      value={calHeight}
                      onChange={(e) => setCalHeight(e.target.value)}
                      className="w-full py-3 px-4 rounded-lg bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-800 text-xs font-bold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                      min="100"
                      max="250"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cal-age-input" className="block text-xs font-black uppercase text-slate-650 dark:text-stone-400 mb-1.5">Age (years)</label>
                    <input
                      id="cal-age-input"
                      type="number"
                      value={calAge}
                      onChange={(e) => setCalAge(e.target.value)}
                      className="w-full py-3 px-4 rounded-lg bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-800 text-xs font-bold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                      min="12"
                      max="110"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cal-gender-select" className="block text-xs font-black uppercase text-slate-650 dark:text-stone-400 mb-1.5">Biological Gender</label>
                    <select
                      id="cal-gender-select"
                      value={calGender}
                      onChange={(e) => setCalGender(e.target.value as 'male' | 'female')}
                      className="w-full py-3 px-4 rounded-lg bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-800 text-xs font-bold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="male">Male (+5 BMR)</option>
                      <option value="female">Female (-161 BMR)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="cal-activity-select" className="block text-xs font-black uppercase text-slate-650 dark:text-stone-400 mb-1.5">Weekly Work Frequency</label>
                  <select
                    id="cal-activity-select"
                    value={calActivity}
                    onChange={(e) => setCalActivity(parseFloat(e.target.value))}
                    className="w-full py-3 px-4 rounded-lg bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-800 text-xs font-bold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="1.2">Sedentary (desk job, zero class)</option>
                    <option value="1.375">Lightly Active (1-2 classes/wk)</option>
                    <option value="1.55">Moderately Active (3-4 workouts/wk)</option>
                    <option value="1.725">Very Active (5-6 sports splits/wk)</option>
                    <option value="1.9">Elite Level (Double daily lifters)</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider transition-colors shadow-md shadow-emerald-500/10 cursor-pointer outline-none"
                  >
                    Calculate Target TDEE Calories
                  </button>
                </div>
              </form>

              {/* TDEE score output */}
              <AnimatePresence mode="wait">
                {calResult !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/20 rounded-xl"
                  >
                    <div className="text-xs font-black uppercase mb-1.5 text-slate-500 dark:text-stone-400">
                      Estimated Daily Maintenance
                    </div>
                    <span className="text-3xl font-black text-slate-900 dark:text-white leading-none">
                      {calResult} <span className="text-xs font-bold text-rose-500">kcal / day</span>
                    </span>
                    <p className="text-[10px] text-slate-400 dark:text-stone-500 font-bold mt-1.5">
                      * To trigger safe fat loss, subtract 300-500 kcal from this. To build muscle, add 300 kcal.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
