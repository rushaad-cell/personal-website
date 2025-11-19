"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { useState } from "react";

export function ExperienceSection() {
  const [selectedExp, setSelectedExp] = useState<number | null>(null);

  const experiences = [
    {
      title: "Research Assistant",
      org: "Kidd Lab, UC Berkeley",
      location: "Berkeley, CA",
      period: "08/2025 - Present",
      description: "Research children's visual attention patterns and learning outcomes in digital media contexts via eye-tracking and computational modeling. Process and analyze data with Python & R to identify visual features that improve learning efficacy. Collaborate with technical and research teams to interpret data and guide learning media design decisions.",
    },
    {
      title: "Research Assistant",
      org: "Memory Laboratory, UC Santa Cruz",
      location: "Santa Cruz, CA",
      period: "06/2020 - 06/2023",
      description: "Designed and analyzed experiments on how digital information sharing and audience framing influence autobiographical memory distortion. Built and deployed Qualtrics studies; ran sentiment and regression analyses; conducted literature reviews. Presented first-author findings at the Western Psychological Association Conference (2023).",
    },
    {
      title: "Executive Manager",
      org: "Berkeley Student Media",
      location: "Berkeley, CA",
      period: "06/2024 – Present",
      description: "Direct operational strategy for UC Berkeley's student-run Media Center, serving 1000+ users/semester. Analyze usage and workflow data (Excel and Tableau) to optimize resource allocation and service capacity. Oversee marketing, analytics, and finance teams to deliver 4-6 community events per semester. Designed tracking systems for inventory, incident reports, and staffing, improving service reliability.",
    },
    {
      title: "Marketing Project Manager",
      org: "ASUC SUPERB Productions, UC Berkeley",
      location: "Berkeley, CA",
      period: "01/2024 – Present",
      description: "Design marketing initiatives for SUPERB social media accounts, including our 10K Instagram followers. Collaborate with the marketing team to manage a $10,000+ budget, planning events in line with student culture. Planned, launched, and facilitated communication for ticket giveaways for large artists, such as Dorian Electra. Gained confident working proficiency with Google Suite applications.",
    },
    {
      title: "Marketing Lead & Editorial/Technical Staff",
      org: "GAG! Magazine, UC Berkeley",
      location: "Berkeley, CA",
      period: "09/2023 – Present",
      description: "Created content such as poetry, reviews, and op-ed pieces for independent student-funded art magazine. Manages a 10+ person team to lead social media marketing campaigns while maintaining a trendy brand voice. Planned large and small scale events for the local Berkeley community and broader Bay Area. Managed a six-person team to build and operations for our custom website (gagmagazine.cargo.site). Attended weekly editorial staff meetings and general meetings to track progress and brainstorm creative magazine ideas.",
    },
    {
      title: "Music Journalism Editorial Staff",
      org: "The Berkeley B-Side, UC Berkeley",
      location: "Berkeley, CA",
      period: "09/2023 – Present",
      description: "Published music journalism and PR pieces focused on curating a diverse pool of BIPOC and LGBTQ+ voices in music, such as 'The chaos of catharsis: Doom Loop Festival, starring Yeule.' Attended weekly editorial staff meetings to brainstorm articles and discuss the latest trends in music.",
    },
  ];

  const presentations = [
    {
      authors: "Mistry, R., Heyveld, L., Bittner, D., Avilla, H., Cushman, S., Storm, B.",
      title: "\"Today was epic\": Investigating Audience-Tuning and Saying-is-Believing Effects in the Context of Social Media",
      venue: "Western Psychological Association",
      location: "Riverside CA, United States",
      date: "April 27, 2023",
      type: "Poster Presentation",
    },
  ];

  return (
    <section className="min-h-screen pt-32 pb-24 bg-black relative">

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="mb-4">
            <span className="text-white/50 font-mono text-sm">$</span>
            <h1 className="text-7xl md:text-9xl font-black text-white leading-none tracking-tighter inline-block ml-2" style={{ letterSpacing: '-0.05em', fontFamily: 'var(--font-geist-mono)' }}>
              EXPERIENCE
            </h1>
          </div>
          <p className="text-xs text-white/50 uppercase tracking-[0.2em] font-light font-mono">
            Research & Management
          </p>
        </motion.div>

        {/* Terminal Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setSelectedExp(index)}
              onHoverEnd={() => setSelectedExp(null)}
              className="group"
            >
              <div className="mb-2">
                <span className="text-white/50 font-mono text-sm">></span>

              {/* Content */}
              <div className="space-y-3 ml-4">
                <div className="flex items-baseline justify-between gap-6 flex-wrap">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-1 leading-tight font-mono">
                      {exp.title}
                    </h3>
                    <p className="text-base text-white/80 font-light font-mono">
                      {exp.org}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-white/60 text-xs uppercase tracking-widest font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-xs text-white/60 uppercase tracking-widest font-mono">
                  {exp.location}
                </p>

                <p className="text-white/80 leading-relaxed text-sm font-light max-w-3xl font-mono">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Presentations Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-12"
        >
          <div className="mb-12">
            <div className="mb-3">
              <span className="text-white/50 font-mono text-sm">$</span>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-none tracking-tighter inline-block ml-2 font-mono" style={{ letterSpacing: '-0.02em' }}>
                PRESENTATIONS
              </h2>
            </div>
            <p className="text-xs text-white/50 uppercase tracking-[0.15em] font-light font-mono">
              Research Contributions
            </p>
          </div>

          <div className="space-y-8">
            {presentations.map((pres, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <p className="text-sm text-white/70 font-light font-mono">
                    {pres.authors}
                  </p>
                  <h3 className="text-lg md:text-xl font-black text-white leading-tight font-mono">
                    {pres.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-white/60 text-xs uppercase tracking-widest font-mono">
                    <span>{pres.type}</span>
                    <span>•</span>
                    <span>{pres.venue}</span>
                    <span>•</span>
                    <span>{pres.location}</span>
                    <span>•</span>
                    <span>{pres.date}</span>
                  </div>
                </div>
                <motion.a
                  href="https://drive.google.com/file/d/1oH3f7ROARCjpfzpnnlPvG7ROFHsV_lSB/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="mt-6 inline-block"
                >
                  <button className="px-8 py-4 bg-white text-black border-2 border-white hover:bg-black hover:text-white transition-all text-xs uppercase tracking-[0.15em] font-black font-mono">
                    Click here to see poster
                    <ExternalLink className="w-4 h-4 inline-block ml-2" />
                  </button>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
