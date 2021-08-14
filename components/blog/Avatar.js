export default function Avatar({ name, picture }) {
  return (
    <div className="is-flex is-align-items-center">
      <figure className="image is-48x48">
        <img src={picture} className="is-rounded" alt={name} />
      </figure>
      <div className="is-size-5 has-text-weight-bold ml-3">{name}</div>
    </div>
  )
}