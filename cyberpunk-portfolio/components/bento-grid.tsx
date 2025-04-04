import type React from "react"
import { cn } from "@/lib/utils"

interface BentoGridProps {
  children: React.ReactNode
  className?: string
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8", className)}>{children}</div>
}

