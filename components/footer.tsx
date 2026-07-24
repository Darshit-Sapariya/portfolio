import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6"
import { Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg">
              D
            </div>
            <span className="text-foreground font-semibold">Darshit Sapariya</span>
          </div>

          <p className="text-sm text-muted-foreground order-3 md:order-2">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>

          <div className="flex gap-4 order-2 md:order-3">
            <a
              href="https://www.linkedin.com/in/sapariya-darshit-47b7b1287"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="https://github.com/Darshit-Sapariya"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="mailto:sapariyadarshit3596@gmail.com"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
