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
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-lg md:text-xl font-bold text-muted-foreground mb-2">
              I am Darshit
            </h4>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              <span className="gradient-text">Full-Stack</span>
              <br />
              Python Django Dev.
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              A passionate Full-Stack Developer specializing in Python, Django, REST APIs, and modern frontend technologies to build scalable web applications.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="/Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 group"
              >
                Download CV
                <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              <div className="flex gap-3">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-300 text-sm"
                  >
                    <link.icon />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <span className="text-3xl md:text-4xl font-bold gradient-text">{counts.projects}+</span>
                <p className="text-sm text-muted-foreground mt-1">Projects Completed</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-bold gradient-text">{counts.experience}+</span>
                <p className="text-sm text-muted-foreground mt-1">Years Learning</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-[38px] gradient-primary blur-3xl opacity-20 animate-pulse-glow" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[38px] border-2 border-border overflow-hidden rotate-[4deg] hover:rotate-0 transition-all duration-500">
                <Image
                  src="/my.jpg"
                  alt="Darshit Sapariya"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
