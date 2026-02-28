import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Code2 } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 md:p-12 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)]"
      >
        <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-2">
          Get in Touch
        </h2>
        <p className="text-[var(--color-text-muted)] mb-8 max-w-xl">
          Open to new opportunities in Front-end and Full Stack Development.
          Let&apos;s connect and discuss how I can contribute to your team.
        </p>
        <div className="flex flex-wrap gap-6">
          <a
            href="mailto:shubham3565@gmail.com"
            className="flex items-center gap-3 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            <Mail className="w-5 h-5 flex-shrink-0" />
            <span>shubham3565@gmail.com</span>
          </a>
          <a
            href="tel:+917379169240"
            className="flex items-center gap-3 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            <Phone className="w-5 h-5 flex-shrink-0" />
            <span>+91 7379169240</span>
          </a>
          <div className="flex items-center gap-3 text-[var(--color-text-muted)]">
            <MapPin className="w-5 h-5 flex-shrink-0" />
            <span>Prayagraj, Uttar Pradesh</span>
          </div>
          <a
            href="https://www.linkedin.com/in/shubham3565/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            <Linkedin className="w-5 h-5 flex-shrink-0" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.hackerrank.com/profile/shubham3565"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            <Code2 className="w-5 h-5 flex-shrink-0" />
            <span>HackerRank</span>
          </a>
        </div>
        <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
          <a
            href="mailto:shubham3565@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            Send Email
          </a>
        </div>
      </motion.div>
    </section>
  )
}
