"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const categories = ["All", "Web", "UI/UX", "Apps"]

export default function Projects() {
  const projects = [
    {
      title: "Travel-planner ",
      description: "Full-stack application with, Register And Login , Create Trip , Add places .",
      image: "/Travel.jpg",
      tags: ["React", "Next.js", "Express.js", "MongoDB"],
      links: {
        github: "https://github.com/Darshit-Sapariya/travel-advisor.git",
        live: "#",
      },
    },
    {
      title: "Collage Management System",
      description: "Collaborative task management tool with real-time updates and team collaboration features.",
      image: "/clg.png",
      tags: ["HTML", "CSS", "bootstrap", "JavaScript", "PHP", "MySQL"],
      links: {
        github: "https://github.com/Darshit-Sapariya/clg_management.git",
        live: "#",
      },
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website built with react featuring smooth animations and responsive design.",
      image: "/portfolio.png",
      tags: ["React", "+", "AI"],
      links: {
        github: "#",
        live: "#",
      },
    },
  ]

  return (
    <section id="works" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            My Recent Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Turning ideas into unique web projects that inspire both you and your customers.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1 bg-card rounded-full p-1.5 border border-border">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? "gradient-primary text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative rounded-xl overflow-hidden bg-card border border-border"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white"
                  >
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-white/80">{project.description}</p>
                    <ArrowUpRight className="absolute top-1/2 right-6 -translate-y-1/2" size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
