import { motion } from 'framer-motion'
import { Section, SectionHeader } from '../ui/Section'
import { TestimonialCarousel } from '../ui/TestimonialCarousel'
import { clientLogos } from '../../data/testimonials'

export function ClientSection() {
  return (
    <>
      <Section>
        <SectionHeader
          label="Our Clients"
          title="Trusted by Industry Leaders"
          description="Organizations that rely on Sancora for mission-critical technology solutions."
        />

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {clientLogos.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex h-20 items-center justify-center rounded-xl border border-white/8 bg-charcoal-elevated/40 px-4"
            >
              <span className="text-center text-xs font-medium uppercase tracking-wider text-silver-muted">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section dark>
        <SectionHeader label="Testimonials" title="What Our Clients Say" />
        <TestimonialCarousel />
      </Section>
    </>
  )
}
