import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar bg-body-secondary sticky-top px-4">
      <div className="container justify-content-center">
        <ul className="navbar-nav flex-row gap-5">
          <li className="nav-item">
            <Link className="nav-link px-2" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-2" to="/about">About Me</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-2" to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar