import { FiCoffee, FiHeart } from "react-icons/fi"

const Footer = () => {
    return (
        <footer className="footer has-background-dark py-5">
            <div className="content has-text-light has-text-centered">
                <p>
                    Feito com <FiHeart />, <FiCoffee /> e
                    {' '}
                    <a
                      href="https://bulma.io/"
                      className="has-text-link"
                      target="_blank">
                        Bulma
                      </a>.
                </p>
            </div>
        </footer>
    )
}

export default Footer;