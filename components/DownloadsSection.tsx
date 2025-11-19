"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import { useState } from "react";

export function DownloadsSection() {
  const [hoveredResource, setHoveredResource] = useState<number | null>(null);

  const resources = [
    {
      title: "Download Resume",
      url: "/resume.pdf",
      description: "My full resume in PDF format",
    },
    {
      title: "Research Poster",
      url: "https://drive.google.com/file/d/1oH3f7ROARCjpfzpnnlPvG7ROFHsV_lSB/view?usp=sharing",
      description: "View on Google Drive",
      external: true,
    },
  ];

  return (
    <section className="pt-32 pb-24 bg-black dark:bg-white relative overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)`,
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-baseline justify-center gap-6 mb-4">
            <div className="flex-1 h-px bg-white/10 dark:bg-black/10"></div>
            <h2 className="text-5xl md:text-6xl font-black text-white dark:text-black leading-none tracking-tight">
              RESOURCES
            </h2>
            <div className="flex-1 h-px bg-white/10 dark:bg-black/10"></div>
          </div>
          <p className="text-sm text-white/40 dark:text-black/40 uppercase tracking-widest font-light">
            Downloads & Links
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
              whileHover={{ scale: 1.02, y: -2 }}
              onHoverStart={() => setHoveredResource(i)}
              onHoverEnd={() => setHoveredResource(null)}
              className="relative p-8 bg-white dark:bg-black border-2 border-white/20 dark:border-black/20 hover:border-white dark:hover:border-black transition-all group"
            >
              <div className="flex items-center gap-6">
                <div className="flex-1">
                  <h3 className="font-black text-white dark:text-black mb-2 text-xl uppercase tracking-tight">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-white/50 dark:text-black/50 font-light">
                    {resource.description}
                  </p>
                </div>
                <motion.div
                  animate={{
                    x: hoveredResource === i ? 4 : 0,
                  }}
                >
                  {resource.external ? (
                    <ExternalLink className="w-5 h-5 text-white/40 dark:text-black/40 group-hover:text-white dark:group-hover:text-black transition-colors" />
                  ) : (
                    <Download className="w-5 h-5 text-white/40 dark:text-black/40 group-hover:text-white dark:group-hover:text-black transition-colors" />
                  )}
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
