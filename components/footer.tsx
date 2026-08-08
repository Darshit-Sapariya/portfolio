"use client"

import { motion } from "framer-motion"
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa6"
import { Mail, Download, ArrowUp, Code2, MapPin, Phone } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#works" },
    { label: "Skills", href: "#skills" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/sapariya-darshit-47b7b1287",
      label: "LinkedIn",
      color: "hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-500/10",
    },
    {
      icon: FaGithub,
      href: "https://github.com/Darshit-Sapariya",
      label: "GitHub",
      color: "hover:text-white hover:border-white/40 hover:bg-white/10",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/918347402205?text=Hi%20Darshit,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
      label: "WhatsApp",
      color: "hover:text-emerald-400 hover:border-emerald-400/40 hover:bg-emerald-500/10",
    },
    {
      icon: Mail,
      href: "mailto:sapariyadarshit3596@gmail.com",
      label: "Email",
      color: "hover:text-primary hover:border-primary/40 hover:bg-primary/10",
    },
  ]

  const techStack = []

  return (
    <footer className="relative border-t border-white/5 bg-slate-950/80 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-10 border-b border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Available for work</p>
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              Let&apos;s build something great together.
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="mailto:sapariyadarshit3596@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-secondary text-white text-xs font-bold hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20"
            >
              <Mail size={14} />
              Get In Touch
            </a>
            <a
              href="/Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold text-foreground hover:border-primary/40 hover:bg-white/10 transition-all duration-300"
            >
              <Download size={14} />
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <div className="py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Block */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center text-white font-extrabold text-base shadow-lg shadow-primary/25">
                DS
              </div>
              <div>
                <span className="text-foreground font-bold text-base block">Darshit Sapariya</span>
                <span className="text-xs text-primary font-semibold">Full-Stack Python Django Developer</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-sm mb-5">
              Building scalable backends, robust REST APIs, and full-stack web solutions. Passionate about clean architecture and great user experiences.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-5">
              <a href="mailto:sapariyadarshit3596@gmail.com" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors group">
                <Mail size={12} className="text-primary/60 group-hover:text-primary transition-colors" />
                sapariyadarshit3596@gmail.com
              </a>
              <a href="tel:+918347402205" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors group">
                <Phone size={12} className="text-primary/60 group-hover:text-primary transition-colors" />
                +91 8347402205
              </a>
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin size={12} className="text-primary/60" />
                Ahmedabad, Gujarat, India
              </span>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5">
              {techStack.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] font-semibold text-foreground/60">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-foreground mb-5 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-primary rounded-full inline-block" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-primary rounded transition-all duration-300 inline-block" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-foreground mb-5 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-primary rounded-full inline-block" />
              Connect
            </h4>
            <div className="grid grid-cols-2 gap-2.5 mb-5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl border border-white/8 bg-white/[0.03] text-muted-foreground text-xs font-semibold transition-all duration-300 ${link.color}`}
                >
                  <link.icon size={14} />
                  {link.label}
                </a>
              ))}
            </div>

            {/* Status Badge */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/5 border border-emerald-500/15">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <div>
                <p className="text-[10px] font-bold text-emerald-400">Open to Opportunities</p>
                <p className="text-[9px] text-muted-foreground/70">Full-time / Internship</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Code2 size={13} className="text-primary/60" />
            <span>Built with Next.js & Framer Motion</span>
            <span className="text-white/20">·</span>
            <span>© {new Date().getFullYear()} Darshit Sapariya</span>
          </div>

          <a
            href="#"
            className="group flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Back to Top
            <span className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
              <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
