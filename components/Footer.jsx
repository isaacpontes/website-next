import { FiCoffee, FiHeart } from "react-icons/fi"

export default function Footer() {
  return (
    <footer className="footer has-background-light py-5">
      <div className="content has-text-dark has-text-centered">
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