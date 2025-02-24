import './App.scss'
import SocialLinks from './SocialLinks.tsx'
import Navbar from './Navbar.tsx'
import About from './About.tsx'
import Skills from './Skills.tsx'
import Contact from './Contact.tsx'
import Projects from './Projects.tsx'

export default function App() {
  return (
    <div className="app">
      <section id="home">
        <SocialLinks />
        <h1>Nick Cordy</h1>
        <Navbar />
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}
