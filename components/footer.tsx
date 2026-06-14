'use client'

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
    <footer className="bg-[color:var(--card)] border-t border-[color:var(--border)] py-12 md:py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[color:var(--accent-primary)] rounded-md flex items-center justify-center">
                <span className="text-white text-sm font-bold">S</span>
              </div>
              <span className="font-bold text-lg">Supportology</span>
            </div>
            <p className="text-sm text-[color:var(--muted-foreground)]">
              Turning paperwork problems into clear next steps.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[color:var(--muted-foreground)] hover:text-[color:var(--accent-primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[color:var(--muted-foreground)] hover:text-[color:var(--accent-primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm text-[color:var(--muted-foreground)]">
              help@supportology.co.uk
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[color:var(--border)] pt-8">
          {/* Disclaimer */}
          <p className="text-xs text-[color:var(--muted-foreground)] mb-6 leading-relaxed">
            Supportology provides document support and preparation assistance. We do not provide regulated legal advice.
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
