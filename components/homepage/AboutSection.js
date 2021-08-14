import {
  FiAward, FiCode, FiPenTool, FiShield, FiTrendingUp
} from 'react-icons/fi';
import Container from '../common/Container';
import Columns from "../common/Columns";
import Section from "../common/Section";
import { useIntl } from "react-intl";

export default function AboutSection() {
  const { formatMessage } = useIntl();
  const _f = (id) => formatMessage({ id });

  return (
    <Section id="about" color="primary" gradient={true}>
      <Container extraClasses="has-text-centered">
        <Columns hcenter={true}>
          <Columns.Column size={8}>
            <h1 className="title has-text-white">
              {_f("aboutTitle")}
            </h1>
            <p className="has-text-white">
              {_f("aboutText")}
            </p>
          </Columns.Column>
        </Columns>
        <Columns>
          <Columns.Column size="one-fifth">
            <IconWithTitle
              icon={<FiCode />}
              title={_f("aboutCode")}
            />
          </Columns.Column>
          <Columns.Column size="one-fifth">
            <IconWithTitle
              icon={<FiPenTool />}
              title={_f("aboutDesign")}
            />
          </Columns.Column>
          <Columns.Column size="one-fifth">
            <IconWithTitle
              icon={<FiShield />}
              title={_f("aboutSecurity")}
            />
          </Columns.Column>
          <Columns.Column size="one-fifth">
            <IconWithTitle
              icon={<FiAward />}
              title={_f("aboutResults")}
            />
          </Columns.Column>
          <Columns.Column size="one-fifth">
            <IconWithTitle
              icon={<FiTrendingUp />}
              title={_f("aboutGrow")}
            />
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  )
}

function IconWithTitle({ icon, title }) {
  return (
    <div className="mb-4">
      <h3 className="title is-1 is-spaced has-text-white">{icon}</h3>
      <h4 className="subtitle has-text-white">{title}</h4>
    </div>
  )
}
