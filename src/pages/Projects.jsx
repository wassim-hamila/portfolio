import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'
import '../styles/Projects.css'

// liste des tags sans doublons pour les boutons de filtre
const allTags = ['Tous', ...new Set(projects.flatMap((p) => p.tags))]

function Projects() {
  const [filter, setFilter] = useState('Tous')

  const visible =
    filter === 'Tous' ? projects : projects.filter((p) => p.tags.includes(filter))

  return (
    <section>
      <h2 className="page-title">
        Mes <span className="gradient-text">projets</span>
      </h2>
      <p className="page-subtitle">Quelques projets que j'ai réalisés pendant ma formation.</p>

      <div className="filters">
        {allTags.map((tag) => (
          <button
            key={tag}
            className={tag === filter ? 'filter active' : 'filter'}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
