import { FaGithub, FaArrowRight } from 'react-icons/fa'

function ProjectCard({ project }) {
  const Icon = project.icon

  return (
    <article className="project-card">
      <div className="project-banner" style={{ background: project.color }}>
        <Icon />
      </div>

      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
          <FaGithub /> Voir le code <FaArrowRight className="arrow" />
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
