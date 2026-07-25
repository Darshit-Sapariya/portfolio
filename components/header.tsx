"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Works", href: "#works" },
  { label: "Resume", href: "#resume" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-slate-900/60 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 md:h-14 transition-all duration-500">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-base shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
                DS
              </div>
              <span className="hidden sm:block text-foreground text-sm font-bold tracking-wider group-hover:text-primary transition-colors duration-300">DARSHIT SAPARIYA</span>
            </a>

            <nav className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative px-4 py-2 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 gradient-primary rounded-full transition-all duration-300 group-hover:w-1/2" />
                </a>
              ))}
              <a
                href="#contact"
                className="ml-4 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white rounded-full gradient-secondary hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 shadow-md shadow-secondary/10"
              >
                Hire Me
              </a>
            </nav>

            <button
              className="lg:hidden text-foreground p-2 rounded-xl bg-card/50 border border-border/50 hover:bg-card transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-12 left-0 right-0 z-45 bg-slate-950/95 backdrop-blur-xl border-b border-white/10 lg:hidden shadow-2xl"
          >
            <nav className="flex flex-col p-6 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors py-3 border-b border-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white rounded-full gradient-secondary text-center shadow-lg shadow-primary/20"
              >
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
