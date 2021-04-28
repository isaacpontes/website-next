import Link from "next/link";
import PostPreview from "../blog/PostPreview";
import Columns from "../common/Columns";
import Container from "../common/Container";
import Section from "../common/Section";

function BlogSection({ posts }) {
  return (
    <Section color="white">
      <Container>
        <Columns hcenter={true}>
          <Columns.Column size={8}>
            <h2 className="title has-text-primary has-text-centered is-spaced">
              Blog
            </h2>
            <p className="has-text-centered mb-6">
            A project that came up as a way of giving back for everything I learned through the internet
            community. In it I share a little of my knowledge through articles, tutorials and technology
            tips in general. Here you will find content about algorithm, logic and programming languages,
            web development and much more.
            </p>
          </Columns.Column>
        </Columns>
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
      </Container>
      <div className="buttons is-centered mt-6">
        <Link href="/blog">
          <a className="button is-primary">
            Read More
          </a>
        </Link>
      </div>
    </Section>
  )
}

export default BlogSection;