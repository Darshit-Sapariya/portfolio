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
            I&apos;m an aspiring frontend developer with a strong passion for building clean, beautiful, and functional web applications. 
            My journey into programming began with a simple &ldquo;Hello, World!&rdquo; and has grown into a dedication to mastering modern web technologies.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
            I am a proactive learner, always exploring new tools and approaches to improve my skills. 
            I&apos;m currently looking for an internship or entry-level job where I can contribute to real projects, 
            learn from experienced mentors, and move forward confidently in my career as a software developer.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            I am currently pursuing my B.E. in Information Technology, which I will complete in 2026.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
