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
    <section className="min-h-screen pt-32 pb-24 bg-white dark:bg-black relative">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="flex items-baseline gap-6 mb-4">
            <h1 className="text-7xl md:text-9xl font-black text-black dark:text-white leading-none tracking-tight">
              CREATIVE
            </h1>
            <div className="flex-1 h-px bg-black/10 dark:bg-white/10"></div>
          </div>
          <p className="text-sm text-black/40 dark:text-white/40 uppercase tracking-widest font-light">
            Media & Editorial Work
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
              style={{ marginBottom: index === creativeWork.length - 1 ? '0' : '14rem' }}
            >
              <div style={{ marginBottom: '5rem' }}>
                <div className="flex items-baseline gap-4 mb-16 flex-wrap">
                  <h2 className="text-3xl md:text-4xl font-black text-black">
                    {work.org}
                  </h2>
                  <span className="text-xs text-black/40 uppercase tracking-widest">
                    {work.period}
                  </span>
                </div>
                <p className="text-sm text-black/50 uppercase tracking-widest mb-16 font-light">
                  {work.role}
                </p>
                <p className="text-lg text-black/70 leading-relaxed font-light max-w-3xl mb-16">
                  {work.description}
                </p>
                {work.website && (
                  <a
                    href={`https://${work.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mb-16 text-black hover:opacity-60 transition-opacity text-sm uppercase tracking-widest font-light"
                  >
                    {work.website}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-6" style={{ marginTop: '5rem' }}>
                {work.embeds.map((embed, i) => (
                  <motion.a
                    key={i}
                    href={embed.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    onHoverStart={() => setHoveredItem(`${work.org}-${i}`)}
                    onHoverEnd={() => setHoveredItem(null)}
                    className="px-6 py-3 border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white transition-colors text-sm uppercase tracking-widest text-black dark:text-white font-light"
                  >
                    {embed.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

