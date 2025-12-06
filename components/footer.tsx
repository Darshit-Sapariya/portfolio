import { Linkedin, Github, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Darshit Sapariya</h3>
            <p className="opacity-90">Frontend developer passionate about creating beautiful digital experiences.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 opacity-90">
              <li>
                <a href="#about" className="hover:opacity-100 transition-opacity">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:opacity-100 transition-opacity">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow</h4>
            <div className="flex gap-4">
              <a
                href="www.linkedin.com/in/sapariya-darshit-47b7b1287"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Darshit-Sapariya"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Github size={20} />
              </a>
              <a href="mailto: sapariyadarshit3596@gmail.com" className="hover:scale-110 transition-transform">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center opacity-90">
          <p>&copy; 2025 Darshit Sapariya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
