'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Is this legal advice?',
      answer:
        'No. Supportology provides document support and preparation assistance. We do not provide regulated legal advice. If you need specific legal guidance, you should speak to a qualified solicitor or seek legal aid.',
    },
    {
      question: 'How much does it cost?',
      answer:
        'Our fees vary depending on the complexity and volume of your paperwork. Contact us for a no-obligation quote based on your specific situation.',
    },
    {
      question: 'How is my information kept confidential?',
      answer:
        'Your privacy is important to us. All information shared is kept strictly confidential and secure. We follow data protection regulations and never share your details with third parties without your consent.',
    },
    {
      question: 'What if I have an urgent deadline?',
      answer:
        'Let us know your deadline when you contact us. We can often accommodate urgent timescales. Get in touch to discuss your specific situation.',
    },
    {
      question: 'What happens after I submit my enquiry?',
      answer:
        'We review what you send us and get back to you within 24 hours. We&apos;ll explain whether we can help with your paperwork and discuss next steps. There&apos;s no obligation at any point.',
    },
    {
      question: 'Can you help with all types of paperwork?',
      answer:
        'We help with a wide range of situations including forms, correspondence, appeals, complaints, and evidence packs. Contact us to discuss your specific needs.',
    },
  ]

  return (
    <section id="faq" className="section relative border-t border-[color:var(--border)]/30 overflow-hidden" style={{ background: 'linear-gradient(to bottom, var(--background), var(--card))' }}>
      {/* Decorative teal elements */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[color:var(--accent-primary)]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[color:var(--accent-primary)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom max-w-2xl relative z-10">
        <div className="text-center mb-12 animate-slide-up">
          {/* Teal accent line */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-[color:var(--accent-primary)] rounded-full" />
          </div>
          <h2 className="text-[color:var(--foreground)]">Frequently Asked Questions</h2>
          <p className="text-lg text-[color:var(--accent-primary)] font-semibold mt-4">
            Common questions about our support
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 animate-stagger">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group border-2 border-[color:var(--border)] hover:border-[color:var(--accent-primary)] rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 hover:bg-[color:var(--accent-light)] dark:hover:bg-[color:var(--accent-primary)]/10 transition-colors"
              >
                <span className="font-semibold text-left text-[color:var(--foreground)]">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-[color:var(--accent-primary)] transition-transform duration-300 group-hover:scale-110 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 border-t-2 border-[color:var(--accent-primary)] bg-[color:var(--accent-light)]/30 dark:bg-[color:var(--accent-primary)]/10 animate-slide-up">
                  <p className="text-[color:var(--muted-foreground)] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
