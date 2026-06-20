import { professionalProjects, academicProjects } from '../data/projects'

function Projects() {
  return (
    <div className="container py-4">
      <h1>Projects</h1>

      <h2 className="h4 mt-4 mb-3">Professional</h2>
      <div className="row g-4 mb-5">
        {professionalProjects.map((project) => (
          <div className="col-md-6" key={project.name}>
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h3 className="h5 card-title">{project.name}</h3>
                <p className="text-muted mb-2"><small>{project.tech}</small></p>
                <p className="card-text flex-grow-1">{project.description}</p>
                <div className="d-flex gap-2 mt-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-primary">GitHub</a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-success">Live Demo</a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="h4 mb-3">Academic</h2>
      <div className="row g-4">
        {academicProjects.map((project) => (
          <div className="col-md-4" key={project.name}>
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h3 className="h5 card-title">{project.name}</h3>
                <p className="text-muted mb-1"><small>{project.course}</small></p>
                <p className="text-muted mb-2"><small>{project.tech}</small></p>
                <p className="card-text flex-grow-1">{project.description}</p>
                <div className="d-flex gap-2 mt-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-primary">GitHub</a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-success">Live Demo</a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects