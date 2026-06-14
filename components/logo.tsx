'use client'

export function LogoPlaceholder() {
  return (
    <div className="flex items-center gap-3">
      {/* Logo Container - Document/Folder themed */}
      <div className="relative w-10 h-10">
        {/* Outer Document */}
        <div className="absolute inset-0 bg-[color:var(--accent-primary)] rounded-lg flex items-center justify-center shadow-md">
          {/* Inner accent */}
          <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Text Logo */}
      <span className="font-bold text-lg text-[color:var(--foreground)] hidden sm:inline">
        Supportology
      </span>
    </div>
  )
}
