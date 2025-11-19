"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Linkedin, Send } from "lucide-react";

export function ContactSection() {
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

  const contactMethods = [
    {
      type: "email",
      label: "Email",
      value: "rushaad@berkeley.edu",
      href: "mailto:rushaad@berkeley.edu",
      icon: Mail,
    },
    {
      type: "phone",
      label: "Phone",
      value: "(650) 863-4535",
      href: "tel:+16508634535",
      icon: Mail,
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/rushaad-mistry-43507a1b0/",
      icon: Linkedin,
    },
  ];

  return (
    <section className="min-h-screen py-32 bg-white dark:bg-black relative overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 20px)`,
        }} />
      </div>

      <div className="max-w-5xl mx-auto px-8 relative z-10">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 text-center"
        >
          <div className="flex items-baseline justify-center gap-6 mb-4">
            <div className="flex-1 h-px bg-black/10 dark:bg-white/10"></div>
            <h1 className="text-7xl md:text-9xl font-black text-black dark:text-white leading-none tracking-tight">
              CONTACT
            </h1>
            <div className="flex-1 h-px bg-black/10 dark:bg-white/10"></div>
          </div>
          <p className="text-sm text-black/40 dark:text-white/40 uppercase tracking-widest font-light">
            Get In Touch
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {contactMethods.map((method, i) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.type}
                  href={method.href}
                  target={method.type === "linkedin" ? "_blank" : undefined}
                  rel={method.type === "linkedin" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="block p-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <Icon className="w-5 h-5 text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white transition-colors" />
                    <div className="flex-1">
                      <div className="font-medium text-black dark:text-white mb-1 text-sm uppercase tracking-widest">
                        {method.label}
                      </div>
                      <div className="text-sm text-black/50 dark:text-white/50 font-light">
                        {method.value}
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-medium text-black dark:text-white mb-2 uppercase tracking-widest"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-6 py-4 bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/20 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors font-light"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-black dark:text-white mb-2 uppercase tracking-widest"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-6 py-4 bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/20 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors font-light"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium text-black dark:text-white mb-2 uppercase tracking-widest"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-6 py-4 bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/20 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none font-light"
              />
            </div>
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-5 bg-black dark:bg-white text-white dark:text-black font-medium text-sm uppercase tracking-widest border-2 border-black dark:border-white hover:bg-transparent hover:text-black dark:hover:text-white transition-all disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {status === "sending" ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-black/60 dark:text-white/60 font-light text-center"
              >
                Message sent successfully
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-black/60 dark:text-white/60 font-light text-center"
              >
                Failed to send. Please try again.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
