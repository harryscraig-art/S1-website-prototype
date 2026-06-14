'use client'

import { CheckCircle2 } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Tell Us About Your Paperwork',
      description: 'Share what you\'re dealing with—forms, letters, appeals, or evidence. No jargon needed.',
    },
    {
      number: '2',
      title: 'We Assess & Organise',
      description: 'We review everything, understand the key issues, and create a clear picture of what needs to happen.',
    },
    {
      number: '3',
      title: 'Get Your Action Plan',
      description: 'Receive an organised summary with clear next steps, timelines, and everything you need to move forward.',
    },
  ]

  return (
    <section id="how-it-works" className="section bg-[color:var(--background)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2>How It Works</h2>
          <p className="text-xl text-[color:var(--muted-foreground)] mt-4">
            Simple. Clear. Straightforward.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                {/* Step Number Circle */}
                <div className="w-12 h-12 bg-[color:var(--accent-primary)] text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>

                {/* Step Description */}
                <p className="text-[color:var(--muted-foreground)] leading-relaxed flex-1">
                  {step.description}
                </p>

                {/* Checkmark Icon */}
                <div className="mt-6">
                  <CheckCircle2 size={24} className="text-[color:var(--accent-primary)]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
