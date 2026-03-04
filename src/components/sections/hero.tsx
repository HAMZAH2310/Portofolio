import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const t = useTranslations("Hero")

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] text-center px-4 py-20 overflow-hidden">
      {/* Subtle decorative elements mimicking Japanese minimalism */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="space-y-6 max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
        <h2 className="text-xl md:text-2xl text-muted-foreground font-medium tracking-wide">
          {t("greeting")}
        </h2>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
          {t("title")}
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {t("description")}
        </p>
      </div>

      {/* Decorative vertical line, common in modern Japanese web design */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-border to-transparent" />
    </section>
  )
}
