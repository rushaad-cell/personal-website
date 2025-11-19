"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export function DownloadsSection() {
  const t = useTranslations("downloads");

  const resources = [
    {
      title: t("resume"),
      url: "/resume.pdf", // Placeholder - user will add actual file
      icon: FileText,
    },
    {
      title: t("poster"),
      url: "https://drive.google.com/file/d/1oH3f7ROARCjpfzpnnlPvG7ROFHsV_lSB/view?usp=sharing",
      icon: FileText,
      external: true,
    },
  ];

  return (
    <section id="downloads" className="py-24 bg-black dark:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-black mb-4">
            {t("title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {resources.map((resource, i) => {
            const Icon = resource.icon;
            return (
              <motion.a
                key={resource.title}
                href={resource.url}
                target={resource.external ? "_blank" : undefined}
                rel={resource.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-center gap-4 p-6 bg-white dark:bg-black rounded-lg border border-white/10 dark:border-black/10 hover:border-white dark:hover:border-black transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-black dark:bg-white flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-white dark:text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white dark:text-black mb-1">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-white/60 dark:text-black/60">
                    {resource.external ? "View on Google Drive" : "Download PDF"}
                  </p>
                </div>
                <Download className="w-5 h-5 text-white/60 dark:text-black/60 group-hover:text-white dark:group-hover:text-black transition-colors" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

