import Head from 'next/head'
import { styled, getCssText } from '../styles/stitches.config'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import MainLanding from '../components/MainLanding'

const Layout = styled('div', {
  minHeight: '100vh',
  background: '#fff',
  position: 'relative',
})

export default function Home() {
  return (
    <>
      <Head>
        <title>KALI</title>
        <meta property="og:title" content="KALI" key="title" />
        <meta name="viewport" content="width=800" />
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>
      <Layout>
        <Header />
        <Sidebar />
        <MainLanding />
      </Layout>
    </>
  )
}
