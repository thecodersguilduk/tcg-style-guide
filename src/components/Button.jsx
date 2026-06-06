import React from 'react';

/**
 * Button — 3 variants matching the live TCG website.
 *
 * Variants:
 *   cta           Red bg, white text (primary CTA — "Contact Us")
 *   outline       Transparent, white border + text (secondary on dark sections)
 *   outlineNavy   Transparent, navy border + navy text (secondary on light sections)
 *
 * Real CSS values from site: border-radius 40px, padding 13px 24px 15px 27px,
 * font-weight 500, font-size 20px, transition 0.2s.
 */

const variants = {
  cta:
    'bg-red text-white hover:bg-red/90 focus-visible:outline-red',
  outline:
    'border-2 border-white text-white hover:border-navy hover:text-navy hover:bg-white focus-visible:outline-white',
  outlineNavy:
    'border-2 border-navy text-navy hover:border-red hover:text-red focus-visible:outline-navy',
};

export default function Button({
  variant = 'cta',
  children,
  className = '',
  ...props
}) {
  return (
    <button
      className={[
        'inline-flex items-center justify-center font-medium text-[20px] leading-none',
        'transition-colors duration-200 cursor-pointer',
        'focus-visible:outline-2 focus-visible:outline-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        className,
      ].join(' ')}
      style={{ borderRadius: '40px', padding: '13px 24px 15px 27px' }}
      {...props}
    >
      {children}
    </button>
  );
}
