export default function Education() {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      school: "Sal College of Engineering (GTU)",
      period: "2023 - 2026 (Pursuing)",
      cgpa: "",
    },
    {
      degree: "Diploma in Computer Engineering (CGPA: 7.99)",
      school: "Government Polytechnic, Gandhinagar (GTU)",
      period: "2020 - 2023",
      cgpa: "CGPA: 7.99",
    }
    
  ]

  return (
    <section id="education" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Education</h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 md:p-8 border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{edu.degree}</h3>
              <p className="text-foreground font-medium mb-2">{edu.school}</p>
              <p className="text-muted-foreground text-sm">{edu.period}</p>
              {edu.cgpa && <p className="text-muted-foreground text-sm">{edu.cgpa}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
