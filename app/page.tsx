import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { Services } from '@/components/services'
import { HowWeHaveHelped } from '@/components/how-we-have-helped'
import { FAQ } from '@/components/faq'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { EnquiryModal } from '@/components/enquiry-modal'

export const metadata: Metadata = {
  title: 'Supportology | Document Support & Paperwork Help',
  description: 'Overwhelmed by paperwork? Supportology helps you organise forms, correspondence, complaints, appeals and evidence into clear, prepared documents.',
  keywords: ['document support', 'paperwork help', 'form assistance', 'complaint support', 'appeals help', 'evidence organisation'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://supportology.co.uk',
  },
}

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

