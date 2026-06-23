import { PricingPlan } from '../../types';
import { Check, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface PricingCardProps {
  plan: PricingPlan;
  onSelect?: (plan: PricingPlan) => void;
  id?: string;
  key?: string | number;
}

export default function PricingCard({ plan, onSelect, id }: PricingCardProps) {
  return (
    <motion.div
      id={id}
      whileHover={{ y: plan.isPopular ? -10 : -6, transition: { duration: 0.2 } }}
      className={`relative flex flex-col rounded-2xl p-6 lg:p-8 overflow-hidden transition-all duration-300 border ${
        plan.isPopular
          ? 'bg-neutral-900 border-emerald-500 shadow-xl shadow-emerald-500/5 text-white scale-100 lg:scale-[1.03]'
          : 'bg-white dark:bg-stone-900 border-slate-200/80 dark:border-stone-800/80 text-slate-900 dark:text-stone-300 shadow-sm'
      }`}
    >
      {/* Decorative Popular Banner */}
      {plan.isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-emerald-500 text-stone-950 text-[10px] font-black tracking-widest uppercase px-4 py-1.5 rounded-bl-xl shadow-sm">
            RECOMMENDED
          </div>
        </div>
      )}

      {/* Plan Header */}
      <div className="mb-6">
        <h3 className={`text-xl lg:text-2xl font-black ${plan.isPopular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
          {plan.name}
        </h3>
        <p className={`mt-2 text-xs font-semibold leading-relaxed ${plan.isPopular ? 'text-stone-400' : 'text-slate-500 dark:text-stone-400'}`}>
          {plan.description}
        </p>
      </div>

      {/* Pricing Rate */}
      <div className="flex items-baseline mb-6 border-b border-dashed border-slate-200 dark:border-stone-800 pb-6">
        <span className={`text-4xl lg:text-5xl font-extrabold tracking-tight ${plan.isPopular ? 'text-emerald-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
          {plan.price}
        </span>
        <span className={`ml-1.5 text-sm font-semibold ${plan.isPopular ? 'text-stone-400' : 'text-slate-500 dark:text-stone-400'}`}>
          {plan.period}
        </span>
      </div>

      {/* Plan Features */}
      <ul className="space-y-3.5 mb-8 flex-grow">
        {plan.features.map((feat, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-xs lg:text-sm font-medium leading-relaxed">
            {plan.isPopular ? (
              <Check size={16} className="text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <Check size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            )}
            <span className={plan.isPopular ? 'text-stone-300' : 'text-slate-600 dark:text-stone-300'}>
              {feat}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onClick={() => onSelect?.(plan)}
        className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer outline-none focus:ring-2 focus:ring-emerald-500 ${
          plan.isPopular
            ? 'bg-emerald-500 hover:bg-emerald-400 text-stone-950 hover:shadow-lg hover:shadow-emerald-500/20 font-extrabold'
            : 'bg-stone-50 text-slate-900 border border-slate-200 dark:bg-stone-950 dark:text-white dark:border-stone-800 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white hover:border-emerald-600'
        }`}
      >
        <span className="flex items-center justify-center gap-1.5">
          {plan.isPopular && <ShieldCheck size={16} className="shrink-0" />}
          {plan.buttonText}
        </span>
      </button>
    </motion.div>
  );
}
