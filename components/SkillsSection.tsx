"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Code, Database, BarChart3 } from "lucide-react";

export function SkillsSection() {
  const t = useTranslations("skills");

  const skills = {
    research: [
      "Experimental Design",
      "Behavioral Data Analysis",
      "Mixed-Methods",
      "Eye-Tracking (Eyelink, PsychoPy)",
      "Statistical Modeling (ANOVA, Regression)",
      "Workflow & System Design",
      "UX Testing",
      "UX Research",
    ],
    tools: [
      "Python (pandas, numpy, scikit-learn, statsmodels)",
      "R (tidyverse, ggplot2, shiny, lme4)",
      "SQL",
      "Tableau",
      "ArcGIS Pro",
      "Quarto",
      "D3.js",
      "React",
      "Qualtrics",
      "Notion",
      "Jira",
      "Monday.com",
      "Git/GitHub",
      "Jupyter",
      "SPSS",
      "PsychoPy",
    ],
  };

  const icons = [Code, Database, BarChart3];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            {t("title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Research & PM */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-6 h-6 text-black dark:text-white" />
              <h3 className="text-2xl font-bold text-black dark:text-white">
                {t("research")}
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.research.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tools & Data */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-black dark:text-white" />
              <h3 className="text-2xl font-bold text-black dark:text-white">
                {t("tools")}
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

