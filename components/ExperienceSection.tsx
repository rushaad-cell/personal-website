"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Research Assistant",
      org: "Kidd Lab, UC Berkeley",
      location: "Berkeley, CA",
      period: "08/2025 - Present",
      description: "Research children's visual attention patterns and learning outcomes in digital media contexts via eye-tracking and computational modeling. Process and analyze data with Python & R to identify visual features that improve learning efficacy. Collaborate with technical and research teams to interpret data and guide learning media design decisions.",
      icon: "🔬",
    },
    {
      title: "Executive Manager",
      org: "Berkeley Student Media - Associated Students of the University of California",
      location: "Berkeley, CA",
      period: "06/2024 – Present",
      description: "Direct operational strategy for UC Berkeley's student-run Media Center, serving 1000+ users/semester. Analyze usage and workflow data (Excel and Tableau) to optimize resource allocation and service capacity. Oversee marketing, analytics, and finance teams to deliver 4-6 community events per semester. Designed tracking systems for inventory, incident reports, and staffing, improving service reliability.",
      icon: "📊",
    },
    {
      title: "Research Assistant - Memory Laboratory",
      org: "University of California, Santa Cruz. PIs: Dana-Lis Bittner, M.S.; Dr. Benjamin Storm",
      location: "Santa Cruz, CA",
      period: "06/2020 - 06/2023",
      description: "Designed and analyzed experiments on how digital information sharing and audience framing influence autobiographical memory distortion. Built and deployed Qualtrics studies; ran sentiment and regression analyses; conducted literature reviews. Presented first-author findings at the Western Psychological Association Conference (2023).",
      icon: "🧠",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-black dark:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-white dark:text-black" />
            <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-black">
              Experience
            </h2>
          </div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white dark:bg-black flex items-center justify-center text-2xl border-2 border-white/20 dark:border-black/20">
                    {exp.icon}
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="w-0.5 h-full bg-white/20 dark:bg-black/20 mx-auto mt-4" />
                  )}
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="text-2xl font-bold text-white dark:text-black mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-4 mb-3">
                    <p className="text-white/80 dark:text-black/80 font-medium">
                      {exp.org}
                    </p>
                    <div className="flex items-center gap-2 text-white/60 dark:text-black/60 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-white/60 dark:text-black/60 text-sm mb-2">
                    {exp.location}
                  </p>
                  <p className="text-white/70 dark:text-black/70 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
