import { ReactNode } from 'react';
import Container from './Container';

interface PageHeroProps {
  title: string;
  description: string;
  tagline?: string;
  extraContent?: ReactNode;
  id?: string;
}

export default function PageHero({
  title,
  description,
  tagline,
  extraContent,
  id
}: PageHeroProps) {
  return (
    <section
      id={id}
      className="relative overflow-hidden bg-gradient-to-b from-stone-100 to-white dark:from-stone-950 dark:to-neutral-900 border-b border-slate-200/60 dark:border-stone-800/60 pt-28 pb-16 md:pt-36 md:pb-24 transition-colors duration-300"
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 -right-24 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          {tagline && (
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase tracking-widest mb-4">
              {tagline}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            {title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-stone-400 font-medium leading-relaxed">
            {description}
          </p>
          {extraContent && <div className="mt-8">{extraContent}</div>}
        </div>
      </Container>
    </section>
  );
}
