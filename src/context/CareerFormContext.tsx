import {
  createContext,
  useCallback,
  useContext,
  useState,
  type FormEvent,
  type ReactNode,
} from 'react'
import { COMPANY_EMAIL } from '../data/brand'

export interface CareerFormData {
  name: string
  email: string
  phone: string
  role: string
  college: string
  year: string
  linkedin: string
  portfolio: string
  message: string
}

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error'

interface CareerFormContextValue {
  formData: CareerFormData
  status: SubmissionStatus
  updateField: (field: keyof CareerFormData, value: string) => void
  setRole: (role: string) => void
  submitForm: (e: FormEvent) => Promise<void>
}

const initialFormData: CareerFormData = {
  name: '',
  email: '',
  phone: '',
  role: '',
  college: '',
  year: '',
  linkedin: '',
  portfolio: '',
  message: '',
}

const CareerFormContext = createContext<CareerFormContextValue | null>(null)

function buildMailto(data: CareerFormData): string {
  const role = data.role.trim() || 'Internship program'
  const subject = `Internship program application — ${role}`
  const body = [
    'New internship application from the Sancora website',
    '',
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || '—'}`,
    `Internship: ${role}`,
    `College: ${data.college || '—'}`,
    `Year / graduation: ${data.year || '—'}`,
    `LinkedIn: ${data.linkedin || '—'}`,
    `Portfolio / GitHub: ${data.portfolio || '—'}`,
    '',
    'Why they want this internship:',
    data.message,
  ].join('\n')

  return `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function CareerFormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<CareerFormData>(initialFormData)
  const [status, setStatus] = useState<SubmissionStatus>('idle')

  const updateField = useCallback((field: keyof CareerFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }, [])

  const setRole = useCallback((role: string) => {
    setFormData((prev) => ({ ...prev, role }))
  }, [])

  const submitForm = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      window.location.href = buildMailto(formData)
      await new Promise((resolve) => setTimeout(resolve, 600))
      setStatus('success')
      setFormData(initialFormData)
    } catch {
      setStatus('error')
    }
  }

  return (
    <CareerFormContext.Provider value={{ formData, status, updateField, setRole, submitForm }}>
      {children}
    </CareerFormContext.Provider>
  )
}

export function useCareerForm() {
  const ctx = useContext(CareerFormContext)
  if (!ctx) throw new Error('useCareerForm must be used within CareerFormProvider')
  return ctx
}
