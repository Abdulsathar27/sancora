import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatCounterProps {
  end: number
  suffix?: string
  label: string
  duration?: number
}

export function StatCounter({ end, suffix = '', label, duration = 2 }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const increment = end / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [isInView, end, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-3xl font-bold text-gradient-blue sm:text-4xl md:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-[0.65rem] uppercase tracking-wider text-silver-muted sm:text-sm">
        {label}
      </div>
    </motion.div>
  )
}
