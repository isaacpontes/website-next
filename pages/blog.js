import Container from "../components/common/Container";
import Intro from "../components/blog/Intro";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Section from "../components/common/Section";
import HeroPost from "../components/blog/HeroPost";
import MoreStories from "../components/blog/MoreStories";

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <>
      <Head>
        <title>Isaac Pontes | Blog</title>
      </Head>
      <Section color="white">
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Section>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}