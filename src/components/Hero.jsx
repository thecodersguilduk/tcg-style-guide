import React from 'react';
import Button from './Button';

/**
 * Hero — Full-width section, navy background with decorative brand shapes.
 * Follows the presentation title-slide pattern from TCG Style Sheet 2026:
 * large Poppins Semibold heading, lighter subheading, and a CTA pill button.
 */

export default function Hero({
  title = 'Industry-Led, Community Driven.',
  subtitle = 'Government-funded digital apprenticeships and training for growing businesses.',
  ctaLabel = 'Get Started',
  ctaHref = '#contact',
  secondaryLabel,
  secondaryHref,
}) {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Decorative brand shapes — diamond + circle outlines from cover page */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Rotated diamond */}
        <div
          className="absolute border-2 border-sand/20"
          style={{
            width: '500px',
            height: '500px',
            top: '10%',
            right: '5%',
            transform: 'rotate(45deg)',
          }}
        />
        {/* Circle */}
        <div
          className="absolute rounded-full border-2 border-sand/20"
          style={{
            width: '400px',
            height: '400px',
            top: '20%',
            right: '-5%',
          }}
        />
        {/* Smaller diamond */}
        <div
          className="absolute border-2 border-sand/10"
          style={{
            width: '300px',
            height: '300px',
            bottom: '-10%',
            right: '15%',
            transform: 'rotate(45deg)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-sand leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 text-lg sm:text-xl font-light text-sand/80 leading-relaxed max-w-xl">
              {subtitle}
            </p>
          )}

          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="cta" size="lg" onClick={() => window.location.href = ctaHref}>
              {ctaLabel}
            </Button>
            {secondaryLabel && (
              <Button variant="outlineSand" size="lg" onClick={() => window.location.href = (secondaryHref || '#')}>
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
