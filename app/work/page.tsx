import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { CreativeSection } from "@/components/CreativeSection";

export default function WorkPage() {
  return (
    <main className="min-h-screen">
      <ExperienceSection />
      <EducationSection />
      <CreativeSection />
    </main>
  );
}
