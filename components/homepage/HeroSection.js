import Image from 'next/image';
import Link from 'next/link';
import Container from '../common/Container';
import Columns from '../common/Columns';

export default function HeroSection() {
  return (
    <section className="hero is-white is-fullheight-with-navbar is-gradient">
      <div className="hero-body">
        <Container>
          <Columns hcenter={true}>
            <Columns.Column size={6}>
              <div className="is-flex is-justify-content-center">
                <Image src="/assets/img/hero.svg" alt="Hero Image" width={280} height={280} />
              </div>
              <h1 className="title is-4 is-size-2-tablet is-spaced has-text-dark has-text-centered">
                A <span className="has-text-primary">developer </span>
                you can <span className="has-text-underlined">count on</span>
              </h1>
              <h2 className="subtitle is-6 has-text-dark has-text-centered">
                Hello, there! I'm Isaac, a full-stack web developer specialized in Node.js and PHP.
                I build elegant highly efficient websites and applications.
              </h2>
              <div className="buttons is-centered">
                <Link href="#about">
                  <a className="button is-primary">
                    Know My Work
                  </a>
                </Link>
                <Link href="/contato">
                  <a className="button is-dark is-outlined">
                    Contact Me
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