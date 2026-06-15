'use client'

import Image from 'next/image'

export function LogoPlaceholder() {
  return (
    <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
      <Image 
        src="/logo.svg" 
        alt="Supportology Logo" 
        width={120} 
        height={40}
        priority
        className="h-10 w-auto"
      />
    </a>
  )
}
