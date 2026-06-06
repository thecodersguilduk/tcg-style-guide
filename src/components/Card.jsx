import React from 'react';

/**
 * Card — 4 variants matching TCG social media card styles.
 *
 * Real CSS values from site:
 *   border-radius: 1rem
 *   shadow: rgba(0, 0, 0, 0.08) 0px 0px 26px 0px
 *   hover: translateY(-2px)
 *   padding: 40px
 */

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
    <div
      className={`overflow-hidden transition-transform duration-200 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
      style={{
        borderRadius: '1rem',
        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0px 26px 0px',
      }}
    >
      {image && (
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="flex flex-col gap-3" style={{ padding: '40px' }}>
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
