"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa6"
import { Download, ArrowRight, Sparkles, Code2, Terminal, CheckCircle2 } from "lucide-react"
import { siteConfig } from "@/lib/data"

export default function Hero() {
  const [counts, setCounts] = useState({ projects: 0, experience: 0, internship: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)
  const counted = useRef(false)

  useEffect(() => {
    if (counted.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          counted.current = true
          const duration = 1800
          const steps = 50
          const interval = duration / steps
          let step = 0

          const timer = setInterval(() => {
            step++
            setCounts({
              projects: Math.min(3, Math.round((step / steps) * 3)),
              experience: Math.min(1, Math.round((step / steps) * 1)),
              internship: Math.min(3, Math.round((step / steps) * 3)),
            })
            if (step >= steps) clearInterval(timer)
          }, interval)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const socialLinks = [
    { icon: FaWhatsapp, href: siteConfig.socials.whatsapp, label: "WhatsApp" },
    { icon: FaLinkedinIn, href: siteConfig.socials.linkedin, label: "LinkedIn" },
    { icon: FaGithub, href: siteConfig.socials.github, label: "GitHub" },
  ]

  const techBadges = [
    { name: "Python / Django", color: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30" },
    { name: "REST APIs (DRF)", color: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30" },
    { name: "PostgreSQL / MySQL", color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30" },
    { name: "AI Dev Platforms (Antigravity, OpenCode, Claude Code)", color: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30" },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Background Gradients & Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      {/* Decorative Large Background Typography */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.02] text-[180px] sm:text-[240px] md:text-[300px] font-black tracking-tighter leading-none bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent">
        PYTHON
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 backdrop-blur-md text-primary text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-sm shadow-primary/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Jobs & Internships</span>
              <Sparkles size={14} className="text-primary" />
            </motion.div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Building <span className="gradient-text">Scalable</span>
              <br />
              Backends & REST APIs
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed font-normal">
              Hi, I'm <strong className="text-foreground font-semibold">Darshit Sapariya</strong> — a Full-Stack Python Django Developer specializing in high-performance server architecture, robust REST APIs, optimized databases, and modern web applications.
            </p>

            {/* Tech Pill Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {techBadges.map((badge, index) => (
                <span
                  key={index}
                  className={`text-xs font-mono px-3 py-1.5 rounded-lg border bg-gradient-to-r ${badge.color} font-medium backdrop-blur-sm`}
                >
                  {badge.name}
                </span>
              ))}
            </div>

            {/* CTAs & Social Links */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white rounded-full gradient-secondary hover:opacity-95 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25"
              >
                <span>Let's Connect</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={siteConfig.resume}
                download
                className="inline-flex items-center gap-2.5 px-7 py-4 text-sm font-bold text-foreground border border-white/10 bg-white/5 backdrop-blur-md rounded-full hover:border-primary/50 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <span>Download CV</span>
                <Download size={16} className="text-primary" />
              </a>

              <div className="flex gap-2.5 ml-1">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-white/10 transition-all duration-300 text-lg hover:scale-110 shadow-sm"
                  >
                    <link.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 border-t border-white/10 pt-8 max-w-lg">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-3xl sm:text-4xl font-extrabold gradient-text">{counts.projects}+</span>
                <p className="text-[11px] sm:text-xs font-semibold text-muted-foreground mt-1">Live Projects</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-3xl sm:text-4xl font-extrabold gradient-text">{counts.experience}+</span>
                <p className="text-[11px] sm:text-xs font-semibold text-muted-foreground mt-1">Year Learning</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-3xl sm:text-4xl font-extrabold gradient-text">{counts.internship}</span>
                <p className="text-[11px] sm:text-xs font-semibold text-muted-foreground mt-1">Months Intern</p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-[350px] flex items-center justify-center">
              
              {/* Outer Decorative Floating Tech Badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -left-4 z-30 bg-slate-900/90 backdrop-blur-xl border border-primary/30 px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-1.5"
              >
                <Terminal size={13} className="text-primary" />
                <span className="text-[11px] font-mono font-bold text-primary">&lt;Django /&gt;</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-5 z-30 bg-slate-900/90 backdrop-blur-xl border border-purple-500/30 px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-1.5"
              >
                <Code2 size={13} className="text-purple-400" />
                <span className="text-[11px] font-mono font-bold text-purple-300">REST APIs</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-3 left-4 z-30 bg-slate-900/90 backdrop-blur-xl border border-emerald-500/30 px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-1.5"
              >
                <CheckCircle2 size={13} className="text-emerald-400" />
                <span className="text-[11px] font-mono font-bold text-emerald-300">PostgreSQL</span>
              </motion.div>

              {/* Ambient Glowing Aura Behind Card */}
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/30 via-purple-500/20 to-blue-600/30 rounded-3xl blur-2xl opacity-60 pointer-events-none animate-pulse-glow" />

              {/* Main Card Frame */}
              <div className="relative w-full h-full rounded-3xl p-3 bg-slate-900/60 border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden group">
                
                {/* Inner Glow Border Wrapper */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-primary/20 group-hover:border-primary/40 transition-colors duration-500">
                  <Image
                    src="/my.jpg"
                    alt="Darshit Sapariya"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

                  {/* Card Bottom Tag */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <h3 className="text-xs font-bold text-foreground">Darshit Sapariya</h3>
                      <p className="text-[10px] text-muted-foreground">Full-Stack Python Django Developer</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-[9px] font-bold font-mono uppercase tracking-wider">
                      GTU '26
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
