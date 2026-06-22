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
  title: 'Supportology | Document Support & Paperwork Help | UK',
  description: 'Meet your deadline. Know your next step. Help with forms, letters, complaints, appeals and evidence — so you know what you have, what you need, and what to do next.',
  keywords: [
    'document support',
    'paperwork help',
    'form assistance',
    'complaint support',
    'appeals help',
    'evidence organisation',
    'UK paperwork assistance',
    'document preparation',
    'forms and applications help',
    'letters and evidence support',
    'appeals and complaints assistance',
    'council paperwork help',
    'benefits support',
    'housing paperwork',
    'school admissions appeal',
    'family court preparation',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    'google-site-verification': 'verification-code-here',
    bingbot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Supportology | Document Support & Paperwork Help',
    description: 'Meet your deadline. Know your next step. Help with forms, letters, complaints, appeals and evidence.',
    url: 'https://supportology.co.uk',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: 'https://supportology.co.uk/icon-512.png',
        width: 512,
        height: 512,
        alt: 'Supportology - Document Support & Paperwork Help',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Supportology | Document Support & Paperwork Help',
    description: 'Meet your deadline. Know your next step.',
    image: 'https://supportology.co.uk/icon-512.png',
  },
  alternates: {
    canonical: 'https://supportology.co.uk',
  },
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="w-full">
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

