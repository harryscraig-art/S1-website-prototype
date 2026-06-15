'use client'

export function LogoPlaceholder() {
  return (
    <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
      {/* Light mode logo */}
      <img 
        src="/logo.svg" 
        alt="Supportology Logo" 
        className="h-10 w-auto dark:hidden"
      />
      {/* Dark mode logo */}
      <img 
        src="/logo-dark.svg" 
        alt="Supportology Logo" 
        className="h-10 w-auto hidden dark:block"
      />
    </a>
  )
}
