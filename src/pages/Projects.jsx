import { useState } from 'react'
import { professionalProjects, academicProjects } from '../data/projects'

function Projects() {
  const [sort, setSort] = useState('date-desc')

  const sortedAcademic = [...academicProjects].sort((a, b) => {
    if (sort === 'date-desc') return new Date(b.date) - new Date(a.date)
    if (sort === 'date-asc') return new Date(a.date) - new Date(b.date)
    if (sort === 'alpha') return a.name.localeCompare(b.name)
    if (sort === 'course') return a.course.localeCompare(b.course)
    return 0
  })

  return (
    <div className="container py-4">
      <h1>Projects</h1>

      <h2 className="h4 mt-4 mb-3">Professional</h2>
      <div className="row g-4 mb-5">
        {professionalProjects.map((project) => (
          <div className="col-md-6" key={project.name}>
            <div className="card h-100 professional-card">
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

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h4 mb-0">Academic</h2>
        <select
          className="form-select w-auto"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="date-desc">Newest First</option>
          <option value="date-asc">Oldest First</option>
          <option value="alpha">Alphabetical</option>
          <option value="course">By Course</option>
        </select>
      </div>
      <div className="row g-4">
        {sortedAcademic.map((project) => (
          <div className="col-md-4" key={project.name}>
            <div className="card h-100 academic-card">
              <div className="card-body d-flex flex-column">
                <h3 className="h5 card-title">{project.name} <small className="text-muted fs-6">· {new Date(project.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}</small></h3>
                <p className="text-muted mb-2"><small>{project.course}</small></p>
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