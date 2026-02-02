import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Services",
  description: "Enterprise IT talent solutions: Technical Training, Skills Validation, Candidate Placement, and Performance Support.",
};

const services = [
  {
    id: "technical-training",
    title: "Technical Training",
    description: "Intensive, hands-on training programs designed to transform aspiring professionals into job-ready experts.",
    features: [
      "Industry-aligned curriculum updated quarterly",
      "Hands-on projects with real-world scenarios",
      "Expert mentorship from senior professionals",
      "Flexible learning paths (full-time/part-time)",
      "Access to enterprise-grade tools and environments",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: "skills-validation",
    title: "Skills Validation",
    description: "AI-powered assessments and capability scorecards to verify skills and job readiness.",
    features: [
      "AI-driven technical assessments",
      "Comprehensive capability scorecards",
      "Real-time performance analytics",
      "Industry-standard certification alignment",
      "Verified skill badges and credentials",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "candidate-placement",
    title: "Candidate Placement",
    description: "Strategic placement services connecting verified talent with enterprise opportunities.",
    features: [
      "Pre-screened, validated candidates",
      "Role-specific matching algorithms",
      "Cultural fit assessment",
      "Competitive salary benchmarking",
      "Streamlined interview process",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "performance-support",
    title: "Performance Support",
    description: "Ongoing support and tracking to ensure successful integration and retention.",
    features: [
      "30-day onboarding support program",
      "Performance tracking and reporting",
      "Skills gap analysis and remediation",
      "Continuous learning pathways",
      "Dedicated success manager",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-blue-600 to-primary-800 px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-white/90">
            End-to-end IT talent solutions designed to help enterprises build high-performing teams
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <Section>
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
                  {service.icon}
                </div>
                <h2 className="mb-4 text-3xl font-bold text-neutral-900">
                  {service.title}
                </h2>
                <p className="mb-6 text-lg text-neutral-600">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0 text-accent-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <Card className="h-full bg-gradient-to-br from-neutral-50 to-primary-50/30 p-8">
                  <div className="flex h-full flex-col justify-center">
                    <div className="text-center">
                      <div className="mb-4 text-6xl font-bold text-primary-600">
                        {index === 0 && "36"}
                        {index === 1 && "100%"}
                        {index === 2 && "100%"}
                        {index === 3 && "100%"}
                      </div>
                      <div className="text-lg text-neutral-600">
                        {index === 0 && "Successful Placements"}
                        {index === 1 && "Validation Pass Rate"}
                        {index === 2 && "Placement Success"}
                        {index === 3 && "Client Retention"}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-neutral-50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mb-10 text-xl text-neutral-600">
            Let us help you build a world-class IT team with verified talent.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" size="lg">
              Book a Consultation
            </Button>
            <Button href="/case-studies" size="lg" variant="secondary">
              View Case Studies
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
