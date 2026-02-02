import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for QualityX Services - The terms and conditions governing use of our training, assessment, and placement services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-blue-600 to-primary-800 px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-5xl font-bold text-white">Terms of Service</h1>
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
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">1. Introduction and Acceptance</h2>
              <p className="text-neutral-700 leading-relaxed">
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and
                QualityX Services (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your access to and use of
                our website, training programs, assessment platforms, placement services, and related
                offerings (collectively, the &quot;Services&quot;).
              </p>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                By accessing or using our Services, you acknowledge that you have read, understood, and agree
                to be bound by these Terms. If you do not agree to these Terms, you may not access or use
                the Services. If you are entering into these Terms on behalf of a company or other legal
                entity, you represent that you have the authority to bind such entity to these Terms.
              </p>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                These Terms apply to two categories of users: (a) <strong>Candidates</strong> who enroll in
                training programs, undergo skills assessments, and participate in placement services; and
                (b) <strong>Client Companies</strong> who engage our services to identify, evaluate, and
                onboard talent.
              </p>
            </div>

            {/* Description of Services */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">2. Description of Services</h2>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-neutral-900">2.1 Training Programs</h3>
              <p className="text-neutral-700 leading-relaxed">
                We provide technical training programs designed to develop skills in various technology
                domains. Training may include coursework, practical exercises, projects, and mentorship.
                Successful completion of training programs does not guarantee any particular outcome,
                including employment or engagement opportunities.
              </p>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-neutral-900">2.2 Assessment and Validation Services</h3>
              <p className="text-neutral-700 leading-relaxed">
                We conduct skills assessments and examinations using various methodologies, including
                AI-powered evaluation systems. These assessments generate capability scorecards that
                reflect a candidate&apos;s performance at a specific point in time. Assessment results are
                provided for informational purposes and represent our evaluation based on the criteria
                applied. Results may be shared with Client Companies as part of the placement process.
              </p>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-neutral-900">2.3 Placement Services</h3>
              <p className="text-neutral-700 leading-relaxed">
                We facilitate introductions between validated Candidates and Client Companies using AI-powered
                matching systems. Our role is limited to facilitation and coordination. We do not serve as
                an employer, employment agency, or guarantor of employment. Any engagement between a Candidate
                and a Client Company is a separate relationship governed by their own terms and agreements.
              </p>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-neutral-900">2.4 Performance Support</h3>
              <p className="text-neutral-700 leading-relaxed">
                Following placement, we may provide transitional support services including check-ins,
                performance tracking, and issue resolution assistance. These services are supplementary
                and do not alter the direct relationship between Candidates and their respective employers
                or clients.
              </p>
            </div>

            {/* User Obligations */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">3. User Obligations</h2>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-neutral-900">3.1 General Obligations</h3>
              <p className="text-neutral-700 leading-relaxed">All users of the Services agree to:</p>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Provide accurate, current, and complete information as requested</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Maintain the confidentiality of account credentials and promptly notify us of any unauthorized access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Use the Services only for lawful purposes and in compliance with applicable laws</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Refrain from interfering with or disrupting the integrity or performance of the Services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Respect the intellectual property rights of QualityX Services and third parties</span>
                </li>
              </ul>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-neutral-900">3.2 Candidate-Specific Obligations</h3>
              <p className="text-neutral-700 leading-relaxed">Candidates additionally agree to:</p>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Complete all assessments and examinations honestly and without external assistance unless expressly permitted</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Not share, distribute, or reproduce assessment content, questions, or materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Provide accurate information regarding educational background, work history, and qualifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Participate in good faith in the training and placement process</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Consent to the sharing of assessment results and capability scorecards with Client Companies as part of the placement process</span>
                </li>
              </ul>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-neutral-900">3.3 Client Company Obligations</h3>
              <p className="text-neutral-700 leading-relaxed">Client Companies additionally agree to:</p>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Use candidate information, scorecards, and assessment results solely for evaluation purposes related to potential engagement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Maintain the confidentiality of candidate information and not disclose it to third parties without consent</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Comply with applicable employment and anti-discrimination laws in all hiring decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Provide accurate information regarding role requirements and company circumstances</span>
                </li>
              </ul>
            </div>

            {/* Assessment Consent */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">4. Assessment Consent and Participation</h2>
              <p className="text-neutral-700 leading-relaxed">
                Participation in assessments and examinations requires explicit consent from Candidates.
                By participating in any assessment, you consent to:
              </p>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>The collection and processing of your responses and performance data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>The use of AI systems to evaluate your submissions and generate scores</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>The creation of capability scorecards based on your assessment results</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>The sharing of your results with Client Companies who have expressed interest in your profile</span>
                </li>
              </ul>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                You may withdraw from the assessment process at any time by contacting us. However, withdrawal
                may affect your eligibility for placement services and does not affect the validity of
                previously completed assessments or consent already provided.
              </p>
            </div>

            {/* No Guarantees */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">5. No Employment or Engagement Guarantees</h2>
              <div className="rounded-lg border border-neutral-300 bg-neutral-50 p-6">
                <p className="text-neutral-700 leading-relaxed font-medium">
                  IMPORTANT: QualityX Services does not guarantee employment, job placement, or engagement
                  opportunities for any Candidate. Participation in training programs, successful completion
                  of assessments, and receipt of capability scorecards do not constitute a promise or
                  guarantee of any specific outcome.
                </p>
              </div>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                Our Services are designed to develop skills, validate competencies, and facilitate introductions.
                Final hiring and engagement decisions are made solely by Client Companies based on their own
                criteria, business needs, and evaluation processes. We do not control and are not responsible
                for the hiring decisions of any Client Company.
              </p>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                Similarly, we do not guarantee that Client Companies will find candidates meeting their
                specific requirements through our Services. While we endeavor to provide quality matching,
                the suitability of any candidate for a particular role is subject to various factors beyond
                our control.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">6. Intellectual Property</h2>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-neutral-900">6.1 Our Intellectual Property</h3>
              <p className="text-neutral-700 leading-relaxed">
                All content, materials, software, methodologies, assessment instruments, scoring algorithms,
                and other intellectual property provided through or used in connection with the Services
                are owned by QualityX Services or our licensors and are protected by intellectual property
                laws. You may not copy, modify, distribute, sell, or create derivative works based on our
                intellectual property without express written permission.
              </p>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-neutral-900">6.2 User Content</h3>
              <p className="text-neutral-700 leading-relaxed">
                You retain ownership of content you submit through the Services (such as resumes, code
                submissions, and project work). By submitting content, you grant us a non-exclusive,
                worldwide, royalty-free license to use, reproduce, and display such content as necessary
                to provide the Services, including sharing with Client Companies as part of the placement
                process.
              </p>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-neutral-900">6.3 Assessment Materials</h3>
              <p className="text-neutral-700 leading-relaxed">
                Assessment questions, test materials, evaluation criteria, and related content are
                confidential and proprietary. Unauthorized reproduction, distribution, or disclosure
                of assessment materials is strictly prohibited and may result in termination of Services
                and legal action.
              </p>
            </div>

            {/* Fees and Payment */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">7. Fees and Payment</h2>
              <p className="text-neutral-700 leading-relaxed">
                Certain Services may be subject to fees as specified at the time of enrollment or engagement.
                All fees are stated in the applicable currency and, unless otherwise specified, are
                non-refundable. We reserve the right to modify our fee structure with reasonable notice.
                Payment terms, including amounts, schedules, and accepted methods, will be communicated
                separately as part of the enrollment or engagement process.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">8. Limitation of Liability</h2>
              <p className="text-neutral-700 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:
              </p>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>QUALITYX SERVICES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNTS PAID BY YOU TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS (USD $100), WHICHEVER IS GREATER.</span>
                </li>
              </ul>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">9. Indemnification</h2>
              <p className="text-neutral-700 leading-relaxed">
                You agree to indemnify, defend, and hold harmless QualityX Services and its officers,
                directors, employees, agents, and affiliates from and against any claims, liabilities,
                damages, losses, and expenses (including reasonable legal fees) arising out of or in any
                way connected with: (a) your access to or use of the Services; (b) your violation of these
                Terms; (c) your violation of any third-party rights; or (d) any content you submit through
                the Services.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">10. Termination</h2>
              <p className="text-neutral-700 leading-relaxed">
                We may suspend or terminate your access to the Services at any time, with or without cause,
                and with or without notice. Grounds for termination include, but are not limited to:
              </p>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Violation of these Terms or any applicable policies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Fraudulent, deceptive, or dishonest conduct</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Cheating or misconduct during assessments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Provision of false or misleading information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span>Conduct harmful to other users or to our reputation</span>
                </li>
              </ul>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                Upon termination, your right to access and use the Services will immediately cease.
                Provisions that by their nature should survive termination will survive, including
                intellectual property rights, limitation of liability, indemnification, and governing law.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">11. Dispute Resolution</h2>
              <p className="text-neutral-700 leading-relaxed">
                Any dispute, controversy, or claim arising out of or relating to these Terms or the Services
                shall first be attempted to be resolved through good-faith negotiation. If the dispute cannot
                be resolved through negotiation within thirty (30) days, it shall be submitted to binding
                arbitration as follows:
              </p>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span><strong>For users in Singapore:</strong> Arbitration shall be conducted in accordance with the Arbitration Rules of the Singapore International Arbitration Centre (SIAC), with the seat of arbitration in Singapore.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span><strong>For users in India:</strong> Arbitration shall be conducted in accordance with the Arbitration and Conciliation Act, 1996 (as amended), with the seat of arbitration in Hyderabad, Telangana, India.</span>
                </li>
              </ul>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                The arbitration shall be conducted in the English language by a sole arbitrator mutually
                appointed by the parties. The arbitrator&apos;s decision shall be final and binding.
              </p>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                Notwithstanding the foregoing, either party may seek injunctive or other equitable relief
                in any court of competent jurisdiction to protect its intellectual property rights or
                confidential information.
              </p>
            </div>

            {/* Modifications */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">12. Modifications to Terms</h2>
              <p className="text-neutral-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of material
                changes by posting the updated Terms on our website and updating the &quot;Last Updated&quot; date.
                For significant changes, we may provide additional notice via email or through the Services.
                Your continued use of the Services following the posting of changes constitutes acceptance
                of those changes.
              </p>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">13. Severability</h2>
              <p className="text-neutral-700 leading-relaxed">
                If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court
                of competent jurisdiction, such invalidity shall not affect the validity of the remaining
                provisions, which shall continue in full force and effect. The invalid provision shall be
                modified to the minimum extent necessary to make it valid and enforceable.
              </p>
            </div>

            {/* Entire Agreement */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">14. Entire Agreement</h2>
              <p className="text-neutral-700 leading-relaxed">
                These Terms, together with our Privacy Policy and any other agreements expressly incorporated
                by reference, constitute the entire agreement between you and QualityX Services regarding
                the Services and supersede all prior or contemporaneous communications, whether electronic,
                oral, or written.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">15. Governing Law and Jurisdiction</h2>
              <p className="text-neutral-700 leading-relaxed">
                QualityX Services operates in both Singapore and India. These Terms shall be governed as follows:
              </p>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span><strong>For users in Singapore:</strong> These Terms shall be governed by and construed in accordance with the laws of Singapore. Any legal action or proceeding shall be instituted in the courts of Singapore, and you consent to the exclusive jurisdiction of such courts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                  <span><strong>For users in India:</strong> These Terms shall be governed by and construed in accordance with the laws of India. Any legal action or proceeding shall be instituted in the courts located in Hyderabad, Telangana, India, and you consent to the exclusive jurisdiction of such courts.</span>
                </li>
              </ul>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                For users located in other jurisdictions, the governing law shall be determined based on the
                location of the QualityX Services entity with which you have contracted, without regard to
                conflict of law principles.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">16. Contact Information</h2>
              <p className="text-neutral-700 leading-relaxed">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 p-6">
                <p className="text-neutral-700">
                  <strong>QualityX Services</strong><br />
                  Email: contact@qualityx.com<br />
                  <br />
                  For legal inquiries, please include &quot;Legal Inquiry&quot; in the subject line.
                </p>
              </div>
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
