'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Is this legal advice?',
      answer:
        'No. Supportology provides document support and preparation assistance.',
    },
    {
      question: 'How much does it cost?',
      answer: [
        'The price depends on the type of paperwork, the number of documents involved and how quickly you need help.',
        'Before any work begins, we confirm the price, timescale and next step, so you know what will happen and what it will cost.',
      ],
    },
    {
      question: 'What if I have an urgent deadline?',
      answer: [
        'Tell us your deadline when you send your enquiry.',
        'The earlier we see the paperwork, the easier it is to help you organise what matters, prepare what is needed and avoid leaving everything until the last minute.',
      ],
    },
    {
      question: 'What happens after I submit my enquiry?',
      answer: [
        'You send a short message about the paperwork you are dealing with.',
        'We review what you send, confirm whether it is suitable for document support, and explain the next step, price and timescale by email.',
      ],
    },
    {
      question: 'Can you help with all types of paperwork?',
      answer: [
        'We help with many types of paperwork that need a clear response, including forms, applications, complaints, appeals, letters, written responses and evidence packs.',
        'If you are unsure whether we can help, send an enquiry and we will let you know if we can.',
      ],
    },
  ]

  // FAQ Schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: Array.isArray(faq.answer) ? faq.answer.join(' ') : faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section id="faq" className="section relative border-t border-[color:var(--border)]/30 overflow-hidden">
      <div className="container-custom max-w-2xl relative z-10">
        <div className="text-center mb-12 animate-slide-up">
          {/* Teal accent line */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-[color:var(--accent-primary)] rounded-full" />
          </div>
          <h2 className="text-[color:var(--foreground)]">Frequently Asked Questions</h2>
          <p className="text-lg text-[color:var(--accent-primary)] font-semibold mt-4">
            Common questions before sending an enquiry
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
                  <div className="text-[color:var(--muted-foreground)] leading-relaxed space-y-3">
                    {Array.isArray(faq.answer) ? (
                      faq.answer.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))
                    ) : (
                      <p>{faq.answer}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
