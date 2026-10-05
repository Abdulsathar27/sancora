export type JobDepartment = 'Engineering' | 'Data' | 'Cloud' | 'Design' | 'Business'
export type JobType = 'Full-time' | 'Internship'
export type JobLocation = 'Bangalore' | 'Hybrid' | 'Remote'

export interface JobOpening {
  id: string
  title: string
  department: JobDepartment
  type: JobType
  location: JobLocation
  experience: string
  summary: string
  description: string
  responsibilities: string[]
  requirements: string[]
  niceToHave: string[]
}

export const careerBenefits = [
  {
    title: 'Real client work',
    description: 'Ship production software and analytics for enterprise teams — not throwaway intern tasks.',
  },
  {
    title: 'Growth with seniors',
    description: 'Pair with experienced engineers and analysts. Two-week sprints, clear feedback, measurable outcomes.',
  },
  {
    title: 'Flexible Bangalore base',
    description: 'Electronic City office with hybrid options. Remote considered for the right specialist roles.',
  },
  {
    title: 'Ownership culture',
    description: 'Small teams, high trust. You own your slice of the product from design through delivery.',
  },
]

export const jobOpenings: JobOpening[] = [
  {
    id: 'full-stack-engineer',
    title: 'Full Stack Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Hybrid',
    experience: '2–5 years',
    summary: 'Build and ship web platforms, APIs, and internal tools used by enterprise clients.',
    description:
      'You will work across the stack on client products and Sancora delivery tools. We look for people who write maintainable code, communicate clearly with stakeholders, and take ownership from ticket to production.',
    responsibilities: [
      'Design and implement features in React and Node.js (or equivalent)',
      'Own API contracts, data models, and quality with automated tests',
      'Collaborate with analysts and consultants on client requirements',
      'Participate in code reviews, sprint planning, and production support',
    ],
    requirements: [
      '2+ years building production web applications',
      'Strong JavaScript/TypeScript and at least one backend (Node, Python, or .NET)',
      'Comfort with SQL, Git, and cloud-hosted deployments',
      'Clear written and spoken English for client-facing work',
    ],
    niceToHave: ['AWS or Azure experience', 'Prior consulting or agency delivery', 'CI/CD and Docker'],
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst / BI Engineer',
    department: 'Data',
    type: 'Full-time',
    location: 'Hybrid',
    experience: '2–4 years',
    summary: 'Turn messy business data into dashboards, models, and decisions clients can act on.',
    description:
      'Join our analytics practice to design pipelines, semantic models, and executive dashboards. You will sit close to the client problem, not just the warehouse.',
    responsibilities: [
      'Model data for reporting and self-serve BI',
      'Build dashboards and scheduled reports (Power BI / Looker / similar)',
      'Partner with engineers on pipeline quality and definitions',
      'Present findings to business stakeholders in plain language',
    ],
    requirements: [
      '2+ years in analytics, BI, or data engineering-adjacent roles',
      'Strong SQL and comfort with Excel or Python for analysis',
      'Experience shipping dashboards to non-technical users',
      'Attention to data quality, definitions, and documentation',
    ],
    niceToHave: ['dbt or warehouse experience (BigQuery, Snowflake, Redshift)', 'Basic statistics or forecasting'],
  },
  {
    id: 'cloud-engineer',
    title: 'Cloud Engineer',
    department: 'Cloud',
    type: 'Full-time',
    location: 'Bangalore',
    experience: '3–6 years',
    summary: 'Design secure, cost-aware cloud infrastructure for enterprise workloads.',
    description:
      'Help clients migrate, harden, and operate workloads on AWS or Azure. You will work with developers on CI/CD, networking, and production reliability.',
    responsibilities: [
      'Architect and implement cloud landing zones and environments',
      'Automate infrastructure (Terraform or equivalent) and pipelines',
      'Improve observability, backup, and access control',
      'Advise on cost, security, and operational runbooks',
    ],
    requirements: [
      '3+ years operating production workloads in AWS or Azure',
      'Infrastructure as code and CI/CD in a team setting',
      'Working knowledge of networking, IAM, and Linux',
      'Ability to explain trade-offs to technical and business audiences',
    ],
    niceToHave: ['Kubernetes', 'Security certifications', 'FinOps or cost-optimisation work'],
  },
  {
    id: 'product-designer',
    title: 'Product Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'Hybrid',
    experience: '2–5 years',
    summary: 'Design clear, enterprise-grade product experiences for web applications we ship.',
    description:
      'You will own UX for client products — from flows and wireframes to high-fidelity UI that engineering can implement without guesswork.',
    responsibilities: [
      'Map user journeys and interaction flows with product and engineering',
      'Produce UI kits, prototypes, and specs for React implementations',
      'Run lightweight research with client users when needed',
      'Keep accessibility and consistency across screens',
    ],
    requirements: [
      '2+ years designing digital products (Figma or equivalent)',
      'Portfolio showing shipped web or SaaS work',
      'Comfort collaborating daily with engineers',
      'Understanding of responsive layout and design systems',
    ],
    niceToHave: ['Motion or prototyping tools', 'B2B / enterprise product experience'],
  },
  {
    id: 'client-partner',
    title: 'Client Partner / Business Associate',
    department: 'Business',
    type: 'Full-time',
    location: 'Bangalore',
    experience: '1–4 years',
    summary: 'Help us find the right clients — and the right talent conversations — for Sancora.',
    description:
      'This role sits between delivery and growth: qualify inbound interest, support proposals, and keep hiring and client conversations organised so the right people reach the team.',
    responsibilities: [
      'Qualify inbound leads and schedule discovery with senior staff',
      'Support proposals, case-study packaging, and follow-ups',
      'Coordinate candidate screening with hiring managers',
      'Keep CRM and pipeline notes accurate and timely',
    ],
    requirements: [
      'Strong communication in English, written and spoken',
      'Organised, reliable follow-through on multiple threads',
      'Interest in software, data, or consulting services',
      'Comfort with tools like email, sheets, and calendars',
    ],
    niceToHave: ['Prior B2B sales, recruiting, or client-success experience', 'Basic understanding of IT services'],
  },
  {
    id: 'software-intern',
    title: 'Software Development Intern',
    department: 'Engineering',
    type: 'Internship',
    location: 'Bangalore',
    experience: '0–1 year',
    summary: 'Learn by shipping real features with a mentor on live client or internal projects.',
    description:
      'A structured internship for students or early-career developers. You will pair with a senior engineer, contribute to production code, and leave with a portfolio of real work.',
    responsibilities: [
      'Implement well-scoped frontend or backend tickets',
      'Write tests and participate in code review',
      'Document what you ship',
      'Present a short demo at the end of each sprint',
    ],
    requirements: [
      'Coursework or personal projects in web development',
      'Familiarity with JavaScript or Python',
      'Willingness to learn Git, testing, and team process',
      'Available on-site or hybrid in Bangalore for the internship period',
    ],
    niceToHave: ['React, SQL, or a deployed side project', 'Open-source or hackathon work'],
  },
]

export const jobDepartments: Array<'All' | JobDepartment> = [
  'All',
  'Engineering',
  'Data',
  'Cloud',
  'Design',
  'Business',
]

export function getJobById(id: string): JobOpening | undefined {
  return jobOpenings.find((job) => job.id === id)
}
