export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  initials: string
}

export const leadership: TeamMember[] = [
  {
    id: '1',
    name: 'Arjun Sancora',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 15+ years in enterprise software. Founded Sancora Technologies to bridge the gap between complex data and actionable business outcomes.',
    initials: 'AS',
  },
  {
    id: '2',
    name: 'Priya Nair',
    role: 'CTO',
    bio: 'Architect of scalable systems. Priya leads our engineering practice, ensuring every solution meets enterprise-grade standards for performance and security.',
    initials: 'PN',
  },
  {
    id: '3',
    name: 'Michael Brooks',
    role: 'Head of Data Analytics',
    bio: 'Former data scientist turned analytics leader. Michael drives our BI and ML initiatives, helping clients transform raw data into strategic assets.',
    initials: 'MB',
  },
  {
    id: '4',
    name: 'Lisa Zhang',
    role: 'Director of Client Success',
    bio: 'Ensures every engagement delivers measurable value. Lisa oversees project delivery and maintains the long-term partnerships that define our reputation.',
    initials: 'LZ',
  },
]

export interface Milestone {
  year: string
  title: string
  description: string
}

export const milestones: Milestone[] = [
  {
    year: '2021',
    title: 'Foundation',
    description:
      'Sancora Technologies founded with a mission to deliver enterprise-grade software and analytics solutions.',
  },
  {
    year: '2022',
    title: 'First Enterprise Client',
    description:
      'Secured our first Fortune 500 engagement, building a custom analytics platform for a financial services firm.',
  },
  {
    year: '2023',
    title: 'Team Expansion',
    description: 'Grew to 25+ engineers and data specialists. Launched our cloud consulting practice.',
  },
  {
    year: '2024',
    title: '100+ Projects Delivered',
    description:
      'Crossed the 100-project milestone across fintech, healthcare, logistics, and retail verticals.',
  },
  {
    year: '2025',
    title: '5 Years of Excellence',
    description:
      'Celebrating five years of trusted partnerships, innovation, and measurable client impact.',
  },
]

export const companyStats = {
  years: 5,
  projects: 120,
  clients: 45,
  teamSize: 30,
}
