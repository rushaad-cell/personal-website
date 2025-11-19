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
    <section className="min-h-screen flex items-center justify-center relative bg-black pt-16">

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-black mb-8 text-white leading-none tracking-tighter font-mono"
            style={{ letterSpacing: '-0.03em' }}
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
            <p className="text-base md:text-lg text-white/60 uppercase tracking-[0.2em] font-light font-mono">
              {statements[currentStatement]}
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-32"
          >
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.15em] text-white/50 font-light font-mono">
              <span>COGNITIVE_SCIENCE</span>
              <span className="text-white/30">×</span>
              <span>DATA_SCIENCE</span>
              <span className="text-white/30">×</span>
              <span>STATISTICS</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-black font-black text-xs uppercase tracking-[0.15em] border-2 border-white hover:bg-transparent hover:text-white transition-all"
              >
                Explore
                <ArrowRight className="w-4 h-4 inline-block ml-2" />
              </motion.button>
            </Link>
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-white text-white font-black text-xs uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all"
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
