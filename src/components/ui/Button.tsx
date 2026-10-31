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
      'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100';

    const sizeClasses = {
      sm: 'text-xs px-3.5 py-2 min-h-[38px] gap-1.5',
      md: 'text-sm px-5 py-2.5 min-h-[44px] gap-2 font-semibold',
      lg: 'text-base px-6 py-3.5 min-h-[48px] gap-2.5 font-semibold',
    };

    const variantClasses = {
      primary:
        'bg-gold text-navy-950 hover:bg-gold-hover shadow-gold-sm hover:shadow-gold-md hover:-translate-y-0.5 border border-gold/30',
      outline:
        'border border-gold/50 text-gold-light bg-gold/5 hover:bg-gold/15 hover:border-gold hover:text-white',
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
          {iconRight && <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">{iconRight}</span>}
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
        {iconRight && <span className="shrink-0">{iconRight}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
