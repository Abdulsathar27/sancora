import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { PageMeta } from '../components/layout/PageMeta'
import { Section } from '../components/ui/Section'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { useContactForm } from '../context/ContactFormContext'
import { services } from '../data/services'
import { COMPANY_EMAIL, COMPANY_LOCATION, COMPANY_NAME, COMPANY_PHONE } from '../data/brand'

const contactInfo = [
  { icon: MapPin, label: 'Office', value: COMPANY_LOCATION },
  { icon: Phone, label: 'Phone', value: COMPANY_PHONE },
  { icon: Mail, label: 'Email', value: COMPANY_EMAIL },
  { icon: Clock, label: 'Hours', value: 'Mon – Fri, 9:00 AM – 6:00 PM IST' },
]

export function ContactPage() {
  const { formData, status, updateField, submitForm } = useContactForm()

  return (
    <>
      <PageMeta
        title="Contact"
        description={`Get in touch with ${COMPANY_NAME}. Schedule a consultation for your next software or data analytics project.`}
      />

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-3 inline-block text-sm font-medium uppercase tracking-widest text-electric"
          >
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            Let&apos;s Start a Conversation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-silver-muted"
          >
            Tell us about your project and we&apos;ll get back to you within one business day.
          </motion.p>
        </div>
      </Section>

      <Section dark>
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Card hover={false}>
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <CheckCircle2 className="mx-auto h-12 w-12 text-electric" />
                  <h3 className="mt-4 text-xl font-semibold text-white">Message Sent!</h3>
                  <p className="mt-2 text-silver-muted">
                    Thank you for reaching out. Our team will respond within one business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={submitForm} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-silver">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        className="w-full rounded-lg border border-white/10 bg-charcoal px-4 py-2.5 text-white placeholder:text-silver-muted/50 focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-silver">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className="w-full rounded-lg border border-white/10 bg-charcoal px-4 py-2.5 text-white placeholder:text-silver-muted/50 focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-silver">
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => updateField('company', e.target.value)}
                        className="w-full rounded-lg border border-white/10 bg-charcoal px-4 py-2.5 text-white placeholder:text-silver-muted/50 focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-silver">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => updateField('service', e.target.value)}
                        className="w-full rounded-lg border border-white/10 bg-charcoal px-4 py-2.5 text-white focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-silver">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      className="w-full resize-none rounded-lg border border-white/10 bg-charcoal px-4 py-2.5 text-white placeholder:text-silver-muted/50 focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-sm text-red-400">
                      <AlertCircle className="h-4 w-4" />
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <Button type="submit" size="lg" disabled={status === 'loading'} className="w-full sm:w-auto">
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </div>

          <div className="space-y-4 lg:col-span-2">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card hover={false} className="flex items-start gap-4">
                  <div className="rounded-lg bg-electric/10 p-2.5">
                    <info.icon className="h-5 w-5 text-electric" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-silver-muted">
                      {info.label}
                    </p>
                    <p className="mt-1 text-sm text-silver">{info.value}</p>
                  </div>
                </Card>
              </motion.div>
            ))}

            <Card hover={false} className="mt-4 overflow-hidden p-0">
              <div className="flex h-48 items-center justify-center bg-charcoal-elevated">
                <div className="text-center">
                  <MapPin className="mx-auto h-8 w-8 text-electric/50" />
                  <p className="mt-2 text-sm text-silver-muted">Bangalore, India</p>
                  <p className="text-xs text-silver-muted/60">Map integration placeholder</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}
