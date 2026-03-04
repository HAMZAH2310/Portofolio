"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"

interface PetalProps {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  swayDur: number;
}

export function SakuraBackground() {
  const [petals, setPetals] = useState<PetalProps[]>([])
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Wait until mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
    const initialPetals = Array.from({ length: 30 }).map((_, i) => createPetal(i))
    setPetals(initialPetals)

    const interval = setInterval(() => {
      setPetals((prev) => {
        // Remove older petals and add new ones to simulate continuous falling
        const filtered = prev.slice(prev.length - 28)
        return [...filtered, createPetal(Date.now())]
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  function createPetal(id: number): PetalProps {
    return {
      id,
      x: Math.random() * 100, // percentage string
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 15,
      size: 8 + Math.random() * 12,
      swayDur: 3 + Math.random() * 4,
    }
  }

  if (!mounted) return null

  const currentTheme = theme === "system" ? systemTheme : theme;
  const petalColor = currentTheme === "dark" ? "var(--sakura-dark)" : "var(--sakura)";

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 mix-blend-multiply dark:mix-blend-lighten opacity-60">
      <AnimatePresence>
        {petals.map((petal) => (
          <motion.div
            key={petal.id}
            initial={{ 
              top: "-5%", 
              left: `${petal.x}%`, 
              rotate: 0, 
              opacity: 0 
            }}
            animate={{
              top: "105%",
              left: [`${petal.x}%`, `${petal.x - 5}%`, `${petal.x + 5}%`, `${petal.x}%`],
              rotate: 360,
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              top: { duration: petal.duration, ease: "linear", delay: petal.delay },
              left: { duration: petal.swayDur, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" },
              rotate: { duration: petal.swayDur * 1.5, ease: "linear", repeat: Infinity },
              opacity: { duration: petal.duration, times: [0, 0.1, 0.9, 1] }
            }}
            className="absolute rounded-bl-full rounded-tr-full rounded-tl-[2px] rounded-br-[2px]"
            style={{
              width: petal.size,
              height: petal.size,
              backgroundColor: petalColor,
              filter: "blur(1px) drop-shadow(0px 0px 2px rgba(255,183,197,0.3))"
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
