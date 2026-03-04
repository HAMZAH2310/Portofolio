"use client"

import React from "react"
import { useTranslations } from "next-intl"
import { SakuraBackground } from "@/components/sections/sakura-background"
import { motion } from "framer-motion"

export default function AboutPage() {
  const t = useTranslations("About")

  return (
    <div className="relative min-h-screen bg-background flex flex-col items-center justify-start overflow-hidden">
      <SakuraBackground />
      
      <main className="relative z-10 w-full max-w-3xl mx-auto px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              {t("title")}
              <span className="text-primary">.</span>
            </h1>
            <div className="h-1 w-24 bg-primary rounded-full" />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
              {t("description")}
            </p>
            
            <div className="grid gap-8 mt-16 text-muted-foreground leading-relaxed">
              <p>
                As a developer, I find inspiration in the concept of <strong>Wabi-sabi</strong>—finding beauty in imperfection and simplicity. My goal is to create digital experiences that feel as natural and intentional as a stone garden, where every element has a purpose.
              </p>
              
              <div className="p-8 border-l-4 border-primary/30 bg-primary/5 rounded-r-2xl italic">
                "Simplicity is the ultimate sophistication."
              </div>

              <p>
                My technical journey has taken me from building interactive frontend interfaces with React to architecting robust backend systems. I'm currently exploring the synergy between agentic AI and workflow automation to build the next generation of intelligent tools.
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
