"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, Award, ExternalLink, Building2 } from "lucide-react"
import { experiences } from "@/lib/data"

export default function Experience() {
  return (
    <div className="relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/25">
            <Briefcase size={16} className="text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Work Experience</h2>
        </div>
        <p className="text-xs text-muted-foreground ml-12">Internships & professional development</p>
      </motion.div>

      {/* Timeline */}
      <div className="relative space-y-5">
        {/* Vertical Line */}
        <div className="absolute left-[22px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 via-white/10 to-transparent rounded-full" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative flex gap-5 group"
          >
            {/* Company Logo Avatar */}
            <div className="shrink-0 z-10">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${exp.iconBg} flex items-center justify-center text-white text-sm font-extrabold shadow-lg ring-2 ring-slate-950`}>
                {exp.initials}
              </div>
            </div>

            {/* Card */}
            <div className={`flex-1 relative bg-card/50 backdrop-blur-sm border border-white/5 ${exp.borderAccent} rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-0.5`}>
              {/* Top accent */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${exp.tagLine}`} />

              <div className="p-5">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/8 text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                      <Calendar size={9} />
                      {exp.duration}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/15 text-[10px] font-bold text-primary uppercase tracking-wider">
                      {exp.durationBadge}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-[10px] font-semibold text-muted-foreground/70">
                      {exp.type}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground/70">
                    <MapPin size={9} />{exp.location}
                  </span>
                </div>

                {/* Role & Company */}
                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-1.5 mt-1 mb-3">
                  <Building2 size={11} className="text-muted-foreground/60 shrink-0" />
                  <span className="text-sm font-semibold text-muted-foreground">{exp.company}</span>
                </div>

                {/* Description */}
                <p className="text-[12px] sm:text-[13px] text-muted-foreground leading-relaxed mb-3">
                  {exp.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-white/[0.06] border border-white/8 text-[11px] font-medium text-foreground/70">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Certificate */}
                {exp.certificate && (
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] font-bold text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                  >
                    <Award size={12} />
                    View Certificate
                    <ExternalLink size={10} className="opacity-50 ml-0.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
