import Avatar from './Avatar'
import DateFormatter from '../DateFormatter'
import CoverImage from './CoverImage'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="column is-6-tablet is-4-desktop">
      <div className="mb-4">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />
      </div>
      <h3 className="title is-4">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="has-text-primary">{title}</a>
        </Link>
      </h3>
      <div className="subtitle is-7 mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="subtitle is-6 mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}