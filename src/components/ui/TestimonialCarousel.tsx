import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../../data/testimonials'

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <div className="relative mx-auto max-w-4xl">
      <Quote className="absolute -top-2 left-2 h-8 w-8 text-electric/20 sm:-top-4 sm:left-0 sm:h-10 sm:w-10" />

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.4 }}
          className="px-2 py-4 text-center sm:px-8"
        >
          <p className="text-base leading-relaxed text-silver sm:text-lg md:text-xl">
            &ldquo;{testimonials[current].quote}&rdquo;
          </p>
          <div className="mt-6">
            <p className="font-heading font-semibold text-white">{testimonials[current].author}</p>
            <p className="text-sm text-silver-muted">
              {testimonials[current].role}, {testimonials[current].company}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex items-center justify-center gap-3 sm:mt-8 sm:gap-4">
        <button
          onClick={prev}
          className="touch-target inline-flex cursor-pointer items-center justify-center rounded-full p-2 text-silver transition-colors hover:bg-white/10 hover:text-electric"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-electric' : 'w-2 bg-white/20'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="touch-target inline-flex cursor-pointer items-center justify-center rounded-full p-2 text-silver transition-colors hover:bg-white/10 hover:text-electric"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
