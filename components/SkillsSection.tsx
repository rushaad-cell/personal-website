"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function SkillsSection() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const skills = {
    research: [
      "Experimental Design",
      "Behavioral Data Analysis",
      "Mixed-Methods",
      "Eye-Tracking (Eyelink, PsychoPy)",
      "Statistical Modeling (ANOVA, Regression)",
      "Workflow & System Design",
      "UX Testing",
      "UX Research",
    ],
    tools: [
      "Python (pandas, numpy, scikit-learn, statsmodels)",
      "R (tidyverse, ggplot2, shiny, lme4)",
      "SQL",
      "Tableau",
      "ArcGIS Pro",
      "Quarto",
      "D3.js",
      "React",
      "Qualtrics",
      "Notion",
      "Jira",
      "Monday.com",
      "Git/GitHub",
      "Jupyter",
      "SPSS",
      "PsychoPy",
    ],
  };

  return (
    <section className="min-h-screen py-32 bg-white dark:bg-black relative overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)`,
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <div className="flex items-baseline justify-center gap-6 mb-4">
            <div className="flex-1 h-px bg-black/10 dark:bg-white/10"></div>
            <h1 className="text-7xl md:text-9xl font-black text-black dark:text-white leading-none tracking-tight">
              SKILLS
            </h1>
            <div className="flex-1 h-px bg-black/10 dark:bg-white/10"></div>
          </div>
          <p className="text-sm text-black/40 dark:text-white/40 uppercase tracking-widest font-light">
            Research & Technical Tools
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.15 }}
              onHoverStart={() => setHoveredCategory(category)}
              onHoverEnd={() => setHoveredCategory(null)}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="space-y-8"
              >
                {/* Category Header */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-black dark:text-white mb-2 uppercase tracking-tight">
                    {category === "research" ? "Research & PM" : "Tools & Data"}
                  </h2>
                  <div className="w-16 h-px bg-black dark:bg-white"></div>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: catIndex * 0.15 + i * 0.02,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                      }}
                      className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-xs font-medium uppercase tracking-widest cursor-default border-2 border-black dark:border-white"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
