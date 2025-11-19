"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export function EducationSection() {
  return (
    <section className="min-h-screen pt-40 pb-32 bg-black dark:bg-white relative overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)`,
        }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <div className="flex items-baseline justify-center gap-6 mb-4">
            <div className="flex-1 h-px bg-white/10 dark:bg-black/10"></div>
            <h1 className="text-7xl md:text-9xl font-black text-white dark:text-black leading-none tracking-tight">
              EDUCATION
            </h1>
            <div className="flex-1 h-px bg-white/10 dark:bg-black/10"></div>
          </div>
          <p className="text-sm text-white/40 dark:text-black/40 uppercase tracking-widest font-light">
            Academic Background
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.01 }}
          className="bg-white dark:bg-black border-2 border-white/20 dark:border-black/20 p-12 md:p-16 relative"
        >
          <div className="flex items-start gap-12 mb-12">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-4 leading-tight">
                B.A in Cognitive Science
              </h2>
              <p className="text-2xl text-black/70 dark:text-white/70 font-light mb-4">
                University of California, Berkeley
              </p>
              <div className="flex items-center gap-4 text-black/50 dark:text-white/50 text-sm uppercase tracking-widest mb-8">
                <span>Berkeley, CA</span>
                <span>•</span>
                <span>2023-2027</span>
              </div>

              {/* Minors */}
              <div className="flex flex-wrap gap-3 mb-12">
                {["Cognitive Science", "Data Science", "Statistics"].map((minor, i) => (
                  <motion.span
                    key={minor}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05, type: "spring" }}
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black text-xs font-medium uppercase tracking-widest border-2 border-black dark:border-white"
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
            transition={{ delay: 0.3 }}
            className="pt-12 border-t border-white/10 dark:border-black/10 mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-5 h-5 text-black dark:text-white" />
              <h3 className="text-2xl font-black text-black dark:text-white uppercase tracking-tight">
                Specializations
              </h3>
            </div>
            <p className="text-lg text-black/60 dark:text-white/60 leading-relaxed font-light">
              Specializing in product research and data-driven strategy. Experienced in experimental design, data analysis, and project management across academic and technical environments.
            </p>
          </motion.div>

          {/* Relevant Coursework */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-12 border-t border-white/10 dark:border-black/10"
          >
            <h3 className="text-2xl font-black text-black dark:text-white uppercase tracking-tight mb-6">
              Relevant Coursework
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { code: "COGSCI 132", title: "Rhythms of the Brain: from Neuronal Communication to Function", grade: "A+" },
                { code: "PSYCH C127", title: "Cognitive Neuroscience", grade: "A" },
                { code: "PHILOS 12A", title: "Introduction to Logic", grade: "A" },
                { code: "MCELLBI C61", title: "Brain, Mind, and Behavior", grade: "A-" },
                { code: "LINGUIS 100", title: "Introduction to Linguistic Science", grade: "A-" },
                { code: "DATA C88C", title: "Computational Structures in Data Science", grade: "A-" },
                { code: "COGSCI C126", title: "Perception", grade: "B+" },
                { code: "COGSCI 1", title: "Introduction to Cognitive Science", grade: "B+" },
                { code: "DATA C8", title: "Foundations of Data Science", grade: "B+" },
                { code: "MATH 55", title: "Discrete Mathematics", grade: "B" },
                { code: "UGBA 192T", title: "Topics in Responsible Business", grade: "A" },
                { code: "STAT 133", title: "Concepts in Computing with Data", grade: "In Progress" },
                { code: "PSYCH 101", title: "Research and Data Analysis in Psychology", grade: "In Progress" },
                { code: "GEOG C188", title: "Geographic Information Science", grade: "In Progress" },
              ].map((course, i) => (
                <motion.div
                  key={course.code}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <span className="text-sm font-black text-black dark:text-white uppercase tracking-tight">
                      {course.code}
                    </span>
                    <span className="text-xs text-black/50 dark:text-white/50 uppercase tracking-widest">
                      {course.grade}
                    </span>
                  </div>
                  <p className="text-sm text-black/70 dark:text-white/70 font-light leading-relaxed">
                    {course.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
