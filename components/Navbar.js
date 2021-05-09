import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiSend } from "react-icons/fi";
import { useIntl } from 'react-intl';

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
);

Navbar.Menu = () => {
  const { formatMessage } = useIntl();
  const _f = (id) => formatMessage({ id });

  return (
    <div id="navMenu" className="navbar-menu">
      <div className="navbar-start">
        <Link href="/">
          <a className="navbar-item">
            {_f("navbarHome")}
          </a>
        </Link>
        <Link href="/about">
          <a className="navbar-item">
            {_f("navbarAbout")}
          </a>
        </Link>
        <Link href="/contact">
          <a className="navbar-item">
            {_f("navbarContact")}
          </a>
        </Link>
        <Link href="/blog">
          <a className="navbar-item">
            {_f("navbarBlog")}
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
  );
};