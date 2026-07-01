import { Link } from 'react-router-dom'
import { useState } from 'react'
import useTypewriter from '../hooks/useTypewriter'

const headingText = "Hi, I'm Adam Hadad"
const subtextText = "A recent web development graduate eager to build clean, functional web applications."
const headingSpeed = 75

const headingDuration = headingText.length * headingSpeed

window.addEventListener('beforeunload', () => {
  sessionStorage.removeItem('heading-seen')
  sessionStorage.removeItem('subtext-seen')
})

function Home() {
  const [alreadySeen] = useState(() => !!sessionStorage.getItem('heading-seen'))
  const heading = useTypewriter(headingText, headingSpeed, 0, 'heading-seen')
  const subtext = useTypewriter(subtextText, 40, headingDuration, 'subtext-seen')

  return (
    <main className="container py-5 text-center">
      <h1 className="fw-bold mb-3">{heading}</h1>
      <p className="lead mb-4">{subtext}</p>
      <div className={alreadySeen ? '' : 'fade-in'}>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/projects" className="btn btn-primary">View My Projects</Link>
          <Link to="/about" className="btn btn-outline-secondary">About Me</Link>
        </div>
      </div>
    </main>
  )
}

export default Home