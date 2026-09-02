import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { PageMeta } from '../components/layout/PageMeta'
import { Section } from '../components/ui/Section'
import { Card } from '../components/ui/Card'
import { caseStudies } from '../data/caseStudies'

export function CaseStudiesPage() {
  return (
    <>
      <PageMeta
        title="Case Studies"
        description="Explore how Sancora Technologies has delivered measurable results for enterprise clients."
      />

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-3 inline-block text-sm font-medium uppercase tracking-widest text-electric"
          >
            Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            Projects That Deliver Results
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-silver-muted"
          >
            Selected highlights from our work across industries — real challenges, real solutions,
            measurable impact.
          </motion.p>
        </div>
      </Section>

      <Section dark>
        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="group h-full">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-electric/10 px-3 py-1 text-xs font-medium text-electric">
                    {study.industry}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-silver-muted transition-colors group-hover:text-electric" />
                </div>

                <h2 className="mb-2 text-xl font-semibold text-white">{study.title}</h2>
                <p className="mb-1 text-sm text-electric">{study.client}</p>
                <p className="mb-4 text-sm leading-relaxed text-silver-muted">{study.summary}</p>

                <div className="mb-4">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-silver-muted">
                    Challenge
                  </h4>
                  <p className="text-sm text-silver">{study.challenge}</p>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-silver-muted">
                    Solution
                  </h4>
                  <p className="text-sm text-silver">{study.solution}</p>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-silver-muted">
                    Results
                  </h4>
                  <ul className="space-y-1">
                    {study.results.map((result) => (
                      <li key={result} className="flex items-center gap-2 text-sm text-silver">
                        <span className="h-1.5 w-1.5 rounded-full bg-electric" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-silver-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  )
}
