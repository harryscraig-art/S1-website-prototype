'use client'

import Image from 'next/image'

export function LogoPlaceholder() {
  return (
    <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
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
