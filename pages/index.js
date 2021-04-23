import Hero from '../components/homepage/Hero';
import Head from 'next/head';
import AboutSection from '../components/homepage/AboutSection';
import Portfolio from '../components/homepage/Portfolio';
import BlogSection from '../components/homepage/BlogSection';
import { getAllPosts } from '../lib/api';

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  const githubResponse = await fetch('https://api.github.com/users/isaacpontes')
    .then(res => res.json());

  return {
    props: {
      avatarUrl: githubResponse.avatar_url,
      allPosts
    }
  }
}

export default function Home({ avatarUrl, allPosts }) {
  const lastPosts = allPosts.slice(0, 3);
  return (
    <>
      <Head>
        <meta property="og:image" content={avatarUrl} />
        <meta property="twitter:image" content={avatarUrl} />
      </Head>
      <Hero />
      <AboutSection />
      <Portfolio />
      <BlogSection posts={lastPosts} />
    </>
  )
}
