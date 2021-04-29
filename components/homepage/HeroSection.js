import Image from 'next/image';
import Link from 'next/link';
import Container from '../common/Container';
import Columns from '../common/Columns';
import { useIntl } from "react-intl";

export default function HeroSection() {
  const { formatMessage } = useIntl();
  const _f = (id) => formatMessage({ id });

  return (
    <section className="hero is-white is-fullheight-with-navbar is-gradient">
      <div className="hero-body">
        <Container>
          <Columns hcenter={true}>
            <Columns.Column size={7}>

              <div className="is-flex is-justify-content-center">
                <Image src="/assets/img/hero.svg" alt="Hero Image" width={280} height={280} />
              </div>

              <h1 className="title is-4 is-size-2-tablet is-spaced has-text-dark has-text-centered">
                {_f("headlineA")}
                <span className="has-text-primary">
                  {_f("headlineB")}
                </span>
                {_f("headlineC")}
                <span className="has-text-underlined">{_f("headlineD")}</span>
              </h1>

              <h2 className="subtitle is-6 has-text-dark has-text-centered">
                {_f("subHeadline")}
              </h2>

              <div className="buttons is-centered">
                <Link href="#about">
                  <a className="button is-primary">
                    {_f("knowMyWork")}
                  </a>
                </Link>
                <Link href="/contato">
                  <a className="button is-dark is-outlined">
                    {_f("contactMe")}
                  </a>
                </Link>
              </div>
            </Columns.Column>
          </Columns>
        </Container>
      </div>
    </section>
  )
}