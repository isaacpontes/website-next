import Link from "next/link";
import Avatar from "./Avatar";
import Columns from "../common/Columns";
import DateFormatter from "../DateFormatter";
import CoverImage from "./CoverImage";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug
}) {
  return (
    <>
      <CoverImage
        title={title}
        src={coverImage}
        slug={slug}
        height={620}
        width={1240}
      />
      <Columns>
        <Columns.Column size={5}>
          <h3 className="title">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="has-text-primary">{title}</a>
            </Link>
          </h3>
          <div className="subtitle is-6">
            <DateFormatter dateString={date} />
          </div>
        </Columns.Column>

        <Columns.Column size={7}>
          <p className="subtitle mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </Columns.Column>
      </Columns>
    </>
  )
}