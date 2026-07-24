"use client"

import { motion } from "framer-motion"
import { Download, FileText, Check } from "lucide-react"

export default function Resume() {
  return (
    <section id="resume" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-6">
              Download My Resume
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Get a complete overview of my skills, experience, education, and projects. 
              Perfect for sharing with recruiters or keeping for reference.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Frontend development with React, Next.js, Angular",
                "Full-stack projects with MERN stack",
                "Strong problem-solving and teamwork skills",
                "IT student with solid technical foundation",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="/Resume.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full gradient-secondary text-white font-bold text-sm hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-sm aspect-[3/4] bg-card rounded-2xl border-2 border-border flex flex-col items-center justify-center p-8 group hover:border-primary/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <FileText size={64} className="text-primary mb-4 relative z-10" />
              <h3 className="text-lg font-bold text-foreground mb-2 relative z-10">Resume.pdf</h3>
              <p className="text-sm text-muted-foreground text-center relative z-10">
                My professional resume
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
