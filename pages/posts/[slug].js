import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import Container from "../../components/common/Container";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import PostHeader from "../../components/post/PostHeader";
import PostBody from "../../components/post/PostBody";
import PostTitle from "../../components/post/PostTitle";
import CoverImage from "../../components/blog/CoverImage";
import Section from "../../components/common/Section";
import Columns from "../../components/common/Columns";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Container>
      {router.isFallback ? (
        <PostTitle>Carregando...</PostTitle>
      ) : (
        <>
          <article className="mb-6">
            <Head>
              <title>{post.title} | Isaac Pontes </title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <div className="mt-4">
              <CoverImage title={post.title} src={post.coverImage} height={620} width={1240} />
            </div>
            <Section>
              <Columns hcenter={true}>
                <Columns.Column size={8}>
                  <PostHeader
                    title={post.title}
                    date={post.date}
                    author={post.author}
                  />
                  <PostBody content={post.content} />
                </Columns.Column>
              </Columns>
            </Section>
          </article>
        </>
      )}
    </Container>
  )
}

export async function getStaticProps({ params, locale }) {
  const post = getPostBySlug(locale, params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths({ locales }) {
  const paths = [];

  locales.forEach((locale) => {
    const localePosts = getAllPosts(locale, ['slug']);

    localePosts.forEach((post) => {
      paths.push({
        params: {
          slug: post.slug,
        },
        locale: locale,
      });
    });

  });

  return {
    paths,
    fallback: false,
  }
}