import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Travel-planner ",
      description: "Full-stack application with, Register And Login , Create Trip , Add places .",
      image: "/Travel.jpg",
      tags: ["React", "Next.js", "Express.js", "MongoDB"],
      links: {
        github: "https://github.com/Darshit-Sapariya/travel-advisor.git",
      },
    },
    {
      title: "Collage Management System",
      description: "Collaborative task management tool with real-time updates and team collaboration features.",
      image: "/clg.png",
      tags: ["HTML", "CSS", "bootstrap", "JavaScript", "PHP", "MySQL"],
      links: {
        github: "https://github.com/Darshit-Sapariya/clg_management.git",
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
    <section id="projects" className="py-16 md:py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/80 transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 border border-primary text-primary rounded hover:bg-primary/10 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
