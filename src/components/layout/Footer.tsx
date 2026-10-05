import { Link } from '@tanstack/react-router'
import { Code2, Lightbulb, TrendingUp, Share2, Globe, Mail } from 'lucide-react'
import { BrandLogo } from '../ui/BrandLogo'
import { COMPANY_EMAIL, COMPANY_NAME, COMPANY_TAGLINE } from '../../data/brand'

const footerLinks = {
  company: [
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/careers', label: 'Careers' },
    { to: '/contact', label: 'Contact' },
  ],
  services: [
    { to: '/services/software-development', label: 'Software Development' },
    { to: '/services/data-analytics', label: 'Data Analytics' },
    { to: '/services/cloud-consulting', label: 'Cloud & Consulting' },
  ],
}

const values = [
  { icon: Code2, label: 'Build' },
  { icon: Lightbulb, label: 'Innovate' },
  { icon: TrendingUp, label: 'Scale' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-charcoal-light">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,123,255,0.06),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center md:text-left lg:col-span-1">
            <BrandLogo size="lg" className="mb-4 justify-center md:justify-start" />
            <p className="mb-6 text-sm leading-relaxed text-silver-muted">
              Five years of trusted software development and data analytics expertise. Building
              enterprise solutions that scale.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-electric md:justify-start">
              {values.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:contents">
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-silver-muted transition-colors hover:text-electric"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-silver-muted transition-colors hover:text-electric"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h4>
            <div className="flex gap-3">
              {[
                { icon: Share2, href: '#', label: 'LinkedIn' },
                { icon: Globe, href: '#', label: 'Website' },
                { icon: Mail, href: `mailto:${COMPANY_EMAIL}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="touch-target inline-flex items-center justify-center rounded-lg p-2.5 text-silver-muted transition-colors hover:bg-white/10 hover:text-electric"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-silver-muted">
              {COMPANY_EMAIL}
              <br />
              Bangalore, India
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-center sm:mt-12 sm:gap-4 md:flex-row md:text-left">
          <p className="text-sm text-silver-muted">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <p className="text-sm text-silver-muted">
            <span className="text-electric">&lt;/&gt;</span> {COMPANY_TAGLINE}
          </p>
        </div>
      </div>
    </footer>
  )
}
