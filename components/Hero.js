import Link from 'next/link';

const Hero = () => {
  return (
    <section className="hero has-background is-dark is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-2">
            Isaac Pontes
          </h1>
          <h2 className="subtitle is-6">
            Olá! Eu sou um desenvolvedor full stack de São Fidélis, Rio de Janeiro. 
            <span className="is-block">Eu construo sites e aplicações otimizados e amigáveis utilizando tecnologias web modernas.</span>
          </h2>
          <div className="buttons">
            <Link href="/services">
              <a className="button is-link">
                Conhecer meu trabalho
              </a>
            </Link>
            <Link href="/contato">
              <a className="button is-white is-outlined">
                Entrar em contato
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero