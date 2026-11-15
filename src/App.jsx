import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

function App() {
  const location = useLocation()
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="app">
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* la key relance l'animation à chaque changement de page */}
      <main className="container page" key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2 className="page-title">Page introuvable</h2>} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
