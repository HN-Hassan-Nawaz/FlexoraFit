import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  id?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  tagline,
  align = 'center',
  className = '',
  id
}: SectionHeadingProps) {
  const alignmentStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <div id={id} className={`flex flex-col mb-12 lg:mb-16 md:max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${alignmentStyles[align]} ${className}`}>
      {tagline && (
        <span className="text-xs font-bold tracking-widest text-emerald-500 uppercase mb-3">
          {tagline}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white capitalize">
        {title}
      </h2>
      <div className="w-12 h-1 bg-emerald-500 mt-4 rounded-full" />
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-stone-400 font-medium leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
