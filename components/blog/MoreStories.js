import PostPreview from "./PostPreview";
import Columns from "../common/Columns";

export default function MoreStories({ posts }) {
  return (
    <>
      <hr/>
      <section>
        <h2 className="title">
          More Stories
        </h2>
        <Columns multiline={true}>
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </Columns>
      </section>
    </>
  )
}