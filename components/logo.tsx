'use client'

export function LogoPlaceholder() {
  return (
    <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
      <img 
        src="/logo.svg" 
        alt="Supportology Logo" 
        className="h-10 w-auto"
      />
    </a>
  )
}
