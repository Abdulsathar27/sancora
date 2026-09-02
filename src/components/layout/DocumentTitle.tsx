import { useEffect } from 'react'
import { useRouterState } from '@tanstack/react-router'
import { COMPANY_NAME } from '../../data/brand'

const routeTitles: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/services': 'Services',
  '/case-studies': 'Case Studies',
  '/contact': 'Contact',
}

const serviceTitles: Record<string, string> = {
  'software-development': 'Software Development',
  'data-analytics': 'Data Analytics & BI',
  'cloud-consulting': 'Cloud & Consulting',
}

function resolveTitle(pathname: string): string {
  if (routeTitles[pathname]) return routeTitles[pathname]

  if (pathname.startsWith('/services/')) {
    const id = pathname.split('/')[2] ?? ''
    return serviceTitles[id] ?? 'Services'
  }

  return 'Home'
}

/** Updates the browser tab on every navigation: "Page | Sancora Technologies" */
export function DocumentTitle() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  useEffect(() => {
    document.title = `${resolveTitle(pathname)} | ${COMPANY_NAME}`
  }, [pathname])

  return null
}
