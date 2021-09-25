import Image from 'next/image';
import Link from 'next/link';
import Section from '../common/Section';
import Container from '../common/Container';
import Columns from '../common/Columns';
import { useIntl } from "react-intl";

export default function HeroSection() {
  const { formatMessage } = useIntl();
  const _f = (id) => formatMessage({ id });

  return (
    <Section color="white">
      <Container>
        <Columns vcenter={true}>
          <Columns.Column size={6}>

            <div
              className="is-flex is-justify-content-center"
              data-aos="flip-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <Image src="/assets/img/hero.svg" alt="Hero Image" width={420} height={420} />
            </div>

          </Columns.Column>
          <Columns.Column size={6}>
            <h1
              className="title is-size-2-tablet is-size-1-desktop has-text-dark"
              data-aos="flip-up"
              data-aos-delay="500"
              data-aos-duration="800"
            >
              {_f("headlineA")}
              <span className="has-text-primary">
              {_f("headlineB")}
              </span>
            </h1>

            <h2
              className="subtitle is-6 my-6 has-text-dark"
              data-aos="flip-up"
              data-aos-delay="650"
              data-aos-duration="800"
            >
              {_f("subHeadline")}
            </h2>

            <div
              className="buttons"
              data-aos="flip-up"
              data-aos-delay="800"
            >
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
    </Section>
  )
}