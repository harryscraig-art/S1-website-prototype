'use client'

import { ShieldCheck, ClipboardList, GraduationCap, Mail } from 'lucide-react'

export function HowWeHaveHelped() {
  const handleCardClick = (caseTitle: string) => {
    ;(window as any).openEnquiryModal?.(caseTitle)
  }

  const examples = [
    {
      title: 'Non-Molestation Order Paperwork',
      description: 'Complicated and urgent paperwork where someone needed help organising information and preparing documents for a non-molestation order application.',
      icon: ShieldCheck,
    },
    {
      title: 'Benefits Mandatory Reconsideration',
      description: 'A benefits decision that did not appear to take all the evidence into account, with medical evidence to organise and clear paperwork prepared for a mandatory reconsideration.',
      icon: ClipboardList,
    },
    {
      title: 'School Admissions Appeal',
      description: 'A complicated school admissions appeal involving long council emails, appeal papers, guidance documents and supporting evidence that needed organising into a clear, manageable appeal bundle.',
      icon: GraduationCap,
    },
    {
      title: 'Council Tax Correspondence',
      description: 'Confusing council tax arrears letters, notices and correspondence where the paperwork needed to be understood, organised and turned into a clear written response.',
      icon: Mail,
    },
  ]

  return (
    <section id="outcomes" className="section relative border-t border-[color:var(--border)]/30 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 animate-slide-up">
          {/* Teal accent line */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-[color:var(--accent-primary)] rounded-full" />
          </div>
          <h2 className="text-[color:var(--foreground)]">How We Have Helped</h2>
          <p className="text-lg text-[color:var(--accent-primary)] font-semibold mt-4">
            Real examples of problems we have helped people organise, prepare and move forward.
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8 animate-stagger">
          {examples.map((example, index) => {
            const IconComponent = example.icon
            return (
            <div
              key={index}
              onClick={() => handleCardClick(example.title)}
              className="group relative bg-[color:var(--background)] rounded-lg p-8 border-2 border-[color:var(--border)] hover:border-[color:var(--accent-primary)] hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Teal accent background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Teal left border accent */}
              <div className="absolute left-0 top-0 w-1 h-0 bg-[color:var(--accent-primary)] group-hover:h-full transition-all duration-500" />

              <div className="relative z-10">
                {/* Icon + Title */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-[color:var(--accent-primary)]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[color:var(--accent-primary)]/40 transition-colors duration-300">
                    <IconComponent className="w-5 h-5 text-[color:var(--accent-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[color:var(--foreground)] group-hover:text-[color:var(--accent-primary)] transition-colors duration-300">
                    {example.title}
                  </h3>
                </div>

                <p className="text-[color:var(--muted-foreground)] leading-relaxed">
                  {example.description}
                </p>
              </div>
            </div>
            )
          })}
        </div>

        {/* Additional Services Text */}
        <div className="text-center animate-fade-in">
          <p className="text-[color:var(--muted-foreground)] text-lg">
            And many other forms, complaints, applications, appeals, written responses and evidence packs.
          </p>
        </div>
      </div>
    </section>
  )
}
