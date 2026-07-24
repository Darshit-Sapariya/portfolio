"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "Custom website development using modern frameworks like React, Next.js, and Angular with responsive design.",
  },
  {
    id: "02",
    title: "UI/UX Design",
    description:
      "Creating intuitive and engaging user experiences through clean design principles and attention to detail.",
  },
  {
    id: "03",
    title: "API Integration",
    description:
      "Building and integrating APIs to connect websites with third-party applications and services.",
  },
  {
    id: "04",
    title: "CMS Development",
    description:
      "Setting up user-friendly content management solutions so clients can manage content easily.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            My Quality Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Turning ideas into unique web projects that inspire both you and your customers.
          </p>
        </motion.div>

        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative border-b border-border py-6 md:py-8 cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent transition-all duration-500 px-4 -mx-4 rounded-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <span className="text-2xl md:text-3xl font-bold text-primary group-hover:text-white transition-colors duration-300">
                  {service.id}
                </span>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground flex-1">
                  {service.title}
                </h3>
                <p className="text-muted-foreground md:max-w-md group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </p>
                <ArrowUpRight className="text-primary group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
