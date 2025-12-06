export default function Experience() {
  const experiences = [
    {
      duration: "Summer 2024 (15 Days)",
      role: "Web Development Intern",
      company: "CreArt Solutions Pvt. Ltd.",
      achievements: [
        "Gained hands-on experience with HTML, CSS, and JavaScript by assisting senior developers with UI tasks.",
        "Observed and learned from code reviews, gaining insight into best practices and code quality standards.",
         "Learned about MERN stack, where I learned the fundamentals of building full-stack web applications. Gained hands-on experience with MongoDB, Express.js, React, and Node.js, including creating APIs, managing data, and developing responsive UI components.",
        "Learned about version control using Git and GitHub.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Internship Experience</h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index}>
              {/* Timeline dot */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                </div>

                {/* Content card */}
                <div className="pb-8 flex-1">
                  <div className="bg-card rounded-lg p-6 md:p-8 border border-border">
                    <p className="text-sm text-muted-foreground mb-2">{exp.duration}</p>
                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                    <p className="text-primary font-medium mb-4">{exp.company}</p>

                    {/* Achievements as bullet points */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex gap-3 text-muted-foreground text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
