const Project = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3 is-partially-hidden">
          <img src={ props.imageUrl } alt="Project Preview"/>
        </figure>
      </div>
      <div className="card-content">
        <h4 className="title is-4">
          { props.title }
        </h4>
        <p className="subtitle is-6">
          { props.description }
        </p>
        <hr/>
        <h6 className="title is-6">
          Tecnologias utilizadas
        </h6>
        { props.children }
      </div>
      <footer className="card-footer">
        <div className="card-footer-item buttons">
          <a href={ props.demoLink } className="button is-link">
            Live Demo
          </a>
          <a href={ props.githubLink } className="button is-dark">
            Source Code
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Project;