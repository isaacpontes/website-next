import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Isaac Pontes | Desenvolvedor Full Stack</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Isaac Pontes | Desenvolvedor Full Stack" />
        <meta name="description" content="O desenvolvedor em quem você pode confiar" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://isaacpontes.vercel.app/" />
        <meta property="og:title" content="Isaac Pontes | Desenvolvedor Full Stack" />
        <meta property="og:description" content="O desenvolvedor em quem você pode confiar" />
        <meta property="og:image" content="/screenshot.webp" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://isaacpontes.vercel.app/" />
        <meta property="twitter:title" content="Isaac Pontes | Desenvolvedor Full Stack" />
        <meta property="twitter:description" content="O desenvolvedor em quem você pode confiar" />
        <meta property="twitter:image" content="screenshot.webp" />
      </Head>
      <Navbar />

      <main className="">
        { children }
      </main>
    </>
  )
}