import { type ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { DocumentTitle } from './DocumentTitle'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-svh flex-col overflow-x-hidden">
      <DocumentTitle />
      <Navbar />
      <main className="flex-1 pt-20 sm:pt-24">{children}</main>
      <Footer />
    </div>
  )
}
