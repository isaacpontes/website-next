import Link from 'next/link';

const Hero = () => {
  return (
    <section className="hero has-background is-dark is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-size-2-tablet is-spaced">
            O <span className="has-text-primary">desenvolvedor</span> <span className="is-block">em quem você <span className="has-text-underlined">pode confiar</span></span>
          </h1>
          <h2 className="subtitle is-6">
            Olá, eu sou Isaac Pontes, um desenvolvedor full stack de São Fidélis, Rio de Janeiro. 
            <span className="is-block">Eu construo sites e aplicações otimizados e amigáveis utilizando tecnologias web modernas.</span>
          </h2>
          <div className="buttons">
            <Link href="/services">
              <a className="button is-light">
                Conheça meu trabalho
              </a>
            </Link>
            <Link href="/contact">
              <a className="button is-white is-outlined">
                Entre em contato
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero