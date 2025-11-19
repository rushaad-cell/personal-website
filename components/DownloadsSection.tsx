"use client";

import { motion } from "framer-motion";
import { Download, FileText, ExternalLink } from "lucide-react";
import { useState } from "react";

export function DownloadsSection() {
  const [hoveredResource, setHoveredResource] = useState<number | null>(null);

  const resources = [
    {
      title: "Download Resume",
      emoji: "📄",
      url: "/resume.pdf",
      description: "My full resume in PDF format",
    },
    {
      title: "Research Poster",
      emoji: "📊",
      url: "https://drive.google.com/file/d/1oH3f7ROARCjpfzpnnlPvG7ROFHsV_lSB/view?usp=sharing",
      description: "View on Google Drive",
      external: true,
    },
  ];

  return (
    <section className="py-24 bg-black dark:bg-white relative overflow-hidden">
      {/* Quirky Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/5 dark:bg-black/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="text-6xl mb-4 inline-block"
          >
            📦
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-white dark:text-black mb-2">
            Resources
          </h2>
          <p className="text-lg text-white/60 dark:text-black/60">
            Things you can download (or view)
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource, i) => (
            <motion.a
              key={resource.title}
              href={resource.url}
              target={resource.external ? "_blank" : undefined}
              rel={resource.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, rotate: -2, y: -5 }}
              onHoverStart={() => setHoveredResource(i)}
              onHoverEnd={() => setHoveredResource(null)}
              className="relative p-8 bg-white dark:bg-black rounded-3xl border-4 border-white/20 dark:border-black/20 hover:border-white dark:hover:border-black transition-all group overflow-hidden"
            >
              {/* Quirky Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 20px)`,
                }} />
              </div>

              <div className="relative z-10 flex items-center gap-6">
                <motion.div
                  animate={{
                    rotate: hoveredResource === i ? 360 : 0,
                    scale: hoveredResource === i ? 1.3 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl flex-shrink-0"
                >
                  {resource.emoji}
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-black text-white dark:text-black mb-2 text-xl">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-white/60 dark:text-black/60">
                    {resource.description}
                  </p>
                </div>
                <motion.div
                  animate={{
                    x: hoveredResource === i ? 5 : 0,
                    y: hoveredResource === i ? -5 : 0,
                  }}
                >
                  {resource.external ? (
                    <ExternalLink className="w-6 h-6 text-white/60 dark:text-black/60 group-hover:text-white dark:group-hover:text-black transition-colors" />
                  ) : (
                    <Download className="w-6 h-6 text-white/60 dark:text-black/60 group-hover:text-white dark:group-hover:text-black transition-colors" />
                  )}
                </motion.div>
              </div>

              {/* Quirky Corner Decoration */}
              {hoveredResource === i && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-4 right-4 w-8 h-8 border-2 border-white dark:border-black rounded-full"
                />
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
