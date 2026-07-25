import type React from "react"
import type { Metadata } from "next"
import { Sora, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Darshit Sapariya — Full-Stack Python Django Developer",
  description:
    "Full-Stack Python Django Developer specializing in scalable backends, REST APIs (DRF), PostgreSQL, React, and modern web applications. Open to internships & full-time roles.",
  keywords: [
    "Darshit Sapariya",
    "Python Developer",
    "Django Developer",
    "Full-Stack Developer",
    "REST API",
    "Django REST Framework",
    "PostgreSQL",
    "React Developer",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Darshit Sapariya" }],
  creator: "Darshit Sapariya",
  openGraph: {
    type: "website",
    title: "Darshit Sapariya — Full-Stack Python Django Developer",
    description:
      "Explore my projects, experience, and skills in Python, Django, REST APIs, and full-stack development.",
    url: "https://darshitsapariya.dev",
    siteName: "Darshit Sapariya Portfolio",
    images: [
      {
        url: "/sd.png",
        width: 1200,
        height: 630,
        alt: "Darshit Sapariya — Full-Stack Python Django Developer",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darshit Sapariya — Full-Stack Python Django Developer",
    description:
      "Full-Stack Developer specializing in Python, Django, REST APIs, and scalable web applications.",
    images: ["/sd.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/sd.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Darshit Sapariya",
              url: "https://darshitsapariya.dev",
              jobTitle: "Full-Stack Python Django Developer",
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Sal College of Engineering (GTU)",
              },
              knowsAbout: [
                "Python",
                "Django",
                "Django REST Framework",
                "PostgreSQL",
                "React",
                "Next.js",
                "REST APIs",
                "Full-Stack Development",
              ],
              sameAs: [
                "https://github.com/Darshit-Sapariya",
                "https://www.linkedin.com/in/sapariya-darshit-47b7b1287",
              ],
            }),
          }}
        />
      </head>
      <body className={`${sora.variable} ${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
