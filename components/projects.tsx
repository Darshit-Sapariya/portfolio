"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Github, ExternalLink, BookOpen, X, Code, Database, Shield, Star, Award } from "lucide-react"

const categories = ["All", "Desktop", "Web"]

interface Project {
  title: string
  category: string
  displayCategory: string
  status: string
  description: string
  image: string
  tags: string[]
  highlights: string[]
  isFeatured: boolean
  certificate?: string
  links: {
    github: string
    live: string
  }
  caseStudy: {
    problem: string
    solution: string
    features: string[]
    architecture: string
  }
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      title: "Vyaparix",
      category: "Desktop",
      displayCategory: "Desktop Business Management Software",
      status: "Completed",
      isFeatured: true,
      description: "Vyaparix is a desktop business management and billing software developed for small and medium businesses. It helps manage invoices, inventory, customers, suppliers, purchases, sales, GST billing, and business reports through a clean and easy-to-use interface.",
      image: "/Project_vyaparix_logo.png",
      tags: ["Python", "Django", "Tailwind CSS", "SQLite", "Electron", "HTML", "CSS", "JavaScript"],
      highlights: [
        "Converted Django web application into a desktop application using Electron.",
        "Designed for real business usage.",
        "Optimized for fast performance and clean UI."
      ],
      links: {
        github: "https://github.com/Darshit-Sapariya/Vyaparix",
        live: "https://vyaparix.store/",
      },
      caseStudy: {
        problem: "Small and medium businesses needed an offline-first, high-performance desktop application for seamless invoice generation, GST billing, and real-time inventory tracking without complex web deployment overhead.",
        solution: "Developed a secure Django backend coupled with SQLite for local data persistence, and wrapped the application using Electron to deliver a native desktop experience with responsive Tailwind CSS components.",
        features: [
          "Professional GST Invoice Generation & PDF Export",
          "Real-time Inventory & Stock Management",
          "Comprehensive Customer & Supplier Portals",
          "Purchase & Sales Order Management with full Reporting",
          "Multiple customizable invoice templates",
          "Business Dashboard with graphs & analytics"
        ],
        architecture: "Electron Desktop App ↔ Django Backend (Python) ↔ SQLite Local Database"
      }
    },
    {
      title: "eBharatTender",
      category: "Web",
      displayCategory: "Government Tender Management System",
      status: "Completed",
      isFeatured: true,
      description: "eBharatTender is a government tender management platform that simplifies publishing, searching, applying, and managing tenders. The platform supports different user roles with secure authentication and an organized workflow.",
      image: "/Project_ebharattender_logo.png",
      tags: ["Python", "Django", "Django REST Framework", "Bootstrap", "SQLite", "HTML", "CSS", "JavaScript"],
      highlights: [
        "Developed during 3-month Internship at Sparks To Ideas.",
        "Integrated role-based workflow, Google OAuth login, and Razorpay gateway.",
        "Built using Django best practices with scalable MVT architecture."
      ],
      certificate: "/Sparks_To_Ideas_Certificate.png",
      links: {
        github: "https://github.com/Darshit-Sapariya/ebharatTender",
        live: "https://ebharattender.onrender.com/",
      },
      caseStudy: {
        problem: "Simplifying the process of publishing, searching, and bidding on government tenders while maintaining role security and payment processing integrity.",
        solution: "Engineered a secure Django platform with distinct roles (Admin, Creator, Bidder), integrated Google OAuth for secure login, integrated Razorpay for EMD payment management, and implemented automated PDF receipt generation.",
        features: [
          "Role-based access control (Admin, Tender Creator, Bidder)",
          "Advanced tender search and multi-parameter filters",
          "Google OAuth authentication and Razorpay payment integration",
          "EMD (Earnest Money Deposit) management and PDF report generation",
          "Dashboard & analytics for bidding activity"
        ],
        architecture: "Django MVT & REST Framework (Python) ↔ Razorpay API ↔ SQLite Database"
      }
    }
  ]

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeFilter ||
            project.tags.some((tag) => tag.toLowerCase() === activeFilter.toLowerCase())
        )

  return (
    <section id="works" className="py-20 md:py-32 relative">
      {/* Glow Effect */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full blur-[150px] bg-purple-600/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated showcase of applications highlighting backend engineering, database architectures, and full-stack solutions.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-card/65 backdrop-blur-md rounded-full p-1.5 border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === cat
                    ? "gradient-primary text-white shadow-md shadow-primary/25"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-2xl overflow-hidden bg-card/40 border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col h-full shadow-lg"
              >
                {/* Image Section */}
                <div className="relative h-48 sm:h-52 overflow-hidden border-b border-white/5 bg-slate-900">
                  {project.image ? (
                    <div className="relative w-full h-full bg-gradient-to-br from-slate-950 to-slate-900 flex items-center justify-center p-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="relative w-full h-full bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
                      <div className="relative text-center p-4">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-purple-500/10">
                          {project.title === "Vyaparix" ? (
                            <span className="text-3xl font-extrabold text-primary">V</span>
                          ) : (
                            <span className="text-3xl font-extrabold text-indigo-400">eB</span>
                          )}
                        </div>
                        <span className="text-[10px] font-bold tracking-wider text-muted-foreground/80 uppercase">
                          {project.displayCategory}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {/* Status Badge */}
                  <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {project.status}
                  </span>

                  {/* Featured Badge */}
                  {project.isFeatured && (
                    <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-bold uppercase tracking-wider border border-amber-500/25 flex items-center gap-1">
                      <Star size={10} className="fill-current" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Info Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest mb-1.5 block">
                    {project.displayCategory}
                  </span>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-5 flex-grow">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1">
                      Key Highlights
                    </h4>
                    <ul className="space-y-1.5">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary font-bold mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md bg-white/5 text-[11px] font-semibold text-foreground/80 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions Footer */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/5">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 text-xs font-bold text-foreground transition-all duration-300"
                    >
                      <Github size={14} />
                      Code
                    </a>
                    {project.links.live !== "#" ? (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 text-xs font-bold text-foreground transition-all duration-300"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    ) : (
                      <span className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-white/5 bg-white/5 opacity-55 text-xs font-bold text-muted-foreground/75 cursor-not-allowed">
                        <ExternalLink size={14} />
                        Soon
                      </span>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl gradient-secondary text-white text-xs font-bold transition-all duration-300 hover:opacity-90 shadow-md shadow-primary/10"
                    >
                      <BookOpen size={14} />
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Case Study Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-2xl bg-card border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[85vh]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>

                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20 mb-4">
                  {selectedProject.displayCategory}
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                  {selectedProject.title} Case Study
                </h3>

                <div className="space-y-6">
                  {/* Architecture Banner */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
                    <Code className="text-primary shrink-0" size={20} />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Architecture Stack
                      </h4>
                      <p className="text-sm font-medium text-foreground mt-0.5">
                        {selectedProject.caseStudy.architecture}
                      </p>
                    </div>
                  </div>

                  {/* Problem & Solution */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                        <Shield size={15} /> The Problem
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {selectedProject.caseStudy.problem}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                        <Database size={15} /> Technical Solution
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {selectedProject.caseStudy.solution}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-4 border-t border-white/5">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
                      Key Features & Capabilities
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedProject.caseStudy.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                          <span className="text-primary font-bold mt-0.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Modal Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/5">
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 text-sm font-bold text-foreground transition-all duration-300"
                    >
                      <Github size={16} />
                      View Codebase
                    </a>
                    {selectedProject.links.live !== "#" ? (
                      <a
                        href={selectedProject.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full gradient-secondary text-white text-sm font-bold transition-all duration-300 hover:opacity-90 shadow-lg shadow-primary/20"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    ) : (
                      <span className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/5 bg-white/5 opacity-55 text-sm font-bold text-muted-foreground cursor-not-allowed">
                        <ExternalLink size={16} />
                        Live Demo (Soon)
                      </span>
                    )}
                    {selectedProject.certificate && (
                      <a
                        href={selectedProject.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-primary/25 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-bold transition-all duration-300"
                      >
                        <Award size={16} />
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
