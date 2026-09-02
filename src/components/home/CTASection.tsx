import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Section } from '../ui/Section'
import { Button } from '../ui/Button'

export function CTASection() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl border border-electric/20 bg-linear-to-br from-electric/10 via-charcoal-elevated to-cyan/5 px-5 py-12 text-center sm:px-8 sm:py-16 md:px-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,123,255,0.08),transparent_70%)]" />
        <div className="relative">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Ready to Build Something <span className="text-gradient-blue">Extraordinary</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-silver-muted sm:text-lg">
            Let&apos;s discuss how Sancora Technologies can accelerate your next project.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">
                Schedule a Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/services" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
