import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Isaac Pontes | Desenvolvedor Web" />
        <meta name="description" content="Criação de sites e aplicações web modernas utilizando PHP e React." />
        <meta name="title" content="Isaac Pontes | Desenvolvedor Web" />
        <meta name="description" content="Criação de sites e aplicações web modernas utilizando PHP e React." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://isaacpontes.vercel.app/" />
        <meta property="og:title" content="Isaac Pontes | Desenvolvedor Web" />
        <meta property="og:description" content="Criação de sites e aplicações web modernas utilizando PHP e React." />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://isaacpontes.vercel.app/" />
        <meta property="twitter:title" content="Isaac Pontes | Desenvolvedor Web" />
        <meta property="twitter:description" content="Criação de sites e aplicações web modernas utilizando PHP e React." />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
}