"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

export function CreativeSection() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const creativeWork = [
    {
      org: "ASUC SUPERB Productions",
      role: "Marketing Project Manager",
      period: "01/2024 – Present",
      description: "Design marketing initiatives for SUPERB social media accounts, including our 10K Instagram followers. Collaborate with the marketing team to manage a $10,000+ budget, planning events in line with student culture. Planned, launched, and facilitated communication for ticket giveaways for large artists, such as Dorian Electra.",
      embeds: [
        { type: "instagram", label: "Instagram", url: "https://www.instagram.com/asucsuperb/?hl=en" },
      ],
    },
    {
      org: "GAG! Magazine",
      role: "Marketing Lead & Editorial/Technical Staff",
      period: "09/2023 – Present",
      description: "Created content such as poetry, reviews, and op-ed pieces for independent student-funded art magazine. Manages a 10+ person team to lead social media marketing campaigns while maintaining a trendy brand voice. Planned large and small scale events for the local Berkeley community and broader Bay Area. Managed a six-person team to build and operations for our custom website.",
      website: "gagmagazine.cargo.site",
      embeds: [
        { type: "instagram", label: "Instagram", url: "https://www.instagram.com/gagmagazinee/?hl=en" },
        { type: "website", label: "Website", url: "https://gagmagazine.cargo.site" },
      ],
    },
    {
      org: "The Berkeley B-Side",
      role: "Music Journalism Editorial Staff",
      period: "09/2023 – Present",
      description: "Published music journalism and PR pieces focused on curating a diverse pool of BIPOC and LGBTQ+ voices in music, such as 'The chaos of catharsis: Doom Loop Festival, starring Yeule.' Attended weekly editorial staff meetings to brainstorm articles and discuss the latest trends in music.",
      embeds: [
        { type: "author", label: "Author Page", url: "https://berkeleybside.com/author/rushaadm/" },
        { type: "instagram", label: "Instagram", url: "https://www.instagram.com/berkeleybside/?hl=en" },
      ],
    },
  ];

  return (
    <section className="min-h-screen pt-32 pb-24 bg-black relative">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Edgy Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="mb-4">
            <span className="text-white/50 font-mono text-sm">$</span>
            <h1 className="text-7xl md:text-9xl font-black text-white leading-none tracking-tighter inline-block ml-2" style={{ letterSpacing: '-0.05em', fontFamily: 'var(--font-geist-mono)' }}>
              CREATIVE
            </h1>
          </div>
          <p className="text-xs text-white/50 uppercase tracking-[0.2em] font-light">
            MEDIA & EDITORIAL WORK
          </p>
        </motion.div>

        {/* Creative Work Grid */}
        <div>
          {creativeWork.map((work, index) => (
            <motion.div
              key={work.org}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="mb-16 last:mb-0"
            >
              <div>
                <div className="mb-2">
                  <span className="text-white/50 font-mono text-sm">{'>'}</span>
                </div>
                <div className="ml-4 space-y-4">
                  <div className="flex items-baseline gap-4 flex-wrap">
                    <h2 className="text-3xl md:text-4xl font-black text-white font-mono" style={{ letterSpacing: '-0.02em' }}>
                      {work.org}
                    </h2>
                    <span className="text-xs text-white/40 uppercase tracking-[0.15em] font-light font-mono">
                      {work.period}
                    </span>
                  </div>
                  <p className="text-xs text-white/60 uppercase tracking-[0.15em] font-light font-mono">
                    {work.role}
                  </p>
                  <p className="text-base text-white/80 leading-relaxed font-light max-w-3xl font-mono">
                    {work.description}
                  </p>
                  {work.website && (
                    <a
                      href={`https://${work.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white hover:text-white/70 transition-colors text-xs uppercase tracking-[0.15em] font-light font-mono"
                    >
                      {work.website}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  
                  {/* Links */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {work.embeds.map((embed, i) => (
                      <motion.a
                        key={i}
                        href={embed.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 2, y: -2 }}
                        onHoverStart={() => setHoveredItem(`${work.org}-${i}`)}
                        onHoverEnd={() => setHoveredItem(null)}
                        className="px-6 py-2.5 bg-white text-black hover:bg-white/80 transition-all text-xs uppercase tracking-[0.15em] font-black font-mono"
                      >
                        {embed.label}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

