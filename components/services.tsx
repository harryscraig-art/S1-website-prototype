'use client'

import { FileText, Mail, Scale } from 'lucide-react'

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
      icon: Scale,
      title: 'Appeals & Complaints',
      description: 'Support preparing appeals, complaints, and formal responses with organised evidence and clear explanations.',
    },
  ]

  return (
    <section id="services" className="section bg-[color:var(--card)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2>What We Help With</h2>
          <p className="text-xl text-[color:var(--muted-foreground)] mt-4">
            Document support across a wide range of situations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-[color:var(--background)] rounded-lg p-8 border border-[color:var(--border)] hover:border-[color:var(--accent-primary)] hover:shadow-elevated transition-all animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-[color:var(--accent-light)] dark:bg-[color:var(--accent-light)] rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-[color:var(--accent-primary)]" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-[color:var(--muted-foreground)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Additional Services Text */}
        <div className="text-center mt-12">
          <p className="text-[color:var(--muted-foreground)]">
            And many other forms, complaints, applications, appeals and evidence packs.
          </p>
        </div>
      </div>
    </section>
  )
}
