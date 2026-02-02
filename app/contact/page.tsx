"use client";

import { useState } from "react";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    projectType: "",
    timeline: "",
    budget: "",
    message: "",
  });

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/vshari123@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          projectType: formData.projectType,
          timeline: formData.timeline,
          budget: formData.budget,
          message: formData.message,
          _subject: `New Inquiry from ${formData.name} - ${formData.company}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again or contact us via WhatsApp.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again or contact us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-blue-600 to-primary-800 px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-5xl font-bold text-white">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-xl text-white/90">
            Share your hiring needs and role requirements. We&apos;ll respond within 24 hours
            with matching candidate profiles.
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="mt-4 text-neutral-600">
              Provide details about your project, and we&apos;ll schedule a technical discussion.
            </p>

            <div className="mt-8 space-y-6">
              <Card>
                <div className="flex gap-4">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Email</h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      sreehari_vaka@qualityxservices.com
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <a
                  href="https://wa.me/6583492377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-all hover:shadow-md"
                >
                  <div className="flex gap-4">
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-neutral-900">WhatsApp (Singapore)</h3>
                      <p className="mt-1 text-sm text-green-600 hover:text-green-700">
                        +65 8349 2377
                      </p>
                    </div>
                  </div>
                </a>
              </Card>

              <Card>
                <a
                  href="https://wa.me/919866932877"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-all hover:shadow-md"
                >
                  <div className="flex gap-4">
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-neutral-900">WhatsApp (India)</h3>
                      <p className="mt-1 text-sm text-green-600 hover:text-green-700">
                        +91 98669 32877
                      </p>
                    </div>
                  </div>
                </a>
              </Card>

              <Card>
                <div className="flex gap-4">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-neutral-900">
                      Response Time
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      Within 24 hours
                      <br />
                      Monday - Friday
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <Card className="p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-8 w-8 text-green-600"
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
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-neutral-900">
                  Thank You
                </h3>
                <p className="mt-4 text-neutral-600">
                  We&apos;ve received your inquiry and will respond within 24 hours with
                  next steps for a technical assessment.
                </p>
                <div className="mt-8">
                  <Button onClick={() => setSubmitted(false)} variant="ghost">
                    Submit Another Inquiry
                  </Button>
                </div>
              </Card>
            ) : (
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-neutral-900"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-md border border-neutral-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-900"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-md border border-neutral-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-neutral-900"
                      >
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-md border border-neutral-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="role"
                        className="block text-sm font-medium text-neutral-900"
                      >
                        Your Role *
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        required
                        placeholder="e.g., CTO, IT Director"
                        value={formData.role}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-md border border-neutral-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-sm font-medium text-neutral-900"
                      >
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-md border border-neutral-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      >
                        <option value="">Select a type</option>
                        <option value="software-development">
                          Software Development
                        </option>
                        <option value="cloud-infrastructure">
                          Cloud Infrastructure
                        </option>
                        <option value="digital-transformation">
                          Digital Transformation
                        </option>
                        <option value="quality-engineering">
                          Quality Engineering
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="timeline"
                        className="block text-sm font-medium text-neutral-900"
                      >
                        Desired Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-md border border-neutral-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate (1-2 months)</option>
                        <option value="near-term">Near-term (3-6 months)</option>
                        <option value="future">Future planning (6+ months)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-neutral-900"
                    >
                      Estimated Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-md border border-neutral-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-100k">Under $100K</option>
                      <option value="100k-250k">$100K - $250K</option>
                      <option value="250k-500k">$250K - $500K</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="over-1m">Over $1M</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-neutral-900"
                    >
                      Project Details *
                    </label>
                    <p className="mt-1 text-sm text-neutral-500">
                      Describe your technical requirements, current challenges, and
                      expected outcomes.
                    </p>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-md border border-neutral-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="terms" className="text-sm text-neutral-600">
                      I have read and agree to the{" "}
                      <Link href="/privacy" className="text-primary-600 hover:text-primary-700 underline">
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link href="/terms" className="text-primary-600 hover:text-primary-700 underline">
                        Terms of Service
                      </Link>
                      . I consent to receive communications regarding this inquiry.
                    </label>
                  </div>

                  {/* Legal Notice */}
                  <div className="rounded-md border border-neutral-200 bg-neutral-50 px-4 py-3">
                    <p className="text-xs text-neutral-500">
                      Use of this service is subject to our{" "}
                      <Link href="/privacy" className="text-primary-600 hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link href="/terms" className="text-primary-600 hover:underline">
                        Terms of Service
                      </Link>
                      . QualityX Services will not share your contact information with third parties
                      without your consent.
                    </p>
                  </div>

                  <div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Submit Inquiry"}
                    </Button>
                  </div>
                </form>
              </Card>
            )}
          </div>
        </div>
      </Section>

      {/* Meet Our Founder */}
      <Section className="bg-gradient-to-br from-neutral-50 to-primary-50/30">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-neutral-900">Meet Our Founder</h2>
            <p className="mt-4 text-xl text-neutral-600">
              Led by decades of IT excellence and innovation
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Founder Image */}
              <div className="md:col-span-1">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <img
                    src="/vaka_pro.png"
                    alt="Sreehari Prasad Vaka - Founder & CEO"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Founder Info */}
              <div className="md:col-span-2 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-neutral-900">
                  Sreehari Prasad Vaka
                </h3>
                <p className="mt-2 text-lg font-medium text-primary-600">
                  Founder & CEO
                </p>
                <p className="mt-4 text-neutral-700">
                  With over <span className="font-semibold text-neutral-900">25+ years of experience</span> in the IT industry across the world, Sreehari has led transformative projects for Fortune 500 companies and innovative startups alike.
                </p>
                <p className="mt-4 text-neutral-700">
                  His vision for QualityX Services stems from a deep understanding that the IT talent gap can be solved through systematic training and validation. Through the TVD methodology, he has created a framework that transforms aspiring professionals into job-ready experts with verified skills.
                </p>

                {/* Contact CTAs */}
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/6583492377"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Connect on WhatsApp
                  </a>
                  <a
                    href="mailto:sreehari_vaka@qualityxservices.com"
                    className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-600 px-6 py-3 text-sm font-semibold text-primary-600 transition-all hover:bg-primary-50"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
