"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const traits = [
  { label: "Data Wrangler", desc: "Python & R proficiency" },
  { label: "Design Thinker", desc: "UX research & strategy" },
  { label: "Experimenter", desc: "Let's try it and see" },
  { label: "Storyteller", desc: "Data tells stories, I translate" },
];

export function AboutSection() {
  const [hoveredTrait, setHoveredTrait] = useState<number | null>(null);

  return (
    <section className="min-h-screen pt-32 pb-24 bg-white dark:bg-black relative">

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-baseline gap-6 mb-4">
            <h1 className="text-7xl md:text-9xl font-black text-black dark:text-white leading-none tracking-tight">
              ABOUT
            </h1>
            <div className="flex-1 h-px bg-black/10 dark:bg-white/10"></div>
          </div>
          <p className="text-sm text-black/40 dark:text-white/40 uppercase tracking-widest font-light">
            Cognitive Science × Data Science × Product Strategy
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-5 gap-12 mb-20">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="aspect-square bg-black dark:bg-white border-2 border-black dark:border-white overflow-hidden relative"
              >
                <Image
                  src="/profile-photo.jpg"
                  alt="Rushaad Mistry"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3 space-y-12"
          >
            <div className="space-y-6">
              <p className="text-lg text-black/60 dark:text-white/60 leading-relaxed font-light">
                Cognitive Science student at UC Berkeley, double-minoring in <span className="font-medium">Data Science</span> & <span className="font-medium">Statistics</span>, specializing in product research and data-driven strategy. Experienced in experimental design, data analysis, and project management across academic and technical environments. Part data-wrangler, part design thinker, and part <span className="italic">'let's try it and see'</span>, I work to bridge behavioral sciences and product thinking to translate human data into insights for innovation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
