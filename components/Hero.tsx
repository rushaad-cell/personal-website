"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-black dark:from-black dark:via-black dark:to-white opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 text-black dark:text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t("title")}
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-4 text-black/70 dark:text-white/70 font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t("subtitle")}
          </motion.p>
          
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-black/60 dark:text-white/60"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center"
          >
            <motion.a
              href="#about"
              className="inline-flex items-center gap-2 text-black dark:text-white hover:opacity-70 transition-opacity"
              whileHover={{ y: -2 }}
            >
              <span className="text-sm font-medium">Explore</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

