import { Metadata } from "next";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "TVD Model",
  description: "Train, Validate, Deploy - Our proven methodology for building verified IT talent and ensuring placement success.",
};

const phases = [
  {
    number: "01",
    title: "Train",
    subtitle: "Building Technical Excellence",
    color: "primary",
    description:
      "Our intensive training programs transform aspiring professionals into job-ready experts through hands-on learning and industry mentorship.",
    details: [
      {
        title: "Curriculum Design",
        description: "Industry-aligned programs developed with input from enterprise partners",
      },
      {
        title: "Hands-On Learning",
        description: "Real-world projects and scenarios using enterprise-grade tools",
      },
      {
        title: "Expert Mentorship",
        description: "Guidance from senior professionals with 10+ years of experience",
      },
      {
        title: "Flexible Formats",
        description: "Full-time bootcamps and part-time programs to fit any schedule",
      },
    ],
  },
  {
    number: "02",
    title: "Validate",
    subtitle: "Verifying Job Readiness",
    color: "accent",
    description:
      "Our AI-powered assessment platform rigorously evaluates technical skills, ensuring only qualified candidates advance to deployment.",
    details: [
      {
        title: "AI-Driven Assessments",
        description: "Comprehensive technical evaluations powered by machine learning",
      },
      {
        title: "Capability Scorecards",
        description: "Detailed reports on strengths, weaknesses, and growth areas",
      },
      {
        title: "Practical Evaluations",
        description: "Real-world coding challenges and project-based assessments",
      },
      {
        title: "Continuous Monitoring",
        description: "Ongoing skill tracking throughout the candidate journey",
      },
    ],
  },
  {
    number: "03",
    title: "Deploy",
    subtitle: "Strategic Placement",
    color: "primary",
    description:
      "We match validated talent with enterprise opportunities, providing onboarding support and performance tracking for successful integration.",
    details: [
      {
        title: "Role Matching",
        description: "Algorithm-driven pairing of candidates with suitable positions",
      },
      {
        title: "Cultural Fit",
        description: "Assessment of soft skills and organizational compatibility",
      },
      {
        title: "Onboarding Support",
        description: "30-day program to ensure smooth transition and integration",
      },
      {
        title: "Performance Tracking",
        description: "Regular check-ins and progress monitoring post-placement",
      },
    ],
  },
];

export default function TVDModelPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-blue-600 to-primary-800 px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white/90">
            Our Methodology
          </div>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            The TVD Model
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-white/90">
            Train, Validate, Deploy - a proven three-phase approach to building verified IT talent
          </p>

          {/* Visual Flow */}
          <div className="mt-12 flex items-center justify-center gap-4 text-white">
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-2xl font-bold">
                T
              </div>
              <span className="mt-2 text-sm">Train</span>
            </div>
            <svg className="h-6 w-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-600 text-2xl font-bold">
                V
              </div>
              <span className="mt-2 text-sm">Validate</span>
            </div>
            <svg className="h-6 w-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-2xl font-bold">
                D
              </div>
              <span className="mt-2 text-sm">Deploy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Phases */}
      {phases.map((phase, index) => (
        <Section
          key={phase.number}
          className={index % 2 === 1 ? "bg-neutral-50" : ""}
        >
          <div className="grid gap-12 lg:grid-cols-2">
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className="mb-4 text-6xl font-bold text-neutral-300">
                {phase.number}
              </div>
              <h2 className="mb-2 text-4xl font-bold text-neutral-900">
                {phase.title}
              </h2>
              <p className="mb-4 text-lg font-medium text-primary-600">
                {phase.subtitle}
              </p>
              <p className="mb-8 text-lg text-neutral-600">{phase.description}</p>
              <Button href="/contact" variant="primary">
                Learn More
              </Button>
            </div>

            <div className={`grid gap-4 sm:grid-cols-2 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              {phase.details.map((detail) => (
                <Card key={detail.title} hover className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                    {detail.title}
                  </h3>
                  <p className="text-sm text-neutral-600">{detail.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </Section>
      ))}

      {/* Results Section */}
      <Section className="bg-neutral-50">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
            Proven Results
          </h2>
          <p className="text-xl text-neutral-600">
            The TVD Model delivers measurable outcomes
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6 text-center">
            <div className="mb-2 text-5xl font-bold text-primary-600">36</div>
            <div className="text-lg text-neutral-600">Successful Placements</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="mb-2 text-5xl font-bold text-primary-600">2</div>
            <div className="text-lg text-neutral-600">Enterprise Clients</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="mb-2 text-5xl font-bold text-primary-600">100%</div>
            <div className="text-lg text-neutral-600">Placement Success</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="mb-2 text-5xl font-bold text-primary-600">100%</div>
            <div className="text-lg text-neutral-600">Client Retention</div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
            Ready to Implement TVD?
          </h2>
          <p className="mb-10 text-xl text-neutral-600">
            Discover how the TVD Model can transform your talent acquisition strategy.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" size="lg">
              Schedule a Demo
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
