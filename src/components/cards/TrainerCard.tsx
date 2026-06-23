import { Trainer } from '../../types';
import { Award, Calendar, Instagram, Twitter, Linkedin, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface TrainerCardProps {
  trainer: Trainer;
  onBook?: (trainer: Trainer) => void;
  id?: string;
  key?: string | number;
}

export default function TrainerCard({ trainer, onBook, id }: TrainerCardProps) {
  return (
    <motion.div
      id={id}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="flex flex-col bg-white dark:bg-stone-900 border border-slate-200/80 dark:border-stone-800/80 rounded-xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-stone-950/20 transition-all duration-300"
    >
      {/* Visual Image */}
      <div className="relative h-64 overflow-hidden group">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        {/* Transparent Black to Highlight Social Icons */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex items-end justify-between">
          <div className="text-white">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              {trainer.experience} Experience
            </div>
            <h3 className="text-lg font-bold truncate">{trainer.name}</h3>
          </div>
          
          {/* Socials Block */}
          <div className="flex gap-2 text-white/95">
            {trainer.socials.instagram && (
              <a
                href={trainer.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-full bg-stone-900/40 hover:bg-emerald-500 hover:text-white transition-colors duration-200"
                aria-label={`${trainer.name} Instagram`}
              >
                <Instagram size={14} />
              </a>
            )}
            {trainer.socials.twitter && (
              <a
                href={trainer.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-full bg-stone-900/40 hover:bg-emerald-500 hover:text-white transition-colors duration-200"
                aria-label={`${trainer.name} Twitter`}
              >
                <Twitter size={14} />
              </a>
            )}
            {trainer.socials.linkedin && (
              <a
                href={trainer.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-full bg-stone-900/40 hover:bg-emerald-500 hover:text-white transition-colors duration-200"
                aria-label={`${trainer.name} LinkedIn`}
              >
                <Linkedin size={14} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Info Body */}
      <div className="flex flex-col flex-grow p-5">
        <div className="mb-4">
          <div className="text-xs font-bold tracking-wider text-emerald-600 dark:text-emerald-400 capitalize mb-1">
            {trainer.specialty}
          </div>
        </div>

        {/* Certifications Checklist */}
        <div className="mb-5 flex-grow">
          <div className="text-xs font-extrabold text-slate-800 dark:text-stone-300 uppercase tracking-wider mb-2 flex items-center gap-1">
            <Award size={13} className="text-emerald-500" />
            <span>Credentials</span>
          </div>
          <ul className="space-y-1">
            {trainer.certifications.map((cert, index) => (
              <li key={index} className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-stone-400 leading-normal">
                <CheckCircle size={10} className="text-emerald-500 shrink-0" />
                <span className="truncate">{cert}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Available Schedule Days */}
        <div className="flex items-center gap-2 border-t border-slate-100 dark:border-stone-800 pt-4 mb-4 text-xs font-semibold text-slate-700 dark:text-stone-400">
          <Calendar size={13} className="text-emerald-500 shrink-0 w-3.5 h-3.5" />
          <span className="truncate">
            <span className="text-slate-500 dark:text-stone-500 font-normal">Schedule:</span> {trainer.availableDays.join(', ')}
          </span>
        </div>

        {/* Action Trigger */}
        <button
          onClick={() => onBook?.(trainer)}
          className="w-full py-2.5 px-4 rounded-lg bg-stone-50 text-slate-900 dark:bg-stone-950 dark:text-white border border-slate-200 dark:border-stone-800 font-bold text-xs uppercase tracking-wider hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white hover:border-emerald-600 transition-all duration-300 cursor-pointer outline-none focus:ring-2 focus:ring-emerald-500"
        >
          Book Training Session
        </button>
      </div>
    </motion.div>
  );
}
