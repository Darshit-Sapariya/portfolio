import { Download, File } from "lucide-react"

export default function Resume() {
  return (
    <section id="resume" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Resume</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Resume Preview */}
          <div className="bg-card rounded-lg p-8 border-2 border-border flex flex-col items-center justify-center min-h-96">
            <File className="text-primary mb-4" size={64} />
            <h3 className="text-lg font-bold text-foreground mb-2">Resume.pdf</h3>
            <p className="text-muted-foreground text-sm text-center">
              Your professional resume showcasing your experience, skills, and achievements.
            </p>
          </div>

          {/* Download Section */}
          <div className="flex flex-col justify-center gap-6">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Download My Resume</h3>
              <p className="text-muted-foreground mb-6">
                Download my complete resume to view my detailed work history, education, certifications, and
                comprehensive skill set. Perfect for sharing with recruiters or keeping for your records.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="/Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors font-medium w-full justify-center"
              >
                <Download size={20} />
                Download Resume (PDF)
              </a>

              <p className="text-xs text-muted-foreground text-center">
                Last updated: December 2024 | Format: PDF (2.5 MB)
              </p>
            </div>

            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-3 text-sm">Quick Overview</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Skilled in HTML, CSS, JS, MERN basics.</li>
                <li>✓ Built Travel Advisor and College Management projects.</li>
                <li>✓ Leadership and mentoring experience</li>
                <li>✓ Strong problem-solving and teamwork skills.</li>
                <li>✓ IT student with a solid technical foundation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
