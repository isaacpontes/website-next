import { FiCoffee, FiHeart } from "react-icons/fi"

export default function Footer() {
    return (
        <footer className="footer has-background-dark py-5">
            <div className="content has-text-light has-text-centered">
                <p>
                    Made with <FiHeart />, <FiCoffee /> and
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