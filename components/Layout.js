import Head from 'next/head'
import Navbar from './Navbar'

const Layout = ({ children, avatarUrl }) => {
  return (
    <>
      <Head>
        <title>Isaac Pontes | Desenvolvedor Full Stack</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Isaac Pontes | Desenvolvedor Full Stack" />
        <meta name="description" content="Olá, eu sou Isaac Pontes. Eu construo sites e aplicações otimizados e amigáveis utilizando tecnologias web modernas." />
        <meta name="title" content="Isaac Pontes | Desenvolvedor Full Stack" />
        <meta name="description" content="Olá, eu sou Isaac Pontes. Eu construo sites e aplicações otimizados e amigáveis utilizando tecnologias web modernas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://isaacpontes.vercel.app/" />
        <meta property="og:title" content="Isaac Pontes | Desenvolvedor Full Stack" />
        <meta property="og:description" content="Olá, eu sou Isaac Pontes. Eu construo sites e aplicações otimizados e amigáveis utilizando tecnologias web modernas." />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://isaacpontes.vercel.app/" />
        <meta property="twitter:title" content="Isaac Pontes | Desenvolvedor Full Stack" />
        <meta property="twitter:description" content="Olá, eu sou Isaac Pontes. Eu construo sites e aplicações otimizados e amigáveis utilizando tecnologias web modernas." />
      </Head>
      <Navbar />

      <main>
        { children }
      </main>
    </>
  )
}

export default Layout;