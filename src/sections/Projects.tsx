import { motion } from "framer-motion"
import { ExternalLink, Layers } from "lucide-react"

const projects = [
  {
    name: "Zenarate Insights",
    tech: ["React.js", "TypeScript", "Flask", "AWS Lambda", "AWS Batch", "MySQL", "Kafka"],
    description: "Dynamic data visualization platform leveraging React.js for real-time graphical representations of business KPIs and metrics. Integrated Flask for API interactions and server-side logic. Optimized to handle large-scale datasets.",
  },
  {
    name: "API Layer",
    tech: ["Express.js", "Node.js", "MongoDB", "OAuth", "Swagger/OpenAPI"],
    description: "APIs for web scraping and financial data integration using Node.js, Cheerio, and Puppeteer. Implemented OAuth for secure authentication. Documented with Swagger/OpenAPI for streamlined team communication.",
  },
  {
    name: "OPSIO",
    tech: ["Gatsby.js", "Strapi Headless CMS", "AWS S3", "Bootstrap"],
    description: "Led development of business website for a CloudOps and DevOps provider. Performant, SEO-optimized platform with Strapi CMS for easy content management. Content hosting via AWS S3.",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold text-[var(--color-text)] mb-8"
      >
        Featured Projects
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group p-6 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 transition-all hover:shadow-lg hover:shadow-[var(--color-accent)]/5"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[var(--color-accent-soft)] flex items-center justify-center">
                  <Layers className="w-4 h-4 text-[var(--color-accent)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-text)]">
                  {project.name}
                </h3>
              </div>
              <ExternalLink className="w-4 h-4 text-[var(--color-text-subtle)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-sm text-[var(--color-text-muted)] mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs rounded bg-[var(--color-surface)] text-[var(--color-text-subtle)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
