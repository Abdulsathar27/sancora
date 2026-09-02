import { useEffect, useRef, useState } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react'
import { useNav } from '../../context/NavContext'
import { Button } from '../ui/Button'
import { BrandLogo } from '../ui/BrandLogo'
import { services } from '../../data/services'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services', hasMenu: true },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/contact', label: 'Contact' },
] as const

export function Navbar() {
  const { isOpen, toggleMenu, closeMenu, scrolled, hidden, scrollProgress } = useNav()
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname
  const [servicesOpen, setServicesOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    closeMenu()
    setServicesOpen(false)
  }, [currentPath, closeMenu])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const openServices = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current)
    setServicesOpen(true)
  }

  const closeServices = () => {
    leaveTimer.current = setTimeout(() => setServicesOpen(false), 160)
  }

  const isActive = (to: string) =>
    currentPath === to || (to !== '/' && currentPath.startsWith(to))

  return (
    <motion.header
      initial={false}
      animate={{
        y: hidden ? -110 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 right-0 left-0 z-50 px-[max(0.75rem,env(safe-area-inset-left))] pr-[max(0.75rem,env(safe-area-inset-right))] pt-[max(0.75rem,env(safe-area-inset-top))]"
    >
      {/* Scroll progress */}
      <div className="pointer-events-none absolute top-0 right-0 left-0 h-[2px] overflow-hidden">
        <motion.div
          className="h-full origin-left bg-linear-to-r from-electric via-cyan to-electric"
          style={{ scaleX: scrollProgress }}
        />
      </div>

      <motion.nav
        animate={{
          paddingTop: scrolled ? 0 : 2,
          paddingBottom: scrolled ? 0 : 2,
        }}
        className={`relative mx-auto max-w-7xl overflow-visible rounded-2xl border transition-colors duration-300 ${
          scrolled
            ? 'border-electric/25 bg-charcoal-light/85 shadow-[0_12px_40px_rgba(0,0,0,0.55),0_0_0_1px_rgba(0,123,255,0.08)] backdrop-blur-2xl'
            : 'border-white/10 bg-charcoal-light/55 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl'
        }`}
      >
        {/* Soft electric edge glow when scrolled */}
        <div
          className={`pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background:
              'radial-gradient(ellipse at top, rgba(0,123,255,0.12), transparent 55%)',
          }}
        />

        <div
          className={`relative flex items-center justify-between gap-3 px-4 transition-all duration-300 sm:px-6 ${
            scrolled ? 'py-2.5 sm:py-3' : 'py-3 sm:py-3.5'
          }`}
        >
          <Link to="/" className="relative z-10 min-w-0 shrink" onClick={closeMenu}>
            <BrandLogo size={scrolled ? 'sm' : 'md'} />
          </Link>

          {/* Desktop links */}
          <div
            className="relative hidden items-center gap-1 rounded-full border border-white/5 bg-white/[0.03] p-1 md:flex"
            onMouseLeave={() => setHovered(null)}
          >
            {navLinks.map((link) => {
              const active = isActive(link.to)
              const showPill = hovered === link.to || (!hovered && active)

              if ('hasMenu' in link && link.hasMenu) {
                return (
                  <div
                    key={link.to}
                    className="relative"
                    onMouseEnter={() => {
                      setHovered(link.to)
                      openServices()
                    }}
                    onMouseLeave={closeServices}
                  >
                    <button
                      type="button"
                      className={`relative z-10 flex cursor-pointer items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors lg:px-4 ${
                        active || servicesOpen ? 'text-white' : 'text-silver hover:text-white'
                      }`}
                      aria-expanded={servicesOpen}
                      onClick={() => setServicesOpen((v) => !v)}
                    >
                      {showPill && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-electric/15 ring-1 ring-electric/30"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      Services
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          servicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-1/2 z-50 mt-3 w-[min(92vw,420px)] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-charcoal-elevated/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
                          onMouseEnter={openServices}
                          onMouseLeave={closeServices}
                        >
                          <div className="mb-1 flex items-center justify-between px-3 py-2">
                            <span className="text-xs font-semibold uppercase tracking-wider text-electric">
                              Our Services
                            </span>
                            <Link
                              to="/services"
                              className="inline-flex items-center gap-1 text-xs text-silver-muted transition-colors hover:text-electric"
                              onClick={() => setServicesOpen(false)}
                            >
                              View all <ArrowUpRight className="h-3 w-3" />
                            </Link>
                          </div>
                          <div className="grid gap-1">
                            {services.map((service) => (
                              <Link
                                key={service.id}
                                to="/services/$serviceId"
                                params={{ serviceId: service.id }}
                                onClick={() => setServicesOpen(false)}
                                className="group flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-electric/10"
                              >
                                <span className="mt-0.5 rounded-lg bg-electric/10 p-2 text-electric transition-colors group-hover:bg-electric/20">
                                  <service.icon className="h-4 w-4" />
                                </span>
                                <span className="min-w-0">
                                  <span className="block text-sm font-medium text-white group-hover:text-electric">
                                    {service.title}
                                  </span>
                                  <span className="mt-0.5 block text-xs leading-relaxed text-silver-muted">
                                    {service.shortDescription}
                                  </span>
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onMouseEnter={() => setHovered(link.to)}
                  className={`relative z-10 rounded-full px-3.5 py-2 text-sm font-medium transition-colors lg:px-4 ${
                    active ? 'text-white' : 'text-silver hover:text-white'
                  }`}
                >
                  {showPill && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-electric/15 ring-1 ring-electric/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="relative z-10 flex shrink-0 items-center gap-2 sm:gap-3">
            <Link to="/contact" className="hidden md:block">
              <Button size="sm">Get in Touch</Button>
            </Link>

            <button
              onClick={toggleMenu}
              className="touch-target inline-flex cursor-pointer items-center justify-center rounded-lg p-2 text-silver transition-colors hover:bg-white/10 md:hidden"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-white/10 md:hidden"
            >
              <div className="flex max-h-[min(75vh,32rem)] flex-col gap-1 overflow-y-auto px-4 py-4 sm:px-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    {'hasMenu' in link && link.hasMenu ? (
                      <div className="space-y-1">
                        <Link
                          to="/services"
                          className={`block rounded-lg px-4 py-3.5 text-sm font-medium transition-colors ${
                            isActive('/services')
                              ? 'bg-electric/10 text-electric'
                              : 'text-silver hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          Services
                        </Link>
                        <div className="ml-2 space-y-1 border-l border-white/10 pl-3">
                          {services.map((service) => (
                            <Link
                              key={service.id}
                              to="/services/$serviceId"
                              params={{ serviceId: service.id }}
                              className="block rounded-lg px-3 py-2.5 text-sm text-silver-muted transition-colors hover:bg-white/5 hover:text-electric"
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={link.to}
                        className={`block rounded-lg px-4 py-3.5 text-sm font-medium transition-colors ${
                          isActive(link.to)
                            ? 'bg-electric/10 text-electric'
                            : 'text-silver hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <Link to="/contact" className="mt-2">
                  <Button className="w-full" size="sm">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  )
}
