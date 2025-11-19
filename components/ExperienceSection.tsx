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
      icon: "🔬",
      color: "bg-blue-500",
    },
    {
      title: "Executive Manager",
      org: "Berkeley Student Media",
      location: "Berkeley, CA",
      period: "06/2024 – Present",
      description: "Direct operational strategy for UC Berkeley's student-run Media Center, serving 1000+ users/semester. Analyze usage and workflow data (Excel and Tableau) to optimize resource allocation and service capacity. Oversee marketing, analytics, and finance teams to deliver 4-6 community events per semester. Designed tracking systems for inventory, incident reports, and staffing, improving service reliability.",
      icon: "📊",
      color: "bg-purple-500",
    },
    {
      title: "Research Assistant",
      org: "Memory Laboratory, UC Santa Cruz",
      location: "Santa Cruz, CA",
      period: "06/2020 - 06/2023",
      description: "Designed and analyzed experiments on how digital information sharing and audience framing influence autobiographical memory distortion. Built and deployed Qualtrics studies; ran sentiment and regression analyses; conducted literature reviews. Presented first-author findings at the Western Psychological Association Conference (2023).",
      icon: "🧠",
      color: "bg-pink-500",
    },
  ];

  return (
    <section className="min-h-screen py-24 bg-black dark:bg-white relative overflow-hidden">
      {/* Quirky Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 20px)`,
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Quirky Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              whileHover={{ rotate: [0, 360] }}
              transition={{ duration: 0.6 }}
              className="text-6xl"
            >
              💼
            </motion.div>
            <div>
              <h1 className="text-6xl md:text-8xl font-black text-white dark:text-black leading-none">
                Work Experience
              </h1>
              <p className="text-lg text-white/60 dark:text-black/60 mt-2">
                Where I've been and what I've done
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quirky Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-white/20 dark:bg-black/20" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                onHoverStart={() => setSelectedExp(index)}
                onHoverEnd={() => setSelectedExp(null)}
                className="relative pl-24 group cursor-pointer"
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-6 top-2 w-6 h-6 rounded-full bg-white dark:bg-black border-4 border-white dark:border-black z-10"
                  whileHover={{ scale: 1.5 }}
                  animate={{
                    scale: selectedExp === index ? 1.3 : 1,
                  }}
                >
                  <div className="w-full h-full rounded-full bg-black dark:bg-white" />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ x: 20, scale: 1.02 }}
                  className="bg-white/5 dark:bg-black/5 rounded-3xl p-8 border-2 border-transparent hover:border-white/20 dark:hover:border-black/20 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <motion.div
                      animate={{
                        rotate: selectedExp === index ? [0, 10, -10, 0] : 0,
                      }}
                      transition={{ duration: 0.5 }}
                      className="text-5xl flex-shrink-0"
                    >
                      {exp.icon}
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-3xl font-black text-white dark:text-black mb-2">
                            {exp.title}
                          </h3>
                          <p className="text-xl text-white/80 dark:text-black/80 font-medium mb-2">
                            {exp.org}
                          </p>
                        </div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: selectedExp === index ? 1 : 0 }}
                          className="text-4xl"
                        >
                          ✨
                        </motion.div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mb-4 text-white/60 dark:text-black/60">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-white/70 dark:text-black/70 leading-relaxed text-lg">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
