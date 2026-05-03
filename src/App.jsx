import { useEffect, useState } from 'react'
import { projects, skills } from './data/projects.js'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('reveal-in')),
      { threshold: 0.15 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <nav className="nav">
        <a href="#top" className="brand">NH<span>.</span></a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <button
            className="theme-toggle"
            aria-label="Toggle theme"
            onClick={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
        </div>
      </nav>

      <main>
        <section id="top" className="hero">
          <p className="kicker">Full-stack developer</p>
          <h1>Hi, I'm <span className="accent">Nikhil Holagunda</span>.</h1>
          <p className="lede">
            I build end-to-end web apps with React on the front and Python or Java on the back.
            Below are four production-shaped projects with live demos and source code.
          </p>
          <div className="cta">
            <a className="btn primary" href="#projects">See projects</a>
            <a className="btn ghost" href="#contact">Get in touch</a>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map(p => (
              <article key={p.title} className="card reveal" style={{ '--accent': p.accent }}>
                <h3>{p.title}</h3>
                <p>{p.blurb}</p>
                <ul className="tags">
                  {p.tags.map(t => <li key={t}>{t}</li>)}
                </ul>
                <div className="card-actions">
                  <a href={p.repo} target="_blank" rel="noreferrer">GitHub →</a>
                  <a href={p.demo} target="_blank" rel="noreferrer">Live demo →</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skills">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="skill-group reveal">
                <h4>{group}</h4>
                <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p className="lede">
            <a href="mailto:nikhilholagunda07@gmail.com">nikhilholagunda07@gmail.com</a>
            <span className="dot">•</span>
            <a href="https://github.com/<your-username>" target="_blank" rel="noreferrer">GitHub</a>
            <span className="dot">•</span>
            <a href="https://linkedin.com/in/<your-handle>" target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Nikhil Holagunda. Built with React + Vite.</p>
      </footer>
    </>
  )
}
