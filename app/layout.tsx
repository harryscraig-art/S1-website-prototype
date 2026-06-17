import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { AnimatedBackground } from '@/components/animated-background'
import './globals.css'

const geistSans = Geist({ variable: '--font-sans', subsets: ['latin'] })

function FaviconSwitcher() {
  return (
    <>
      <link rel="icon" href="/icon.svg" type="image/svg+xml" media="(prefers-color-scheme: light)" />
      <link rel="icon" href="/icon-dark.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)" />
    </>
  )
}

function JsonLdSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Supportology',
    url: 'https://supportology.co.uk',
    description: 'Document support and preparation assistance for paperwork, forms, complaints, appeals and evidence packs.',
    email: 'help@supportology.co.uk',
    areaServed: 'GB',
    sameAs: [],
    offers: {
      '@type': 'Service',
      name: 'Document Support & Preparation',
      description: 'Help organising paperwork, preparing clear documents and understanding next steps in complicated processes',
      areaServed: 'GB',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const metadata: Metadata = {
  title: 'Supportology | Document Support & Paperwork Help',
  description: 'Overwhelmed by paperwork? Supportology helps you organise forms, correspondence, complaints, appeals and evidence into clear, prepared documents.',
  keywords: ['document support', 'paperwork help', 'form assistance', 'complaints', 'appeals', 'evidence organisation', 'UK'],
  author: 'Supportology',
  creator: 'Supportology',
  generator: 'v0.app',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Supportology | Document Support & Paperwork Help',
    description: 'Overwhelmed by paperwork? Supportology helps you organise forms, correspondence, complaints, appeals and evidence into clear, prepared documents.',
    url: 'https://supportology.co.uk',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: 'https://og-placeholder.vercel.app/api/og?title=Supportology&description=Document%20Support%20%26%20Paperwork%20Help',
        width: 1200,
        height: 630,
        alt: 'Supportology - Document Support & Paperwork Help',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Supportology | Document Support & Paperwork Help',
    description: 'Overwhelmed by paperwork? Supportology helps you organise forms, correspondence, complaints, appeals and evidence into clear, prepared documents.',
    image: 'https://og-placeholder.vercel.app/api/og?title=Supportology&description=Document%20Support%20%26%20Paperwork%20Help',
  },
  alternates: {
    canonical: 'https://supportology.co.uk',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafb' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1419' },
  ],
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable}`} suppressHydrationWarning>
      <head>
        <FaviconSwitcher />
        <JsonLdSchema />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <AnimatedBackground />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
