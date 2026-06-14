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
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-[color:var(--foreground)]">How It Works</h2>
          <p className="text-lg text-[color:var(--accent-primary)] font-semibold mt-4">
            Simple. Clear. Straightforward.
          </p>
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-2 h-2 bg-[color:var(--accent-primary)] rounded-full" />
            <div className="w-2 h-2 bg-[color:var(--accent-primary)]/40 rounded-full" />
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 animate-stagger">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Teal accent background on hover */}
              <div className="absolute inset-0 bg-[color:var(--accent-primary)]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex flex-col h-full p-6">
                {/* Step Number Circle - Teal */}
                <div className="w-12 h-12 bg-[color:var(--accent-primary)] text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold mb-3 text-[color:var(--foreground)]">{step.title}</h3>

                {/* Step Description */}
                <p className="text-[color:var(--muted-foreground)] leading-relaxed flex-1">
                  {step.description}
                </p>

                {/* Checkmark Icon - Teal */}
                <div className="mt-6">
                  <CheckCircle2 size={24} className="text-[color:var(--accent-primary)] group-hover:scale-125 transition-transform duration-300" />
                </div>

                {/* Bottom teal accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[color:var(--accent-primary)] group-hover:w-full transition-all duration-500 rounded-b-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
