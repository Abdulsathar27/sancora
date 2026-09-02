import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Section, SectionHeader } from '../ui/Section'
import { Card } from '../ui/Card'
import { services } from '../../data/services'

export function ServicesPreview() {
  return (
    <Section id="services-preview">
      <SectionHeader
        label="What We Do"
        title="Core Services"
        description="End-to-end technology solutions designed for enterprise scale and lasting impact."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link to="/services/$serviceId" params={{ serviceId: service.id }}>
              <Card className="group h-full">
                <div className="mb-4 inline-flex rounded-lg bg-electric/10 p-3">
                  <service.icon className="h-6 w-6 text-electric" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-electric transition-colors">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-silver-muted">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-electric opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
