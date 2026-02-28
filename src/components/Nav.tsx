import { motion } from "framer-motion"
import { Download } from "lucide-react"
import resumePdf from "../assets/Shubham Resume word 28 feb.pdf"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] backdrop-blur-md bg-[var(--color-bg)]/80"
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-semibold text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
        >
          Shubham Agrawal
        </a>
        <div className="flex items-center gap-3 sm:gap-6">
          <ul className="flex items-center gap-3 sm:gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs sm:text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={resumePdf}
            download="Shubham_Agrawal_Resume.pdf"
            className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-[var(--color-accent)] text-[var(--color-bg)] text-xs sm:text-sm font-medium rounded-lg hover:opacity-90 transition-opacity shrink-0"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
