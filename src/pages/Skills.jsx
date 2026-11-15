import { skills } from '../data'
import '../styles/Skills.css'

function Skills() {
  return (
    <section>
      <h2 className="page-title">
        Mes <span className="gradient-text">compétences</span>
      </h2>
      <p className="page-subtitle">Les technologies et outils que j'utilise.</p>

      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.category} className="skill-box">
            <h3>{group.category}</h3>

            {group.items.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.name} className="skill">
                  <div className="skill-head">
                    <span className="skill-name">
                      <Icon /> {item.name}
                    </span>
                    <span className="skill-level">{item.level}%</span>
                  </div>
                  <div className="bar">
                    <div className="bar-fill" style={{ width: `${item.level}%` }}></div>
                  </div>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
