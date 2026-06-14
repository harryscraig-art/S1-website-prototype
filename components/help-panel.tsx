'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface HelpPanelProps {
  closedLabel: string
  openCopy: string
}

export function HelpPanel({ closedLabel, openCopy }: HelpPanelProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className="mt-12 max-w-xl mx-auto animate-fade-in">
      <button
        onClick={toggleOpen}
        type="button"
        className="w-full flex items-center justify-between p-4 bg-[color:var(--accent-light)]/50 dark:bg-[color:var(--accent-primary)]/15 rounded-lg border-l-4 border-[color:var(--accent-primary)] hover:bg-[color:var(--accent-light)]/70 dark:hover:bg-[color:var(--accent-primary)]/25 transition-all duration-200 cursor-pointer"
        aria-expanded={isOpen}
        aria-controls="help-panel-content"
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
        <div 
          id="help-panel-content"
          className="mt-3 p-4 bg-[color:var(--card)] rounded-lg border border-[color:var(--accent-primary)]/30 animate-slide-up"
        >
          <p className="text-sm text-[color:var(--muted-foreground)] leading-relaxed">
            {openCopy}
          </p>
        </div>
      )}
    </div>
  )
}
