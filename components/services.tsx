'use client'

import { FileText, Mail, MessageSquareWarning } from 'lucide-react'
import { HelpPanel } from './help-panel'

export function Services() {
  const handleCardClick = (serviceTitle: string) => {
    ;(window as any).openEnquiryModal?.(serviceTitle)
  }

  const services = [
    {
      icon: FileText,
      title: 'Forms & Applications',
      tagline: 'Get the form finished, organised and ready to send.',
      description: 'Help with forms, applications and supporting paperwork when you need to get something submitted properly.',
    },
    {
      icon: Mail,
      title: 'Letters & Evidence',
      tagline: 'Turn scattered papers into a clear position.',
      description: 'We help sort letters, emails, documents and evidence so you know what you have, what matters, and what needs to be used.',
    },
    {
      icon: MessageSquareWarning,
      title: 'Appeals & Complaints',
      tagline: 'Challenge a decision with a clear response.',
      description: 'Support preparing complaints, appeals and formal responses with organised evidence and clear explanations.',
    },
  ]

  return (
    <section id="services" className="section relative border-t border-[color:var(--border)]/30 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12 animate-slide-up">
          {/* Teal accent line */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-[color:var(--accent-primary)] rounded-full" />
          </div>
          <h2 className="text-[color:var(--foreground)]">What We Help With</h2>
          <p className="text-lg text-[color:var(--accent-primary)] font-semibold mt-4">
            When paperwork needs dealing with, we help you move.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 animate-stagger">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                onClick={() => handleCardClick(service.title)}
                className="group relative bg-[color:var(--card)] rounded-lg p-8 border-2 border-[color:var(--border)] hover:border-[color:var(--accent-primary)] hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Teal accent background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-[color:var(--accent-light)] dark:bg-[color:var(--accent-primary)]/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    <Icon size={28} className="text-[color:var(--accent-primary)]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 text-[color:var(--foreground)]">{service.title}</h3>

                  {/* Tagline */}
                  <p className="text-[color:var(--accent-primary)] font-semibold mb-3 text-sm">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-[color:var(--muted-foreground)] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-[color:var(--accent-primary)] group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Help Panel */}
        <HelpPanel
          closedLabel="What paperwork can you help with?"
          openCopy={[
            "We help with paperwork that needs a clear response — including forms, applications, complaints, appeals, formal letters, written responses and evidence packs.",
            "This can include council, benefits, housing, school admissions and family court preparation paperwork.",
            "We help you organise what matters, prepare clearer documents, and understand what needs to happen next."
          ]}
        />

        {/* Additional Services Text */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-[color:var(--muted-foreground)] text-lg">
            Not sure if we can help? Send us a message and we&apos;ll let you know.
          </p>
        </div>
      </div>
    </section>
  )
}
