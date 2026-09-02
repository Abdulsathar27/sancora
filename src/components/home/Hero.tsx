import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight, Code2 } from 'lucide-react'
import { Button } from '../ui/Button'
import { StatCounter } from '../ui/StatCounter'
import { companyStats } from '../../data/team'
import { COMPANY_NAME } from '../../data/brand'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,123,255,0.12),transparent_58%)]" />
      <div className="absolute top-16 right-[-5%] hidden h-[28rem] w-[28rem] rounded-full bg-electric/10 blur-3xl sm:block" />
      <div className="absolute bottom-10 left-[-5%] h-48 w-48 rounded-full bg-cyan/8 blur-3xl sm:h-72 sm:w-72" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-charcoal to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 text-center sm:text-left lg:order-1"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-3 py-1.5 text-xs text-electric sm:mb-6 sm:px-4 sm:text-sm">
              <Code2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              5 Years of Excellence
            </div>

            <h1 className="text-[1.85rem] font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-gradient">Engineering Trust.</span>
              <br />
              <span className="text-white">Delivering Impact.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-silver-muted sm:mx-0 sm:mt-6 sm:text-lg">
              {COMPANY_NAME} — 5 years of trusted software &amp; data analytics expertise. We
              build enterprise-grade solutions that transform businesses.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/case-studies" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative order-1 flex justify-center lg:order-2"
          >
            <div className="absolute top-1/2 left-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/20 blur-3xl" />
            <img
              src="/logo.png"
              alt={COMPANY_NAME}
              className="brand-logo relative w-full max-w-[240px] select-none sm:max-w-sm md:max-w-md"
            />
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/5 pt-10 sm:mt-16 sm:gap-8 sm:pt-12 md:mt-20 md:grid-cols-4">
          <StatCounter end={companyStats.years} suffix="+" label="Years of Excellence" />
          <StatCounter end={companyStats.projects} suffix="+" label="Projects Delivered" />
          <StatCounter end={companyStats.clients} suffix="+" label="Clients Served" />
          <StatCounter end={companyStats.teamSize} suffix="+" label="Team Members" />
        </div>
      </div>
    </section>
  )
}
