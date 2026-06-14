'use client'

import { LogoPlaceholder } from './logo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { label: 'Home', href: '#' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Services', href: '#services' },
    { label: 'FAQ', href: '#faq' },
  ]

  const legal = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Complaints Procedure', href: '#' },
  ]

  return (
    <footer className="bg-[color:var(--card)] border-t-2 border-[color:var(--accent-primary)] py-12 md:py-16 relative overflow-hidden">
      {/* Decorative teal element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[color:var(--accent-primary)]/5 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="animate-slide-in-left">
            <div className="mb-4">
              <LogoPlaceholder />
            </div>
            <p className="text-sm text-[color:var(--muted-foreground)] leading-relaxed">
              Turning paperwork problems into clear next steps.
            </p>
          </div>

          {/* Navigation */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-semibold mb-4 text-[color:var(--accent-primary)]">Navigation</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[color:var(--muted-foreground)] hover:text-[color:var(--accent-primary)] hover:pl-2 transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-semibold mb-4 text-[color:var(--accent-primary)]">Legal</h4>
            <ul className="space-y-3">
              {legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[color:var(--muted-foreground)] hover:text-[color:var(--accent-primary)] hover:pl-2 transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-semibold mb-4 text-[color:var(--accent-primary)]">Contact</h4>
            <a href="mailto:help@supportology.co.uk" className="text-sm text-[color:var(--accent-primary)] hover:text-[color:var(--accent-primary)]/80 font-medium transition-colors">
              help@supportology.co.uk
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-[color:var(--accent-primary)]/30 pt-8">
          {/* Disclaimer */}
          <p className="text-xs text-[color:var(--muted-foreground)] mb-6 leading-relaxed bg-[color:var(--accent-primary)]/5 p-4 rounded-lg border-l-4 border-[color:var(--accent-primary)] animate-fade-in">
            <span className="font-semibold text-[color:var(--accent-primary)]">Important:</span> Supportology provides document support and preparation assistance. We do not provide regulated legal advice.
          </p>

          {/* Copyright & Bottom Links */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-[color:var(--muted-foreground)]">
              © {currentYear} Supportology. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              {legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-[color:var(--muted-foreground)] hover:text-[color:var(--accent-primary)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
