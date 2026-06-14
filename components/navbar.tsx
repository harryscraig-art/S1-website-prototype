'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

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
    <nav className="sticky top-0 z-50 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60 border-b border-[color:var(--border)]">
      <div className="container-custom flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[color:var(--accent-primary)] rounded-md flex items-center justify-center">
            <span className="text-white text-sm font-bold">S</span>
          </div>
          <span className="font-bold text-lg hidden sm:inline">Supportology</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-[color:var(--foreground)] hover:text-[color:var(--accent-primary)] transition-colors"
            >
              {link.label}
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
            className="btn-primary hidden sm:inline-flex text-sm"
          >
            Get Help
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-[color:var(--muted)] rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-[color:var(--border)] animate-slide-up">
          <div className="container-custom py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left px-4 py-2 hover:bg-[color:var(--muted)] rounded-md transition-colors"
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
              className="btn-primary w-full mt-2"
            >
              Get Help With My Paperwork
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
