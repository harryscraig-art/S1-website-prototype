'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <button className="w-10 h-10 rounded-md" disabled />
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 hover:bg-[color:var(--muted)] rounded-md transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={20} className="text-[color:var(--accent-primary)]" />
      ) : (
        <Moon size={20} className="text-[color:var(--accent-primary)]" />
      )}
    </button>
  )
}
