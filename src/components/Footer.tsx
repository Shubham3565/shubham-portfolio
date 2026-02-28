import { motion } from "framer-motion"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 mt-4 border-t border-[var(--color-border)]"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--color-text-subtle)]">
        <p>© {year} Shubham Agrawal. All rights reserved.</p>
        <p className="text-[var(--color-text-muted)]/80">
          Built with React, TypeScript & Tailwind CSS
        </p>
      </div>
    </motion.footer>
  )
}
