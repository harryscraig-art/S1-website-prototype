import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { Services } from '@/components/services'
import { HowWeHaveHelped } from '@/components/how-we-have-helped'
import { FAQ } from '@/components/faq'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { EnquiryModal } from '@/components/enquiry-modal'

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Hero />
        <HowItWorks />
        <Services />
        <HowWeHaveHelped />
        <FAQ />
        <CTASection />
        <Footer />
      </main>
      <EnquiryModal />
    </>
  )
}

