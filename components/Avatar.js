export default function Avatar({ name, picture }) {
  return (
    <div className="is-flex is-align-items-center">
      <figure className="image is-64x64">
        <img src={picture} className="is-rounded" alt={name} />
      </figure>
      <div className="is-size-4 has-text-weight-bold ml-3">{name}</div>
    </div>
  )
}