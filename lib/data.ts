import {
  Server,
  Database,
  Code,
  Layout,
  GraduationCap,
  Star,
  Building2,
  Calendar,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa6"

export const siteConfig = {
  name: "Darshit Sapariya",
  title: "Full-Stack Python Django Developer",
  email: "sapariyadarshit3596@gmail.com",
  phone: "+91 8347402205",
  location: "Sola, Ahmedabad - 380060",
  locationFull: "Ahmedabad, Gujarat, India",
  resume: "/Resume.pdf",
  socials: {
    github: "https://github.com/Darshit-Sapariya",
    linkedin: "https://www.linkedin.com/in/sapariya-darshit-47b7b1287",
    whatsapp:
      "https://wa.me/918347402205?text=Hi%20Darshit,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
  },
}

export const quickFacts = [
  { label: "Experience", value: "1+ Year Learning & 3 Months Internship" },
  { label: "Education", value: "B.E. in Information Technology (2026)" },
  { label: "Core Tech", value: "Python, Django, REST APIs, PostgreSQL" },
  { label: "Location", value: siteConfig.locationFull },
  { label: "Availability", value: "Open for Jobs & Internships" },
]

export const aboutBullets = [
  "Proactive learner continually researching caching solutions, advanced query optimization, and system performance.",
  "Eager to contribute to collaborative backend and full-stack software development projects.",
  "Experienced with modern AI developer platforms like Antigravity, OpenCode, and Claude Code for efficient coding & workflows.",
  "Keen eye for detail, ensuring clean data models, optimized databases, and clean codebase structures.",
]

export const services = [
  {
    id: "01",
    title: "Backend Development",
    icon: Server,
    color: "text-blue-400 border-blue-500/20 bg-blue-500/5",
    description:
      "Creating robust, secure, and scalable backend systems using Python, Django, and Django REST Framework (DRF).",
  },
  {
    id: "02",
    title: "Database Design & SQL",
    icon: Database,
    color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
    description:
      "Designing efficient database schemas, query optimization, indexing, and management using PostgreSQL, MySQL, and SQLite.",
  },
  {
    id: "03",
    title: "API Design & Integration",
    icon: Code,
    color: "text-purple-400 border-purple-500/20 bg-purple-500/5",
    description:
      "Building standardized, clean, and well-documented REST APIs and integrating with third-party web services.",
  },
  {
    id: "04",
    title: "Full-Stack Applications",
    icon: Layout,
    color: "text-pink-400 border-pink-500/20 bg-pink-500/5",
    description:
      "Developing complete web applications by connecting Django backends with React/Next.js and modern styling frameworks.",
  },
]

export const projects = [
  {
    title: "Vyaparix",
    category: "Desktop",
    displayCategory: "Desktop Business Management Software",
    status: "Completed",
    isFeatured: true,
    description:
      "Vyaparix is a desktop business management and billing software developed for small and medium businesses. It helps manage invoices, inventory, customers, suppliers, purchases, sales, GST billing, and business reports through a clean and easy-to-use interface.",
    image: "/Project_vyaparix_logo.png",
    tags: ["Python", "Django", "Tailwind CSS", "SQLite", "Electron", "HTML", "CSS", "JavaScript"],
    highlights: [
      "Converted Django web application into a desktop application using Electron.",
      "Designed for real business usage.",
      "Optimized for fast performance and clean UI.",
    ],
    links: {
      github: "https://github.com/Darshit-Sapariya/Vyaparix",
      live: "https://vyaparix.store/",
    },
    caseStudy: {
      problem:
        "Small and medium businesses needed an offline-first, high-performance desktop application for seamless invoice generation, GST billing, and real-time inventory tracking without complex web deployment overhead.",
      solution:
        "Developed a secure Django backend coupled with SQLite for local data persistence, and wrapped the application using Electron to deliver a native desktop experience with responsive Tailwind CSS components.",
      features: [
        "Professional GST Invoice Generation & PDF Export",
        "Real-time Inventory & Stock Management",
        "Comprehensive Customer & Supplier Portals",
        "Purchase & Sales Order Management with full Reporting",
        "Multiple customizable invoice templates",
        "Business Dashboard with graphs & analytics",
      ],
      architecture: "Electron Desktop App ↔ Django Backend (Python) ↔ SQLite Local Database",
    },
  },
  {
    title: "eBharatTender",
    category: "Web",
    displayCategory: "Government Tender Management System",
    status: "Completed",
    isFeatured: true,
    description:
      "eBharatTender is a government tender management platform that simplifies publishing, searching, applying, and managing tenders. The platform supports different user roles with secure authentication and an organized workflow.",
    image: "/Project_ebharattender_logo.png",
    tags: ["Python", "Django", "Django REST Framework", "Bootstrap", "SQLite", "HTML", "CSS", "JavaScript"],
    highlights: [
      "Developed during 3-month Internship at Sparks To Ideas.",
      "Integrated role-based workflow, Google OAuth login, and Razorpay gateway.",
      "Built using Django best practices with scalable MVT architecture.",
    ],
    certificate: "/Sparks_To_Ideas_Certificate.png",
    links: {
      github: "https://github.com/Darshit-Sapariya/ebharatTender",
      live: "https://ebharattender.onrender.com/",
    },
    caseStudy: {
      problem:
        "Simplifying the process of publishing, searching, and bidding on government tenders while maintaining role security and payment processing integrity.",
      solution:
        "Engineered a secure Django platform with distinct roles (Admin, Creator, Bidder), integrated Google OAuth for secure login, integrated Razorpay for EMD payment management, and implemented automated PDF receipt generation.",
      features: [
        "Role-based access control (Admin, Tender Creator, Bidder)",
        "Advanced tender search and multi-parameter filters",
        "Google OAuth authentication and Razorpay payment integration",
        "EMD (Earnest Money Deposit) management and PDF report generation",
        "Dashboard & analytics for bidding activity",
      ],
      architecture: "Django MVT & REST Framework (Python) ↔ Razorpay API ↔ SQLite Database",
    },
  },
]

export const experiences = [
  {
    duration: "Jan 2026 – Apr 2026",
    durationBadge: "3 Months",
    role: "Python Developer Intern",
    company: "Sparks To Ideas",
    initials: "SI",
    location: "Ahmedabad, India",
    type: "Internship",
    tags: ["Python", "Django", "DRF", "SQLite", "Razorpay", "OAuth"],
    description:
      "Engineered and deployed the eBharatTender platform — a government tender management system. Developed role-based authentication (Admin/Creator/Bidder), Google OAuth login, Razorpay payment gateway, and automated PDF receipt generation.",
    certificate: "/Sparks_To_Ideas_Certificate.png",
    iconBg: "from-indigo-600 to-purple-600",
    borderAccent: "hover:border-indigo-500/30",
    dotBorder: "border-indigo-500/60",
    dotText: "text-indigo-400",
    tagLine: "from-indigo-500/60 via-purple-500/40 to-transparent",
  },
  {
    duration: "Summer 2024",
    durationBadge: "15 Days",
    role: "Full-Stack Developer Intern",
    company: "CreArt Solutions Pvt. Ltd.",
    initials: "CA",
    location: "Ahmedabad, India",
    type: "MERN Stack",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "REST API"],
    description:
      "Worked on the MERN stack, building responsive React UIs, RESTful APIs with Express and Node.js, and MongoDB database schema design for real-world web applications.",
    certificate: "/CreArt_Solutions_Certificate.png",
    iconBg: "from-cyan-600 to-blue-600",
    borderAccent: "hover:border-cyan-500/30",
    dotBorder: "border-cyan-500/60",
    dotText: "text-cyan-400",
    tagLine: "from-cyan-500/60 via-blue-500/40 to-transparent",
  },
]

export const educationList = [
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

export const resumeHighlights = [
  "Backend web development with Python and Django",
  "Robust REST APIs with Django REST Framework (DRF)",
  "Relational database design (PostgreSQL / MySQL / SQLite)",
  "AI-assisted coding & development using Antigravity, OpenCode, and Claude Code",
]

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: siteConfig.phone,
    href: siteConfig.socials.whatsapp,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.location,
    href: null,
  },
]