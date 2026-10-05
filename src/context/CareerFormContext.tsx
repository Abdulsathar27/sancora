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
  errorMessage: string
  updateField: (field: keyof CareerFormData, value: string) => void
  setRole: (role: string) => void
  submitForm: (e: FormEvent, cv: File) => Promise<void>
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

function buildApplication(data: CareerFormData, cv: File): FormData {
  const area = data.role.trim() || 'Internship program'
  const body = new FormData()
  body.append('_subject', `Internship program application — ${area}`)
  body.append('_template', 'table')
  body.append('_captcha', 'false')
  body.append('name', data.name)
  body.append('email', data.email)
  body.append('phone', data.phone || '—')
  body.append('area', area)
  body.append('college', data.college || '—')
  body.append('year', data.year || '—')
  body.append('linkedin', data.linkedin || '—')
  body.append('portfolio', data.portfolio || '—')
  body.append('message', data.message)
  body.append('attachment', cv, cv.name)
  return body
}

export function CareerFormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<CareerFormData>(initialFormData)
  const [status, setStatus] = useState<SubmissionStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const updateField = useCallback((field: keyof CareerFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }, [])

  const setRole = useCallback((role: string) => {
    setFormData((prev) => ({ ...prev, role }))
  }, [])

  const submitForm = async (e: FormEvent, cv: File) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${COMPANY_EMAIL}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: buildApplication(formData, cv),
      })
      const payload = (await response.json()) as { success?: string | boolean; message?: string }
      const failed = !response.ok || payload.success === false || payload.success === 'false'
      if (failed) {
        const needsActivation = /activat/i.test(payload.message ?? '')
        throw new Error(
          needsActivation
            ? `Open ${COMPANY_EMAIL} and confirm the form email, then submit again.`
            : 'The application could not be sent. Try again in a moment.',
        )
      }
      setStatus('success')
      setFormData(initialFormData)
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error && error.message
          ? error.message
          : 'The application could not be sent. Try again in a moment.',
      )
    }
  }

  return (
    <CareerFormContext.Provider
      value={{ formData, status, errorMessage, updateField, setRole, submitForm }}
    >
      {children}
    </CareerFormContext.Provider>
  )
}

export function useCareerForm() {
  const ctx = useContext(CareerFormContext)
  if (!ctx) throw new Error('useCareerForm must be used within CareerFormProvider')
  return ctx
}
