import Link from "next/link";
import { Logo } from "./Logo";

const footerSections = [
  {
    title: "Services",
    links: [
      { href: "/services#technical-training", label: "Technical Training" },
      { href: "/services#skills-validation", label: "Skills Validation" },
      { href: "/services#candidate-placement", label: "Candidate Placement" },
      { href: "/services#performance-support", label: "Performance Support" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/tvd-model", label: "TVD Model" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800 bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-neutral-300">
              Where Quality Meets Intelligence
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-300 hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-400">
            &copy; {currentYear} QualityX Services. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <Link href="/privacy" className="text-sm text-neutral-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-neutral-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
