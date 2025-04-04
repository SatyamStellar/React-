"use client"

import { useEffect, useRef } from "react"

export function HolographicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Grid parameters
    const gridSize = 40
    const gridSpacing = 80
    const gridOpacity = 0.15

    // Animation parameters
    let time = 0
    const speed = 0.0005

    // Create gradient
    const createGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(6, 182, 212, 0.05)") // cyan-500
      gradient.addColorStop(0.5, "rgba(168, 85, 247, 0.05)") // purple-500
      gradient.addColorStop(1, "rgba(6, 182, 212, 0.05)") // cyan-500
      return gradient
    }

    // Draw function
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background
      ctx.fillStyle = "rgba(0, 0, 0, 1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.strokeStyle = createGradient()

      // Horizontal lines
      for (let y = 0; y < canvas.height + gridSpacing; y += gridSpacing) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.globalAlpha = gridOpacity
        ctx.stroke()
      }

      // Vertical lines
      for (let x = 0; x < canvas.width + gridSpacing; x += gridSpacing) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.globalAlpha = gridOpacity
        ctx.stroke()
      }

      // Draw animated particles
      const particleCount = 50
      ctx.fillStyle = "rgba(6, 182, 212, 0.6)" // cyan-500

      for (let i = 0; i < particleCount; i++) {
        const x = (Math.sin(time * speed * i) * canvas.width) / 2 + canvas.width / 2
        const y = (Math.cos(time * speed * i) * canvas.height) / 2 + canvas.height / 2
        const size = Math.abs(Math.sin(time * speed * i) * 2) + 1

        ctx.globalAlpha = Math.sin(time * speed * i) * 0.3 + 0.2
        if (size > 0) {
          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Draw purple particles
      ctx.fillStyle = "rgba(168, 85, 247, 0.6)" // purple-500

      for (let i = 0; i < particleCount; i++) {
        const x = (Math.cos(time * speed * i) * canvas.width) / 2 + canvas.width / 2
        const y = (Math.sin(time * speed * i) * canvas.height) / 2 + canvas.height / 2
        const size = Math.abs(Math.cos(time * speed * i) * 2) + 1

        ctx.globalAlpha = Math.cos(time * speed * i) * 0.3 + 0.2
        if (size > 0) {
          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Update time
      time++

      // Request next frame
      requestAnimationFrame(draw)
    }

    // Start animation
    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" />
}

