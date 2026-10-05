import { type ReactNode } from 'react'
import { NavProvider } from './NavContext'
import { ContactFormProvider } from './ContactFormContext'
import { CareerFormProvider } from './CareerFormContext'

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <NavProvider>
      <ContactFormProvider>
        <CareerFormProvider>{children}</CareerFormProvider>
      </ContactFormProvider>
    </NavProvider>
  )
}
