"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface BentoCardProps {
  id: string
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
  className?: string
  variant?: "cyan" | "purple" | "gradient" | "default"
}

export function BentoCard({ id, title, icon, children, className, variant = "default" }: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 25
      const rotateY = (centerX - x) / 25

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

      // Update highlight position
      const highlight = card.querySelector(".card-highlight") as HTMLElement
      if (highlight) {
        highlight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50%)`
      }
    }

    const handleMouseLeave = () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`
      card.style.transition = "transform 0.5s ease"

      // Reset highlight
      const highlight = card.querySelector(".card-highlight") as HTMLElement
      if (highlight) {
        highlight.style.background = "none"
      }
    }

    const handleMouseEnter = () => {
      card.style.transition = "transform 0.1s ease"
    }

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)
    card.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
      card.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  const getVariantClasses = () => {
    switch (variant) {
      case "cyan":
        return "before:from-cyan-500/10 before:to-cyan-900/5 border-cyan-800/30 hover:border-cyan-500/50"
      case "purple":
        return "before:from-purple-500/10 before:to-purple-900/5 border-purple-800/30 hover:border-purple-500/50"
      case "gradient":
        return "before:from-cyan-500/10 before:via-purple-500/10 before:to-cyan-500/10 border-gray-800/50 hover:border-cyan-500/30"
      default:
        return "before:from-gray-500/5 before:to-gray-900/5 border-gray-800/50 hover:border-gray-700/80"
    }
  }

  const getHeaderClasses = () => {
    switch (variant) {
      case "cyan":
        return "bg-gradient-to-r from-cyan-950/80 to-transparent border-b border-cyan-800/30"
      case "purple":
        return "bg-gradient-to-r from-purple-950/80 to-transparent border-b border-purple-800/30"
      case "gradient":
        return "bg-gradient-to-r from-cyan-950/80 via-purple-950/80 to-cyan-950/80 border-b border-gray-800/30"
      default:
        return "bg-gradient-to-r from-gray-900/80 to-transparent border-b border-gray-800/30"
    }
  }

  const getIconClasses = () => {
    switch (variant) {
      case "cyan":
        return "text-cyan-400"
      case "purple":
        return "text-purple-400"
      case "gradient":
        return "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div
      id={id}
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-xl bg-gray-900/80 backdrop-blur-sm border p-0",
        "transition-colors duration-300",
        "before:absolute before:inset-0 before:bg-gradient-to-br",
        getVariantClasses(),
        className,
      )}
    >
      {/* Card highlight effect */}
      <div className="card-highlight absolute inset-0 pointer-events-none"></div>

      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-70"></div>

      {/* Header */}
      <div className={cn("py-4 px-6 flex items-center justify-between", getHeaderClasses())}>
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          {icon && <span className={cn(getIconClasses())}>{icon}</span>}
          {title}
        </h2>
        <div className="size-2 rounded-full bg-cyan-400/80 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">{children}</div>
    </div>
  )
}

