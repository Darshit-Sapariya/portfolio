export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 inline-block relative">
            About Me
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full mt-2"></div>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
           I’m an aspiring frontend developer with a strong passion for building clean, beautiful, and functional web applications. My journey into programming began with a simple “Hello, World!” and has grown into a dedication to mastering modern web technologies.
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
           I am a proactive learner, always exploring new tools and approaches to improve my skills. I’m currently looking for a internship + Entry Leval Job where I can contribute to real projects, learn from experienced mentors, and move forward confidently in my career as a software developer.
          </p>

           <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
          I am currently pursuing my B.E. in Information Technology, which I will complete in 2026.
          </p>
        </div>
      </div>
    </section>
  )
}
