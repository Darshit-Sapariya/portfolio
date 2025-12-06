"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-2">
              Hi, I'm{" "}
              <span className="text-primary">
                Darshit
                <br />
                Sapariya
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">Aspiring Frontend Developer</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-md">
              A passionate and driven developer with a strong foundation in modern web technologies. Eager to apply my
              skills and learn from experienced professionals in a challenging internship role.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="border-2 border-muted text-foreground px-6 py-3 rounded-lg font-semibold hover:border-primary hover:text-primary transition-colors text-center"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-primary/20">
                <Image
                  src="/my.jpg"
                  alt="Darshit Sapariya"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
