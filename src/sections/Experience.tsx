import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Zenarate India Pvt. Ltd.",
    location: "Gurgaon",
    period: "Feb 2022 – Present",
    highlights: [
      "Leading design and development of advanced reporting module using React.js with TypeScript, delivering robust and interactive UIs for data visualization",
      "Utilizing Flask, AWS Glue, AWS Lambda, and AWS Batch to create an integrated and scalable reporting ecosystem",
      "Enhancing screen simulation and call analyzer components through cross-team collaboration",
      "Successfully led development of a reporting module improving data accessibility for 250+ global clients",
    ],
  },
  {
    role: "Software Engineer",
    company: "Appwrk IT Solutions",
    location: "Mohali",
    period: "Jan 2021 – Feb 2022",
    highlights: [
      "Developed web applications using Tailwind CSS, styled-components, GraphQL, and JavaScript",
      "Built responsive applications with React.js and GatsbyJS for high-performance user experiences",
      "Consistently delivered projects on time with high-quality standards",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 scroll-mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold text-[var(--color-text)] mb-8"
      >
        Experience
      </motion.h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.article
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="p-6 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <h3 className="font-semibold text-[var(--color-text)]">
                    {exp.role}
                  </h3>
                  <span className="text-[var(--color-text-subtle)]">—</span>
                  <span className="text-[var(--color-accent)]">{exp.company}</span>
                </div>
                <p className="text-sm text-[var(--color-text-muted)] mb-4">
                  {exp.location} · {exp.period}
                </p>
                <ul className="space-y-2">
                  {exp.highlights.map((item) => (
                    <li
                      key={item.slice(0, 30)}
                      className="flex gap-2 text-[var(--color-text-muted)] text-sm leading-relaxed"
                    >
                      <span className="text-[var(--color-accent)] mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
