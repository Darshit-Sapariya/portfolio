"use client"
import type React from "react"
import { useState, useRef } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return;

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
        "-b6DURYWzSLuzhEdZ"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Contact Me</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-background rounded-lg p-6 border border-border text-center">
            <Mail className="text-primary mx-auto mb-4" size={32} />
            <h3 className="font-bold text-foreground mb-2">Email</h3>
            <a href="mailto:sapariyadarshit3596@gmail.com" className="text-primary hover:underline">
              sapariyadarshit3596@gmail.com
            </a>
          </div>

          <div className="bg-background rounded-lg p-6 border border-border text-center">
            <Phone className="text-primary mx-auto mb-4" size={32} />
            <h3 className="font-bold text-foreground mb-2">Phone</h3>
            <a href="tel:+918347402205" className="text-primary hover:underline">
              +91 8347402205
            </a>
          </div>

          <div className="bg-background rounded-lg p-6 border border-border text-center">
            <MapPin className="text-primary mx-auto mb-4" size={32} />
            <h3 className="font-bold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground">Sola, Ahmedabad - 380060, Gujarat, India</p>
          </div>
        </div>

        <div className="bg-background rounded-lg p-8 border border-border max-w-2xl mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
