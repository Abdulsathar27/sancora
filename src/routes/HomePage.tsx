import { PageMeta } from '../components/layout/PageMeta'
import { Hero } from '../components/home/Hero'
import { TrustBanner } from '../components/home/TrustBanner'
import { ServicesPreview } from '../components/home/ServicesPreview'
import { WhyChooseUs } from '../components/home/WhyChooseUs'
import { ClientSection } from '../components/home/ClientSection'
import { CTASection } from '../components/home/CTASection'

export function HomePage() {
  return (
    <>
      <PageMeta
        title="Home"
        description="Sancora Technologies — 5 years of trusted software development and data analytics expertise."
      />
      <Hero />
      <TrustBanner />
      <ServicesPreview />
      <WhyChooseUs />
      <ClientSection />
      <CTASection />
    </>
  )
}
