"use client";

import { motion } from "framer-motion";
import { ExternalLink, Accessibility, Brain, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Accessibility Analysis & Dashboard",
      emoji: "♿",
      description: "Automated testing pipeline evaluating California county mental health websites for WCAG compliance.",
      details: "Used ANOVA and t-tests to identify how visual website complexity correlates with accessibility issues. Developed an interactive React + D3.js dashboard visualizing recommendations for inclusive design.",
      tech: ["React", "D3.js", "Selenium", "Python", "ANOVA"],
      link: "https://camentalhealthaccess.com/",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Memory Laboratory Research",
      emoji: "🧠",
      description: "Experiments on how digital information sharing influences autobiographical memory distortion.",
      details: "Built and deployed Qualtrics studies; ran sentiment and regression analyses; conducted literature reviews. Presented first-author findings at the Western Psychological Association Conference (2023).",
      tech: ["Qualtrics", "R", "Sentiment Analysis", "Regression"],
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section className="min-h-screen py-24 bg-black dark:bg-white relative overflow-hidden">
      {/* Quirky Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 dark:bg-black/20 rounded-full"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
            }}
            animate={{
              y: typeof window !== 'undefined' ? [null, Math.random() * window.innerHeight] : 0,
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-6xl"
            >
              ✨
            </motion.div>
            <div>
              <h1 className="text-6xl md:text-8xl font-black text-white dark:text-black leading-none">
                Projects
              </h1>
              <p className="text-lg text-white/60 dark:text-black/60 mt-2">
                Things I've built (and sometimes broken)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quirky Project Cards */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative group"
            >
              <div className="grid md:grid-cols-12 gap-8 items-center">
                {/* Left side - Content (7 cols) */}
                <div className="md:col-span-7 space-y-6">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      className="text-6xl flex-shrink-0"
                    >
                      {project.emoji}
                    </motion.div>
                    <div className="flex-1">
                      <h2 className="text-4xl md:text-5xl font-black text-white dark:text-black mb-3 leading-tight">
                        {project.title}
                      </h2>
                      <p className="text-xl text-white/80 dark:text-black/80 mb-4">
                        {project.description}
                      </p>
                      <p className="text-white/70 dark:text-black/70 leading-relaxed">
                        {project.details}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack - Quirky Pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + i * 0.05 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="px-4 py-2 bg-white/10 dark:bg-black/10 text-white dark:text-black rounded-full text-sm font-medium border border-white/20 dark:border-black/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 10 }}
                      className="inline-flex items-center gap-2 text-white dark:text-black font-bold text-lg group"
                    >
                      View Project
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.a>
                  )}
                </div>

                {/* Right side - Visual (5 cols) */}
                <motion.div
                  className="md:col-span-5 relative"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 dark:from-black/10 dark:to-black/5 rounded-3xl border-2 border-white/20 dark:border-black/20 flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      animate={{
                        rotate: hoveredProject === index ? 360 : 0,
                        scale: hoveredProject === index ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                      className="text-8xl"
                    >
                      {project.emoji}
                    </motion.div>
                    {/* Quirky Corner Decoration */}
                    <motion.div
                      className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 dark:border-black/30 rounded-full"
                      animate={{
                        rotate: hoveredProject === index ? 180 : 0,
                      }}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Quirky Connecting Line */}
              {index < projects.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="w-0.5 h-16 bg-white/20 dark:bg-black/20 mx-auto mt-12"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
