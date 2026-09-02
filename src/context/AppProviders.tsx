import { type ReactNode } from 'react'
import { NavProvider } from './NavContext'
import { ContactFormProvider } from './ContactFormContext'

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <NavProvider>
      <ContactFormProvider>{children}</ContactFormProvider>
    </NavProvider>
  )
}
