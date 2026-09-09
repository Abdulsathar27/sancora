import { useEffect } from 'react'
import { useRouterState } from '@tanstack/react-router'
import { COMPANY_NAME, SITE_URL } from '../../data/brand'

interface PageMetaProps {
  title: string
  description?: string
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', url)
}

/**
 * Page-level SEO: description, Open Graph, Twitter, and canonical URL.
 * Browser tab titles are owned by DocumentTitle (always includes Sancora Technologies).
 */
export function PageMeta({ title, description }: PageMetaProps) {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const pageUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname}`
  const fullTitle =
    pathname === '/'
      ? `${COMPANY_NAME} | Software Development & Data Analytics`
      : `${title} | ${COMPANY_NAME}`

  useEffect(() => {
    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
      setMeta('name', 'twitter:description', description)
    }

    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:url', pageUrl)
    setMeta('name', 'twitter:title', fullTitle)
    setCanonical(pageUrl)
  }, [description, fullTitle, pageUrl])

  return null
}
