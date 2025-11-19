"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const quirkyFacts = [
  "I once debugged code in my dreams",
  "I measure time in coffee cups",
  "I believe data tells stories",
  "I'm part human, part algorithm",
];

export function Hero() {
  const [currentFact, setCurrentFact] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % quirkyFacts.length);
    }, 3000);
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black">
      {/* Quirky Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-black dark:bg-white rounded-full"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
              opacity: 0.1,
            }}
            animate={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="fixed w-32 h-32 rounded-full border-2 border-black dark:border-white pointer-events-none z-0"
        style={{
          left: mousePos.x - 64,
          top: mousePos.y - 64,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Quirky Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-6xl md:text-8xl font-black text-black dark:text-white inline-block transform hover:rotate-12 transition-transform cursor-default">
              👋
            </span>
          </motion.div>

          {/* Name with quirky styling */}
          <motion.h1
            className="text-7xl md:text-9xl font-black mb-6 text-black dark:text-white leading-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="inline-block hover:scale-110 transition-transform cursor-default">
              R
            </span>
            <span className="inline-block hover:scale-110 transition-transform cursor-default">
              U
            </span>
            <span className="inline-block hover:scale-110 transition-transform cursor-default">
              S
            </span>
            <span className="inline-block hover:scale-110 transition-transform cursor-default">
              H
            </span>
            <span className="inline-block hover:scale-110 transition-transform cursor-default">
              A
            </span>
            <span className="inline-block hover:scale-110 transition-transform cursor-default">
              A
            </span>
            <span className="inline-block hover:scale-110 transition-transform cursor-default">
              D
            </span>
          </motion.h1>

          {/* Rotating Quirky Fact */}
          <motion.div
            key={currentFact}
            initial={{ opacity: 0, y: 10, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -10, rotateX: 90 }}
            className="mb-8 h-16 flex items-center justify-center"
          >
            <p className="text-2xl md:text-3xl font-bold text-black/60 dark:text-white/60">
              {quirkyFacts[currentFact]}
            </p>
          </motion.div>

          {/* Subtitle with quirky layout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center justify-center gap-4 text-xl md:text-2xl">
              <span className="font-bold text-black dark:text-white">Cognitive Science</span>
              <span className="text-black/40 dark:text-white/40">×</span>
              <span className="font-bold text-black dark:text-white">Data Science</span>
              <span className="text-black/40 dark:text-white/40">×</span>
              <span className="font-bold text-black dark:text-white">Product Strategy</span>
            </div>
          </motion.div>

          {/* Quirky CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold text-lg flex items-center gap-2 group"
              >
                Explore My World
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white rounded-full font-bold text-lg flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                See Projects
              </motion.button>
            </Link>
          </motion.div>

          {/* Quirky Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { label: "Research Papers", value: "3+" },
              { label: "Cups of Coffee", value: "∞" },
              { label: "Lines of Code", value: "10k+" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-center"
              >
                <div className="text-4xl font-black text-black dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-black/60 dark:text-white/60 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
