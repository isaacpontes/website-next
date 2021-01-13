import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Isaac Pontes | Desenvolvedor Full Stack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className="">
        { children }
      </main>
    </>
  )
}