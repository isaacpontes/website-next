import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import Project from "../components/Project"

const Portfolio = ({ avatar_url }) => {
  return (
    <section className="section has-background-light">
      <div className="container">
        <div className="columns">
          <div className="column is-one-quarter">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={ avatar_url } alt="My GitHub Avatar"/>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4 mb-3">Isaac Pontes</p>
                    <span className="tag is-primary has-text-weight-bold">Desenvolvedor Javascript</span>
                  </div>
                </div>
                <div className="content">
                  <IconContext.Provider value={{ size: "2em" }}>
                    <a href="https://github.com/isaacpontes" className="has-text-dark" target="_blank">
                      <span className="icon is-large">
                        <FaGithubSquare/>
                      </span>
                    </a>
                    <a href="https://www.linkedin.com/in/isaac-pontes/" className="has-text-dark" target="_blank">
                      <span className="icon is-large">
                        <FaLinkedin/>
                      </span>
                    </a>
                    <a href="https://www.facebook.com/isaac.larrubia.52" className="has-text-dark" target="_blank">
                      <span className="icon is-large">
                        <FaFacebookSquare/>
                      </span>
                    </a>
                    <a href="https://www.instagram.com/isaac.lfp/" className="has-text-dark" target="_blank">
                      <span className="icon is-large">
                        <FaInstagramSquare/>
                      </span>
                    </a>
                  </IconContext.Provider>
                </div>
                <div className="content mt-4">
                  <h5 className="is-size-5 mb-2">
                    Contato
                  </h5>
                  <p>
                    <a
                      href="https://wa.me/5522996057593"
                      className="has-text-dark ml-5"
                      target="_blank"
                    >
                        (22) 99605-7593
                      </a>
                    </p>
                  <p>
                    <a
                      href="mailto:isaaclfp@outlook.com"
                      className="has-text-dark ml-5"
                      target="_blank"
                    >
                        isaaclfp@outlook.com
                      </a>
                    </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-three-quarter">
            <h3 className="title">
              Alguns de Meus Projetos
            </h3>
            <p className="subtitle">
              Abaixo você pode conferir alguns dos projetos que desenvolvi. Também deixei os links para demonstrações ao vivo e para o código fonte dos projetos open source.
            </p>
            <div className="columns">
              <div className="column is-one-third">
                <Project
                  imageUrl="https://bulma.io/images/placeholders/1280x960.png"
                  title="Portfolio Pessoal"
                  description="Meu site pessoal com portfolio, blog e formulário para contato. Esse é o projeto que você está visualizando neste exato momento."
                  githubLink="https://github.com/isaacpontes/isaacpontes"
                >
                  <span className="tag is-primary has-text-weight-bold m-1">Javascript</span>
                  <span className="tag is-primary has-text-weight-bold m-1">React</span>
                  <span className="tag is-primary has-text-weight-bold m-1">Next.js</span>
                  <span className="tag is-primary has-text-weight-bold m-1">Bulma 4</span>
                </Project>
              </div>
              <div className="column is-one-third">
                <Project
                  imageUrl="https://bulma.io/images/placeholders/1280x960.png"
                  title="SiGI"
                  description="Um sistema para gestão de igrejas. Conta com controle de membresia, finanças, impressão de relátorios e outras funcionalidades."
                  githubLink="https://github.com/isaacpontes/sigi_project"
                >
                  <span className="tag is-primary has-text-weight-bold m-1">PHP</span>
                  <span className="tag is-primary has-text-weight-bold m-1">Laravel</span>
                  <span className="tag is-primary has-text-weight-bold m-1">MySQL</span>
                  <span className="tag is-primary has-text-weight-bold m-1">Bootstrap 4</span>
                </Project>
              </div>
            </div>
            <article class="message is-primary">
              <div class="message-header">
                <p>Mais projetos em breve...</p>
              </div>
              <div class="message-body">
                Eu ainda estou desenvolvendo novos projetos e soluções, e logo logo eles aparecerão por aqui.
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export async function getStaticProps() {
  const githubResponse = await fetch('https://api.github.com/users/isaacpontes')
    .then(res => res.json())

  return {
    props: {
      avatar_url: githubResponse.avatar_url,
    }
  }
}

export default Portfolio;