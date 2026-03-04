"use client"

import React from "react"
import { useTranslations } from "next-intl"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const socials = [
  { name: "GitHub", icon: Github, href: "https://github.com/HAMZAH2310" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/hamzah-zulkhan-706a6b2b6/" },
  { name: "Email", icon: Mail, href: "mailto:hamzahzulkhanbrk@gmail.com" },
]

export function Footer() {
  const t = useTranslations("Social")

  return (
    <footer className="py-12 px-4 border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="container max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold tracking-tighter mb-1">
            Portfolio<span className="text-primary">.</span>
          </h3>
          <p className="text-xs text-muted-foreground italic">
            Built with Next.js & Japanese Heart.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-sm font-medium text-muted-foreground">{t("title")}</p>
          <div className="flex items-center space-x-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border/50 bg-card/50 hover:border-primary hover:text-primary transition-all group"
              >
                <social.icon className="w-5 h-5" />
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
