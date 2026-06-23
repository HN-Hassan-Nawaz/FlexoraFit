import { Testimonial } from '../../types';
import { Star, Quote, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface TestimonialCardProps {
  testimonial: Testimonial;
  id?: string;
  key?: string | number;
}

export default function TestimonialCard({ testimonial, id }: TestimonialCardProps) {
  return (
    <motion.div
      id={id}
      whileHover={{ y: -4 }}
      className="flex flex-col bg-white dark:bg-stone-900 border border-slate-200/80 dark:border-stone-800/80 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300"
    >
      {/* Stars and Quote Icon */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-0.5" aria-label={`Rating: ${testimonial.rating} stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={15}
              className={i < testimonial.rating ? 'fill-emerald-400 text-emerald-400' : 'text-slate-200 dark:text-stone-800'}
            />
          ))}
        </div>
        <Quote size={24} className="text-emerald-500/10 rotate-180 shrink-0" />
      </div>

      {/* Quote Message */}
      <blockquote className="text-sm lg:text-base text-slate-700 dark:text-stone-300 mb-6 italic leading-relaxed flex-grow">
        "{testimonial.quote}"
      </blockquote>

      {/* BEFORE / AFTER Achievement highlight tag */}
      <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 rounded-lg mb-6 text-xs font-bold text-emerald-700 dark:text-emerald-400 shadow-inner">
        <Award size={15} className="shrink-0" />
        <span className="truncate">{testimonial.achievement}</span>
      </div>

      {/* Client Profile Footer */}
      <div className="flex items-center gap-3.5 border-t border-slate-100 dark:border-stone-800/60 pt-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="flex flex-col text-left">
          <span className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
            {testimonial.name}
          </span>
          <span className="text-xs font-medium text-slate-500 dark:text-stone-400">
            {testimonial.role}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
