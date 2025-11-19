"use client";

import { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, Code, Mail, Sparkles, GraduationCap, Palette, Languages } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/projects", label: "Projects", icon: Sparkles },
    { href: "/work", label: "Work", icon: Briefcase },
    { href: "/education", label: "Education", icon: GraduationCap },
    { href: "/creative", label: "Creative", icon: Palette },
    { href: "/skills", label: "Skills", icon: Code },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md"
            : "bg-white/80 backdrop-blur-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
                    <Link
                      href="/"
                      className="text-lg font-black text-black uppercase tracking-tight"
                    >
                      RM
                    </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                              "px-2 py-2 text-xs font-medium uppercase tracking-widest transition-colors relative",
                              active
                                ? "text-black"
                                : "text-black/50 hover:text-black"
                    )}
                  >
                    {active && (
                      <motion.div
                        layoutId="activeNav"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-6">
              {/* Language Toggle */}
              <div className="hidden md:flex items-center gap-2 border-r border-black/10 dark:border-white/10 pr-6">
                <Languages className="w-4 h-4 text-black/50 dark:text-white/50" />
                <select
                  onChange={(e) => {
                    const lang = e.target.value as "en" | "es" | "de";
                    document.documentElement.lang = lang;
                    // Trigger page translation using Google Translate
                    if (lang !== "en") {
                      // Use Google Translate widget
                      const existingScript = document.querySelector('script[src*="translate.google.com"]');
                      if (!existingScript) {
                        const script = document.createElement("script");
                        script.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
                        script.async = true;
                        document.head.appendChild(script);
                      }
                      setTimeout(() => {
                        const google = (window as any).google;
                        if (google?.translate?.TranslateElement) {
                          const element = document.getElementById("google_translate_element");
                          if (element && !element.querySelector(".goog-te-combo")) {
                            new google.translate.TranslateElement(
                              { pageLanguage: "en", includedLanguages: "es,de", layout: 0 },
                              "google_translate_element"
                            );
                          }
                          setTimeout(() => {
                            const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
                            if (select) {
                              select.value = lang === "es" ? "es" : "de";
                              select.dispatchEvent(new Event("change"));
                            }
                          }, 200);
                        }
                      }, 100);
                    } else {
                      // Remove translation
                      const frame = document.querySelector(".goog-te-banner-frame");
                      if (frame) frame.remove();
                      const widget = document.querySelector(".goog-te-banner-frame");
                      if (widget) widget.remove();
                      location.reload();
                    }
                  }}
                  className="text-xs uppercase tracking-widest bg-transparent border-none text-black/50 hover:text-black cursor-pointer outline-none"
                >
                  <option value="en">EN</option>
                  <option value="es">ES</option>
                  <option value="de">DE</option>
                </select>
              </div>
              <div id="google_translate_element" className="hidden"></div>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-black"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
                      className="md:hidden border-t border-black/10 overflow-hidden"
            >
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium uppercase tracking-widest transition-colors",
                                isActive(item.href)
                                  ? "bg-black text-white"
                                  : "text-black hover:bg-black/5"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
