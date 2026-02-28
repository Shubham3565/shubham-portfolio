import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python"],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "React.js",
      "Redux",
      "Gatsby.js",
      "Flask",
      "Express.js",
      "Node.js",
      "MUI",
      "Bootstrap",
    ],
  },
  {
    title: "Cloud & Tools",
    items: ["AWS Lambda", "AWS Batch", "AWS Glue", "OLAP", "Kafka", "Git"],
  },
  {
    title: "Concepts",
    items: [
      "JWT",
      "OAuth",
      "RBAC",
      "ABAC",
      "GraphQL",
      "REST APIs",
      "Agile",
      "CI/CD",
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold text-[var(--color-text)] mb-8"
      >
        Technical Skills
      </motion.h2>
      <div className="space-y-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
          >
            <h3 className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-wider mb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.02 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text-muted)] text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-text)] transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
