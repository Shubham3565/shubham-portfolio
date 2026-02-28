import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Nav />
      <main className="max-w-5xl mx-auto px-6">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
