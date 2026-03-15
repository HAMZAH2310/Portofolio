"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Github, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const projectKeys = ["postAutomation", "project2", "botflow"]

export function ProjectSection() {
  const t = useTranslations("Project")
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectKeys.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projectKeys.length) % projectKeys.length)
  }

  const currentKey = projectKeys[currentIndex]
  const status = t(`items.${currentKey}.status`)
  const isCompleted = status === "Completed" || status === "Selesai"
  const projectLink = t(`items.${currentKey}.link`)
  const isGithub = projectLink.includes("github.com")

  return (
    <section className="py-24 px-4 container max-w-5xl mx-auto overflow-hidden">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
        <div className="flex items-center space-x-2 ml-8">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={prevProject}
            className="rounded-full border-border/50 hover:bg-primary/10 hover:border-primary/50"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={nextProject}
            className="rounded-full border-border/50 hover:bg-primary/10 hover:border-primary/50"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <div className="h-[1px] w-24 md:w-48 bg-border ml-4" />
        </div>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentKey}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur transition-all hover:bg-card/80 hover:border-primary/50 group">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted relative min-h-[300px] md:min-h-full flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-background to-background" />
                  <span className="text-muted-foreground font-mono tracking-widest uppercase">
                    {t(`items.${currentKey}.name`)}
                  </span>
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors duration-500" />
                </div>

                <div className="flex flex-col p-6 md:p-8 justify-center">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge 
                        variant="secondary" 
                        className={cn(
                          "border-none px-3 py-1",
                          isCompleted 
                            ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/30" 
                            : "bg-primary/20 text-primary hover:bg-primary/30"
                        )}
                      >
                        {status}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">{t(`items.${currentKey}.name`)}</CardTitle>
                    <CardDescription className="text-base h-auto md:h-20">
                      {t(`items.${currentKey}.description`)}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-0 mb-8 flex-grow">
                    <h4 className="font-semibold mb-2 text-sm uppercase tracking-wider text-muted-foreground">
                      {t("benefits")}
                    </h4>
                    <ul className="space-y-2 text-sm text-foreground/80 list-disc list-inside marker:text-primary">
                      <li>{t(`items.${currentKey}.benefit1`)}</li>
                      <li>{t(`items.${currentKey}.benefit2`)}</li>
                      <li>{t(`items.${currentKey}.benefit3`)}</li>
                    </ul>
                  </CardContent>

                  <CardFooter className="p-0">
                    <Button asChild className="group/button rounded-full">
                      <Link href="https://weather-jh7l59j3n-hamzahs-projects-2512d232.vercel.app/" target="_blank" rel="noopener noreferrer">
                        {isGithub ? <Github className="mr-2 h-4 w-4" /> : <ExternalLink className="mr-2 h-4 w-4" />}
                        {isGithub ? t("viewGithub") : t("viewDemo")}
                        <ArrowUpRight className="ml-2 h-4 w-4 opacity-70 group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {projectKeys.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all",
                index === currentIndex ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/50"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
