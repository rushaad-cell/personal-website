"use client";

import { motion } from "framer-motion";
import { Brain, TrendingUp, BookOpen, ExternalLink } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function EyeTrackingSection() {
  const [hoveredPaper, setHoveredPaper] = useState<number | null>(null);

  const papers = [
    {
      title: "Bright shiny garbage: Video content shown to low-income children is characterized by higher flicker",
      authors: "Shepherd, Sarah Stolp; Yang, Huiwen Alex; Kidd, Celeste",
      year: "2025",
      description: "Research examining video content characteristics shown to low-income children, focusing on flicker patterns and their implications.",
      url: "https://escholarship.org/uc/item/6wk8j6fv",
    },
    {
      title: "Using the Internet to access information inflates future use of the Internet to access other information",
      authors: "Storm, B. C., Stone, S. M., & Benjamin, A. S.",
      year: "2016",
      description: "Research showing that using the Internet to retrieve information alters a person's propensity to use the Internet to retrieve other information.",
      url: "https://labs.psychology.illinois.edu/~asbenjam/pubs/StormEtAlInPress.pdf",
    },
    {
      title: "Audience-tuning effects on memory: the role of shared reality",
      authors: "Various Authors",
      year: "2005",
      description: "Research on how audience-tuning influences memory and the mechanisms of shared reality in communication.",
      url: "https://pubmed.ncbi.nlm.nih.gov/16248713/",
    },
  ];

  return (
    <section className="min-h-screen pt-32 pb-24 bg-white dark:bg-black relative">

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
              EYE-TRACKING
            </h1>
            <div className="flex-1 h-px bg-black/10 dark:bg-white/10"></div>
          </div>
          <p className="text-sm text-black/40 dark:text-white/40 uppercase tracking-widest font-light">
            Research & Computational Modeling
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          {/* Interactive Visualization - Embed */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="border-2 border-black dark:border-white p-4">
              <div className="relative w-full aspect-video bg-white dark:bg-black">
                <Image
                  src="/eye-tracking.jpg"
                  alt="Eye-tracking visualization"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.01, x: 4 }}
              className="p-6 border border-black/20 dark:border-white/20"
            >
              <div className="flex items-start gap-4 mb-4">
                <Brain className="w-5 h-5 text-black dark:text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-black text-black dark:text-white mb-2 text-lg uppercase tracking-tight">
                    Computational Modeling
                  </h3>
                  <p className="text-black/60 dark:text-white/60 leading-relaxed font-light">
                    Conducting research under Dr. Celeste Kidd investigating the cognitive mechanisms underlying children's learning using Eyelink eye-tracking and PsychoPy. Current projects examine childrens interaction with online educational media, leveraging computational models of attention, salience, and perceptual cue processing to identify features that drive engagement and measurable learning outcomes.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01, x: 4 }}
              className="p-6 border border-black/20 dark:border-white/20"
            >
              <div className="flex items-start gap-4">
                <TrendingUp className="w-5 h-5 text-black dark:text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-black text-black dark:text-white mb-2 text-lg uppercase tracking-tight">
                    Learning Outcomes
                  </h3>
                  <p className="text-black/60 dark:text-white/60 leading-relaxed font-light">
                    Identifying visual features that improve learning efficacy through data-driven analysis. Processing and analyzing data with Python & R to guide learning media design decisions.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="pt-6 border-t border-black/10 dark:border-white/10">
              <div className="flex flex-wrap gap-2">
                {["Python", "R", "Eyelink", "PsychoPy"].map((tool, i) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-xs font-medium uppercase tracking-widest border-2 border-black dark:border-white"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Papers Section - Moved to Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-32 pt-24 border-t border-black/20 dark:border-white/20"
        >
          <div className="mb-12 text-center">
            <h3 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-3 leading-none tracking-tight">
              PAPERS I REALLY LIKE
            </h3>
            <p className="text-sm text-black/40 dark:text-white/40 uppercase tracking-widest font-light">
              Key Research & Insights
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {papers.map((paper, i) => (
              <motion.a
                key={i}
                href={paper.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="p-6 border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white transition-all block group"
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-black/60 dark:text-white/60 uppercase tracking-widest">
                    {paper.year}
                  </span>
                </div>
                <h4 className="font-black text-black dark:text-white mb-2 text-lg leading-tight group-hover:underline">
                  {paper.title}
                </h4>
                <p className="text-xs text-black/60 dark:text-white/60 mb-3 uppercase tracking-widest font-light">
                  {paper.authors}
                </p>
                <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed font-light">
                  {paper.description}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-black/50 dark:text-white/50 group-hover:text-black dark:group-hover:text-white transition-colors">
                  <ExternalLink className="w-3 h-3" />
                  <span>Read Paper</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
