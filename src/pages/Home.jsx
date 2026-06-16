import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="container py-5 text-center">
      <h1 className="fw-bold mb-3">Hi, I'm Adam Hadad</h1>
      <p className="lead mb-4">
        A recent web development graduate eager to build clean, functional web experiences.
      </p>
      <div className="d-flex justify-content-center gap-3">
        <Link to="/projects" className="btn btn-primary">View My Projects</Link>
        <Link to="/about" className="btn btn-outline-secondary">About Me</Link>
      </div>
    </main>
  )
}

export default Home