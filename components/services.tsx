'use client'

import { FileText, Mail, MessageSquareWarning } from 'lucide-react'
import { HelpPanel } from './help-panel'

export function Services() {
  const services = [
    {
      icon: FileText,
      title: 'Forms & Applications',
      description: 'Help understanding, completing, and organising forms, applications, and paperwork for any purpose.',
    },
    {
      icon: Mail,
      title: 'Correspondence & Evidence',
      description: 'Sort through letters, emails, documents and evidence to build a clear, organised, compelling case.',
    },
    {
      icon: MessageSquareWarning,
      title: 'Appeals & Complaints',
      description: 'Support preparing appeals, complaints, and formal responses with organised evidence and clear explanations.',
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
            Document support across a wide range of situations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 animate-stagger">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative bg-[color:var(--card)] rounded-lg p-8 border-2 border-[color:var(--border)] hover:border-[color:var(--accent-primary)] hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Teal accent background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-[color:var(--accent-light)] dark:bg-[color:var(--accent-primary)]/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    <Icon size={28} className="text-[color:var(--accent-primary)]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-[color:var(--foreground)]">{service.title}</h3>

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
          openCopy="We can help with forms, complaints, applications, appeal papers, evidence packs, council correspondence, benefits paperwork, school admissions paperwork and family court preparation documents."
        />

        {/* Additional Services Text */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-[color:var(--muted-foreground)] text-lg">
            And many other forms, complaints, applications, appeals and evidence packs.
          </p>
        </div>
      </div>
    </section>
  )
}
