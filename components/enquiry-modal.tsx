'use client'

import { useRef, useState } from 'react'
import { X, CheckCircle2 } from 'lucide-react'

export function EnquiryModal() {
  const modalRef = useRef<HTMLDialogElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    paperworkType: '',
    deadline: '',
    message: '',
    noLegalAdvice: false,
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? (e.target as HTMLInputElement).checked
          : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder: Form submission would go here
    // For now, we just show the confirmation state
    setSubmitted(true)
    
    // Auto-close after 3 seconds and scroll to top
    setTimeout(() => {
      closeModal()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 3000)
  }

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close()
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        paperworkType: '',
        deadline: '',
        message: '',
        noLegalAdvice: false,
      })
    }
  }

  return (
    <dialog
      id="enquiry-modal"
      ref={modalRef}
      className="w-full max-w-md rounded-lg backdrop:bg-black/50 backdrop:backdrop-blur-sm"
    >
      <div className="bg-[color:var(--background)] dark:bg-[color:var(--card)] p-6 md:p-8 relative">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 hover:bg-[color:var(--muted)] rounded-md transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            {/* Modal Header */}
            <h2 className="text-2xl font-bold mb-2">Tell Us About Your Paperwork</h2>
            <p className="text-[color:var(--muted-foreground)] mb-6">
              We&apos;ll review your enquiry and get back to you within 24 hours.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[color:var(--border)] rounded-md bg-[color:var(--card)] dark:bg-[color:var(--background)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)]"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[color:var(--border)] rounded-md bg-[color:var(--card)] dark:bg-[color:var(--background)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)]"
                  placeholder="your@email.com"
                />
              </div>

              {/* Type of Paperwork */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Type of Paperwork
                </label>
                <select
                  name="paperworkType"
                  value={formData.paperworkType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[color:var(--border)] rounded-md bg-[color:var(--card)] dark:bg-[color:var(--background)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)]"
                >
                  <option value="">Select a type...</option>
                  <option value="forms">Forms & Applications</option>
                  <option value="letters">Letters & Correspondence</option>
                  <option value="appeals">Appeals & Complaints</option>
                  <option value="evidence">Evidence Packs</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Deadline */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Deadline (if urgent)
                </label>
                <input
                  type="text"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[color:var(--border)] rounded-md bg-[color:var(--card)] dark:bg-[color:var(--background)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)]"
                  placeholder="e.g., Next week, 15 June"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  What do you need help with?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-[color:var(--border)] rounded-md bg-[color:var(--card)] dark:bg-[color:var(--background)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)] resize-none"
                  placeholder="Briefly explain the paperwork, letter, form or deadline you're dealing with."
                />
              </div>

              {/* Legal Checkbox */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="noLegalAdvice"
                  id="noLegalAdvice"
                  checked={formData.noLegalAdvice}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
                <label htmlFor="noLegalAdvice" className="text-xs text-[color:var(--muted-foreground)]">
                  I understand Supportology provides document support and preparation assistance, not regulated legal advice.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex items-center justify-center px-4 py-3 w-full bg-[color:var(--accent-primary)] text-white hover:bg-[color:var(--accent-primary)]/90 active:bg-[color:var(--accent-primary)]/80 rounded-lg font-medium transition-all mt-6"
              >
                Send My Enquiry
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={closeModal}
                className="inline-flex items-center justify-center px-4 py-2 w-full bg-[color:var(--muted)] text-[color:var(--foreground)] hover:bg-[color:var(--border)] active:bg-[color:var(--border)]/80 rounded-lg font-medium transition-all"
              >
                Close
              </button>
            </form>
          </>
        ) : (
          <>
            {/* Confirmation State */}
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[color:var(--accent-light)] dark:bg-[color:var(--accent-light)] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-[color:var(--accent-primary)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Enquiry Sent!</h3>
              <p className="text-[color:var(--muted-foreground)] mb-6">
                Thank you. We&apos;ll review your enquiry and get back to you within 24 hours.
              </p>
              <button
                onClick={closeModal}
                className="btn-primary"
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </dialog>
  )
}
