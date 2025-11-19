"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Sparkles } from "lucide-react";

export function EducationSection() {
  return (
    <section className="min-h-screen py-24 bg-black dark:bg-white relative overflow-hidden">
      {/* Quirky Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 dark:bg-black/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-8 relative z-10">
        {/* Quirky Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="text-8xl mb-6 inline-block"
          >
            🎓
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black text-white dark:text-black leading-none mb-4">
            Education
          </h1>
          <p className="text-xl text-white/60 dark:text-black/60">
            Where I learned to think (and unlearn)
          </p>
        </motion.div>

        {/* Quirky Education Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.02, rotate: 1 }}
          className="bg-white dark:bg-black rounded-3xl p-12 border-4 border-white/20 dark:border-black/20 relative overflow-hidden"
        >
          {/* Quirky Corner Elements */}
          <motion.div
            className="absolute top-4 right-4 text-4xl"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            ✨
          </motion.div>
          <motion.div
            className="absolute bottom-4 left-4 w-20 h-20 border-2 border-white/20 dark:border-black/20 rounded-full"
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />

          <div className="flex items-start gap-8 mb-8">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              className="w-24 h-24 rounded-full bg-black dark:bg-white flex items-center justify-center flex-shrink-0 text-5xl"
            >
              🎓
            </motion.div>
            <div className="flex-1">
              <h2 className="text-4xl font-black text-white dark:text-black mb-3">
                B.A in Cognitive Science
              </h2>
              <p className="text-2xl text-white/80 dark:text-black/80 font-bold mb-2">
                University of California, Berkeley
              </p>
              <div className="flex items-center gap-4 text-white/60 dark:text-black/60 mb-6">
                <span>📍 Berkeley, CA</span>
                <span>•</span>
                <span>2023-2027</span>
              </div>

              {/* Quirky Minors */}
              <div className="flex flex-wrap gap-3 mb-8">
                {["Cognitive Science", "Data Science", "Statistics"].map((minor, i) => (
                  <motion.span
                    key={minor}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold text-sm"
                  >
                    {minor}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Specialization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="pt-8 border-t-2 border-white/10 dark:border-black/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-white dark:text-black" />
              <h3 className="text-2xl font-black text-white dark:text-black">
                Specializations
              </h3>
            </div>
            <p className="text-lg text-white/70 dark:text-black/70 leading-relaxed">
              Specializing in product research and data-driven strategy. Experienced in experimental design, data analysis, and project management across academic and technical environments.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
