import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const ContactCard = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={ props.avatarUrl } alt="My GitHub Avatar"/>
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
              href="https://t.me/isaacpontes_dev"
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
  )
}

export default ContactCard;