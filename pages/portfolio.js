import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import ContactCard from "../components/ContactCard"
import Project from "../components/Project"

const Portfolio = ({ avatarUrl }) => {
  return (
    <section className="section has-background-light">
      <div className="container">
        <div className="columns">
          <div className="column is-one-quarter">
            <ContactCard avatarUrl={ avatarUrl } />
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
                  imageUrl="/screenshot.webp"
                  title="Portfolio Pessoal"
                  description="Meu site pessoal com portfolio, blog e formulário para contato. Esse é o projeto que você está visualizando neste exato momento."
                  githubLink="https://github.com/isaacpontes/isaacpontes"
                >
                  <span className="tag is-primary has-text-weight-bold m-1">Javascript</span>
                  <span className="tag is-primary has-text-weight-bold m-1">React</span>
                  <span className="tag is-primary has-text-weight-bold m-1">Next.js</span>
                  <span className="tag is-primary has-text-weight-bold m-1">Bulma</span>
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
    .then(res => res.json());

  return {
    props: {
      avatarUrl: githubResponse.avatar_url,
    }
  }
}

export default Portfolio;