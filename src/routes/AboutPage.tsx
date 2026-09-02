import { motion } from 'framer-motion'
import { Target, Eye, Heart } from 'lucide-react'
import { PageMeta } from '../components/layout/PageMeta'
import { Section, SectionHeader } from '../components/ui/Section'
import { Card } from '../components/ui/Card'
import { leadership, milestones } from '../data/team'

const values = [
  {
    icon: Target,
    title: 'Mission',
    text: 'To empower organizations with technology solutions that drive measurable business outcomes — turning complex challenges into competitive advantages.',
  },
  {
    icon: Eye,
    title: 'Vision',
    text: 'To be the most trusted technology partner for enterprises seeking excellence in software development and data analytics.',
  },
  {
    icon: Heart,
    title: 'Values',
    text: 'Integrity, craftsmanship, and client success. We build lasting partnerships founded on transparency, quality, and shared ambition.',
  },
]

export function AboutPage() {
  return (
    <>
      <PageMeta
        title="About Us"
        description="Learn about Sancora Technologies — our story, mission, and the team behind 5 years of enterprise excellence."
      />

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-3 inline-block text-sm font-medium uppercase tracking-widest text-electric"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            Five Years of Building What Matters
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-base leading-relaxed text-silver-muted sm:mt-6 sm:text-lg"
          >
            Founded in 2021, Sancora Technologies emerged from a simple belief: enterprise software
            and data analytics should be accessible, reliable, and transformative. Over five years,
            we&apos;ve grown from a small engineering team to a full-service technology partner
            trusted by 45+ organizations worldwide.
          </motion.p>
        </div>
      </Section>

      <Section dark>
        <SectionHeader
          label="Timeline"
          title="Our Journey"
          description="Key milestones that shaped who we are today."
        />

        <div className="relative mx-auto max-w-3xl pl-2 sm:pl-0">
          <div className="absolute top-0 bottom-0 left-3 w-px bg-linear-to-b from-electric via-electric/50 to-transparent sm:left-8 md:left-1/2" />

          {milestones.map((milestone, i) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative mb-10 flex items-start gap-4 sm:mb-12 sm:gap-6 md:gap-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`min-w-0 flex-1 pl-2 sm:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <span className="text-sm font-bold text-electric">{milestone.year}</span>
                <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">{milestone.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-silver-muted">
                  {milestone.description}
                </p>
              </div>

              <div className="relative z-10 mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-electric ring-4 ring-charcoal-light md:absolute md:left-1/2 md:mt-0 md:-translate-x-1/2">
                <div className="h-2 w-2 rounded-full bg-white" />
              </div>

              <div className="hidden flex-1 md:block" />
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader label="Purpose" title="Mission, Vision & Values" />

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="h-full">
                <div className="mb-4 inline-flex rounded-lg bg-electric/10 p-3">
                  <item.icon className="h-6 w-6 text-electric" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-silver-muted">{item.text}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section dark>
        <SectionHeader
          label="Leadership"
          title="Meet Our Team"
          description="The people driving Sancora's commitment to excellence."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-electric to-cyan text-2xl font-bold text-white">
                  {member.initials}
                </div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="mb-3 text-sm text-electric">{member.role}</p>
                <p className="text-sm leading-relaxed text-silver-muted">{member.bio}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  )
}
