import { IconContext } from "react-icons/lib"
import { FaEnvelope, FaUser } from "react-icons/fa"

const ContactForm = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-header-title is-5">
          Me envie uma mensagem, vamos conversar!
        </h5>
      </div>
      <div className="card-content">
        <form action="https://formspree.io/f/xgeppdyj" method="POST">
          <IconContext.Provider value={{ className:  "has-text-primary" }}>
            <div className="field">
              <label htmlFor="name" className="label">Nome</label>
              <div className="control has-icons-left has-icons-right">
                <input id="name" className="input is-primary" type="text" placeholder="Seu nome" name="name" required />
                <span className="icon is-small is-left">
                  <FaUser/>
                </span>
              </div>
            </div>

            <div className="field">
              <label htmlFor="email" className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input id="email" className="input is-primary" type="email" placeholder="Seu email" name="_replyto" required />
                <span className="icon is-small is-left">
                  <FaEnvelope/>
                </span>
              </div>
            </div>
          </IconContext.Provider>

          <div className="field">
            <label htmlFor="message" className="label">Mensagem</label>
            <div className="control">
              <textarea id="message" className="textarea is-primary" placeholder="Sua mensagem" name="message" required></textarea>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="buttons">
              <button type="submit" value="Send" className="button is-link">Enviar Email</button>
              <a
                href="https://t.me/isaacpontes_dev"
                className="button is-primary is-light"
                target="_blank"
              >
                Conversar no Telegram
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm