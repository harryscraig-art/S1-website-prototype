'use client'

export function Hero() {
  return (
    <section className="section min-h-screen flex items-center justify-center bg-gradient-to-b from-[color:var(--accent-light)] to-[color:var(--background)]">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {/* Hero Headline */}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Overwhelmed by paperwork?
          </h1>

          {/* Hero Subheadline */}
          <p className="text-xl md:text-2xl text-[color:var(--muted-foreground)] mb-8 leading-relaxed">
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
            className="btn-primary px-8 py-4 text-lg inline-flex items-center justify-center gap-2 hover:shadow-elevated transition-all"
          >
            Get Help With My Paperwork
          </button>

          {/* Hero Accent Card (Glass Effect) */}
          <div className="mt-16 glass rounded-xl p-8 md:p-12 max-w-md mx-auto">
            <p className="text-sm text-[color:var(--muted-foreground)] mb-2">Quick enquiry form available</p>
            <p className="text-lg font-semibold text-[color:var(--foreground)]">
              Tell us about your paperwork, we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
