import { FaAngular, FaJsSquare, FaHtml5, FaCss3Alt, FaGit } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"
import { GrReactjs } from "react-icons/gr"

export default function Skills() {
  const technicalSkills = [
    { name: "HTML5", icon: FaHtml5, color: "from-orange-500 to-orange-600" },
    { name: "CSS3", icon: FaCss3Alt, color: "from-blue-400 to-blue-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "from-cyan-400 to-blue-500" },
    { name: "JavaScript", icon: FaJsSquare, color: "from-yellow-400 to-yellow-500" },
    { name: "Angular", icon: FaAngular, color: "from-red-500 to-red-600" },
    { name: "React", icon: GrReactjs, color: "from-blue-300 to-blue-500" },
    { name: "Git", icon: FaGit, color: "from-orange-600 to-red-600" },
  ]

  const softSkills = [
    "Quick Learner",
    "Problem Solving",
    "Team Collaboration",
    "Adaptability",
    "Attention to Detail",
    "Creativity",
  ]

  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Technical Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {technicalSkills.map((skill) => {
            const IconComponent = skill.icon
            return (
              <div key={skill.name} className="flex flex-col items-center gap-4">
                <div
                  className={`w-24 h-24 bg-slate-700/80 border border-slate-600 
                  bg-linear-to-br ${skill.color} rounded-xl flex items-center justify-center 
                  shadow-lg hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="text-white text-4xl" />
                </div>
                <span className="text-gray-300 font-medium text-sm text-center">{skill.name}</span>
              </div>
            )
          })}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Soft Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {softSkills.map((skill) => (
              <div
                key={skill}
                className="bg-slate-700/50 border border-slate-600 text-slate-100 px-4 py-2 rounded-full font-medium text-sm hover:bg-slate-700 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
