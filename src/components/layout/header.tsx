import { Link } from "@/i18n/routing"
import { ModeToggle } from "./mode-toggle"
import { LanguageSwitcher } from "./language-switcher"
import { useTranslations } from "next-intl"

export function Header() {
  const t = useTranslations("Navigation")

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between mx-auto px-4 md:px-8">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
            <span className="text-xl font-bold tracking-tighter text-foreground">
              Portofolio
              <span className="text-primary">.</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-primary">
              {t("home")}
            </Link>
            <Link href="/about" className="transition-colors hover:text-primary">
              {t("about")}
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          <LanguageSwitcher />
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
