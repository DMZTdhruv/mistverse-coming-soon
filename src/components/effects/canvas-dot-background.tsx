import { useEffect, useRef } from "react"
import { motion } from "motion/react"
interface Dot {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  angle: number
  opacity: number
  life: number
}

interface Dot {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  angle: number
  opacity: number
  life: number
  maxDistance: number
}

export function CanvasDotAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const dots: Dot[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createDot = (): Dot => ({
      x: 0,
      y: 0,
      size: 1.5, // Changed to 1px
      speedX: (Math.random() - 0.5) * 0.5, // Increased speed
      speedY: (Math.random() - 0.5) * 0.5, // Increased speed
      angle: Math.random() * Math.PI * 2,
      opacity: 0,
      life: 0,
      maxDistance: 500 + Math.random() * 100, // Random max distance between 100 and 200
    })

    const updateDots = () => {
      dots.forEach((dot) => {
        // Add slight randomness to movement for a more natural feel
        dot.speedX += (Math.random() - 0.5) * 0.1
        dot.speedY += (Math.random() - 0.5) * 0.1

        // Limit max speed
        dot.speedX = Math.max(Math.min(dot.speedX, 0.7), -0.7) // Increased max speed
        dot.speedY = Math.max(Math.min(dot.speedY, 0.7), -0.7) // Increased max speed

        dot.x += dot.speedX
        dot.y += dot.speedY
        dot.life += 0.002 // Slightly faster life progression

        const distance = Math.sqrt(dot.x * dot.x + dot.y * dot.y)
        const halfMaxDistance = dot.maxDistance / 2

        if (distance < halfMaxDistance) {
          dot.opacity = (distance / halfMaxDistance) * 0.5 // Gradual fade in from the start
        } else if (distance < dot.maxDistance) {
          dot.opacity =
            0.5 + ((distance - halfMaxDistance) / halfMaxDistance) * 0.5
        } else {
          dot.opacity = 1 - (dot.life - 0.75) * 4
        }

        if (distance >= dot.maxDistance || dot.life >= 1) {
          const index = dots.indexOf(dot)
          dots.splice(index, 1)
        }
      })

      // Reduce dot creation frequency and maximum number
      if (dots.length < 50 && Math.random() < 0.05) {
        // Slightly increased creation rate
        dots.push(createDot())
      }
    }

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dots.forEach((dot) => {
        ctx.beginPath()
        ctx.arc(
          canvas.width / 2 + dot.x,
          canvas.height / 2 + dot.y,
          dot.size,
          0,
          Math.PI * 2,
        )
        ctx.fillStyle = `rgba(255, 255, 255, ${dot.opacity})`

        // Enhanced glow effect
        ctx.shadowColor = "rgba(255, 255, 255, 0.7)"
        ctx.shadowBlur = 10 // Reduced blur for smaller dots
        ctx.fill()
        ctx.shadowColor = "rgba(255, 255, 255, 0.5)"
        ctx.shadowBlur = 15 // Reduced blur for smaller dots
        ctx.fill()

        // Reset shadow for performance
        ctx.shadowBlur = 0
      })
    }

    const animate = () => {
      updateDots()
      drawDots()
      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute max-h-[750px] w-full z-20 pointer-events-none mix-blend-screen inset-0 bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    />
  )
}
