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
    <section className="min-h-screen pt-40 pb-32 bg-white dark:bg-black relative overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 20px)`,
        }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
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

        <div className="max-w-2xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
        </div>
      </div>
    </section>
  );
}
