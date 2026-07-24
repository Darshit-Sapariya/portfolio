"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    duration: "Summer 2024 (15 Days)",
    role: "Web Development Intern",
    company: "CreArt Solutions Pvt. Ltd.",
    description:
      "Gained hands-on experience with HTML, CSS, and JavaScript. Learned about MERN stack fundamentals, version control with Git/GitHub, and code review best practices.",
  },
]

export default function Experience() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-8 flex items-center gap-3">
          <span className="text-2xl">💼</span> My Experience
        </h2>
      </motion.div>

      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="group relative p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            <div className="relative z-10">
              <p className="text-primary font-bold text-sm md:text-base mb-2 transition-colors duration-300">
                {exp.duration}
              </p>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 uppercase">
                {exp.role}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
