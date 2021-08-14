import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Isaac Pontes | Full Stack Developer" />
        <meta name="description" content="Hello, there! I'm Isaac, a full-stack web developer specialized in Node.js and PHP." />
        <meta name="title" content="Isaac Pontes | Full Stack Developer" />
        <meta name="description" content="Hello, there! I'm Isaac, a full-stack web developer specialized in Node.js and PHP." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://isaacpontes.vercel.app/" />
        <meta property="og:title" content="Isaac Pontes | Full Stack Developer" />
        <meta property="og:description" content="Hello, there! I'm Isaac, a full-stack web developer specialized in Node.js and PHP." />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://isaacpontes.vercel.app/" />
        <meta property="twitter:title" content="Isaac Pontes | Full Stack Developer" />
        <meta property="twitter:description" content="Hello, there! I'm Isaac, a full-stack web developer specialized in Node.js and PHP." />
      </Head>
      <Navbar />

      <main>
        { children }
      </main>

      <Footer />
    </>
  )
}