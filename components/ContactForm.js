import { IconContext } from "react-icons/lib";
import { FiMail, FiUser } from "react-icons/fi";
import { useIntl } from 'react-intl';

export default function ContactForm() {
  const { formatMessage } = useIntl();
  const _f = (id) => formatMessage({ id });

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h5 className="card-header-title is-5">
            {_f("messageMe")}
          </h5>
        </div>
        <div className="card-content">
          <form action="https://app.99inbound.com/api/e/pscoqQY5" method="POST" target="_blank">
            <IconContext.Provider value={{ className: "has-text-primary" }}>
              <div className="field">
                <label htmlFor="name" className="label">
                  {_f("name")}
                </label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    name="name"
                    id="name"
                    className="input is-primary"
                    type="text"
                    placeholder={_f("namePlaceholder")}
                    required
                  />
                  <span className="icon is-small is-left">
                    <FiUser />
                  </span>
                </div>
              </div>

              <div className="field">
                <label htmlFor="email" className="label">
                  {_f("email")}
                </label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    name="email"
                    id="email"
                    className="input is-primary"
                    type="email"
                    placeholder={_f("emailPlaceholder")}
                    required
                  />
                  <span className="icon is-small is-left">
                    <FiMail />
                  </span>
                </div>
              </div>
            </IconContext.Provider>

            <div className="field">
              <label htmlFor="message" className="label">
                {_f("messageContent")}
              </label>
              <div className="control">
                <textarea
                  name="message"
                  id="message"
                  className="textarea is-primary"
                  placeholder={_f("messageContentPlaceholder")}
                  required
                ></textarea>
              </div>
            </div>

            <div id="honeyPotField">
              <input
                type="checkbox"
                name="groovy_violet_waved_weasel"
                value="1"
                tabindex="-1"
                autocomplete="no"
              />
            </div>

            <div className="field is-grouped">
              <div className="buttons">
                <button
                  type="submit"
                  className="button is-primary"
                >
                  {_f("send")}
                </button>
                <a
                  href="https://t.me/isaacpontes_dev"
                  className="button is-primary is-light"
                  target="_blank"
                >
                  {_f("telegram")}
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}