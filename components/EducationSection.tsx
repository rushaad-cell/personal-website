"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export function EducationSection() {
  return (
    <section className="min-h-screen pt-32 pb-24 bg-black relative">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center w-full"
        >
          <div className="mb-4 text-center">
            <span className="text-white/50 font-mono text-sm">$</span>
            <h1 className="text-7xl md:text-9xl font-black text-white leading-none tracking-tighter inline-block ml-2" style={{ letterSpacing: '-0.05em', fontFamily: 'var(--font-geist-mono)' }}>
              EDUCATION
            </h1>
          </div>
          <p className="text-sm text-white/40 uppercase tracking-widest font-light">
            Academic Background
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.01 }}
          className="bg-black border-2 border-white p-12 md:p-16 relative w-full"
        >
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight" style={{ fontFamily: 'var(--font-geist-mono)' }}>
              B.A in Cognitive Science
            </h2>
            <p className="text-2xl text-white/80 font-light mb-4 font-mono">
              University of California, Berkeley
            </p>
            <div className="flex items-center justify-center gap-4 text-white/60 text-sm uppercase tracking-widest mb-8 font-mono">
              <span>Berkeley, CA</span>
              <span>•</span>
              <span>2023-2027</span>
            </div>

            {/* Minors */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {["Cognitive Science", "Data Science", "Statistics"].map((minor, i) => (
                <motion.span
                  key={minor}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-2 bg-white text-black text-xs font-black uppercase tracking-widest border-2 border-white font-mono"
                >
                  {minor}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Specialization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-12 mb-12"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
              <span className="text-white/50 font-mono text-sm">></span>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight font-mono">
                Specializations
              </h3>
            </div>
            <p className="text-base text-white/80 leading-relaxed font-light font-mono" style={{ maxWidth: '42rem', textAlign: 'center', margin: '0 auto' }}>
              Specializing in product research and data-driven strategy. Experienced in experimental design, data analysis, and project management across academic and technical environments.
            </p>
          </motion.div>

          {/* Relevant Coursework */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-12"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
          >
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6 font-mono" style={{ textAlign: 'center', width: '100%' }}>
              <span className="text-white/50">></span> Relevant Coursework
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', maxWidth: '48rem', width: '100%', margin: '0 auto', justifyContent: 'center', justifyItems: 'center' }}>
              {[
                { code: "MATH 55", title: "Discrete Mathematics" },
                { code: "STAT 133", title: "Concepts in Computing with Data" },
                { code: "DATA C88C", title: "Computational Structures in Data Science" },
                { code: "LINGUIS 100", title: "Introduction to Linguistic Science" },
                { code: "PSYCH C127", title: "Cognitive Neuroscience" },
                { code: "PSYCH 101", title: "Research and Data Analysis in Psychology" },
                { code: "COGSCI 132", title: "Rhythms of the Brain: from Neuronal Communication to Function" },
                { code: "COGSCI C126", title: "Perception" },
                { code: "PHILOS 12A", title: "Introduction to Logic" },
                { code: "MCELLBI C61", title: "Brain, Mind, and Behavior" },
                { code: "GEOG C188", title: "Geographic Information Science" },
                { code: "UGBA 192T", title: "Responsible AI Development" },
                { code: "DATA C8", title: "Foundations of Data Science" },
                { code: "COGSCI 1", title: "Introduction to Cognitive Science" },
              ].map((course, i) => (
                <motion.div
                  key={course.code}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="p-4 border-2 border-white bg-black text-center"
                  style={{ width: '100%', maxWidth: '20rem', margin: '0 auto' }}
                >
                  <div className="mb-2">
                    <span className="text-sm font-black text-white uppercase tracking-tight font-mono">
                      {course.code}
                    </span>
                  </div>
                  <p className="text-sm text-white/80 font-light leading-relaxed font-mono">
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
