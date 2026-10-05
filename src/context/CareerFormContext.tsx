import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'

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

interface CareerFormContextValue {
  formData: CareerFormData
  updateField: (field: keyof CareerFormData, value: string) => void
  setRole: (role: string) => void
  resetForm: () => void
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

export function CareerFormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<CareerFormData>(initialFormData)

  const updateField = useCallback((field: keyof CareerFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }, [])

  const setRole = useCallback((role: string) => {
    setFormData((prev) => ({ ...prev, role }))
  }, [])

  const resetForm = useCallback(() => {
    setFormData(initialFormData)
  }, [])

  return (
    <CareerFormContext.Provider value={{ formData, updateField, setRole, resetForm }}>
      {children}
    </CareerFormContext.Provider>
  )
}

export function useCareerForm() {
  const ctx = useContext(CareerFormContext)
  if (!ctx) throw new Error('useCareerForm must be used within CareerFormProvider')
  return ctx
}
