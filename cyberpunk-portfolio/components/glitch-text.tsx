"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
  children: React.ReactNode
  className?: string
}

export function GlitchText({ children, className }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    // Initial glitch on load
    setIsGlitching(true)
    setTimeout(() => setIsGlitching(false), 500)

    // Random glitch intervals
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 200 + Math.random() * 300)
      }
    }, 2000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <div className={cn("relative inline-block", className)}>
      <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-size-200 animate-gradient-x">
        {children}
      </span>

      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 z-0 text-red-500 animate-glitch-1 opacity-70">{children}</span>
          <span className="absolute top-0 left-0 z-0 text-cyan-500 animate-glitch-2 opacity-70">{children}</span>
          <span className="absolute top-0 left-0 z-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 animate-glitch-3 opacity-70">
            {children}
          </span>
        </>
      )}
    </div>
  )
}

