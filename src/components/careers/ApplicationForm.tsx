import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { useCareerForm } from '../../context/CareerFormContext'
import { jobOpenings } from '../../data/careers'
import { COMPANY_EMAIL } from '../../data/brand'

interface ApplicationFormProps {
  defaultRole?: string
}

export function ApplicationForm({ defaultRole = '' }: ApplicationFormProps) {
  const { formData, status, updateField, setRole, submitForm } = useCareerForm()

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
          <h3 className="mt-4 text-xl font-semibold text-white">Application started</h3>
          <p className="mx-auto mt-2 max-w-md text-silver-muted">
            Your email app should open with the application details. Send it to {COMPANY_EMAIL} so
            our team can review your profile.
          </p>
        </motion.div>
      </Card>
    )
  }

  return (
    <Card hover={false}>
      <form onSubmit={submitForm} className="space-y-5">
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
              Role *
            </label>
            <select
              id="career-role"
              required
              value={formData.role}
              onChange={(e) => updateField('role', e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-charcoal px-4 py-2.5 text-white focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
            >
              <option value="">Select a role</option>
              {jobOpenings.map((job) => (
                <option key={job.id} value={job.title}>
                  {job.title}
                </option>
              ))}
              <option value="General application">General application — not listed</option>
            </select>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="career-experience" className="mb-1.5 block text-sm font-medium text-silver">
              Years of experience
            </label>
            <input
              id="career-experience"
              type="text"
              value={formData.experience}
              onChange={(e) => updateField('experience', e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-charcoal px-4 py-2.5 text-white placeholder:text-silver-muted/50 focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
              placeholder="e.g. 3 years"
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
          <label htmlFor="career-message" className="mb-1.5 block text-sm font-medium text-silver">
            Why you are a fit *
          </label>
          <textarea
            id="career-message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => updateField('message', e.target.value)}
            className="w-full resize-none rounded-lg border border-white/10 bg-charcoal px-4 py-2.5 text-white placeholder:text-silver-muted/50 focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
            placeholder="Tell us about relevant work, what you want to own here, and when you can start."
          />
        </div>

        {status === 'error' && (
          <div className="flex items-center gap-2 text-sm text-red-400">
            <AlertCircle className="h-4 w-4" />
            Something went wrong. Email us directly at {COMPANY_EMAIL}.
          </div>
        )}

        <Button type="submit" size="lg" disabled={status === 'loading'} className="w-full sm:w-auto">
          {status === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Opening email...
            </>
          ) : (
            'Submit application'
          )}
        </Button>
        <p className="text-xs text-silver-muted">
          Applications are sent to {COMPANY_EMAIL}. Attach your CV in the email before sending.
        </p>
      </form>
    </Card>
  )
}
