
import ContactCard from "../components/ContactCard"
import ContactForm from "../components/ContactForm"

const Contact = ({ avatarUrl }) => {
  return (
    <section className="section has-background-light">
      <div className="container">
        <div className="columns">
          <div className="column is-one-quarter">
            <ContactCard avatarUrl={avatarUrl} />
          </div>
          <div className="column">
            <ContactForm/>
          </div>
        </div>
      </div>
    </section>
  )
}


export async function getStaticProps() {
  const githubResponse = await fetch('https://api.github.com/users/isaacpontes')
    .then(res => res.json());

  return {
    props: {
      avatarUrl: githubResponse.avatar_url,
    }
  }
}


export default Contact