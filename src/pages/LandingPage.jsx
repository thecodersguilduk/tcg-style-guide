import React from 'react';
import { NavBar, Hero, Button, Card, TextInput, TextArea, Select, Checkbox } from '../components';

const stats = [
  { value: '100%', label: 'Distinctions' },
  { value: '90%', label: 'Retention rate' },
  { value: '4.9', label: 'Star rating' },
  { value: '500+', label: 'Businesses served' },
];

const courses = [
  {
    variant: 'teal',
    tag: 'Level 4 Apprenticeship',
    title: 'Software Tester',
    body: 'Train your team in structured testing or launch your QA career. Develops practical testing capability from day one.',
  },
  {
    variant: 'navy',
    tag: 'Level 3 Apprenticeship',
    title: 'Software Developer',
    body: 'Build full-stack development skills with hands-on projects aligned to your business goals.',
  },
  {
    variant: 'teal',
    tag: 'Skills Bootcamp',
    title: 'AI & Automation',
    body: 'Upskill your team in practical AI applications. Government-funded places available for eligible businesses.',
  },
  {
    variant: 'navy',
    tag: 'Level 4 Apprenticeship',
    title: 'DevOps Engineer',
    body: 'Embed DevOps culture and CI/CD practices. Strengthen delivery pipelines and cloud infrastructure skills.',
  },
];

const testimonials = [
  {
    quote:
      'Partnering with The Coders Guild has not only upskilled our team but ingrained a culture of innovation and agility in our operations.',
    name: 'Sam Raife',
    company: 'Brand Ambition',
  },
  {
    quote:
      'The apprenticeship programme gave our junior developers a structured path to grow, and the quality of training was outstanding.',
    name: 'Jessica Park',
    company: 'Nexus Digital',
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      <Hero
        title="Industry-Led, Community Driven."
        subtitle="Government-funded AI and digital apprenticeships for growing businesses. Built for teams of 5–500."
        ctaLabel="Talk to Us"
        ctaHref="#contact"
        secondaryLabel="View Courses"
        secondaryHref="#courses"
      />

      {/* ── Stats bar ── */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl sm:text-4xl font-semibold text-navy">{value}</p>
                <p className="mt-1 text-sm font-light text-navy/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Courses ── */}
      <section id="courses" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy">Our Programmes</h2>
          <p className="mt-3 text-lg font-light text-navy/70 max-w-2xl">
            Practitioner-led training and apprenticeships aligned to your business goals.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map(({ variant, tag, title, body }) => (
              <Card
                key={title}
                variant={variant}
                tag={tag}
                title={title}
                action={
                  <Button
                    variant={variant === 'navy' ? 'outlineSand' : 'outlineSand'}
                    size="sm"
                  >
                    Learn more
                  </Button>
                }
              >
                {body}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-sand">
            Real Results for Real People and Businesses.
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {testimonials.map(({ quote, name, company }) => (
              <Card key={name} variant="sand">
                <blockquote className="text-base font-light italic leading-relaxed">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <div className="mt-4 border-t border-navy/20 pt-4">
                  <p className="font-semibold text-lg">{name}</p>
                  <p className="text-sm font-light opacity-70">{company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hiring callout ── */}
      <section className="bg-red py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">We&rsquo;re Hiring!</h2>
          <p className="mt-3 text-lg font-light text-white/80 max-w-xl mx-auto">
            Join our team of practitioner-trainers. We&rsquo;re looking for people who love tech and love teaching.
          </p>
          <Button variant="outlineSand" size="lg" className="mt-8 border-white text-white hover:bg-white hover:text-red">
            View Vacancies
          </Button>
        </div>
      </section>

      {/* ── Contact form ── */}
      <section id="contact" className="bg-sand-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-semibold text-navy text-center">Get in Touch</h2>
            <p className="mt-2 text-center text-sm font-light text-navy/70">
              Tell us about your team and we&rsquo;ll match you with the right programme.
            </p>

            <form className="mt-10 flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <TextInput label="First name" id="first-name" placeholder="Jane" />
                <TextInput label="Last name" id="last-name" placeholder="Smith" />
              </div>
              <TextInput label="Work email" id="email" type="email" placeholder="jane@company.co.uk" />
              <Select
                label="I'm interested in"
                id="interest"
                placeholder="Select an option"
                options={[
                  { value: 'apprenticeships', label: 'Apprenticeships' },
                  { value: 'bootcamps', label: 'Skills Bootcamps' },
                  { value: 'upskilling', label: 'Team Upskilling' },
                  { value: 'hiring', label: 'Hiring Apprentices' },
                ]}
              />
              <TextArea label="Anything else?" id="message" placeholder="Tell us about your team..." rows={3} />
              <Checkbox label="I agree to be contacted about training opportunities" id="consent" />
              <Button variant="cta" size="lg" className="self-start">
                Send Enquiry
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-navy py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-sand text-sm font-light">
              &copy; {new Date().getFullYear()} The Coders Guild. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((text) => (
                <a key={text} href="#" className="text-sand/60 text-sm hover:text-sand transition-colors">
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
