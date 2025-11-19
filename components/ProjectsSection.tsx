"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Accessibility Analysis & Dashboard",
      description: "Automated testing pipeline evaluating California county mental health websites for WCAG compliance.",
      details: "Used ANOVA and t-tests to identify how visual website complexity correlates with accessibility issues. Developed an interactive React + D3.js dashboard visualizing recommendations for inclusive design.",
      tech: ["React", "D3.js", "Selenium", "Python", "ANOVA"],
      link: "https://camentalhealthaccess.com/",
    },
    {
      title: "Memory Laboratory Research",
      description: "Experiments on how digital information sharing influences autobiographical memory distortion.",
      details: "Built and deployed Qualtrics studies; ran sentiment and regression analyses; conducted literature reviews. Presented first-author findings at the Western Psychological Association Conference (2023).",
      tech: ["Qualtrics", "R", "Sentiment Analysis", "Regression"],
    },
  ];

  return (
    <section className="min-h-screen pt-32 pb-24 bg-black dark:bg-white relative overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 20px)`,
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-20"
        >
          <div className="flex items-baseline gap-6 mb-4">
            <h1 className="text-7xl md:text-9xl font-black text-white dark:text-black leading-none tracking-tight">
              PROJECTS
            </h1>
            <div className="flex-1 h-px bg-white/20 dark:bg-black/20"></div>
          </div>
          <p className="text-sm text-white/40 dark:text-black/40 uppercase tracking-widest font-light">
            Research & Development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="grid md:grid-cols-12 gap-12"
            >
              {/* Left: Content (7 cols) */}
              <div className="md:col-span-7 space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-white dark:text-black mb-4 leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-xl text-white/70 dark:text-black/70 font-light mb-4">
                    {project.description}
                  </p>
                  <p className="text-lg text-white/60 dark:text-black/60 leading-relaxed font-light">
                    {project.details}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.15 + i * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-white/10 dark:bg-black/10 text-white dark:text-black text-xs font-medium uppercase tracking-widest border border-white/20 dark:border-black/20"
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
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2 text-white dark:text-black font-medium text-sm uppercase tracking-widest hover:opacity-60 transition-opacity"
                  >
                    View Project
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.a>
                )}
              </div>

              {/* Right: Visual (5 cols) */}
              <motion.div
                className="md:col-span-5 relative"
                whileHover={{ scale: 1.02 }}
              >
                {index === 0 ? (
                  <div className="aspect-square bg-white/5 dark:bg-black/5 border border-white/10 dark:border-black/10 relative overflow-hidden group">
                    <a
                      href="https://camentalhealthaccess.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <iframe
                        src="https://camentalhealthaccess.com/"
                        className="w-full h-full border-0 pointer-events-none"
                        title="California Mental Health Website Accessibility Audit"
                      />
                      <div className="absolute inset-0 bg-transparent hover:bg-white/5 dark:hover:bg-black/5 transition-colors cursor-pointer flex items-center justify-center">
                        <motion.div
                          className="absolute inset-0 border-2 border-white dark:border-black opacity-0 group-hover:opacity-20 transition-opacity"
                        />
                        <span className="text-xs text-white/60 dark:text-black/60 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                          Click to open in new tab
                        </span>
                      </div>
                    </a>
                  </div>
                ) : (
                  <div className="aspect-square bg-white/5 dark:bg-black/5 border border-white/10 dark:border-black/10 flex items-center justify-center relative overflow-hidden group">
                    <div className="text-center p-8">
                      <p className="text-xs text-white/30 dark:text-black/30 uppercase tracking-widest mb-2">
                        Project Preview
                      </p>
                      <p className="text-sm text-white/50 dark:text-black/50 font-light">
                        Add screenshot or visualization here
                      </p>
                    </div>
                    <motion.div
                      className="absolute inset-0 border-2 border-white dark:border-black opacity-0 group-hover:opacity-20 transition-opacity"
                    />
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
