import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { EyeTrackingSection } from "@/components/EyeTrackingSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { ContactSection } from "@/components/ContactSection";
import { DownloadsSection } from "@/components/DownloadsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <EyeTrackingSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
      <DownloadsSection />
    </main>
  );
}

