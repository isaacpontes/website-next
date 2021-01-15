import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import ContactForm from "../components/ContactForm"

const Contact = ({ avatar_url }) => {
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
          <div className="column">
            <ContactForm/>
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


export default Contact