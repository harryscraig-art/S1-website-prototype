'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface HelpPanelProps {
  closedLabel: string
  openCopy: string
}

export function HelpPanel({ closedLabel, openCopy }: HelpPanelProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mt-12 max-w-xl mx-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-[color:var(--accent-light)]/40 dark:bg-[color:var(--accent-primary)]/10 rounded-lg border-l-4 border-[color:var(--accent-primary)] hover:bg-[color:var(--accent-light)]/60 dark:hover:bg-[color:var(--accent-primary)]/20 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-medium text-[color:var(--foreground)] text-left">
          {closedLabel}
        </span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-[color:var(--accent-primary)] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="mt-3 p-4 bg-[color:var(--card)] rounded-lg border border-[color:var(--accent-primary)]/20 animate-slide-up">
          <p className="text-sm text-[color:var(--muted-foreground)] leading-relaxed">
            {openCopy}
          </p>
        </div>
      )}
    </div>
  )
}
