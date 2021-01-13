import Link from "next/link";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  });

  return (
    <nav 
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          className="navbar-item"
          href="https://bulma.io"
        >
          <img
            src="https://bulma.io/images/bulma-logo-white.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navMenu" className="navbar-menu">
        <div className="navbar-start">
          <Link href="/">
            <a className="navbar-item">
              Início
            </a>
          </Link>
          <Link href="/services">
            <a className="navbar-item">
              Serviços
            </a>
          </Link>
          <Link href="/portfolio">
            <a className="navbar-item">
              Portfólio
            </a>
          </Link>
          <Link href="/contact">
            <a className="navbar-item">
              Contato
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar