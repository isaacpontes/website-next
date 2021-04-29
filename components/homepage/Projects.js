import Columns from "../common/Columns";
import { useIntl } from "react-intl";

export default function Projects() {
  const { formatMessage } = useIntl();
  const _f = (id) => formatMessage({ id });

  return (
    <Columns multiline={true}>
      {/* <Projects.Project
        imageUrl="/assets/img/personalportfolio.webp"
        title="Portfolio Pessoal"
        description="Meu site pessoal com portfolio, blog e formulário para contato. Esse é o projeto que você está visualizando neste exato momento."
        technologies={['Javascript', 'React', 'Next.js', 'Bulma', 'Sass']}
        demoLink="/"
        githubLink="https://github.com/isaacpontes/isaacpontes"
      /> */}
      <Projects.Project
        imageUrl="/assets/img/skynotes.webp"
        title="Skynotes"
        description={_f("skynotes")}
        technologies={['Javascript', 'Node', 'Express', 'Rest API', 'React', 'Bulma', 'Sass', 'MongoDB']}
        demoLink="https://skynotes.netlify.app"
        githubLink="https://github.com/isaacpontes/skynotes"
      />
      <Projects.Project
        imageUrl="/assets/img/starwarsquiz.webp"
        title="Star Wars Quiz"
        description={_f("starWarsQuiz")}
        technologies={['Javascript', 'React', 'Next.js', 'Styled Components']}
        demoLink="https://starwarsquiz.isaacpontes.vercel.app"
        githubLink="https://github.com/isaacpontes/starwarsquiz"
      />
      <Projects.Project
        imageUrl="/assets/img/hawkins.webp"
        title="Hawkins Design"
        description={_f("hawkinsDesign")}
        technologies={['PHP', 'WordPress', 'WooCommerce', 'Sass', 'jQuery', 'MySQL']}
        demoLink="https://hawkinsdesign.com.br"
      />
    </Columns>
  )
}

Projects.Project = ({
  imageUrl, title, description, technologies, demoLink, githubLink
}) => {
  const { formatMessage } = useIntl();
  const _f = (id) => formatMessage({ id });

  return (
    <div className="column is-one-third">
      <div className="card">
        <div className="card-image">
          <figure className="image is-partially-hidden">
            <img src={imageUrl} alt="Project Preview" />
          </figure>
        </div>
        <div className="card-content has-text-centered">
          <h3 className="title is-4">
            {title}
          </h3>
          <p className="subtitle is-6">
            {description}
          </p>
          <hr />
          <h4 className="title is-6">
            {_f("technologiesUsed")}
          </h4>
          <div className="tags is-centered">
            {technologies.map((value, index) => <span key={index} className="tag is-light">{value}</span>)}
          </div>
        </div>
        <footer className="card-footer">
          <div className="card-footer-item buttons">
            {demoLink &&
              <a href={demoLink} className="button is-primary" target="_blank">
                {_f("visitSite")}
              </a>
            }
            {githubLink &&
              <a href={githubLink} className="button is-dark is-outlined" target="_blank">
                {_f("sourceCode")}
              </a>
            }
          </div>
        </footer>
      </div>
    </div>
  );
};
