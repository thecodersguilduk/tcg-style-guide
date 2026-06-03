import React from 'react';

/**
 * Button — 6 variants, pill shape per TCG Style Sheet 2026 social designs.
 *
 * Variants:
 *   primary        Navy bg, sand text (default brand action)
 *   secondary      Sand bg, navy text (light surfaces)
 *   cta            Red bg, white text (call-to-action / urgent)
 *   teal           Teal bg, sand text (courses / positive)
 *   outlineNavy    Transparent, navy border + navy text (light bgs)
 *   outlineSand    Transparent, sand border + sand text (dark bgs)
 */

const base =
  'inline-flex items-center justify-center rounded-full font-semibold ' +
  'transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ' +
  'disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

const sizes = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-2.5 text-base',
  lg: 'px-9 py-3.5 text-lg',
};

const variants = {
  primary:
    'bg-navy text-sand hover:bg-navy-light focus-visible:outline-navy',
  secondary:
    'bg-sand text-navy hover:bg-sand-light focus-visible:outline-sand',
  cta:
    'bg-red text-white hover:bg-red-light focus-visible:outline-red',
  teal:
    'bg-teal text-sand hover:bg-teal-light focus-visible:outline-teal',
  outlineNavy:
    'border-2 border-navy text-navy hover:bg-navy hover:text-sand focus-visible:outline-navy',
  outlineSand:
    'border-2 border-sand text-sand hover:bg-sand hover:text-navy focus-visible:outline-sand',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) {
  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
