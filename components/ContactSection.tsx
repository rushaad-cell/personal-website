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
    <section className="min-h-screen pt-32 pb-24 bg-black relative">

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <div className="mb-4 text-center">
            <span className="text-white/50 font-mono text-sm">$</span>
            <h1 className="text-7xl md:text-9xl font-black text-white leading-none tracking-tighter inline-block ml-2 font-mono" style={{ letterSpacing: '-0.05em' }}>
              CONTACT
            </h1>
          </div>
          <p className="text-xs text-white/50 uppercase tracking-[0.2em] font-light font-mono">
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
                  className="block p-6 bg-black border-2 border-white hover:bg-white hover:text-black transition-all group font-mono"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-white/50 group-hover:text-black transition-colors font-mono">></span>
                    <Icon className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                    <div className="flex-1">
                      <div className="font-black text-white group-hover:text-black mb-1 text-xs uppercase tracking-[0.15em]">
                        {method.label}
                      </div>
                      <div className="text-sm text-white/80 group-hover:text-black/80 font-light font-mono">
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
