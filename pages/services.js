import ServiceCard from '../components/ServiceCard'
import { FaChartLine, FaDesktop, FaHandsHelping, FaServer, FaShoppingCart, FaWhatsapp } from 'react-icons/fa'
import { IoConstruct, IoRocket } from 'react-icons/io5'

export default function Services() {
  return (
    <>
      <section className="section has-background-light">
        <div className="container">
          <h3 className="title">
            Como posso te ajudar?
          </h3>
          <p className="subtitle">
            Precisa de um site incrível? Um e-commerce? Uma aplicação web inovadora?
            <span className="is-block">Eu sou a pessoa certa para tirar suas melhores ideias do papel!</span>
          </p>
          <div className="columns">
            <div className="column is-one-quarter">
              <ServiceCard
                cardIcon={ <FaDesktop/> }
                title="Criação de Sites"
                description="Tenha uma presença marcante na internet e garanta uma experiência única para seus clientes."
              >
                <a className="button is-primary">
                  Saiba mais
                </a>
              </ServiceCard>

            </div>
            <div className="column is-one-quarter">
              <ServiceCard
                cardIcon={ <FaShoppingCart/> }
                title="E-Commerce"
                description="Venda para todo o Brasil e aumente seu lucro através de uma loja virtual rápida e feita para as suas necessidades."
              >
                <a className="button is-primary">
                  Saiba mais
                </a>
              </ServiceCard>
            </div>
            <div className="column is-one-quarter">
              <ServiceCard
                cardIcon={ <IoRocket/> }
                title="Landing Pages"
                description="Impulsione suas campanhas, capture leads e aumente suas conversões através de páginas de destino eficientes."
              >
                <a className="button is-primary">
                  Saiba mais
                </a>
              </ServiceCard>
            </div>
            <div className="column is-one-quarter">
              <ServiceCard
                cardIcon={ <FaServer/> }
                title="Aplicações Web"
                description="Transforme suas ideias em aplicações reais para serem usadas por qualquer pessoa e em qualquer lugar."
              >
                <a className="button is-primary">
                  Saiba mais
                </a>
              </ServiceCard>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-quarter">
              <ServiceCard
                cardIcon={ <FaChartLine/> }
                title="Otimização SEO"
                description="Faça seu site ser encontrado pelas ferramentas de pesquisa e melhore o tráfego orgânico nas suas páginas."
              >
                <a className="button is-primary">
                  Saiba mais
                </a>
              </ServiceCard>
            </div>
            <div className="column is-one-quarter">
              <ServiceCard
                cardIcon={ <IoConstruct/> }
                title="Manutenção"
                description="Já possui um site que precisa de ajustes? Sem problemas, posso te ajudar a colocar sua página de volta nos trilhos."
              >
                <a className="button is-primary">
                  Saiba mais
                </a>
              </ServiceCard>
            </div>
            <div className="column is-one-quarter">
              <ServiceCard
                cardIcon={ <FaHandsHelping/> }
                title="Consultoria"
                description="Já sabe o que quer mas ainda não por onde começar? Não se preocupe, posso te mostrar os melhores caminhos."
              >
                <a className="button is-primary">
                  Saiba mais
                </a>
              </ServiceCard>
            </div>
            <div className="column is-one-quarter">
              <ServiceCard
                cardIcon={ <FaWhatsapp/> }
                title="Alguma pergunta?"
                description="Está perdido? Não sabe nem por onde começar? Entre em contato direto comigo e eu tiro todas as suas dúvidas."
              >
                <a href="https://wa.me/5522996057593" className="button is-link">
                  Entrar em contato
                </a>
              </ServiceCard>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}