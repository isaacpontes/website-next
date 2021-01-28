import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Navbar = () => {
  const toggleNavbarBurger = () => {
    document.querySelector('.navbar-burger').classList.toggle('is-active');
    document.querySelector('#navMenu').classList.toggle('is-active');
  }
  useEffect(() => {
    const navbarBurger = document.querySelector('.navbar-burger');
    navbarBurger.classList.remove('is-active');
    document.querySelector('#navMenu').classList.remove('is-active');
    navbarBurger.addEventListener('click', toggleNavbarBurger);
    return () => navbarBurger.removeEventListener('click', toggleNavbarBurger);
  });

  return (
    <nav 
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
    <div className="container">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">
            <Image src="/symbol_basic_color.svg" width={162} height={100} />
          </a>
        </Link>

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
          <Link href="/portfolio">
            <a className="navbar-item">
              Portfólio
            </a>
          </Link>
          <Link href="/services">
            <a className="navbar-item">
              Serviços
            </a>
          </Link>
          <Link href="/contact">
            <a className="navbar-item">
              Contato
            </a>
          </Link>
        </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar