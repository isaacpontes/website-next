import Head from 'next/head';
import Columns from '../components/common/Columns';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import ContactForm from "../components/ContactForm"

export default function Contact({ avatarUrl }) {
  return (
    <Section color="white">
      <Head>
        <title>Isaac Pontes | Contact</title>
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

