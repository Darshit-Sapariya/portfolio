"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react"
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

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
        alert("Message sent successfully!")
        setFormData({ name: "", email: "", subject: "", message: "" })
      })
      .catch(() => {
        alert("Failed to send message.")
      })
  }

  return (
    <section id="contact" className="py-20 md:py-32">
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

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
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
          className="max-w-2xl mx-auto"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
                suppressHydrationWarning
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
                suppressHydrationWarning
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              required
              suppressHydrationWarning
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              required
              suppressHydrationWarning
            />
            <button
              type="submit"
              suppressHydrationWarning
              className="w-full px-6 py-4 rounded-xl gradient-secondary text-white font-bold text-sm hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Send Message
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
