import { HeroSection } from "@/components/sections/hero";
import { ProjectSection } from "@/components/sections/project";
import { SkillsSection } from "@/components/sections/skills";
import { SakuraBackground } from "@/components/sections/sakura-background";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background flex flex-col items-center justify-start overflow-hidden">
      <SakuraBackground />
      <div className="relative z-10 w-full flex-1 flex flex-col items-center">
        <HeroSection />
        <SkillsSection />
        <ProjectSection />
      </div>
    </div>
  );
}
