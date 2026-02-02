import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for QualityX Services - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-blue-600 to-primary-800 px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-5xl font-bold text-white">Privacy Policy</h1>
          <p className="text-lg text-white/80">
            Last Updated: January 30, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg prose-neutral max-w-none">

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">1. Introduction</h2>
              <p className="text-neutral-700 leading-relaxed">
                QualityX Services (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy
                of individuals who interact with our services. This Privacy Policy describes how we collect, use,
                disclose, and safeguard personal information when you use our website, training programs,
                assessment platforms, and related services (collectively, the &quot;Services&quot;).
              </p>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                This Policy applies to two categories of users: (a) Candidates who participate in our training,
                assessment, and placement services; and (b) Client Companies who engage our services to identify,
                evaluate, and onboard talent. By accessing or using our Services, you acknowledge that you have
                read and understood this Privacy Policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">2. Information We Collect</h2>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-neutral-900">2.1 Information from Candidates</h3>
              <p className="text-neutral-700 leading-relaxed">We may collect the following categories of information from Candidates:</p>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span><strong>Identity Information:</strong> Full name, date of birth, photograph, government-issued identification numbers (where required and permitted by law).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span><strong>Contact Information:</strong> Email address, telephone number, mailing address.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span><strong>Educational and Professional Background:</strong> Academic qualifications, certifications, prior employment history, resume or curriculum vitae.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span><strong>Assessment Data:</strong> Responses to assessments, examinations, and technical evaluations; coding submissions; test scores; performance metrics.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span><strong>Capability Scorecard Data:</strong> Skill proficiency scores, competency ratings, and validation results generated through our assessment processes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span><strong>Training Records:</strong> Enrollment information, course completion status, attendance, and participation data.</span>
                </li>
              </ul>

              <h3 className="mt-8 mb-3 text-xl font-semibold text-neutral-900">2.2 Information from Client Companies</h3>
              <p className="text-neutral-700 leading-relaxed">We may collect the following categories of information from Client Companies:</p>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span><strong>Business Contact Information:</strong> Names, titles, email addresses, and telephone numbers of authorized representatives.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span><strong>Company Information:</strong> Legal entity name, business address, industry sector, company size.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span><strong>Hiring Requirements:</strong> Role specifications, technical requirements, team composition needs.</span>
                </li>
              </ul>

              <h3 className="mt-8 mb-3 text-xl font-semibold text-neutral-900">2.3 Information Collected Automatically</h3>
              <p className="text-neutral-700 leading-relaxed">
                When you access our website or digital platforms, we may automatically collect certain information, including:
              </p>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Device information (browser type, operating system, device identifiers)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>IP address and approximate geographic location</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Usage data (pages visited, time spent, navigation paths)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Cookies and similar tracking technologies</span>
                </li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">3. How We Use Your Information</h2>
              <p className="text-neutral-700 leading-relaxed">We use the information we collect for the following purposes:</p>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-neutral-900">3.1 Service Delivery</h3>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Administering training programs and educational content</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Conducting assessments, examinations, and skills evaluations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Generating capability scorecards and validation reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Facilitating candidate-to-client matching through our AI-powered systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Providing placement coordination and support services</span>
                </li>
              </ul>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-neutral-900">3.2 AI-Based Processing</h3>
              <p className="text-neutral-700 leading-relaxed">
                We utilize artificial intelligence and automated systems to:
              </p>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Evaluate assessment responses and generate performance scores</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Analyze skill profiles for candidate-role matching</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Identify patterns in technical competencies and learning progress</span>
                </li>
              </ul>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                Candidates may request human review of significant automated decisions that affect them.
                Contact us using the information provided below to make such a request.
              </p>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-neutral-900">3.3 Communications</h3>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Responding to inquiries and support requests</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Sending service-related notifications and updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Providing assessment results and scorecard reports</span>
                </li>
              </ul>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-neutral-900">3.4 Legal and Compliance</h3>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Complying with applicable laws, regulations, and legal processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Enforcing our terms and conditions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Protecting the rights, property, or safety of QualityX Services, our users, or others</span>
                </li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">4. Information Sharing and Disclosure</h2>
              <p className="text-neutral-700 leading-relaxed">
                We do not sell personal information. We may share information in the following circumstances:
              </p>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-neutral-900">4.1 With Client Companies</h3>
              <p className="text-neutral-700 leading-relaxed">
                When Candidates participate in our placement services, we share relevant profile information,
                capability scorecards, and validation results with Client Companies for the purpose of
                evaluating candidates for potential engagement. This sharing occurs only with Candidates&apos;
                knowledge and in accordance with the consent provided during enrollment.
              </p>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-neutral-900">4.2 Service Providers</h3>
              <p className="text-neutral-700 leading-relaxed">
                We engage third-party vendors who assist in operating our Services, including cloud hosting
                providers, assessment platform operators, and communication service providers. These vendors
                are contractually obligated to use personal information only for the purposes of providing
                services to us and to maintain appropriate security measures.
              </p>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-neutral-900">4.3 Legal Requirements</h3>
              <p className="text-neutral-700 leading-relaxed">
                We may disclose personal information when required by law, subpoena, or other legal process,
                or when we believe in good faith that disclosure is necessary to protect our rights, your
                safety, or the safety of others.
              </p>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-neutral-900">4.4 Business Transfers</h3>
              <p className="text-neutral-700 leading-relaxed">
                In the event of a merger, acquisition, or sale of all or a portion of our assets, personal
                information may be transferred to the acquiring entity.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">5. Data Retention</h2>
              <p className="text-neutral-700 leading-relaxed">
                We retain personal information for as long as necessary to fulfill the purposes for which
                it was collected, including to satisfy legal, accounting, or reporting requirements.
                Retention periods vary based on the type of information and the purposes for which it is used:
              </p>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span><strong>Training and Assessment Records:</strong> Retained for a minimum of five (5) years following program completion to support verification requests and compliance requirements.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span><strong>Candidate Profiles:</strong> Retained while the candidate remains active in our placement services, plus an additional period to support any ongoing engagements.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span><strong>Client Company Records:</strong> Retained for the duration of the business relationship and as required for legal and financial record-keeping purposes.</span>
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">6. Data Security</h2>
              <p className="text-neutral-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect personal information
                against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Encryption of data in transit and at rest</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Access controls and authentication requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Regular security assessments and monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Employee training on data protection practices</span>
                </li>
              </ul>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                While we strive to protect personal information, no method of transmission over the Internet
                or electronic storage is completely secure. We cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">7. Your Rights</h2>
              <p className="text-neutral-700 leading-relaxed">
                Subject to applicable law, you may have the following rights regarding your personal information:
              </p>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span><strong>Access:</strong> Request a copy of the personal information we hold about you.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span><strong>Correction:</strong> Request correction of inaccurate or incomplete personal information.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span><strong>Deletion:</strong> Request deletion of your personal information, subject to legal retention requirements.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span><strong>Data Portability:</strong> Request a copy of your data in a structured, commonly used format.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span><strong>Objection:</strong> Object to certain processing activities, including automated decision-making.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span><strong>Withdraw Consent:</strong> Where processing is based on consent, withdraw that consent at any time.</span>
                </li>
              </ul>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                To exercise these rights, please contact us using the information provided in Section 11 below.
                We will respond to your request within the timeframes required by applicable law.
              </p>
            </div>

            {/* International Data Transfers */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">8. International Data Transfers</h2>
              <p className="text-neutral-700 leading-relaxed">
                QualityX Services operates across multiple jurisdictions. Personal information may be
                transferred to and processed in countries other than your country of residence. When we
                transfer personal information internationally, we implement appropriate safeguards, including
                standard contractual clauses or other legally recognized transfer mechanisms, to ensure
                adequate protection of your data.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">9. Cookies and Tracking Technologies</h2>
              <p className="text-neutral-700 leading-relaxed">
                We use cookies and similar technologies to enhance your experience on our website, analyze
                usage patterns, and deliver relevant content. You can manage cookie preferences through your
                browser settings. Please note that disabling certain cookies may affect the functionality
                of our Services.
              </p>
            </div>

            {/* Children */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">10. Children&apos;s Privacy</h2>
              <p className="text-neutral-700 leading-relaxed">
                Our Services are not directed to individuals under the age of 18. We do not knowingly
                collect personal information from children. If we become aware that we have inadvertently
                collected personal information from a child, we will take steps to delete such information
                promptly.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">11. Contact Information</h2>
              <p className="text-neutral-700 leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 p-6">
                <p className="text-neutral-700">
                  <strong>QualityX Services</strong><br />
                  Email: sreehari_vaka@qualityxservices.com<br />
                  <br />
                  For privacy-specific inquiries, please include &quot;Privacy Inquiry&quot; in the subject line.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">12. Changes to This Privacy Policy</h2>
              <p className="text-neutral-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or
                applicable law. We will post the updated Policy on this page and update the &quot;Last Updated&quot;
                date above. For material changes, we will provide additional notice, such as via email or
                a prominent notice on our website. We encourage you to review this Policy periodically.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">13. Governing Law and Jurisdiction</h2>
              <p className="text-neutral-700 leading-relaxed">
                QualityX Services operates in both Singapore and India. This Privacy Policy is designed to comply with:
              </p>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span><strong>Singapore:</strong> The Personal Data Protection Act 2012 (PDPA) and its subsequent amendments.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span><strong>India:</strong> The Digital Personal Data Protection Act, 2023 (DPDP Act) and applicable rules thereunder.</span>
                </li>
              </ul>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                For users located in Singapore, this Policy shall be governed by the laws of Singapore, and any disputes
                shall be subject to the exclusive jurisdiction of the courts of Singapore.
              </p>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                For users located in India, this Policy shall be governed by the laws of India, and any disputes
                shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, Telangana, India.
              </p>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                For users located in other jurisdictions, the governing law shall be determined based on the
                location of the QualityX Services entity with which you have contracted.
              </p>
            </div>

          </div>

          {/* Back to Home */}
          <div className="mt-12 border-t border-neutral-200 pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
