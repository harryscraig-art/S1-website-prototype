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
      <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
      <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
      <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
      <link rel="icon" href="/icon-512.png" type="image/png" sizes="512x512" />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  )
}

function JsonLdSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://supportology.stratamarketing.co.uk/#organization',
        name: 'Supportology',
        url: 'https://supportology.stratamarketing.co.uk',
        description: 'Meet your deadline. Know your next step. Document support and preparation assistance for paperwork, forms, complaints, appeals and evidence packs.',
        email: 'help@supportology.co.uk',
        telephone: null,
        areaServed: {
          '@type': 'Country',
          name: 'GB',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          email: 'help@supportology.co.uk',
          areaServed: 'GB',
          availableLanguage: 'en',
        },
        sameAs: [],
        image: {
          '@type': 'ImageObject',
          url: 'https://supportology.stratamarketing.co.uk/icon-512.png',
          width: '512',
          height: '512',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://supportology.stratamarketing.co.uk/#website',
        name: 'Supportology',
        url: 'https://supportology.stratamarketing.co.uk',
        description: 'Document Support & Paperwork Help',
        publisher: {
          '@id': 'https://supportology.stratamarketing.co.uk/#organization',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://supportology.stratamarketing.co.uk?s={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://supportology.stratamarketing.co.uk/#localbusiness',
        name: 'Supportology',
        image: 'https://supportology.stratamarketing.co.uk/icon-512.png',
        description: 'Document support and preparation assistance',
        areaServed: 'GB',
        serviceArea: {
          '@type': 'Country',
          name: 'GB',
        },
      },
      {
        '@type': 'Service',
        '@id': 'https://supportology.stratamarketing.co.uk/#service-1',
        name: 'Forms & Applications',
        description: 'Get the form finished, organised and ready to send. Help with forms, applications and supporting paperwork when you need to get something submitted properly.',
        provider: {
          '@id': 'https://supportology.stratamarketing.co.uk/#organization',
        },
        areaServed: 'GB',
      },
      {
        '@type': 'Service',
        '@id': 'https://supportology.stratamarketing.co.uk/#service-2',
        name: 'Letters & Evidence',
        description: 'Turn scattered papers into a clear position. We help sort letters, emails, documents and evidence so you know what you have, what matters, and what needs to be used.',
        provider: {
          '@id': 'https://supportology.stratamarketing.co.uk/#organization',
        },
        areaServed: 'GB',
      },
      {
        '@type': 'Service',
        '@id': 'https://supportology.stratamarketing.co.uk/#service-3',
        name: 'Appeals & Complaints',
        description: 'Challenge a decision with a clear response. Support preparing complaints, appeals and formal responses with organised evidence and clear explanations.',
        provider: {
          '@id': 'https://supportology.stratamarketing.co.uk/#organization',
        },
        areaServed: 'GB',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const metadata: Metadata = {
  title: 'Supportology | Document Support & Paperwork Help | UK',
  description: 'Meet your deadline. Know your next step. Help with forms, letters, complaints, appeals and evidence — so you know what you have, what you need, and what to do next.',
  keywords: [
    'document support',
    'paperwork help',
    'form assistance',
    'complaints',
    'appeals',
    'evidence organisation',
    'UK',
    'council paperwork',
    'benefits help',
    'housing support',
    'school admissions',
  ],
  authors: [
    {
      name: 'Supportology',
      url: 'https://supportology.co.uk',
    },
  ],
  creator: 'Supportology',
  publisher: 'Supportology',
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/icon-dark.svg',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
  openGraph: {
    title: 'Supportology | Document Support & Paperwork Help',
    description: 'Meet your deadline. Know your next step. Help with forms, letters, complaints, appeals and evidence — organised and prepared with confidence.',
    url: 'https://supportology.co.uk',
    type: 'website',
    locale: 'en_GB',
    countryName: 'United Kingdom',
    images: [
      {
        url: 'https://og-placeholder.vercel.app/api/og?title=Supportology&description=Document%20Support%20%26%20Paperwork%20Help',
        width: 1200,
        height: 630,
        alt: 'Supportology - Document Support & Paperwork Help',
        type: 'image/png',
        secureUrl: 'https://og-placeholder.vercel.app/api/og?title=Supportology&description=Document%20Support%20%26%20Paperwork%20Help',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Supportology | Document Support & Paperwork Help',
    description: 'Meet your deadline. Know your next step. Help with forms, letters, complaints, appeals and evidence.',
    image: 'https://og-placeholder.vercel.app/api/og?title=Supportology&description=Document%20Support%20%26%20Paperwork%20Help',
    creator: '@supportology',
  },
  alternates: {
    canonical: 'https://supportology.co.uk',
    languages: {
      'en-GB': 'https://supportology.co.uk',
    },
  },
  category: 'Services',
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
      {/* Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-[999] focus:bg-[color:var(--accent-primary)] focus:text-white focus:p-4 focus:rounded-b-lg"
      >
        Skip to main content
      </a>
      <head>
        <FaviconSwitcher />
        <JsonLdSchema />
        
        {/* Critical SEO meta tags */}
        <meta charSet="utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7" />
        <meta name="author" content="Supportology" />
        <meta name="copyright" content="Supportology" />
        
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="verification-code-here" />
        
        {/* Microsoft/Bing verification */}
        <meta name="msvalidate.01" content="verification-code-here" />
        
        {/* Apple Web App Support */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for analytics */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
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
