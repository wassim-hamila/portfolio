import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'
import { profile } from '../data'
import '../styles/Navbar.css'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/projects', label: 'Projets' },
  { to: '/skills', label: 'Compétences' },
  { to: '/contact', label: 'Contact' },
]

function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
          {profile.name}
          <span>.</span>
        </NavLink>

        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Changer le thème">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className="icon-btn menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Ouvrir le menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
