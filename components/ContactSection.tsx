"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Linkedin, Send, MessageCircle } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [hoveredContact, setHoveredContact] = useState<string | null>(null);

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
      emoji: "📧",
    },
    {
      type: "phone",
      label: "Phone",
      value: "(650) 863-4535",
      href: "tel:+16508634535",
      icon: Mail,
      emoji: "📞",
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/rushaad-mistry-43507a1b0/",
      icon: Linkedin,
      emoji: "💼",
    },
  ];

  return (
    <section className="min-h-screen py-24 bg-white dark:bg-black relative overflow-hidden">
      {/* Quirky Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 border border-black/10 dark:border-white/10 rounded-full"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-8 relative z-10">
        {/* Quirky Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-8xl mb-6 inline-block"
          >
            📬
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black text-black dark:text-white leading-none mb-4">
            Let's Connect
          </h1>
          <p className="text-xl text-black/60 dark:text-white/60">
            I don't bite (promise)
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Methods - Quirky Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
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
                  whileHover={{ scale: 1.05, x: 10, rotate: -2 }}
                  onHoverStart={() => setHoveredContact(method.type)}
                  onHoverEnd={() => setHoveredContact(null)}
                  className="block p-6 bg-black/5 dark:bg-white/5 rounded-2xl border-2 border-transparent hover:border-black dark:hover:border-white transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{
                        rotate: hoveredContact === method.type ? 360 : 0,
                        scale: hoveredContact === method.type ? 1.2 : 1,
                      }}
                      className="text-4xl"
                    >
                      {method.emoji}
                    </motion.div>
                    <div className="flex-1">
                      <div className="font-bold text-black dark:text-white mb-1">
                        {method.label}
                      </div>
                      <div className="text-sm text-black/60 dark:text-white/60">
                        {method.value}
                      </div>
                    </div>
                    <Icon className="w-5 h-5 text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white transition-colors" />
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Quirky Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold text-black dark:text-white mb-2"
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
                className="w-full px-6 py-4 bg-black/5 dark:bg-white/5 border-2 border-black/20 dark:border-white/20 rounded-2xl text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors font-medium"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-black dark:text-white mb-2"
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
                className="w-full px-6 py-4 bg-black/5 dark:bg-white/5 border-2 border-black/20 dark:border-white/20 rounded-2xl text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors font-medium"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold text-black dark:text-white mb-2"
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
                className="w-full px-6 py-4 bg-black/5 dark:bg-white/5 border-2 border-black/20 dark:border-white/20 rounded-2xl text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none font-medium"
              />
            </div>
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-5 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-black text-lg hover:opacity-80 transition-opacity disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {status === "sending" ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    ⏳
                  </motion.span>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-green-600 dark:text-green-400 font-bold text-center"
              >
                ✨ Message sent successfully!
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-600 dark:text-red-400 font-bold text-center"
              >
                ❌ Failed to send. Please try again.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
