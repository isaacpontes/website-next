import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiSend } from "react-icons/fi";

export default function Navbar() {
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
      className="navbar is-transparent is-spaced"
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

Navbar.Brand = () => (
  <div className="navbar-brand is-align-items-center is-justify-content-space-between">
    <Link href="/">
      <a className="navbar-item">
        <Image src="/site-logo.svg" width={160} height={50} />
      </a>
    </Link>

    <div className="navbar-social-icons is-hidden-tablet">
      <a href="https://github.com/isaacpontes" className="navbar-item" target="_blank">
        <FiGithub />
      </a>
      <a href="https://www.linkedin.com/in/isaac-pontes/" className="navbar-item" target="_blank">
        <FiLinkedin />
      </a>
      <a href="https://www.instagram.com/isaac.lfp/" className="navbar-item" target="_blank">
        <FiInstagram />
      </a>
    </div>

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
);

Navbar.Menu = () => {
  return (
    <div id="navMenu" className="navbar-menu">
      <div className="navbar-start">
      </div>
      <div className="navbar-end">
        <Link href="/">
          <a className="navbar-item">
            Início
          </a>
        </Link>
        <Link href="/about">
          <a className="navbar-item">
            Sobre Mim
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
        <Link href="/blog">
          <a className="navbar-item">
            Artigos
          </a>
        </Link>
      </div>
      <div className="navbar-social-icons is-hidden-mobile">
        <a href="https://github.com/isaacpontes" className="navbar-item" target="_blank">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/isaac-pontes/" className="navbar-item" target="_blank">
          <FiLinkedin />
        </a>
        <a href="https://www.instagram.com/isaac.lfp/" className="navbar-item" target="_blank">
          <FiInstagram />
        </a>
      </div>
    </div>
  );
};