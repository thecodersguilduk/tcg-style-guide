import React, { useState } from 'react';
import Button from './Button';

/**
 * NavBar — Navy background, sand links, red CTA.
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
  ctaLabel = 'Get in Touch',
  ctaHref = '#contact',
}) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-navy sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Wordmark */}
          <a href="/" className="flex items-center gap-2 shrink-0" aria-label="Home">
            <LogoMark className="h-8 w-8 text-sand" />
            <span className="hidden sm:block text-sand font-semibold text-lg leading-tight">
              The<br />Coders Guild
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sand text-sm font-normal hover:text-sand-light transition-colors"
              >
                {label}
              </a>
            ))}
            <Button variant="cta" size="sm" onClick={() => window.location.href = ctaHref}>
              {ctaLabel}
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-sand p-2"
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
        <div className="md:hidden border-t border-sand/20 px-4 pb-4 pt-2 flex flex-col gap-2">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sand text-sm py-2 hover:text-sand-light transition-colors"
            >
              {label}
            </a>
          ))}
          <Button variant="cta" size="sm" className="mt-2 self-start" onClick={() => window.location.href = ctaHref}>
            {ctaLabel}
          </Button>
        </div>
      )}
    </nav>
  );
}

/** Simplified TCG diamond/cross logo mark as inline SVG */
function LogoMark({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Top-left petal */}
      <circle cx="18" cy="18" r="10" />
      {/* Top-right petal */}
      <circle cx="46" cy="18" r="10" />
      {/* Bottom-left petal */}
      <circle cx="18" cy="46" r="10" />
      {/* Bottom-right petal */}
      <circle cx="46" cy="46" r="10" />
      {/* Centre diamond */}
      <rect x="20" y="20" width="24" height="24" rx="2" transform="rotate(45 32 32)" />
    </svg>
  );
}
