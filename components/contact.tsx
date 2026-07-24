"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, ArrowUpRight, Loader2, CheckCircle2, XCircle, X } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa6"
import emailjs from "emailjs-com"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sapariyadarshit3596@gmail.com",
    href: "mailto:sapariyadarshit3596@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8347402205",
    href: "tel:+918347402205",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+91 8347402205",
    href: "https://wa.me/918347402205?text=Hi%20Darshit,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sola, Ahmedabad - 380060",
    href: null,
  },
]

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
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-card rounded-2xl border border-border text-center hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                <info.icon className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-foreground mb-2">{info.label}</h3>
              {info.href ? (
                <a href={info.href} className="text-primary hover:underline text-sm">
                  {info.value}
                </a>
              ) : (
                <p className="text-muted-foreground text-sm">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto relative group"
        >
          {/* Ambient blur behind form */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 pointer-events-none" />

          {/* Form glass card wrapper */}
          <div className="relative bg-card/65 backdrop-blur-xl border border-border/80 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-background/50 border border-border/80 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/20 hover:bg-background/80 transition-all duration-300"
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
                    className="w-full px-5 py-4 rounded-xl bg-background/50 border border-border/80 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/20 hover:bg-background/80 transition-all duration-300"
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
                  className="w-full px-5 py-4 rounded-xl bg-background/50 border border-border/80 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/20 hover:bg-background/80 transition-all duration-300"
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
                  className="w-full px-5 py-4 rounded-xl bg-background/50 border border-border/80 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/20 hover:bg-background/80 transition-all duration-300 resize-none"
                  required
                  disabled={isSubmitting}
                  suppressHydrationWarning
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                suppressHydrationWarning
                className="w-full px-6 py-4 rounded-xl gradient-secondary text-white font-bold text-sm hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-primary/25"
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
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />

            {/* Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-md bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-2xl z-10 text-center"
            >
              <button
                onClick={() => setDialogState({ ...dialogState, open: false })}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/50 transition-colors"
              >
                <X size={18} />
              </button>

              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {dialogState.type === "success" ? (
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 size={36} />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center border border-rose-500/30">
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
                className="w-full py-3 rounded-xl gradient-secondary text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-md"
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
