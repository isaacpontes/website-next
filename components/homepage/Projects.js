import Columns from "../common/Columns";

Projects.Project = ({
  imageUrl, title, description, technologies, demoLink, githubLink
}) => (
  <div className="column is-one-third">
    <div className="card">
      <div className="card-image">
        <figure className="image is-partially-hidden">
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
          Technologies Used
        </h4>
        <div className="tags is-centered">
          { technologies.map((value, index) => <span key={index} className="tag is-light">{value}</span>)}
        </div>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item buttons">
          { demoLink &&
            <a href={ demoLink } className="button is-primary" target="_blank">
              Visit Site
            </a>
          }
          { githubLink &&
            <a href={ githubLink } className="button is-dark is-outlined" target="_blank">
              Source Code
            </a>
          }
        </div>
      </footer>
    </div>
  </div>
)

function Projects() {
  return (
    <Columns multiline={true}>
      {/* <Projects.Project
        imageUrl="/assets/img/personalportfolio.webp"
        title="Portfolio Pessoal"
        description="Meu site pessoal com portfolio, blog e formulário para contato. Esse é o projeto que você está visualizando neste exato momento."
        technologies={['Javascript', 'React', 'Next.js', 'Bulma', 'Sass']}
        demoLink="/"
        githubLink="https://github.com/isaacpontes/isaacpontes"
      /> */}
      <Projects.Project
        imageUrl="/assets/img/skynotes.webp"
        title="Skynotes"
        description="Web application for saving notes, similar to Evernote. Final project of the OneBitCode Full-Stack Javascript Developer course."
        technologies={['Javascript', 'Node', 'Express', 'Rest API', 'React', 'Bulma', 'Sass', 'MongoDB']}
        demoLink="https://skynotes.netlify.app"
        githubLink="https://github.com/isaacpontes/skynotes"
      />
      <Projects.Project
        imageUrl="/assets/img/starwarsquiz.webp"
        title="Star Wars Quiz"
        description="A questions and answers game about the Star Wars saga. Project developed during Alura's React Immersion."
        technologies={['Javascript', 'React', 'Next.js', 'Styled Components']}
        demoLink="https://starwarsquiz.isaacpontes.vercel.app"
        githubLink="https://github.com/isaacpontes/starwarsquiz"
      />
      <Projects.Project
        imageUrl="/assets/img/hawkins.webp"
        title="Hawkins Design"
        description="Website with blog and e-commerce functionalities for an online graphic design agency."
        technologies={['PHP', 'WordPress', 'WooCommerce', 'Sass', 'jQuery', 'MySQL']}
        demoLink="https://hawkinsdesign.com.br"
      />
    </Columns>
  )
}

export default Projects;