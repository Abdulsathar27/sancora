import { createContext, useContext, useState, type FormEvent, type ReactNode } from 'react'

export interface ContactFormData {
  name: string
  email: string
  company: string
  service: string
  message: string
}

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error'

interface ContactFormContextValue {
  formData: ContactFormData
  status: SubmissionStatus
  updateField: (field: keyof ContactFormData, value: string) => void
  submitForm: (e: FormEvent) => Promise<void>
  resetForm: () => void
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
}

const ContactFormContext = createContext<ContactFormContextValue | null>(null)

export function ContactFormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData)
  const [status, setStatus] = useState<SubmissionStatus>('idle')

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const resetForm = () => {
    setFormData(initialFormData)
    setStatus('idle')
  }

  const submitForm = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setStatus('success')
      setFormData(initialFormData)
    } catch {
      setStatus('error')
    }
  }

  return (
    <ContactFormContext.Provider value={{ formData, status, updateField, submitForm, resetForm }}>
      {children}
    </ContactFormContext.Provider>
  )
}

export function useContactForm() {
  const ctx = useContext(ContactFormContext)
  if (!ctx) throw new Error('useContactForm must be used within ContactFormProvider')
  return ctx
}
