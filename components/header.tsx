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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/40 backdrop-blur-lg border-b border-white/5 shadow-md shadow-black/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-sm shadow-md shadow-primary/10">
                D
              </div>
              <span className="hidden sm:block text-foreground text-sm font-semibold tracking-wide">Darshit Sapariya</span>
            </a>

            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative px-3.5 py-1.5 text-xs font-semibold text-foreground/85 hover:text-foreground transition-colors group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 gradient-primary rounded-full transition-all duration-300 group-hover:w-3/4" />
                </a>
              ))}
              <a
                href="#contact"
                className="ml-3 px-5 py-2 text-xs font-bold text-white rounded-full gradient-secondary hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-md shadow-secondary/10"
              >
                Hire Me!
              </a>
            </nav>

            <button
              className="lg:hidden text-foreground p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-14 left-0 right-0 z-40 bg-background/98 backdrop-blur-md border-b border-border lg:hidden"
          >
            <nav className="flex flex-col p-6 gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-foreground/80 hover:text-foreground transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-6 py-3 text-sm font-bold text-white rounded-full gradient-secondary text-center"
              >
                Hire Me!
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
