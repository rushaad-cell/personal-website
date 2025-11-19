"use client";

import { motion } from "framer-motion";
import { Brain, TrendingUp, BookOpen } from "lucide-react";
import { useState } from "react";

export function EyeTrackingSection() {
  const [hoveredPaper, setHoveredPaper] = useState<number | null>(null);

  const papers = [
    {
      title: "Visual Attention in Digital Learning Environments",
      authors: "Kidd Lab Research",
      year: "2025",
      description: "Investigating how visual features influence learning outcomes through eye-tracking analysis.",
    },
    {
      title: "Computational Modeling of Gaze Patterns",
      authors: "Various Authors",
      year: "2024",
      description: "Advanced methods for analyzing and predicting visual attention patterns.",
    },
    {
      title: "Eye-Tracking in Educational Media Design",
      authors: "Research Community",
      year: "2023-2025",
      description: "Best practices for using eye-tracking data to improve educational content design.",
    },
  ];

  return (
    <section className="min-h-screen py-32 bg-white dark:bg-black relative overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 20px)`,
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
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-black dark:bg-white border-2 border-black/20 dark:border-white/20 p-8 relative overflow-hidden"
            >
              {/* Embed placeholder - replace with actual eye-tracking visualization embed */}
              <div className="aspect-video bg-black/10 dark:bg-white/10 flex items-center justify-center relative">
                <iframe
                  src="https://observablehq.com/embed/@d3/eye-tracking-heatmap?cell=*"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  title="Eye-tracking visualization"
                  className="w-full h-full"
                />
                {/* Fallback if embed doesn't load */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center p-8 opacity-0 hover:opacity-100 transition-opacity">
                    <p className="text-xs text-white/30 dark:text-black/30 uppercase tracking-widest mb-2 font-light">
                      Eye-Tracking Data Visualization
                    </p>
                    <p className="text-sm text-white/50 dark:text-black/50 font-light">
                      Replace with your actual eye-tracking embed
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="font-black text-white dark:text-black mb-2 text-sm uppercase tracking-widest">
                  Interactive Visualization
                </p>
                <p className="text-xs text-white/50 dark:text-black/50 font-light">
                  Gaze path, fixations, and heatmap
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.01, x: 4 }}
              className="p-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10"
            >
              <div className="flex items-start gap-4 mb-4">
                <Brain className="w-5 h-5 text-black dark:text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-black text-black dark:text-white mb-2 text-lg uppercase tracking-tight">
                    Computational Modeling
                  </h3>
                  <p className="text-black/60 dark:text-white/60 leading-relaxed font-light">
                    Processing and analyzing data with Python & R to identify visual features that improve learning efficacy. Collaborating with technical and research teams to interpret data and guide learning media design decisions.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01, x: 4 }}
              className="p-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10"
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

        {/* Papers Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <BookOpen className="w-5 h-5 text-black dark:text-white" />
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white uppercase tracking-tight">
              Papers I Really Like
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {papers.map((paper, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                onHoverStart={() => setHoveredPaper(i)}
                onHoverEnd={() => setHoveredPaper(null)}
                className="p-6 border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-all bg-white dark:bg-black relative"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs text-black/40 dark:text-white/40 uppercase tracking-widest font-light">
                    {paper.year}
                  </span>
                </div>
                <h4 className="font-black text-black dark:text-white mb-2 text-sm uppercase tracking-tight leading-tight">
                  {paper.title}
                </h4>
                <p className="text-xs text-black/50 dark:text-white/50 font-light mb-3">
                  {paper.authors}
                </p>
                <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed font-light">
                  {paper.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
