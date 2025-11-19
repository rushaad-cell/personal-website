"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

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
      image: "/memory-research.jpg",
    },
  ];

  return (
    <section className="min-h-screen pt-32 pb-24 bg-black relative">

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Edgy Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-16"
        >
          <div className="mb-4">
            <span className="text-white/50 font-mono text-sm">$</span>
            <h1 className="text-7xl md:text-9xl font-black text-white leading-none tracking-tighter inline-block ml-2" style={{ letterSpacing: '-0.05em', fontFamily: 'var(--font-geist-mono)' }}>
              PROJECTS
            </h1>
          </div>
          <p className="text-xs text-white/50 uppercase tracking-[0.2em] font-light">
            RESEARCH & DEVELOPMENT
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="grid md:grid-cols-12 gap-12 mb-16 last:mb-0"
            >
              {/* Left: Content (7 cols) */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <div className="mb-2">
                    <span className="text-white/50 font-mono text-sm">{'>'}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight ml-4 font-mono" style={{ letterSpacing: '-0.02em' }}>
                    {project.title}
                  </h2>
                  <p className="text-base text-white/80 font-light mb-4">
                    {project.description}
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed font-light">
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
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 bg-white text-black text-xs font-black uppercase tracking-[0.1em] font-mono"
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
                    whileHover={{ x: 2, y: -2 }}
                    className="inline-flex items-center gap-2 text-white font-medium text-xs uppercase tracking-[0.15em] hover:text-white/70 transition-colors px-4 py-2 hover:bg-white hover:text-black font-mono"
                  >
                    VIEW PROJECT
                    <ArrowUpRight className="w-3 h-3" />
                  </motion.a>
                )}
              </div>

              {/* Right: Visual (5 cols) */}
              <motion.div
                className="md:col-span-5 relative"
                whileHover={{ scale: 1.02 }}
              >
                {index === 0 ? (
                  <div className="aspect-square border-4 border-white relative overflow-hidden p-2">
                    <div className="w-full h-full border-2 border-white relative">
                      <iframe
                        src="https://camentalhealthaccess.com/"
                        className="w-full h-full border-0"
                        title="California Mental Health Website Accessibility Audit"
                        allow="fullscreen"
                      />
                    </div>
                  </div>
                ) : project.image ? (
                  <div className="aspect-square border-4 border-white relative overflow-hidden p-2">
                    <div className="w-full h-full border-2 border-white relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                ) : (
                  <div className="aspect-square border-4 border-white flex items-center justify-center relative overflow-hidden p-2">
                    <div className="w-full h-full border-2 border-white flex items-center justify-center">
                      <div className="text-center p-8">
                        <p className="text-xs text-white/50 uppercase tracking-[0.15em] mb-2 font-light font-mono">
                          PROJECT PREVIEW
                        </p>
                        <p className="text-sm text-white/70 font-light font-mono">
                          Add screenshot or visualization here
                        </p>
                      </div>
                    </div>
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
