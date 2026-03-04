import { useTranslations } from "next-intl"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Github } from "lucide-react"
import Link from "next/link"

export function ProjectSection() {
  const t = useTranslations("Project")

  return (
    <section className="py-24 px-4 container max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
        <div className="h-[1px] flex-1 bg-border ml-8" />
      </div>

      <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur transition-all hover:bg-card/80 hover:border-primary/50 group">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Aesthetic Placeholder for Project Image/Visuals */}
          <div className="bg-muted relative min-h-[300px] md:min-h-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-background to-background" />
            <span className="text-muted-foreground font-mono tracking-widest uppercase">Project Preview</span>
            
            {/* Hover subtle scale effeect */}
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors duration-500" />
          </div>

          <div className="flex flex-col p-6 md:p-8 justify-center">
            <CardHeader className="p-0 mb-4">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30 border-none px-3 py-1">
                  {t("status")}
                </Badge>
              </div>
              <CardTitle className="text-2xl mb-2">{t("name")}</CardTitle>
              <CardDescription className="text-base">
                {t("description")}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-0 mb-8 flex-grow">
              <h4 className="font-semibold mb-2 text-sm uppercase tracking-wider text-muted-foreground">
                {t("benefits")}
              </h4>
              <ul className="space-y-2 text-sm text-foreground/80 list-disc list-inside marker:text-primary">
                <li>{t("benefit1")}</li>
                <li>{t("benefit2")}</li>
                <li>{t("benefit3")}</li>
              </ul>
            </CardContent>

            <CardFooter className="p-0">
              <Button asChild className="group/button rounded-full">
                <Link href="https://github.com/HAMZAH2310/post_ai_automation" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  {t("viewGithub")}
                  <ArrowUpRight className="ml-2 h-4 w-4 opacity-70 group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </section>
  )
}
