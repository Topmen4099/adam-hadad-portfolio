function Projects() {
  const professionalProjects = [
    {
      name: "Litigation Command Center",
      tech: "TypeScript, React, Firebase, Convex, Vercel, Google AI Studio",
      description: "A production-ready law firm case management SaaS with role-based access control, multi-tenant organization support, and a real-time data layer. Features AI-powered PDF docket audit reports and per-associate performance briefings using the Gemini API.",
      github: "https://github.com/Topmen4099/litigation-command-center"
    }
  ]

  const academicProjects = [
    {
      name: "Web Security Final",
      course: "Web Security Basics - CST8265",
      tech: "Various",
      description: "A web security final project completed as a group with Filip Popendyk and Daniel Khojaste.",
      github: "https://github.com/Topmen4099/web-security-final-cst8265"
    },
    {
      name: "Trivia",
      course: "Web Programming Languages II - CST8259",
      tech: "React.js",
      description: "A trivia web app that fetches questions and categories from an API, with score tracking, Local Storage persistence, and a quiz history view showing past attempts.",
      github: "https://github.com/Topmen4099/trivia-cst8259"
    },
    {
      name: "MovieDB",
      course: "Web Programming Languages II - CST8259",
      tech: "Laravel, PHP",
      description: "A database-driven MovieDB API supporting full CRUD operations across multiple tables, with genre syncing and pivot row management.",
      github: "https://github.com/Topmen4099/movie-db-cst8259"
    },
    {
      name: "Gradebook",
      course: "Web Programming Languages II - CST8259",
      tech: "Laravel, PHP",
      description: "A gradebook management application built with Laravel.",
      github: "https://github.com/Topmen4099/gradebook-cst8259"
    },
    {
      name: "Social Media",
      course: "Web Applications Development - CST8257",
      tech: "PHP",
      description: "A social media web application built as a group project with Andre Cunha and Richer Bueno.",
      github: "https://github.com/Topmen4099/social-media-final-php-cst8257"
    },
    {
      name: "Registrar",
      course: "Web Programming II - CST8253",
      tech: "C#, Razor/Blazor",
      description: "A registrar web application built for managing student records.",
      github: "https://github.com/Topmen4099/registrar-cst8253"
    },
    {
      name: "Travel Agency",
      course: "Web Programming II - CST8253",
      tech: "C#",
      description: "A C# application to log passenger names and flight details, with functionality to update and modify passenger information.",
      github: "https://github.com/Topmen4099/travel-agency-cst8253"
    },
    {
      name: "Pokédex",
      course: "Web Programming I - CST8209",
      tech: "HTML, CSS, JavaScript",
      description: "A web app displaying Pokémon data with interactive pop-ups for type and abilities, and Local Storage features to catch and release Pokémon.",
      github: "https://github.com/Topmen4099/pokedex-cst8209"
    },
    {
      name: "Mad Libs",
      course: "Web Programming I - CST8209",
      tech: "HTML, CSS, JavaScript",
      description: "A fun Mad Libs web app built with vanilla JavaScript.",
      github: "https://github.com/Topmen4099/mad-libs-cst8209"
    },
    {
      name: "Random Domino Generator",
      course: "Web Programming I - CST8209",
      tech: "HTML, CSS, JavaScript",
      description: "A program that randomly generates domino dot patterns on page refresh.",
      github: "https://github.com/Topmen4099/dominoes-cst8209"
    },
    {
      name: "Landing Page",
      course: "Cross-Platform Web Design - CST8117",
      tech: "HTML, CSS",
      description: "A responsive landing page built as part of a cross-platform web design course.",
      github: "https://github.com/Topmen4099/landing-page-cst8117"
    }
  ]

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
                <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-primary mt-3">GitHub</a>
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
                <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-primary mt-3">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects