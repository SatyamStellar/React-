import type React from "react"
import { type ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  color?: "cyan" | "purple" | "gradient"
  size?: "default" | "sm" | "lg"
  fullWidth?: boolean
  children: React.ReactNode
}

export const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ href, color = "cyan", size = "default", fullWidth = false, className, children, ...props }, ref) => {
    const baseClasses = cn(
      "relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300",
      "hover:scale-105 active:scale-95",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
      {
        "w-full": fullWidth,
        "px-6 py-3 text-base": size === "default",
        "px-4 py-2 text-sm": size === "sm",
        "px-8 py-4 text-lg": size === "lg",

        // Cyan variant
        "bg-cyan-950/50 border border-cyan-500/50 text-cyan-400 hover:text-white hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 focus-visible:ring-cyan-500":
          color === "cyan",

        // Purple variant
        "bg-purple-950/50 border border-purple-500/50 text-purple-400 hover:text-white hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 focus-visible:ring-purple-500":
          color === "purple",

        // Gradient variant
        "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/20 focus-visible:ring-purple-500":
          color === "gradient",
      },
      className,
    )

    // If href is provided, render as Link
    if (href) {
      return (
        <Link href={href} className={baseClasses}>
          {children}
        </Link>
      )
    }

    // Otherwise render as button
    return (
      <button ref={ref} className={baseClasses} {...props}>
        {children}
      </button>
    )
  },
)

NeonButton.displayName = "NeonButton"

