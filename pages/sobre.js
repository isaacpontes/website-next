import ExperienceCard from '../components/sobre/ExperienceCard';
import FormationCard from '../components/sobre/FormationCard';
import ProfileCard from '../components/sobre/ProfileCard';
import TechnologiesCard from '../components/sobre/TechnologiesCard';


export default function Sobre({ githubProfile }) {
  return (
    <>
      <section className="section has-background-light">
        <div className="container">
          <div className="columns">
            <div className="column is-one-third">
              <ProfileCard githubProfile={githubProfile} />
            </div>
            <div className="column is-two-third">
              <TechnologiesCard />
              <ExperienceCard />
              <FormationCard />
            </div>
          </div>
        </div>
      </section>
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