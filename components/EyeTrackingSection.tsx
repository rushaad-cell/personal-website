"use client";

import { motion } from "framer-motion";
import { Eye, Brain, TrendingUp, BookOpen, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

export function EyeTrackingSection() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredPaper, setHoveredPaper] = useState<number | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 600;
    const height = 400;
    svg.attr("width", width).attr("height", height);

    // Create heatmap-like visualization with gaze points
    const data = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      intensity: Math.random(),
      size: Math.random() * 8 + 4,
    }));

    const colorScale = d3
      .scaleSequential(d3.interpolateGreys)
      .domain([0, 1]);

    // Create heatmap circles
    data.forEach((d) => {
      svg
        .append("circle")
        .attr("cx", d.x)
        .attr("cy", d.y)
        .attr("r", d.size)
        .attr("fill", colorScale(d.intensity))
        .attr("opacity", 0.4)
        .attr("class", "eye-tracking-point");
    });

    // Animate gaze path
    const path = [
      { x: 80, y: 120 },
      { x: 180, y: 180 },
      { x: 280, y: 150 },
      { x: 380, y: 220 },
      { x: 480, y: 180 },
      { x: 520, y: 250 },
    ];

    const line = d3
      .line<{ x: number; y: number }>()
      .x((d) => d.x)
      .y((d) => d.y)
      .curve(d3.curveCardinal);

    // Draw gaze path
    const pathElement = svg
      .append("path")
      .datum(path)
      .attr("fill", "none")
      .attr("stroke", "currentColor")
      .attr("stroke-width", 2)
      .attr("d", line)
      .attr("opacity", 0)
      .transition()
      .duration(2000)
      .attr("opacity", 0.6);

    // Add animated gaze points along path
    path.forEach((point, i) => {
      const circle = svg
        .append("circle")
        .attr("cx", point.x)
        .attr("cy", point.y)
        .attr("r", 0)
        .attr("fill", "currentColor")
        .attr("stroke", "currentColor")
        .attr("stroke-width", 2)
        .attr("opacity", 0.8);

      circle
        .transition()
        .delay(i * 400)
        .duration(300)
        .attr("r", 10)
        .transition()
        .duration(200)
        .attr("r", 6);
    });

    // Add fixation circles (larger gaze points)
    const fixations = [
      { x: 180, y: 180, duration: 800 },
      { x: 380, y: 220, duration: 1200 },
      { x: 520, y: 250, duration: 600 },
    ];

    fixations.forEach((fix, i) => {
      const fixation = svg
        .append("circle")
        .attr("cx", fix.x)
        .attr("cy", fix.y)
        .attr("r", 0)
        .attr("fill", "none")
        .attr("stroke", "currentColor")
        .attr("stroke-width", 1.5)
        .attr("opacity", 0.5);

      fixation
        .transition()
        .delay(i * 400 + 300)
        .duration(400)
        .attr("r", 25)
        .transition()
        .duration(200)
        .attr("opacity", 0);
    });
  }, []);

  const papers = [
    {
      title: "Visual Attention in Digital Learning Environments",
      authors: "Kidd Lab Research",
      year: "2025",
      description: "Investigating how visual features influence learning outcomes through eye-tracking analysis.",
      emoji: "👁️",
    },
    {
      title: "Computational Modeling of Gaze Patterns",
      authors: "Various Authors",
      year: "2024",
      description: "Advanced methods for analyzing and predicting visual attention patterns.",
      emoji: "🧠",
    },
    {
      title: "Eye-Tracking in Educational Media Design",
      authors: "Research Community",
      year: "2023-2025",
      description: "Best practices for using eye-tracking data to improve educational content design.",
      emoji: "📚",
    },
  ];

  return (
    <section className="min-h-screen py-24 bg-white dark:bg-black relative overflow-hidden">
      {/* Quirky Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 border-2 border-black/10 dark:border-white/10 rounded-full"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.5, 1],
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
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="text-8xl mb-6 inline-block"
          >
            👁️
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black text-black dark:text-white leading-none mb-4">
            Eye-Tracking Research
          </h1>
          <p className="text-xl text-black/60 dark:text-white/60">
            Where I stare at screens (for science)
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          {/* Interactive Visualization - Quirky Style */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: -1 }}
              className="bg-black dark:bg-white rounded-3xl p-8 relative overflow-hidden border-4 border-black/20 dark:border-white/20"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePos({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              }}
            >
              {/* Quirky Corner Decorations */}
              <motion.div
                className="absolute top-4 right-4 w-12 h-12 border-2 border-white/30 dark:border-black/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute bottom-4 left-4 w-8 h-8 bg-white/10 dark:bg-black/10 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <svg
                ref={svgRef}
                className="w-full h-full text-white dark:text-black"
                style={{ minHeight: "400px" }}
              />
              <div className="mt-6 text-center">
                <p className="font-black text-white dark:text-black mb-2 text-lg">
                  Interactive Eye-Tracking Visualization
                </p>
                <p className="text-xs text-white/60 dark:text-black/60">
                  Gaze path, fixations, and heatmap
                </p>
              </div>
              {/* Mouse follower effect */}
              <motion.div
                className="absolute pointer-events-none"
                style={{
                  left: mousePos.x - 10,
                  top: mousePos.y - 10,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              >
                <div className="w-5 h-5 rounded-full border-2 border-white/50 dark:border-black/50" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Details - Quirky Layout */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.05, x: 10 }}
              className="p-6 bg-black/5 dark:bg-white/5 rounded-2xl border-2 border-black/10 dark:border-white/10"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="text-4xl flex-shrink-0"
                >
                  🧠
                </motion.div>
                <div>
                  <h3 className="font-black text-black dark:text-white mb-2 text-xl">
                    Computational Modeling
                  </h3>
                  <p className="text-black/70 dark:text-white/70 leading-relaxed">
                    Processing and analyzing data with Python & R to identify visual features that improve learning efficacy. Collaborating with technical and research teams to interpret data and guide learning media design decisions.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, x: 10 }}
              className="p-6 bg-black/5 dark:bg-white/5 rounded-2xl border-2 border-black/10 dark:border-white/10"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="text-4xl flex-shrink-0"
                >
                  📈
                </motion.div>
                <div>
                  <h3 className="font-black text-black dark:text-white mb-2 text-xl">
                    Learning Outcomes
                  </h3>
                  <p className="text-black/70 dark:text-white/70 leading-relaxed">
                    Identifying visual features that improve learning efficacy through data-driven analysis. Processing and analyzing data with Python & R to guide learning media design decisions.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="pt-6 border-t-2 border-black/10 dark:border-white/10">
              <div className="flex flex-wrap gap-3">
                {["Python", "R", "Eyelink", "PsychoPy"].map((tool, i) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-bold"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Papers I Really Like Section - Quirky Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="text-5xl"
            >
              📚
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white">
              Papers I Really Like
            </h2>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-3xl"
            >
              ✨
            </motion.div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {papers.map((paper, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ scale: 1.05, rotate: -2, y: -5 }}
                onHoverStart={() => setHoveredPaper(i)}
                onHoverEnd={() => setHoveredPaper(null)}
                className="p-6 border-4 border-black/10 dark:border-white/10 rounded-3xl hover:border-black dark:hover:border-white transition-all bg-white dark:bg-black relative overflow-hidden group"
              >
                {/* Quirky Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 5px, currentColor 5px, currentColor 10px)`,
                  }} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      animate={{
                        rotate: hoveredPaper === i ? 360 : 0,
                        scale: hoveredPaper === i ? 1.3 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                      className="text-4xl"
                    >
                      {paper.emoji}
                    </motion.div>
                    <span className="text-xs font-bold text-black/60 dark:text-white/60 bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full">
                      {paper.year}
                    </span>
                  </div>
                  <h4 className="font-black text-black dark:text-white mb-2 text-lg leading-tight">
                    {paper.title}
                  </h4>
                  <p className="text-xs text-black/60 dark:text-white/60 mb-3 font-medium">
                    {paper.authors}
                  </p>
                  <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">
                    {paper.description}
                  </p>
                </div>

                {/* Quirky Corner Decoration */}
                {hoveredPaper === i && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 right-4 w-6 h-6 border-2 border-black dark:border-white rounded-full"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
