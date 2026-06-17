import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { EnquiryModal } from '@/components/enquiry-modal'

export const metadata = {
  title: 'Terms & Conditions | Supportology',
  description: 'Terms & Conditions for Supportology document support and preparation assistance.',
}

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen flex flex-col bg-[color:var(--background)]">
      <Navbar />

      <main className="flex-1 w-full">
        {/* Terms Content Section */}
        <section className="section relative py-16 md:py-24">
          <div className="container-custom max-w-3xl">
            <div className="animate-fade-in">
              {/* Header */}
              <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[color:var(--foreground)]">
                Terms & Conditions
              </h1>
              <p className="text-sm text-[color:var(--muted-foreground)] mb-8">
                Last updated: June 2026
              </p>

              {/* Content */}
              <div className="prose prose-invert max-w-none text-[color:var(--foreground)] space-y-6">
                <p className="text-base leading-relaxed">
                  These Terms & Conditions explain how Supportology provides document support and preparation assistance.
                </p>

                <p className="text-base leading-relaxed">
                  By using this website, sending an enquiry or agreeing to paid support, you agree to these terms.
                </p>

                {/* Section 1 */}
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-[color:var(--foreground)]">1. About Supportology</h2>
                  <p className="text-base leading-relaxed">
                    Supportology helps people organise paperwork, prepare clear documents and understand the next steps in complicated processes.
                  </p>
                  <p className="text-base leading-relaxed">
                    We can help with forms, letters, complaints, appeals, written responses, evidence packs and related paperwork.
                  </p>
                  <p className="text-base leading-relaxed">
                    Supportology provides document support and preparation assistance only. We do not provide regulated legal advice, legal representation or reserved legal services.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-[color:var(--foreground)]">2. Enquiries</h2>
                  <p className="text-base leading-relaxed">
                    You can send an enquiry through our website or by email.
                  </p>
                  <p className="text-base leading-relaxed">
                    We will review the information provided and confirm whether the matter is suitable for document support.
                  </p>
                  <p className="text-base leading-relaxed">
                    We may decline work if it is outside our service, unsuitable, too urgent, too complex or requires advice or representation that we do not provide.
                  </p>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-[color:var(--foreground)]">3. Prices and Payment</h2>
                  <p className="text-base leading-relaxed">
                    We will confirm the price, scope of work and timescale before any paid work begins.
                  </p>
                  <p className="text-base leading-relaxed">
                    Payment must be made before work starts.
                  </p>
                  <p className="text-base leading-relaxed">
                    Any extra work requested after the original scope has been agreed will require an additional fee.
                  </p>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-[color:var(--foreground)]">4. Your Responsibility</h2>
                  <p className="text-base leading-relaxed">
                    You are responsible for making sure the information you provide is accurate, complete and up to date.
                  </p>
                  <p className="text-base leading-relaxed">
                    You are responsible for checking any document before using, signing or submitting it.
                  </p>
                  <p className="text-base leading-relaxed">
                    You remain responsible for any decision to send, rely on or submit any document.
                  </p>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-[color:var(--foreground)]">5. Documents and Deadlines</h2>
                  <p className="text-base leading-relaxed">
                    You must tell us about any deadline when you make your enquiry.
                  </p>
                  <p className="text-base leading-relaxed">
                    We will use reasonable care when reviewing paperwork and preparing agreed documents.
                  </p>
                  <p className="text-base leading-relaxed">
                    We are not responsible for missed deadlines where we were not told about them clearly, where documents were provided late, or where instructions were delayed.
                  </p>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-[color:var(--foreground)]">6. Cancellations and Refunds</h2>
                  <p className="text-base leading-relaxed">
                    If you cancel before work has started, we may provide a refund.
                  </p>
                  <p className="text-base leading-relaxed">
                    If work has already started or been completed, fees may not be refundable.
                  </p>
                  <p className="text-base leading-relaxed">
                    Where appropriate, we may offer a partial refund based on the work already carried out.
                  </p>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-[color:var(--foreground)]">7. Confidentiality</h2>
                  <p className="text-base leading-relaxed">
                    We treat your information confidentially and use it only to review your enquiry or provide the agreed support.
                  </p>
                  <p className="text-base leading-relaxed">
                    We do not share your information with third parties unless you ask us to, it is necessary to provide the service, or we are required to do so by law.
                  </p>
                </div>

                {/* Section 8 */}
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-[color:var(--foreground)]">8. No Guaranteed Outcome</h2>
                  <p className="text-base leading-relaxed">
                    Supportology does not guarantee any particular outcome from a complaint, appeal, application, court process, council process, benefits process or third-party decision.
                  </p>
                  <p className="text-base leading-relaxed">
                    Our role is to help organise and prepare paperwork clearly.
                  </p>
                </div>

                {/* Section 9 */}
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-[color:var(--foreground)]">9. Complaints</h2>
                  <p className="text-base leading-relaxed">
                    If you are unhappy with the service, please contact:
                  </p>
                  <p className="text-base leading-relaxed font-medium">
                    <a href="mailto:help@supportology.co.uk" className="text-[color:var(--accent-primary)] hover:underline">
                      help@supportology.co.uk
                    </a>
                  </p>
                  <p className="text-base leading-relaxed">
                    We will review your concern and respond as soon as reasonably possible.
                  </p>
                </div>

                {/* Section 10 */}
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-[color:var(--foreground)]">10. Changes to These Terms</h2>
                  <p className="text-base leading-relaxed">
                    We may update these Terms & Conditions from time to time.
                  </p>
                  <p className="text-base leading-relaxed">
                    The latest version will be shown on this website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <EnquiryModal />
      <Footer />
    </div>
  )
}
