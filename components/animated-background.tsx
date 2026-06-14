'use client'

export function AnimatedBackground() {
  return (
    <>
      {/* Fixed animated background blur circles */}
      {/* Circle 1: Top-left, very slow, large */}
      <div className="fixed -top-40 -left-40 w-96 h-96 bg-[color:var(--accent-primary)]/8 rounded-full blur-3xl pointer-events-none animate-float-very-slow" style={{ zIndex: '-1' }} />

      {/* Circle 2: Top-right, medium speed, extra large */}
      <div className="fixed -top-20 right-0 w-[500px] h-[500px] bg-[color:var(--accent-primary)]/6 rounded-full blur-3xl pointer-events-none animate-float-medium" style={{ zIndex: '-1' }} />

      {/* Circle 3: Center-bottom, fast, large */}
      <div className="fixed top-1/2 -left-64 w-[450px] h-[450px] bg-[color:var(--accent-primary)]/7 rounded-full blur-3xl pointer-events-none animate-float-fast" style={{ zIndex: '-1' }} />

      {/* Circle 4: Bottom-right, slow, extra large */}
      <div className="fixed -bottom-32 right-1/4 w-[550px] h-[550px] bg-[color:var(--accent-primary)]/5 rounded-full blur-3xl pointer-events-none animate-float-slow" style={{ zIndex: '-1' }} />
    </>
  )
}
