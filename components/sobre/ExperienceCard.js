import Image from 'next/image';
import { FaLaptopCode } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function ExperienceCard() {
  return (
    <div className="card mb-5">
      <div className="card-content">
        <h5 className="title is-5">
          Minha Experiência Profissional
        </h5>
        <div className="columns is-vcentered">
          <div className="column is-one-fifth">
            <IconContext.Provider value={{ size: "3em" }}>
              <h1 className="title has-text-link has-text-centered">
                <FaLaptopCode />
              </h1>
            </IconContext.Provider>
          </div>
          <div className="column is-four-fifths">
            <h6 className="title is-6">
              Desenvolvedor Freelancer
            </h6>
            <p className="subtitle is-7">
              Período: 2020 - Presente
            </p>
            <p>
              Eu crio sites e aplicações web full-stack utilizando, principalmente, PHP,
              Node.js e React. Na área de bancos de dados possuo experiência com ambos SQL e NoSQL.
              Em meus projetos eu passo cuidadosamente por todas as etapas, desde o planejamento, 
              design e prototipação, até o desenvolvimento, teste e implantação em ambiente de produção.
            </p>
          </div>
        </div>
        <hr/>
        <div className="columns is-vcentered">
          <div className="column is-one-fifth">
            <Image src="/img/pmsf.webp" alt="Logo da PMSF" height={150} width={126} />
          </div>
          <div className="column is-four-fifths">
            <h6 className="title is-6">
              Técnico em Informática na Prefeitura Municipal de São Fidélis
            </h6>
            <p className="subtitle is-7">
              Period: 2016 - Present
            </p>
            <p>
              Trabalho com instalação e configuração de clientes e servidores Windows e Linux,
              gerenciamento de redes de computadores, suporte Service Desk e desenvolvimento e
              manutenção de sites e aplicações web. Algumas das ferramentas com que trabalho são
              servidores web Nginx e IIS, Microsoft Office, PowerShell, PHP e WordPress.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard;