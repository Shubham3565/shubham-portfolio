const skills = [
    "React", "TypeScript", "Node.js", "Flask",
    "AWS Lambda", "AWS Batch", "Kafka",
    "MongoDB", "MySQL", "GraphQL", "OAuth"
  ]
  
  export default function Skills() {
    return (
      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map(skill => (
            <span
              key={skill}
              className="px-3 py-1 border rounded-lg text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    )
  }