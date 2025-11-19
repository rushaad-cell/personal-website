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
    <section className="min-h-screen py-24 bg-white dark:bg-black relative overflow-hidden">
      {/* Quirky Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-black/10 dark:bg-white/10 rounded-full"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
            }}
            animate={{
              y: typeof window !== 'undefined' ? [null, Math.random() * window.innerHeight] : 0,
              x: typeof window !== 'undefined' ? [null, Math.random() * window.innerWidth] : 0,
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Quirky Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-8xl mb-6 inline-block"
          >
            ⚡
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black text-black dark:text-white leading-none mb-4">
            Skills & Tools
          </h1>
          <p className="text-xl text-black/60 dark:text-white/60">
            Things I know (and things I'm learning)
          </p>
        </motion.div>

        {/* Quirky Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.2 }}
              onHoverStart={() => setHoveredCategory(category)}
              onHoverEnd={() => setHoveredCategory(null)}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotate: -1 }}
                className="bg-black/5 dark:bg-white/5 rounded-3xl p-8 border-2 border-black/10 dark:border-white/10 relative overflow-hidden"
              >
                {/* Quirky Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    animate={{
                      rotate: hoveredCategory === category ? 360 : 0,
                      scale: hoveredCategory === category ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl"
                  >
                    {category === "research" ? "🔬" : "💻"}
                  </motion.div>
                  <h2 className="text-3xl font-black text-black dark:text-white">
                    {category === "research" ? "Research & PM" : "Tools & Data"}
                  </h2>
                </div>

                {/* Quirky Skills List */}
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: catIndex * 0.2 + i * 0.03,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: Math.random() * 10 - 5,
                        zIndex: 10,
                      }}
                      className="px-5 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-bold cursor-default relative"
                    >
                      {skill}
                      {hoveredCategory === category && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -right-1 text-xs"
                        >
                          ✨
                        </motion.span>
                      )}
                    </motion.span>
                  ))}
                </div>

                {/* Quirky Corner Decoration */}
                <motion.div
                  className="absolute top-4 right-4 w-16 h-16 border-2 border-black/20 dark:border-white/20 rounded-full"
                  animate={{
                    rotate: hoveredCategory === category ? 180 : 0,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
