"use client"

import React from "react"
import { useTranslations } from "next-intl"
import * as si from "simple-icons"

const skills = [
  { name: "HTML5", icon: si.siHtml5 },
  { name: "CSS3", icon: si.siCss },
  { name: "JavaScript", icon: si.siJavascript },
  { name: "Go", icon: si.siGo },
  { name: "Antigravity", icon: null, customText: "AG" },
  { name: "n8n", icon: si.siN8n },
]

export function SkillsSection() {
  const t = useTranslations("Skills")

  return (
    <section className="py-24 px-4 container max-w-5xl mx-auto">
      <div className="flex items-center space-x-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
        <div className="h-[px] flex-1 bg-border" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <div 
            key={skill.name}
            className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card/80"
          >
            <div className="w-12 h-12 flex items-center justify-center mb-4 text-muted-foreground group-hover:text-primary transition-colors">
              {skill.icon ? (
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={skill.icon.path} />
                </svg>
              ) : (
                <span className="text-2xl font-bold italic tracking-tighter">
                  {skill.customText}
                </span>
              )}
            </div>
            <span className="text-sm font-medium tracking-wide opacity-70 group-hover:opacity-100">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
