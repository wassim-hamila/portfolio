import { useEffect, useState } from 'react'

// Petit effet "machine à écrire" : écrit un mot, l'efface, puis passe au suivant
function TypingText({ words }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    let delay = deleting ? 50 : 100

    if (!deleting && text === word) delay = 1500
    if (deleting && text === '') delay = 300

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setIndex((index + 1) % words.length)
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, index, words])

  return (
    <span className="typing">
      {text}
      <span className="cursor">|</span>
    </span>
  )
}

export default TypingText
