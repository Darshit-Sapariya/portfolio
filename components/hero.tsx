"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaXTwitter, FaLinkedinIn, FaGithub, FaDribbble, FaWhatsapp } from "react-icons/fa6"
import { Download } from "lucide-react"

export default function Hero() {
  const [counts, setCounts] = useState({ projects: 0, experience: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)
  const counted = useRef(false)

  useEffect(() => {
    if (counted.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          counted.current = true
          const duration = 2000
          const steps = 60
          const interval = duration / steps
          let step = 0

          const timer = setInterval(() => {
            step++
            setCounts({
              projects: Math.min(3, Math.round((step / steps) * 3)),
              experience: Math.min(2, Math.round((step / steps) * 2)),
            })
            if (step >= steps) clearInterval(timer)
          }, interval)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const socialLinks = [
    { icon: FaWhatsapp, href: "https://wa.me/918347402205?text=Hi%20Darshit,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/sapariya-darshit-47b7b1287" },
    { icon: FaGithub, href: "https://github.com/Darshit-Sapariya" },
    { icon: FaXTwitter, href: "#" },
    { icon: FaDribbble, href: "#" },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[150px] -z-1 gradient-primary opacity-20 animate-pulse-glow" />

      <svg viewBox="0 0 1320 300" className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-[0.03] pointer-events-none">
        <text x="50%" y="50%" textAnchor="middle" className="animate-stroke" fill="none" stroke="url(#gradient)" strokeWidth="2" fontSize="280" fontWeight="900">
          HI
        </text>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              ✨ Available for Internships & Jobs
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
              Building <span className="gradient-text">Scalable</span>
              <br />
              Backends & APIs
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Hi, I'm Darshit Sapariya. I specialize in building high-performance server-side architectures, robust REST APIs, and full-stack solutions using <strong>Python, Django, React, PostgreSQL, and Electron</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white rounded-full gradient-secondary hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20"
              >
                Let's Connect
              </a>
              <a
                href="/Resume.pdf"
                download
                className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold text-foreground border border-white/10 bg-white/5 backdrop-blur-md rounded-full hover:border-primary/50 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Download CV
                <Download size={16} />
              </a>
              <div className="flex gap-3 ml-2">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground hover:text-primary hover:border-primary hover:bg-white/10 transition-all duration-300 text-base"
                  >
                    <link.icon />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <span className="text-4xl md:text-5xl font-extrabold gradient-text">{counts.projects}+</span>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-2">Projects Completed</p>
              </div>
              <div>
                <span className="text-4xl md:text-5xl font-extrabold gradient-text">{counts.experience}+</span>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-2">Years Learning</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            {/* Main Visual Container */}
            <div className="relative w-72 h-96 md:w-80 md:h-[400px] flex items-center justify-center">
              
              {/* Animated Futuristic Background Blur & Glowing Gradients */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.25, 0.4, 0.25],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -left-6 w-48 h-48 bg-purple-600 rounded-full blur-3xl pointer-events-none"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.35, 0.2],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 -right-6 w-48 h-48 bg-pink-500 rounded-full blur-3xl pointer-events-none"
              />

              {/* Subtle Dot Grid Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#a855f7_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-25 pointer-events-none rounded-3xl" />

              {/* Decorative Rotating Geometric Ring */}
              <div className="absolute -inset-4 border border-dashed border-purple-500/20 rounded-full animate-[spin_40s_linear_infinite] pointer-events-none" />
              
              {/* Floating tech badges */}
              <motion.div
                animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-3 -right-6 z-25 bg-background/95 backdrop-blur-md border border-purple-500/30 px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-1.5 pointer-events-none"
              >
                <span className="text-[10px] font-extrabold text-purple-400 font-mono tracking-wider">&lt;Django /&gt;</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute top-1/3 -left-8 z-25 bg-background/95 backdrop-blur-md border border-blue-500/30 px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-1.5 pointer-events-none"
              >
                <span className="text-[10px] font-extrabold text-blue-400 tracking-wider">PYTHON 🐍</span>
              </motion.div>

              {/* Outer Neon Glow / Glass Card with Continuous Floating Animation */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full rounded-3xl border border-white/10 bg-card/40 backdrop-blur-md p-3.5 shadow-2xl shadow-purple-950/20 group hover:border-purple-500/35 transition-colors duration-500 flex flex-col justify-between"
              >
                
                {/* Neon Border Image Wrapper */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.15)] group-hover:border-purple-500/40 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-500">
                  <Image
                    src="/my.jpg"
                    alt="Darshit Sapariya"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  
                  {/* Subtle overlay gradient on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating "Available for Freelance" Status Card */}
                <div className="absolute -bottom-3 -left-4 z-20 flex items-center gap-2.5 bg-background/95 backdrop-blur-md border border-emerald-500/30 px-4 py-2.5 rounded-2xl shadow-lg shadow-black/35 hover:scale-105 transition-transform duration-300">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-[11px] font-bold text-foreground/90 tracking-wide uppercase">
                    Available for Freelance
                  </span>
                </div>

              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
