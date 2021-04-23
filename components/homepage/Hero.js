import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="hero is-light is-fullheight-with-navbar is-gradient">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-one-half">
              <Image src="/img/hero.svg" alt="Hero Image" width={480} height={480} />
            </div>
            <div className="column is-one-half">
              <h1 className="title is-4 is-size-2-tablet is-spaced has-text-dark">
                Um <span className="has-text-primary">desenvolvedor</span> <span className="is-block">em quem você <span className="has-text-underlined">pode confiar</span></span>
              </h1>
              <h2 className="subtitle is-6 has-text-dark">
                Olá, eu sou Isaac, um desenvolvedor web full-stack especializado em Node.js e PHP.
                Eu construo sites e aplicações web altamente eficazes.
              </h2>
              <div className="buttons">
                <Link href="/portfolio">
                  <a className="button is-primary">
                    Conheça meu trabalho
                  </a>
                </Link>
                <Link href="/contato">
                  <a className="button is-dark is-outlined">
                    Entre em contato
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero