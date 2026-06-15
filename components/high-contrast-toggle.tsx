'use client'

import { useEffect, useState } from 'react'
import { Contrast } from 'lucide-react'

export function HighContrastToggle() {
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Check if high contrast is already enabled
    const stored = localStorage.getItem('high-contrast')
    if (stored === 'true') {
      setIsHighContrast(true)
      document.documentElement.classList.add('high-contrast')
    }
  }, [])

  const toggleHighContrast = () => {
    const newState = !isHighContrast
    setIsHighContrast(newState)
    
    if (newState) {
      document.documentElement.classList.add('high-contrast')
      localStorage.setItem('high-contrast', 'true')
    } else {
      document.documentElement.classList.remove('high-contrast')
      localStorage.setItem('high-contrast', 'false')
    }
  }

  if (!isMounted) return null

  return (
    <button
      onClick={toggleHighContrast}
      aria-label={isHighContrast ? 'Disable high contrast mode' : 'Enable high contrast mode'}
      className="inline-flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200 hover:bg-[color:var(--input)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
      title={isHighContrast ? 'High contrast on' : 'High contrast off'}
    >
      <Contrast 
        className={`w-5 h-5 transition-colors ${isHighContrast ? 'text-[color:var(--accent-primary)]' : 'text-[color:var(--muted-foreground)]'}`}
      />
    </button>
  )
}
