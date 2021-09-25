const ServiceCard = (props) => {
  return (
    <div 
      className="column
        is-12-mobile
        is-6-tablet
        is-3-desktop
        has-text-centered"
    >
      <h3 className="title is-1">
        <span className="icon is-large mx-auto">
          { props.cardIcon }
        </span>
      </h3>
      <h4 className="title is-4">
        { props.title }
      </h4>
      <p>{ props.description }</p>
    </div>
  )
}

export default ServiceCard