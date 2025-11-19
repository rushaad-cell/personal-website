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
      "Sentiment Analysis",
      "Literature Reviews",
      "Project Management",
      "Data Visualization",
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
      "Next.js",
      "TypeScript",
      "Qualtrics",
      "Selenium",
      "Excel",
      "Notion",
      "Jira",
      "Monday.com",
      "Git/GitHub",
      "Jupyter",
      "SPSS",
      "PsychoPy",
      "Google Suite",
    ],
  };

  return (
    <section className="min-h-screen pt-32 pb-24 bg-black relative">

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <div className="mb-4 text-center">
            <span className="text-white/50 font-mono text-sm">$</span>
            <h1 className="text-7xl md:text-9xl font-black text-white leading-none tracking-tighter inline-block ml-2 font-mono" style={{ letterSpacing: '-0.05em' }}>
              SKILLS
            </h1>
          </div>
          <p className="text-xs text-white/50 uppercase tracking-[0.2em] font-light font-mono">
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
                  <div className="mb-2">
                    <span className="text-white/50 font-mono text-sm">></span>
                    <h2 className="text-2xl md:text-3xl font-black text-white mb-2 uppercase tracking-tight inline-block ml-2 font-mono">
                      {category === "research" ? "Research & PM" : "Tools & Data"}
                    </h2>
                  </div>
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
                      className="px-4 py-2 bg-white text-black text-xs font-black uppercase tracking-widest cursor-default border-2 border-white font-mono"
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
