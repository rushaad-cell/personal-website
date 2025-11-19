"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

export function EasterEggSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const letters = [
    {
      title: "Smartphone Children",
      date: "August 8, 2021",
      url: "https://www.nytimes.com/2021/08/08/opinion/letters/smartphone-children.html",
    },
    {
      title: "Social Media Kids",
      date: "August 22, 2022",
      url: "https://www.nytimes.com/2022/08/22/opinion/letters/social-media-kids.html",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 right-8 z-40"
    >
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white text-xs text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-all uppercase tracking-widest font-light"
        title="Easter egg: NYT letters"
      >
        {isExpanded ? "Hide" : "Easter Egg"}
      </motion.button>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-8 right-0 w-64 bg-white/95 dark:bg-black/95 backdrop-blur-sm border border-black/10 dark:border-white/10 p-6 space-y-4"
        >
          <p className="text-xs text-black/50 dark:text-white/50 font-light italic mb-4">
            (and some cute things I thought in high school)
          </p>
          <div className="space-y-3">
            {letters.map((letter, i) => (
              <motion.a
                key={i}
                href={letter.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="block group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-xs text-black dark:text-white font-light mb-1">
                      {letter.title}
                    </p>
                    <p className="text-xs text-black/40 dark:text-white/40">
                      {letter.date}
                    </p>
                  </div>
                  <ExternalLink className="w-3 h-3 text-black/30 dark:text-white/30 group-hover:text-black dark:group-hover:text-white transition-colors flex-shrink-0 mt-1" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

