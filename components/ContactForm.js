import { IconContext } from "react-icons/lib";
import { FiMail, FiUser } from "react-icons/fi";
import Head from "next/head";

export default function ContactForm() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h5 className="card-header-title is-5">
            Send me a message and let's talk.
          </h5>
        </div>
        <div className="card-content">
          <form action="https://app.99inbound.com/api/e/pscoqQY5" method="POST" target="_blank">
            <IconContext.Provider value={{ className:  "has-text-primary" }}>
              <div className="field">
                <label htmlFor="name" className="label">Name</label>
                <div className="control has-icons-left has-icons-right">
                  <input name="name" id="name" className="input is-primary" type="text" placeholder="Your name" required />
                  <span className="icon is-small is-left">
                    <FiUser/>
                  </span>
                </div>
              </div>

              <div className="field">
                <label htmlFor="email" className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                  <input name="email" id="email" className="input is-primary" type="email" placeholder="Your email" required />
                  <span className="icon is-small is-left">
                    <FiMail/>
                  </span>
                </div>
              </div>
            </IconContext.Provider>

            <div className="field">
              <label htmlFor="message" className="label">What do you need?</label>
              <div className="control">
                <textarea name="message" id="message" className="textarea is-primary" placeholder="Your message" required></textarea>
              </div>
            </div>

            <div id="honeyPotField">
              <input type="checkbox" name="groovy_violet_waved_weasel" value="1" tabindex="-1" autocomplete="no" />
            </div>

            <div className="field is-grouped">
              <div className="buttons">
                <button
                  type="submit"
                  className="button is-primary"
                >
                  Send
                </button>
                <a
                  href="https://t.me/isaacpontes_dev"
                  className="button is-primary is-light"
                  target="_blank"
                >
                  Chat on Telegram
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}