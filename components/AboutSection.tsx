"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <User className="w-8 h-8 text-black dark:text-white" />
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
              About
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-black/80 dark:text-white/80">
                Cognitive Science student at UC Berkeley, double-minoring in Data Science & Statistics, specializing in product research and data-driven strategy. Experienced in experimental design, data analysis, and project management across academic and technical environments. Part data-wrangler, part design thinker, and part 'let's try it and see', I work to bridge behavioral sciences and product thinking to translate human data into insights for innovation.
              </p>
            </div>

            <div className="relative">
              {/* Photo placeholder - user will add their photo */}
              <div className="aspect-square bg-gradient-to-br from-black to-white dark:from-white dark:to-black rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <User className="w-24 h-24 mx-auto mb-4 text-black/20 dark:text-white/20" />
                  <p className="text-sm text-black/60 dark:text-white/60">
                    Add your photo here
                    <br />
                    (Replace this div with an Image component)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "UC Berkeley",
              "Cognitive Science",
              "Data Science",
              "Statistics",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="text-center p-4 border border-black/10 dark:border-white/10 rounded-lg hover:border-black dark:hover:border-white transition-colors"
              >
                <p className="font-medium text-black dark:text-white">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
