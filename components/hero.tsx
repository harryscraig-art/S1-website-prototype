'use client'

import { HelpPanel } from './help-panel'

export function Hero() {
  return (
    <section className="section relative min-h-screen flex items-center justify-center overflow-hidden bg-[color:var(--background)]">
      {/* Animated Background with Teal Depth - increased visibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[color:var(--accent-light)] via-[color:var(--background)] to-[color:var(--background)]" />
      
      {/* Decorative teal accent elements - increased and visible */}
      <div className="absolute top-20 right-20 w-56 h-56 bg-[color:var(--accent-primary)]/15 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 -left-10 w-72 h-72 bg-[color:var(--accent-primary)]/12 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center animate-slide-up">
          {/* Teal accent line above heading */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-[color:var(--accent-primary)] rounded-full" />
          </div>

          {/* Hero Headline */}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-[color:var(--foreground)]">
            Overwhelmed by paperwork?
          </h1>

          {/* Decorative line accent */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-1 bg-[color:var(--accent-primary)] rounded-full" />
            <div className="w-8 h-1 bg-[color:var(--accent-primary)]/40 rounded-full" />
          </div>

          {/* Hero Subheadline */}
          <p className="text-xl md:text-2xl text-[color:var(--accent-primary)] font-semibold mb-6">
            Turning paperwork problems into clear next steps.
          </p>

          {/* Hero Description */}
          <p className="text-base md:text-lg text-[color:var(--foreground)] mb-12 leading-relaxed max-w-xl mx-auto">
            Whether it&apos;s forms, correspondence, complaints, appeals or evidence—we help you organise it all into manageable action plans.
          </p>

          {/* Hero CTA Button */}
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

          {/* Help Panel */}
          <HelpPanel
            closedLabel="What kind of help can I get?"
            openCopy="Supportology helps you make sense of important paperwork, organise documents, prepare clear written responses and understand what needs doing next. We provide document support and preparation assistance, not regulated legal advice."
          />
        </div>
      </div>
    </section>
  )
}
