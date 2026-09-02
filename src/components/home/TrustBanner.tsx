import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

export function TrustBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-y border-electric/20 bg-linear-to-r from-electric/5 via-charcoal-light to-cyan/5"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-6 text-center sm:flex-row sm:justify-center sm:gap-6 sm:px-6 sm:py-8 sm:text-left lg:px-8">
        <Award className="h-7 w-7 shrink-0 text-electric sm:h-8 sm:w-8" />
        <p className="text-base font-medium text-white sm:text-lg md:text-xl">
          Trusted by <span className="text-gradient-blue">45+ enterprises</span> across fintech,
          healthcare, logistics &amp; retail
        </p>
      </div>
    </motion.div>
  )
}
