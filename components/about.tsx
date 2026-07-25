"use client"

import { motion } from "framer-motion"

export default function About() {
  const quickFacts = [
    { label: "Experience", value: "2+ Years (Learning & Internships)" },
    { label: "Education", value: "B.E. in Computer Engineering (2026)" },
    { label: "Core Tech", value: "Python, Django, REST APIs, React, PostgreSQL" },
    { label: "Location", value: "Ahmedabad, Gujarat, India" },
    { label: "Availability", value: "Open for Jobs & Internships" },
  ]

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get a quick insight into my professional profile, core values, and educational background.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-7 space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              A Passionate Full-Stack Python Django Developer
            </h3>
            
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              I specialize in designing highly scalable backend servers, constructing robust and standardized REST APIs via the Django REST Framework (DRF), and linking them with responsive frontend interfaces.
            </p>

            <ul className="space-y-4">
              {[
                "Proactive learner continually researching caching solutions, advanced query optimization, and system performance.",
                "Eager to contribute to collaborative backend and full-stack software development projects.",
                "Keen eye for detail, ensuring clean data models, optimized databases, and clean codebase structures.",
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                  <span className="text-primary font-bold mt-1">⚡</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-5 w-full"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              <h4 className="text-lg font-bold text-foreground mb-6 uppercase tracking-wider border-b border-white/5 pb-3">
                Quick Facts
              </h4>
              <div className="space-y-4">
                {quickFacts.map((fact, i) => (
                  <div key={i} className="flex flex-col gap-1 border-b border-white/5 pb-3 last:border-b-0 last:pb-0">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                      {fact.label}
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
