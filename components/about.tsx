"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
            I&apos;m an aspiring Full-Stack Developer specializing in Python and the Django framework. I have a passion for designing scalable backends, building robust REST APIs using Django Rest Framework (DRF), and connecting them with interactive frontends.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
            I am a proactive learner, always exploring new database designs, caching mechanisms, and system optimization techniques. 
            I&apos;m currently looking for an internship or entry-level job where I can contribute to backend and full-stack projects, 
            learn from experienced mentors, and build solid, high-performance web applications.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            I am currently pursuing my B.E. in Information Technology, which I will complete in 2026.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
