import {
  FiAward, FiCode, FiPenTool, FiRefreshCw, FiServer, FiShield, FiTrendingUp
} from 'react-icons/fi';
import Container from '../common/Container';
import Columns from "../common/Columns";
import Section from "../common/Section";

function IconWithTitle({ icon, title }) {
  return (
    <div className="mb-4">
      <h3 className="title is-1 is-spaced has-text-white">{icon}</h3>
      <h4 className="subtitle has-text-white">{title}</h4>
    </div>
  )
}

function AboutSection() {

  return (
    <Section id="about" color="primary" gradient={true}>
      <Container extraClasses="has-text-centered">
        <Columns hcenter={true}>
          <Columns.Column size={8}>
            <h1 className="title has-text-white">About Me and My Work</h1>
            <p className="has-text-white">
              Bachelor in Information Systems, I work as an IT technician at the São Fidélis
              Town Hall and as a freelancer developer creating modern websites and applications.
              In my projects I try to write clean and efficient code and create friendly and responsive
              UIs with a touch of simplicity.
              Passionate about solving problems, I am always looking for new challenges and the 
              continuous improvement of my skills. So, let's create something awesome?
            </p>
          </Columns.Column>
        </Columns>
        <Columns>
          <Columns.Column size="one-fifth">
            <IconWithTitle
              icon={<FiCode />}
              title="Organized and Optimized Code"
            />
          </Columns.Column>
          <Columns.Column size="one-fifth">
            <IconWithTitle
              icon={<FiPenTool />}
              title="Beautifully and Carefully Crafted"
            />
          </Columns.Column>
          <Columns.Column size="one-fifth">
            <IconWithTitle
              icon={<FiShield />}
              title="Security and Reliability"
            />
          </Columns.Column>
          <Columns.Column size="one-fifth">
            <IconWithTitle
              icon={<FiAward />}
              title="Focus on Generating Results"
            />
          </Columns.Column>
          <Columns.Column size="one-fifth">
            <IconWithTitle
              icon={<FiTrendingUp />}
              title="Always Aiming for the Next Level"
            />
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  )
}

export default AboutSection;