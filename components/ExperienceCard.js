import Image from 'next/image';
import { FaLaptopCode } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function ExperienceCard() {
  return (
    <div className="card mb-5">
      <div className="card-content">
        <h5 className="title is-5">
          My Professional Experience
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
              Freelancer Developer
            </h6>
            <p className="subtitle is-7">
              Period: 2020 - Present
            </p>
            <p>
              I create fullstack websites and applications using mostly PHP, Node.js and React.
              When it comes to data storage, I have experience with both SQL and NoSQL databases.
              On my projects I go all the way from planning, design and prototyping, to 
              development and deployment on production environments.
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
              IT Technician at Prefeitura Municipal de São Fidélis
            </h6>
            <p className="subtitle is-7">
              Period: 2016 - Present
            </p>
            <p>
              I work with installation and configuration of Windows and Linux clients and servers,
              management of computer networks, service desk and websites development and maintenance.
              Some of the tools I work with are Nginx an IIS web servers, Microsoft Office, PowerShell,
              PHP and WordPress.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard;