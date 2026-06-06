import React from 'react';
import Button from './Button';

/**
 * Hero — Full-width section with real brand shapes rotating continuously.
 * Shapes extracted from the live site MHTML — three distinct SVG forms
 * used as floating decorative background elements.
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
      {/* Real brand shapes — rotating decorative elements from site */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Teal square — top right */}
        <img
          src="/assets/shape-square.svg"
          alt=""
          className="absolute spin-cw text-teal"
          style={{
            width: '80px',
            height: '80px',
            top: '15%',
            right: '12%',
            filter: 'brightness(0) saturate(100%) invert(37%) sepia(60%) saturate(500%) hue-rotate(145deg)',
          }}
        />
        {/* Red arch — top right area */}
        <img
          src="/assets/shape-arch.svg"
          alt=""
          className="absolute spin-ccw"
          style={{
            width: '200px',
            height: '200px',
            top: '5%',
            right: '5%',
            filter: 'brightness(0) saturate(100%) invert(18%) sepia(96%) saturate(5574%) hue-rotate(4deg) brightness(95%)',
          }}
        />
        {/* Sand semicircle — bottom right */}
        <img
          src="/assets/shape-semicircle.svg"
          alt=""
          className="absolute spin-cw"
          style={{
            width: '300px',
            height: '300px',
            bottom: '-5%',
            right: '10%',
            opacity: 0.3,
            filter: 'brightness(0) saturate(100%) invert(82%) sepia(30%) saturate(500%) hue-rotate(345deg)',
          }}
        />
        {/* Sand square — middle left */}
        <img
          src="/assets/shape-square.svg"
          alt=""
          className="absolute spin-ccw"
          style={{
            width: '50px',
            height: '50px',
            top: '60%',
            left: '8%',
            opacity: 0.4,
            filter: 'brightness(0) saturate(100%) invert(82%) sepia(30%) saturate(500%) hue-rotate(345deg)',
          }}
        />
        {/* Teal arch — bottom left */}
        <img
          src="/assets/shape-arch.svg"
          alt=""
          className="absolute spin-cw"
          style={{
            width: '120px',
            height: '120px',
            bottom: '10%',
            left: '3%',
            opacity: 0.25,
            filter: 'brightness(0) saturate(100%) invert(37%) sepia(60%) saturate(500%) hue-rotate(145deg)',
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
            <Button variant="cta" onClick={() => window.location.href = ctaHref}>
              {ctaLabel}
            </Button>
            {secondaryLabel && (
              <Button variant="outline" onClick={() => window.location.href = (secondaryHref || '#')}>
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
