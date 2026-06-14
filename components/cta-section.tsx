'use client'

import { ClipboardCheck } from 'lucide-react'

export function CTASection() {
  return (
    <section className="section relative overflow-hidden bg-[color:var(--card)] border-t border-[color:var(--border)]/30">
      {/* Decorative teal elements - increased opacity */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[color:var(--accent-primary)]/12 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-20 w-80 h-80 bg-[color:var(--accent-primary)]/8 rounded-full blur-3xl -z-10" />

      <div className="container-custom max-w-3xl text-center animate-slide-up">
        {/* Teal accent line */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-1 bg-[color:var(--accent-primary)] rounded-full" />
        </div>

        <h2 className="mb-6 text-[color:var(--foreground)]">Ready to get organised?</h2>

        {/* Decorative line accent */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-8 h-1 bg-[color:var(--accent-primary)] rounded-full" />
          <div className="w-8 h-1 bg-[color:var(--accent-primary)]/40 rounded-full" />
        </div>

        <p className="text-lg md:text-xl text-[color:var(--accent-primary)] font-semibold mb-3">
          Document support that actually helps.
        </p>

        <p className="text-base md:text-lg text-[color:var(--muted-foreground)] mb-10 leading-relaxed">
          Tell us about your paperwork challenge, and we&apos;ll help you create a clear action plan.
        </p>

        <button
          onClick={() => {
            const modal = document.getElementById('enquiry-modal')
            if (modal) {
              ;(modal as HTMLDialogElement).showModal()
            }
          }}
          className="inline-flex items-center justify-center px-8 py-4 bg-[color:var(--accent-primary)] text-white hover:bg-[color:var(--accent-primary)]/90 active:bg-[color:var(--accent-primary)]/80 rounded-lg font-medium transition-all duration-300 text-lg gap-2 hover:shadow-lg hover:scale-105 animate-scale-in"
          style={{ animationDelay: '0.2s' }}
        >
          Get Help With My Paperwork
        </button>

        {/* Updated enquiry text with calm icon */}
        <div className="text-sm text-[color:var(--muted-foreground)] mt-10 bg-[color:var(--accent-light)]/30 dark:bg-[color:var(--accent-primary)]/10 p-4 rounded-lg border-l-4 border-[color:var(--accent-primary)]">
          <div className="flex items-center justify-center gap-3 mb-2">
            <ClipboardCheck size={18} className="text-[color:var(--accent-primary)] flex-shrink-0" />
            <span className="font-medium">Not sure where to start?</span>
          </div>
          <p>Send a short message and we&apos;ll take it from there.</p>
        </div>
      </div>
    </section>
  )
}
