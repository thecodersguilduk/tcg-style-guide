import React from 'react';
import { NavBar, Hero, Button, Card, TextInput, TextArea, Select, Checkbox } from '../components';

const colours = [
  { name: 'Navy', hex: '#3A405A', token: 'navy', className: 'bg-navy' },
  { name: 'Sand', hex: '#F2D0A4', token: 'sand', className: 'bg-sand' },
  { name: 'Red', hex: '#E4200A', token: 'red', className: 'bg-red' },
  { name: 'Teal', hex: '#218380', token: 'teal', className: 'bg-teal' },
];

function Section({ title, children, dark, backdrop, backdropOpacity = 0.07 }) {
  return (
    <section className={`relative overflow-hidden py-16 px-4 sm:px-8 ${dark ? 'bg-navy text-sand' : 'bg-white text-navy'}`}>
      {backdrop && (
        <img
          src={backdrop}
          aria-hidden="true"
          className="absolute right-[-5%] top-1/2 -translate-y-1/2 h-[90%] w-auto pointer-events-none select-none"
          style={{ opacity: backdropOpacity }}
        />
      )}
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-2xl font-semibold mb-10 border-b border-current/20 pb-4">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default function StyleGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-navy px-4 sm:px-8 py-8">
        <div className="max-w-6xl mx-auto flex items-center gap-8">
          <img src="/assets/logo-light-transparent.svg" alt="The Coders Guild" className="h-24 w-auto flex-shrink-0" />
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-sand">Style Guide 2026</h1>
            <p className="mt-2 text-sand/70 font-light">Component library reference &middot; React + Tailwind</p>
          </div>
        </div>
      </div>

      {/* Logo */}
      <Section title="Logo" backdrop="/assets/icon-dark-transparent.svg">
        <p className="text-sm font-light opacity-70 mb-8">
          Four approved background colours, each with three logo variants. No other combinations are permitted.
        </p>

        {/* Column headers */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div />
          {[
            { label: 'Primary', sub: 'Full logo' },
            { label: 'Secondary', sub: 'Icon only' },
            { label: 'Tertiary', sub: 'Wordmark only' },
          ].map(({ label, sub }) => (
            <div key={label} className="text-center">
              <p className="text-xs font-semibold uppercase tracking-wider opacity-60">{label}</p>
              <p className="text-xs font-light opacity-40">{sub}</p>
            </div>
          ))}
        </div>

        {[
          { label: 'Dark (Navy)', suffix: 'dark', bg: 'bg-navy' },
          { label: 'Light (Sand)', suffix: 'light', bg: 'bg-sand' },
          { label: 'Red', suffix: 'red', bg: 'bg-red' },
          { label: 'Green', suffix: 'green', bg: 'bg-teal' },
        ].map(({ label, suffix, bg }) => (
          <div key={suffix} className="grid grid-cols-4 gap-4 mb-6 items-start">
            <p className="text-sm font-light opacity-60 pt-3">{label}</p>
            {['logo', 'icon', 'wordmark'].map(type => (
              <div key={type} className="flex flex-col gap-2">
                <div className={`${bg} rounded-xl overflow-hidden aspect-[3/2] flex items-center justify-center p-3`}>
                  <img
                    src={`/assets/${type}-${suffix}.svg`}
                    alt={`${label} ${type}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex gap-2 justify-center">
                  <a
                    href={`/assets/${type}-${suffix}.svg`}
                    download={`tcg-${type}-${suffix}.svg`}
                    className="text-xs font-medium px-3 py-1 rounded-full border border-navy/20 text-navy/60 hover:border-navy/50 hover:text-navy transition-colors"
                  >
                    SVG
                  </a>
                  {type !== 'wordmark' && (
                    <a
                      href={`/assets/${type}-${suffix}.png`}
                      download={`tcg-${type}-${suffix}.png`}
                      className="text-xs font-medium px-3 py-1 rounded-full border border-navy/20 text-navy/60 hover:border-navy/50 hover:text-navy transition-colors"
                    >
                      PNG
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </Section>

      {/* Brand Shapes */}
      <Section title="Brand Shapes" dark>
        <p className="text-sm font-light opacity-70 mb-8">
          Used as floating decorative background elements. Rotate continuously (clockwise or counterclockwise).
          Placed loosely across hero sections and content areas.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="text-center">
            <div className="bg-sand/10 rounded-xl p-8 flex items-center justify-center h-48">
              <img src="/assets/shape-square.svg" alt="Square" className="spin-cw w-16 h-16 text-teal"
                style={{ filter: 'brightness(0) saturate(100%) invert(37%) sepia(60%) saturate(500%) hue-rotate(145deg)' }} />
            </div>
            <p className="mt-3 font-semibold">Square</p>
            <p className="text-sm font-light opacity-70">54&times;54, rotated rect</p>
          </div>
          <div className="text-center">
            <div className="bg-sand/10 rounded-xl p-8 flex items-center justify-center h-48">
              <img src="/assets/shape-arch.svg" alt="Arch" className="spin-ccw w-24 h-24"
                style={{ filter: 'brightness(0) saturate(100%) invert(18%) sepia(96%) saturate(5574%) hue-rotate(4deg) brightness(95%)' }} />
            </div>
            <p className="mt-3 font-semibold">Arch</p>
            <p className="text-sm font-light opacity-70">150&times;150, curved triangle</p>
          </div>
          <div className="text-center">
            <div className="bg-sand/10 rounded-xl p-8 flex items-center justify-center h-48">
              <img src="/assets/shape-semicircle.svg" alt="Semicircle" className="spin-cw w-32 h-32"
                style={{ filter: 'brightness(0) saturate(100%) invert(82%) sepia(30%) saturate(500%) hue-rotate(345deg)' }} />
            </div>
            <p className="mt-3 font-semibold">Semicircle</p>
            <p className="text-sm font-light opacity-70">298&times;297, large arch</p>
          </div>
          <div className="text-center">
            <div className="bg-sand/10 rounded-xl p-8 flex items-center justify-center h-48">
              <img src="/assets/icon-light-transparent.svg" alt="Icon mark" className="h-28 w-auto" />
            </div>
            <p className="mt-3 font-semibold">Icon mark</p>
            <p className="text-sm font-light opacity-70">519&times;557, full brand mark</p>
          </div>
        </div>

        <p className="text-xs font-light opacity-50 mb-4">Shapes appear in all 4 brand colours depending on the page/section:</p>
        <div className="flex gap-4">
          {colours.map(({ name, className }) => (
            <div key={name} className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded ${className}`} />
              <span className="text-xs font-light opacity-70">{name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Colours */}
      <Section title="Colours">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {colours.map(({ name, hex, token, className }) => (
            <div key={token}>
              <div className={`${className} h-28 rounded-xl`} />
              <p className="mt-3 font-semibold">{name}</p>
              <p className="text-sm font-light opacity-70">{hex}</p>
              <code className="text-xs font-light opacity-50">{token}</code>
            </div>
          ))}
        </div>
      </Section>

      {/* Typography */}
      <Section title="Typography" dark backdrop="/assets/icon-light-outline.svg" backdropOpacity={0.15}>
        <div className="grid gap-10">
          <div>
            <p className="text-xs uppercase tracking-wider opacity-50 mb-2">Poppins Semibold (600)</p>
            <p className="text-4xl font-semibold">Aa Bb Cc Dd Ee Ff Gg Hh Ii</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider opacity-50 mb-2">Poppins Medium (500)</p>
            <p className="text-4xl font-medium">Aa Bb Cc Dd Ee Ff Gg Hh Ii</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider opacity-50 mb-2">Poppins Regular (400)</p>
            <p className="text-4xl font-normal">Aa Bb Cc Dd Ee Ff Gg Hh Ii</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider opacity-50 mb-2">Poppins Light (300)</p>
            <p className="text-4xl font-light">Aa Bb Cc Dd Ee Ff Gg Hh Ii</p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-xs uppercase tracking-wider opacity-50 mb-4">Site type scale</p>
          <div className="grid gap-3">
            <div>
              <p className="font-semibold leading-[1.1em]" style={{ fontSize: '5vw' }}>Primary heading (5vw / 600)</p>
            </div>
            <div>
              <p className="font-semibold leading-[1.1em]" style={{ fontSize: '3vw' }}>Secondary heading (3vw / 600)</p>
            </div>
            <div>
              <p className="font-normal leading-[1.3em]" style={{ fontSize: '17px' }}>Body text (17px / 400) &mdash; Government-funded digital apprenticeships and training for growing businesses.</p>
            </div>
            <div>
              <p className="font-semibold leading-none" style={{ fontSize: '20px' }}>Button / accent text (20px / 600)</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Buttons */}
      <Section title="Buttons">
        <p className="text-sm font-light opacity-70 mb-8">
          Pill shape (border-radius: 40px). Padding: 13px 24px 15px 27px. Font: Poppins Medium 20px.
        </p>

        <div className="space-y-10">
          {/* Variants on light bg */}
          <div>
            <p className="text-xs uppercase tracking-wider opacity-50 mb-4">On light background</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="cta">Contact Us</Button>
              <Button variant="outlineNavy">Learn More</Button>
            </div>
          </div>

          {/* On dark bg */}
          <div className="bg-navy rounded-xl p-6">
            <p className="text-xs uppercase tracking-wider text-sand/50 mb-4">On dark background</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="cta">Contact Us</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>

          {/* Disabled */}
          <div>
            <p className="text-xs uppercase tracking-wider opacity-50 mb-4">Disabled (inferred)</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="cta" disabled>Contact Us</Button>
              <Button variant="outlineNavy" disabled>Learn More</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Cards */}
      <Section title="Cards" dark>
        <p className="text-sm font-light opacity-70 mb-8">
          Border-radius: 1rem. Shadow: rgba(0,0,0,0.08) 0 0 26px 0. Hover: translateY(-2px). Padding: 40px.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card variant="navy" tag="Feature" title="Navy Card">
            Default dark card for features and general content.
          </Card>
          <Card variant="sand" tag="Testimonial" title="Sand Card">
            Light card for quotes, testimonials, and neutral content.
          </Card>
          <Card
            variant="red"
            tag="Urgent"
            title="Red Card"
            action={<Button variant="outline">Get in touch</Button>}
          >
            Hiring alerts and urgent call-to-action cards.
          </Card>
          <Card
            variant="teal"
            tag="Course"
            title="Teal Card"
            action={<Button variant="outline">Learn more</Button>}
          >
            Course highlights and positive information.
          </Card>
        </div>
      </Section>

      {/* NavBar */}
      <Section title="NavBar">
        <p className="text-sm font-light opacity-70 mb-8">
          White/transparent background, navy text (#3A405A), hover red (#E4200A). Real logo. Red CTA.
        </p>
        <div className="rounded-xl overflow-hidden border border-navy/10">
          <NavBar />
        </div>
      </Section>

      {/* Hero */}
      <Section title="Hero">
        <p className="text-sm font-light opacity-70 mb-8">
          Navy background with real brand shapes (square, arch, semicircle) rotating continuously.
        </p>
        <div className="rounded-xl overflow-hidden">
          <Hero
            title="Industry-Led, Community Driven."
            subtitle="Government-funded digital apprenticeships and training for growing businesses."
            ctaLabel="Get Started"
            secondaryLabel="Learn More"
          />
        </div>
      </Section>

      {/* Form Inputs */}
      <Section title="Form Inputs (Inferred)" dark>
        <p className="text-sm font-light opacity-70 mb-2">
          Not found in source material. Styles are inferred from the brand palette.
        </p>
        <p className="text-xs font-light text-red/80 mb-8">See NOTES.md for details.</p>
        <div className="bg-white rounded-xl p-8 text-navy max-w-lg">
          <div className="flex flex-col gap-5">
            <TextInput label="Text input" id="demo-text" placeholder="Placeholder text" />
            <TextInput label="With error" id="demo-error" error="This field is required" />
            <Select
              label="Select"
              id="demo-select"
              placeholder="Choose one..."
              options={[
                { value: '1', label: 'Apprenticeships' },
                { value: '2', label: 'Skills Bootcamps' },
                { value: '3', label: 'Team Upskilling' },
              ]}
            />
            <TextArea label="Textarea" id="demo-textarea" placeholder="Write something..." rows={3} />
            <Checkbox label="Checkbox label" id="demo-check" />
            <Button variant="cta" className="self-start">Submit</Button>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-navy py-8 px-4 sm:px-8">
        <p className="text-center text-sand/50 text-sm font-light">
          TCG Style Guide 2026 &middot; Component Library Reference
        </p>
      </footer>
    </div>
  );
}
