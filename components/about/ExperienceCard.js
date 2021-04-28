import Image from 'next/image';
import Columns from "../common/Columns";

export default function ExperienceCard() {
  return (
    <div className="card mb-5">
      <div className="card-content">
        <h5 className="title is-5">
          My Professional Experience
        </h5>

        <Columns vcenter={true}>
          <Columns.Column size="one-fifth">
            <div className="is-flex is-justify-content-center">
              <Image src="/symbol_basic_color.svg" alt="Logo da PMSF" height={150} width={126} />
            </div>
          </Columns.Column>

          <Columns.Column size="four-fifths">
            <h6 className="title is-6">
              Freelancer Developer
            </h6>
            <p className="subtitle is-7">
              Period: 2018 - Now
            </p>
            <p>
            I create websites and full-stack web applications using mainly Node.js, React and PHP.
            When it comes to data storage I have experience with both SQL and NoSQL. In my projects,
            I carefully go through all stages, from planning, design and prototyping, to development,
            testing and deployment in production environment.
            </p>
          </Columns.Column>
        </Columns>
        <hr/>
        <Columns vcenter={true}>
          <Columns.Column size="one-fifth">
            <div className="is-flex is-justify-content-center">
              <Image src="/assets/img/pmsf.webp" alt="Logo da PMSF" height={150} width={126} />
            </div>
          </Columns.Column>

          <Columns.Column size="four-fifths">
            <h6 className="title is-6">
            IT Technician at Prefeitura Municipal de São Fidélis
            </h6>
            <p className="subtitle is-7">
              Period: 2016 - Now
            </p>
            <p>
              I work with installation and configuration of Windows and Linux clients and servers,
              computer network management, Service Desk support and development and maintenance of
              websites and web applications. Some of the tools I work with are Nginx and IIS web
              servers, Microsoft Office, PowerShell, PHP and WordPress.
            </p>
          </Columns.Column>
        </Columns>
      </div>
    </div>
  )
}