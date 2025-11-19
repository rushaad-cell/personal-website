"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Eye, Brain, TrendingUp, BookOpen, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

export function EyeTrackingSection() {
  const t = useTranslations("projects.eyeTracking");
  const svgRef = useRef<SVGSVGElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

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
    <section id="eye-tracking" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Eye className="w-6 h-6 text-black dark:text-white" />
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
              {t("title")}
            </h2>
          </div>
          <p className="text-lg text-black/70 dark:text-white/70 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Interactive Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black dark:bg-white rounded-lg p-8 relative overflow-hidden"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              });
            }}
          >
            <svg
              ref={svgRef}
              className="w-full h-full text-white dark:text-black"
              style={{ minHeight: "400px" }}
            />
            <div className="mt-4 text-sm text-white dark:text-black text-center">
              <p className="font-medium mb-1">Interactive Eye-Tracking Data Visualization</p>
              <p className="text-xs opacity-70">Gaze path, fixations, and heatmap</p>
            </div>
            {/* Mouse follower effect */}
            <motion.div
              className="absolute pointer-events-none"
              style={{
                left: mousePos.x,
                top: mousePos.y,
                x: -10,
                y: -10,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-5 h-5 rounded-full border-2 border-white dark:border-black opacity-50" />
            </motion.div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Brain className="w-6 h-6 text-black dark:text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-black dark:text-white mb-2">
                    Computational Modeling
                  </h3>
                  <p className="text-black/70 dark:text-white/70">
                    {t("details")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-black dark:text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-black dark:text-white mb-2">
                    Learning Outcomes
                  </h3>
                  <p className="text-black/70 dark:text-white/70">
                    Identifying visual features that improve learning efficacy
                    through data-driven analysis. Processing and analyzing data with Python & R to guide learning media design decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-black/10 dark:border-white/10">
              <p className="text-sm text-black/60 dark:text-white/60 mb-2">
                <strong className="text-black dark:text-white">Tools:</strong>{" "}
                Python, R, Eyelink, PsychoPy
              </p>
              <p className="text-sm text-black/60 dark:text-white/60">
                <strong className="text-black dark:text-white">Location:</strong>{" "}
                Kidd Lab, UC Berkeley
              </p>
            </div>
          </motion.div>
        </div>

        {/* Papers I Really Like Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-6 h-6 text-black dark:text-white" />
            <h3 className="text-2xl font-bold text-black dark:text-white">
              Papers I Really Like
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {papers.map((paper, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="p-6 border border-black/10 dark:border-white/10 rounded-lg hover:border-black dark:hover:border-white transition-all bg-white dark:bg-black"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-medium text-black/60 dark:text-white/60">
                    {paper.year}
                  </span>
                </div>
                <h4 className="font-semibold text-black dark:text-white mb-2 text-sm">
                  {paper.title}
                </h4>
                <p className="text-xs text-black/60 dark:text-white/60 mb-3">
                  {paper.authors}
                </p>
                <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">
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
