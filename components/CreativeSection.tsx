"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

export function CreativeSection() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const creativeWork = [
    {
      org: "ASUC SUPERB Productions",
      role: "Marketing Staff",
      period: "01/2024 – Present",
      description: "Design marketing initiatives for SUPERB social media accounts, including our 10K Instagram followers. Collaborate with the marketing team to manage a $10,000+ budget, planning events in line with student culture. Planned, launched, and facilitated communication for ticket giveaways for large artists, such as Dorian Electra.",
      embeds: [
        { type: "reel", label: "Instagram Reel", url: "#" },
        { type: "giveaway", label: "Ticket Giveaway Campaign", url: "#" },
      ],
    },
    {
      org: "GAG! Magazine",
      role: "Marketing Lead & Editorial/Technical Staff",
      period: "09/2023 – Present",
      description: "Created content such as poetry, reviews, and op-ed pieces for independent student-funded art magazine. Manages a 10+ person team to lead social media marketing campaigns while maintaining a trendy brand voice. Planned large and small scale events for the local Berkeley community and broader Bay Area. Managed a six-person team to build and operations for our custom website.",
      website: "gagmagazine.cargo.site",
      embeds: [
        { type: "reel", label: "Social Media Campaign", url: "#" },
        { type: "website", label: "Website", url: "https://gagmagazine.cargo.site" },
      ],
    },
    {
      org: "The Berkeley B-Side",
      role: "Music Journalism Editorial Staff",
      period: "09/2023 – Present",
      description: "Published music journalism and PR pieces focused on curating a diverse pool of BIPOC and LGBTQ+ voices in music, such as 'The chaos of catharsis: Doom Loop Festival, starring Yeule.' Attended weekly editorial staff meetings to brainstorm articles and discuss the latest trends in music.",
      embeds: [
        { type: "article", label: "Featured Article", url: "#" },
        { type: "reel", label: "Editorial Content", url: "#" },
      ],
    },
  ];

  return (
    <section className="min-h-screen pt-32 pb-24 bg-white dark:bg-black relative overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)`,
        }} />
      </div>

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
        <div className="space-y-20">
          {creativeWork.map((work, index) => (
            <motion.div
              key={work.org}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="space-y-6"
            >
              <div>
                <div className="flex items-baseline gap-4 mb-3 flex-wrap">
                  <h2 className="text-3xl md:text-4xl font-black text-black dark:text-white">
                    {work.org}
                  </h2>
                  <span className="text-xs text-black/40 dark:text-white/40 uppercase tracking-widest">
                    {work.period}
                  </span>
                </div>
                <p className="text-sm text-black/50 dark:text-white/50 uppercase tracking-widest mb-4 font-light">
                  {work.role}
                </p>
                <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed font-light max-w-3xl">
                  {work.description}
                </p>
                {work.website && (
                  <a
                    href={`https://${work.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-black dark:text-white hover:opacity-60 transition-opacity text-sm uppercase tracking-widest font-light"
                  >
                    {work.website}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              {/* Embed Links */}
              <div className="flex flex-wrap gap-3">
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

              {/* Embed Space */}
              <div className="mt-8">
                <div className="aspect-video bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center relative group">
                  <div className="text-center p-8">
                    <p className="text-xs text-black/30 dark:text-white/30 uppercase tracking-widest mb-2 font-light">
                      Embed Space
                    </p>
                    <p className="text-sm text-black/50 dark:text-white/50 font-light">
                      Add Instagram/TikTok embed or website preview here
                    </p>
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

