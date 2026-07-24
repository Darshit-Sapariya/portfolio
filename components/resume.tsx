"use client"

import { motion } from "framer-motion"
import { Download, Check, FileText, ExternalLink, Sparkles, User, Briefcase, GraduationCap, Code } from "lucide-react"

export default function Resume() {
  return (
    <section id="resume" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles size={14} />
              Curriculum Vitae
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-6">
              Download My Resume
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-base md:text-lg">
              Get a complete overview of my skills, experience, education, and projects. 
              Perfect for sharing with recruiters or keeping for reference.
            </p>

            <div className="space-y-3.5 mb-10">
              {[
                "Backend web development with Python and Django",
                "Robust REST APIs with Django REST Framework (DRF)",
                "Relational database design (PostgreSQL / MySQL / SQLite)",
                "Full-stack integration using React, Next.js, and Bootstrap",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check size={13} className="text-primary" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

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
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-card border border-border text-foreground font-semibold text-sm hover:bg-card/80 hover:border-primary/50 transition-all duration-300"
              >
                <ExternalLink size={16} />
                View Fullscreen
              </a>
            </div>
          </div>

          {/* Right Column: Premium Mockup Preview Card */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Ambient Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500" />

              {/* Main Document Mockup */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="relative bg-card/90 backdrop-blur-xl border border-border/80 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden group"
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between border-b border-border/60 pb-5 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-lg shadow-md">
                      DS
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg">Darshit Sapariya</h3>
                      <p className="text-xs text-muted-foreground">Full-Stack Python Django Developer</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                    PDF • Verified
                  </span>
                </div>

                {/* Document Section Previews */}
                <div className="space-y-4">
                  {/* Summary / Role */}
                  <div className="p-3.5 rounded-xl bg-muted/40 border border-border/50">
                    <div className="flex items-center gap-2 text-xs font-semibold text-primary mb-1">
                      <User size={14} />
                      <span>About Me</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      Passionate Developer specializing in building modern web backends with Django and REST APIs.
                    </p>
                  </div>

                  {/* Skills Grid */}
                  <div className="p-3.5 rounded-xl bg-muted/40 border border-border/50">
                    <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 mb-2">
                      <Code size={14} />
                      <span>Core Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {["Python", "Django", "DRF", "PostgreSQL", "React", "Git"].map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded-md bg-background text-[11px] text-foreground/80 border border-border/60">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Experience & Education */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-muted/40 border border-border/50">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-pink-400 mb-1">
                        <Briefcase size={13} />
                        <span>Experience</span>
                      </div>
                      <p className="text-[11px] font-medium text-foreground">Backend Intern</p>
                      <p className="text-[10px] text-muted-foreground">CreArt Solutions</p>
                    </div>
                    <div className="p-3 rounded-xl bg-muted/40 border border-border/50">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 mb-1">
                        <GraduationCap size={13} />
                        <span>Education</span>
                      </div>
                      <p className="text-[11px] font-medium text-foreground">B.E. / IT</p>
                      <p className="text-[10px] text-muted-foreground">Information Tech.</p>
                    </div>
                  </div>
                </div>

                {/* Hover overlay with quick preview & download button */}
                <div className="absolute inset-0 bg-background/85 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 gap-3">
                  <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center text-white shadow-xl mb-1 transform group-hover:scale-110 transition-transform">
                    <FileText size={28} />
                  </div>
                  <h4 className="font-bold text-foreground text-base">Resume.pdf</h4>
                  <p className="text-xs text-muted-foreground text-center max-w-[220px]">
                    Click to view fullscreen or download your CV copy
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <a
                      href="/Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-primary text-white text-xs font-bold hover:opacity-90 transition-opacity shadow-md flex items-center gap-1.5"
                    >
                      <ExternalLink size={14} />
                      View
                    </a>
                    <a
                      href="/Resume.pdf"
                      download
                      className="px-5 py-2.5 rounded-full gradient-secondary text-white text-xs font-bold hover:opacity-90 transition-opacity shadow-md flex items-center gap-1.5"
                    >
                      <Download size={14} />
                      Download
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

