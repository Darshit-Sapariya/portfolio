"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, ArrowUpRight, Loader2, CheckCircle2, XCircle, X, Clock } from "lucide-react"
import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa6"
import emailjs from "emailjs-com"
import { siteConfig, contactInfo } from "@/lib/data"

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [dialogState, setDialogState] = useState<{
    open: boolean
    type: "success" | "error"
    title: string
    message: string
  }>({
    open: false,
    type: "success",
    title: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current || isSubmitting) return

    setIsSubmitting(true)

    emailjs
      .send(
        "service_6ybongj",
        "template_a9dnw4p",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "-b6DURYWzSLuzhEdZ",
      )
      .then(() => {
        setIsSubmitting(false)
        setDialogState({
          open: true,
          type: "success",
          title: "Message Sent!",
          message: "Thank you for reaching out! Your message has been sent successfully. I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      })
      .catch(() => {
        setIsSubmitting(false)
        setDialogState({
          open: true,
          type: "error",
          title: "Message Failed",
          message: "Something went wrong while sending your message. Please try again or email me directly.",
        })
      })
  }

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s build something great together.
          </p>

          {/* Availability Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Freelance
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-muted-foreground text-xs font-bold uppercase tracking-wider">
              <Clock size={12} />
              Response time: &lt; 24 hours
            </span>
          </div>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group p-5 bg-card/40 rounded-2xl border border-white/5 hover:border-primary/30 text-center transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl gradient-primary flex items-center justify-center shadow-md shadow-primary/10">
                <info.icon className="text-white" size={20} />
              </div>
              <h3 className="font-bold text-foreground text-sm mb-1.5">{info.label}</h3>
              {info.href ? (
                <a href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-primary hover:underline text-xs break-all">
                  {info.value}
                </a>
              ) : (
                <p className="text-muted-foreground text-xs">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto relative group"
        >
          {/* Ambient blur behind form */}
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000 pointer-events-none" />

          {/* Form glass card wrapper */}
          <div className="relative bg-card/45 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl overflow-hidden">
            {/* Social Icons Row */}
            <div className="flex items-center justify-center gap-3 mb-8 pb-6 border-b border-white/5">
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300">
                <FaGithub size={16} />
              </a>
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300">
                <FaLinkedinIn size={16} />
              </a>
              <a href={siteConfig.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground hover:text-emerald-400 hover:border-emerald-400 transition-all duration-300">
                <FaWhatsapp size={16} />
              </a>
              <a href={`mailto:${siteConfig.email}`} className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300">
                <Mail size={16} />
              </a>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20 hover:border-white/20 transition-all duration-300 text-sm"
                    required
                    disabled={isSubmitting}
                    suppressHydrationWarning
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20 hover:border-white/20 transition-all duration-300 text-sm"
                    required
                    disabled={isSubmitting}
                    suppressHydrationWarning
                  />
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20 hover:border-white/20 transition-all duration-300 text-sm"
                  required
                  disabled={isSubmitting}
                  suppressHydrationWarning
                />
              </div>
              <div className="relative">
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20 hover:border-white/20 transition-all duration-300 resize-none text-sm"
                  required
                  disabled={isSubmitting}
                  suppressHydrationWarning
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                suppressHydrationWarning
                className="w-full px-6 py-4 rounded-xl gradient-secondary text-white font-bold text-sm hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-primary/20"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Success / Error Dialog Box Modal */}
      <AnimatePresence>
        {dialogState.open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDialogState({ ...dialogState, open: false })}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-md bg-card border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 text-center"
            >
              <button
                onClick={() => setDialogState({ ...dialogState, open: false })}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
              >
                <X size={18} />
              </button>

              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {dialogState.type === "success" ? (
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                    <CheckCircle2 size={36} />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-2xl bg-rose-500/15 text-rose-400 flex items-center justify-center border border-rose-500/20">
                    <XCircle size={36} />
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">
                {dialogState.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {dialogState.message}
              </p>

              <button
                onClick={() => setDialogState({ ...dialogState, open: false })}
                className="w-full py-3 rounded-xl gradient-secondary text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-md shadow-primary/20"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
