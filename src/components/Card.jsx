import React from 'react';

/**
 * Card — 4 variants matching TCG social media card styles.
 *
 * Variants:
 *   navy   Dark card (navy bg, sand text) — default / feature
 *   sand   Light card (sand bg, navy text) — testimonial / quote
 *   red    Urgent card (red bg, white text) — hiring / alerts
 *   teal   Info card (teal bg, sand text) — courses / highlights
 */

const base = 'rounded-2xl overflow-hidden';

const variants = {
  navy: 'bg-navy text-sand',
  sand: 'bg-sand text-navy',
  red:  'bg-red text-white',
  teal: 'bg-teal text-sand',
};

export default function Card({
  variant = 'sand',
  image,
  imageAlt = '',
  tag,
  title,
  children,
  action,
  className = '',
}) {
  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
      {image && (
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-6 flex flex-col gap-3">
        {tag && (
          <span className="text-xs font-semibold uppercase tracking-wider opacity-80">
            {tag}
          </span>
        )}

        {title && (
          <h3 className="text-xl font-semibold leading-snug">{title}</h3>
        )}

        {children && <div className="text-sm font-light leading-relaxed">{children}</div>}

        {action && <div className="mt-2">{action}</div>}
      </div>
    </div>
  );
}
