import Section from "../common/Section";
import Container from "../common/Container";
import Columns from "../common/Columns";
import Projects from "./Projects";
import Link from "next/link";

function Portfolio() {
  return (
    <Section id="portfolio" color="light">
      <Container extraClasses="has-text-centered">
        <Columns hcenter={true}>
          <Columns.Column size={8}>
            <h2 className="title is-spaced">
              Featured Projects
            </h2>
            <p className="mb-5">
            Below you can find some really cool projects I developed and the tools I used.
            There are also links to the live demos and the source code of the open source projects.
            </p>
          </Columns.Column>
        </Columns>

        <Projects />
      </Container>
      <Container extraClasses="mt-6">
        <article className="message is-link">
          <div className="message-body">
            I am working on new projects and they will soon be here too. You can find all my projects
            {' '}
            <Link href="/portfolio">
              <a>here</a>
            </Link>
            .
          </div>
        </article>
      </Container>
    </Section>
  )
}

export default Portfolio;