import { FaFacebookSquare, FaGithub, FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

function ProfileCard({ githubProfile }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={ githubProfile.avatar_url } alt="My GitHub Avatar"/>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <a href="https://github.com/isaacpontes">
              <h3 className="title mb-3">
                <FaGithub className="mr-2" />
                { githubProfile.name }
              </h3>
            </a>
            <span className="tag is-primary has-text-weight-bold">Desenvolvedor Full-stack</span>
          </div>
        </div>
        <div className="content is-size-5">
          <p>{ githubProfile.bio }</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;