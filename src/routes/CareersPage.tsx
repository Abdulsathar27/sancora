import { useMemo, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, Clock, MapPin } from 'lucide-react'
import { PageMeta } from '../components/layout/PageMeta'
import { ApplicationForm } from '../components/careers/ApplicationForm'
import { Section, SectionHeader } from '../components/ui/Section'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import {
  careerBenefits,
  jobDepartments,
  jobOpenings,
  type JobDepartment,
} from '../data/careers'
import { COMPANY_NAME } from '../data/brand'

export function CareersPage() {
  const [department, setDepartment] = useState<'All' | JobDepartment>('All')

  const jobs = useMemo(
    () =>
      department === 'All'
        ? jobOpenings
        : jobOpenings.filter((job) => job.department === department),
    [department],
  )

  return (
    <>
      <PageMeta
        title="Careers"
        description={`Open roles at ${COMPANY_NAME}. Apply for software, data, cloud, design, and business positions in Bangalore — or send a general application.`}
      />

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-3 inline-block text-sm font-medium uppercase tracking-widest text-electric"
          >
            Careers
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            Find your next role. Help us find you.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-silver-muted"
          >
            Open roles for people who want to ship real client work. If you are a strong fit and do
            not see your title listed, send a general application — we hire for capability, not
            only job titles.
          </motion.p>
        </div>
      </Section>

      <Section dark>
        <SectionHeader
          label="Why Sancora"
          title="What we look for"
          description="We hire people who take ownership, communicate clearly, and care about the client outcome — not just the ticket."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {careerBenefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Card hover={false} className="h-full">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-silver-muted">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          label="Open roles"
          title="Job opportunities"
          description={`${jobOpenings.length} live openings. Filter by team, then apply with your profile.`}
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {jobDepartments.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setDepartment(item)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                department === item
                  ? 'bg-electric/15 text-white ring-1 ring-electric/40'
                  : 'text-silver hover:bg-white/5 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {jobs.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <Card className="flex h-full flex-col">
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-electric/10 px-3 py-1 text-xs font-medium text-electric">
                    {job.department}
                  </span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-silver">
                    {job.type}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-white">{job.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-silver-muted">{job.summary}</p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-silver-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-electric" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase className="h-3.5 w-3.5 text-electric" />
                    {job.experience}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-electric" />
                    {job.type}
                  </span>
                </div>
                <Link to="/careers/$jobId" params={{ jobId: job.id }} className="mt-6 inline-flex">
                  <Button variant="secondary" size="sm">
                    View role & apply
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        {jobs.length === 0 && (
          <p className="text-center text-silver-muted">No openings in this team right now.</p>
        )}
      </Section>

      <Section dark id="apply">
        <div className="grid items-start gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeader
              centered={false}
              label="Apply"
              title="Send your profile"
              description="Tell us the role you want and why you are a fit. We review every application and reply to shortlisted candidates."
            />
          </div>
          <div className="lg:col-span-3">
            <ApplicationForm />
          </div>
        </div>
      </Section>
    </>
  )
}
