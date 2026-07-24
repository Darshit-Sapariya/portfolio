"use client"

import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa6"

export default function WhatsAppButton() {
  const phoneNumber = "918347402205"
  const defaultMessage = "Hi Darshit! I visited your portfolio and would like to connect."

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative group w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 transition-colors duration-300"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse Ring Effect */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping group-hover:animate-none" />

        {/* WhatsApp Icon */}
        <FaWhatsapp className="text-3xl relative z-10" />
      </motion.a>
    </div>
  )
}
