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
        'We&apos;ll review your enquiry and get back to you within 24 hours to discuss your paperwork, answer questions, and explain our next steps. No obligation.',
    },
    {
      question: 'Can you help with all types of paperwork?',
      answer:
        'We help with a wide range of situations including forms, correspondence, appeals, complaints, and evidence packs. Contact us to discuss your specific needs.',
    },
  ]

  return (
    <section id="faq" className="section bg-[color:var(--card)]">
      <div className="container-custom max-w-2xl">
        <div className="text-center mb-16">
          <h2>Frequently Asked Questions</h2>
          <p className="text-xl text-[color:var(--muted-foreground)] mt-4">
            Common questions about our support
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[color:var(--border)] rounded-lg overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 hover:bg-[color:var(--muted)] transition-colors"
              >
                <span className="font-semibold text-left text-[color:var(--foreground)]">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-[color:var(--accent-primary)] transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-[color:var(--border)] bg-[color:var(--background)]">
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
