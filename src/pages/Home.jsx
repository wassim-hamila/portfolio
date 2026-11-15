import { Link } from 'react-router-dom'
import { FaArrowRight, FaGithub, FaEnvelope } from 'react-icons/fa'
import TypingText from '../components/TypingText'
import { profile, stats } from '../data'
import profileImg from '../assets/profile.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <span className="badge">
            <span className="dot"></span> Disponible pour un stage
          </span>

          <h1>
            Salut, moi c'est <span className="gradient-text">{profile.name}</span> 👋
          </h1>
          <h2>
            <TypingText words={profile.roles} />
          </h2>
          <p className="bio">{profile.bio}</p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn">
              Voir mes projets <FaArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Me contacter
            </Link>
          </div>

          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="photo-ring"></div>
          <img src={profileImg} alt={`Photo de ${profile.name}`} />
        </div>
      </section>

      <section className="stats">
        {stats.map((stat) => (
          <div key={stat.label} className="stat">
            <strong className="gradient-text">{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>
    </>
  )
}

export default Home
