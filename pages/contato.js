import Head from 'next/head';
import ContactForm from "../components/ContactForm"

export default function Contato({ avatarUrl }) {
  return (
    <section className="section has-background-light">
      <Head>
        <meta property="og:image" content={avatarUrl} />
        <meta property="twitter:image" content={avatarUrl} />
      </Head>
      <div className="container">
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <ContactForm/>
          </div>
        </div>
      </div>
    </section>
  )
}

