import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className,
  titleClassName,
  subtitleClassName,
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  const isDark = theme === 'dark';

  return (
    <div className={twMerge(clsx('flex flex-col mb-10 sm:mb-14', alignClasses[align], className))}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1 mb-3.5 rounded-full text-xs font-semibold tracking-wider uppercase border ${
            isDark
              ? 'text-gold-light bg-gold/10 border-gold/30'
              : 'text-gold-deep bg-gold/10 border-gold/30'
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-gold-light' : 'bg-gold-deep'}`} />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2
        className={twMerge(
          clsx(
            'font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.2]',
            isDark ? 'text-white' : 'text-navy-900',
            titleClassName
          )
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={twMerge(
            clsx(
              'mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed',
              isDark ? 'text-slate-300' : 'text-slate-600',
              subtitleClassName
            )
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
