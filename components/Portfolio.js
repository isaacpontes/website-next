import Projects from './Projects';

function Portfolio() {
  return (
    <section className="section has-background-light">
      <div className="container is-max-desktop has-text-centered">
        <h2 className="title is-spaced">
          Projetos em Destaque
        </h2>
        <p>
          Abaixo você pode conferir alguns dos projetos que desenvolvi. Também deixei os links para demonstrações ao vivo e para o código fonte dos projetos open source.
        </p>
      </div>
      <div className="container">
        <Projects />
        <article className="message is-link">
          <div className="message-body">
            Eu estou desenvolvendo novos projetos e em breve eles aparecerão por aqui.
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio;