'use client'

export function CTASection() {
  return (
    <section className="section bg-gradient-to-b from-[color:var(--background)] to-[color:var(--card)]">
      <div className="container-custom max-w-2xl text-center">
        <h2 className="mb-6">Ready to get organised?</h2>

        <p className="text-lg md:text-xl text-[color:var(--muted-foreground)] mb-8 leading-relaxed">
          Tell us about your paperwork challenge, and we&apos;ll help you create a clear action plan.
        </p>

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

        <p className="text-sm text-[color:var(--muted-foreground)] mt-8">
          Quick enquiry form. No obligation. We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    </section>
  )
}
