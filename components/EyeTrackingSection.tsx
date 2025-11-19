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
            <h1 className="text-7xl md:text-9xl font-black text-white leading-none tracking-tighter inline-block ml-2" style={{ letterSpacing: '-0.05em', fontFamily: 'var(--font-geist-mono)' }}>
              EYE-TRACKING
            </h1>
          </div>
          <p className="text-xs text-white/50 uppercase tracking-[0.2em] font-light">
            Research & Computational Modeling
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-32">
          {/* Interactive Visualization - Embed */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="border-4 border-white p-2">
              <div className="relative w-full aspect-video bg-white border-2 border-white">
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
            className="space-y-12"
          >
            <motion.div
              whileHover={{ scale: 1.01, x: 4 }}
              className="p-6"
            >
              <div className="mb-2">
                <span className="text-white/50 font-mono text-sm">{'>'}</span>
              </div>
              <div className="ml-4">
                <h3 className="font-black text-white mb-3 text-base uppercase tracking-[0.1em] font-mono">
                  COMPUTATIONAL MODELING
                </h3>
                <p className="text-white/80 leading-relaxed font-light text-sm font-mono">
                  Conducting research under Dr. Celeste Kidd investigating the cognitive mechanisms underlying children's learning using Eyelink eye-tracking and PsychoPy. Current projects examine childrens interaction with online educational media, leveraging computational models of attention, salience, and perceptual cue processing to identify features that drive engagement and measurable learning outcomes.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01, x: 4 }}
              className="p-6"
            >
              <div className="mb-2">
                <span className="text-white/50 font-mono text-sm">{'>'}</span>
              </div>
              <div className="ml-4">
                <h3 className="font-black text-white mb-3 text-base uppercase tracking-[0.1em] font-mono">
                  LEARNING OUTCOMES
                </h3>
                <p className="text-white/80 leading-relaxed font-light text-sm font-mono">
                  Identifying visual features that improve learning efficacy through data-driven analysis. Processing and analyzing data with Python & R to guide learning media design decisions.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* Papers Section - Moved to Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-12"
        >
          <div className="mb-12 text-center">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-3 leading-none tracking-tighter" style={{ letterSpacing: '-0.02em' }}>
              PAPERS I REALLY LIKE
            </h3>
            <p className="text-xs text-white/50 uppercase tracking-[0.15em] font-light">
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
                className="p-6 hover:bg-white hover:text-black transition-all block group"
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-white/60 uppercase tracking-[0.1em]">
                    {paper.year}
                  </span>
                </div>
                <h4 className="font-black text-white mb-2 text-base leading-tight group-hover:text-black group-hover:underline">
                  {paper.title}
                </h4>
                <p className="text-xs text-white/60 mb-3 uppercase tracking-[0.1em] font-light">
                  {paper.authors}
                </p>
                <p className="text-sm text-white/80 leading-relaxed font-light">
                  {paper.description}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-white/50 group-hover:text-black transition-colors">
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
