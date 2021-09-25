import {
  FiAward, FiCode, FiPenTool, FiShield, FiTrendingUp, FiMonitor, FiShoppingCart, FiLayout, FiTool
} from 'react-icons/fi';
import Container from '../common/Container';
import Columns from "../common/Columns";
import Section from "../common/Section";
import { useIntl } from "react-intl";
import Image from 'next/image';

export default function AboutSection() {
  const { formatMessage } = useIntl();
  const _f = (id) => formatMessage({ id });

  return (
    <Section id="about" color="white" gradient={true}>
      <Container extraClasses="has-text-centered">
        <Columns hcenter={true}>
          <Columns.Column size={10}>
            <h1 className="title is-2 has-title-decoration has-text-dark">
              {_f("aboutTitle")}
            </h1>
            <p className="has-text-dark">
              {_f("aboutText")}
            </p>
          </Columns.Column>
        </Columns>

        <h3 className="title has-text-dark mt-6">Pilares</h3>
        <Columns>
          <Columns.Column size="one-fifth">
            <IconWithTitle
              icon={<FiCode />}
              title={_f("aboutCode")}
              aos="zoom-in-up"
              aosDelay="300"
            />
          </Columns.Column>
          <Columns.Column size="one-fifth">
            <IconWithTitle
              icon={<FiPenTool />}
              title={_f("aboutDesign")}
              aos="zoom-in-up"
              aosDelay="150"
            />
          </Columns.Column>
          <Columns.Column size="one-fifth">
            <IconWithTitle
              icon={<FiShield />}
              title={_f("aboutSecurity")}
              aos="zoom-in-up"
              aosDelay="600"
            />
          </Columns.Column>
          <Columns.Column size="one-fifth">
            <IconWithTitle
              icon={<FiAward />}
              title={_f("aboutResults")}
              aos="zoom-in-up"
              aosDelay="450"
            />
          </Columns.Column>
          <Columns.Column size="one-fifth">
            <IconWithTitle
              icon={<FiTrendingUp />}
              title={_f("aboutGrow")}
              aos="zoom-in-up"
              aosDelay="750"
            />
          </Columns.Column>
        </Columns>

        <h3 className="title has-text-dark mt-6">Serviços</h3>
        <Columns>
          <Columns.Column size="one-quarter">
            <IconWithTitle
              icon={<FiMonitor />}
              title={_f("aboutWebsites")}
              aos="zoom-in-up"
              aosDelay="150"
            />
          </Columns.Column>
          <Columns.Column size="one-quarter">
            <IconWithTitle
              icon={<FiShoppingCart />}
              title={_f("aboutEcommerce")}
              aos="zoom-in-up"
              aosDelay="600"
            />
          </Columns.Column>
          <Columns.Column size="one-quarter">
            <IconWithTitle
              icon={<FiLayout />}
              title={_f("aboutWebApps")}
              aos="zoom-in-up"
              aosDelay="300"
            />
          </Columns.Column>
          <Columns.Column size="one-quarter">
            <IconWithTitle
              icon={<FiTool />}
              title={_f("aboutMaintenance")}
              aos="zoom-in-up"
              aosDelay="450"
            />
          </Columns.Column>
        </Columns>

        <h3 className="title has-text-dark mt-6">Tecnologias</h3>
        <Columns multiline={true}>
          <Columns.Column size="one-fifth">
            <div
              className="my-5"
              data-aos="zoom-in-up"
              data-aos-delay="300"
            >
              <Image
                src="/assets/img/javascript.svg"
                alt="Javascript"
                height="64"
                width="64"
                className="mx-auto"
              />
              <h4 className="subtitle has-text-dark">Javascript</h4>
            </div>
          </Columns.Column>
          <Columns.Column size="one-fifth">
            <div
              className="my-5"
              data-aos="zoom-in-up"
              data-aos-delay="450"
            >
              <Image
                src="/assets/img/nodejs.svg"
                alt="Node"
                height="64"
                width="64"
                className="mx-auto"
              />
              <h4 className="subtitle has-text-dark">Node</h4>
            </div>
          </Columns.Column>
          <Columns.Column size="one-fifth">
            <div
              className="my-5"
              data-aos="zoom-in-up"
              data-aos-delay="150"
            >
              <Image
                src="/assets/img/react.svg"
                alt="React"
                height="64"
                width="64"
                className="mx-auto"
              />
              <h4 className="subtitle has-text-dark">React</h4>
            </div>
          </Columns.Column>
          <Columns.Column size="one-fifth">
            <div
              className="my-5"
              data-aos="zoom-in-up"
              data-aos-delay="750"
            >
              <Image
                src="/assets/img/nextjs.svg"
                alt="Next"
                height="64"
                width="64"
                className="mx-auto"
              />
              <h4 className="subtitle has-text-dark">Next</h4>
            </div>
          </Columns.Column>
          <Columns.Column size="one-fifth">
            <div
              className="my-5"
              data-aos="zoom-in-up"
              data-aos-delay="600"
            >
              <Image
                src="/assets/img/mongodb.svg"
                alt="MongoDB"
                height="64"
                width="64"
                className="mx-auto"
              />
              <h4 className="subtitle has-text-dark">MongoDB</h4>
            </div>
          </Columns.Column>
          <Columns.Column size="one-fifth">
            <div
              className="my-5"
              data-aos="zoom-in-up"
              data-aos-delay="150"
            >
              <Image
                src="/assets/img/sass.svg"
                alt="Sass"
                height="64"
                width="64"
                className="mx-auto"
              />
              <h4 className="subtitle has-text-dark">Sass</h4>
            </div>
          </Columns.Column>
          <Columns.Column size="one-fifth">
            <div
              className="my-5"
              data-aos="zoom-in-up"
              data-aos-delay="600"
            >
              <Image
                src="/assets/img/bootstrap.svg"
                alt="Bootstrap"
                height="64"
                width="64"
                className="mx-auto"
              />
              <h4 className="subtitle has-text-dark">Bootstrap</h4>
            </div>
          </Columns.Column>
          <Columns.Column size="one-fifth">
            <div
              className="my-5"
              data-aos="zoom-in-up"
              data-aos-delay="300"
            >
              <Image
                src="/assets/img/adobexd.svg"
                alt="Adobe XD"
                height="64"
                width="64"
                className="mx-auto"
              />
              <h4 className="subtitle has-text-dark">Adobe XD</h4>
            </div>
          </Columns.Column>
          <Columns.Column size="one-fifth">
            <div
              className="my-5"
              data-aos="zoom-in-up"
              data-aos-delay="450"
            >
              <Image
                src="/assets/img/git.svg"
                alt="Git"
                height="64"
                width="64"
                className="mx-auto"
              />
              <h4 className="subtitle has-text-dark">Git</h4>
            </div>
          </Columns.Column>
          <Columns.Column size="one-fifth">
            <div
              className="my-5"
              data-aos="zoom-in-up"
              data-aos-delay="750"
            >
              <Image
                src="/assets/img/linux.svg"
                alt="Linux"
                height="64"
                width="64"
                className="mx-auto"
              />
              <h4 className="subtitle has-text-dark">Linux</h4>
            </div>
          </Columns.Column>
          {/* <Columns.Column size="one-fifth">
            <div className="my-5">
              <Image
                src="/assets/img/php.svg"
                alt="PHP"
                height="64"
                width="64"
                className="mx-auto"
              />
              <h4 className="subtitle has-text-dark">PHP</h4>
            </div>
          </Columns.Column>
          <Columns.Column size="one-fifth">
            <div className="my-5">
              <Image
                src="/assets/img/laravel.svg"
                alt="Laravel"
                height="64"
                width="64"
                className="mx-auto"
              />
              <h4 className="subtitle has-text-dark">Laravel</h4>
            </div>
          </Columns.Column>
          <Columns.Column size="one-fifth">
            <div className="my-5">
              <Image
                src="/assets/img/wordpress.svg"
                alt="WordPress"
                height="64"
                width="64"
                className="mx-auto"
              />
              <h4 className="subtitle has-text-dark">WordPress</h4>
            </div>
          </Columns.Column>
          <Columns.Column size="one-fifth">
            <div className="my-5">
              <Image
                src="/assets/img/woocommerce.svg"
                alt="WooCommerce"
                height="64"
                width="64"
                className="mx-auto"
              />
              <h4 className="subtitle has-text-dark">WooCommerce</h4>
            </div>
          </Columns.Column>
          <Columns.Column size="one-fifth">
            <div className="my-5">
              <Image
                src="/assets/img/mysql.svg"
                alt="MySQL"
                height="64"
                width="64"
                className="mx-auto"
              />
              <h4 className="subtitle has-text-dark">MySQL</h4>
            </div>
          </Columns.Column> */}
        </Columns>
      </Container>
    </Section>
  )
}

function IconWithTitle({ icon, title, aos, aosDelay }) {
  return (
    <div
      className="my-5"
      data-aos={aos ?? ''}
      data-aos-delay={aosDelay ?? ''}
    >
      <div
        className="title is-1 has-text-dark"
      >
        {icon}
      </div>
      <h4 className="subtitle has-text-dark">{title}</h4>
    </div>
  )
}
