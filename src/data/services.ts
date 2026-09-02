import type { LucideIcon } from 'lucide-react'
import { Code2, BarChart3, Cloud, Database, Smartphone, Shield, Layers, Brain } from 'lucide-react'

export interface Service {
  id: string
  title: string
  shortDescription: string
  description: string
  icon: LucideIcon
  features: string[]
  technologies: string[]
  benefits: string[]
}

export const services: Service[] = [
  {
    id: 'software-development',
    title: 'Custom Software Development',
    shortDescription: 'Enterprise-grade applications built to scale with your business.',
    description:
      'We design and build bespoke software solutions that solve complex business challenges. From web platforms to internal tools, our engineering team delivers robust, maintainable code that stands the test of time.',
    icon: Code2,
    features: [
      'Full-stack web application development',
      'API design & microservices architecture',
      'Legacy system modernization',
      'Quality assurance & automated testing',
    ],
    technologies: ['React', 'Node.js', 'Python', '.NET', 'PostgreSQL', 'AWS'],
    benefits: [
      'Tailored to your exact workflow',
      'Scalable architecture from day one',
      'Dedicated engineering team',
      'Ongoing support & maintenance',
    ],
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & BI',
    shortDescription: 'Transform raw data into actionable insights that drive decisions.',
    description:
      'Our data analytics practice helps organizations unlock the full potential of their data. We build dashboards, pipelines, and predictive models that turn information into competitive advantage.',
    icon: BarChart3,
    features: [
      'Business intelligence dashboards',
      'ETL pipeline development',
      'Predictive analytics & ML models',
      'Data warehouse architecture',
    ],
    technologies: ['Power BI', 'Tableau', 'Python', 'Snowflake', 'dbt', 'Apache Spark'],
    benefits: [
      'Real-time visibility into KPIs',
      'Data-driven decision making',
      'Reduced reporting overhead',
      'Compliance-ready data governance',
    ],
  },
  {
    id: 'cloud-consulting',
    title: 'Cloud & Consulting',
    shortDescription: 'Strategic guidance and cloud infrastructure for modern enterprises.',
    description:
      'Navigate digital transformation with confidence. Our consultants assess your technology landscape, design cloud-native architectures, and guide implementation to maximize ROI.',
    icon: Cloud,
    features: [
      'Cloud migration strategy',
      'DevOps & CI/CD implementation',
      'Security & compliance audits',
      'Technology roadmap planning',
    ],
    technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
    benefits: [
      'Reduced infrastructure costs',
      'Improved system reliability',
      'Faster time-to-market',
      'Expert guidance at every step',
    ],
  },
]

export const subServices = [
  { icon: Database, label: 'Data Engineering', description: 'Pipelines, warehousing & governance' },
  { icon: Smartphone, label: 'Mobile Development', description: 'Cross-platform native experiences' },
  { icon: Shield, label: 'Security Audits', description: 'Penetration testing & compliance' },
  { icon: Layers, label: 'System Integration', description: 'Connect disparate platforms seamlessly' },
  { icon: Brain, label: 'AI & ML Solutions', description: 'Intelligent automation & predictions' },
]

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id)
}
