function Footer() {
  return (
    <footer className="py-3 bg-body-secondary">
      <div className="container d-flex flex-wrap justify-content-center align-items-center gap-4 text-center">
        <span>© {new Date().getFullYear()} Adam Hadad</span>
        <a href="mailto:adamhadad@me.com" className="text-decoration-none">adamhadad@me.com</a>
        <a href="https://github.com/Topmen4099" target="_blank" rel="noreferrer" className="text-decoration-none">GitHub</a>
        <a href="https://linkedin.com/in/adam-r-hadad" target="_blank" rel="noreferrer" className="text-decoration-none">LinkedIn</a>
      </div>
    </footer>
  )
}

export default Footer