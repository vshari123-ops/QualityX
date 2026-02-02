import { Metadata } from "next";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about QualityX Services - our mission, team, and commitment to building verified IT talent.",
};

const values = [
  {
    title: "Quality First",
    description: "We never compromise on the caliber of talent we train and place. Every candidate goes through rigorous validation.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "We leverage AI and cutting-edge technology to continuously improve our training and validation processes.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Partnership",
    description: "We work closely with enterprises to understand their unique needs and deliver tailored talent solutions.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description: "Clear communication and detailed reporting ensure our clients always know exactly what they're getting.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-blue-600 to-primary-800 px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            About QualityX
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-white/90">
            Transforming IT talent acquisition through innovation, quality, and verified expertise
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
              Our Mission
            </h2>
            <p className="mb-6 text-lg text-neutral-600">
              At QualityX Services, we believe that every enterprise deserves access to verified,
              job-ready IT talent. Our mission is to bridge the gap between aspiring professionals
              and enterprise opportunities through our proven Train-Validate-Deploy methodology.
            </p>
            <p className="mb-6 text-lg text-neutral-600">
              We combine cutting-edge AI technology with hands-on training and rigorous assessment
              to ensure that every candidate we place is not just technically skilled, but truly
              prepared to deliver value from day one.
            </p>
            <div className="flex gap-4">
              <Button href="/tvd-model">Learn About TVD</Button>
              <Button href="/contact" variant="secondary">Contact Us</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-primary-50 p-6 text-center">
              <div className="text-4xl font-bold text-primary-600">36</div>
              <div className="mt-2 text-sm text-neutral-600">Successful Placements</div>
            </Card>
            <Card className="bg-accent-50 p-6 text-center">
              <div className="text-4xl font-bold text-accent-600">100%</div>
              <div className="mt-2 text-sm text-neutral-600">Placement Success</div>
            </Card>
            <Card className="bg-accent-50 p-6 text-center">
              <div className="text-4xl font-bold text-accent-600">2</div>
              <div className="mt-2 text-sm text-neutral-600">Enterprise Clients</div>
            </Card>
            <Card className="bg-primary-50 p-6 text-center">
              <div className="text-4xl font-bold text-primary-600">100%</div>
              <div className="mt-2 text-sm text-neutral-600">Client Retention</div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-neutral-50">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
            Our Values
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-neutral-600">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <Card key={value.title} hover className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                {value.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-neutral-900">{value.title}</h3>
              <p className="text-sm text-neutral-600">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Leadership Section */}
      <Section>
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
            Leadership
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-neutral-600">
            Experienced leaders driving innovation in IT talent solutions
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-br from-primary-600 via-blue-600 to-primary-800 p-8 text-center text-white">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-sm font-medium">
                Coming Soon
              </div>
              <h3 className="text-2xl font-bold">Vaka Sreehari Prasad</h3>
              <p className="mt-1 text-primary-200">Founder & CEO</p>
            </div>
            <div className="p-8">
              <p className="text-neutral-600">
                With over 25+ years of experience in IT talent management and enterprise solutions,
                Vaka founded QualityX Services to address the growing gap between enterprise talent
                needs and the skills of available professionals. Based in both India and Singapore,
                his vision of verified, job-ready talent has transformed how enterprises approach IT staffing.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Global Presence */}
      <Section className="bg-neutral-50">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
            Global Presence
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-neutral-600">
            Serving enterprises across Asia-Pacific
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-8 border border-neutral-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
                <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900">Singapore</h3>
            </div>
            <p className="mb-4 text-neutral-600">Regional Headquarters</p>
            <div className="space-y-2 text-sm text-neutral-600">
              <p>WhatsApp: +65 8349 2377</p>
            </div>
          </Card>
          <Card className="p-8 border border-neutral-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
                <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900">India</h3>
            </div>
            <p className="mb-4 text-neutral-600">Operations Center</p>
            <div className="space-y-2 text-sm text-neutral-600">
              <p>WhatsApp: +91 98669 32877</p>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
            Ready to Work With Us?
          </h2>
          <p className="mb-10 text-xl text-neutral-600">
            Let&apos;s discuss how QualityX can help you build your ideal IT team.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" size="lg">
              Get in Touch
            </Button>
            <Button href="/case-studies" size="lg" variant="secondary">
              View Our Work
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
