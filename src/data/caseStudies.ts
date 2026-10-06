export interface CaseStudy {
  id: string
  title: string
  client: string
  industry: string
  summary: string
  challenge: string
  solution: string
  results: string[]
  tags: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'finedge-analytics',
    title: 'Real-Time Financial Analytics Platform',
    client: 'FinEdge Solutions',
    industry: 'FinTech',
    summary:
      'Built a real-time analytics dashboard processing 2M+ transactions daily with sub-second query performance.',
    challenge:
      'FinEdge needed to consolidate data from 12 legacy systems into a unified analytics platform with real-time visibility.',
    solution:
      'We architected a cloud-native data pipeline using Apache Spark and Snowflake, with a React-based dashboard for executive reporting.',
    results: [
      '40% reduction in reporting time',
      '2M+ daily transactions processed',
      'Sub-second dashboard load times',
      '99.9% platform uptime',
    ],
    tags: ['Data Analytics', 'Cloud', 'React'],
  },
  {
    id: 'meridian-portal',
    title: 'Patient Portal & BI Suite',
    client: 'Gait Rehab Health',
    industry: 'Healthcare',
    summary:
      'Developed a HIPAA-compliant patient portal integrated with Power BI dashboards for operational insights.',
    challenge:
      'Gait Rehab Health required a secure patient-facing portal alongside internal BI tools, all within strict compliance requirements.',
    solution:
      'Full-stack development with role-based access control, encrypted data handling, and embedded Power BI reports for department heads.',
    results: [
      '60% increase in patient engagement',
      'HIPAA compliance certified',
      'Unified data across 8 departments',
      'Reduced manual reporting by 70%',
    ],
    tags: ['Software Development', 'Healthcare', 'Power BI'],
  },
  {
    id: 'atlas-logistics',
    title: 'Supply Chain Optimization System',
    client: 'Sanco Logistics',
    industry: 'Logistics',
    summary: 'Custom logistics management system with predictive routing and real-time fleet tracking.',
    challenge:
      'Sanco Logistics struggled with fragmented tracking systems causing delivery delays and poor visibility across their fleet.',
    solution:
      'Built an integrated logistics platform with GPS tracking, ML-based route optimization, and automated dispatch workflows.',
    results: [
      '25% improvement in on-time delivery',
      '15% reduction in fuel costs',
      'Real-time fleet visibility',
      'Automated dispatch for 500+ routes',
    ],
    tags: ['Software Development', 'AI/ML', 'Logistics'],
  },
  {
    id: 'novaretail-cloud',
    title: 'Cloud Migration & E-Commerce Platform',
    client: 'Quick Pack Group',
    industry: 'Retail',
    summary:
      'Migrated legacy infrastructure to AWS and rebuilt their e-commerce platform for peak-season scalability.',
    challenge:
      'Quick Pack Group faced recurring downtime during peak sales periods due to aging on-premise infrastructure.',
    solution:
      'Complete AWS migration with auto-scaling architecture, CDN optimization, and a modern React storefront.',
    results: [
      'Zero downtime during peak season',
      '35% infrastructure cost reduction',
      '3x faster page load times',
      'Handled 10x traffic spikes',
    ],
    tags: ['Cloud', 'E-Commerce', 'AWS'],
  },
]

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.id === id)
}
