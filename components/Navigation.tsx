"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/lib/theme-provider";
import { Moon, Sun, Menu, X, Globe } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { locales, type Locale } from "@/i18n";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLocale = (newLocale: Locale) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  const navItems = [
    { href: "#about", label: t("about") },
    { href: "#projects", label: t("projects") },
    { href: "#experience", label: t("experience") },
    { href: "#education", label: t("education") },
    { href: "#skills", label: t("skills") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/10 dark:border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href={`/${locale}#`}
            className="text-xl font-bold text-black dark:text-white"
          >
            RM
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`/${locale}${item.href}`}
                className="text-sm font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative group">
              <button className="p-2 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors">
                <Globe className="w-5 h-5" />
              </button>
              <div className="absolute right-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg shadow-lg py-1 min-w-[120px]">
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => switchLocale(loc)}
                    className={cn(
                      "w-full text-left px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors",
                      locale === loc && "font-semibold"
                    )}
                  >
                    {loc.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-black dark:text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`/${locale}${item.href}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

