import Link from "next/link";
import PostPreview from "../blog/PostPreview";
import Columns from "../common/Columns";
import Container from "../common/Container";
import Section from "../common/Section";
import { useIntl } from "react-intl";

function BlogSection({ posts }) {
  const { formatMessage } = useIntl();
  const _f = (id) => formatMessage({ id });

  return (
    <Section color="white">
      <Container>
        <Columns hcenter={true}>
          <Columns.Column size={8}>
            <h2 className="title has-text-primary has-text-centered is-spaced">
              {_f("blogTitle")}
            </h2>
            <p className="has-text-centered mb-6">
              {_f("blogText")}
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
            {_f("readMore")}
          </a>
        </Link>
      </div>
    </Section>
  )
}

export default BlogSection;