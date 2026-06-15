'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { LogoPlaceholder } from './logo'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#services', label: 'Services' },
    { href: '#outcomes', label: 'How We Have Helped' },
    { href: '#faq', label: 'FAQ' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60 border-b border-[color:var(--accent-primary)]/20 shadow-sm">
      <div className="container-custom flex items-center justify-between h-16">
        {/* Logo */}
        <div className="animate-slide-in-left">
          <LogoPlaceholder />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-[color:var(--foreground)] hover:text-[color:var(--accent-primary)] transition-colors relative group"
              style={{ animation: `slideUp 0.6s ease-out ${0.1 + idx * 0.1}s forwards`, opacity: 0 }}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[color:var(--accent-primary)] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Right Side: Theme Toggle + CTA */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => {
              const modal = document.getElementById('enquiry-modal')
              if (modal) {
                ;(modal as HTMLDialogElement).showModal()
              }
            }}
            className="inline-flex items-center justify-center px-4 py-2 bg-[color:var(--accent-primary)] text-white hover:bg-[color:var(--accent-primary)]/90 active:bg-[color:var(--accent-primary)]/80 rounded-lg font-medium transition-all duration-200 text-sm shadow-md hover:shadow-lg hover:scale-105"
          >
            Get Help
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-[color:var(--accent-primary)]/10 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} className="text-[color:var(--accent-primary)]" /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-[color:var(--accent-primary)]/20 animate-slide-up bg-[color:var(--card)]">
          <div className="container-custom py-4 flex flex-col gap-2 animate-stagger">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left px-4 py-3 hover:bg-[color:var(--accent-light)] dark:hover:bg-[color:var(--accent-primary)]/20 rounded-md transition-colors text-[color:var(--foreground)] font-medium"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                const modal = document.getElementById('enquiry-modal')
                if (modal) {
                  ;(modal as HTMLDialogElement).showModal()
                }
                setIsOpen(false)
              }}
              className="inline-flex items-center justify-center px-6 py-3 w-full bg-[color:var(--accent-primary)] text-white hover:bg-[color:var(--accent-primary)]/90 active:bg-[color:var(--accent-primary)]/80 rounded-lg font-medium transition-all mt-2"
            >
              Get Help With My Paperwork
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
