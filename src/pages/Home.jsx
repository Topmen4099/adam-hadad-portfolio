import { Link } from 'react-router-dom'
import useTypewriter from '../hooks/useTypewriter'

const headingText = "Hi, I'm Adam Hadad"
const headingSpeed = 75
const headingDuration = headingText.length * headingSpeed

function Home() {
  const alreadySeen = sessionStorage.getItem('heading-seen')
  const heading = useTypewriter(headingText, headingSpeed, 0, 'heading-seen')

  return (
    <main className="container py-5 text-center">
      <h1 className="fw-bold mb-3">{heading}</h1>
      <div
        className={alreadySeen ? '' : 'fade-in'}
        style={alreadySeen ? {} : { animationDelay: `${headingDuration / 1000}s` }}
      >
        <p className="lead mb-4">
          A recent web development graduate eager to build clean, functional web experiences.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/projects" className="btn btn-primary">View My Projects</Link>
          <Link to="/about" className="btn btn-outline-primary">About Me</Link>
        </div>
      </div>
    </main>
  )
}

export default Home