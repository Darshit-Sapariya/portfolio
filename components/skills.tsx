"use client"

import { motion } from "framer-motion"
import { FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaServer, FaGithub } from "react-icons/fa"
import { SiTailwindcss, SiDjango, SiPostgresql, SiElectron, SiMysql, SiSqlite, SiBootstrap } from "react-icons/si"
import { Sparkles, Bot, Terminal, Code2 } from "lucide-react"

const skillsData = [
  {
    category: "Backend",
    skills: [
      { name: "Python", icon: FaPython, color: "text-blue-400 border-blue-500/10 bg-blue-500/5" },
      { name: "Django", icon: SiDjango, color: "text-emerald-400 border-emerald-500/10 bg-emerald-500/5" },
      { name: "DRF (REST API)", icon: FaServer, color: "text-purple-400 border-purple-500/10 bg-purple-500/5" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-400 border-orange-500/10 bg-orange-500/5" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400 border-blue-500/10 bg-blue-500/5" },
      { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-400 border-yellow-500/10 bg-yellow-500/5" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-400 border-purple-500/10 bg-purple-500/5" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400 border-teal-500/10 bg-teal-500/5" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-indigo-400 border-indigo-500/10 bg-indigo-500/5" },
      { name: "MySQL", icon: SiMysql, color: "text-orange-400 border-orange-500/10 bg-orange-500/5" },
      { name: "SQLite", icon: SiSqlite, color: "text-sky-400 border-sky-500/10 bg-sky-500/5" },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git & GitHub", icon: FaGithub, color: "text-orange-400 border-orange-500/10 bg-orange-500/5" },
      { name: "Electron", icon: SiElectron, color: "text-sky-400 border-sky-500/10 bg-sky-500/5" },
      { name: "VS Code", icon: Code2, color: "text-blue-400 border-blue-500/10 bg-blue-500/5" },
    ],
  },
  {
    category: "AI Coding Platforms & Agents",
    skills: [
      { name: "Antigravity", icon: Sparkles, color: "text-purple-400 border-purple-500/10 bg-purple-500/5" },
      { name: "OpenCode", icon: Terminal, color: "text-emerald-400 border-emerald-500/10 bg-emerald-500/5" },
      { name: "Claude Code", icon: Bot, color: "text-amber-400 border-amber-500/10 bg-amber-500/5" },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-card/40 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive breakdown of technologies and developer workflow utilities I utilize to construct products.
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillsData.map((cat, catIdx) => (
            <div key={cat.category} className="space-y-6">
              <h3 className="text-xs uppercase font-extrabold tracking-widest text-primary border-l-2 border-primary pl-3">
                {cat.category}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {cat.skills.map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (catIdx * 0.1) + (index * 0.05) }}
                      className={`group flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-card/30 hover:border-primary/30 transition-all duration-300 hover:scale-[1.03]`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center border text-lg group-hover:scale-105 transition-transform duration-300 ${skill.color}`}>
                        <Icon />
                      </div>
                      <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
