'use client'

export function HowWeHaveHelped() {
  const examples = [
    {
      title: 'Non-Molestation Order Paperwork',
      description: 'Feeling overwhelmed after being unable to obtain legal aid and needing help preparing paperwork for an urgent non-molestation order application.',
    },
    {
      title: 'Benefits Mandatory Reconsideration',
      description: 'Needing help understanding a benefits decision, organising medical evidence and preparing clear paperwork for a mandatory reconsideration.',
    },
    {
      title: 'School Admissions Appeal',
      description: 'Feeling confused by long emails, appeal papers, guidance documents and supporting evidence received from the council, and needing help organising everything into a clear and manageable bundle.',
    },
    {
      title: 'Council Tax Arrears Correspondence',
      description: 'Receiving multiple letters, notices and council correspondence relating to council tax arrears and needing help understanding the paperwork, organising documents and preparing a clear response.',
    },
  ]

  return (
    <section id="outcomes" className="section bg-[color:var(--background)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2>How We Have Helped</h2>
          <p className="text-xl text-[color:var(--muted-foreground)] mt-4">
            Real examples of the types of support we provide
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {examples.map((example, index) => (
            <div
              key={index}
              className="bg-[color:var(--card)] rounded-lg p-8 border border-[color:var(--border)] animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg font-bold text-[color:var(--accent-primary)] mb-3">
                {example.title}
              </h3>
              <p className="text-[color:var(--muted-foreground)] leading-relaxed">
                {example.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Services Text */}
        <div className="text-center">
          <p className="text-[color:var(--muted-foreground)] text-lg">
            And many other forms, complaints, applications, appeals and evidence packs.
          </p>
        </div>
      </div>
    </section>
  )
}
