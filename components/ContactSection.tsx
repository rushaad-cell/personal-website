"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Linkedin, Send } from "lucide-react";
import { useLocale } from "next-intl";

export function ContactSection() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            {t("title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:rushaad@berkeley.edu"
                  className="flex items-center gap-3 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>rushaad@berkeley.edu</span>
                </a>
                <a
                  href="tel:+16508634535"
                  className="flex items-center gap-3 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                >
                  <span>(650) 863-4535</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/rushaad-mistry-43507a1b0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-black dark:text-white mb-2"
              >
                {t("name")}
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-transparent border border-black/20 dark:border-white/20 rounded-lg text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black dark:text-white mb-2"
              >
                {t("email")}
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-transparent border border-black/20 dark:border-white/20 rounded-lg text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-black dark:text-white mb-2"
              >
                {t("message")}
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-transparent border border-black/20 dark:border-white/20 rounded-lg text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-80 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {status === "sending" ? (
                <>
                  <span className="animate-spin">⏳</span>
                  {t("sending")}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {t("send")}
                </>
              )}
            </button>
            {status === "success" && (
              <p className="text-sm text-green-600 dark:text-green-400">
                {t("success")}
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600 dark:text-red-400">
                {t("error")}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

