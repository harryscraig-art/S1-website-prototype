'use client'

import { ClipboardCheck } from 'lucide-react'

export function CTASection() {
  return (
    <section className="section relative overflow-hidden border-t border-[color:var(--border)]/30">
      <div className="container-custom max-w-3xl text-center animate-slide-up">
        {/* Teal accent line */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-1 bg-[color:var(--accent-primary)] rounded-full" />
        </div>

        <h2 className="mb-6 text-[color:var(--foreground)]">Ready to get your paperwork moving?</h2>

        {/* Decorative line accent */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-8 h-1 bg-[color:var(--accent-primary)] rounded-full" />
          <div className="w-8 h-1 bg-[color:var(--accent-primary)] rounded-full" />
        </div>

        <p className="text-base md:text-lg text-[color:var(--muted-foreground)] mb-10 leading-relaxed">
          Tell us about the paperwork you are dealing with, and we&apos;ll help you work out whether we can help.
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

        {/* Updated enquiry text with calm icon - clickable */}
        <button
          onClick={() => {
            const modal = document.getElementById('enquiry-modal')
            if (modal) {
              ;(modal as HTMLDialogElement).showModal()
            }
          }}
          type="button"
          className="w-full text-sm text-[color:var(--muted-foreground)] mt-10 bg-[color:var(--accent-light)]/30 dark:bg-[color:var(--accent-primary)]/10 p-4 rounded-lg border-l-4 border-[color:var(--accent-primary)] hover:bg-[color:var(--accent-light)]/50 dark:hover:bg-[color:var(--accent-primary)]/20 transition-all duration-200 text-left cursor-pointer group"
        >
          <div className="flex items-center justify-start gap-3 mb-2">
            <ClipboardCheck size={18} className="text-[color:var(--accent-primary)] flex-shrink-0 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-[color:var(--foreground)] group-hover:text-[color:var(--accent-primary)] transition-colors">Not sure where to start?</span>
          </div>
          <p>Send a short message about the paperwork you are dealing with, and we&apos;ll let you know whether we can help.</p>
        </button>
      </div>
    </section>
  )
}
