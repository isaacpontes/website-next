import Head from 'next/head';
import HeroSection from "../components/homepage/HeroSection";
import AboutSection from '../components/homepage/AboutSection';
import Portfolio from '../components/homepage/Portfolio';
import BlogSection from '../components/homepage/BlogSection';
import { getAllPosts } from '../lib/api';
import { useIntl } from "react-intl";

export default function Home({ avatarUrl, allPosts }) {
  const lastPosts = allPosts.slice(0, 3);

  const { formatMessage } = useIntl();
  const _f = (id) => formatMessage({ id });

  return (
    <>
      <Head>
        <title>{_f("siteTitle")}</title>
        <meta property="og:image" content={avatarUrl} />
        <meta property="twitter:image" content={avatarUrl} />
      </Head>
      <HeroSection />
      <AboutSection />
      <Portfolio />
      <BlogSection posts={lastPosts} />
    </>
  )
}

export async function getStaticProps({ locale }) {
  const allPosts = getAllPosts(locale, [
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
      avatarUrl: "githubResponse.avatar_url",
      allPosts
    }
  }
}
