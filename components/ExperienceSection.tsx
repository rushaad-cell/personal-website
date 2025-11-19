"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { useState } from "react";

export function ExperienceSection() {
  const [selectedExp, setSelectedExp] = useState<number | null>(null);

  const experiences = [
    {
      title: "Research Assistant",
      org: "Kidd Lab, UC Berkeley",
      location: "Berkeley, CA",
      period: "08/2025 - Present",
      description: "Research children's visual attention patterns and learning outcomes in digital media contexts via eye-tracking and computational modeling. Process and analyze data with Python & R to identify visual features that improve learning efficacy. Collaborate with technical and research teams to interpret data and guide learning media design decisions.",
    },
    {
      title: "Executive Manager",
      org: "Berkeley Student Media",
      location: "Berkeley, CA",
      period: "06/2024 – Present",
      description: "Direct operational strategy for UC Berkeley's student-run Media Center, serving 1000+ users/semester. Analyze usage and workflow data (Excel and Tableau) to optimize resource allocation and service capacity. Oversee marketing, analytics, and finance teams to deliver 4-6 community events per semester. Designed tracking systems for inventory, incident reports, and staffing, improving service reliability.",
    },
    {
      title: "Marketing Staff",
      org: "ASUC SUPERB Productions, UC Berkeley",
      location: "Berkeley, CA",
      period: "01/2024 – Present",
      description: "Design marketing initiatives for SUPERB social media accounts, including our 10K Instagram followers. Collaborate with the marketing team to manage a $10,000+ budget, planning events in line with student culture. Planned, launched, and facilitated communication for ticket giveaways for large artists, such as Dorian Electra. Gained confident working proficiency with Google Suite applications.",
    },
    {
      title: "Marketing Lead & Editorial/Technical Staff",
      org: "GAG! Magazine, UC Berkeley",
      location: "Berkeley, CA",
      period: "09/2023 – Present",
      description: "Created content such as poetry, reviews, and op-ed pieces for independent student-funded art magazine. Manages a 10+ person team to lead social media marketing campaigns while maintaining a trendy brand voice. Planned large and small scale events for the local Berkeley community and broader Bay Area. Managed a six-person team to build and operations for our custom website (gagmagazine.cargo.site). Attended weekly editorial staff meetings and general meetings to track progress and brainstorm creative magazine ideas.",
    },
    {
      title: "Music Journalism Editorial Staff",
      org: "The Berkeley B-Side, UC Berkeley",
      location: "Berkeley, CA",
      period: "09/2023 – Present",
      description: "Published music journalism and PR pieces focused on curating a diverse pool of BIPOC and LGBTQ+ voices in music, such as 'The chaos of catharsis: Doom Loop Festival, starring Yeule.' Attended weekly editorial staff meetings to brainstorm articles and discuss the latest trends in music.",
    },
    {
      title: "Research Assistant",
      org: "Memory Laboratory, UC Santa Cruz",
      location: "Santa Cruz, CA",
      period: "06/2020 - 06/2023",
      description: "Designed and analyzed experiments on how digital information sharing and audience framing influence autobiographical memory distortion. Built and deployed Qualtrics studies; ran sentiment and regression analyses; conducted literature reviews. Presented first-author findings at the Western Psychological Association Conference (2023).",
    },
  ];

  return (
    <section className="min-h-screen py-32 bg-black dark:bg-white relative overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, currentColor 1px, currentColor 2px)`,
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-32"
        >
          <div className="flex items-baseline gap-6 mb-4">
            <h1 className="text-7xl md:text-9xl font-black text-white dark:text-black leading-none tracking-tight">
              EXPERIENCE
            </h1>
            <div className="flex-1 h-px bg-white/20 dark:bg-black/20"></div>
          </div>
          <p className="text-sm text-white/40 dark:text-black/40 uppercase tracking-widest font-light">
            Research & Management
          </p>
        </motion.div>

        {/* Minimal Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 dark:bg-black/10" />

          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setSelectedExp(index)}
                onHoverEnd={() => setSelectedExp(null)}
                className="relative pl-16 group"
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-0 top-2 w-3 h-3 rounded-full bg-white dark:bg-black border-2 border-white dark:border-black z-10"
                  whileHover={{ scale: 1.5 }}
                  animate={{
                    scale: selectedExp === index ? 1.3 : 1,
                  }}
                />

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-baseline justify-between gap-6 flex-wrap">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-black text-white dark:text-black mb-2 leading-tight">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-white/70 dark:text-black/70 font-light">
                        {exp.org}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-white/40 dark:text-black/40 text-xs uppercase tracking-widest">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-white/50 dark:text-black/50 uppercase tracking-widest">
                    {exp.location}
                  </p>

                  <p className="text-white/60 dark:text-black/60 leading-relaxed text-lg font-light max-w-3xl">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Presentations Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-32 pt-32 border-t border-white/10 dark:border-black/10"
        >
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white dark:text-black leading-none tracking-tight mb-4">
              PRESENTATIONS
            </h2>
            <p className="text-sm text-white/40 dark:text-black/40 uppercase tracking-widest font-light">
              Research Contributions
            </p>
          </div>

          <div className="space-y-12">
            {presentations.map((pres, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-baseline justify-between gap-6 flex-wrap">
                  <div className="flex-1">
                    <p className="text-sm text-white/50 dark:text-black/50 font-light mb-2">
                      {pres.authors}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-black text-white dark:text-black mb-3 leading-tight">
                      {pres.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-white/40 dark:text-black/40 text-xs uppercase tracking-widest">
                      <span>{pres.type}</span>
                      <span>•</span>
                      <span>{pres.venue}</span>
                      <span>•</span>
                      <span>{pres.location}</span>
                      <span>•</span>
                      <span>{pres.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
