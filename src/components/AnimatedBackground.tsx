"use client"

import { useEffect, useRef } from 'react'

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const dots: { x: number; y: number; vx: number; vy: number }[] = []
    const numDots = 50

    // Initialize dots
    for (let i = 0; i < numDots; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
      })
    }

    function animate() {
      if (!canvas || !ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "rgba(200, 200, 255, 0.1)"

      // Update and draw dots
      dots.forEach((dot) => {
        dot.x += dot.vx
        dot.y += dot.vy

        // Bounce off walls
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1a1a1a_1px,transparent_1px)]" />
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
    </div>
  )
}

export default AnimatedBackground
