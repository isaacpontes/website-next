import { FiAward, FiCode, FiPenTool, FiRefreshCw, FiServer, FiShield, FiTrendingUp } from 'react-icons/fi';

function IconWithTitle({ icon, title }) {
  return (
    <div className="mb-6">
      <h3 className="title is-1 is-spaced has-text-white">{icon}</h3>
      <h4 className="subtitle has-text-white">{title}</h4>
    </div>
  )
}

function AboutSection({ imageUrl }) {
  return (
    <section className="section has-background-primary is-gradient">
      <div className="container has-text-centered">
        <h1 className="title has-text-white">Sobre Mim</h1>
        <p className="has-text-white">
          Formado em Sistemas de Informação, atuo como desenvolvedor freelancer criando sites
          e aplicações web modernas. 
          <span className="is-block">
            Em meus projetos, procuro escrever código limpo
            e eficiente, criar interfaces amigáveis, responsivas e com um toque de simplicidade.
          </span>
          Apaixonado por resolver problemas, estou sempre buscando novos desafios e a melhoria
          contínua de minhas habilidades. 
          <span className="is-block">E aí, vamos criar algo espetacular?</span>
        </p>
        {/* <figure className="image is-square">
          <img src={imageUrl} className="is-rounded has-border mt-6 p-2" height={240} width={240} />
        </figure> */}
        <div className="columns mt-6">
          <div className="column is-one-fifth">
            <IconWithTitle icon={<FiCode />} title="Código Organizado e Otimizado" />
          </div>
          <div className="column is-one-fifth">
            <IconWithTitle icon={<FiPenTool />} title="Cuidadosamente Simples e Belo" />
          </div>
          <div className="column is-one-fifth">
            <IconWithTitle icon={<FiShield />} title="Segurança e Confiabilidade" />
          </div>
          <div className="column is-one-fifth">
            <IconWithTitle icon={<FiAward />} title="Foco em Gerar Resultados" />
          </div>
          <div className="column is-one-fifth">
            <IconWithTitle icon={<FiTrendingUp />} title="Sempre Em Busca do Próximo Nível" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;