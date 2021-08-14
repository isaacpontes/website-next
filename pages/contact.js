import Head from 'next/head';
import Columns from '../components/common/Columns';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import ContactForm from '../components/ContactForm';
import { useIntl } from 'react-intl';

export default function Contact({ avatarUrl }) {
  const { formatMessage } = useIntl();
  const _f = (id) => formatMessage({ id });

  return (
    <Section color="white">
      <Head>
        <title>{_f("siteTitle")}</title>
        <meta property="og:image" content={avatarUrl} />
        <meta property="twitter:image" content={avatarUrl} />
      </Head>
      <Container>
        <Columns hcenter={true}>
          <Columns.Column size={6}>
            <ContactForm />
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  )
}

