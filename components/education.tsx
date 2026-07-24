"use client"

import { motion } from "framer-motion"

const educationList = [
  {
    period: "2023 - 2026",
    degree: "Bachelor of Engineering",
    specialization: "Computer Engineering",
    school: "Sal College of Engineering (GTU)",
    status: "Pursuing",
  },
  {
    period: "2020 - 2023",
    degree: "Diploma in Computer Engineering",
    specialization: "",
    school: "Government Polytechnic, Gandhinagar (GTU)",
    status: "CGPA: 7.99",
  },
]

export default function Education() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-8 flex items-center gap-3">
          <span className="text-2xl">🎓</span> My Education
        </h2>
      </motion.div>

      <div className="flex flex-col gap-6">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="group relative p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            <div className="relative z-10">
              <p className="text-primary font-bold text-sm md:text-base mb-2 transition-colors duration-300">
                {edu.period}
              </p>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 uppercase">
                {edu.degree}
                {edu.specialization ? ` - ${edu.specialization}` : ""}
              </h3>
              <p className="text-muted-foreground text-sm mb-1">{edu.school}</p>
              <p className="text-muted-foreground text-sm">{edu.status}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
