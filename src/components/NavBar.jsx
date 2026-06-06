import React, { useState } from 'react';
import Button from './Button';

/**
 * NavBar — White/transparent background, navy text links, red CTA.
 * Real values from site CSS: nav links #3A405A, hover #E4200A.
 * Responsive: collapses to hamburger on mobile.
 */

const defaultLinks = [
  { label: 'Employers', href: '#employers' },
  { label: 'Learners', href: '#learners' },
  { label: 'Courses', href: '#courses' },
  { label: 'About Us', href: '#about' },
  { label: 'Insights', href: '#insights' },
];

export default function NavBar({
  links = defaultLinks,
  ctaLabel = 'Contact Us',
  ctaHref = '#contact',
}) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur sticky top-0 z-50 border-b border-navy/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Real logo SVG */}
          <a href="/" className="shrink-0" aria-label="Home">
            <img
              src="/assets/logo-full.svg"
              alt="The Coders Guild"
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-navy text-sm font-normal hover:text-red transition-colors duration-200"
              >
                {label}
              </a>
            ))}
            <Button variant="cta" onClick={() => window.location.href = ctaHref}>
              {ctaLabel}
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-navy p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white rounded-b-[1rem] mt-0 px-4 pb-4 pt-2 flex flex-col gap-2" style={{ paddingLeft: '27px' }}>
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-navy text-sm py-2 hover:text-red transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <Button variant="cta" className="mt-2 self-start" onClick={() => window.location.href = ctaHref}>
            {ctaLabel}
          </Button>
        </div>
      )}
    </nav>
  );
}
