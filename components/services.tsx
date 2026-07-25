"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import { Server, Database, Code, Layout } from "lucide-react"

const services = [
  {
    id: "01",
    title: "Backend Development",
    icon: Server,
    color: "text-blue-400 border-blue-500/20 bg-blue-500/5",
    description:
      "Creating robust, secure, and scalable backend systems using Python, Django, and Django REST Framework (DRF).",
  },
  {
    id: "02",
    title: "Database Design & SQL",
    icon: Database,
    color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
    description:
      "Designing efficient database schemas, query optimization, indexing, and management using PostgreSQL, MySQL, and SQLite.",
  },
  {
    id: "03",
    title: "API Design & Integration",
    icon: Code,
    color: "text-purple-400 border-purple-500/20 bg-purple-500/5",
    description:
      "Building standardized, clean, and well-documented REST APIs and integrating with third-party web services.",
  },
  {
    id: "04",
    title: "Full-Stack Applications",
    icon: Layout,
    color: "text-pink-400 border-pink-500/20 bg-pink-500/5",
    description:
      "Developing complete web applications by connecting Django backends with React/Next.js and modern styling frameworks.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-card/40 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Services & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Providing high-quality software engineering solutions tailored to performance, reliability, and excellent user experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-card/50 border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors pointer-events-none" />
                
                <div>
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 ${service.color}`}>
                    <Icon size={22} />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="text-sm font-mono text-muted-foreground">
                    SERVICE {service.id}
                  </span>
                  <span className="text-xs font-bold text-primary group-hover:text-white uppercase tracking-wider flex items-center gap-1 transition-colors">
                    Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
