import { Metadata } from "next";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Discover how QualityX Services has helped enterprises build high-performing IT teams through our TVD methodology.",
};

const caseStudies = [
  {
    id: "purands-ai-ml",
    company: "Purands",
    industry: "Technology / AI",
    challenge: "As a growing Singapore-based startup focused on software development and applications, Purands needed skilled AI/ML engineers and software developers to accelerate their product development and build innovative solutions.",
    solution: "QualityX implemented a targeted TVD program to identify and train candidates with strong foundations in machine learning, data science, and modern software development practices, ensuring they were ready to contribute to Purands' AI-driven initiatives.",
    results: [
      { metric: "18", label: "Engineers Placed" },
      { metric: "4 wks", label: "Time to Deploy" },
      { metric: "100%", label: "Retention Rate" },
      { metric: "AI/ML", label: "Specialization" },
    ],
    testimonial: {
      quote: "QualityX understood our unique needs as a startup. The AI/ML engineers and developers they provided integrated seamlessly with our team and have been instrumental in driving our product innovation forward.",
      author: "Appu Ponnusamy",
      company: "Co-Founder, Purands",
    },
  },
  {
    id: "iamplus-design-dev",
    company: "i.am+",
    industry: "Consumer Technology",
    challenge: "i.am+, a technology company co-founded by will.i.am focused on creating connected lifestyle products with natural language understanding, needed talented UI/UX designers and full-stack developers for their Singapore operations to build intuitive, AI-powered consumer experiences.",
    solution: "QualityX delivered a comprehensive talent solution, providing UI/UX designers with expertise in consumer product design and full-stack developers experienced in building scalable applications for connected devices.",
    results: [
      { metric: "18", label: "Talent Deployed" },
      { metric: "6 wks", label: "Deployment Time" },
      { metric: "100%", label: "Client Satisfaction" },
      { metric: "UI/UX + Dev", label: "Skills Delivered" },
    ],
    testimonial: {
      quote: "Building consumer technology products requires a unique blend of design thinking and technical excellence. QualityX delivered professionals who brought both — they truly understand what it takes to create products that resonate with users.",
      author: "Chandra Radhakrishnan",
      company: "Founder, i.am+",
    },
  },
];

const stats = [
  { value: "2", label: "Enterprise Clients" },
  { value: "36", label: "Successful Placements" },
  { value: "100%", label: "Client Retention" },
  { value: "1", label: "Industry Served" },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-blue-600 to-primary-800 px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Success Stories
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-white/90">
            See how enterprises across industries have transformed their talent acquisition with QualityX
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-neutral-200 bg-white px-4 py-8 sm:px-6 lg:px-8 shadow-sm">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary-600">{stat.value}</div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <Section>
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              id={study.id}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl shadow-neutral-200/50 transition-shadow hover:shadow-2xl"
            >
              <div className="grid lg:grid-cols-5">
                {/* Content */}
                <div className="p-8 lg:col-span-3 lg:p-12">
                  <div className="mb-4 inline-flex rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">
                    {study.industry}
                  </div>
                  <h2 className="mb-4 text-2xl font-bold text-neutral-900 md:text-3xl">
                    {study.company}
                  </h2>

                  <div className="mb-6">
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-neutral-500">
                      Challenge
                    </h3>
                    <p className="text-neutral-600">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-neutral-500">
                      Solution
                    </h3>
                    <p className="text-neutral-600">{study.solution}</p>
                  </div>

                  {/* Testimonial */}
                  <div className="rounded-xl bg-neutral-50 p-6 shadow-inner border border-neutral-100">
                    <svg
                      className="mb-4 h-8 w-8 text-primary-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="mb-4 text-lg italic text-neutral-700">
                      &quot;{study.testimonial.quote}&quot;
                    </p>
                    <div className="text-sm">
                      <div className="font-semibold text-neutral-900">
                        {study.testimonial.author}
                      </div>
                      <div className="text-neutral-500">{study.testimonial.company}</div>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-neutral-50 p-8 lg:col-span-2 lg:p-12 border-l border-neutral-200">
                  <h3 className="mb-8 text-xl font-bold text-neutral-900">Results</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {study.results.map((result) => (
                      <div key={result.label}>
                        <div className="text-4xl font-bold text-primary-600">
                          {result.metric}
                        </div>
                        <div className="mt-1 text-sm text-neutral-600">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Industries Section */}
      <Section className="bg-neutral-50">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
            Industries We Serve
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-neutral-600">
            Our TVD methodology has been proven across diverse sectors
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            "Financial Services",
            "Healthcare",
            "E-commerce",
            "Technology",
            "Manufacturing",
            "Telecommunications",
            "Insurance",
            "Logistics",
          ].map((industry) => (
            <Card key={industry} className="p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-neutral-100">
              <span className="font-medium text-neutral-700">{industry}</span>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-neutral-50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
            Ready to Write Your Success Story?
          </h2>
          <p className="mb-10 text-xl text-neutral-600">
            Join the enterprises that have transformed their talent strategy with QualityX.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" size="lg">
              Start Your Journey
            </Button>
            <Button href="/services" size="lg" variant="secondary">
              Explore Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
