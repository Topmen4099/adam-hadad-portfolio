import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function Footer() {
  return (
    <footer className="py-3 bg-body-secondary">
      <div className="container d-flex flex-wrap justify-content-center align-items-center gap-4 text-center">
        <span>© {new Date().getFullYear()} Adam Hadad</span>
        <a href="mailto:adamhadad@me.com" className="text-decoration-none fs-5">
          <MdEmail />
        </a>
        <a href="https://github.com/Topmen4099" target="_blank" rel="noreferrer" className="text-decoration-none fs-5">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/adam-r-hadad" target="_blank" rel="noreferrer" className="text-decoration-none fs-5">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  )
}

export default Footer