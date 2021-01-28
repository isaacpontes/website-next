import Hero from '../components/Hero'
import Head from 'next/head';

export async function getStaticProps() {
  const githubResponse = await fetch('https://api.github.com/users/isaacpontes')
    .then(res => res.json());

  return {
    props: {
      avatarUrl: githubResponse.avatar_url,
    }
  }
}

export default function Home({ avatarUrl }) {
  return (
    <>
      <Head>
        <meta property="og:image" content={avatarUrl} />
        <meta property="twitter:image" content={avatarUrl} />
      </Head>
      <Hero/>
    </>
  )
}
