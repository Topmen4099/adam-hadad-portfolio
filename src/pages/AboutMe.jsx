function AboutMe() {
  return (
    <div className="container py-4">
      <h1>About Me</h1>
      <p className="lead mb-4">
        I'm a recent Web Development & Internet Applications graduate from Algonquin College 
        with a background in computer science from York University. I'm passionate about building clean, functional web experiences.
      </p>

      <h2 className="h4 mt-4 mb-3">Skills</h2>
      
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="h6 card-title text-uppercase text-muted mb-3">Front-End</h3>
              <p className="card-text">HTML, CSS, JavaScript, React.js, TypeScript</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="h6 card-title text-uppercase text-muted mb-3">Back-End</h3>
              <p className="card-text">C#, .NET, Blazor, Python, PHP, Laravel, MySQL, Java, C</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="h6 card-title text-uppercase text-muted mb-3">Tools & Other</h3>
              <p className="card-text">Figma, Adobe Photoshop, Illustrator, QuickBooks, Microsoft Office, Google Drive</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="h4 mt-5 mb-3">Education</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="h6 card-title mb-1">Algonquin College - Ottawa, ON</h3>
              <p className="text-muted mb-2">College Diploma - Web Development & Internet Applications</p>
              <p className="text-muted mb-2">Jan 2024 – Aug 2025</p>
              <p className="mb-0">3.83 GPA, Graduated with Honours</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="h6 card-title mb-1">York University - Toronto, ON</h3>
              <p className="text-muted mb-2">Bachelor of Science - Concentration in Computer Science</p>
              <p className="text-muted mb-0">Sept 2018 – Apr 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe