"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-24 bg-black dark:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-white dark:text-black" />
            <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-black">
              Education
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-black rounded-lg p-8 md:p-12 border border-white/10 dark:border-black/10">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-full bg-black dark:bg-white flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-white dark:text-black" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white dark:text-black mb-2">
                  B.A in Cognitive Science. Minors in Data Science and Statistics
                </h3>
                <p className="text-lg text-white/80 dark:text-black/80 font-medium mb-1">
                  University of California, Berkeley
                </p>
                <p className="text-white/60 dark:text-black/60 mb-4">
                  Berkeley, CA • 2023-2027
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Cognitive Science", "Data Science", "Statistics"].map((item, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 dark:border-black/10">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-white dark:text-black" />
                <h4 className="font-semibold text-white dark:text-black">
                  Specializations
                </h4>
              </div>
              <p className="text-white/70 dark:text-black/70 leading-relaxed">
                Specializing in product research and data-driven strategy. Experienced in experimental design, data analysis, and project management across academic and technical environments.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
