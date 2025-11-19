"use client";

import { motion } from "framer-motion";
import { User, Sparkles, Brain, TrendingUp } from "lucide-react";
import { useState } from "react";

const quirkyTraits = [
  { icon: "🧠", label: "Data Wrangler", desc: "I speak Python & R fluently" },
  { icon: "🎨", label: "Design Thinker", desc: "UX is my second language" },
  { icon: "🔬", label: "Experimenter", desc: "Let's try it and see" },
  { icon: "📊", label: "Storyteller", desc: "Data tells stories, I translate" },
];

export function AboutSection() {
  const [hoveredTrait, setHoveredTrait] = useState<number | null>(null);

  return (
    <section className="min-h-screen py-24 bg-white dark:bg-black relative overflow-hidden">
      {/* Quirky Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 border-2 border-black/5 dark:border-white/5 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-32 h-32 bg-black/5 dark:bg-white/5 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Quirky Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="text-6xl"
            >
              👋
            </motion.div>
            <div>
              <h1 className="text-6xl md:text-8xl font-black text-black dark:text-white leading-none">
                About Me
              </h1>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-16 h-1 bg-black dark:bg-white"></div>
                <span className="text-sm text-black/60 dark:text-white/60">but make it quirky</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content - Quirky Layout */}
        <div className="grid md:grid-cols-5 gap-8 mb-16">
          {/* Photo Section - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="relative group">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.02 }}
                className="aspect-square bg-gradient-to-br from-black via-black to-white dark:from-white dark:via-white dark:to-black rounded-3xl p-1"
              >
                <div className="w-full h-full bg-white dark:bg-black rounded-3xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-8xl mb-4"
                    >
                      👤
                    </motion.div>
                    <p className="text-sm text-black/60 dark:text-white/60 font-medium">
                      Add your photo here
                    </p>
                  </div>
                </div>
              </motion.div>
              {/* Quirky Decoration */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center text-2xl"
                whileHover={{ rotate: 180, scale: 1.2 }}
              >
                ✨
              </motion.div>
            </div>
          </motion.div>

          {/* Bio Section - Takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3 space-y-6"
          >
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl font-bold text-black dark:text-white leading-tight">
                Cognitive Science student at UC Berkeley
              </p>
              <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed">
                Double-minoring in <span className="font-bold">Data Science</span> & <span className="font-bold">Statistics</span>, specializing in product research and data-driven strategy.
              </p>
              <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed">
                Experienced in experimental design, data analysis, and project management across academic and technical environments. Part data-wrangler, part design thinker, and part <span className="italic font-bold">'let's try it and see'</span>, I work to bridge behavioral sciences and product thinking to translate human data into insights for innovation.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Quirky Traits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {quirkyTraits.map((trait, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              onHoverStart={() => setHoveredTrait(i)}
              onHoverEnd={() => setHoveredTrait(null)}
              className="relative p-6 bg-black/5 dark:bg-white/5 rounded-2xl border-2 border-transparent hover:border-black dark:hover:border-white transition-all cursor-pointer group"
            >
              <div className="text-4xl mb-3">{trait.icon}</div>
              <h3 className="font-bold text-black dark:text-white mb-1">{trait.label}</h3>
              <p className="text-sm text-black/60 dark:text-white/60">{trait.desc}</p>
              {hoveredTrait === i && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-black dark:bg-white rounded-full"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Quirky Education Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex flex-wrap gap-3 justify-center"
        >
          {["UC Berkeley", "Cognitive Science", "Data Science", "Statistics"].map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + i * 0.1, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold text-sm"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
