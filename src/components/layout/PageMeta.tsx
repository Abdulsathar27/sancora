import { useEffect } from 'react'

interface PageMetaProps {
  title: string
  description?: string
}

/**
 * Page-level SEO description.
 * Browser tab titles are owned by DocumentTitle (always includes Sancora Technologies).
 */
export function PageMeta({ description }: PageMetaProps) {
  useEffect(() => {
    if (!description) return

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', description)
  }, [description])

  return null
}
