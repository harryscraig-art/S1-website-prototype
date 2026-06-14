'use client'

export function Hero() {
  return (
    <section className="section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Teal Depth */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[color:var(--accent-light)] via-[color:var(--background)] to-[color:var(--background)]" />
      
      {/* Decorative teal accent elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-[color:var(--accent-primary)]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-5 w-60 h-60 bg-[color:var(--accent-primary)]/5 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center animate-slide-up">
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

          {/* Hero Accent Card (Glass Effect) with Teal Border */}
          <div className="mt-16 glass rounded-xl p-8 md:p-12 max-w-md mx-auto border-2 border-[color:var(--accent-primary)]/30 hover:border-[color:var(--accent-primary)]/60 transition-all shadow-md animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="inline-flex items-center justify-center w-10 h-10 bg-[color:var(--accent-primary)]/20 rounded-lg mb-4">
              <svg className="w-5 h-5 text-[color:var(--accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-[color:var(--muted-foreground)] mb-2 font-medium">Quick enquiry form available</p>
            <p className="text-lg font-semibold text-[color:var(--foreground)]">
              Tell us about your paperwork, we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
