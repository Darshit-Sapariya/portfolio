"use client"

import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaAngular, FaGitAlt } from "react-icons/fa"
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si"

const skills = [
  { name: "HTML5", icon: FaHtml5, level: 90, color: "from-orange-500 to-orange-600" },
  { name: "CSS3", icon: FaCss3Alt, level: 85, color: "from-blue-500 to-blue-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 82, color: "from-cyan-400 to-blue-500" },
  { name: "JavaScript", icon: FaJsSquare, level: 78, color: "from-yellow-400 to-yellow-600" },
  { name: "React", icon: FaReact, level: 75, color: "from-blue-300 to-blue-600" },
  { name: "Next.js", icon: SiNextdotjs, level: 70, color: "from-gray-500 to-gray-700" },
  { name: "Angular", icon: FaAngular, level: 65, color: "from-red-500 to-red-700" },
  { name: "TypeScript", icon: SiTypescript, level: 68, color: "from-blue-600 to-blue-800" },
  { name: "Git", icon: FaGitAlt, level: 80, color: "from-orange-500 to-red-600" },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            My Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group flex flex-col items-center gap-4 p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon />
                </div>
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.08 }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
