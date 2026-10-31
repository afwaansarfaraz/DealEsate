import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  href?: string;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      href,
      iconRight,
      iconLeft,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'group inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100';

    const sizeClasses = {
      sm: 'text-xs px-4 py-2 min-h-[38px] gap-1.5 tracking-wide',
      md: 'text-sm px-5 py-2.5 min-h-[44px] gap-2 tracking-wide',
      lg: 'text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 min-h-[46px] sm:min-h-[48px] gap-2.5 tracking-wide',
    };

    const variantClasses = {
      primary:
        'bg-gold text-navy-950 hover:bg-gold-hover shadow-[0_2px_12px_rgba(212,160,23,0.3)] hover:shadow-[0_4px_22px_rgba(212,160,23,0.45)] hover:-translate-y-0.5 border border-gold-light/40',
      outline:
        'bg-navy-950/60 backdrop-blur-md border border-white/25 hover:border-gold/70 text-white hover:text-gold-light hover:bg-navy-900/80 shadow-[0_2px_12px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:-translate-y-0.5',
      secondary:
        'bg-navy-900/90 text-text-primary border border-white/10 hover:border-white/20 hover:bg-navy-800',
      ghost:
        'text-text-secondary hover:text-text-primary hover:bg-white/5 border border-transparent',
    };

    const mergedClasses = twMerge(
      clsx(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        fullWidth && 'w-full',
        className
      )
    );

    if (href) {
      return (
        <a
          href={href}
          className={mergedClasses}
          ref={ref as React.Ref<HTMLAnchorElement>}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : undefined}
        >
          {iconLeft && <span className="shrink-0">{iconLeft}</span>}
          <span>{children}</span>
          {iconRight && (
            <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-1">
              {iconRight}
            </span>
          )}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={props.type || 'button'}
        className={mergedClasses}
        disabled={disabled}
        {...props}
      >
        {iconLeft && <span className="shrink-0">{iconLeft}</span>}
        <span>{children}</span>
        {iconRight && (
          <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-1">
            {iconRight}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
