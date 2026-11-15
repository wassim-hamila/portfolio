import { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaPaperPlane } from 'react-icons/fa'
import { profile } from '../data'
import '../styles/Contact.css'

const emptyForm = { name: '', email: '', message: '' }

function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setSent(false)
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Merci de remplir tous les champs.')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("L'adresse email n'est pas valide.")
      return
    }

    // pas de backend pour ce challenge, on affiche juste dans la console
    console.log('Message envoyé :', form)
    setError('')
    setSent(true)
    setForm(emptyForm)
  }

  return (
    <section>
      <h2 className="page-title">
        Me <span className="gradient-text">contacter</span>
      </h2>
      <p className="page-subtitle">Une question ou une idée de projet ? Écrivez-moi un message.</p>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-card">
            <span className="info-icon">
              <FaEnvelope />
            </span>
            <div>
              <h4>Email</h4>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </div>

          <div className="info-card">
            <span className="info-icon">
              <FaMapMarkerAlt />
            </span>
            <div>
              <h4>Localisation</h4>
              <p>{profile.location}</p>
            </div>
          </div>

          <div className="info-card">
            <span className="info-icon">
              <FaGithub />
            </span>
            <div>
              <h4>GitHub</h4>
              <a href={profile.github} target="_blank" rel="noreferrer">
                {profile.github.replace('https://', '')}
              </a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Nom</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Votre nom"
            value={form.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="exemple@mail.com"
            value={form.email}
            onChange={handleChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Votre message..."
            value={form.message}
            onChange={handleChange}
          />

          {error && <p className="form-msg form-error">{error}</p>}
          {sent && <p className="form-msg form-success">Merci ! Votre message a bien été envoyé.</p>}

          <button type="submit" className="btn">
            Envoyer <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
