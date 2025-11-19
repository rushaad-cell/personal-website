"use client";

import { motion } from "framer-motion";
import { ExternalLink, Accessibility, Brain } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-black dark:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-black mb-4">
            Projects
          </h2>
        </motion.div>

        <div className="space-y-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Accessibility className="w-8 h-8 text-white dark:text-black" />
                <h3 className="text-3xl font-bold text-white dark:text-black">
                  Accessibility Analysis & Dashboard
                </h3>
              </div>
              <p className="text-lg text-white/80 dark:text-black/80">
                Build automated testing pipeline (Selenium + axe-core) to evaluate county websites for WCAG compliance.
              </p>
              <p className="text-white/70 dark:text-black/70">
                Used ANOVA and t-tests to identify how visual website complexity correlates with accessibility issues. Developed an interactive React + D3.js dashboard visualizing recommendations for inclusive design.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {["React", "D3.js", "Selenium", "Python", "ANOVA"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 dark:bg-black/10 text-white dark:text-black rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <a
                href="https://camentalhealthaccess.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white dark:text-black hover:opacity-70 transition-opacity font-medium"
              >
                View Dashboard
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-white dark:bg-black rounded-lg p-8 aspect-video flex items-center justify-center border border-white/10 dark:border-black/10">
              <div className="text-center">
                <Accessibility className="w-16 h-16 mx-auto mb-4 text-white/20 dark:text-black/20" />
                <p className="text-sm text-white/60 dark:text-black/60">
                  Dashboard Preview
                  <br />
                  (Add screenshot here)
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1 bg-white dark:bg-black rounded-lg p-8 aspect-video flex items-center justify-center border border-white/10 dark:border-black/10">
              <div className="text-center">
                <Brain className="w-16 h-16 mx-auto mb-4 text-black/20 dark:text-white/20" />
                <p className="text-sm text-black/60 dark:text-white/60">
                  Research Visualization
                  <br />
                  (Add visualization here)
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <Brain className="w-8 h-8 text-white dark:text-black" />
                <h3 className="text-3xl font-bold text-white dark:text-black">
                  Memory Laboratory Research
                </h3>
              </div>
              <p className="text-lg text-white/80 dark:text-black/80">
                Designed and analyzed experiments on how digital information sharing and audience framing influence autobiographical memory distortion.
              </p>
              <p className="text-white/70 dark:text-black/70">
                Built and deployed Qualtrics studies; ran sentiment and regression analyses; conducted literature reviews. Presented first-author findings at the Western Psychological Association Conference (2023).
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {["Qualtrics", "R", "Sentiment Analysis", "Regression"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 dark:bg-black/10 text-white dark:text-black rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
