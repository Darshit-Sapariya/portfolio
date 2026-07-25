"use client"

import { motion } from "framer-motion"
import { Download, Check, FileText, ExternalLink, Sparkles, User, Briefcase, GraduationCap, Code } from "lucide-react"

export default function Resume() {
  const highlights = [
    "Backend web development with Python and Django",
    "Robust REST APIs with Django REST Framework (DRF)",
    "Relational database design (PostgreSQL / MySQL / SQLite)",
    "Full-stack integration using React, Next.js, and Bootstrap",
  ]

  return (
    <section id="resume" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Download My Resume
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get a complete overview of my skills, experience, education, and projects — perfect for recruiters.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-8">
              <Sparkles size={14} />
              Curriculum Vitae
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              What&apos;s Inside
            </h3>

            <div className="space-y-4 mb-10">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-3 text-sm text-foreground/80"
                >
                  <div className="w-6 h-6 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Check size={13} className="text-primary" />
                  </div>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/Resume.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full gradient-secondary text-white font-bold text-sm shadow-lg shadow-primary/20 hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                <Download size={18} />
                Download CV (PDF)
              </a>
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-foreground font-bold text-sm hover:border-primary/50 hover:bg-white/10 transition-all duration-300"
              >
                <ExternalLink size={16} />
                View Fullscreen
              </a>
            </div>
          </motion.div>

          {/* Right Column: Premium Mockup Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-md group">
              {/* Decorative Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-purple-500/15 to-pink-500/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500 pointer-events-none" />

              {/* Main Document Mockup */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative bg-card/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between border-b border-white/5 pb-5 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-lg shadow-md shadow-primary/20">
                      DS
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-base">Darshit Sapariya</h4>
                      <p className="text-xs text-muted-foreground">Full-Stack Python Django Developer</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20 uppercase tracking-wider">
                    PDF • Verified
                  </span>
                </div>

                {/* Document Section Previews */}
                <div className="space-y-4">
                  {/* Summary */}
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="flex items-center gap-2 text-xs font-bold text-primary mb-1.5 uppercase tracking-wider">
                      <User size={13} />
                      <span>About Me</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      Passionate Developer specializing in building modern web backends with Django and REST APIs.
                    </p>
                  </div>

                  {/* Skills Grid */}
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="flex items-center gap-2 text-xs font-bold text-purple-400 mb-2.5 uppercase tracking-wider">
                      <Code size={13} />
                      <span>Core Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {["Python", "Django", "DRF", "PostgreSQL", "React", "Git"].map((tech) => (
                        <span key={tech} className="px-2.5 py-0.5 rounded-md bg-white/5 text-[11px] font-semibold text-foreground/80 border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Experience & Education */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-pink-400 mb-1.5 uppercase tracking-wider">
                        <Briefcase size={12} />
                        <span>Experience</span>
                      </div>
                      <p className="text-[11px] font-semibold text-foreground">Backend Intern</p>
                      <p className="text-[10px] text-muted-foreground">CreArt Solutions</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 mb-1.5 uppercase tracking-wider">
                        <GraduationCap size={12} />
                        <span>Education</span>
                      </div>
                      <p className="text-[11px] font-semibold text-foreground">B.E. / IT</p>
                      <p className="text-[10px] text-muted-foreground">Computer Engineering</p>
                    </div>
                  </div>
                </div>

                {/* Hover overlay with quick preview & download button */}
                <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 gap-4">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-white shadow-xl shadow-primary/30 transform group-hover:scale-110 transition-transform">
                    <FileText size={30} />
                  </div>
                  <h4 className="font-bold text-foreground text-lg">Resume.pdf</h4>
                  <p className="text-xs text-muted-foreground text-center max-w-[240px] leading-relaxed">
                    View fullscreen or download your personal copy of the CV
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <a
                      href="/Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-white text-xs font-bold hover:bg-white/10 transition-all duration-300 flex items-center gap-1.5"
                    >
                      <ExternalLink size={14} />
                      View
                    </a>
                    <a
                      href="/Resume.pdf"
                      download
                      className="px-6 py-2.5 rounded-full gradient-secondary text-white text-xs font-bold hover:opacity-90 transition-all duration-300 shadow-md shadow-primary/20 flex items-center gap-1.5"
                    >
                      <Download size={14} />
                      Download
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
