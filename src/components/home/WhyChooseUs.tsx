import { motion } from 'framer-motion'
import { Shield, Clock, Users, Zap } from 'lucide-react'
import { Section, SectionHeader } from '../ui/Section'
import { Card } from '../ui/Card'

const reasons = [
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'SOC 2 aligned practices, encrypted data handling, and compliance-ready architectures.',
  },
  {
    icon: Clock,
    title: 'Proven Track Record',
    description: 'Five years and 120+ successful project deliveries across diverse industries.',
  },
  {
    icon: Users,
    title: 'Dedicated Teams',
    description: 'Senior engineers and data specialists assigned to your project — no bench warmers.',
  },
  {
    icon: Zap,
    title: 'Agile Delivery',
    description: 'Two-week sprints with transparent progress tracking and measurable milestones.',
  },
]

export function WhyChooseUs() {
  return (
    <Section dark>
      <SectionHeader
        label="Why Sancora"
        title="Built on Trust, Driven by Results"
        description="We combine deep technical expertise with a commitment to your business outcomes."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Card className="h-full text-center">
              <div className="mx-auto mb-4 inline-flex rounded-full bg-electric/10 p-4">
                <reason.icon className="h-6 w-6 text-electric" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-silver-muted">{reason.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
