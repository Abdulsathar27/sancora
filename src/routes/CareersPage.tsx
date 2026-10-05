import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Clock, GraduationCap, MapPin } from 'lucide-react'
import { PageMeta } from '../components/layout/PageMeta'
import { ApplicationForm } from '../components/careers/ApplicationForm'
import { Section, SectionHeader } from '../components/ui/Section'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { internshipHighlights, internshipProgram, programIncludes } from '../data/careers'
import { COMPANY_NAME } from '../data/brand'

export function CareersPage() {
  const [applied, setApplied] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('applied') !== '1') return
    setApplied(true)
    params.delete('applied')
    const query = params.toString()
    window.history.replaceState({}, '', `${window.location.pathname}${query ? `?${query}` : ''}`)
  }, [])

  const apply = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <PageMeta
        title="Internship Program"
        description={`Apply to the ${COMPANY_NAME} internship program. A 1–2 month mentored internship in Bangalore for students and fresh graduates.`}
      />

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-3 inline-block text-sm font-medium uppercase tracking-widest text-electric"
          >
            Internship program
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            Learn with us. Apply directly.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-silver-muted"
          >
            {internshipProgram.summary}
          </motion.p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-silver-muted">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-electric" />
              {internshipProgram.duration}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-electric" />
              {internshipProgram.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-electric" />
              {internshipProgram.who}
            </span>
          </div>
          <button type="button" onClick={apply} className="mt-8">
            <Button size="lg">Apply for the internship</Button>
          </button>
        </div>
      </Section>

      <Section dark>
        <SectionHeader
          label="The program"
          title="How the internship works"
          description="Apply once to the internship program. We match you with a mentor in the area that fits your studies."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {internshipHighlights.map((item, i) => (
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

        <Card hover={false} className="mt-8">
          <h2 className="mb-5 text-xl font-semibold text-white">What the program includes</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {programIncludes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-silver">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-electric" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section id="apply">
        {applied && (
          <div className="mb-8 flex items-start gap-3 rounded-xl border border-electric/30 bg-electric/10 px-4 py-4 text-silver">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-electric" />
            <p>
              Application sent, including the CV. This form is empty and ready for the next person.
            </p>
          </div>
        )}
        <div className="grid items-start gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeader
              centered={false}
              label="Apply"
              title="Internship application"
              description="Tell us your college, when you can start, and the area you want to learn. This form is only for the internship program."
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
