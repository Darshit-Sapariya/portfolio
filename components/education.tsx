"use client"

import { motion } from "framer-motion"
import { GraduationCap, Star, Building2, Calendar, BookOpen } from "lucide-react"

const educationList = [
  {
    period: "2023 – 2026",
    degree: "Bachelor of Engineering",
    short: "B.E.",
    specialization: "Information Technology",
    school: "Sal College of Engineering",
    university: "Gujarat Technological University (GTU)",
    cgpa: "8.46",
    highlights: ["Software Engineering", "Database Systems", "Computer Networks", "Full-Stack Development"],
    iconBg: "from-violet-600 to-indigo-600",
    accentColor: "violet",
    badgeColor: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    borderAccent: "hover:border-violet-500/30",
    tagLine: "from-violet-500/60 via-indigo-500/40 to-transparent",
  },
  {
    period: "2020 – 2023",
    degree: "Diploma in Engineering",
    short: "Diploma",
    specialization: "Computer Engineering",
    school: "Govt. Polytechnic, Gandhinagar",
    university: "Gujarat Technological University (GTU)",
    cgpa: "7.99",
    highlights: ["Programming Basics", "Digital Electronics", "Web Technologies", "OOP Concepts"],
    iconBg: "from-sky-600 to-cyan-600",
    accentColor: "sky",
    badgeColor: "bg-sky-500/10 border-sky-500/20 text-sky-400",
    borderAccent: "hover:border-sky-500/30",
    tagLine: "from-sky-500/60 via-cyan-500/40 to-transparent",
  },
]

export default function Education() {
  return (
    <div className="relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/25">
            <GraduationCap size={16} className="text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Education History</h2>
        </div>
        <p className="text-xs text-muted-foreground ml-12">Academic qualifications & achievements</p>
      </motion.div>

      {/* Timeline */}
      <div className="relative space-y-5">
        {/* Vertical Line */}
        <div className="absolute left-[22px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/40 via-white/10 to-transparent rounded-full" />

        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative flex gap-5 group"
          >
            {/* Degree Avatar */}
            <div className="shrink-0 z-10">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${edu.iconBg} flex items-center justify-center text-white text-[11px] font-extrabold shadow-lg ring-2 ring-slate-950 leading-none text-center`}>
                {edu.short}
              </div>
            </div>

            {/* Card */}
            <div className={`flex-1 relative bg-card/50 backdrop-blur-sm border border-white/5 ${edu.borderAccent} rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-0.5`}>
              {/* Top accent */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${edu.tagLine}`} />

              <div className="p-5">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/8 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                    <Calendar size={9} />
                    {edu.period}
                  </span>
                  <span className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${edu.badgeColor}`}>
                    <Star size={9} className="fill-current" />
                    CGPA {edu.cgpa}
                  </span>
                </div>

                {/* Degree Title */}
                <h3 className="text-base font-bold text-foreground group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                  {edu.degree}
                  <span className="text-primary font-extrabold"> — {edu.specialization}</span>
                </h3>

                {/* School */}
                <div className="mt-1.5 mb-3 space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <Building2 size={11} className="text-muted-foreground/60 shrink-0" />
                    <span className="text-[13px] font-semibold text-muted-foreground">{edu.school}</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground/50 pl-[18px]">{edu.university}</p>
                </div>

                {/* Subject Highlights */}
                <div className="flex flex-wrap gap-1.5">
                  {edu.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/8 text-[11px] font-medium text-foreground/65"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
