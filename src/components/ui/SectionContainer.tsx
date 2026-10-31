import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: 'section' | 'div' | 'header' | 'footer' | 'nav';
  id?: string;
  className?: string;
  children: React.ReactNode;
  width?: 'default' | 'narrow' | 'wide' | 'full';
  noPadding?: boolean;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  as: Component = 'section',
  id,
  className,
  children,
  width = 'default',
  noPadding = false,
  ...props
}) => {
  const widthClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-[1440px]',
    full: 'max-w-full',
  };

  const containerClasses = twMerge(
    clsx(
      'w-full mx-auto',
      widthClasses[width],
      !noPadding && 'px-4 sm:px-6 lg:px-8',
      className
    )
  );

  return (
    <Component id={id} className={containerClasses} {...props}>
      {children}
    </Component>
  );
};

