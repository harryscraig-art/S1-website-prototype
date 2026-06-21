'use client'

import { MessageCircle, Layers, Compass } from 'lucide-react'
import { HelpPanel } from './help-panel'

export function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Tell us what you need help with',
      description: 'Send a short message about your paperwork, deadline or the problem you are trying to deal with.',
      icon: MessageCircle,
    },
    {
      number: '2',
      title: 'We make sense of it',
      description: 'We review what you send, organise the key information and identify what needs to be prepared.',
      icon: Layers,
    },
    {
      number: '3',
      title: 'You receive clear paperwork and next steps',
      description: 'You receive the prepared document, summary, priorities and next steps needed to move forward.',
      icon: Compass,
    },
  ]

  return (
    <section id="how-it-works" className="section relative border-t border-[color:var(--border)]/30 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12 animate-slide-up">
          {/* Teal accent line */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-[color:var(--accent-primary)] rounded-full" />
          </div>
          <h2 className="text-[color:var(--foreground)]">How It Works</h2>
          <p className="text-lg text-[color:var(--accent-primary)] font-semibold mt-4">
            Get your paperwork moving in three simple steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 animate-stagger">
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

                {/* Icon - Message, Layers, Compass */}
                <div className="mt-6">
                  {step.icon && <step.icon size={24} className="text-[color:var(--accent-primary)] group-hover:scale-125 transition-transform duration-300" />}
                </div>

                {/* Bottom teal accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[color:var(--accent-primary)] group-hover:w-full transition-all duration-500 rounded-b-lg" />
              </div>
            </div>
          ))}
        </div>

        {/* Help Panel */}
        <HelpPanel
          closedLabel="What happens after I send a message?"
          openCopy="You send a short enquiry, we review the type of paperwork involved and confirm whether it is suitable for document support. If it is, we agree the next step, price and timescale by email."
        />
      </div>
    </section>
  )
}
