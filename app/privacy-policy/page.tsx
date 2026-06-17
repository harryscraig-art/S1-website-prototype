import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Privacy Policy | Supportology',
  description: 'Supportology Privacy Policy - How we handle and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full">
      <Navbar />
      
      <section className="section relative py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Privacy Policy
              </h1>
              <p className="text-sm text-muted-foreground">
                Last updated: June 2026
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none space-y-6 text-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <section>
                <p className="text-base leading-relaxed">
                  Supportology respects your privacy and handles personal information carefully.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-accent-primary mb-4">Information We Collect</h2>
                <p className="text-base leading-relaxed">
                  We collect information you send to us through our website or by email, including your name, email address, enquiry details and any documents or information you choose to provide.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-accent-primary mb-4">How We Use Your Information</h2>
                <p className="text-base leading-relaxed">
                  We use this information to review your enquiry, respond to you, provide document support if you choose to proceed, prepare agreed documents and keep basic business records.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-accent-primary mb-4">Sensitive Information</h2>
                <p className="text-base leading-relaxed">
                  Your documents may contain sensitive information, such as health, family, financial, housing, benefits or legal-related information. Please only send information relevant to your enquiry.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-accent-primary mb-4">Data Sharing</h2>
                <p className="text-base leading-relaxed">
                  We do not sell your information. We only share it where you ask us to, where it is necessary to provide a service you have agreed to, where we use secure service providers, or where required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-accent-primary mb-4">Data Retention</h2>
                <p className="text-base leading-relaxed">
                  If you enquire but do not proceed, we usually keep your information for up to 12 months. If we provide paid support, we may keep relevant records for up to 6 years for business, tax and record-keeping purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-accent-primary mb-4">Your Rights</h2>
                <p className="text-base leading-relaxed">
                  You can ask us to access, correct, delete or restrict use of your personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-accent-primary mb-4">Contact Us</h2>
                <p className="text-base leading-relaxed">
                  If you have any questions or concerns, contact:
                </p>
                <p className="text-base font-medium text-accent-primary mt-2">
                  help@supportology.co.uk
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-accent-primary mb-4">Complaints</h2>
                <p className="text-base leading-relaxed">
                  You can also complain to the Information Commissioner's Office if you are unhappy with how your information is handled.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
