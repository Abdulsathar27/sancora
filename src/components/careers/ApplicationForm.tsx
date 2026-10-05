import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { useCareerForm } from '../../context/CareerFormContext'
import { programAreas } from '../../data/careers'
import { COMPANY_EMAIL } from '../../data/brand'

interface ApplicationFormProps {
  defaultRole?: string
}

const MAX_CV_BYTES = 5 * 1024 * 1024

function isCvFile(file: File) {
  return /\.(pdf|doc|docx)$/i.test(file.name)
}

export function ApplicationForm({ defaultRole = '' }: ApplicationFormProps) {
  const { formData, status, errorMessage, updateField, setRole, submitForm } = useCareerForm()
  const [cv, setCv] = useState<File | null>(null)
  const [cvError, setCvError] = useState('')

  useEffect(() => {
    if (defaultRole) setRole(defaultRole)
  }, [defaultRole, setRole])

  if (status === 'success') {
    return (
      <Card hover={false}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-10 text-center"
        >
          <CheckCircle2 className="mx-auto h-12 w-12 text-electric" />
          <h3 className="mt-4 text-xl font-semibold text-white">Application sent</h3>
          <p className="mx-auto mt-2 max-w-md text-silver-muted">
            Your details and CV were emailed to {COMPANY_EMAIL}. The team will review your
            internship application.
          </p>
        </motion.div>
      </Card>
    )
  }

  return (
    <Card hover={false}>
      <form
        onSubmit={(event) => {
          if (!cv) {
            event.preventDefault()
            setCvError('Upload your CV to apply.')
            return
          }
          void submitForm(event, cv)
        }}
        className="space-y-5"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="career-name" className="mb-1.5 block text-sm font-medium text-silver">
              Full Name *
            </label>
            <input
              id="career-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-charcoal px-4 py-2.5 text-white placeholder:text-silver-muted/50 focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="career-email" className="mb-1.5 block text-sm font-medium text-silver">
              Email *
            </label>
            <input
              id="career-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-charcoal px-4 py-2.5 text-white placeholder:text-silver-muted/50 focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
              placeholder="you@email.com"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="career-phone" className="mb-1.5 block text-sm font-medium text-silver">
              Phone
            </label>
            <input
              id="career-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-charcoal px-4 py-2.5 text-white placeholder:text-silver-muted/50 focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
              placeholder="+91"
            />
          </div>
          <div>
            <label htmlFor="career-role" className="mb-1.5 block text-sm font-medium text-silver">
              Area you want to learn *
            </label>
            <select
              id="career-role"
              required
              value={formData.role}
              onChange={(e) => updateField('role', e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-charcoal px-4 py-2.5 text-white focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
            >
              <option value="">Select an area</option>
              {programAreas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="career-college" className="mb-1.5 block text-sm font-medium text-silver">
              College *
            </label>
            <input
              id="career-college"
              type="text"
              required
              value={formData.college}
              onChange={(e) => updateField('college', e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-charcoal px-4 py-2.5 text-white placeholder:text-silver-muted/50 focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
              placeholder="College or university"
            />
          </div>
          <div>
            <label htmlFor="career-year" className="mb-1.5 block text-sm font-medium text-silver">
              Year / graduation *
            </label>
            <input
              id="career-year"
              type="text"
              required
              value={formData.year}
              onChange={(e) => updateField('year', e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-charcoal px-4 py-2.5 text-white placeholder:text-silver-muted/50 focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
              placeholder="e.g. 3rd year, 2026"
            />
          </div>
          <div>
            <label htmlFor="career-linkedin" className="mb-1.5 block text-sm font-medium text-silver">
              LinkedIn
            </label>
            <input
              id="career-linkedin"
              type="url"
              value={formData.linkedin}
              onChange={(e) => updateField('linkedin', e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-charcoal px-4 py-2.5 text-white placeholder:text-silver-muted/50 focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
              placeholder="https://linkedin.com/in/..."
            />
          </div>
        </div>

        <div>
          <label htmlFor="career-portfolio" className="mb-1.5 block text-sm font-medium text-silver">
            Portfolio / GitHub
          </label>
          <input
            id="career-portfolio"
            type="url"
            value={formData.portfolio}
            onChange={(e) => updateField('portfolio', e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-charcoal px-4 py-2.5 text-white placeholder:text-silver-muted/50 focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
            placeholder="https://"
          />
        </div>

        <div>
          <label htmlFor="career-cv" className="mb-1.5 block text-sm font-medium text-silver">
            Upload CV *
          </label>
          <input
            id="career-cv"
            type="file"
            required
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (!file) {
                setCv(null)
                setCvError('Upload your CV to apply.')
                return
              }
              if (!isCvFile(file)) {
                setCv(null)
                setCvError('Upload a PDF or Word file.')
                e.target.value = ''
                return
              }
              if (file.size > MAX_CV_BYTES) {
                setCv(null)
                setCvError('CV must be 5 MB or smaller.')
                e.target.value = ''
                return
              }
              setCvError('')
              setCv(file)
            }}
            className="w-full rounded-lg border border-white/10 bg-charcoal px-4 py-2.5 text-sm text-silver file:mr-4 file:rounded-md file:border-0 file:bg-electric/15 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-white"
          />
          <p className="mt-1.5 text-xs text-silver-muted">PDF or Word, up to 5 MB. This file is attached to the application email.</p>
          {cvError && <p className="mt-1.5 text-sm text-red-400">{cvError}</p>}
        </div>

        <div>
          <label htmlFor="career-message" className="mb-1.5 block text-sm font-medium text-silver">
            Why this internship *
          </label>
          <textarea
            id="career-message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => updateField('message', e.target.value)}
            className="w-full resize-none rounded-lg border border-white/10 bg-charcoal px-4 py-2.5 text-white placeholder:text-silver-muted/50 focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
            placeholder="What you have built or studied, and when you can start."
          />
        </div>

        {status === 'error' && (
          <div className="flex items-center gap-2 text-sm text-red-400">
            <AlertCircle className="h-4 w-4" />
            {errorMessage || `Something went wrong. Email us directly at ${COMPANY_EMAIL}.`}
          </div>
        )}

        <Button type="submit" size="lg" disabled={status === 'loading'} className="w-full sm:w-auto">
          {status === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending application...
            </>
          ) : (
            'Apply to the program'
          )}
        </Button>
        <p className="text-xs text-silver-muted">
          Your details and CV are emailed to {COMPANY_EMAIL}.
        </p>
      </form>
    </Card>
  )
}
