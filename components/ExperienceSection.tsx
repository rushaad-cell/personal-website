"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export function ExperienceSection() {
  const t = useTranslations("experience");

  const experiences = [
    {
      key: "kiddLab",
      icon: "🔬",
    },
    {
      key: "bsm",
      icon: "📊",
    },
    {
      key: "memoryLab",
      icon: "🧠",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-black dark:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-white dark:text-black" />
            <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-black">
              {t("title")}
            </h2>
          </div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.key}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white dark:bg-black flex items-center justify-center text-2xl border-2 border-white/20 dark:border-black/20">
                    {exp.icon}
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="w-0.5 h-full bg-white/20 dark:bg-black/20 mx-auto mt-4" />
                  )}
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="text-2xl font-bold text-white dark:text-black mb-2">
                    {t(`${exp.key}.title`)}
                  </h3>
                  <div className="flex items-center gap-4 mb-3">
                    <p className="text-white/80 dark:text-black/80 font-medium">
                      {t(`${exp.key}.org`)}
                    </p>
                    <div className="flex items-center gap-2 text-white/60 dark:text-black/60 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{t(`${exp.key}.period`)}</span>
                    </div>
                  </div>
                  <p className="text-white/60 dark:text-black/60 text-sm mb-2">
                    {t(`${exp.key}.location`)}
                  </p>
                  <p className="text-white/70 dark:text-black/70 leading-relaxed">
                    {t(`${exp.key}.description`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

