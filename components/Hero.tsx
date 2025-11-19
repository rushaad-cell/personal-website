"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const statements = [
  "Bridging behavioral sciences and product thinking",
  "Translating human data into insights",
  "Part data-wrangler, part design thinker",
  "Experimental design meets data-driven strategy",
];

export function Hero() {
  const [currentStatement, setCurrentStatement] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatement((prev) => (prev + 1) % statements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black pt-16">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)`,
        }} />
      </div>

      {/* Subtle Mouse Follower */}
      <motion.div
        className="fixed w-96 h-96 rounded-full border border-black/5 dark:border-white/5 pointer-events-none z-0"
        style={{
          left: mousePos.x - 192,
          top: mousePos.y - 192,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Name */}
          <motion.h1
            className="text-8xl md:text-[12rem] font-black mb-12 text-black dark:text-white leading-none tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            RUSHAAD
            <br />
            MISTRY
          </motion.h1>

          {/* Rotating Statement */}
          <motion.div
            key={currentStatement}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-16 h-8 flex items-center justify-center"
          >
            <p className="text-lg md:text-xl text-black/50 dark:text-white/50 uppercase tracking-widest font-light">
              {statements[currentStatement]}
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-24"
          >
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm uppercase tracking-widest text-black/40 dark:text-white/40 font-light">
              <span>Cognitive Science</span>
              <span className="text-black/20 dark:text-white/20">×</span>
              <span>Data Science</span>
              <span className="text-black/20 dark:text-white/20">×</span>
              <span>Product Strategy</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mt-20"
          >
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium text-sm uppercase tracking-widest border-2 border-black dark:border-white hover:bg-transparent hover:text-black dark:hover:text-white transition-all"
              >
                Explore
                <ArrowRight className="w-4 h-4 inline-block ml-2" />
              </motion.button>
            </Link>
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white font-medium text-sm uppercase tracking-widest hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all"
              >
                Projects
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
