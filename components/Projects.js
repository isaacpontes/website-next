Projects.Project = ({
  imageUrl, title, description, technologies, demoLink, githubLink
}) => (
  <div className="column is-one-third">
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3 is-partially-hidden">
          <img src={ imageUrl } alt="Project Preview" />
        </figure>
      </div>
      <div className="card-content has-text-centered">
        <h3 className="title is-4">
          { title }
        </h3>
        <p className="subtitle is-6">
          { description }
        </p>
        <hr/>
        <h4 className="title is-6">
          Tecnologias utilizadas
        </h4>
        <div className="tags is-centered">
          { technologies.map((value, index) => <span key={index} className="tag is-primary">{value}</span>)}
        </div>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item buttons">
          { demoLink &&
            <a href={ demoLink } className="button is-link" target="_blank">
              Visitar Site
            </a>
          }
          { githubLink &&
            <a href={ githubLink } className="button is-dark is-outlined" target="_blank">
              Código Fonte
            </a>
          }
        </div>
      </footer>
    </div>
  </div>
)

function Projects() {
  return (
    <div className="columns mt-6">
      <Projects.Project
        imageUrl="/img/personalportfolio.webp"
        title="Portfolio Pessoal"
        description="Meu site pessoal com portfolio, blog e formulário para contato. Esse é o projeto que você está visualizando neste exato momento."
        technologies={['Javascript', 'React', 'Next.js', 'Bulma', 'Sass']}
        demoLink="/"
        githubLink="https://github.com/isaacpontes/isaacpontes"
      />
      <Projects.Project
        imageUrl="/img/skynotes.webp"
        title="Skynotes"
        description="Um aplicativo para salvar anotações, similar ao Evernote. Projeto de conclusão do curso de Javascript Full-Stack do OneBitCode."
        technologies={['Javascript', 'Node', 'Express', 'Rest API', 'React', 'Bulma', 'Sass', 'MongoDB']}
        demoLink="https://skynotes.netlify.app"
        githubLink="https://github.com/isaacpontes/skynotes"
      />
      <Projects.Project
        imageUrl="/img/starwarsquiz.webp"
        title="Star Wars Quiz"
        description="Um jogo de perguntas e respostas sobre a saga Star Wars. Projeto desenvolvido durante a Imersão React da Alura."
        technologies={['Javascript', 'React', 'Next.js', 'Styled Components']}
        demoLink="https://starwarsquiz.isaacpontes.vercel.app"
        githubLink="https://github.com/isaacpontes/starwarsquiz"
      />
    </div>
  )
}

export default Projects;