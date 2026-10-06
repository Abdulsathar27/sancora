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
    name: 'Sohail',
    role: 'Founder & CEO',
    bio: 'Leads Sancora with a focus on trusted software and clear business results. Sohail set the company up to turn complex work into outcomes clients can measure.',
    initials: 'SO',
  },
  {
    id: '2',
    name: 'Ryan',
    role: 'CTO',
    bio: 'Owns the engineering practice. Ryan keeps every system reliable, secure, and ready to scale with the client.',
    initials: 'RY',
  },
  {
    id: '3',
    name: 'Alby Thomas',
    role: 'Head of Data Analytics',
    bio: 'Turns raw data into decisions. Alby Thomas leads analytics and BI so clients can see what is working and what to do next.',
    initials: 'AT',
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
