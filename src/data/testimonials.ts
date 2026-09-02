export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Sancora delivered a complex analytics platform ahead of schedule. Their team understood our domain deeply and the results speak for themselves — 40% faster reporting cycles.',
    author: 'Rajesh Mehta',
    role: 'CTO',
    company: 'FinEdge Solutions',
  },
  {
    id: '2',
    quote:
      'We needed a partner who could handle both development and data. Sancora bridged that gap perfectly, building our customer portal and BI dashboards under one roof.',
    author: 'Sarah Chen',
    role: 'VP of Operations',
    company: 'Meridian Health',
  },
  {
    id: '3',
    quote:
      'Five years of working together and they consistently exceed expectations. Professional, responsive, and genuinely invested in our success.',
    author: 'David Okonkwo',
    role: 'Director of IT',
    company: 'Atlas Logistics',
  },
  {
    id: '4',
    quote:
      'Their cloud migration strategy saved us significant infrastructure costs while improving uptime. A truly enterprise-grade partner.',
    author: 'Emily Torres',
    role: 'Head of Engineering',
    company: 'NovaRetail Group',
  },
]

export const clientLogos = [
  'FinEdge Solutions',
  'Meridian Health',
  'Atlas Logistics',
  'NovaRetail Group',
  'TechVault Inc.',
  'GlobalSync Corp',
]
