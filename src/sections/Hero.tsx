import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-16 bg-mesh">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[var(--color-accent)] font-medium text-sm uppercase tracking-wider mb-4"
        >
          Senior Software Engineer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-[var(--color-text)] leading-tight mb-6"
        >
          Building scalable solutions with{" "}
          <span className="text-[var(--color-accent)]">React</span>,{" "}
          <span className="text-[var(--color-accent)]">AWS</span> & Full Stack
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[var(--color-text-muted)] text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
        >
          Results-driven Software Engineer with 4+ years of expertise in developing
          scalable web applications, data visualization platforms, and serverless
          architectures. Focused on delivering robust solutions and driving business growth.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-[var(--color-border)] text-[var(--color-text)] font-medium rounded-lg hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)] transition-all"
          >
            View Projects
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
