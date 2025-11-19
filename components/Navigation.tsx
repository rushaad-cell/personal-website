"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/lib/theme-provider";
import { Moon, Sun, Menu, X, Home, User, Briefcase, Code, Mail, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  
  let theme: "dark" | "light" = "light";
  let toggleTheme: () => void = () => {};
  
  try {
    const themeContext = useTheme();
    theme = themeContext.theme;
    toggleTheme = themeContext.toggleTheme;
  } catch (e) {
    // ThemeProvider not available during SSR
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: "/", label: "Home", icon: Home, emoji: "🏠" },
    { href: "/about", label: "About", icon: User, emoji: "👤" },
    { href: "/projects", label: "Projects", icon: Sparkles, emoji: "✨" },
    { href: "/work", label: "Work", icon: Briefcase, emoji: "💼" },
    { href: "/skills", label: "Skills", icon: Code, emoji: "⚡" },
    { href: "/contact", label: "Contact", icon: Mail, emoji: "📧" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <>
      {/* Quirky Side Navigation */}
      <motion.nav
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed left-0 top-0 bottom-0 z-50 w-20 md:w-24 flex flex-col items-center py-8 border-r border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-xl"
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="text-2xl font-black text-black dark:text-white block w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center hover:scale-110 transition-transform"
          >
            RM
          </Link>
        </motion.div>

        <div className="flex-1 flex flex-col gap-4">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, x: 4 }}
                className="relative"
              >
                <Link
                  href={item.href}
                  className={cn(
                    "block w-12 h-12 rounded-2xl flex items-center justify-center text-xl transition-all relative group",
                    active
                      ? "bg-black dark:bg-white text-white dark:text-black"
                      : "bg-transparent text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                  )}
                >
                  <span className="text-2xl">{item.emoji}</span>
                  {active && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-black dark:bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="absolute left-full ml-4 px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {item.label}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {mounted && (
          <motion.button
            whileHover={{ rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </motion.button>
        )}
      </motion.nav>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-40 md:hidden bg-white dark:bg-black p-8"
          >
            <div className="flex flex-col gap-4 mt-20">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-2xl text-2xl transition-colors",
                        isActive(item.href)
                          ? "bg-black dark:bg-white text-white dark:text-black"
                          : "bg-black/5 dark:bg-white/5 text-black dark:text-white"
                      )}
                    >
                      <span>{item.emoji}</span>
                      <span className="text-lg font-medium">{item.label}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
