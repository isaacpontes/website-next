import Columns from '../components/common/Columns';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import ProfileCard from '../components/about/ProfileCard';
import { useIntl } from 'react-intl';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function About({ githubProfile }) {
  const { formatMessage } = useIntl();
  const _f = (id) => formatMessage({ id });

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Section color="white">
        <Container>
          <Columns>
            <Columns.Column size={3}>
              <ProfileCard githubProfile={githubProfile} />
            </Columns.Column>

            <Columns.Column size={9}>
            </Columns.Column>
          </Columns>
        </Container>
      </Section>
    </>
  )
}

export async function getStaticProps() {
  const githubResponse = await fetch('https://api.github.com/users/isaacpontes')
    .then(res => res.json());

  return {
    props: {
      githubProfile: githubResponse,
    }
  }
}