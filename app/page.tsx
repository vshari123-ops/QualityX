import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-blue-600 to-primary-800 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-accent-500 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl animate-hero-title">
            Where Quality Meets Intelligence
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-white/90 md:text-2xl animate-hero-subtitle">
            Enterprise IT talent solutions: Training, Validation, and Deployment.
            Transform aspiring professionals into job-ready experts.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center animate-hero-buttons">
            <Button href="/contact" size="lg">
              Book a Call
            </Button>
            <Button href="/services" size="lg" variant="secondary" className="border-white/50 text-white hover:bg-white/10 hover:border-white">
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* TVD Model Overview */}
      <Section>
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold text-neutral-900">
            The TVD Model
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-neutral-600">
            Our proven methodology for building verified IT talent
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card hover className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100">
              <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-neutral-900">Train</h3>
            <p className="text-neutral-600">
              Intensive, hands-on training in cutting-edge technologies with industry mentorship
            </p>
          </Card>

          <Card hover className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
              <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-neutral-900">Validate</h3>
            <p className="text-neutral-600">
              AI-powered assessments and capability scorecards to verify skills and job readiness
            </p>
          </Card>

          <Card hover className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-100">
              <svg className="h-8 w-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-neutral-900">Deploy</h3>
            <p className="text-neutral-600">
              Strategic placement with onboarding support and 30-day performance tracking
            </p>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button href="/tvd-model" variant="ghost">
            Learn more about TVD →
          </Button>
        </div>
      </Section>

      {/* Why QualityX Solutions */}
      <Section className="bg-neutral-50">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold text-neutral-900">
            Why QualityX Solutions
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-neutral-600">
            We don&apos;t just fill positions — we deliver verified talent that performs from day one
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-8 border border-neutral-200">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
              <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-neutral-900">Pre-Verified Candidates</h3>
            <p className="text-neutral-600">
              Every candidate undergoes rigorous AI-powered assessments. You receive detailed capability scorecards, not just resumes.
            </p>
          </Card>

          <Card className="p-8 border border-neutral-200">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
              <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-neutral-900">Job-Ready from Day One</h3>
            <p className="text-neutral-600">
              Our intensive training programs ensure candidates hit the ground running with hands-on experience in real-world scenarios.
            </p>
          </Card>

          <Card className="p-8 border border-neutral-200">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
              <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-neutral-900">30-Day Performance Guarantee</h3>
            <p className="text-neutral-600">
              We stand behind our placements with continuous support, performance tracking, and dedicated success managers.
            </p>
          </Card>

          <Card className="p-8 border border-neutral-200">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
              <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-neutral-900">Faster Time-to-Hire</h3>
            <p className="text-neutral-600">
              Skip lengthy screening processes. Our pre-validated talent pool means you can fill positions in weeks, not months.
            </p>
          </Card>

          <Card className="p-8 border border-neutral-200">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
              <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-neutral-900">Cost-Effective Hiring</h3>
            <p className="text-neutral-600">
              Reduce recruitment costs and minimize bad hires. Our clients save up to 40% compared to traditional hiring methods.
            </p>
          </Card>

          <Card className="p-8 border border-neutral-200">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
              <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-neutral-900">Enterprise-Ready Talent</h3>
            <p className="text-neutral-600">
              Candidates trained on enterprise-grade tools and processes, aligned with industry standards and best practices.
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-neutral-50 to-primary-50/30">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-neutral-900 md:text-5xl">
            Ready to Build Your Team?
          </h2>
          <p className="mb-10 text-xl text-neutral-600">
            Get access to our pool of trained and validated IT professionals.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" size="lg">
              Find Candidates
            </Button>
            <Button href="/case-studies" size="lg" variant="secondary">
              View Success Stories
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
