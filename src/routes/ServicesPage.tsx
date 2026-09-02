import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { PageMeta } from '../components/layout/PageMeta'
import { Section, SectionHeader } from '../components/ui/Section'
import { Card } from '../components/ui/Card'
import { services, subServices } from '../data/services'

export function ServicesPage() {
  return (
    <>
      <PageMeta
        title="Services"
        description="Custom software development, data analytics & BI, and cloud consulting services from Sancora Technologies."
      />

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-3 inline-block text-sm font-medium uppercase tracking-widest text-electric"
          >
            Our Expertise
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            Technology Solutions That Scale
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-silver-muted"
          >
            From concept to deployment, we deliver end-to-end solutions tailored to your business
            needs.
          </motion.p>
        </div>
      </Section>

      <Section dark>
        <div className="space-y-16">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'lg:direction-ltr' : ''}>
                <div className="mb-4 inline-flex rounded-lg bg-electric/10 p-3">
                  <service.icon className="h-7 w-7 text-electric" />
                </div>
                <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                <p className="mt-4 leading-relaxed text-silver-muted">{service.description}</p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-silver">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/services/$serviceId"
                  params={{ serviceId: service.id }}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-electric hover:underline"
                >
                  View full details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <Card hover={false} className={i % 2 === 1 ? 'lg:direction-ltr' : ''}>
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-electric">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-silver"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          label="Specializations"
          title="Additional Capabilities"
          description="Specialized services that complement our core offerings."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subServices.map((sub, i) => (
            <motion.div
              key={sub.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="flex items-start gap-4">
                <div className="rounded-lg bg-electric/10 p-2.5">
                  <sub.icon className="h-5 w-5 text-electric" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{sub.label}</h3>
                  <p className="mt-1 text-sm text-silver-muted">{sub.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  )
}
