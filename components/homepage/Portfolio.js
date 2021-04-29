import Section from "../common/Section";
import Container from "../common/Container";
import Columns from "../common/Columns";
import Projects from "./Projects";
import Link from "next/link";
import { useIntl } from "react-intl";

export default function Portfolio() {
  const { formatMessage } = useIntl();
  const _f = (id) => formatMessage({ id });

  return (
    <Section id="portfolio" color="light">
      <Container extraClasses="has-text-centered">
        <Columns hcenter={true}>
          <Columns.Column size={8}>
            <h2 className="title is-spaced">
              {_f("portfolioTitle")}
            </h2>
            <p className="mb-5">
              {_f("portfolioText")}
            </p>
          </Columns.Column>
        </Columns>

        <Projects />
      </Container>
      <Container extraClasses="mt-6">
        <article className="message is-link">
          <div className="message-body">
            {_f("portfolioMessage")}
            {' '}
            <Link href="/portfolio">
              <a>{_f("portfolioLink")}</a>
            </Link>
            .
          </div>
        </article>
      </Container>
    </Section>
  )
}
