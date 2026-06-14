'use client'

import { HelpCircle, Layers, Mail } from 'lucide-react'
import { HelpPanel } from './help-panel'

export function HowItWorks() {
  const openModal = () => {
    const modal = document.getElementById('enquiry-modal') as HTMLDialogElement
    modal?.showModal()
  }

  const steps = [
    {
      number: '1',
      title: 'Tell us what\'s confusing you',
      description: 'Send a short message about the paperwork, deadline or problem you are dealing with.',
      icon: HelpCircle,
    },
    {
      number: '2',
      title: 'We organise the issue',
      description: 'We review the information, identify the key documents and help make sense of what needs doing.',
      icon: Layers,
    },
    {
      number: '3',
      title: 'You get clear next steps',
      description: 'We\'ll discuss the next actions, priorities and paperwork needed to move forward. Ready to talk it through?',
      icon: Mail,
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
            Simple. Clear. Straightforward.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 animate-stagger">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <button
                key={index}
                onClick={openModal}
                className="group relative text-left bg-transparent border-none p-0 cursor-pointer"
                aria-label={`Step ${step.number}: ${step.title}`}
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

                  {/* Icon - Teal */}
                  <div className="mt-6">
                    <IconComponent size={24} className="text-[color:var(--accent-primary)] group-hover:scale-125 transition-transform duration-300" />
                  </div>

                  {/* Bottom teal accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-[color:var(--accent-primary)] group-hover:w-full transition-all duration-500 rounded-b-lg" />
                </div>
              </button>
            )
          })}
        </div>

        {/* Help Panel */}
        <HelpPanel
          closedLabel="What happens after I send a message?"
          openCopy="You send a short enquiry, we look at the type of paperwork involved, and we explain whether it is suitable for document support. If it is, the next step is agreed by email."
        />
      </div>
    </section>
  )
}
