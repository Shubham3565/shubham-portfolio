export default function Experience() {
    return (
      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
  
        <div className="mb-6">
          <h3 className="font-medium">
            Senior Software Engineer — Zenarate
          </h3>
          <p className="text-sm text-gray-500">
            Feb 2022 - Present
          </p>
          <ul className="list-disc ml-6 text-gray-700 mt-2">
            <li>Built reporting module using React + TypeScript</li>
            <li>Integrated Flask APIs with AWS Lambda</li>
            <li>Improved accessibility for 250+ global clients</li>
          </ul>
        </div>
  
        <div>
          <h3 className="font-medium">
            Software Engineer — Appwrk
          </h3>
          <p className="text-sm text-gray-500">
            Jan 2021 - Feb 2022
          </p>
          <ul className="list-disc ml-6 text-gray-700 mt-2">
            <li>Built responsive React + Gatsby apps</li>
            <li>Worked with GraphQL APIs</li>
          </ul>
        </div>
  
      </section>
    )
  }