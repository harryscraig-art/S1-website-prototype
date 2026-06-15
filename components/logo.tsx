'use client'

import Image from 'next/image'

export function LogoPlaceholder() {
  return (
    <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity dark:hidden">
      <Image 
        src="/logo.svg" 
        alt="Supportology Logo" 
        width={500} 
        height={120}
        priority
        className="h-10 w-auto"
      />
    </a>
  )
}

export function LogoPlaceholderLight() {
  return (
    <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity hidden dark:flex">
      <Image 
        src="/logo-light.svg" 
        alt="Supportology Logo" 
        width={500} 
        height={120}
        priority
        className="h-10 w-auto"
      />
    </a>
  )
}
