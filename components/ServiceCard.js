import { IconContext } from 'react-icons/lib'

const ServiceCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="has-text-centered">
          <IconContext.Provider value={{ size: "5em" }}>
            <span className="icon is-large mx-auto">
              { props.cardIcon }
            </span>
          </IconContext.Provider>
        </div>
        <h4 className="title is-4">
          { props.title }
        </h4>
        <p>{ props.description }</p>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">
          { props.children }
        </div>
      </footer>
    </div>
  )
}

export default ServiceCard