import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-6">
          About Me
        </h2>
        <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
          <p>
            Highly competent Software Development Engineer with over 4 years of expertise
            in developing scalable, high-performance web applications and front-end systems.
          </p>
          <p>
            Proficient in Full Stack Development, leveraging technologies such as TypeScript,
            React.js, Flask, Node.js, and Express.js to deliver robust and user-friendly
            solutions. Skilled in Cloud Computing with AWS services (Lambda, Glue, Batch,
            Athena) and experienced in building serverless architectures and data pipelines.
          </p>
          <p>
            Strong understanding of Agile methodologies with a proven track record of
            improving system performance, optimizing data management, and delivering
            projects on time while maintaining high-quality standards.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
