"use client"

import { motion } from "framer-motion"
import { Download, Check, FileText, ExternalLink, Sparkles, User, Briefcase, GraduationCap, Code, Database, Layers, Rocket, BadgeCheck } from "lucide-react"
import { siteConfig, resumeHighlights, experiences, educationList } from "@/lib/data"

export default function Resume() {
  return (
    <section id="resume" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-indigo-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-transparent via-white/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Sparkles size={14} />
            Curriculum Vitae
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4"
          >
            Download My Resume
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Get a complete overview of my skills, experience, education, and projects — perfect for recruiters.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <motion.h3
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-xl md:text-2xl font-bold text-foreground mb-6"
            >
              What&apos;s Inside
            </motion.h3>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="space-y-3 mb-10"
            >
              {resumeHighlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
                  className="flex items-center gap-3 text-sm text-foreground/80 bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 hover:border-primary/20 transition-all duration-300 hover:bg-white/[0.03]"
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/20 flex items-center justify-center shrink-0 shadow-lg shadow-primary/10">
                    <Check size={14} className="text-primary" />
                  </div>
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="grid grid-cols-3 gap-3 mb-10"
            >
              {[
                { label: "Projects", value: "2+ Completed", icon: "⚡" },
                { label: "Experience", value: "6+ Months", icon: "💼" },
                { label: "Education", value: "2 Degrees", icon: "🎓" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
                  className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-4 text-center hover:border-primary/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-xs font-bold text-foreground">{stat.value}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.0 }}
              className="flex flex-wrap gap-3"
            >
              <motion.a
                href={siteConfig.resume}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full gradient-secondary text-white font-bold text-sm shadow-lg shadow-primary/20 hover:opacity-90 transition-all duration-300"
              >
                <Download size={18} />
                Download CV (PDF)
              </motion.a>
              <motion.a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-foreground font-bold text-sm hover:border-primary/50 hover:bg-white/10 transition-all duration-300"
              >
                <ExternalLink size={16} />
                View Fullscreen
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Mockup Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="lg:col-span-7 flex justify-center"
          >
            <div className="relative w-full max-w-2xl group perspective-1000">
              {/* Multiple decorative layers */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-purple-500/15 to-pink-500/10 rounded-3xl blur-2xl opacity-40 group-hover:opacity-80 transition duration-500" />
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500" />
              
              {/* Main Document Mockup */}
              <motion.div
                whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
                transition={{ duration: 0.4 }}
                className="relative bg-gradient-to-br from-card/80 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
              >
                {/* Animated Header Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-50" />
                
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative flex items-center justify-between border-b border-white/5 pb-5 mb-6"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-white font-bold text-2xl shadow-xl shadow-primary/30"
                    >
                      DS
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg tracking-tight">
                        {siteConfig.name}
                      </h4>
                      <p className="text-xs text-muted-foreground font-medium">
                        {siteConfig.title}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                    className="px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20 uppercase tracking-wider shadow-lg"
                  >
                    <BadgeCheck size={10} className="inline mr-1" />
                    PDF • Verified
                  </motion.div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-purple-500 animate-pulse" />
                <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                <div className="absolute top-1/2 left-4 w-1 h-1 rounded-full bg-gradient-to-r from-pink-500 to-red-500" />

                {/* Document Section Previews - Visible normally, hidden on hover */}
                <div className="relative space-y-4 opacity-100 group-hover:opacity-0 transition-all duration-300">
                  {/* About Me */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2.5 text-xs font-bold text-primary mb-2.5 uppercase tracking-wider">
                      <User size={13} />
                      <span>About Me</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      Full-Stack Developer passionate about building modern web applications with Python, Django, and React.
                    </p>
                  </motion.div>

                  {/* Skills Grid */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2.5 text-xs font-bold text-purple-400 mb-2.5 uppercase tracking-wider">
                      <Code size={13} />
                      <span>Core Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "Django", "DRF", "PostgreSQL", "Git"].map((tech, i) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ duration: 0.2 }}
                          className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-white/5 to-white/[0.02] text-[11px] font-semibold text-foreground/80 border border-white/5 hover:border-primary/20 transition-all duration-300"
                          style={{ animationDelay: `${i * 0.05}s` }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Experience & Education */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="grid grid-cols-2 gap-3"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 mb-2 uppercase tracking-wider">
                        <Briefcase size={12} />
                        <span>Experience</span>
                      </div>
                      <p className="text-[11px] font-bold text-foreground leading-tight mb-1">
                        {experiences[0].role}
                      </p>
                      <p className="text-[10px] text-muted-foreground leading-tight">{experiences[0].company}</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 text-xs font-bold text-violet-400 mb-2 uppercase tracking-wider">
                        <GraduationCap size={12} />
                        <span>Education</span>
                      </div>
                      <p className="text-[11px] font-bold text-foreground leading-tight mb-1">
                        {educationList[0].degree}
                      </p>
                      <p className="text-[10px] text-muted-foreground leading-tight">{educationList[0].specialization}</p>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Hover overlay with download options - Hidden normally, show on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 to-slate-900/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-center justify-center p-6 gap-4" style={{zIndex: 50}}>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="w-20 h-20 rounded-3xl gradient-primary flex items-center justify-center text-white shadow-2xl shadow-primary/40"
                  >
                    <FileText size={36} />
                  </motion.div>
                  <h4 className="font-bold text-foreground text-xl">
                    Download Resume
                  </h4>
                  <p className="text-xs text-muted-foreground text-center max-w-[240px] leading-relaxed">
                    Click below to download your CV or view it in fullscreen
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <motion.a
                      href={siteConfig.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white text-xs font-bold hover:bg-white/10 transition-all duration-300 flex items-center gap-1.5"
                    >
                      <ExternalLink size={14} />
                      View
                    </motion.a>
                    <motion.a
                      href={siteConfig.resume}
                      download
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-full gradient-secondary text-white text-xs font-bold hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/30 flex items-center gap-1.5"
                    >
                    <Download size={14} />
                    Download
                  </motion.a>
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
