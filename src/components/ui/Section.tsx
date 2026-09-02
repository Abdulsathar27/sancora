import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  dark?: boolean
}

export function Section({ children, className = '', id, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-14 sm:py-20 md:py-28 ${dark ? 'bg-charcoal-light' : ''} ${className}`}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeader({
  label,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`mb-10 sm:mb-14 ${centered ? 'text-center' : ''}`}
    >
      {label && (
        <span className="mb-3 inline-block text-xs font-medium uppercase tracking-widest text-electric sm:text-sm">
          {label}
        </span>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-base text-silver-muted sm:mt-4 sm:text-lg ${
            centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
