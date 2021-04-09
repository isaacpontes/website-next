import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiSend } from "react-icons/fi";

Navbar.Brand = () => (
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
)

Navbar.Menu = () => (
  <div id="navMenu" className="navbar-menu has-text-centered">
    <div className="navbar-start">

    </div>
    <div className="is-flex">
      <Link href="/">
        <a className="navbar-item">
          Início
        </a>
      </Link>
      <Link href="/sobre">
        <a className="navbar-item">
          Sobre
        </a>
      </Link>
      <Link href="/contato">
        <a className="navbar-item">
          Contato
        </a>
      </Link>
    </div>
    <div className="navbar-end">
      <a href="https://github.com/isaacpontes" className="navbar-item" target="_blank">
        <FiGithub />
      </a>
      <a href="https://www.linkedin.com/in/isaac-pontes/" className="navbar-item" target="_blank">
        <FiLinkedin />
      </a>
      <a href="https://www.instagram.com/isaac.lfp/" className="navbar-item" target="_blank">
        <FiInstagram />
      </a>
      <a href="https://t.me/isaacpontes_dev" className="navbar-item" target="_blank">
        <FiSend />
      </a>
    </div>
  </div>
)

function Navbar() {
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
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <Navbar.Brand />

        <Navbar.Menu />
      </div>
    </nav>
  )
}

export default Navbar;