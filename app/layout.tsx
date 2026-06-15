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

export const metadata: Metadata = {
  title: 'Supportology | Document Support & Paperwork Help',
  description: 'Overwhelmed by paperwork? Supportology helps you organise forms, correspondence, complaints, appeals and evidence into clear, manageable action plans.',
  generator: 'v0.app',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Supportology | Document Support & Paperwork Help',
    description: 'Overwhelmed by paperwork? Supportology helps you organise forms, correspondence, complaints, appeals and evidence into clear, manageable action plans.',
    url: 'https://supportology.co.uk',
    type: 'website',
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
