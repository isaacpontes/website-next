import ExperienceCard from '../components/ExperienceCard';
import FormationCard from '../components/FormationCard';
import ProfileCard from '../components/ProfileCard';
import TechnologiesCard from '../components/TechnologiesCard';


export default function Sobre({ githubProfile }) {
  return (
    <>
      <section className="section has-background-white">
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