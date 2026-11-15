import { FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa'
import { profile } from '../data'

const year = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
      <p>
        © {year} {profile.name} — Fait avec <FaHeart className="heart" /> et React
      </p>
    </footer>
  )
}

export default Footer
