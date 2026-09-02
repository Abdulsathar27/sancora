import { Link, useParams } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { PageMeta } from '../components/layout/PageMeta'
import { Section } from '../components/ui/Section'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { getServiceById } from '../data/services'

export function ServiceDetailPage() {
  const { serviceId } = useParams({ from: '/services/$serviceId' })
  const service = getServiceById(serviceId)

  if (!service) {
    return (
      <Section>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Service Not Found</h1>
          <p className="mt-4 text-silver-muted">The service you&apos;re looking for doesn&apos;t exist.</p>
          <Link to="/services" className="mt-6 inline-block">
            <Button variant="secondary">Back to Services</Button>
          </Link>
        </div>
      </Section>
    )
  }

  const Icon = service.icon

  return (
    <>
      <PageMeta title={service.title} description={service.shortDescription} />

      <Section>
        <Link
          to="/services"
          className="mb-8 inline-flex items-center gap-2 text-sm text-silver-muted transition-colors hover:text-electric"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 inline-flex rounded-xl bg-electric/10 p-4">
            <Icon className="h-8 w-8 text-electric" />
          </div>

          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">{service.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-silver-muted">
            {service.description}
          </p>
        </motion.div>
      </Section>

      <Section dark>
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card hover={false}>
              <h2 className="mb-6 text-xl font-semibold text-white">What We Deliver</h2>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-silver">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-electric" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card hover={false}>
              <h2 className="mb-6 text-xl font-semibold text-white">Key Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-silver">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>

        <Card hover={false} className="mt-8">
          <h2 className="mb-4 text-xl font-semibold text-white">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-electric/20 bg-electric/5 px-4 py-1.5 text-sm text-electric"
              >
                {tech}
              </span>
            ))}
          </div>
        </Card>
      </Section>

      <Section>
        <div className="rounded-2xl border border-electric/20 bg-linear-to-r from-electric/5 to-cyan/5 px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Interested in {service.title}?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-silver-muted">
            Let&apos;s discuss how this service can address your specific business needs.
          </p>
          <Link to="/contact" className="mt-6 inline-block">
            <Button size="lg">Request a Consultation</Button>
          </Link>
        </div>
      </Section>
    </>
  )
}
