import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Complaints Procedure | Supportology',
  description: 'Our complaints procedure and how to get in touch if you\'re unhappy with our document support service.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://supportology.co.uk/complaints-procedure',
  },
}

export default function ComplaintsProcedurePage() {
  return (
    <main className="w-full">
      <Navbar />

      <section className="section relative py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Page Header */}
            <div className="mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[color:var(--foreground)]">
                Complaints Procedure
              </h1>
              <p className="text-sm text-[color:var(--muted-foreground)]">
                Last updated: June 2026
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none space-y-8 animate-slide-up">
              {/* Intro */}
              <div>
                <p className="text-base leading-relaxed">
                  Supportology aims to provide its services with reasonable care and skill. If you are unhappy with our service, please tell us so we can investigate and try to resolve the issue.
                </p>
              </div>

              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold mb-3 text-[color:var(--foreground)]">1. Making a Complaint</h2>
                <p className="text-base leading-relaxed mb-4">
                  Email your complaint to:
                </p>
                <p className="text-base leading-relaxed mb-4">
                  <a href="mailto:help@supportology.co.uk" className="text-[color:var(--accent-primary)] hover:text-[color:var(--accent-primary)]/80 font-medium transition-colors">
                    help@supportology.co.uk
                  </a>
                </p>
                <p className="text-base leading-relaxed mb-3">
                  Please include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li className="text-base">your name and email address</li>
                  <li className="text-base">the service concerned</li>
                  <li className="text-base">a clear description of the problem</li>
                  <li className="text-base">any relevant dates or documents</li>
                  <li className="text-base">how you would like the matter resolved</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold mb-3 text-[color:var(--foreground)]">2. Acknowledgement</h2>
                <p className="text-base leading-relaxed">
                  We aim to acknowledge your complaint within three working days.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold mb-3 text-[color:var(--foreground)]">3. Investigation</h2>
                <p className="text-base leading-relaxed">
                  We will review your complaint fairly and may contact you for further information.
                </p>
                <p className="text-base leading-relaxed mt-3">
                  We aim to provide a written response within 14 days. If more time is needed, we will explain why and tell you when to expect our response.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-bold mb-3 text-[color:var(--foreground)]">4. Possible Outcomes</h2>
                <p className="text-base leading-relaxed mb-3">
                  Depending on the circumstances, we may:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2 mb-3">
                  <li className="text-base">explain what happened</li>
                  <li className="text-base">correct or repeat work</li>
                  <li className="text-base">provide missing work</li>
                  <li className="text-base">apologise</li>
                  <li className="text-base">offer a price reduction or refund where appropriate</li>
                  <li className="text-base">take steps to prevent the issue happening again</li>
                </ul>
                <p className="text-base leading-relaxed">
                  Any remedy will depend on the work agreed, the service provided and your legal rights.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-bold mb-3 text-[color:var(--foreground)]">5. Review</h2>
                <p className="text-base leading-relaxed">
                  If you remain unhappy, reply within 14 days explaining why and provide any additional information you want us to consider.
                </p>
                <p className="text-base leading-relaxed mt-3">
                  We will review the matter and send our final response.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-bold mb-3 text-[color:var(--foreground)]">6. External Resolution</h2>
                <p className="text-base leading-relaxed">
                  If the complaint remains unresolved, our final response will tell you about any alternative dispute resolution arrangement that applies and that Supportology is required to participate in.
                </p>
                <p className="text-base leading-relaxed mt-3">
                  You may also contact the Citizens Advice Consumer Service or pursue any other remedy available to you.
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-bold mb-3 text-[color:var(--foreground)]">7. Service Outcomes</h2>
                <p className="text-base leading-relaxed">
                  We can investigate complaints about the service provided by Supportology. We cannot change or guarantee decisions made by courts, councils, government departments, schools, benefits authorities or other third parties.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-bold mb-3 text-[color:var(--foreground)]">8. Your Rights</h2>
                <p className="text-base leading-relaxed">
                  Nothing in this procedure limits your statutory rights under UK consumer law.
                </p>
                <p className="text-base leading-relaxed mt-3">
                  This version reflects the Consumer Rights Act requirement to perform services with reasonable care and skill and the ADR notification rules effective from <strong>6 April 2026</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
