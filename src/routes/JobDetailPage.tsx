import { Link, useParams } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowLeft, Briefcase, CheckCircle2, Clock, MapPin } from 'lucide-react'
import { PageMeta } from '../components/layout/PageMeta'
import { ApplicationForm } from '../components/careers/ApplicationForm'
import { Section } from '../components/ui/Section'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { getJobById } from '../data/careers'

export function JobDetailPage() {
  const { jobId } = useParams({ from: '/careers/$jobId' })
  const job = getJobById(jobId)

  if (!job) {
    return (
      <Section>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Role not found</h1>
          <p className="mt-4 text-silver-muted">This opening may have closed or the link is incorrect.</p>
          <Link to="/careers" className="mt-6 inline-block">
            <Button variant="secondary">Back to Careers</Button>
          </Link>
        </div>
      </Section>
    )
  }

  return (
    <>
      <PageMeta title={job.title} description={job.summary} />

      <Section>
        <Link
          to="/careers"
          className="mb-8 inline-flex items-center gap-2 text-sm text-silver-muted transition-colors hover:text-electric"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Careers
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-electric/10 px-3 py-1 text-xs font-medium text-electric">
              {job.department}
            </span>
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-silver">{job.type}</span>
          </div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">{job.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-silver-muted">{job.description}</p>
          <div className="mt-6 flex flex-wrap gap-5 text-sm text-silver-muted">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-electric" />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-electric" />
              {job.experience}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-electric" />
              {job.type}
            </span>
          </div>
        </motion.div>
      </Section>

      <Section dark>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card hover={false}>
            <h2 className="mb-6 text-xl font-semibold text-white">What you will do</h2>
            <ul className="space-y-4">
              {job.responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-3 text-silver">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-electric" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card hover={false}>
            <h2 className="mb-6 text-xl font-semibold text-white">What we look for</h2>
            <ul className="space-y-4">
              {job.requirements.map((item) => (
                <li key={item} className="flex items-start gap-3 text-silver">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {job.niceToHave.length > 0 && (
          <Card hover={false} className="mt-8">
            <h2 className="mb-4 text-xl font-semibold text-white">Nice to have</h2>
            <div className="flex flex-wrap gap-3">
              {job.niceToHave.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-electric/20 bg-electric/5 px-4 py-1.5 text-sm text-electric"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>
        )}
      </Section>

      <Section id="apply">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Apply for {job.title}</h2>
          <p className="mt-3 text-silver-muted">
            Share your background. Shortlisted candidates hear back from the hiring team.
          </p>
        </div>
        <ApplicationForm defaultRole={job.title} />
      </Section>
    </>
  )
}
