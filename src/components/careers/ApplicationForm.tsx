import { useEffect, useState } from 'react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { useCareerForm } from '../../context/CareerFormContext'
import { programAreas } from '../../data/careers'
import { COMPANY_EMAIL, SITE_URL } from '../../data/brand'

interface ApplicationFormProps {
  defaultRole?: string
}

const MAX_CV_BYTES = 5 * 1024 * 1024

function isCvFile(file: File) {
  return /\.(pdf|doc|docx)$/i.test(file.name)
}

export function ApplicationForm({ defaultRole = '' }: ApplicationFormProps) {
  const { formData, updateField, setRole } = useCareerForm()
  const [cvName, setCvName] = useState('')
  const [cvError, setCvError] = useState('')

  useEffect(() => {
    if (defaultRole) setRole(defaultRole)
  }, [defaultRole, setRole])

  return (
    <Card hover={false}>
      <form
        action={`https://formsubmit.co/${COMPANY_EMAIL}`}
        method="POST"
        encType="multipart/form-data"
        onSubmit={(event) => {
          const form = event.currentTarget
          const file = (form.elements.namedItem('attachment') as HTMLInputElement).files?.[0]
          if (!file || !isCvFile(file)) {
            event.preventDefault()
            setCvError('Upload a PDF or Word CV to apply.')
            return
          }
          if (file.size > MAX_CV_BYTES) {
            event.preventDefault()
            setCvError('CV must be 5 MB or smaller.')
            return
          }
          const subject = form.elements.namedItem('_subject') as HTMLInputElement
          const when = new Date().toLocaleString('en-IN', {
            dateStyle: 'medium',
            timeStyle: 'short',
          })
          subject.value = `Internship — ${formData.name.trim()} — ${formData.role.trim()} — ${when}`
        }}
        className="space-y-5"
      >
        <input type="hidden" name="_subject" value="Internship application" />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value={`${SITE_URL}/internship?applied=1#received`} />
        <input
          type="hidden"
          name="How to review"
          value="This is one separate application. Read this person on their own. Check the area, college, year, reason, and the attached CV before you select or reject them."
        />
        <input type="hidden" name="CV file name" value={cvName || 'Not uploaded'} />
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="career-name" className="mb-1.5 block text-sm font-medium text-silver">
              Full Name *
            </label>
            <input
              id="career-name"
              name="Full name"
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
              name="email"
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
              name="Phone"
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
              name="Area to learn"
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
              name="College"
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
              name="Year or graduation"
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
              name="LinkedIn"
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
            name="Portfolio or GitHub"
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
            name="attachment"
            type="file"
            required
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (!file) {
                setCvName('')
                setCvError('Upload your CV to apply.')
                return
              }
              if (!isCvFile(file)) {
                setCvName('')
                setCvError('Upload a PDF or Word file.')
                e.target.value = ''
                return
              }
              if (file.size > MAX_CV_BYTES) {
                setCvName('')
                setCvError('CV must be 5 MB or smaller.')
                e.target.value = ''
                return
              }
              setCvError('')
              setCvName(file.name)
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
            name="Why this internship"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => updateField('message', e.target.value)}
            className="w-full resize-none rounded-lg border border-white/10 bg-charcoal px-4 py-2.5 text-white placeholder:text-silver-muted/50 focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
            placeholder="What you have built or studied, and when you can start."
          />
        </div>

        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Apply to the program
        </Button>
        <p className="text-xs text-silver-muted">
          Your details and CV file are emailed to {COMPANY_EMAIL}. After it sends, this form clears
          for the next person.
        </p>
      </form>
    </Card>
  )
}
